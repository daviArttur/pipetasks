// Assets
import { IoPersonOutline } from 'react-icons/io5';
import { HiOutlineLockClosed, HiOutlineMail } from 'react-icons/hi';

// Handle Form
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Components
import { Span, Text } from '../../assets/reusableItens';
import { Input } from '../../components/Input';
import { ContainerColumn, ContainerRow } from '../../assets/containers';

// Styles
import { SignUpContainer, SignUpContent, SignUpHero } from './styles';

// Api
import { cadastryUser } from '../api/user/cadastry';

// Next
import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

interface FormRegisterInputs {
  name: string;
  surname: string;
  email: string;
  password: string;
}

const signUpFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  name: yup.string().required('Nome obrigatório'),
  surname: yup.string().required('Sobrenome obrigatório'),
  password: yup.string().required('Senha obrigatória').min(8, "Senha miníma de 8 caracteres"),
});

const SignUp: NextPage = (props) => {
  const { register, handleSubmit, formState } = useForm<FormRegisterInputs>({
    resolver: yupResolver(signUpFormSchema),
  });

  const { errors } = formState;
  const router = useRouter();
  const handleSignUp: SubmitHandler<FormRegisterInputs> = async (inputValues: FormRegisterInputs) => {

    const { error } = await cadastryUser(inputValues)

    if (!error) {
      router.push("/entrar")
    }
  };

  return (
    <>
      <Head>
        <title>Pipe Tasks</title>
        <meta
          name="description"
          content="Adiucionar uma descrição maneira para a página home"
        />
      </Head>

      <SignUpContainer height="100vh" as="main">
        <SignUpContent
          width="36.375rem"
          as="section"
          gap="2rem"
          align="center"
          justify="center"
        >
          <img src="Logo" alt="Logo" />
          <ContainerColumn gap="1rem" align="center">
            <Text variant="texting2">Registre-se agora</Text>
            <ContainerColumn
              gap="1.5rem"
              align="center"
              as="form"
              onSubmit={handleSubmit(handleSignUp)}
            >
              <ContainerColumn gap="5px" align="flex-start">
                <ContainerRow
                  width="17.5rem"
                  padding="0 0 0 4px"
                  borderBottom={
                    !!errors.name
                      ? 'solid 2px var(--red)'
                      : 'solid 2px var(--black-800)'
                  }
                  align="center"
                  justify="space-between"
                >
                  <Input
                    type="text"
                    placeholder="Nome"
                    {...register('name')}
                    error={errors.name}
                  />
                  <IoPersonOutline
                    color={!!errors.name ? 'var(--red)' : 'var(--black-800)'}
                    font-size="1.125rem"
                  />
                </ContainerRow>
                {!!errors.name && (
                  <Text
                    variant="texting8"
                    color="var(--red)"
                    align="left"
                    padding="0 0 0 4px"
                  >
                    {errors.name.message}
                  </Text>
                )}
              </ContainerColumn>
              <ContainerColumn gap="5px" align="flex-start">
                <ContainerRow
                  width="17.5rem"
                  padding="0 0 0 4px"
                  borderBottom={
                    !!errors.surname
                      ? 'solid 2px var(--red)'
                      : 'solid 2px var(--black-800)'
                  }
                  align="center"
                  justify="space-between"
                >
                  <Input
                    type="text"
                    placeholder="Sobrenome"
                    {...register('surname')}
                    error={errors.surname}
                  />
                  <IoPersonOutline
                    color={!!errors.surname ? 'var(--red)' : 'var(--black-800)'}
                    font-size="1.125rem"
                  />
                </ContainerRow>
                {!!errors.surname && (
                  <Text
                    variant="texting8"
                    color="var(--red)"
                    align="left"
                    padding="0 0 0 4px"
                  >
                    {errors.surname.message}
                  </Text>
                )}
              </ContainerColumn>
              <ContainerColumn gap="5px" align="flex-start">
                <ContainerRow
                  width="17.5rem"
                  padding="0 0 0 4px"
                  borderBottom={
                    !!errors.email
                      ? 'solid 2px var(--red)'
                      : 'solid 2px var(--black-800)'
                  }
                  align="center"
                  justify="space-between"
                >
                  <Input
                    type="email"
                    placeholder="E-mail"
                    {...register('email')}
                    error={errors.email}
                  />
                  <HiOutlineMail
                    color={!!errors.email ? 'var(--red)' : 'var(--black-800)'}
                    font-size="1.125rem"
                  />
                </ContainerRow>
                {!!errors.email && (
                  <Text
                    variant="texting8"
                    color="var(--red)"
                    align="left"
                    padding="0 0 0 4px"
                  >
                    {errors.email.message}
                  </Text>
                )}
              </ContainerColumn>
              <ContainerColumn gap="5px" align="flex-start">
                <ContainerRow
                  width="17.5rem"
                  padding="0 0 0 4px"
                  borderBottom={
                    !!errors.password
                      ? 'solid 2px var(--red)'
                      : 'solid 2px var(--black-800)'
                  }
                  align="center"
                  justify="space-between"
                >
                  <Input
                    type="password"
                    placeholder="Senha"
                    {...register('password')}
                    error={errors.password}
                  />
                  <HiOutlineLockClosed
                    color={
                      !!errors.password ? 'var(--red)' : 'var(--black-800)'
                    }
                    font-size="1.125rem"
                  />
                </ContainerRow>
                {!!errors.password && (
                  <Text
                    variant="texting8"
                    color="var(--red)"
                    align="left"
                    padding="0 0 0 4px"
                  >
                    {errors.password.message}
                  </Text>
                )}
              </ContainerColumn>
              <button type="submit">Registre-se</button>
            </ContainerColumn>
          </ContainerColumn>

          <ContainerColumn align="center" gap="2rem">
            <Text as="p" variant="texting6">
              Esqueci minha Senha
            </Text>
            <ContainerRow gap="0.75rem" align="center">
              <Text as="p" variant="texting7">
                Já tem uma conta?
              </Text>
              <Link href="/entrar">
                <a>
                  <Span variant="texting8">Faça login</Span>
                </a>
              </Link>
            </ContainerRow>
          </ContainerColumn>
        </SignUpContent>

        <SignUpHero as="section" width="100%" height="100%" />
      </SignUpContainer>
    </>
  );
};

export default SignUp;

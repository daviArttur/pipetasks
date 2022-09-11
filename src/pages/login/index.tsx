import Head from 'next/head';
import { ContainerColumn, ContainerRow } from '../../assets/containers';
import { Span, Text } from '../../assets/reusableItens';

interface LoginProps {}

const Login = (): LoginProps => {
  return (
    <>
      <Head>
        <title>Pipe Tasks</title>
        <meta
          name="description"
          content="Adiucionar uma descrição maneira para a página home"
        />
      </Head>

      <ContainerRow height="100vh" as="main">
        <ContainerColumn
          as="section"
          background="var(--gray-400)"
          width="100%"
          gap="3.5rem"
          align="center"
          justify="center"
        >
          <img src="" alt="Imagem" />
          <ContainerColumn mw="32.68rem" align="flex-start" gap="0.75rem">
            <Text variant="texting1">
              Mantenha sua vida mais simples e gerencie as tarefas da sua equipe
            </Text>
            <Text variant="texting6" as="h3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Text>
          </ContainerColumn>
        </ContainerColumn>

        <ContainerColumn
          width="36.375rem"
          as="section"
          gap="2rem"
          align="center"
          justify="center"
        >
          <img src="Logo" alt="Logo" />
          <ContainerColumn gap="1rem" align="center">
            <Text variant="texting2">Faça seu login</Text>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Senha" />
            <button>Entrar</button>
          </ContainerColumn>

          <ContainerColumn align="center" gap="2rem">
            <Text as="p" variant="texting6">
              Esqueci minha Senha
            </Text>
            <ContainerRow gap="0.75rem" align="center">
              <Text as="p" variant="texting7">
                Ainda não tem uma conta?
              </Text>
              <Span variant="texting8">Crie agora</Span>
            </ContainerRow>
          </ContainerColumn>
        </ContainerColumn>
      </ContainerRow>
    </>
  );
};

export default Login;

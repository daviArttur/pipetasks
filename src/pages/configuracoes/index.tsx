// Context
import { useThemeContext } from '../../context/themeContext';

// Next
import Head from 'next/head';
import { GetStaticPropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';

// Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ConfigSection from './components/ConfigSection';
import ConfigItem from './components/ConfigItem';
import Sidebar from '../../components/Sidebar';

// Styles
import { Button, Text } from '../../assets/reusableItens';
import { ContainerColumn, ContainerRow } from '../../assets/containers';

// HOC
import { withAuth } from '../../helper/withAuth';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../redux/slices/user/userSlice';

// Cookies
import { destroyCookie } from 'nookies';

// Api
import { deleteAccount } from '../api/user/deleteAccount';

// Components
import { ErrorModal } from '../../components/ErrorModal/ErrorModal';
// Types
import type{ RootState } from '../../redux/store';

const Settings: NextPage = () => {
  const { theme, toggleTheme } = useThemeContext();
  const { error } = useSelector((state: RootState) => state.error);
  const openSidebarState = useSelector((state: RootState) => state.sidebar.openModal);
  const dispatch = useDispatch();
  const router = useRouter();

  function handleLogOut() {
    destroyCookie(null, "token")
    destroyCookie(null, "cacheAuth")
    dispatch(removeUser());
    router.push("/entrar")
  };

  async function handleDeleteAccount() {
    const { error } = await deleteAccount();
    if (!error) handleLogOut();
  }

  return (
    <>
      <Head>
        <title>Pipe Tasks - Configurações</title>
      </Head>
      { error && <ErrorModal /> }
      <ContainerRow
        background={theme.colors.background}
        height="100%"
        width="100%"
      >
        <Sidebar />
        <Footer />
        <ContainerColumn
          width="100%"
          padding={!openSidebarState ? "0 0 0 5rem" : "0 0 0 21.563rem"}
          height="100%"
          as="main"
        >
          <Header />
          <ContainerColumn
            align="center"
            padding="2rem"
            gap="3rem"
            width="100%"
          >
            <ConfigSection title="Minha conta" subtitle="Informações Pessoais">
              <ConfigItem
                item="Informações Pessoais"
                description="natalia.nunes@gmail.com"
              />
              <ConfigItem item="Informações Pessoais">
                <input placeholder="Insira seu nome aqui " />
              </ConfigItem>
              <ConfigItem
                item="Log out"
                description="Você será desconectado de todas as sessões ativas e terá que fazer login novamente."
              >
                <Button variant="removed" onClick={handleLogOut}>Log Out</Button>
              </ConfigItem>
              <ConfigItem
                item="Deletar minha conta"
                description="Essa ação não pode ser desfeita"
              >
                <Button onClick={handleDeleteAccount} variant="removed">Deletar minha conta</Button>
              </ConfigItem>
            </ConfigSection>
            <ConfigSection title="Minhas configurações">
              <ConfigItem item="Aparência">
                <ContainerRow
                  align="center"
                  width="100%"
                  justify="space-between"
                >
                  <Text variant="texting6" color={theme.colors.title} as="p">
                    Customize a aparência da sua aplicação
                  </Text>
                  <select onChange={toggleTheme}>
                    <option onClick={toggleTheme}>Light</option>
                    <option onClick={toggleTheme}>Dark</option>
                  </select>
                  <button onClick={toggleTheme}>{theme.name}</button>
                </ContainerRow>
              </ConfigItem>
            </ConfigSection>
          </ContainerColumn>
        </ContainerColumn>
      </ContainerRow>
    </>
  );
};

export const getServerSideProps = withAuth( async (ctx: GetStaticPropsContext) => {
  return { props: {} }
})

export default Settings;

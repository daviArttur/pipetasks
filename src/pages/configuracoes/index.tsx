import { ContainerColumn, ContainerRow } from '../../assets/containers';
import Sidebar from '../../components/Sidebar';
import { useTheme } from 'styled-components';
import { useThemeContext } from '../../context/themeContext';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ConfigSection from './components/ConfigSection';
import ConfigItem from './components/ConfigItem';

interface SettingsProps {}

const Settings = (): SettingsProps => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <>
      <Head>
        <title>Pipe Tasks - Configurações</title>
      </Head>
      <ContainerRow
        background={theme.colors.background}
        height="100%"
        width="100%"
      >
        <Sidebar />
        <Footer />
        <ContainerColumn
          width="100%"
          padding="0 0 0 21.563rem"
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
                <button>Log Out</button>
              </ConfigItem>
              <ConfigItem
                item="Deletar minha conta"
                description="Essa ação não pode ser desfeita"
              >
                <button>Deletar minha conta</button>
              </ConfigItem>
            </ConfigSection>
            <ConfigSection title="Minhas configurações">
              <ConfigItem item="Aparência" />
            </ConfigSection>
          </ContainerColumn>
        </ContainerColumn>
      </ContainerRow>
    </>
  );
};

export default Settings;

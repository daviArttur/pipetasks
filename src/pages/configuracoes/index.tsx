import { ContainerRow } from '../../assets/containers';
import Sidebar from '../../components/Sidebar';
import { useTheme } from 'styled-components';
import { useThemeContext } from '../../context/themeContext';

interface SettingsProps {}

const Settings = (): SettingsProps => {
  const theme = useThemeContext();

  console.log(theme);
  return (
    <ContainerRow background="var(--white-100)">
      <Sidebar />
    </ContainerRow>
  );
};

export default Settings;

// Redux
import { useSelector } from 'react-redux';

// Components
import { Text } from '../../../assets/reusableItens';
import { ContainerColumn, ContainerRow } from '../../../assets/containers';

// Context
import { useThemeContext } from '../../../context/themeContext';

// Types
import type { RootState } from '../../../redux/store';

interface NavInfoProps {}

const NavInfo = ({}: NavInfoProps) => {

  const { theme } = useThemeContext();
  const state = useSelector((state: RootState) => state)
  const userName = state.user.userData?.name
  const openSidebarState = state.sidebar.openModal
  return (
    <ContainerRow
      justify={openSidebarState ? "space-between" : "center" }
      padding="0 1rem"
      width="100%"
      borderBottom="solid 1px var(--gray-800)"
      height="5.438rem"
      align="center"
    >
      <ContainerRow
        background="blue"
        width={openSidebarState ? "56px" : "42px"}
        height={openSidebarState ? "56px" : "42px"}
        borderRadius="100%"
        margin={openSidebarState ? '0 0 0.3rem 0' : "0 0 0.9rem 0" }
      />

      { openSidebarState && (
        <ContainerColumn align="flex-start">
          <Text variant="texting5" color={theme.colors.title} as="h2">
          {userName}
          </Text>
          <Text variant="texting7" color={theme.colors.subtitle} as="h3">
            Advogada
          </Text>
        </ContainerColumn>
      )}
    </ContainerRow>
  );
};

export default NavInfo;

// Components
import { ContainerRow } from '../../../assets/containers';
import { Text } from '../../../assets/reusableItens';

// Assets
import { MdMenuOpen } from 'react-icons/md';

// Context
import { useThemeContext } from '../../../context/themeContext';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { toogleSidebar } from '../../../redux/slices/sidebar/sidebar';

// Types
import { RootState } from '../../../redux/store';

interface NavHeaderProps {}

const NavHeader = ({}: NavHeaderProps) => {

  const dispatch = useDispatch();
  const { theme } = useThemeContext();
  const openSidebarState = useSelector((state: RootState) => state.sidebar.openModal)
  const handleSidebar = () => {
    dispatch(toogleSidebar())
  };

  return (
    <ContainerRow
      as="header"
      borderBottom="1px solid var(--gray-800)"
      align="center"
      justify="space-between"
      padding="0 2rem"
      width="100%"
      height="5.438rem"
    >


    { openSidebarState && (
      <Text color={theme.colors.title} variant="texting3">
        Dashboard
      </Text>
    )}

      <MdMenuOpen onClick={handleSidebar}color="var(--gray-800)" fontSize="1.5rem" cursor="pointer"/>
    </ContainerRow>
  );
};

export default NavHeader;

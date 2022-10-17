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
import { useState } from 'react';

const NavHeader = () => {
  const dispatch = useDispatch();
  const { theme } = useThemeContext();
  const openSidebarState = useSelector((state: RootState) => state.sidebar.openModal);
  const [ directionIcon, setDirectionIcon ] = useState<boolean>(false);

  const handleSidebar = () => {
    setDirectionIcon(!directionIcon);
    dispatch(toogleSidebar());
  };

  return (
    <ContainerRow
      as="header"
      borderBottom="1px solid var(--gray-800)"
      align="center"
      justify={ directionIcon ? "center" : "space-between" }
      width="100%"
      height="5.438rem"
      padding={ directionIcon ? "0" : "0 2rem" }
    >


      { openSidebarState && (
        <Text color={theme.colors.title} variant="texting3">
          Dashboard
        </Text>
      )}

      <MdMenuOpen 
        style={{
          alignSelf: "center",
          fontSize: "24px",
          transform: directionIcon ? 'rotate(180deg)' : 'rotate(0)',
        }} 
        onClick={handleSidebar} 
        color="var(--gray-800)" 
        cursor="pointer"/>
    </ContainerRow>
  );
};

export default NavHeader;

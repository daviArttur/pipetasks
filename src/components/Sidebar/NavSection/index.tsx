// Redux 
import { useSelector } from 'react-redux';

// Context
import { useThemeContext } from '../../../context/themeContext';

// Components
import { ContainerColumn, ContainerRow } from '../../../assets/containers';
import { IoIosArrowDown } from 'react-icons/io';
import { Text } from '../../../assets/reusableItens';

// Types
import type { RootState } from '../../../redux/store';
import type { NavSectionProps } from './interface';

const NavSection = ({ title, children }: NavSectionProps) => {

  const { theme } = useThemeContext();
  const openSidebarState = useSelector((state: RootState) => state.sidebar.openModal);

  return (
    <ContainerColumn
      align="flex-start"
      padding="2rem 1rem"
      gap="1.5rem"
      borderBottom="solid 1px var(-gray-200)"
      width="100%"
    >
      <ContainerRow
        as="header"
        width="100%"
        gap="4px"
        align="center"
        justify="space-between"
      >
        { openSidebarState && (
          <>
            <Text
            transform="uppercase"
            variant="texting5"
            color={theme.colors.subtitle}
            >
              {title}
            </Text>
            <IoIosArrowDown fontSize="20px" color="var(--blue)" />
          </>
        )}
        
      </ContainerRow>
      {children}
    </ContainerColumn>
  );
};

export default NavSection;

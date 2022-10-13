// Next
import Link from 'next/link';

// Redux
import { useSelector } from 'react-redux';

// Components
import { ContainerRow } from '../../../assets/containers';
import { Text } from '../../../assets/reusableItens';

// Context
import { useThemeContext } from '../../../context/themeContext';

// Types
import type { RootState } from '../../../redux/store';
import type { NavLinkProps } from './interface';

const NavLink = ({ title, notifications, href, children }: NavLinkProps) => {
  const { theme } = useThemeContext();
  const openModalState = useSelector((state: RootState) => state.sidebar.openModal)

  return (
    <ContainerRow width="100%" align="center" justify={openModalState ? "space-between" : "center" }>
      <Link href={href}>
        <a>
          <ContainerRow gap="8px" align="center">
            {/* <AiOutlineHome fontSize="1.5rem" color="var(--blue)" /> */}
            {children}

            { openModalState && (
              <Text color={theme.colors.title} variant="texting5" as="h3">
                {title}
              </Text>
            )}
          </ContainerRow>
        </a>
      </Link>

      { openModalState && (
        <ContainerRow
        width="1.5rem"
        align="center"
        justify="center"
        height="1.5rem"
        borderRadius="100%"
        background={theme.colors.notifications.background}
      >
        <Text
          variant="texting8"
          color={theme.colors.notifications.color}
          as="p"
        >
          {notifications}
        </Text>
      </ContainerRow>
      )}
    </ContainerRow>
  );
};

export default NavLink;

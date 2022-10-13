import styled from 'styled-components';
import { ContainerColumn } from '../../assets/containers';

export const SideBarContainer = styled(ContainerColumn)`
  height: 100vh;
  position: fixed;
  width: ${(props) => props.background ?? props.background };
  @media (max-width: 1120px) {
    display: none;
  }
`;

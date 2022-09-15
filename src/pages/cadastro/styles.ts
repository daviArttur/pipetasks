import styled from 'styled-components';
import { ContainerColumn, ContainerRow } from '../../assets/containers';

export const SignUpContainer = styled(ContainerRow)`
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const SignUpHero = styled(ContainerRow)`
  background: url('/SignUp.jpg'), #c7ced9;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const SignUpContent = styled(ContainerColumn)`
  button {
    width: 16rem;
    height: 3.375rem;
    padding: 1rem 0;

    background: var(--blue);
    border-radius: 10px;
    border: none;

    color: var(--white-200);
    font-size: 1rem;
    font-weight: 500;

    cursor: pointer;
  }

  @media (max-width: 650px) {
    width: 100%;

    padding: 3rem;
    gap: 5rem;
  }
`;

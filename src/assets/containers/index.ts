import styled from 'styled-components';
import { ContainerProps } from './interface';

export const ContainerColumn = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  gap: ${props => props.gap ?? props.gap};

  align-items: ${props => props.align ?? props.align};
  justify-content: ${props => props.justify ?? props.justify};

  padding: ${props => props.padding ?? props.padding};
  margin: ${props => props.margin ?? props.margin};

  width: ${props => props.width ?? props.width};
  max-width: ${props => props.mw ?? props.mw};
  height: ${props => props.height ?? props.height};
  max-height: ${props => props.mh ?? props.mh};

  background: ${props => props.background ?? props.background};
  background-image: ${props => props.backgroundImage ?? props.backgroundImage};
  background-size: ${props => props.backgroundSize ?? props.backgroundSize};
  background-repeat: ${props =>
    props.backgroundRepeat ?? props.backgroundRepeat};

  border: ${props => props.border ?? props.border};
  border-radius: ${props => props.borderRadius ?? props.borderRadius};
`;

export const ContainerRow = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;

  gap: ${props => props.gap ?? props.gap};

  align-items: ${props => props.align ?? props.align};
  justify-content: ${props => props.justify ?? props.justify};

  padding: ${props => props.padding ?? props.padding};
  margin: ${props => props.margin ?? props.margin};

  width: ${props => props.width ?? props.width};
  max-width: ${props => props.mw ?? props.mw};
  height: ${props => props.height ?? props.height};
  max-height: ${props => props.mh ?? props.mh};

  background: ${props => props.background ?? props.background};
  background-image: ${props => props.backgroundImage ?? props.backgroundImage};
  background-size: ${props => props.backgroundSize ?? props.backgroundSize};
  background-repeat: ${props =>
    props.backgroundRepeat ?? props.backgroundRepeat};

  border: ${props => props.border ?? props.border};
  border-radius: ${props => props.borderRadius ?? props.borderRadius};
`;

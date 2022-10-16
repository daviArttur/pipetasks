import styled from 'styled-components';
import { ContainerProps } from './interface';

export const ContainerColumn = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  gap: ${(props) => props.gap ?? props.gap};

  align-items: ${(props) => props.align ?? props.align};
  justify-content: ${(props) => props.justify ?? props.justify};

  padding: ${(props) => props.padding ?? props.padding};
  margin: ${(props) => props.margin ?? props.margin};

  width: ${(props) => props.width ?? props.width};
  min-height: ${(props) => props.minHeight ?? props.minHeight};
  max-width: ${(props) => props.mw ?? props.mw};
  height: ${(props) => props.height ?? props.height};
  max-height: ${(props) => props.mh ?? props.mh};

  background: ${(props) => props.background ?? props.background};
  background-image: ${(props) => props.backgroundImage ?? props.backgroundImage};
  background-size: ${(props) => props.backgroundSize ?? props.backgroundSize};
  background-repeat: ${(props) => props.backgroundRepeat ?? props.backgroundRepeat};

  border: ${(props) => props.border ?? props.border};
  border-radius: ${(props) => props.borderRadius ?? props.borderRadius};
  border-bottom: ${(props) => props.borderBottom ?? props.borderBottom};
  border-top: ${(props) => props.borderTop ?? props.borderTop};
  border-right: ${(props) => props.borderRight ?? props.borderRight};
  border-left: ${(props) => props.borderLeft ?? props.borderLeft};

  overflow: ${(props) => props.overflow ?? props.overflow};
  position: ${(props) => props.position ?? props.position};
  left: ${(props) => props.left ?? props.left};
  right: ${(props) => props.right ?? props.right};
  top: ${(props) => props.top ?? props.top};
  bottom: ${(props) => props.bottom ?? props.bottom};
`;

export const ContainerRow = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap ?? props.gap};

  align-items: ${(props) => props.align ?? props.align};
  justify-content: ${(props) => props.justify ?? props.justify};

  padding: ${(props) => props.padding ?? props.padding};
  margin: ${(props) => props.margin ?? props.margin};

  width: ${(props) => props.width ?? props.width};
  max-width: ${(props) => props.mw ?? props.mw};
  height: ${(props) => props.height ?? props.height};
  max-height: ${(props) => props.mh ?? props.mh};

  background: ${(props) => props.background ?? props.background};
  background-image: ${(props) =>
    props.backgroundImage ?? props.backgroundImage};
  background-size: ${(props) => props.backgroundSize ?? props.backgroundSize};
  background-repeat: ${(props) =>
    props.backgroundRepeat ?? props.backgroundRepeat};

  border: ${(props) => props.border ?? props.border};
  border-radius: ${(props) => props.borderRadius ?? props.borderRadius};
  border-bottom: ${(props) => props.borderBottom ?? props.borderBottom};
  border-top: ${(props) => props.borderTop ?? props.borderTop};
  border-right: ${(props) => props.borderRight ?? props.borderRight};
  border-left: ${(props) => props.borderLeft ?? props.borderLeft};
`;

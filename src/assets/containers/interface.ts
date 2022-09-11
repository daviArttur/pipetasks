export interface ContainerProps {
  gap?: string;
  align?: string;
  justify?: string;
  padding?: string;
  margin?: string;

  width?: string;
  mw?: string;
  height?: string;
  mh?: string;

  background?: string;
  backgroundRepeat?: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';
  backgroundSize?: string;
  backgroundImage?: string;

  border?: string;
  borderRadius?: string;
}
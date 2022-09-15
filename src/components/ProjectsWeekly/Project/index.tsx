import { AiOutlineComment } from 'react-icons/ai';
import { BsCalendarWeek } from 'react-icons/bs';
import { FaTasks } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { ContainerColumn, ContainerRow } from '../../../assets/containers';
import { Text } from '../../../assets/reusableItens';

interface ProjectProps {}

const Project = ({}: ProjectProps) => {
  const theme = useTheme();
  return (
    <ContainerRow
      align="center"
      justify="space-between"
      padding="1rem"
      gap="1.5rem"
      width="100%"
      background={theme.colors.tasks.background}
      borderRadius="1rem"
    >
      <ContainerRow gap="1.5rem" align="center">
        <FaTasks color="var(--blue)" />
        <ContainerColumn justify="center" align="flex-start" gap="8px">
          <Text variant="texting2" color={theme.colors.title}>
            Nome do projeto
          </Text>

          <ContainerRow gap="8px" align="center">
            <BsCalendarWeek fontSize="0.75rem" color={theme.colors.subtitle} />
            <Text variant="texting7" color={theme.colors.subtitle}>
              01/06/2022
            </Text>
            <Text variant="texting7" color={theme.colors.subtitle}>
              |
            </Text>
            <AiOutlineComment
              fontSize="0.75rem"
              color={theme.colors.subtitle}
            />
            <Text variant="texting7" color={theme.colors.subtitle}>
              9 Comentários
            </Text>
          </ContainerRow>
        </ContainerColumn>
      </ContainerRow>

      <Text
        variant="texting7"
        color={theme.colors.title}
        mw="13.125rem"
        align="left"
      >
        Descriçao básica do projeto com um limite de caracteres
      </Text>

      <ContainerColumn justify="center" gap="8px">
        Colaboradores
        <ContainerRow align="center" gap="8px">
          <ContainerRow
            width="32px"
            height="32px"
            background="blue"
            borderRadius="100%"
          />
        </ContainerRow>
      </ContainerColumn>

      <ContainerColumn align="flex-start" justify="center" gap="8px">
        <Text variant="texting6" color={theme.colors.title}>
          50% completo
        </Text>
        <progress value={50} max={100}>
          50
        </progress>
      </ContainerColumn>

      <ContainerRow
        width="50px"
        height="50px"
        borderRadius="100%"
        background="var(--blue)"
      />
    </ContainerRow>
  );
};

export default Project;

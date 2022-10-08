import { ContainerColumn, ContainerRow } from '../../../assets/containers';
import { FaTasks } from 'react-icons/fa';
import { Text } from '../../../assets/reusableItens';
import { BsCalendarWeek } from 'react-icons/bs';
import { AiOutlineComment } from 'react-icons/ai';
import { useThemeContext } from '../../../context/themeContext';
import { ITask } from '../../../interface/task';
import { formatDate } from '../../../helper/formatDate';

interface TaskProps {
  data: ITask
}

const Task = ({ data }: TaskProps) => {
  const { theme } = useThemeContext();

  if (data) {
    const { _id, descripton, finished, title, userId, createdAt } = data
    return (
      <ContainerRow
        justify="space-between"
        align="center"
        gap="1.5rem"
        padding="1rem"
        background={theme.colors.tasks.background}
        borderRadius="1rem"
        width="100%"
      >
        <ContainerRow gap="1.5rem" align="center">
          <FaTasks color="var(--blue)" />
          <ContainerColumn justify="center" align="flex-start" gap="8px">
            <Text variant="texting2" color={theme.colors.title} as="h2">
              {title}
            </Text>

            <ContainerRow gap="8px" align="center">
              <BsCalendarWeek fontSize="0.75rem" color={theme.colors.subtitle} />
              <Text variant="texting7" color={theme.colors.subtitle} as="p">
                {formatDate(createdAt)}
              </Text>
              <Text variant="texting7" color={theme.colors.subtitle} as="p">
                |
              </Text>
              <AiOutlineComment
                fontSize="0.75rem"
                color={theme.colors.subtitle}
              />
              <Text variant="texting7" color={theme.colors.subtitle} as="p">
                9 Comentários
              </Text>
            </ContainerRow>
          </ContainerColumn>
        </ContainerRow>

        <ContainerColumn justify="center" gap="8px">
          <Text variant="texting6" color={theme.colors.subtitle} as="p">
            Colaboradores
          </Text>
          <ContainerRow align="center" gap="8px">
            <ContainerRow
              width="32px"
              height="32px"
              background="blue"
              borderRadius="100%"
            />
          </ContainerRow>
        </ContainerColumn>

        <ContainerColumn justify="center" gap="8px" align="flex-start">
          <Text variant="texting6" color={theme.colors.subtitle} as="p">
            Data de vencimento
          </Text>
          <Text variant="texting7" color={theme.colors.subtitle} as="p">
            12/12/2022
          </Text>
        </ContainerColumn>

        <ContainerRow
          width="50px"
          height="50px"
          borderRadius="100%"
          background="var(--blue)"
        />
      </ContainerRow>
    );
  }
  
  return (
    <h1>Crie uma nova tarefa</h1>
  )
};

export default Task;

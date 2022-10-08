// Component
import { Text } from '../../assets/reusableItens';
import { ContainerColumn } from '../../assets/containers';
import Task from './Task';

// Context
import { useThemeContext } from '../../context/themeContext';

// Types
import type { ITask } from '../../interface/task';

type TasksWeeklyProps = { tasks: ITask[] | [] }

const TasksWeekly = ({ tasks }: TasksWeeklyProps) => {
  const { theme } = useThemeContext();
  return (
    <ContainerColumn
      gap="1rem"
      minHeight='90vh'
      padding="1rem 0"
      width="100%"
      align="flex-start"
    >
      <Text variant="texting3" color={theme.colors.tasks.color}>
        Suas tarefas
      </Text>

      { tasks && tasks.map((task) => (
        <Task key={task._id} data={task} />
      ))}
    </ContainerColumn>
  );
};

export default TasksWeekly;

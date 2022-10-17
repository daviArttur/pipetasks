// Context
import { useTheme } from 'styled-components';

// Cookies
import { parseCookies } from 'nookies';

// Next
import Head from 'next/head';

// Redux
import { useSelector } from 'react-redux';

// Components
import { ContainerColumn, ContainerRow } from '../../assets/containers';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import TasksWeekly from '../../components/TasksWeekly';
import Sidebar from '../../components/Sidebar';

// Helper
import { withAuth } from '../../helper/withAuth';

// Api
import { getTasks } from '../api/task/getTasks';

// Types
import type { GetServerSidePropsContext } from 'next';
import type { ITask } from '../../interface/task';
import type { RootState } from '../../redux/store';
import { CreateTaskForm } from '../../components/Tasks/createTaskForm';

type TasksProps = {
  tasks: ITask[] | []  
}

const Tasks = ({ tasks }: TasksProps) => {
  const openSidebarState = useSelector((state: RootState) => state.sidebar.openModal)
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Pipe Tasks - Tasks</title>
      </Head>
      <ContainerRow
        background={theme.colors.background}
        height="100%"
        width="100%"
      >
        <Sidebar />
        <Footer />
        <ContainerColumn
          width="100%"
          padding={!openSidebarState ? "0 0 0 5rem" : "0 0 0 21.563rem"}
          height="100%"
          as="main"
        >
          <Header />
          <ContainerColumn
            align="flex-start"
            padding="2rem"
            gap="3rem"
            width="100%"
            height="100%"
          >
            <CreateTaskForm />
            <TasksWeekly tasks={tasks}/>
          </ContainerColumn>
        </ContainerColumn>
      </ContainerRow>
    </>
  );
};

export const getServerSideProps = withAuth( async (ctx: GetServerSidePropsContext) => {
  const { token } = parseCookies(ctx);
  const response = await getTasks(token);

  if (!response.error && response.tasks) {
    return { props: { tasks: response.tasks }}
  }
  
  return { props: { tasks: [] }}
})

export default Tasks;

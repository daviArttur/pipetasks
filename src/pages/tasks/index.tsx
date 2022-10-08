import { GetServerSidePropsContext, NextPage, NextPageContext } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { parseCookies } from 'nookies';
import { useTheme } from 'styled-components';
import { ContainerColumn, ContainerRow } from '../../assets/containers';
import { Text } from '../../assets/reusableItens';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import TasksWeekly from '../../components/TasksWeekly';
import Task from '../../components/TasksWeekly/Task';
import { withAuth } from '../../helper/withAuth';
import { ITask } from '../../interface/task';
import { getTasks } from '../api/task/getTasks';

type TasksProps = {
  tasks: ITask[] | []  
}

const Tasks = ({ tasks }: TasksProps) => {

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
          padding="0 0 0 21.563rem"
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

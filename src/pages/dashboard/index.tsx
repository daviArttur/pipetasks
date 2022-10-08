import { ContainerColumn, ContainerRow } from '../../assets/containers';

// Head Config
import Head from 'next/head';

// Components
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TasksWeekly from '../../components/TasksWeekly';
import ProjectsWeekly from '../../components/ProjectsWeekly';

// Styles
import { Text } from '../../assets/reusableItens';
import { DashboardContainer } from './styles';
import { useThemeContext } from '../../context/themeContext';

// Types
import type { GetServerSidePropsContext } from 'next';
import type { ITask } from '../../interface/task';

// HOC
import { withAuth } from '../../helper/withAuth';
import { parseCookies } from 'nookies';
import { getTasks } from '../api/task/getTasks';

type Props = {
  tasks: ITask[] | []
};

const Dashboard = ({ tasks }: Props) => {

  const { theme } = useThemeContext();

  return (
    <>
      <Head>
        <title>Pipe Tasks - Dashboard</title>
        <meta
          name="description"
          content="Adiucionar uma descrição maneira para a página home"
        />
      </Head>
      <ContainerRow background={theme.colors.background}>
        <Sidebar />
        <Footer />
        <DashboardContainer width="100%" padding="0 0 0 21.563rem" as="main">
          <Header />
          <ContainerColumn align="center" padding="2rem" gap="1rem">
            <TasksWeekly tasks={tasks}/>
            <ContainerColumn
              background={theme.colors.tasks.background}
              gap="2rem"
              padding="1rem 1.5rem"
              align="center"
              borderRadius="1.5rem"
              width="100%"
              height="384px"
            >
              <Text color={theme.colors.title}>Tarefas Concluídas</Text>
            </ContainerColumn>

            <ProjectsWeekly />
          </ContainerColumn>
        </DashboardContainer>
      </ContainerRow>
    </>
  )
}

export const getServerSideProps = withAuth( async (ctx: GetServerSidePropsContext) => {
  const { token } = parseCookies(ctx);
  const response = await getTasks(token);

  if (!response.error && response.tasks) {
    return { props: { tasks: response.tasks }}
  }
  
  return { props: { tasks: [] }}
})

export default Dashboard;

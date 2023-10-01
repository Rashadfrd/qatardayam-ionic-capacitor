import './Home.css';
import Layout from '../../components/layout/Layout';
import TrainRoutes from '../../components/trainroutes/TrainRoutes';

const Home: React.FC = () => {
  return (
    <Layout>
      <TrainRoutes />
    </Layout>
  );
};

export default Home;

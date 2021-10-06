import './../../index.css';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';

const Dashboard = () => {
 return <div className="dashboard--container">
    <Sidebar />
    <MainContainer/>
  </div>;
};

export default Dashboard;
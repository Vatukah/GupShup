import {useAuth} from '../../context/authContext.jsx';
const Dashboard = ()=>{
   const {user}=useAuth();
  return(
    <>
    user : {user?.email}
    </>
  )
}

export default Dashboard;
import { Outlet, Link } from "react-router-dom";
import Login from './Login';
const Home = () => {
  return (
    <>
      <Link to='/login'>Login</Link>
      <br></br>
      <Link to='/register'>Register</Link>
      <Outlet/>
    </>
  )
};

export default Home;
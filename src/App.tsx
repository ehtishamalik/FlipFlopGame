import { Outlet } from 'react-router-dom';
import { NavBar } from './Components/Common/NavBar';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="container">
      <ToastContainer closeOnClick theme="dark" autoClose={3000} />
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;

import { Outlet } from 'react-router-dom';
import { NavBar } from './Components/Common/NavBar';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUserLogin } from './store';

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('access_token');

  if (token) {
    dispatch(setUserLogin(true));
  }

  return (
    <div className="container">
      <ToastContainer closeOnClick theme="dark" autoClose={3000} />
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;

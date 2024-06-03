import { Outlet } from 'react-router-dom';
import { NavBar } from './Components/Common/NavBar';

function App() {
  return (
    <div className="container">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;

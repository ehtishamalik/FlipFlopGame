// import { Outlet } from 'react-router-dom';
// import { NavBar } from './Components/Common/NavBar';
import { FlipFlop } from './Pages/FlipFlop';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        {/* <NavBar /> */}
        {/* <Outlet /> */}
        <FlipFlop />
      </Provider>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Login from './components/Login';
import Nav from './components/Nav';
import Store from './components/Store';
import StudentMarket from './components/StudentMarket';

const App = () => {
  return (
    // Gives all components access to the store
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/store" element={<Store />} />
          <Route path="/market" element={<StudentMarket />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

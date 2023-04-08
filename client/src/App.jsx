import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Login from './components/Login';
import Admin from './components/Admin';
import User from './components/User';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user/*" element={<User />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

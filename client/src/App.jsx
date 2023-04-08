import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Login from './components/Login';
import Admin from './components/Admin';
import User from './components/User';

const App = () => {
  return (
    // Gives all components access to the store
    // <Provider store={store}>
    //   <Router>
    //     <AdminNav />
    //     <Nav />
    //     <Routes>
    //       <Route path="/" element={<Login />} />
    //       <Route path="/store" element={<Store />} />
    //       <Route path="/market" element={<StudentMarket />} />
    //       <Route path="/cart" element={<Cart />} />
    //       <Route path="/seller" element={<Seller />} />
    //       <Route path="/admin-products" element={<AdminProducts />} />
    //       <Route path="/admin-categories" element={<AdminCategories />} />
    //       <Route path="/admin-orders" element={<AdminOrders />} />
    //     </Routes>
    //   </Router>
    // </Provider>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user/*" element={<User />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

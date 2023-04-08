import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './Nav';
import Store from './Store';
import StudentMarket from './StudentMarket';
import Cart from './Cart';
import Seller from './Seller';

const User = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/store" element={<Store />} />
        <Route path="/market" element={<StudentMarket />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/seller" element={<Seller />} />
      </Routes>
    </>
  );
};

export default User;

import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { getUser, retrieveSessionStorage } from '../actions/authActions.js';
import { getItems } from '../actions/itemActions.js';
import { getCategories } from '../actions/categoryActions.js';
import { getCart } from '../actions/cartActions.js';
import { getUserOrders } from '../actions/orderActions.js';
import { getListings } from '../actions/listingActions.js';

import Nav from './Nav';
import Store from './Store';
import StudentMarket from './StudentMarket';
import Cart from './Cart';
import Orders from './Orders';
import StoreItem from './StoreItem';
import Checkout from './Checkout';

const User = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const name = user ? user.name : '';
  const userId = user ? user.id : '';

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      props.retrieveSessionStorage();
    }

    if (!isAuthenticated) {
      navigate(`/`);
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    props.getUser(token);
    props.getCategories(token);
    props.getItems(token);
    props.getListings(token);
    props.getCart({ token, userId });
    props.getUserOrders({ token, userId });
    props.get;
  }, [token]);
  return (
    <>
      <Nav name={name} />
      <Routes>
        <Route path="/store" element={<Store />} />
        <Route path="/market" element={<StudentMarket />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/store/:itemId" element={<StoreItem />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};
const mapDispatchToProps = {
  retrieveSessionStorage,
  getUser,
  getItems,
  getCategories,
  getCart,
  getUserOrders,
  getListings
};

export default connect(null, mapDispatchToProps)(User);

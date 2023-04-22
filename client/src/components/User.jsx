import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { getUser, retrieveSessionStorage } from '../actions/authActions.js';
import { getItems } from '../actions/itemActions.js';
import { getCategories } from '../actions/categoryActions.js';

import Nav from './Nav';
import Store from './Store';
import StudentMarket from './StudentMarket';
import Cart from './Cart';
import Seller from './Seller';
import StoreItem from './StoreItem';

const User = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const name = user ? user.name : '';
  const admin = user ? user.admin : false;

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || admin) {
      props.retrieveSessionStorage();
    }

    if (!isAuthenticated || admin) {
      navigate(`/`);
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    props.getUser(token);
    props.getCategories(token);
    props.getItems(token);
  }, [token]);
  return (
    <>
      <Nav name={name} />
      <Routes>
        <Route path="/store" element={<Store />} />
        <Route path="/market" element={<StudentMarket />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/store/:itemId" element={<StoreItem />} />
      </Routes>
    </>
  );
};
const mapDispatchToProps = { retrieveSessionStorage, getUser, getItems, getCategories };

export default connect(null, mapDispatchToProps)(User);

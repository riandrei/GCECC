import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AdminProduct from './AdminProduct';
import AdminOrder from './AdminOrder';
import AdminUser from './AdminUser';
import AdminNav from './AdminNav';

import { retrieveSessionStorage } from '../actions/authActions.js';

const Admin = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const admin = user ? user.admin : false;

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || !admin) {
      props.retrieveSessionStorage();
    }

    if (!isAuthenticated || !admin) {
      navigate(`/`);
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <AdminNav />
      <Routes>
        <Route path="/products" element={<AdminProduct />} />
        <Route path="/orders" element={<AdminOrder />} />
        <Route path="/users" element={<AdminUser />} />
      </Routes>
    </>
  );
};

const mapDispatchToProps = { retrieveSessionStorage };

export default connect(null, mapDispatchToProps)(Admin);

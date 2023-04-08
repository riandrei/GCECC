import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/order" element={<Order />} />
      <Route path="/item" element={<Item />} />
    </Routes>
  );
};

const mapDispatchToProps = { retrieveSessionStorage };

export default connect(null, mapDispatchToProps)(Admin);

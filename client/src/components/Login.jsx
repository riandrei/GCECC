import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LeftLoginSection from './LeftLoginSection';
import RightLoginSection from './RightLoginSection';

import { setAuthentication, signIn } from '../actions/authActions.js';

import '../css/login.css';

export const Login = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const admin = user ? user.admin : false;
  const navigate = useNavigate();

  // redirects the user to the homepage if the user has authenticated
  useEffect(() => {
    const root = document.querySelector(`#root`);
    if (isAuthenticated && admin) {
      root.style.overflowY = 'unset';

      navigate('/admin/products');
    }
    if (isAuthenticated && !admin) {
      root.style.overflowY = 'unset';

      navigate('/user/store');
    }
  }, [isAuthenticated, navigate, admin]);

  return (
    <>
      <LeftLoginSection />
      <RightLoginSection signIn={props.signIn} />
    </>
  );
};

const mapDispatchToProps = { signIn, setAuthentication };

export default connect(null, mapDispatchToProps)(Login); // allows the Login component to access the action creators and dispatch function

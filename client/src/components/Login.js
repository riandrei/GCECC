import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LeftLoginSection from './LeftLoginSection';
import RightLoginSection from './RightLoginSection';

import { signIn } from '../actions/authActions.js';
import { setAuthentication } from '../actions/authActions.js';

import '../css/login.css';

export const Login = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  // checks the sessionStorage if the user already authenticated before and just reloaded the site
  useEffect(() => {
    if (sessionStorage.getItem('isAuthenticated')) {
      props.setAuthentication(true);
    }
  }, [props]);

  // redirects the user to the homepage if the user has authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <LeftLoginSection />
      <RightLoginSection signIn={props.signIn} />
    </>
  );
};

const mapDispatchToProps = { signIn, setAuthentication };

export default connect(null, mapDispatchToProps)(Login); // allows the Login component to access the action creators and dispatch function

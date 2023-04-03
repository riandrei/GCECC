import '../css/login.css';
import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LeftLoginSection from './LeftLoginSection';
import RightLoginSection from './RightLoginSection';
import { signIn } from '../actions/authActions.js';
import { setAuthentication } from '../actions/authActions.js';

export const Login = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (sessionStorage.getItem('isAuthenticated')) {
      props.setAuthentication(true);
    }
  }, [props]);

  return (
    <>
      <LeftLoginSection />
      <RightLoginSection signIn={props.signIn} />
    </>
  );
};

const mapDispatchToProps = { signIn, setAuthentication };

export default connect(null, mapDispatchToProps)(Login);

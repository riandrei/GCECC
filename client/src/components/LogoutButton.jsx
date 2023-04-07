import { logOut } from '../actions/authActions.js';

import { connect } from 'react-redux';

import logoutIcon from '../assets/logout.png';

const LogoutButton = (props) => {
  const handleLogOut = () => {
    props.logOut();
  };

  return (
    <button onClick={handleLogOut}>
      <img src={logoutIcon} alt="Logout button" title="Logout" />
    </button>
  );
};

const mapDispatchToProps = { logOut };

export default connect(null, mapDispatchToProps)(LogoutButton);

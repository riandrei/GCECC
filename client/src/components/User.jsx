import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './Nav';
import Store from './Store';
import StudentMarket from './StudentMarket';
import Cart from './Cart';
import Seller from './Seller';

const User = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
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

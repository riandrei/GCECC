import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import '../css/order.css';

const Order = () => {
  const orders = useSelector((state) => state.order.orders);

  return !orders ? (
    <p>Orders Loading...</p>
  ) : (
    <>
      {orders.map((order) => (
        <div key={order._id} className="user-order-item">
          <Link to={`/user/order/${order._id}`}>
            <p className="user-order-number">{`${order._id.slice(0, 5)}...`}</p>
          </Link>
          <p className="user-order-date">{order.dateAdded.slice(0, order.dateAdded.indexOf('T'))}</p>
          <p className="user-order-email">{order.userDomain}</p>
          <p className="user-order-status">{`${order.status.charAt(0).toUpperCase()}${order.status.slice(
            1,
            order.status.length
          )}`}</p>
          <p className="user-order-bill">&#8369;{`${order.bill}`}</p>
        </div>
      ))}
    </>
  );
};
export default Order;

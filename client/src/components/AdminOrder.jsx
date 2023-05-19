import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getOrders } from '../actions/orderActions';

import '../css/adminorder.css';

const AdminOrder = (props) => {
  const orders = useSelector((state) => state.order.orders);

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    props.getOrders(token);
  }, []);

  return !orders ? (
    <p>Orders Loading...</p>
  ) : (
    <>
      {orders.map((order) => (
        <div key={order._id} className="admin-order-item">
          <input className="order-checkbox" type="checkbox" name="" id="" />
          <Link to={`/admin/order/${order._id}`}>
            <p className="admin-order-number">{`${order._id.slice(0, 5)}...`}</p>
          </Link>
          <p className="admin-order-date">{order.dateAdded.slice(0, order.dateAdded.indexOf('T'))}</p>
          <p className="admin-order-email">{order.userDomain}</p>
          <p className="admin-order-status">{`${order.status.charAt(0).toUpperCase()}${order.status.slice(
            1,
            order.status.length
          )}`}</p>
          <p className="admin-order-bill">&#8369;{`${order.bill}`}</p>
        </div>
      ))}
    </>
  );
};

const mapDispatchToProps = { getOrders };
export default connect(null, mapDispatchToProps)(AdminOrder);

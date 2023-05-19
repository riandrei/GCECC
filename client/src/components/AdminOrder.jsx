import { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getOrders, changeOrderStatus } from '../actions/orderActions';

import '../css/adminorder.css';

const AdminOrder = (props) => {
  const orders = useSelector((state) => state.order.orders);

  const selectedOptions = orders?.reduce((obj, { _id, status }) => {
    obj[_id] = status;
    return obj;
  }, {});

  const changeOrderStatus = (e, _id) => {
    const token = sessionStorage.getItem('token');
    const modifiedOrder = {
      _id,
      status: e.target.value
    };

    props.changeOrderStatus({ token, modifiedOrder });
  };

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    props.getOrders({ token });
  }, []);

  return !orders ? (
    <p>Orders Loading...</p>
  ) : (
    <>
      {orders.map((order) => (
        <div key={order._id} className="admin-order-item">
          <Link to={`/admin/order/${order._id}`}>
            <p className="admin-order-number">{`${order._id.slice(0, 5)}...`}</p>
          </Link>
          <p className="admin-order-date">{order.dateAdded.slice(0, order.dateAdded.indexOf('T'))}</p>
          <p className="admin-order-email">{order.userDomain}</p>
          <select name="" id="" onChange={(e) => changeOrderStatus(e, order._id)} value={selectedOptions[order._id]}>
            <option value="submitted">Submitted</option>
            <option value="received">Received</option>
            <option value="ready">Ready</option>
          </select>
          <p className="admin-order-bill">&#8369;{`${order.bill}`}</p>
        </div>
      ))}
    </>
  );
};

const mapDispatchToProps = { getOrders, changeOrderStatus };
export default connect(null, mapDispatchToProps)(AdminOrder);

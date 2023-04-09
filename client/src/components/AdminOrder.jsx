import '../css/adminorder.css';

const AdminOrder = () => {
  return (
    <>
      <div className="admin-order-item">
        <input className="admin-order-checkbox" type="checkbox" name="" id="" />

        <p className="admin-order-number">00001</p>
        <p className="admin-order-date">2/30/24</p>
        <p className="admin-order-email">202110056@gordoncollege.edu.ph</p>
        <p className="admin-order-status">Fulfilled</p>
        <p className="admin-order-payment">Paid</p>
        <p className="admin-order-bill">&#8369;2000</p>
      </div>
    </>
  );
};
export default AdminOrder;

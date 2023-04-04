import '../css/leftLoginSection.css';
import womanPhone from '../assets/woman-removebg-preview.png';
import shoppingCart from '../assets/skating.png';

const LeftLoginSection = () => {
  return (
    <section className="left">
      <div className="left-circle">
        <img className="woman-shopping-img" src={womanPhone} alt="" draggable="false" />
        <img className="shopping-cart-img" src={shoppingCart} alt="" draggable="false" />
      </div>
    </section>
  );
};

export default LeftLoginSection;

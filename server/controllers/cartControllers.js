const Cart = require('../models/Cart');
const Item = require('../models/Item');

module.exports.getCart = (req, res) => {
  const userId = req.params.id;
  const items = [];
  const bill = 0;

  Cart.findOne({ userId }).then((cart) => {
    if (!cart) {
      const newCart = new Cart({ userId, items, bill });

      newCart.save().then((cart) => res.json(cart));
    } else {
      return res.json(cart);
    }
  });
};

module.exports.addCartItem = (req, res) => {
  const userId = req.params.id;
  console.log(req.body);
  const { itemId, size, quantity } = req.body;
  console.log(itemId);

  Item.findOne({ _id: itemId })
    .then((item) => item.price)
    .then((itemPrice) => {
      const newCartItem = { itemId, size, quantity };

      Cart.updateOne({ userId }, { $push: { items: newCartItem }, $inc: { bill: itemPrice * quantity } }).then(
        (cart) => {
          console.log(cart);
          return res.json(cart);
        }
      );
    });
};

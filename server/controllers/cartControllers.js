const Cart = require('../models/Cart');
const Item = require('../models/Item');

const { ObjectId } = require('mongodb');

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

module.exports.updateCartQuantity = (req, res) => {
  const userId = req.params.id;
  const { itemId, size, quantity } = req.body;

  console.log(req.body);

  Cart.findOne({ userId }).then((cart) => {
    Item.findOne({ _id: itemId })
      .then((item) => item.price)
      .then((itemPrice) => {
        const objectId = new ObjectId(itemId);
        const currentObject = cart.items.find((item) => objectId.equals(item.itemId));
        const newQuantity = quantity - currentObject.quantity;

        Cart.updateOne(
          { userId: userId, 'items._id': currentObject._id }, // Find the document with userId and items.itemId
          { $inc: { 'items.$.quantity': newQuantity, bill: itemPrice * newQuantity } } // Update the matched element in the items array
        ).then(() => {
          Cart.findOne({ userId }).then((cart) => res.json(cart));
        });
      });
  });
};

module.exports.addCartItem = (req, res, next) => {
  const userId = req.params.id;
  const { itemId, size, quantity } = req.body;

  Cart.findOne({ userId: userId, items: { $elemMatch: { itemId: itemId } } }).then((cart) => {
    if (cart) {
      next();
    } else {
      Item.findOne({ _id: itemId })
        .then((item) => item.price)
        .then((itemPrice) => {
          const newCartItem = { itemId, size, quantity };

          Cart.updateOne({ userId }, { $push: { items: newCartItem }, $inc: { bill: itemPrice * quantity } }).then(
            () => {
              Cart.findOne({ userId }).then((cart) => res.json(cart));
            }
          );
        });
    }
  });
};

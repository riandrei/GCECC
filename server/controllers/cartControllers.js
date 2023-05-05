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

  Cart.findOne({ userId }).then((cart) => {
    Item.findOne({ _id: itemId })
      .then((item) => item.price)
      .then((itemPrice) => {
        const objectId = new ObjectId(itemId);
        const currentObject = cart.items.find((item) => objectId.equals(item.itemId));
        console.log(currentObject);
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

module.exports.deleteCartItem = (req, res) => {
  const userId = req.params.id;
  const checkedItems = req.body;

  Cart.findOne({ userId }).then((cart) => {
    const currentObjects = cart.items.filter((item) => {
      console.log(checkedItems[0]);
      console.log(item.itemId.toString());
      console.log(checkedItems[0].itemId === item.itemId.toString());
      if (checkedItems.some((checkedItem) => checkedItem.itemId === item.itemId.toString())) {
        return item;
      }
    });
    console.log(currentObjects);

    Cart.updateOne({ userId }, { $pull: { items: { _id: { $in: currentObjects.map((obj) => obj._id) } } } }).then(
      () => {
        Cart.findOne({ userId }).then((cart) => res.json(cart));
      }
    );
  });
};

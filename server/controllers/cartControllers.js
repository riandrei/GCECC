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
      if (checkedItems.some((checkedItem) => checkedItem.itemId === item.itemId.toString())) {
        return item;
      }
    });

    Cart.updateOne({ userId }, { $pull: { items: { _id: { $in: currentObjects.map((obj) => obj._id) } } } }).then(
      () => {
        Cart.findOne({ userId }).then((cart) => {
          const cartItems = cart.items.map((item) => {
            const { itemId, quantity, _id } = item;

            return {
              _id,
              itemId,
              quantity
            };
          });
          const itemIds = cartItems.map((item) => item.itemId);

          Item.find({ _id: { $in: itemIds } }).then((items) => {
            items.forEach((item) => {
              const itemId = item._id.toString();
              const itemIndex = cartItems.findIndex((cartItem) => cartItem.itemId.toString() === itemId);

              if (itemIndex >= 0) {
                cartItems[itemIndex].price = item.price;
              }
            });

            const adjustedBill = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);

            Cart.updateOne({ userId }, { $set: { bill: adjustedBill } }).then(() => {
              Cart.findOne({ userId }).then((cart) => res.json(cart));
            });
          });
        });
      }
    );
  });
};

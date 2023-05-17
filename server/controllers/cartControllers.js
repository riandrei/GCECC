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

module.exports.updateCartQuantity = (req, res) => {
  const userId = req.params.id;
  const { itemId, _id, quantity } = req.body;

  Item.findOne({ _id: itemId })
    .then((item) => item.price)
    .then((itemPrice) => {
      Cart.findOne(
        {
          $and: [{ userId: userId }, { 'items._id': _id }]
        },
        { 'items.quantity.$': 1 }
      )
        .then((cartItem) => cartItem.items[0].quantity)
        .then((currentQuantity) => {
          let newQuantity = quantity - currentQuantity;

          if (req.add) {
            newQuantity = quantity;
          }

          Cart.updateOne(
            { userId: userId, 'items._id': _id }, // Find the document with userId and items.itemId
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

  Cart.findOne({ userId: userId, items: { $elemMatch: { itemId: itemId, size: size } } }).then((cart) => {
    if (cart) {
      req.add = true;
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

  console.log(checkedItems);

  const checkedItemIds = checkedItems.map((checkedItem) => checkedItem.itemId);
  const checkedCartItemsIds = checkedItems.map((checkedItem) => checkedItem._id);

  Item.find({ _id: { $in: checkedItemIds } }).then((items) => {
    let itemVariations = [];

    items.forEach((item) => {
      const itemId = item._id.toString();
      const price = item.price;

      item.sizes.forEach((item) => {
        const { size } = item;

        itemVariations.push({ itemId, size, price });
      });
    });

    itemVariations.forEach((itemVariation) => {
      const itemIndex = checkedItems.findIndex(
        (checkedItem) =>
          checkedItem.itemId.toString() === itemVariation.itemId && checkedItem.size === itemVariation.size
      );

      if (itemIndex >= 0) {
        checkedItems[itemIndex].price = itemVariation.price;
      }
    });

    const adjustedBill = checkedItems.reduce((total, checkedItem) => {
      return checkedItem.price * checkedItem.quantity * -1 + total;
    }, 0);

    Cart.updateOne(
      { userId },
      {
        $pull: { items: { _id: { $in: checkedCartItemsIds } } },
        $inc: { bill: adjustedBill }
      }
    ).then(() => {
      Cart.findOne({ userId }).then((cart) => res.json(cart));
    });
  });
};

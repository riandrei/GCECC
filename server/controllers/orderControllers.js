const Order = require('../models/Order');
const Cart = require('../models/Cart');
const User = require('../models/User');
const config = require('config');

module.exports.placeOrder = (req, res) => {
  const { userDetails, itemDetails } = req.body;

  const itemIds = itemDetails.map((checkoutItem) => checkoutItem.itemId);

  console.log(itemDetails);

  Item.find({ _id: { $in: itemIds } }).then((items) => {
    const isItemsValid = itemDetails.every((checkoutItem) => {
      const foundItem = items.find((item) => item._id.toString() === checkoutItem.itemId);

      return foundItem && foundItem.price == checkoutItem.price;
    });

    if (!isItemsValid) {
      res.status(400).json({ error: 'Invalid items' });
    }

    const newOrder = new Order({
      userId: userDetails.userId,
      userName: userDetails.name,
      userDepartment: userDetails.department,
      userDomain: userDetails.domain,
      items: itemDetails.map(({ _id, ...rest }) => rest),
      bill: itemDetails.reduce((total, { price, quantity }) => total + price * quantity, 0),
      status: 'submitted'
    });

    newOrder.save().then((order) => {
      res.json(order);
    });
  });
};

module.exports.getUserOrders = (req, res) => {
  const userId = req.params.id;

  Order.find({ userId }).then((orders) => res.json(orders));
};

module.exports.getOrders = (req, res) => {
  Order.find()
    .sort({ dateAdded: -1 })
    .then((orders) => res.json(orders));
};

module.exports.changeOrderStatus = (req, res, next) => {
  const { _id, status } = req.body;

  Order.updateOne({ _id }, { $set: { status } }).then(() => {
    next();
  });
};

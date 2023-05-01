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

// module.exports.deleteItem = async (req, res) => {
//   const userId = req.params.id;

//   try {
//     let cart = await Cart.findOne({ userId });

//     if (cart && cart.items.length > 0) {
//       res.send(cart);
//     }
//     res.send(null);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('Something went wrong');
//   }
// };
// module.exports.updateCartItem = async (req, res) => {
//   const userId = req.params.id;

//   try {
//     let cart = await Cart.findOne({ userId });

//     if (cart && cart.items.length > 0) {
//       res.send(cart);
//     }
//     res.send(null);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('Something went wrong');
//   }
// };

// module.exports.addCartItem = async (req, res) => {
//   const userId = req.params.id;
//   const { productId, size, quantity } = req.body;

//   try {
//     let cart = await Cart.findOne({ userId });
//     let item = await Item.findOne({ _id: productId });
//     if (!item) {
//       res.status(404).send('Item not found!');
//     }
//     const price = item.price;
//     const name = item.label;

//     if (cart) {
//       // if cart exists for the user
//       let itemIndex = cart.items.findIndex((p) => p.productId == productId);

//       // Check if product exists or not
//       if (itemIndex > -1) {
//         let productItem = cart.items[itemIndex];
//         productItem.quantity += quantity;
//         cart.items[itemIndex] = productItem;
//       } else {
//         cart.items.push({ productId, name, quantity, price });
//       }
//       cart.bill += quantity * price;
//       cart = await cart.save();
//       return res.status(201).send(cart);
//     } else {
//       // no cart exists, create one
//       const newCart = await Cart.create({
//         userId,
//         items: [{ productId, name, quantity, price }],
//         bill: quantity * price
//       });
//       return res.status(201).send(newCart);
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('Something went wrong');
//   }
// };

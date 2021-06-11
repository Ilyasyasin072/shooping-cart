const Cart = require('../models/cart_item');
const ShoppingSession = require('../models/shopping_session')
const mongoose = require('mongoose')

const index = (req, res) => {
}

const store = async (req, res) => {
    if (req.user) {
       try {
        const shopping_session = {
            user_id: req.user._id,
            total: req.body.total
        }

        const shopping = await ShoppingSession.create(shopping_session)

        await Cart.create({ session_id : shopping._id, product_id: req.body.product_id, quantity: req.body.quantity})

        res.json(shopping)
       } catch (error) {
           res.json(error.message)
       }
    } else {
      res.json({
        message: 'Cart Not Found'
      })
    }
}


const cart = async (req, res) => {
  // const ObjectId = mongoose.Types.ObjectId;
  // if(req.user) {
  //   try {
      
  //     var aggregateQuery = ShoppingSession.aggregate([
  //       {
  //           $match: { user_id: ObjectId(req.user._id) }
  //       },
  //       {
  //           $lookup: {
  //               from: 'carts',
  //               localField: '_id',
  //               foreignField: 'session_id', as: 'cart'
  //           },
  //       },
  //   ])


  //   aggregateQuery.exec((err, result) => {
  //     res.json(result)
  //   })

  //   } catch (error) {
  //     res.json(error.message)
  //   }
  // } else {
  //   res.json({
  //     message: 'invalid Credentials'
  //   })
  // }
  // references https://stackoverflow.com/questions/59174763/how-to-add-product-to-shopping-cart-with-nodejs-express-and-mongoose
  const { productId, quantity, name, price } = req.body;

  if(req.user) {
    const userId = req.user._id
    let cart = await Cart.findOne({ user_id : userId });

    if(cart) {

      let itemIndex = cart.products.findIndex(p => p.productId == productId);

      if (itemIndex > -1) {
        // action if product exists on car
        let productItem = cart.products[itemIndex];
        productItem.quantity = quantity
        cart.products[itemIndex] = productItem;

      } else {

        // action if product null on crt
        cart.products.push({
          productId, quantity
        })
      }

      cart = await cart.save()

      return res.status(200).json(cart)
    } else {

      const newCart = await Cart.create({
        user_id: userId,
        products: [{ productId, quantity }]
      });

      res.json(newCart)
    }
  }
}



module.exports = {
    index,
    store,
    cart
}
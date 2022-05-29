// const mongoose = require('mongoose');
// 
// const { Schema } = mongoose;
// 
// const orderSchema = new Schema({
//   purchaseDate: {
//     type: Date,
//     default: Date.now
//   },
//   username: {
//     type: String,
//     required: true
//   },
//   cakes: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Cake'
//     }
//   ]
// });
// 
// const Order = mongoose.model('Order', orderSchema);
// 
// module.exports = Order;
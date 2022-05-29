const { Schema, model } = require('mongoose');
const cakeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    themeColorCode: {
      type: String,
      required: true,
      minlength: 7 // seven letter/digit code from catelog
    },
    primaryFlowers: {
      type: [String],
      required: false,
      unique: false
    },
    secondaryFlowers: {
      type: [String],
      required: false,
      unique: false
    },
    specialNote: {
      type: String,
      required: false,
      minlength: 4  // must enter "None" if not implementing any comment/feedback for guest
    },
    floralPrimary:{
      type: String,
      required: false
    },
    floralSecondary:{
      type: String,
      required: false
    },
    extraPrimary: {
      type: Number,
      min: 0,
      max:30,
      default: 6
    },
    extraSecondary: {
      type: Number,
      min: 0,
      max: 30,
      default: 8 
    },
    fillings: {
      type: [String]
    },
    frostings:{
      type: String
    },

  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

const Cake = model('Cake', cakeSchema);

module.exports = Cake;

// const { Schema, model } = require('mongoose');
//
// const cakeSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//
  // // primaryFlowers: {
  // //   type: [String]
  // // 
  // // },
//
// //   secondaryFlowers: {
// //     type: [String]
// //   },
// //
  // extraPrimary: {
  //   type: Number,
  //   min: 0,
  //   max:30,
  //   default: 0
  // },
// //   extraSecondary: {
// //     type: Number,
// //     min: 0,
// //     max:30,
// //     default: 0
// //   },
// //
// //   fillings: {
// //     type: [String]
// //   },
// //   frostings:{
// //     type: [String]
// //   },
//
//   themecode:{
//     type: String,
//     required: true
//   }
//
//   },
//   {
//     toJSON: {
//       virtuals: true
//     }
//   }
// );
//
// const Cake = mongoose.model('Cake', cakeSchema);
//
// module.exports = Cake;

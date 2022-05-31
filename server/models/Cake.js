const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
    shape:{
      type: String,
      required: false
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
    // floralPrimary:{
    //   type: String,
    //   required: false
    // },
    // floralSecondary:{
    //   type: String,
    //   required: false
    // },
    extraPrimary: {
      type: Number,
      min: 0,
      max:30,
      default: 0
    },
    extraSecondary: {
      type: Number,
      min: 0,
      max: 30,
      default: 0 
    },
    extraThickness: {
      type: Number,
      min: 0,
      max: 12,
      default: 0 
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: false
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
 
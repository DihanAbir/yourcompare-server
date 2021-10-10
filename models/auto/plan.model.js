const mongoose = require("mongoose")
const Insurer = require("../../models/insurer.model")

const premiumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  value: { type: Number, required: true },
  _id: false
})

const planSchema = new mongoose.Schema({
  typeofInsurance: {
    type: String,
    enum: ["comprehensive", "thirdparty"],
    required: true
  },
  cartypes: {
    commercial: Boolean,
    private: Boolean,
    _id: false
  },
  categories: {
    bus: Boolean, truck: Boolean, van: Boolean, car: Boolean,
    bike: Boolean, threewheeler: Boolean, _id: false,
  },
  idv: {
    type: Number,
    required: true
  },
  covered: [{
    _id: false,
    id: String,
    title: String
  }],
  notCovered: [String],
  addons: [premiumSchema],
  premiums: [premiumSchema],
  discounts: [premiumSchema],
  vat: { type: Number, required: true, default: 15 },
  published: { type: Boolean, default: false },
  insurer: { type: mongoose.Types.ObjectId, ref: "Insurer", required: true }
})

const Autoplan = mongoose.model('Autoplan', planSchema)
module.exports = Autoplan
const Insurer = require("../../models/insurer.model")
const Autoplan = require("../../models/auto/plan.model")
const asyncHandler = require("../../middleware/async")

/**
 * @desc Add Insurer Details
 * @route POST /api/auto/add-insurer
 * @access Private
 */
exports.addInsurer = asyncHandler(async (req, res, next) => {
  const isExist = await Insurer.findOne(req.body)
  if (isExist)
    return res.status(400).json({ message: "Already Registered." })

  const insurer = await Insurer.create(req.body)
  if (insurer)
    return res.status(200).json({ insurer })
})

exports.updateInsurer = asyncHandler(async (req, res, next) => {

})

/**
 * @desc Add new insurance plan
 * @route POST /api/auto/plan
 * @access Private
 */
exports.addPlan = asyncHandler(async (req, res, next) => {
  const plan = await Autoplan.create(req.body)
  // const _plan = await plan.populate('insurer')
  return res.status(200).json({
    message: "New plan added successfully",
    planDetails: plan
  })
})

/**
 * @desc Update existing insurance plan
 * @route PUT /api/auto/plan
 * @access Private
 */
exports.updatePlan = asyncHandler(async (req, res, next) => {
  const query = req.body._id
  const update = req.body.update
  const plan = await Autoplan.findByIdAndUpdate(query, update, { new: true })
  if (plan)
    return res.status(200).json({
      message: "Update Successfull", plan
    })
})

/**
 * @desc Delete existing insurance plan
 * @route DELETE /api/auto/plan
 * @access Private
 */
exports.deletePlan = asyncHandler(async (req, res, next) => {
  const query = req.body._id

  const plan = await Autoplan.findById(query)
  if (!plan)
    return res.status(200).json({ message: "Plan doesn't exist" })

  const deleted = await Autoplan.findByIdAndDelete(query)
  if (deleted)
    return res.status(200).json({ message: "Delete Successful" })
})
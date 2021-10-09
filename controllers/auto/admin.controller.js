const Insurer = require("../../models/insurer.model")
const Autoplan = require("../../models/auto/plan.model")
const asyncHandler = require("../../middleware/async")

/**
 * @desc Add Insurer Details
 * @route POST /api/auto/insurer
 * @access Private
 */
exports.addInsurer = asyncHandler(async (req, res, next) => {
  const query = { companyName: req.body.companyName }
  const isExist = await Insurer.findOne(query)

  if (isExist)
    return res.status(400).json({ message: "Already Registered." })

  const insurer = await Insurer(req.body).save()
  return res.status(200).json({ insurer })
})

/**
 * @desc Update Insurer Details
 * @route PUT /api/auto/insurer
 * @access Private
 */
exports.updateInsurer = asyncHandler(async (req, res, next) => {
  const insurer = await Insurer.findById(req.body._id)
  insurer.companyName = req.body.companyName
  const updatedInsurer = await insurer.save()
  return res.status(200).json({
    message: "Update Successfull",
    insurer: updatedInsurer
  })
})

/**
 * @desc Delete Existing Insurer Company
 * @route DELETE /api/auto/insurer
 * @access Private
 */
exports.deleteInsurer = asyncHandler(async (req, res, next) => {
  const deleted = await Insurer.findByIdAndDelete(req.body._id)
  return res.status(200).json({ message: "Delete Successful" })
})


/**
 * @desc Get all insurance plan
 * @route GET /api/auto/plan
 * @access Private
 */
exports.getAllPlans = asyncHandler( async (req, res, next) => {
  const plans = await Autoplan.find()
  return res.status(200).json({ plans })
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
  const deleted = await plan.delete()
  // const deleted = await Autoplan.findByIdAndDelete(query)
  if (deleted)
    return res.status(200).json({ message: "Delete Successful" })
})
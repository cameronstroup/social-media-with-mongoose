const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  addReaction,
  updateThought,
  deleteThought,
  deleteReaction,
} = require("../../controllers/thought-controller");

module.exports = router;

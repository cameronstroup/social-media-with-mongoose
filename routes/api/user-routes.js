const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/User-controller");

// Set up GET all and POST at /api/Users
router.route("/").get(getAllUsers).post(createUser);

// Set up GET one, PUT, and DELETE at /api/Users/:id
router.route("/:id").get(getUserById).delete(deleteUser);

module.exports = router;

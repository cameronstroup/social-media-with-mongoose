const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

router.route("/").get().post();

router.route("/:id").get(getUserById).delete(deleteUser);

router.route("/:userId").put(updateUser);

router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriend);

router.route("/").get(getAllUsers).post(createUser);

module.exports = router;

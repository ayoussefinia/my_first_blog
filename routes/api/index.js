const router = require("express").Router();
const userRoutes = require("./users.js");
const postRoutes = require("./posts.js");

// Post routes
router.use("/users", userRoutes);
router.use("/posts", postRoutes);

module.exports = router;

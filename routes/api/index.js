const router = require("express").Router();
const userRoutes = require("./users.js");

// Book routes
router.use("/users", userRoutes);

module.exports = router;

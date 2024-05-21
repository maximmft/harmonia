const express = require("express");

const router = express.Router();

const { browse, read } = require("../../../controllers/categoryActions");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

router.get("/", browse);

// Route to get one program
router.get("/:id", read);

/* ************************************************************************* */

module.exports = router;

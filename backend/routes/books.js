const express = require("express");
const router = express.Router();


const { getAllBooks, getAllBooksTesting } = require("../controllers/books");

router.route("/").get(getAllBooks);
router.route("/testing").get(getAllBooksTesting);

module.exports = router;
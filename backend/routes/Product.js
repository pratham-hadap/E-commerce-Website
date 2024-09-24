const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload")

const {createProduct} = require("../controllers/createProduct");
const {getProduct} = require("../controllers/getProoduct");

// router.post('/createProduct', upload.single('image'), createProduct)
router.post('/createProduct', createProduct)
router.get('/getProduct',getProduct)


module.exports = router;
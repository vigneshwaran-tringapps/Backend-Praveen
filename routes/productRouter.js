const { addProduct ,GetProduct} = require('../controls/productController')
const router = require('express').Router()
 
router.post('/',  addProduct)
router.get('/carlist', GetProduct)

module.exports = router
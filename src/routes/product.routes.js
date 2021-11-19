const express = require('express')
const ProductService = require('../service/product')

const router = express.Router()

const productService = new ProductService()

router.get('/:idCategory', async (req, res) => {
    const { idCategory } = req.params
    const products = await productService.getProducts({ idCategory })
    res.status(200).json(products)
})

router.post('/', async (req, res) => {
    const product = req.body
    const createCategory = await productService.createProduct(product)
    res.status(200).json(createCategory)
})

module.exports = router
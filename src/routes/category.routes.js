const express = require('express')
const CategoryService = require('../service/category')

const router = express.Router()

const categoryService = new CategoryService()

router.get('/', async (req, res) => {
    const categories = await categoryService.getCategories()
    res.status(200).json(categories)
})

router.post('/', async (req, res) => {
    const category = req.body
    const createCategory = await categoryService.createCategory(category)
    res.status(201).json(createCategory)
})


module.exports = router
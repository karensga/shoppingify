const express = require('express')
const CartListService = require('../service/cartList')

const router = express.Router()

const cartListService = new CartListService()

router.post('/', async (req, res) => {

    const cartListBody = req.body

    const cartList = await cartListService.createCartList(cartListBody)

    res.status(200).json(cartList)
})

module.exports = router
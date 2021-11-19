const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { config: { api: { port } } } = require('./config')
const category = require('./routes/category.routes')
const product = require('./routes/product.routes')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/api/category', category)
app.use('/api/product', product)


app.listen(port, () => {
    console.log('listening on port ', port)
})
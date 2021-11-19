const MongoLib = require('../lib/mongo')

class ProductService {
    constructor() {
        this.collection = 'product'
        this.mongoDB = new MongoLib()
    }

    async getProducts({ idCategory }) {
        const products = await this.mongoDB.getAll(this.collection, { idCategory }, { page: 1, limit: 10 })
        return products
    }

    async createProduct(product) {
        const createProduct = await this.mongoDB.create(this.collection, product)
        return createProduct
    }
}

module.exports = ProductService
const MongoLib = require('../lib/mongo')

class CategoryService {
    constructor() {
        this.collection = 'category'
        this.mongoDB = new MongoLib()
    }

    async getCategories() {
        const categories = await this.mongoDB.getAll(this.collection)
        return categories || []
    }

    async createCategory(category) {
        const createCategory = await this.mongoDB.create(this.collection, category)
        return createCategory
    }

}

module.exports = CategoryService
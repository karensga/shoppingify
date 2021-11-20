const MongoLib = require('../lib/mongo')

class CartListService {
    constructor(){
        this.collection = 'cart'
        this.mongoDB = new MongoLib()
    }

    async createCartList (cartList){
        const createCartList = await this.mongoDB.create(this.collection, cartList)
        return createCartList
    } 

}

module.exports = CartListService
require('dotenv').config()

const config = {
    api:{
        port:process.env.PORT ||3000
    },
    database: {
        user: process.env.MONGO_USER,
        password: process.env.MONGO_PASSWORD,
        host: process.env.MONGO_HOST,
        name: process.env.MONGO_NAME
    }

}

module.exports = { config }
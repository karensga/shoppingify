const { MongoClient, ObjectId } = require('mongodb')
const { config } = require('../config')

const { host, user, password, name } = config.database

const USER = encodeURIComponent(user)
const PASSWORD = encodeURIComponent(password)
const NAME = name
const HOST = host

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${NAME}?retryWrites=true&w=majority`

class MongoLib {
    constructor() {
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true })
        this.dbName = NAME
    }

    connect() {
        if (!MongoClient.connection) {
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect(err => {
                    if (err) reject(err)
                    console.log('Connected succesfully to mongo')
                    resolve(this.client.db(this.dbName))
                })
            })
        }

        return MongoLib.connection
    }

    getAll(collection, query/* , { page = 1, limit = 50 } */) {
        return this.connect().then(db => db
            .collection(collection)
            .find(query)
            /* .skip(page * limit)
            .limit(limit)
            .sort({ name: 1 }) */
            .toArray()
        )
    }

    get(collection, id) {
        return this.connect().then((db) => db.collection(collection).findOne({ email: id }))
    }

    create(collection, data) {
        return this.connect()
            .then((db) => db.collection(collection).insertOne({ ...data }))
            .then((result) => result.insertedId)
    }

    update(collection, id, data) {
        return this.connect()
            .then((db) => db
                .collection(collection)
                .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: false }))
            .then((result) => result.upsertedId || id)
    }

    delete(collection, id) {
        return this.connect()
            .then((db) => db.collection(collection).deleteOne({ _id: ObjectId(id) }))
            .then(() => id)
    }
}

module.exports = MongoLib
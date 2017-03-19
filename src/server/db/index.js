import mongoose from 'mongoose'
import config from 'config'
import _debug from 'debug'
var debug = _debug('db')

mongoose.connect(config.db.uri)

let db =  mongoose.connection
db.on('error', (err) => {
    debug('DB error: ', err)
})
db.once('open', () => {
    debug('Connected to db')
})
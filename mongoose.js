var mongoose = require('mongoose')
mongoose.connect('mongodb://root:example123@127.0.0.1:27017/test?authSource=admin', { useNewUrlParser: true }) //服务器
mongoose.Promise = global.Promise
module.exports = mongoose

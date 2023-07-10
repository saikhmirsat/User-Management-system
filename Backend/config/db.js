const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb+srv://usermanagementsystem:usermanagementsystem@cluster0.pkwjevg.mongodb.net/usermanagementsystem?retryWrites=true&w=majority')

module.exports = {
    connection
}
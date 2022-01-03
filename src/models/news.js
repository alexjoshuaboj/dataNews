const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    title: {
        type: String
    },
    description:{
        type: String
    },
    date: {
        type: String
    },
    content:{
        type: String
    },
    author:{
        type: String
    },
    archiveDate:{
        type: String
    }
})

module.exports = mongoose.model('News', newsSchema);
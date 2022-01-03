const { Router } = require('express');
const router = Router();
const newsSchema = require('../models/news');

// create new
router.post('/news', (req, res) => {
    const news = newsSchema(req.body);
    news.save()
        .then((data) => res.json(data))
        .catch((err) => res.json(
            {msg: err}
        ))
})

// get all news
router.get('/news', (req, res) => {
    newsSchema.find()
        .then((data) => res.json(data))
        .catch((err) => res.json(
            {msg: err}
        ))
})

// delete new
router.delete('/news/:id', (req, res) => {
    const { id } = req.params;
    newsSchema.remove({ _id : id })
        .then((data) => res.json(data))
        .catch((err) => res.json(
            {msg: err}
        ))
})

// archived new

router.put('/news/:id', (req, res) => {
    const { id } = req.params;
    const { archived } = req.body;
    newsSchema.updateOne({ _id : id }, {$set: { archived }})
        .then((data) => res.json(data))
        .catch((err) => res.json(
            {msg: err}
        ))
})
module.exports = router;
const { Router } = require('express');
const router = Router();
const newsSchema = require('../models/news');

//create new
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

module.exports = router;
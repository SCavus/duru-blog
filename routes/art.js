const express = require('express')
const router = express.Router()
let Art = require('../models/art')

router.get('/', async(req, res) => {
    try {
        const art = await Art.find()
        res.json(art)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.post('/', (req, res) => {
    const post = new Art({
        title: req.body.title,
        url: req.body.url,
        info: req.body.info
    })
    post.save((err, post) => {
        if (err) {
            return err
        } else 
        res.status(201).json(post)
    })
})

module.exports = router
const express = require('express')
const {
    get,
    add } = require('../controllers/postController')

const Post = require('../models/postModel')

const router = express.Router()

router.get('/', get)
router.post('/add', add)

module.exports = router
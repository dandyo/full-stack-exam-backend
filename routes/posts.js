const express = require('express')
const {
    get,
    add,
    deletePost } = require('../controllers/postController')

const Post = require('../models/postModel')

const router = express.Router()

router.get('/', get)
router.post('/', add)
router.delete('/:id', deletePost)

module.exports = router
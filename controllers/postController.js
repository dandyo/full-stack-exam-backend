const Post = require('../models/postModel')
const mongoose = require('mongoose')

const get = async (req, res) => {
    const posts = await Post.find({}).sort({ createdAt: -1 })

    res.status(200).json(posts)
}

const add = async (req, res) => {
    const { caption, image, userid } = req.body

    try {
        const post = await Post.create({ caption, image, userid })

        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deletePost = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no workout found' })
    }

    const post = await Post.findByIdAndDelete({ _id: id })

    if (!post) {
        return res.status(400).json({ error: 'no post found' })
    }

    res.status(200).json(post)
}

module.exports = {
    get,
    add,
    deletePost
}
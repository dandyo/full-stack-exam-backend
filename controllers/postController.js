const Post = require('../models/postModel')

const get = async (req, res) => {
    const posts = await Post.find({}).sort({ createdAt: -1 })

    res.status(200).json(posts)
}

const add = async (req, res) => {
    const { caption, image, userid } = req.body

    try {
        const post = await Post.add(caption, image, userid)

        res.status(200).json({ post })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    get,
    add
}
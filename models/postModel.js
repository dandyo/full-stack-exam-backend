const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    caption: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    }
}, { timestamps: true })

postSchema.statics.add = async function (caption, image, userid) {

    // validation
    if (!caption || !image || !userid) {
        throw Error('All fields are required')
    }

    const post = await this.create({ caption, image, userid })

    return post
}

module.exports = mongoose.model('Post', postSchema)
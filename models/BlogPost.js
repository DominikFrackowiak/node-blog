const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogPostSchema = new Schema({
	title: String,
	body: String,
})

const BlogPost = mongoose.model('BlogPost', BlogPostSchema)
// mongoose will create the model for our BlogPosts collection

module.exports = BlogPost

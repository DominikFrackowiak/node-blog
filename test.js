const mongoose = require('mongoose');

const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://127.0.0.1/my_database')

BlogPost.create({
 title: 'Hello World',
 body: 'Lorem Ipsum Hello World'
})
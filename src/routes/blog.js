const router = require('express').Router();
const Blog = require('../models/Blog')
const {getAllBlogs, createBlog, editBlog, deleteBlog} = require('../controllers/blog')

// Your routing code goes here


router.get('/blog',getAllBlogs)

//creating blog
router.post("/blog", createBlog)
//edit blog
router.patch("/:id" , editBlog)

//delete blog
router.delete("/:id", deleteBlog)


module.exports = router;
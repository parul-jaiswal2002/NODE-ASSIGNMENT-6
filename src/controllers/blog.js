const Blog = require("../models/Blog")
const mongoose = require("mongoose")

//get all blogs
const getAllBlogs = async (req, res) => {
    const blogs = await Blog.find({}).sort({createdAt : -1})
    res.status(200).json(blogs)
}

//creating blog
const createBlog = async (req,res) => {
    const {topic,description, posted_at, posted_by} = req.body
    try{
        
       const newBlog = await Blog.create({topic,description, posted_at, posted_by})
       res.status(200).json(newBlog) 
    }
    catch(error){
       res.status(400).json({error : error.message})
    }
}

//deleting a blog
const deleteBlog = async (req,res) => {
    try{
        const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error : "No Such Id"
        })
    }
    const blog  = await Blog.findByIdAndDelete({_id : id})
    if(!blog){
        return res.status(404).json({
            error : "No such blog"
        })
    }
    res.status(200).json(blog)
    }
    catch(error){
        console.log(error.message)
    }
}

//updating a blog
const editBlog = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "No Such Id"})
    }
    const blog = await Blog.findOneAndUpdate({_id : id}, {
        ...req.body
    })
    if(!blog){
        return res.status(404).json({error : "No such workout"})
    }
    res.status(200).json(blog)
}


module.exports = {
    getAllBlogs,
    createBlog,
    deleteBlog,
    editBlog
}

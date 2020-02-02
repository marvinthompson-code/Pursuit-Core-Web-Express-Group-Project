const likes = require('express').Router();
const { getAllLikes, addSingleLike, deleteSingleLike} = require('');
// these are my queries 

const likesRouter = require('../likes/likes.js')
likes.use('/:id', likesRouter);

// api endpoints

// get all likes for a single post
likes.get("/:post_id", getAllLikes);

// add a single like
likes.post("/:post_id", addSingleLike);

// delete a like
likes.delete("/:id", deleteSingleLike);


module.exports = likes;
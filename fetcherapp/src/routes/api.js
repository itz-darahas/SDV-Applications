const express = require('express');
const axios = require('axios');
const router = express.Router();

const BASE_URL = process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com';

// Fetch and return posts
router.get('/posts', async (req, res, next) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/posts`, { timeout: 5000 });
    res.json(data.slice(0, 20));          // limit response size
  } catch (err) {
    next(err);
  }
});

// Fetch a single post + its comments
router.get('/posts/:id', async (req, res, next) => {
  try {
    const [post, comments] = await Promise.all([
      axios.get(`${BASE_URL}/posts/${req.params.id}`, { timeout: 5000 }),
      axios.get(`${BASE_URL}/posts/${req.params.id}/comments`, { timeout: 5000 }),
    ]);
    res.json({ post: post.data, comments: comments.data });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
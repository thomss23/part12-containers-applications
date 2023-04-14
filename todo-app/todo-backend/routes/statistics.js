const express = require('express');
const router = express.Router();
const redis = require('../redis');

router.get('/', async (req, res) => {
    let numberOfTodos = await redis.getAsync("added_todos");

    if(!numberOfTodos) {
        numberOfTodos = 0;
    }

    res.json({ added_todos: numberOfTodos });
});

module.exports = router;

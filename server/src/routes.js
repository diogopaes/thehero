const express = require('express');

const routes = express.Router();

routes.post('/user', (req, res) => {
  const body = req.body;

  return res.json(body);
});

module.exports = routes;
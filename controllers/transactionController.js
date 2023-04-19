const express = require('express');

//express routing
const transactions = express.Router();
const transactionsArray = require('../models/transactions');

//INDEX
transactions.get('/', (req, res) => {
  res.json(transactionsArray);
});

//UPDATE
transactions.put('/:arrayIndex', (req, res) => {
  if (transactionsArray[req.params.arrayIndex]) {
    transactionsArray[req.params.arrayIndex] = req.body;
    res.status(200).json(transactionsArray[req.params.arrayIndex]);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

//SHOW
transactions.get('/:index', (req, res) => {
  if (transactionsArray[req.params.index]) {
    res.json(transactionsArray[req.params.index]);
  } else {
    res.status(404).json({ error: 'Not found !' });
  }
});

//DESTROY
transactions.delete('/:id', (req, res) => {
  const deletedTransaction = transactionsArray.splice(req.params.indexArray, 1);
  res.status(200).json(deletedTransaction);
});

// CREATE
transactions.post('/new', (req, res) => {
  transactionsArray.unshift(req.body);
  res.json(transactionsArray);
});

module.exports = transactions;

const { ObjectId } = require('mongodb');
const mongodb = require('../db/connect');


const getAll = async (req, res) => {
  try{
    const result = await mongodb.getDb().db('corrective').collection('corrective').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getOne = async (req, res) => {
  try {
    const corrective = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('corrective').collection('corrective').find({ _id: corrective });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  })
  } catch {
    res.status(500).json(err);
  }
};

const createCorrective = async (req, res) => {
  try{ 
    const corrective = {
    corrective_id: req.body.corrective_id,
    description: req.body.description,
    subject: req.body.subject,
    assigned_to: req.body.assigned_to,
    closed: req.body.closed,
    created_date: req.body.created_date,
    closed_date: req.body.closed_date
  };
const response = await mongodb.getDb().db('corrective').collection('corrective').insertOne(corrective);
if (response.acknowledged) {
  res.status(201).json(response);
} else {
  res.status(500).json(response.error || 'Error occured while creating contact.');
}  
} catch {
  res.status(500).json(err);
}
};

const updateContact = async (req, res) => {
  try { 
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
const response = await mongodb.getDb().db('testdb').collection('contacts').replaceOne({_id: userId }, contact);
console.log(response);
if (response.acknowledged) {
  res.status(204).send();
} else {
  res.status(500).json(response.error || 'Error occured shile updating contact.');
}  
} catch {
  res.status(500).json(err);
}
};

const deleteContact = async (req, res) => {
  try{
    const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db('testdb').collection('contacts').deleteOne({_id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(response.error || 'Error occured while deleting contact.');
  }  
} catch {
  res.status(500).json(err);
}
};

module.exports = { getAll, getOne, createCorrective };
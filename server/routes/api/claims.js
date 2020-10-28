const express = require('express');
const mongodb = require('mongodb');
const multer = require('multer');
const upload = multer( { dest: 'uploads/'} ); // Uploads sería la carpeta donde irían los files.

const router = express.Router();

// Get claims by id
router.get('/:id', async (req, res) => {
  const claims = await loadClaimsCollection();
  res.send(await claims.find({ postId: req.params.id }).toArray());
})

// Add claims
router.post('/', upload.single('image') , async (req, res) => {
  const claims = await loadClaimsCollection();
  await claims.insertOne({
    title: req.body.title,
    description: req.body.description,
    id: req.body.id,
    postId: req.body.postId,
    area: req.body.area
  });
  res.status(201).send();
})

async function loadClaimsCollection() {
  const client = await mongodb.MongoClient.connect
  ('mongodb+srv://francoalemandi:Digweed1320@cluster0.x5quc.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true
  });
  return client.db('Cluster0').collection('claims')
}

module.exports = router;
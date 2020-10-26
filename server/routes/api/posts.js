const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get communes
router.get('/', async (req, res) => {
  const communes = await loadPostsCollection();
  res.send(await communes.find({}).toArray());
});

// Get a commune by id
router.get('/:id', async (req, res) => {
  const commune = await loadPostsCollection();
  res.send(await commune.findOne({ id: req.params.id } ));
})

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect
  ('mongodb+srv://francoalemandi:Digweed1320@cluster0.x5quc.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true
  });
  return client.db('Cluster0').collection('posts')
}

module.exports = router;
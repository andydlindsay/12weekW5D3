const express = require('express');
const router = express.Router();
const { getVillains, getVillainById, editVillainById, addVillain, deleteVillain } = require('../data-helpers/villains-queries');

// browse
router.get('/', (request, response) => {
  getVillains((err, villains) => {
    if (err) {
      return response.render('error', err);
    }
    response.render('villains', { villains });
  });
});

// read
router.get('/:id', (request, response) => {
  getVillainById(request.params.id, (err, villain) => {
    if (err) {
      return response.render('error', err);
    }
    response.render('villain', villain[0]);
  });
});

// edit
router.post('/:id', (request, response) => {
  const id = request.params.id;
  editVillainById(id, request.body.newAlias, (err) => {
    if (err) {
      return response.render('error', err);
    }
    response.redirect(`/villains/${id}`);
  });
});

// add
router.get('/new', (request, response) => {
  response.render('new-villain');
});

router.post('/', (request, response) => {
  const { alias, movie } = request.body;
  addVillain(alias, movie, (err) => {
    if (err) {
      return response.render('error', err);
    }
    response.redirect('/villains');
  });
});

// delete
router.post('/:id/delete', (request, response) => {
  const id = request.params.id;
  deleteVillain(id, (err) => {
    if (err) {
      return response.render('error', err);
    }
    response.redirect('/villains');
  });
});

module.exports = router;

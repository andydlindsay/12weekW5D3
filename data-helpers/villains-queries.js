const db = require('./db');

function getVillains(cb) {
  db.query('SELECT * FROM villains;', (err, res) => {
    cb(err, res.rows);
  });
}

function getVillainById(id, cb) {
  db.query('SELECT * FROM villains WHERE id = $1;', [id], (err, res) => {
    cb(err, res.rows);
  });
}

function editVillainById(id, newAlias, cb) {
  db.query('UPDATE villains SET alias = $1 WHERE id = $2', [newAlias, id], (err) => {
    cb(err);
  });
}

function addVillain(alias, movie, cb) {
  db.query('INSERT INTO villains (alias, movie) VALUES ($1, $2);', [alias, movie], (err) => {
    cb(err);    
  });
}

function deleteVillain(id, cb) {
  db.query('DELETE FROM villains WHERE id = $1;', [id], (err) => {
    cb(err);
  });
}

module.exports = {
  getVillains,
  getVillainById,
  editVillainById,
  addVillain,
  deleteVillain
};

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  name: String,
  email: String,
  amigo: String,
});

// Export model.
module.exports = mongoose.model('Person', PersonSchema);

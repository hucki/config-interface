const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const configurationSchema = new Schema({
  enableZoom: Boolean,
  tools: Array,
})

module.exports = mongoose.model('Configuration', configurationSchema);
const mongoose = require('mongoose');

const suggestionSchema = new mongoose.Schema({
  suggestion: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Suggestion = mongoose.model('Suggestion', suggestionSchema);

module.exports = Suggestion;

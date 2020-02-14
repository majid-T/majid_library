var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//my code
var GenreSchema = new Schema(
  {
    name: {type: String, required: true}
  }
);

//my code
// Virtual for genre's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//my code
module.exports = mongoose.model('Genre', GenreSchema);

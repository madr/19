// found at:
// https://github.com/helpers/handlebars-helpers/blob/master/lib/array.js#L58
module.exports = function(array, idx, options) {
  var result = '';

  for (var i = 0; i < idx; i++) {
    result += options.fn(array[i]);
  }
  return result;
};
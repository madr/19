// found at:
// https://github.com/helpers/handlebars-helpers/blob/master/lib/array.js#L58
module.exports = function(array, options) {
  var result = '';

  var months = {
    '01': 'jan', 
    '02': 'feb',
    '03': 'mar',
    '04': 'apr',
    '05': 'maj',
    '06': 'jun',
    '07': 'jul',
    '08': 'aug',
    '09': 'sep',
    '10': 'okt',
    '11': 'nov',
    '12': 'dec'
  };

  for (var i = 0, e = array.length; i < e; i++) {
    var data = array[i]
    var d = data.date.split('-');
    data.m = months[d[1]];
    data.d = parseInt(d[2], 10);
    result += options.fn(data);
  }
  return result;
};
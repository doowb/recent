/*!
 * recent <https://github.com/doowb/recent>
 *
 * Copyright (c) 2015, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

var get = require('get-value');

/**
 * Return the most recent items on an object.
 *
 * ```
 * var top10 = recent(posts);
 * ```
 *
 * @param  {Object} `views` Object hash of items.
 * @param  {Object} `options` Options to determine limit and property to sort on.
 * @return {Object} Object of most recent items.
 * @api public
 */

function recent(views, options) {
  options = options || {};
  var prop = options.prop || 'data.date';
  var limit = options.limit || 10;

  var res = {};

  for (var key in views) {
    if (views.hasOwnProperty(key)) {
      var date = createdDate(key, views[key], prop);
      res[date] = res[date] || [];
      res[date].push(key);
    }
  }

  var keys = Object.keys(res).sort();
  var len = keys.length;
  var num = 0;
  var acc = {};

  while (len-- && num < limit) {
    var arr = res[keys[len]];
    for (var j = 0; j < arr.length; j++) {
      var key = arr[j];
      acc[key] = views[key];
      num++;
      if (num > limit) break;
    }
  }
  return acc;
}

/**
 * Get the date from a specified property or key.
 *
 * @param  {String} `key` Key used as the fallback when the property is not on the value.
 * @param  {Object} `value` Object to use when finding the property.
 * @param  {String} `prop` Property string to use to get the date.
 * @return {String} Date string in the format `YYYYMMDD` (e.g. 20150618)
 */

function createdDate(key, value, prop) {
  var val = prop ? get(value, prop) : value;
  var str = val || key;

  var re = /^(\d{4})-(\d{2})-(\d{2})/;
  var m = re.exec(str);
  if (!m) return null;
  return String(m[1]) + String(m[2]) + String(m[3]);
}

/**
 * Expose `recent`
 */

module.exports = recent;

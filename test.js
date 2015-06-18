'use strict';

var assert = require('assert');
var recent = require('./');

describe('recent', function () {
  it('should return an object sorted by keys', function () {
    var obj = {
      '2015-01-02': { content: 'January 2nd, 2015' },
      '2014-01-02': { content: 'January 2nd, 2014' },
      '2016-01-02': { content: 'January 2nd, 2016' },
      '2015-04-20': { content: 'April 20th, 2015' }
    };

    assert.deepEqual(recent(obj), {
      '2016-01-02': { content: 'January 2nd, 2016' },
      '2015-04-20': { content: 'April 20th, 2015' },
      '2015-01-02': { content: 'January 2nd, 2015' },
      '2014-01-02': { content: 'January 2nd, 2014' }
    });
  });
});

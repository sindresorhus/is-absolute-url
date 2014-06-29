'use strict';
var assert = require('assert');
var isAbsoluteUrl = require('./');

it('should match absolute urls', function () {
	assert(isAbsoluteUrl('http://sindresorhus.com'));
	assert(isAbsoluteUrl('https://sindresorhus.com'));
	assert(isAbsoluteUrl('file://sindresorhus.com'));
	assert(isAbsoluteUrl('//sindresorhus.com'));
	assert(!isAbsoluteUrl('/foo/bar'));
	assert(!isAbsoluteUrl('foo/bar'));
	assert(!isAbsoluteUrl('foo'));
});

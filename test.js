'use strict';
var assert = require('assert');
var isAbsoluteUrl = require('./');

it('should match absolute urls', function () {
	assert(isAbsoluteUrl('http://sindresorhus.com'));
	assert(isAbsoluteUrl('https://sindresorhus.com'));
	assert(isAbsoluteUrl('file://sindresorhus.com'));
	assert(isAbsoluteUrl('mailto:someone@example.com'));
	assert(isAbsoluteUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D'));
	assert(!isAbsoluteUrl('//sindresorhus.com'));
	assert(!isAbsoluteUrl('/foo/bar'));
	assert(!isAbsoluteUrl('foo/bar'));
	assert(!isAbsoluteUrl('foo'));
});

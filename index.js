'use strict';

// Param: httpOnly
// - true : checks http(s) header and correct formatting or URL.
// - false: checks only accordance with rfc3986

module.exports = (url, httpOnly = true) => {
	if (typeof url !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof url}\``);
	}

	// Optional Chaining not supported by XO? please confirm
	if (httpOnly) {
		return /^(((([hH][tT]{2}[pP]([sS])?)?:\/\/)(www\.)?)([-a-zA-Z0-9()@:%_.~#?&//=]*))/g.test(url);
	}

	// Don't match Windows paths `c:\`
	if (/^[a-zA-Z]:\\/.test(url)) {
		return false;
	}

	// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
	// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
	return /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url);
};

'use strict';
module.exports = url => {
	if (typeof url !== 'string') {
		throw new TypeError('Expected a string');
	}

	return /^[a-z][a-z0-9+.-]*:/.test(url);
};

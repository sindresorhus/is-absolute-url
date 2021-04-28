'use strict';

// Options - httpOnly
// - strictest 	> Everything accordingly to RFC 1738 -  Case sensititive
// - strict 	> "Browser readable" -  https://tools.ietf.org/html/rfc1738
// - loose/true > Checks the http protocol only

module.exports = (url, options = {}) => {
	if (typeof url !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof url}\``);
	}

	// Optional Chaining not supported by XO? please confirm
	switch (options.httpOnly) {
		case 'strictest':
			return /(http(s)?:\/\/www\.)[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/g.test(url);

		case 'strict':
			return /(([hH][tT]{2}[pP]([sS])?)?:\/\/)(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/.test(url);

		case 'loose':
		case true:
			return /((([hH][tT]{2}[pP]([sS])?)?:\/\/)(www\.)?)([-a-zA-Z0-9()@:%_.~#?&//=]*)/g.test(url);

		default:
			// Don't match Windows paths `c:\`
			if (/^[a-zA-Z]:\\/.test(url)) {
				return false;
			}

			// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
			// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
			return /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url);
	}
};

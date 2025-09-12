// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;

// Windows paths like `c:\`
const WINDOWS_PATH_REGEX = /^[a-zA-Z]:\\/;

// HTTP(S) protocols only for maximum security
const HTTP_PROTOCOLS_REGEX = /^https?:/i;

export default function isAbsoluteUrl(url, options = {}) {
	if (typeof url !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof url}\``);
	}

	if (WINDOWS_PATH_REGEX.test(url)) {
		return false;
	}

	if (!ABSOLUTE_URL_REGEX.test(url)) {
		return false;
	}

	// Default httpOnly to true for security
	const {httpOnly = true} = options;

	// When httpOnly is false, allow any absolute URL
	if (!httpOnly) {
		return true;
	}

	// When httpOnly is true, only allow HTTP(S) protocols
	return HTTP_PROTOCOLS_REGEX.test(url);
}

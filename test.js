import test from 'ava';
import isAbsoluteUrl from './index.js';

test('main - default httpOnly behavior', t => {
	// Allowed protocols with default httpOnly: true
	t.true(isAbsoluteUrl('http://sindresorhus.com'));
	t.true(isAbsoluteUrl('https://sindresorhus.com'));
	t.true(isAbsoluteUrl('httpS://sindresorhus.com'));

	// Blocked protocols with default httpOnly: true
	t.false(isAbsoluteUrl('ftp://sindresorhus.com'));
	t.false(isAbsoluteUrl('ftps://sindresorhus.com'));
	t.false(isAbsoluteUrl('ws://sindresorhus.com'));
	t.false(isAbsoluteUrl('wss://sindresorhus.com'));
	t.false(isAbsoluteUrl('file://sindresorhus.com'));
	t.false(isAbsoluteUrl('mailto:someone@example.com'));
	t.false(isAbsoluteUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D'));
	// eslint-disable-next-line no-script-url
	t.false(isAbsoluteUrl('javascript:alert(1)'));
	t.false(isAbsoluteUrl('vbscript:alert(1)'));

	// Not absolute URLs
	t.false(isAbsoluteUrl('//sindresorhus.com'));
	t.false(isAbsoluteUrl('/foo/bar'));
	t.false(isAbsoluteUrl('foo/bar'));
	t.false(isAbsoluteUrl('foo'));
	t.false(isAbsoluteUrl('c:\\'));
	t.false(isAbsoluteUrl(String.raw`c:\Dev\test-broken`));
	t.false(isAbsoluteUrl(String.raw`C:\Dev\test-broken`));
	t.false(isAbsoluteUrl('ht,tp://sindresorhus.com'));
});

test('httpOnly: true - explicit', t => {
	// Should be identical to default behavior
	t.true(isAbsoluteUrl('http://example.com', {httpOnly: true}));
	t.true(isAbsoluteUrl('https://example.com', {httpOnly: true}));
	t.false(isAbsoluteUrl('ftp://example.com', {httpOnly: true}));
	// eslint-disable-next-line no-script-url
	t.false(isAbsoluteUrl('javascript:alert(1)', {httpOnly: true}));
});

test('httpOnly: false - allow all absolute URLs', t => {
	// All protocols should be allowed
	t.true(isAbsoluteUrl('http://example.com', {httpOnly: false}));
	t.true(isAbsoluteUrl('https://example.com', {httpOnly: false}));
	t.true(isAbsoluteUrl('ftp://example.com', {httpOnly: false}));
	t.true(isAbsoluteUrl('ws://example.com', {httpOnly: false}));
	// eslint-disable-next-line no-script-url
	t.true(isAbsoluteUrl('javascript:alert(1)', {httpOnly: false}));
	t.true(isAbsoluteUrl('vbscript:alert(1)', {httpOnly: false}));
	t.true(isAbsoluteUrl('data:text/html,<h1>XSS</h1>', {httpOnly: false}));
	t.true(isAbsoluteUrl('file:///etc/passwd', {httpOnly: false}));
	t.true(isAbsoluteUrl('mailto:user@example.com', {httpOnly: false}));
	t.true(isAbsoluteUrl('tel:+1234567890', {httpOnly: false}));
	t.true(isAbsoluteUrl('custom-scheme://example.com', {httpOnly: false}));
	t.true(isAbsoluteUrl('a:b', {httpOnly: false}));

	// Still reject non-absolute URLs
	t.false(isAbsoluteUrl('//example.com', {httpOnly: false}));
	t.false(isAbsoluteUrl('/path/to/file', {httpOnly: false}));
	t.false(isAbsoluteUrl('relative/path', {httpOnly: false}));
	t.false(isAbsoluteUrl('c:\\', {httpOnly: false}));
});

test('URLs with ports, authentication, query strings, and fragments', t => {
	// With httpOnly: true (default)
	t.true(isAbsoluteUrl('http://example.com:8080'));
	t.true(isAbsoluteUrl('https://example.com:443/path'));
	t.true(isAbsoluteUrl('http://user:pass@example.com'));
	t.true(isAbsoluteUrl('https://user:pass@example.com:8080/path'));
	t.true(isAbsoluteUrl('http://example.com?query=value'));
	t.true(isAbsoluteUrl('https://example.com#fragment'));
	t.true(isAbsoluteUrl('http://example.com/path?query=value#fragment'));

	// Blocked with httpOnly: true
	t.false(isAbsoluteUrl('ftp://example.com:21'));
	t.false(isAbsoluteUrl('ws://example.com:80/socket'));
	t.false(isAbsoluteUrl('file://localhost:1234'));
	t.false(isAbsoluteUrl('custom://example.com:9999'));
});

test('edge cases', t => {
	// Mixed case protocols with httpOnly: true
	t.true(isAbsoluteUrl('HtTp://example.com'));
	t.true(isAbsoluteUrl('HttpS://example.com'));

	// Previously allowed protocols now blocked for security
	t.false(isAbsoluteUrl('FTps://example.com'));
	t.false(isAbsoluteUrl('wSS://example.com'));

	// Protocol with minimal content
	t.true(isAbsoluteUrl('http:'));
	t.true(isAbsoluteUrl('https:'));
	t.false(isAbsoluteUrl('ftp:'));
	t.false(isAbsoluteUrl('ws:'));

	// Invalid absolute URLs
	t.false(isAbsoluteUrl('http'));
	t.false(isAbsoluteUrl('https'));
	t.false(isAbsoluteUrl(':http'));
	t.false(isAbsoluteUrl('://example.com'));

	// Empty string and whitespace
	t.false(isAbsoluteUrl(''));
	t.false(isAbsoluteUrl(' '));
	t.false(isAbsoluteUrl(' http://example.com')); // Leading space breaks the pattern
	t.true(isAbsoluteUrl('http://example.com ')); // Trailing space doesn't affect absolute URL detection
});

test('protocol edge cases and security boundaries', t => {
	// Protocol case variations
	t.true(isAbsoluteUrl('Http://example.com'));
	t.true(isAbsoluteUrl('HTTPS://example.com'));
	t.true(isAbsoluteUrl('hTtP://example.com'));

	// Protocol boundary testing
	t.false(isAbsoluteUrl('http-custom://example.com')); // Should be blocked by httpOnly
	t.false(isAbsoluteUrl('https-modified://example.com')); // Should be blocked
	t.true(isAbsoluteUrl('http-custom://example.com', {httpOnly: false})); // Allowed when httpOnly is false

	// Potential bypass attempts
	t.false(isAbsoluteUrl('h\u0000ttp://example.com')); // Null byte
	t.false(isAbsoluteUrl(' http://example.com')); // Leading space
	t.false(isAbsoluteUrl('\thttp://example.com')); // Leading tab
});

test('unicode and internationalized domain names', t => {
	// Unicode in domain names should work
	t.true(isAbsoluteUrl('http://example.测试'));
	t.true(isAbsoluteUrl('https://xn--fsq.xn--0zwm56d')); // IDN encoded
	t.true(isAbsoluteUrl('http://münchen.de'));

	// Unicode in other parts
	t.true(isAbsoluteUrl('http://example.com/测试'));
	t.true(isAbsoluteUrl('http://example.com?query=测试'));
});

test('throws on invalid input', t => {
	t.throws(() => isAbsoluteUrl(null), {instanceOf: TypeError});
	t.throws(() => isAbsoluteUrl(undefined), {instanceOf: TypeError});
	t.throws(() => isAbsoluteUrl(123), {instanceOf: TypeError});
	t.throws(() => isAbsoluteUrl({}), {instanceOf: TypeError});
	t.throws(() => isAbsoluteUrl([]), {instanceOf: TypeError});
	t.throws(() => isAbsoluteUrl(true), {instanceOf: TypeError});
});

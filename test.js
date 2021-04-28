import test from 'ava';
import isAbsoluteUrl from '.';

test('main', t => {
	t.true(isAbsoluteUrl('http://sindresorhus.com'));
	t.true(isAbsoluteUrl('https://sindresorhus.com'));
	t.true(isAbsoluteUrl('httpS://sindresorhus.com'));
	t.true(isAbsoluteUrl('file://sindresorhus.com'));
	t.true(isAbsoluteUrl('mailto:someone@example.com'));
	t.true(isAbsoluteUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D'));
	t.false(isAbsoluteUrl('//sindresorhus.com'));
	t.false(isAbsoluteUrl('/foo/bar'));
	t.false(isAbsoluteUrl('foo/bar'));
	t.false(isAbsoluteUrl('foo'));
	t.false(isAbsoluteUrl('c:\\'));
	t.false(isAbsoluteUrl('c:\\Dev\\test-broken'));
	t.false(isAbsoluteUrl('C:\\Dev\\test-broken'));
	t.false(isAbsoluteUrl('ht,tp://sindresorhus.com'));
});

test('HttpOnly as "strictest"', t => {
	t.true(isAbsoluteUrl('https://www.sindresorhus.com', {httpOnly: 'strictest'}));
	t.false(isAbsoluteUrl('httpS://www.sindresorhus.com', {httpOnly: 'strictest'}));
	t.false(isAbsoluteUrl('https://sindresorhus.com', {httpOnly: 'strictest'}));
	t.false(isAbsoluteUrl('httpS://sindresorhus.com', {httpOnly: 'strictest'}));
	t.false(isAbsoluteUrl('file://sindresorhus.com', {httpOnly: 'strictest'}));
	t.false(isAbsoluteUrl('mailto:someone@example.com', {httpOnly: 'strictest'}));
	t.false(isAbsoluteUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D', {httpOnly: 'strictest'}));
	t.false(isAbsoluteUrl('//sindresorhus.com', {httpOnly: 'strictest'}));
	t.false(isAbsoluteUrl('/foo/bar', {httpOnly: 'strictest'}));
	t.false(isAbsoluteUrl('foo/bar', {httpOnly: 'strictest'}));
	t.false(isAbsoluteUrl('foo', {httpOnly: 'strictest'}));
	t.false(isAbsoluteUrl('c:\\', {httpOnly: 'strictest'}));
	t.false(isAbsoluteUrl('c:\\Dev\\test-broken', {httpOnly: 'strictest'}));
	t.false(isAbsoluteUrl('C:\\Dev\\test-broken', {httpOnly: 'strictest'}));
	t.false(isAbsoluteUrl('ht,tp://sindresorhus.com', {httpOnly: 'strictest'}));
	t.false(isAbsoluteUrl('http://sindresorhus.com', {httpOnly: 'strictest'}));
});

test('HttpOnly as "strict"', t => {
	t.true(isAbsoluteUrl('https://www.sindresorhus.com', {httpOnly: 'strict'}));
	t.true(isAbsoluteUrl('httpS://www.sindresorhus.com', {httpOnly: 'strict'}));
	t.true(isAbsoluteUrl('https://sindresorhus.com', {httpOnly: 'strict'}));
	t.true(isAbsoluteUrl('httpS://sindresorhus.com', {httpOnly: 'strict'}));
	t.false(isAbsoluteUrl('file://sindresorhus.com', {httpOnly: 'strictest'}));
	t.false(isAbsoluteUrl('mailto:someone@example.com', {httpOnly: 'strict'}));
	t.false(isAbsoluteUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D', {httpOnly: 'strict'}));
	t.false(isAbsoluteUrl('//sindresorhus.com', {httpOnly: 'strict'}));
	t.false(isAbsoluteUrl('/foo/bar', {httpOnly: 'strict'}));
	t.false(isAbsoluteUrl('foo/bar', {httpOnly: 'strict'}));
	t.false(isAbsoluteUrl('foo', {httpOnly: 'strict'}));
	t.false(isAbsoluteUrl('c:\\', {httpOnly: 'strict'}));
	t.false(isAbsoluteUrl('c:\\Dev\\test-broken', {httpOnly: 'strict'}));
	t.false(isAbsoluteUrl('C:\\Dev\\test-broken', {httpOnly: 'strict'}));
	t.true(isAbsoluteUrl('http://sindresorhus.com', {httpOnly: 'strict'}));
});

test('HttpOnly as "loose"', t => {
	t.true(isAbsoluteUrl('https://www.sindresorhus.com', {httpOnly: 'loose'}));
	t.true(isAbsoluteUrl('httpS://www.sindresorhus.com', {httpOnly: 'loose'}));
	t.true(isAbsoluteUrl('https://sindresorhus.com', {httpOnly: 'loose'}));
	t.true(isAbsoluteUrl('httpS://sindresorhus.com', {httpOnly: 'loose'}));
	t.true(isAbsoluteUrl('file://sindresorhus.com', {httpOnly: 'loose'}));
	t.false(isAbsoluteUrl('mailto:someone@example.com', {httpOnly: 'loose'}));
	t.false(isAbsoluteUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D', {httpOnly: 'loose'}));
	t.false(isAbsoluteUrl('//sindresorhus.com', {httpOnly: 'loose'}));
	t.false(isAbsoluteUrl('/foo/bar', {httpOnly: 'loose'}));
	t.false(isAbsoluteUrl('foo/bar', {httpOnly: 'loose'}));
	t.false(isAbsoluteUrl('foo', {httpOnly: 'loose'}));
	t.false(isAbsoluteUrl('c:\\', {httpOnly: 'loose'}));
	t.false(isAbsoluteUrl('c:\\Dev\\test-broken', {httpOnly: 'loose'}));
	t.false(isAbsoluteUrl('C:\\Dev\\test-broken', {httpOnly: 'loose'}));
	t.true(isAbsoluteUrl('http://sindresorhus.com', {httpOnly: 'loose'}));
});

test('HttpOnly as \'true\'', t => {
	t.true(isAbsoluteUrl('https://www.sindresorhus.com', {httpOnly: true}));
	t.true(isAbsoluteUrl('httpS://www.sindresorhus.com', {httpOnly: true}));
	t.true(isAbsoluteUrl('https://sindresorhus.com', {httpOnly: true}));
	t.true(isAbsoluteUrl('httpS://sindresorhus.com', {httpOnly: true}));
	t.true(isAbsoluteUrl('file://sindresorhus.com', {httpOnly: true}));
	t.false(isAbsoluteUrl('mailto:someone@example.com', {httpOnly: true}));
	t.false(isAbsoluteUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D', {httpOnly: true}));
	t.false(isAbsoluteUrl('//sindresorhus.com', {httpOnly: true}));
	t.false(isAbsoluteUrl('/foo/bar', {httpOnly: true}));
	t.false(isAbsoluteUrl('foo/bar', {httpOnly: true}));
	t.false(isAbsoluteUrl('foo', {httpOnly: true}));
	t.false(isAbsoluteUrl('c:\\', {httpOnly: true}));
	t.false(isAbsoluteUrl('c:\\Dev\\test-broken', {httpOnly: true}));
	t.false(isAbsoluteUrl('C:\\Dev\\test-broken', {httpOnly: true}));
	t.true(isAbsoluteUrl('http://sindresorhus.com', {httpOnly: true}));
});


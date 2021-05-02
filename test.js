import test from 'ava';
import isAbsoluteUrl from '.';

test('main', t => {
	t.true(isAbsoluteUrl('http://sindresorhus.com'));
	t.true(isAbsoluteUrl('https://sindresorhus.com'));
	t.true(isAbsoluteUrl('httpS://sindresorhus.com'));
	t.false(isAbsoluteUrl('file://sindresorhus.com'));
	t.false(isAbsoluteUrl('mailto:someone@example.com'));
	t.false(isAbsoluteUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D'));
	t.false(isAbsoluteUrl('//sindresorhus.com'));
	t.false(isAbsoluteUrl('/foo/bar'));
	t.false(isAbsoluteUrl('foo/bar'));
	t.false(isAbsoluteUrl('foo'));
	t.false(isAbsoluteUrl('c:\\'));
	t.false(isAbsoluteUrl('c:\\Dev\\test-broken'));
	t.false(isAbsoluteUrl('C:\\Dev\\test-broken'));
	t.false(isAbsoluteUrl('ht,tp://sindresorhus.com'));
});

test('HttpOnly set as true, same behaviour as not passing the httpOnly parameter', t => {
	t.true(isAbsoluteUrl('http://sindresorhus.com', true));
	t.true(isAbsoluteUrl('https://sindresorhus.com', true));
	t.true(isAbsoluteUrl('httpS://sindresorhus.com', true));
	t.false(isAbsoluteUrl('file://sindresorhus.com', true));
	t.false(isAbsoluteUrl('mailto:someone@example.com', true));
	t.false(isAbsoluteUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D', true));
	t.false(isAbsoluteUrl('ht,tp://sindresorhus.com', true));
	t.true(isAbsoluteUrl('https://www.sindresorhus.com', true));
	t.true(isAbsoluteUrl('https://www.sindres.orhus.com/path', true));
	t.true(isAbsoluteUrl('httpS://www.sindresorhus.com', true));
	t.false(isAbsoluteUrl('//sindresorhus.com', true));
	t.false(isAbsoluteUrl('/foo/bar', true));
	t.false(isAbsoluteUrl('foo/bar', true));
	t.false(isAbsoluteUrl('foo', true));
	t.false(isAbsoluteUrl('c:\\', true));
	t.false(isAbsoluteUrl('c:\\Dev\\test-broken', true));
	t.false(isAbsoluteUrl('C:\\Dev\\test-broken', true));
	t.false(isAbsoluteUrl('ht,tp://sindresorhus.com', true));
	t.true(isAbsoluteUrl('https://sindresorhus', true));	// Should this behavior exist? missing TLD?
	// eslint-disable-line no-script-url
	t.false(isAbsoluteUrl('javascript:throw%20document.cookie', true));
});

test('HttpOnly set as False', t => {
	t.true(isAbsoluteUrl('http://sindresorhus.com', false));
	t.true(isAbsoluteUrl('https://sindresorhus.com', false));
	t.true(isAbsoluteUrl('httpS://sindresorhus.com', false));
	t.true(isAbsoluteUrl('file://sindresorhus.com', false));
	t.true(isAbsoluteUrl('mailto:someone@example.com', false));
	t.true(isAbsoluteUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D', false));
	t.false(isAbsoluteUrl('ht,tp://sindresorhus.com', false));
	t.true(isAbsoluteUrl('https://www.sindresorhus.com', false));
	t.true(isAbsoluteUrl('https://www.sindres.orhus.com/path', false));
	t.true(isAbsoluteUrl('httpS://www.sindresorhus.com', false));
	t.false(isAbsoluteUrl('//sindresorhus.com', false));
	t.false(isAbsoluteUrl('/foo/bar', false));
	t.false(isAbsoluteUrl('foo/bar', false));
	t.false(isAbsoluteUrl('foo', false));
	t.false(isAbsoluteUrl('c:\\', false));
	t.false(isAbsoluteUrl('c:\\Dev\\test-broken', false));
	t.false(isAbsoluteUrl('C:\\Dev\\test-broken', false));
	t.false(isAbsoluteUrl('ht,tp://sindresorhus.com', false));
	t.true(isAbsoluteUrl('https://sindresorhus', false));	// Should this behavior exist? missing TLD?
	// eslint-disable-line no-script-url
	t.true(isAbsoluteUrl('javascript:throw%20document.cookie', false));
});

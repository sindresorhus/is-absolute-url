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

test('HttpOnly set as true (same as default behavior). Assert TRUE tests', t => {
	t.true(isAbsoluteUrl('http://sindresorhus.com', {httpOnly: true}));
	t.true(isAbsoluteUrl('https://sindresorhus.com', {httpOnly: true}));
	t.true(isAbsoluteUrl('httpS://sindresorhus.com', {httpOnly: true}));
	t.true(isAbsoluteUrl('https://www.sindresorhus.com', {httpOnly: true}));
	t.true(isAbsoluteUrl('https://www.sindres.orhus.com/path', {httpOnly: true}));
	t.true(isAbsoluteUrl('httpS://www.sindresorhus.com', {httpOnly: true}));
	t.true(isAbsoluteUrl('https://sindresorhus', {httpOnly: true}));	// Should this behavior exist? missing TLD?
	t.true(isAbsoluteUrl('http://sin dresorhus.com', {httpOnly: true}));
});

test('HttpOnly set as true (same as default behavior). Assert FALSE tests', t => {
	t.false(isAbsoluteUrl('yhttp://sindresorhus.com', {httpOnly: true}));
	t.false(isAbsoluteUrl('file://sindresorhus.com', {httpOnly: true}));
	t.false(isAbsoluteUrl('mailto:someone@example.com', {httpOnly: true}));
	t.false(isAbsoluteUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D', {httpOnly: true}));
	t.false(isAbsoluteUrl('ht,tp://sindresorhus.com', {httpOnly: true}));
	t.false(isAbsoluteUrl('//sindresorhus.com', {httpOnly: true}));
	t.false(isAbsoluteUrl('/foo/bar', {httpOnly: true}));
	t.false(isAbsoluteUrl('foo/bar', {httpOnly: true}));
	t.false(isAbsoluteUrl('foo', {httpOnly: true}));
	t.false(isAbsoluteUrl('c:\\', {httpOnly: true}));
	t.false(isAbsoluteUrl('c:\\Dev\\test-broken', {httpOnly: true}));
	t.false(isAbsoluteUrl('C:\\Dev\\test-broken', {httpOnly: true}));
	t.false(isAbsoluteUrl('h t,tp://sindresorhus.com', {httpOnly: true}));
	// T t.false(isAbsoluteUrl('javascript:throw%20document.cookie', true));
});

test('HttpOnly set as False. Assert TRUE tests', t => {
	t.true(isAbsoluteUrl('http://sindresorhus.com', {httpOnly: false}));
	t.true(isAbsoluteUrl('https://sindresorhus.com', {httpOnly: false}));
	t.true(isAbsoluteUrl('httpS://sindresorhus.com', {httpOnly: false}));
	t.true(isAbsoluteUrl('file://sindresorhus.com', {httpOnly: false}));
	t.true(isAbsoluteUrl('mailto:someone@example.com', {httpOnly: false}));
	t.true(isAbsoluteUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D', {httpOnly: false}));
	t.true(isAbsoluteUrl('https://www.sindresorhus.com', {httpOnly: false}));
	t.true(isAbsoluteUrl('https://www.sindres.orhus.com/path', {httpOnly: false}));
	t.true(isAbsoluteUrl('httpS://www.sindresorhus.com', {httpOnly: false}));
	// T t.true(isAbsoluteUrl('javascript:throw%20document.cookie', false));

	t.true(isAbsoluteUrl('https://sindresorhus', {httpOnly: false}));	// Should this behavior exist? missing TLD?...
	t.true(isAbsoluteUrl('http://sindr esorhus.com', {httpOnly: false}));	// ...because this can happen
});

test('HttpOnly set as False. Assert FALSE tests', t => {
	t.false(isAbsoluteUrl('ht,tp://sindresorhus.com', {httpOnly: false}));
	t.false(isAbsoluteUrl('//sindresorhus.com', {httpOnly: false}));
	t.false(isAbsoluteUrl('/foo/bar', {httpOnly: false}));
	t.false(isAbsoluteUrl('foo/bar', {httpOnly: false}));
	t.false(isAbsoluteUrl('foo', {httpOnly: false}));
	t.false(isAbsoluteUrl('c:\\', {httpOnly: false}));
	t.false(isAbsoluteUrl('c:\\Dev\\test-broken', {httpOnly: false}));
	t.false(isAbsoluteUrl('C:\\Dev\\test-broken', {httpOnly: false}));
	t.false(isAbsoluteUrl('ht,tp://sindresorhus.com', {httpOnly: false}));
});

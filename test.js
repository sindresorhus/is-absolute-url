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

test('options => {httpOnly: true}. Assert true', t => {
	t.true(isAbsoluteUrl('http://sindresorhus.com', {httpOnly: true}));
	t.true(isAbsoluteUrl('https://sindresorhus.com', {httpOnly: true}));
	t.true(isAbsoluteUrl('httpS://sindresorhus.com', {httpOnly: true}));
	t.true(isAbsoluteUrl('https://www.sindresorhus.com', {httpOnly: true}));
	t.true(isAbsoluteUrl('https://www.sindres.orhus.com/path', {httpOnly: true}));
	t.true(isAbsoluteUrl('httpS://www.sindresorhus.com', {httpOnly: true}));
	t.true(isAbsoluteUrl('https://sindresorhus', {httpOnly: true}));
	t.true(isAbsoluteUrl('http://sin dresorhus.com', {httpOnly: true}));
});

test('options => {httpOnly: true}. Assert false', t => {
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
	t.false(isAbsoluteUrl('javascript:throw%20document.cookie', {httpOnly: true}));
});

test('options => {httpOnly: false}. Assert true', t => {
	t.true(isAbsoluteUrl('http://sindresorhus.com', {httpOnly: false}));
	t.true(isAbsoluteUrl('https://sindresorhus.com', {httpOnly: false}));
	t.true(isAbsoluteUrl('httpS://sindresorhus.com', {httpOnly: false}));
	t.true(isAbsoluteUrl('file://sindresorhus.com', {httpOnly: false}));
	t.true(isAbsoluteUrl('mailto:someone@example.com', {httpOnly: false}));
	t.true(isAbsoluteUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D', {httpOnly: false}));
	t.true(isAbsoluteUrl('https://www.sindresorhus.com', {httpOnly: false}));
	t.true(isAbsoluteUrl('https://www.sindres.orhus.com/path', {httpOnly: false}));
	t.true(isAbsoluteUrl('httpS://www.sindresorhus.com', {httpOnly: false}));
	t.true(isAbsoluteUrl('javascript:throw%20document.cookie', {httpOnly: false}));
	t.true(isAbsoluteUrl('https://sindresorhus', {httpOnly: false}));
	t.true(isAbsoluteUrl('http://sindr esorhus.com', {httpOnly: false}));
});

test('options => {httpOnly: false}. Assert false', t => {
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

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

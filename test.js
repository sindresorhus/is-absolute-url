import test from 'ava';
import isAbsoluteUrl from '.';

test('main', t => {
	t.true(isAbsoluteUrl('http://sindresorhus.com'));
	t.true(isAbsoluteUrl('https://sindresorhus.com'));
	t.true(isAbsoluteUrl('file://sindresorhus.com'));
	t.true(isAbsoluteUrl('mailto:someone@example.com'));
	t.true(isAbsoluteUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D'));
	t.false(isAbsoluteUrl('//sindresorhus.com'));
	t.false(isAbsoluteUrl('/foo/bar'));
	t.false(isAbsoluteUrl('foo/bar'));
	t.false(isAbsoluteUrl('foo'));
});

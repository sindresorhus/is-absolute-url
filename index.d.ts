/**
Check if a URL is absolute.

@param url - The URL to check.

@example
```
import isAbsoluteUrl = require('is-absolute-url');

isAbsoluteUrl('http://sindresorhus.com/foo/bar');
//=> true

isAbsoluteUrl('//sindresorhus.com');
//=> false

isAbsoluteUrl('foo/bar');
//=> false

isAbsoluteUrl('file://sindresorhus.com', {httpOnly: false});
//=> true
```
*/
interface Options {
	/**
	Check if it's an absolute HTTP URL

	@default true
	*/
	readonly httpOnly?: boolean;
}

declare function isAbsoluteUrl(url: string, httpOnly?: Options): boolean;

export = isAbsoluteUrl;

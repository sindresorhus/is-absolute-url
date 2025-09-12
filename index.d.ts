export type Options = {
	/**
	Only allow HTTP(S) protocols.

	When set to `false`, any valid absolute URL will be accepted, including potentially unsafe protocols like `javascript:`, `ftp:`, `ws:`, etc.

	@default true

	@example
	```
	import isAbsoluteUrl from 'is-absolute-url';

	isAbsoluteUrl('javascript:alert(1)');
	//=> false

	isAbsoluteUrl('javascript:alert(1)', {httpOnly: false});
	//=> true
	```
	*/
	readonly httpOnly?: boolean;
};

/**
Check if a URL is absolute.

@param url - The URL to check.
@param options - Options to customize the behavior.

@example
```
import isAbsoluteUrl from 'is-absolute-url';

isAbsoluteUrl('https://sindresorhus.com/foo/bar');
//=> true

isAbsoluteUrl('//sindresorhus.com');
//=> false

isAbsoluteUrl('foo/bar');
//=> false

isAbsoluteUrl('javascript:alert(1)');
//=> false

isAbsoluteUrl('javascript:alert(1)', {httpOnly: false});
//=> true
```
*/
export default function isAbsoluteUrl(url: string, options?: Options): boolean;

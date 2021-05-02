/**
Check if a URL is absolute.

@param url - The URL to check.
@param httpOnly - checks if is absolute Web URL (default: true)

@example
```
import isAbsoluteUrl = require('is-absolute-url');

isAbsoluteUrl('http://sindresorhus.com/foo/bar');
//=> true

isAbsoluteUrl('//sindresorhus.com');
//=> false

isAbsoluteUrl('foo/bar');
//=> false
```
*/

declare function isAbsoluteUrl(url: string, httpOnly: boolean): boolean;

export = isAbsoluteUrl;

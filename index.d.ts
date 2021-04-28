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
```
*/
declare function isAbsoluteUrl(url: string, options: object): boolean;

export = isAbsoluteUrl;

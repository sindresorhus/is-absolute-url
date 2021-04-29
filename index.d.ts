/**
Check if a URL is absolute.
@param url - The URL to check.
@param options - Object with different parameters to check.

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
interface Options {
    httpOnly?: boolean | string;
  }

declare function isAbsoluteUrl(url: string, options: Options): boolean;

export = isAbsoluteUrl;

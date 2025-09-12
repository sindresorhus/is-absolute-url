# is-absolute-url

> Check if a URL is absolute

## Install

```sh
npm install is-absolute-url
```

## Usage

```js
import isAbsoluteUrl from 'is-absolute-url';

isAbsoluteUrl('https://sindresorhus.com/foo/bar');
//=> true

isAbsoluteUrl('//sindresorhus.com');
//=> false

isAbsoluteUrl('foo/bar');
//=> false
```

## Related

See [is-relative-url](https://github.com/sindresorhus/is-relative-url) for the inverse.

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

isAbsoluteUrl('javascript:alert(1)');
//=> false

isAbsoluteUrl('javascript:alert(1)', {httpOnly: false});
//=> true
```

## API

### isAbsoluteUrl(url, options?)

#### url

Type: `string`

The URL to check.

#### options

Type: `object`

##### httpOnly

Type: `boolean`\
Default: `true`

Only allow HTTP(S) protocols.

When set to `false`, any valid absolute URL will be accepted, including potentially unsafe protocols like `javascript:`, `ftp:`, `ws:`, etc.

> **Warning**: Setting `httpOnly` to `false` can pose security risks as it will return `true` for URLs with protocols like `javascript:`, `vbscript:`, `data:`, `ftp:`, `ws:`, etc. Only set this to `false` if you understand the implications and have appropriate safeguards in place.

## Related

See [is-relative-url](https://github.com/sindresorhus/is-relative-url) for the inverse.

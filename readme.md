# is-absolute-url

> Check if a URL is absolute


## Install

```
$ npm install is-absolute-url
```


## Usage

```js
const isAbsoluteUrl = require('is-absolute-url');

isAbsoluteUrl('https://sindresorhus.com/foo/bar');
//=> true

isAbsoluteUrl('//sindresorhus.com');
//=> false

isAbsoluteUrl('foo/bar');
//=> false
```

### Options

#### httpOnly

Type: `boolean`\
Default: `true`

Check for the HTTP protocol in a URL.

```js
isAbsoluteUrl('https://si', {httpOnly: true});
//=> true

isAbsoluteUrl('mailto:someone@example.com', {httpOnly: false});
//=> true

isAbsoluteUrl('data:text/plain;base64,SGV', {httpOnly: false});
//=> true
```


## Related

See [is-relative-url](https://github.com/sindresorhus/is-relative-url) for the inverse.


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-is-absolute-url?utm_source=npm-is-absolute-url&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
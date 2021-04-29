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

## Options

### httpOnly

You can pass an object as a second parameter.

```js
isAbsoluteUrl('https://si', { httpOnly: true });
//=> true

is absoluteUrl('mailto:someone@example.com', { httpOnly: true });
//=> false
```

You can also set the `httpOnly` to `strictest` or `strict`. Check the tests for examples.

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
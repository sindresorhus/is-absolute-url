# is-absolute-url

  

> Check if a URL is absolute

  
  

## Install

  

```

$ npm install is-absolute-url

```

  
  

## Usage
  
## Classic Usage
```js

const  isAbsoluteUrl = require('is-absolute-url');

isAbsoluteUrl('https://sindresorhus.com/foo/bar');
//=> true

isAbsoluteUrl('//sindresorhus.com');
//=> false

isAbsoluteUrl('foo/bar');
//=> false
```


## Options Parameters  

### httpOnly  

Why use httpOnly?
**Default:**    
`isAbsoluteUrl('httpS://www.sindresorhus')` => `true`

**With httpOnly**:  
`isAbsoluteUrl('httpS://www.sindresorhus', {httpOnly: 'strictest')` => `false`  
`isAbsoluteUrl('httpS://www.sindresorhus', {httpOnly: 'strict')` => `false`  
`isAbsoluteUrl('httpS://www.sindresorhus', {httpOnly: 'loose')` => `true`

This way it's possible to quickly differentiate a string that starts with the `http` protocol vs a "proper" absolut Web Url.

#### > 'strictest'
Checks for the `https://` (or non-secure `http`), `www` and the TLDomain (p.e. `.com`)

```js
isAbsoluteUrl('https://www.sindresorhus.com/path/to/file', {httpOnly: 'strictest');
//=> true

isAbsoluteUrl('httpS://www.sindresorhus.com', {httpOnly: 'strictest');
//=> false

isAbsoluteUrl('https://sindresorhus.com', {httpOnly: 'strictest');
//=> false // no 'www' present

isAbsoluteUrl('foo/bar');
//=> false
```

#### > 'strict'
Made for "browser readable" strings.  Checks for the `https://`,  and the TLDomain (p.e. `.com`)

```js
isAbsoluteUrl('https://www.sindresorhus.com/path/to/file', {httpOnly: 'strict');
//=> true

isAbsoluteUrl('httpS://www.sindresorhus.com', {httpOnly: 'strict');
//=> true

isAbsoluteUrl('https://sindresorhus.com', {httpOnly: 'strict');
//=> true

is absoluteUrl('mailto:someone@example.com', {httpOnly: 'strict');
//=> false

isAbsoluteUrl('foo/bar');
//=> false
```

#### > 'loose'
Check for the header of the `http` protocol.  Only

```js
isAbsoluteUrl('https://www.sindresorhus.com/path/to/file', {httpOnly: 'loose');
//=> true

isAbsoluteUrl('httpS://www.sindresorhus.com', {httpOnly: 'loose');
//=> true

isAbsoluteUrl('https://si', {httpOnly: 'loose');
//=> true

is absoluteUrl('mailto:someone@example.com', {httpOnly: 'loose');
//=> false

isAbsoluteUrl('foo/bar');
//=> false
```

#### >true
Same as `loose`.

## For more examples  please check the [tests file](/test.js)
  
  

## Related

  

See [is-relative-url](https://github.com/sindresorhus/is-relative-url) for the inverse.

  
  
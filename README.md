# recent [![NPM version](https://badge.fury.io/js/recent.svg)](http://badge.fury.io/js/recent)  [![Build Status](https://travis-ci.org/doowb/recent.svg)](https://travis-ci.org/doowb/recent)

> Filter an object to return the most recent values.

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i recent --save
```

## Usage

```js
var recent = require('recent');
```

## API

<!-- add a path or glob pattern for files with code comments to use for docs  -->

### [recent](index.js#L25)

Return the most recent items on an object.

**Params**

* `views` **{Object}**: Object hash of items.
* `options` **{Object}**: Options to determine limit and property to sort on.
* `returns` **{Object}**: Object of most recent items.

**Example**

```
var top10 = recent(posts);
```

### Options

* `limit`: determines the number of items to return
* `prop`: the property to sort on. by default either the key is used, or the `data.date` property if it exists on the object.

## Related projects

<!-- add an array of related projects, then un-escape the helper -->

* [assemble](http://assemble.io): Static site generator for Grunt.js, Yeoman and Node.js. Used by Zurb Foundation, Zurb Ink, H5BP/Effeckt,… [more](http://assemble.io)
* [template](https://github.com/jonschlinkert/template): Render templates using any engine. Supports, layouts, pages, partials and custom template types. Use template… [more](https://github.com/jonschlinkert/template)
* [verb](https://github.com/assemble/verb): Documentation generator for GitHub projects. Extremely powerful, easy to use, can generate anything from API… [more](https://github.com/assemble/verb)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/doowb/recent/issues/new)

## Author

**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/doowb)

## License

Copyright © 2015 Brian Woodward
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on June 18, 2015._
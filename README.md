<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# negaLucasf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the nth [negaLucas number][lucas-number] in single-precision floating-point format.

<section class="intro">

The [negaLucas numbers][lucas-number] are the integer sequence

<!-- <equation class="equation" label="eq:negalucasf_sequence" align="center" raw="2, -1, 3, -4, 7, -11, 18, -29, 47, -76, 123, -199, 322, \ldots" alt="NegaLucas sequence"> -->

```math
2, -1, 3, -4, 7, -11, 18, -29, 47, -76, 123, -199, 322, \ldots
```

<!-- <div class="equation" align="center" data-raw-text="2, -1, 3, -4, 7, -11, 18, -29, 47, -76, 123, -199, 322, \ldots" data-equation="eq:negalucasf_sequence">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/negalucasf/docs/img/equation_negalucas_sequence.svg" alt="NegaLucas sequence">
    <br>
</div> -->

<!-- </equation> -->

The sequence is defined by the recurrence relation

<!-- <equation class="equation" label="eq:negalucasf_recurrence_relation" align="center" raw="L_{n-2} = L_{n} - L_{n-1}" alt="NegaLucas sequence recurrence relation"> -->

```math
L_{n-2} = L_{n} - L_{n-1}
```

<!-- <div class="equation" align="center" data-raw-text="L_{n-2} = L_{n} - L_{n-1}" data-equation="eq:negalucasf_recurrence_relation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/negalucasf/docs/img/equation_negalucas_recurrence_relation.svg" alt="NegaLucas sequence recurrence relation">
    <br>
</div> -->

<!-- </equation> -->

which yields

<!-- <equation class="equation" label="eq:negalucasf_lucas" align="center" raw="L_{-n} = (-1)^{n} L_n" alt="NegaLucas relationship to Lucas numbers"> -->

```math
L_{-n} = (-1)^{n} L_n
```

<!-- <div class="equation" align="center" data-raw-text="L_{-n} = (-1)^{n} L_n" data-equation="eq:negalucasf_lucas">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/negalucasf/docs/img/equation_negalucas_lucas.svg" alt="NegaLucas relationship to Lucas numbers">
    <br>
</div> -->

<!-- </equation> -->

with seed values `L_0 = 2` and `L_{-1} = -1`.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-negalucasf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var negalucasf = require( '@stdlib/math-base-special-negalucasf' );
```

#### negalucasf( n )

Computes the nth [negaLucas number][lucas-number] in single-precision floating-point format.

```javascript
var v = negalucasf( 0 );
// returns 2

v = negalucasf( -1 );
// returns -1

v = negalucasf( -2 );
// returns 3

v = negalucasf( -3 );
// returns -4

v = negalucasf( -34 );
// returns 12752043
```

If `n < -34`, the function returns `NaN`, as larger [negaLucas numbers][lucas-number] cannot be safely represented in [single-precision floating-point format][ieee754].

```javascript
var v = negalucasf( -35 );
// returns NaN
```

If not provided a nonpositive integer value, the function returns `NaN`.

```javascript
var v = negalucasf( -3.14 );
// returns NaN

v = negalucasf( 1 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = negalucasf( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var negalucasf = require( '@stdlib/math-base-special-negalucasf' );

var v;
var i;

for ( i = 0; i > -35; i-- ) {
    v = negalucasf( i );
    console.log( v );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/negalucasf.h"
```

#### stdlib_base_negalucasf( n )

Computes the nth [negaLucas number][lucas-number] in single-precision floating-point format.

```c
float out = stdlib_base_negalucasf( 0.0f );
// returns 0.0f

out = stdlib_base_negalucasf( -1.0f );
// returns -1.0f
```

The function accepts the following arguments:

-   **n**: `[in] float` input value.

```c
float stdlib_base_negalucasf( const float n );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/negalucasf.h"
#include <stdio.h>

int main( void ) {
    float i;
    float v;

    for ( i = 0.0f; i > -35.0f; i-- ) {
        v = stdlib_base_negalucasf( i );
        printf( "negalucasf(%f) = %f\n", i, v );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-negalucasf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-negalucasf

[test-image]: https://github.com/stdlib-js/math-base-special-negalucasf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-negalucasf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-negalucasf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-negalucasf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-negalucasf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-negalucasf/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-negalucasf/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-negalucasf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-negalucasf/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-negalucasf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-negalucasf/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-negalucasf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-negalucasf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-negalucasf/main/LICENSE

[lucas-number]: https://en.wikipedia.org/wiki/Lucas_number

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->

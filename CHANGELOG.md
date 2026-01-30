# CHANGELOG

> Package changelog.

<section class="release" id="v0.1.0">

## 0.1.0 (2026-01-30)

<section class="features">

### Features

-   [`3b4514d`](https://github.com/stdlib-js/stdlib/commit/3b4514d1272ea9e4863381e3d0febd02ba8d230f) - add `math/base/special/negalucasf`

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`8c5f190`](https://github.com/stdlib-js/stdlib/commit/8c5f190a58f09d525dcf7717c91225cbc496c907): update signature to accept floats

    -   User code should behave similarly in the primary case of providing integer-valued input values. However, no longer will real-values truncate. Now, real-valued inputs will result in `NaN`, which is, arguably, better behavior, as real-to-integer truncation can be a source of silent bugs.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`188cfff`](https://github.com/stdlib-js/stdlib/commit/188cfffd777a44bad09a3261286d64824a03ffbd) - **chore:** add structured package data for `math/base/special/negalucasf` [(#8402)](https://github.com/stdlib-js/stdlib/pull/8402) _(by Manvith M)_
-   [`81f904d`](https://github.com/stdlib-js/stdlib/commit/81f904da25808197e2ae83ebf9c8b26860855e7c) - **bench:** fix failing C benchmarks by using `round` and `roundf` [(#7980)](https://github.com/stdlib-js/stdlib/pull/7980) _(by Gunj Joshi)_
-   [`8c5f190`](https://github.com/stdlib-js/stdlib/commit/8c5f190a58f09d525dcf7717c91225cbc496c907) - **refactor:** modify C implementation to accept `float` value instead of `int32` in `math/base/special/negalucasf` [(#7956)](https://github.com/stdlib-js/stdlib/pull/7956) _(by Gunj Joshi, Athan Reines)_
-   [`a1e230f`](https://github.com/stdlib-js/stdlib/commit/a1e230f29297caa89880e9c194c615a0400fb7bc) - **chore:** clean up cppcheck-suppress comments _(by Karan Anand)_
-   [`811e510`](https://github.com/stdlib-js/stdlib/commit/811e5106adc9ab855d7992985e1719fc25642125) - **bench:** update random value generation [(#6232)](https://github.com/stdlib-js/stdlib/pull/6232) _(by Harsh Yadav, Athan Reines)_
-   [`c13062e`](https://github.com/stdlib-js/stdlib/commit/c13062e5b90cbe28ec62f0b690211bd14b626cf3) - **style:** update to use tabs for indentation _(by Philipp Burckhardt)_
-   [`8bf8285`](https://github.com/stdlib-js/stdlib/commit/8bf8285aba0ecbd00ae145c4c5c098cd28135814) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`66b4609`](https://github.com/stdlib-js/stdlib/commit/66b4609cee9e428f80bc78da231d2be8e7b223cc) - **refactor:** use inbuilt macro instead of new variable for `MAX_SAFE_NTH_LUCAS` [(#3980)](https://github.com/stdlib-js/stdlib/pull/3980) _(by Aayush Khanna)_
-   [`6bbf2d6`](https://github.com/stdlib-js/stdlib/commit/6bbf2d67034e056190594bf2bceca4eb40a66b6f) - **style:** fix indentation _(by Philipp Burckhardt)_
-   [`3b4514d`](https://github.com/stdlib-js/stdlib/commit/3b4514d1272ea9e4863381e3d0febd02ba8d230f) - **feat:** add `math/base/special/negalucasf` _(by Aayush Khanna, stdlib-bot, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 7 people contributed to this release. Thank you to the following contributors:

-   Aayush Khanna
-   Athan Reines
-   Gunj Joshi
-   Harsh Yadav
-   Karan Anand
-   Manvith M
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->


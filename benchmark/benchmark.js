/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var roundf = require( '@stdlib/math-base-special-roundf' );
var pow = require( '@stdlib/math-base-special-pow' );
var absf = require( '@stdlib/math-base-special-absf' );
var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var PHI = require( '@stdlib/constants-float32-phi' );
var zeros = require( '@stdlib/array-base-zeros' );
var pkg = require( './../package.json' ).name;
var NEGALUCAS = require( './../lib/negalucas.json' );
var negalucasf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var x;
	var y;
	var i;

	x = discreteUniform( 100, -34, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = negalucasf( x[ i % x.length ] );
		if ( isnanf( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::analytic', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = discreteUniform( 100, -34, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = negalucasf( x[ i % x.length ] );
		if ( isnanf( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function negalucasf( n ) {
		var an = absf( n );
		return pow( -1.0, an ) * roundf( pow( PHI, an ) );
	}
});

bench( pkg+'::table', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = discreteUniform( 100, -34, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = NEGALUCAS[ absf( x[ i % x.length ] ) ];
		if ( isnanf( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::naive_recursion', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = discreteUniform( 100, -20, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = negalucasf( x[ i % x.length ] );
		if ( isnanf( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function negalucasf( n ) {
		if ( n === 0 ) {
			return 2;
		}
		if ( n === -1 ) {
			return -1;
		}
		return negalucasf( n+2 ) - negalucasf( n+1 );
	}
});

bench( pkg+'::recursion_memoized', function benchmark( b ) {
	var arr;
	var N;
	var x;
	var y;
	var i;

	arr = zeros( 35 );
	arr[ 0 ] = 2;
	arr[ 1 ] = -1;
	N = 1;

	x = discreteUniform( 100, -20, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = negalucasf( x[ i % x.length ] );
		if ( isnanf( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function negalucasf( n ) {
		var an = absf( n );
		if ( an <= N ) {
			return arr[ an ];
		}
		arr[ an ] = negalucasf( n+2 ) - negalucasf( n+1 );
		return arr[ an ];
	}
});

bench( pkg+'::naive_iterative', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = discreteUniform( 100, -34, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = negalucasf( x[ i % x.length ] );
		if ( isnanf( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function negalucasf( n ) {
		var arr;
		var an;
		var i;

		an = absf( n );

		arr = zeros( an+1 );
		arr[ 0 ] = 2;
		arr[ 1 ] = -1;
		for ( i = 2; i <= an; i++ ) {
			arr[ i ] = arr[ i-2 ] - arr[ i-1 ];
		}
		return arr[ an ];
	}
});

bench( pkg+'::iterative', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = discreteUniform( 100, -34, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = negalucasf( x[ i % x.length ] );
		if ( isnanf( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function negalucasf( n ) {
		var an;
		var a;
		var b;
		var c;
		var i;

		an = absf( n );

		a = 2;
		b = -1;
		for ( i = 2; i <= an; i++ ) {
			c = a - b;
			a = b;
			b = c;
		}
		return b;
	}
});

bench( pkg+'::iterative_memoized', function benchmark( b ) {
	var arr;
	var N;
	var x;
	var y;
	var i;

	arr = zeros( 35 );
	arr[ 0 ] = 2;
	arr[ 1 ] = -1;
	N = 2;

	x = discreteUniform( 100, -34, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = negalucasf( x[ i % x.length ] );
		if ( isnanf( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function negalucasf( n ) {
		var an;
		var i;

		an = absf( n );
		if ( an > N ) {
			for ( i = N; i <= an; i++ ) {
				arr[ i ] = arr[ i-2 ] - arr[ i-1 ];
			}
			N = an;
		}
		return arr[ an ];
	}
});

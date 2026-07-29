"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var i=a(function(l,f){f.exports=[2,-1,3,-4,7,-11,18,-29,47,-76,123,-199,322,-521,843,-1364,2207,-3571,5778,-9349,15127,-24476,39603,-64079,103682,-167761,271443,-439204,710647,-1149851,1860498,-3010349,4870847,-7881196,12752043]});var s=a(function(p,u){
var n=require('@stdlib/math-base-assert-is-nanf/dist'),v=require('@stdlib/math-base-assert-is-integerf/dist'),q=require('@stdlib/math-base-special-absf/dist'),N=require('@stdlib/constants-float32-max-safe-nth-lucas/dist'),c=i();function A(e){var r;return n(e)||v(e)===!1||e>0?NaN:(r=q(e),r>N?NaN:c[r])}u.exports=A
});var o=s();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

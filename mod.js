// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=Math.floor,r="function"==typeof Math.fround?Math.fround:null;var o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var a=Object.prototype.hasOwnProperty;var e="function"==typeof Symbol?Symbol:void 0,f="function"==typeof e?e.toStringTag:"";var l=o&&"symbol"==typeof Symbol.toStringTag?function(t){var r,o,e,l,u;if(null==t)return n.call(t);o=t[f],u=f,r=null!=(l=t)&&a.call(l,u);try{t[f]=void 0}catch(r){return n.call(t)}return e=n.call(t),r?t[f]=o:delete t[f],e}:function(t){return n.call(t)},u="function"==typeof Float32Array;var c=Number.POSITIVE_INFINITY,y="function"==typeof Float32Array?Float32Array:null;var i="function"==typeof Float32Array?Float32Array:void 0;var p=new(function(){var t,r,o;if("function"!=typeof y)return!1;try{r=new y([1,3.14,-3.14,5e40]),o=r,t=(u&&o instanceof Float32Array||"[object Float32Array]"===l(o))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===c}catch(r){t=!1}return t}()?i:function(){throw new Error("not implemented")})(1);var v="function"==typeof r?r:function(t){return p[0]=t,p[0]};var b=[2,-1,3,-4,7,-11,18,-29,47,-76,123,-199,322,-521,843,-1364,2207,-3571,5778,-9349,15127,-24476,39603,-64079,103682,-167761,271443,-439204,710647,-1149851,1860498,-3010349,4870847,-7881196,12752043];function m(r){var o,n;return(n=r)!=n||!1===function(r){return r=v(r),t(r)===r}(r)||r>0?NaN:(o=function(t){return Math.abs(t)}(r),o>34?NaN:b[o])}export{m as default};
//# sourceMappingURL=mod.js.map

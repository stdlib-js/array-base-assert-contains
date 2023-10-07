// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(r){return"string"==typeof r}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,h=/e\+(\d)$/,p=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function d(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=y.call(n,v,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=y.call(n,h,"e+0$1"),n=y.call(n,p,"e-0$1"),r.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):c.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var T=String.fromCharCode,_=isNaN,x=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,a,l,c,s,y;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",c=1,s=0;s<r.length;s++)if(f(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function R(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(L(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function S(r){return"string"==typeof r}function B(r){var e,t,n;if(!S(r))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=R(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var I,C=Object.prototype,F=C.toString,O=C.__defineGetter__,M=C.__defineSetter__,U=C.__lookupGetter__,N=C.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(U.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&O&&O.call(r,e,t.get),a&&M&&M.call(r,e,t.set),r};var P=I;function Y(r,e,t){P(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return"function"==typeof r.get&&"function"==typeof r.set}var $={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function G(r){var e=$[r];return"function"==typeof e?e:$.default}var Z={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function X(r){var e=Z[r];return"function"==typeof e?e:Z.default}var J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return J&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function H(r,e){return null!=r&&D.call(r,e)}var K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"";var rr=z()?function(r){var e,t,n;if(null==r)return q.call(r);t=r[Q],e=H(r,Q);try{r[Q]=void 0}catch(e){return q.call(r)}return n=q.call(r),e?r[Q]=t:delete r[Q],n}:function(r){return q.call(r)};var er=Array.isArray?Array.isArray:function(r){return"[object Array]"===rr(r)};function tr(r){return null!==r&&"object"==typeof r}function nr(r){return tr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function ir(){return/^\s*function\s*([^(]*)/i}Y(tr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!er(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(tr));var or=/^\s*function\s*([^(]*)/i;function ar(r){var e,t,n;if(("Object"===(t=rr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=or.exec(n.toString()))return e[1]}return nr(r)?"Buffer":t}Y(ir,"REGEXP",or);var ur={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},fr="function"==typeof Float64Array;var lr="function"==typeof Float64Array?Float64Array:null;var cr="function"==typeof Float64Array?Float64Array:void 0;var sr=function(){var r,e,t;if("function"!=typeof lr)return!1;try{e=new lr([1,3.14,-3.14,NaN]),t=e,r=(fr&&t instanceof Float64Array||"[object Float64Array]"===rr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")},yr="function"==typeof Float32Array;var hr=Number.POSITIVE_INFINITY,pr="function"==typeof Float32Array?Float32Array:null;var gr="function"==typeof Float32Array?Float32Array:void 0;var mr=function(){var r,e,t;if("function"!=typeof pr)return!1;try{e=new pr([1,3.14,-3.14,5e40]),t=e,r=(yr&&t instanceof Float32Array||"[object Float32Array]"===rr(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===hr}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")},wr="function"==typeof Uint32Array;var br="function"==typeof Uint32Array?Uint32Array:null;var vr="function"==typeof Uint32Array?Uint32Array:void 0;var dr=function(){var r,e,t;if("function"!=typeof br)return!1;try{e=new br(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(wr&&t instanceof Uint32Array||"[object Uint32Array]"===rr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")},Er="function"==typeof Int32Array;var Ar="function"==typeof Int32Array?Int32Array:null;var Tr="function"==typeof Int32Array?Int32Array:void 0;var _r=function(){var r,e,t;if("function"!=typeof Ar)return!1;try{e=new Ar([1,3.14,-3.14,2147483648]),t=e,r=(Er&&t instanceof Int32Array||"[object Int32Array]"===rr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Tr:function(){throw new Error("not implemented")},xr="function"==typeof Uint16Array;var jr="function"==typeof Uint16Array?Uint16Array:null;var kr="function"==typeof Uint16Array?Uint16Array:void 0;var Vr=function(){var r,e,t;if("function"!=typeof jr)return!1;try{e=new jr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(xr&&t instanceof Uint16Array||"[object Uint16Array]"===rr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?kr:function(){throw new Error("not implemented")},Lr="function"==typeof Int16Array;var Rr="function"==typeof Int16Array?Int16Array:null;var Sr="function"==typeof Int16Array?Int16Array:void 0;var Br=function(){var r,e,t;if("function"!=typeof Rr)return!1;try{e=new Rr([1,3.14,-3.14,32768]),t=e,r=(Lr&&t instanceof Int16Array||"[object Int16Array]"===rr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Sr:function(){throw new Error("not implemented")},Ir="function"==typeof Uint8Array;var Cr="function"==typeof Uint8Array?Uint8Array:null;var Fr="function"==typeof Uint8Array?Uint8Array:void 0;var Or=function(){var r,e,t;if("function"!=typeof Cr)return!1;try{e=new Cr(e=[1,3.14,-3.14,256,257]),t=e,r=(Ir&&t instanceof Uint8Array||"[object Uint8Array]"===rr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Fr:function(){throw new Error("not implemented")},Mr="function"==typeof Uint8ClampedArray;var Ur="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Nr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Pr=function(){var r,e,t;if("function"!=typeof Ur)return!1;try{e=new Ur([-1,0,1,3.14,4.99,255,256]),t=e,r=(Mr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===rr(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Nr:function(){throw new Error("not implemented")},Yr="function"==typeof Int8Array;var Wr="function"==typeof Int8Array?Int8Array:null;var $r="function"==typeof Int8Array?Int8Array:void 0;var Gr=function(){var r,e,t;if("function"!=typeof Wr)return!1;try{e=new Wr([1,3.14,-3.14,128]),t=e,r=(Yr&&t instanceof Int8Array||"[object Int8Array]"===rr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?$r:function(){throw new Error("not implemented")};function Zr(r){return"number"==typeof r}var Xr=Number,Jr=Xr.prototype.toString;var zr=z();function qr(r){return"object"==typeof r&&(r instanceof Xr||(zr?function(r){try{return Jr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===rr(r)))}function Dr(r){return Zr(r)||qr(r)}Y(Dr,"isPrimitive",Zr),Y(Dr,"isObject",qr);var Hr=Xr.NEGATIVE_INFINITY,Kr=Math.floor;function Qr(r){return Kr(r)===r}function re(r){return r<hr&&r>Hr&&Qr(r)}function ee(r){return Zr(r)&&re(r)}function te(r){return qr(r)&&re(r.valueOf())}function ne(r){return ee(r)||te(r)}function ie(r){return ee(r)&&r>=0}function oe(r){return te(r)&&r.valueOf()>=0}function ae(r){return ie(r)||oe(r)}Y(ne,"isPrimitive",ee),Y(ne,"isObject",te),Y(ae,"isPrimitive",ie),Y(ae,"isObject",oe);function ue(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Qr(r.length)&&r.length>=0&&r.length<=4294967295}function fe(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Qr(r.length)&&r.length>=0&&r.length<=9007199254740991}var le="function"==typeof ArrayBuffer;function ce(r){return le&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===rr(r)}function se(r){return"object"==typeof r&&null!==r&&!er(r)}var ye=/./;function he(r){return"boolean"==typeof r}var pe=Boolean,ge=Boolean.prototype.toString;var me=z();function we(r){return"object"==typeof r&&(r instanceof pe||(me?function(r){try{return ge.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===rr(r)))}function be(r){return he(r)||we(r)}function ve(){return new Function("return this;")()}Y(be,"isPrimitive",he),Y(be,"isObject",we);var de="object"==typeof self?self:null,Ee="object"==typeof window?window:null,Ae="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Te="object"==typeof Ae?Ae:null,_e="object"==typeof globalThis?globalThis:null;var xe=function(r){if(arguments.length){if(!he(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ve()}if(_e)return _e;if(de)return de;if(Ee)return Ee;if(Te)return Te;throw new Error("unexpected error. Unable to resolve global object.")}(),je=xe.document&&xe.document.childNodes,ke=Int8Array;var Ve="function"==typeof ye||"object"==typeof ke||"function"==typeof je?function(r){return ar(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ar(r).toLowerCase():e};function Le(r){return"function"===Ve(r)}function Re(r,e){if(!(this instanceof Re))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Zr(r))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Zr(e))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Y(Re,"BYTES_PER_ELEMENT",8),Y(Re.prototype,"BYTES_PER_ELEMENT",8),Y(Re.prototype,"byteLength",16),Y(Re.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(Re.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Se="function"==typeof Math.fround?Math.fround:null,Be=new mr(1);var Ie="function"==typeof Se?Se:function(r){return Be[0]=r,Be[0]};function Ce(r,e){if(!(this instanceof Ce))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Zr(r))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Zr(e))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Ie(r)}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Ie(e)}),this}function Fe(r){return r instanceof Re||r instanceof Ce||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Oe(r){return Qr(r/2)}function Me(){return"function"==typeof K&&"symbol"==typeof K("foo")&&H(K,"iterator")&&"symbol"==typeof K.iterator}Y(Ce,"BYTES_PER_ELEMENT",4),Y(Ce.prototype,"BYTES_PER_ELEMENT",4),Y(Ce.prototype,"byteLength",8),Y(Ce.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(Ce.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var Ue=Me()?Symbol.iterator:null;function Ne(r,e,t){P(r,e,{configurable:!1,enumerable:!1,get:t})}function Pe(r){return r.re}function Ye(r){return r.im}function We(r,e){return new mr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function $e(r,e){return new sr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function Ge(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ue(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Fe(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Pe(n),Ye(n))}return e}function Ze(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ue(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Fe(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Pe(o),Ye(o))}return n}function Xe(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Fe(n=e[i]))return null;r[o]=Pe(n),r[o+1]=Ye(n),o+=2}return r}var Je=2*mr.BYTES_PER_ELEMENT,ze=Me();function qe(r){return r instanceof Qe||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function De(r){return r===Qe||"Complex128Array"===r.name}function He(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Je}function Ke(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*Je}function Qe(){var r,e,t,n;if(e=arguments.length,!(this instanceof Qe))return 0===e?new Qe:1===e?new Qe(arguments[0]):2===e?new Qe(arguments[0],arguments[1]):new Qe(arguments[0],arguments[1],arguments[2]);if(0===e)t=new mr(0);else if(1===e)if(ie(arguments[0]))t=new mr(2*arguments[0]);else if(fe(arguments[0]))if((n=(t=arguments[0]).length)&&er(t)&&Fe(t[0])){if(null===(t=Xe(new mr(2*n),t))){if(!Oe(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new mr(arguments[0])}}else{if(He(t))t=We(t,0);else if(Ke(t))t=$e(t,0);else if(!Oe(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new mr(t)}else if(ce(arguments[0])){if(!Qr((t=arguments[0]).byteLength/Je))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Je,t.byteLength));t=new mr(t)}else{if(!se(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===ze)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Le(t[Ue]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Le((t=t[Ue]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Ge(t))instanceof Error)throw t;t=new mr(t)}else{if(!ce(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ie(r=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Qr(r/Je))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Je,r));if(2===e){if(!Qr((n=t.byteLength-r)/Je))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Je,n));t=new mr(t,r)}else{if(!ie(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Je>t.byteLength-r)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Je));t=new mr(t,r,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function rt(r){return r.re}function et(r){return r.im}function tt(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ue(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Fe(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(rt(n),et(n))}return e}function nt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ue(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Fe(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(rt(o),et(o))}return n}function it(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Fe(n=e[i]))return null;r[o]=rt(n),r[o+1]=et(n),o+=2}return r}Y(Qe,"BYTES_PER_ELEMENT",Je),Y(Qe,"name","Complex64Array"),Y(Qe,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Le(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!De(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Le(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(qe(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Fe(c=n.call(e,r.get(s),s)))o[y]=Pe(c),o[y+1]=Ye(c);else{if(!(ue(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(fe(r)){if(n){for(f=r.length,u=r.get&&r.set?G("default"):X("default"),s=0;s<f;s++)if(!Fe(u(r,s))){l=!0;break}if(l){if(!Oe(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Fe(c=n.call(e,u(r,s),s)))o[y]=Pe(c),o[y+1]=Ye(c);else{if(!(ue(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(se(r)&&ze&&Le(r[Ue])){if(!Le((o=r[Ue]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?Ze(o,n,e):Ge(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Y(Qe,"of",(function(){var r,e;if(!Le(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!De(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ne(Qe.prototype,"buffer",(function(){return this._buffer.buffer})),Ne(Qe.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ne(Qe.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(Qe.prototype,"BYTES_PER_ELEMENT",Qe.BYTES_PER_ELEMENT),Y(Qe.prototype,"copyWithin",(function(r,e){if(!qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Y(Qe.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Ce(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),Y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Ue&&Y(t,Ue,(function(){return e.entries()})),t})),Y(Qe.prototype,"get",(function(r){var e;if(!qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ie(r))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Ce((e=this._buffer)[r*=2],e[r+1])})),Ne(Qe.prototype,"length",(function(){return this._length})),Y(Qe.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ie(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Fe(r)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Pe(r),void(n[t+1]=Ye(r))}if(qe(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*Je,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new mr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!fe(r))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Fe(r[f])){o=!0;break}if(o){if(!Oe(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*Je,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new mr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Pe(u),n[t+1]=Ye(u),t+=2}}));var ot=2*sr.BYTES_PER_ELEMENT,at=Me();function ut(r){return r instanceof st||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function ft(r){return r===st||"Complex64Array"===r.name}function lt(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===ot/2}function ct(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===ot}function st(){var r,e,t,n;if(e=arguments.length,!(this instanceof st))return 0===e?new st:1===e?new st(arguments[0]):2===e?new st(arguments[0],arguments[1]):new st(arguments[0],arguments[1],arguments[2]);if(0===e)t=new sr(0);else if(1===e)if(ie(arguments[0]))t=new sr(2*arguments[0]);else if(fe(arguments[0]))if((n=(t=arguments[0]).length)&&er(t)&&Fe(t[0])){if(null===(t=it(new sr(2*n),t))){if(!Oe(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new sr(arguments[0])}}else{if(lt(t))t=We(t,0);else if(ct(t))t=$e(t,0);else if(!Oe(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new sr(t)}else if(ce(arguments[0])){if(!Qr((t=arguments[0]).byteLength/ot))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ot,t.byteLength));t=new sr(t)}else{if(!se(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===at)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Le(t[Ue]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Le((t=t[Ue]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=tt(t))instanceof Error)throw t;t=new sr(t)}else{if(!ce(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ie(r=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Qr(r/ot))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ot,r));if(2===e){if(!Qr((n=t.byteLength-r)/ot))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ot,n));t=new sr(t,r)}else{if(!ie(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*ot>t.byteLength-r)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*ot));t=new sr(t,r,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(st,"BYTES_PER_ELEMENT",ot),Y(st,"name","Complex128Array"),Y(st,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Le(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Le(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(ut(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Fe(c=n.call(e,r.get(s),s)))o[y]=rt(c),o[y+1]=et(c);else{if(!(ue(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(fe(r)){if(n){for(f=r.length,u=r.get&&r.set?G("default"):X("default"),s=0;s<f;s++)if(!Fe(u(r,s))){l=!0;break}if(l){if(!Oe(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Fe(c=n.call(e,u(r,s),s)))o[y]=rt(c),o[y+1]=et(c);else{if(!(ue(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(se(r)&&at&&Le(r[Ue])){if(!Le((o=r[Ue]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?nt(o,n,e):tt(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Y(st,"of",(function(){var r,e;if(!Le(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ne(st.prototype,"buffer",(function(){return this._buffer.buffer})),Ne(st.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ne(st.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(st.prototype,"BYTES_PER_ELEMENT",st.BYTES_PER_ELEMENT),Y(st.prototype,"copyWithin",(function(r,e){if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Y(st.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Re(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),Y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Ue&&Y(t,Ue,(function(){return e.entries()})),t})),Y(st.prototype,"get",(function(r){var e;if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ie(r))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Re((e=this._buffer)[r*=2],e[r+1])})),Ne(st.prototype,"length",(function(){return this._length})),Y(st.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ie(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Fe(r)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=rt(r),void(n[t+1]=et(r))}if(ut(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*ot,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new sr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!fe(r))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Fe(r[f])){o=!0;break}if(o){if(!Oe(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*ot,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new sr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=rt(u),n[t+1]=et(u),t+=2}}));var yt=[sr,mr,_r,dr,Br,Vr,Gr,Or,Pr,Qe,st],ht=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],pt=ht.length;function gt(r){var e;if(er(r))return"generic";if(nr(r))return null;for(e=0;e<pt;e++)if(r instanceof yt[e])return ht[e];return ur[ar(r)]||null}function mt(r,e){var t,n,i,o;for(i=gt(r),n=W(r)?G(i):X(i),t=r.length,o=0;o<t;o++)if(n(r,o)===e)return!0;return!1}function wt(r){var e,t,n;if(!fe(r))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("1Yr2u,F5",r));return n=gt(r),W(r)&&(e=G(n)),t=r.length,void 0===e?function(e){var n;for(n=0;n<t;n++)if(r[n]===e)return!0;return!1}:function(n){var i;for(i=0;i<t;i++)if(e(r,i)===n)return!0;return!1}}Y(mt,"factory",wt);export{mt as default,wt as factory};
//# sourceMappingURL=mod.js.map

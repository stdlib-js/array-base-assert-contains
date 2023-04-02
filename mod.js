// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var l,c,y,s;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(r,e)||f.call(r,e)?(l=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,e,t.get),s&&a&&a.call(r,e,t.set),r};var l=e;function c(r,e,t){l(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(r){return"function"==typeof r.get&&"function"==typeof r.set}var s={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function h(r){var e=s[r];return"function"==typeof e?e:s.default}var p={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return m&&"symbol"==typeof Symbol.toStringTag}var w=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function v(r,e){return null!=r&&b.call(r,e)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var E=g()?function(r){var e,t,n;if(null==r)return w.call(r);t=r[d],e=v(r,d);try{r[d]=void 0}catch(e){return w.call(r)}return n=w.call(r),e?r[d]=t:delete r[d],n}:function(r){return w.call(r)};var A=Array.isArray?Array.isArray:function(r){return"[object Array]"===E(r)};function _(r){return null!==r&&"object"==typeof r}function T(r){return _(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function j(){return/^\s*function\s*([^(]*)/i}c(_,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!A(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(_));var x=/^\s*function\s*([^(]*)/i;function B(r){var e,t,n;if(("Object"===(t=E(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=x.exec(n.toString()))return e[1]}return T(r)?"Buffer":t}c(j,"REGEXP",x);var L={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},R="function"==typeof Float64Array;var S="function"==typeof Float64Array?Float64Array:null;var V="function"==typeof Float64Array?Float64Array:void 0;var k=function(){var r,e,t;if("function"!=typeof S)return!1;try{e=new S([1,3.14,-3.14,NaN]),t=e,r=(R&&t instanceof Float64Array||"[object Float64Array]"===E(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?V:function(){throw new Error("not implemented")},I="function"==typeof Float32Array;var C=Number.POSITIVE_INFINITY,O="function"==typeof Float32Array?Float32Array:null;var M="function"==typeof Float32Array?Float32Array:void 0;var U=function(){var r,e,t;if("function"!=typeof O)return!1;try{e=new O([1,3.14,-3.14,5e40]),t=e,r=(I&&t instanceof Float32Array||"[object Float32Array]"===E(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===C}catch(e){r=!1}return r}()?M:function(){throw new Error("not implemented")},N="function"==typeof Uint32Array;var F="function"==typeof Uint32Array?Uint32Array:null;var P="function"==typeof Uint32Array?Uint32Array:void 0;var Y=function(){var r,e,t;if("function"!=typeof F)return!1;try{e=new F(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(N&&t instanceof Uint32Array||"[object Uint32Array]"===E(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?P:function(){throw new Error("not implemented")},W="function"==typeof Int32Array;var G="function"==typeof Int32Array?Int32Array:null;var J="function"==typeof Int32Array?Int32Array:void 0;var X=function(){var r,e,t;if("function"!=typeof G)return!1;try{e=new G([1,3.14,-3.14,2147483648]),t=e,r=(W&&t instanceof Int32Array||"[object Int32Array]"===E(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?J:function(){throw new Error("not implemented")},q="function"==typeof Uint16Array;var z="function"==typeof Uint16Array?Uint16Array:null;var D="function"==typeof Uint16Array?Uint16Array:void 0;var H=function(){var r,e,t;if("function"!=typeof z)return!1;try{e=new z(e=[1,3.14,-3.14,65536,65537]),t=e,r=(q&&t instanceof Uint16Array||"[object Uint16Array]"===E(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?D:function(){throw new Error("not implemented")},K="function"==typeof Int16Array;var Q="function"==typeof Int16Array?Int16Array:null;var Z="function"==typeof Int16Array?Int16Array:void 0;var $=function(){var r,e,t;if("function"!=typeof Q)return!1;try{e=new Q([1,3.14,-3.14,32768]),t=e,r=(K&&t instanceof Int16Array||"[object Int16Array]"===E(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Z:function(){throw new Error("not implemented")},rr="function"==typeof Uint8Array;var er="function"==typeof Uint8Array?Uint8Array:null;var tr="function"==typeof Uint8Array?Uint8Array:void 0;var nr=function(){var r,e,t;if("function"!=typeof er)return!1;try{e=new er(e=[1,3.14,-3.14,256,257]),t=e,r=(rr&&t instanceof Uint8Array||"[object Uint8Array]"===E(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")},or="function"==typeof Uint8ClampedArray;var ir="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var ar="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var ur=function(){var r,e,t;if("function"!=typeof ir)return!1;try{e=new ir([-1,0,1,3.14,4.99,255,256]),t=e,r=(or&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===E(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")},fr="function"==typeof Int8Array;var lr="function"==typeof Int8Array?Int8Array:null;var cr="function"==typeof Int8Array?Int8Array:void 0;var yr=function(){var r,e,t;if("function"!=typeof lr)return!1;try{e=new lr([1,3.14,-3.14,128]),t=e,r=(fr&&t instanceof Int8Array||"[object Int8Array]"===E(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};function sr(r){return"number"==typeof r}var hr=Number,pr=hr.prototype.toString;var mr=g();function gr(r){return"object"==typeof r&&(r instanceof hr||(mr?function(r){try{return pr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===E(r)))}function wr(r){return sr(r)||gr(r)}c(wr,"isPrimitive",sr),c(wr,"isObject",gr);var br=hr.NEGATIVE_INFINITY,vr=Math.floor;function dr(r){return vr(r)===r}function Er(r){return r<C&&r>br&&dr(r)}function Ar(r){return sr(r)&&Er(r)}function _r(r){return gr(r)&&Er(r.valueOf())}function Tr(r){return Ar(r)||_r(r)}function jr(r){return Ar(r)&&r>=0}function xr(r){return _r(r)&&r.valueOf()>=0}function Br(r){return jr(r)||xr(r)}c(Tr,"isPrimitive",Ar),c(Tr,"isObject",_r),c(Br,"isPrimitive",jr),c(Br,"isObject",xr);function Lr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&dr(r.length)&&r.length>=0&&r.length<=4294967295}function Rr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&dr(r.length)&&r.length>=0&&r.length<=9007199254740991}var Sr="function"==typeof ArrayBuffer;function Vr(r){return Sr&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===E(r)}function kr(r){return"object"==typeof r&&null!==r&&!A(r)}var Ir=/./;function Cr(r){return"boolean"==typeof r}var Or=Boolean.prototype.toString;var Mr=g();function Ur(r){return"object"==typeof r&&(r instanceof Boolean||(Mr?function(r){try{return Or.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===E(r)))}function Nr(r){return Cr(r)||Ur(r)}function Fr(){return new Function("return this;")()}c(Nr,"isPrimitive",Cr),c(Nr,"isObject",Ur);var Pr="object"==typeof self?self:null,Yr="object"==typeof window?window:null,Wr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Gr="object"==typeof Wr?Wr:null;var Jr=function(r){if(arguments.length){if(!Cr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Fr()}if(Pr)return Pr;if(Yr)return Yr;if(Gr)return Gr;throw new Error("unexpected error. Unable to resolve global object.")}(),Xr=Jr.document&&Jr.document.childNodes,qr=Int8Array;var zr="function"==typeof Ir||"object"==typeof qr||"function"==typeof Xr?function(r){return B(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?B(r).toLowerCase():e};function Dr(r){return"function"===zr(r)}function Hr(r,e){if(!(this instanceof Hr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!sr(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!sr(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}c(Hr,"BYTES_PER_ELEMENT",8),c(Hr.prototype,"BYTES_PER_ELEMENT",8),c(Hr.prototype,"byteLength",16),c(Hr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),c(Hr.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Kr="function"==typeof Math.fround?Math.fround:null,Qr=new U(1);var Zr="function"==typeof Kr?Kr:function(r){return Qr[0]=r,Qr[0]};function $r(r,e){if(!(this instanceof $r))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!sr(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!sr(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Zr(r)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Zr(e)}),this}function re(r){return r instanceof Hr||r instanceof $r||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function ee(r){return dr(r/2)}function te(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&v(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}c($r,"BYTES_PER_ELEMENT",4),c($r.prototype,"BYTES_PER_ELEMENT",4),c($r.prototype,"byteLength",8),c($r.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),c($r.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var ne=te()?Symbol.iterator:null;function oe(r,e,t){l(r,e,{configurable:!1,enumerable:!1,get:t})}function ie(r){return r.re}function ae(r){return r.im}function ue(r,e){return new U(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function fe(r,e){return new k(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function le(r,e){return r[e]}function ce(r,e){return r.get(e)}function ye(r,e,t){r[e]=t}function se(r,e,t){r.set(t,e)}function he(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?ce:le,setter:e?se:ye}}function pe(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(Lr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!re(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(ie(n),ae(n))}return e}function me(r,e,t){var n,o,i,a;for(n=[],a=-1;!(o=r.next()).done;)if(a+=1,Lr(i=e.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!re(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(ie(i),ae(i))}return n}function ge(r,e){var t,n,o,i;for(t=e.length,i=0,o=0;o<t;o++){if(!re(n=e[o]))return null;r[i]=ie(n),r[i+1]=ae(n),i+=2}return r}var we=2*U.BYTES_PER_ELEMENT,be=te();function ve(r){return r instanceof _e||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function de(r){return r===_e||"Complex128Array"===r.name}function Ee(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===we}function Ae(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*we}function _e(){var r,e,t,n;if(e=arguments.length,!(this instanceof _e))return 0===e?new _e:1===e?new _e(arguments[0]):2===e?new _e(arguments[0],arguments[1]):new _e(arguments[0],arguments[1],arguments[2]);if(0===e)t=new U(0);else if(1===e)if(jr(arguments[0]))t=new U(2*arguments[0]);else if(Rr(arguments[0]))if((n=(t=arguments[0]).length)&&A(t)&&re(t[0])){if(null===(t=ge(new U(2*n),t))){if(!ee(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new U(arguments[0])}}else{if(Ee(t))t=ue(t,0);else if(Ae(t))t=fe(t,0);else if(!ee(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new U(t)}else if(Vr(arguments[0])){if(!dr((t=arguments[0]).byteLength/we))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+we+". Byte length: `"+t.byteLength+"`.");t=new U(t)}else{if(!kr(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===be)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Dr(t[ne]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!Dr((t=t[ne]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=pe(t))instanceof Error)throw t;t=new U(t)}else{if(!Vr(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!jr(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!dr(r/we))throw new RangeError("invalid argument. Byte offset must be a multiple of "+we+". Value: `"+r+"`.");if(2===e){if(!dr((n=t.byteLength-r)/we))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+we+". View byte length: `"+n+"`.");t=new U(t,r)}else{if(!jr(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*we>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*we+"`.");t=new U(t,r,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}function Te(r){return r.re}function je(r){return r.im}function xe(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(Lr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!re(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(Te(n),je(n))}return e}function Be(r,e,t){var n,o,i,a;for(n=[],a=-1;!(o=r.next()).done;)if(a+=1,Lr(i=e.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!re(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(Te(i),je(i))}return n}function Le(r,e){var t,n,o,i;for(t=e.length,i=0,o=0;o<t;o++){if(!re(n=e[o]))return null;r[i]=Te(n),r[i+1]=je(n),i+=2}return r}c(_e,"BYTES_PER_ELEMENT",we),c(_e,"name","Complex64Array"),c(_e,"from",(function(r){var e,t,n,o,i,a,u,f,l,c,y;if(!Dr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!de(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Dr(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(ve(r)){if(u=r.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(re(l=n.call(e,r.get(c),c)))i[y]=ie(l),i[y+1]=ae(l);else{if(!(Lr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(Rr(r)){if(n){for(u=r.length,a=he(r),c=0;c<u;c++)if(!re(a.getter(r,c))){f=!0;break}if(f){if(!ee(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(e,a.getter(r,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(re(l=n.call(e,a.getter(r,c),c)))i[y]=ie(l),i[y+1]=ae(l);else{if(!(Lr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(kr(r)&&be&&Dr(r[ne])){if(!Dr((i=r[ne]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?me(i,n,e):pe(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),c(_e,"of",(function(){var r,e;if(!Dr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!de(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),oe(_e.prototype,"buffer",(function(){return this._buffer.buffer})),oe(_e.prototype,"byteLength",(function(){return this._buffer.byteLength})),oe(_e.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(_e.prototype,"BYTES_PER_ELEMENT",_e.BYTES_PER_ELEMENT),c(_e.prototype,"copyWithin",(function(r,e){if(!ve(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),c(_e.prototype,"entries",(function(){var r,e,t,n,o,i,a;if(!ve(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var e;if(i+=1,o||i>=n)return{done:!0};return e=new $r(r[a+=2],r[a+1]),{value:[i,e],done:!1}})),c(t,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),ne&&c(t,ne,(function(){return e.entries()})),t})),c(_e.prototype,"get",(function(r){var e;if(!ve(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!jr(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new $r((e=this._buffer)[r*=2],e[r+1])})),oe(_e.prototype,"length",(function(){return this._length})),c(_e.prototype,"set",(function(r){var e,t,n,o,i,a,u,f,l;if(!ve(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!jr(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(re(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=ie(r),void(n[t+1]=ae(r))}if(ve(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*we,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new U(e.length),f=0;f<e.length;f++)o[f]=e[f];e=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!Rr(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!re(r[f])){i=!0;break}if(i){if(!ee(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*we,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new U(a),f=0;f<a;f++)o[f]=e[f];e=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=ie(u),n[t+1]=ae(u),t+=2}}));var Re=2*k.BYTES_PER_ELEMENT,Se=te();function Ve(r){return r instanceof Oe||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function ke(r){return r===Oe||"Complex64Array"===r.name}function Ie(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Re/2}function Ce(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Re}function Oe(){var r,e,t,n;if(e=arguments.length,!(this instanceof Oe))return 0===e?new Oe:1===e?new Oe(arguments[0]):2===e?new Oe(arguments[0],arguments[1]):new Oe(arguments[0],arguments[1],arguments[2]);if(0===e)t=new k(0);else if(1===e)if(jr(arguments[0]))t=new k(2*arguments[0]);else if(Rr(arguments[0]))if((n=(t=arguments[0]).length)&&A(t)&&re(t[0])){if(null===(t=Le(new k(2*n),t))){if(!ee(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new k(arguments[0])}}else{if(Ie(t))t=ue(t,0);else if(Ce(t))t=fe(t,0);else if(!ee(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new k(t)}else if(Vr(arguments[0])){if(!dr((t=arguments[0]).byteLength/Re))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Re+". Byte length: `"+t.byteLength+"`.");t=new k(t)}else{if(!kr(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Se)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Dr(t[ne]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!Dr((t=t[ne]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=xe(t))instanceof Error)throw t;t=new k(t)}else{if(!Vr(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!jr(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!dr(r/Re))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Re+". Value: `"+r+"`.");if(2===e){if(!dr((n=t.byteLength-r)/Re))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Re+". View byte length: `"+n+"`.");t=new k(t,r)}else{if(!jr(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Re>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Re+"`.");t=new k(t,r,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}c(Oe,"BYTES_PER_ELEMENT",Re),c(Oe,"name","Complex128Array"),c(Oe,"from",(function(r){var e,t,n,o,i,a,u,f,l,c,y;if(!Dr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ke(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Dr(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(Ve(r)){if(u=r.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(re(l=n.call(e,r.get(c),c)))i[y]=Te(l),i[y+1]=je(l);else{if(!(Lr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(Rr(r)){if(n){for(u=r.length,a=he(r),c=0;c<u;c++)if(!re(a.getter(r,c))){f=!0;break}if(f){if(!ee(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(e,a.getter(r,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(re(l=n.call(e,a.getter(r,c),c)))i[y]=Te(l),i[y+1]=je(l);else{if(!(Lr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(kr(r)&&Se&&Dr(r[ne])){if(!Dr((i=r[ne]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Be(i,n,e):xe(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),c(Oe,"of",(function(){var r,e;if(!Dr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ke(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),oe(Oe.prototype,"buffer",(function(){return this._buffer.buffer})),oe(Oe.prototype,"byteLength",(function(){return this._buffer.byteLength})),oe(Oe.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Oe.prototype,"BYTES_PER_ELEMENT",Oe.BYTES_PER_ELEMENT),c(Oe.prototype,"copyWithin",(function(r,e){if(!Ve(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),c(Oe.prototype,"entries",(function(){var r,e,t,n,o,i,a;if(!Ve(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var e;if(i+=1,o||i>=n)return{done:!0};return e=new Hr(r[a+=2],r[a+1]),{value:[i,e],done:!1}})),c(t,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),ne&&c(t,ne,(function(){return e.entries()})),t})),c(Oe.prototype,"get",(function(r){var e;if(!Ve(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!jr(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new Hr((e=this._buffer)[r*=2],e[r+1])})),oe(Oe.prototype,"length",(function(){return this._length})),c(Oe.prototype,"set",(function(r){var e,t,n,o,i,a,u,f,l;if(!Ve(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!jr(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(re(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=Te(r),void(n[t+1]=je(r))}if(Ve(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*Re,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new k(e.length),f=0;f<e.length;f++)o[f]=e[f];e=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!Rr(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!re(r[f])){i=!0;break}if(i){if(!ee(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*Re,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new k(a),f=0;f<a;f++)o[f]=e[f];e=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Te(u),n[t+1]=je(u),t+=2}}));var Me=[k,U,X,Y,$,H,yr,nr,ur,_e,Oe],Ue=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],Ne=Ue.length;function Fe(r){var e;if(A(r))return"generic";if(T(r))return null;for(e=0;e<Ne;e++)if(r instanceof Me[e])return Ue[e];return L[B(r)]||null}function Pe(r,e){var t,n,o,i;for(o=Fe(r),n=y(r)?h(o):function(r){var e=p[r];return"function"==typeof e?e:p.default}(o),t=r.length,i=0;i<t;i++)if(n(r,i)===e)return!0;return!1}function Ye(r){var e,t,n;if(!Rr(r))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("null36",r));return n=Fe(r),y(r)&&(e=h(n)),t=r.length,void 0===e?function(e){var n;for(n=0;n<t;n++)if(r[n]===e)return!0;return!1}:function(n){var o;for(o=0;o<t;o++)if(e(r,o)===n)return!0;return!1}}c(Pe,"factory",Ye);export{Pe as default,Ye as factory};
//# sourceMappingURL=mod.js.map
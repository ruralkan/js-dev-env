!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=1)}([function(t,e,r){"use strict";var n="URLSearchParams"in self,o="Symbol"in self&&"iterator"in Symbol,i="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),s="FormData"in self,a="ArrayBuffer"in self;if(a)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],f=ArrayBuffer.isView||function(t){return t&&-1<u.indexOf(Object.prototype.toString.call(t))};function c(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function l(t){return"string"!=typeof t&&(t=String(t)),t}function d(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function h(t){this.map={},t instanceof h?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function p(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function y(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function b(t){var e=new FileReader,r=y(e);return e.readAsArrayBuffer(t),r}function m(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(t){(this._bodyInit=t)?"string"==typeof t?this._bodyText=t:i&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:s&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():a&&i&&function(t){return t&&DataView.prototype.isPrototypeOf(t)}(t)?(this._bodyArrayBuffer=m(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(t)||f(t))?this._bodyArrayBuffer=m(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var t=p(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(b)}),this.text=function(){var t=p(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,r=y(e);return e.readAsText(t),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(x)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(t,e){t=c(t),e=l(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},h.prototype.delete=function(t){delete this.map[c(t)]},h.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},h.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},h.prototype.set=function(t,e){this.map[c(t)]=l(e)},h.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},h.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),d(t)},h.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),d(t)},h.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),d(t)},o&&(h.prototype[Symbol.iterator]=h.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function g(t,e){var r=(e=e||{}).body;if(t instanceof g){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new h(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new h(e.headers)),this.method=function(t){var e=t.toUpperCase();return-1<w.indexOf(e)?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function x(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function A(t,e){e=e||{},this.type="default",this.status=void 0===e.status?200:e.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new h(e.headers),this.url=e.url||"",this._initBody(t)}g.prototype.clone=function(){return new g(this,{body:this._bodyInit})},v.call(g.prototype),v.call(A.prototype),A.prototype.clone=function(){return new A(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},A.error=function(){var t=new A(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];A.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new A(null,{status:e,headers:{location:t}})};var T=self.DOMException;try{new T}catch(t){(T=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),T.prototype.constructor=T}function U(t,e){return new Promise(function(r,n){var o=new g(t,e);if(o.signal&&o.signal.aborted)return n(new T("Aborted","AbortError"));var s=new XMLHttpRequest;function a(){s.abort()}s.onload=function(){var t={status:s.status,statusText:s.statusText,headers:function(t){var e=new h;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e}(s.getAllResponseHeaders()||"")};t.url="responseURL"in s?s.responseURL:t.headers.get("X-Request-URL");var e="response"in s?s.response:s.responseText;r(new A(e,t))},s.onerror=function(){n(new TypeError("Network request failed"))},s.ontimeout=function(){n(new TypeError("Network request failed"))},s.onabort=function(){n(new T("Aborted","AbortError"))},s.open(o.method,o.url,!0),"include"===o.credentials?s.withCredentials=!0:"omit"===o.credentials&&(s.withCredentials=!1),"responseType"in s&&i&&(s.responseType="blob"),o.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),o.signal&&(o.signal.addEventListener("abort",a),s.onreadystatechange=function(){4===s.readyState&&o.signal.removeEventListener("abort",a)}),s.send(void 0===o._bodyInit?null:o._bodyInit)})}U.polyfill=!0,self.fetch||(self.fetch=U,self.Headers=h,self.Request=g,self.Response=A),r.d(e,"b",function(){return O}),r.d(e,"a",function(){return _});var j=function(t,e){e=e||window.location.href,t=t.replace(/[[]]/g,"\\$&");var r=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}("useMockApi")?"http://localhost:3001/":"/";function O(){return fetch(j+"users").then(B,R)}function _(t){return function(t){var e=new Request(j+t,{method:"DELETE"});return fetch(e).then(B,R)}("users/".concat(t))}function B(t){return t.json()}function R(t){console.log(t)}},function(t,e,r){t.exports=r(2)},function(t,e,r){"use strict";r.r(e),function(t){r(4);var e=r(0);Object(e.b)().then(function(r){var n="";r.forEach(function(t){n+='<tr>\n        <td><a href="#" data-id= "'.concat(t.id,'" class= "deleteUser">Delete</a></td>\n        <td>').concat(t.id,"</td>\n        <td>").concat(t.firstName,"</td>\n        <td>").concat(t.lastName,"</td>\n        <td>").concat(t.email,"</td>\n        </tr>")}),t.document.getElementById("users").innerHTML=n;var o=t.document.getElementsByClassName("deleteUser");Array.from(o,function(t){t.onclick=function(t){var r=t.target;t.preventDefault(),Object(e.a)(r.attributes["data-id"].value);var n=r.parentNode.parentNode;n.parentNode.removeChild(n)}})})}.call(this,r(3))},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(5);"string"==typeof n&&(n=[[t.i,n,""]]);r(7)(n,{hmr:!0,transform:void 0,insertInto:void 0}),n.locals&&(t.exports=n.locals)},function(t,e,r){(t.exports=r(6)(!1)).push([t.i,"body{\n    font-family: sans-serif;\n}\n\ntable th {\n    padding: 5px\n}\n",""])},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(n),i=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[r].concat(i).concat([o]).join("\n")}return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(n[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];null!=s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},function(t,e,r){var n,o,i,s={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),u=(i={},function(t,e){if("function"==typeof t)return t();if(void 0===i[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}i[t]=r}return i[t]}),f=null,c=0,l=[],d=r(8);function h(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=s[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(w(n.parts[i],e))}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(w(n.parts[i],e));s[n.id]={id:n.id,refs:1,parts:a}}}}function p(t,e){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};n[s]?n[s].parts.push(a):r.push(n[s]={id:s,parts:[a]})}return r}function y(t,e){var r=u(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=l[l.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),l.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=u(t.insertAt.before,r);r.insertBefore(e,o)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);0<=e&&l.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=r.nc;n&&(t.attrs.nonce=n)}return v(e,t.attrs),y(t,e),e}function v(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function w(t,e){var r,n,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var s=c++;r=f=f||m(e),n=A.bind(null,r,s,!1),o=A.bind(null,r,s,!0)}else o=t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),y(t,e),e}(e),n=function(t,e,r){var n=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(n=d(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,r,e),function(){b(r),r.href&&URL.revokeObjectURL(r.href)}):(r=m(e),n=function(t,e){var r=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,r),function(){b(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=p(t,e);return h(r,e),function(t){for(var n=[],o=0;o<r.length;o++){var i=r[o];(a=s[i.id]).refs--,n.push(a)}for(t&&h(p(t,e),e),o=0;o<n.length;o++){var a;if(0===(a=n[o]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete s[a.id]}}}};var g,x=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function A(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);
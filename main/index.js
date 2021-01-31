/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var library_analytics_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var frem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var frem__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frem__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var data_frame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var yaafloop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var yaafloop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yaafloop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var models_App_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var library_Dev_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var views_Mount_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(138);
/* harmony import */ var library_render_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(161);
////////////////
// Analytics //
//////////////
 ////////////
// Frame //
//////////



frem__WEBPACK_IMPORTED_MODULE_1___default()(data_frame_js__WEBPACK_IMPORTED_MODULE_2__["default"]); ///////////
// Loop //
/////////






var loop = new yaafloop__WEBPACK_IMPORTED_MODULE_3___default.a(function (delta) {
  library_Dev_js__WEBPACK_IMPORTED_MODULE_5__["default"].atStartOfLoop();
  models_App_js__WEBPACK_IMPORTED_MODULE_4__["default"].update(delta);
  Object(library_render_js__WEBPACK_IMPORTED_MODULE_7__["default"])(views_Mount_view_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
  library_Dev_js__WEBPACK_IMPORTED_MODULE_5__["default"].atEndOfLoop();
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var library_Dev_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
var GA_GAME_KEY = "9387130595a40e9374321119f6ef2f73";
var GA_SECRET_KEY = "41653dad84e4f8df3671cafb2fe0d9117d47dddf";


var GameAnalytics = __webpack_require__(4);

GameAnalytics._ = GameAnalytics.GameAnalytics;
var analytics = {};
/* harmony default export */ __webpack_exports__["default"] = (analytics);
analytics.isInitialized = false;

analytics.initialize = function () {
  // GameAnalytics._.setEnabledInfoLog(true)
  // GameAnalytics._.setEnabledVerboseLog(true)
  GameAnalytics._.configureBuild("2.0.0");

  GameAnalytics._.initialize(GA_GAME_KEY, GA_SECRET_KEY);

  analytics.isInitialized = true;
};

analytics.reportError = function (error) {
  if (library_Dev_js__WEBPACK_IMPORTED_MODULE_0__["default"].isEnabled) return;

  if (analytics.isInitialized === true) {
    GameAnalytics._.addErrorEvent(GameAnalytics.EGAErrorSeverity.Error, error.message);
  }
};

analytics.reportStartGame = function () {
  if (library_Dev_js__WEBPACK_IMPORTED_MODULE_0__["default"].isEnabled) return;
  if (analytics.isInitialized === false) analytics.initialize();

  GameAnalytics._.addProgressionEvent(GameAnalytics.EGAProgressionStatus.Start, "game");
};

analytics.reportEndGame = function () {
  if (library_Dev_js__WEBPACK_IMPORTED_MODULE_0__["default"].isEnabled) return;
  if (analytics.isInitialized === false) analytics.initialize();

  GameAnalytics._.addProgressionEvent(GameAnalytics.EGAProgressionStatus.Complete, "game");
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stats_js__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var dev = new ( /*#__PURE__*/function () {
  function Dev() {
    _classCallCheck(this, Dev);

    this.isEnabled = false; // !!

    this.isEnabled = true;
    if (this.isEnabled == false) return;
    this.stats = new stats_js__WEBPACK_IMPORTED_MODULE_0___default.a();
    this.stats.dom.style.position = "absolute";
    this.stats.dom.style.display = "flex";
    this.stats.dom.style.flexDirection = "column";
    this.stats.dom.style.zIndex = -1;
    Object.values(this.stats.dom.children).forEach(function (child) {
      return child.style = "block";
    });
    this.stats.dom.addEventListener("click", function (event) {
      return event.stopPropagation();
    }, true);
    document.body.appendChild(this.stats.dom);
  }

  _createClass(Dev, [{
    key: "atStartOfLoop",
    value: function atStartOfLoop() {
      if (this.isEnabled != true) return;
      this.stats.begin();
    }
  }, {
    key: "atEndOfLoop",
    value: function atEndOfLoop() {
      if (this.isEnabled != true) return;
      this.stats.end();
    }
  }]);

  return Dev;
}())();
/* harmony default export */ __webpack_exports__["default"] = (dev);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// stats.js - http://github.com/mrdoob/stats.js
(function(f,e){ true?module.exports=e():undefined})(this,function(){var f=function(){function e(a){c.appendChild(a.dom);return a}function u(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?"block":"none";l=a}var l=0,c=document.createElement("div");c.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";c.addEventListener("click",function(a){a.preventDefault();
u(++l%c.children.length)},!1);var k=(performance||Date).now(),g=k,a=0,r=e(new f.Panel("FPS","#0ff","#002")),h=e(new f.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var t=e(new f.Panel("MB","#f08","#201"));u(0);return{REVISION:16,dom:c,addPanel:e,showPanel:u,begin:function(){k=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();h.update(c-k,200);if(c>g+1E3&&(r.update(1E3*a/(c-g),100),g=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/
1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){k=this.end()},domElement:c,setMode:u}};f.Panel=function(e,f,l){var c=Infinity,k=0,g=Math.round,a=g(window.devicePixelRatio||1),r=80*a,h=48*a,t=3*a,v=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement("canvas");q.width=r;q.height=h;q.style.cssText="width:80px;height:48px";var b=q.getContext("2d");b.font="bold "+9*a+"px Helvetica,Arial,sans-serif";b.textBaseline="top";b.fillStyle=l;b.fillRect(0,0,r,h);b.fillStyle=f;b.fillText(e,t,v);
b.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(h,w){c=Math.min(c,h);k=Math.max(k,h);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=f;b.fillText(g(h)+" "+e+" ("+g(c)+"-"+g(k)+")",t,v);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,g((1-h/w)*p))}}};return f});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS = CryptoJS || function(h, s) {
    var f = {},
        g = f.lib = {},
        q = function() {},
        m = g.Base = {
            extend: function(a) {
                q.prototype = this;
                var c = new q;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function() {
                    c.$super.init.apply(this, arguments)
                });
                c.init.prototype = c;
                c.$super = this;
                return c
            },
            create: function() {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            },
            init: function() {},
            mixIn: function(a) {
                for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        },
        r = g.WordArray = m.extend({
            init: function(a, c) {
                a = this.words = a || [];
                this.sigBytes = c != s ? c : 4 * a.length
            },
            toString: function(a) {
                return (a || k).stringify(this)
            },
            concat: function(a) {
                var c = this.words,
                    d = a.words,
                    b = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (b % 4)
                    for (var e = 0; e < a; e++) c[b + e >>> 2] |= (d[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((b + e) % 4);
                else if (65535 < d.length)
                    for (e = 0; e < a; e += 4) c[b + e >>> 2] = d[e >>> 2];
                else c.push.apply(c, d);
                this.sigBytes += a;
                return this
            },
            clamp: function() {
                var a = this.words,
                    c = this.sigBytes;
                a[c >>> 2] &= 4294967295 <<
                    32 - 8 * (c % 4);
                a.length = h.ceil(c / 4)
            },
            clone: function() {
                var a = m.clone.call(this);
                a.words = this.words.slice(0);
                return a
            },
            random: function(a) {
                for (var c = [], d = 0; d < a; d += 4) c.push(4294967296 * h.random() | 0);
                return new r.init(c, a)
            }
        }),
        l = f.enc = {},
        k = l.Hex = {
            stringify: function(a) {
                var c = a.words;
                a = a.sigBytes;
                for (var d = [], b = 0; b < a; b++) {
                    var e = c[b >>> 2] >>> 24 - 8 * (b % 4) & 255;
                    d.push((e >>> 4).toString(16));
                    d.push((e & 15).toString(16))
                }
                return d.join("")
            },
            parse: function(a) {
                for (var c = a.length, d = [], b = 0; b < c; b += 2) d[b >>> 3] |= parseInt(a.substr(b,
                    2), 16) << 24 - 4 * (b % 8);
                return new r.init(d, c / 2)
            }
        },
        n = l.Latin1 = {
            stringify: function(a) {
                var c = a.words;
                a = a.sigBytes;
                for (var d = [], b = 0; b < a; b++) d.push(String.fromCharCode(c[b >>> 2] >>> 24 - 8 * (b % 4) & 255));
                return d.join("")
            },
            parse: function(a) {
                for (var c = a.length, d = [], b = 0; b < c; b++) d[b >>> 2] |= (a.charCodeAt(b) & 255) << 24 - 8 * (b % 4);
                return new r.init(d, c)
            }
        },
        j = l.Utf8 = {
            stringify: function(a) {
                try {
                    return decodeURIComponent(escape(n.stringify(a)))
                } catch (c) {
                    throw Error("Malformed UTF-8 data");
                }
            },
            parse: function(a) {
                return n.parse(unescape(encodeURIComponent(a)))
            }
        },
        u = g.BufferedBlockAlgorithm = m.extend({
            reset: function() {
                this._data = new r.init;
                this._nDataBytes = 0
            },
            _append: function(a) {
                "string" == typeof a && (a = j.parse(a));
                this._data.concat(a);
                this._nDataBytes += a.sigBytes
            },
            _process: function(a) {
                var c = this._data,
                    d = c.words,
                    b = c.sigBytes,
                    e = this.blockSize,
                    f = b / (4 * e),
                    f = a ? h.ceil(f) : h.max((f | 0) - this._minBufferSize, 0);
                a = f * e;
                b = h.min(4 * a, b);
                if (a) {
                    for (var g = 0; g < a; g += e) this._doProcessBlock(d, g);
                    g = d.splice(0, a);
                    c.sigBytes -= b
                }
                return new r.init(g, b)
            },
            clone: function() {
                var a = m.clone.call(this);
                a._data = this._data.clone();
                return a
            },
            _minBufferSize: 0
        });
    g.Hasher = u.extend({
        cfg: m.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function() {
            u.reset.call(this);
            this._doReset()
        },
        update: function(a) {
            this._append(a);
            this._process();
            return this
        },
        finalize: function(a) {
            a && this._append(a);
            return this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(a) {
            return function(c, d) {
                return (new a.init(d)).finalize(c)
            }
        },
        _createHmacHelper: function(a) {
            return function(c, d) {
                return (new t.HMAC.init(a,
                    d)).finalize(c)
            }
        }
    });
    var t = f.algo = {};
    return f
}(Math);
(function(h) {
    for (var s = CryptoJS, f = s.lib, g = f.WordArray, q = f.Hasher, f = s.algo, m = [], r = [], l = function(a) {
            return 4294967296 * (a - (a | 0)) | 0
        }, k = 2, n = 0; 64 > n;) {
        var j;
        a: {
            j = k;
            for (var u = h.sqrt(j), t = 2; t <= u; t++)
                if (!(j % t)) {
                    j = !1;
                    break a
                }
            j = !0
        }
        j && (8 > n && (m[n] = l(h.pow(k, 0.5))), r[n] = l(h.pow(k, 1 / 3)), n++);
        k++
    }
    var a = [],
        f = f.SHA256 = q.extend({
            _doReset: function() {
                this._hash = new g.init(m.slice(0))
            },
            _doProcessBlock: function(c, d) {
                for (var b = this._hash.words, e = b[0], f = b[1], g = b[2], j = b[3], h = b[4], m = b[5], n = b[6], q = b[7], p = 0; 64 > p; p++) {
                    if (16 > p) a[p] =
                        c[d + p] | 0;
                    else {
                        var k = a[p - 15],
                            l = a[p - 2];
                        a[p] = ((k << 25 | k >>> 7) ^ (k << 14 | k >>> 18) ^ k >>> 3) + a[p - 7] + ((l << 15 | l >>> 17) ^ (l << 13 | l >>> 19) ^ l >>> 10) + a[p - 16]
                    }
                    k = q + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & m ^ ~h & n) + r[p] + a[p];
                    l = ((e << 30 | e >>> 2) ^ (e << 19 | e >>> 13) ^ (e << 10 | e >>> 22)) + (e & f ^ e & g ^ f & g);
                    q = n;
                    n = m;
                    m = h;
                    h = j + k | 0;
                    j = g;
                    g = f;
                    f = e;
                    e = k + l | 0
                }
                b[0] = b[0] + e | 0;
                b[1] = b[1] + f | 0;
                b[2] = b[2] + g | 0;
                b[3] = b[3] + j | 0;
                b[4] = b[4] + h | 0;
                b[5] = b[5] + m | 0;
                b[6] = b[6] + n | 0;
                b[7] = b[7] + q | 0
            },
            _doFinalize: function() {
                var a = this._data,
                    d = a.words,
                    b = 8 * this._nDataBytes,
                    e = 8 * a.sigBytes;
                d[e >>> 5] |= 128 << 24 - e % 32;
                d[(e + 64 >>> 9 << 4) + 14] = h.floor(b / 4294967296);
                d[(e + 64 >>> 9 << 4) + 15] = b;
                a.sigBytes = 4 * d.length;
                this._process();
                return this._hash
            },
            clone: function() {
                var a = q.clone.call(this);
                a._hash = this._hash.clone();
                return a
            }
        });
    s.SHA256 = q._createHelper(f);
    s.HmacSHA256 = q._createHmacHelper(f)
})(Math);
(function() {
    var h = CryptoJS,
        s = h.enc.Utf8;
    h.algo.HMAC = h.lib.Base.extend({
        init: function(f, g) {
            f = this._hasher = new f.init;
            "string" == typeof g && (g = s.parse(g));
            var h = f.blockSize,
                m = 4 * h;
            g.sigBytes > m && (g = f.finalize(g));
            g.clamp();
            for (var r = this._oKey = g.clone(), l = this._iKey = g.clone(), k = r.words, n = l.words, j = 0; j < h; j++) k[j] ^= 1549556828, n[j] ^= 909522486;
            r.sigBytes = l.sigBytes = m;
            this.reset()
        },
        reset: function() {
            var f = this._hasher;
            f.reset();
            f.update(this._iKey)
        },
        update: function(f) {
            this._hasher.update(f);
            return this
        },
        finalize: function(f) {
            var g =
                this._hasher;
            f = g.finalize(f);
            g.reset();
            return g.finalize(this._oKey.clone().concat(f))
        }
    })
})();

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function() {
    var h = CryptoJS,
        j = h.lib.WordArray;
    h.enc.Base64 = {
        stringify: function(b) {
            var e = b.words,
                f = b.sigBytes,
                c = this._map;
            b.clamp();
            b = [];
            for (var a = 0; a < f; a += 3)
                for (var d = (e[a >>> 2] >>> 24 - 8 * (a % 4) & 255) << 16 | (e[a + 1 >>> 2] >>> 24 - 8 * ((a + 1) % 4) & 255) << 8 | e[a + 2 >>> 2] >>> 24 - 8 * ((a + 2) % 4) & 255, g = 0; 4 > g && a + 0.75 * g < f; g++) b.push(c.charAt(d >>> 6 * (3 - g) & 63));
            if (e = c.charAt(64))
                for (; b.length % 4;) b.push(e);
            return b.join("")
        },
        parse: function(b) {
            var e = b.length,
                f = this._map,
                c = f.charAt(64);
            c && (c = b.indexOf(c), -1 != c && (e = c));
            for (var c = [], a = 0, d = 0; d <
                e; d++)
                if (d % 4) {
                    var g = f.indexOf(b.charAt(d - 1)) << 2 * (d % 4),
                        h = f.indexOf(b.charAt(d)) >>> 6 - 2 * (d % 4);
                    c[a >>> 2] |= (g | h) << 24 - 8 * (a % 4);
                    a++
                }
            return j.create(c, a)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();

var gameanalytics;
(function (gameanalytics) {
    var EGAErrorSeverity;
    (function (EGAErrorSeverity) {
        EGAErrorSeverity[EGAErrorSeverity["Undefined"] = 0] = "Undefined";
        EGAErrorSeverity[EGAErrorSeverity["Debug"] = 1] = "Debug";
        EGAErrorSeverity[EGAErrorSeverity["Info"] = 2] = "Info";
        EGAErrorSeverity[EGAErrorSeverity["Warning"] = 3] = "Warning";
        EGAErrorSeverity[EGAErrorSeverity["Error"] = 4] = "Error";
        EGAErrorSeverity[EGAErrorSeverity["Critical"] = 5] = "Critical";
    })(EGAErrorSeverity = gameanalytics.EGAErrorSeverity || (gameanalytics.EGAErrorSeverity = {}));
    var EGAProgressionStatus;
    (function (EGAProgressionStatus) {
        EGAProgressionStatus[EGAProgressionStatus["Undefined"] = 0] = "Undefined";
        EGAProgressionStatus[EGAProgressionStatus["Start"] = 1] = "Start";
        EGAProgressionStatus[EGAProgressionStatus["Complete"] = 2] = "Complete";
        EGAProgressionStatus[EGAProgressionStatus["Fail"] = 3] = "Fail";
    })(EGAProgressionStatus = gameanalytics.EGAProgressionStatus || (gameanalytics.EGAProgressionStatus = {}));
    var EGAResourceFlowType;
    (function (EGAResourceFlowType) {
        EGAResourceFlowType[EGAResourceFlowType["Undefined"] = 0] = "Undefined";
        EGAResourceFlowType[EGAResourceFlowType["Source"] = 1] = "Source";
        EGAResourceFlowType[EGAResourceFlowType["Sink"] = 2] = "Sink";
    })(EGAResourceFlowType = gameanalytics.EGAResourceFlowType || (gameanalytics.EGAResourceFlowType = {}));
    var EGAAdAction;
    (function (EGAAdAction) {
        EGAAdAction[EGAAdAction["Undefined"] = 0] = "Undefined";
        EGAAdAction[EGAAdAction["Clicked"] = 1] = "Clicked";
        EGAAdAction[EGAAdAction["Show"] = 2] = "Show";
        EGAAdAction[EGAAdAction["FailedShow"] = 3] = "FailedShow";
        EGAAdAction[EGAAdAction["RewardReceived"] = 4] = "RewardReceived";
    })(EGAAdAction = gameanalytics.EGAAdAction || (gameanalytics.EGAAdAction = {}));
    var EGAAdError;
    (function (EGAAdError) {
        EGAAdError[EGAAdError["Undefined"] = 0] = "Undefined";
        EGAAdError[EGAAdError["Unknown"] = 1] = "Unknown";
        EGAAdError[EGAAdError["Offline"] = 2] = "Offline";
        EGAAdError[EGAAdError["NoFill"] = 3] = "NoFill";
        EGAAdError[EGAAdError["InternalError"] = 4] = "InternalError";
        EGAAdError[EGAAdError["InvalidRequest"] = 5] = "InvalidRequest";
        EGAAdError[EGAAdError["UnableToPrecache"] = 6] = "UnableToPrecache";
    })(EGAAdError = gameanalytics.EGAAdError || (gameanalytics.EGAAdError = {}));
    var EGAAdType;
    (function (EGAAdType) {
        EGAAdType[EGAAdType["Undefined"] = 0] = "Undefined";
        EGAAdType[EGAAdType["Video"] = 1] = "Video";
        EGAAdType[EGAAdType["RewardedVideo"] = 2] = "RewardedVideo";
        EGAAdType[EGAAdType["Playable"] = 3] = "Playable";
        EGAAdType[EGAAdType["Interstitial"] = 4] = "Interstitial";
        EGAAdType[EGAAdType["OfferWall"] = 5] = "OfferWall";
        EGAAdType[EGAAdType["Banner"] = 6] = "Banner";
    })(EGAAdType = gameanalytics.EGAAdType || (gameanalytics.EGAAdType = {}));
    var http;
    (function (http) {
        var EGAHTTPApiResponse;
        (function (EGAHTTPApiResponse) {
            EGAHTTPApiResponse[EGAHTTPApiResponse["NoResponse"] = 0] = "NoResponse";
            EGAHTTPApiResponse[EGAHTTPApiResponse["BadResponse"] = 1] = "BadResponse";
            EGAHTTPApiResponse[EGAHTTPApiResponse["RequestTimeout"] = 2] = "RequestTimeout";
            EGAHTTPApiResponse[EGAHTTPApiResponse["JsonEncodeFailed"] = 3] = "JsonEncodeFailed";
            EGAHTTPApiResponse[EGAHTTPApiResponse["JsonDecodeFailed"] = 4] = "JsonDecodeFailed";
            EGAHTTPApiResponse[EGAHTTPApiResponse["InternalServerError"] = 5] = "InternalServerError";
            EGAHTTPApiResponse[EGAHTTPApiResponse["BadRequest"] = 6] = "BadRequest";
            EGAHTTPApiResponse[EGAHTTPApiResponse["Unauthorized"] = 7] = "Unauthorized";
            EGAHTTPApiResponse[EGAHTTPApiResponse["UnknownResponseCode"] = 8] = "UnknownResponseCode";
            EGAHTTPApiResponse[EGAHTTPApiResponse["Ok"] = 9] = "Ok";
            EGAHTTPApiResponse[EGAHTTPApiResponse["Created"] = 10] = "Created";
        })(EGAHTTPApiResponse = http.EGAHTTPApiResponse || (http.EGAHTTPApiResponse = {}));
    })(http = gameanalytics.http || (gameanalytics.http = {}));
    var events;
    (function (events) {
        var EGASdkErrorCategory;
        (function (EGASdkErrorCategory) {
            EGASdkErrorCategory[EGASdkErrorCategory["Undefined"] = 0] = "Undefined";
            EGASdkErrorCategory[EGASdkErrorCategory["EventValidation"] = 1] = "EventValidation";
            EGASdkErrorCategory[EGASdkErrorCategory["Database"] = 2] = "Database";
            EGASdkErrorCategory[EGASdkErrorCategory["Init"] = 3] = "Init";
            EGASdkErrorCategory[EGASdkErrorCategory["Http"] = 4] = "Http";
            EGASdkErrorCategory[EGASdkErrorCategory["Json"] = 5] = "Json";
        })(EGASdkErrorCategory = events.EGASdkErrorCategory || (events.EGASdkErrorCategory = {}));
        var EGASdkErrorArea;
        (function (EGASdkErrorArea) {
            EGASdkErrorArea[EGASdkErrorArea["Undefined"] = 0] = "Undefined";
            EGASdkErrorArea[EGASdkErrorArea["BusinessEvent"] = 1] = "BusinessEvent";
            EGASdkErrorArea[EGASdkErrorArea["ResourceEvent"] = 2] = "ResourceEvent";
            EGASdkErrorArea[EGASdkErrorArea["ProgressionEvent"] = 3] = "ProgressionEvent";
            EGASdkErrorArea[EGASdkErrorArea["DesignEvent"] = 4] = "DesignEvent";
            EGASdkErrorArea[EGASdkErrorArea["ErrorEvent"] = 5] = "ErrorEvent";
            EGASdkErrorArea[EGASdkErrorArea["InitHttp"] = 9] = "InitHttp";
            EGASdkErrorArea[EGASdkErrorArea["EventsHttp"] = 10] = "EventsHttp";
            EGASdkErrorArea[EGASdkErrorArea["ProcessEvents"] = 11] = "ProcessEvents";
            EGASdkErrorArea[EGASdkErrorArea["AddEventsToStore"] = 12] = "AddEventsToStore";
            EGASdkErrorArea[EGASdkErrorArea["AdEvent"] = 20] = "AdEvent";
        })(EGASdkErrorArea = events.EGASdkErrorArea || (events.EGASdkErrorArea = {}));
        var EGASdkErrorAction;
        (function (EGASdkErrorAction) {
            EGASdkErrorAction[EGASdkErrorAction["Undefined"] = 0] = "Undefined";
            EGASdkErrorAction[EGASdkErrorAction["InvalidCurrency"] = 1] = "InvalidCurrency";
            EGASdkErrorAction[EGASdkErrorAction["InvalidShortString"] = 2] = "InvalidShortString";
            EGASdkErrorAction[EGASdkErrorAction["InvalidEventPartLength"] = 3] = "InvalidEventPartLength";
            EGASdkErrorAction[EGASdkErrorAction["InvalidEventPartCharacters"] = 4] = "InvalidEventPartCharacters";
            EGASdkErrorAction[EGASdkErrorAction["InvalidStore"] = 5] = "InvalidStore";
            EGASdkErrorAction[EGASdkErrorAction["InvalidFlowType"] = 6] = "InvalidFlowType";
            EGASdkErrorAction[EGASdkErrorAction["StringEmptyOrNull"] = 7] = "StringEmptyOrNull";
            EGASdkErrorAction[EGASdkErrorAction["NotFoundInAvailableCurrencies"] = 8] = "NotFoundInAvailableCurrencies";
            EGASdkErrorAction[EGASdkErrorAction["InvalidAmount"] = 9] = "InvalidAmount";
            EGASdkErrorAction[EGASdkErrorAction["NotFoundInAvailableItemTypes"] = 10] = "NotFoundInAvailableItemTypes";
            EGASdkErrorAction[EGASdkErrorAction["WrongProgressionOrder"] = 11] = "WrongProgressionOrder";
            EGASdkErrorAction[EGASdkErrorAction["InvalidEventIdLength"] = 12] = "InvalidEventIdLength";
            EGASdkErrorAction[EGASdkErrorAction["InvalidEventIdCharacters"] = 13] = "InvalidEventIdCharacters";
            EGASdkErrorAction[EGASdkErrorAction["InvalidProgressionStatus"] = 15] = "InvalidProgressionStatus";
            EGASdkErrorAction[EGASdkErrorAction["InvalidSeverity"] = 16] = "InvalidSeverity";
            EGASdkErrorAction[EGASdkErrorAction["InvalidLongString"] = 17] = "InvalidLongString";
            EGASdkErrorAction[EGASdkErrorAction["DatabaseTooLarge"] = 18] = "DatabaseTooLarge";
            EGASdkErrorAction[EGASdkErrorAction["DatabaseOpenOrCreate"] = 19] = "DatabaseOpenOrCreate";
            EGASdkErrorAction[EGASdkErrorAction["JsonError"] = 25] = "JsonError";
            EGASdkErrorAction[EGASdkErrorAction["FailHttpJsonDecode"] = 29] = "FailHttpJsonDecode";
            EGASdkErrorAction[EGASdkErrorAction["FailHttpJsonEncode"] = 30] = "FailHttpJsonEncode";
            EGASdkErrorAction[EGASdkErrorAction["InvalidAdAction"] = 31] = "InvalidAdAction";
            EGASdkErrorAction[EGASdkErrorAction["InvalidAdType"] = 32] = "InvalidAdType";
            EGASdkErrorAction[EGASdkErrorAction["InvalidString"] = 33] = "InvalidString";
        })(EGASdkErrorAction = events.EGASdkErrorAction || (events.EGASdkErrorAction = {}));
        var EGASdkErrorParameter;
        (function (EGASdkErrorParameter) {
            EGASdkErrorParameter[EGASdkErrorParameter["Undefined"] = 0] = "Undefined";
            EGASdkErrorParameter[EGASdkErrorParameter["Currency"] = 1] = "Currency";
            EGASdkErrorParameter[EGASdkErrorParameter["CartType"] = 2] = "CartType";
            EGASdkErrorParameter[EGASdkErrorParameter["ItemType"] = 3] = "ItemType";
            EGASdkErrorParameter[EGASdkErrorParameter["ItemId"] = 4] = "ItemId";
            EGASdkErrorParameter[EGASdkErrorParameter["Store"] = 5] = "Store";
            EGASdkErrorParameter[EGASdkErrorParameter["FlowType"] = 6] = "FlowType";
            EGASdkErrorParameter[EGASdkErrorParameter["Amount"] = 7] = "Amount";
            EGASdkErrorParameter[EGASdkErrorParameter["Progression01"] = 8] = "Progression01";
            EGASdkErrorParameter[EGASdkErrorParameter["Progression02"] = 9] = "Progression02";
            EGASdkErrorParameter[EGASdkErrorParameter["Progression03"] = 10] = "Progression03";
            EGASdkErrorParameter[EGASdkErrorParameter["EventId"] = 11] = "EventId";
            EGASdkErrorParameter[EGASdkErrorParameter["ProgressionStatus"] = 12] = "ProgressionStatus";
            EGASdkErrorParameter[EGASdkErrorParameter["Severity"] = 13] = "Severity";
            EGASdkErrorParameter[EGASdkErrorParameter["Message"] = 14] = "Message";
            EGASdkErrorParameter[EGASdkErrorParameter["AdAction"] = 15] = "AdAction";
            EGASdkErrorParameter[EGASdkErrorParameter["AdType"] = 16] = "AdType";
            EGASdkErrorParameter[EGASdkErrorParameter["AdSdkName"] = 17] = "AdSdkName";
            EGASdkErrorParameter[EGASdkErrorParameter["AdPlacement"] = 18] = "AdPlacement";
        })(EGASdkErrorParameter = events.EGASdkErrorParameter || (events.EGASdkErrorParameter = {}));
    })(events = gameanalytics.events || (gameanalytics.events = {}));
})(gameanalytics || (gameanalytics = {}));
var EGAErrorSeverity = gameanalytics.EGAErrorSeverity;
var EGAProgressionStatus = gameanalytics.EGAProgressionStatus;
var EGAResourceFlowType = gameanalytics.EGAResourceFlowType;
var gameanalytics;
(function (gameanalytics) {
    var logging;
    (function (logging) {
        var EGALoggerMessageType;
        (function (EGALoggerMessageType) {
            EGALoggerMessageType[EGALoggerMessageType["Error"] = 0] = "Error";
            EGALoggerMessageType[EGALoggerMessageType["Warning"] = 1] = "Warning";
            EGALoggerMessageType[EGALoggerMessageType["Info"] = 2] = "Info";
            EGALoggerMessageType[EGALoggerMessageType["Debug"] = 3] = "Debug";
        })(EGALoggerMessageType || (EGALoggerMessageType = {}));
        var GALogger = (function () {
            function GALogger() {
                GALogger.debugEnabled = false;
            }
            GALogger.setInfoLog = function (value) {
                GALogger.instance.infoLogEnabled = value;
            };
            GALogger.setVerboseLog = function (value) {
                GALogger.instance.infoLogVerboseEnabled = value;
            };
            GALogger.i = function (format) {
                if (!GALogger.instance.infoLogEnabled) {
                    return;
                }
                var message = "Info/" + GALogger.Tag + ": " + format;
                GALogger.instance.sendNotificationMessage(message, EGALoggerMessageType.Info);
            };
            GALogger.w = function (format) {
                var message = "Warning/" + GALogger.Tag + ": " + format;
                GALogger.instance.sendNotificationMessage(message, EGALoggerMessageType.Warning);
            };
            GALogger.e = function (format) {
                var message = "Error/" + GALogger.Tag + ": " + format;
                GALogger.instance.sendNotificationMessage(message, EGALoggerMessageType.Error);
            };
            GALogger.ii = function (format) {
                if (!GALogger.instance.infoLogVerboseEnabled) {
                    return;
                }
                var message = "Verbose/" + GALogger.Tag + ": " + format;
                GALogger.instance.sendNotificationMessage(message, EGALoggerMessageType.Info);
            };
            GALogger.d = function (format) {
                if (!GALogger.debugEnabled) {
                    return;
                }
                var message = "Debug/" + GALogger.Tag + ": " + format;
                GALogger.instance.sendNotificationMessage(message, EGALoggerMessageType.Debug);
            };
            GALogger.prototype.sendNotificationMessage = function (message, type) {
                switch (type) {
                    case EGALoggerMessageType.Error:
                        {
                            console.error(message);
                        }
                        break;
                    case EGALoggerMessageType.Warning:
                        {
                            console.warn(message);
                        }
                        break;
                    case EGALoggerMessageType.Debug:
                        {
                            if (typeof console.debug === "function") {
                                console.debug(message);
                            }
                            else {
                                console.log(message);
                            }
                        }
                        break;
                    case EGALoggerMessageType.Info:
                        {
                            console.log(message);
                        }
                        break;
                }
            };
            GALogger.instance = new GALogger();
            GALogger.Tag = "GameAnalytics";
            return GALogger;
        }());
        logging.GALogger = GALogger;
    })(logging = gameanalytics.logging || (gameanalytics.logging = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
    var utilities;
    (function (utilities) {
        var GALogger = gameanalytics.logging.GALogger;
        var GAUtilities = (function () {
            function GAUtilities() {
            }
            GAUtilities.getHmac = function (key, data) {
                var encryptedMessage = CryptoJS.HmacSHA256(data, key);
                return CryptoJS.enc.Base64.stringify(encryptedMessage);
            };
            GAUtilities.stringMatch = function (s, pattern) {
                if (!s || !pattern) {
                    return false;
                }
                return pattern.test(s);
            };
            GAUtilities.joinStringArray = function (v, delimiter) {
                var result = "";
                for (var i = 0, il = v.length; i < il; i++) {
                    if (i > 0) {
                        result += delimiter;
                    }
                    result += v[i];
                }
                return result;
            };
            GAUtilities.stringArrayContainsString = function (array, search) {
                if (array.length === 0) {
                    return false;
                }
                for (var s in array) {
                    if (array[s] === search) {
                        return true;
                    }
                }
                return false;
            };
            GAUtilities.encode64 = function (input) {
                input = encodeURI(input);
                var output = "";
                var chr1, chr2, chr3 = 0;
                var enc1, enc2, enc3, enc4 = 0;
                var i = 0;
                do {
                    chr1 = input.charCodeAt(i++);
                    chr2 = input.charCodeAt(i++);
                    chr3 = input.charCodeAt(i++);
                    enc1 = chr1 >> 2;
                    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                    enc4 = chr3 & 63;
                    if (isNaN(chr2)) {
                        enc3 = enc4 = 64;
                    }
                    else if (isNaN(chr3)) {
                        enc4 = 64;
                    }
                    output = output +
                        GAUtilities.keyStr.charAt(enc1) +
                        GAUtilities.keyStr.charAt(enc2) +
                        GAUtilities.keyStr.charAt(enc3) +
                        GAUtilities.keyStr.charAt(enc4);
                    chr1 = chr2 = chr3 = 0;
                    enc1 = enc2 = enc3 = enc4 = 0;
                } while (i < input.length);
                return output;
            };
            GAUtilities.decode64 = function (input) {
                var output = "";
                var chr1, chr2, chr3 = 0;
                var enc1, enc2, enc3, enc4 = 0;
                var i = 0;
                var base64test = /[^A-Za-z0-9\+\/\=]/g;
                if (base64test.exec(input)) {
                    GALogger.w("There were invalid base64 characters in the input text. Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='. Expect errors in decoding.");
                }
                input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                do {
                    enc1 = GAUtilities.keyStr.indexOf(input.charAt(i++));
                    enc2 = GAUtilities.keyStr.indexOf(input.charAt(i++));
                    enc3 = GAUtilities.keyStr.indexOf(input.charAt(i++));
                    enc4 = GAUtilities.keyStr.indexOf(input.charAt(i++));
                    chr1 = (enc1 << 2) | (enc2 >> 4);
                    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                    chr3 = ((enc3 & 3) << 6) | enc4;
                    output = output + String.fromCharCode(chr1);
                    if (enc3 != 64) {
                        output = output + String.fromCharCode(chr2);
                    }
                    if (enc4 != 64) {
                        output = output + String.fromCharCode(chr3);
                    }
                    chr1 = chr2 = chr3 = 0;
                    enc1 = enc2 = enc3 = enc4 = 0;
                } while (i < input.length);
                return decodeURI(output);
            };
            GAUtilities.timeIntervalSince1970 = function () {
                var date = new Date();
                return Math.round(date.getTime() / 1000);
            };
            GAUtilities.createGuid = function () {
                return (GAUtilities.s4() + GAUtilities.s4() + "-" + GAUtilities.s4() + "-4" + GAUtilities.s4().substr(0, 3) + "-" + GAUtilities.s4() + "-" + GAUtilities.s4() + GAUtilities.s4() + GAUtilities.s4()).toLowerCase();
            };
            GAUtilities.s4 = function () {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            };
            GAUtilities.keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            return GAUtilities;
        }());
        utilities.GAUtilities = GAUtilities;
    })(utilities = gameanalytics.utilities || (gameanalytics.utilities = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
    var validators;
    (function (validators) {
        var GALogger = gameanalytics.logging.GALogger;
        var GAUtilities = gameanalytics.utilities.GAUtilities;
        var EGASdkErrorCategory = gameanalytics.events.EGASdkErrorCategory;
        var EGASdkErrorArea = gameanalytics.events.EGASdkErrorArea;
        var EGASdkErrorAction = gameanalytics.events.EGASdkErrorAction;
        var EGASdkErrorParameter = gameanalytics.events.EGASdkErrorParameter;
        var ValidationResult = (function () {
            function ValidationResult(category, area, action, parameter, reason) {
                this.category = category;
                this.area = area;
                this.action = action;
                this.parameter = parameter;
                this.reason = reason;
            }
            return ValidationResult;
        }());
        validators.ValidationResult = ValidationResult;
        var GAValidator = (function () {
            function GAValidator() {
            }
            GAValidator.validateBusinessEvent = function (currency, amount, cartType, itemType, itemId) {
                if (!GAValidator.validateCurrency(currency)) {
                    GALogger.w("Validation fail - business event - currency: Cannot be (null) and need to be A-Z, 3 characters and in the standard at openexchangerates.org. Failed currency: " + currency);
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.BusinessEvent, EGASdkErrorAction.InvalidCurrency, EGASdkErrorParameter.Currency, currency);
                }
                if (amount < 0) {
                    GALogger.w("Validation fail - business event - amount. Cannot be less than 0. Failed amount: " + amount);
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.BusinessEvent, EGASdkErrorAction.InvalidAmount, EGASdkErrorParameter.Amount, amount + "");
                }
                if (!GAValidator.validateShortString(cartType, true)) {
                    GALogger.w("Validation fail - business event - cartType. Cannot be above 32 length. String: " + cartType);
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.BusinessEvent, EGASdkErrorAction.InvalidShortString, EGASdkErrorParameter.CartType, cartType);
                }
                if (!GAValidator.validateEventPartLength(itemType, false)) {
                    GALogger.w("Validation fail - business event - itemType: Cannot be (null), empty or above 64 characters. String: " + itemType);
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.BusinessEvent, EGASdkErrorAction.InvalidEventPartLength, EGASdkErrorParameter.ItemType, itemType);
                }
                if (!GAValidator.validateEventPartCharacters(itemType)) {
                    GALogger.w("Validation fail - business event - itemType: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + itemType);
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.BusinessEvent, EGASdkErrorAction.InvalidEventPartCharacters, EGASdkErrorParameter.ItemType, itemType);
                }
                if (!GAValidator.validateEventPartLength(itemId, false)) {
                    GALogger.w("Validation fail - business event - itemId. Cannot be (null), empty or above 64 characters. String: " + itemId);
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.BusinessEvent, EGASdkErrorAction.InvalidEventPartLength, EGASdkErrorParameter.ItemId, itemId);
                }
                if (!GAValidator.validateEventPartCharacters(itemId)) {
                    GALogger.w("Validation fail - business event - itemId: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + itemId);
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.BusinessEvent, EGASdkErrorAction.InvalidEventPartCharacters, EGASdkErrorParameter.ItemId, itemId);
                }
                return null;
            };
            GAValidator.validateResourceEvent = function (flowType, currency, amount, itemType, itemId, availableCurrencies, availableItemTypes) {
                if (flowType == gameanalytics.EGAResourceFlowType.Undefined) {
                    GALogger.w("Validation fail - resource event - flowType: Invalid flow type.");
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ResourceEvent, EGASdkErrorAction.InvalidFlowType, EGASdkErrorParameter.FlowType, "");
                }
                if (!currency) {
                    GALogger.w("Validation fail - resource event - currency: Cannot be (null)");
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ResourceEvent, EGASdkErrorAction.StringEmptyOrNull, EGASdkErrorParameter.Currency, "");
                }
                if (!GAUtilities.stringArrayContainsString(availableCurrencies, currency)) {
                    GALogger.w("Validation fail - resource event - currency: Not found in list of pre-defined available resource currencies. String: " + currency);
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ResourceEvent, EGASdkErrorAction.NotFoundInAvailableCurrencies, EGASdkErrorParameter.Currency, currency);
                }
                if (!(amount > 0)) {
                    GALogger.w("Validation fail - resource event - amount: Float amount cannot be 0 or negative. Value: " + amount);
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ResourceEvent, EGASdkErrorAction.InvalidAmount, EGASdkErrorParameter.Amount, amount + "");
                }
                if (!itemType) {
                    GALogger.w("Validation fail - resource event - itemType: Cannot be (null)");
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ResourceEvent, EGASdkErrorAction.StringEmptyOrNull, EGASdkErrorParameter.ItemType, "");
                }
                if (!GAValidator.validateEventPartLength(itemType, false)) {
                    GALogger.w("Validation fail - resource event - itemType: Cannot be (null), empty or above 64 characters. String: " + itemType);
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ResourceEvent, EGASdkErrorAction.InvalidEventPartLength, EGASdkErrorParameter.ItemType, itemType);
                }
                if (!GAValidator.validateEventPartCharacters(itemType)) {
                    GALogger.w("Validation fail - resource event - itemType: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + itemType);
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ResourceEvent, EGASdkErrorAction.InvalidEventPartCharacters, EGASdkErrorParameter.ItemType, itemType);
                }
                if (!GAUtilities.stringArrayContainsString(availableItemTypes, itemType)) {
                    GALogger.w("Validation fail - resource event - itemType: Not found in list of pre-defined available resource itemTypes. String: " + itemType);
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ResourceEvent, EGASdkErrorAction.NotFoundInAvailableItemTypes, EGASdkErrorParameter.ItemType, itemType);
                }
                if (!GAValidator.validateEventPartLength(itemId, false)) {
                    GALogger.w("Validation fail - resource event - itemId: Cannot be (null), empty or above 64 characters. String: " + itemId);
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ResourceEvent, EGASdkErrorAction.InvalidEventPartLength, EGASdkErrorParameter.ItemId, itemId);
                }
                if (!GAValidator.validateEventPartCharacters(itemId)) {
                    GALogger.w("Validation fail - resource event - itemId: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + itemId);
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ResourceEvent, EGASdkErrorAction.InvalidEventPartCharacters, EGASdkErrorParameter.ItemId, itemId);
                }
                return null;
            };
            GAValidator.validateProgressionEvent = function (progressionStatus, progression01, progression02, progression03) {
                if (progressionStatus == gameanalytics.EGAProgressionStatus.Undefined) {
                    GALogger.w("Validation fail - progression event: Invalid progression status.");
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ProgressionEvent, EGASdkErrorAction.InvalidProgressionStatus, EGASdkErrorParameter.ProgressionStatus, "");
                }
                if (progression03 && !(progression02 || !progression01)) {
                    GALogger.w("Validation fail - progression event: 03 found but 01+02 are invalid. Progression must be set as either 01, 01+02 or 01+02+03.");
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ProgressionEvent, EGASdkErrorAction.WrongProgressionOrder, EGASdkErrorParameter.Undefined, progression01 + ":" + progression02 + ":" + progression03);
                }
                else if (progression02 && !progression01) {
                    GALogger.w("Validation fail - progression event: 02 found but not 01. Progression must be set as either 01, 01+02 or 01+02+03");
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ProgressionEvent, EGASdkErrorAction.WrongProgressionOrder, EGASdkErrorParameter.Undefined, progression01 + ":" + progression02 + ":" + progression03);
                }
                else if (!progression01) {
                    GALogger.w("Validation fail - progression event: progression01 not valid. Progressions must be set as either 01, 01+02 or 01+02+03");
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ProgressionEvent, EGASdkErrorAction.WrongProgressionOrder, EGASdkErrorParameter.Undefined, (progression01 ? progression01 : "") + ":" + (progression02 ? progression02 : "") + ":" + (progression03 ? progression03 : ""));
                }
                if (!GAValidator.validateEventPartLength(progression01, false)) {
                    GALogger.w("Validation fail - progression event - progression01: Cannot be (null), empty or above 64 characters. String: " + progression01);
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ProgressionEvent, EGASdkErrorAction.InvalidEventPartLength, EGASdkErrorParameter.Progression01, progression01);
                }
                if (!GAValidator.validateEventPartCharacters(progression01)) {
                    GALogger.w("Validation fail - progression event - progression01: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + progression01);
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ProgressionEvent, EGASdkErrorAction.InvalidEventPartCharacters, EGASdkErrorParameter.Progression01, progression01);
                }
                if (progression02) {
                    if (!GAValidator.validateEventPartLength(progression02, true)) {
                        GALogger.w("Validation fail - progression event - progression02: Cannot be empty or above 64 characters. String: " + progression02);
                        return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ProgressionEvent, EGASdkErrorAction.InvalidEventPartLength, EGASdkErrorParameter.Progression02, progression02);
                    }
                    if (!GAValidator.validateEventPartCharacters(progression02)) {
                        GALogger.w("Validation fail - progression event - progression02: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + progression02);
                        return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ProgressionEvent, EGASdkErrorAction.InvalidEventPartCharacters, EGASdkErrorParameter.Progression02, progression02);
                    }
                }
                if (progression03) {
                    if (!GAValidator.validateEventPartLength(progression03, true)) {
                        GALogger.w("Validation fail - progression event - progression03: Cannot be empty or above 64 characters. String: " + progression03);
                        return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ProgressionEvent, EGASdkErrorAction.InvalidEventPartLength, EGASdkErrorParameter.Progression03, progression03);
                    }
                    if (!GAValidator.validateEventPartCharacters(progression03)) {
                        GALogger.w("Validation fail - progression event - progression03: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + progression03);
                        return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ProgressionEvent, EGASdkErrorAction.InvalidEventPartCharacters, EGASdkErrorParameter.Progression03, progression03);
                    }
                }
                return null;
            };
            GAValidator.validateDesignEvent = function (eventId) {
                if (!GAValidator.validateEventIdLength(eventId)) {
                    GALogger.w("Validation fail - design event - eventId: Cannot be (null) or empty. Only 5 event parts allowed seperated by :. Each part need to be 32 characters or less. String: " + eventId);
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.DesignEvent, EGASdkErrorAction.InvalidEventIdLength, EGASdkErrorParameter.EventId, eventId);
                }
                if (!GAValidator.validateEventIdCharacters(eventId)) {
                    GALogger.w("Validation fail - design event - eventId: Non valid characters. Only allowed A-z, 0-9, -_., ()!?. String: " + eventId);
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.DesignEvent, EGASdkErrorAction.InvalidEventIdCharacters, EGASdkErrorParameter.EventId, eventId);
                }
                return null;
            };
            GAValidator.validateErrorEvent = function (severity, message) {
                if (severity == gameanalytics.EGAErrorSeverity.Undefined) {
                    GALogger.w("Validation fail - error event - severity: Severity was unsupported value.");
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ErrorEvent, EGASdkErrorAction.InvalidSeverity, EGASdkErrorParameter.Severity, "");
                }
                if (!GAValidator.validateLongString(message, true)) {
                    GALogger.w("Validation fail - error event - message: Message cannot be above 8192 characters.");
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ErrorEvent, EGASdkErrorAction.InvalidLongString, EGASdkErrorParameter.Message, message);
                }
                return null;
            };
            GAValidator.validateAdEvent = function (adAction, adType, adSdkName, adPlacement) {
                if (adAction == gameanalytics.EGAAdAction.Undefined) {
                    GALogger.w("Validation fail - error event - severity: Severity was unsupported value.");
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.AdEvent, EGASdkErrorAction.InvalidAdAction, EGASdkErrorParameter.AdAction, "");
                }
                if (adType == gameanalytics.EGAAdType.Undefined) {
                    GALogger.w("Validation fail - ad event - adType: Ad type was unsupported value.");
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.AdEvent, EGASdkErrorAction.InvalidAdType, EGASdkErrorParameter.AdType, "");
                }
                if (!GAValidator.validateShortString(adSdkName, false)) {
                    GALogger.w("Validation fail - ad event - message: Ad SDK name cannot be above 32 characters.");
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.AdEvent, EGASdkErrorAction.InvalidShortString, EGASdkErrorParameter.AdSdkName, adSdkName);
                }
                if (!GAValidator.validateString(adPlacement, false)) {
                    GALogger.w("Validation fail - ad event - message: Ad placement cannot be above 64 characters.");
                    return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.AdEvent, EGASdkErrorAction.InvalidString, EGASdkErrorParameter.AdPlacement, adPlacement);
                }
                return null;
            };
            GAValidator.validateSdkErrorEvent = function (gameKey, gameSecret, category, area, action) {
                if (!GAValidator.validateKeys(gameKey, gameSecret)) {
                    return false;
                }
                if (category === EGASdkErrorCategory.Undefined) {
                    GALogger.w("Validation fail - sdk error event - type: Category was unsupported value.");
                    return false;
                }
                if (area === EGASdkErrorArea.Undefined) {
                    GALogger.w("Validation fail - sdk error event - type: Area was unsupported value.");
                    return false;
                }
                if (action === EGASdkErrorAction.Undefined) {
                    GALogger.w("Validation fail - sdk error event - type: Action was unsupported value.");
                    return false;
                }
                return true;
            };
            GAValidator.validateKeys = function (gameKey, gameSecret) {
                if (GAUtilities.stringMatch(gameKey, /^[A-z0-9]{32}$/)) {
                    if (GAUtilities.stringMatch(gameSecret, /^[A-z0-9]{40}$/)) {
                        return true;
                    }
                }
                return false;
            };
            GAValidator.validateCurrency = function (currency) {
                if (!currency) {
                    return false;
                }
                if (!GAUtilities.stringMatch(currency, /^[A-Z]{3}$/)) {
                    return false;
                }
                return true;
            };
            GAValidator.validateEventPartLength = function (eventPart, allowNull) {
                if (allowNull && !eventPart) {
                    return true;
                }
                if (!eventPart) {
                    return false;
                }
                if (eventPart.length > 64) {
                    return false;
                }
                return true;
            };
            GAValidator.validateEventPartCharacters = function (eventPart) {
                if (!GAUtilities.stringMatch(eventPart, /^[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}$/)) {
                    return false;
                }
                return true;
            };
            GAValidator.validateEventIdLength = function (eventId) {
                if (!eventId) {
                    return false;
                }
                if (!GAUtilities.stringMatch(eventId, /^[^:]{1,64}(?::[^:]{1,64}){0,4}$/)) {
                    return false;
                }
                return true;
            };
            GAValidator.validateEventIdCharacters = function (eventId) {
                if (!eventId) {
                    return false;
                }
                if (!GAUtilities.stringMatch(eventId, /^[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}(:[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}){0,4}$/)) {
                    return false;
                }
                return true;
            };
            GAValidator.validateAndCleanInitRequestResponse = function (initResponse, configsCreated) {
                if (initResponse == null) {
                    GALogger.w("validateInitRequestResponse failed - no response dictionary.");
                    return null;
                }
                var validatedDict = {};
                try {
                    var serverTsNumber = initResponse["server_ts"];
                    if (serverTsNumber > 0) {
                        validatedDict["server_ts"] = serverTsNumber;
                    }
                    else {
                        GALogger.w("validateInitRequestResponse failed - invalid value in 'server_ts' field.");
                        return null;
                    }
                }
                catch (e) {
                    GALogger.w("validateInitRequestResponse failed - invalid type in 'server_ts' field. type=" + typeof initResponse["server_ts"] + ", value=" + initResponse["server_ts"] + ", " + e);
                    return null;
                }
                if (configsCreated) {
                    try {
                        var configurations = initResponse["configs"];
                        validatedDict["configs"] = configurations;
                    }
                    catch (e) {
                        GALogger.w("validateInitRequestResponse failed - invalid type in 'configs' field. type=" + typeof initResponse["configs"] + ", value=" + initResponse["configs"] + ", " + e);
                        return null;
                    }
                    try {
                        var configs_hash = initResponse["configs_hash"];
                        validatedDict["configs_hash"] = configs_hash;
                    }
                    catch (e) {
                        GALogger.w("validateInitRequestResponse failed - invalid type in 'configs_hash' field. type=" + typeof initResponse["configs_hash"] + ", value=" + initResponse["configs_hash"] + ", " + e);
                        return null;
                    }
                    try {
                        var ab_id = initResponse["ab_id"];
                        validatedDict["ab_id"] = ab_id;
                    }
                    catch (e) {
                        GALogger.w("validateInitRequestResponse failed - invalid type in 'ab_id' field. type=" + typeof initResponse["ab_id"] + ", value=" + initResponse["ab_id"] + ", " + e);
                        return null;
                    }
                    try {
                        var ab_variant_id = initResponse["ab_variant_id"];
                        validatedDict["ab_variant_id"] = ab_variant_id;
                    }
                    catch (e) {
                        GALogger.w("validateInitRequestResponse failed - invalid type in 'ab_variant_id' field. type=" + typeof initResponse["ab_variant_id"] + ", value=" + initResponse["ab_variant_id"] + ", " + e);
                        return null;
                    }
                }
                return validatedDict;
            };
            GAValidator.validateBuild = function (build) {
                if (!GAValidator.validateShortString(build, false)) {
                    return false;
                }
                return true;
            };
            GAValidator.validateSdkWrapperVersion = function (wrapperVersion) {
                if (!GAUtilities.stringMatch(wrapperVersion, /^(unity|unreal|gamemaker|cocos2d|construct|defold|godot) [0-9]{0,5}(\.[0-9]{0,5}){0,2}$/)) {
                    return false;
                }
                return true;
            };
            GAValidator.validateEngineVersion = function (engineVersion) {
                if (!engineVersion || !GAUtilities.stringMatch(engineVersion, /^(unity|unreal|gamemaker|cocos2d|construct|defold|godot) [0-9]{0,5}(\.[0-9]{0,5}){0,2}$/)) {
                    return false;
                }
                return true;
            };
            GAValidator.validateUserId = function (uId) {
                if (!GAValidator.validateString(uId, false)) {
                    GALogger.w("Validation fail - user id: id cannot be (null), empty or above 64 characters.");
                    return false;
                }
                return true;
            };
            GAValidator.validateShortString = function (shortString, canBeEmpty) {
                if (canBeEmpty && !shortString) {
                    return true;
                }
                if (!shortString || shortString.length > 32) {
                    return false;
                }
                return true;
            };
            GAValidator.validateString = function (s, canBeEmpty) {
                if (canBeEmpty && !s) {
                    return true;
                }
                if (!s || s.length > 64) {
                    return false;
                }
                return true;
            };
            GAValidator.validateLongString = function (longString, canBeEmpty) {
                if (canBeEmpty && !longString) {
                    return true;
                }
                if (!longString || longString.length > 8192) {
                    return false;
                }
                return true;
            };
            GAValidator.validateConnectionType = function (connectionType) {
                return GAUtilities.stringMatch(connectionType, /^(wwan|wifi|lan|offline)$/);
            };
            GAValidator.validateCustomDimensions = function (customDimensions) {
                return GAValidator.validateArrayOfStrings(20, 32, false, "custom dimensions", customDimensions);
            };
            GAValidator.validateResourceCurrencies = function (resourceCurrencies) {
                if (!GAValidator.validateArrayOfStrings(20, 64, false, "resource currencies", resourceCurrencies)) {
                    return false;
                }
                for (var i = 0; i < resourceCurrencies.length; ++i) {
                    if (!GAUtilities.stringMatch(resourceCurrencies[i], /^[A-Za-z]+$/)) {
                        GALogger.w("resource currencies validation failed: a resource currency can only be A-Z, a-z. String was: " + resourceCurrencies[i]);
                        return false;
                    }
                }
                return true;
            };
            GAValidator.validateResourceItemTypes = function (resourceItemTypes) {
                if (!GAValidator.validateArrayOfStrings(20, 32, false, "resource item types", resourceItemTypes)) {
                    return false;
                }
                for (var i = 0; i < resourceItemTypes.length; ++i) {
                    if (!GAValidator.validateEventPartCharacters(resourceItemTypes[i])) {
                        GALogger.w("resource item types validation failed: a resource item type cannot contain other characters than A-z, 0-9, -_., ()!?. String was: " + resourceItemTypes[i]);
                        return false;
                    }
                }
                return true;
            };
            GAValidator.validateDimension01 = function (dimension01, availableDimensions) {
                if (!dimension01) {
                    return true;
                }
                if (!GAUtilities.stringArrayContainsString(availableDimensions, dimension01)) {
                    return false;
                }
                return true;
            };
            GAValidator.validateDimension02 = function (dimension02, availableDimensions) {
                if (!dimension02) {
                    return true;
                }
                if (!GAUtilities.stringArrayContainsString(availableDimensions, dimension02)) {
                    return false;
                }
                return true;
            };
            GAValidator.validateDimension03 = function (dimension03, availableDimensions) {
                if (!dimension03) {
                    return true;
                }
                if (!GAUtilities.stringArrayContainsString(availableDimensions, dimension03)) {
                    return false;
                }
                return true;
            };
            GAValidator.validateArrayOfStrings = function (maxCount, maxStringLength, allowNoValues, logTag, arrayOfStrings) {
                var arrayTag = logTag;
                if (!arrayTag) {
                    arrayTag = "Array";
                }
                if (!arrayOfStrings) {
                    GALogger.w(arrayTag + " validation failed: array cannot be null. ");
                    return false;
                }
                if (allowNoValues == false && arrayOfStrings.length == 0) {
                    GALogger.w(arrayTag + " validation failed: array cannot be empty. ");
                    return false;
                }
                if (maxCount > 0 && arrayOfStrings.length > maxCount) {
                    GALogger.w(arrayTag + " validation failed: array cannot exceed " + maxCount + " values. It has " + arrayOfStrings.length + " values.");
                    return false;
                }
                for (var i = 0; i < arrayOfStrings.length; ++i) {
                    var stringLength = !arrayOfStrings[i] ? 0 : arrayOfStrings[i].length;
                    if (stringLength === 0) {
                        GALogger.w(arrayTag + " validation failed: contained an empty string. Array=" + JSON.stringify(arrayOfStrings));
                        return false;
                    }
                    if (maxStringLength > 0 && stringLength > maxStringLength) {
                        GALogger.w(arrayTag + " validation failed: a string exceeded max allowed length (which is: " + maxStringLength + "). String was: " + arrayOfStrings[i]);
                        return false;
                    }
                }
                return true;
            };
            GAValidator.validateClientTs = function (clientTs) {
                if (clientTs < (-4294967295 + 1) || clientTs > (4294967295 - 1)) {
                    return false;
                }
                return true;
            };
            return GAValidator;
        }());
        validators.GAValidator = GAValidator;
    })(validators = gameanalytics.validators || (gameanalytics.validators = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
    var device;
    (function (device) {
        var NameValueVersion = (function () {
            function NameValueVersion(name, value, version) {
                this.name = name;
                this.value = value;
                this.version = version;
            }
            return NameValueVersion;
        }());
        device.NameValueVersion = NameValueVersion;
        var NameVersion = (function () {
            function NameVersion(name, version) {
                this.name = name;
                this.version = version;
            }
            return NameVersion;
        }());
        device.NameVersion = NameVersion;
        var GADevice = (function () {
            function GADevice() {
            }
            GADevice.touch = function () {
            };
            GADevice.getRelevantSdkVersion = function () {
                if (GADevice.sdkGameEngineVersion) {
                    return GADevice.sdkGameEngineVersion;
                }
                return GADevice.sdkWrapperVersion;
            };
            GADevice.getConnectionType = function () {
                return GADevice.connectionType;
            };
            GADevice.updateConnectionType = function () {
                if (navigator.onLine) {
                    if (GADevice.buildPlatform === "ios" || GADevice.buildPlatform === "android") {
                        GADevice.connectionType = "wwan";
                    }
                    else {
                        GADevice.connectionType = "lan";
                    }
                }
                else {
                    GADevice.connectionType = "offline";
                }
            };
            GADevice.getOSVersionString = function () {
                return GADevice.buildPlatform + " " + GADevice.osVersionPair.version;
            };
            GADevice.runtimePlatformToString = function () {
                return GADevice.osVersionPair.name;
            };
            GADevice.getBrowserVersionString = function () {
                var ua = navigator.userAgent;
                var tem;
                var M = ua.match(/(opera|chrome|safari|firefox|ubrowser|msie|trident|fbav(?=\/))\/?\s*(\d+)/i) || [];
                if (M.length == 0) {
                    if (GADevice.buildPlatform === "ios") {
                        return "webkit_" + GADevice.osVersion;
                    }
                }
                if (/trident/i.test(M[1])) {
                    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                    return 'IE ' + (tem[1] || '');
                }
                if (M[1] === 'Chrome') {
                    tem = ua.match(/\b(OPR|Edge|UBrowser)\/(\d+)/);
                    if (tem != null) {
                        return tem.slice(1).join(' ').replace('OPR', 'Opera').replace('UBrowser', 'UC').toLowerCase();
                    }
                }
                if (M[1] && M[1].toLowerCase() === 'fbav') {
                    M[1] = "facebook";
                    if (M[2]) {
                        return "facebook " + M[2];
                    }
                }
                var MString = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
                if ((tem = ua.match(/version\/(\d+)/i)) != null) {
                    MString.splice(1, 1, tem[1]);
                }
                return MString.join(' ').toLowerCase();
            };
            GADevice.getDeviceModel = function () {
                var result = "unknown";
                return result;
            };
            GADevice.getDeviceManufacturer = function () {
                var result = "unknown";
                return result;
            };
            GADevice.matchItem = function (agent, data) {
                var result = new NameVersion("unknown", "0.0.0");
                var i = 0;
                var j = 0;
                var regex;
                var regexv;
                var match;
                var matches;
                var mathcesResult;
                var version;
                for (i = 0; i < data.length; i += 1) {
                    regex = new RegExp(data[i].value, 'i');
                    match = regex.test(agent);
                    if (match) {
                        regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
                        matches = agent.match(regexv);
                        version = '';
                        if (matches) {
                            if (matches[1]) {
                                mathcesResult = matches[1];
                            }
                        }
                        if (mathcesResult) {
                            var matchesArray = mathcesResult.split(/[._]+/);
                            for (j = 0; j < Math.min(matchesArray.length, 3); j += 1) {
                                version += matchesArray[j] + (j < Math.min(matchesArray.length, 3) - 1 ? '.' : '');
                            }
                        }
                        else {
                            version = '0.0.0';
                        }
                        result.name = data[i].name;
                        result.version = version;
                        return result;
                    }
                }
                return result;
            };
            GADevice.sdkWrapperVersion = "javascript 4.1.4";
            GADevice.osVersionPair = GADevice.matchItem([
                navigator.platform,
                navigator.userAgent,
                navigator.appVersion,
                navigator.vendor
            ].join(' '), [
                new NameValueVersion("windows_phone", "Windows Phone", "OS"),
                new NameValueVersion("windows", "Win", "NT"),
                new NameValueVersion("ios", "iPhone", "OS"),
                new NameValueVersion("ios", "iPad", "OS"),
                new NameValueVersion("ios", "iPod", "OS"),
                new NameValueVersion("android", "Android", "Android"),
                new NameValueVersion("blackBerry", "BlackBerry", "/"),
                new NameValueVersion("mac_osx", "Mac", "OS X"),
                new NameValueVersion("tizen", "Tizen", "Tizen"),
                new NameValueVersion("linux", "Linux", "rv"),
                new NameValueVersion("kai_os", "KAIOS", "KAIOS")
            ]);
            GADevice.buildPlatform = GADevice.runtimePlatformToString();
            GADevice.deviceModel = GADevice.getDeviceModel();
            GADevice.deviceManufacturer = GADevice.getDeviceManufacturer();
            GADevice.osVersion = GADevice.getOSVersionString();
            GADevice.browserVersion = GADevice.getBrowserVersionString();
            return GADevice;
        }());
        device.GADevice = GADevice;
    })(device = gameanalytics.device || (gameanalytics.device = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
    var threading;
    (function (threading) {
        var TimedBlock = (function () {
            function TimedBlock(deadline) {
                this.deadline = deadline;
                this.ignore = false;
                this.async = false;
                this.running = false;
                this.id = ++TimedBlock.idCounter;
            }
            TimedBlock.idCounter = 0;
            return TimedBlock;
        }());
        threading.TimedBlock = TimedBlock;
    })(threading = gameanalytics.threading || (gameanalytics.threading = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
    var threading;
    (function (threading) {
        var PriorityQueue = (function () {
            function PriorityQueue(priorityComparer) {
                this.comparer = priorityComparer;
                this._subQueues = {};
                this._sortedKeys = [];
            }
            PriorityQueue.prototype.enqueue = function (priority, item) {
                if (this._sortedKeys.indexOf(priority) === -1) {
                    this.addQueueOfPriority(priority);
                }
                this._subQueues[priority].push(item);
            };
            PriorityQueue.prototype.addQueueOfPriority = function (priority) {
                var _this = this;
                this._sortedKeys.push(priority);
                this._sortedKeys.sort(function (x, y) { return _this.comparer.compare(x, y); });
                this._subQueues[priority] = [];
            };
            PriorityQueue.prototype.peek = function () {
                if (this.hasItems()) {
                    return this._subQueues[this._sortedKeys[0]][0];
                }
                else {
                    throw new Error("The queue is empty");
                }
            };
            PriorityQueue.prototype.hasItems = function () {
                return this._sortedKeys.length > 0;
            };
            PriorityQueue.prototype.dequeue = function () {
                if (this.hasItems()) {
                    return this.dequeueFromHighPriorityQueue();
                }
                else {
                    throw new Error("The queue is empty");
                }
            };
            PriorityQueue.prototype.dequeueFromHighPriorityQueue = function () {
                var firstKey = this._sortedKeys[0];
                var nextItem = this._subQueues[firstKey].shift();
                if (this._subQueues[firstKey].length === 0) {
                    this._sortedKeys.shift();
                    delete this._subQueues[firstKey];
                }
                return nextItem;
            };
            return PriorityQueue;
        }());
        threading.PriorityQueue = PriorityQueue;
    })(threading = gameanalytics.threading || (gameanalytics.threading = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
    var store;
    (function (store_1) {
        var GALogger = gameanalytics.logging.GALogger;
        var EGAStoreArgsOperator;
        (function (EGAStoreArgsOperator) {
            EGAStoreArgsOperator[EGAStoreArgsOperator["Equal"] = 0] = "Equal";
            EGAStoreArgsOperator[EGAStoreArgsOperator["LessOrEqual"] = 1] = "LessOrEqual";
            EGAStoreArgsOperator[EGAStoreArgsOperator["NotEqual"] = 2] = "NotEqual";
        })(EGAStoreArgsOperator = store_1.EGAStoreArgsOperator || (store_1.EGAStoreArgsOperator = {}));
        var EGAStore;
        (function (EGAStore) {
            EGAStore[EGAStore["Events"] = 0] = "Events";
            EGAStore[EGAStore["Sessions"] = 1] = "Sessions";
            EGAStore[EGAStore["Progression"] = 2] = "Progression";
        })(EGAStore = store_1.EGAStore || (store_1.EGAStore = {}));
        var GAStore = (function () {
            function GAStore() {
                this.eventsStore = [];
                this.sessionsStore = [];
                this.progressionStore = [];
                this.storeItems = {};
                try {
                    if (typeof localStorage === 'object') {
                        localStorage.setItem('testingLocalStorage', 'yes');
                        localStorage.removeItem('testingLocalStorage');
                        GAStore.storageAvailable = true;
                    }
                    else {
                        GAStore.storageAvailable = false;
                    }
                }
                catch (e) {
                }
            }
            GAStore.isStorageAvailable = function () {
                return GAStore.storageAvailable;
            };
            GAStore.isStoreTooLargeForEvents = function () {
                return GAStore.instance.eventsStore.length + GAStore.instance.sessionsStore.length > GAStore.MaxNumberOfEntries;
            };
            GAStore.select = function (store, args, sort, maxCount) {
                if (args === void 0) { args = []; }
                if (sort === void 0) { sort = false; }
                if (maxCount === void 0) { maxCount = 0; }
                var currentStore = GAStore.getStore(store);
                if (!currentStore) {
                    return null;
                }
                var result = [];
                for (var i = 0; i < currentStore.length; ++i) {
                    var entry = currentStore[i];
                    var add = true;
                    for (var j = 0; j < args.length; ++j) {
                        var argsEntry = args[j];
                        if (entry[argsEntry[0]]) {
                            switch (argsEntry[1]) {
                                case EGAStoreArgsOperator.Equal:
                                    {
                                        add = entry[argsEntry[0]] == argsEntry[2];
                                    }
                                    break;
                                case EGAStoreArgsOperator.LessOrEqual:
                                    {
                                        add = entry[argsEntry[0]] <= argsEntry[2];
                                    }
                                    break;
                                case EGAStoreArgsOperator.NotEqual:
                                    {
                                        add = entry[argsEntry[0]] != argsEntry[2];
                                    }
                                    break;
                                default:
                                    {
                                        add = false;
                                    }
                                    break;
                            }
                        }
                        else {
                            add = false;
                        }
                        if (!add) {
                            break;
                        }
                    }
                    if (add) {
                        result.push(entry);
                    }
                }
                if (sort) {
                    result.sort(function (a, b) {
                        return a["client_ts"] - b["client_ts"];
                    });
                }
                if (maxCount > 0 && result.length > maxCount) {
                    result = result.slice(0, maxCount + 1);
                }
                return result;
            };
            GAStore.update = function (store, setArgs, whereArgs) {
                if (whereArgs === void 0) { whereArgs = []; }
                var currentStore = GAStore.getStore(store);
                if (!currentStore) {
                    return false;
                }
                for (var i = 0; i < currentStore.length; ++i) {
                    var entry = currentStore[i];
                    var update = true;
                    for (var j = 0; j < whereArgs.length; ++j) {
                        var argsEntry = whereArgs[j];
                        if (entry[argsEntry[0]]) {
                            switch (argsEntry[1]) {
                                case EGAStoreArgsOperator.Equal:
                                    {
                                        update = entry[argsEntry[0]] == argsEntry[2];
                                    }
                                    break;
                                case EGAStoreArgsOperator.LessOrEqual:
                                    {
                                        update = entry[argsEntry[0]] <= argsEntry[2];
                                    }
                                    break;
                                case EGAStoreArgsOperator.NotEqual:
                                    {
                                        update = entry[argsEntry[0]] != argsEntry[2];
                                    }
                                    break;
                                default:
                                    {
                                        update = false;
                                    }
                                    break;
                            }
                        }
                        else {
                            update = false;
                        }
                        if (!update) {
                            break;
                        }
                    }
                    if (update) {
                        for (var j = 0; j < setArgs.length; ++j) {
                            var setArgsEntry = setArgs[j];
                            entry[setArgsEntry[0]] = setArgsEntry[1];
                        }
                    }
                }
                return true;
            };
            GAStore["delete"] = function (store, args) {
                var currentStore = GAStore.getStore(store);
                if (!currentStore) {
                    return;
                }
                for (var i = 0; i < currentStore.length; ++i) {
                    var entry = currentStore[i];
                    var del = true;
                    for (var j = 0; j < args.length; ++j) {
                        var argsEntry = args[j];
                        if (entry[argsEntry[0]]) {
                            switch (argsEntry[1]) {
                                case EGAStoreArgsOperator.Equal:
                                    {
                                        del = entry[argsEntry[0]] == argsEntry[2];
                                    }
                                    break;
                                case EGAStoreArgsOperator.LessOrEqual:
                                    {
                                        del = entry[argsEntry[0]] <= argsEntry[2];
                                    }
                                    break;
                                case EGAStoreArgsOperator.NotEqual:
                                    {
                                        del = entry[argsEntry[0]] != argsEntry[2];
                                    }
                                    break;
                                default:
                                    {
                                        del = false;
                                    }
                                    break;
                            }
                        }
                        else {
                            del = false;
                        }
                        if (!del) {
                            break;
                        }
                    }
                    if (del) {
                        currentStore.splice(i, 1);
                        --i;
                    }
                }
            };
            GAStore.insert = function (store, newEntry, replace, replaceKey) {
                if (replace === void 0) { replace = false; }
                if (replaceKey === void 0) { replaceKey = null; }
                var currentStore = GAStore.getStore(store);
                if (!currentStore) {
                    return;
                }
                if (replace) {
                    if (!replaceKey) {
                        return;
                    }
                    var replaced = false;
                    for (var i = 0; i < currentStore.length; ++i) {
                        var entry = currentStore[i];
                        if (entry[replaceKey] == newEntry[replaceKey]) {
                            for (var s in newEntry) {
                                entry[s] = newEntry[s];
                            }
                            replaced = true;
                            break;
                        }
                    }
                    if (!replaced) {
                        currentStore.push(newEntry);
                    }
                }
                else {
                    currentStore.push(newEntry);
                }
            };
            GAStore.save = function (gameKey) {
                if (!GAStore.isStorageAvailable()) {
                    GALogger.w("Storage is not available, cannot save.");
                    return;
                }
                localStorage.setItem(GAStore.StringFormat(GAStore.KeyFormat, gameKey, GAStore.EventsStoreKey), JSON.stringify(GAStore.instance.eventsStore));
                localStorage.setItem(GAStore.StringFormat(GAStore.KeyFormat, gameKey, GAStore.SessionsStoreKey), JSON.stringify(GAStore.instance.sessionsStore));
                localStorage.setItem(GAStore.StringFormat(GAStore.KeyFormat, gameKey, GAStore.ProgressionStoreKey), JSON.stringify(GAStore.instance.progressionStore));
                localStorage.setItem(GAStore.StringFormat(GAStore.KeyFormat, gameKey, GAStore.ItemsStoreKey), JSON.stringify(GAStore.instance.storeItems));
            };
            GAStore.load = function (gameKey) {
                if (!GAStore.isStorageAvailable()) {
                    GALogger.w("Storage is not available, cannot load.");
                    return;
                }
                try {
                    GAStore.instance.eventsStore = JSON.parse(localStorage.getItem(GAStore.StringFormat(GAStore.KeyFormat, gameKey, GAStore.EventsStoreKey)));
                    if (!GAStore.instance.eventsStore) {
                        GAStore.instance.eventsStore = [];
                    }
                }
                catch (e) {
                    GALogger.w("Load failed for 'events' store. Using empty store.");
                    GAStore.instance.eventsStore = [];
                }
                try {
                    GAStore.instance.sessionsStore = JSON.parse(localStorage.getItem(GAStore.StringFormat(GAStore.KeyFormat, gameKey, GAStore.SessionsStoreKey)));
                    if (!GAStore.instance.sessionsStore) {
                        GAStore.instance.sessionsStore = [];
                    }
                }
                catch (e) {
                    GALogger.w("Load failed for 'sessions' store. Using empty store.");
                    GAStore.instance.sessionsStore = [];
                }
                try {
                    GAStore.instance.progressionStore = JSON.parse(localStorage.getItem(GAStore.StringFormat(GAStore.KeyFormat, gameKey, GAStore.ProgressionStoreKey)));
                    if (!GAStore.instance.progressionStore) {
                        GAStore.instance.progressionStore = [];
                    }
                }
                catch (e) {
                    GALogger.w("Load failed for 'progression' store. Using empty store.");
                    GAStore.instance.progressionStore = [];
                }
                try {
                    GAStore.instance.storeItems = JSON.parse(localStorage.getItem(GAStore.StringFormat(GAStore.KeyFormat, gameKey, GAStore.ItemsStoreKey)));
                    if (!GAStore.instance.storeItems) {
                        GAStore.instance.storeItems = {};
                    }
                }
                catch (e) {
                    GALogger.w("Load failed for 'items' store. Using empty store.");
                    GAStore.instance.progressionStore = [];
                }
            };
            GAStore.setItem = function (gameKey, key, value) {
                var keyWithPrefix = GAStore.StringFormat(GAStore.KeyFormat, gameKey, key);
                if (!value) {
                    if (keyWithPrefix in GAStore.instance.storeItems) {
                        delete GAStore.instance.storeItems[keyWithPrefix];
                    }
                }
                else {
                    GAStore.instance.storeItems[keyWithPrefix] = value;
                }
            };
            GAStore.getItem = function (gameKey, key) {
                var keyWithPrefix = GAStore.StringFormat(GAStore.KeyFormat, gameKey, key);
                if (keyWithPrefix in GAStore.instance.storeItems) {
                    return GAStore.instance.storeItems[keyWithPrefix];
                }
                else {
                    return null;
                }
            };
            GAStore.getStore = function (store) {
                switch (store) {
                    case EGAStore.Events:
                        {
                            return GAStore.instance.eventsStore;
                        }
                    case EGAStore.Sessions:
                        {
                            return GAStore.instance.sessionsStore;
                        }
                    case EGAStore.Progression:
                        {
                            return GAStore.instance.progressionStore;
                        }
                    default:
                        {
                            GALogger.w("GAStore.getStore(): Cannot find store: " + store);
                            return null;
                        }
                }
            };
            GAStore.instance = new GAStore();
            GAStore.MaxNumberOfEntries = 2000;
            GAStore.StringFormat = function (str) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return str.replace(/{(\d+)}/g, function (_, index) { return args[index] || ''; });
            };
            GAStore.KeyFormat = "GA::{0}::{1}";
            GAStore.EventsStoreKey = "ga_event";
            GAStore.SessionsStoreKey = "ga_session";
            GAStore.ProgressionStoreKey = "ga_progression";
            GAStore.ItemsStoreKey = "ga_items";
            return GAStore;
        }());
        store_1.GAStore = GAStore;
    })(store = gameanalytics.store || (gameanalytics.store = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
    var state;
    (function (state) {
        var GAValidator = gameanalytics.validators.GAValidator;
        var GAUtilities = gameanalytics.utilities.GAUtilities;
        var GALogger = gameanalytics.logging.GALogger;
        var GAStore = gameanalytics.store.GAStore;
        var GADevice = gameanalytics.device.GADevice;
        var EGAStore = gameanalytics.store.EGAStore;
        var EGAStoreArgsOperator = gameanalytics.store.EGAStoreArgsOperator;
        var GAState = (function () {
            function GAState() {
                this.availableCustomDimensions01 = [];
                this.availableCustomDimensions02 = [];
                this.availableCustomDimensions03 = [];
                this.availableResourceCurrencies = [];
                this.availableResourceItemTypes = [];
                this.configurations = {};
                this.remoteConfigsListeners = [];
                this.sdkConfigDefault = {};
                this.sdkConfig = {};
                this.progressionTries = {};
                this._isEventSubmissionEnabled = true;
            }
            GAState.setUserId = function (userId) {
                GAState.instance.userId = userId;
                GAState.cacheIdentifier();
            };
            GAState.getIdentifier = function () {
                return GAState.instance.identifier;
            };
            GAState.isInitialized = function () {
                return GAState.instance.initialized;
            };
            GAState.setInitialized = function (value) {
                GAState.instance.initialized = value;
            };
            GAState.getSessionStart = function () {
                return GAState.instance.sessionStart;
            };
            GAState.getSessionNum = function () {
                return GAState.instance.sessionNum;
            };
            GAState.getTransactionNum = function () {
                return GAState.instance.transactionNum;
            };
            GAState.getSessionId = function () {
                return GAState.instance.sessionId;
            };
            GAState.getCurrentCustomDimension01 = function () {
                return GAState.instance.currentCustomDimension01;
            };
            GAState.getCurrentCustomDimension02 = function () {
                return GAState.instance.currentCustomDimension02;
            };
            GAState.getCurrentCustomDimension03 = function () {
                return GAState.instance.currentCustomDimension03;
            };
            GAState.getGameKey = function () {
                return GAState.instance.gameKey;
            };
            GAState.getGameSecret = function () {
                return GAState.instance.gameSecret;
            };
            GAState.getAvailableCustomDimensions01 = function () {
                return GAState.instance.availableCustomDimensions01;
            };
            GAState.setAvailableCustomDimensions01 = function (value) {
                if (!GAValidator.validateCustomDimensions(value)) {
                    return;
                }
                GAState.instance.availableCustomDimensions01 = value;
                GAState.validateAndFixCurrentDimensions();
                GALogger.i("Set available custom01 dimension values: (" + GAUtilities.joinStringArray(value, ", ") + ")");
            };
            GAState.getAvailableCustomDimensions02 = function () {
                return GAState.instance.availableCustomDimensions02;
            };
            GAState.setAvailableCustomDimensions02 = function (value) {
                if (!GAValidator.validateCustomDimensions(value)) {
                    return;
                }
                GAState.instance.availableCustomDimensions02 = value;
                GAState.validateAndFixCurrentDimensions();
                GALogger.i("Set available custom02 dimension values: (" + GAUtilities.joinStringArray(value, ", ") + ")");
            };
            GAState.getAvailableCustomDimensions03 = function () {
                return GAState.instance.availableCustomDimensions03;
            };
            GAState.setAvailableCustomDimensions03 = function (value) {
                if (!GAValidator.validateCustomDimensions(value)) {
                    return;
                }
                GAState.instance.availableCustomDimensions03 = value;
                GAState.validateAndFixCurrentDimensions();
                GALogger.i("Set available custom03 dimension values: (" + GAUtilities.joinStringArray(value, ", ") + ")");
            };
            GAState.getAvailableResourceCurrencies = function () {
                return GAState.instance.availableResourceCurrencies;
            };
            GAState.setAvailableResourceCurrencies = function (value) {
                if (!GAValidator.validateResourceCurrencies(value)) {
                    return;
                }
                GAState.instance.availableResourceCurrencies = value;
                GALogger.i("Set available resource currencies: (" + GAUtilities.joinStringArray(value, ", ") + ")");
            };
            GAState.getAvailableResourceItemTypes = function () {
                return GAState.instance.availableResourceItemTypes;
            };
            GAState.setAvailableResourceItemTypes = function (value) {
                if (!GAValidator.validateResourceItemTypes(value)) {
                    return;
                }
                GAState.instance.availableResourceItemTypes = value;
                GALogger.i("Set available resource item types: (" + GAUtilities.joinStringArray(value, ", ") + ")");
            };
            GAState.getBuild = function () {
                return GAState.instance.build;
            };
            GAState.setBuild = function (value) {
                GAState.instance.build = value;
                GALogger.i("Set build version: " + value);
            };
            GAState.getUseManualSessionHandling = function () {
                return GAState.instance.useManualSessionHandling;
            };
            GAState.isEventSubmissionEnabled = function () {
                return GAState.instance._isEventSubmissionEnabled;
            };
            GAState.getABTestingId = function () {
                return GAState.instance.abId;
            };
            GAState.getABTestingVariantId = function () {
                return GAState.instance.abVariantId;
            };
            GAState.prototype.setDefaultId = function (value) {
                this.defaultUserId = !value ? "" : value;
                GAState.cacheIdentifier();
            };
            GAState.getDefaultId = function () {
                return GAState.instance.defaultUserId;
            };
            GAState.getSdkConfig = function () {
                {
                    var first;
                    var count = 0;
                    for (var json in GAState.instance.sdkConfig) {
                        if (count === 0) {
                            first = json;
                        }
                        ++count;
                    }
                    if (first && count > 0) {
                        return GAState.instance.sdkConfig;
                    }
                }
                {
                    var first;
                    var count = 0;
                    for (var json in GAState.instance.sdkConfigCached) {
                        if (count === 0) {
                            first = json;
                        }
                        ++count;
                    }
                    if (first && count > 0) {
                        return GAState.instance.sdkConfigCached;
                    }
                }
                return GAState.instance.sdkConfigDefault;
            };
            GAState.isEnabled = function () {
                if (!GAState.instance.initAuthorized) {
                    return false;
                }
                else {
                    return true;
                }
            };
            GAState.setCustomDimension01 = function (dimension) {
                GAState.instance.currentCustomDimension01 = dimension;
                GAStore.setItem(GAState.getGameKey(), GAState.Dimension01Key, dimension);
                GALogger.i("Set custom01 dimension value: " + dimension);
            };
            GAState.setCustomDimension02 = function (dimension) {
                GAState.instance.currentCustomDimension02 = dimension;
                GAStore.setItem(GAState.getGameKey(), GAState.Dimension02Key, dimension);
                GALogger.i("Set custom02 dimension value: " + dimension);
            };
            GAState.setCustomDimension03 = function (dimension) {
                GAState.instance.currentCustomDimension03 = dimension;
                GAStore.setItem(GAState.getGameKey(), GAState.Dimension03Key, dimension);
                GALogger.i("Set custom03 dimension value: " + dimension);
            };
            GAState.incrementSessionNum = function () {
                var sessionNumInt = GAState.getSessionNum() + 1;
                GAState.instance.sessionNum = sessionNumInt;
            };
            GAState.incrementTransactionNum = function () {
                var transactionNumInt = GAState.getTransactionNum() + 1;
                GAState.instance.transactionNum = transactionNumInt;
            };
            GAState.incrementProgressionTries = function (progression) {
                var tries = GAState.getProgressionTries(progression) + 1;
                GAState.instance.progressionTries[progression] = tries;
                var values = {};
                values["progression"] = progression;
                values["tries"] = tries;
                GAStore.insert(EGAStore.Progression, values, true, "progression");
            };
            GAState.getProgressionTries = function (progression) {
                if (progression in GAState.instance.progressionTries) {
                    return GAState.instance.progressionTries[progression];
                }
                else {
                    return 0;
                }
            };
            GAState.clearProgressionTries = function (progression) {
                if (progression in GAState.instance.progressionTries) {
                    delete GAState.instance.progressionTries[progression];
                }
                var parms = [];
                parms.push(["progression", EGAStoreArgsOperator.Equal, progression]);
                GAStore["delete"](EGAStore.Progression, parms);
            };
            GAState.setKeys = function (gameKey, gameSecret) {
                GAState.instance.gameKey = gameKey;
                GAState.instance.gameSecret = gameSecret;
            };
            GAState.setManualSessionHandling = function (flag) {
                GAState.instance.useManualSessionHandling = flag;
                GALogger.i("Use manual session handling: " + flag);
            };
            GAState.setEnabledEventSubmission = function (flag) {
                GAState.instance._isEventSubmissionEnabled = flag;
            };
            GAState.getEventAnnotations = function () {
                var annotations = {};
                annotations["v"] = 2;
                annotations["user_id"] = GAState.instance.identifier;
                annotations["client_ts"] = GAState.getClientTsAdjusted();
                annotations["sdk_version"] = GADevice.getRelevantSdkVersion();
                annotations["os_version"] = GADevice.osVersion;
                annotations["manufacturer"] = GADevice.deviceManufacturer;
                annotations["device"] = GADevice.deviceModel;
                annotations["browser_version"] = GADevice.browserVersion;
                annotations["platform"] = GADevice.buildPlatform;
                annotations["session_id"] = GAState.instance.sessionId;
                annotations[GAState.SessionNumKey] = GAState.instance.sessionNum;
                var connection_type = GADevice.getConnectionType();
                if (GAValidator.validateConnectionType(connection_type)) {
                    annotations["connection_type"] = connection_type;
                }
                if (GADevice.gameEngineVersion) {
                    annotations["engine_version"] = GADevice.gameEngineVersion;
                }
                if (GAState.instance.configurations) {
                    var count = 0;
                    for (var _ in GAState.instance.configurations) {
                        count++;
                        break;
                    }
                    if (count > 0) {
                        annotations["configurations"] = GAState.instance.configurations;
                    }
                }
                if (GAState.instance.abId) {
                    annotations["ab_id"] = GAState.instance.abId;
                }
                if (GAState.instance.abVariantId) {
                    annotations["ab_variant_id"] = GAState.instance.abVariantId;
                }
                if (GAState.instance.build) {
                    annotations["build"] = GAState.instance.build;
                }
                return annotations;
            };
            GAState.getSdkErrorEventAnnotations = function () {
                var annotations = {};
                annotations["v"] = 2;
                annotations["category"] = GAState.CategorySdkError;
                annotations["sdk_version"] = GADevice.getRelevantSdkVersion();
                annotations["os_version"] = GADevice.osVersion;
                annotations["manufacturer"] = GADevice.deviceManufacturer;
                annotations["device"] = GADevice.deviceModel;
                annotations["platform"] = GADevice.buildPlatform;
                var connection_type = GADevice.getConnectionType();
                if (GAValidator.validateConnectionType(connection_type)) {
                    annotations["connection_type"] = connection_type;
                }
                if (GADevice.gameEngineVersion) {
                    annotations["engine_version"] = GADevice.gameEngineVersion;
                }
                return annotations;
            };
            GAState.getInitAnnotations = function () {
                var initAnnotations = {};
                if (!GAState.getIdentifier()) {
                    GAState.cacheIdentifier();
                }
                initAnnotations["user_id"] = GAState.getIdentifier();
                initAnnotations["sdk_version"] = GADevice.getRelevantSdkVersion();
                initAnnotations["os_version"] = GADevice.osVersion;
                initAnnotations["platform"] = GADevice.buildPlatform;
                if (GAState.getBuild()) {
                    initAnnotations["build"] = GAState.getBuild();
                }
                else {
                    initAnnotations["build"] = null;
                }
                initAnnotations["session_num"] = GAState.getSessionNum();
                initAnnotations["random_salt"] = GAState.getSessionNum();
                return initAnnotations;
            };
            GAState.getClientTsAdjusted = function () {
                var clientTs = GAUtilities.timeIntervalSince1970();
                var clientTsAdjustedInteger = clientTs + GAState.instance.clientServerTimeOffset;
                if (GAValidator.validateClientTs(clientTsAdjustedInteger)) {
                    return clientTsAdjustedInteger;
                }
                else {
                    return clientTs;
                }
            };
            GAState.sessionIsStarted = function () {
                return GAState.instance.sessionStart != 0;
            };
            GAState.cacheIdentifier = function () {
                if (GAState.instance.userId) {
                    GAState.instance.identifier = GAState.instance.userId;
                }
                else if (GAState.instance.defaultUserId) {
                    GAState.instance.identifier = GAState.instance.defaultUserId;
                }
            };
            GAState.ensurePersistedStates = function () {
                if (GAStore.isStorageAvailable()) {
                    GAStore.load(GAState.getGameKey());
                }
                var instance = GAState.instance;
                instance.setDefaultId(GAStore.getItem(GAState.getGameKey(), GAState.DefaultUserIdKey) != null ? GAStore.getItem(GAState.getGameKey(), GAState.DefaultUserIdKey) : GAUtilities.createGuid());
                instance.sessionNum = GAStore.getItem(GAState.getGameKey(), GAState.SessionNumKey) != null ? Number(GAStore.getItem(GAState.getGameKey(), GAState.SessionNumKey)) : 0.0;
                instance.transactionNum = GAStore.getItem(GAState.getGameKey(), GAState.TransactionNumKey) != null ? Number(GAStore.getItem(GAState.getGameKey(), GAState.TransactionNumKey)) : 0.0;
                if (instance.currentCustomDimension01) {
                    GAStore.setItem(GAState.getGameKey(), GAState.Dimension01Key, instance.currentCustomDimension01);
                }
                else {
                    instance.currentCustomDimension01 = GAStore.getItem(GAState.getGameKey(), GAState.Dimension01Key) != null ? GAStore.getItem(GAState.getGameKey(), GAState.Dimension01Key) : "";
                    if (instance.currentCustomDimension01) {
                    }
                }
                if (instance.currentCustomDimension02) {
                    GAStore.setItem(GAState.getGameKey(), GAState.Dimension02Key, instance.currentCustomDimension02);
                }
                else {
                    instance.currentCustomDimension02 = GAStore.getItem(GAState.getGameKey(), GAState.Dimension02Key) != null ? GAStore.getItem(GAState.getGameKey(), GAState.Dimension02Key) : "";
                    if (instance.currentCustomDimension02) {
                    }
                }
                if (instance.currentCustomDimension03) {
                    GAStore.setItem(GAState.getGameKey(), GAState.Dimension03Key, instance.currentCustomDimension03);
                }
                else {
                    instance.currentCustomDimension03 = GAStore.getItem(GAState.getGameKey(), GAState.Dimension03Key) != null ? GAStore.getItem(GAState.getGameKey(), GAState.Dimension03Key) : "";
                    if (instance.currentCustomDimension03) {
                    }
                }
                var sdkConfigCachedString = GAStore.getItem(GAState.getGameKey(), GAState.SdkConfigCachedKey) != null ? GAStore.getItem(GAState.getGameKey(), GAState.SdkConfigCachedKey) : "";
                if (sdkConfigCachedString) {
                    var sdkConfigCached = JSON.parse(GAUtilities.decode64(sdkConfigCachedString));
                    if (sdkConfigCached) {
                        instance.sdkConfigCached = sdkConfigCached;
                    }
                }
                {
                    var currentSdkConfig = GAState.getSdkConfig();
                    instance.configsHash = currentSdkConfig["configs_hash"] ? currentSdkConfig["configs_hash"] : "";
                    instance.abId = currentSdkConfig["ab_id"] ? currentSdkConfig["ab_id"] : "";
                    instance.abVariantId = currentSdkConfig["ab_variant_id"] ? currentSdkConfig["ab_variant_id"] : "";
                }
                var results_ga_progression = GAStore.select(EGAStore.Progression);
                if (results_ga_progression) {
                    for (var i = 0; i < results_ga_progression.length; ++i) {
                        var result = results_ga_progression[i];
                        if (result) {
                            instance.progressionTries[result["progression"]] = result["tries"];
                        }
                    }
                }
            };
            GAState.calculateServerTimeOffset = function (serverTs) {
                var clientTs = GAUtilities.timeIntervalSince1970();
                return serverTs - clientTs;
            };
            GAState.validateAndCleanCustomFields = function (fields) {
                var result = {};
                if (fields) {
                    var count = 0;
                    for (var key in fields) {
                        var value = fields[key];
                        if (!key || !value) {
                            GALogger.w("validateAndCleanCustomFields: entry with key=" + key + ", value=" + value + " has been omitted because its key or value is null");
                        }
                        else if (count < GAState.MAX_CUSTOM_FIELDS_COUNT) {
                            var regex = new RegExp("^[a-zA-Z0-9_]{1," + GAState.MAX_CUSTOM_FIELDS_KEY_LENGTH + "}$");
                            if (GAUtilities.stringMatch(key, regex)) {
                                var type = typeof value;
                                if (type === "string" || value instanceof String) {
                                    var valueAsString = value;
                                    if (valueAsString.length <= GAState.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH && valueAsString.length > 0) {
                                        result[key] = valueAsString;
                                        ++count;
                                    }
                                    else {
                                        GALogger.w("validateAndCleanCustomFields: entry with key=" + key + ", value=" + value + " has been omitted because its value is an empty string or exceeds the max number of characters (" + GAState.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH + ")");
                                    }
                                }
                                else if (type === "number" || value instanceof Number) {
                                    var valueAsNumber = value;
                                    result[key] = valueAsNumber;
                                    ++count;
                                }
                                else {
                                    GALogger.w("validateAndCleanCustomFields: entry with key=" + key + ", value=" + value + " has been omitted because its value is not a string or number");
                                }
                            }
                            else {
                                GALogger.w("validateAndCleanCustomFields: entry with key=" + key + ", value=" + value + " has been omitted because its key contains illegal character, is empty or exceeds the max number of characters (" + GAState.MAX_CUSTOM_FIELDS_KEY_LENGTH + ")");
                            }
                        }
                        else {
                            GALogger.w("validateAndCleanCustomFields: entry with key=" + key + ", value=" + value + " has been omitted because it exceeds the max number of custom fields (" + GAState.MAX_CUSTOM_FIELDS_COUNT + ")");
                        }
                    }
                }
                return result;
            };
            GAState.validateAndFixCurrentDimensions = function () {
                if (!GAValidator.validateDimension01(GAState.getCurrentCustomDimension01(), GAState.getAvailableCustomDimensions01())) {
                    GAState.setCustomDimension01("");
                }
                if (!GAValidator.validateDimension02(GAState.getCurrentCustomDimension02(), GAState.getAvailableCustomDimensions02())) {
                    GAState.setCustomDimension02("");
                }
                if (!GAValidator.validateDimension03(GAState.getCurrentCustomDimension03(), GAState.getAvailableCustomDimensions03())) {
                    GAState.setCustomDimension03("");
                }
            };
            GAState.getConfigurationStringValue = function (key, defaultValue) {
                if (GAState.instance.configurations[key]) {
                    return GAState.instance.configurations[key].toString();
                }
                else {
                    return defaultValue;
                }
            };
            GAState.isRemoteConfigsReady = function () {
                return GAState.instance.remoteConfigsIsReady;
            };
            GAState.addRemoteConfigsListener = function (listener) {
                if (GAState.instance.remoteConfigsListeners.indexOf(listener) < 0) {
                    GAState.instance.remoteConfigsListeners.push(listener);
                }
            };
            GAState.removeRemoteConfigsListener = function (listener) {
                var index = GAState.instance.remoteConfigsListeners.indexOf(listener);
                if (index > -1) {
                    GAState.instance.remoteConfigsListeners.splice(index, 1);
                }
            };
            GAState.getRemoteConfigsContentAsString = function () {
                return JSON.stringify(GAState.instance.configurations);
            };
            GAState.populateConfigurations = function (sdkConfig) {
                var configurations = sdkConfig["configs"];
                if (configurations) {
                    GAState.instance.configurations = {};
                    for (var i = 0; i < configurations.length; ++i) {
                        var configuration = configurations[i];
                        if (configuration) {
                            var key = configuration["key"];
                            var value = configuration["value"];
                            var start_ts = configuration["start_ts"] ? configuration["start_ts"] : Number.MIN_VALUE;
                            var end_ts = configuration["end_ts"] ? configuration["end_ts"] : Number.MAX_VALUE;
                            var client_ts_adjusted = GAState.getClientTsAdjusted();
                            if (key && value && client_ts_adjusted > start_ts && client_ts_adjusted < end_ts) {
                                GAState.instance.configurations[key] = value;
                            }
                        }
                    }
                }
                GAState.instance.remoteConfigsIsReady = true;
                var listeners = GAState.instance.remoteConfigsListeners;
                for (var i = 0; i < listeners.length; ++i) {
                    if (listeners[i]) {
                        listeners[i].onRemoteConfigsUpdated();
                    }
                }
            };
            GAState.CategorySdkError = "sdk_error";
            GAState.MAX_CUSTOM_FIELDS_COUNT = 50;
            GAState.MAX_CUSTOM_FIELDS_KEY_LENGTH = 64;
            GAState.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH = 256;
            GAState.instance = new GAState();
            GAState.DefaultUserIdKey = "default_user_id";
            GAState.SessionNumKey = "session_num";
            GAState.TransactionNumKey = "transaction_num";
            GAState.Dimension01Key = "dimension01";
            GAState.Dimension02Key = "dimension02";
            GAState.Dimension03Key = "dimension03";
            GAState.SdkConfigCachedKey = "sdk_config_cached";
            return GAState;
        }());
        state.GAState = GAState;
    })(state = gameanalytics.state || (gameanalytics.state = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
    var tasks;
    (function (tasks) {
        var GAUtilities = gameanalytics.utilities.GAUtilities;
        var GALogger = gameanalytics.logging.GALogger;
        var SdkErrorTask = (function () {
            function SdkErrorTask() {
            }
            SdkErrorTask.execute = function (url, type, payloadData, secretKey) {
                var now = new Date();
                if (!SdkErrorTask.timestampMap[type]) {
                    SdkErrorTask.timestampMap[type] = now;
                }
                if (!SdkErrorTask.countMap[type]) {
                    SdkErrorTask.countMap[type] = 0;
                }
                var diff = now.getTime() - SdkErrorTask.timestampMap[type].getTime();
                var diffSeconds = diff / 1000;
                if (diffSeconds >= 3600) {
                    SdkErrorTask.timestampMap[type] = now;
                    SdkErrorTask.countMap[type] = 0;
                }
                if (SdkErrorTask.countMap[type] >= SdkErrorTask.MaxCount) {
                    return;
                }
                var hashHmac = GAUtilities.getHmac(secretKey, payloadData);
                var request = new XMLHttpRequest();
                request.onreadystatechange = function () {
                    if (request.readyState === 4) {
                        if (!request.responseText) {
                            return;
                        }
                        if (request.status != 200) {
                            GALogger.w("sdk error failed. response code not 200. status code: " + request.status + ", description: " + request.statusText + ", body: " + request.responseText);
                            return;
                        }
                        else {
                            SdkErrorTask.countMap[type] = SdkErrorTask.countMap[type] + 1;
                        }
                    }
                };
                request.open("POST", url, true);
                request.setRequestHeader("Content-Type", "application/json");
                request.setRequestHeader("Authorization", hashHmac);
                try {
                    request.send(payloadData);
                }
                catch (e) {
                    console.error(e);
                }
            };
            SdkErrorTask.MaxCount = 10;
            SdkErrorTask.countMap = {};
            SdkErrorTask.timestampMap = {};
            return SdkErrorTask;
        }());
        tasks.SdkErrorTask = SdkErrorTask;
    })(tasks = gameanalytics.tasks || (gameanalytics.tasks = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
    var http;
    (function (http) {
        var GAState = gameanalytics.state.GAState;
        var GALogger = gameanalytics.logging.GALogger;
        var GAUtilities = gameanalytics.utilities.GAUtilities;
        var GAValidator = gameanalytics.validators.GAValidator;
        var SdkErrorTask = gameanalytics.tasks.SdkErrorTask;
        var EGASdkErrorCategory = gameanalytics.events.EGASdkErrorCategory;
        var EGASdkErrorArea = gameanalytics.events.EGASdkErrorArea;
        var EGASdkErrorAction = gameanalytics.events.EGASdkErrorAction;
        var EGASdkErrorParameter = gameanalytics.events.EGASdkErrorParameter;
        var GAHTTPApi = (function () {
            function GAHTTPApi() {
                this.protocol = "https";
                this.hostName = "api.gameanalytics.com";
                this.version = "v2";
                this.remoteConfigsVersion = "v1";
                this.baseUrl = this.protocol + "://" + this.hostName + "/" + this.version;
                this.remoteConfigsBaseUrl = this.protocol + "://" + this.hostName + "/remote_configs/" + this.remoteConfigsVersion;
                this.initializeUrlPath = "init";
                this.eventsUrlPath = "events";
                this.useGzip = false;
            }
            GAHTTPApi.prototype.requestInit = function (configsHash, callback) {
                var gameKey = GAState.getGameKey();
                var url = this.remoteConfigsBaseUrl + "/" + this.initializeUrlPath + "?game_key=" + gameKey + "&interval_seconds=0&configs_hash=" + configsHash;
                var initAnnotations = GAState.getInitAnnotations();
                var JSONstring = JSON.stringify(initAnnotations);
                if (!JSONstring) {
                    callback(http.EGAHTTPApiResponse.JsonEncodeFailed, null);
                    return;
                }
                var payloadData = this.createPayloadData(JSONstring, this.useGzip);
                var extraArgs = [];
                extraArgs.push(JSONstring);
                GAHTTPApi.sendRequest(url, payloadData, extraArgs, this.useGzip, GAHTTPApi.initRequestCallback, callback);
            };
            GAHTTPApi.prototype.sendEventsInArray = function (eventArray, requestId, callback) {
                if (eventArray.length == 0) {
                    return;
                }
                var gameKey = GAState.getGameKey();
                var url = this.baseUrl + "/" + gameKey + "/" + this.eventsUrlPath;
                var JSONstring = JSON.stringify(eventArray);
                if (!JSONstring) {
                    callback(http.EGAHTTPApiResponse.JsonEncodeFailed, null, requestId, eventArray.length);
                    return;
                }
                var payloadData = this.createPayloadData(JSONstring, this.useGzip);
                var extraArgs = [];
                extraArgs.push(JSONstring);
                extraArgs.push(requestId);
                extraArgs.push(eventArray.length.toString());
                GAHTTPApi.sendRequest(url, payloadData, extraArgs, this.useGzip, GAHTTPApi.sendEventInArrayRequestCallback, callback);
            };
            GAHTTPApi.prototype.sendSdkErrorEvent = function (category, area, action, parameter, reason, gameKey, secretKey) {
                if (!GAState.isEventSubmissionEnabled()) {
                    return;
                }
                if (!GAValidator.validateSdkErrorEvent(gameKey, secretKey, category, area, action)) {
                    return;
                }
                var url = this.baseUrl + "/" + gameKey + "/" + this.eventsUrlPath;
                var payloadJSONString = "";
                var errorType = "";
                var json = GAState.getSdkErrorEventAnnotations();
                var categoryString = GAHTTPApi.sdkErrorCategoryString(category);
                json["error_category"] = categoryString;
                errorType += categoryString;
                var areaString = GAHTTPApi.sdkErrorAreaString(area);
                json["error_area"] = areaString;
                errorType += ":" + areaString;
                var actionString = GAHTTPApi.sdkErrorActionString(action);
                json["error_action"] = actionString;
                var parameterString = GAHTTPApi.sdkErrorParameterString(parameter);
                if (parameterString.length > 0) {
                    json["error_parameter"] = parameterString;
                }
                if (reason.length > 0) {
                    var reasonTrimmed = reason;
                    if (reason.length > GAHTTPApi.MAX_ERROR_MESSAGE_LENGTH) {
                        var reasonTrimmed = reason.substring(0, GAHTTPApi.MAX_ERROR_MESSAGE_LENGTH);
                    }
                    json["reason"] = reasonTrimmed;
                }
                var eventArray = [];
                eventArray.push(json);
                payloadJSONString = JSON.stringify(eventArray);
                if (!payloadJSONString) {
                    GALogger.w("sendSdkErrorEvent: JSON encoding failed.");
                    return;
                }
                SdkErrorTask.execute(url, errorType, payloadJSONString, secretKey);
            };
            GAHTTPApi.sendEventInArrayRequestCallback = function (request, url, callback, extra) {
                if (extra === void 0) { extra = null; }
                var authorization = extra[0];
                var JSONstring = extra[1];
                var requestId = extra[2];
                var eventCount = parseInt(extra[3]);
                var body = "";
                var responseCode = 0;
                body = request.responseText;
                responseCode = request.status;
                var requestResponseEnum = GAHTTPApi.instance.processRequestResponse(responseCode, request.statusText, body, "Events");
                if (requestResponseEnum != http.EGAHTTPApiResponse.Ok && requestResponseEnum != http.EGAHTTPApiResponse.Created && requestResponseEnum != http.EGAHTTPApiResponse.BadRequest) {
                    callback(requestResponseEnum, null, requestId, eventCount);
                    return;
                }
                var requestJsonDict = body ? JSON.parse(body) : {};
                if (requestJsonDict == null) {
                    callback(http.EGAHTTPApiResponse.JsonDecodeFailed, null, requestId, eventCount);
                    GAHTTPApi.instance.sendSdkErrorEvent(EGASdkErrorCategory.Http, EGASdkErrorArea.EventsHttp, EGASdkErrorAction.FailHttpJsonDecode, EGASdkErrorParameter.Undefined, body, GAState.getGameKey(), GAState.getGameSecret());
                    return;
                }
                if (requestResponseEnum == http.EGAHTTPApiResponse.BadRequest) {
                }
                callback(requestResponseEnum, requestJsonDict, requestId, eventCount);
            };
            GAHTTPApi.sendRequest = function (url, payloadData, extraArgs, gzip, callback, callback2) {
                var request = new XMLHttpRequest();
                var key = GAState.getGameSecret();
                var authorization = GAUtilities.getHmac(key, payloadData);
                var args = [];
                args.push(authorization);
                for (var s in extraArgs) {
                    args.push(extraArgs[s]);
                }
                request.onreadystatechange = function () {
                    if (request.readyState === 4) {
                        callback(request, url, callback2, args);
                    }
                };
                request.open("POST", url, true);
                request.setRequestHeader("Content-Type", "application/json");
                request.setRequestHeader("Authorization", authorization);
                if (gzip) {
                    throw new Error("gzip not supported");
                }
                try {
                    request.send(payloadData);
                }
                catch (e) {
                    console.error(e.stack);
                }
            };
            GAHTTPApi.initRequestCallback = function (request, url, callback, extra) {
                if (extra === void 0) { extra = null; }
                var authorization = extra[0];
                var JSONstring = extra[1];
                var body = "";
                var responseCode = 0;
                body = request.responseText;
                responseCode = request.status;
                var requestJsonDict = body ? JSON.parse(body) : {};
                var requestResponseEnum = GAHTTPApi.instance.processRequestResponse(responseCode, request.statusText, body, "Init");
                if (requestResponseEnum != http.EGAHTTPApiResponse.Ok && requestResponseEnum != http.EGAHTTPApiResponse.Created && requestResponseEnum != http.EGAHTTPApiResponse.BadRequest) {
                    callback(requestResponseEnum, null, "", 0);
                    return;
                }
                if (requestJsonDict == null) {
                    callback(http.EGAHTTPApiResponse.JsonDecodeFailed, null, "", 0);
                    GAHTTPApi.instance.sendSdkErrorEvent(EGASdkErrorCategory.Http, EGASdkErrorArea.InitHttp, EGASdkErrorAction.FailHttpJsonDecode, EGASdkErrorParameter.Undefined, body, GAState.getGameKey(), GAState.getGameSecret());
                    return;
                }
                if (requestResponseEnum === http.EGAHTTPApiResponse.BadRequest) {
                    callback(requestResponseEnum, null, "", 0);
                    return;
                }
                var validatedInitValues = GAValidator.validateAndCleanInitRequestResponse(requestJsonDict, requestResponseEnum === http.EGAHTTPApiResponse.Created);
                if (!validatedInitValues) {
                    callback(http.EGAHTTPApiResponse.BadResponse, null, "", 0);
                    return;
                }
                callback(requestResponseEnum, validatedInitValues, "", 0);
            };
            GAHTTPApi.prototype.createPayloadData = function (payload, gzip) {
                var payloadData;
                if (gzip) {
                    throw new Error("gzip not supported");
                }
                else {
                    payloadData = payload;
                }
                return payloadData;
            };
            GAHTTPApi.prototype.processRequestResponse = function (responseCode, responseMessage, body, requestId) {
                if (!body) {
                    return http.EGAHTTPApiResponse.NoResponse;
                }
                if (responseCode === 200) {
                    return http.EGAHTTPApiResponse.Ok;
                }
                if (responseCode === 201) {
                    return http.EGAHTTPApiResponse.Created;
                }
                if (responseCode === 0 || responseCode === 401) {
                    return http.EGAHTTPApiResponse.Unauthorized;
                }
                if (responseCode === 400) {
                    return http.EGAHTTPApiResponse.BadRequest;
                }
                if (responseCode === 500) {
                    return http.EGAHTTPApiResponse.InternalServerError;
                }
                return http.EGAHTTPApiResponse.UnknownResponseCode;
            };
            GAHTTPApi.sdkErrorCategoryString = function (value) {
                switch (value) {
                    case EGASdkErrorCategory.EventValidation:
                        return "event_validation";
                    case EGASdkErrorCategory.Database:
                        return "db";
                    case EGASdkErrorCategory.Init:
                        return "init";
                    case EGASdkErrorCategory.Http:
                        return "http";
                    case EGASdkErrorCategory.Json:
                        return "json";
                    default:
                        break;
                }
                return "";
            };
            GAHTTPApi.sdkErrorAreaString = function (value) {
                switch (value) {
                    case EGASdkErrorArea.BusinessEvent:
                        return "business";
                    case EGASdkErrorArea.ResourceEvent:
                        return "resource";
                    case EGASdkErrorArea.ProgressionEvent:
                        return "progression";
                    case EGASdkErrorArea.DesignEvent:
                        return "design";
                    case EGASdkErrorArea.ErrorEvent:
                        return "error";
                    case EGASdkErrorArea.InitHttp:
                        return "init_http";
                    case EGASdkErrorArea.EventsHttp:
                        return "events_http";
                    case EGASdkErrorArea.ProcessEvents:
                        return "process_events";
                    case EGASdkErrorArea.AddEventsToStore:
                        return "add_events_to_store";
                    default:
                        break;
                }
                return "";
            };
            GAHTTPApi.sdkErrorActionString = function (value) {
                switch (value) {
                    case EGASdkErrorAction.InvalidCurrency:
                        return "invalid_currency";
                    case EGASdkErrorAction.InvalidShortString:
                        return "invalid_short_string";
                    case EGASdkErrorAction.InvalidEventPartLength:
                        return "invalid_event_part_length";
                    case EGASdkErrorAction.InvalidEventPartCharacters:
                        return "invalid_event_part_characters";
                    case EGASdkErrorAction.InvalidStore:
                        return "invalid_store";
                    case EGASdkErrorAction.InvalidFlowType:
                        return "invalid_flow_type";
                    case EGASdkErrorAction.StringEmptyOrNull:
                        return "string_empty_or_null";
                    case EGASdkErrorAction.NotFoundInAvailableCurrencies:
                        return "not_found_in_available_currencies";
                    case EGASdkErrorAction.InvalidAmount:
                        return "invalid_amount";
                    case EGASdkErrorAction.NotFoundInAvailableItemTypes:
                        return "not_found_in_available_item_types";
                    case EGASdkErrorAction.WrongProgressionOrder:
                        return "wrong_progression_order";
                    case EGASdkErrorAction.InvalidEventIdLength:
                        return "invalid_event_id_length";
                    case EGASdkErrorAction.InvalidEventIdCharacters:
                        return "invalid_event_id_characters";
                    case EGASdkErrorAction.InvalidProgressionStatus:
                        return "invalid_progression_status";
                    case EGASdkErrorAction.InvalidSeverity:
                        return "invalid_severity";
                    case EGASdkErrorAction.InvalidLongString:
                        return "invalid_long_string";
                    case EGASdkErrorAction.DatabaseTooLarge:
                        return "db_too_large";
                    case EGASdkErrorAction.DatabaseOpenOrCreate:
                        return "db_open_or_create";
                    case EGASdkErrorAction.JsonError:
                        return "json_error";
                    case EGASdkErrorAction.FailHttpJsonDecode:
                        return "fail_http_json_decode";
                    case EGASdkErrorAction.FailHttpJsonEncode:
                        return "fail_http_json_encode";
                    default:
                        break;
                }
                return "";
            };
            GAHTTPApi.sdkErrorParameterString = function (value) {
                switch (value) {
                    case EGASdkErrorParameter.Currency:
                        return "currency";
                    case EGASdkErrorParameter.CartType:
                        return "cart_type";
                    case EGASdkErrorParameter.ItemType:
                        return "item_type";
                    case EGASdkErrorParameter.ItemId:
                        return "item_id";
                    case EGASdkErrorParameter.Store:
                        return "store";
                    case EGASdkErrorParameter.FlowType:
                        return "flow_type";
                    case EGASdkErrorParameter.Amount:
                        return "amount";
                    case EGASdkErrorParameter.Progression01:
                        return "progression01";
                    case EGASdkErrorParameter.Progression02:
                        return "progression02";
                    case EGASdkErrorParameter.Progression03:
                        return "progression03";
                    case EGASdkErrorParameter.EventId:
                        return "event_id";
                    case EGASdkErrorParameter.ProgressionStatus:
                        return "progression_status";
                    case EGASdkErrorParameter.Severity:
                        return "severity";
                    case EGASdkErrorParameter.Message:
                        return "message";
                    default:
                        break;
                }
                return "";
            };
            GAHTTPApi.instance = new GAHTTPApi();
            GAHTTPApi.MAX_ERROR_MESSAGE_LENGTH = 256;
            return GAHTTPApi;
        }());
        http.GAHTTPApi = GAHTTPApi;
    })(http = gameanalytics.http || (gameanalytics.http = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
    var events;
    (function (events_1) {
        var GAStore = gameanalytics.store.GAStore;
        var EGAStore = gameanalytics.store.EGAStore;
        var EGAStoreArgsOperator = gameanalytics.store.EGAStoreArgsOperator;
        var GAState = gameanalytics.state.GAState;
        var GALogger = gameanalytics.logging.GALogger;
        var GAUtilities = gameanalytics.utilities.GAUtilities;
        var EGAHTTPApiResponse = gameanalytics.http.EGAHTTPApiResponse;
        var GAHTTPApi = gameanalytics.http.GAHTTPApi;
        var GAValidator = gameanalytics.validators.GAValidator;
        var GAEvents = (function () {
            function GAEvents() {
            }
            GAEvents.addSessionStartEvent = function () {
                if (!GAState.isEventSubmissionEnabled()) {
                    return;
                }
                var eventDict = {};
                eventDict["category"] = GAEvents.CategorySessionStart;
                GAState.incrementSessionNum();
                GAStore.setItem(GAState.getGameKey(), GAState.SessionNumKey, GAState.getSessionNum().toString());
                GAEvents.addDimensionsToEvent(eventDict);
                GAEvents.addEventToStore(eventDict);
                GALogger.i("Add SESSION START event");
                GAEvents.processEvents(GAEvents.CategorySessionStart, false);
            };
            GAEvents.addSessionEndEvent = function () {
                if (!GAState.isEventSubmissionEnabled()) {
                    return;
                }
                var session_start_ts = GAState.getSessionStart();
                var client_ts_adjusted = GAState.getClientTsAdjusted();
                var sessionLength = client_ts_adjusted - session_start_ts;
                if (sessionLength < 0) {
                    GALogger.w("Session length was calculated to be less then 0. Should not be possible. Resetting to 0.");
                    sessionLength = 0;
                }
                var eventDict = {};
                eventDict["category"] = GAEvents.CategorySessionEnd;
                eventDict["length"] = sessionLength;
                GAEvents.addDimensionsToEvent(eventDict);
                GAEvents.addEventToStore(eventDict);
                GALogger.i("Add SESSION END event.");
                GAEvents.processEvents("", false);
            };
            GAEvents.addBusinessEvent = function (currency, amount, itemType, itemId, cartType, fields) {
                if (cartType === void 0) { cartType = null; }
                if (!GAState.isEventSubmissionEnabled()) {
                    return;
                }
                var validationResult = GAValidator.validateBusinessEvent(currency, amount, cartType, itemType, itemId);
                if (validationResult != null) {
                    GAHTTPApi.instance.sendSdkErrorEvent(validationResult.category, validationResult.area, validationResult.action, validationResult.parameter, validationResult.reason, GAState.getGameKey(), GAState.getGameSecret());
                    return;
                }
                var eventDict = {};
                GAState.incrementTransactionNum();
                GAStore.setItem(GAState.getGameKey(), GAState.TransactionNumKey, GAState.getTransactionNum().toString());
                eventDict["event_id"] = itemType + ":" + itemId;
                eventDict["category"] = GAEvents.CategoryBusiness;
                eventDict["currency"] = currency;
                eventDict["amount"] = amount;
                eventDict[GAState.TransactionNumKey] = GAState.getTransactionNum();
                if (cartType) {
                    eventDict["cart_type"] = cartType;
                }
                GAEvents.addDimensionsToEvent(eventDict);
                GAEvents.addFieldsToEvent(eventDict, GAState.validateAndCleanCustomFields(fields));
                GALogger.i("Add BUSINESS event: {currency:" + currency + ", amount:" + amount + ", itemType:" + itemType + ", itemId:" + itemId + ", cartType:" + cartType + "}");
                GAEvents.addEventToStore(eventDict);
            };
            GAEvents.addResourceEvent = function (flowType, currency, amount, itemType, itemId, fields) {
                if (!GAState.isEventSubmissionEnabled()) {
                    return;
                }
                var validationResult = GAValidator.validateResourceEvent(flowType, currency, amount, itemType, itemId, GAState.getAvailableResourceCurrencies(), GAState.getAvailableResourceItemTypes());
                if (validationResult != null) {
                    GAHTTPApi.instance.sendSdkErrorEvent(validationResult.category, validationResult.area, validationResult.action, validationResult.parameter, validationResult.reason, GAState.getGameKey(), GAState.getGameSecret());
                    return;
                }
                if (flowType === gameanalytics.EGAResourceFlowType.Sink) {
                    amount *= -1;
                }
                var eventDict = {};
                var flowTypeString = GAEvents.resourceFlowTypeToString(flowType);
                eventDict["event_id"] = flowTypeString + ":" + currency + ":" + itemType + ":" + itemId;
                eventDict["category"] = GAEvents.CategoryResource;
                eventDict["amount"] = amount;
                GAEvents.addDimensionsToEvent(eventDict);
                GAEvents.addFieldsToEvent(eventDict, GAState.validateAndCleanCustomFields(fields));
                GALogger.i("Add RESOURCE event: {currency:" + currency + ", amount:" + amount + ", itemType:" + itemType + ", itemId:" + itemId + "}");
                GAEvents.addEventToStore(eventDict);
            };
            GAEvents.addProgressionEvent = function (progressionStatus, progression01, progression02, progression03, score, sendScore, fields) {
                if (!GAState.isEventSubmissionEnabled()) {
                    return;
                }
                var progressionStatusString = GAEvents.progressionStatusToString(progressionStatus);
                var validationResult = GAValidator.validateProgressionEvent(progressionStatus, progression01, progression02, progression03);
                if (validationResult != null) {
                    GAHTTPApi.instance.sendSdkErrorEvent(validationResult.category, validationResult.area, validationResult.action, validationResult.parameter, validationResult.reason, GAState.getGameKey(), GAState.getGameSecret());
                    return;
                }
                var eventDict = {};
                var progressionIdentifier;
                if (!progression02) {
                    progressionIdentifier = progression01;
                }
                else if (!progression03) {
                    progressionIdentifier = progression01 + ":" + progression02;
                }
                else {
                    progressionIdentifier = progression01 + ":" + progression02 + ":" + progression03;
                }
                eventDict["category"] = GAEvents.CategoryProgression;
                eventDict["event_id"] = progressionStatusString + ":" + progressionIdentifier;
                var attempt_num = 0;
                if (sendScore && progressionStatus != gameanalytics.EGAProgressionStatus.Start) {
                    eventDict["score"] = score;
                }
                if (progressionStatus === gameanalytics.EGAProgressionStatus.Fail) {
                    GAState.incrementProgressionTries(progressionIdentifier);
                }
                if (progressionStatus === gameanalytics.EGAProgressionStatus.Complete) {
                    GAState.incrementProgressionTries(progressionIdentifier);
                    attempt_num = GAState.getProgressionTries(progressionIdentifier);
                    eventDict["attempt_num"] = attempt_num;
                    GAState.clearProgressionTries(progressionIdentifier);
                }
                GAEvents.addDimensionsToEvent(eventDict);
                GAEvents.addFieldsToEvent(eventDict, GAState.validateAndCleanCustomFields(fields));
                GALogger.i("Add PROGRESSION event: {status:" + progressionStatusString + ", progression01:" + progression01 + ", progression02:" + progression02 + ", progression03:" + progression03 + ", score:" + score + ", attempt:" + attempt_num + "}");
                GAEvents.addEventToStore(eventDict);
            };
            GAEvents.addDesignEvent = function (eventId, value, sendValue, fields) {
                if (!GAState.isEventSubmissionEnabled()) {
                    return;
                }
                var validationResult = GAValidator.validateDesignEvent(eventId);
                if (validationResult != null) {
                    GAHTTPApi.instance.sendSdkErrorEvent(validationResult.category, validationResult.area, validationResult.action, validationResult.parameter, validationResult.reason, GAState.getGameKey(), GAState.getGameSecret());
                    return;
                }
                var eventData = {};
                eventData["category"] = GAEvents.CategoryDesign;
                eventData["event_id"] = eventId;
                if (sendValue) {
                    eventData["value"] = value;
                }
                GAEvents.addDimensionsToEvent(eventData);
                GAEvents.addFieldsToEvent(eventData, GAState.validateAndCleanCustomFields(fields));
                GALogger.i("Add DESIGN event: {eventId:" + eventId + ", value:" + value + "}");
                GAEvents.addEventToStore(eventData);
            };
            GAEvents.addErrorEvent = function (severity, message, fields) {
                if (!GAState.isEventSubmissionEnabled()) {
                    return;
                }
                var severityString = GAEvents.errorSeverityToString(severity);
                var validationResult = GAValidator.validateErrorEvent(severity, message);
                if (validationResult != null) {
                    GAHTTPApi.instance.sendSdkErrorEvent(validationResult.category, validationResult.area, validationResult.action, validationResult.parameter, validationResult.reason, GAState.getGameKey(), GAState.getGameSecret());
                    return;
                }
                var eventData = {};
                eventData["category"] = GAEvents.CategoryError;
                eventData["severity"] = severityString;
                eventData["message"] = message;
                GAEvents.addDimensionsToEvent(eventData);
                GAEvents.addFieldsToEvent(eventData, GAState.validateAndCleanCustomFields(fields));
                GALogger.i("Add ERROR event: {severity:" + severityString + ", message:" + message + "}");
                GAEvents.addEventToStore(eventData);
            };
            GAEvents.addAdEvent = function (adAction, adType, adSdkName, adPlacement, noAdReason, duration, sendDuration, fields) {
                if (!GAState.isEventSubmissionEnabled()) {
                    return;
                }
                var adActionString = GAEvents.adActionToString(adAction);
                var adTypeString = GAEvents.adTypeToString(adType);
                var noAdReasonString = GAEvents.adErrorToString(noAdReason);
                var validationResult = GAValidator.validateAdEvent(adAction, adType, adSdkName, adPlacement);
                if (validationResult != null) {
                    GAHTTPApi.instance.sendSdkErrorEvent(validationResult.category, validationResult.area, validationResult.action, validationResult.parameter, validationResult.reason, GAState.getGameKey(), GAState.getGameSecret());
                    return;
                }
                var eventData = {};
                eventData["category"] = GAEvents.CategoryAds;
                eventData["ad_sdk_name"] = adSdkName;
                eventData["ad_placement"] = adPlacement;
                eventData["ad_type"] = adTypeString;
                eventData["ad_action"] = adActionString;
                if (adAction == gameanalytics.EGAAdAction.FailedShow && noAdReasonString.length > 0) {
                    eventData["ad_fail_show_reason"] = noAdReasonString;
                }
                if (sendDuration && (adType == gameanalytics.EGAAdType.RewardedVideo || adType == gameanalytics.EGAAdType.Video)) {
                    eventData["ad_duration"] = duration;
                }
                GAEvents.addDimensionsToEvent(eventData);
                GAEvents.addFieldsToEvent(eventData, GAState.validateAndCleanCustomFields(fields));
                GALogger.i("Add AD event: {ad_sdk_name:" + adSdkName + ", ad_placement:" + adPlacement + ", ad_type:" + adTypeString + ", ad_action:" + adActionString +
                    ((adAction == gameanalytics.EGAAdAction.FailedShow && noAdReasonString.length > 0) ? (", ad_fail_show_reason:" + noAdReasonString) : "") +
                    ((sendDuration && (adType == gameanalytics.EGAAdType.RewardedVideo || adType == gameanalytics.EGAAdType.Video)) ? (", ad_duration:" + duration) : "") + "}");
                GAEvents.addEventToStore(eventData);
            };
            GAEvents.processEvents = function (category, performCleanUp) {
                if (!GAState.isEventSubmissionEnabled()) {
                    return;
                }
                try {
                    var requestIdentifier = GAUtilities.createGuid();
                    if (performCleanUp) {
                        GAEvents.cleanupEvents();
                        GAEvents.fixMissingSessionEndEvents();
                    }
                    var selectArgs = [];
                    selectArgs.push(["status", EGAStoreArgsOperator.Equal, "new"]);
                    var updateWhereArgs = [];
                    updateWhereArgs.push(["status", EGAStoreArgsOperator.Equal, "new"]);
                    if (category) {
                        selectArgs.push(["category", EGAStoreArgsOperator.Equal, category]);
                        updateWhereArgs.push(["category", EGAStoreArgsOperator.Equal, category]);
                    }
                    var updateSetArgs = [];
                    updateSetArgs.push(["status", requestIdentifier]);
                    var events = GAStore.select(EGAStore.Events, selectArgs);
                    if (!events || events.length == 0) {
                        GALogger.i("Event queue: No events to send");
                        GAEvents.updateSessionStore();
                        return;
                    }
                    if (events.length > GAEvents.MaxEventCount) {
                        events = GAStore.select(EGAStore.Events, selectArgs, true, GAEvents.MaxEventCount);
                        if (!events) {
                            return;
                        }
                        var lastItem = events[events.length - 1];
                        var lastTimestamp = lastItem["client_ts"];
                        selectArgs.push(["client_ts", EGAStoreArgsOperator.LessOrEqual, lastTimestamp]);
                        events = GAStore.select(EGAStore.Events, selectArgs);
                        if (!events) {
                            return;
                        }
                        updateWhereArgs.push(["client_ts", EGAStoreArgsOperator.LessOrEqual, lastTimestamp]);
                    }
                    GALogger.i("Event queue: Sending " + events.length + " events.");
                    if (!GAStore.update(EGAStore.Events, updateSetArgs, updateWhereArgs)) {
                        return;
                    }
                    var payloadArray = [];
                    for (var i = 0; i < events.length; ++i) {
                        var ev = events[i];
                        var eventDict = JSON.parse(GAUtilities.decode64(ev["event"]));
                        if (eventDict.length != 0) {
                            payloadArray.push(eventDict);
                        }
                    }
                    GAHTTPApi.instance.sendEventsInArray(payloadArray, requestIdentifier, GAEvents.processEventsCallback);
                }
                catch (e) {
                    GALogger.e("Error during ProcessEvents(): " + e.stack);
                    GAHTTPApi.instance.sendSdkErrorEvent(events_1.EGASdkErrorCategory.Json, events_1.EGASdkErrorArea.ProcessEvents, events_1.EGASdkErrorAction.JsonError, events_1.EGASdkErrorParameter.Undefined, e.stack, GAState.getGameKey(), GAState.getGameSecret());
                }
            };
            GAEvents.processEventsCallback = function (responseEnum, dataDict, requestId, eventCount) {
                var requestIdWhereArgs = [];
                requestIdWhereArgs.push(["status", EGAStoreArgsOperator.Equal, requestId]);
                if (responseEnum === EGAHTTPApiResponse.Ok) {
                    GAStore["delete"](EGAStore.Events, requestIdWhereArgs);
                    GALogger.i("Event queue: " + eventCount + " events sent.");
                }
                else {
                    if (responseEnum === EGAHTTPApiResponse.NoResponse) {
                        var setArgs = [];
                        setArgs.push(["status", "new"]);
                        GALogger.w("Event queue: Failed to send events to collector - Retrying next time");
                        GAStore.update(EGAStore.Events, setArgs, requestIdWhereArgs);
                    }
                    else {
                        if (dataDict) {
                            var json;
                            var count = 0;
                            for (var j in dataDict) {
                                if (count == 0) {
                                    json = dataDict[j];
                                }
                                ++count;
                            }
                            if (responseEnum === EGAHTTPApiResponse.BadRequest && json.constructor === Array) {
                                GALogger.w("Event queue: " + eventCount + " events sent. " + count + " events failed GA server validation.");
                            }
                            else {
                                GALogger.w("Event queue: Failed to send events.");
                            }
                        }
                        else {
                            GALogger.w("Event queue: Failed to send events.");
                        }
                        GAStore["delete"](EGAStore.Events, requestIdWhereArgs);
                    }
                }
            };
            GAEvents.cleanupEvents = function () {
                GAStore.update(EGAStore.Events, [["status", "new"]]);
            };
            GAEvents.fixMissingSessionEndEvents = function () {
                if (!GAState.isEventSubmissionEnabled()) {
                    return;
                }
                var args = [];
                args.push(["session_id", EGAStoreArgsOperator.NotEqual, GAState.getSessionId()]);
                var sessions = GAStore.select(EGAStore.Sessions, args);
                if (!sessions || sessions.length == 0) {
                    return;
                }
                GALogger.i(sessions.length + " session(s) located with missing session_end event.");
                for (var i = 0; i < sessions.length; ++i) {
                    var sessionEndEvent = JSON.parse(GAUtilities.decode64(sessions[i]["event"]));
                    var event_ts = sessionEndEvent["client_ts"];
                    var start_ts = sessions[i]["timestamp"];
                    var length = event_ts - start_ts;
                    length = Math.max(0, length);
                    sessionEndEvent["category"] = GAEvents.CategorySessionEnd;
                    sessionEndEvent["length"] = length;
                    GAEvents.addEventToStore(sessionEndEvent);
                }
            };
            GAEvents.addEventToStore = function (eventData) {
                if (!GAState.isEventSubmissionEnabled()) {
                    return;
                }
                if (!GAState.isInitialized()) {
                    GALogger.w("Could not add event: SDK is not initialized");
                    return;
                }
                try {
                    if (GAStore.isStoreTooLargeForEvents() && !GAUtilities.stringMatch(eventData["category"], /^(user|session_end|business)$/)) {
                        GALogger.w("Database too large. Event has been blocked.");
                        GAHTTPApi.instance.sendSdkErrorEvent(events_1.EGASdkErrorCategory.Database, events_1.EGASdkErrorArea.AddEventsToStore, events_1.EGASdkErrorAction.DatabaseTooLarge, events_1.EGASdkErrorParameter.Undefined, "", GAState.getGameKey(), GAState.getGameSecret());
                        return;
                    }
                    var ev = GAState.getEventAnnotations();
                    var jsonDefaults = GAUtilities.encode64(JSON.stringify(ev));
                    for (var e in eventData) {
                        ev[e] = eventData[e];
                    }
                    var json = JSON.stringify(ev);
                    GALogger.ii("Event added to queue: " + json);
                    var values = {};
                    values["status"] = "new";
                    values["category"] = ev["category"];
                    values["session_id"] = ev["session_id"];
                    values["client_ts"] = ev["client_ts"];
                    values["event"] = GAUtilities.encode64(JSON.stringify(ev));
                    GAStore.insert(EGAStore.Events, values);
                    if (eventData["category"] == GAEvents.CategorySessionEnd) {
                        GAStore["delete"](EGAStore.Sessions, [["session_id", EGAStoreArgsOperator.Equal, ev["session_id"]]]);
                    }
                    else {
                        values = {};
                        values["session_id"] = ev["session_id"];
                        values["timestamp"] = GAState.getSessionStart();
                        values["event"] = jsonDefaults;
                        GAStore.insert(EGAStore.Sessions, values, true, "session_id");
                    }
                    if (GAStore.isStorageAvailable()) {
                        GAStore.save(GAState.getGameKey());
                    }
                }
                catch (e) {
                    GALogger.e("addEventToStore: error");
                    GALogger.e(e.stack);
                    GAHTTPApi.instance.sendSdkErrorEvent(events_1.EGASdkErrorCategory.Database, events_1.EGASdkErrorArea.AddEventsToStore, events_1.EGASdkErrorAction.DatabaseTooLarge, events_1.EGASdkErrorParameter.Undefined, e.stack, GAState.getGameKey(), GAState.getGameSecret());
                }
            };
            GAEvents.updateSessionStore = function () {
                if (GAState.sessionIsStarted()) {
                    var values = {};
                    values["session_id"] = GAState.instance.sessionId;
                    values["timestamp"] = GAState.getSessionStart();
                    values["event"] = GAUtilities.encode64(JSON.stringify(GAState.getEventAnnotations()));
                    GAStore.insert(EGAStore.Sessions, values, true, "session_id");
                    if (GAStore.isStorageAvailable()) {
                        GAStore.save(GAState.getGameKey());
                    }
                }
            };
            GAEvents.addDimensionsToEvent = function (eventData) {
                if (!eventData) {
                    return;
                }
                if (GAState.getCurrentCustomDimension01()) {
                    eventData["custom_01"] = GAState.getCurrentCustomDimension01();
                }
                if (GAState.getCurrentCustomDimension02()) {
                    eventData["custom_02"] = GAState.getCurrentCustomDimension02();
                }
                if (GAState.getCurrentCustomDimension03()) {
                    eventData["custom_03"] = GAState.getCurrentCustomDimension03();
                }
            };
            GAEvents.addFieldsToEvent = function (eventData, fields) {
                if (!eventData) {
                    return;
                }
                if (fields && Object.keys(fields).length > 0) {
                    eventData["custom_fields"] = fields;
                }
            };
            GAEvents.resourceFlowTypeToString = function (value) {
                if (value == gameanalytics.EGAResourceFlowType.Source || value == gameanalytics.EGAResourceFlowType[gameanalytics.EGAResourceFlowType.Source]) {
                    return "Source";
                }
                else if (value == gameanalytics.EGAResourceFlowType.Sink || value == gameanalytics.EGAResourceFlowType[gameanalytics.EGAResourceFlowType.Sink]) {
                    return "Sink";
                }
                else {
                    return "";
                }
            };
            GAEvents.progressionStatusToString = function (value) {
                if (value == gameanalytics.EGAProgressionStatus.Start || value == gameanalytics.EGAProgressionStatus[gameanalytics.EGAProgressionStatus.Start]) {
                    return "Start";
                }
                else if (value == gameanalytics.EGAProgressionStatus.Complete || value == gameanalytics.EGAProgressionStatus[gameanalytics.EGAProgressionStatus.Complete]) {
                    return "Complete";
                }
                else if (value == gameanalytics.EGAProgressionStatus.Fail || value == gameanalytics.EGAProgressionStatus[gameanalytics.EGAProgressionStatus.Fail]) {
                    return "Fail";
                }
                else {
                    return "";
                }
            };
            GAEvents.errorSeverityToString = function (value) {
                if (value == gameanalytics.EGAErrorSeverity.Debug || value == gameanalytics.EGAErrorSeverity[gameanalytics.EGAErrorSeverity.Debug]) {
                    return "debug";
                }
                else if (value == gameanalytics.EGAErrorSeverity.Info || value == gameanalytics.EGAErrorSeverity[gameanalytics.EGAErrorSeverity.Info]) {
                    return "info";
                }
                else if (value == gameanalytics.EGAErrorSeverity.Warning || value == gameanalytics.EGAErrorSeverity[gameanalytics.EGAErrorSeverity.Warning]) {
                    return "warning";
                }
                else if (value == gameanalytics.EGAErrorSeverity.Error || value == gameanalytics.EGAErrorSeverity[gameanalytics.EGAErrorSeverity.Error]) {
                    return "error";
                }
                else if (value == gameanalytics.EGAErrorSeverity.Critical || value == gameanalytics.EGAErrorSeverity[gameanalytics.EGAErrorSeverity.Critical]) {
                    return "critical";
                }
                else {
                    return "";
                }
            };
            GAEvents.adActionToString = function (value) {
                if (value == gameanalytics.EGAAdAction.Clicked || value == gameanalytics.EGAAdAction[gameanalytics.EGAAdAction.Clicked]) {
                    return "clicked";
                }
                else if (value == gameanalytics.EGAAdAction.Show || value == gameanalytics.EGAAdAction[gameanalytics.EGAAdAction.Show]) {
                    return "show";
                }
                else if (value == gameanalytics.EGAAdAction.FailedShow || value == gameanalytics.EGAAdAction[gameanalytics.EGAAdAction.FailedShow]) {
                    return "failed_show";
                }
                else if (value == gameanalytics.EGAAdAction.RewardReceived || value == gameanalytics.EGAAdAction[gameanalytics.EGAAdAction.RewardReceived]) {
                    return "reward_received";
                }
                else {
                    return "";
                }
            };
            GAEvents.adErrorToString = function (value) {
                if (value == gameanalytics.EGAAdError.Unknown || value == gameanalytics.EGAAdError[gameanalytics.EGAAdError.Unknown]) {
                    return "unknown";
                }
                else if (value == gameanalytics.EGAAdError.Offline || value == gameanalytics.EGAAdError[gameanalytics.EGAAdError.Offline]) {
                    return "offline";
                }
                else if (value == gameanalytics.EGAAdError.NoFill || value == gameanalytics.EGAAdError[gameanalytics.EGAAdError.NoFill]) {
                    return "no_fill";
                }
                else if (value == gameanalytics.EGAAdError.InternalError || value == gameanalytics.EGAAdError[gameanalytics.EGAAdError.InternalError]) {
                    return "internal_error";
                }
                else if (value == gameanalytics.EGAAdError.InvalidRequest || value == gameanalytics.EGAAdError[gameanalytics.EGAAdError.InvalidRequest]) {
                    return "invalid_request";
                }
                else if (value == gameanalytics.EGAAdError.UnableToPrecache || value == gameanalytics.EGAAdError[gameanalytics.EGAAdError.UnableToPrecache]) {
                    return "unable_to_precache";
                }
                else {
                    return "";
                }
            };
            GAEvents.adTypeToString = function (value) {
                if (value == gameanalytics.EGAAdType.Video || value == gameanalytics.EGAAdType[gameanalytics.EGAAdType.Video]) {
                    return "video";
                }
                else if (value == gameanalytics.EGAAdType.RewardedVideo || value == gameanalytics.EGAAdError[gameanalytics.EGAAdType.RewardedVideo]) {
                    return "rewarded_video";
                }
                else if (value == gameanalytics.EGAAdType.Playable || value == gameanalytics.EGAAdError[gameanalytics.EGAAdType.Playable]) {
                    return "playable";
                }
                else if (value == gameanalytics.EGAAdType.Interstitial || value == gameanalytics.EGAAdError[gameanalytics.EGAAdType.Interstitial]) {
                    return "interstitial";
                }
                else if (value == gameanalytics.EGAAdType.OfferWall || value == gameanalytics.EGAAdError[gameanalytics.EGAAdType.OfferWall]) {
                    return "offer_wall";
                }
                else if (value == gameanalytics.EGAAdType.Banner || value == gameanalytics.EGAAdError[gameanalytics.EGAAdType.Banner]) {
                    return "banner";
                }
                else {
                    return "";
                }
            };
            GAEvents.CategorySessionStart = "user";
            GAEvents.CategorySessionEnd = "session_end";
            GAEvents.CategoryDesign = "design";
            GAEvents.CategoryBusiness = "business";
            GAEvents.CategoryProgression = "progression";
            GAEvents.CategoryResource = "resource";
            GAEvents.CategoryError = "error";
            GAEvents.CategoryAds = "ads";
            GAEvents.MaxEventCount = 500;
            return GAEvents;
        }());
        events_1.GAEvents = GAEvents;
    })(events = gameanalytics.events || (gameanalytics.events = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
    var threading;
    (function (threading) {
        var GALogger = gameanalytics.logging.GALogger;
        var GAState = gameanalytics.state.GAState;
        var GAEvents = gameanalytics.events.GAEvents;
        var GAThreading = (function () {
            function GAThreading() {
                this.blocks = new threading.PriorityQueue({
                    compare: function (x, y) {
                        return x - y;
                    }
                });
                this.id2TimedBlockMap = {};
                GAThreading.startThread();
            }
            GAThreading.createTimedBlock = function (delayInSeconds) {
                if (delayInSeconds === void 0) { delayInSeconds = 0; }
                var time = new Date();
                time.setSeconds(time.getSeconds() + delayInSeconds);
                var timedBlock = new threading.TimedBlock(time);
                return timedBlock;
            };
            GAThreading.performTaskOnGAThread = function (taskBlock, delayInSeconds) {
                if (delayInSeconds === void 0) { delayInSeconds = 0; }
                var time = new Date();
                time.setSeconds(time.getSeconds() + delayInSeconds);
                var timedBlock = new threading.TimedBlock(time);
                timedBlock.block = taskBlock;
                GAThreading.instance.id2TimedBlockMap[timedBlock.id] = timedBlock;
                GAThreading.instance.addTimedBlock(timedBlock);
            };
            GAThreading.performTimedBlockOnGAThread = function (timedBlock) {
                GAThreading.instance.id2TimedBlockMap[timedBlock.id] = timedBlock;
                GAThreading.instance.addTimedBlock(timedBlock);
            };
            GAThreading.scheduleTimer = function (interval, callback) {
                var time = new Date();
                time.setSeconds(time.getSeconds() + interval);
                var timedBlock = new threading.TimedBlock(time);
                timedBlock.block = callback;
                GAThreading.instance.id2TimedBlockMap[timedBlock.id] = timedBlock;
                GAThreading.instance.addTimedBlock(timedBlock);
                return timedBlock.id;
            };
            GAThreading.getTimedBlockById = function (blockIdentifier) {
                if (blockIdentifier in GAThreading.instance.id2TimedBlockMap) {
                    return GAThreading.instance.id2TimedBlockMap[blockIdentifier];
                }
                else {
                    return null;
                }
            };
            GAThreading.ensureEventQueueIsRunning = function () {
                GAThreading.instance.keepRunning = true;
                if (!GAThreading.instance.isRunning) {
                    GAThreading.instance.isRunning = true;
                    GAThreading.scheduleTimer(GAThreading.ProcessEventsIntervalInSeconds, GAThreading.processEventQueue);
                }
            };
            GAThreading.endSessionAndStopQueue = function () {
                if (GAState.isInitialized()) {
                    GALogger.i("Ending session.");
                    GAThreading.stopEventQueue();
                    if (GAState.isEnabled() && GAState.sessionIsStarted()) {
                        GAEvents.addSessionEndEvent();
                        GAState.instance.sessionStart = 0;
                    }
                }
            };
            GAThreading.stopEventQueue = function () {
                GAThreading.instance.keepRunning = false;
            };
            GAThreading.ignoreTimer = function (blockIdentifier) {
                if (blockIdentifier in GAThreading.instance.id2TimedBlockMap) {
                    GAThreading.instance.id2TimedBlockMap[blockIdentifier].ignore = true;
                }
            };
            GAThreading.setEventProcessInterval = function (interval) {
                if (interval > 0) {
                    GAThreading.ProcessEventsIntervalInSeconds = interval;
                }
            };
            GAThreading.prototype.addTimedBlock = function (timedBlock) {
                this.blocks.enqueue(timedBlock.deadline.getTime(), timedBlock);
            };
            GAThreading.run = function () {
                clearTimeout(GAThreading.runTimeoutId);
                try {
                    var timedBlock;
                    while ((timedBlock = GAThreading.getNextBlock())) {
                        if (!timedBlock.ignore) {
                            if (timedBlock.async) {
                                if (!timedBlock.running) {
                                    timedBlock.running = true;
                                    timedBlock.block();
                                    break;
                                }
                            }
                            else {
                                timedBlock.block();
                            }
                        }
                    }
                    GAThreading.runTimeoutId = setTimeout(GAThreading.run, GAThreading.ThreadWaitTimeInMs);
                    return;
                }
                catch (e) {
                    GALogger.e("Error on GA thread");
                    GALogger.e(e.stack);
                }
            };
            GAThreading.startThread = function () {
                GAThreading.runTimeoutId = setTimeout(GAThreading.run, 0);
            };
            GAThreading.getNextBlock = function () {
                var now = new Date();
                if (GAThreading.instance.blocks.hasItems() && GAThreading.instance.blocks.peek().deadline.getTime() <= now.getTime()) {
                    if (GAThreading.instance.blocks.peek().async) {
                        if (GAThreading.instance.blocks.peek().running) {
                            return GAThreading.instance.blocks.peek();
                        }
                        else {
                            return GAThreading.instance.blocks.dequeue();
                        }
                    }
                    else {
                        return GAThreading.instance.blocks.dequeue();
                    }
                }
                return null;
            };
            GAThreading.processEventQueue = function () {
                GAEvents.processEvents("", true);
                if (GAThreading.instance.keepRunning) {
                    GAThreading.scheduleTimer(GAThreading.ProcessEventsIntervalInSeconds, GAThreading.processEventQueue);
                }
                else {
                    GAThreading.instance.isRunning = false;
                }
            };
            GAThreading.instance = new GAThreading();
            GAThreading.ThreadWaitTimeInMs = 1000;
            GAThreading.ProcessEventsIntervalInSeconds = 8.0;
            return GAThreading;
        }());
        threading.GAThreading = GAThreading;
    })(threading = gameanalytics.threading || (gameanalytics.threading = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
    var GAThreading = gameanalytics.threading.GAThreading;
    var GALogger = gameanalytics.logging.GALogger;
    var GAStore = gameanalytics.store.GAStore;
    var GAState = gameanalytics.state.GAState;
    var GAHTTPApi = gameanalytics.http.GAHTTPApi;
    var GADevice = gameanalytics.device.GADevice;
    var GAValidator = gameanalytics.validators.GAValidator;
    var EGAHTTPApiResponse = gameanalytics.http.EGAHTTPApiResponse;
    var GAUtilities = gameanalytics.utilities.GAUtilities;
    var GAEvents = gameanalytics.events.GAEvents;
    var GameAnalytics = (function () {
        function GameAnalytics() {
        }
        GameAnalytics.init = function () {
            GADevice.touch();
            GameAnalytics.methodMap['configureAvailableCustomDimensions01'] = GameAnalytics.configureAvailableCustomDimensions01;
            GameAnalytics.methodMap['configureAvailableCustomDimensions02'] = GameAnalytics.configureAvailableCustomDimensions02;
            GameAnalytics.methodMap['configureAvailableCustomDimensions03'] = GameAnalytics.configureAvailableCustomDimensions03;
            GameAnalytics.methodMap['configureAvailableResourceCurrencies'] = GameAnalytics.configureAvailableResourceCurrencies;
            GameAnalytics.methodMap['configureAvailableResourceItemTypes'] = GameAnalytics.configureAvailableResourceItemTypes;
            GameAnalytics.methodMap['configureBuild'] = GameAnalytics.configureBuild;
            GameAnalytics.methodMap['configureSdkGameEngineVersion'] = GameAnalytics.configureSdkGameEngineVersion;
            GameAnalytics.methodMap['configureGameEngineVersion'] = GameAnalytics.configureGameEngineVersion;
            GameAnalytics.methodMap['configureUserId'] = GameAnalytics.configureUserId;
            GameAnalytics.methodMap['initialize'] = GameAnalytics.initialize;
            GameAnalytics.methodMap['addBusinessEvent'] = GameAnalytics.addBusinessEvent;
            GameAnalytics.methodMap['addResourceEvent'] = GameAnalytics.addResourceEvent;
            GameAnalytics.methodMap['addProgressionEvent'] = GameAnalytics.addProgressionEvent;
            GameAnalytics.methodMap['addDesignEvent'] = GameAnalytics.addDesignEvent;
            GameAnalytics.methodMap['addErrorEvent'] = GameAnalytics.addErrorEvent;
            GameAnalytics.methodMap['addErrorEvent'] = GameAnalytics.addErrorEvent;
            GameAnalytics.methodMap['setEnabledInfoLog'] = GameAnalytics.setEnabledInfoLog;
            GameAnalytics.methodMap['setEnabledVerboseLog'] = GameAnalytics.setEnabledVerboseLog;
            GameAnalytics.methodMap['setEnabledManualSessionHandling'] = GameAnalytics.setEnabledManualSessionHandling;
            GameAnalytics.methodMap['setEnabledEventSubmission'] = GameAnalytics.setEnabledEventSubmission;
            GameAnalytics.methodMap['setCustomDimension01'] = GameAnalytics.setCustomDimension01;
            GameAnalytics.methodMap['setCustomDimension02'] = GameAnalytics.setCustomDimension02;
            GameAnalytics.methodMap['setCustomDimension03'] = GameAnalytics.setCustomDimension03;
            GameAnalytics.methodMap['setEventProcessInterval'] = GameAnalytics.setEventProcessInterval;
            GameAnalytics.methodMap['startSession'] = GameAnalytics.startSession;
            GameAnalytics.methodMap['endSession'] = GameAnalytics.endSession;
            GameAnalytics.methodMap['onStop'] = GameAnalytics.onStop;
            GameAnalytics.methodMap['onResume'] = GameAnalytics.onResume;
            GameAnalytics.methodMap['addRemoteConfigsListener'] = GameAnalytics.addRemoteConfigsListener;
            GameAnalytics.methodMap['removeRemoteConfigsListener'] = GameAnalytics.removeRemoteConfigsListener;
            GameAnalytics.methodMap['getRemoteConfigsValueAsString'] = GameAnalytics.getRemoteConfigsValueAsString;
            GameAnalytics.methodMap['isRemoteConfigsReady'] = GameAnalytics.isRemoteConfigsReady;
            GameAnalytics.methodMap['getRemoteConfigsContentAsString'] = GameAnalytics.getRemoteConfigsContentAsString;
            if (typeof window !== 'undefined' && typeof window['GameAnalytics'] !== 'undefined' && typeof window['GameAnalytics']['q'] !== 'undefined') {
                var q = window['GameAnalytics']['q'];
                for (var i in q) {
                    GameAnalytics.gaCommand.apply(null, q[i]);
                }
            }
            window.addEventListener("beforeunload", function () {
                console.log('addEventListener unload');
                GAThreading.endSessionAndStopQueue();
            });
        };
        GameAnalytics.gaCommand = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (args.length > 0) {
                if (args[0] in gameanalytics.GameAnalytics.methodMap) {
                    if (args.length > 1) {
                        gameanalytics.GameAnalytics.methodMap[args[0]].apply(null, Array.prototype.slice.call(args, 1));
                    }
                    else {
                        gameanalytics.GameAnalytics.methodMap[args[0]]();
                    }
                }
            }
        };
        GameAnalytics.configureAvailableCustomDimensions01 = function (customDimensions) {
            if (customDimensions === void 0) { customDimensions = []; }
            GAThreading.performTaskOnGAThread(function () {
                if (GameAnalytics.isSdkReady(true, false)) {
                    GALogger.w("Available custom dimensions must be set before SDK is initialized");
                    return;
                }
                GAState.setAvailableCustomDimensions01(customDimensions);
            });
        };
        GameAnalytics.configureAvailableCustomDimensions02 = function (customDimensions) {
            if (customDimensions === void 0) { customDimensions = []; }
            GAThreading.performTaskOnGAThread(function () {
                if (GameAnalytics.isSdkReady(true, false)) {
                    GALogger.w("Available custom dimensions must be set before SDK is initialized");
                    return;
                }
                GAState.setAvailableCustomDimensions02(customDimensions);
            });
        };
        GameAnalytics.configureAvailableCustomDimensions03 = function (customDimensions) {
            if (customDimensions === void 0) { customDimensions = []; }
            GAThreading.performTaskOnGAThread(function () {
                if (GameAnalytics.isSdkReady(true, false)) {
                    GALogger.w("Available custom dimensions must be set before SDK is initialized");
                    return;
                }
                GAState.setAvailableCustomDimensions03(customDimensions);
            });
        };
        GameAnalytics.configureAvailableResourceCurrencies = function (resourceCurrencies) {
            if (resourceCurrencies === void 0) { resourceCurrencies = []; }
            GAThreading.performTaskOnGAThread(function () {
                if (GameAnalytics.isSdkReady(true, false)) {
                    GALogger.w("Available resource currencies must be set before SDK is initialized");
                    return;
                }
                GAState.setAvailableResourceCurrencies(resourceCurrencies);
            });
        };
        GameAnalytics.configureAvailableResourceItemTypes = function (resourceItemTypes) {
            if (resourceItemTypes === void 0) { resourceItemTypes = []; }
            GAThreading.performTaskOnGAThread(function () {
                if (GameAnalytics.isSdkReady(true, false)) {
                    GALogger.w("Available resource item types must be set before SDK is initialized");
                    return;
                }
                GAState.setAvailableResourceItemTypes(resourceItemTypes);
            });
        };
        GameAnalytics.configureBuild = function (build) {
            if (build === void 0) { build = ""; }
            GAThreading.performTaskOnGAThread(function () {
                if (GameAnalytics.isSdkReady(true, false)) {
                    GALogger.w("Build version must be set before SDK is initialized.");
                    return;
                }
                if (!GAValidator.validateBuild(build)) {
                    GALogger.i("Validation fail - configure build: Cannot be null, empty or above 32 length. String: " + build);
                    return;
                }
                GAState.setBuild(build);
            });
        };
        GameAnalytics.configureSdkGameEngineVersion = function (sdkGameEngineVersion) {
            if (sdkGameEngineVersion === void 0) { sdkGameEngineVersion = ""; }
            GAThreading.performTaskOnGAThread(function () {
                if (GameAnalytics.isSdkReady(true, false)) {
                    return;
                }
                if (!GAValidator.validateSdkWrapperVersion(sdkGameEngineVersion)) {
                    GALogger.i("Validation fail - configure sdk version: Sdk version not supported. String: " + sdkGameEngineVersion);
                    return;
                }
                GADevice.sdkGameEngineVersion = sdkGameEngineVersion;
            });
        };
        GameAnalytics.configureGameEngineVersion = function (gameEngineVersion) {
            if (gameEngineVersion === void 0) { gameEngineVersion = ""; }
            GAThreading.performTaskOnGAThread(function () {
                if (GameAnalytics.isSdkReady(true, false)) {
                    return;
                }
                if (!GAValidator.validateEngineVersion(gameEngineVersion)) {
                    GALogger.i("Validation fail - configure game engine version: Game engine version not supported. String: " + gameEngineVersion);
                    return;
                }
                GADevice.gameEngineVersion = gameEngineVersion;
            });
        };
        GameAnalytics.configureUserId = function (uId) {
            if (uId === void 0) { uId = ""; }
            GAThreading.performTaskOnGAThread(function () {
                if (GameAnalytics.isSdkReady(true, false)) {
                    GALogger.w("A custom user id must be set before SDK is initialized.");
                    return;
                }
                if (!GAValidator.validateUserId(uId)) {
                    GALogger.i("Validation fail - configure user_id: Cannot be null, empty or above 64 length. Will use default user_id method. Used string: " + uId);
                    return;
                }
                GAState.setUserId(uId);
            });
        };
        GameAnalytics.initialize = function (gameKey, gameSecret) {
            if (gameKey === void 0) { gameKey = ""; }
            if (gameSecret === void 0) { gameSecret = ""; }
            GADevice.updateConnectionType();
            var timedBlock = GAThreading.createTimedBlock();
            timedBlock.async = true;
            GameAnalytics.initTimedBlockId = timedBlock.id;
            timedBlock.block = function () {
                if (GameAnalytics.isSdkReady(true, false)) {
                    GALogger.w("SDK already initialized. Can only be called once.");
                    return;
                }
                if (!GAValidator.validateKeys(gameKey, gameSecret)) {
                    GALogger.w("SDK failed initialize. Game key or secret key is invalid. Can only contain characters A-z 0-9, gameKey is 32 length, gameSecret is 40 length. Failed keys - gameKey: " + gameKey + ", secretKey: " + gameSecret);
                    return;
                }
                GAState.setKeys(gameKey, gameSecret);
                GameAnalytics.internalInitialize();
            };
            GAThreading.performTimedBlockOnGAThread(timedBlock);
        };
        GameAnalytics.addBusinessEvent = function (currency, amount, itemType, itemId, cartType) {
            if (currency === void 0) { currency = ""; }
            if (amount === void 0) { amount = 0; }
            if (itemType === void 0) { itemType = ""; }
            if (itemId === void 0) { itemId = ""; }
            if (cartType === void 0) { cartType = ""; }
            GADevice.updateConnectionType();
            GAThreading.performTaskOnGAThread(function () {
                if (!GameAnalytics.isSdkReady(true, true, "Could not add business event")) {
                    return;
                }
                GAEvents.addBusinessEvent(currency, amount, itemType, itemId, cartType, {});
            });
        };
        GameAnalytics.addResourceEvent = function (flowType, currency, amount, itemType, itemId) {
            if (flowType === void 0) { flowType = gameanalytics.EGAResourceFlowType.Undefined; }
            if (currency === void 0) { currency = ""; }
            if (amount === void 0) { amount = 0; }
            if (itemType === void 0) { itemType = ""; }
            if (itemId === void 0) { itemId = ""; }
            GADevice.updateConnectionType();
            GAThreading.performTaskOnGAThread(function () {
                if (!GameAnalytics.isSdkReady(true, true, "Could not add resource event")) {
                    return;
                }
                GAEvents.addResourceEvent(flowType, currency, amount, itemType, itemId, {});
            });
        };
        GameAnalytics.addProgressionEvent = function (progressionStatus, progression01, progression02, progression03, score) {
            if (progressionStatus === void 0) { progressionStatus = gameanalytics.EGAProgressionStatus.Undefined; }
            if (progression01 === void 0) { progression01 = ""; }
            if (progression02 === void 0) { progression02 = ""; }
            if (progression03 === void 0) { progression03 = ""; }
            GADevice.updateConnectionType();
            GAThreading.performTaskOnGAThread(function () {
                if (!GameAnalytics.isSdkReady(true, true, "Could not add progression event")) {
                    return;
                }
                var sendScore = typeof score === "number";
                GAEvents.addProgressionEvent(progressionStatus, progression01, progression02, progression03, sendScore ? score : 0, sendScore, {});
            });
        };
        GameAnalytics.addDesignEvent = function (eventId, value) {
            GADevice.updateConnectionType();
            GAThreading.performTaskOnGAThread(function () {
                if (!GameAnalytics.isSdkReady(true, true, "Could not add design event")) {
                    return;
                }
                var sendValue = typeof value === "number";
                GAEvents.addDesignEvent(eventId, sendValue ? value : 0, sendValue, {});
            });
        };
        GameAnalytics.addErrorEvent = function (severity, message) {
            if (severity === void 0) { severity = gameanalytics.EGAErrorSeverity.Undefined; }
            if (message === void 0) { message = ""; }
            GADevice.updateConnectionType();
            GAThreading.performTaskOnGAThread(function () {
                if (!GameAnalytics.isSdkReady(true, true, "Could not add error event")) {
                    return;
                }
                GAEvents.addErrorEvent(severity, message, {});
            });
        };
        GameAnalytics.addAdEventWithNoAdReason = function (adAction, adType, adSdkName, adPlacement, noAdReason) {
            if (adAction === void 0) { adAction = gameanalytics.EGAAdAction.Undefined; }
            if (adType === void 0) { adType = gameanalytics.EGAAdType.Undefined; }
            if (adSdkName === void 0) { adSdkName = ""; }
            if (adPlacement === void 0) { adPlacement = ""; }
            if (noAdReason === void 0) { noAdReason = gameanalytics.EGAAdError.Undefined; }
            GADevice.updateConnectionType();
            GAThreading.performTaskOnGAThread(function () {
                if (!GameAnalytics.isSdkReady(true, true, "Could not add ad event")) {
                    return;
                }
                GAEvents.addAdEvent(adAction, adType, adSdkName, adPlacement, noAdReason, 0, false, {});
            });
        };
        GameAnalytics.addAdEventWithDuration = function (adAction, adType, adSdkName, adPlacement, duration) {
            if (adAction === void 0) { adAction = gameanalytics.EGAAdAction.Undefined; }
            if (adType === void 0) { adType = gameanalytics.EGAAdType.Undefined; }
            if (adSdkName === void 0) { adSdkName = ""; }
            if (adPlacement === void 0) { adPlacement = ""; }
            if (duration === void 0) { duration = 0; }
            GADevice.updateConnectionType();
            GAThreading.performTaskOnGAThread(function () {
                if (!GameAnalytics.isSdkReady(true, true, "Could not add ad event")) {
                    return;
                }
                GAEvents.addAdEvent(adAction, adType, adSdkName, adPlacement, gameanalytics.EGAAdError.Undefined, duration, true, {});
            });
        };
        GameAnalytics.addAdEvent = function (adAction, adType, adSdkName, adPlacement) {
            if (adAction === void 0) { adAction = gameanalytics.EGAAdAction.Undefined; }
            if (adType === void 0) { adType = gameanalytics.EGAAdType.Undefined; }
            if (adSdkName === void 0) { adSdkName = ""; }
            if (adPlacement === void 0) { adPlacement = ""; }
            GADevice.updateConnectionType();
            GAThreading.performTaskOnGAThread(function () {
                if (!GameAnalytics.isSdkReady(true, true, "Could not add ad event")) {
                    return;
                }
                GAEvents.addAdEvent(adAction, adType, adSdkName, adPlacement, gameanalytics.EGAAdError.Undefined, 0, false, {});
            });
        };
        GameAnalytics.setEnabledInfoLog = function (flag) {
            if (flag === void 0) { flag = false; }
            GAThreading.performTaskOnGAThread(function () {
                if (flag) {
                    GALogger.setInfoLog(flag);
                    GALogger.i("Info logging enabled");
                }
                else {
                    GALogger.i("Info logging disabled");
                    GALogger.setInfoLog(flag);
                }
            });
        };
        GameAnalytics.setEnabledVerboseLog = function (flag) {
            if (flag === void 0) { flag = false; }
            GAThreading.performTaskOnGAThread(function () {
                if (flag) {
                    GALogger.setVerboseLog(flag);
                    GALogger.i("Verbose logging enabled");
                }
                else {
                    GALogger.i("Verbose logging disabled");
                    GALogger.setVerboseLog(flag);
                }
            });
        };
        GameAnalytics.setEnabledManualSessionHandling = function (flag) {
            if (flag === void 0) { flag = false; }
            GAThreading.performTaskOnGAThread(function () {
                GAState.setManualSessionHandling(flag);
            });
        };
        GameAnalytics.setEnabledEventSubmission = function (flag) {
            if (flag === void 0) { flag = false; }
            GAThreading.performTaskOnGAThread(function () {
                if (flag) {
                    GAState.setEnabledEventSubmission(flag);
                    GALogger.i("Event submission enabled");
                }
                else {
                    GALogger.i("Event submission disabled");
                    GAState.setEnabledEventSubmission(flag);
                }
            });
        };
        GameAnalytics.setCustomDimension01 = function (dimension) {
            if (dimension === void 0) { dimension = ""; }
            GAThreading.performTaskOnGAThread(function () {
                if (!GAValidator.validateDimension01(dimension, GAState.getAvailableCustomDimensions01())) {
                    GALogger.w("Could not set custom01 dimension value to '" + dimension + "'. Value not found in available custom01 dimension values");
                    return;
                }
                GAState.setCustomDimension01(dimension);
            });
        };
        GameAnalytics.setCustomDimension02 = function (dimension) {
            if (dimension === void 0) { dimension = ""; }
            GAThreading.performTaskOnGAThread(function () {
                if (!GAValidator.validateDimension02(dimension, GAState.getAvailableCustomDimensions02())) {
                    GALogger.w("Could not set custom02 dimension value to '" + dimension + "'. Value not found in available custom02 dimension values");
                    return;
                }
                GAState.setCustomDimension02(dimension);
            });
        };
        GameAnalytics.setCustomDimension03 = function (dimension) {
            if (dimension === void 0) { dimension = ""; }
            GAThreading.performTaskOnGAThread(function () {
                if (!GAValidator.validateDimension03(dimension, GAState.getAvailableCustomDimensions03())) {
                    GALogger.w("Could not set custom03 dimension value to '" + dimension + "'. Value not found in available custom03 dimension values");
                    return;
                }
                GAState.setCustomDimension03(dimension);
            });
        };
        GameAnalytics.setEventProcessInterval = function (intervalInSeconds) {
            GAThreading.performTaskOnGAThread(function () {
                GAThreading.setEventProcessInterval(intervalInSeconds);
            });
        };
        GameAnalytics.startSession = function () {
            {
                if (!GAState.isInitialized()) {
                    return;
                }
                var timedBlock = GAThreading.createTimedBlock();
                timedBlock.async = true;
                GameAnalytics.initTimedBlockId = timedBlock.id;
                timedBlock.block = function () {
                    if (GAState.isEnabled() && GAState.sessionIsStarted()) {
                        GAThreading.endSessionAndStopQueue();
                    }
                    GameAnalytics.resumeSessionAndStartQueue();
                };
                GAThreading.performTimedBlockOnGAThread(timedBlock);
            }
        };
        GameAnalytics.endSession = function () {
            {
                GameAnalytics.onStop();
            }
        };
        GameAnalytics.onStop = function () {
            GAThreading.performTaskOnGAThread(function () {
                try {
                    GAThreading.endSessionAndStopQueue();
                }
                catch (Exception) {
                }
            });
        };
        GameAnalytics.onResume = function () {
            var timedBlock = GAThreading.createTimedBlock();
            timedBlock.async = true;
            GameAnalytics.initTimedBlockId = timedBlock.id;
            timedBlock.block = function () {
                GameAnalytics.resumeSessionAndStartQueue();
            };
            GAThreading.performTimedBlockOnGAThread(timedBlock);
        };
        GameAnalytics.getRemoteConfigsValueAsString = function (key, defaultValue) {
            if (defaultValue === void 0) { defaultValue = null; }
            return GAState.getConfigurationStringValue(key, defaultValue);
        };
        GameAnalytics.isRemoteConfigsReady = function () {
            return GAState.isRemoteConfigsReady();
        };
        GameAnalytics.addRemoteConfigsListener = function (listener) {
            GAState.addRemoteConfigsListener(listener);
        };
        GameAnalytics.removeRemoteConfigsListener = function (listener) {
            GAState.removeRemoteConfigsListener(listener);
        };
        GameAnalytics.getRemoteConfigsContentAsString = function () {
            return GAState.getRemoteConfigsContentAsString();
        };
        GameAnalytics.getABTestingId = function () {
            return GAState.getABTestingId();
        };
        GameAnalytics.getABTestingVariantId = function () {
            return GAState.getABTestingVariantId();
        };
        GameAnalytics.internalInitialize = function () {
            GAState.ensurePersistedStates();
            GAStore.setItem(GAState.getGameKey(), GAState.DefaultUserIdKey, GAState.getDefaultId());
            GAState.setInitialized(true);
            GameAnalytics.newSession();
            if (GAState.isEnabled()) {
                GAThreading.ensureEventQueueIsRunning();
            }
        };
        GameAnalytics.newSession = function () {
            GALogger.i("Starting a new session.");
            GAState.validateAndFixCurrentDimensions();
            GAHTTPApi.instance.requestInit(GAState.instance.configsHash, GameAnalytics.startNewSessionCallback);
        };
        GameAnalytics.startNewSessionCallback = function (initResponse, initResponseDict) {
            if ((initResponse === EGAHTTPApiResponse.Ok || initResponse === EGAHTTPApiResponse.Created) && initResponseDict) {
                var timeOffsetSeconds = 0;
                if (initResponseDict["server_ts"]) {
                    var serverTs = initResponseDict["server_ts"];
                    timeOffsetSeconds = GAState.calculateServerTimeOffset(serverTs);
                }
                initResponseDict["time_offset"] = timeOffsetSeconds;
                if (initResponse != EGAHTTPApiResponse.Created) {
                    var currentSdkConfig = GAState.getSdkConfig();
                    if (currentSdkConfig["configs"]) {
                        initResponseDict["configs"] = currentSdkConfig["configs"];
                    }
                    if (currentSdkConfig["configs_hash"]) {
                        initResponseDict["configs_hash"] = currentSdkConfig["configs_hash"];
                    }
                    if (currentSdkConfig["ab_id"]) {
                        initResponseDict["ab_id"] = currentSdkConfig["ab_id"];
                    }
                    if (currentSdkConfig["ab_variant_id"]) {
                        initResponseDict["ab_variant_id"] = currentSdkConfig["ab_variant_id"];
                    }
                }
                GAState.instance.configsHash = initResponseDict["configs_hash"] ? initResponseDict["configs_hash"] : "";
                GAState.instance.abId = initResponseDict["ab_id"] ? initResponseDict["ab_id"] : "";
                GAState.instance.abVariantId = initResponseDict["ab_variant_id"] ? initResponseDict["ab_variant_id"] : "";
                GAStore.setItem(GAState.getGameKey(), GAState.SdkConfigCachedKey, GAUtilities.encode64(JSON.stringify(initResponseDict)));
                GAState.instance.sdkConfigCached = initResponseDict;
                GAState.instance.sdkConfig = initResponseDict;
                GAState.instance.initAuthorized = true;
            }
            else if (initResponse == EGAHTTPApiResponse.Unauthorized) {
                GALogger.w("Initialize SDK failed - Unauthorized");
                GAState.instance.initAuthorized = false;
            }
            else {
                if (initResponse === EGAHTTPApiResponse.NoResponse || initResponse === EGAHTTPApiResponse.RequestTimeout) {
                    GALogger.i("Init call (session start) failed - no response. Could be offline or timeout.");
                }
                else if (initResponse === EGAHTTPApiResponse.BadResponse || initResponse === EGAHTTPApiResponse.JsonEncodeFailed || initResponse === EGAHTTPApiResponse.JsonDecodeFailed) {
                    GALogger.i("Init call (session start) failed - bad response. Could be bad response from proxy or GA servers.");
                }
                else if (initResponse === EGAHTTPApiResponse.BadRequest || initResponse === EGAHTTPApiResponse.UnknownResponseCode) {
                    GALogger.i("Init call (session start) failed - bad request or unknown response.");
                }
                if (GAState.instance.sdkConfig == null) {
                    if (GAState.instance.sdkConfigCached != null) {
                        GALogger.i("Init call (session start) failed - using cached init values.");
                        GAState.instance.sdkConfig = GAState.instance.sdkConfigCached;
                    }
                    else {
                        GALogger.i("Init call (session start) failed - using default init values.");
                        GAState.instance.sdkConfig = GAState.instance.sdkConfigDefault;
                    }
                }
                else {
                    GALogger.i("Init call (session start) failed - using cached init values.");
                }
                GAState.instance.initAuthorized = true;
            }
            GAState.instance.clientServerTimeOffset = GAState.getSdkConfig()["time_offset"] ? GAState.getSdkConfig()["time_offset"] : 0;
            GAState.populateConfigurations(GAState.getSdkConfig());
            if (!GAState.isEnabled()) {
                GALogger.w("Could not start session: SDK is disabled.");
                GAThreading.stopEventQueue();
                return;
            }
            else {
                GAThreading.ensureEventQueueIsRunning();
            }
            var newSessionId = GAUtilities.createGuid();
            GAState.instance.sessionId = newSessionId;
            GAState.instance.sessionStart = GAState.getClientTsAdjusted();
            GAEvents.addSessionStartEvent();
            var timedBlock = GAThreading.getTimedBlockById(GameAnalytics.initTimedBlockId);
            if (timedBlock != null) {
                timedBlock.running = false;
            }
            GameAnalytics.initTimedBlockId = -1;
        };
        GameAnalytics.resumeSessionAndStartQueue = function () {
            if (!GAState.isInitialized()) {
                return;
            }
            GALogger.i("Resuming session.");
            if (!GAState.sessionIsStarted()) {
                GameAnalytics.newSession();
            }
        };
        GameAnalytics.isSdkReady = function (needsInitialized, warn, message) {
            if (warn === void 0) { warn = true; }
            if (message === void 0) { message = ""; }
            if (message) {
                message = message + ": ";
            }
            if (needsInitialized && !GAState.isInitialized()) {
                if (warn) {
                    GALogger.w(message + "SDK is not initialized");
                }
                return false;
            }
            if (needsInitialized && !GAState.isEnabled()) {
                if (warn) {
                    GALogger.w(message + "SDK is disabled");
                }
                return false;
            }
            if (needsInitialized && !GAState.sessionIsStarted()) {
                if (warn) {
                    GALogger.w(message + "Session has not started yet");
                }
                return false;
            }
            return true;
        };
        GameAnalytics.initTimedBlockId = -1;
        GameAnalytics.methodMap = {};
        return GameAnalytics;
    }());
    gameanalytics.GameAnalytics = GameAnalytics;
})(gameanalytics || (gameanalytics = {}));
gameanalytics.GameAnalytics.init();
var GameAnalytics = gameanalytics.GameAnalytics.gaCommand;
module.exports = gameanalytics;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

let width = undefined
let height = undefined

module.exports = function(parameters) {
    width = parameters.width
    height = parameters.height
    resize()
}

function resize() {
    if(width !== undefined && height !== undefined) {
        const x = Math.floor(window.innerWidth / width)
        const y = Math.floor(window.innerHeight / height)
        window.document.documentElement.style.fontSize = Math.min(x, y) + "px"
    }
}

window.addEventListener("resize", resize)


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "width": 10,
  "height": 10
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Afloop = __webpack_require__(8)

module.exports = function(func) {
    this.func = func

    this.fps = 60
    this.cap = 1000

    return new Afloop((delta) => {
        // Cap the delta.
        if(typeof this.cap === "number") {
            delta = Math.min(delta, this.cap)
        }

        // Calculate the delta in
        // different units of time.
        delta = {
            ms: delta, // in milliseconds
            s: delta / 1000, // in seconds
            f: delta / (1000 / this.fps), // in frames
        }

        // Call the function
        // with the delta.
        this.func(delta)
    })
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

function Afloop(func) {
    (function loop(delta) {
        func(Math.min(window.performance.now() - delta, 1000))
        window.requestAnimationFrame(loop.bind(this, window.performance.now()))
    })(window.performance.now())
}

module.exports = Afloop


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var local_json_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var local_json_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(local_json_storage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var keyb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var keyb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(keyb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var poin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var poin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(poin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var models_Game_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var models_State_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony import */ var library_Dev_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var MINIMUM_DEATH_TIME = 1.5; // in seconds

var STATE_EXPIRATION = 10 * 1000; // in milliseconds


var App = new ( /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);

    if (library_Dev_js__WEBPACK_IMPORTED_MODULE_5__["default"].isEnabled == true) {
      window.app = this;
    }

    var state = window.localStorage.getJSON("state");

    if (state != null && state.game.adventurer.isDead !== true && Date.now() - state.date < STATE_EXPIRATION) {
      this.hasUsedKeyboard = state.hasUsedKeyboard;
      this.game = new models_Game_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
        "game": state.game
      });
    } else {
      this.game = new models_Game_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    }
  }

  _createClass(_class, [{
    key: "startNewGame",
    value: function startNewGame() {
      this.game = new models_Game_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
        "game": NEW_GAME_STATE
      });
    }
  }, {
    key: "update",
    value: function update(delta) {
      if (this.game.isDemo === true || this.game.state.hasEnded === true) {
        this.deathtime = this.deathtime || 0;
        this.deathtime += delta.s;

        if (this.deathtime > MINIMUM_DEATH_TIME) {
          if (keyb__WEBPACK_IMPORTED_MODULE_1___default.a.isJustDown("W", delta.ms) || keyb__WEBPACK_IMPORTED_MODULE_1___default.a.isJustDown("S", delta.ms) || keyb__WEBPACK_IMPORTED_MODULE_1___default.a.isJustDown("A", delta.ms) || keyb__WEBPACK_IMPORTED_MODULE_1___default.a.isJustDown("D", delta.ms) || keyb__WEBPACK_IMPORTED_MODULE_1___default.a.isJustDown("<up>", delta.ms) || keyb__WEBPACK_IMPORTED_MODULE_1___default.a.isJustDown("<down>", delta.ms) || keyb__WEBPACK_IMPORTED_MODULE_1___default.a.isJustDown("<left>", delta.ms) || keyb__WEBPACK_IMPORTED_MODULE_1___default.a.isJustDown("<right>", delta.ms) || keyb__WEBPACK_IMPORTED_MODULE_1___default.a.isJustDown("<space>", delta.ms) || poin__WEBPACK_IMPORTED_MODULE_2___default.a.wasJustPressed("primary", delta.ms)) {
            var savestate = models_State_js__WEBPACK_IMPORTED_MODULE_4__["default"].pruneProgress(this.game.state);
            console.log(savestate);
            this.game = new models_Game_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
              savestate: savestate
            });
          }
        }
      }

      this.game.update(delta);
    }
  }], [{
    key: "saveGame",
    value: function saveGame(game) {
      window.localStorage.setJSON("state", {
        "date": Date.now(),
        "game": this.toState(),
        "hasUsedKeyboard": App.hasUsedKeyboard
      });
    }
  }]);

  return _class;
}())();
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const localJSONStorage = window.localStorage;

localJSONStorage.__proto__.setJSON = function(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
};
localJSONStorage.__proto__.getJSON = function(key) {
	return JSON.parse(localStorage.getItem(key));
};

module.exports = localJSONStorage;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

const vkey = __webpack_require__(12)

const DEFAULT_DELTA = 1000 / 60

const Keyb = {"data": {}}

Keyb.isPressed = function(key) {
    return this.data[key] != undefined
        && this.data[key].state == "pressed"
}

Keyb.isUnpressed = function(key) {
    return this.data[key] == undefined
        || this.data[key].state == "unpressed"
}

Keyb.wasJustPressed = function(key, delta) {
    return this.data[key] != undefined
        && this.data[key].state == "pressed"
        && window.performance.now() - this.data[key].time < (delta || DEFAULT_DELTA)
}

Keyb.wasJustUnpressed = function(key, delta) {
    return this.data[key] != undefined
        && this.data[key].state == "unpressed"
        && window.performance.now() - this.data[key].time < (delta || DEFAULT_DELTA)
}

Keyb.setPressed = function(keycode) {
    const key = vkey[keycode]
    if(this.isPressed(key) == false) {
        this.data[key] = {"time": window.performance.now(), "state": "pressed"}
    }
}

Keyb.setNotPressed = function(keycode) {
    const key = vkey[keycode]
    this.data[key] = {"time": window.performance.now(), "state": "unpressed"}
}

Keyb.isDown = Keyb.isPressed
Keyb.isJustDown = Keyb.wasJustPressed
Keyb.isUp = Keyb.isNotPressed
Keyb.isNotPressed = Keyb.isUnpressed

document.addEventListener("keydown", (event) => Keyb.setPressed(event.keyCode))
document.addEventListener("keyup", (event) => Keyb.setNotPressed(event.keyCode))

module.exports = Keyb


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ua = typeof window !== 'undefined' ? window.navigator.userAgent : ''
  , isOSX = /OS X/.test(ua)
  , isOpera = /Opera/.test(ua)
  , maybeFirefox = !/like Gecko/.test(ua) && !isOpera

var i, output = module.exports = {
  0:  isOSX ? '<menu>' : '<UNK>'
, 1:  '<mouse 1>'
, 2:  '<mouse 2>'
, 3:  '<break>'
, 4:  '<mouse 3>'
, 5:  '<mouse 4>'
, 6:  '<mouse 5>'
, 8:  '<backspace>'
, 9:  '<tab>'
, 12: '<clear>'
, 13: '<enter>'
, 16: '<shift>'
, 17: '<control>'
, 18: '<alt>'
, 19: '<pause>'
, 20: '<caps-lock>'
, 21: '<ime-hangul>'
, 23: '<ime-junja>'
, 24: '<ime-final>'
, 25: '<ime-kanji>'
, 27: '<escape>'
, 28: '<ime-convert>'
, 29: '<ime-nonconvert>'
, 30: '<ime-accept>'
, 31: '<ime-mode-change>'
, 32: '<space>'
, 33: '<page-up>'
, 34: '<page-down>'
, 35: '<end>'
, 36: '<home>'
, 37: '<left>'
, 38: '<up>'
, 39: '<right>'
, 40: '<down>'
, 41: '<select>'
, 42: '<print>'
, 43: '<execute>'
, 44: '<snapshot>'
, 45: '<insert>'
, 46: '<delete>'
, 47: '<help>'
, 91: '<meta>'  // meta-left -- no one handles left and right properly, so we coerce into one.
, 92: '<meta>'  // meta-right
, 93: isOSX ? '<meta>' : '<menu>'      // chrome,opera,safari all report this for meta-right (osx mbp).
, 95: '<sleep>'
, 106: '<num-*>'
, 107: '<num-+>'
, 108: '<num-enter>'
, 109: '<num-->'
, 110: '<num-.>'
, 111: '<num-/>'
, 144: '<num-lock>'
, 145: '<scroll-lock>'
, 160: '<shift-left>'
, 161: '<shift-right>'
, 162: '<control-left>'
, 163: '<control-right>'
, 164: '<alt-left>'
, 165: '<alt-right>'
, 166: '<browser-back>'
, 167: '<browser-forward>'
, 168: '<browser-refresh>'
, 169: '<browser-stop>'
, 170: '<browser-search>'
, 171: '<browser-favorites>'
, 172: '<browser-home>'

  // ff/osx reports '<volume-mute>' for '-'
, 173: isOSX && maybeFirefox ? '-' : '<volume-mute>'
, 174: '<volume-down>'
, 175: '<volume-up>'
, 176: '<next-track>'
, 177: '<prev-track>'
, 178: '<stop>'
, 179: '<play-pause>'
, 180: '<launch-mail>'
, 181: '<launch-media-select>'
, 182: '<launch-app 1>'
, 183: '<launch-app 2>'
, 186: ';'
, 187: '='
, 188: ','
, 189: '-'
, 190: '.'
, 191: '/'
, 192: '`'
, 219: '['
, 220: '\\'
, 221: ']'
, 222: "'"
, 223: '<meta>'
, 224: '<meta>'       // firefox reports meta here.
, 226: '<alt-gr>'
, 229: '<ime-process>'
, 231: isOpera ? '`' : '<unicode>'
, 246: '<attention>'
, 247: '<crsel>'
, 248: '<exsel>'
, 249: '<erase-eof>'
, 250: '<play>'
, 251: '<zoom>'
, 252: '<no-name>'
, 253: '<pa-1>'
, 254: '<clear>'
}

for(i = 58; i < 65; ++i) {
  output[i] = String.fromCharCode(i)
}

// 0-9
for(i = 48; i < 58; ++i) {
  output[i] = (i - 48)+''
}

// A-Z
for(i = 65; i < 91; ++i) {
  output[i] = String.fromCharCode(i)
}

// num0-9
for(i = 96; i < 106; ++i) {
  output[i] = '<num-'+(i - 96)+'>'
}

// F1-F24
for(i = 112; i < 136; ++i) {
  output[i] = 'F'+(i-111)
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

const BUTTON_NAMES = {
    "primary": 0, // usually left button
    "secondary": 2, // usually right button
    "auxiliary": 1, // usually mouse wheel middle button
}

const Poin = {
    "position": {"x": 0, "y": 0},
    "pressed": {0: undefined, 1: undefined, 2: undefined},
    "isPressed": function(button = "primary") {
        return (this.pressed[button] || this.pressed[BUTTON_NAMES[button]]) != undefined
    },
    "wasJustPressed": function(button = "primary", delta = 1000/60) {
        const pressed = this.pressed[button] || this.pressed[BUTTON_NAMES[button]]
        return window.performance.now() - pressed < delta
    },
    "setPressed": function(button, isPressed) {
        if(isPressed == true) {
            this.pressed[button] = window.performance.now()
        } else if(isPressed == false) {
            this.pressed[button] = undefined
        }
    },
    "setPosition": function(position) {
        this.position.x = position.x
        this.position.y = position.y
    },
}

document.addEventListener("mousedown", (event) => Poin.setPressed(event.button, true))
document.addEventListener("mouseup", (event) => Poin.setPressed(event.button, false))
document.addEventListener("mousemove", (event) => Poin.setPosition({"x": event.clientX, "y": event.clientY}))
document.addEventListener("pointerdown", (event) => Poin.setPressed(event.button || 0, true))
document.addEventListener("pointerup", (event) => Poin.setPressed(event.button || 0, false))
document.addEventListener("pointermove", (event) => Poin.setPosition({"x": event.clientX, "y": event.clientY}))
document.addEventListener("touchstart", (event) => Poin.setPressed(0, true))
document.addEventListener("touchend", (event) => Poin.setPressed(0, false))
document.addEventListener("touchstart", (event) => Poin.setPosition({"x": event.touches[0].clientX, "y": event.touches[0].clientY}))
document.addEventListener("touchend", (event) => Poin.setPosition({"x": event.touches[0].clientX, "y": event.touches[0].clientY}))
document.addEventListener("touchmove", (event) => Poin.setPosition({"x": event.touches[0].clientX, "y": event.touches[0].clientY}))

document.addEventListener("contextmenu", (event) => {
    if(Poin.isIgnoringContextMenu == true) {
        event.preventDefault()
    }
})

// https://stackoverflow.com/questions/38373684/how-do-i-stop-ios-chrome-from-dimming-on-touching-a-canvas
document.addEventListener("touchstart", function(event) {
    if(Poin.isIgnoringTouchHover == true) {
        event.preventDefault()
    }
})

module.exports = Poin


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var objdict__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var library_analytics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var models_App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var models_Player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
/* harmony import */ var models_State_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Game = /*#__PURE__*/function () {
  function Game() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        savestate = _ref.savestate;

    _classCallCheck(this, Game);

    this.start();
    this.state = models_State_js__WEBPACK_IMPORTED_MODULE_4__["default"].generate();

    if (savestate != undefined) {
      this.state = models_State_js__WEBPACK_IMPORTED_MODULE_4__["default"].merge(this.state, savestate);
    }
  }

  _createClass(Game, [{
    key: "update",
    value: function update(delta) {
      if (this.state.hasEnded) return;
      models_Player_js__WEBPACK_IMPORTED_MODULE_3__["default"].update(this.state, delta);
    }
  }, {
    key: "start",
    value: function start() {
      library_analytics_js__WEBPACK_IMPORTED_MODULE_1__["default"].reportStartGame();
    }
  }, {
    key: "end",
    value: function end() {
      library_analytics_js__WEBPACK_IMPORTED_MODULE_1__["default"].reportEndGame();
    }
  }, {
    key: "isTutorial",
    get: function get() {
      if (this.isDemo) {
        return false;
      }

      if (models_App_js__WEBPACK_IMPORTED_MODULE_2__["default"].hasUsedKeyboard) {
        return false;
      }

      return true;
    }
  }]);

  return Game;
}();



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convert", function() { return convert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
// What is an object-based dictionary? It's any object with key-value pairs!
// This is just a more primitive version of the ES2015 Maps.

// Objdict.merge
// When merging, deletes any values of undefined.
// When merging, the later arguments will overwrite previous arguments.
// When merging, will assign a unique identifier to any units missing a key.
// This is a shallow merge.
// Returns a new untouched dict.
// Does not touch the passed in dicts.
function merge() {
    const omegadict = {}
    Array.from(arguments).forEach((alphadict) => {
        if(alphadict instanceof Array) {
            alphadict = Objdict.from(alphadict)
        }
        Object.keys(alphadict).forEach((key) => {
            omegadict[key] = alphadict[key]
            if(omegadict[key] === undefined) {
                delete omegadict[key]
            }
        })
    })
    return omegadict
}

// Objdict.map
// Assumes the "order" from Object.keys, which honestly isn't supposed to have order.
// For the iterator function, we pass the (value, key) => {}
// Returns a new untouched dict.
// In the current design, if you change the key in the iterator, it will still be saved in the dict by the old key.
function map(alphadict, iterator) {
    if(alphadict == undefined) {
        return {}
    }
    const omegadict = {}
    Object.keys(alphadict).forEach((key) => {
        omegadict[key] = iterator(alphadict[key], key)
    })
    return omegadict
}

// Objdict.find
// Assumes the "order" from Object.keys, which honestly isn't supposed to have order.
// For the iterator function, we pass the (value, key) => {}
function find(dict, iterator) {
    if(dict == undefined) {
        return undefined
    }
    const keys = Object.keys(dict)
    for(let index in keys) {
        const key = keys[index]
        const value = dict[key]
        if(iterator(value, key)) {
            return value
        }
    }
}

// Objdict.convert

function convert(alphalist, key = "key") {
    if(alphalist == undefined) {
        return {}
    }
    if(alphalist instanceof Array) {
        const omegadict = {}
        alphalist.forEach((value) => {
            value[key] = value[key] || shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate()
            omegadict[value[key]] = value
        })
        return omegadict
    }
    return alphalist
}
function from() {
    return Objdict.convert(...arguments)
}

// Objdict.forEach
// Assumes the "order" from Object.keys, which honestly isn't supposed to have order.
// For the iterator function, we pass the (value, key) => {}
function forEach(dict, iterator) {
    dict = dict || []
    Object.keys(dict).forEach((key) => {
        const value = dict[key]
        iterator(value, key)
    })
}

// TODO: Support objdicts that use a different property as the key, like name or id.


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(17);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(18);
var build = __webpack_require__(20);
var isValid = __webpack_require__(24);

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(25) || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.isValid = isValid;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__(19);

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

function get () {
  return alphabet || ORIGINAL;
}

module.exports = {
    get: get,
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var generate = __webpack_require__(21);
var alphabet = __webpack_require__(18);

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1567752802062;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 7;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {
    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + generate(version);
    str = str + generate(clusterWorkerId);
    if (counter > 0) {
        str = str + generate(counter);
    }
    str = str + generate(seconds);
    return str;
}

module.exports = build;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(18);
var random = __webpack_require__(22);
var format = __webpack_require__(23);

function generate(number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + format(random, alphabet.get(), 1);
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = generate;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

var randomByte;

if (!crypto || !crypto.getRandomValues) {
    randomByte = function(size) {
        var bytes = [];
        for (var i = 0; i < size; i++) {
            bytes.push(Math.floor(Math.random() * 256));
        }
        return bytes;
    };
} else {
    randomByte = function(size) {
        return crypto.getRandomValues(new Uint8Array(size));
    };
}

module.exports = randomByte;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// This file replaces `format.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.

module.exports = function (random, alphabet, size) {
  // We can’t use bytes bigger than the alphabet. To make bytes values closer
  // to the alphabet, we apply bitmask on them. We look for the closest
  // `2 ** x - 1` number, which will be bigger than alphabet size. If we have
  // 30 symbols in the alphabet, we will take 31 (00011111).
  // We do not use faster Math.clz32, because it is not available in browsers.
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1
  // Bitmask is not a perfect solution (in our example it will pass 31 bytes,
  // which is bigger than the alphabet). As a result, we will need more bytes,
  // than ID size, because we will refuse bytes bigger than the alphabet.

  // Every hardware random generator call is costly,
  // because we need to wait for entropy collection. This is why often it will
  // be faster to ask for few extra bytes in advance, to avoid additional calls.

  // Here we calculate how many random bytes should we call in advance.
  // It depends on ID length, mask / alphabet size and magic number 1.6
  // (which was selected according benchmarks).

  // -~f => Math.ceil(f) if n is float number
  // -~i => i + 1 if n is integer number
  var step = -~(1.6 * mask * size / alphabet.length)
  var id = ''

  while (true) {
    var bytes = random(step)
    // Compact alternative for `for (var i = 0; i < step; i++)`
    var i = step
    while (i--) {
      // If random byte is bigger than alphabet even after bitmask,
      // we refuse it by `|| ''`.
      id += alphabet[bytes[i] & mask] || ''
      // More compact than `id.length + 1 === size`
      if (id.length === +size) return id
    }
  }
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(18);

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var nonAlphabetic = new RegExp('[^' +
      alphabet.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') +
    ']');
    return !nonAlphabetic.test(id);
}

module.exports = isShortId;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 0;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var keyb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var keyb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(keyb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var objdict__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var models_App_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var models_Game_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var models_State_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27);
/* harmony import */ var models_Entity_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28);
/* harmony import */ var library_Dev_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var data_scripts_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30);
/* harmony import */ var data_directions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29);
/* harmony import */ var data_deathtext_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(137);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }












var MIN_DIALOGUE_TIME = 500; // in ms

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
  }

  _createClass(Player, null, [{
    key: "update",
    value: function update(state, delta) {
      if (models_Entity_js__WEBPACK_IMPORTED_MODULE_6__["default"].isDead(state, state.entities.player)) {
        return;
      }

      if (state.script != undefined) {
        if (Date.now() - state.script.time > MIN_DIALOGUE_TIME) {
          if (keyb__WEBPACK_IMPORTED_MODULE_0___default.a.isJustDown("W", delta.ms) || keyb__WEBPACK_IMPORTED_MODULE_0___default.a.isJustDown("S", delta.ms) || keyb__WEBPACK_IMPORTED_MODULE_0___default.a.isJustDown("A", delta.ms) || keyb__WEBPACK_IMPORTED_MODULE_0___default.a.isJustDown("D", delta.ms) || keyb__WEBPACK_IMPORTED_MODULE_0___default.a.isJustDown("<up>", delta.ms) || keyb__WEBPACK_IMPORTED_MODULE_0___default.a.isJustDown("<down>", delta.ms) || keyb__WEBPACK_IMPORTED_MODULE_0___default.a.isJustDown("<left>", delta.ms) || keyb__WEBPACK_IMPORTED_MODULE_0___default.a.isJustDown("<right>", delta.ms)) {
            state.script.time = Date.now();
            state.script.dialogue.shift(); // this mutates the source!!

            if (state.script.dialogue[0] == undefined) {
              if (state.script["goto"] != undefined) {
                models_App_js__WEBPACK_IMPORTED_MODULE_3__["default"].screen = state.script["goto"]; // THIS WILL TELEPORT YOU TO THIS SCREEN AFTER THE DIALOGUE FINISHES
              }

              delete state.script;
              return;
            }
          }
        }

        return;
      }

      if (keyb__WEBPACK_IMPORTED_MODULE_0___default.a.isJustDown("W", delta.ms) || keyb__WEBPACK_IMPORTED_MODULE_0___default.a.isJustDown("<up>", delta.ms)) {
        Player.performAction(state, {
          "move": {
            "y": -1
          }
        });
        models_App_js__WEBPACK_IMPORTED_MODULE_3__["default"].hasUsedKeyboard = true;
      }

      if (keyb__WEBPACK_IMPORTED_MODULE_0___default.a.isJustDown("S", delta.ms) || keyb__WEBPACK_IMPORTED_MODULE_0___default.a.isJustDown("<down>", delta.ms)) {
        Player.performAction(state, {
          "move": {
            "y": +1
          }
        });
        models_App_js__WEBPACK_IMPORTED_MODULE_3__["default"].hasUsedKeyboard = true;
      }

      if (keyb__WEBPACK_IMPORTED_MODULE_0___default.a.isJustDown("A", delta.ms) || keyb__WEBPACK_IMPORTED_MODULE_0___default.a.isJustDown("<left>", delta.ms)) {
        Player.performAction(state, {
          "move": {
            "x": -1
          }
        });
        models_App_js__WEBPACK_IMPORTED_MODULE_3__["default"].hasUsedKeyboard = true;
      }

      if (keyb__WEBPACK_IMPORTED_MODULE_0___default.a.isJustDown("D", delta.ms) || keyb__WEBPACK_IMPORTED_MODULE_0___default.a.isJustDown("<right>", delta.ms)) {
        Player.performAction(state, {
          "move": {
            "x": +1
          }
        });
        models_App_js__WEBPACK_IMPORTED_MODULE_3__["default"].hasUsedKeyboard = true;
      }

      if (library_Dev_js__WEBPACK_IMPORTED_MODULE_7__["default"].isEnabled) {
        if (keyb__WEBPACK_IMPORTED_MODULE_0___default.a.isJustDown("T", delta.ms)) {
          Player.performAction(state, {
            "move": {}
          });
        }
      }
    }
  }, {
    key: "performAction",
    value: function performAction(state, action) {
      var _this = this;

      var player = state.entities.player;
      player.isAttacking = false;
      action.move.x = action.move.x || 0;
      action.move.y = action.move.y || 0;
      player.direction = {
        "x": action.move.x,
        "y": action.move.y
      };
      objdict__WEBPACK_IMPORTED_MODULE_1__["forEach"](state.entities, function (entity) {
        if (entity != _this && entity.isDead != true && player.position.x + action.move.x == entity.position.x && player.position.y + action.move.y == entity.position.y) {
          if (entity.hasCollision == true) {
            if (entity.key != player.key) {
              // player.isAttacking = true // REMOVED CUZ IT BAD
              if ((entity.type == "goal" || data_scripts_js__WEBPACK_IMPORTED_MODULE_8__["default"]["sword1"].hasBeenTriggered == true) && entity.handleAttacked instanceof Function) {
                entity.handleAttacked(state);
              }
            }

            action.move.x = 0;
            action.move.y = 0;
          } else if (entity.hasCollision == false) {
            entity.handleSquished(state);
          }
        }
      });
      var mx = player.position.x + action.move.x;
      var my = player.position.y + action.move.y;
      var tile = state.world.tiles[mx + "x" + my];

      if (tile != undefined && tile.collision == true) {
        action.move.x = 0;
        action.move.y = 0;
        return;
      }

      player.prevposition = {};
      player.prevposition.x = player.position.x;
      player.prevposition.y = player.position.y;
      player.position.x += action.move.x;
      player.position.y += action.move.y;
      models_State_js__WEBPACK_IMPORTED_MODULE_5__["default"].performReactions(state);
    }
  }, {
    key: "isDead",
    value: function isDead(state) {
      var player = state.entities.player;
      return player == undefined || player.damage >= player.health;
    } // toState() {
    //     return {
    //         "damage": this.damage,
    //         "position": this.position,
    //         "prevposition": this.prevposition,
    //         "isDead": this.isDead
    //     }
    // }

  }]);

  return Player;
}();



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return State; });
/* harmony import */ var objdict__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var models_App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var models_Entity_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var data_directions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony import */ var data_world_tilemap_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
var data_world_tilemap_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(40, 1);
/* harmony import */ var data_world_tileset_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
var data_world_tileset_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(41, 1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var contextualize = function contextualize(context) {
  var recontext = {};
  context.keys().forEach(function (key) {
    recontext[key] = context(key);
  });
  return recontext;
};

var buildImagePaths = contextualize(__webpack_require__(42));

if (data_world_tilemap_json__WEBPACK_IMPORTED_MODULE_5__.tilesets.length != 1 || data_world_tilemap_json__WEBPACK_IMPORTED_MODULE_5__.tilesets[0].source != "tileset.json") {
  console.error("Unexpected tilesets", data_world_tilemap_json__WEBPACK_IMPORTED_MODULE_5__.tilesets);
}

var directionsByLabel = {
  "west": {
    "x": -1,
    "y": 0
  },
  "east": {
    "x": +1,
    "y": 0
  },
  "north": {
    "x": 0,
    "y": -1
  },
  "south": {
    "x": 0,
    "y": +1
  }
}; // tilemap.renderorder == "right-down"
// tilemap.orientation == "orthogonal"
// tilemap.tiledversion == "1.4.2"
// tilemap.version == 1.4
// tilemap.type == "map"
// tilemap.infinite == false
// tilemap.tilewidth == 16 // in pixels
// tilemap.tileheight == 16 // in pixels

var FIRST_TILEGID = 1;
var TILE_SIZE = 32;

function iterateTileLayer(layer, func) {
  layer.data.forEach(function (tilegid, index) {
    var position = {};
    position.x = index % layer.width;
    position.y = Math.floor(index / layer.width);
    position.key = position.x + "x" + position.y;
    func({
      tilegid: tilegid,
      position: position,
      index: index
    });
  });
}

function findPropertyValue(properties, name) {
  if (properties == undefined) return;
  var property = properties.find(function (property) {
    if (property == undefined) return false;
    if (property.name == undefined) return false;
    if (property.name.toLowerCase() == name.toLowerCase()) return true;
  });

  if (property != undefined) {
    return property.value;
  }
}

var State = /*#__PURE__*/function () {
  function State() {
    _classCallCheck(this, State);
  }

  _createClass(State, null, [{
    key: "generate",
    value: function generate() {
      this.width = data_world_tilemap_json__WEBPACK_IMPORTED_MODULE_5__.width;
      this.height = data_world_tilemap_json__WEBPACK_IMPORTED_MODULE_5__.height;
      var state = {};
      state.entities = {};
      state.world = {
        "tiles": {}
      };
      data_world_tilemap_json__WEBPACK_IMPORTED_MODULE_5__.layers.forEach(function (layer) {
        if (layer.name == "data:entities" && layer.type == "objectgroup") {
          return layer.objects.forEach(function (object) {
            if (object.visible == false) return;
            if (isNaN(object.gid)) return; // this filters out anything that isn't an image stamp.

            object.key = findPropertyValue(object.properties, "Key");
            object.gid -= FIRST_TILEGID;

            if (object.type == undefined || object.type == "") {
              object.type = findPropertyValue(object.properties, "EntityType");

              if (object.type == undefined || object.type == "") {
                var tile = data_world_tileset_json__WEBPACK_IMPORTED_MODULE_6__.tiles[object.gid];

                if (tile != undefined) {
                  object.type = tile.type;

                  if (object.type == undefined || object.type == "") {
                    object.type = findPropertyValue(tile.properties, "DefaultEntityType");
                  }
                }
              }
            }

            if (object.type == undefined) {
              console.error("Could not find entity of this type:", object);
              return;
            }

            object.direction = findPropertyValue(object.properties, "Direction");

            if (object.direction != undefined) {
              object.direction = directionsByLabel[object.direction];
            }

            object.scriptKey = findPropertyValue(object.properties, "ScriptKey");
            var entity = models_Entity_js__WEBPACK_IMPORTED_MODULE_3__["default"].generate({
              "key": object.key || object.id,
              "type": object.type,
              "direction": object.direction,
              "scriptKey": object.scriptKey,
              "position": {
                "x": Math.floor(object.x / TILE_SIZE),
                "y": Math.floor(object.y / TILE_SIZE) - 1,
                // TODO: Why -1?
                "z": 0
              }
            });
            state.entities[entity.key] = entity;
          });
        }

        if (layer.name == "data:collision" && layer.type == "tilelayer") {
          return iterateTileLayer(layer, function (_ref) {
            var tilegid = _ref.tilegid,
                position = _ref.position;
            tilegid -= FIRST_TILEGID;

            if (tilegid > -1) {
              state.world.tiles[position.key] = state.world.tiles[position.key] || {};
              state.world.tiles[position.key].position = state.world.tiles[position.key].position || position;
              state.world.tiles[position.key].collision = true;
            }
          });
        }

        if (layer.type == "tilelayer" && layer.visible == true) {
          var stack = 0;

          if (layer.properties != undefined) {
            stack = findPropertyValue(layer.properties, "Stack");
          }

          iterateTileLayer(layer, function (_ref2) {
            var tilegid = _ref2.tilegid,
                position = _ref2.position;
            tilegid -= FIRST_TILEGID;
            var tile = data_world_tileset_json__WEBPACK_IMPORTED_MODULE_6__.tiles[tilegid];
            if (tile == undefined) return;
            state.world.tiles[position.key] = state.world.tiles[position.key] || {};
            state.world.tiles[position.key].position = state.world.tiles[position.key].position || position;
            state.world.tiles[position.key].images = state.world.tiles[position.key].images || [];

            if (tile.type == "collision") {
              state.world.tiles[position.key].collision = true;
            } // tile.imageheight == 16
            // tile.imagewidth == 16


            var sourceImagePath = tile.image.replace("../../assets/images/", "./");
            var buildImagePath = buildImagePaths[sourceImagePath];
            state.world.tiles[position.key].images.push({
              "source": buildImagePath,
              "stack": stack
            });
          });
        }
      });
      return state;
    } // does not mutate either!!

  }, {
    key: "merge",
    value: function merge() {
      var state = {
        "world": {},
        "entities": {}
      };
      Array.from(arguments).forEach(function (substate) {
        if (substate.world != undefined) {
          state.world = substate.world;
        }

        if (substate.entities != undefined) {
          substate.entities = objdict__WEBPACK_IMPORTED_MODULE_0__["convert"](substate.entities);
          objdict__WEBPACK_IMPORTED_MODULE_0__["forEach"](substate.entities, function (entity) {
            if (state.entities[entity.key] == undefined) {
              state.entities[entity.key] = entity;
            } else {
              state.entities[entity.key] = objdict__WEBPACK_IMPORTED_MODULE_0__["merge"](state.entities[entity.key], entity);
            }
          });
        }
      });
      return state;
    }
  }, {
    key: "performReactions",
    value: function performReactions(state) {
      objdict__WEBPACK_IMPORTED_MODULE_0__["forEach"](state.entities, function (entity) {
        if (entity.reaction instanceof Function) {
          entity.reaction(state);
        }
      }); // App.saveGame(game)
    }
  }, {
    key: "pruneProgress",
    value: function pruneProgress(state) {
      var collectibles = Object.values(state.entities).filter(function (entity) {
        return entity.type == "collectible" && entity.status == "collected";
      });
      return {
        "entities": collectibles.map(function (collectible) {
          return {
            "key": collectible.key,
            "status": collectible.status
          };
        })
      };
    }
  }, {
    key: "getCollectibleProgress",
    value: function getCollectibleProgress(state) {
      var totalCollectibles = Object.values(state.entities).filter(function (entity) {
        return entity.type == "collectible";
      });
      var currentCollectibles = totalCollectibles.filter(function (entity) {
        return entity.status == "collected";
      });
      return {
        "current": currentCollectibles.length,
        "total": totalCollectibles.length
      };
    }
  }]);

  return State;
}();



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Entity; });
/* harmony import */ var objdict__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var models_App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var models_State_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var data_directions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony import */ var data_scripts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30);
var _red_bat;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Entity = /*#__PURE__*/function () {
  function Entity() {
    _classCallCheck(this, Entity);
  }

  _createClass(Entity, null, [{
    key: "generate",
    value: function generate() {
      var instancedEntity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var classedEntity = classedEntities[instancedEntity.type] || {};
      return objdict__WEBPACK_IMPORTED_MODULE_0__["merge"](defaultEntity, classedEntity, instancedEntity);
    }
  }, {
    key: "isDead",
    value: function isDead(entity) {
      return entity.damage >= entity.health;
    }
  }, {
    key: "isInCamera",
    value: function isInCamera(state, entity) {
      if (state.entities.player == undefined) return true;
      var playerPosition = state.entities.player.prevposition || state.entities.player.position;
      var CAMZONE_WIDTH = 10;
      var CAMZONE_HEIGHT = 10;
      var playerCamzonePosition = {
        "x": Math.floor(playerPosition.x / CAMZONE_WIDTH) * CAMZONE_WIDTH,
        "y": Math.floor(playerPosition.y / CAMZONE_HEIGHT) * CAMZONE_HEIGHT
      };
      var entityCamzonePosition = {
        "x": Math.floor(entity.position.x / CAMZONE_WIDTH) * CAMZONE_WIDTH,
        "y": Math.floor(entity.position.y / CAMZONE_HEIGHT) * CAMZONE_HEIGHT
      };
      return entityCamzonePosition.x == playerCamzonePosition.x && entityCamzonePosition.y == playerCamzonePosition.y;
    }
  }]);

  return Entity;
}();


var defaultEntity = {
  "damage": 0,
  "health": 1,
  "handleAttacked": function handleAttacked(state) {
    this.damage += 1;

    if (this.damage >= this.health) {
      this.isDead = true; // this.score += 1
      // this.wave.killcount -= 1

      delete state.entities[this.key];
    }
  }
};

function getDirectionLabel(direction) {
  return data_directions_js__WEBPACK_IMPORTED_MODULE_4__["default"][direction.x + "x" + direction.y] || "none";
}

function StrikingAnimation() {
  if (this.isAttacking) {
    return "strike" + "-" + getDirectionLabel(this.direction);
  }
}

function FlipFlopImage() {
  if (this.flipflop === true) {
    return this.images.threatening;
  } else {
    return this.images.standard;
  }
}



function performScript(state, script) {
  script.time = Date.now();
  state.script = {
    "time": Date.now() + 1000,
    "dialogue": script.dialogue.slice(),
    // shallow copy
    "goto": script["goto"]
  };
}

var classedEntities = {
  "dialogue": {
    "hasCollision": false,
    "images": {
      "standard": __webpack_require__(31)
    },
    "getOpacity": function getOpacity() {
      return 0;
    },
    "handleSquished": function handleSquished(state) {
      if (data_scripts_js__WEBPACK_IMPORTED_MODULE_5__["default"][this.scriptKey] != undefined && data_scripts_js__WEBPACK_IMPORTED_MODULE_5__["default"][this.scriptKey].hasBeenTriggered != true) {
        data_scripts_js__WEBPACK_IMPORTED_MODULE_5__["default"][this.scriptKey].hasBeenTriggered = true;
        performScript(state, data_scripts_js__WEBPACK_IMPORTED_MODULE_5__["default"][this.scriptKey]);
      }
    }
  },
  "adventurer": {
    "title": "The Adventurer",
    "description": "It you!!",
    "hasCollision": true,
    "health": 3,
    "images": {
      "standard": __webpack_require__(32),
      "dead": __webpack_require__(33)
    },
    "getAnimation": StrikingAnimation,
    "getImage": function getImage() {
      if (Entity.isDead(this)) {
        return this.images.dead;
      } else {
        return this.images.standard;
      }
    },
    "handleAttacked": function handleAttacked(state) {
      // if(this.isDemo) return
      if (Entity.isDead(this)) return;
      this.damage += 1;
      this.isAttacked = shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate();

      if (Entity.isDead(this)) {
        // this.deathtext = deathtext[0]
        // deathtext.push(deathtext.shift())
        state.hasEnded = true;
        models_App_js__WEBPACK_IMPORTED_MODULE_2__["default"].deathtime = 0;
      }
    }
  },
  "collectible": {
    "hasCollision": false,
    "images": {
      "standard": __webpack_require__(31)
    },
    "getOpacity": function getOpacity() {
      if (this.status == "collected") {
        return 0.5;
      } else {
        return 1;
      }
    },
    "handleSquished": function handleSquished(state) {
      if (this.status != "collected") {
        this.status = "collected";
        var collectibles = models_State_js__WEBPACK_IMPORTED_MODULE_3__["default"].getCollectibleProgress(state);

        if (collectibles.current == collectibles.total) {
          if (data_scripts_js__WEBPACK_IMPORTED_MODULE_5__["default"]["finalshard"] != undefined && data_scripts_js__WEBPACK_IMPORTED_MODULE_5__["default"]["finalshard"].hasBeenTriggered != true) {
            data_scripts_js__WEBPACK_IMPORTED_MODULE_5__["default"]["finalshard"].hasBeenTriggered = true;
            performScript(state, data_scripts_js__WEBPACK_IMPORTED_MODULE_5__["default"]["finalshard"]);
          }
        }
      }
    }
  },
  "shrub": {
    "hasCollision": true,
    "images": {
      "standard": __webpack_require__(34)
    }
  },
  "goal": {
    "hasCollision": true,
    "images": {
      "standard": __webpack_require__(35),
      "empty": __webpack_require__(36)
    },
    "getImage": function getImage(state) {
      if (data_scripts_js__WEBPACK_IMPORTED_MODULE_5__["default"]["sword1"].hasBeenTriggered == true && data_scripts_js__WEBPACK_IMPORTED_MODULE_5__["default"]["sword2"].hasBeenTriggered != true) {
        return this.images.empty;
      } else {
        return this.images.standard;
      }
    },
    "handleAttacked": function handleAttacked(state) {
      var collectibles = models_State_js__WEBPACK_IMPORTED_MODULE_3__["default"].getCollectibleProgress(state);

      if (collectibles.current == collectibles.total) {
        if (data_scripts_js__WEBPACK_IMPORTED_MODULE_5__["default"]["sword2"] != undefined && data_scripts_js__WEBPACK_IMPORTED_MODULE_5__["default"]["sword2"].hasBeenTriggered != true) {
          data_scripts_js__WEBPACK_IMPORTED_MODULE_5__["default"]["sword2"].hasBeenTriggered = true;
          performScript(state, data_scripts_js__WEBPACK_IMPORTED_MODULE_5__["default"]["sword2"]);
        }
      } else if (data_scripts_js__WEBPACK_IMPORTED_MODULE_5__["default"]["sword1"] != undefined && data_scripts_js__WEBPACK_IMPORTED_MODULE_5__["default"]["sword1"].hasBeenTriggered != true) {
        data_scripts_js__WEBPACK_IMPORTED_MODULE_5__["default"]["sword1"].hasBeenTriggered = true;
        performScript(state, data_scripts_js__WEBPACK_IMPORTED_MODULE_5__["default"]["sword1"]);
      } else {
        performScript(state, data_scripts_js__WEBPACK_IMPORTED_MODULE_5__["default"]["..."]);
      }
    }
  },
  "red_slime": {
    "title": "Red Slime",
    "description": "It looks gross.",
    "hasCollision": true,
    "images": {
      "standard": __webpack_require__(37),
      "threatening": __webpack_require__(37)
    },
    "getAnimation": function getAnimation() {
      if (this.isAttacking) {
        return "strike" + "-" + getDirectionLabel(this.direction);
      }

      if (this.flipflop === true) {
        return "shake";
      } else {
        return "ooze";
      }
    },
    "getImage": FlipFlopImage,
    "reaction": function reaction(state) {
      var _this = this;

      StandardReaction(state, this, function () {
        var action = {
          "move": {
            "x": 0,
            "y": 0
          }
        };

        if (_this.flipflop == false) {
          _this.flipflop = true;
        } else if (_this.flipflop = true) {
          _this.flipflop = false; // move towards the adventurer, prioritzing whichever vector has a longer magnitude.

          if (Math.abs(_this.position.y - (state.entities.player.position.y + state.entities.player.prevposition.y) / 2) >= Math.abs(_this.position.x - (state.entities.player.position.x + state.entities.player.prevposition.x) / 2)) {
            if (_this.position.y > state.entities.player.position.y) {
              action.move.y = -1;
            } else if (_this.position.y < state.entities.player.position.y) {
              action.move.y = +1;
            }
          } else {
            if (_this.position.x > state.entities.player.position.x) {
              action.move.x = -1;
            } else if (_this.position.x < state.entities.player.position.x) {
              action.move.x = +1;
            }
          }

          _this.direction = {
            "x": action.move.x,
            "y": action.move.y
          };
        }

        return action;
      });
    }
  },
  "blue_slime": {
    "title": "Red Slime",
    "description": "It looks gross.",
    "hasCollision": true,
    "images": {
      "standard": __webpack_require__(37),
      "threatening": __webpack_require__(37)
    },
    "getAnimation": function getAnimation() {
      if (this.isAttacking) {
        return "strike" + "-" + getDirectionLabel(this.direction);
      }

      if (this.flipflop === true) {
        return "shake";
      } else {
        return "ooze";
      }
    },
    "health": 2,
    "getImage": FlipFlopImage,
    "reaction": function reaction(state) {
      var _this2 = this;

      StandardReaction(state, this, function () {
        var action = {
          "move": {
            "x": 0,
            "y": 0
          }
        };

        if (_this2.flipflop == false) {
          _this2.flipflop = true;
        } else if (_this2.flipflop = true) {
          _this2.flipflop = false; // move towards the adventurer, prioritzing whichever vector has a longer magnitude.

          if (Math.abs(_this2.position.y - (state.entities.player.position.y + state.entities.player.prevposition.y) / 2) >= Math.abs(_this2.position.x - (state.entities.player.position.x + state.entities.player.prevposition.x) / 2)) {
            if (_this2.position.y > state.entities.player.position.y) {
              action.move.y = -1;
            } else if (_this2.position.y < state.entities.player.position.y) {
              action.move.y = +1;
            }
          } else {
            if (_this2.position.x > state.entities.player.position.x) {
              action.move.x = -1;
            } else if (_this2.position.x < state.entities.player.position.x) {
              action.move.x = +1;
            }
          }

          _this2.direction = {
            "x": action.move.x,
            "y": action.move.y
          };
        }

        return action;
      });
    }
  },
  "red_bat": (_red_bat = {
    "title": "Red Bat",
    "description": "Yikes, where is it going??",
    "hasCollision": true,
    "images": {
      "standard": __webpack_require__(38),
      "threatening": __webpack_require__(38)
    },
    "getAnimation": StrikingAnimation
  }, _defineProperty(_red_bat, "getAnimation", function getAnimation() {
    if (this.isAttacking) {
      return "strike" + "-" + getDirectionLabel(this.direction);
    }

    if (this.flipflop === true) {
      return "shake";
    } else {
      return "ooze";
    }
  }), _defineProperty(_red_bat, "reaction", function reaction(state) {
    var _this3 = this;

    StandardReaction(state, this, function () {
      var action = {
        "move": {
          "x": 0,
          "y": 0
        }
      };

      if (_this3.flipflop != true) {
        _this3.flipflop = true;
      } else if (_this3.flipflop = true) {
        _this3.flipflop = false;
        var moves = [{
          x: -1
        }, {
          x: +1
        }, {
          y: -1
        }, {
          y: +1
        }]; // moves.forEach((move) => {
        //     const x = this.position.x + (move.x || 0)
        //     const y = this.position.y + (move.y || 0)
        //     if(state.entities.player.position.x == x
        //     && state.entities.player.position.y == y) {
        //         moves = [move]
        //     }
        // })

        if (moves.length > 1) {
          moves = filterInvalidMovements(state, _this3, moves);
        }

        if (moves.length > 0) {
          action.move = moves[Math.floor(Math.random() * moves.length)];
        }

        _this3.direction = {
          "x": action.move.x,
          "y": action.move.y
        };
      }

      return action;
    });
  }), _red_bat),
  "blue_bat": {
    "title": "Blue Bat",
    "description": "Yikes, where is it going??",
    "hasCollision": true,
    "images": {
      "standard": __webpack_require__(38)
    },
    "getAnimation": StrikingAnimation,
    "reaction": function reaction(state) {
      var _this4 = this;

      StandardReaction(state, this, function () {
        var action = {
          "move": {
            "x": 0,
            "y": 0
          }
        };
        var moves = [{
          x: -1
        }, {
          x: +1
        }, {
          y: -1
        }, {
          y: +1
        }]; // moves.forEach((move) => {
        //     const x = this.position.x + (move.x || 0)
        //     const y = this.position.y + (move.y || 0)
        //     if(state.entities.player.position.x == x
        //     && state.entities.player.position.y == y) {
        //         moves = [move]
        //     }
        // })

        if (moves.length > 1) {
          moves = filterInvalidMovements(state, _this4, moves);
        }

        if (moves.length > 0) {
          action.move = moves[Math.floor(Math.random() * moves.length)];
        }

        _this4.direction = {
          "x": action.move.x,
          "y": action.move.y
        };
        return action;
      });
    }
  },
  "red_snake": {
    "title": "Red Snake",
    "description": "Ssssss",
    "hasCollision": true,
    "images": {
      "standard": __webpack_require__(39)
    },
    "reaction": function reaction(state) {
      var _this5 = this;

      var entity = this;
      StandardReaction(state, entity, function () {
        var action = {
          "move": {
            "x": 0,
            "y": 0
          }
        };

        if (entity.direction == undefined) {
          entity.direction = Object.keys(data_directions_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
          entity.direction = entity.direction[Math.floor(Math.random() * entity.direction.length)];
          entity.direction = entity.direction.split("x");
          entity.direction = {
            "x": parseInt(entity.direction[0]),
            "y": parseInt(entity.direction[1])
          };
        }

        action.move.x = entity.direction.x; // * entity.speed

        action.move.y = entity.direction.y; // * entity.speed

        var x = entity.position.x + action.move.x;
        var y = entity.position.y + action.move.y;
        objdict__WEBPACK_IMPORTED_MODULE_0__["forEach"](state.entities, function (otherEntity) {
          if (entity != otherEntity && otherEntity.isDead != true && otherEntity.hasCollision == true && x == otherEntity.position.x && y == otherEntity.position.y) {
            entity.direction.x *= -1;
            entity.direction.y *= -1;
          }
        });
        var tile = state.world.tiles[x + "x" + y];

        if (tile != undefined && tile.collision == true) {
          _this5.direction.x *= -1;
          _this5.direction.y *= -1;
        }

        return action;
      });
    }
  },
  "blue_snake": {
    "title": "Blue Snake",
    "description": "Ssssss",
    "hasCollision": true,
    "images": {
      "standard": __webpack_require__(39)
    },
    "health": 2,
    "reaction": function reaction(state) {
      var _this6 = this;

      var entity = this;
      StandardReaction(state, entity, function () {
        var action = {
          "move": {
            "x": 0,
            "y": 0
          }
        };

        if (entity.direction == undefined) {
          entity.direction = Object.keys(data_directions_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
          entity.direction = entity.direction[Math.floor(Math.random() * entity.direction.length)];
          entity.direction = entity.direction.split("x");
          entity.direction = {
            "x": parseInt(entity.direction[0]),
            "y": parseInt(entity.direction[1])
          };
        }

        action.move.x = entity.direction.x; // * entity.speed

        action.move.y = entity.direction.y; // * entity.speed

        var x = entity.position.x + action.move.x;
        var y = entity.position.y + action.move.y;
        objdict__WEBPACK_IMPORTED_MODULE_0__["forEach"](state.entities, function (otherEntity) {
          if (entity != otherEntity && otherEntity.isDead != true && otherEntity.hasCollision == true && x == otherEntity.position.x && y == otherEntity.position.y) {
            entity.direction.x *= -1;
            entity.direction.y *= -1;
          }
        });
        var tile = state.world.tiles[x + "x" + y];

        if (tile != undefined && tile.collision == true) {
          _this6.direction.x *= -1;
          _this6.direction.y *= -1;
        }

        return action;
      });
    }
  }
};

function StandardReaction(state, entity, getActionFromAI) {
  if (Entity.isDead(entity)) return;
  if (Entity.isInCamera(state, entity) == false) return;
  var action = getActionFromAI() || {};
  action.move = action.move || {};
  action.move.x = action.move.x || 0;
  action.move.y = action.move.y || 0;
  entity.isAttacking = false; // COLLISION WITH OTHER ENTITIES

  objdict__WEBPACK_IMPORTED_MODULE_0__["forEach"](state.entities, function (otherEntity) {
    if (entity != otherEntity && otherEntity.isDead != true && otherEntity.hasCollision == true && entity.position.x + action.move.x == otherEntity.position.x && entity.position.y + action.move.y == otherEntity.position.y) {
      if (otherEntity.key == "player") {
        entity.isAttacking = true;
        otherEntity.handleAttacked(state);
      }

      action.move.x = 0;
      action.move.y = 0;
    }
  }); // COLLISION WITH MAP

  var x = entity.position.x + action.move.x;
  var y = entity.position.y + action.move.y;
  var tile = state.world.tiles[x + "x" + y];

  if (tile != undefined && tile.collision == true) {
    action.move.x = 0;
    action.move.y = 0;
  }

  entity.position.x += action.move.x;
  entity.position.y += action.move.y;
}

function filterInvalidMovements(state, entity, moves) {
  return moves.filter(function (move) {
    var x = entity.position.x + (move.x || 0);
    var y = entity.position.y + (move.y || 0);
    objdict__WEBPACK_IMPORTED_MODULE_0__["forEach"](state.entities, function (otherEntity) {
      if (entity != otherEntity && otherEntity.isDead != true && otherEntity.hasCollision == true && otherEntity.key == "player" // THE ONLY ENTITY IT'LL RUN INTO
      && x == otherEntity.position.x && y == otherEntity.position.y) {
        return false;
      }
    });
    var tile = state.world.tiles[x + "x" + y];

    if (tile != undefined && tile.collision == true) {
      return false;
    }

    return true;
  });
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "-1x0": "west",
  "1x0": "east",
  "0x-1": "north",
  "0x1": "south"
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "welcome": {
    "dialogue": [["Come closer.", "Take hold of me", "and wield true power!"]]
  },
  "sword1": {
    "dialogue": [["My true strength lies dormant.", "Seek the shards of dawn to reclaim my edge."]]
  },
  "...": {
    "dialogue": [["..."]]
  },
  "test": {
    "dialogue": [["Take caution, seeker.", "This land knows peace, but feral beasts still roam these woods."], ["Reclaim my power from them."], ["They know not the true nature of these trinkets,", "but they guard them with their life."]]
  },
  "finalshard": {
    "dialogue": [["You have reclaimed my full strength!", "I thank you, seeker."], ["You must now return me to the pedestal from which you found me..."]]
  },
  "sword2": {
    "dialogue": [["... I shall rest here."], ["My strength is of no use during these times of peace.", "It is my fate to lie dormant, lost to time..."], ["But one day, a courageous warrior will take up my", "blade and wield my true power against the foes of darkness."], ["They will have your stewardship to thank at such time."], // {"type": "pause"},
    ["Thank you, brave wanderer."]],
    "goto": "CreditsScreen" // THIS SHOULD BE ANOTHER SCRIPT NODE?? LIKE PAUSE
    // THIS WILL TELEPORT YOU TO THIS SCREEN AFTER THE DIALOGUE FINISHES

  }
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9fedbeeb5e578fb9806c615ffb10ac91.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0464603c3b0067d676c93aa705e16b15.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9edf8ad89007f07cd20bdce9b376fb46.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2f747899813e947f0a270a4d19ffeebf.png";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fcafd3ecf40a73701c526c473558861b.png";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d08158709f0fb8543824debe4c0eeab5.png";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "39eb68005417cc5a38ef96657faabfdd.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "09d68d8cc2370243481e77a9dcbb1d44.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ea2ce463d2c051335a8b38e95956cc3c.png";

/***/ }),
/* 40 */
/***/ (function(module) {

module.exports = JSON.parse("{\"compressionlevel\":-1,\"editorsettings\":{\"export\":{\"target\":\".\"}},\"height\":60,\"infinite\":false,\"layers\":[{\"data\":[91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91],\"height\":60,\"id\":22,\"name\":\"floor\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":50,\"x\":0,\"y\":0},{\"data\":[59,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,57,59,55,55,55,55,57,59,55,55,55,55,55,55,55,55,57,59,55,55,55,55,55,55,55,55,57,61,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,60,61,68,68,68,68,60,61,68,68,68,68,68,68,68,68,60,61,68,68,68,68,68,68,68,68,60,61,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,61,0,0,0,0,56,58,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,0,0,0,0,89,88,88,90,0,0,0,0,0,0,60,61,0,0,0,0,69,70,0,0,0,0,0,0,0,0,60,61,0,0,63,62,62,65,0,0,60,61,0,0,0,0,0,0,0,0,0,0,0,89,88,88,88,88,90,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,61,0,0,56,55,57,61,0,0,60,61,0,0,0,0,0,0,0,0,0,0,0,89,88,88,88,88,90,0,0,0,0,0,60,61,0,88,0,0,0,0,0,0,0,0,0,0,0,0,56,58,0,0,69,70,60,61,0,0,60,61,0,0,0,0,0,0,0,0,0,0,0,0,89,88,88,90,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,0,0,0,0,0,0,71,72,0,0,0,0,60,61,0,0,60,61,0,0,0,89,90,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,0,0,0,0,0,0,69,70,0,0,0,0,60,61,0,0,60,61,0,0,89,88,88,90,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,61,0,0,0,0,63,65,0,0,0,0,0,0,0,0,0,0,0,0,63,62,34,61,0,0,60,61,0,0,89,88,88,90,0,0,63,62,62,62,65,0,0,63,62,62,62,62,62,62,64,66,62,62,62,62,34,34,62,62,62,62,62,62,62,62,62,62,62,62,34,34,34,61,0,0,60,61,0,0,89,88,88,90,0,0,60,34,55,55,58,0,0,56,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,58,0,0,60,61,0,0,89,88,88,90,0,0,60,34,68,68,68,0,0,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,70,0,0,60,61,0,0,0,89,90,0,0,0,60,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,34,0,0,0,0,88,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,63,65,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,34,0,0,88,0,0,88,0,0,0,0,0,0,0,0,0,84,83,83,83,83,83,83,86,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,84,80,73,73,73,73,73,73,78,86,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,34,0,88,0,88,0,0,88,0,0,0,0,0,0,0,81,73,73,73,73,73,73,73,73,82,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,81,73,73,73,73,73,73,73,73,82,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,34,62,62,65,0,0,63,62,62,34,34,62,62,62,62,62,62,62,62,62,65,0,0,0,0,81,73,73,73,73,73,73,73,73,82,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,59,55,55,58,0,0,56,55,55,34,34,34,34,34,34,59,55,55,55,57,61,0,0,0,0,81,73,73,73,73,73,73,73,73,82,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,61,68,68,70,0,0,69,68,68,60,34,34,34,34,59,58,68,68,68,60,61,0,0,0,0,81,73,73,73,73,73,73,73,73,82,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,34,34,34,59,58,70,0,0,0,60,61,0,0,0,0,81,73,73,73,73,73,73,73,73,82,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,34,34,59,58,70,0,0,0,0,56,58,0,0,0,0,77,87,73,73,73,73,73,73,85,79,0,0,0,0,60,66,62,62,62,62,62,62,62,62,64,66,62,62,62,62,62,62,62,62,34,34,59,58,70,0,0,0,0,0,69,70,0,0,0,0,0,77,76,76,76,76,76,76,79,0,0,0,0,0,60,34,55,57,34,59,55,55,55,57,34,59,34,34,34,34,34,34,34,34,34,59,58,70,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,61,69,56,55,58,68,68,68,56,57,61,68,68,68,68,68,68,68,68,60,61,70,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,61,0,69,68,70,0,0,0,69,60,61,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,63,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,3,0,0,60,66,62,62,65,0,0,63,62,62,64,66,65,0,0,0,0,0,0,63,34,34,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,34,61,0,0,0,0,0,0,0,0,60,59,55,55,58,0,0,56,55,55,57,59,58,0,0,0,0,0,0,56,34,59,55,55,55,55,55,55,55,55,57,34,55,55,55,55,55,55,55,55,55,58,0,0,0,0,0,0,0,0,60,61,68,68,70,0,0,69,68,68,60,61,70,0,0,0,0,0,0,69,56,58,68,68,68,68,68,68,68,68,60,61,68,68,68,68,68,68,68,68,68,70,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,69,70,0,0,0,0,0,0,0,0,56,58,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,0,0,0,18,0,18,0,0,0,0,69,70,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,89,88,88,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,56,58,0,0,0,0,0,0,0,0,0,0,0,18,0,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,88,88,90,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,69,70,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,63,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,63,65,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,61,0,0,0,63,62,62,62,62,62,62,62,62,62,62,62,62,62,62,34,34,62,62,65,0,0,63,62,62,34,34,62,62,62,62,62,62,62,62,62,62,62,62,62,65,0,0,63,62,64,61,0,0,0,60,34,55,55,55,55,55,55,55,55,55,55,55,55,55,34,59,55,55,58,0,0,56,34,34,34,34,34,55,55,57,59,55,55,57,34,34,34,55,55,58,0,0,56,57,34,61,0,0,0,60,61,68,68,68,68,68,68,68,68,68,68,68,68,68,60,61,68,68,70,0,0,69,56,34,34,34,58,0,0,60,61,68,68,56,34,34,58,68,68,70,0,0,69,56,57,61,0,0,0,60,61,0,0,0,0,0,0,0,0,0,0,0,0,0,56,58,0,0,0,0,0,0,69,56,34,61,70,0,0,56,58,0,0,69,56,58,70,0,0,0,0,0,0,69,60,61,0,0,0,60,61,0,0,0,0,0,0,0,0,0,0,0,0,0,69,70,0,0,0,0,0,0,0,69,56,58,0,0,0,69,70,0,0,0,69,70,0,0,0,0,0,0,0,0,60,61,0,0,0,60,66,62,62,62,62,62,62,62,62,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,69,70,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,60,61,0,0,0,56,55,55,55,55,55,55,55,55,55,58,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,60,61,0,0,0,69,68,68,68,68,68,68,68,68,68,70,0,0,0,0,63,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,63,65,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,63,64,61,0,0,0,0,0,0,0,0,63,65,0,0,0,63,65,0,0,0,60,61,0,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,63,64,34,61,0,0,0,0,0,0,0,0,60,66,65,0,0,60,61,0,0,63,64,66,65,0,0,0,0,0,0,0,60,66,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,62,34,34,34,34,65,0,0,63,62,62,62,62,34,34,66,62,62,64,66,62,62,64,34,34,66,62,62,62,62,62,62,62,64,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,58,0,0,56,55,55,55,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,61,70,0,0,69,68,68,68,68,60,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,61,0,0,0,0,0,0,0,0,60,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,61,0,0,0,63,65,0,0,0,60,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,61,0,0,0,56,58,0,0,0,60,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,61,0,0,0,69,70,0,0,0,60,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,61,0,0,0,0,0,0,0,0,60,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,61,0,0,0,0,0,0,0,0,60,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,61,0,0,0,0,0,0,0,0,60,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,66,62,62,62,62,62,62,62,62,64,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34],\"height\":60,\"id\":6,\"name\":\"layer1\",\"opacity\":1,\"properties\":[{\"name\":\"Stack\",\"type\":\"int\",\"value\":-2}],\"type\":\"tilelayer\",\"visible\":true,\"width\":50,\"x\":0,\"y\":0},{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,75,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,74,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,75,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,74,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,42,42,42,42,42,42,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,35,35,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,52,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":60,\"id\":21,\"name\":\"layer2\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":50,\"x\":0,\"y\":0},{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":60,\"id\":4,\"name\":\"data:collision\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":50,\"x\":0,\"y\":0},{\"draworder\":\"topdown\",\"id\":15,\"name\":\"data:entities\",\"objects\":[{\"gid\":8,\"height\":16,\"id\":86,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":832,\"y\":160},{\"gid\":8,\"height\":16,\"id\":87,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":64,\"y\":736},{\"gid\":8,\"height\":16,\"id\":91,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":224,\"y\":768},{\"gid\":8,\"height\":16,\"id\":94,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":224,\"y\":1376},{\"gid\":8,\"height\":16,\"id\":96,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":1184,\"y\":896},{\"gid\":8,\"height\":16,\"id\":97,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":1408,\"y\":736},{\"gid\":8,\"height\":16,\"id\":98,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":544,\"y\":736},{\"gid\":8,\"height\":16,\"id\":99,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":832,\"y\":1120},{\"gid\":8,\"height\":16,\"id\":101,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":1536,\"y\":1568},{\"gid\":6,\"height\":18,\"id\":102,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":736,\"y\":1216},{\"gid\":6,\"height\":18,\"id\":103,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":864,\"y\":1216},{\"gid\":10,\"height\":16,\"id\":111,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":384,\"y\":1408},{\"gid\":10,\"height\":16,\"id\":112,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":448,\"y\":1376},{\"gid\":12,\"height\":18,\"id\":113,\"name\":\"\",\"properties\":[{\"name\":\"direction\",\"type\":\"string\",\"value\":\"south\"}],\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1152,\"y\":1344},{\"gid\":12,\"height\":18,\"id\":114,\"name\":\"\",\"properties\":[{\"name\":\"direction\",\"type\":\"string\",\"value\":\"north\"}],\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1056,\"y\":1568},{\"gid\":11,\"height\":18,\"id\":117,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":928,\"y\":1472},{\"gid\":11,\"height\":18,\"id\":118,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":928,\"y\":1504},{\"gid\":11,\"height\":18,\"id\":119,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":640,\"y\":1472},{\"gid\":11,\"height\":18,\"id\":120,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":640,\"y\":1440},{\"gid\":11,\"height\":18,\"id\":121,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":768,\"y\":1312},{\"gid\":11,\"height\":18,\"id\":123,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":800,\"y\":1312},{\"gid\":11,\"height\":18,\"id\":124,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1024,\"y\":1088},{\"gid\":11,\"height\":18,\"id\":125,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1024,\"y\":1216},{\"gid\":11,\"height\":18,\"id\":130,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1184,\"y\":1088},{\"gid\":11,\"height\":18,\"id\":131,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1184,\"y\":1216},{\"gid\":11,\"height\":18,\"id\":132,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":992,\"y\":832},{\"gid\":11,\"height\":18,\"id\":133,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1024,\"y\":864},{\"gid\":11,\"height\":18,\"id\":134,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":992,\"y\":928},{\"gid\":11,\"height\":18,\"id\":135,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1056,\"y\":896},{\"gid\":11,\"height\":18,\"id\":137,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1056,\"y\":928},{\"gid\":11,\"height\":18,\"id\":138,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1056,\"y\":832},{\"gid\":11,\"height\":18,\"id\":139,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1120,\"y\":896},{\"gid\":11,\"height\":18,\"id\":140,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1120,\"y\":800},{\"gid\":11,\"height\":18,\"id\":141,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1120,\"y\":736},{\"gid\":11,\"height\":18,\"id\":142,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1152,\"y\":704},{\"gid\":11,\"height\":18,\"id\":143,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1184,\"y\":736},{\"gid\":11,\"height\":18,\"id\":144,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1152,\"y\":832},{\"gid\":11,\"height\":18,\"id\":145,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1216,\"y\":800},{\"gid\":11,\"height\":18,\"id\":146,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1184,\"y\":768},{\"gid\":11,\"height\":18,\"id\":147,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1216,\"y\":864},{\"gid\":11,\"height\":18,\"id\":148,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1152,\"y\":928},{\"gid\":11,\"height\":18,\"id\":149,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1216,\"y\":928},{\"gid\":6,\"height\":18,\"id\":151,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1120,\"y\":928},{\"gid\":6,\"height\":18,\"id\":152,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1216,\"y\":832},{\"gid\":6,\"height\":18,\"id\":153,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1152,\"y\":768},{\"gid\":9,\"height\":16,\"id\":157,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":864,\"y\":1856},{\"gid\":10,\"height\":16,\"id\":160,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":224,\"y\":896},{\"gid\":10,\"height\":16,\"id\":161,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":64,\"y\":896},{\"gid\":16,\"height\":18,\"id\":162,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1184,\"y\":864},{\"gid\":16,\"height\":18,\"id\":163,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":384,\"y\":288},{\"gid\":16,\"height\":18,\"id\":164,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":544,\"y\":256},{\"gid\":16,\"height\":18,\"id\":165,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":64,\"y\":480},{\"gid\":16,\"height\":18,\"id\":166,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":224,\"y\":576},{\"gid\":16,\"height\":18,\"id\":167,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":128,\"y\":544},{\"gid\":15,\"height\":18,\"id\":168,\"name\":\"\",\"properties\":[{\"name\":\"direction\",\"type\":\"string\",\"value\":\"west\"}],\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1408,\"y\":224},{\"gid\":12,\"height\":18,\"id\":169,\"name\":\"\",\"properties\":[{\"name\":\"direction\",\"type\":\"string\",\"value\":\"east\"}],\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1344,\"y\":256},{\"gid\":12,\"height\":18,\"id\":170,\"name\":\"\",\"properties\":[{\"name\":\"direction\",\"type\":\"string\",\"value\":\"south\"}],\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1024,\"y\":96},{\"gid\":12,\"height\":18,\"id\":171,\"name\":\"\",\"properties\":[{\"name\":\"direction\",\"type\":\"string\",\"value\":\"north\"}],\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1056,\"y\":288},{\"gid\":12,\"height\":18,\"id\":178,\"name\":\"\",\"properties\":[{\"name\":\"direction\",\"type\":\"string\",\"value\":\"north\"}],\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1024,\"y\":288},{\"gid\":12,\"height\":18,\"id\":179,\"name\":\"\",\"properties\":[{\"name\":\"direction\",\"type\":\"string\",\"value\":\"south\"}],\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1088,\"y\":96},{\"gid\":12,\"height\":18,\"id\":180,\"name\":\"\",\"properties\":[{\"name\":\"direction\",\"type\":\"string\",\"value\":\"north\"}],\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1120,\"y\":288},{\"gid\":12,\"height\":18,\"id\":181,\"name\":\"\",\"properties\":[{\"name\":\"direction\",\"type\":\"string\",\"value\":\"south\"}],\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1440,\"y\":1504},{\"gid\":12,\"height\":18,\"id\":183,\"name\":\"\",\"properties\":[{\"name\":\"direction\",\"type\":\"string\",\"value\":\"west\"}],\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1536,\"y\":1440},{\"gid\":12,\"height\":18,\"id\":184,\"name\":\"\",\"properties\":[{\"name\":\"direction\",\"type\":\"string\",\"value\":\"east\"}],\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1344,\"y\":928},{\"gid\":10,\"height\":16,\"id\":185,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":1120,\"y\":1120},{\"gid\":10,\"height\":16,\"id\":186,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":448,\"y\":1120},{\"gid\":10,\"height\":16,\"id\":188,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":416,\"y\":448},{\"gid\":10,\"height\":16,\"id\":191,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":544,\"y\":448},{\"gid\":12,\"height\":18,\"id\":193,\"name\":\"\",\"properties\":[{\"name\":\"direction\",\"type\":\"string\",\"value\":\"east\"}],\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":448,\"y\":896},{\"gid\":6,\"height\":18,\"id\":194,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1408,\"y\":1088},{\"gid\":6,\"height\":18,\"id\":195,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1504,\"y\":1184},{\"gid\":6,\"height\":18,\"id\":196,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":64,\"y\":1088},{\"gid\":6,\"height\":18,\"id\":197,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":192,\"y\":1152},{\"gid\":6,\"height\":18,\"id\":198,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":64,\"y\":1536},{\"gid\":6,\"height\":18,\"id\":200,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1376,\"y\":448},{\"gid\":6,\"height\":18,\"id\":201,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1504,\"y\":544},{\"gid\":6,\"height\":18,\"id\":202,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1408,\"y\":576},{\"gid\":13,\"height\":16,\"id\":203,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":480,\"y\":544},{\"gid\":5,\"height\":18,\"id\":204,\"name\":\"\",\"properties\":[{\"name\":\"key\",\"type\":\"string\",\"value\":\"player\"}],\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":768,\"y\":1440},{\"gid\":6,\"height\":18,\"id\":205,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":1376,\"y\":1216},{\"gid\":6,\"height\":18,\"id\":206,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":18,\"x\":96,\"y\":1184},{\"gid\":1,\"height\":16,\"id\":207,\"name\":\"\",\"properties\":[{\"name\":\"ScriptKey\",\"type\":\"string\",\"value\":\"test\"}],\"rotation\":0,\"type\":\"dialogue\",\"visible\":true,\"width\":16,\"x\":960,\"y\":1504},{\"gid\":1,\"height\":16,\"id\":209,\"name\":\"\",\"properties\":[{\"name\":\"ScriptKey\",\"type\":\"string\",\"value\":\"test\"}],\"rotation\":0,\"type\":\"dialogue\",\"visible\":true,\"width\":16,\"x\":800,\"y\":1280},{\"gid\":1,\"height\":16,\"id\":210,\"name\":\"\",\"properties\":[{\"name\":\"ScriptKey\",\"type\":\"string\",\"value\":\"test\"}],\"rotation\":0,\"type\":\"dialogue\",\"visible\":true,\"width\":16,\"x\":768,\"y\":1280},{\"gid\":1,\"height\":16,\"id\":211,\"name\":\"\",\"properties\":[{\"name\":\"ScriptKey\",\"type\":\"string\",\"value\":\"test\"}],\"rotation\":0,\"type\":\"dialogue\",\"visible\":true,\"width\":16,\"x\":608,\"y\":1472},{\"gid\":1,\"height\":16,\"id\":212,\"name\":\"\",\"properties\":[{\"name\":\"ScriptKey\",\"type\":\"string\",\"value\":\"test\"}],\"rotation\":0,\"type\":\"dialogue\",\"visible\":true,\"width\":16,\"x\":960,\"y\":1472},{\"gid\":1,\"height\":16,\"id\":213,\"name\":\"\",\"properties\":[{\"name\":\"ScriptKey\",\"type\":\"string\",\"value\":\"test\"}],\"rotation\":0,\"type\":\"dialogue\",\"visible\":true,\"width\":16,\"x\":608,\"y\":1440},{\"gid\":1,\"height\":16,\"id\":214,\"name\":\"\",\"properties\":[{\"name\":\"ScriptKey\",\"type\":\"string\",\"value\":\"welcome\"}],\"rotation\":0,\"type\":\"dialogue\",\"visible\":true,\"width\":16,\"x\":704,\"y\":1632},{\"gid\":1,\"height\":16,\"id\":216,\"name\":\"\",\"properties\":[{\"name\":\"ScriptKey\",\"type\":\"string\",\"value\":\"welcome\"}],\"rotation\":0,\"type\":\"dialogue\",\"visible\":true,\"width\":16,\"x\":736,\"y\":1632}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":true,\"x\":0,\"y\":0}],\"nextlayerid\":23,\"nextobjectid\":218,\"orientation\":\"orthogonal\",\"properties\":[{\"name\":\"dialogue\",\"type\":\"string\",\"value\":\"test\"}],\"renderorder\":\"right-down\",\"tiledversion\":\"1.4.2\",\"tileheight\":32,\"tilesets\":[{\"firstgid\":1,\"source\":\"tileset.json\"}],\"tilewidth\":32,\"type\":\"map\",\"version\":1.4,\"width\":50}");

/***/ }),
/* 41 */
/***/ (function(module) {

module.exports = JSON.parse("{\"columns\":0,\"editorsettings\":{\"export\":{\"format\":\"\",\"target\":\".\"}},\"grid\":{\"height\":1,\"orientation\":\"orthogonal\",\"width\":1},\"margin\":0,\"name\":\"tileset\",\"spacing\":0,\"terrains\":[{\"name\":\"grass\",\"tile\":54},{\"name\":\"rockwall\",\"tile\":54}],\"tilecount\":91,\"tiledversion\":\"1.4.2\",\"tileheight\":64,\"tiles\":[{\"id\":0,\"image\":\"../../assets/images/tiles/0.png\",\"imageheight\":16,\"imagewidth\":16,\"type\":\"collision\"},{\"id\":1,\"image\":\"../../assets/images/tiles/1.png\",\"imageheight\":16,\"imagewidth\":16},{\"id\":2,\"image\":\"../../assets/images/tiles/2.png\",\"imageheight\":16,\"imagewidth\":16,\"type\":\"collision\"},{\"id\":3,\"image\":\"../../assets/images/gravestone.png\",\"imageheight\":16,\"imagewidth\":16,\"type\":\"collision\"},{\"id\":4,\"image\":\"../../assets/images/adventurer.png\",\"imageheight\":18,\"imagewidth\":18,\"type\":\"adventurer\"},{\"id\":5,\"image\":\"../../assets/images/slime_alpha.png\",\"imageheight\":18,\"imagewidth\":18,\"type\":\"red_slime\"},{\"id\":6,\"image\":\"../../assets/images/slime_omega.png\",\"imageheight\":18,\"imagewidth\":18,\"type\":\"red_slime\"},{\"id\":7,\"image\":\"../../assets/images/collectible.png\",\"imageheight\":16,\"imagewidth\":16,\"type\":\"collectible\"},{\"id\":8,\"image\":\"../../assets/images/goal.png\",\"imageheight\":16,\"imagewidth\":16,\"type\":\"goal\"},{\"id\":9,\"image\":\"../../assets/images/bat_alpha.png\",\"imageheight\":16,\"imagewidth\":16,\"type\":\"red_bat\"},{\"id\":10,\"image\":\"../../assets/images/shrub.png\",\"imageheight\":18,\"imagewidth\":18,\"type\":\"shrub\"},{\"id\":11,\"image\":\"../../assets/images/snake.png\",\"imageheight\":18,\"imagewidth\":18,\"type\":\"red_snake\"},{\"id\":12,\"image\":\"../../assets/images/blue_bat_alpha.png\",\"imageheight\":16,\"imagewidth\":16,\"type\":\"blue_bat\"},{\"id\":13,\"image\":\"../../assets/images/blue_bat_omega.png\",\"imageheight\":16,\"imagewidth\":16,\"type\":\"blue_bat\"},{\"id\":14,\"image\":\"../../assets/images/blue_snake.png\",\"imageheight\":18,\"imagewidth\":18,\"type\":\"blue_snake\"},{\"id\":15,\"image\":\"../../assets/images/blue_slime_omega.png\",\"imageheight\":18,\"imagewidth\":18,\"type\":\"blue_slime\"},{\"id\":16,\"image\":\"../../assets/images/blue_slime_alpha.png\",\"imageheight\":18,\"imagewidth\":18,\"type\":\"blue_slime\"},{\"id\":17,\"image\":\"../../assets/images/tiles/brickwall.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":18,\"image\":\"../../assets/images/tiles/brickwall_left.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":19,\"image\":\"../../assets/images/tiles/brickwall_right.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":20,\"image\":\"../../assets/images/tiles/dirt.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":21,\"image\":\"../../assets/images/tiles/dirtborder_bottom.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":22,\"image\":\"../../assets/images/tiles/dirtborder_bottomleft.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":23,\"image\":\"../../assets/images/tiles/dirtborder_bottomleft_out.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":24,\"image\":\"../../assets/images/tiles/dirtborder_bottomright.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":25,\"image\":\"../../assets/images/tiles/dirtborder_bottomright_out.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":26,\"image\":\"../../assets/images/tiles/dirtborder_left.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":27,\"image\":\"../../assets/images/tiles/dirtborder_right.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":28,\"image\":\"../../assets/images/tiles/dirtborder_top.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":29,\"image\":\"../../assets/images/tiles/dirtborder_topleft.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":30,\"image\":\"../../assets/images/tiles/dirtborder_topleft_out.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":31,\"image\":\"../../assets/images/tiles/dirtborder_topright.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":32,\"image\":\"../../assets/images/tiles/dirtborder_topright_out.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":33,\"image\":\"../../assets/images/tiles/grass.png\",\"imageheight\":32,\"imagewidth\":32,\"terrain\":[0,0,0,0],\"type\":\"collision\"},{\"id\":34,\"image\":\"../../assets/images/tiles/grassborder_bottom.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":35,\"image\":\"../../assets/images/tiles/grassborder_bottomleft.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":36,\"image\":\"../../assets/images/tiles/grassborder_bottomleft_out.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":37,\"image\":\"../../assets/images/tiles/grassborder_bottomright.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":38,\"image\":\"../../assets/images/tiles/grassborder_bottomright_out.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":39,\"image\":\"../../assets/images/tiles/grassborder_left.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":40,\"image\":\"../../assets/images/tiles/grassborder_right.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":41,\"image\":\"../../assets/images/tiles/grassborder_top.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":42,\"image\":\"../../assets/images/tiles/grassborder_topleft.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":43,\"image\":\"../../assets/images/tiles/grassborder_topleft_out.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":44,\"image\":\"../../assets/images/tiles/grassborder_topright.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":45,\"image\":\"../../assets/images/tiles/grassborder_topright_out.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":46,\"image\":\"../../assets/images/tiles/leaves_bunch1.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":47,\"image\":\"../../assets/images/tiles/leaves_bunch2.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":48,\"image\":\"../../assets/images/tiles/leaves_quad.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":49,\"image\":\"../../assets/images/tiles/leaves_tri.png\",\"imageheight\":32,\"imagewidth\":32},{\"id\":50,\"image\":\"../../assets/images/tiles/pedestal.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\" collision\"},{\"id\":51,\"image\":\"../../assets/images/tiles/pedestal_nosword.png\",\"imageheight\":64,\"imagewidth\":32,\"type\":\" collision\"},{\"id\":52,\"image\":\"../../assets/images/tiles/pedestal_swordonly.png\",\"imageheight\":64,\"imagewidth\":32,\"type\":\" collision\"},{\"id\":53,\"image\":\"../../assets/images/tiles/pedestal_withsword.png\",\"imageheight\":64,\"imagewidth\":32,\"type\":\" collision\"},{\"id\":54,\"image\":\"../../assets/images/tiles/rockplatform_bottom.png\",\"imageheight\":32,\"imagewidth\":32,\"terrain\":[0,0,-1,-1],\"type\":\"collision\"},{\"id\":55,\"image\":\"../../assets/images/tiles/rockplatform_bottomleft.png\",\"imageheight\":32,\"imagewidth\":32,\"terrain\":[-1,0,-1,-1],\"type\":\"collision\"},{\"id\":56,\"image\":\"../../assets/images/tiles/rockplatform_bottomleft_in.png\",\"imageheight\":32,\"imagewidth\":32,\"terrain\":[0,0,-1,0],\"type\":\"collision\"},{\"id\":57,\"image\":\"../../assets/images/tiles/rockplatform_bottomright.png\",\"imageheight\":32,\"imagewidth\":32,\"terrain\":[0,-1,-1,-1],\"type\":\"collision\"},{\"id\":58,\"image\":\"../../assets/images/tiles/rockplatform_bottomright_in.png\",\"imageheight\":32,\"imagewidth\":32,\"terrain\":[0,0,0,-1],\"type\":\"collision\"},{\"id\":59,\"image\":\"../../assets/images/tiles/rockplatform_left.png\",\"imageheight\":32,\"imagewidth\":32,\"terrain\":[-1,0,-1,0],\"type\":\"collision\"},{\"id\":60,\"image\":\"../../assets/images/tiles/rockplatform_right.png\",\"imageheight\":32,\"imagewidth\":32,\"terrain\":[0,-1,0,-1],\"type\":\"collision\"},{\"id\":61,\"image\":\"../../assets/images/tiles/rockplatform_top.png\",\"imageheight\":32,\"imagewidth\":32,\"terrain\":[-1,-1,0,0],\"type\":\"collision\"},{\"id\":62,\"image\":\"../../assets/images/tiles/rockplatform_topleft.png\",\"imageheight\":32,\"imagewidth\":32,\"terrain\":[-1,-1,-1,0],\"type\":\"collision\"},{\"id\":63,\"image\":\"../../assets/images/tiles/rockplatform_topleft_in.png\",\"imageheight\":32,\"imagewidth\":32,\"terrain\":[-1,0,0,0],\"type\":\"collision\"},{\"id\":64,\"image\":\"../../assets/images/tiles/rockplatform_topright.png\",\"imageheight\":32,\"imagewidth\":32,\"terrain\":[-1,-1,0,-1],\"type\":\"collision\"},{\"id\":65,\"image\":\"../../assets/images/tiles/rockplatform_topright_in.png\",\"imageheight\":32,\"imagewidth\":32,\"terrain\":[0,-1,0,0],\"type\":\"collision\"},{\"id\":66,\"image\":\"../../assets/images/tiles/rockwall.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":67,\"image\":\"../../assets/images/tiles/rockwall_bottom.png\",\"imageheight\":32,\"imagewidth\":32,\"terrain\":[1,1,1,1],\"type\":\"collision\"},{\"id\":68,\"image\":\"../../assets/images/tiles/rockwall_bottomleft.png\",\"imageheight\":32,\"imagewidth\":32,\"terrain\":[-1,1,-1,1],\"type\":\"collision\"},{\"id\":69,\"image\":\"../../assets/images/tiles/rockwall_bottomright.png\",\"imageheight\":32,\"imagewidth\":32,\"terrain\":[1,-1,1,-1],\"type\":\"collision\"},{\"id\":70,\"image\":\"../../assets/images/tiles/rockwall_left.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":71,\"image\":\"../../assets/images/tiles/rockwall_right.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":72,\"image\":\"../../assets/images/tiles/sea.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":73,\"image\":\"../../assets/images/tiles/sea_coral.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":74,\"image\":\"../../assets/images/tiles/sea_lilypads.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":75,\"image\":\"../../assets/images/tiles/seashore_bottom.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":76,\"image\":\"../../assets/images/tiles/seashore_bottomleft.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":77,\"image\":\"../../assets/images/tiles/seashore_bottomleft_out.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":78,\"image\":\"../../assets/images/tiles/seashore_bottomright.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":79,\"image\":\"../../assets/images/tiles/seashore_bottomright_out.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":80,\"image\":\"../../assets/images/tiles/seashore_left.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":81,\"image\":\"../../assets/images/tiles/seashore_right.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":82,\"image\":\"../../assets/images/tiles/seashore_top.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":83,\"image\":\"../../assets/images/tiles/seashore_topleft.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":84,\"image\":\"../../assets/images/tiles/seashore_topleft_out.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":85,\"image\":\"../../assets/images/tiles/seashore_topright.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":86,\"image\":\"../../assets/images/tiles/seashore_topright_out.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":87,\"image\":\"../../assets/images/tiles/woodplanks.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":88,\"image\":\"../../assets/images/tiles/woodplanks_left.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":89,\"image\":\"../../assets/images/tiles/woodplanks_right.png\",\"imageheight\":32,\"imagewidth\":32,\"type\":\"collision\"},{\"id\":90,\"image\":\"../../assets/images/tiles/sand.png\",\"imageheight\":32,\"imagewidth\":32}],\"tilewidth\":32,\"type\":\"tileset\",\"version\":1.4}");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./adventurer.png": 43,
	"./bat_alpha.png": 44,
	"./bat_omega.png": 45,
	"./blue_bat_alpha.png": 46,
	"./blue_bat_omega.png": 47,
	"./blue_slime_alpha.png": 48,
	"./blue_slime_omega.png": 49,
	"./blue_snake.png": 50,
	"./char_bat.png": 38,
	"./char_main.png": 32,
	"./char_slime.png": 37,
	"./char_snake.png": 39,
	"./collectible.png": 31,
	"./goal.png": 51,
	"./gravestone.png": 33,
	"./shrub.png": 34,
	"./slime_alpha.png": 52,
	"./slime_omega.png": 53,
	"./snake.png": 54,
	"./tiles/0.png": 55,
	"./tiles/1.png": 56,
	"./tiles/2.png": 57,
	"./tiles/brickwall.png": 58,
	"./tiles/brickwall_left.png": 59,
	"./tiles/brickwall_right.png": 60,
	"./tiles/dirt.png": 61,
	"./tiles/dirtborder_bottom.png": 62,
	"./tiles/dirtborder_bottomleft.png": 63,
	"./tiles/dirtborder_bottomleft_out.png": 64,
	"./tiles/dirtborder_bottomright.png": 65,
	"./tiles/dirtborder_bottomright_out.png": 66,
	"./tiles/dirtborder_left.png": 67,
	"./tiles/dirtborder_right.png": 68,
	"./tiles/dirtborder_top.png": 69,
	"./tiles/dirtborder_topleft.png": 70,
	"./tiles/dirtborder_topleft_out.png": 71,
	"./tiles/dirtborder_topright.png": 72,
	"./tiles/dirtborder_topright_out.png": 73,
	"./tiles/grass.png": 74,
	"./tiles/grassborder_bottom.png": 75,
	"./tiles/grassborder_bottomleft.png": 76,
	"./tiles/grassborder_bottomleft_out.png": 77,
	"./tiles/grassborder_bottomright.png": 78,
	"./tiles/grassborder_bottomright_out.png": 79,
	"./tiles/grassborder_left.png": 80,
	"./tiles/grassborder_right.png": 81,
	"./tiles/grassborder_top.png": 82,
	"./tiles/grassborder_topleft.png": 83,
	"./tiles/grassborder_topleft_out.png": 84,
	"./tiles/grassborder_topright.png": 85,
	"./tiles/grassborder_topright_out.png": 86,
	"./tiles/leaves_bunch1.png": 87,
	"./tiles/leaves_bunch2.png": 88,
	"./tiles/leaves_quad.png": 89,
	"./tiles/leaves_tri.png": 90,
	"./tiles/pedestal.png": 36,
	"./tiles/pedestal_nosword.png": 91,
	"./tiles/pedestal_swordonly.png": 92,
	"./tiles/pedestal_withsword.png": 35,
	"./tiles/rockplatform_bottom.png": 93,
	"./tiles/rockplatform_bottomleft.png": 94,
	"./tiles/rockplatform_bottomleft_in.png": 95,
	"./tiles/rockplatform_bottomright.png": 96,
	"./tiles/rockplatform_bottomright_in.png": 97,
	"./tiles/rockplatform_left.png": 98,
	"./tiles/rockplatform_right.png": 99,
	"./tiles/rockplatform_top.png": 100,
	"./tiles/rockplatform_topleft.png": 101,
	"./tiles/rockplatform_topleft_in.png": 102,
	"./tiles/rockplatform_topright.png": 103,
	"./tiles/rockplatform_topright_in.png": 104,
	"./tiles/rockwall.png": 105,
	"./tiles/rockwall_bottom.png": 106,
	"./tiles/rockwall_bottomleft.png": 107,
	"./tiles/rockwall_bottomright.png": 108,
	"./tiles/rockwall_left.png": 109,
	"./tiles/rockwall_right.png": 110,
	"./tiles/sand.png": 111,
	"./tiles/sea.png": 112,
	"./tiles/sea_coral.png": 113,
	"./tiles/sea_lilypads.png": 114,
	"./tiles/seashore_bottom.png": 115,
	"./tiles/seashore_bottomleft.png": 116,
	"./tiles/seashore_bottomleft_out.png": 117,
	"./tiles/seashore_bottomright.png": 118,
	"./tiles/seashore_bottomright_out.png": 119,
	"./tiles/seashore_left.png": 120,
	"./tiles/seashore_right.png": 121,
	"./tiles/seashore_top.png": 122,
	"./tiles/seashore_topleft.png": 123,
	"./tiles/seashore_topleft_out.png": 124,
	"./tiles/seashore_topright.png": 125,
	"./tiles/seashore_topright_out.png": 126,
	"./tiles/woodplanks.png": 127,
	"./tiles/woodplanks_left.png": 128,
	"./tiles/woodplanks_right.png": 129,
	"./ui/heart-full-white.png": 130,
	"./ui/heart-full-yellow.png": 131,
	"./ui/heart-half-white.png": 132,
	"./ui/heart-half-yellow.png": 133,
	"./ui/heart-none-white.png": 134,
	"./ui/heart-none-yellow.png": 135,
	"./ui/keyboard.png": 136
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 42;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ff27ca3405bc70444409f138274b9fa6.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f5c7b676f22b54dda222e356513bb454.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "24b2ab7ec02f3ff4daeec0ee2c15b473.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "54e3bcf9319b8cce1a6ff9a720874683.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "63f722d8b7768a7d852c454e7dfbf833.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "705ed10c4e482691c6a56986c61f35e4.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6d3072345168b77c9f4ecb078ec6c38a.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "909af23f484db97f4a617bebd2f2fd80.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "82b6cabe717c051ab4c1ca76f8084807.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "67e6355612749bdb32866842a0d0525a.png";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "77e28c59b7a24ca9a1cdf625be8270c4.png";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "722604fb6d0783abf330fe8a45557662.png";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c46e7e7b60fdef1c773821f984161995.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aab047d0c2faa414f78f114bba6485cf.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f49270d0a276797c299d001c5782cf7f.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "20acc37f27893bb3fb268490f182138b.png";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5b6c8fa4b519d9b0879c27b8d761c92f.png";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cedc977c24f19330e867824d3e956b68.png";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e6e9b3bef9baa6d66433e9f5dda88456.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "50dfa1b629c9fec32cf4bb7fb05109a4.png";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5627eb807ac1601cbe7787eb3f190a58.png";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7db8ef2494d291df5652ccd769557a99.png";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9400bd9f7e0e11aeb8427542d10f9f21.png";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f85230f0c6cb70662a87b3aca6d20415.png";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "21c1a555319703f4141eed496e48b86a.png";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "88196e6b1de2d8911c45cec19df9bd4f.png";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4c76a43996239018c73cfbf9bcd5d26c.png";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "562945a9d58a6ab96cdb6edfe9dbf687.png";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "38771e71e633ab5ff637d25f84f05d50.png";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "44e1c3b2b9f69a4d4560fd211ed5ed46.png";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "58a3353c07af0cbe17087e5388033254.png";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4aa887f68ca68c69da962a913ca5a4ce.png";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2f8813efe0d496c09aa071556f3917e3.png";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "45ce17a9302eff24f918710799cce7ee.png";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "31b4795d7fb4eccf35ab0f3079130fda.png";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9604b84da8c28bd702ade50f0a55cf79.png";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8366b8e26b7bd32555b638647d18050a.png";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2889affabac83dfd1fd0cae4f5f8bd98.png";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a727ac365d68d5e26346e0f0790fcaf7.png";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "84a0e4e45cc2dba08b6cf947e9f79b91.png";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ba989fbe0435c33c59a6f59c0594a3be.png";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ac4e0a9293ef54108d8a9937a2a4931c.png";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1a3758d5f80ce73dbcbc3c0aa44ea5e1.png";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "af33d06c7157878b453218a68a70a659.png";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cd3d10060848554f9d942879dfb61425.png";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eac3be655ab90e2687600c505ec8fd3c.png";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b846f8f80a960389baa9c0ceaf3492a5.png";

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f35d6bb0dc7f1b4beb05e94655083849.png";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4bf5f401cd050c63fa134ea1d1d7b176.png";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "698233be24ed0ce3921166fc90fc0dd3.png";

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4c3d52e7a9e0f41b81a9cd258c29b94b.png";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6b8e379a6598438f997d0205c1c4366b.png";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "48d961470acd03f6fb1dfb707b1dbdf7.png";

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2e12bff83b3f35e79d6d7dfd46099aed.png";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "66c84b6a04e55d96ed99e93c0dab57c0.png";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e4f19cb0146ad17b168eedf7f58059f2.png";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "89a58898b9e38f2b697e423bfa8d298f.png";

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e75ae80a8195e00f9fbb7e080635a6d7.png";

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c2dd1c5cfd057d3100244d6f5e59a4a4.png";

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "089285068d16319ab74590953fe867dc.png";

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "70c6b8ddd2734bb14a2ef5170bd3ac8a.png";

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6200876558bce3ab9f9dc8ce30cb2b54.png";

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2f00fc8248dde14d48aaff6b216d54ad.png";

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b3c3ded6294830440cc613a01890d574.png";

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dc2e9aa8c77ffb280f4873197ec19048.png";

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e4ac2e4c28aef6524a6be9766cddc193.png";

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7aff82c18772cf20db9842363fcf69e4.png";

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1f3ccd00b2aff53d399c522488c8e2fc.png";

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "48dde4241654dfb04fe7a1e0ddc11639.png";

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "df62d8a0b62f45699a9eb3f91a8dc119.png";

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "84cd7f3d34ca8ccbd7d80f6177548b26.png";

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6dd6029d71589587a1aa901bc92c2cfa.png";

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c1d87faeedb9df3349db45d6efb5afb8.png";

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dd8e5bbccfea3c49e789be078e6be3f2.png";

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ab6c460851e5d5c5b498e734f6a65365.png";

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "384f1215e2add588afbcb22fb667ba19.png";

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ac7c2f95d6a217820fe1aaa2a52d5a21.png";

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d361d82e4f58ce7e361a195045c9f459.png";

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "709ec973fa1dcae51983e87675b8119d.png";

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a071be2ba3c8773728a62ab4ac9dc1af.png";

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "beac2ef54256c455dfbcb19414c4fa76.png";

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7aa7c2ad7df9a222e355032a5e8a48eb.png";

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "33e732a18c06224e03f548cf1ba4c595.png";

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2f29c8ebaeb667b14d5a00f50d5a93ed.png";

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "861a5af957e3cd4fb32d8c58ba141be8.png";

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "03d31d336defbdd9c47d7025f8b48085.png";

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "34ede4de97447bd1ac76c533b68a3e2c.png";

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c445b7f6374a437c5506eed7a5d2e473.png";

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "20ab7de870ebb2ed76b36048e392691d.png";

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "79b27b5927cef6f02460a93f41f2aa84.png";

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7aa435c534e74880dd30deb358b472c0.png";

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dfef87f0bcb5ad87e0bafda937662040.png";

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "58a6382774d8a94cbd13ce1960976417.png";

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "07231bc69618323e334495f8e390947f.png";

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (["you died", "you died", "you died again", "you died", "you died", "pjsalt", "you died", "you died?", "what happened?", "you died", "press f", "you died", "ouch", "dang it", "not like this", "you died" // "rest in peace",
// "that's rough buddy",
// "everyone is dead",
// "you have died",
// "game over",
]);

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mount; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var models_App_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var views_Game_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(140);
/* harmony import */ var views_Mount_view_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(159);
/* harmony import */ var views_Mount_view_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(views_Mount_view_less__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Mount = /*#__PURE__*/function () {
  function Mount() {
    _classCallCheck(this, Mount);
  }

  _createClass(Mount, [{
    key: "render",
    value: function render() {
      return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
        className: "Mount"
      }, preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
        className: "Frame"
      }, preact__WEBPACK_IMPORTED_MODULE_0__["h"](Preload, null), this.screen));
    }
  }, {
    key: "screen",
    get: function get() {
      if (models_App_js__WEBPACK_IMPORTED_MODULE_1__["default"].screen == undefined) {
        return preact__WEBPACK_IMPORTED_MODULE_0__["h"](views_Game_view_js__WEBPACK_IMPORTED_MODULE_2__["default"], null);
      }

      if (models_App_js__WEBPACK_IMPORTED_MODULE_1__["default"].screen == "CreditsScreen") {
        return preact__WEBPACK_IMPORTED_MODULE_0__["h"](CreditsScreen, null);
      }
    }
  }]);

  return Mount;
}();



function Preload() {
  return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
    className: "Preload"
  }, preact__WEBPACK_IMPORTED_MODULE_0__["h"]("img", {
    src: __webpack_require__(43)
  }), preact__WEBPACK_IMPORTED_MODULE_0__["h"]("img", {
    src: __webpack_require__(33)
  }), preact__WEBPACK_IMPORTED_MODULE_0__["h"]("img", {
    src: __webpack_require__(52)
  }), preact__WEBPACK_IMPORTED_MODULE_0__["h"]("img", {
    src: __webpack_require__(53)
  }), preact__WEBPACK_IMPORTED_MODULE_0__["h"]("img", {
    src: __webpack_require__(130)
  }), preact__WEBPACK_IMPORTED_MODULE_0__["h"]("img", {
    src: __webpack_require__(132)
  }), preact__WEBPACK_IMPORTED_MODULE_0__["h"]("img", {
    src: __webpack_require__(134)
  }), preact__WEBPACK_IMPORTED_MODULE_0__["h"]("img", {
    src: __webpack_require__(136)
  }));
}

function CreditsScreen() {
  return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
    "class": "CreditsScreen"
  }, preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
    "class": "Fade"
  }), preact__WEBPACK_IMPORTED_MODULE_0__["h"]("h1", null, "Thanks for playing!!"), preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
    "class": "Credits"
  }, preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
    "class": "Credit"
  }, preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
    "class": "Name"
  }, "Nick Amlag"), preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
    "class": "Stuff"
  }, "Art, Writing")), preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
    "class": "Credit"
  }, preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
    "class": "Name"
  }, "Andrew Goodenough"), preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
    "class": "Stuff"
  }, "Code, Design"))));
}

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return n; });
var n,l,u,i,t,r,o={},f=[],e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(n,l){for(var u in l)n[u]=l[u];return n}function s(n){var l=n.parentNode;l&&l.removeChild(n)}function a(n,l,u){var i,t,r,o=arguments,f={};for(r in l)"key"==r?i=l[r]:"ref"==r?t=l[r]:f[r]=l[r];if(arguments.length>3)for(u=[u],r=3;r<arguments.length;r++)u.push(o[r]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(r in n.defaultProps)void 0===f[r]&&(f[r]=n.defaultProps[r]);return v(n,f,i,t,null)}function v(l,u,i,t,r){var o={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++n.__v:r};return null!=n.vnode&&n.vnode(o),o}function h(){return{current:null}}function y(n){return n.children}function p(n,l){this.props=n,this.context=l}function d(n,l){if(null==l)return n.__?d(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?d(n):null}function _(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return _(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!m.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(m)}function m(){for(var n;m.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,r,o;n.__d&&(r=(t=(l=n).__v).__e,(o=l.__P)&&(u=[],(i=c({},t)).__v=t.__v+1,T(o,t,i,l.__n,void 0!==o.ownerSVGElement,null!=t.__h?[r]:null,u,null==r?d(t):r,t.__h),j(u,t),t.__e!=r&&_(t)))})}function b(n,l,u,i,t,r,e,c,s,a){var h,p,_,k,m,b,w,A=i&&i.__k||f,P=A.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(y,{children:k},null,null,null):k.__b>0?v(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(_=A[h])||_&&k.key==_.key&&k.type===_.type)A[h]=void 0;else for(p=0;p<P;p++){if((_=A[p])&&k.key==_.key&&k.type===_.type){A[p]=void 0;break}_=null}T(n,k,_=_||o,t,r,e,c,s,a),m=k.__e,(p=k.ref)&&_.ref!=p&&(w||(w=[]),_.ref&&w.push(_.ref,null,k),w.push(p,k.__c||m,k)),null!=m?(null==b&&(b=m),"function"==typeof k.type&&null!=k.__k&&k.__k===_.__k?k.__d=s=g(k,s,n):s=x(n,k,_,A,m,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&_.__e==s&&s.parentNode!=n&&(s=d(_))}for(u.__e=b,h=P;h--;)null!=A[h]&&("function"==typeof u.type&&null!=A[h].__e&&A[h].__e==u.__d&&(u.__d=d(i,h+1)),L(A[h],A[h]));if(w)for(h=0;h<w.length;h++)I(w[h],w[++h],w[++h])}function g(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?g(t,l,u):x(u,t,t,n.__k,t.__e,l));return l}function w(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){w(n,l)}):l.push(n)),l}function x(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||t!=r||null==t.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(t),o=null;else{for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,r),o=r}return void 0!==o?o:t.nextSibling}function A(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||C(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||C(n,r,l[r],u[r],i)}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||e.test(l)?u:u+"px"}function C(n,l,u,i,t){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?H:$,r):n.removeEventListener(l,r?H:$,r);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function $(l){this.l[l.type+!1](n.event?n.event(l):l)}function H(l){this.l[l.type+!0](n.event?n.event(l):l)}function T(l,u,i,t,r,o,f,e,s){var a,v,h,d,_,k,m,g,w,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(s=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,w=(a=P.contextType)&&t[a.__c],x=a?w?w.props.value:a.__:t,i.__c?m=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new p(g,x),v.constructor=P,v.render=M),w&&w.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c({},v.__s)),c(v.__s,P.getDerivedStateFromProps(g,v.__s))),d=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,_,k)})}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=c(c({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type===y&&null==a.key?a.props.children:a,b(l,Array.isArray(A)?A:[A],u,i,t,r,o,f,e,s),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),m&&(v.__E=v.__=null),v.__e=!1}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=z(i.__e,u,i,t,r,o,f,s);(a=n.diffed)&&a(u)}catch(l){u.__v=null,(s||null!=o)&&(u.__e=e,u.__h=!!s,o[o.indexOf(e)]=null),n.__e(l,u,i)}}function j(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function z(n,l,u,i,t,r,e,c){var a,v,h,y,p=u.props,d=l.props,_=l.type,k=0;if("svg"===_&&(t=!0),null!=r)for(;k<r.length;k++)if((a=r[k])&&(a===n||(_?a.localName==_:3==a.nodeType))){n=a,r[k]=null;break}if(null==n){if(null===_)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),r=null,c=!1}if(null===_)p===d||c&&n.data===d||(n.data=d);else{if(r=r&&f.slice.call(n.childNodes),v=(p=u.props||o).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=r)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""))}if(A(n,d,p,t,c),h)l.__k=[];else if(k=l.props.children,b(n,Array.isArray(k)?k:[k],l,u,i,t&&"foreignObject"!==_,r,e,n.firstChild,c),null!=r)for(k=r.length;k--;)null!=r[k]&&s(r[k]);c||("value"in d&&void 0!==(k=d.value)&&(k!==n.value||"progress"===_&&!k)&&C(n,"value",k,p.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==n.checked&&C(n,"checked",k,p.checked,!1))}return n}function I(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function L(l,u,i){var t,r,o;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||I(t,null,u)),i||"function"==typeof l.type||(i=null!=(r=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(o=0;o<t.length;o++)t[o]&&L(t[o],u,i);null!=r&&s(r)}function M(n,l,u){return this.constructor(n,u)}function N(l,u,i){var t,r,e;n.__&&n.__(l,u),r=(t="function"==typeof i)?null:i&&i.__k||u.__k,e=[],T(u,l=(!t&&i||u).__k=a(y,null,[l]),r||o,o,void 0!==u.ownerSVGElement,!t&&i?[i]:r?null:u.firstChild?f.slice.call(u.childNodes):null,e,!t&&i?i:r?r.__e:u.firstChild,t),j(e,l)}function O(n,l){N(n,l,O)}function S(n,l,u){var i,t,r,o=arguments,f=c({},n.props);for(r in l)"key"==r?i=l[r]:"ref"==r?t=l[r]:f[r]=l[r];if(arguments.length>3)for(u=[u],r=3;r<arguments.length;r++)u.push(o[r]);return null!=u&&(f.children=u),v(n.type,f,i||n.key,t||n.ref,null)}function q(n,l){var u={__c:l="__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l}throw n},__v:0},l=function(n){return null!=n&&void 0===n.constructor},p.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof n&&(n=n(c({},u),this.props)),n&&c(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this))},p.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this))},p.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m.__r=0,r=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var objdict__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var models_App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var views_World_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(141);
/* harmony import */ var views_Entity_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(148);
/* harmony import */ var views_Camera_view_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(151);
/* harmony import */ var views_UI_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(154);
/* harmony import */ var views_Game_view_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(157);
/* harmony import */ var views_Game_view_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(views_Game_view_less__WEBPACK_IMPORTED_MODULE_7__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);
  }

  _createClass(Game, [{
    key: "render",
    value: function render() {
      return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
        className: this.className
      }, preact__WEBPACK_IMPORTED_MODULE_0__["h"](views_Camera_view_js__WEBPACK_IMPORTED_MODULE_5__["default"], null, preact__WEBPACK_IMPORTED_MODULE_0__["h"](views_World_view_js__WEBPACK_IMPORTED_MODULE_3__["default"], null), this.entities), preact__WEBPACK_IMPORTED_MODULE_0__["h"](views_UI_view_js__WEBPACK_IMPORTED_MODULE_6__["default"], null));
    }
  }, {
    key: "className",
    get: function get() {
      return ["Game", models_App_js__WEBPACK_IMPORTED_MODULE_2__["default"].game.state.hasEnded === true ? "hasEnded" : "", models_App_js__WEBPACK_IMPORTED_MODULE_2__["default"].game.isDemo === true ? "isDemo" : "", models_App_js__WEBPACK_IMPORTED_MODULE_2__["default"].game.isTutorial ? "isTutorial" : ""].join(" ");
    }
  }, {
    key: "entities",
    get: function get() {
      return Object.values(models_App_js__WEBPACK_IMPORTED_MODULE_2__["default"].game.state.entities).map(function (entity) {
        return preact__WEBPACK_IMPORTED_MODULE_0__["h"](views_Entity_view_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
          entity: entity,
          key: entity.key
        });
      });
    }
  }]);

  return Game;
}();



/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return World; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var models_App_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var views_World_view_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(142);
/* harmony import */ var views_World_view_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(views_World_view_less__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var World = /*#__PURE__*/function () {
  function World() {
    _classCallCheck(this, World);
  }

  _createClass(World, [{
    key: "render",
    value: function render() {
      if (models_App_js__WEBPACK_IMPORTED_MODULE_1__["default"].game.state.entities.player == undefined) return;
      return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
        "class": "World"
      }, preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
        "class": "Tiles"
      }, Object.values(models_App_js__WEBPACK_IMPORTED_MODULE_1__["default"].game.state.world.tiles).map(function (tile) {
        if (Math.abs(models_App_js__WEBPACK_IMPORTED_MODULE_1__["default"].game.state.entities.player.position.x - tile.position.x) > 12) return;
        if (Math.abs(models_App_js__WEBPACK_IMPORTED_MODULE_1__["default"].game.state.entities.player.position.y - tile.position.y) > 12) return;
        return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
          "class": "Tile",
          style: {
            "left": tile.position.x + "em",
            "top": tile.position.y + "em"
          }
        }, tile.images && tile.images.map(function (image) {
          return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
            "class": "Image",
            style: {
              "background-image": "url(" + image.source + ")"
            }
          });
        }));
      })));
    }
  }]);

  return World;
}();



/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(143);
            var content = __webpack_require__(144);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(145);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(146);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(147);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "* {\n  margin: 0px;\n  padding: 0px;\n  user-select: none;\n  box-sizing: border-box;\n  image-rendering: pixelated;\n}\n@font-face {\n  font-weight: 400;\n  font-family: \"tiny\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n}\n.World .Tiles .Tile {\n  width: 1em;\n  height: 1em;\n  position: absolute;\n}\n.World .Tiles .Tile .Image {\n  width: 1em;\n  height: 1em;\n  position: absolute;\n  background-size: contain;\n  background-image: center;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9167f1dbf5d8d9905aa5933a2fc45693.ttf";

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Entity; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var views_Entity_view_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(149);
/* harmony import */ var views_Entity_view_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(views_Entity_view_less__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Entity = /*#__PURE__*/function () {
  function Entity() {
    _classCallCheck(this, Entity);
  }

  _createClass(Entity, [{
    key: "render",
    value: function render() {
      return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
        className: "Entity",
        animation: this.animation,
        style: this.style
      });
    }
  }, {
    key: "animation",
    get: function get() {
      if (this.props.entity.getAnimation instanceof Function) {
        return this.props.entity.getAnimation();
      }
    }
  }, {
    key: "style",
    get: function get() {
      var style = {};

      if (this.props.entity.position) {
        style.top = this.props.entity.position.y + "em";
        style.left = this.props.entity.position.x + "em";
      }

      if (this.props.entity.images) {
        if (this.props.entity.getImage instanceof Function) {
          style.backgroundImage = "url(" + this.props.entity.getImage() + ")";
        } else {
          style.backgroundImage = "url(" + this.props.entity.images.standard + ")";
        }
      }

      if (this.props.entity.getOpacity instanceof Function) {
        style.opacity = this.props.entity.getOpacity();
      }

      if (this.props.entity.color) {
        style.backgroundColor = this.props.entity.color;
      }

      if (this.props.entity.opacity) {
        style.opacity = this.props.entity.opacity;
      }

      return style;
    }
  }]);

  return Entity;
}();



/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(143);
            var content = __webpack_require__(150);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(145);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Entity {\n  width: 1em;\n  height: 2em;\n  position: absolute;\n  margin-top: -1em;\n  transition-duration: 0.1s;\n  transition-property: top left opacity;\n  background-size: 1em;\n  background-position: center bottom;\n  background-repeat: no-repeat;\n}\n.Entity[animation=shake] {\n  animation-name: shake;\n  animation-duration: 0.1s;\n  animation-iteration-count: infinite;\n}\n.Entity[animation=ooze] {\n  animation-name: ooze;\n  animation-duration: 4s;\n  animation-iteration-count: infinite;\n}\n.Entity[animation=strike-east] {\n  animation-delay: 0.05s;\n  animation-duration: 0.25s;\n  animation-iteration-count: 1;\n  animation-name: strike-east;\n}\n.Entity[animation=strike-west] {\n  animation-delay: 0.05s;\n  animation-duration: 0.25s;\n  animation-iteration-count: 1;\n  animation-name: strike-west;\n}\n.Entity[animation=strike-north] {\n  animation-delay: 0.05s;\n  animation-duration: 0.25s;\n  animation-iteration-count: 1;\n  animation-name: strike-north;\n}\n.Entity[animation=strike-south] {\n  animation-delay: 0.05s;\n  animation-duration: 0.25s;\n  animation-iteration-count: 1;\n  animation-name: strike-south;\n}\n@keyframes strike-east {\n  0% {\n    transform: translateX(-0.25em) rotate(-25deg);\n  }\n  25% {\n    transform: translateX(0.5em) rotate(25deg);\n  }\n  100% {\n    transform: translateX(0em);\n  }\n}\n@keyframes strike-west {\n  0% {\n    transform: translateX(0.25em) rotate(25deg);\n  }\n  25% {\n    transform: translateX(-0.5em) rotate(-25deg);\n  }\n  100% {\n    transform: translateX(0em);\n  }\n}\n@keyframes strike-south {\n  0% {\n    transform: translateY(-0.25em) rotate(25deg);\n  }\n  25% {\n    transform: translateY(0.5em) rotate(-25deg);\n  }\n  100% {\n    transform: translateY(0em);\n  }\n}\n@keyframes strike-north {\n  0% {\n    transform: translateY(0.25em) rotate(-25deg);\n  }\n  25% {\n    transform: translateY(-0.5em) rotate(25deg);\n  }\n  100% {\n    transform: translateY(0em);\n  }\n}\n@keyframes shake {\n  0% {\n    transform: translateX(-0.025em);\n  }\n  50% {\n    transform: translateX(0.025em);\n  }\n  100% {\n    transform: translateX(-0.025em);\n  }\n}\n@keyframes ooze {\n  0% {\n    transform: scaleX(1.1) scaleY(0.9);\n  }\n  75% {\n    transform: scaleX(0.9) scaleY(1.1);\n  }\n  100% {\n    transform: scaleX(1.1) scaleY(0.9);\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Camera; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var models_App_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var views_Camera_view_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(152);
/* harmony import */ var views_Camera_view_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(views_Camera_view_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var data_frame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var CAMZONE_WIDTH = 10;
var CAMZONE_HEIGHT = 10;

var Camera = /*#__PURE__*/function () {
  function Camera() {
    _classCallCheck(this, Camera);
  }

  _createClass(Camera, [{
    key: "render",
    value: function render() {
      return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
        className: "Camera",
        style: this.style
      }, this.props.children);
    }
  }, {
    key: "style",
    get: function get() {
      var player = models_App_js__WEBPACK_IMPORTED_MODULE_1__["default"].game.state.entities.player;
      if (player == undefined) return;
      var x = Math.floor(player.position.x / CAMZONE_WIDTH) * CAMZONE_WIDTH;
      var y = Math.floor(player.position.y / CAMZONE_HEIGHT) * CAMZONE_HEIGHT;
      return {
        "left": -1 * x + "em",
        "top": -1 * y + "em"
      };
    }
  }]);

  return Camera;
}();



/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(143);
            var content = __webpack_require__(153);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(145);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Camera {\n  position: absolute;\n  transition-property: top left;\n  transition-duration: 0.5s;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var models_App_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var models_State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var views_UI_view_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(155);
/* harmony import */ var views_UI_view_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(views_UI_view_less__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var UI = /*#__PURE__*/function () {
  function UI() {
    _classCallCheck(this, UI);
  }

  _createClass(UI, [{
    key: "render",
    value: function render() {
      if (models_App_js__WEBPACK_IMPORTED_MODULE_1__["default"].game.state.entities.player == undefined) return;
      return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
        "class": "UI"
      }, preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
        "class": "hearts"
      }, this.hearts), preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
        "class": "score"
      }, this.score), preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
        "class": "flash"
      }, this.flash), preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
        "class": "title-banner"
      }, preact__WEBPACK_IMPORTED_MODULE_0__["h"]("span", null, "Enchiridion"), preact__WEBPACK_IMPORTED_MODULE_0__["h"]("span", {
        "class": "play-prompt"
      }, "Click to play!")), preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
        "class": "game-over-banner"
      }, preact__WEBPACK_IMPORTED_MODULE_0__["h"]("span", null, models_App_js__WEBPACK_IMPORTED_MODULE_1__["default"].game.state.entities.player.deathtext || "YOU HAVE PERISHED")), this.dialogue);
    }
  }, {
    key: "dialogue",
    get: function get() {
      if (models_App_js__WEBPACK_IMPORTED_MODULE_1__["default"].game.state.script != undefined) {
        return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
          "class": "Dialogue"
        }, models_App_js__WEBPACK_IMPORTED_MODULE_1__["default"].game.state.script.dialogue[0].map(function (text) {
          return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
            "class": "Text"
          }, text);
        }));
      }
    }
  }, {
    key: "hearts",
    get: function get() {
      var hearts = new Array();

      for (var i = models_App_js__WEBPACK_IMPORTED_MODULE_1__["default"].game.state.entities.player.health - 1; i >= 0; i -= 1) {
        if (i >= models_App_js__WEBPACK_IMPORTED_MODULE_1__["default"].game.state.entities.player.damage) {
          if (models_App_js__WEBPACK_IMPORTED_MODULE_1__["default"].game.state.entities.player.damage + 1 === models_App_js__WEBPACK_IMPORTED_MODULE_1__["default"].game.state.entities.player.health) {
            hearts.push(preact__WEBPACK_IMPORTED_MODULE_0__["h"]("span", {
              "class": "final full heart",
              key: i
            }));
          } else {
            hearts.push(preact__WEBPACK_IMPORTED_MODULE_0__["h"]("span", {
              "class": "full heart",
              key: i
            }));
          }
        } else {
          hearts.push(preact__WEBPACK_IMPORTED_MODULE_0__["h"]("span", {
            "class": "none heart",
            key: i
          }));
        }
      }

      return hearts;
    }
  }, {
    key: "score",
    get: function get() {
      var collectibles = models_State_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCollectibleProgress(models_App_js__WEBPACK_IMPORTED_MODULE_1__["default"].game.state);
      return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("span", null, collectibles.current, " of ", collectibles.total, collectibles.current == collectibles.total ? "!!" : "");
    }
  }, {
    key: "flash",
    get: function get() {
      if (models_App_js__WEBPACK_IMPORTED_MODULE_1__["default"].game.state.entities.player.isAttacked) {
        return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
          "class": "blood",
          key: models_App_js__WEBPACK_IMPORTED_MODULE_1__["default"].game.state.entities.player.isAttacked
        });
      }
    }
  }]);

  return UI;
}();



/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(143);
            var content = __webpack_require__(156);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(145);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(146);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(147);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(131);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(130);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(133);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(132);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(135);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(134);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
// Module
exports.push([module.i, "* {\n  margin: 0px;\n  padding: 0px;\n  user-select: none;\n  box-sizing: border-box;\n  image-rendering: pixelated;\n}\n@font-face {\n  font-weight: 400;\n  font-family: \"tiny\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n}\n.Dialogue {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.9);\n  z-index: 1000;\n  bottom: 0em;\n  left: 0em;\n  right: 0em;\n  top: 0em;\n  height: 3rem;\n  margin: auto;\n  font-size: 0.5em;\n  padding: 0.66em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n}\n.UI {\n  pointer-events: none;\n}\n.UI .hearts {\n  top: 0em;\n  right: 0em;\n  z-index: 999;\n  padding: 0.5em;\n  position: absolute;\n}\n.UI .hearts .heart {\n  width: 0.75em;\n  height: 0.75em;\n  line-height: 1em;\n  margin-left: 0.1em;\n  display: inline-block;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.UI .hearts .heart.full {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n.UI .hearts .heart.half {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n.UI .hearts .heart.none {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n.UI .hearts .heart.final {\n  animation-name: tremble;\n  animation-duration: 0.5s;\n  animation-iteration-count: infinite;\n}\n.UI .score {\n  left: 0em;\n  bottom: 0em;\n  z-index: 999;\n  padding: 0.25em 0.5em;\n  position: absolute;\n  line-height: 1em;\n}\n.UI .score i {\n  font: inherit;\n  opacity: 0.5;\n}\n.UI .flash {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  z-index: 999;\n  position: absolute;\n}\n.UI .flash .blood {\n  width: 100%;\n  height: 100%;\n  background-color: #A52F22;\n  animation-name: flash;\n  animation-duration: 0.1s;\n  animation-fill-mode: forwards;\n}\n.UI .title-banner {\n  transition-duration: 0.1s;\n  transition-property: transform;\n  top: 0em;\n  left: -2em;\n  right: -2em;\n  bottom: 0em;\n  margin: auto;\n  height: 2em;\n  z-index: 999;\n  position: absolute;\n  transform: rotate(0deg) scaleY(0);\n  line-height: 2em;\n  text-align: center;\n  border-radius: 1em;\n  background-color: rgba(165, 47, 34, 0.5);\n}\n.UI .game-over-banner {\n  transition-duration: 0.1s;\n  transition-property: transform;\n  top: 0em;\n  left: -2em;\n  right: -2em;\n  bottom: 0em;\n  margin: auto;\n  height: 2em;\n  z-index: 999;\n  position: absolute;\n  transform: rotate(0deg) scaleY(0);\n  line-height: 2em;\n  text-align: center;\n  border-radius: 1em;\n  background-color: rgba(165, 47, 34, 0.5);\n}\n.UI .play-prompt {\n  opacity: 0;\n  left: 0em;\n  right: 0em;\n  bottom: -2em;\n  position: absolute;\n  color: #DEB74A;\n  font-size: 0.5em;\n  text-align: center;\n  animation-name: blink;\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n}\n.UI .pause-banner {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  width: 5em;\n  height: 5em;\n  margin: auto;\n  z-index: 999;\n  line-height: 5em;\n  text-align: center;\n  position: absolute;\n  transform: rotate(0deg) scaleY(0);\n}\n.UI .tutorial {\n  top: 3.5em;\n  width: 3em;\n  height: 4em;\n  right: 0.5em;\n  z-index: 999999;\n  position: absolute;\n  opacity: 0;\n  transition-duration: 1s;\n  transition-property: opacity;\n}\n.UI .tutorial img {\n  width: 100%;\n}\n.UI .tutorial span {\n  display: block;\n  font-size: 0.5em;\n  line-height: 1em;\n  text-align: center;\n}\n.Game.isTutorial .UI .tutorial {\n  opacity: 1;\n  transition-delay: 1s;\n}\n.Game.isPaused:not(.hasEnded) .UI .pause-banner {\n  transition-delay: 1.5s;\n  transition-duration: 0.5s;\n  transition-property: transform;\n  transform: rotate(45deg) scaleY(1);\n}\n.Game.hasEnded .UI .hearts,\n.Game.hasEnded .UI .score {\n  opacity: 0;\n  transition-delay: 0.5s;\n  transition-duration: 0.5s;\n  transition-property: opacity;\n}\n.Game.hasEnded .UI .game-over-banner {\n  opacity: 1;\n  transition-delay: 1.5s;\n  transition-duration: 0.5s;\n  transform: rotate(45deg) scaleY(1);\n}\n.Game.isDemo .UI .hearts,\n.Game.isDemo .UI .score,\n.Game.isDemo .UI .flash,\n.Game.isDemo .UI .pause-banner,\n.Game.isDemo .UI .game-over-banner {\n  visibility: hidden;\n}\n.Game.isDemo .UI .title-banner {\n  transform: rotate(45deg) scaleY(1);\n}\n@keyframes blink {\n  0% {\n    opacity: 1;\n  }\n  75% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fadeinout {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes flash {\n  0% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes tremble {\n  0% {\n    transform: translate(0em, 0.025em);\n  }\n  10% {\n    transform: translate(0.025em, -0.025em);\n  }\n  20% {\n    transform: translate(0.025em, 0em);\n  }\n  30% {\n    transform: translate(-0.025em, -0.025em);\n  }\n  40% {\n    transform: translate(0em, -0.025em);\n  }\n  50% {\n    transform: translate(-0.025em, 0.025em);\n  }\n  60% {\n    transform: translate(0em, -0.025em);\n  }\n  70% {\n    transform: translate(-0.025em, 0em);\n  }\n  80% {\n    transform: translate(0.025em, -0.025em);\n  }\n  90% {\n    transform: translate(-0.025em, 0.025em);\n  }\n  100% {\n    transform: translate(0.025em, 0.025em);\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(143);
            var content = __webpack_require__(158);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(145);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(146);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(147);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "* {\n  margin: 0px;\n  padding: 0px;\n  user-select: none;\n  box-sizing: border-box;\n  image-rendering: pixelated;\n}\n@font-face {\n  font-weight: 400;\n  font-family: \"tiny\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n}\n.Game {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  color: #FFF;\n  font-family: tiny;\n  font-weight: normal;\n}\n.Game.isDemo .Scene {\n  filter: blur(0.05em);\n}\n.Game.hasEnded .Scene {\n  filter: blur(0.05em);\n  transition-delay: 1s;\n  transition-duration: 2s;\n  transition-property: filter;\n}\n.Game.isPaused:not(.hasEnded):not(.isDemo) .Scene {\n  filter: blur(0.125em);\n  transition-delay: 0.25s;\n  transition-duration: 0.5s;\n  transition-property: filter;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(143);
            var content = __webpack_require__(160);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(145);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(146);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(147);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "* {\n  margin: 0px;\n  padding: 0px;\n  user-select: none;\n  box-sizing: border-box;\n  image-rendering: pixelated;\n}\n@font-face {\n  font-weight: 400;\n  font-family: \"tiny\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n}\nbody {\n  background-color: #111;\n}\n.Frame {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  margin: auto;\n  position: fixed;\n  overflow: hidden;\n  color: #DEB74A;\n  color: #F4F8F0;\n  width: 10em;\n  height: 10em;\n  background-image: linear-gradient(135deg, #2F243A, #444054);\n}\n.Preload {\n  opacity: 0;\n  position: absolute;\n}\n.CreditsScreen {\n  text-align: center;\n}\n.CreditsScreen .Fade {\n  z-index: 999;\n  position: absolute;\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  animation-name: fade-in;\n  animation-duration: 3s;\n}\n@keyframes fade-in {\n  0% {\n    background-color: #111;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n.CreditsScreen h1 {\n  margin-top: 4rem;\n  margin-bottom: 1rem;\n  font-size: 0.75em;\n}\n.CreditsScreen .Credits {\n  width: 100%;\n  display: flex;\n}\n.CreditsScreen .Credits .Credit {\n  flex: 1;\n}\n.CreditsScreen .Credits .Credit .Name {\n  font-size: 0.4em;\n}\n.CreditsScreen .Credits .Credit .Stuff {\n  font-size: 0.25em;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);

var dom = document.getElementById("view");
var view = undefined;
/* harmony default export */ __webpack_exports__["default"] = (function (ViewModel) {
  view = preact__WEBPACK_IMPORTED_MODULE_0__["render"](preact__WEBPACK_IMPORTED_MODULE_0__["h"](ViewModel), dom, view);
});

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map
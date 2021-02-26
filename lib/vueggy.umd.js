(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueggy"] = factory(require("vue"));
	else
		root["vueggy"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00b0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventBus; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4160");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c975");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("e260");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a434");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4ec9");
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("3ca3");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("159b");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("2909");
/* harmony import */ var _Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("d4ec");
/* harmony import */ var _Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("bee2");













/*
* @Author: Just be free
* @Date:   2020-11-19 15:29:20
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-19 17:46:31
* @E-mail: justbefree@126.com
*/
// https://github.com/vuejs/rfcs/blob/master/active-rfcs/0020-events-api-change.md
var Bus = /*#__PURE__*/function () {
  function Bus() {
    Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(this, Bus);

    this.eventHub = new Map();
  }

  Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(Bus, [{
    key: "on",
    value: function on(eventName, callback) {
      var events = [];

      if (!this.eventHub.has(eventName)) {
        events.push(callback);
      } else {
        events.push.apply(events, Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(this.eventHub.get(eventName)));
        events.push(callback);
      }

      this.eventHub.set(eventName, events);
    }
  }, {
    key: "off",
    value: function off(eventName, callback) {
      if (!this.eventHub.has(eventName)) {
        return;
      }

      if (!callback) {
        this.eventHub.delete(eventName);
      } else {
        var events = this.eventHub.get(eventName);

        if (events) {
          events.splice(events.indexOf(callback), 1);
        }
      }
    }
  }, {
    key: "emit",
    value: function emit(eventName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.eventHub.has(eventName)) {
        var events = this.eventHub.get(eventName);
        events.forEach(function (fn, key) {
          fn.apply(void 0, args);
        });
      }
    }
  }]);

  return Bus;
}();

var EventBus = new Bus();

/***/ }),

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "0538":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("1c0b");
var isObject = __webpack_require__("861d");

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06c5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a630");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fb6a");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("b0c0");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("25f0");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3ca3");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("6b75");







function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(o, minLen);
}

/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "1276":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var isRegExp = __webpack_require__("44e7");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var speciesConstructor = __webpack_require__("4840");
var advanceStringIndex = __webpack_require__("8aa5");
var toLength = __webpack_require__("50c4");
var callRegExpExec = __webpack_require__("14c3");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "19aa":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1cdc":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "1e09":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("36ae");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("06e35172", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("0366");
var getIteratorMethod = __webpack_require__("35a1");
var callWithSafeIterationClosing = __webpack_require__("9bdd");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "24fb":
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

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "262e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _inherits; });

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "2909":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _toConsumableArray; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__("6b75");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(arrayLikeToArray["a" /* default */])(arr);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("a630");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js








function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__("06c5");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || Object(unsupportedIterableToArray["a" /* default */])(arr) || _nonIterableSpread();
}

/***/ }),

/***/ "2ca0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var toLength = __webpack_require__("50c4");
var notARegExp = __webpack_require__("5a34");
var requireObjectCoercible = __webpack_require__("1d80");
var correctIsRegExpLogic = __webpack_require__("ab13");
var IS_PURE = __webpack_require__("c430");

var nativeStartsWith = ''.startsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return nativeStartsWith
      ? nativeStartsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "2caf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _createSuper; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__("4ae1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__("3410");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js



function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("53ca");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (Object(esm_typeof["a" /* default */])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js




function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

/***/ }),

/***/ "2cf4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");
var bind = __webpack_require__("0366");
var html = __webpack_require__("1be4");
var createElement = __webpack_require__("cc12");
var IS_IOS = __webpack_require__("1cdc");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    !fails(post) &&
    location.protocol !== 'file:'
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "324f":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjAzODc5NTUxOTM5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUyNjAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNMjIyLjM2OTUzNyA0NTkuNzg0Nzk5TDcwMS41MjY1NDYgMTkuNDgxNDMzYTc0LjIzNzE5NSA3NC4yMzcxOTUgMCAwIDEgMTAzLjQyMDA5MyAzLjA3MTg4NCA3MC45Mzc3NjUgNzAuOTM3NzY1IDAgMCAxLTMuMjQyNTQ0IDEwMS40ODU5NDRMMzc5LjQzMzgyNSA1MTIuMTIwNmw0MjIuMDk5NjEgMzg3Ljg1Mzc5MmE3MC45Mzc3NjUgNzAuOTM3NzY1IDAgMCAxIDMuMTI4NzcxIDEwMS4zNzIxNyA3NC4wNjY1MzUgNzQuMDY2NTM1IDAgMCAxLTEwMy4zNjMyMDcgMy4xODU2NThMMjIyLjE0MTk5IDU2NC4yMjg4NTRBNzAuNzY3MTA0IDcwLjc2NzEwNCAwIDAgMSAxOTkuMDQ1OTczIDUxMS44OTMwNTNjMC0xOS43OTY1ODUgOC41MzMwMTEtMzguNjgyOTgzIDIzLjMyMzU2NC01Mi4yMjIwMjd2MC4xMTM3NzN6IiBmaWxsPSIjODg4ODg4IiBwLWlkPSI1MjYxIj48L3BhdGg+PC9zdmc+"

/***/ }),

/***/ "3410":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toObject = __webpack_require__("7b0b");
var nativeGetPrototypeOf = __webpack_require__("e163");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "34b5":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5ODAxNzE2MzExIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyMDAzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiAwYzI4Mi43NjA1MzMgMCA1MTIgMjI5LjIzOTQ2NyA1MTIgNTEyIDAgMjgyLjc2MDUzMy0yMjkuMjM5NDY3IDUxMi01MTIgNTEyLTI4Mi43NjA1MzMgMC01MTItMjI5LjIzOTQ2Ny01MTItNTEyQzAgMjI5LjIzOTQ2NyAyMjkuMjM5NDY3IDAgNTEyIDB6IG0wIDM0LjEzMzMzM0MyNDguMDgxMDY3IDM0LjEzMzMzMyAzNC4xMzMzMzMgMjQ4LjA4MTA2NyAzNC4xMzMzMzMgNTEyczIxMy45NDc3MzMgNDc3Ljg2NjY2NyA0NzcuODY2NjY3IDQ3Ny44NjY2NjcgNDc3Ljg2NjY2Ny0yMTMuOTQ3NzMzIDQ3Ny44NjY2NjctNDc3Ljg2NjY2N1M3NzUuOTE4OTMzIDM0LjEzMzMzMyA1MTIgMzQuMTMzMzMzek0zMTguOTA3NzMzIDMxMS44NDIxMzNMNTEyIDUwNC45MzQ0bDE5My4wOTIyNjctMTkzLjA5MjI2N2ExNy4wNjY2NjcgMTcuMDY2NjY3IDAgMCAxIDIxLjc3NzA2Ni0xLjk3OTczM2wyLjM1NTIgMS45Nzk3MzNhMTcuMDY2NjY3IDE3LjA2NjY2NyAwIDAgMSAwIDI0LjEzMjI2N0w1MzYuMTMyMjY3IDUyOS4wNjY2NjdsMTkzLjA5MjI2NiAxOTMuMDkyMjY2YTE3LjA2NjY2NyAxNy4wNjY2NjcgMCAwIDEtMjQuMTMyMjY2IDI0LjEzMjI2N0w1MTIgNTUzLjE5ODkzM2wtMTkzLjA5MjI2NyAxOTMuMDkyMjY3YTE3LjA2NjY2NyAxNy4wNjY2NjcgMCAwIDEtMjEuNzc3MDY2IDEuOTc5NzMzbC0yLjM1NTItMS45Nzk3MzNhMTcuMDY2NjY3IDE3LjA2NjY2NyAwIDAgMSAwLTI0LjEzMjI2N2wxOTMuMDkyMjY2LTE5My4wOTIyNjYtMTkzLjA5MjI2Ni0xOTMuMDkyMjY3YTE3LjA2NjY2NyAxNy4wNjY2NjcgMCAwIDEgMjQuMTMyMjY2LTI0LjEzMjI2N3oiIGZpbGw9IiM0QTRBNEEiIG9wYWNpdHk9Ii42IiBwLWlkPSIxMjAwNCI+PC9wYXRoPjwvc3ZnPg=="

/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "36ae":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "input,textarea{color:#2a2a2a}input::-webkit-input-placeholder{color:#999}input::-moz-placeholder{color:#999}input:-ms-input-placeholder{color:#999}textarea::-webkit-input-placeholder{color:#999}textarea::-moz-placeholder{color:#999}textarea::-ms-input-placeholder{color:#999}.initial-line-height{line-height:normal}*{-webkit-tap-highlight-color:transparent}.vg-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:4px;border:1px solid #e4e4e4;box-sizing:border-box;color:inherit;display:block;font-size:16px;height:38px;outline:0;overflow:hidden;position:relative;text-align:center;cursor:pointer}.vg-button.loading{opacity:.5}.vg-button.large{width:100%}.vg-button[disabled]{cursor:not-allowed;color:rgba(0,0,0,.25);background:#f5f5f5;border-color:#e4e4e4;text-shadow:none;box-shadow:none}.vg-button-default{color:#656b79;background-color:#f6f8fa}.vg-button-default.vg-button-danger{color:#e71d32;border-color:#e71d32}.vg-button-primary{background-color:#007aff;border-color:#007aff;color:#fff}.vg-button-primary.vg-button-danger{color:#fff;border-color:#e71d32;background-color:#e71d32}.vg-button-dashed{color:#656b79;background-color:#f6f8fa;border:1px dashed #e4e4e4}.vg-button-dashed.vg-button-danger{color:#e71d32;border-color:#e71d32}.vg-button-loading img{-webkit-animation:vg-infinite-rotate .8s linear infinite;animation:vg-infinite-rotate .8s linear infinite;border:0 solid transparent;border-radius:50%;margin-right:5px}@-webkit-keyframes vg-infinite-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes vg-infinite-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.vg-flex{display:flex}.vg-flex-fix-bottom-line:after{content:\"\";flex:auto}.vg-flex-direction-row{flex-direction:row}.vg-flex-direction-row-reverse{flex-direction:row-reverse}.vg-flex-direction-column{flex-direction:column}.vg-flex-direction-column-reverse{flex-direction:column-reverse}.vg-flex-wrap-nowrap{flex-wrap:nowrap}.vg-flex-wrap-wrap{flex-wrap:wrap}.vg-flex-wrap-wrap-reverse{flex-wrap:wrap-reverse}.vg-justify-content-flex-start{justify-content:flex-start}.vg-justify-content-flex-end{justify-content:flex-end}.vg-justify-content-center{justify-content:center}.vg-justify-content-space-between{justify-content:space-between}.vg-justify-content-space-around{justify-content:space-around}.vg-align-items-flex-start{align-items:flex-start}.vg-align-items-flex-end{align-items:flex-end}.vg-align-items-center{align-items:center}.vg-align-items-baseline{align-items:baseline}.vg-align-items-stretch{align-items:stretch}.vg-align-content-flex-start{align-content:flex-start}.vg-align-content-flex-end{align-content:flex-end}.vg-align-content-center{align-content:center}.vg-align-content-space-between{align-content:space-between}.vg-align-content-space-around{align-content:space-around}.vg-align-content-stretch{align-content:stretch}@media print,screen{.vg-xs-col-1{flex:0 1 8.33333%;max-width:8.33333%;width:8.33333%}.vg-xs-col-2{flex:0 1 16.66667%;max-width:16.66667%;width:16.66667%}.vg-xs-col-3{flex:0 1 25%;max-width:25%;width:25%}.vg-xs-col-4{flex:0 1 33.33333%;max-width:33.33333%;width:33.33333%}.vg-xs-col-5{flex:0 1 41.66667%;max-width:41.66667%;width:41.66667%}.vg-xs-col-6{flex:0 1 50%;max-width:50%;width:50%}.vg-xs-col-7{flex:0 1 58.33333%;max-width:58.33333%;width:58.33333%}.vg-xs-col-8{flex:0 1 66.66667%;max-width:66.66667%;width:66.66667%}.vg-xs-col-9{flex:0 1 75%;max-width:75%;width:75%}.vg-xs-col-10{flex:0 1 83.33333%;max-width:83.33333%;width:83.33333%}.vg-xs-col-11{flex:0 1 91.66667%;max-width:91.66667%;width:91.66667%}.vg-xs-col-12{flex:0 1 100%;max-width:100%;width:100%}}@media print,screen and (min-width:768px){.vg-sm-col-1{flex:0 1 8.33333%;max-width:8.33333%;width:8.33333%}.vg-sm-col-2{flex:0 1 16.66667%;max-width:16.66667%;width:16.66667%}.vg-sm-col-3{flex:0 1 25%;max-width:25%;width:25%}.vg-sm-col-4{flex:0 1 33.33333%;max-width:33.33333%;width:33.33333%}.vg-sm-col-5{flex:0 1 41.66667%;max-width:41.66667%;width:41.66667%}.vg-sm-col-6{flex:0 1 50%;max-width:50%;width:50%}.vg-sm-col-7{flex:0 1 58.33333%;max-width:58.33333%;width:58.33333%}.vg-sm-col-8{flex:0 1 66.66667%;max-width:66.66667%;width:66.66667%}.vg-sm-col-9{flex:0 1 75%;max-width:75%;width:75%}.vg-sm-col-10{flex:0 1 83.33333%;max-width:83.33333%;width:83.33333%}.vg-sm-col-11{flex:0 1 91.66667%;max-width:91.66667%;width:91.66667%}.vg-sm-col-12{flex:0 1 100%;max-width:100%;width:100%}}@media print,screen and (min-width:992px){.vg-md-col-1{flex:0 1 8.33333%;max-width:8.33333%;width:8.33333%}.vg-md-col-2{flex:0 1 16.66667%;max-width:16.66667%;width:16.66667%}.vg-md-col-3{flex:0 1 25%;max-width:25%;width:25%}.vg-md-col-4{flex:0 1 33.33333%;max-width:33.33333%;width:33.33333%}.vg-md-col-5{flex:0 1 41.66667%;max-width:41.66667%;width:41.66667%}.vg-md-col-6{flex:0 1 50%;max-width:50%;width:50%}.vg-md-col-7{flex:0 1 58.33333%;max-width:58.33333%;width:58.33333%}.vg-md-col-8{flex:0 1 66.66667%;max-width:66.66667%;width:66.66667%}.vg-md-col-9{flex:0 1 75%;max-width:75%;width:75%}.vg-md-col-10{flex:0 1 83.33333%;max-width:83.33333%;width:83.33333%}.vg-md-col-11{flex:0 1 91.66667%;max-width:91.66667%;width:91.66667%}.vg-md-col-12{flex:0 1 100%;max-width:100%;width:100%}}@media print,screen and (min-width:1200px){.vg-lg-col-1{flex:0 1 8.33333%;max-width:8.33333%;width:8.33333%}.vg-lg-col-2{flex:0 1 16.66667%;max-width:16.66667%;width:16.66667%}.vg-lg-col-3{flex:0 1 25%;max-width:25%;width:25%}.vg-lg-col-4{flex:0 1 33.33333%;max-width:33.33333%;width:33.33333%}.vg-lg-col-5{flex:0 1 41.66667%;max-width:41.66667%;width:41.66667%}.vg-lg-col-6{flex:0 1 50%;max-width:50%;width:50%}.vg-lg-col-7{flex:0 1 58.33333%;max-width:58.33333%;width:58.33333%}.vg-lg-col-8{flex:0 1 66.66667%;max-width:66.66667%;width:66.66667%}.vg-lg-col-9{flex:0 1 75%;max-width:75%;width:75%}.vg-lg-col-10{flex:0 1 83.33333%;max-width:83.33333%;width:83.33333%}.vg-lg-col-11{flex:0 1 91.66667%;max-width:91.66667%;width:91.66667%}.vg-lg-col-12{flex:0 1 100%;max-width:100%;width:100%}}.align-self-auto{align-self:auto}.align-self-flex-start{align-self:flex-start}.align-self-flex-end{align-self:flex-end}.align-self-center{align-self:center}.align-self-baseline{align-self:baseline}.align-self-stretch{align-self:stretch}.vg-toast-container{position:fixed;min-width:20px;max-width:80%;box-sizing:border-box;text-align:center;color:#fff;min-height:35px;z-index:10000;background:rgba(0,0,0,.7);transition:opacity .2s linear;border-radius:5px;padding:10px}.vg-toast-container .toast-text{display:block;text-align:center;font-size:14px}.vg-toast-container.located-at-top{top:50px;left:50%;transform:translate(-50%)}.vg-toast-container.located-at-bottom{bottom:50px;left:50%;transform:translate(-50%)}.vg-toast-container.located-at-middle{top:50%;left:50%;transform:translate(-50%,-50%)}.vg-toast-pop-enter-active,.vg-toast-pop-leave-active{transition:opacity .2s ease}.vg-toast-pop-enter-from,.vg-toast-pop-leave-active,.vg-toast-pop-leave-to{transition:opacity .2s ease;opacity:0}.vg-spin-snake{-webkit-animation:vg-spin-rotate .8s linear infinite;animation:vg-spin-rotate .8s linear infinite;border:4px solid transparent;border-radius:50%}@-webkit-keyframes vg-spin-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes vg-spin-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.vg-spin-rotate-svg img{width:100%;height:auto}.vg-spin-triple-bounce .triple-bounce1,.vg-spin-triple-bounce .triple-bounce2,.vg-spin-triple-bounce .triple-bounce3{background:#ccc;border-radius:100%;display:inline-block;-webkit-animation:vg-triple-bounce 1.4s ease-in-out infinite both;animation:vg-triple-bounce 1.4s ease-in-out infinite both}.vg-spin-triple-bounce .triple-bounce1{-webkit-animation-delay:-.32s;animation-delay:-.32s}.vg-spin-triple-bounce .triple-bounce2{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes vg-triple-bounce{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}@keyframes vg-triple-bounce{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}.v-vgpopup-modal{width:100%;height:100%;background:rgba(0,0,0,.7);position:fixed;z-index:1;top:0;left:0;right:0;bottom:0}.vg-popup{width:100%;max-height:100%;position:fixed;background:#fff;overflow:auto;-webkit-overflow-scrolling:touch;top:50%;left:50%;transform:translate3d(-50%,-50%,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:all .2s ease-out}.vg-popup .vg-popup-closeicon{height:44px;text-align:right}.vg-popup .vg-popup-closeicon.fixed{margin:0;top:8px;right:8px;position:fixed}.vg-popup .vg-popup-closeicon img{width:26px;height:26px;cursor:pointer;margin:10px}.vg-popup-top{top:0;right:auto;bottom:auto;left:50%;transform:translate3d(-50%,0,0)}.vg-popup-right{top:50%;right:0;bottom:auto;left:auto;transform:translate3d(0,-50%,0)}.vg-popup-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translate3d(-50%,0,0)}.vg-popup-left{top:50%;right:auto;bottom:auto;left:0;transform:translate3d(0,-50%,0)}.vg-popup-middle{top:50%;right:auto;bottom:auto;left:50%;opacity:1}.vg-popup-slide-top-enter-active,.vg-popup-slide-top-enter-to,.vg-popup-slide-top-leave-active{transform:translate3d(-50%,-100%,0)}.vg-popup-slide-right-enter-active,.vg-popup-slide-right-enter-to,.vg-popup-slide-right-leave-active{transform:translate3d(100%,-50%,0)}.vg-popup-slide-bottom-enter-active,.vg-popup-slide-bottom-enter-to,.vg-popup-slide-bottom-leave-active{transform:translate3d(-50%,100%,0)}.vg-popup-slide-left-enter,.vg-popup-slide-left-enter-active,.vg-popup-slide-left-leave-active{transform:translate3d(-100%,-50%,0)}.vg-popup-slide-middle-enter-active,.vg-popup-slide-middle-enter-to,.vg-popup-slide-middle-leave-active{opacity:0;transform:translate3d(-50%,0,0)}i.vg-iconfont-wrap{display:inline-block}i.vg-iconfont-wrap.pointer{cursor:pointer}i.vg-iconfont-wrap.default{cursor:default}i.vg-iconfont-wrap.auto{cursor:auto}i.vg-iconfont-wrap.w-resize{cursor:w-resize}i.vg-iconfont-wrap.text{cursor:text}i.vg-iconfont-wrap.wait{cursor:wait}i.vg-iconfont-wrap.help{cursor:help}i.vg-iconfont-wrap.crosshair{cursor:crosshair}i.vg-iconfont-wrap.move{cursor:move}i.vg-iconfont-wrap.e-resize{cursor:e-resize}i.vg-iconfont-wrap.ne-resize{cursor:ne-resize}i.vg-iconfont-wrap.nw-resize{cursor:nw-resize}i.vg-iconfont-wrap.n-resize{cursor:n-resize}i.vg-iconfont-wrap.se-resize{cursor:se-resize}i.vg-iconfont-wrap.sw-resize{cursor:sw-resize}i.vg-iconfont-wrap.s-resize{cursor:s-resize}.vg-iconfont{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden}.vg-iconfont.vg-iconfont-size-0{font-size:0}.vg-iconfont.vg-iconfont-size-1{font-size:1px}.vg-iconfont.vg-iconfont-size-2{font-size:2px}.vg-iconfont.vg-iconfont-size-3{font-size:3px}.vg-iconfont.vg-iconfont-size-4{font-size:4px}.vg-iconfont.vg-iconfont-size-5{font-size:5px}.vg-iconfont.vg-iconfont-size-6{font-size:6px}.vg-iconfont.vg-iconfont-size-7{font-size:7px}.vg-iconfont.vg-iconfont-size-8{font-size:8px}.vg-iconfont.vg-iconfont-size-9{font-size:9px}.vg-iconfont.vg-iconfont-size-10{font-size:10px}.vg-iconfont.vg-iconfont-size-11{font-size:11px}.vg-iconfont.vg-iconfont-size-12{font-size:12px}.vg-iconfont.vg-iconfont-size-13{font-size:13px}.vg-iconfont.vg-iconfont-size-14{font-size:14px}.vg-iconfont.vg-iconfont-size-15{font-size:15px}.vg-iconfont.vg-iconfont-size-16{font-size:16px}.vg-iconfont.vg-iconfont-size-17{font-size:17px}.vg-iconfont.vg-iconfont-size-18{font-size:18px}.vg-iconfont.vg-iconfont-size-19{font-size:19px}.vg-iconfont.vg-iconfont-size-20{font-size:20px}.vg-iconfont.vg-iconfont-size-21{font-size:21px}.vg-iconfont.vg-iconfont-size-22{font-size:22px}.vg-iconfont.vg-iconfont-size-23{font-size:23px}.vg-iconfont.vg-iconfont-size-24{font-size:24px}.vg-iconfont.vg-iconfont-size-25{font-size:25px}.vg-iconfont.vg-iconfont-size-26{font-size:26px}.vg-iconfont.vg-iconfont-size-27{font-size:27px}.vg-iconfont.vg-iconfont-size-28{font-size:28px}.vg-iconfont.vg-iconfont-size-29{font-size:29px}.vg-iconfont.vg-iconfont-size-30{font-size:30px}.vg-iconfont.vg-iconfont-size-31{font-size:31px}.vg-iconfont.vg-iconfont-size-32{font-size:32px}.vg-iconfont.vg-iconfont-size-33{font-size:33px}.vg-iconfont.vg-iconfont-size-34{font-size:34px}.vg-iconfont.vg-iconfont-size-35{font-size:35px}.vg-iconfont.vg-iconfont-size-36{font-size:36px}.vg-iconfont.vg-iconfont-size-37{font-size:37px}.vg-iconfont.vg-iconfont-size-38{font-size:38px}.vg-iconfont.vg-iconfont-size-39{font-size:39px}.vg-iconfont.vg-iconfont-size-40{font-size:40px}.vg-iconfont.vg-iconfont-size-41{font-size:41px}.vg-iconfont.vg-iconfont-size-42{font-size:42px}.vg-iconfont.vg-iconfont-size-43{font-size:43px}.vg-iconfont.vg-iconfont-size-44{font-size:44px}.vg-iconfont.vg-iconfont-size-45{font-size:45px}.vg-iconfont.vg-iconfont-size-46{font-size:46px}.vg-iconfont.vg-iconfont-size-47{font-size:47px}.vg-iconfont.vg-iconfont-size-48{font-size:48px}.vg-iconfont.vg-iconfont-size-49{font-size:49px}.vg-iconfont.vg-iconfont-size-50{font-size:50px}.vg-iconfont.vg-iconfont-size-51{font-size:51px}.vg-iconfont.vg-iconfont-size-52{font-size:52px}.vg-iconfont.vg-iconfont-size-53{font-size:53px}.vg-iconfont.vg-iconfont-size-54{font-size:54px}.vg-iconfont.vg-iconfont-size-55{font-size:55px}.vg-iconfont.vg-iconfont-size-56{font-size:56px}.vg-iconfont.vg-iconfont-size-57{font-size:57px}.vg-iconfont.vg-iconfont-size-58{font-size:58px}.vg-iconfont.vg-iconfont-size-59{font-size:59px}.vg-iconfont.vg-iconfont-size-60{font-size:60px}.vg-iconfont.vg-iconfont-size-61{font-size:61px}.vg-iconfont.vg-iconfont-size-62{font-size:62px}.vg-iconfont.vg-iconfont-size-63{font-size:63px}.vg-iconfont.vg-iconfont-size-64{font-size:64px}.vg-iconfont.vg-iconfont-size-65{font-size:65px}.vg-iconfont.vg-iconfont-size-66{font-size:66px}.vg-iconfont.vg-iconfont-size-67{font-size:67px}.vg-iconfont.vg-iconfont-size-68{font-size:68px}.vg-iconfont.vg-iconfont-size-69{font-size:69px}.vg-iconfont.vg-iconfont-size-70{font-size:70px}.vg-iconfont.vg-iconfont-size-71{font-size:71px}.vg-iconfont.vg-iconfont-size-72{font-size:72px}.vg-iconfont.vg-iconfont-size-73{font-size:73px}.vg-iconfont.vg-iconfont-size-74{font-size:74px}.vg-iconfont.vg-iconfont-size-75{font-size:75px}.vg-iconfont.vg-iconfont-size-76{font-size:76px}.vg-iconfont.vg-iconfont-size-77{font-size:77px}.vg-iconfont.vg-iconfont-size-78{font-size:78px}.vg-iconfont.vg-iconfont-size-79{font-size:79px}.vg-iconfont.vg-iconfont-size-80{font-size:80px}.vg-iconfont.vg-iconfont-size-81{font-size:81px}.vg-iconfont.vg-iconfont-size-82{font-size:82px}.vg-iconfont.vg-iconfont-size-83{font-size:83px}.vg-iconfont.vg-iconfont-size-84{font-size:84px}.vg-iconfont.vg-iconfont-size-85{font-size:85px}.vg-iconfont.vg-iconfont-size-86{font-size:86px}.vg-iconfont.vg-iconfont-size-87{font-size:87px}.vg-iconfont.vg-iconfont-size-88{font-size:88px}.vg-iconfont.vg-iconfont-size-89{font-size:89px}.vg-iconfont.vg-iconfont-size-90{font-size:90px}.vg-iconfont.vg-iconfont-size-91{font-size:91px}.vg-iconfont.vg-iconfont-size-92{font-size:92px}.vg-iconfont.vg-iconfont-size-93{font-size:93px}.vg-iconfont.vg-iconfont-size-94{font-size:94px}.vg-iconfont.vg-iconfont-size-95{font-size:95px}.vg-iconfont.vg-iconfont-size-96{font-size:96px}.vg-iconfont.vg-iconfont-size-97{font-size:97px}.vg-iconfont.vg-iconfont-size-98{font-size:98px}.vg-iconfont.vg-iconfont-size-99{font-size:99px}.vg-iconfont.vg-iconfont-size-100{font-size:100px}.v-vgdialog-modal{width:100%;height:100%;background:rgba(0,0,0,.7);position:fixed;top:0;left:0;right:0;bottom:0}.vg-dialog{position:fixed;top:50%;left:50%;transform:translate3d(-50%,-50%,0);background-color:#fff;width:85%;border-radius:10px;font-size:16px;-webkit-user-select:none;overflow:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:all .2s ease}.vg-dialog .vg-dialog-title{padding-top:20px;font-weight:500;line-height:24px;text-align:center;color:#2a2a2a}.vg-dialog .vg-dialog-content{padding:20px;overflow-y:auto;font-size:14px;line-height:20px;white-space:pre-wrap;text-align:center;word-wrap:break-word;-webkit-overflow-scrolling:touch;color:#2a2a2a}.vg-dialog .vg-dialog-buttons{display:flex;height:45px}.vg-dialog .vg-dialog-buttons .vg-dialog-cancel-button,.vg-dialog .vg-dialog-buttons .vg-dialog-confirm-button{height:45px;line-height:45px;flex:1;background:#fff;border-radius:0;border-bottom:none}.vg-dialog .vg-dialog-buttons .vg-dialog-cancel-button.vertical-line,.vg-dialog .vg-dialog-buttons .vg-dialog-confirm-button.vertical-line{border-left:none}.vg-dialog .vg-dialog-buttons .vg-dialog-cancel-button{color:#2a2a2a;border-left:none}.vg-dialog .vg-dialog-buttons .vg-dialog-confirm-button{color:#007aff;border-right:none}.vg-dialog-bounce-enter-active{opacity:0;transform:translate3d(-50%,-50%,0) scale(.7)}.vg-dialog-bounce-leave-active{opacity:0;transform:translate3d(-50%,-50%,0) scale(.9)}.vg-sticky-fixed{position:fixed}.vg-calendar .vg-calendar-content{height:100%;margin:0 auto}.vg-calendar .vg-calendar-content .vg-calendar-header{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-shadow:0 2px 10px rgba(125,126,128,.16)}.vg-calendar .vg-calendar-content .vg-calendar-header .vg-calendar-close{cursor:pointer;position:absolute;right:10px;top:10px}.vg-calendar .vg-calendar-content .vg-calendar-header .vg-calendar-header-title{height:44px;text-align:center;line-height:44px;color:#2a2a2a;font-size:16px}.vg-calendar .vg-calendar-content .vg-calendar-header .vg-calendar-week-bar{height:44px;line-height:44px;color:#2a2a2a}.vg-calendar .vg-calendar-content .vg-calendar-body{height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.vg-calendar .vg-calendar-content .vg-calendar-body .vg-calendar-month{border-bottom:1px solid #e4e4e4;padding-bottom:14px;box-sizing:border-box}.vg-calendar .vg-calendar-content .vg-calendar-body .vg-calendar-month .vg-calendar-month-title{text-align:center;height:44px;line-height:44px;font-weight:500;color:#2a2a2a;margin:0 5px}.vg-calendar .vg-calendar-content .vg-calendar-body .vg-calendar-month .vg-calendar-date{width:14.28571%;text-align:center;height:54px;margin:1px 0;color:#4a4a4a}.vg-calendar .vg-calendar-content .vg-calendar-body .vg-calendar-month .vg-calendar-date .vg-calendar-date-festival,.vg-calendar .vg-calendar-content .vg-calendar-body .vg-calendar-month .vg-calendar-date .vg-calendar-date-mark{height:18px;font-size:9px;line-height:18px}.vg-calendar .vg-calendar-content .vg-calendar-body .vg-calendar-month .vg-calendar-date .vg-calendar-date-text{height:18px;line-height:18px;font-size:18px}.vg-calendar .vg-calendar-content .vg-calendar-body .vg-calendar-month .vg-calendar-date.disable{color:#ccc;cursor:default}.vg-calendar .vg-calendar-content .vg-calendar-body .vg-calendar-month .vg-calendar-date.clickable{cursor:pointer}.vg-calendar .vg-calendar-content .vg-calendar-body .vg-calendar-month .vg-calendar-date.active{background:#007aff;color:#fff}.vg-calendar .vg-calendar-content .vg-calendar-body .vg-calendar-month .vg-calendar-date.active.single-mode{border-radius:10%}.vg-calendar .vg-calendar-content .vg-calendar-body .vg-calendar-month .vg-calendar-date.start{border-bottom-left-radius:10%;border-top-left-radius:10%}.vg-calendar .vg-calendar-content .vg-calendar-body .vg-calendar-month .vg-calendar-date.end{border-bottom-right-radius:10%;border-top-right-radius:10%}.vg-calendar .vg-calendar-content .vg-calendar-body .vg-calendar-month .vg-calendar-date.during-active{background:rgba(0,122,255,.15);color:#4a4a4a}.vg-calendar .vg-calendar-content .vg-calendar-footer{height:50px}.vg-calendar .vg-calendar-content .vg-calendar-footer .vg-calendar-confirm-button{width:90%;margin:0 auto;height:36px;border-radius:18px;line-height:36px;text-align:center;color:#fff}.vg-calendar .vg-calendar-content .vg-calendar-footer .vg-calendar-confirm-button.active{background:#007aff}.vg-calendar .vg-calendar-content .vg-calendar-footer .vg-calendar-confirm-button.disable{background:#ccc}.vg-layout,.vg-layout .vg-layout-flex-container{width:100%;height:100%;position:relative}.vg-layout .vg-layout-flex-container .vg-layout-body{transition:all .5s;box-sizing:border-box;height:100%;overflow:auto}.slide-fade-enter-active{transition:all .2s ease-in-out}.slide-fade-leave-active{transition:all .5s ease-in-out}.slide-fade-enter-from,.slide-fade-leave-to{transform:translateY(55px);opacity:0}.slide-fade-top-enter-active{transition:all .2s ease}.slide-fade-top-leave-active{transition:all .5s ease-out}.slide-fade-top-enter-from,.slide-fade-top-leave-to{transform:translateY(-55px);opacity:0}.vg-city-picker .vg-city-picker-cities{padding:0 10px}.vg-city-picker .vg-city-picker-cities .city-item{text-align:center;line-height:34px;max-height:34px;background:#fff;border-radius:5px;border:1px solid #e4e4e4;font-size:14px;color:#2a2a2a}.vg-city-picker .vg-city-picker-cities .city-item.column-4{width:22%;margin:3px auto}.vg-city-picker .vg-city-picker-cities .city-item.column-4:last-child:nth-child(4n-1){margin-right:25%}.vg-city-picker .vg-city-picker-cities .city-item.column-4:last-child:nth-child(4n-2){margin-right:51.5%}.vg-city-picker .vg-city-picker-cities .city-item.column-4:last-child:nth-child(4n-3){margin-right:76.5%}.vg-city-picker .vg-city-picker-cities .city-item.column-3{width:31%;margin:3px auto}.vg-city-picker .vg-city-picker-cities .city-item.column-3:last-child:nth-child(3n-1){margin-right:34.5%}.vg-city-picker .vg-city-picker-cities .city-item.column-3:last-child:nth-child(3n-2){margin-right:67.83333%}.vg-city-picker .vg-city-picker-cities .city-item span{display:inline-block;height:100%;overflow:hidden}.vg-city-picker .vg-city-picker-cities .city-item.text-small{font-size:12px}.vg-city-picker .vg-city-picker-cities .city-item.normal-lineheight{line-height:17px}.vg-city-picker .vg-city-picker-content{height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vg-city-picker .vg-city-picker-content .vg-city-picker-input-search{height:34px;margin:5px auto;padding:0 10px;overflow:hidden}.vg-city-picker .vg-city-picker-content .vg-city-picker-input-search .icon-box{background:#f5f5f5;width:30px;line-height:34px;text-align:center;border-radius:5px 0 0 5px}.vg-city-picker .vg-city-picker-content .vg-city-picker-input-search .input-box{width:calc(100% - 30px);overflow:hidden;border-radius:0 5px 5px 0}.vg-city-picker .vg-city-picker-content .vg-city-picker-input-search .input-box input{background:#f5f5f5;width:100%;height:100%;outline:none;font-size:13px;color:#2a2a2a;border:none}.vg-city-picker .vg-city-picker-content .vg-city-picker-input-search .input-box input::input-placeholder{color:#999}.vg-city-picker .vg-city-picker-content .vg-city-picker-input-search .input-box.searching{border-radius:0}.vg-city-picker .vg-city-picker-content .vg-city-picker-input-search .delete-all{background:#f5f5f5;width:32px;text-align:center;line-height:34px;border-radius:0 5px 5px 0}.vg-city-picker .vg-city-picker-content .vg-city-picker-header .vg-city-picker-header-title{height:44px;display:block;text-align:center;line-height:44px;font-size:18px;color:#2a2a2a;background:#fff}.vg-city-picker .vg-city-picker-content .vg-city-picker-header .vg-city-picker-close{cursor:pointer;position:absolute;right:8px;top:8px}.vg-city-picker .vg-city-picker-content .vg-city-picker-header .vg-city-picker-tab-bar{background:#fff;border-bottom:1px solid #e4e4e4}.vg-city-picker .vg-city-picker-content .vg-city-picker-header .vg-city-picker-tab-bar .vg-city-picker-tab-item{text-align:center;font-size:15px;height:44px;line-height:44px;overflow:hidden}.vg-city-picker .vg-city-picker-content .vg-city-picker-header .vg-city-picker-tab-bar .vg-city-picker-tab-item .vg-city-picker-tab-text{color:#2a2a2a}.vg-city-picker .vg-city-picker-content .vg-city-picker-header .vg-city-picker-tab-bar .vg-city-picker-tab-item.active .vg-city-picker-tab-text{color:#007aff;display:inline-block;height:42px;border-bottom:2px solid #007aff}.vg-city-picker .vg-city-picker-content .vg-city-picker-body{height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.vg-city-picker .vg-city-picker-content .vg-city-picker-body .vg-city-picker-block-title{line-height:20px;color:#9a9a9a;font-size:14px;margin:8px 11px;text-align:left}.vg-city-picker .vg-city-picker-content .vg-city-picker-body .vg-city-picker-searched-area{text-align:center}.vg-city-picker .vg-city-picker-content .vg-city-picker-body .vg-city-picker-alpha-beta{padding:0 10px}.vg-city-picker .vg-city-picker-content .vg-city-picker-body .vg-city-picker-alpha-beta .alpha-beta{width:17%;margin:3px .2%;line-height:30px;text-align:center;color:#2a2a2a;border:1px solid #e4e4e4;border-radius:5px;font-size:18px;background:#fff}.vg-city-picker .vg-city-picker-content .vg-city-picker-body .vg-city-picker-alpha-beta .alpha-beta.active{color:#fff;background:#007aff}.vg-city-picker .vg-city-picker-content .vg-city-picker-input-search-result>ul{margin:0;padding:0 5px}.vg-city-picker .vg-city-picker-content .vg-city-picker-input-search-result>ul li{border-radius:5px;background:#fff;width:calc(100% - 20px);margin:0 auto;list-style:none;line-height:40px;padding-left:10px;border-bottom:1px solid #e4e4e4;color:#2a2a2a;text-align:left}.vg-city-picker .vg-city-picker-content .vg-city-picker-input-search-result>ul li span{margin-left:5px;font-size:14px}.vg-city-picker .vg-city-picker-content .vg-city-picker-input-search-result>ul li span i{font-style:normal;color:#007aff}.vg-city-picker .vg-city-picker-content.limited{background:#fff}.vg-indicator-enter,.vg-indicator-leave-active{opacity:0}.vg-indicator{transition:opacity .2s linear}.vg-indicator .vg-indicator-wrapper{position:fixed;border-radius:5px;background:rgba(0,0,0,.7);color:#fff;top:50%;left:50%;transform:translate(-50%,-50%);box-sizing:border-box;text-align:center;z-index:3000}.vg-indicator .vg-indicator-wrapper .vg-indicator-spin{display:inline-block;text-align:center}.vg-indicator .vg-indicator-wrapper .vg-indicator-text{display:block;color:#fff;text-align:center;margin-top:10px;font-size:16px}.vg-indicator .vg-indicator-mask{position:fixed;width:100%;height:100%;top:0;left:0;background:#fff;z-index:3000}.vg-indicator .vg-indicator-mask.transparent{background:transparent;opacity:0}.vg-slider{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%;height:2px;background:#f5f5f5;cursor:pointer;position:relative}.vg-slider:before{position:absolute;content:\" \";top:-12px;bottom:-12px;right:0;left:0}.vg-slider .vg-slider-bar{height:100%;position:absolute;transition:width .2s}.vg-slider .vg-slider-bar.start{background:#f5f5f5;z-index:2}.vg-slider .vg-slider-bar.end{background:#007aff;z-index:1}.vg-slider .vg-slider-bar .vg-slider-button{position:absolute;right:0;top:50%;transform:translate3d(50%,-50%,0);height:24px;width:24px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.5);cursor:-webkit-grab;cursor:grab}.vg-slider .vg-slider-bar .vg-slider-button.drag-icon{box-shadow:none;width:28px;height:28px}.vg-slider .vg-slider-bar .vg-slider-button.drag-icon img{width:100%;height:100%;pointer-events:none;position:absolute;left:0;right:0;top:0;bottom:0}.vg-slider .vg-slider-bar .vg-slider-button .vg-slider-button-tip{transform:translate3d(0,-20px,0);background:#000;border-radius:2px;padding:0 4px;color:#fff;height:15px;line-height:15px;text-align:center;font-size:12px;position:relative}.vg-slider .vg-slider-bar .vg-slider-button .vg-slider-button-tip:after{position:absolute;border-left:3px solid transparent;border-right:3px solid transparent;border-top:3px solid #000;border-bottom:3px solid transparent;content:\" \";bottom:-6px;left:50%;transform:translate3d(-50%,0,0)}.vg-action-sheet .vg-action-sheet-title{height:50px;margin:0;line-height:50px;text-align:center;font-weight:400;font-size:16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vg-action-sheet .vg-action-sheet-content{padding:0;margin:0;text-align:center}.vg-action-sheet .vg-action-sheet-content>li{line-height:50px;cursor:pointer;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vg-action-sheet .vg-action-sheet-content>li:after{position:absolute;box-sizing:border-box;content:\" \";pointer-events:none;top:-50%;right:-50%;bottom:-50%;left:-50%;border:0 solid #ebedf0;border-top-width:1px;transform:scale(.5)}.vg-action-sheet .vg-action-sheet-content>li.vg-action-sheet-cancel:before{display:block;height:8px;background-color:#f7f8fa;content:\" \"}.vg-action-sheet .vg-action-sheet-content>li.disable{color:#c8c9cc;cursor:not-allowed}.vg-action-sheet .vg-action-sheet-content .vg-action-sheet-loading-warpper{line-height:normal}.vg-action-sheet .vg-action-sheet-content .vg-action-sheet-loading-warpper>.loading{display:inline-block;margin:20px auto}.vg-picky-stepper .vg-picky-stepper-header{text-align:center;height:50px;position:relative}.vg-picky-stepper .vg-picky-stepper-header .vg-picky-stepper-title{display:inline-block;height:100%;line-height:50px;color:#666;font-size:17px}.vg-picky-stepper .vg-picky-stepper-header .vg-picky-stepper-back{position:absolute;left:10px;top:10px}.vg-picky-stepper .vg-picky-stepper-header .vg-picky-stepper-close{position:absolute;right:10px;top:10px}.vg-picky-stepper .vg-picky-stepper-content.show{display:block}.vg-picky-stepper .vg-picky-stepper-content.hide{display:none}.vg-picky-stepper .vg-picky-stepper-content ul{width:90%;list-style-type:none;padding:0;margin:0 auto}.vg-picky-stepper .vg-picky-stepper-content ul li{cursor:pointer;line-height:44px;border-bottom:1px solid #e4e4e4}.vg-picky-stepper .vg-picky-stepper-content ul li:last-child{border-bottom:none}.vg-picky-stepper .vg-picky-stepper-content ul li .text{margin-left:5px;font-size:15px;color:#2a2a2a}.vg-picky-stepper .vg-picky-stepper-content ul li .textarea-wapper{width:100%;position:relative}.vg-picky-stepper .vg-picky-stepper-content ul li .textarea-wapper .textarea-counter{position:absolute;bottom:20px;right:8px;font-size:12px;color:#999;height:15px;line-height:15px}.vg-picky-stepper .vg-picky-stepper-content ul li .input,.vg-picky-stepper .vg-picky-stepper-content ul li .textarea{border-radius:5px;border:1px solid #e2e2e2;outline:none;font-size:15px;height:30px;background:#eee;text-shadow:none;-webkit-appearance:none;box-shadow:inset 0 0 0 #fff}.vg-picky-stepper .vg-picky-stepper-content ul li .input.active,.vg-picky-stepper .vg-picky-stepper-content ul li .textarea.active{color:#2a2a2a;background:#f5f5f5}.vg-picky-stepper .vg-picky-stepper-content ul li .input{padding:0 8px;margin-left:8px;width:calc(100% - 26px)}.vg-picky-stepper .vg-picky-stepper-content ul li .textarea{margin:0;padding:8px;width:calc(100% - 18px);min-height:65px;resize:none}.vg-picky-stepper .vg-picky-stepper-content ul li .input:focus,.vg-picky-stepper .vg-picky-stepper-content ul li .textarea:focus{color:#2a2a2a;background:#f5f5f5}.vg-picky-stepper .vg-picky-stepper-footer .step-confirm{margin:10px auto;width:90%}.vg-counter .vg-counter-plus,.vg-counter .vg-counter-screen,.vg-counter .vg-counter-subtract{border-radius:4px;color:#4a4a4a;height:30px;display:inline-block;background:#f2f2f2;min-width:32px;text-align:center;line-height:30px;cursor:pointer;margin:0 .5px;font-size:15px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vg-counter .vg-counter-plus.disabled,.vg-counter .vg-counter-screen.disabled,.vg-counter .vg-counter-subtract.disabled{opacity:.5;cursor:not-allowed}.vg-counter .vg-counter-screen{padding:0 5px}.vg-pull-refresh{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:all .2s ease-out}.vg-pull-refresh.none{transition:none 0s ease 0s}.vg-pull-refresh.dragging{cursor:-webkit-grab;cursor:grab}.vg-pull-refresh .vg-pull-refresh-draggin-text,.vg-pull-refresh .vg-pull-refresh-loading{text-align:center}.vg-pull-refresh .vg-pull-refresh-draggin-text>span,.vg-pull-refresh .vg-pull-refresh-loading>span{display:inline-block;font-size:13px;color:#007aff}.vg-skeleton{width:100%;margin:5px 0}.vg-skeleton .animated-background{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:#f6f7f8;background:linear-gradient(90deg,#eee 8%,#ddd 18%,#eee 33%);background-size:800px 104px;height:68px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}.vg-skeleton .background-masker{background:#fff;position:absolute}.vg-skeleton .background-masker.header-left{height:100%;top:0;bottom:0;left:80px;width:10px;background:transparent}.vg-skeleton .background-masker.header-left.avatar{background:#fff}.vg-skeleton .background-masker.header-right{right:0;top:0;height:16px;width:40%}.vg-skeleton .background-masker.header-bottom-0{top:-10px;right:0;left:0;height:10px}.vg-skeleton .background-masker.header-bottom-0.avatar{left:80px}.vg-skeleton .background-masker.header-bottom-1{top:16px;right:0;left:0;height:10px}.vg-skeleton .background-masker.header-bottom-1.avatar{left:80px}.vg-skeleton .background-masker.header-bottom-2{top:42px;right:0;left:0;height:10px}.vg-skeleton .background-masker.header-bottom-2.avatar{left:80px}.vg-skeleton .background-masker.header-bottom-3{top:68px;right:0;left:0;height:10px}.vg-skeleton .background-masker.header-bottom-3.avatar{left:80px}.vg-skeleton .background-masker.header-bottom-4{top:94px;right:0;left:0;height:10px}.vg-skeleton .background-masker.header-bottom-4.avatar{left:80px}.vg-skeleton .background-masker.header-bottom-5{top:120px;right:0;left:0;height:10px}.vg-skeleton .background-masker.header-bottom-5.avatar{left:80px}.vg-skeleton .background-masker.header-bottom-6{top:146px;right:0;left:0;height:10px}.vg-skeleton .background-masker.header-bottom-6.avatar{left:80px}.vg-skeleton .background-masker.header-bottom-7{top:172px;right:0;left:0;height:10px}.vg-skeleton .background-masker.header-bottom-7.avatar{left:80px}.vg-skeleton .background-masker.header-bottom-8{top:198px;right:0;left:0;height:10px}.vg-skeleton .background-masker.header-bottom-8.avatar{left:80px}.vg-skeleton .background-masker.header-bottom-9{top:224px;right:0;left:0;height:10px}.vg-skeleton .background-masker.header-bottom-9.avatar{left:80px}.vg-skeleton .background-masker.header-bottom-10{top:250px;right:0;left:0;height:10px}.vg-skeleton .background-masker.header-bottom-10.avatar{left:80px}.vg-skeleton .background-masker.header-bottom-11{top:276px;right:0;left:0;height:10px}.vg-skeleton .background-masker.header-bottom-11.avatar{left:80px}.vg-skeleton .background-masker.header-bottom-12{top:302px;right:0;left:0;height:10px}.vg-skeleton .background-masker.header-bottom-12.avatar{left:80px}.vg-skeleton .background-masker.header-bottom-13{top:328px;right:0;left:0;height:10px}.vg-skeleton .background-masker.header-bottom-13.avatar{left:80px}.vg-skeleton .background-masker.header-bottom-14{top:354px;right:0;left:0;height:10px}.vg-skeleton .background-masker.header-bottom-14.avatar{left:80px}.vg-skeleton .background-masker.header-bottom-15{top:380px;right:0;left:0;height:10px}.vg-skeleton .background-masker.header-bottom-15.avatar{left:80px}.vg-skeleton .background-masker.header-bottom-16{top:406px;right:0;left:0;height:10px}.vg-skeleton .background-masker.header-bottom-16.avatar{left:80px}.vg-skeleton .background-masker.header-bottom-17{top:432px;right:0;left:0;height:10px}.vg-skeleton .background-masker.header-bottom-17.avatar{left:80px}.vg-skeleton .background-masker.header-bottom-18{top:458px;right:0;left:0;height:10px}.vg-skeleton .background-masker.header-bottom-18.avatar{left:80px}.vg-skeleton .background-masker.header-bottom-19{top:484px;right:0;left:0;height:10px}.vg-skeleton .background-masker.header-bottom-19.avatar{left:80px}.vg-skeleton .background-masker.header-bottom-20{top:510px;right:0;left:0;height:10px}.vg-skeleton .background-masker.header-bottom-20.avatar{left:80px}.vg-skeleton .background-masker.subheader-right{bottom:0;height:16px;right:0;width:20%}.vg-skeleton .background-masker.subheader-left{bottom:0;height:16px;left:0;height:0;width:80px;background:transparent}.vg-skeleton .background-masker.subheader-left.avatar{background:#fff}.vg-picker .vg-picker-header{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:44px}.vg-picker .vg-picker-header .vg-picker-header-back,.vg-picker .vg-picker-header .vg-picker-header-close{cursor:pointer;height:100%;min-width:30px;line-height:44px}.vg-picker .vg-picker-header .vg-picker-header-title{line-height:44px;text-align:center;color:#2a2a2a;font-size:15px}.vg-picker .vg-picker-header .vg-picker-header-title.ml30{margin-left:30px}.vg-picker .vg-picker-header .vg-picker-header-title.mr30{margin-right:30px}.vg-picker .vg-picker-cancel,.vg-picker .vg-picker-confirm{display:inline-block;padding:0 5px;text-align:center;color:#007aff}.vg-picker .vg-picker-container{overflow:hidden;height:220px;position:relative;cursor:-webkit-grab;cursor:grab;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vg-picker .vg-picker-container .vg-picker-column{height:100%;width:100%}.vg-picker .vg-picker-container .vg-picker-column ul{transition-timing-function:cubic-bezier(.23,1,.68,1);list-style:none;padding:0;margin:0;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vg-picker .vg-picker-container .vg-picker-column ul li.disabled{cursor:not-allowed}.vg-picker .vg-picker-container .scroll-viewer-window{position:absolute;height:42px;top:50%;margin-top:-21px;width:100%;border-top:1px solid #e4e4e4;border-bottom:1px solid #e4e4e4;pointer-events:none;z-index:3}.vg-picker .vg-picker-container .vg-picker-mask{position:absolute;top:0;left:0;z-index:2;width:100%;height:100%;background-image:linear-gradient(180deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.4)),linear-gradient(0deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.4));background-repeat:no-repeat;background-position:top,bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:none}.vg-tabs .vg-tabs-nav{height:44px;border-bottom:1px solid #e4e4e4;line-height:44px;overflow:hidden;cursor:pointer}.vg-tabs .vg-tabs-nav .vg-tab-text{display:inline-block;height:calc(100% - 4px);color:#2a2a2a}.vg-tabs .vg-tabs-nav .vg-tab-text.active{color:#007aff;border-bottom:2px solid #007aff}.vg-tabs .vg-tabs-nav .vg-tab-text.disabled{cursor:not-allowed;color:#ccc}.vg-tab-item-content.hide{display:none}.vg-animation-list-item{transform:translateY(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:all .5s ease}.vg-animation-list-item.no-transform{transform:none}.vg-slide-in-enter-active,.vg-slide-in-enter-from,.vg-slide-in-enter-to,.vg-slide-in-leave-active{opacity:0;transform:translateY(100px)}.vg-swipe{width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;cursor:-webkit-grab;cursor:grab}.vg-swipe>.v-ynpopup-modal{background:#000}.vg-swipe .vg-swipe-list-container,.vg-swipe .vg-swipe-popup-list-container{position:relative;overflow:hidden}.vg-swipe .vg-swipe-list-container .vg-swipe-item,.vg-swipe .vg-swipe-popup-list-container .vg-swipe-item{width:100%;height:100%;position:absolute}.vg-swipe .vg-swipe-list-container .vg-swipe-item img,.vg-swipe .vg-swipe-popup-list-container .vg-swipe-item img{display:block;pointer-events:none;margin:0 auto;width:100%;height:100%}.vg-swipe .vg-swipe-indicators{pointer-events:none;position:absolute}.vg-swipe .vg-swipe-indicators.vertical{left:5px;top:50%;transform:translateY(-50%)}.vg-swipe .vg-swipe-indicators.vertical .indicator-dot{display:block;width:2px;height:15px;margin:3px 0}.vg-swipe .vg-swipe-indicators.vertical.number{bottom:5px;left:50%;transform:translateX(-50%);top:auto}.vg-swipe .vg-swipe-indicators.horizontal{bottom:5px;left:50%;transform:translateX(-50%)}.vg-swipe .vg-swipe-indicators.horizontal .indicator-dot{width:15px;height:2px;margin:0 3px;display:inline-block}.vg-swipe .vg-swipe-indicators .indicator-dot{background:#007aff}.vg-swipe .vg-swipe-indicators .index{font-size:13px;display:inline-block;height:20px;line-height:20px}.vg-swipe .vg-swipe-indicators.number{text-align:right;width:100%}.vg-swipe .vg-swipe-indicators.number .index{background:rgba(0,0,0,.5);margin-right:5px;border-radius:10px;padding:0 12px;color:#fff}.vg-swipe .vg-swipe-indicators .indicator-dot{opacity:.3}.vg-swipe .vg-swipe-indicators .indicator-dot.active{opacity:1}.vg-swipe-item img{z-index:1}.vg-swipe-item .loading-mask{width:100%;height:100%;z-index:2;position:absolute;left:0;right:0;top:0;bottom:0;background:hsla(0,0%,100%,.5);text-align:center;filter:blur(1px)}.vg-submit-action{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:48px;width:100%;background:#fff;border-top:1px solid #e4e4e4;border-bottom:1px solid #e4e4e4;line-height:48px}.vg-submit-action.fixed{position:fixed;bottom:0}.vg-submit-action .vg-submit-action-flex{width:94%;margin:0 auto}.vg-submit-action .vg-submit-action-flex .custom-value{text-align:left}.vg-submit-action .vg-submit-action-total-text{font-size:14px;color:#666;cursor:pointer}.vg-submit-action .vg-submit-value-description{font-size:12px;color:#666}.vg-submit-action .vg-submit-action-currency{cursor:pointer;color:#f56a00;margin:0 4px}.vg-submit-action .vg-submit-action-currency.line-height-26{line-height:20px;margin:0}.vg-submit-action .vg-submit-action-currency small{font-size:12px}.vg-submit-action .vg-submit-action-currency b{margin-left:3px;font-size:22px}.vg-submit-action .vg-submit-action-icon{vertical-align:top;cursor:pointer;margin-left:5px}.vg-submit-action .vg-submit-action-button{margin:4px auto}.vg-submit-action .vg-submit-action-popup{position:fixed;left:0;right:0;top:0;width:100%;z-index:1;overflow:hidden}.vg-submit-action .vg-submit-action-popup>.v-vgpopup-modal{position:absolute;top:0;height:100%;width:100%;left:0;right:0}.vg-submit-action .vg-submit-action-popup .vg-submit-action-content{background:#fff;width:94%;margin:0 auto}.vg-submit-bar-text{font-size:12px;line-height:14px;color:#666}.vg-field{padding:10px 10px;line-height:24px;box-sizing:border-box;width:100%;background:#fff;position:relative}.vg-field.vg-field-column{line-height:none;padding:0 10px}.vg-field .vg-field-container .column-flex-item{height:44px;line-height:44px}.vg-field .vg-field-container .vg-field-label{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:left}.vg-field .vg-field-container .vg-field-label.limit-label-width{width:90px}.vg-field .vg-field-container .vg-field-label .label-wrapper{font-size:15px;color:#646566}.vg-field .vg-field-container .vg-field-input>input.input-ele,.vg-field .vg-field-container .vg-field-textarea>input.input-ele{font-size:14px;outline:none;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;display:block;box-sizing:border-box;width:100%;min-width:0;margin:0;padding:0;line-height:inherit;text-align:left;background-color:transparent;border:0;resize:none}.vg-field .vg-field-container .vg-field-input>textarea.textarea-ele,.vg-field .vg-field-container .vg-field-textarea>textarea.textarea-ele{word-break:break-all;font-size:14px;border:none;outline:none;width:100%;padding:0}.vg-field .vg-field-container .vg-field-input .vg-field-textarea-counter,.vg-field .vg-field-container .vg-field-textarea .vg-field-textarea-counter{text-align:right}.vg-field .vg-field-container .vg-field-input .vg-field-textarea-counter span,.vg-field .vg-field-container .vg-field-textarea .vg-field-textarea-counter span{font-size:12px;color:#646566}.vg-field .vg-field-container .vg-field-input>input.input-ele.disable,.vg-field .vg-field-container .vg-field-input>textarea.textarea-ele.disable,.vg-field .vg-field-container .vg-field-textarea>input.input-ele.disable,.vg-field .vg-field-container .vg-field-textarea>textarea.textarea-ele.disable{cursor:not-allowed}.vg-field-solo:after{right:0;bottom:0;left:16px;border-bottom:1px solid #ebedf0;transform:scaleY(.5)}.border-top-bottom:after,.vg-field-solo:after{position:absolute;box-sizing:border-box;content:\" \";pointer-events:none}.border-top-bottom:after{top:-50%;right:-50%;bottom:-50%;left:-50%;border:0 solid #ebedf0;transform:scale(.5);border-width:1px 0}.vg-dropdown{position:relative}.vg-dropdown .vg-dropdown-popup{position:fixed;overflow:hidden}.vg-dropdown .vg-dropdown-popup.z-index{z-index:1}.vg-dropdown .vg-dropdown-popup.down,.vg-dropdown .vg-dropdown-popup.up{left:0;right:0}.vg-dropdown .vg-dropdown-popup.down{bottom:0}.vg-dropdown .vg-dropdown-popup.up{top:0}.vg-dropdown .vg-dropdown-popup.left,.vg-dropdown .vg-dropdown-popup.right{top:0;bottom:0}.vg-dropdown .vg-dropdown-popup.left{left:0}.vg-dropdown .vg-dropdown-popup.right{right:0}.vg-dropdown .vg-dropdown-popup .v-vgpopup-modal{position:absolute;height:100%;width:100%;left:0;right:0;background-color:rgba(0,0,0,.7)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4160":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var forEach = __webpack_require__("17c2");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44de":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "466d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toLength = __webpack_require__("50c4");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aFunction = __webpack_require__("1c0b");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4ae1":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var getBuiltIn = __webpack_require__("d066");
var aFunction = __webpack_require__("1c0b");
var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var create = __webpack_require__("7c73");
var bind = __webpack_require__("0538");
var fails = __webpack_require__("d039");

var nativeConstruct = getBuiltIn('Reflect', 'construct');

// `Reflect.construct` method
// https://tc39.github.io/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "4d63":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var inheritIfRequired = __webpack_require__("7156");
var defineProperty = __webpack_require__("9bf2").f;
var getOwnPropertyNames = __webpack_require__("241c").f;
var isRegExp = __webpack_require__("44e7");
var getFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var setInternalState = __webpack_require__("69f3").set;
var setSpecies = __webpack_require__("2626");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
  re2[MATCH] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

// `RegExp` constructor
// https://tc39.github.io/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var sticky;

    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
      return pattern;
    }

    if (CORRECT_NEW) {
      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
    } else if (pattern instanceof RegExpWrapper) {
      if (flagsAreUndefined) flags = getFlags.call(pattern);
      pattern = pattern.source;
    }

    if (UNSUPPORTED_Y) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    var result = inheritIfRequired(
      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
      thisIsRegExp ? this : RegExpPrototype,
      RegExpWrapper
    );

    if (UNSUPPORTED_Y && sticky) setInternalState(result, { sticky: sticky });

    return result;
  };
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };
  var keys = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys.length > index) proxy(keys[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.github.io/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("0366");
var toObject = __webpack_require__("7b0b");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var getIteratorMethod = __webpack_require__("35a1");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "4ec9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__("6d61");
var collectionStrong = __webpack_require__("6566");

// `Map` constructor
// https://tc39.github.io/ecma262/#sec-map-objects
module.exports = collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "4fad":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var $entries = __webpack_require__("6f53").entries;

// `Object.entries` method
// https://tc39.github.io/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5201":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bzsiIHdpZHRoPSIyMDBweCIgaGVpZ2h0PSIyMDBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KPGNpcmNsZSBjeD0iODQiIGN5PSI1MCIgcj0iMC4yNTQyNjgiIGZpbGw9IiMwMDdhZmYiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMC4yODQwOTA5MDkwOTA5MDkwNnMiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMTA7MCIga2V5U3BsaW5lcz0iMCAwLjUgMC41IDEiIGJlZ2luPSIwcyI+PC9hbmltYXRlPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS4xMzYzNjM2MzYzNjM2MzYycyIgY2FsY01vZGU9ImRpc2NyZXRlIiBrZXlUaW1lcz0iMDswLjI1OzAuNTswLjc1OzEiIHZhbHVlcz0iIzAwN2FmZjsjNThhOGZmOyNjZGU1ZmY7IzU4YThmZjsjMDA3YWZmIiBiZWdpbj0iMHMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iMTYiIGN5PSI1MCIgcj0iMCIgZmlsbD0iIzAwN2FmZiI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS4xMzYzNjM2MzYzNjM2MzYycyIgY2FsY01vZGU9InNwbGluZSIga2V5VGltZXM9IjA7MC4yNTswLjU7MC43NTsxIiB2YWx1ZXM9IjA7MDsxMDsxMDsxMCIga2V5U3BsaW5lcz0iMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDEiIGJlZ2luPSIwcyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjEzNjM2MzYzNjM2MzYzNjJzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlUaW1lcz0iMDswLjI1OzAuNTswLjc1OzEiIHZhbHVlcz0iMTY7MTY7MTY7NTA7ODQiIGtleVNwbGluZXM9IjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxIiBiZWdpbj0iMHMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iMTYiIGN5PSI1MCIgcj0iOS43NDI5MSIgZmlsbD0iIzU4YThmZiI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS4xMzYzNjM2MzYzNjM2MzYycyIgY2FsY01vZGU9InNwbGluZSIga2V5VGltZXM9IjA7MC4yNTswLjU7MC43NTsxIiB2YWx1ZXM9IjA7MDsxMDsxMDsxMCIga2V5U3BsaW5lcz0iMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDEiIGJlZ2luPSItMC4yODQwOTA5MDkwOTA5MDkwNnMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS4xMzYzNjM2MzYzNjM2MzYycyIgY2FsY01vZGU9InNwbGluZSIga2V5VGltZXM9IjA7MC4yNTswLjU7MC43NTsxIiB2YWx1ZXM9IjE2OzE2OzE2OzUwOzg0IiBrZXlTcGxpbmVzPSIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMSIgYmVnaW49Ii0wLjI4NDA5MDkwOTA5MDkwOTA2cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI0OS4xMjU5IiBjeT0iNTAiIHI9IjEwIiBmaWxsPSIjY2RlNWZmIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjEzNjM2MzYzNjM2MzYzNjJzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlUaW1lcz0iMDswLjI1OzAuNTswLjc1OzEiIHZhbHVlcz0iMDswOzEwOzEwOzEwIiBrZXlTcGxpbmVzPSIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMSIgYmVnaW49Ii0wLjU2ODE4MTgxODE4MTgxODFzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuMTM2MzYzNjM2MzYzNjM2MnMiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVRpbWVzPSIwOzAuMjU7MC41OzAuNzU7MSIgdmFsdWVzPSIxNjsxNjsxNjs1MDs4NCIga2V5U3BsaW5lcz0iMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDEiIGJlZ2luPSItMC41NjgxODE4MTgxODE4MTgxcyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI4My4xMjU5IiBjeT0iNTAiIHI9IjEwIiBmaWxsPSIjNThhOGZmIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjEzNjM2MzYzNjM2MzYzNjJzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlUaW1lcz0iMDswLjI1OzAuNTswLjc1OzEiIHZhbHVlcz0iMDswOzEwOzEwOzEwIiBrZXlTcGxpbmVzPSIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMSIgYmVnaW49Ii0wLjg1MjI3MjcyNzI3MjcyNzJzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuMTM2MzYzNjM2MzYzNjM2MnMiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVRpbWVzPSIwOzAuMjU7MC41OzAuNzU7MSIgdmFsdWVzPSIxNjsxNjsxNjs1MDs4NCIga2V5U3BsaW5lcz0iMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDEiIGJlZ2luPSItMC44NTIyNzI3MjcyNzI3MjcycyI+PC9hbmltYXRlPgo8L2NpcmNsZT4KPCEtLSBbbGRpb10gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gLS0+PC9zdmc+"

/***/ }),

/***/ "5211":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return off; });
/* unused harmony export stopPropagation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return preventDefault; });
/*
* @Author: Just be free
* @Date:   2020-10-21 18:26:11
* @Last Modified by:   Just be free
* @Last Modified time: 2020-12-29 17:25:41
* @E-mail: justbefree@126.com
*/

/* eslint-disable */
var passiveSupported = false;

try {
  var options = Object.defineProperty({}, "passive", {
    get: function get() {
      passiveSupported = true;
    }
  });
  window.addEventListener("test", function () {}, options);
} catch (err) {}

var bind = function bind(dom, type, fn, args) {
  var passive = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

  var callback = function callback(e) {
    fn(e, args);
  };

  dom.addEventListener(type, callback, passiveSupported ? {
    passive: passive,
    capture: false
  } : false);
  return function () {
    dom.removeEventListener(type, callback);
  };
}; // https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener

var on = function on(dom, type, fn) {
  var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  dom.addEventListener(type, fn, passiveSupported ? {
    passive: passive,
    capture: false
  } : false);
};
var off = function off(dom, type, fn) {
  dom.removeEventListener(type, fn);
};
var stopPropagation = function stopPropagation(event) {
  event && typeof event.stopPropagation === "function" && event.stopPropagation();
};
var preventDefault = function preventDefault(evnet) {
  var isStopPropagation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (event && typeof event.cancelable !== "boolean" || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
};

/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "5344":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VueGgy; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4160");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("b0c0");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("25f0");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("159b");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2909");
/* harmony import */ var _Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("53ca");
/* harmony import */ var _Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("d4ec");
/* harmony import */ var _Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("bee2");
/* harmony import */ var _Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("262e");
/* harmony import */ var _Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("2caf");
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("ce1f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return vue_class_component__WEBPACK_IMPORTED_MODULE_11__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return vue_class_component__WEBPACK_IMPORTED_MODULE_11__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vue_class_component__WEBPACK_IMPORTED_MODULE_11__["a"]; });

/* harmony import */ var _utils_event_bus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("00b0");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("5211");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("d257");












/*
* @Author: Just be free
* @Date:   2020-09-23 17:32:46
* @Last Modified by:   Just be free
* @Last Modified time: 2020-12-29 17:31:47
* @E-mail: justbefree@126.com
*/
var pkg = __webpack_require__("9224");






var VueGgy = /*#__PURE__*/function (_Vue) {
  Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(VueGgy, _Vue);

  var _super = Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(VueGgy);

  function VueGgy() {
    var _this;

    Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(this, VueGgy);

    _this = _super.apply(this, arguments);
    _this.version = pkg.version;
    return _this;
  }

  Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(VueGgy, [{
    key: "getVersion",
    value: function getVersion() {
      return this.version;
    }
  }, {
    key: "getDomTree",
    value: function getDomTree() {
      return this.$el;
    }
  }, {
    key: "getSlots",
    value: function getSlots() {
      var slotName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default";
      var slots = this.$slots[slotName] && typeof this.$slots[slotName] === "function" && this.$slots[slotName]();
      return slots;
    }
  }, {
    key: "getFragmentChildren",
    value: function getFragmentChildren(tagName, children) {
      var result = [];
      children && Array.isArray(children) && children.forEach(function (node) {
        if (node && Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(node.type) === "object") {
          if (node.type.name === tagName) {
            result.push(node);
          }
        }
      });
      return result;
    }
  }, {
    key: "getCustomSlotsByTagName",
    value: function getCustomSlotsByTagName(tagName) {
      var _this2 = this;

      var slots = this.getSlots();
      var components = [];
      slots && Array.isArray(slots) && slots.forEach(function (slot) {
        if (slot && Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(slot.type) === "object") {
          if (slot.type.name === tagName) {
            components.push(slot);
          }
        } else if (slot && Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(slot.type) === "symbol") {
          if (slot.type.toString() === "Symbol(Fragment)") {
            components.push.apply(components, Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this2.getFragmentChildren(tagName, slot.children)));
          }
        }
      });
      return components;
    }
  }, {
    key: "visibilityChangeEvent",
    value: function visibilityChangeEvent() {
      var status = document.visibilityState;
      _utils_event_bus__WEBPACK_IMPORTED_MODULE_12__[/* EventBus */ "a"].emit("window:visibilitychange", status);
    }
  }, {
    key: "bindVisibilityChange",
    value: function bindVisibilityChange() {
      Object(_utils_event__WEBPACK_IMPORTED_MODULE_13__[/* on */ "c"])(window, "visibilitychange", this.visibilityChangeEvent);
    }
  }, {
    key: "unbindVisibilityChange",
    value: function unbindVisibilityChange() {
      Object(_utils_event__WEBPACK_IMPORTED_MODULE_13__[/* off */ "b"])(window, "visibilitychange", this.visibilityChangeEvent);
    }
  }, {
    key: "resizeEvent",
    value: function resizeEvent(ev) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_14__[/* throttle */ "m"])(function () {
        _utils_event_bus__WEBPACK_IMPORTED_MODULE_12__[/* EventBus */ "a"].emit("window:resize", ev);
      })();
    }
  }, {
    key: "bindResize",
    value: function bindResize() {
      Object(_utils_event__WEBPACK_IMPORTED_MODULE_13__[/* on */ "c"])(window, "resize", this.resizeEvent);
    }
  }, {
    key: "unbindResize",
    value: function unbindResize() {
      Object(_utils_event__WEBPACK_IMPORTED_MODULE_13__[/* off */ "b"])(window, "resize", this.resizeEvent);
    }
  }]);

  return VueGgy;
}(vue_class_component__WEBPACK_IMPORTED_MODULE_11__[/* Vue */ "b"]);


VueGgy.componentName = "VueGgy";


/***/ }),

/***/ "53ca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a4d3");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e01a");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d28b");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("e260");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3ca3");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__);







function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "5499":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjAyNTUzMjkzNTc5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1ODIiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNOTYwIDQ0Ny4wMDhxLTExLjAwOC0xNTIuOTkyLTEyMC0yNjEuNTA0dC0yNjAuOTkyLTEyMC41MTJxLTE2LTAuOTkyLTI3LjQ4OCA5LjUwNHQtMTEuNDg4IDI2LjQ5NnEwIDE0LjAxNiA5LjUwNCAyNC41MTJ0MjMuNDg4IDExLjQ4OHE1NS4wMDggNCAxMDcuMDA4IDI2LjAxNiA2MC45OTIgMjYuMDE2IDEwOC45OTIgNzMuNTA0dDc0LjAxNiAxMDkuNTA0cTIyLjAxNiA1MS4wMDggMjYuMDE2IDEwNi4wMTYgMC45OTIgMTQuMDE2IDExLjQ4OCAyMy40ODh0MjQuNTEyIDkuNTA0cTE1LjAwOCAwIDI2LjAxNi0xMS4wMDggMTEuMDA4LTEyIDguOTkyLTI3LjAwOHoiIHAtaWQ9IjI1ODMiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4="

/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5a34":
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__("44e7");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "60da":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var objectKeys = __webpack_require__("df75");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "6566":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__("9bf2").f;
var create = __webpack_require__("7c73");
var redefineAll = __webpack_require__("e2cc");
var bind = __webpack_require__("0366");
var anInstance = __webpack_require__("19aa");
var iterate = __webpack_require__("2266");
var defineIterator = __webpack_require__("7dd0");
var setSpecies = __webpack_require__("2626");
var DESCRIPTORS = __webpack_require__("83ab");
var fastKey = __webpack_require__("f183").fastKey;
var InternalStateModule = __webpack_require__("69f3");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6ab6":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjA0Mjk5MTkxOTA2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUzODYiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNOTUwLjkyNzM2IDQzNS4yYzM4LjcwNzIgMC4wNDYwOCA3MC42NzY0OCAzMC42NzkwNCA3Mi45NDQ2NCA2OS44ODggMi4yNjgxNiAzOS4yMTQwOC0yNS45NTMyOCA3My40MzEwNC02NC4zODkxMiA3OC4wNjk3NmwtOC41NTU1MiAwLjUyMjI0SDczLjA3MjY0Yy0zOC43MDcyLTAuMDQ2MDgtNzAuNjc2NDgtMzAuNjc5MDQtNzIuOTQ0NjQtNjkuODg4Qy0yLjE0MDE2IDQ3NC41NzI4IDI2LjA4MTI4IDQ0MC4zNjA5NiA2NC41MTIgNDM1LjcyMjI0TDczLjA3MjY0IDQzNS4yaDg3Ny44NTQ3MnoiIGZpbGw9IiM0QTRBNEEiIHAtaWQ9IjUzODciPjwvcGF0aD48L3N2Zz4="

/***/ }),

/***/ "6b75":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "6d61":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var InternalMetadataModule = __webpack_require__("f183");
var iterate = __webpack_require__("2266");
var anInstance = __webpack_require__("19aa");
var isObject = __webpack_require__("861d");
var fails = __webpack_require__("d039");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var setToStringTag = __webpack_require__("d44e");
var inheritIfRequired = __webpack_require__("7156");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "6f53":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var objectKeys = __webpack_require__("df75");
var toIndexedObject = __webpack_require__("fc6a");
var propertyIsEnumerable = __webpack_require__("d1e7").f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.github.io/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7db0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $find = __webpack_require__("b727").find;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "81d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__("7b0b");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "857a":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.github.io/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8c75":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjAzMzUzOTI0NjIzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1MzcyIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTEwMjQgNTEyQTUxMiA1MTIgMCAxIDEgMCA1MTJhNTEyIDUxMiAwIDAgMSAxMDI0IDB6TTM2Ny45MDg1NzEgMjkwLjM3NzE0M2E1NC44NTcxNDMgNTQuODU3MTQzIDAgMSAwLTc3LjUzMTQyOCA3Ny41MzE0MjhMNDM0LjQ2ODU3MSA1MTIgMjkwLjM3NzE0MyA2NTYuMDkxNDI5YTU0Ljg1NzE0MyA1NC44NTcxNDMgMCAxIDAgNzcuNTMxNDI4IDc3LjUzMTQyOEw1MTIgNTg5LjUzMTQyOWwxNDQuMDkxNDI5IDE0NC4wOTE0MjhhNTQuODU3MTQzIDU0Ljg1NzE0MyAwIDEgMCA3Ny41MzE0MjgtNzcuNTMxNDI4TDU4OS41MzE0MjkgNTEybDE0NC4wOTE0MjgtMTQ0LjA5MTQyOWE1NC44NTcxNDMgNTQuODU3MTQzIDAgMSAwLTc3LjUzMTQyOC03Ny41MzE0MjhMNTEyIDQzNC40Njg1NzEgMzY3LjkwODU3MSAyOTAuMzc3MTQzeiIgZmlsbD0iI0NDQ0NDQyIgcC1pZD0iMTUzNzMiPjwvcGF0aD48L3N2Zz4="

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9224":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"vueggy\",\"version\":\"3.1.1\",\"private\":false,\"description\":\"Lightweight Mobile UI Components built on Vue3\",\"author\":\"just be free <justbefree@126.com>\",\"scripts\":{\"build:components\":\"vue-cli-service build --mode production --target lib --name vueggy --dest lib src/index.ts\",\"serve\":\"vue-cli-service serve\",\"build\":\"vue-cli-service build\",\"lint\":\"vue-cli-service lint\"},\"dependencies\":{\"core-js\":\"^3.6.5\",\"vue\":\"^3.0.5\",\"vue-class-component\":\"^8.0.0-0\",\"vue-router\":\"^4.0.0-beta.11\"},\"devDependencies\":{\"@typescript-eslint/eslint-plugin\":\"^2.33.0\",\"@typescript-eslint/parser\":\"^2.33.0\",\"@vue/cli-plugin-babel\":\"~4.5.0\",\"@vue/cli-plugin-eslint\":\"~4.5.0\",\"@vue/cli-plugin-typescript\":\"^4.5.6\",\"@vue/cli-service\":\"~4.5.0\",\"@vue/compiler-sfc\":\"^3.0.5\",\"@vue/eslint-config-typescript\":\"^5.0.2\",\"babel-eslint\":\"^10.1.0\",\"eslint\":\"^6.7.2\",\"eslint-plugin-vue\":\"^7.0.0-0\",\"mini-css-extract-plugin\":\"^0.11.2\",\"sass\":\"^1.26.11\",\"sass-loader\":\"^10.0.2\",\"typescript\":\"~3.9.3\"},\"main\":\"lib/vueggy.umd.min.js\",\"types\":\"types/index.d.ts\",\"files\":[\"lib\",\"packages\",\"*.d.ts\"],\"eslintConfig\":{\"root\":true,\"env\":{\"node\":true},\"extends\":[\"plugin:vue/vue3-essential\",\"eslint:recommended\",\"@vue/typescript\"],\"parserOptions\":{\"parser\":\"@typescript-eslint/parser\"},\"rules\":{}},\"browserslist\":[\"> 1%\",\"last 2 versions\",\"not dead\"],\"homepage\":\"https://github.com/justbefree/vueggy#readme\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/justbefree/vueggy.git\"},\"bugs\":{\"url\":\"https://github.com/justbefree/vueggy/issues\"}}");

/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9d21":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rotate; });
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a9e3");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d4ec");
/* harmony import */ var _Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bee2");
/* harmony import */ var _Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("262e");
/* harmony import */ var _Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2caf");
/* harmony import */ var _component_VueGgy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5344");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_6__);






/*
* @Author: Just be free
* @Date:   2020-09-28 11:35:23
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-28 16:27:02
* @E-mail: justbefree@126.com
*/
 // import loadingIcon from "./loading.svg";

var loadingIcon = __webpack_require__("5201");


var Props = Object(_component_VueGgy__WEBPACK_IMPORTED_MODULE_5__[/* props */ "d"])({
  color: String,
  size: Number
});

var Rotate = /*#__PURE__*/function (_mixins) {
  Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Rotate, _mixins);

  var _super = Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Rotate);

  function Rotate() {
    Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Rotate);

    return _super.apply(this, arguments);
  }

  Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Rotate, [{
    key: "render",
    value: function render() {
      var color = Object(vue__WEBPACK_IMPORTED_MODULE_6__["ref"])(this.color);
      var spinColor = Object(vue__WEBPACK_IMPORTED_MODULE_6__["computed"])(function () {
        return color.value;
      });
      var size = Object(vue__WEBPACK_IMPORTED_MODULE_6__["ref"])(this.size);
      var spinSize = Object(vue__WEBPACK_IMPORTED_MODULE_6__["computed"])(function () {
        return "".concat(size.value, "px");
      });
      return Object(vue__WEBPACK_IMPORTED_MODULE_6__["h"])("div", {
        class: ["vg-spin-rotate-svg"],
        style: {
          borderBottomColor: spinColor.value,
          borderLeftColor: spinColor.value,
          borderTopColor: spinColor.value,
          width: spinSize.value,
          height: spinSize.value
        }
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_6__["h"])("img", {
        src: loadingIcon
      }, [])]);
    }
  }]);

  return Rotate;
}(Object(_component_VueGgy__WEBPACK_IMPORTED_MODULE_5__[/* mixins */ "c"])(_component_VueGgy__WEBPACK_IMPORTED_MODULE_5__[/* default */ "b"], Props));



/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a15b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IndexedObject = __webpack_require__("44ad");
var toIndexedObject = __webpack_require__("fc6a");
var arrayMethodIsStrict = __webpack_require__("a640");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "a246":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjAyNDg2ODk0MDYzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU1MTEiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNDYuNTI4IDUxMmE0NjUuNDcyIDQ2NS40NzIgMCAxIDAgOTMwLjk0NCAwQTQ2NS40NzIgNDY1LjQ3MiAwIDAgMCA0Ni41MjggNTEyeiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iNTUxMiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgMGE1MTEuOTM2IDUxMS45MzYgMCAwIDEgNTExLjgwOCA0OTguNTZMMTAyNCA1MTJhNTExLjkzNiA1MTEuOTM2IDAgMCAxLTQ5OC41NiA1MTEuODA4TDUxMiAxMDI0YTUxMiA1MTIgMCAwIDEtNTEyLTUxMkE1MTEuOTM2IDUxMS45MzYgMCAwIDEgNDk4LjU2IDAuMTkyTDUxMiAweiBtLTExLjUyIDczLjI4QTQzOC43ODQgNDM4Ljc4NCAwIDAgMCA3My4xNTIgNTEyYzAgMjQyLjQzMiAxOTYuNDggNDM4Ljg0OCA0MzcuODg4IDQzOC44NDhsMTIuNDgtMC4xMjhjMjM3LjQ0LTYuMDggNDI3LjMyOC0yMDAuNjQgNDI3LjMyOC00MzcuNzZsLTAuMTI4LTEyLjQ4QTQzOC44NDggNDM4Ljg0OCAwIDAgMCA1MjQuOCA3My4yOGwtMTIuNDE2LTAuMTI4LTExLjk2OCAwLjEyOHoiIGZpbGw9IiNDQ0NDQ0MiIHAtaWQ9IjU1MTMiPjwvcGF0aD48L3N2Zz4="

/***/ }),

/***/ "a434":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toAbsoluteIndex = __webpack_require__("23cb");
var toInteger = __webpack_require__("a691");
var toLength = __webpack_require__("50c4");
var toObject = __webpack_require__("7b0b");
var arraySpeciesCreate = __webpack_require__("65f0");
var createProperty = __webpack_require__("8418");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a630":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var from = __webpack_require__("4df4");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ab13":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "af03":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "af12":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjAyNDc1NzA1MDI0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUyNTkiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNMCAwbTE4Ni4xNzYgMGw2NTEuNjQ4IDBxMTg2LjE3NiAwIDE4Ni4xNzYgMTg2LjE3NmwwIDY1MS42NDhxMCAxODYuMTc2LTE4Ni4xNzYgMTg2LjE3NmwtNjUxLjY0OCAwcS0xODYuMTc2IDAtMTg2LjE3Ni0xODYuMTc2bDAtNjUxLjY0OHEwLTE4Ni4xNzYgMTg2LjE3Ni0xODYuMTc2WiIgZmlsbD0iIzAwN0FGRiIgcC1pZD0iNTI2MCI+PC9wYXRoPjxwYXRoIGQ9Ik0yMzEuNjggNTgzLjI5NmE0NS41NjggNDUuNTY4IDAgMCAxLTEyLjIyNC0zMS4zNmMwLTExLjcxMiA0LjM1Mi0yMy4wNCAxMi4xNi0zMS4yMzJhNDAuNDQ4IDQwLjQ0OCAwIDAgMSA1OS41MiAwbDEzOC4zNjggMTQ1LjQ3MiAzNDcuMjY0LTM2MC41NzZhNDAuNDQ4IDQwLjQ0OCAwIDAgMSA1OS41MiAwIDQ2LjE0NCA0Ni4xNDQgMCAwIDEgMCA2Mi41MjhsLTM3Ny4wODggMzkyLjA2NGE0MS4yOCA0MS4yOCAwIDAgMS01OS41Mi0wLjMyTDIzMS42OCA1ODMuMjMyeiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iNTI2MSI+PC9wYXRoPjwvc3ZnPg=="

/***/ }),

/***/ "afee":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjAzMzUzODIzMzU3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1MjQ2IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTg0NS42ODIxMzYgNzQ1Ljc2NTc2NGE0NjIuOTkyMzAxIDQ2Mi45OTIzMDEgMCAwIDAgODkuNTk5NjE2LTI3NS43NDczOUE0NzEuOTg4ODM0IDQ3MS45ODg4MzQgMCAwIDAgNDY1LjkyNjA0OSAwLjAwNDM4OSA0NjMuODcwMDEyIDQ2My44NzAwMTIgMCAwIDAgMC4wMDgwNDYgNDY2LjY1MzgxN2E0NzIuMDYxOTc3IDQ3Mi4wNjE5NzcgMCAwIDAgNDY5LjI4MjU2IDQ3MC4wMTM5ODYgNDYxLjUyOTQ1MSA0NjEuNTI5NDUxIDAgMCAwIDI3Ni42MjUxLTkwLjYyMzYxMmwwLjI5MjU3LTAuMjE5NDI3IDE1Ni4xNTkzMzEgMTU2LjIzMjQ3M2E3MC41MDk0MTIgNzAuNTA5NDEyIDAgMSAwIDk5LjYyMDE0NS05OS43NjY0M2wtMTU2LjM3ODc1OS0xNTYuNTI1MDQzeiBtLTM3Ni42ODQxIDk3LjEzMzI5OGEzNzcuNjM0OTUzIDM3Ny42MzQ5NTMgMCAwIDEtMzc1LjQ0MDY3Ny0zNzUuOTUyNjc1QTM3MS4xOTg0MDkgMzcxLjE5ODQwOSAwIDAgMSA0NjYuMjkxNzYyIDkzLjYyNjg0NGEzNzcuNjM0OTUzIDM3Ny42MzQ5NTMgMCAwIDEgMzc1LjQ0MDY3NiAzNzUuOTUyNjc1IDM3MS4xOTg0MDkgMzcxLjE5ODQwOSAwIDAgMS0zNzIuNzM0NDAyIDM3My4zMTk1NDN6IiBmaWxsPSIjQkJCQkJCIiBwLWlkPSIxNTI0NyI+PC9wYXRoPjwvc3ZnPg=="

/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b575":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var classof = __webpack_require__("c6b6");
var macrotask = __webpack_require__("2cf4").set;
var IS_IOS = __webpack_require__("1cdc");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "bac1":
/***/ (function(module, exports) {

/*
* @Author: Just be free
* @Date:   2020-10-27 17:19:56
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-27 17:20:06
* @E-mail: justbefree@126.com
*/

/* eslint-disable */
// https://github.com/hammerjs/touchemulator/blob/master/touch-emulator.js
var eventTarget;
var supportTouch = ("ontouchstart" in window); // polyfills

if (!document.createTouch) {
  document.createTouch = function (view, target, identifier, pageX, pageY, screenX, screenY) {
    // auto set
    return new Touch(target, identifier, {
      pageX: pageX,
      pageY: pageY,
      screenX: screenX,
      screenY: screenY,
      clientX: pageX - window.pageXOffset,
      clientY: pageY - window.pageYoffset
    }, 0, 0);
  };
}

if (!document.createTouchList) {
  document.createTouchList = function () {
    var touchList = new TouchList();

    for (var i = 0; i < arguments.length; i++) {
      touchList[i] = arguments[i];
    }

    touchList.length = arguments.length;
    return touchList;
  };
}

var Touch = function Touch(target, identifier, pos, deltaX, deltaY) {
  deltaX = deltaX || 0;
  deltaY = deltaY || 0;
  this.identifier = identifier;
  this.target = target;
  this.clientX = pos.clientX + deltaX;
  this.clientY = pos.clientY + deltaY;
  this.screenX = pos.screenX + deltaX;
  this.screenY = pos.screenY + deltaY;
  this.pageX = pos.pageX + deltaX;
  this.pageY = pos.pageY + deltaY;
};

var TouchList = function TouchList() {
  var touchList = [];

  touchList["item"] = function (index) {
    return this[index] || null;
  };

  touchList["identifiedTouch"] = function (id) {
    return this[id + 1] || null;
  };

  return touchList;
};

var initiated = false;

var onMouse = function onMouse(touchType) {
  return function (ev) {
    if (ev.type === "mousedown") {
      initiated = true;
    }

    if (ev.type === "mouseup") {
      initiated = false;
    }

    if (ev.type === "mousemove" && !initiated) {
      return;
    }

    if (ev.type === "mousedown" || !eventTarget || eventTarget && !eventTarget.dispatchEvent) {
      eventTarget = ev.target;
    }

    triggerTouch(touchType, ev);

    if (ev.type === "mouseup") {
      eventTarget = null;
    }
  };
};

var triggerTouch = function triggerTouch(eventName, mouseEv) {
  var touchEvent = document.createEvent("Event");
  touchEvent.initEvent(eventName, true, true);
  touchEvent.altKey = mouseEv.altKey;
  touchEvent.ctrlKey = mouseEv.ctrlKey;
  touchEvent.metaKey = mouseEv.metaKey;
  touchEvent.shiftKey = mouseEv.shiftKey;
  touchEvent.touches = getActiveTouches(mouseEv);
  touchEvent.targetTouches = getActiveTouches(mouseEv);
  touchEvent.changedTouches = createTouchList(mouseEv);
  eventTarget.dispatchEvent(touchEvent);
};

var createTouchList = function createTouchList(mouseEv) {
  var touchList = new TouchList();
  touchList.push(new Touch(eventTarget, 1, mouseEv, 0, 0));
  return touchList;
};

var getActiveTouches = function getActiveTouches(mouseEv) {
  if (mouseEv.type === "mouseup") {
    return new TouchList();
  }

  return createTouchList(mouseEv);
};

var TouchEmulator = function TouchEmulator() {
  window.addEventListener("mousedown", onMouse("touchstart"), true);
  window.addEventListener("mousemove", onMouse("touchmove"), true);
  window.addEventListener("mouseup", onMouse("touchend"), true);
};

TouchEmulator["multiTouchOffset"] = 75;

if (!supportTouch) {
  new TouchEmulator();
}

/***/ }),

/***/ "bb2f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "bee2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c067":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./add.svg": "fec2",
	"./arrow-down.svg": "c61f",
	"./arrow-up.svg": "cfcc",
	"./back.svg": "324f",
	"./checkbox-checked.svg": "af12",
	"./checkbox-unchecked.svg": "d3e3",
	"./clear.svg": "8c75",
	"./close.svg": "34b5",
	"./loading.svg": "5499",
	"./minus.svg": "6ab6",
	"./radiobox-checked.svg": "da40",
	"./radiobox-unchecked.svg": "a246",
	"./search.svg": "afee"
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
webpackContext.id = "c067";

/***/ }),

/***/ "c262":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Snake; });
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a9e3");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d4ec");
/* harmony import */ var _Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bee2");
/* harmony import */ var _Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("262e");
/* harmony import */ var _Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2caf");
/* harmony import */ var _component_VueGgy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5344");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_6__);






/*
* @Author: Just be free
* @Date:   2020-09-28 11:35:23
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-28 14:31:34
* @E-mail: justbefree@126.com
*/


var Props = Object(_component_VueGgy__WEBPACK_IMPORTED_MODULE_5__[/* props */ "d"])({
  color: String,
  size: Number
});

var Snake = /*#__PURE__*/function (_mixins) {
  Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Snake, _mixins);

  var _super = Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Snake);

  function Snake() {
    Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Snake);

    return _super.apply(this, arguments);
  }

  Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Snake, [{
    key: "render",
    value: function render() {
      var color = Object(vue__WEBPACK_IMPORTED_MODULE_6__["ref"])(this.color);
      var spinColor = Object(vue__WEBPACK_IMPORTED_MODULE_6__["computed"])(function () {
        return color.value;
      });
      var size = Object(vue__WEBPACK_IMPORTED_MODULE_6__["ref"])(this.size);
      var spinSize = Object(vue__WEBPACK_IMPORTED_MODULE_6__["computed"])(function () {
        return "".concat(size.value, "px");
      });
      return Object(vue__WEBPACK_IMPORTED_MODULE_6__["h"])("div", {
        class: ["vg-spin-snake"],
        style: {
          borderBottomColor: spinColor.value,
          borderLeftColor: spinColor.value,
          borderTopColor: spinColor.value,
          width: spinSize.value,
          height: spinSize.value
        }
      }, []);
    }
  }]);

  return Snake;
}(Object(_component_VueGgy__WEBPACK_IMPORTED_MODULE_5__[/* mixins */ "c"])(_component_VueGgy__WEBPACK_IMPORTED_MODULE_5__[/* default */ "b"], Props));



/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c61f":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjA2NzIzNzk2MTE0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUzODYiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNDYwLjcxOTYyMjMgNzkxLjMyNzIzMzgzbC00MzIuMzYzOTY4ODYtNDYyLjEyNjY5Nzg4YTcwLjY4NjQ4MTQyIDcwLjY4NjQ4MTQyIDAgMCAxIDMuMDE2NDkyOC05OS43NDUzNjIxIDcwLjM4NDgzMjE0IDcwLjM4NDgzMjE0IDAgMCAxIDk5LjY0NDgxMjM3IDMuMTE3MDQyNTRsMzgxLjA4MzU5MTE1IDQwNy4yMjY1Mjg4MiAzODAuODgyNDkxNjMtNDA3LjAyNTQyOTI4YTcwLjM4NDgzMjE0IDcwLjM4NDgzMjE0IDAgMCAxIDk5LjU0NDI2MjYtMy4wMTY0OTI3OWMyOC4zNTUwMzIzNyAyNi41NDUxMzY2OCAyOS43NjI3MjkgNzEuMTg5MjMwMjMgMy4xMTcwNDI1NyA5OS42NDQ4MTIzM2wtNDMyLjM2Mzk2ODg2IDQ2Mi4xMjY2OTc4N2E3MC4wODMxODI4NiA3MC4wODMxODI4NiAwIDAgMS0xMDIuNjYxMzA1MTctMC4yMDEwOTk1MXoiIGZpbGw9IiM2NjY2NjYiIHAtaWQ9IjUzODciPjwvcGF0aD48L3N2Zz4="

/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c7cd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createHTML = __webpack_require__("857a");
var forcedStringHTMLMethod = __webpack_require__("af03");

// `String.prototype.fixed` method
// https://tc39.github.io/ecma262/#sec-string.prototype.fixed
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fixed') }, {
  fixed: function fixed() {
    return createHTML(this, 'tt', '', '');
  }
});


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c975":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $indexOf = __webpack_require__("4d64").indexOf;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cb29":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fill = __webpack_require__("81d5");
var addToUnscopables = __webpack_require__("44d2");

// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cca6":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var assign = __webpack_require__("60da");

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "cdf9":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var newPromiseCapability = __webpack_require__("f069");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "ce1f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Vue; });
/* unused harmony export createDecorator */
/* unused harmony export emits */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mixins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return props; });
/* unused harmony export setup */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/**
  * vue-class-component v8.0.0-beta.3
  * (c) 2015-present Evan You
  * @license MIT
  */


function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function defineGetter(obj, key, getter) {
  Object.defineProperty(obj, key, {
    get: getter,
    enumerable: false,
    configurable: true
  });
}

function defineProxy(proxy, key, target) {
  Object.defineProperty(proxy, key, {
    get: function get() {
      return target[key].value;
    },
    set: function set(value) {
      target[key].value = value;
    },
    enumerable: true,
    configurable: true
  });
}

function getSuper(Ctor) {
  var superProto = Object.getPrototypeOf(Ctor.prototype);

  if (!superProto) {
    return undefined;
  }

  return superProto.constructor;
}

var VueImpl = /*#__PURE__*/function () {
  function VueImpl(props, ctx) {
    var _this = this;

    _classCallCheck(this, VueImpl);

    defineGetter(this, '$props', function () {
      return props;
    });
    defineGetter(this, '$attrs', function () {
      return ctx.attrs;
    });
    defineGetter(this, '$slots', function () {
      return ctx.slots;
    });
    defineGetter(this, '$emit', function () {
      return ctx.emit;
    });
    Object.keys(props).forEach(function (key) {
      Object.defineProperty(_this, key, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: props[key]
      });
    });
  }
  /** @internal */


  _createClass(VueImpl, null, [{
    key: "__vccExtend",
    value: function __vccExtend(options) {
      options.mixins = options.mixins || [];
      options.mixins.push(this.__vccOpts);
    }
    /** @internal */

  }, {
    key: "registerHooks",
    value: function registerHooks(keys) {
      var _this$__vccHooks;

      (_this$__vccHooks = this.__vccHooks).push.apply(_this$__vccHooks, _toConsumableArray(keys));
    }
  }, {
    key: "__vccOpts",
    get: function get() {
      // Early return if `this` is base class as it does not have any options
      if (this === Vue) {
        return {};
      }

      var cache = this.hasOwnProperty('__vccCache') && this.__vccCache;

      if (cache) {
        return cache;
      }

      var Ctor = this; // If the options are provided via decorator use it as a base

      var options = this.__vccCache = this.hasOwnProperty('__vccBase') ? _objectSpread2({}, this.__vccBase) : {}; // Handle super class options

      var Super = getSuper(Ctor);

      if (Super) {
        Super.__vccExtend(options);
      }

      options.methods = _objectSpread2({}, options.methods);
      options.computed = _objectSpread2({}, options.computed);
      var proto = Ctor.prototype;
      Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
          return;
        } // hooks


        if (Ctor.__vccHooks.indexOf(key) > -1) {
          options[key] = proto[key];
          return;
        }

        var descriptor = Object.getOwnPropertyDescriptor(proto, key); // methods

        if (typeof descriptor.value === 'function') {
          options.methods[key] = descriptor.value;
          return;
        } // computed properties


        if (descriptor.get || descriptor.set) {
          options.computed[key] = {
            get: descriptor.get,
            set: descriptor.set
          };
          return;
        }
      });

      options.setup = function (props, ctx) {
        var data = new Ctor(props, ctx);
        var dataKeys = Object.keys(data);
        var plainData = {}; // Initialize reactive data and convert constructor `this` to a proxy

        dataKeys.forEach(function (key) {
          // Skip if the value is undefined not to make it reactive.
          // If the value has `__s`, it's a value from `setup` helper, proceed it later.
          if (data[key] === undefined || data[key] && data[key].__s) {
            return;
          }

          plainData[key] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["ref"])(data[key]);
          defineProxy(data, key, plainData);
        }); // Invoke composition functions

        dataKeys.forEach(function (key) {
          if (data[key] && data[key].__s) {
            var setupState = data[key].__s();

            plainData[key] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["proxyRefs"])(setupState);
          }
        });
        return plainData;
      };

      var decorators = this.hasOwnProperty('__vccDecorators') && this.__vccDecorators;

      if (decorators) {
        decorators.forEach(function (fn) {
          return fn(options);
        });
      } // from Vue Loader


      var injections = ['render', 'ssrRender', '__file', '__cssModules', '__scopeId', '__hmrId'];
      injections.forEach(function (key) {
        if (Ctor[key]) {
          options[key] = Ctor[key];
        }
      });
      return options;
    }
  }]);

  return VueImpl;
}();
/** @internal */


VueImpl.__vccHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUnmount', 'unmounted', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch'];
var Vue = VueImpl;

function Options(options) {
  return function (Component) {
    Component.__vccBase = options;
    return Component;
  };
}
function createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__vccDecorators) {
      Ctor.__vccDecorators = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__vccDecorators.push(function (options) {
      return factory(options, key, index);
    });
  };
}
function mixins() {
  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {
    Ctors[_key] = arguments[_key];
  }

  return /*#__PURE__*/function (_Vue) {
    _inherits(MixedVue, _Vue);

    var _super = _createSuper(MixedVue);

    _createClass(MixedVue, null, [{
      key: "__vccExtend",
      value: function __vccExtend(options) {
        Ctors.forEach(function (Ctor) {
          return Ctor.__vccExtend(options);
        });
      }
    }]);

    function MixedVue() {
      var _this;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _classCallCheck(this, MixedVue);

      _this = _super.call.apply(_super, [this].concat(args));
      Ctors.forEach(function (Ctor) {
        var data = _construct(Ctor, args);

        Object.keys(data).forEach(function (key) {
          _this[key] = data[key];
        });
      });
      return _this;
    }

    return MixedVue;
  }(Vue);
}
function props(propsOptions) {
  var PropsMixin = /*#__PURE__*/function (_Vue2) {
    _inherits(PropsMixin, _Vue2);

    var _super2 = _createSuper(PropsMixin);

    function PropsMixin() {
      _classCallCheck(this, PropsMixin);

      return _super2.apply(this, arguments);
    }

    _createClass(PropsMixin, null, [{
      key: "__vccExtend",
      value: function __vccExtend(options) {
        options.props = propsOptions;
      }
    }]);

    return PropsMixin;
  }(Vue);

  return PropsMixin;
}
function emits(emitsOptions) {
  var EmitsMixin = /*#__PURE__*/function (_Vue3) {
    _inherits(EmitsMixin, _Vue3);

    var _super3 = _createSuper(EmitsMixin);

    function EmitsMixin() {
      _classCallCheck(this, EmitsMixin);

      return _super3.apply(this, arguments);
    }

    _createClass(EmitsMixin, null, [{
      key: "__vccExtend",
      value: function __vccExtend(options) {
        options.emits = emitsOptions;
      }
    }]);

    return EmitsMixin;
  }(Vue);

  return EmitsMixin;
}
function setup(setupFn) {
  // Hack to delay the invocation of setup function.
  // Will be called after dealing with class properties.
  return {
    __s: setupFn
  };
}




/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "cfcc":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjA2NzIzNzUyOTA0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUyNjAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNDYwLjcxOTYyMjMgMjMyLjY3Mjc2NjE3bC00MzIuMzYzOTY4ODYgNDYyLjEyNjY5Nzg4YTcwLjY4NjQ4MTQyIDcwLjY4NjQ4MTQyIDAgMCAwIDMuMDE2NDkyOCA5OS43NDUzNjIxIDcwLjM4NDgzMjE0IDcwLjM4NDgzMjE0IDAgMCAwIDk5LjY0NDgxMjM3LTMuMTE3MDQyNTRsMzgxLjA4MzU5MTE1LTQwNy4yMjY1Mjg4MiAzODAuODgyNDkxNjMgNDA3LjAyNTQyOTI4YTcwLjM4NDgzMjE0IDcwLjM4NDgzMjE0IDAgMCAwIDk5LjU0NDI2MjYgMy4wMTY0OTI3OSA3MC42ODY0ODE0MiA3MC42ODY0ODE0MiAwIDAgMCAzLjExNzA0MjU3LTk5LjY0NDgxMjMzTDU2My4yODAzNzc3IDIzMi40NzE2NjY2NmE3MC4wODMxODI4NiA3MC4wODMxODI4NiAwIDAgMC0xMDIuNjYxMzA1MTcgMC4yMDEwOTk1MXoiIGZpbGw9IiM2NjY2NjYiIHAtaWQ9IjUyNjEiPjwvcGF0aD48L3N2Zz4="

/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d257":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hasOwnProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return hyphenate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
/* unused harmony export capitalize */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCharLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return drop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return push; });
/* unused harmony export getProperty */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return setProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isChineseCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return throttle; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4160");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c975");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("fb6a");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a434");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ac1f");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("25f0");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("5319");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("159b");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("53ca");











/*
* @Author: Just be free
* @Date:   2020-09-22 16:20:15
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-30 09:53:37
* @E-mail: justbefree@126.com
*/
var hasOwnProperty = function hasOwnProperty(obj, props) {
  return Object.prototype.hasOwnProperty.call(obj, props);
};
var hyphenate = function hyphenate(str) {
  return String(str).replace(/\B([A-Z])/g, "-$1").toLowerCase();
};
var camelize = function camelize(str) {
  return String(str).replace(/-(\w)/g, function (_, c) {
    return c ? c.toUpperCase() : "";
  });
};
var capitalize = function capitalize(str) {
  return String(str).charAt(0).toUpperCase() + str.slice(1);
};
var isString = function isString(value) {
  return Object.prototype.toString.call(value) === "[object String]";
};
var isPromise = function isPromise(obj) {
  return !!obj && (Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(obj) === "object" || typeof obj === "function") && typeof obj.then === "function";
};
var isObject = function isObject(value) {
  var type = Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(value);

  return value !== null && type === "object";
};
var isDef = function isDef(value) {
  return value !== undefined && value !== null;
};
var getCharLength = function getCharLength(str) {
  return str.replace(/[\u0391-\uFFE5]/g, "aa").length;
};
var drop = function drop(arr, ele) {
  if (Array.isArray(arr)) {
    if (Array.isArray(ele)) {
      ele.forEach(function (item) {
        var index = arr.indexOf(item);

        if (index > -1) {
          arr.splice(index, 1);
        }
      });
    } else {
      var index = arr.indexOf(ele);

      if (index > -1) {
        arr.splice(index, 1);
      }
    }
  }
};
var push = function push(arr, ele) {
  if (Array.isArray(arr)) {
    if (Array.isArray(ele)) {
      ele.forEach(function (item) {
        if (arr.indexOf(item) < 0) {
          arr.push(item);
        }
      });
    } else {
      if (arr.indexOf(ele) < 0) {
        arr.push(ele);
      }
    }
  }
};
var getProperty = function getProperty(o, attr) {
  return o[attr];
};
var setProperty = function setProperty(o, k, v) {
  Object.defineProperty(o, k, {
    value: v,
    writable: true
  });
}; // 判断是否是中文

var isChineseCharacters = function isChineseCharacters(str) {
  return /^[\u4e00-\u9fa5]+$/i.test(str);
};
var throttle = function throttle(callback) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 800;
  var timer = null;
  return function () {
    var _arguments = arguments;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      callback(_arguments);
      timer = null;
    }, delay);
  };
};

/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d3e3":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjAyNDc1NzM5OTc4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUzODUiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNODM3LjM3NiAwQzk0MC40MTYgMCAxMDI0IDgzLjg0IDEwMjQgMTg2LjYyNHY2NTAuNzUyQzEwMjQgOTQwLjQxNiA5NDAuMTYgMTAyNCA4MzcuMzc2IDEwMjRIMTg2LjYyNEExODYuNzUyIDE4Ni43NTIgMCAwIDEgMCA4MzcuMzc2VjE4Ni42MjRDMCA4My41ODQgODMuODQgMCAxODYuNjI0IDBoNjUwLjc1MnoiIGZpbGw9IiNGRkZGRkYiIHAtaWQ9IjUzODYiPjwvcGF0aD48cGF0aCBkPSJNODM3LjM3NiAwQzk0MC40MTYgMCAxMDI0IDgzLjg0IDEwMjQgMTg2LjYyNHY2NTAuNzUyQzEwMjQgOTQwLjQxNiA5NDAuMTYgMTAyNCA4MzcuMzc2IDEwMjRIMTg2LjYyNEExODYuNzUyIDE4Ni43NTIgMCAwIDEgMCA4MzcuMzc2VjE4Ni42MjRDMCA4My41ODQgODMuODQgMCAxODYuNjI0IDBoNjUwLjc1MnogbTAgNzMuMTUySDE4Ni42MjRjLTYyLjUyOCAwLTExMy40NzIgNTAuODgtMTEzLjQ3MiAxMTMuNDcydjY1MC43NTJjMCA2Mi41MjggNTAuODggMTEzLjQ3MiAxMTMuNDcyIDExMy40NzJoNjUwLjc1MmM2Mi41MjggMCAxMTMuNDcyLTUwLjg4IDExMy40NzItMTEzLjQ3MlYxODYuNjI0YzAtNjIuNTI4LTUwLjg4LTExMy40NzItMTEzLjQ3Mi0xMTMuNDcyeiIgZmlsbD0iI0NDQ0NDQyIgcC1pZD0iNTM4NyI+PC9wYXRoPjwvc3ZnPg=="

/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d4ec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "da40":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjAyNDg2OTI4MjkwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU2MzciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNMCA1MTJhNTEyIDUxMiAwIDEgMCAxMDI0IDBBNTEyIDUxMiAwIDAgMCAwIDUxMnoiIGZpbGw9IiMwMDdBRkYiIHAtaWQ9IjU2MzgiPjwvcGF0aD48cGF0aCBkPSJNMzEyIDE2NS41NjhhNDAwIDQwMCAwIDEgMCA0MDAgNjkyLjg2NCA0MDAgNDAwIDAgMCAwLTQwMC02OTIuODY0eiBtMzIwIDEzOC41NmEyNDAgMjQwIDAgMSAxLTI1Mi4xNiA3LjQ4OGwxMi4xNi03LjQ4OGEyNDAgMjQwIDAgMCAxIDI0MCAweiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iNTYzOSI+PC9wYXRoPjwvc3ZnPg=="

/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "dd13":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./rotate/index.ts": "9d21",
	"./snake/index.ts": "c262",
	"./triple-bounce/index.ts": "f189"
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
webpackContext.id = "dd13";

/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e667":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "e6cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var NativePromise = __webpack_require__("fea9");
var redefine = __webpack_require__("6eeb");
var redefineAll = __webpack_require__("e2cc");
var setToStringTag = __webpack_require__("d44e");
var setSpecies = __webpack_require__("2626");
var isObject = __webpack_require__("861d");
var aFunction = __webpack_require__("1c0b");
var anInstance = __webpack_require__("19aa");
var classof = __webpack_require__("c6b6");
var inspectSource = __webpack_require__("8925");
var iterate = __webpack_require__("2266");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var speciesConstructor = __webpack_require__("4840");
var task = __webpack_require__("2cf4").set;
var microtask = __webpack_require__("b575");
var promiseResolve = __webpack_require__("cdf9");
var hostReportErrors = __webpack_require__("44de");
var newPromiseCapabilityModule = __webpack_require__("f069");
var perform = __webpack_require__("e667");
var InternalStateModule = __webpack_require__("69f3");
var isForced = __webpack_require__("94ca");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "f069":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("1c0b");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "f183":
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__("d012");
var isObject = __webpack_require__("861d");
var has = __webpack_require__("5135");
var defineProperty = __webpack_require__("9bf2").f;
var uid = __webpack_require__("90e3");
var FREEZING = __webpack_require__("bb2f");

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "f189":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Snake; });
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a9e3");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d4ec");
/* harmony import */ var _Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bee2");
/* harmony import */ var _Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("262e");
/* harmony import */ var _Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2caf");
/* harmony import */ var _component_VueGgy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5344");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_6__);






/*
* @Author: Just be free
* @Date:   2020-09-28 11:35:23
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-28 16:27:57
* @E-mail: justbefree@126.com
*/


var Props = Object(_component_VueGgy__WEBPACK_IMPORTED_MODULE_5__[/* props */ "d"])({
  color: String,
  size: Number
});

var Snake = /*#__PURE__*/function (_mixins) {
  Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Snake, _mixins);

  var _super = Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Snake);

  function Snake() {
    Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Snake);

    return _super.apply(this, arguments);
  }

  Object(_Users_stronglee_workspace_vueggy_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Snake, [{
    key: "render",
    value: function render() {
      var color = Object(vue__WEBPACK_IMPORTED_MODULE_6__["ref"])(this.color);
      var spinColor = Object(vue__WEBPACK_IMPORTED_MODULE_6__["computed"])(function () {
        return color.value;
      });
      var size = Object(vue__WEBPACK_IMPORTED_MODULE_6__["ref"])(this.size);
      var spinSize = Object(vue__WEBPACK_IMPORTED_MODULE_6__["computed"])(function () {
        return "".concat(size.value / 3, "px");
      });
      var bounceStyle = Object(vue__WEBPACK_IMPORTED_MODULE_6__["computed"])(function () {
        return {
          width: spinSize.value,
          height: spinSize.value,
          backgroundColor: spinColor.value
        };
      });
      return Object(vue__WEBPACK_IMPORTED_MODULE_6__["h"])("div", {
        class: ["vg-spin-triple-bounce"]
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_6__["h"])("div", {
        class: "triple-bounce1",
        style: bounceStyle.value
      }, []), Object(vue__WEBPACK_IMPORTED_MODULE_6__["h"])("div", {
        class: "triple-bounce2",
        style: bounceStyle.value
      }, []), Object(vue__WEBPACK_IMPORTED_MODULE_6__["h"])("div", {
        class: "triple-bounce3",
        style: bounceStyle.value
      }, [])]);
    }
  }]);

  return Snake;
}(Object(_component_VueGgy__WEBPACK_IMPORTED_MODULE_5__[/* mixins */ "c"])(_component_VueGgy__WEBPACK_IMPORTED_MODULE_5__[/* default */ "b"], Props));



/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "VgDropdown", function() { return /* reexport */ src_dropdown; });
__webpack_require__.d(__webpack_exports__, "VgField", function() { return /* reexport */ src_field; });
__webpack_require__.d(__webpack_exports__, "VgSubmitBarText", function() { return /* reexport */ src_submit_bar_text; });
__webpack_require__.d(__webpack_exports__, "VgSubmitBarValue", function() { return /* reexport */ src_submit_bar_value; });
__webpack_require__.d(__webpack_exports__, "VgSubmitBarPopupContent", function() { return /* reexport */ src_submit_bar_popup_content; });
__webpack_require__.d(__webpack_exports__, "VgSubmitBar", function() { return /* reexport */ src_submit_bar; });
__webpack_require__.d(__webpack_exports__, "VgSwipeItem", function() { return /* reexport */ src_swipe_item; });
__webpack_require__.d(__webpack_exports__, "VgSwipe", function() { return /* reexport */ src_swipe; });
__webpack_require__.d(__webpack_exports__, "VgAnimationListItem", function() { return /* reexport */ src_animation_list_item; });
__webpack_require__.d(__webpack_exports__, "VgAnimationList", function() { return /* reexport */ src_animation_list; });
__webpack_require__.d(__webpack_exports__, "VgTabItem", function() { return /* reexport */ src_tab_item; });
__webpack_require__.d(__webpack_exports__, "VgTabs", function() { return /* reexport */ src_tabs; });
__webpack_require__.d(__webpack_exports__, "VgDatePicker", function() { return /* reexport */ src_date_picker; });
__webpack_require__.d(__webpack_exports__, "VgPicker", function() { return /* reexport */ src_picker; });
__webpack_require__.d(__webpack_exports__, "VgSkeleton", function() { return /* reexport */ src_skeleton; });
__webpack_require__.d(__webpack_exports__, "VgPullRefresh", function() { return /* reexport */ src_pull_refresh; });
__webpack_require__.d(__webpack_exports__, "VgCounter", function() { return /* reexport */ src_counter; });
__webpack_require__.d(__webpack_exports__, "VgPickyStepper", function() { return /* reexport */ src_picky_stepper; });
__webpack_require__.d(__webpack_exports__, "VgActionSheet", function() { return /* reexport */ src_action_sheet; });
__webpack_require__.d(__webpack_exports__, "VgSlider", function() { return /* reexport */ src_slider; });
__webpack_require__.d(__webpack_exports__, "VgIndicator", function() { return /* reexport */ src_indicator; });
__webpack_require__.d(__webpack_exports__, "VgCitypicker", function() { return /* reexport */ src_citypicker; });
__webpack_require__.d(__webpack_exports__, "VgLayout", function() { return /* reexport */ src_layout; });
__webpack_require__.d(__webpack_exports__, "VgCalendar", function() { return /* reexport */ src_calendar; });
__webpack_require__.d(__webpack_exports__, "VgSticky", function() { return /* reexport */ src_sticky; });
__webpack_require__.d(__webpack_exports__, "VgButton", function() { return /* reexport */ src_button; });
__webpack_require__.d(__webpack_exports__, "VgFlex", function() { return /* reexport */ src_flex; });
__webpack_require__.d(__webpack_exports__, "VgFlexItem", function() { return /* reexport */ src_flex_item; });
__webpack_require__.d(__webpack_exports__, "VgToast", function() { return /* reexport */ src_toast; });
__webpack_require__.d(__webpack_exports__, "VgSpin", function() { return /* reexport */ src_spin; });
__webpack_require__.d(__webpack_exports__, "VgPopup", function() { return /* reexport */ src_popup; });
__webpack_require__.d(__webpack_exports__, "VgIcon", function() { return /* reexport */ src_icon; });
__webpack_require__.d(__webpack_exports__, "VgCheckbox", function() { return /* reexport */ src_checkbox; });
__webpack_require__.d(__webpack_exports__, "VgRadiobox", function() { return /* reexport */ src_radiobox; });
__webpack_require__.d(__webpack_exports__, "VgDialog", function() { return /* reexport */ dialog; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__("2ca0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__("9224");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("53ca");

// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__("d257");

// CONCATENATED MODULE: ./src/utils/deep-clone/index.ts






/*
* @Author: Just be free
* @Date:   2020-10-30 09:51:13
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-02 10:41:58
* @E-mail: justbefree@126.com
*/


function assignKey(to, from, key) {
  var val = from[key];

  if (Object(utils["g" /* isDef */])(val)) {
    if (!Object.prototype.hasOwnProperty.call(to, key) || !Object(utils["h" /* isObject */])(val)) {
      to[key] = val;
    } else {
      // eslint-disable-next-line no-use-before-define
      to[key] = deepAssign(Object(to[key]), from[key]);
    }
  }
}

function deepAssign(to, from) {
  Object.keys(from).forEach(function (key, index, arr) {
    assignKey(to, from, key);
  });
  return to;
}
function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  }

  if (Object(esm_typeof["a" /* default */])(obj) === "object") {
    return deepAssign({}, obj);
  }

  return obj;
}
// EXTERNAL MODULE: ./src/index.scss
var src_0 = __webpack_require__("1e09");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("d4ec");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("bee2");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("262e");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 4 modules
var createSuper = __webpack_require__("2caf");

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

// EXTERNAL MODULE: ./src/component/VueGgy.ts
var VueGgy = __webpack_require__("5344");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.fill.js
var es_array_fill = __webpack_require__("cb29");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// CONCATENATED MODULE: ./src/utils/dom/base642svg.ts
/*
* @Author: Just be free
* @Date:   2020-10-14 13:54:06
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-14 14:58:55
* @E-mail: justbefree@126.com
*/
var getDomHTML = function getDomHTML(dom) {
  return dom.outerHTML;
};

var svgDefinition = "data:image/svg+xml;base64,";
/* harmony default export */ var base642svg = ({
  fill: function fill(svg, _fill) {
    var base64 = svg.substring(26);
    var decoded = atob(base64);
    var wrapper = document.createElement("div");
    wrapper.innerHTML = decoded;
    var newSvg = wrapper.firstChild;
    var innerPath = newSvg.getElementsByTagName("path")[0];
    innerPath.setAttribute("fill", _fill);
    var html = getDomHTML(newSvg);
    var newBase64 = "".concat(svgDefinition).concat(btoa(html));
    return newBase64;
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// CONCATENATED MODULE: ./src/utils/dom/style.ts







/*
* @Author: Just be free
* @Date:   2020-10-14 15:14:37
* @Last Modified by:   Just be free
* @Last Modified time: 2021-01-07 18:24:04
* @E-mail: justbefree@126.com
*/
var hex = function hex(c) {
  var value = parseInt(c).toString(16).slice(-2); // 防止颜色值为0的时候hex值错误

  return value === "0" ? "00" : value;
};

var rgb2hex = function rgb2hex(color) {
  var reg = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
  var rgb = color.match(reg);

  if (reg.test(color)) {
    return "#".concat(hex(rgb[1])).concat(hex(rgb[2])).concat(hex(rgb[3]));
  }

  return color;
};

var getStyle = function getStyle(element) {
  return window.getComputedStyle(element);
};
var getPropertyValue = function getPropertyValue(element, attr) {
  var compStyles = getStyle(element);
  var value = compStyles.getPropertyValue(attr);
  return rgb2hex(value);
};
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a15b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__("06c5");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js








function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = Object(unsupportedIterableToArray["a" /* default */])(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
// CONCATENATED MODULE: ./src/icon/svgs/index.ts









/*
* @Author: Just be free
* @Date:   2020-09-30 16:35:11
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-30 16:43:28
* @E-mail: justbefree@126.com
*/
var svgs_importAll = function importAll(context) {
  var map = {};

  var _iterator = _createForOfIteratorHelper(context.keys()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      var keyArr = key.split('/');
      keyArr.shift(); // 移除.

      map[keyArr.join('.').replace(/\.svg$/g, '')] = context(key);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return map;
};

/* harmony default export */ var svgs = (svgs_importAll(__webpack_require__("c067")));
// CONCATENATED MODULE: ./src/icon/icon.ts








var VgIcon_1;

/*
* @Author: Just be free
* @Date:   2020-09-23 16:16:46
* @Last Modified by:   Just be free
* @Last Modified time: 2021-01-07 17:41:16
* @E-mail: justbefree@126.com
*/






var Props = Object(VueGgy["d" /* props */])({
  name: String,
  size: {
    type: [Number, String],
    default: 26
  },
  cursor: {
    type: String,
    default: "auto"
  },
  adjustColor: {
    type: Boolean,
    default: false
  }
});

var icon_VgIcon = VgIcon_1 = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgIcon, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgIcon);

  function VgIcon() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgIcon);

    _this = _super.apply(this, arguments);
    _this.svgbase64 = VgIcon_1.svgs[_this.name];
    return _this;
  }

  Object(createClass["a" /* default */])(VgIcon, [{
    key: "adjustColorHandler",
    value: function adjustColorHandler() {
      if (this.adjustColor) {
        var color = getPropertyValue(this.$el.parentNode, "color");
        this.svgbase64 = base642svg.fill(this.svgbase64, color);
      }
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.adjustColorHandler();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var svgString = VgIcon_1.svgs[this.name];

      if (this.adjustColor) {
        svgString = this.svgbase64;
      }

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("i", {
        class: ["vg-iconfont-wrap", this.cursor]
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("img", {
            src: svgString,
            class: ["vg-iconfont", "vg-iconfont-size-".concat(_this2.size)]
          }, {
            default: function _default() {
              return "";
            }
          })];
        }
      });
    }
  }], [{
    key: "extend",
    value: function extend(options) {
      VgIcon_1.svgs = _objectSpread2(_objectSpread2({}, VgIcon_1.svgs), options);
    }
  }]);

  return VgIcon;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], Props));

icon_VgIcon.componentName = "VgIcon";
icon_VgIcon.svgs = svgs;
icon_VgIcon = VgIcon_1 = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgIcon"
})], icon_VgIcon);
/* harmony default export */ var icon_icon = (icon_VgIcon);
// CONCATENATED MODULE: ./src/icon/index.ts
/*
* @Author: Just be free
* @Date:   2020-09-30 16:22:09
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-30 18:02:08
* @E-mail: justbefree@126.com
*/

icon_icon.extendData = icon_icon.extend;
/* harmony default export */ var src_icon = (icon_icon);
// CONCATENATED MODULE: ./src/button/button.ts







/*
* @Author: Just be free
* @Date:   2020-10-12 15:56:53
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-30 15:54:41
* @E-mail: justbefree@126.com
*/




var button_Props = Object(VueGgy["d" /* props */])({
  size: {
    type: String,
    default: "default"
  },
  type: {
    type: String,
    default: "default"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  danger: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  textHideWhenLoading: {
    type: Boolean,
    default: false
  }
});

var button_VgButton = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgButton, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgButton);

  function VgButton() {
    Object(classCallCheck["a" /* default */])(this, VgButton);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(VgButton, [{
    key: "validType",
    value: function validType(type) {
      return ["default", "primary", "dashed"].indexOf(type) > -1;
    }
  }, {
    key: "validSize",
    value: function validSize(size) {
      return ["default", "large"].indexOf(size) > -1;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var slots = this.getSlots();
      var className = [];

      if (this.validSize(this.size)) {
        className.push(this.size);
      }

      if (this.validType(this.type)) {
        className.push("vg-button-".concat(this.type));
      }

      if (this.danger) {
        className.push("vg-button-danger");
      }

      if (this.loading) {
        className.push("loading");
      }

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("button", {
        type: "button",
        class: ["vg-button"].concat(className),
        disabled: this.disabled
      }, {
        default: function _default() {
          return [_this.loading && Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_icon, {
            name: "loading",
            size: 16,
            adjustColor: true,
            class: ["vg-button-loading"]
          }, {
            default: function _default() {
              return "";
            }
          }), (!_this.textHideWhenLoading || _this.textHideWhenLoading && !_this.loading) && Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {}, {
            default: function _default() {
              return slots;
            }
          })];
        }
      });
    }
  }]);

  return VgButton;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], button_Props));

button_VgButton.componentName = "VgButton";
button_VgButton = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgButton"
})], button_VgButton);
/* harmony default export */ var button_button = (button_VgButton);
// CONCATENATED MODULE: ./src/button/index.ts
/*
* @Author: Just be free
* @Date:   2020-10-12 15:56:34
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-12 15:57:40
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_button = (button_button);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__("4fad");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("2909");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js







function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || Object(unsupportedIterableToArray["a" /* default */])(arr, i) || _nonIterableRest();
}
// CONCATENATED MODULE: ./src/flex/flex.ts










/*
* @Author: Just be free
* @Date:   2020-09-22 15:24:40
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-22 11:11:25
* @E-mail: justbefree@126.com
*/




var flex_Props = Object(VueGgy["d" /* props */])({
  flexDirection: String,
  flexWrap: String,
  justifyContent: String,
  alignItems: String,
  alignContent: String,
  xs: String,
  sm: String,
  md: String,
  lg: String,
  fixBottomLine: {
    type: Boolean,
    default: false
  }
});

var flex_VgFlex = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgFlex, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgFlex);

  function VgFlex() {
    Object(classCallCheck["a" /* default */])(this, VgFlex);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(VgFlex, [{
    key: "isValidColumnsAttribute",
    value: function isValidColumnsAttribute(key) {
      var validates = ["xs", "sm", "md", "lg"];
      return validates.indexOf(key) > -1;
    }
  }, {
    key: "isValidColumnNumber",
    value: function isValidColumnNumber(v) {
      var value = Math.abs(v);
      return value >= 1 && value <= 12;
    }
  }, {
    key: "isValidFlexAttributeAndValue",
    value: function isValidFlexAttributeAndValue(key, value) {
      var validates = {
        flexDirection: ["row", "rowReverse", "column", "columnReverse"],
        flexWrap: ["nowrap", "wrap", "wrapReverse"],
        justifyContent: ["flexStart", "flexEnd", "center", "spaceBetween", "spaceAround"],
        alignItems: ["flexStart", "flexEnd", "center", "baseline", "stretch"],
        alignContent: ["flexStart", "flexEnd", "center", "spaceBetween", "spaceAround", "stretch"]
      };
      return key in validates && validates[key].indexOf(value) > -1;
    }
  }, {
    key: "translateAttrsToClassName",
    value: function translateAttrsToClassName() {
      var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "vg-";
      var className = [];

      for (var _i = 0, _Object$entries = Object.entries(this.$props); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            attribute = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (this.isValidColumnsAttribute(attribute)) {
          if (this.isValidColumnNumber(parseInt(value))) {
            className.push("".concat(prefix).concat(attribute, "-col-").concat(value));
          }
        } else {
          if (this.isValidFlexAttributeAndValue(attribute, Object(utils["a" /* camelize */])(value))) {
            className.push("".concat(prefix).concat(Object(utils["e" /* hyphenate */])(attribute), "-").concat(Object(utils["e" /* hyphenate */])(value)));
          }
        }
      }

      return className;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var className = this.translateAttrsToClassName();
      var fix = this.fixBottomLine ? "vg-flex-fix-bottom-line" : "";
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-flex"].concat(Object(toConsumableArray["a" /* default */])(className), [fix])
      }, {
        default: function _default() {
          return _this.getSlots();
        }
      });
    }
  }]);

  return VgFlex;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], flex_Props));

flex_VgFlex.componentName = "VgFlex";
flex_VgFlex = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgFlex"
})], flex_VgFlex);
/* harmony default export */ var flex_flex = (flex_VgFlex);
// CONCATENATED MODULE: ./src/flex/index.ts
/*
* @Author: Just be free
* @Date:   2020-09-22 15:24:33
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-22 15:36:41
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_flex = (flex_flex);
// CONCATENATED MODULE: ./src/flex-item/flex-item.ts







/*
* @Author: Just be free
* @Date:   2020-09-22 16:00:52
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-22 11:10:46
* @E-mail: justbefree@126.com
*/




var flex_item_Props = Object(VueGgy["d" /* props */])({
  alignSelf: {
    type: String,
    default: "auto"
  },
  flex: {
    type: [String, Number],
    default: "initial"
  },
  order: {
    type: Number,
    default: 0
  }
});

var flex_item_VgFlexItem = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgFlexItem, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgFlexItem);

  function VgFlexItem() {
    Object(classCallCheck["a" /* default */])(this, VgFlexItem);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(VgFlexItem, [{
    key: "isValidAlignSelfValue",
    value: function isValidAlignSelfValue() {
      var VALIDE_ALIGN_SELF_VALUE = ["auto", "flexStart", "center", "flexEnd", "baseline", "stretch"];
      return VALIDE_ALIGN_SELF_VALUE.indexOf(Object(utils["a" /* camelize */])(this.alignSelf)) > -1;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var className = this.isValidAlignSelfValue() ? "align-self-".concat(Object(utils["e" /* hyphenate */])(this.alignSelf)) : "align-self-auto";
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-flex-item", className],
        style: {
          flex: this.flex,
          order: this.order
        }
      }, {
        default: function _default() {
          return _this.getSlots();
        }
      });
    }
  }]);

  return VgFlexItem;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], flex_item_Props));

flex_item_VgFlexItem.componentName = "VgFlexItem";
flex_item_VgFlexItem = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgFlexItem"
})], flex_item_VgFlexItem);
/* harmony default export */ var flex_item = (flex_item_VgFlexItem);
// CONCATENATED MODULE: ./src/flex-item/index.ts
/*
* @Author: Just be free
* @Date:   2020-09-22 16:00:40
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-22 16:01:08
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_flex_item = (flex_item);
// CONCATENATED MODULE: ./src/toast/toast.ts






/*
* @Author: Just be free
* @Date:   2020-09-23 16:16:46
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-13 12:12:51
* @E-mail: justbefree@126.com
*/



var toast_Props = Object(VueGgy["d" /* props */])({
  position: {
    type: String,
    default: "middle",
    validator: function validator(value) {
      return ["bottom", "middle", "top"].indexOf(value) !== -1;
    }
  },
  message: String
});

var toast_VgToast = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgToast, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgToast);

  function VgToast() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgToast);

    _this = _super.apply(this, arguments);
    _this.visible = false;
    _this.closed = false;
    _this.timer = 0;
    return _this;
  }

  Object(createClass["a" /* default */])(VgToast, [{
    key: "setVisiable",
    value: function setVisiable(v) {
      this.visible = v;
    }
  }, {
    key: "setClosed",
    value: function setClosed(c) {
      this.closed = c;
    }
  }, {
    key: "close",
    value: function close(callback) {
      this.closed = true;
      this.visible = false;
      callback && typeof callback === "function" && callback();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
        name: "vg-toast-pop"
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
            class: ["vg-toast-container", "located-at-".concat(_this2.position)]
          }, {
            default: function _default() {
              return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {
                class: "toast-text"
              }, {
                default: function _default() {
                  return _this2.message;
                }
              })];
            }
          }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _this2.visible]])];
        }
      });
    }
  }]);

  return VgToast;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], toast_Props));

toast_VgToast.componentName = "VgToast";
toast_VgToast = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgToast"
})], toast_VgToast);
/* harmony default export */ var toast = (toast_VgToast);
// CONCATENATED MODULE: ./src/component/renderDOM.ts


/*
* @Author: Just be free
* @Date:   2020-09-25 10:13:20
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-30 15:22:07
* @E-mail: justbefree@126.com
*/

function renderDOM(component, props, children) {
  var vnode = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(component, _objectSpread2({}, props), children);
  var dom = document.createElement("div");
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["render"])(vnode, dom);
  return vnode.component;
}
// CONCATENATED MODULE: ./src/toast/index.ts
/*
* @Author: Just be free
* @Date:   2020-09-23 16:16:39
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-13 12:15:22
* @E-mail: justbefree@126.com
*/





var removeDom = function removeDom(event) {
  var target = event.target;

  if (target.parentNode) {
    target.parentNode.removeChild(target);
  }
};

var toast_Toast = function Toast(options) {
  var message = options.message,
      position = options.position,
      _options$duration = options.duration,
      duration = _options$duration === void 0 ? 3000 : _options$duration;
  var computedMessage = message || (Object(utils["j" /* isString */])(options) ? options : "");
  var instance = renderDOM(toast, {
    message: computedMessage,
    position: position
  }, {
    default: function _default() {
      return [];
    }
  });
  var ctx = instance.ctx;
  ctx.setClosed(false);
  clearTimeout(ctx.timer);
  document.body.appendChild(ctx.getDomTree());
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function () {
    ctx.setVisiable(true);
    ctx.getDomTree().removeEventListener("transitionend", removeDom, false);
    ~duration && (ctx.timer = setTimeout(function () {
      if (ctx.closed) {
        return false;
      }

      ctx.close(function () {
        ctx.getDomTree().addEventListener("transitionend", removeDom, false);
      });
    }, duration));
  });
  return ctx;
};

/* harmony default export */ var src_toast = (toast_Toast);
// CONCATENATED MODULE: ./src/spin/spin.ts






/*
* @Author: Just be free
* @Date:   2020-09-28 11:18:21
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-13 12:18:24
* @E-mail: justbefree@126.com
*/



 // export type SpinType = "snake" | "rotate" | "triple-bounce";

var spin_Props = Object(VueGgy["d" /* props */])({
  type: {
    type: String,
    default: "snake"
  },
  size: {
    type: [Number, String],
    default: 28
  },
  color: {
    type: String,
    default: "#007aff"
  }
});

var spin_VgSpin = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgSpin, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgSpin);

  function VgSpin() {
    Object(classCallCheck["a" /* default */])(this, VgSpin);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(VgSpin, [{
    key: "createSpinner",
    value: function createSpinner() {
      var capitalizeName = Object(utils["e" /* hyphenate */])(this.type);
      var component = "span";

      try {
        component = __webpack_require__("dd13")("./".concat(capitalizeName, "/index.ts"))["default"];
      } catch (err) {
        console.warn("There is no ".concat(capitalizeName, " as VgSpin type's value"));
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(component, {}, {
          default: function _default() {
            return [];
          }
        });
      }

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(component, {
        size: Number(this.size),
        color: this.color
      }, {
        default: function _default() {
          return [];
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {}, {
        default: function _default() {
          return [_this.createSpinner()];
        }
      });
    }
  }]);

  return VgSpin;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], spin_Props));

spin_VgSpin.componentName = "VgSpin";
spin_VgSpin = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgSpin"
})], spin_VgSpin);
/* harmony default export */ var spin = (spin_VgSpin);
// CONCATENATED MODULE: ./src/spin/index.ts
/*
* @Author: Just be free
* @Date:   2020-09-28 11:17:54
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-28 11:18:12
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_spin = (spin);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.fixed.js
var es_string_fixed = __webpack_require__("c7cd");

// CONCATENATED MODULE: ./src/component/popupManager.ts



var popupManager_PopuoManager = /*#__PURE__*/function () {
  function PopuoManager() {
    Object(classCallCheck["a" /* default */])(this, PopuoManager);

    this.zIndex = 2000;
    this.instances = {};
    this.modalStack = [];
  }

  Object(createClass["a" /* default */])(PopuoManager, [{
    key: "nextZindex",
    value: function nextZindex() {
      this.zIndex++;
    }
  }, {
    key: "onModalClick",
    value: function onModalClick() {
      var topItem = this.modalStack[this.modalStack.length - 1];
      if (!topItem) return;
      var instance = this.getInstance(topItem.popupId);

      if (instance && instance.closeOnClickModal) {
        instance.close();
      }
    }
  }, {
    key: "closeModal",
    value: function closeModal(id) {
      var topItem = this.modalStack[this.modalStack.length - 1];
      if (!topItem) return;

      if (id === topItem.popupId) {
        var instance = this.getInstance(topItem.popupId);
        var node = instance.$el;
        var modal = node.previousElementSibling;
        node.parentNode.removeChild(modal);
        this.deregister(id);
        this.modalStack.pop();
        document.body.style.overflow = instance.bodyOverflow;
      }
    }
  }, {
    key: "openModal",
    value: function openModal(id, instance) {
      if (instance.lockScreen) {
        document.body.style.overflow = "hidden";
      }

      var node = instance.$el;
      var modal = node.previousElementSibling;
      modal.style.zIndex = "".concat(this.zIndex);
      node.style.zIndex = "".concat(this.zIndex + 1);
      this.addEvent(modal);
      this.modalStack.push({
        popupId: id,
        node: node,
        modal: modal,
        instance: instance
      });
      this.nextZindex();
    }
  }, {
    key: "addEvent",
    value: function addEvent(modal) {
      var _this = this;

      modal.onclick = function () {
        _this.onModalClick();
      };
    }
  }, {
    key: "getInstance",
    value: function getInstance(id) {
      return this.instances["popupid_".concat(id)];
    }
  }, {
    key: "register",
    value: function register(id, instance) {
      this.instances["popupid_".concat(id)] = instance;
      this.openModal(id, instance);
    }
  }, {
    key: "deregister",
    value: function deregister(id) {
      if (this.instances["popupid_".concat(id)]) {
        this.instances["popupid_".concat(id)] = null;
        delete this.instances["popupid_".concat(id)];
      }
    }
  }]);

  return PopuoManager;
}();

var popupManager = new popupManager_PopuoManager();
/* harmony default export */ var component_popupManager = (popupManager);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__("4d63");

// CONCATENATED MODULE: ./src/utils/dom/index.ts











/*
* @Author: Just be free
* @Date:   2020-09-28 18:14:16
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-15 11:38:45
* @E-mail: justbefree@126.com
*/
var hasClass = function hasClass(dom, className) {
  return !!dom.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
};

var addClass = function addClass(dom, className) {
  if (!hasClass(dom, className)) {
    dom.className += " " + className;
  }
};

var remove = function remove(dom, className) {
  if (hasClass(dom, className)) {
    var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
    dom.className = dom.className.replace(reg, " ");
  }
}; // 获取scrollTop值


var getScrollTop = function getScrollTop(dom) {
  if (dom && dom.nodeType && dom.nodeType === 9) {
    return Math.max(document.documentElement.scrollTop, window.pageYOffset, document.body.scrollTop);
  }

  var t = dom.scrollTop;

  while (dom.offsetParent) {
    dom = dom.offsetParent;
    t += dom.scrollTop;
  }

  return t;
};
var getOffset = function getOffset(element) {
  var top = element.offsetTop;
  var left = element.offsetLeft;
  var current = element.offsetParent;

  while (current !== null) {
    var translate = getElementsTranslate(current);
    top += current.offsetTop + translate.y;
    left += current.offsetLeft + translate.x;
    current = current.offsetParent;
  }

  return {
    top: top,
    left: left
  };
}; // 获取translateY的值

var getElementsTranslate = function getElementsTranslate(element) {
  var style = window.getComputedStyle(element);
  var transform = style.transform || style.webkitTransform;

  if (transform !== "none") {
    var translateY = transform.slice(7, transform.length - 1).split(", ")[5];
    var translateX = transform.slice(7, transform.length - 1).split(", ")[4];
    return {
      y: Number(translateY),
      x: Number(translateX)
    };
  } else {
    return {
      y: 0,
      x: 0
    };
  }
};
var removeClass = function removeClass(dom, className) {
  if (Array.isArray(className)) {
    className.forEach(function (c) {
      remove(dom, c);
    });
  } else {
    remove(dom, className);
  }
};
// CONCATENATED MODULE: ./src/popup/popup.ts










/*
* @Author: Just be free
* @Date:   2020-09-28 14:57:46
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-28 14:25:43
* @E-mail: justbefree@126.com
*/

/**
references
https://v3.vuejs.org/guide/migration/v-model.html
*/




var VALIDATE_POSITION_VALUE = ["left", "right", "top", "bottom", "middle"];


var idSeed = 1; // const Emits = emits(["update:modelValue", "before-enter", "enter", "after-enter", "before-leave", "leave", "after-leave"]);

var popup_Props = Object(VueGgy["d" /* props */])({
  modelValue: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: "bottom"
  },
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  borderRadius: {
    type: Number,
    default: 10
  },
  lockScreen: {
    type: Boolean,
    default: true
  },
  showCloseIcon: {
    type: Boolean,
    default: false
  },
  singleton: {
    type: Boolean,
    default: false
  },
  fixed: Boolean
});

var popup_VgPopup = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgPopup, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgPopup);

  function VgPopup() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgPopup);

    _this = _super.apply(this, arguments);
    _this.bodyOverflow = "";
    _this.time = 0;
    _this.diff = 0;
    _this.zIndex = 2000;
    _this.idSeed = idSeed;
    _this.events = {
      closeModal: function closeModal() {}
    };
    return _this;
  }

  Object(createClass["a" /* default */])(VgPopup, [{
    key: "isValidatePositionVlaue",
    value: function isValidatePositionVlaue() {
      return VALIDATE_POSITION_VALUE.indexOf(this.position) > -1;
    }
  }, {
    key: "hanleFastClick",
    value: function hanleFastClick() {}
  }, {
    key: "removeModal",
    value: function removeModal() {
      if (this.singleton) {
        document.body.style.overflow = this.bodyOverflow;
      }

      this.events["closeModal"] && typeof this.events["closeModal"] === "function" && this.events["closeModal"]();
      this.events = {
        closeModal: function closeModal() {}
      };
    }
  }, {
    key: "handleBeforeEnter",
    value: function handleBeforeEnter(node) {
      var _this2 = this;

      this.bodyOverflow = document.body.style.overflow;
      var parentNode = node.parentNode;
      var modal = document.createElement("div");
      addClass(modal, "v-vgpopup-modal");
      parentNode.insertBefore(modal, node);

      if (this.singleton) {
        modal.style.zIndex = "".concat(this.zIndex + idSeed);
        this.$el.style.zIndex = this.zIndex + idSeed + 1;

        if (this.lockScreen) {
          document.body.style.overflow = "hidden";
        }

        this.events["closeModal"] = function () {
          parentNode.removeChild(modal);
        };

        modal.onclick = function () {
          if (_this2.closeOnClickModal) {
            _this2.close();
          }
        };
      } else {
        parentNode.insertBefore(modal, node);
        component_popupManager.register(idSeed, this);
      }

      this.idSeed = idSeed;
      idSeed++;
      this.$emit("beforeenter");
    }
  }, {
    key: "handleEnter",
    value: function handleEnter() {
      this.$emit("enter");
    }
  }, {
    key: "handleAfterEneter",
    value: function handleAfterEneter() {
      this.$emit("afterenter");
    }
  }, {
    key: "handleBeforeLeave",
    value: function handleBeforeLeave() {
      this.$emit("beforeleave");
    }
  }, {
    key: "handleLeave",
    value: function handleLeave() {
      if (this.diff < 1000) {
        if (this.singleton) {
          this.removeModal();
        }
      }

      this.$emit("leave");
    }
  }, {
    key: "handleAfterLeave",
    value: function handleAfterLeave() {
      if (this.singleton) {
        this.removeModal();
      } else {
        component_popupManager.closeModal(this.idSeed);
      }

      this.$emit("afterleave");
    }
  }, {
    key: "close",
    value: function close() {
      this.$emit("update:modelValue", false);
      this.$emit("input", false);
    }
  }, {
    key: "createCloseIcon",
    value: function createCloseIcon() {
      var _this3 = this;

      if (this.showCloseIcon) {
        return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
          class: ["vg-popup-closeicon", this.fixed ? "fixed" : ""]
        }, {
          default: function _default() {
            return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_icon, {
              name: "close",
              onClick: _this3.close
            }, {
              default: function _default() {
                return [];
              }
            })];
          }
        })];
      } else {
        return [];
      }
    }
  }, {
    key: "genStyle",
    value: function genStyle(position) {
      if (position === "bottom") {
        return {
          borderRadius: "".concat(this.borderRadius, "px ").concat(this.borderRadius, "px 0 0")
        };
      } else if (position === "top") {
        return {
          borderRadius: "0 0 ".concat(this.borderRadius, "px ").concat(this.borderRadius, "px")
        };
      } else {
        return {};
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var position = "bottom";

      if (this.isValidatePositionVlaue()) {
        position = this.position;
      } else {
        console.warn("".concat(this.position, " is not a valid value of position props"));
      }

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
        name: "vg-popup-slide-".concat(position),
        onBeforeEnter: this.handleBeforeEnter,
        onEnter: this.handleEnter,
        onAfterEnter: this.handleAfterEneter,
        onBeforeLeave: this.handleBeforeLeave,
        onLeave: this.handleLeave,
        onAfterLeave: this.handleAfterLeave
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
            class: ["vg-popup", "vg-popup-".concat(position)],
            style: _objectSpread2({}, _this4.genStyle(position))
          }, {
            default: function _default() {
              return [_this4.createCloseIcon(), _this4.getSlots()];
            }
          }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _this4.modelValue]])];
        }
      });
    }
  }]);

  return VgPopup;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], popup_Props));

popup_VgPopup.componentName = "VgPopup";
popup_VgPopup = __decorate([Object(VueGgy["a" /* Options */])({
  emits: ["update:modelValue", "beforeenter", "enter", "afterenter", "beforeleave", "leave", "afterleave", "input"],
  name: "VgPopup"
})], popup_VgPopup);
/* harmony default export */ var popup = (popup_VgPopup);
// CONCATENATED MODULE: ./src/popup/index.ts
/*
* @Author: Just be free
* @Date:   2020-09-28 14:56:30
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-28 14:58:32
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_popup = (popup);
// CONCATENATED MODULE: ./src/checkbox/checkbox.ts






/*
* @Author: Just be free
* @Date:   2020-09-22 15:24:40
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-15 10:57:02
* @E-mail: justbefree@126.com
*/




var checkbox_Props = Object(VueGgy["d" /* props */])({
  size: {
    type: [Number, String],
    default: 26
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

var checkbox_VgCheckbox = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgCheckbox, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgCheckbox);

  function VgCheckbox() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgCheckbox);

    _this = _super.apply(this, arguments);
    _this.status = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(_this.modelValue).value;
    return _this;
  }

  Object(createClass["a" /* default */])(VgCheckbox, [{
    key: "toggle",
    value: function toggle() {
      if (this.disabled) {
        return;
      }

      if (this.status) {
        this.status = false;
      } else {
        this.status = true;
      }

      this.$emit("update:modelValue", this.status);
    }
  }, {
    key: "render",
    value: function render() {
      var modelValue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(this.modelValue);
      var nameComputed = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
        return "checkbox-".concat(modelValue.value ? "" : "un", "checked");
      });
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_icon, {
        class: ["vg-checkbox"],
        size: this.size,
        name: nameComputed.value,
        onClick: this.toggle,
        cursor: "pointer"
      }, {
        default: function _default() {
          return [];
        }
      });
    }
  }]);

  return VgCheckbox;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], checkbox_Props));

checkbox_VgCheckbox.componentName = "VgCheckbox";
checkbox_VgCheckbox = __decorate([Object(VueGgy["a" /* Options */])({
  emits: ["update:modelValue"],
  name: "VgCheckbox"
})], checkbox_VgCheckbox);
/* harmony default export */ var checkbox_checkbox = (checkbox_VgCheckbox);
// CONCATENATED MODULE: ./src/checkbox/index.ts
/*
* @Author: Just be free
* @Date:   2020-10-12 11:52:08
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-12 11:52:48
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_checkbox = (checkbox_checkbox);
// CONCATENATED MODULE: ./src/radiobox/radiobox.ts






/*
* @Author: Just be free
* @Date:   2020-09-22 15:24:40
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-15 10:06:58
* @E-mail: justbefree@126.com
*/




var radiobox_Props = Object(VueGgy["d" /* props */])({
  size: {
    type: [Number, String],
    default: 26
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

var radiobox_VgRadiobox = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgRadiobox, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgRadiobox);

  function VgRadiobox() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgRadiobox);

    _this = _super.apply(this, arguments);
    _this.status = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(_this.modelValue).value;
    return _this;
  }

  Object(createClass["a" /* default */])(VgRadiobox, [{
    key: "toggle",
    value: function toggle() {
      if (this.disabled) {
        return;
      }

      if (this.status) {
        this.status = false;
      } else {
        this.status = true;
      }

      this.$emit("update:modelValue", this.status);
    }
  }, {
    key: "render",
    value: function render() {
      var modelValue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(this.modelValue);
      var nameComputed = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
        return "radiobox-".concat(modelValue.value ? "" : "un", "checked");
      });
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_icon, {
        class: ["vg-radiobox"],
        size: this.size,
        name: nameComputed.value,
        onClick: this.toggle,
        cursor: "pointer"
      }, {
        default: function _default() {
          return [];
        }
      });
    }
  }]);

  return VgRadiobox;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], radiobox_Props));

radiobox_VgRadiobox.componentName = "VgRadiobox";
radiobox_VgRadiobox = __decorate([Object(VueGgy["a" /* Options */])({
  emits: ["update:modelValue"],
  name: "VgRadiobox"
})], radiobox_VgRadiobox);
/* harmony default export */ var radiobox = (radiobox_VgRadiobox);
// CONCATENATED MODULE: ./src/radiobox/index.ts
/*
* @Author: Just be free
* @Date:   2020-10-12 15:08:55
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-12 15:09:24
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_radiobox = (radiobox);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// CONCATENATED MODULE: ./src/dialog/dialog.ts








/*
* @Author: Just be free
* @Date:   2020-09-23 16:16:46
* @Last Modified by:   Just be free
* @Last Modified time: 2020-12-24 17:04:23
* @E-mail: justbefree@126.com
*/





 // const Emits = emits([
//   "update:modelValue",
//   "modal-click",
//   "before-enter",
//   "after-enter",
//   "before-leave",
//   "after-leave",
//   "button-click"
// ]);

var dialog_Props = Object(VueGgy["d" /* props */])({
  beforeOpen: Function,
  opened: Function,
  beforeClose: Function,
  closed: Function,
  modelValue: {
    type: Boolean,
    default: false
  },
  className: [String, Array],
  zIndex: {
    type: [String, Number],
    default: 2
  },
  closeModelOnClick: {
    type: Boolean,
    default: false
  },
  message: String,
  title: String,
  showCancelButton: {
    type: Boolean,
    default: true
  },
  cancelButtonText: {
    type: String,
    default: "取消"
  },
  showConfirmButton: {
    type: Boolean,
    default: true
  },
  confirmButtonText: {
    type: String,
    default: "确定"
  },
  textHideWhenLoading: {
    type: Boolean,
    default: false
  }
});

var dialog_VgDialog = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgDialog, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgDialog);

  function VgDialog() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgDialog);

    _this = _super.apply(this, arguments);
    _this.bodyOverflow = "";
    _this.events = {};
    _this.renderedAsComponent = true;
    _this.show = false;
    _this.action = "";
    _this.loading = false;
    return _this;
  }

  Object(createClass["a" /* default */])(VgDialog, [{
    key: "handleBeforeEnter",
    value: function handleBeforeEnter(node) {
      var _this2 = this;

      this.$emit("before-enter", node);
      this.beforeOpen && this.beforeOpen(this.action);
      this.bodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      var parent = node.parentNode;
      var modal = document.createElement("div");
      modal.style.zIndex = "".concat(Number(this.zIndex) - 1);

      modal.onclick = function () {
        if (_this2.closeModelOnClick) {
          if (_this2.renderedAsComponent) {
            _this2.$emit("update:modelValue", false);
          } else {
            _this2.show = false;
          }
        } else {
          _this2.$emit("modal-click");
        }
      };

      addClass(modal, "v-vgdialog-modal");
      parent.insertBefore(modal, node); // this.$emit("before-enter");

      this.events["doClose"] = function () {
        parent.removeChild(modal);
        document.body.style.overflow = _this2.bodyOverflow;
      };
    }
  }, {
    key: "close",
    value: function close() {
      this.events["doClose"]();
      delete this.events["doClose"];

      if (!this.renderedAsComponent) {
        this.removeDOM();
      }
    }
  }, {
    key: "removeDOM",
    value: function removeDOM() {
      var el = this.getDomTree();
      var parent = el.parentNode;
      parent.removeChild(el);
    }
  }, {
    key: "handleAfterEnter",
    value: function handleAfterEnter(node) {
      this.$emit("after-enter", node);
      this.opened && this.opened(this.action);
    }
  }, {
    key: "handleBeforeLeave",
    value: function handleBeforeLeave(node) {
      this.$emit("before-leave", node); // this.beforeClose && (typeof this.beforeClose === "function") && this.beforeClose();
    }
  }, {
    key: "handleAfterLeave",
    value: function handleAfterLeave(node) {
      this.$emit("after-leave", node);
      this.close();
      this.closed && this.closed(this.action);
    }
  }, {
    key: "getLoadingStatus",
    value: function getLoadingStatus(e) {
      return this.loading && this.action === e;
    }
  }, {
    key: "getDisableStatus",
    value: function getDisableStatus(e) {
      return this.loading && this.action !== e;
    }
  }, {
    key: "handleButtonClick",
    value: function handleButtonClick(e) {
      var _this3 = this;

      this.action = e;
      var beforeClose = this.beforeClose;

      if (beforeClose) {
        var promise = beforeClose(e);

        if (Object(utils["i" /* isPromise */])(promise)) {
          this.loading = true;
          promise.then(function (res) {
            _this3.show = false;

            _this3.$emit("update:modelValue", false);

            _this3.$emit("button-click", e, res);
          });
        } else {
          this.show = false;
          this.$emit("update:modelValue", false);
          this.$emit("button-click", e);
        }
      } else {
        this.$emit("button-click", e);
        this.show = false;
        this.$emit("update:modelValue", false);
      }
    }
  }, {
    key: "setVisible",
    value: function setVisible(val) {
      this.show = val;
    }
  }, {
    key: "setRenderedAsComponent",
    value: function setRenderedAsComponent(val) {
      this.renderedAsComponent = val;
    }
  }, {
    key: "genButtons",
    value: function genButtons() {
      var _this4 = this;

      var buttons = [];

      if (this.showCancelButton) {
        buttons.push(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_button, {
          textHideWhenLoading: this.textHideWhenLoading,
          disabled: this.getDisableStatus("cancel"),
          loading: this.getLoadingStatus("cancel"),
          onClick: this.handleButtonClick.bind(this, "cancel"),
          class: ["vg-dialog-cancel-button"]
        }, {
          default: function _default() {
            return _this4.cancelButtonText;
          }
        }));
      }

      if (this.showConfirmButton) {
        var className = buttons.length === 1 ? "vertical-line" : "";
        buttons.push(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_button, {
          textHideWhenLoading: this.textHideWhenLoading,
          disabled: this.getDisableStatus("confirm"),
          loading: this.getLoadingStatus("confirm"),
          onClick: this.handleButtonClick.bind(this, "confirm"),
          class: ["vg-dialog-confirm-button", className]
        }, {
          default: function _default() {
            return _this4.confirmButtonText;
          }
        }));
      }

      return buttons;
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var buttons = this.genButtons();
      var className = Array.isArray(this.className) ? this.className : [this.className];
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
        name: "vg-dialog-bounce",
        onBeforeEnter: this.handleBeforeEnter,
        onAfterEnter: this.handleAfterEnter,
        onBeforeLeave: this.handleBeforeLeave,
        onAfterLeave: this.handleAfterLeave
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
            class: ["vg-dialog"].concat(Object(toConsumableArray["a" /* default */])(className)),
            style: {
              zIndex: _this5.zIndex
            }
          }, {
            default: function _default() {
              return [_this5.title && Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
                class: ["vg-dialog-title"]
              }, {
                default: function _default() {
                  return _this5.title;
                }
              }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
                class: "vg-dialog-content"
              }, {
                default: function _default() {
                  return [_this5.renderedAsComponent && _this5.getSlots() || _this5.message];
                }
              }), buttons.length > 0 && Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
                class: ["vg-dialog-buttons"]
              }, {
                default: function _default() {
                  return buttons;
                }
              })];
            }
          }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _this5.modelValue || _this5.show]])];
        }
      });
    }
  }]);

  return VgDialog;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], dialog_Props));

dialog_VgDialog.componentName = "VgDialog";
dialog_VgDialog = __decorate([Object(VueGgy["a" /* Options */])({
  emits: ["update:modelValue", "modal-click", "before-enter", "after-enter", "before-leave", "after-leave", "button-click"],
  name: "VgDialog"
})], dialog_VgDialog);
/* harmony default export */ var dialog = (dialog_VgDialog);
// CONCATENATED MODULE: ./src/dialog/index.ts


/*
* @Author: Just be free
* @Date:   2020-10-12 15:48:16
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-14 18:10:27
* @E-mail: justbefree@126.com
*/




/* harmony default export */ var src_dialog = ({
  alert: function alert(options) {
    var props = Object.assign({
      showCancelButton: false
    }, options);
    var instance = renderDOM(dialog, props, {
      default: function _default() {
        return [];
      }
    });
    var ctx = instance.ctx;
    document.body.appendChild(ctx.getDomTree());
    ctx.setRenderedAsComponent(false);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function () {
      ctx.setVisible(true);
    });
  },
  confirm: function confirm(options) {
    var props = Object.assign({
      showCancelButton: true
    }, options);
    this.alert(props);
  }
});
// CONCATENATED MODULE: ./src/utils/dom/scroller.ts
/*
* @Author: Just be free
* @Date:   2020-10-15 11:21:20
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-15 14:14:01
* @E-mail: justbefree@126.com
*/
var overflowScrollReg = /scroll|auto/i;
var getScroller = function getScroller(el) {
  var node = el;

  while (node && node.tagName !== "HTML" && node.nodeType === 1) {
    var _window$getComputedSt = window.getComputedStyle(node),
        overflowY = _window$getComputedSt.overflowY;

    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== "BODY") {
        return node;
      } // see: https://github.com/youzan/vant/issues/3823


      var _window$getComputedSt2 = window.getComputedStyle(node.parentNode),
          htmlOverflowY = _window$getComputedSt2.overflowY;

      if (overflowScrollReg.test(htmlOverflowY)) {
        return node;
      }
    }

    node = node.parentNode;
  }

  return node;
};
// CONCATENATED MODULE: ./src/sticky/sticky.ts







/*
* @Author: Just be free
* @Date:   2020-09-28 11:18:21
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-15 14:28:25
* @E-mail: justbefree@126.com
*/





var fixedStyle = /fixed/i;
var sticky_Props = Object(VueGgy["d" /* props */])({
  offsetTop: {
    type: [Number, String],
    default: 0
  },
  zIndex: {
    type: [Number, String],
    default: 0
  },
  container: Object,
  sticky: {
    type: Boolean,
    default: true
  }
});

var sticky_VgSticky = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgSticky, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgSticky);

  function VgSticky() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgSticky);

    _this = _super.apply(this, arguments);
    _this.fixed = false;
    _this.top = 0;
    _this.containerTop = 0;
    _this.scrollElement = document.createElement("div");
    return _this;
  }

  Object(createClass["a" /* default */])(VgSticky, [{
    key: "mounted",
    value: function mounted() {
      var el = this.getDomTree();
      this.scrollElement = getScroller(el);
      this.top = getOffset(el).top;
      this.scrollElement.addEventListener("scroll", this.handleScroll, false);
    }
  }, {
    key: "handleScroll",
    value: function handleScroll(e) {
      var dom = this.getDomTree();

      var _window$getComputedSt = window.getComputedStyle(dom),
          position = _window$getComputedSt.position;

      if (!fixedStyle.test(position)) {
        this.top = getOffset(dom).top;
      }

      var container = this.container,
          offsetTop = this.offsetTop;
      var scrollTop = getScrollTop(e.target);
      var diff = this.top - scrollTop;
      this.$emit("scroll", {
        el: dom,
        scrollTop: scrollTop,
        offsetTop: diff
      });

      if (container && container.nodeType && container.nodeType === 1) {
        this.containerTop = getOffset(container).top;
        var clientHeight = container.clientHeight;

        if (this.containerTop - scrollTop <= 0 && this.containerTop + clientHeight - scrollTop - this.$el.clientHeight >= 0) {
          this.fixed = true;
        } else {
          this.fixed = false;
        }
      } else {
        if (diff <= offsetTop) {
          this.fixed = true;
        } else {
          this.fixed = false;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var slots = this.getSlots();
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        style: {
          top: "".concat(this.offsetTop, "px"),
          zIndex: this.zIndex
        },
        class: ["vg-sticky", this.sticky && this.fixed ? "vg-sticky-fixed" : ""]
      }, {
        default: function _default() {
          return slots;
        }
      });
    }
  }]);

  return VgSticky;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], sticky_Props));

sticky_VgSticky.componentName = "VgSticky";
sticky_VgSticky = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgSticky",
  emits: ["scroll"]
})], sticky_VgSticky);
/* harmony default export */ var sticky = (sticky_VgSticky);
// CONCATENATED MODULE: ./src/sticky/index.ts
/*
* @Author: Just be free
* @Date:   2020-10-15 11:08:29
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-15 11:09:06
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_sticky = (sticky);
// CONCATENATED MODULE: ./src/utils/vg-date/VgDate.ts









/*
* @Author: Just be free
* @Date:   2020-10-19 16:31:57
* @Last Modified by:   Just be free
* @Last Modified time: 2020-12-02 11:43:01
* @E-mail: justbefree@126.com
*/
var now = new Date();

var number2string = function number2string(num) {
  var integer = typeof num === "string" ? parseInt(num) : num;
  return integer < 10 ? "0".concat(integer) : "".concat(integer);
};

var VgDate_VgDate = /*#__PURE__*/function () {
  function VgDate(year, month, date) {
    Object(classCallCheck["a" /* default */])(this, VgDate);

    this.year = now.getFullYear();
    this.month = number2string(now.getMonth() + 1);
    this.date = number2string(now.getDate());
    this.JSDate = new Date();
    this.init(year, month, date);
  }

  Object(createClass["a" /* default */])(VgDate, [{
    key: "init",
    value: function init(year, month, date) {
      if (year instanceof VgDate) {
        return year;
      } else if (this.isDateFormat(year)) {
        this.init.apply(this, Object(toConsumableArray["a" /* default */])(year.split("-")));
      } else {
        var iYear = year ? year : this.year;
        var iMonth = month ? month : this.month;
        var iDate = date ? date : this.date;
        this.JSDate = new Date(Date.parse("".concat(iYear, "/").concat(iMonth, "/").concat(iDate)));
        this.year = iYear;
        this.setMonth(iMonth);
        this.setDate(iDate);
        return this;
      }
    }
  }, {
    key: "setMonth",
    value: function setMonth(month) {
      // this.month = parseInt(month as string) < 10 ? `0${month}` : month;
      this.month = number2string(month);
    }
  }, {
    key: "setDate",
    value: function setDate(date) {
      // this.date = parseInt(date as string) < 10 ? `0${date}` : date;
      this.date = number2string(date);
    }
  }, {
    key: "isDateFormat",
    value: function isDateFormat(arg) {
      return /^(\d{4})(-)(\d{2})(-)(\d{2})$/.test(String(arg));
    }
  }, {
    key: "add",
    value: function add() {
      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "days";

      if (["days", "day", "d"].indexOf(unit) > -1) {
        this.JSDate.setDate(this.JSDate.getDate() + count);
      } else if (["months", "month", "m"].indexOf(unit) > -1) {
        // 解决思路：在某一个日期加一个月或N个月的时候需要判断当前日期是当月的第X天，
        // 需要确保在加了一个月或N个月的那月也有同样的X天，如果没有，则取那月的最后一天
        var otherMonthDaysCount = VgDateInstance(this.year, this.JSDate.getMonth() + 1 + count, "01").getDaysCountOfMonth();
        var currentDay = this.JSDate.getDate();

        if (currentDay > otherMonthDaysCount) {
          this.JSDate.setDate(otherMonthDaysCount);
          this.JSDate.setMonth(this.JSDate.getMonth() + count);
        } else {
          this.JSDate.setMonth(this.JSDate.getMonth() + count);
        }
      } else if (["years", "year", "y"].indexOf(unit) > -1) {
        this.JSDate.setFullYear(this.JSDate.getFullYear() + count);
      }

      this.year = this.JSDate.getFullYear();
      this.setMonth(this.JSDate.getMonth() + 1);
      this.setDate(this.JSDate.getDate());
      return this;
    }
  }, {
    key: "substract",
    value: function substract() {
      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "days";
      return this.add(-1 * count, unit);
    }
  }, {
    key: "getMonthPeriod",
    value: function getMonthPeriod(begin, end) {
      var period = [begin.format()];

      if (begin instanceof VgDate && end instanceof VgDate) {
        while (begin.isBefore(end)) {
          begin.add(1, "month");
          period.push(begin.format());
        }
      }

      return period;
    }
  }, {
    key: "getToday",
    value: function getToday() {
      // 获取指定时间（默认当天）
      return this.JSDate;
    }
  }, {
    key: "format",
    value: function format() {
      return "".concat(this.year, "-").concat(this.month, "-").concat(this.date);
    }
  }, {
    key: "getDay",
    value: function getDay() {
      // 获取具体每一天是周几
      return new Date(Date.parse("".concat(this.year, "/").concat(this.month, "/").concat(this.date))).getDay();
    }
  }, {
    key: "getTime",
    value: function getTime() {
      // 获取指定时间毫秒数
      return new Date(Date.parse("".concat(this.year, "/").concat(this.month, "/").concat(this.date))).getTime();
    }
  }, {
    key: "getDaysCountOfMonth",
    value: function getDaysCountOfMonth() {
      // 获取指定年月总归有多少天
      return new Date(parseInt(this.year), parseInt(this.month, 10), 0).getDate();
    }
  }, {
    key: "diff",
    value: function diff(year, month, date) {
      if (year instanceof VgDate) {
        return (year.getTime() - this.getTime()) / 1000 / 60 / 60 / 24;
      } else if (this.isDateFormat(year)) {
        var _year$split = year.split("-"),
            _year$split2 = _slicedToArray(_year$split, 3),
            y = _year$split2[0],
            m = _year$split2[1],
            d = _year$split2[2];

        return this.diff(y, m, d);
      } else {
        return (VgDateInstance(year, month, date).getTime() - this.getTime()) / 1000 / 60 / 60 / 24;
      }
    }
  }, {
    key: "isBefore",
    value: function isBefore(year, month, date) {
      // 是不是早于某个（默认当天）时间
      return this.diff(year, month, date) > 0;
    }
  }, {
    key: "isAfter",
    value: function isAfter(year, month, date) {
      // 是不是晚于某个（默认当天）时间
      return this.diff(year, month, date) < 0;
    }
  }, {
    key: "isSame",
    value: function isSame(year, month, date) {
      // 是不是和某个时间相同（默认当天）
      return this.diff(year, month, date) === 0;
    }
  }, {
    key: "isBetweenIncludeLeft",
    value: function isBetweenIncludeLeft(start, end) {
      return this.isBetween(start, end) || this.isSame(start);
    }
  }, {
    key: "isBetweenIncludeRight",
    value: function isBetweenIncludeRight(start, end) {
      return this.isBetween(start, end) || this.isSame(end);
    }
  }, {
    key: "isBetweenIncludeBoth",
    value: function isBetweenIncludeBoth(start, end) {
      return this.isBetween(start, end) || this.isSame(start) || this.isSame(end);
    }
  }, {
    key: "isBetween",
    value: function isBetween(start, end) {
      return this.isAfter(start) && this.isBefore(end);
    }
  }]);

  return VgDate;
}();

var VgDateInstance = function VgDateInstance(year, month, date) {
  return new VgDate_VgDate(year, month, date);
};


/* harmony default export */ var vg_date_VgDate = (VgDateInstance);
// CONCATENATED MODULE: ./src/utils/vg-date/index.ts



/*
* @Author: Just be free
* @Date:   2020-10-19 10:24:40
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-19 18:31:52
* @E-mail: justbefree@126.com
*/


var validateFormatedDate = function validateFormatedDate(date) {
  var reg = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;
  return date && date.match(reg);
};


// CONCATENATED MODULE: ./src/calendar/calendar.ts
















/*
* @Author: Just be free
* @Date:   2020-10-12 15:56:53
* @Last Modified by:   Just be free
* @Last Modified time: 2020-12-02 11:52:42
* @E-mail: justbefree@126.com
*/










var calendar_Props = Object(VueGgy["d" /* props */])({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: [String, Array],
    default: "日历"
  },
  mode: {
    type: String,
    default: "single"
  },
  doubleModeAllowSameDate: {
    type: Boolean,
    default: true
  },
  crossed: {
    type: Boolean,
    default: true
  },
  before: {
    type: [Number, String],
    default: 1
  },
  after: {
    type: [Number, String],
    default: 1
  },
  unit: {
    type: String,
    default: "days"
  },
  weekText: {
    type: Array,
    default: function _default() {
      return ["日", "一", "二", "三", "四", "五", "六"];
    }
  },
  defaultDate: {
    type: String,
    default: vg_date_VgDate().format()
  },
  defaultStartDate: {
    type: String,
    default: vg_date_VgDate().format()
  },
  defaultEndDate: {
    type: String,
    default: vg_date_VgDate().add(1, "day").format()
  },
  showConfirmButton: {
    type: Boolean,
    default: false
  },
  confirmText: {
    type: String,
    default: "确认"
  },
  fromDateMark: {
    type: String,
    default: "入住"
  },
  toDateMark: {
    type: String,
    default: "离店"
  },
  todayMark: {
    type: String,
    default: "今天"
  },
  monthTtitleParser: {
    type: Function,
    default: function _default(defaultText) {
      return defaultText;
    }
  }
});

var calendar_VgCalendar = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgCalendar, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgCalendar);

  function VgCalendar() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgCalendar);

    _this = _super.apply(this, arguments);
    _this.changedNode = {};
    _this.fromDate = null;
    _this.toDate = null;
    _this.date = null;
    _this.beginDate = null;
    _this.endDate = null;
    _this.confirmButtonClassName = "active";
    return _this;
  }

  Object(createClass["a" /* default */])(VgCalendar, [{
    key: "close",
    value: function close() {
      this.$emit("update:modelValue", false);
    }
  }, {
    key: "getDefaultNodeFromProps",
    value: function getDefaultNodeFromProps(prop) {
      var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var key = this[prop];

      var _key$split = key.split("-"),
          _key$split2 = _slicedToArray(_key$split, 3),
          year = _key$split2[0],
          month = _key$split2[1],
          day = _key$split2[2];

      var festival = vg_date_VgDate().isSame(year, month, day) ? this.todayMark : "";
      var vgDate = vg_date_VgDate(year, month, day);
      return {
        key: key,
        vgDate: vgDate,
        year: year,
        month: month,
        day: day,
        date: key,
        week: vgDate.getDay(),
        className: ["active", "clickable"].concat(Object(toConsumableArray["a" /* default */])(className)),
        mark: "",
        festival: festival
      };
    }
  }, {
    key: "highLightDefault",
    value: function highLightDefault() {
      if (this.mode === "double") {
        var _this$changedNode;

        var startNode = this.getDefaultNodeFromProps("defaultStartDate", ["start"]);
        Object(utils["l" /* setProperty */])(startNode, "mark", this.fromDateMark);
        var endNode = this.getDefaultNodeFromProps("defaultEndDate", ["end"]);
        Object(utils["l" /* setProperty */])(endNode, "mark", this.toDateMark);
        this.changedNode = (_this$changedNode = {}, _defineProperty(_this$changedNode, startNode.key, startNode), _defineProperty(_this$changedNode, endNode.key, endNode), _this$changedNode); // 当允许选择同一天，并且默认传的起止日期也是同一天则需要重置endNode

        if (this.doubleModeAllowSameDate && startNode.key === endNode.key) {
          endNode.className.push("start");
          Object(utils["l" /* setProperty */])(endNode, "mark", "".concat(this.fromDateMark, "-").concat(this.toDateMark));
        }

        this.fromDate = startNode;
        this.toDate = endNode;
      } else {
        var node = this.getDefaultNodeFromProps("defaultDate", ["single-mode", "open-days"]);
        this.changedNode = _defineProperty({}, node.key, node);
      }
    }
  }, {
    key: "createCloseIcon",
    value: function createCloseIcon() {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_icon, {
        class: ["vg-calendar-close"],
        name: "close",
        size: 24,
        onClick: this.close
      }, {
        default: function _default() {
          return [];
        }
      });
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var title = Array.isArray(this.title) ? this.title : [this.title];

      var _title = _slicedToArray(title, 3),
          _title$ = _title[0],
          defaultTitle = _title$ === void 0 ? "" : _title$,
          _title$2 = _title[1],
          firstClickTitle = _title$2 === void 0 ? "" : _title$2,
          secondClickTitle = _title[2];

      if (this.mode === "single") {
        return defaultTitle;
      } else {
        if (!this.fromDate && !this.toDate) {
          return firstClickTitle || defaultTitle;
        } else if (this.fromDate && !this.toDate) {
          return secondClickTitle || defaultTitle;
        } else if (this.fromDate && this.toDate) {
          return defaultTitle;
        } else {
          return "";
        }
      }
    }
  }, {
    key: "createTitle",
    value: function createTitle() {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-calendar-header-title"],
        innerHTML: this.getTitle()
      }, {
        default: function _default() {
          return [];
        }
      });
    }
  }, {
    key: "createWeekBar",
    value: function createWeekBar() {
      var _this2 = this;

      var bar = [];

      var _loop = function _loop(i) {
        bar.push(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
          key: i
        }, {
          default: function _default() {
            return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {
              innerHTML: _this2.weekText[i]
            }, {
              default: function _default() {
                return [];
              }
            })];
          }
        }));
      };

      for (var i = 0; i < 7; i++) {
        _loop(i);
      }

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-calendar-week-bar"]
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex, {
            key: "vg_flex_week_bar",
            justifyContent: "spaceAround"
          }, {
            default: function _default() {
              return bar;
            }
          })];
        }
      });
    }
  }, {
    key: "createHeaderArea",
    value: function createHeaderArea() {
      var _this3 = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {}, {
        default: function _default() {
          return [_this3.createCloseIcon(), _this3.createTitle(), _this3.createWeekBar()];
        }
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(date) {
      if (date.className.indexOf("clickable") < 0) {
        return;
      }

      if (this.mode === "double") {
        this.haneleDoubleMode(date);
      } else {
        this.haneleSingleMode(date);
      }
    }
  }, {
    key: "haneleDoubleMode",
    value: function haneleDoubleMode(date) {
      if (!this.fromDate) {
        this.confirmButtonClassName = "disable";
        Object(utils["k" /* push */])(date.className, ["start", "active"]);
        Object(utils["l" /* setProperty */])(date, "mark", this.fromDateMark);
        this.changedNode = _objectSpread2(_objectSpread2({}, this.changedNode), {}, _defineProperty({}, date.key, date));
        this.fromDate = date;
      } else {
        if (!this.toDate) {
          if (date.key === this.fromDate.key) {
            if (this.doubleModeAllowSameDate) {
              this.confirmButtonClassName = "active";
              Object(utils["k" /* push */])(this.changedNode[this.fromDate.key].className, "end");
              Object(utils["l" /* setProperty */])(date, "mark", "".concat(this.fromDateMark, "-").concat(this.toDateMark));
              this.changedNode = _defineProperty({}, date.key, date);
              this.toDate = date;

              if (!this.showConfirmButton) {
                this.handleOnConfirm();
              }
            } else {
              this.confirmButtonClassName = "disable";
              Object(utils["b" /* drop */])(date.className, ["active", "start"]); // this.changedNode = { ...this.changedNode, [date.key]: date };

              this.changedNode = {};
              this.fromDate = null;
            }
          } else {
            if (this.fromDate.vgDate.isAfter(date.vgDate)) {
              if (this.crossed) {
                this.confirmButtonClassName = "active";
                Object(utils["b" /* drop */])(this.changedNode[this.fromDate.key].className, "start");
                Object(utils["k" /* push */])(this.changedNode[this.fromDate.key].className, "end");
                Object(utils["l" /* setProperty */])(this.changedNode[this.fromDate.key], "mark", this.toDateMark);
                this.toDate = this.fromDate;
                this.fromDate = date;
                Object(utils["k" /* push */])(date.className, "start");
                Object(utils["l" /* setProperty */])(date, "mark", this.fromDateMark);
              } else {
                Object(utils["b" /* drop */])(this.changedNode[this.fromDate.key].className, ["start", "active"]);
                this.changedNode = _defineProperty({}, date.key, date);
                Object(utils["l" /* setProperty */])(date, "mark", this.fromDateMark);
                Object(utils["k" /* push */])(date.className, ["start", "active"]);
                this.fromDate = date;
                return;
              }
            } else {
              this.confirmButtonClassName = "active";
              Object(utils["k" /* push */])(date.className, "end");
              Object(utils["l" /* setProperty */])(date, "mark", this.toDateMark);
              this.toDate = date;
            }

            Object(utils["k" /* push */])(date.className, "active");
            this.changedNode = _objectSpread2(_objectSpread2({}, this.changedNode), {}, _defineProperty({}, date.key, date));

            if (!this.showConfirmButton) {
              this.handleOnConfirm();
            }
          }
        } else {
          this.confirmButtonClassName = "disable";
          this.toDate = null;
          Object(utils["b" /* drop */])(date.className, "during-active");
          Object(utils["k" /* push */])(date.className, ["start", "active"]);
          Object(utils["l" /* setProperty */])(date, "mark", this.fromDateMark);
          this.fromDate = date;
          this.changedNode = _defineProperty({}, date.key, date);
        }
      }
    }
  }, {
    key: "haneleSingleMode",
    value: function haneleSingleMode(date) {
      this.changedNode = {};
      Object(utils["k" /* push */])(date.className, ["active", "single-mode"]);
      this.changedNode = _objectSpread2(_objectSpread2({}, this.changedNode), {}, _defineProperty({}, date.key, date));
      this.date = date;

      if (!this.showConfirmButton) {
        this.handleOnConfirm();
      }
    }
  }, {
    key: "getTimePeriod",
    value: function getTimePeriod() {
      var beginDate = vg_date_VgDate().substract(Number(this.before), this.unit);
      var endDate = vg_date_VgDate().add(Number(this.after), this.unit);
      this.beginDate = beginDate.format();
      this.endDate = endDate.format();
      return vg_date_VgDate().getMonthPeriod(beginDate, endDate);
    }
  }, {
    key: "generateDate",
    value: function generateDate() {
      var _this4 = this;

      var caculatedMonth = this.getTimePeriod();
      var caculatedDates = [];
      caculatedMonth.forEach(function (item) {
        var monthObject = {};
        monthObject["dates"] = [];

        var _item$split = item.split("-"),
            _item$split2 = _slicedToArray(_item$split, 2),
            year = _item$split2[0],
            month = _item$split2[1];

        var daysOfMonth = vg_date_VgDate(year, month).getDaysCountOfMonth();

        for (var i = 1; i <= daysOfMonth; i++) {
          var j = i < 10 ? "0".concat(i) : String(i);

          if (j === "01") {
            for (var k = 0; k < vg_date_VgDate(year, month, j).getDay(); k++) {
              monthObject["dates"].push({
                className: [],
                key: "year_month_date_".concat(k)
              });
            }
          }

          var className = [];
          var vgDate = vg_date_VgDate(year, month, j);
          Object(utils["k" /* push */])(className, vg_date_VgDate().isAfter(year, month, j) ? "disable" : "clickable");

          if (_this4.mode === "double" && _this4.fromDate && _this4.toDate) {
            Object(utils["k" /* push */])(className, vg_date_VgDate(year, month, j).isBetween(_this4.fromDate.vgDate, _this4.toDate.vgDate) ? "during-active" : "");
          }

          if (_this4.beginDate && _this4.endDate) {
            if (vg_date_VgDate(year, month, j).isBetweenIncludeBoth(_this4.beginDate, _this4.endDate)) {
              Object(utils["k" /* push */])(className, ["open-days", "clickable"]);
              Object(utils["b" /* drop */])(className, "disable");
            } else {
              Object(utils["k" /* push */])(className, "disable");
              Object(utils["b" /* drop */])(className, "clickable");
            }
          }

          monthObject["key"] = "".concat(year, "-").concat(month);
          monthObject["month"] = month;
          monthObject["year"] = year;
          var festival = vg_date_VgDate().isSame(year, month, j) ? _this4.todayMark : "";
          var key = "".concat(year, "-").concat(month, "-").concat(j);

          if (_this4.changedNode[key]) {
            var node = _this4.changedNode;
            monthObject["dates"].push(_objectSpread2({}, _this4.changedNode[key]));
          } else {
            monthObject["dates"].push({
              key: key,
              year: year,
              month: month,
              day: j,
              week: vgDate.getDay(),
              date: key,
              className: className,
              vgDate: vgDate,
              mark: "",
              festival: festival
            });
          }
        }

        caculatedDates.push(monthObject);
      });
      return caculatedDates;
    }
  }, {
    key: "createDate",
    value: function createDate() {
      var _this5 = this;

      var dates = this.generateDate();
      var caculateDOM = [];
      dates.forEach(function (monthItem) {
        var month = monthItem.month,
            year = monthItem.year,
            key = monthItem.key;
        caculateDOM.push(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
          class: ["vg-calendar-month", month],
          key: key
        }, {
          default: function _default() {
            return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("h4", {
              class: ["vg-calendar-month-title"],
              innerHTML: _this5.monthTtitleParser("".concat(year, "-").concat(month), {
                year: year,
                month: month
              })
            }, {
              default: function _default() {
                return [];
              }
            }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex, {
              key: "vg_flex_".concat(key),
              class: ["vg-calendar-flex"],
              flexWrap: "wrap",
              justifyContent: "spaceAround",
              fixBottomLine: true
            }, {
              default: function _default() {
                var dateDom = [];
                monthItem.dates.forEach(function (date) {
                  var ref = "";

                  if (Array.isArray(date.className) && (date.className.indexOf("single-mode") > -1 || date.className.indexOf("start") > -1)) {
                    ref = "scrollPosition";
                  }

                  dateDom.push(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
                    key: date.key,
                    class: ["vg-calendar-date"].concat(Object(toConsumableArray["a" /* default */])(date.className)),
                    ref: ref,
                    onClick: _this5.handleClick.bind(_this5, date)
                  }, {
                    default: function _default() {
                      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex, {
                        flexDirection: "column",
                        justifyContent: "spaceBetween"
                      }, {
                        default: function _default() {
                          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
                            class: ["vg-calendar-date-festival"]
                          }, {
                            default: function _default() {
                              return date.festival;
                            }
                          }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
                            class: ["vg-calendar-date-text"]
                          }, {
                            default: function _default() {
                              return date.day;
                            }
                          }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
                            class: ["vg-calendar-date-mark"]
                          }, {
                            default: function _default() {
                              return date.mark;
                            }
                          })];
                        }
                      })];
                    }
                  }));
                });
                return dateDom;
              }
            })];
          }
        }));
      });
      return caculateDOM;
    }
  }, {
    key: "handleOnConfirm",
    value: function handleOnConfirm() {
      if (this.confirmButtonClassName !== "active") {
        return;
      }

      this.close();

      if (this.mode === "double") {
        this.$emit("getdate", {
          fromDate: this.fromDate,
          toDate: this.toDate
        });
      } else {
        this.$emit("getdate", {
          date: this.date
        });
      }
    }
  }, {
    key: "createFooterArea",
    value: function createFooterArea() {
      var _this6 = this;

      if (this.showConfirmButton) {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
          class: ["vg-calendar-footer"]
        }, {
          default: function _default() {
            return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
              class: ["vg-calendar-confirm-button", _this6.confirmButtonClassName],
              onClick: _this6.handleOnConfirm,
              innerHTML: _this6.confirmText
            })];
          }
        });
      } else {
        return [];
      }
    }
  }, {
    key: "setPosition",
    value: function setPosition() {
      var _this7 = this;

      this.$nextTick(function () {
        var el = _this7.$refs.scrollPosition.$el;
        var parent = _this7.$refs.popup.$el; // this.$refs.scroller.$el.scrollTop =
        //   getOffset(el).top -
        //   this.$refs.header.$el.offsetHeight -
        //   getOffset(parent).top;
        // 解决iOS 13.4.1 日历显示选择区域异常。
        // 原因是因为在iOS 13.4.1中 获取popup 的translateY的时候有值（按理说这里应该是0）
        // 猜测：可能是iOS 13.4.1的渲染机制跟其他版本浏览器渲染不一致，测试发现跟Vue transition有关系，具体还得查一下
        // 解决方法：延迟30ms，再进行设置scrollTop值

        var timer = setTimeout(function () {
          _this7.$refs.scroller.$el.scrollTop = getOffset(el).top - _this7.$refs.header.$el.offsetHeight - getOffset(parent).top;
          clearTimeout(timer);
        }, 30);
      });
    }
  }, {
    key: "handleBeforeEnter",
    value: function handleBeforeEnter() {
      this.$emit("beforeenter");
    }
  }, {
    key: "handleEnter",
    value: function handleEnter() {
      this.$emit("enter");
    }
  }, {
    key: "handleAfterEnter",
    value: function handleAfterEnter() {
      this.$emit("afterenter");
      this.setPosition();
    }
  }, {
    key: "handleBeforeLeave",
    value: function handleBeforeLeave() {
      this.$emit("beforeleave");
    }
  }, {
    key: "handleLeave",
    value: function handleLeave() {
      this.$emit("leave");
    }
  }, {
    key: "handleAfterLeave",
    value: function handleAfterLeave() {
      this.$emit("afterleave");
    }
  }, {
    key: "created",
    value: function created() {
      this.highLightDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-calendar"]
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_popup, {
            onBeforeenter: _this8.handleBeforeEnter,
            onEnter: _this8.handleEnter,
            onAfterenter: _this8.handleAfterEnter,
            onBeforeleave: _this8.handleBeforeLeave,
            onLeave: _this8.handleLeave,
            onAfterleave: _this8.handleAfterLeave,
            onInput: _this8.close,
            position: "bottom",
            style: {
              height: "90%"
            },
            ref: "popup"
          }, {
            default: function _default() {
              return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex, {
                class: ["vg-calendar-content"],
                flexDirection: "column"
              }, {
                default: function _default() {
                  return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
                    class: ["vg-calendar-header"],
                    ref: "header"
                  }, {
                    default: function _default() {
                      return [_this8.createHeaderArea()];
                    }
                  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
                    ref: "scroller",
                    class: ["vg-calendar-body"],
                    flex: 1
                  }, {
                    default: function _default() {
                      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {}, {
                        default: function _default() {
                          return _this8.createDate();
                        }
                      })];
                    }
                  }), _this8.createFooterArea()];
                }
              })];
            }
          }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _this8.modelValue]])];
        }
      });
    }
  }]);

  return VgCalendar;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], calendar_Props));

calendar_VgCalendar.componentName = "VgCalendar";
calendar_VgCalendar = __decorate([Object(VueGgy["a" /* Options */])({
  emits: ["update:modelValue", "getdate", "beforeenter", "enter", "afterenter", "beforeleave", "leave", "afterleave"],
  name: "VgCalendar",
  watch: {
    mode: "highLightDefault"
  }
})], calendar_VgCalendar);
/* harmony default export */ var calendar = (calendar_VgCalendar);
// CONCATENATED MODULE: ./src/calendar/index.ts
/*
* @Author: Just be free
* @Date:   2020-10-19 09:51:45
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-19 09:52:13
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_calendar = (calendar);
// EXTERNAL MODULE: ./src/utils/event/index.ts
var utils_event = __webpack_require__("5211");

// CONCATENATED MODULE: ./src/layout/layout.ts






/*
* @Author: Just be free
* @Date:   2020-10-21 15:19:17
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-22 10:51:20
* @E-mail: justbefree@126.com
*/







var layout_Props = Object(VueGgy["d" /* props */])({
  showHeader: {
    type: Boolean,
    default: false
  },
  headerHeight: {
    type: [Number, String],
    default: 44
  },
  footerHeight: {
    type: [String, Number],
    default: 50
  },
  showFooter: {
    type: Boolean,
    default: true
  },
  monitor: {
    // 是否监听scroll事件，默认为true监听
    type: Boolean,
    default: true
  },
  footerTransitionName: {
    type: String,
    default: "slide-fade"
  },
  headerTransitionName: {
    type: String,
    default: "slide-fade-top"
  },
  topDistance: {
    type: [Number, String],
    default: 0
  },
  bottomDistance: {
    type: [Number, String],
    default: 0
  }
});

var layout_VgLayout = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgLayout, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgLayout);

  function VgLayout() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgLayout);

    _this = _super.apply(this, arguments);
    _this.scrollTop = 0;
    _this.clientHeight = 0;
    _this.topTriggered = false;
    _this.bottomTriggered = false;
    return _this;
  }

  Object(createClass["a" /* default */])(VgLayout, [{
    key: "handleBodyScroll",
    value: function handleBodyScroll(e) {
      var target = e.target;
      var scrollTop = getScrollTop(target);
      var clientHeight = target.clientHeight;
      var diff = scrollTop + clientHeight - (this.scrollTop + this.clientHeight);
      var bottom = target.scrollHeight - target.offsetHeight - (Number(this.bottomDistance) || 0);
      var top = Number(this.topDistance) || 0; // diff>0 往下滑动；diff<0往上滑动

      this.$emit("scroll", {
        e: e,
        scrollTop: scrollTop,
        diff: diff,
        bottom: bottom - scrollTop
      });

      if (diff < 0 && !this.topTriggered && scrollTop <= top) {
        this.topTriggered = true; // 到达顶部

        this.$emit("reachtop", {
          e: e,
          scrollTop: scrollTop
        });
      } else if (diff > 0 && scrollTop > top) {
        this.topTriggered = false;
      }

      if (diff > 0 && !this.bottomTriggered && scrollTop >= bottom) {
        this.bottomTriggered = true;
        this.$emit("reachbottom", {
          e: e,
          scrollTop: scrollTop
        }); // 到达底部
      } else if (diff < 0 && scrollTop >= bottom) {
        this.bottomTriggered = false;
      } else if (diff > 0 && scrollTop < bottom) {
        this.bottomTriggered = false;
      }

      this.scrollTop = scrollTop;
      this.clientHeight = clientHeight;
    }
  }, {
    key: "getTop",
    value: function getTop() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var ele = this.$refs.scrollElement.$el;

      if (!ele) {
        return;
      }

      ele.scrollTop = pos;
    }
  }, {
    key: "mounted",
    value: function mounted() {
      if (this.monitor) {
        var ele = this.$refs.scrollElement.$el;

        if (!ele) {
          return;
        }

        Object(utils_event["c" /* on */])(ele, "scroll", this.handleBodyScroll);
      }
    }
  }, {
    key: "beforeUnmount",
    value: function beforeUnmount() {
      if (this.monitor) {
        var ele = this.$refs.scrollElement.$el;

        if (!ele) {
          return;
        }

        Object(utils_event["b" /* off */])(ele, "scroll", this.handleBodyScroll);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var headerHeight = "".concat(this.headerHeight, "px");
      var footerHeight = "".concat(this.footerHeight, "px");
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-layout"]
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex, {
            class: ["vg-layout-flex-container"],
            flexDirection: "column",
            justifyContent: "spaceBetween"
          }, {
            default: function _default() {
              return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
                name: _this2.headerTransitionName
              }, {
                default: function _default() {
                  return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
                    class: ["vg-layout-header"],
                    style: {
                      height: headerHeight
                    }
                  }, {
                    default: function _default() {
                      return _this2.getSlots("header");
                    }
                  }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _this2.showHeader]])];
                }
              }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
                class: ["vg-layout-body", "vg-layout-body-scroll-ele"],
                flex: 1,
                ref: "scrollElement"
              }, {
                default: function _default() {
                  return _this2.getSlots("body");
                }
              }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
                name: _this2.footerTransitionName
              }, {
                default: function _default() {
                  return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
                    class: ["vg-layout-footer"],
                    style: {
                      height: footerHeight
                    }
                  }, {
                    default: function _default() {
                      return _this2.getSlots("footer");
                    }
                  }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _this2.showFooter]])];
                }
              })];
            }
          })];
        }
      });
    }
  }]);

  return VgLayout;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], layout_Props));

layout_VgLayout.componentName = "VgLayout";
layout_VgLayout = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgLayout",
  emits: ["reachtop", "reachbottom", "scroll"]
})], layout_VgLayout);
/* harmony default export */ var layout = (layout_VgLayout);
// CONCATENATED MODULE: ./src/layout/index.ts
/*
* @Author: Just be free
* @Date:   2020-10-21 15:16:31
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-21 15:16:58
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_layout = (layout);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./src/utils/event/bus.ts
var bus = __webpack_require__("00b0");

// CONCATENATED MODULE: ./src/citypicker/citypicker.ts


















/*
* @Author: Just be free
* @Date:   2020-10-22 14:42:19
* @Last Modified by:   Just be free
* @Last Modified time: 2021-01-07 18:32:26
* @E-mail: justbefree@126.com
*/











var CACHED_ALPHA_BETA = {};
var citypicker_Props = Object(VueGgy["d" /* props */])({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: "标题"
  },
  column: {
    type: [Number, String],
    default: 4,
    validator: function validator(c) {
      return String(c) === "4" || String(c) === "3";
    }
  },
  parse: {
    type: Function,
    default: function _default(city) {
      return city.CityName;
    }
  },
  limited: {
    type: Boolean,
    default: false
  },
  limitedData: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  tabs: {
    type: Array,
    default: function _default() {
      return [{
        label: "中国",
        key: "mainland-china"
      }, {
        label: "非中国大陆(国际/港澳台)",
        key: "overseas"
      }];
    }
  },
  searchable: {
    type: Boolean,
    default: true
  },
  placeholder: {
    type: String,
    default: "请输入城市名称"
  },
  showHistory: {
    type: Boolean,
    default: false
  },
  showHotCity: {
    type: Boolean,
    default: true
  },
  search: {
    type: Object,
    default: function _default() {
      return {
        params: {},
        action: function action() {
          return Promise.resolve();
        },
        parse: function parse(e) {
          return e;
        }
      };
    }
  },
  history: {
    type: Object,
    default: function _default() {
      return {
        params: {},
        action: function action() {
          return Promise.resolve();
        },
        parse: function parse(e) {
          return e;
        },
        title: "历史查询"
      };
    }
  },
  hotCity: {
    type: Object,
    default: function _default() {
      return {
        params: {},
        action: function action() {
          return Promise.resolve();
        },
        parse: function parse(e) {
          return e;
        },
        title: "热门城市"
      };
    }
  },
  alphaBeta: {
    type: Object,
    default: function _default() {
      return {
        params: {},
        action: function action() {
          return Promise.resolve();
        },
        parse: function parse(e) {
          return e;
        },
        title: "按字母查询"
      };
    }
  }
});

var citypicker_VgCitypicker = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgCitypicker, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgCitypicker);

  function VgCitypicker() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgCitypicker);

    _this = _super.apply(this, arguments);
    _this.isCompose = false;
    _this.caculatedTabs = [];
    _this.currentTab = "";
    _this.selectedAlphaBeta = "";
    _this.alphaBetaCities = [];
    _this.hotCityList = [];
    _this.historyList = [];
    _this.searchList = [];
    _this.historyLoading = false;
    _this.alphaBetaLoading = false;
    _this.hotCityLoading = false;
    _this.isSearching = false;
    _this.keywords = "";
    _this.textBoxWidth = 68;
    return _this;
  }

  Object(createClass["a" /* default */])(VgCitypicker, [{
    key: "createTitle",
    value: function createTitle() {
      var _this2 = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {
        class: ["vg-city-picker-header-title"]
      }, {
        default: function _default() {
          return _this2.title;
        }
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.$emit("update:modelValue", false);
    }
  }, {
    key: "handlePick",
    value: function handlePick(e) {
      if (this.isSearching) {
        // 搜索完结果后，点击结果需清空档次搜索记录
        this.clearSearchKeywords();
      }

      this.handleChange(false);
      this.$emit("pick", e);
    }
  }, {
    key: "clearSearchKeywords",
    value: function clearSearchKeywords() {
      this.isSearching = false;
      this.keywords = "";
      this.$refs.searchInput.value = "";
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.$emit("update:modelValue", e);
    }
  }, {
    key: "createClose",
    value: function createClose() {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_icon, {
        class: ["vg-city-picker-close"],
        name: "close",
        size: 24,
        onClick: this.close
      }, {
        default: function _default() {
          return [];
        }
      });
    }
  }, {
    key: "createBlock",
    value: function createBlock(_ref) {
      var _this3 = this;

      var cities = _ref.cities,
          loading = _ref.loading;

      if (loading) {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
          class: ["vg-city-picker-searched-area"]
        }, {
          default: function _default() {
            return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_spin, {
              type: "tripleBounce",
              size: 30
            }, {
              default: function _default() {
                return [];
              }
            })];
          }
        });
      } else {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex, {
          flexWrap: "wrap",
          justifyContent: "spaceBetween",
          class: "vg-city-picker-cities",
          ref: "cityBox"
        }, {
          default: function _default() {
            return Array.apply(null, cities).map(function (city, key) {
              var text = _this3.parse(city);

              var textLength = text.length;
              var fontSize = _this3.textBoxWidth / textLength;
              var textOverflow = [];

              if (fontSize > 14) {
                fontSize = "14px";
              } else if (fontSize < 12) {
                fontSize = "12px";

                if (Object(utils["f" /* isChineseCharacters */])(text)) {
                  textOverflow.push.apply(textOverflow, ["text-small", "normal-lineheight"]);
                }
              } else {
                fontSize = "".concat(fontSize, "px");
              }

              return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
                key: key,
                onClick: _this3.handlePick.bind(_this3, city),
                style: {
                  fontSize: fontSize
                },
                class: ["city-item", "column-".concat(_this3.column)].concat(textOverflow)
              }, {
                default: function _default() {
                  return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {}, {
                    default: function _default() {
                      return _this3.parse(city);
                    }
                  })];
                }
              });
            });
          }
        });
      }
    }
  }, {
    key: "createBlockTitle",
    value: function createBlockTitle() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-city-picker-block-title"]
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {}, {
            default: function _default() {
              return title;
            }
          })];
        }
      });
    }
  }, {
    key: "createHistoryArea",
    value: function createHistoryArea() {
      var result = [];

      if (this.showHistory) {
        if (this.historyList.length > 0) {
          result.push(this.createBlockTitle(this.history.title));
        }

        result.push(this.createBlock({
          cities: this.historyList,
          loading: this.historyLoading
        }));
      }

      return result;
    }
  }, {
    key: "createHotCityArea",
    value: function createHotCityArea() {
      var result = [];

      if (this.showHotCity) {
        result.push.apply(result, [this.createBlockTitle(this.hotCity.title), this.createBlock({
          cities: this.hotCityList,
          loading: this.hotCityLoading
        })]);
      }

      return result;
    }
  }, {
    key: "setAlphaBetaScrollTop",
    value: function setAlphaBetaScrollTop() {
      var _this4 = this;

      if (this.limited || this.isSearching) {
        return;
      }

      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function () {
        var scrollElement = _this4.$refs["scrollElement-".concat(_this4.currentTab)].$el;

        var lastChild = scrollElement.lastElementChild;
        scrollElement.scrollTop = lastChild.offsetTop;
      });
    }
  }, {
    key: "handleClickAlphaBeta",
    value: function handleClickAlphaBeta(e) {
      var _this5 = this;

      if (this.selectedAlphaBeta === e) {
        return false;
      }

      this.selectedAlphaBeta = e;
      this.alphaBetaCities = [];

      if (CACHED_ALPHA_BETA[e] && CACHED_ALPHA_BETA[e].length) {
        this.alphaBetaLoading = false;
        this.alphaBetaCities = CACHED_ALPHA_BETA[e];
      } else {
        this.alphaBetaLoading = true;

        var params = _objectSpread2(_objectSpread2({}, this.alphaBeta.params), {}, {
          alphaBeta: e
        });

        var promise = this.alphaBeta.action(params);

        if (Object(utils["i" /* isPromise */])(promise)) {
          promise.then(function (res) {
            var data = _this5.alphaBeta.parse(res, params);

            if (data && data.length) {
              CACHED_ALPHA_BETA[e] = data;
              _this5.alphaBetaCities = data;

              _this5.setAlphaBetaScrollTop();
            }

            _this5.alphaBetaLoading = false;
          });
        } else {
          console.error("The action of alphaBeta's attribute must be a Promise type!");
        }
      }
    }
  }, {
    key: "createAlphaBeta",
    value: function createAlphaBeta() {
      var _this6 = this;

      return [this.createBlockTitle(this.alphaBeta.title), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex, {
        flexWrap: "wrap",
        justifyContent: "spaceBetween",
        class: ["vg-city-picker-alpha-beta"]
      }, {
        default: function _default() {
          return Array.apply(null, new Array(26)).map(function (i, key) {
            var char = String.fromCharCode(65 + key);
            return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
              onClick: _this6.handleClickAlphaBeta.bind(_this6, char),
              class: ["alpha-beta", _this6.selectedAlphaBeta === char ? "active" : ""]
            }, {
              default: function _default() {
                return char;
              }
            });
          });
        }
      })];
    }
  }, {
    key: "createSearchedArea",
    value: function createSearchedArea() {
      return this.createBlock({
        cities: this.alphaBetaCities,
        loading: this.alphaBetaLoading
      });
    }
  }, {
    key: "createBodyArea",
    value: function createBodyArea() {
      var body = [];
      body.push.apply(body, Object(toConsumableArray["a" /* default */])(this.createHistoryArea()));
      body.push.apply(body, Object(toConsumableArray["a" /* default */])(this.createHotCityArea()));
      body.push.apply(body, Object(toConsumableArray["a" /* default */])(this.createAlphaBeta()));
      body.push(this.createSearchedArea());
      return body;
    }
  }, {
    key: "createInputSearchList",
    value: function createInputSearchList() {
      var _this7 = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("ul", {}, {
        default: function _default() {
          return Array.apply(null, _this7.searchList).map(function (list, key) {
            var innerHTML = _this7.parse(list, "search-result").replace(new RegExp(_this7.keywords, "ig"), "<i>".concat(_this7.keywords, "</i>"));

            return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("li", {
              key: key,
              onClick: _this7.handlePick.bind(_this7, list)
            }, {
              default: function _default() {
                return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {
                  innerHTML: innerHTML
                }, {
                  default: function _default() {
                    return [];
                  }
                })];
              }
            });
          });
        }
      });
    }
  }, {
    key: "clearSearchResult",
    value: function clearSearchResult() {
      this.searchList = [];
    }
  }, {
    key: "handleTabSwitch",
    value: function handleTabSwitch(ctab) {
      var _this8 = this;

      if (ctab.active) {
        return;
      }

      this.clearSearchResult();
      this.caculatedTabs.forEach(function (tab) {
        if (tab.key === ctab.key) {
          tab.active = true;

          if (_this8.showHistory) {
            _this8.getHistory(tab.key);
          }

          if (!_this8.limited && _this8.showHotCity) {
            _this8.getHotCity(tab.key);
          }
        } else {
          tab.active = false;
        }
      });
      this.currentTab = ctab.key;
    }
  }, {
    key: "handleOnSearch",
    value: function handleOnSearch(e) {
      if (this.isCompose) return;
      Object(utils["m" /* throttle */])(this.searchRequest)(e);
    }
  }, {
    key: "onComposeStart",
    value: function onComposeStart() {
      this.isCompose = true;
    }
  }, {
    key: "onComposeEnd",
    value: function onComposeEnd(e) {
      this.isCompose = false;
      this.handleOnSearch(e);
    }
  }, {
    key: "creteInputSearchArea",
    value: function creteInputSearchArea() {
      var _this9 = this;

      if (this.searchable) {
        return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex, {
          justifyContent: "spaceBetween",
          class: ["vg-city-picker-input-search"]
        }, {
          default: function _default() {
            return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
              class: ["icon-box"]
            }, {
              default: function _default() {
                return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_icon, {
                  name: "search",
                  size: "16"
                }, {
                  default: function _default() {
                    return [];
                  }
                })];
              }
            }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
              class: ["input-box", _this9.isSearching ? "searching" : ""],
              flex: 1
            }, {
              default: function _default() {
                return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("input", {
                  onCompositionstart: _this9.onComposeStart,
                  onCompositionend: _this9.onComposeEnd,
                  onInput: _this9.handleOnSearch,
                  attrs: {
                    placeholder: _this9.placeholder
                  },
                  ref: "searchInput"
                }, {
                  default: function _default() {
                    return [];
                  }
                })];
              }
            }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
              onClick: _this9.clearSearchKeywords,
              class: ["delete-all"]
            }, {
              default: function _default() {
                return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_icon, {
                  name: "clear",
                  size: 16
                }, {
                  default: function _default() {
                    return [];
                  }
                })];
              }
            }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _this9.isSearching]])];
          }
        })];
      }

      return [];
    }
  }, {
    key: "creteHeaderArea",
    value: function creteHeaderArea() {
      var _this10 = this;

      var header = [];
      header.push(this.createTitle());
      header.push(this.createClose());

      if (this.caculatedTabs.length === 2) {
        header.push(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex, {
          justifyContent: "spaceAround",
          class: ["vg-city-picker-tab-bar"]
        }, {
          default: function _default() {
            return Array.apply(null, _this10.caculatedTabs).map(function (ele, key, arr) {
              return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
                key: key,
                onClick: _this10.handleTabSwitch.bind(_this10, ele),
                flex: 1,
                class: ["vg-city-picker-tab-item", ele.active ? "active" : ""]
              }, {
                default: function _default() {
                  return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {
                    class: ["vg-city-picker-tab-text"]
                  }, {
                    default: function _default() {
                      return ele.label;
                    }
                  })];
                }
              });
            });
          }
        }));
      }

      header.push.apply(header, Object(toConsumableArray["a" /* default */])(this.creteInputSearchArea()));
      return header;
    }
  }, {
    key: "createDynamicContent",
    value: function createDynamicContent() {
      var _this11 = this;

      if (this.limited) {
        return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
          class: ["vg-city-picker-header"]
        }, {
          default: function _default() {
            return [_this11.createTitle(), _this11.createClose()];
          }
        }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
          flex: 1
        }, {
          default: function _default() {
            return [_this11.createBlock({
              cities: _this11.limitedData,
              loading: false
            })];
          }
        })];
      } else {
        return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
          class: ["vg-city-picker-header"]
        }, {
          default: function _default() {
            return _this11.creteHeaderArea();
          }
        }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
          class: ["vg-city-picker-body"],
          flex: 1,
          ref: "scrollElement-mainland-china"
        }, {
          default: function _default() {
            return [_this11.createBodyArea()];
          }
        }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !this.isSearching && this.currentTab === "mainland-china"]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
          class: ["vg-city-picker-body"],
          flex: 1,
          ref: "scrollElement-overseas"
        }, {
          default: function _default() {
            return [_this11.createBodyArea()];
          }
        }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !this.isSearching && this.currentTab === "overseas"]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
          class: ["vg-city-picker-body", "vg-city-picker-input-search-result"],
          flex: 1,
          ref: "scrollElement-searching"
        }, {
          default: function _default() {
            return [_this11.createInputSearchList()];
          }
        }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], this.isSearching]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
          class: ["vg-city-picker-footer"]
        }, {
          default: function _default() {
            return [];
          }
        })];
      }
    }
  }, {
    key: "getHistory",
    value: function getHistory(e) {
      var _this12 = this;

      var params = _objectSpread2(_objectSpread2({}, this.history.params), {}, {
        tab: e
      });

      var promise = this.history.action(params);

      if (Object(utils["i" /* isPromise */])(promise)) {
        this.historyLoading = true;
        promise.then(function (res) {
          var data = _this12.history.parse(res, params);

          if (data && data.length) {
            _this12.historyList = data;
          }

          _this12.historyLoading = false;
        });
      } else {
        console.error("The action of hotCity's attribute must be a Promise type!");
      }
    }
  }, {
    key: "getHotCity",
    value: function getHotCity(e) {
      var _this13 = this;

      var params = _objectSpread2(_objectSpread2({}, this.hotCity.params), {}, {
        tab: e
      });

      var promise = this.hotCity.action(params);

      if (Object(utils["i" /* isPromise */])(promise)) {
        this.hotCityLoading = true;
        promise.then(function (res) {
          var data = _this13.hotCity.parse(res, params);

          if (data && data.length) {
            _this13.hotCityList = data;
          }

          _this13.hotCityLoading = false;
        });
      } else {
        console.error("The action of hotCity's attribute must be a Promise type!");
      }
    }
  }, {
    key: "beforeEnter",
    value: function beforeEnter() {
      console.log("bindResize");
      this.bindResize();

      if (this.showHistory) {
        this.getHistory(this.currentTab);
      }

      if (!this.limited && this.showHotCity) {
        this.getHotCity(this.currentTab);
      }

      this.$emit("beforeenter");
    }
  }, {
    key: "enter",
    value: function enter() {
      this.$emit("enter");
    }
  }, {
    key: "afterEnter",
    value: function afterEnter() {
      this.$emit("afterenter");
    }
  }, {
    key: "beforeLeave",
    value: function beforeLeave() {
      this.unbindResize();
      this.$emit("beforeleave");
    }
  }, {
    key: "leave",
    value: function leave() {
      this.$emit("leave");
    }
  }, {
    key: "afterLeave",
    value: function afterLeave() {
      this.$emit("afterleave");
    }
  }, {
    key: "resizeEventHandler",
    value: function resizeEventHandler(el, paddingLeft, paddingRight) {
      var actualWidth = el.getBoundingClientRect().width - parseInt(paddingLeft) - parseInt(paddingRight);
      var textBoxWidth = parseInt(this.column) === 3 ? actualWidth * 0.31 : actualWidth * 0.22;
      this.textBoxWidth = textBoxWidth;
    }
  }, {
    key: "resize",
    value: function resize() {
      var _this14 = this;

      var cityBox = this.$refs.cityBox.$el;
      var paddingLeft = getPropertyValue(cityBox, "padding-left");
      var paddingRight = getPropertyValue(cityBox, "padding-right");
      var el = this.$el;
      this.resizeEventHandler(el, paddingLeft, paddingRight);
      bus["a" /* EventBus */].on("window:resize", function () {
        _this14.resizeEventHandler(el, paddingLeft, paddingRight);
      });
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.resize();
    }
  }, {
    key: "render",
    value: function render() {
      var _this15 = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-city-picker"]
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_popup, {
        onBeforeenter: this.beforeEnter,
        onEnter: this.enter,
        onAfterenter: this.afterEnter,
        onBeforeLeave: this.beforeLeave,
        onLeave: this.leave,
        onAfterleave: this.afterLeave,
        position: "bottom",
        style: {
          height: "90%"
        }
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex, {
            class: ["vg-city-picker-content", _this15.limited ? "limited" : ""],
            flexDirection: "column"
          }, {
            default: function _default() {
              return _this15.createDynamicContent();
            }
          })];
        }
      }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], this.modelValue]])]);
    }
  }]);

  return VgCitypicker;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], citypicker_Props));

citypicker_VgCitypicker.componentName = "VgCitypicker";
citypicker_VgCitypicker = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgCitypicker",
  emits: ["update:modelValue", "pick", "beforeenter", "enter", "afterenter", "beforeleave", "leave", "afterleave"],
  watch: {
    tabs: {
      handler: function handler() {
        var _this16 = this;

        this.caculatedTabs = [];
        this.tabs.forEach(function (tab, index) {
          var active;

          if (index === 0) {
            active = true;
            _this16.currentTab = tab.key;
          } else {
            active = false;
          }

          _this16.caculatedTabs.push(_objectSpread2(_objectSpread2({}, tab), {}, {
            active: active
          }));
        });
      },
      immediate: true
    }
  }
})], citypicker_VgCitypicker);
/* harmony default export */ var citypicker = (citypicker_VgCitypicker);
// CONCATENATED MODULE: ./src/citypicker/index.ts
/*
* @Author: Just be free
* @Date:   2020-10-22 14:42:13
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-22 14:42:59
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_citypicker = (citypicker);
// CONCATENATED MODULE: ./src/indicator/indicator.ts






/*
* @Author: Just be free
* @Date:   2020-10-23 11:32:56
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-23 11:58:19
* @E-mail: justbefree@126.com
*/




var indicator_Props = Object(VueGgy["d" /* props */])({
  text: String,
  spinType: String,
  spinColor: String,
  background: String,
  size: [Number, String],
  lockScreen: Boolean,
  transparent: Boolean
});

var indicator_VgIndicator = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgIndicator, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgIndicator);

  function VgIndicator() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgIndicator);

    _this = _super.apply(this, arguments);
    _this.visible = false;
    return _this;
  }

  Object(createClass["a" /* default */])(VgIndicator, [{
    key: "setVisible",
    value: function setVisible(status) {
      this.visible = status;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
        name: "vg-indicator"
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
            class: ["vg-indicator"]
          }, {
            default: function _default() {
              return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
                class: ["vg-indicator-mask", _this2.transparent ? "transparent" : ""]
              }, {
                default: function _default() {
                  return [];
                }
              }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
                class: ["vg-indicator-wrapper"],
                style: {
                  padding: _this2.text ? "20px" : "15px",
                  background: _this2.background
                }
              }, {
                default: function _default() {
                  return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_spin, {
                    size: _this2.size,
                    type: _this2.spinType,
                    color: _this2.spinColor,
                    class: ["vg-indicator-spin"]
                  }, {
                    default: function _default() {
                      return [];
                    }
                  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {
                    class: ["vg-indicator-text"],
                    innerHTML: _this2.text
                  }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _this2.text]])];
                }
              })];
            }
          }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _this2.visible]])];
        }
      });
    }
  }]);

  return VgIndicator;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], indicator_Props));

indicator_VgIndicator.componentName = "VgIndicator";
indicator_VgIndicator = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgIndicator"
})], indicator_VgIndicator);
/* harmony default export */ var indicator = (indicator_VgIndicator);
// CONCATENATED MODULE: ./src/indicator/index.ts


/*
* @Author: Just be free
* @Date:   2020-10-23 11:33:06
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-23 15:40:50
* @E-mail: justbefree@126.com
*/



var indicator_ctx = null;
/* harmony default export */ var src_indicator = ({
  bodyOverflow: "",
  lockScreen: false,
  open: function open(options) {
    var defaultOptions = {
      text: "",
      spinColor: "#ccc",
      spinType: "snake",
      background: "",
      size: 40,
      lockScreen: false,
      transparent: true
    };
    var props = Object.assign(defaultOptions, options);
    var instance = renderDOM(indicator, props, function () {});
    this.lockScreen = options.lockScreen;
    indicator_ctx = instance.ctx;

    if (options.lockScreen) {
      this.bodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }

    document.body.appendChild(indicator_ctx.getDomTree());
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function () {
      indicator_ctx.setVisible(true);
    });
  },
  close: function close() {
    if (indicator_ctx) {
      if (this.lockScreen) {
        document.body.style.overflow = this.bodyOverflow;
      }

      indicator_ctx.setVisible(false);
    }
  }
});
// EXTERNAL MODULE: ./node_modules/vue-class-component/dist/vue-class-component.esm-bundler.js
var vue_class_component_esm_bundler = __webpack_require__("ce1f");

// EXTERNAL MODULE: ./packages/touch-emulator/index.js
var touch_emulator = __webpack_require__("bac1");

// CONCATENATED MODULE: ./src/component/EventEmulator.ts






/*
* @Author: Just be free
* @Date:   2020-10-26 14:19:04
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-09 14:52:18
* @E-mail: justbefree@126.com
*/
 // import { bind, preventDefault } from "../utils/event";

 // import "../utils/event/touch-emulator";


var MIN_DISTANCE = 10;

var getDirection = function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return "horizontal";
  }

  if (y > x && y > MIN_DISTANCE) {
    return "vertical";
  }

  return "";
};

var EventEmulator_EventEmulator = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(EventEmulator, _Vue);

  var _super = Object(createSuper["a" /* default */])(EventEmulator);

  function EventEmulator() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, EventEmulator);

    _this = _super.apply(this, arguments);
    _this.maxTargetX = 150;
    _this.maxTargetY = 150;
    _this.startX = 0;
    _this.startY = 0;
    _this.deltaX = 0;
    _this.deltaY = 0;
    _this.offsetX = 0;
    _this.offsetY = 0;
    _this.direction = "";
    _this.bindedEvents = {
      unbindtouchstart: [],
      unbindtouchmove: [],
      unbindtouchend: []
    };
    _this.bounceDeltaX = 0;
    _this.bounceDeltaY = 0;
    return _this;
  }

  Object(createClass["a" /* default */])(EventEmulator, [{
    key: "resetTouchStatus",
    value: function resetTouchStatus() {
      this.startY = 0;
      this.startX = 0;
      this.deltaY = 0;
      this.deltaX = 0;
      this.offsetX = 0;
      this.offsetY = 0;
      this.direction = "";
      this.bounceDeltaX = 0;
      this.bounceDeltaY = 0;
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(e, args) {
      // preventDefault(e, true);
      this.resetTouchStatus();
      var start = args.start,
          target = args.target;
      this.startX = e.touches[0].clientX;
      this.startY = e.touches[0].clientY;
      start && typeof start === "function" && start({
        e: e,
        target: target
      });
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(e, args) {
      // preventDefault(e, true);
      var dragging = args.dragging,
          target = args.target;
      var itemHeight = e.target.offsetHeight;
      var touch = e.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      var stepY = (this.maxTargetY - this.deltaY) / 8;
      var stepX = (this.maxTargetX - this.deltaX) / 8;

      if (stepY >= 0) {
        this.bounceDeltaY = this.deltaY + stepY;
      }

      if (stepX >= 0) {
        this.bounceDeltaX = this.deltaX + stepY;
      }

      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
      dragging && typeof dragging === "function" && dragging({
        e: e,
        target: target,
        itemHeight: itemHeight
      });
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(e, args) {
      // preventDefault(e, true);
      var stop = args.stop,
          target = args.target;
      var itemHeight = e.target.offsetHeight;
      var scrollHeight = target.offsetHeight;
      stop && typeof stop === "function" && stop({
        e: e,
        target: target,
        itemHeight: itemHeight,
        scrollHeight: scrollHeight
      });
    }
  }, {
    key: "bindEvent",
    value: function bindEvent(el, args) {
      var unbindtouchstart = Object(utils_event["a" /* bind */])(el, "touchstart", this.onTouchStart, _objectSpread2(_objectSpread2({}, args), {}, {
        target: el
      }), false);
      var unbindtouchmove = Object(utils_event["a" /* bind */])(el, "touchmove", this.onTouchMove, _objectSpread2(_objectSpread2({}, args), {}, {
        target: el
      }), false);
      var unbindtouchend = Object(utils_event["a" /* bind */])(el, "touchend", this.onTouchEnd, _objectSpread2(_objectSpread2({}, args), {}, {
        target: el
      }), false);
      this.bindedEvents["unbindtouchstart"].push(unbindtouchstart);
      this.bindedEvents["unbindtouchmove"].push(unbindtouchmove);
      this.bindedEvents["unbindtouchend"].push(unbindtouchend);
    }
  }, {
    key: "unbindAllEvent",
    value: function unbindAllEvent() {
      for (var attr in this.bindedEvents) {
        while (this.bindedEvents[attr].length > 0) {
          var unbind = this.bindedEvents[attr].pop();

          if (typeof unbind === "function") {
            unbind();
          }
        }
      }
    }
  }, {
    key: "unbindEvent",
    value: function unbindEvent(type) {
      var unbind = "unbind".concat(type);
      var event = this.bindedEvents[unbind];

      while (event.length > 0) {
        var e = event.pop();

        if (e && typeof e === "function") {
          e();
        }
      }
    }
  }]);

  return EventEmulator;
}(vue_class_component_esm_bundler["b" /* Vue */]);


// CONCATENATED MODULE: ./src/slider/slider.ts






/*
* @Author: Just be free
* @Date:   2020-10-23 16:35:16
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-27 18:28:05
* @E-mail: justbefree@126.com
*/







var slider_Props = Object(VueGgy["d" /* props */])({
  modelValue: [Number, Object],
  tip: Boolean,
  dragIcon: String,
  min: {
    type: [String, Number],
    default: 0
  },
  max: {
    type: [String, Number],
    default: 100
  },
  step: {
    type: [String, Number],
    default: 1
  },
  parse: {
    type: Function,
    default: function _default(e) {
      return e;
    }
  }
});

var slider_VgSlider = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgSlider, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgSlider);

  function VgSlider() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgSlider);

    _this = _super.apply(this, arguments);
    _this.startLeft = 0;
    _this.endLeft = 0;
    _this.width = 0;
    _this.dragging = false;
    _this.disStep = 0;
    _this.startValue = 0;
    _this.endValue = 0;
    _this.tipValueSize = 0;
    return _this;
  }

  Object(createClass["a" /* default */])(VgSlider, [{
    key: "genSider",
    value: function genSider(type) {
      var _this2 = this;

      if (type === "start") {
        if (!Object(utils["h" /* isObject */])(this.modelValue)) {
          return [];
        }
      }

      var dragIcon = this.dragIcon ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("img", {
        src: this.dragIcon
      }, []) : "";
      var tipValue = this.parse(this["".concat(type, "Value")]);
      var tipValueSize = Object(utils["c" /* getCharLength */])(String(tipValue)) * 7;
      var slider = this.$refs["".concat(type, "Slider")];
      var sliderOffsetWidth = slider && slider.offsetWidth || 0;
      var tip = null;

      if (this.tip) {
        tip = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
          style: {
            width: "".concat(tipValueSize, "px"),
            left: "".concat(-1 * tipValueSize / 2 + sliderOffsetWidth / 2 - 3, "px")
          },
          class: ["vg-slider-button-tip"]
        }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {}, {
          default: function _default() {
            return tipValue;
          }
        })]);
      }

      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        ref: "".concat(type, "SliderBar"),
        class: ["vg-slider-bar", type],
        style: this["".concat(type, "BarStyle")]
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
            ref: "".concat(type, "Slider"),
            class: ["vg-slider-button", _this2.dragIcon ? "drag-icon" : ""]
          }, {
            default: function _default() {
              return [dragIcon, tip];
            }
          })];
        }
      })];
    }
  }, {
    key: "transformValueToDistance",
    value: function transformValueToDistance() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return this.width * value / this.maxVlue;
    }
  }, {
    key: "transformDistanceToValue",
    value: function transformDistanceToValue() {
      var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return Math.round(this.maxVlue * distance / this.width);
    }
  }, {
    key: "getNearestDirection",
    value: function getNearestDirection(real) {
      var right = this.endLeft - real;
      var left = real - this.startLeft;
      return Math.min(left, right) === right ? "end" : "start";
    }
  }, {
    key: "set",
    value: function set() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.$emit("update:modelValue", value);
    }
  }, {
    key: "handleBarClick",
    value: function handleBarClick() {
      var that = this;
      this.bindEvent(this.$el, {
        stop: function stop(event) {
          Object(utils_event["d" /* preventDefault */])(event.e, true);

          if (event.e && event.e.changedTouches && event.e.changedTouches[0]) {
            var disX = event.e.changedTouches[0].clientX - getOffset(event.target).left;
            var real = Math.round(disX / that.disStep) * that.disStep; // 防止滑块超出范围

            if (real >= that.width) {
              real = that.width;
            } else if (real <= 0) {
              real = 0;
            }

            var value = that.transformDistanceToValue(real);

            if (Object(utils["h" /* isObject */])(that.modelValue)) {
              if (value >= that.endValue) {
                that.endValue = value;
                that.endLeft = real;
              } else if (value <= that.startValue) {
                that.startValue = value;
                that.startLeft = real;
              } else if (value > that.startValue && value < that.endValue) {
                var direction = that.getNearestDirection(real);
                that["".concat(direction, "Value")] = value;
                that["".concat(direction, "Left")] = real;
              }
            } else {
              that.endValue = value;
              that.endLeft = real;
            }

            that.emit();
          }
        }
      });
    }
  }, {
    key: "drag",
    value: function drag(type) {
      var el = this.$refs["".concat(type, "Slider")];

      if (!el) {
        return;
      }

      var that = this;
      var barWidth = 0;
      var value = this.modelValue;
      var width = this.$el.offsetWidth;
      var iValue;

      if (Object(utils["h" /* isObject */])(value)) {
        if (Object(utils["d" /* hasOwnProperty */])(value, "start") && Object(utils["d" /* hasOwnProperty */])(value, "end")) {
          iValue = this.modelValue[type];
        } else {
          return;
        }
      } else {
        iValue = this.modelValue;
      }

      that["".concat(type, "Value")] = iValue;
      this.disStep = Math.round(width / (Number(this.max) - 1)) * Number(this.step);
      this.width = width;
      this["".concat(type, "Left")] = this.transformValueToDistance(iValue);
      this.bindEvent(el, {
        start: function start(event) {
          Object(utils_event["d" /* preventDefault */])(event.e, true);
          barWidth = that.$refs["".concat(type, "SliderBar")].offsetWidth;
        },
        dragging: function dragging(event) {
          Object(utils_event["d" /* preventDefault */])(event.e, true);
          that.dragging = true;
          that["".concat(type, "Left")] = Math.round((barWidth + that.deltaX) / that.disStep) * that.disStep;

          if (that["".concat(type, "Left")] >= that.width) {
            that["".concat(type, "Left")] = that.width;
          }

          if (that["".concat(type, "Left")] <= 0) {
            that["".concat(type, "Left")] = 0;
          }

          if (Object(utils["h" /* isObject */])(that.value)) {
            if (type === "start") {
              if (that.startLeft >= that.endLeft) {
                that.startLeft = that.endLeft;
              }
            } else if (type === "end") {
              if (that.endLeft <= that.startLeft) {
                that.endLeft = that.startLeft;
              }
            }
          }

          that["".concat(type, "Value")] = that["".concat(type, "RoundValue")];
          that.emit();
        },
        stop: function stop(event) {
          Object(utils_event["d" /* preventDefault */])(event.e, true);
          that.dragging = false;
          that.emit();
        }
      });
    }
  }, {
    key: "emit",
    value: function emit() {
      if (Object(utils["h" /* isObject */])(this.modelValue)) {
        this.$emit("update:modelValue", {
          start: this.startRoundValue,
          end: this.endRoundValue
        });
      } else {
        this.$emit("update:modelValue", this.endRoundValue);
      }
    }
  }, {
    key: "init",
    value: function init() {
      this.drag("start");
      this.drag("end");
      this.handleBarClick();
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.init();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-slider"]
      }, {
        default: function _default() {
          return [_this3.genSider("start"), _this3.genSider("end")];
        }
      });
    }
  }]);

  return VgSlider;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], slider_Props, EventEmulator_EventEmulator));

slider_VgSlider.componentName = "VgSlider";
slider_VgSlider = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgSlider",
  emits: ["update:modelValue"],
  computed: {
    maxVlue: function maxVlue() {
      return Number(this.max) - Number(this.min);
    },
    startRoundValue: function startRoundValue() {
      return Math.round(Number(this.max) * this.startLeft / this.width);
    },
    endRoundValue: function endRoundValue() {
      return Math.round(Number(this.max) * this.endLeft / this.width);
    },
    startBarStyle: function startBarStyle() {
      var transition = this.dragging ? "none 0s ease 0s" : null;
      return {
        width: "".concat(Math.round(100 * this.startLeft / this.width), "%"),
        transition: transition
      };
    },
    endBarStyle: function endBarStyle() {
      var transition = this.dragging ? "none 0s ease 0s" : null;
      return {
        width: "".concat(Math.round(100 * this.endLeft / this.width), "%"),
        transition: transition
      };
    }
  }
})], slider_VgSlider);
/* harmony default export */ var slider_slider = (slider_VgSlider);
// CONCATENATED MODULE: ./src/slider/index.ts
/*
* @Author: Just be free
* @Date:   2020-10-23 16:35:10
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-23 16:35:49
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_slider = (slider_slider);
// CONCATENATED MODULE: ./src/action-sheet/action-sheet.ts











/*
* @Author: Just be free
* @Date:   2020-10-28 12:10:05
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-28 14:26:12
* @E-mail: justbefree@126.com
*/





var action_sheet_Props = Object(VueGgy["d" /* props */])({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: "标题"
  },
  actions: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  showCancel: {
    type: Boolean,
    default: false
  },
  cancelText: {
    type: String,
    default: "取消"
  },
  loading: {
    type: Boolean,
    default: false
  },
  iconType: {
    type: String,
    default: "tripleBounce"
  },
  iconSize: {
    type: Number,
    default: 36
  },
  iconColor: String
});

var action_sheet_VgActionSheet = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgActionSheet, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgActionSheet);

  function VgActionSheet() {
    Object(classCallCheck["a" /* default */])(this, VgActionSheet);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(VgActionSheet, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.$emit("update:modelValue", e);
    }
  }, {
    key: "handleCancel",
    value: function handleCancel() {
      this.handleChange(false);
    }
  }, {
    key: "handleItemClick",
    value: function handleItemClick(e) {
      if (e && e.disable) {
        return false;
      }

      this.$emit("getselected", e);
      this.handleChange(false);
    }
  }, {
    key: "createList",
    value: function createList() {
      var _this = this;

      var list = [];

      if (this.loading) {
        list.push(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("li", {
          class: ["vg-action-sheet-loading-warpper"]
        }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_spin, {
          class: ["loading"],
          type: this.iconType,
          size: this.iconSize,
          color: this.iconColor
        }, {
          default: function _default() {
            return [];
          }
        })]));
      } else {
        this.actions.forEach(function (action, index) {
          var className = Array.isArray(action.className) ? action.className : [action.className];
          var key = action.key || index;
          var disable = action.disable ? "disable" : "";
          list.push(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("li", {
            key: key,
            class: [].concat(Object(toConsumableArray["a" /* default */])(className), [disable]),
            onClick: _this.handleItemClick.bind(_this, action)
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {
            class: ["".concat(disable, "-text")]
          }, {
            default: function _default() {
              return action.name;
            }
          })]));
        });
      }

      if (this.showCancel) {
        list.push(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("li", {
          class: ["vg-action-sheet-cancel"],
          onClick: this.handleCancel
        }, {
          default: function _default() {
            return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {}, {
              default: function _default() {
                return _this.cancelText;
              }
            })];
          }
        }));
      }

      return list;
    }
  }, {
    key: "handleBeforeEnter",
    value: function handleBeforeEnter() {
      this.$emit("beforeenter");
    }
  }, {
    key: "handleEnter",
    value: function handleEnter() {
      this.$emit("enter");
    }
  }, {
    key: "handleAfterEnter",
    value: function handleAfterEnter() {
      this.$emit("afterenter");
    }
  }, {
    key: "handleBeforeLeave",
    value: function handleBeforeLeave() {
      this.$emit("beforeleave");
    }
  }, {
    key: "handleLeave",
    value: function handleLeave() {
      this.$emit("leave");
    }
  }, {
    key: "handleAfterLeave",
    value: function handleAfterLeave() {
      this.$emit("afterleave");
    }
  }, {
    key: "handleInput",
    value: function handleInput() {
      this.handleChange(false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-action-sheet"]
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_popup, {
        onInput: this.handleInput,
        onBeforeenter: this.handleBeforeEnter,
        onEnter: this.handleEnter,
        onAfterenter: this.handleAfterEnter,
        onBeforeleave: this.handleBeforeLeave,
        onLeave: this.handleLeave,
        onAfterleave: this.handleAfterLeave,
        position: "bottom",
        style: {
          "max-height": "80%"
        }
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("h3", {
            class: ["vg-action-sheet-title"]
          }, {
            default: function _default() {
              return _this2.title;
            }
          }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("ul", {
            class: ["vg-action-sheet-content"]
          }, {
            default: function _default() {
              return [_this2.createList()];
            }
          })];
        }
      }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], this.modelValue]])]);
    }
  }]);

  return VgActionSheet;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], action_sheet_Props));

action_sheet_VgActionSheet.componentName = "VgActionSheet";
action_sheet_VgActionSheet = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgActionSheet",
  emits: ["update:modelValue", "getselected", "beforeenter", "enter", "afterenter", "beforeleave", "leave", "afterleave"]
})], action_sheet_VgActionSheet);
/* harmony default export */ var action_sheet = (action_sheet_VgActionSheet);
// CONCATENATED MODULE: ./src/action-sheet/index.ts
/*
* @Author: Just be free
* @Date:   2020-10-28 12:09:58
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-28 12:14:27
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_action_sheet = (action_sheet);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// CONCATENATED MODULE: ./src/picky-stepper/picky-stepper.ts















/*
* @Author: Just be free
* @Date:   2020-10-28 14:38:23
* @Last Modified by:   Just be free
* @Last Modified time: 2021-01-07 17:05:40
* @E-mail: justbefree@126.com
*/











var picky_stepper_Props = Object(VueGgy["d" /* props */])({
  modelValue: {
    type: Boolean,
    default: false
  },
  steps: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  submit: {
    type: Function,
    default: function _default() {}
  },
  confirmText: {
    type: String,
    default: "确认"
  },
  closeOnClickModal: {
    type: Boolean,
    default: false
  }
});

var picky_stepper_VgPickyStepper = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgPickyStepper, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgPickyStepper);

  function VgPickyStepper() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgPickyStepper);

    _this = _super.apply(this, arguments);
    _this.title = "";
    _this.caculateSteps = [];
    _this.currentStep = {};
    _this.submitLoading = false;
    return _this;
  }

  Object(createClass["a" /* default */])(VgPickyStepper, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.$emit("update:modelValue", e);
    }
  }, {
    key: "handleBeforeEnter",
    value: function handleBeforeEnter() {
      if (this.caculateSteps.length === 0) {
        this.initData();
      }

      this.$emit("beforeenter");
    }
  }, {
    key: "initData",
    value: function initData() {
      var steps = [];
      this.steps.forEach(function (step, index) {
        if (!step.key) {
          step.key = index;
        }

        step.list.forEach(function (item, key) {
          if (!item.key) {
            item.key = key;
          }
        });
        steps.push(step);
      });
      this.caculateSteps = this.bindChain(steps);
      this.currentStep = this.caculateSteps[0];
    }
  }, {
    key: "bindChain",
    value: function bindChain() {
      var steps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return Array.apply(null, steps).map(function (step, index, arr) {
        step.previousNode = steps[index - 1] ? steps[index - 1].key : null;
        step.nextNode = steps[index + 1] ? steps[index + 1].key : null;
        return step;
      });
    }
  }, {
    key: "handleEnter",
    value: function handleEnter() {
      this.$emit("enter");
    }
  }, {
    key: "handleAfterEnter",
    value: function handleAfterEnter() {
      this.$emit("afterenter");
    }
  }, {
    key: "handleBeforeLeave",
    value: function handleBeforeLeave() {
      this.$emit("beforeleave");
    }
  }, {
    key: "handleLeave",
    value: function handleLeave() {
      this.$emit("leave");
    }
  }, {
    key: "handleAfterLeave",
    value: function handleAfterLeave() {
      this.$emit("afterleave");
    }
  }, {
    key: "handleInput",
    value: function handleInput() {
      if (this.closeOnClickModal) {
        this.handleChange(false);
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.handleChange(false);
    }
  }, {
    key: "stepBack",
    value: function stepBack() {
      var previousNode = this.currentStep.previousNode;
      var caculateSteps = this.caculateSteps;
      this.currentStep = caculateSteps.find(function (step) {
        return step.key === previousNode;
      });
    }
  }, {
    key: "createBack",
    value: function createBack() {
      var previousNode = this.currentStep.previousNode;

      if (previousNode !== null && previousNode !== undefined && previousNode !== "") {
        return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_icon, {
          class: ["vg-picky-stepper-back"],
          name: "back",
          size: 20,
          onClick: this.stepBack
        }, {
          default: function _default() {
            return [];
          }
        })];
      }

      return [];
    }
  }, {
    key: "createTitle",
    value: function createTitle() {
      var _this2 = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {
        class: ["vg-picky-stepper-title"]
      }, {
        default: function _default() {
          return _this2.currentStep.title;
        }
      });
    }
  }, {
    key: "createClose",
    value: function createClose() {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_icon, {
        class: ["vg-picky-stepper-close"],
        name: "close",
        size: 24,
        cursor: "pointer",
        onClick: this.close
      }, {
        default: function _default() {
          return [];
        }
      });
    }
  }, {
    key: "createHeader",
    value: function createHeader() {
      var _this3 = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-picky-stepper-header"]
      }, {
        default: function _default() {
          return [].concat(Object(toConsumableArray["a" /* default */])(_this3.createBack()), [_this3.createTitle(), _this3.createClose()]);
        }
      });
    }
  }, {
    key: "handleCustomeInput",
    value: function handleCustomeInput(args, event) {
      var item = args.item,
          e = args.e;
      item.value = event.target.value;
      item.count = item.value.length;
      this.updateNode(e);
    }
  }, {
    key: "createCustomeElement",
    value: function createCustomeElement(_ref) {
      var _this4 = this;

      var item = _ref.item,
          step = _ref.step,
          stepIndex = _ref.stepIndex,
          key = _ref.key,
          display = _ref.display;

      if (item.type && item.type === "input" && display === "inline") {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
          flex: 1
        }, {
          default: function _default() {
            return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("input", {
              onInput: _this4.handleCustomeInput.bind(_this4, {
                item: item,
                e: {
                  step: step,
                  stepIndex: stepIndex,
                  listItem: item,
                  listIndex: key
                }
              }),
              class: ["input", item.value !== "" ? "active" : ""],
              attrs: {
                placeholder: item.placeholder,
                maxlength: item.maxlength
              }
            }, [])];
          }
        });
      } else if (item.type && item.type === "textarea" && display === "column") {
        var _item$count = item.count,
            count = _item$count === void 0 ? 0 : _item$count;
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
          class: "textarea-wapper"
        }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("textarea", {
          class: ["textarea", item.value !== "" ? "active" : ""],
          onInput: this.handleCustomeInput.bind(this, {
            item: item,
            e: {
              step: step,
              stepIndex: stepIndex,
              listItem: item,
              listIndex: key
            }
          }),
          attrs: {
            placeholder: item.placeholder,
            maxlength: item.maxlength
          }
        }, []), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
          class: "textarea-counter"
        }, ["".concat(count, "/").concat(item.maxlength)]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], item.counter && item.maxlength > 0]])]);
      }
    }
  }, {
    key: "replace",
    value: function replace() {
      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var index = arguments.length > 1 ? arguments[1] : undefined;
      var node = arguments.length > 2 ? arguments[2] : undefined;
      arr.splice(index, 1, node);
      return arr;
    }
  }, {
    key: "updateNode",
    value: function updateNode(e) {
      var step = e.step,
          stepIndex = e.stepIndex,
          listItem = e.listItem,
          listIndex = e.listIndex;
      var stepNode = this.caculateSteps.find(function (item) {
        return item.key === step.key;
      });
      var listNode = stepNode.list.find(function (item) {
        return listItem.key === item.key;
      });
      this.replace(stepNode.list, listIndex, listNode);
      this.replace(this.caculateSteps, stepIndex, stepNode);
    }
  }, {
    key: "getSelectedData",
    value: function getSelectedData() {
      var caculateSteps = this.caculateSteps;
      var results = [];
      caculateSteps.forEach(function (step) {
        var list = [];
        step.list.forEach(function (item) {
          if (item.checked) {
            list.push(item);
          }
        });
        results.push({
          list: list,
          key: step.key
        });
      });
      return results;
    }
  }, {
    key: "destroyData",
    value: function destroyData() {
      this.caculateSteps = [];
    }
  }, {
    key: "handleStepConfirm",
    value: function handleStepConfirm() {
      var _this5 = this;

      var currentStep = this.currentStep,
          caculateSteps = this.caculateSteps;

      if (currentStep.nextNode) {
        this.currentStep = caculateSteps.find(function (step) {
          return step.key === currentStep.nextNode;
        });
      } else {
        this.submitLoading = true;
        var result = this.getSelectedData();

        if (this.submit && typeof this.submit === "function") {
          var promise = this.submit(result);

          if (Object(utils["i" /* isPromise */])(promise)) {
            promise.then(function (res) {
              _this5.close();

              _this5.$emit("success", result, res);

              _this5.submitLoading = false;

              _this5.destroyData();
            });
          } else {
            this.submitLoading = false;
            this.close();
            this.$emit("success", result);
          }
        } else {
          this.submitLoading = false;
          this.close();
          this.$emit("success", result);
        }
      }
    }
  }, {
    key: "handlePickyClick",
    value: function handlePickyClick(e) {
      var listItem = e.listItem,
          step = e.step;

      if (step.multiple) {
        listItem.checked = !listItem.checked;
      } else {
        step.list.forEach(function (list) {
          if (list.key === listItem.key) {
            list.checked = true;
          } else {
            list.checked = false;
          }
        });
      }

      this.updateNode(e);
    }
  }, {
    key: "createPickerList",
    value: function createPickerList(step, stepIndex) {
      var _this6 = this;

      var show = step.key === this.currentStep.key;
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-picky-stepper-content", show ? "show" : "hide"]
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("ul", {
            class: []
          }, {
            default: function _default() {
              return Array.apply(null, step.list).map(function (item, key, arr) {
                return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("li", {
                  onClick: _this6.handlePickyClick.bind(_this6, {
                    step: step,
                    stepIndex: stepIndex,
                    listItem: item,
                    listIndex: key
                  }),
                  key: key
                }, {
                  default: function _default() {
                    return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex, {}, {
                      default: function _default() {
                        return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {}, {
                          default: function _default() {
                            return [step.multiple ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_checkbox, {
                              modelValue: item.checked,
                              size: 20
                            }, {
                              default: function _default() {
                                return [];
                              }
                            }) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_radiobox, {
                              modelValue: item.checked,
                              size: 20
                            }, {
                              default: function _default() {
                                return [];
                              }
                            })];
                          }
                        }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {}, {
                          default: function _default() {
                            return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {
                              class: ["text"]
                            }, {
                              default: function _default() {
                                return item.label;
                              }
                            })];
                          }
                        }), _this6.createCustomeElement({
                          item: item,
                          step: step,
                          stepIndex: stepIndex,
                          key: key,
                          display: "inline"
                        })];
                      }
                    }), _this6.createCustomeElement({
                      item: item,
                      step: step,
                      stepIndex: stepIndex,
                      key: key,
                      display: "column"
                    })];
                  }
                });
              });
            }
          })];
        }
      });
    }
  }, {
    key: "createSteps",
    value: function createSteps() {
      var _this7 = this;

      return Array.apply(null, this.caculateSteps).map(function (step, index, arr) {
        return _this7.createPickerList(step, index);
      });
    }
  }, {
    key: "getDisabledStatus",
    value: function getDisabledStatus() {
      var currentStep = this.currentStep;
      var actived;

      if (currentStep && currentStep.list && currentStep.list.length > 0) {
        actived = currentStep.list.find(function (item) {
          if (["input", "textarea"].indexOf(item.type) > -1) {
            return item.checked && item.value !== "";
          } else {
            return item.checked;
          }
        });
      }

      return this.submitLoading || !actived;
    }
  }, {
    key: "createFooter",
    value: function createFooter() {
      var _this8 = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-picky-stepper-footer"]
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_button, {
            onClick: _this8.handleStepConfirm,
            class: ["step-confirm"],
            size: "large",
            type: "primary",
            loading: _this8.submitLoading,
            disabled: _this8.getDisabledStatus(),
            loadingColor: "#fff"
          }, {
            default: function _default() {
              return _this8.confirmText;
            }
          })];
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-picky-stepper"]
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_popup, {
        onInput: this.handleInput,
        onBeforeenter: this.handleBeforeEnter,
        onEnter: this.handleEnter,
        onAfterenter: this.handleAfterEnter,
        onBeforeleave: this.handleBeforeLeave,
        onLeave: this.handleLeave,
        onAfterleave: this.handleAfterLeave,
        position: "bottom",
        style: {
          "max-height": "80%"
        }
      }, {
        default: function _default() {
          return [_this9.createHeader()].concat(Object(toConsumableArray["a" /* default */])(_this9.createSteps()), [_this9.createFooter()]);
        }
      }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], this.modelValue]])]);
    }
  }]);

  return VgPickyStepper;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], picky_stepper_Props));

picky_stepper_VgPickyStepper.componentName = "VgPickyStepper";
picky_stepper_VgPickyStepper = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgPickyStepper",
  emits: ["update:modelValue", "input", "beforeenter", "enter", "afterenter", "beforeleave", "leave", "afterleave", "success"],
  watch: {
    steps: "initData"
  }
})], picky_stepper_VgPickyStepper);
/* harmony default export */ var picky_stepper = (picky_stepper_VgPickyStepper);
// CONCATENATED MODULE: ./src/picky-stepper/index.ts
/*
* @Author: Just be free
* @Date:   2020-10-28 14:37:48
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-28 14:38:11
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_picky_stepper = (picky_stepper);
// CONCATENATED MODULE: ./src/counter/counter.ts







/*
* @Author: Just be free
* @Date:   2020-11-02 14:26:49
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-02 16:51:40
* @E-mail: justbefree@126.com
*/






var counter_Props = Object(VueGgy["d" /* props */])({
  max: {
    default: Number.MAX_VALUE,
    type: [Number, String]
  },
  min: {
    default: Number.MIN_VALUE,
    type: [Number, String]
  },
  steps: {
    default: 1,
    type: [Number, String]
  },
  modelValue: {
    default: -1,
    type: [Number, String]
  },
  parse: {
    type: Function,
    default: function _default(e) {
      return e;
    }
  },
  name: String
});

var counter_VgCounter = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgCounter, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgCounter);

  function VgCounter() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgCounter);

    _this = _super.apply(this, arguments);
    _this.count = _this.modelValue;
    return _this;
  }

  Object(createClass["a" /* default */])(VgCounter, [{
    key: "isEqual",
    value: function isEqual(val1, val2) {
      return Number(val2) === Number(val1);
    }
  }, {
    key: "caculate",
    value: function caculate() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "add";
      var steps = Number(this.steps);

      if (type === "add" && this.count < Number(this.max)) {
        this.count += steps;
      } else if (type === "subtract" && this.count > Number(this.min)) {
        this.count -= steps;
      } else {
        return;
      }

      this.$emit("update:modelValue", this.count);
      this.$emit("change", {
        parsedValue: this.parse(this.count),
        value: this.count,
        type: type,
        name: this.name
      });
    }
  }, {
    key: "initEvent",
    value: function initEvent() {
      var timer = null;
      var that = this;
      var addButton = this.$refs.addButton;
      this.bindEvent(addButton.$el, {
        start: function start(event) {
          Object(utils_event["d" /* preventDefault */])(event.e, true);
          clearTimeout(timer);
          timer = setInterval(function () {
            that.caculate("add");
          }, 100);
        },
        stop: function stop(event) {
          Object(utils_event["d" /* preventDefault */])(event.e, true);
          clearTimeout(timer);
        }
      });
      var minusButton = this.$refs.minusButton;
      this.bindEvent(minusButton.$el, {
        start: function start(event) {
          Object(utils_event["d" /* preventDefault */])(event.e, true);
          clearTimeout(timer);
          timer = setInterval(function () {
            that.caculate("subtract");
          }, 100);
        },
        stop: function stop(event) {
          Object(utils_event["d" /* preventDefault */])(event.e, true);
          clearTimeout(timer);
        }
      });
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.initEvent();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (Number(this.modelValue) <= Number(this.max) && Number(this.modelValue) >= Number(this.min)) {
        var leftButtonClass = this.isEqual(this.modelValue, this.min) ? "disabled" : "";
        var rightButtonClass = this.isEqual(this.modelValue, this.max) ? "disabled" : "";
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
          class: ["vg-counter"]
        }, {
          default: function _default() {
            return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_icon, {
              ref: "minusButton",
              class: ["vg-counter-subtract", leftButtonClass],
              cursor: "pointer",
              name: "minus",
              size: 15
            }, {
              default: function _default() {
                return [];
              }
            }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {
              class: ["vg-counter-screen"]
            }, {
              default: function _default() {
                return [_this2.count];
              }
            }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_icon, {
              ref: "addButton",
              class: ["vg-counter-plus", rightButtonClass],
              cursor: "pointer",
              name: "add",
              size: 15
            }, {
              default: function _default() {
                return [];
              }
            })];
          }
        });
      } else {
        throw new Error("value is out of range");
      }
    }
  }]);

  return VgCounter;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], counter_Props, EventEmulator_EventEmulator));

counter_VgCounter.componentName = "VgCounter";
counter_VgCounter = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgCounter",
  emits: ["update:modelValue", "change"]
})], counter_VgCounter);
/* harmony default export */ var counter = (counter_VgCounter);
// CONCATENATED MODULE: ./src/counter/index.ts
/*
* @Author: Just be free
* @Date:   2020-11-02 14:26:44
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-02 14:27:05
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_counter = (counter);
// CONCATENATED MODULE: ./src/pull-refresh/pull-refresh.ts





/*
* @Author: Just be free
* @Date:   2020-11-02 17:10:04
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-02 17:51:59
* @E-mail: justbefree@126.com
*/







var pull_refresh_Props = Object(VueGgy["d" /* props */])({
  loadingText: String,
  draggingTip: {
    type: String,
    default: "松手下拉刷新"
  },
  loading: Boolean
});

var pull_refresh_VgPullRefresh = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgPullRefresh, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgPullRefresh);

  function VgPullRefresh() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgPullRefresh);

    _this = _super.apply(this, arguments);
    _this.className = "";
    _this.dragging = false;
    _this.scrollElement = null;
    _this.scrollTop = 0;
    return _this;
  }

  Object(createClass["a" /* default */])(VgPullRefresh, [{
    key: "genLoading",
    value: function genLoading() {
      var _this2 = this;

      if (this.loading) {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
          class: ["vg-pull-refresh-loading"]
        }, {
          default: function _default() {
            return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {}, [_this2.loadingText]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_spin, {
              type: "tripleBounce",
              size: 40
            }, {
              default: function _default() {
                return [];
              }
            })];
          }
        });
      }
    }
  }, {
    key: "genDraggingText",
    value: function genDraggingText() {
      var _this3 = this;

      if (this.dragging && this.deltaY >= 20) {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
          class: ["vg-pull-refresh-draggin-text"]
        }, {
          default: function _default() {
            return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {}, {
              default: function _default() {
                return [_this3.draggingTip];
              }
            })];
          }
        });
      }
    }
  }, {
    key: "handleScroll",
    value: function handleScroll(e) {
      this.scrollTop = getScrollTop(e.target);
    }
  }, {
    key: "scroll",
    value: function scroll() {
      this.scrollElement = getScroller(this.$el);
      this.scrollElement.addEventListener("scroll", this.handleScroll, false);
    }
  }, {
    key: "pull",
    value: function pull() {
      this.scroll();
      var that = this;
      this.bindEvent(this.$el, {
        dragging: function dragging(event) {
          var target = event.target;

          if (!that.loading && that.deltaY > 0 && that.scrollTop <= 10) {
            that.dragging = true;
            that.className = "none dragging";
            target.style.transform = "translate3D(0, ".concat(that.bounceDeltaY, "px, 0)");
          }
        },
        stop: function stop(event) {
          if (!that.loading && that.deltaY > 0 && that.scrollTop <= 10) {
            that.$emit("pullrefresh", true);
            var target = event.target;
            that.className = "";
            that.dragging = false;
            target.style.transform = "translate3D(0, 0, 0)";
          }
        }
      });
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.pull();
    }
  }, {
    key: "beforeUnmount",
    value: function beforeUnmount() {
      this.scrollElement.removeEventListener("scroll", this.handleScroll, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-pull-refresh", this.className]
      }, {
        default: function _default() {
          return [_this4.genLoading(), _this4.genDraggingText(), _this4.getSlots()];
        }
      });
    }
  }]);

  return VgPullRefresh;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], pull_refresh_Props, EventEmulator_EventEmulator));

pull_refresh_VgPullRefresh.componentName = "VgPullRefresh";
pull_refresh_VgPullRefresh = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgPullRefresh"
})], pull_refresh_VgPullRefresh);
/* harmony default export */ var pull_refresh = (pull_refresh_VgPullRefresh);
// CONCATENATED MODULE: ./src/pull-refresh/index.ts
/*
* @Author: Just be free
* @Date:   2020-11-02 17:09:40
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-02 17:18:08
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_pull_refresh = (pull_refresh);
// CONCATENATED MODULE: ./src/skeleton/skeleton.ts









/*
* @Author: Just be free
* @Date:   2020-11-04 15:11:21
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-04 15:52:04
* @E-mail: justbefree@126.com
*/



var skeleton_Props = Object(VueGgy["d" /* props */])({
  margin: String,
  rows: {
    type: [String, Number],
    default: 2,
    validator: function validator(num) {
      return parseInt(String(num)) >= 2 && parseInt(String(num)) <= 20;
    }
  },
  avatar: {
    type: Boolean,
    default: true
  }
});
var paddingHeight = 10;
var barHeight = 16;
var avatarSize = 80;

var skeleton_VgSkeleton = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgSkeleton, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgSkeleton);

  function VgSkeleton() {
    Object(classCallCheck["a" /* default */])(this, VgSkeleton);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(VgSkeleton, [{
    key: "render",
    value: function render() {
      var avatarClass = this.avatar ? "avatar" : "";
      var rows = parseInt(this.rows);
      var boxHeight = (rows + 1) * barHeight + rows * paddingHeight;
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-skeleton"],
        style: {
          margin: this.margin
        }
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
            class: ["animated-background"],
            style: {
              height: "".concat(boxHeight, "px")
            }
          }, {
            default: function _default() {
              return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
                class: ["background-masker", "header-left", avatarClass]
              }, {
                default: function _default() {
                  return [];
                }
              }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
                class: ["background-masker", "header-right"]
              }, {
                default: function _default() {
                  return [];
                }
              })].concat(Object(toConsumableArray["a" /* default */])(Array.apply(null, new Array(rows)).map(function (row, index, arr) {
                return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
                  class: ["background-masker", avatarClass, "header-bottom-".concat(index + 1)]
                }, {
                  default: function _default() {
                    return [];
                  }
                });
              })), [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
                class: ["background-masker", "subheader-left", avatarClass],
                style: {
                  height: "".concat(boxHeight - avatarSize, "px")
                }
              }, {
                default: function _default() {
                  return [];
                }
              }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
                class: ["background-masker", "subheader-right"]
              }, {
                default: function _default() {
                  return [];
                }
              })]);
            }
          })];
        }
      });
    }
  }]);

  return VgSkeleton;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], skeleton_Props));

skeleton_VgSkeleton.componentName = "VgSkeleton";
skeleton_VgSkeleton = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgSkeleton",
  mixins: []
})], skeleton_VgSkeleton);
/* harmony default export */ var skeleton = (skeleton_VgSkeleton);
// CONCATENATED MODULE: ./src/skeleton/index.ts
/*
* @Author: Just be free
* @Date:   2020-11-04 15:11:16
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-04 15:12:05
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_skeleton = (skeleton);
// CONCATENATED MODULE: ./src/picker/picker-column.ts













var DEFAULT_DURATION = 200;
var MOMENTUM_LIMIT_TIME = 300;
var MOMENTUM_LIMIT_DISTANCE = 15;

var range = function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
};

function isOptionDisabled(column) {
  return Object(utils["h" /* isObject */])(column) && column.disabled;
}

var polyfill = function polyfill(arr) {
  if (arr.length === 1 && typeof arr[0] === "number") {
    return [String(arr[0])];
  }

  return arr;
};

var picker_column_Props = Object(VueGgy["d" /* props */])({
  columns: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  defaultIndex: Number,
  itemHeight: {
    type: [String, Number],
    default: 44
  },
  // visibleItemCount: {
  //   type: [String, Number],
  //   default: 6
  // },
  swipeDuration: {
    type: [String, Number],
    default: 1000
  }
});

var picker_column_VgPickerColumn = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgPickerColumn, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgPickerColumn);

  function VgPickerColumn() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgPickerColumn);

    _this = _super.apply(this, arguments);
    _this.options = deepClone(_this.columns);
    _this.currentIndex = _this.defaultIndex;
    _this.duration = 0;
    _this.offset = 0;
    return _this;
  }

  Object(createClass["a" /* default */])(VgPickerColumn, [{
    key: "onTransitionEnd",
    value: function onTransitionEnd() {
      this.stopMomentum();
    }
  }, {
    key: "stopMomentum",
    value: function stopMomentum() {
      this.moving = false;
      this.duration = 0;

      if (this.transitionEndTrigger) {
        this.transitionEndTrigger();
        this.transitionEndTrigger = null;
      }
    }
  }, {
    key: "handleItemClick",
    value: function handleItemClick(index) {
      if (this.moving) {
        return;
      }

      this.duration = DEFAULT_DURATION;
      this.setIndex(index, true);
    }
  }, {
    key: "adjustIndex",
    value: function adjustIndex(index) {
      index = range(index, 0, this.count);

      for (var i = index; i < this.count; i++) {
        if (!isOptionDisabled(this.options[i])) return i;
      }

      for (var _i = index - 1; _i >= 0; _i--) {
        if (!isOptionDisabled(this.options[_i])) return _i;
      }
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      if (JSON.stringify(options) !== JSON.stringify(this.options)) {
        this.options = deepClone(options);
        this.setIndex(this.defaultIndex);
      }
    }
  }, {
    key: "getSelectedItem",
    value: function getSelectedItem() {
      return this.options[this.currentIndex];
    }
  }, {
    key: "getIndexByOffset",
    value: function getIndexByOffset(offset) {
      return range(Math.round(-offset / this.itemHeight), 0, this.count - 1);
    }
  }, {
    key: "momentum",
    value: function momentum(distance, duration) {
      var speed = Math.abs(distance / duration);
      distance = this.offset + speed / 0.003 * (distance < 0 ? -1 : 1);
      var index = this.getIndexByOffset(distance);
      this.duration = +this.swipeDuration;
      this.setIndex(index, true);
    }
  }, {
    key: "setIndex",
    value: function setIndex(index, emitChange) {
      var _this2 = this;

      index = this.adjustIndex(index) || 0;
      var offset = -index * this.itemHeight;

      var trigger = function trigger() {
        if (index !== _this2.currentIndex) {
          _this2.currentIndex = index;

          if (emitChange) {
            _this2.$emit("change", _this2.options[index], index);
          }
        }
      }; // trigger the change event after transitionend when moving


      if (this.moving && offset !== this.offset) {
        this.transitionEndTrigger = trigger;
      } else {
        trigger();
      }

      this.offset = offset;
    }
  }, {
    key: "drag",
    value: function drag() {
      var el = this.$refs.pickerColumn;

      if (!el) {
        return;
      }

      var that = this;
      this.bindEvent(el, {
        start: function start() {
          if (that.moving) {
            var translateY = getElementsTranslate(that.$refs.wrapper).y;
            that.offset = Math.min(0, translateY - that.baseOffset);
            that.startOffset = that.offset;
          } else {
            that.startOffset = that.offset;
          }

          that.duration = 0;
          that.transitionEndTrigger = null;
          that.touchStartTime = Date.now();
          that.momentumOffset = that.startOffset;
        },
        dragging: function dragging() {
          if (that.direction === "vertical") {
            that.moving = true;
          }

          that.offset = range(that.startOffset + that.deltaY, -(that.count * that.itemHeight), that.itemHeight);
          var now = Date.now();

          if (now - that.touchStartTime > MOMENTUM_LIMIT_TIME) {
            that.touchStartTime = now;
            that.momentumOffset = that.offset;
          }
        },
        stop: function stop() {
          var distance = that.offset - that.momentumOffset;
          var duration = Date.now() - that.touchStartTime;
          var allowMomentum = duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

          if (allowMomentum) {
            that.momentum(distance, duration);
            return;
          }

          var index = that.getIndexByOffset(that.offset);
          that.duration = DEFAULT_DURATION;
          that.setIndex(index, true); // compatible with desktop scenario
          // use setTimeout to skip the click event triggered after touchstart

          setTimeout(function () {
            that.moving = false;
          }, 0);
        }
      });
    }
  }, {
    key: "created",
    value: function created() {
      this.setIndex(this.currentIndex);
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.drag();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var style = {
        transform: "translate3d(0, ".concat(this.offset + this.baseOffset, "px, 0)"),
        transitionDuration: "".concat(this.duration, "ms"),
        transitionProperty: this.duration ? "all" : "none",
        lineHeight: "".concat(this.itemHeight, "px")
      };
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: "vg-picker-column",
        ref: "pickerColumn"
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("ul", {
            style: style,
            ref: "wrapper",
            onTransitionend: _this3.onTransitionEnd
          }, Array.apply(null, polyfill(_this3.columns)).map(function (column, key, arr) {
            var isObj = Object(utils["h" /* isObject */])(column);
            return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("li", {
              onClick: _this3.handleItemClick.bind(_this3, key),
              key: key,
              class: [isObj && column.disabled ? "disabled" : ""]
            }, {
              default: function _default() {
                return isObj ? column.value : column;
              }
            });
          }))];
        }
      });
    }
  }]);

  return VgPickerColumn;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], picker_column_Props, EventEmulator_EventEmulator));

picker_column_VgPickerColumn.componentName = "VgPickerColumn";
picker_column_VgPickerColumn = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgPickerColumn",
  emits: ["change"],
  watch: {
    defaultIndex: function defaultIndex(val) {
      this.setIndex(val);
    },
    columns: "setOptions"
  },
  computed: {
    baseOffset: function baseOffset() {
      return this.itemHeight * (this.count - 1) / 2;
    },
    count: function count() {
      return this.columns.length;
    }
  }
})], picker_column_VgPickerColumn);
/* harmony default export */ var picker_column = (picker_column_VgPickerColumn);
// CONCATENATED MODULE: ./src/picker/picker.ts








/*
* @Author: Just be free
* @Date:   2020-11-05 13:22:24
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-09 17:57:58
* @E-mail: justbefree@126.com
*/








var picker_Props = Object(VueGgy["d" /* props */])({
  modelValue: Boolean,
  itemHeight: {
    type: [String, Number],
    default: 44
  },
  columns: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  confirmText: {
    type: String,
    default: "确认"
  },
  cancelText: {
    type: String,
    default: "取消"
  },
  title: {
    type: String,
    default: "请选择日期"
  },
  showBack: {
    type: Boolean,
    default: true
  },
  showClose: {
    type: Boolean,
    default: true
  }
});

var picker_VgPicker = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgPicker, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgPicker);

  function VgPicker() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgPicker);

    _this = _super.apply(this, arguments);
    _this.computedColumn = [];
    _this.pickColumns = {};
    return _this;
  }

  Object(createClass["a" /* default */])(VgPicker, [{
    key: "confirm",
    value: function confirm() {
      var _this2 = this;

      this.pickColumns = {};
      this.computedColumn.forEach(function (column, key) {
        var pickerColumn = _this2.$refs["picker_".concat(key)];

        _this2.pickColumns["picker_".concat(key)] = pickerColumn.getSelectedItem();
      });
      this.$emit("confirm", deepClone(this.pickColumns));
      this.$emit("update:modelValue", false);
    }
  }, {
    key: "close",
    value: function close() {
      this.$emit("close", false);
      this.$emit("update:modelValue", false);
    }
  }, {
    key: "getContent",
    value: function getContent() {
      var _this3 = this;

      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "back";

      if (type === "back") {
        return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {
          class: ["vg-picker-cancel"]
        }, {
          default: function _default() {
            return _this3.cancelText;
          }
        })];
      } else {
        return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {
          class: ["vg-picker-confirm"]
        }, {
          default: function _default() {
            return _this3.confirmText;
          }
        })];
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      var columns = this.columns;

      if (columns.length > 0) {
        var item = columns[0];

        if (item.value && Array.isArray(item.value) && item.value.length > 0) {
          this.computedColumn = columns;
        } else {
          this.computedColumn = [{
            value: columns,
            defaultIndex: 0
          }];
        }
      } else {
        this.computedColumn = [];
      }
    }
  }, {
    key: "change",
    value: function change(value, index, key) {
      this.$emit("change", {
        value: value,
        index: index,
        key: key
      });
    }
  }, {
    key: "getColumns",
    value: function getColumns() {
      var _this4 = this;

      var columns = [];
      this.computedColumn.forEach(function (column, key) {
        columns.push(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
          ref: "scrollColumn_".concat(key),
          class: ["vg-picker-column-wapper"],
          key: key,
          flex: 1
        }, {
          default: function _default() {
            return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(picker_column, {
              ref: "picker_".concat(key),
              onChange: function onChange(value, index) {
                _this4.change(value, index, key);
              },
              defaultIndex: column.defaultIndex || 0,
              columns: column.value,
              itemHeight: _this4.itemHeight
            }, {
              default: function _default() {
                return [];
              }
            })];
          }
        }));
      });
      return columns;
    }
  }, {
    key: "createHeaderArea",
    value: function createHeaderArea() {
      var _this5 = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-picker-header"]
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex, {
            justifyContent: "spaceBetween"
          }, {
            default: function _default() {
              return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
                onClick: _this5.close,
                class: ["vg-picker-header-back"]
              }, {
                default: function _default() {
                  return _this5.getContent("back");
                }
              }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _this5.showBack]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
                class: ["vg-picker-header-title", _this5.showBack ? "" : "ml30", _this5.showClose ? "" : "mr30"],
                flex: 1
              }, {
                default: function _default() {
                  return _this5.title;
                }
              }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
                onClick: _this5.confirm,
                class: ["vg-picker-header-close"]
              }, {
                default: function _default() {
                  return _this5.getContent("close");
                }
              }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _this5.showClose]])];
            }
          })];
        }
      });
    }
  }, {
    key: "createScrollArea",
    value: function createScrollArea() {
      var _this6 = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-picker-container"]
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex, {
            style: {
              height: "100%"
            },
            justifyContent: "spaceBetween",
            alignContent: "center",
            alignItems: "center"
          }, {
            default: function _default() {
              return _this6.getColumns();
            }
          }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
            class: ["vg-picker-mask"],
            style: {},
            ref: "pickerMask"
          }, {
            default: function _default() {
              return [];
            }
          }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
            class: ["scroll-viewer-window"]
          }, {
            default: function _default() {
              return [];
            }
          })];
        }
      });
    }
  }, {
    key: "beforeEnter",
    value: function beforeEnter() {
      this.getData();
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.$refs.pickerMask.style.backgroundSize = "100% ".concat(this.itemHeight * 2, "px");
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-picker"]
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_popup, {
            position: "bottom",
            onBeforeenter: _this7.beforeEnter,
            onInput: _this7.close
          }, {
            default: function _default() {
              return [_this7.createHeaderArea(), _this7.createScrollArea()];
            }
          }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _this7.modelValue]])];
        }
      });
    }
  }]);

  return VgPicker;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], picker_Props));

picker_VgPicker.componentName = "VgPicker";
picker_VgPicker = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgPicker",
  emits: ["close", "update:modelValue", "confirm", "change"]
})], picker_VgPicker);
/* harmony default export */ var picker = (picker_VgPicker);
// CONCATENATED MODULE: ./src/picker/index.ts
/*
* @Author: Just be free
* @Date:   2020-11-05 13:22:20
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-05 13:22:55
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_picker = (picker);
// CONCATENATED MODULE: ./src/date-picker/date-picker.ts











/*
* @Author: Just be free
* @Date:   2020-11-09 17:02:32
* @Last Modified by:   Just be free
* @Last Modified time: 2021-01-25 15:22:16
* @E-mail: justbefree@126.com
*/






var isEqual = function isEqual(d1, d2) {
  return Number(d1) === Number(d2);
};

var date_picker_now = vg_date_VgDate().getToday();
var date_picker_year = date_picker_now.getFullYear();
var date_picker_m = date_picker_now.getMonth() + 1;
var date_picker_month = date_picker_m < 10 ? "0".concat(date_picker_m) : date_picker_m;
var date_picker_d = date_picker_now.getDate();
var date_picker_date = date_picker_d < 10 ? "0".concat(date_picker_d) : date_picker_d;
var date_picker_Props = Object(VueGgy["d" /* props */])({
  modelValue: Boolean,
  start: {
    type: String,
    default: "".concat(date_picker_year - 100, "-").concat(date_picker_month, "-").concat(date_picker_date)
  },
  end: {
    type: String,
    default: "".concat(date_picker_year, "-").concat(date_picker_month, "-").concat(date_picker_date)
  },
  defaultDate: String,
  confirmText: String,
  cancelText: String,
  title: String
});

var date_picker_VgDatePicker = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgDatePicker, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgDatePicker);

  function VgDatePicker() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgDatePicker);

    _this = _super.apply(this, arguments);
    _this.year = "";
    _this.month = "";
    _this.date = "";
    _this.dayCount = vg_date_VgDate(date_picker_year - 30, date_picker_month, date_picker_date).getDaysCountOfMonth();
    _this.monthStart = 1;
    _this.monthEnd = 12;
    _this.dateStart = 1;
    _this.dateEnd = 31;
    _this.computedColumns = [];
    _this.defaultDisplayDate = "";
    return _this;
  }

  Object(createClass["a" /* default */])(VgDatePicker, [{
    key: "close",
    value: function close() {
      this.$emit("update:modelValue", false);
    }
  }, {
    key: "handleOnConfirm",
    value: function handleOnConfirm(e) {
      this.$emit("confirm", {
        e: e,
        month: this.month,
        date: this.date,
        year: this.year,
        dateInstance: vg_date_VgDate(this.year, this.month, this.date)
      });
      this.close();
    }
  }, {
    key: "updateMonthDayCount",
    value: function updateMonthDayCount() {
      this.dayCount = vg_date_VgDate(this.year, this.month, "01").getDaysCountOfMonth();
    }
  }, {
    key: "genDate",
    value: function genDate(startDate, endDate) {
      // this.updateMonthDayCount();
      var defaultIndex = this.computedColumns[2].defaultIndex;
      var dates = [];

      for (var i = startDate; i <= endDate; i++) {
        dates.push(i);
      }

      if (defaultIndex < dates.length) {
        this.date = dates[defaultIndex];
      } else {
        this.computedColumns[2].defaultIndex = 0;
        this.date = dates[0];
      }

      this.computedColumns[2].value = dates;
    }
  }, {
    key: "genMonth",
    value: function genMonth(startMonth, endMonth) {
      var extendParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var defaultIndex = this.computedColumns[1].defaultIndex;
      var i = Number(startMonth);
      var months = [];

      for (; i <= endMonth; i++) {
        months.push(i);
      }

      if (defaultIndex < months.length) {
        this.month = months[defaultIndex];
      } else {
        this.computedColumns[1].defaultIndex = 0;
        this.month = months[0];
      }

      this.computedColumns[1].value = months;

      if (extendParams.trigger) {
        if (extendParams.trigger === "start") {
          if (this.month === startMonth) {
            this.genDate(extendParams.startDate, this.dayCount);
          } else {
            this.genDate(1, this.dayCount);
          }
        } else if (extendParams.trigger === "end") {
          if (this.month === endMonth) {
            this.genDate(1, extendParams.endDate);
          } else {
            this.genDate(1, this.dayCount);
          }
        }
      } else {
        this.genDate(1, this.dayCount);
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(_ref) {
      var value = _ref.value,
          index = _ref.index,
          key = _ref.key;

      var _this$start$split = this.start.split("-"),
          _this$start$split2 = _slicedToArray(_this$start$split, 3),
          startYear = _this$start$split2[0],
          startMonth = _this$start$split2[1],
          startDate = _this$start$split2[2];

      var _this$end$split = this.end.split("-"),
          _this$end$split2 = _slicedToArray(_this$end$split, 3),
          endYear = _this$end$split2[0],
          endMonth = _this$end$split2[1],
          endDate = _this$end$split2[2];

      if (key === 1) {
        // 月变化
        this.month = value;
        this.updateMonthDayCount();

        if (isEqual(this.year, startYear)) {
          if (isEqual(value, startMonth)) {
            this.genDate(startDate, this.dayCount);
          } else {
            this.genDate(1, this.dayCount);
          }
        } else if (isEqual(this.year, endYear)) {
          if (isEqual(value, endMonth)) {
            this.genDate(1, endDate);
          } else {
            this.genDate(1, this.dayCount);
          }
        } else {
          this.genDate(1, this.dayCount);
        }
      } else if (key === 0) {
        // 年变化
        this.year = value;
        this.updateMonthDayCount();

        if (isEqual(startYear, endYear)) {
          this.genMonth(startMonth, endMonth);
        } else {
          if (isEqual(value, startYear)) {
            this.genMonth(Number(startMonth), 12, {
              trigger: "start",
              startDate: startDate
            });
          } else if (isEqual(value, endYear)) {
            this.genMonth(1, Number(endMonth), {
              trigger: "end",
              endDate: endDate
            });
          } else {
            this.genMonth(1, 12);
          }
        }
      } else if (key === 2) {
        // 日变化
        this.date = value;
      }
    }
  }, {
    key: "getDefaultIndex",
    value: function getDefaultIndex(arr, type) {
      var index = arr.indexOf(Number(this[type]));

      if (index < 0) {
        this[type] = arr[0];
      }

      return index > -1 ? index : 0;
    }
  }, {
    key: "genColumns",
    value: function genColumns() {
      var columns = [];

      if (!validateFormatedDate(this.start) || !validateFormatedDate(this.end)) {
        return columns;
      }

      var year = [];
      var month = [];
      var date = [];

      var _this$start$split3 = this.start.split("-"),
          _this$start$split4 = _slicedToArray(_this$start$split3, 1),
          startYear = _this$start$split4[0];

      var _this$end$split3 = this.end.split("-"),
          _this$end$split4 = _slicedToArray(_this$end$split3, 1),
          endYear = _this$end$split4[0];

      for (var i = startYear; i <= endYear; i++) {
        // 创建年集合
        year.push(i);
      }

      columns.push({
        value: year,
        defaultIndex: this.getDefaultIndex(year, "year")
      });

      for (var _i = this.monthStart; _i <= this.monthEnd; _i++) {
        month.push(_i);
      }

      columns.push({
        value: month,
        defaultIndex: this.getDefaultIndex(month, "month")
      });

      for (var _i2 = this.dateStart; _i2 <= this.dateEnd; _i2++) {
        date.push(_i2);
      }

      columns.push({
        value: date,
        defaultIndex: this.getDefaultIndex(date, "date")
      });
      return columns;
    }
  }, {
    key: "initData",
    value: function initData() {
      if (validateFormatedDate(this.defaultDate)) {
        this.defaultDisplayDate = this.defaultDate;
      } else {
        this.defaultDisplayDate = this.end;
      }

      var _this$defaultDisplayD = this.defaultDisplayDate.split("-"),
          _this$defaultDisplayD2 = _slicedToArray(_this$defaultDisplayD, 3),
          displayY = _this$defaultDisplayD2[0],
          displayM = _this$defaultDisplayD2[1],
          displayD = _this$defaultDisplayD2[2];

      this.year = Number(displayY);
      this.month = Number(displayM);
      this.date = Number(displayD);
      this.updateMonthDayCount();

      var _this$start$split5 = this.start.split("-"),
          _this$start$split6 = _slicedToArray(_this$start$split5, 3),
          startYear = _this$start$split6[0],
          startMonth = _this$start$split6[1],
          startDate = _this$start$split6[2];

      var _this$end$split5 = this.end.split("-"),
          _this$end$split6 = _slicedToArray(_this$end$split5, 3),
          endYear = _this$end$split6[0],
          endMonth = _this$end$split6[1],
          endDate = _this$end$split6[2];

      if (!isEqual(displayY, startYear) && !isEqual(displayY, endYear)) {
        this.monthStart = 1;
        this.monthEnd = 12;
        this.dateStart = 1;
        this.dateEnd = this.dayCount;
      } else if (isEqual(displayY, startYear)) {
        this.monthStart = Number(startMonth);
        this.monthEnd = 12;

        if (isEqual(displayM, startMonth)) {
          this.dateStart = Number(startDate);
          this.dateEnd = this.dayCount;
        } else {
          this.dateStart = 1;
          this.dateEnd = this.dayCount;
        }
      } else if (isEqual(displayY, endYear)) {
        this.monthStart = 1;
        this.monthEnd = Number(endMonth);

        if (isEqual(displayM, endMonth)) {
          this.dateStart = 1;
          this.dateEnd = Number(endDate);
        } else {
          this.dateStart = 1;
          this.dateEnd = this.dayCount;
        }
      }
    }
  }, {
    key: "handleBeforeEnter",
    value: function handleBeforeEnter() {
      this.$emit("beforeenter");
    }
  }, {
    key: "handleEnter",
    value: function handleEnter() {
      this.$emit("enter");
    }
  }, {
    key: "handleAfterEnter",
    value: function handleAfterEnter() {
      this.$emit("afterenter");
    }
  }, {
    key: "handleBeforeLeave",
    value: function handleBeforeLeave() {
      this.$emit("beforeleave");
    }
  }, {
    key: "handleLeave",
    value: function handleLeave() {
      this.$emit("leave");
    }
  }, {
    key: "handleAfterLeave",
    value: function handleAfterLeave() {
      this.$emit("afterleave");
    }
  }, {
    key: "created",
    value: function created() {
      this.initData();
      this.computedColumns = this.genColumns();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-date-picker"]
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_picker, {
            onConfirm: _this2.handleOnConfirm,
            onClose: _this2.close,
            onChange: _this2.handleChange,
            onBeforeEnter: _this2.handleBeforeEnter,
            onEnter: _this2.handleEnter,
            onAfterEnter: _this2.handleAfterEnter,
            onBeforeLeave: _this2.handleBeforeLeave,
            onLeave: _this2.handleLeave,
            onAfterLeave: _this2.handleAfterLeave,
            columns: _this2.computedColumns,
            title: _this2.title,
            confirmText: _this2.confirmText,
            cancelText: _this2.cancelText,
            modelValue: _this2.modelValue
          }, {
            default: function _default() {
              return [];
            }
          })];
        }
      });
    }
  }]);

  return VgDatePicker;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], date_picker_Props));

date_picker_VgDatePicker.componentName = "VgDatePicker";
date_picker_VgDatePicker = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgDatePicker",
  emits: ["update:modelValue", "confirm", "beforeenter", "enter", "afterenter", "beforeleave", "leave", "afterleave"]
})], date_picker_VgDatePicker);
/* harmony default export */ var date_picker = (date_picker_VgDatePicker);
// CONCATENATED MODULE: ./src/date-picker/index.ts
/*
* @Author: Just be free
* @Date:   2020-11-09 17:02:27
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-09 17:03:13
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_date_picker = (date_picker);
// CONCATENATED MODULE: ./src/tabs/tabs.ts










/*
* @Author: Just be free
* @Date:   2020-11-10 10:41:55
* @Last Modified by:   Just be free
* @Last Modified time: 2020-12-01 10:30:47
* @E-mail: justbefree@126.com
*/





var VALID_CHILD_COMPONENT = "VgTabItem";
var tabs_Props = Object(VueGgy["d" /* props */])({
  modelValue: [String, Number]
});

var tabs_VgTabs = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgTabs, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgTabs);

  function VgTabs() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgTabs);

    _this = _super.apply(this, arguments);
    _this.currentTab = _this.modelValue;
    return _this;
  }

  Object(createClass["a" /* default */])(VgTabs, [{
    key: "getTitles",
    value: function getTitles() {
      var slots = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var tabs = [];
      slots.forEach(function (slot, index) {
        var _slot$props = slot.props,
            title = _slot$props.title,
            disabled = _slot$props.disabled,
            name = _slot$props.name;
        tabs.push({
          value: title,
          disabled: disabled,
          index: index,
          name: name
        });
      });
      return tabs;
    }
  }, {
    key: "handleTabClick",
    value: function handleTabClick(tab) {
      this.$emit("click", tab);

      if (tab.disabled) {
        return;
      }

      if (this.currentTab !== tab.name) {
        this.$emit("change", tab);
      }

      this.currentTab = tab.name;
    }
  }, {
    key: "getStatus",
    value: function getStatus(tab) {
      if (tab.disabled) {
        return "disabled";
      }

      if (tab.name === this.currentTab) {
        return "active";
      }

      return "";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var slots = this.getCustomSlotsByTagName(VALID_CHILD_COMPONENT);
      var tabTitles = this.getTitles(slots);
      var flex = tabTitles.length > 4 ? "0 0 22%" : 1;
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-tabs"]
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-tabs-nav"]
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex, {
        style: {
          overflowX: "auto",
          userSelect: "none"
        }
      }, {
        default: function _default() {
          return Array.apply(null, tabTitles).map(function (tab, index, arr) {
            return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
              style: {
                textAlign: "center"
              },
              flex: flex,
              onClick: _this2.handleTabClick.bind(_this2, tab),
              key: tab.name
            }, {
              default: function _default() {
                return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {
                  class: ["vg-tab-text", _this2.getStatus(tab)]
                }, {
                  default: function _default() {
                    return tab.value;
                  }
                })];
              }
            });
          });
        }
      })]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-tabs-content"]
      }, {
        default: function _default() {
          return slots;
        }
      })]);
    }
  }]);

  return VgTabs;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], tabs_Props));

tabs_VgTabs.componentName = "VgTabs";
tabs_VgTabs = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgTabs",
  emits: ["click", "change"],
  provide: function provide() {
    return {
      parentTab: this
    };
  }
})], tabs_VgTabs);
/* harmony default export */ var tabs = (tabs_VgTabs);
// CONCATENATED MODULE: ./src/tabs/index.ts
/*
* @Author: Just be free
* @Date:   2020-11-10 10:41:51
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-10 10:43:24
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_tabs = (tabs);
// CONCATENATED MODULE: ./src/tab-item/tab-item.ts






/*
* @Author: Just be free
* @Date:   2020-11-10 10:45:01
* @Last Modified by:   Just be free
* @Last Modified time: 2020-12-01 10:18:13
* @E-mail: justbefree@126.com
*/



var tab_item_Props = Object(VueGgy["d" /* props */])({
  title: String,
  disabled: Boolean,
  name: {
    type: String,
    required: true
  }
});

var tab_item_VgTabItem = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgTabItem, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgTabItem);

  function VgTabItem() {
    Object(classCallCheck["a" /* default */])(this, VgTabItem);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(VgTabItem, [{
    key: "render",
    value: function render() {
      var _this = this;

      var currentTab = this.parentTab.currentTab;
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-tab-item-content"]
      }, {
        default: function _default() {
          return _this.getSlots();
        }
      }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], currentTab === this.name]]);
    }
  }]);

  return VgTabItem;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], tab_item_Props));

tab_item_VgTabItem.componentName = "VgTabItem";
tab_item_VgTabItem = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgTabItem",
  emits: [],
  inject: ["parentTab"]
})], tab_item_VgTabItem);
/* harmony default export */ var tab_item = (tab_item_VgTabItem);
// CONCATENATED MODULE: ./src/tab-item/index.ts
/*
* @Author: Just be free
* @Date:   2020-11-10 10:44:52
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-10 10:45:48
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_tab_item = (tab_item);
// CONCATENATED MODULE: ./src/animation-list/animation-list.ts






/*
* @Author: Just be free
* @Date:   2020-11-19 17:53:44
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-20 15:36:46
* @E-mail: justbefree@126.com
*/




 // const VALID_CHILD_COMPONENT = "animation-list-item";

var animation_list_Props = Object(VueGgy["d" /* props */])({
  dataList: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  animation: {
    type: Boolean,
    default: true
  }
});

var animation_list_VgAnimationList = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgAnimationList, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgAnimationList);

  function VgAnimationList() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgAnimationList);

    _this = _super.apply(this, arguments);
    _this.stackList = [];
    return _this;
  }

  Object(createClass["a" /* default */])(VgAnimationList, [{
    key: "infinite",
    value: function infinite(slots) {
      var _this2 = this;

      if (slots.length > 0) {
        var slot = slots.shift();
        this.stackList.push(slot);
        var timer = setTimeout(function () {
          _this2.infinite(slots);

          clearTimeout(timer);
        }, 50);
      }
    }
  }, {
    key: "init",
    value: function init() {
      this.stackList = [];
      var slots = this.getSlots();
      var children = slots && slots[0] && slots[0].children;

      if (this.animation) {
        this.infinite(children);
      } else {
        this.stackList = slots;
      }
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.init();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-animation-list"]
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex, {
            flexDirection: "column"
          }, {
            default: function _default() {
              return Array.apply(null, _this3.stackList).map(function (item, key, arr) {
                return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
                  key: key
                }, {
                  default: function _default() {
                    return [item];
                  }
                });
              });
            }
          })];
        }
      });
    }
  }]);

  return VgAnimationList;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], animation_list_Props));

animation_list_VgAnimationList.componentName = "VgAnimationList";
animation_list_VgAnimationList = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgAnimationList",
  provide: function provide() {
    return {
      parentList: this
    };
  },
  watch: {
    // dataList: function (newValue, oldValue) {
    dataList: function dataList() {
      var _this4 = this;

      this.$nextTick(function () {
        _this4.init();
      });
    }
  }
})], animation_list_VgAnimationList);
/* harmony default export */ var animation_list = (animation_list_VgAnimationList);
// CONCATENATED MODULE: ./src/animation-list/index.ts
/*
* @Author: Just be free
* @Date:   2020-11-19 17:53:37
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-19 17:58:10
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_animation_list = (animation_list);
// CONCATENATED MODULE: ./src/animation-list-item/animation-list-item.ts






/*
* @Author: Just be free
* @Date:   2020-11-19 17:56:43
* @Last Modified by:   Just be free
* @Last Modified time: 2020-12-16 09:48:52
* @E-mail: justbefree@126.com
*/



var animation_list_item_Props = Object(VueGgy["d" /* props */])({
  height: [String, Number]
});

var animation_list_item_VgAnimationListItem = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgAnimationListItem, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgAnimationListItem);

  function VgAnimationListItem() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgAnimationListItem);

    _this = _super.apply(this, arguments);
    _this.show = false;
    _this.entered = false;
    return _this;
  }

  Object(createClass["a" /* default */])(VgAnimationListItem, [{
    key: "handleAfterEnter",
    value: function handleAfterEnter() {
      this.entered = true;
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this2 = this;

      if (this.animation) {
        var timer = setTimeout(function () {
          _this2.show = true;
          clearTimeout(timer);
        }, 1);
      }
    }
  }, {
    key: "beforeUnmount",
    value: function beforeUnmount() {
      this.show = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
        name: this.animation ? "vg-slide-in" : "",
        onAfterEnter: this.handleAfterEnter
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
            class: ["vg-animation-list-item", _this3.entered ? "no-transform" : ""],
            style: {
              height: "".concat(_this3.height, "px")
            }
          }, {
            default: function _default() {
              return _this3.getSlots();
            }
          }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _this3.show || !_this3.animation]])];
        }
      });
    }
  }]);

  return VgAnimationListItem;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], animation_list_item_Props));

animation_list_item_VgAnimationListItem.componentName = "VgAnimationListItem";
animation_list_item_VgAnimationListItem = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgAnimationListItem",
  inject: ["parentList"],
  computed: {
    animation: function animation() {
      return this.parentList.animation;
    }
  }
})], animation_list_item_VgAnimationListItem);
/* harmony default export */ var animation_list_item = (animation_list_item_VgAnimationListItem);
// CONCATENATED MODULE: ./src/animation-list-item/index.ts
/*
* @Author: Just be free
* @Date:   2020-11-19 17:56:31
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-19 17:57:48
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_animation_list_item = (animation_list_item);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("a630");

// CONCATENATED MODULE: ./src/utils/number/remainder.ts



/*
* @Author: Just be free
* @Date:   2020-11-25 15:31:39
* @Last Modified by:   Just be free
* @Last Modified time: 2020-12-30 16:25:26
* @E-mail: justbefree@126.com
*/
var remainder_Remainder = /*#__PURE__*/function () {
  function Remainder(r, i) {
    Object(classCallCheck["a" /* default */])(this, Remainder);

    this.remainder = 1;
    this.dir = 0;
    this.i = 0;
    this.remainder = r || 1;
    this.dir = 1;
    this.i = i || 0;
  }

  Object(createClass["a" /* default */])(Remainder, [{
    key: "next",
    value: function next(callback) {
      this.dir = 1;
      this.i = this.getNext("absolute");
      callback && typeof callback === "function" && callback(this.i);
      return this;
    }
  }, {
    key: "previous",
    value: function previous(callback) {
      this.dir = -1;
      this.i = this.getPrevious("absolute");
      callback && typeof callback === "function" && callback(this.i);
      return this;
    }
  }, {
    key: "getIndex",
    value: function getIndex() {
      return this.i;
    }
  }, {
    key: "getPrevious",
    value: function getPrevious(pos) {
      var index = this.i;

      if (pos === "absolute") {
        index = (index - 1) % this.remainder;
        index = index >= 0 ? index : index + this.remainder;
      } else {
        if (this.dir > 0) {
          index = index === 0 ? this.remainder - 1 : index - 1;
        } else {
          index = (index + 1) % this.remainder;
        }
      }

      return index;
    }
  }, {
    key: "getNext",
    value: function getNext(pos) {
      var index = this.i;

      if (pos === "absolute") {
        index = (index + 1) % this.remainder;
      } else {
        if (this.dir > 0) {
          index = (index + 1) % this.remainder;
        } else {
          index = index - 1 >= 0 ? index - 1 : (this.remainder + index) % this.remainder;
        }
      }

      return index;
    }
  }]);

  return Remainder;
}();
// CONCATENATED MODULE: ./src/utils/dom/animate.ts


/*
* @Author: Just be free
* @Date:   2020-11-25 15:53:24
* @Last Modified by:   Just be free
* @Last Modified time: 2020-12-30 16:33:25
* @E-mail: justbefree@126.com
*/
var move = function move(obj, json, fn) {
  var div = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 8;
  var timer = -1;
  clearInterval(timer);
  var iCurrent = 0;
  var iSpeed = 0;
  timer = setInterval(function () {
    var finished = true;

    for (var attr in json) {
      var iTarget = json[attr];

      if (attr === "opacity") {
        iCurrent = Math.round(parseFloat(window.getComputedStyle(obj, null).getPropertyValue("opacity")) * 100);
      } else {
        iCurrent = parseInt(window.getComputedStyle(obj, null).getPropertyValue(attr));
      }

      iSpeed = (iTarget - iCurrent) / div;
      iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

      if (iCurrent !== iTarget) {
        finished = false;

        if (attr === "opacity") {
          obj.setAttribute("style", "opacity: ".concat((iCurrent + iSpeed) / 100));
        } else {
          obj.setAttribute("style", "".concat(attr, ": ").concat(iCurrent + iSpeed, "px"));
        }
      }
    }

    if (finished) {
      clearInterval(timer);
      fn && typeof fn === "function" && fn.call(obj);
    }
  }, 30);
};
// CONCATENATED MODULE: ./src/swipe/swipe.ts













/*
* @Author: Just be free
* @Date:   2020-11-25 14:11:49
* @Last Modified by:   Just be free
* @Last Modified time: 2020-12-30 16:37:29
* @E-mail: justbefree@126.com
*/







var swipe_VALID_CHILD_COMPONENT = "VgSwipeItem";
var swipe_Props = Object(VueGgy["d" /* props */])({
  vertical: Boolean,
  autoPlay: {
    type: [Number, String],
    default: 3000
  },
  showIndicator: {
    type: Boolean,
    default: true
  },
  indicatorType: {
    type: String,
    default: "dashed"
  },
  height: {
    type: [String, Number],
    default: 240
  },
  loadingText: {
    type: String,
    default: "图片加载中..."
  }
});

var swipe_VgSwipe = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgSwipe, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgSwipe);

  function VgSwipe() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgSwipe);

    _this = _super.apply(this, arguments);
    _this.rect = {};
    _this.width = 0;
    _this.count = 0;
    _this.timer = -1;
    _this.activedIndex = 0;
    _this.delayActivedIndex = 0;
    _this.moving = false;
    _this.dragging = false;
    _this.children = [];
    _this.fullScreen = false;
    _this.R = new remainder_Remainder();
    return _this;
  }

  Object(createClass["a" /* default */])(VgSwipe, [{
    key: "creteIndicator",
    value: function creteIndicator(counts) {
      var showIndicator = this.showIndicator,
          indicatorType = this.indicatorType,
          delayActivedIndex = this.delayActivedIndex;

      if (showIndicator) {
        var type = [];

        if (indicatorType === "number") {
          type = [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {
            class: ["index"]
          }, {
            default: function _default() {
              return "".concat(delayActivedIndex + 1, "/").concat(counts);
            }
          })];
        } else {
          type = Array.apply(null, new Array(counts)).map(function (i, key, arr) {
            return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("i", {
              class: ["indicator-dot", Math.abs(delayActivedIndex) === key ? "active" : ""]
            }, {
              default: function _default() {
                return [];
              }
            });
          });
        }

        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
          class: ["vg-swipe-indicators", indicatorType, this.vertical ? "vertical" : "horizontal"]
        }, {
          default: function _default() {
            return type;
          }
        });
      }

      return null;
    }
  }, {
    key: "initRect",
    value: function initRect() {
      this.rect = this.$el.getBoundingClientRect();
    }
  }, {
    key: "drag",
    value: function drag() {
      var el = this.$refs.swipeContainer;

      if (!el) {
        return;
      }

      var prevEle = null;
      var curEle = null;
      var num = 1;
      var nextEle = null;
      var moving = false;
      var that = this;
      var r = null;
      var startTime = 0;
      this.bindEvent(el, {
        start: function start() {
          that.stop();
          that.dragging = true;
          startTime = Date.now();
        },
        dragging: function dragging() {
          if (moving) {
            return;
          }

          if (!r) {
            if (!that.vertical && that.deltaX < 0 || that.vertical && that.deltaY < 0) {
              r = that.R.next(function (index) {
                that.activedIndex = index;
              });
              num = 1;
            } else if (!that.vertical && that.deltaX > 0 || that.vertical && that.deltaY > 0) {
              r = that.R.previous(function (index) {
                that.activedIndex = index;
              });
              num = -1;
            } else {
              return;
            }
          }

          var attr = that.vertical ? "top" : "left";
          var value = that.vertical ? that.deltaY : that.deltaX;
          prevEle = that.children[r.getPrevious()];
          curEle = that.children[r.getIndex()];
          nextEle = that.children[r.getNext()];
          prevEle.setAttribute("style", "".concat(attr, ": ").concat(value, "px"));
          curEle.setAttribute("style", "".concat(attr, ": ").concat(num * that.size + value, "px"));
        },
        stop: function stop() {
          that.paly();
          that.dragging = false;
          that.delayActivedIndex = that.activedIndex;
          var disXY = that.vertical ? that.deltaY : that.deltaX;
          var timeDiff = Date.now() - startTime; // if (timeDiff < 200 && disXY === 0) {
          //   that.openImageViewer();
          //   return;
          // }

          if (moving || disXY === 0 || !prevEle || !curEle || !nextEle) {
            return;
          }

          var attr = that.vertical ? "top" : "left";
          moving = true;
          that.startMove(prevEle, -1 * num * that.size);
          curEle.setAttribute("style", "".concat(attr, ": ").concat(num * that.size, "px"));
          nextEle.setAttribute("style", "".concat(attr, ": ").concat(num * that.size, "px"));
          that.startMove(curEle, 0, function () {
            moving = false;
            prevEle = null;
            curEle = null;
            nextEle = null;
            r = null;
          });
        }
      });
    }
  }, {
    key: "updateActivedIndex",
    value: function updateActivedIndex(num, callback) {
      var _this2 = this;

      // 正在运动的时候不允许连续点击
      if (this.moving) {
        return;
      }

      this.moving = true;
      var method = num > 0 ? "next" : "previous";
      var r = this.R[method](function (index) {
        _this2.activedIndex = index;
      });
      this.delayActivedIndex = this.activedIndex;
      var prevEle = this.children[r.getPrevious()];
      var curEle = this.children[r.getIndex()];
      var nextEle = this.children[r.getNext()];
      var attr = this.vertical ? "top" : "left";
      this.startMove(prevEle, -1 * num * this.size);
      curEle.setAttribute("style", "".concat(attr, ": ").concat(num * this.size, "px"));
      this.startMove(curEle, 0, function (el) {
        _this2.moving = false;
        callback && typeof callback === "function" && callback(el);
      });
      nextEle.setAttribute("style", "".concat(attr, ": ").concat(num * this.size, "px"));
    }
  }, {
    key: "startMove",
    value: function startMove(el) {
      var _this3 = this;

      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var fn = arguments.length > 2 ? arguments[2] : undefined;

      if (!el) {
        return;
      }

      var vertical = this.vertical;
      var attr = vertical ? "top" : "left";
      move(el, _defineProperty({}, attr, value), function () {
        fn && typeof fn === "function" && fn.call(_this3, el);
      });
    }
  }, {
    key: "paly",
    value: function paly() {
      var _this4 = this;

      if (Number(this.autoPlay) > 0 && this.children.length > 1) {
        this.stop();
        this.timer = setTimeout(function () {
          _this4.updateActivedIndex(1);

          _this4.paly();
        }, Number(this.autoPlay));
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      clearTimeout(this.timer);
    }
  }, {
    key: "next",
    value: function next() {
      var _this5 = this;

      this.stop();
      this.updateActivedIndex(1, function () {
        _this5.paly();
      });
    }
  }, {
    key: "prev",
    value: function prev() {
      var _this6 = this;

      this.stop();
      this.updateActivedIndex(-1, function () {
        _this6.paly();
      });
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this7 = this;

      if (this.$el) {
        this.width = Math.round(this.rect.width);
      }

      var el = this.$refs.swipeContainer;
      this.children = Array.from(el.children);
      var attr = this.vertical ? "top" : "left";
      this.children.forEach(function (child, key) {
        if (key === _this7.activedIndex) {
          child.style[attr] = "0px";
        } else {
          child.style[attr] = "".concat(_this7.size, "px");
        }
      });
      this.paly();
    }
  }, {
    key: "visibilityChange",
    value: function visibilityChange() {
      var _this8 = this;

      bus["a" /* EventBus */].on("window:visibilitychange", function (status) {
        if (status === "visible") {
          _this8.paly();
        } else {
          _this8.stop();
        }
      });
    }
  }, {
    key: "resize",
    value: function resize() {
      var _this9 = this;

      bus["a" /* EventBus */].on("window:resize", function (ev) {
        _this9.initRect();

        _this9.width = _this9.rect.width;
      });
    }
  }, {
    key: "beforeMount",
    value: function beforeMount() {
      this.bindVisibilityChange();
      this.bindResize();
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.R = new remainder_Remainder(this.count, this.activedIndex);
      this.initRect();
      this.initialize();
      this.drag();
      this.visibilityChange();
      this.resize();
    }
  }, {
    key: "beforeUnmount",
    value: function beforeUnmount() {
      this.unbindVisibilityChange();
      this.unbindResize();
    }
  }, {
    key: "render",
    value: function render() {
      var _this10 = this;

      var slots = this.getCustomSlotsByTagName(swipe_VALID_CHILD_COMPONENT);
      this.count = slots.length;
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-swipe"],
        style: this.swipeStyle
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
            style: {
              width: "".concat(_this10.width, "px"),
              height: "".concat(_this10.height, "px")
            },
            class: ["vg-swipe-list-container"],
            ref: "swipeContainer"
          }, {
            default: function _default() {
              return slots;
            }
          }), _this10.creteIndicator(_this10.count)];
        }
      });
    }
  }]);

  return VgSwipe;
}(Object(VueGgy["c" /* mixins */])(swipe_Props, VueGgy["b" /* default */], EventEmulator_EventEmulator));

swipe_VgSwipe.componentName = "VgSwipe";
swipe_VgSwipe = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgSwipe",
  provide: function provide() {
    return {
      swipeParent: this
    };
  },
  computed: {
    size: function size() {
      return this.vertical ? this.height : this.width;
    },
    swipeStyle: function swipeStyle() {
      return {
        height: "".concat(this.height, "px")
      };
    }
  }
})], swipe_VgSwipe);
/* harmony default export */ var swipe = (swipe_VgSwipe);
// CONCATENATED MODULE: ./src/swipe/index.ts
/*
* @Author: Just be free
* @Date:   2020-11-25 14:11:44
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-25 14:13:08
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_swipe = (swipe);
// CONCATENATED MODULE: ./src/utils/lazyload.ts








/*
* @Author: Just be free
* @Date:   2020-11-27 16:59:42
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-27 17:29:02
* @E-mail: justbefree@126.com
*/
// export interface LoadImagePromiseOptions {
//   naturalWidth: number;
//   naturalHeight: number;
//   src: string;
// }
var p = function p(image) {
  return new Promise(function (resolve, reject) {
    var img = new Image();

    if (!image || !image.src) {
      var err = new Error("image src is required");
      reject(err);
    }

    img.src = image.src;

    img.onload = function () {
      resolve({
        naturalWidth: image.naturalWidth,
        naturalHeight: image.naturalHeight,
        src: image.src
      });
    };
  });
};

var loadImageAsync = function loadImageAsync() {
  var images = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (Array.isArray(images)) {
    var all = [];
    images.forEach(function (image) {
      all.push(p(image));
    });
    return Promise.all(all);
  } else {
    return p(images);
  }
};
// CONCATENATED MODULE: ./src/swipe-item/swipe-item.ts







/*
* @Author: Just be free
* @Date:   2020-11-25 14:12:12
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-30 17:00:24
* @E-mail: justbefree@126.com
*/




var swipe_item_Props = Object(VueGgy["d" /* props */])({});

var swipe_item_VgSwipeItem = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgSwipeItem, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgSwipeItem);

  function VgSwipeItem() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgSwipeItem);

    _this = _super.apply(this, arguments);
    _this.loaded = false;
    return _this;
  }

  Object(createClass["a" /* default */])(VgSwipeItem, [{
    key: "mounted",
    value: function mounted() {
      var _this2 = this;

      var $el = this.$refs.swipeItem;

      if (!$el) {
        return;
      }

      var imgs = $el.getElementsByTagName("img");
      var imgDOMs = Array.from(imgs);

      if (imgDOMs.length > 0) {
        loadImageAsync(imgDOMs).then(function () {
          _this2.loaded = true;
        }).catch(function (err) {
          console.error("There was an error while loading image:", err);
        });
      } else {
        this.loaded = true;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$swipeParent = this.swipeParent,
          vertical = _this$swipeParent.vertical,
          width = _this$swipeParent.width,
          height = _this$swipeParent.height,
          loadingText = _this$swipeParent.loadingText;
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        ref: "swipeItem",
        style: {
          width: "".concat(width, "px"),
          height: "".concat(height, "px")
        },
        class: ["vg-swipe-item", this.loaded ? "loaded" : "loading", vertical ? "vertical" : "horizontal"]
      }, {
        default: function _default() {
          return [_this3.getSlots(), !_this3.loaded && Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
            class: ["loading-mask"],
            style: {
              lineHeight: "".concat(height, "px")
            }
          }, {
            default: function _default() {
              return loadingText;
            }
          })];
        }
      });
    }
  }]);

  return VgSwipeItem;
}(Object(VueGgy["c" /* mixins */])(swipe_item_Props, VueGgy["b" /* default */]));

swipe_item_VgSwipeItem.componentName = "VgSwipeItem";
swipe_item_VgSwipeItem = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgSwipeItem",
  inject: ["swipeParent"]
})], swipe_item_VgSwipeItem);
/* harmony default export */ var swipe_item = (swipe_item_VgSwipeItem);
// CONCATENATED MODULE: ./src/swipe-item/index.ts
/*
* @Author: Just be free
* @Date:   2020-11-25 14:12:06
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-25 14:15:07
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_swipe_item = (swipe_item);
// CONCATENATED MODULE: ./src/submit-bar/submit-bar.ts







/*
* @Author: Just be free
* @Date:   2020-11-30 11:11:58
* @Last Modified by:   Just be free
* @Last Modified time: 2021-01-20 11:08:30
* @E-mail: justbefree@126.com
*/








var VALID_POPUP_CONTENT_COMPONENT = "VgSubmitBarPopupContent";
var VALID_VALUE_COMPONENT = "VgSubmitBarValue";
var VALID_TEXT_COMPONENT = "VgSubmitBarText";
var submit_bar_Props = Object(VueGgy["d" /* props */])({
  submitText: {
    type: String,
    default: "提交"
  },
  label: {
    type: String,
    default: ""
  },
  value: {
    type: String,
    default: "0"
  },
  valueDescription: {
    type: String,
    default: ""
  },
  currencySymbol: {
    type: String,
    default: "&yen;"
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  fixed: Boolean,
  disabled: {
    type: Boolean,
    default: false
  },
  leftFlex: {
    type: [String, Number],
    default: 2
  },
  rightFlex: {
    type: [String, Number],
    default: 1
  }
});

var submit_bar_VgSubmitBar = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgSubmitBar, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgSubmitBar);

  function VgSubmitBar() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgSubmitBar);

    _this = _super.apply(this, arguments);
    _this.showPopup = false;
    _this.popupStatus = false;
    _this.submitStatus = "resolved";
    return _this;
  }

  Object(createClass["a" /* default */])(VgSubmitBar, [{
    key: "toggle",
    value: function toggle() {
      this.showPopup = !this.showPopup;
      this.$emit("trigger", this.showPopup);
    }
  }, {
    key: "genValue",
    value: function genValue() {
      var _this2 = this;

      var value = this.getCustomSlotsByTagName(VALID_VALUE_COMPONENT);

      if (Array.isArray(value) && value.length > 0) {
        return value;
      } else {
        var hasDescription = this.valueDescription !== ""; // return h("span", { class: ["vg-submit-action-currency"] }, {
        //   default: () => [
        //     h("small", { innerHTML: this.currencySymbol }, { default: () => [] }),
        //     h("b", {}, { default: () => [this.value] }),
        //   ]
        // });

        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex, {
          class: ["custom-value", hasDescription ? "initial-line-height" : ""],
          flexDirection: "column",
          justifyContent: "spaceBetween"
        }, {
          default: function _default() {
            return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
              flex: 2
            }, {
              default: function _default() {
                return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {
                  class: ["vg-submit-action-currency", hasDescription ? "line-height-26" : "inherit-line-height"]
                }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("small", {
                  innerHTML: _this2.currencySymbol
                }, {
                  default: function _default() {
                    return [];
                  }
                }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("b", {}, {
                  default: function _default() {
                    return [_this2.value];
                  }
                }), hasDescription && _this2.genIcon()])];
              }
            }), hasDescription && Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
              class: ["vg-submit-value-description"],
              flex: 1
            }, {
              default: function _default() {
                return [_this2.valueDescription];
              }
            })];
          }
        });
      }
    }
  }, {
    key: "genIcon",
    value: function genIcon() {
      if (this.showIcon) {
        var iconName = this.showPopup ? "arrow-down" : "arrow-up";
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {
          class: ["vg-submit-action-icon"]
        }, {
          default: function _default() {
            return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_icon, {
              name: iconName,
              size: 12
            }, {
              default: function _default() {
                return [];
              }
            })];
          }
        });
      }
    }
  }, {
    key: "setActionPopupStyle",
    value: function setActionPopupStyle() {
      var rect = this.$el.getBoundingClientRect();
      this.$refs.actionPopup.style.bottom = "".concat(window.innerHeight - rect.top, "px");
    }
  }, {
    key: "beforeEnter",
    value: function beforeEnter() {
      this.$emit("beforeenter");
      this.popupStatus = true;
      this.setActionPopupStyle();
    }
  }, {
    key: "afterLeave",
    value: function afterLeave() {
      this.popupStatus = false;
      this.$emit("afterleave");

      if (this.submitStatus === "pendding") {
        this.$emit("submit");
        this.submitStatus = "resolved";
      }
    }
  }, {
    key: "submit",
    value: function submit() {
      if (this.popupStatus) {
        this.submitStatus = "pendding";
        this.toggle();
      } else {
        this.$emit("submit");
      }
    }
  }, {
    key: "view",
    value: function view() {
      this.showPopup = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var popupContent = this.getCustomSlotsByTagName(VALID_POPUP_CONTENT_COMPONENT);
      var hasPopup = popupContent && Array.isArray(popupContent) && popupContent.length > 0;
      var hasDescription = this.valueDescription !== "";
      var hasLabel = this.label !== "";
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-submit-action", this.fixed ? "fixed" : ""]
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
            class: ["vg-submit-action-popup"],
            ref: "actionPopup"
          }, {
            default: function _default() {
              return [hasPopup && Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_popup, {
                style: {
                  position: "absolute"
                },
                modelValue: _this3.showPopup,
                singleton: true,
                onBeforeenter: _this3.beforeEnter,
                onAfterleave: _this3.afterLeave,
                onInput: _this3.toggle
              }, {
                default: function _default() {
                  return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
                    class: ["vg-submit-action-content"]
                  }, {
                    default: function _default() {
                      return popupContent;
                    }
                  })];
                }
              })];
            }
          }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _this3.popupStatus]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex, {
            class: ["vg-submit-action-flex"]
          }, {
            default: function _default() {
              return [hasLabel && Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
                flex: _this3.leftFlex,
                onClick: _this3.toggle
              }, {
                default: function _default() {
                  return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex, {
                    alignItems: "center"
                  }, {
                    default: function _default() {
                      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {}, {
                        default: function _default() {
                          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {
                            class: ["vg-submit-action-total-text"]
                          }, {
                            default: function _default() {
                              return [_this3.label];
                            }
                          })];
                        }
                      }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {}, {
                        default: function _default() {
                          return [_this3.genValue()];
                        }
                      }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {}, {
                        default: function _default() {
                          return [hasPopup && !hasDescription && _this3.genIcon()];
                        }
                      })];
                    }
                  })];
                }
              }), !hasLabel && Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
                flex: _this3.leftFlex
              }, {
                default: function _default() {
                  return [_this3.getCustomSlotsByTagName(VALID_TEXT_COMPONENT)];
                }
              }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
                flex: _this3.rightFlex
              }, {
                default: function _default() {
                  return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_button, {
                    class: ["vg-submit-action-button"],
                    type: "primary",
                    size: "large",
                    disabled: _this3.disabled,
                    onClick: _this3.submit
                  }, {
                    default: function _default() {
                      return [_this3.submitText];
                    }
                  })];
                }
              })];
            }
          })];
        }
      });
    }
  }]);

  return VgSubmitBar;
}(Object(VueGgy["c" /* mixins */])(submit_bar_Props, VueGgy["b" /* default */]));

submit_bar_VgSubmitBar.componentName = "VgSubmitBar";
submit_bar_VgSubmitBar = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgSubmitBar",
  emits: ["trigger", "beforeenter", "afterleave", "submit"]
})], submit_bar_VgSubmitBar);
/* harmony default export */ var submit_bar = (submit_bar_VgSubmitBar);
// CONCATENATED MODULE: ./src/submit-bar/index.ts
/*
* @Author: Just be free
* @Date:   2020-11-30 11:11:46
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-30 11:12:47
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_submit_bar = (submit_bar);
// CONCATENATED MODULE: ./src/submit-bar-popup-content/submit-bar-popup-content.ts





/*
* @Author: Just be free
* @Date:   2020-11-30 13:42:13
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-30 13:50:25
* @E-mail: justbefree@126.com
*/



var submit_bar_popup_content_Props = Object(VueGgy["d" /* props */])({});

var submit_bar_popup_content_VgSubmitBarPopupContent = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgSubmitBarPopupContent, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgSubmitBarPopupContent);

  function VgSubmitBarPopupContent() {
    Object(classCallCheck["a" /* default */])(this, VgSubmitBarPopupContent);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(VgSubmitBarPopupContent, [{
    key: "render",
    value: function render() {
      var _this = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-submit-action-popup-content"]
      }, {
        default: function _default() {
          return [_this.getSlots()];
        }
      });
    }
  }]);

  return VgSubmitBarPopupContent;
}(Object(VueGgy["c" /* mixins */])(submit_bar_popup_content_Props, VueGgy["b" /* default */]));

submit_bar_popup_content_VgSubmitBarPopupContent.componentName = "VgSubmitBarPopupContent";
submit_bar_popup_content_VgSubmitBarPopupContent = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgSubmitBarPopupContent"
})], submit_bar_popup_content_VgSubmitBarPopupContent);
/* harmony default export */ var submit_bar_popup_content = (submit_bar_popup_content_VgSubmitBarPopupContent);
// CONCATENATED MODULE: ./src/submit-bar-popup-content/index.ts
/*
* @Author: Just be free
* @Date:   2020-11-30 13:42:04
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-30 13:42:56
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_submit_bar_popup_content = (submit_bar_popup_content);
// CONCATENATED MODULE: ./src/submit-bar-value/submit-bar-value.ts





/*
* @Author: Just be free
* @Date:   2020-11-30 14:30:08
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-30 14:39:35
* @E-mail: justbefree@126.com
*/



var submit_bar_value_Props = Object(VueGgy["d" /* props */])({});

var submit_bar_value_VgSubmitBarValue = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgSubmitBarValue, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgSubmitBarValue);

  function VgSubmitBarValue() {
    Object(classCallCheck["a" /* default */])(this, VgSubmitBarValue);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(VgSubmitBarValue, [{
    key: "render",
    value: function render() {
      var _this = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-submit-action-value"]
      }, {
        default: function _default() {
          return [_this.getSlots()];
        }
      });
    }
  }]);

  return VgSubmitBarValue;
}(Object(VueGgy["c" /* mixins */])(submit_bar_value_Props, VueGgy["b" /* default */]));

submit_bar_value_VgSubmitBarValue.componentName = "VgSubmitBarValue";
submit_bar_value_VgSubmitBarValue = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgSubmitBarValue"
})], submit_bar_value_VgSubmitBarValue);
/* harmony default export */ var submit_bar_value = (submit_bar_value_VgSubmitBarValue);
// CONCATENATED MODULE: ./src/submit-bar-value/index.ts
/*
* @Author: Just be free
* @Date:   2020-11-30 14:30:01
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-30 14:30:39
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_submit_bar_value = (submit_bar_value);
// CONCATENATED MODULE: ./src/submit-bar-text/submit-bar-text.ts





/*
* @Author: Just be free
* @Date:   2021-01-20 09:54:38
* @Last Modified by:   Just be free
* @Last Modified time: 2021-01-20 10:28:52
* @E-mail: justbefree@126.com
*/



var submit_bar_text_Props = Object(VueGgy["d" /* props */])({});

var submit_bar_text_VgSubmitBarText = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgSubmitBarText, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgSubmitBarText);

  function VgSubmitBarText() {
    Object(classCallCheck["a" /* default */])(this, VgSubmitBarText);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(VgSubmitBarText, [{
    key: "render",
    value: function render() {
      var _this = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-submit-bar-text"]
      }, {
        default: function _default() {
          return _this.getSlots();
        }
      });
    }
  }]);

  return VgSubmitBarText;
}(Object(VueGgy["c" /* mixins */])(submit_bar_text_Props, VueGgy["b" /* default */]));

submit_bar_text_VgSubmitBarText.componentName = "VgSubmitBarText";
submit_bar_text_VgSubmitBarText = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgSubmitBarText"
})], submit_bar_text_VgSubmitBarText);
/* harmony default export */ var submit_bar_text = (submit_bar_text_VgSubmitBarText);
// CONCATENATED MODULE: ./src/submit-bar-text/index.ts
/*
* @Author: Just be free
* @Date:   2021-01-20 09:54:25
* @Last Modified by:   Just be free
* @Last Modified time: 2021-01-20 09:55:43
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_submit_bar_text = (submit_bar_text);
// CONCATENATED MODULE: ./src/utils/string/index.ts



/*
* @Author: Just be free
* @Date:   2020-12-11 15:11:30
* @Last Modified by:   Just be free
* @Last Modified time: 2020-12-11 15:13:34
* @E-mail: justbefree@126.com
*/
var encrypt = function encrypt(str) {
  return str.replace(/^(\S{2})(\S+)(\S{2})$/, "$1******$3");
};
// CONCATENATED MODULE: ./src/field/field.ts










/*
* @Author: Just be free
* @Date:   2020-12-07 14:36:07
* @Last Modified by:   Just be free
* @Last Modified time: 2020-12-18 16:37:23
* @E-mail: justbefree@126.com
*/







var VALID_TYPE = ["number", "textarea", "password", "text", "email", "tel"];
var field_Props = Object(VueGgy["d" /* props */])({
  modelValue: {
    type: [Number, String],
    default: ""
  },
  label: String,
  placeholder: String,
  maxlength: [Number, String],
  readonly: {
    type: Boolean,
    default: false
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  interactive: {
    type: String,
    default: "address",
    require: false
  },
  type: {
    type: String,
    default: "text"
  },
  iconName: String,
  showTextareaCounter: {
    type: Boolean,
    default: false
  },
  encrypted: {
    type: Boolean,
    default: false
  },
  display: {
    type: String,
    default: "row"
  },
  pattern: String,
  encrypt: {
    type: Function,
    default: encrypt
  }
});

var field_VgField = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgField, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgField);

  function VgField() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgField);

    _this = _super.apply(this, arguments);
    _this.target = null;
    _this.showIcon = false;
    _this.showEncryptInput = false;
    _this.originalText = _this.modelValue;
    _this.inputing = false;
    return _this;
  }

  Object(createClass["a" /* default */])(VgField, [{
    key: "handleIconClick",
    value: function handleIconClick() {
      if (this.clearable) {
        // (this.target as HTMLInputElement).value = "";
        this.$emit("update:modelValue", "");
        this.showIcon = false;
      }
    }
  }, {
    key: "handleOnFocus",
    value: function handleOnFocus(e) {
      this.target = e.target;
      this.$emit("focus", e);
      this.$emit("click", e);

      if (this.encrypted) {
        // (e.target as HTMLInputElement).value = "";
        this.$emit("update:modelValue", "");
      }
    }
  }, {
    key: "handleInput",
    value: function handleInput(e) {
      if (this.clearable && e.target.value) {
        this.showIcon = true;
      } else {
        this.showIcon = false;
      }

      this.inputing = true;
      this.$emit("update:modelValue", e.target.value);
    }
  }, {
    key: "handleOnBlur",
    value: function handleOnBlur(e) {
      this.inputing = false;

      if (this.encrypted) {
        if (this.modelValue === "") {
          this.$emit("update:modelValue", this.originalText); // this.$emit("update:modelValue", this.encrypt(this.originalText));
        } else {
          this.originalText = this.target.value;
        }
      }

      this.$emit("blur", e);
    }
  }, {
    key: "createIcon",
    value: function createIcon() {
      var icon = [];
      var name = this.clearable ? "clear" : this.iconName;

      if (this.clearable || this.iconName) {
        if (this.modelValue !== "") {
          this.showIcon = true;
        }

        icon.push(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
          onClick: this.handleIconClick
        }, {
          default: function _default() {
            return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_icon, {
              name: name,
              size: "16",
              cursor: "pointer"
            }, {
              default: function _default() {
                return [];
              }
            })];
          }
        }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], this.showIcon]]));
      }

      return icon;
    }
  }, {
    key: "createInput",
    value: function createInput() {
      var _this2 = this;

      var maxlength = this.maxlength ? Number(this.maxlength) : null;
      var area = [];
      var attrs = {
        readonly: this.readonly,
        placeholder: this.placeholder,
        autofocus: this.autofocus,
        value: this.encrypted && !this.inputing ? this.encrypt(this.modelValue) : this.modelValue,
        // value: this.modelValue,
        required: this.required,
        disabled: this.disabled,
        maxlength: maxlength,
        pattern: this.pattern
      };
      var events = {
        onFocus: this.handleOnFocus,
        onBlur: this.handleOnBlur,
        onInput: this.handleInput
      };
      var className = [];

      if (this.disabled) {
        className.push("disable");
      }

      var columnDisplayClass = this.isColumnDisplay ? "column-flex-item" : "";

      if (VALID_TYPE.indexOf(this.type) > -1) {
        if (this.type === "textarea") {
          area.push(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
            class: ["vg-field-textarea", columnDisplayClass],
            flex: 1
          }, {
            default: function _default() {
              return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("textarea", _objectSpread2(_objectSpread2({
                class: ["textarea-ele"].concat(className)
              }, events), attrs), {
                default: function _default() {
                  return [];
                }
              }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
                class: ["vg-field-textarea-counter"]
              }, {
                default: function _default() {
                  return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("span", {}, {
                    default: function _default() {
                      return "".concat(_this2.modelValue.length, "/").concat(_this2.maxlength);
                    }
                  })];
                }
              }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _this2.showTextareaCounter]])];
            }
          }));
        } else {
          area.push(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
            class: ["vg-field-input", columnDisplayClass],
            flex: 1
          }, {
            default: function _default() {
              return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("input", _objectSpread2(_objectSpread2({}, events), {}, {
                class: ["input-ele"].concat(className),
                type: _this2.type
              }, attrs), {
                default: function _default() {
                  return [];
                }
              })];
            }
          }));
        }
      }

      return area;
    }
  }, {
    key: "genLabel",
    value: function genLabel(label) {
      var limitLabelWidth = this.isColumnDisplay ? "column-flex-item" : "limit-label-width";
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex_item, {
        class: ["vg-field-label", limitLabelWidth]
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
            class: ["label-wrapper"]
          }, label)];
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var slots = this.getSlots("label");
      var label = [];

      if (slots && slots.length > 0) {
        label.push(this.genLabel(slots));
      } else if (this.label) {
        label.push(this.genLabel(this.label));
      }

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-field", "border-top-bottom", this.isColumnDisplay ? "vg-field-column" : ""]
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_flex, {
            flexDirection: _this3.display,
            class: ["vg-field-container"]
          }, {
            default: function _default() {
              return [].concat(label, Object(toConsumableArray["a" /* default */])(_this3.createInput()), Object(toConsumableArray["a" /* default */])(_this3.createIcon()));
            }
          })];
        }
      });
    }
  }]);

  return VgField;
}(Object(VueGgy["c" /* mixins */])(field_Props, VueGgy["b" /* default */]));

field_VgField.componentName = "VgField";
field_VgField = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgField",
  emits: ["blur", "update:modelValue", "focus", "click"],
  computed: {
    isColumnDisplay: function isColumnDisplay() {
      return this.display === "column";
    }
  }
})], field_VgField);
/* harmony default export */ var field = (field_VgField);
// CONCATENATED MODULE: ./src/field/index.ts
/*
* @Author: Just be free
* @Date:   2020-12-07 14:36:02
* @Last Modified by:   Just be free
* @Last Modified time: 2020-12-07 14:41:02
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_field = (field);
// CONCATENATED MODULE: ./src/dropdown/dropdown.ts







/*
* @Author: Just be free
* @Date:   2021-02-23 15:21:59
* @Last Modified by:   Just be free
* @Last Modified time: 2021-02-26 16:37:30
* @E-mail: justbefree@126.com
*/




var dropdown_Props = Object(VueGgy["d" /* props */])({
  borderRadius: Number,
  direction: {
    type: String,
    default: "down",
    validator: function validator(dir) {
      return ["down", "up", "right", "left"].indexOf(dir) > -1;
    }
  }
});

var dropdown_VgDropdown = /*#__PURE__*/function (_mixins) {
  Object(inherits["a" /* default */])(VgDropdown, _mixins);

  var _super = Object(createSuper["a" /* default */])(VgDropdown);

  function VgDropdown() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VgDropdown);

    _this = _super.apply(this, arguments);
    _this.status = false;
    _this.show = false;
    return _this;
  }

  Object(createClass["a" /* default */])(VgDropdown, [{
    key: "toggle",
    value: function toggle() {
      this.show = !this.show;
    }
  }, {
    key: "handleBeforeEnter",
    value: function handleBeforeEnter() {
      this.$emit("beforeenter");
      this.status = true;
      var target = this.getSlots("target");
      var targetWrapper = this.$el.getElementsByClassName("$dropdown-target");
      var dom = targetWrapper[0].children[0];
      var rect = dom.getBoundingClientRect();
      var dropdownPopup = this.$refs.dropdownPopup;

      if (this.direction === "up") {
        dropdownPopup.style.bottom = "".concat(window.innerHeight - rect.top, "px");
      } else if (this.direction === "down") {
        dropdownPopup.style.top = "".concat(rect.bottom, "px");
      } else if (this.direction === "left") {
        dropdownPopup.style.right = "".concat(window.innerWidth - rect.left, "px");
      } else if (this.direction === "right") {
        dropdownPopup.style.left = "".concat(rect.right, "px");
      }
    }
  }, {
    key: "handleAfterEnter",
    value: function handleAfterEnter() {
      this.$emit("afterenter");
    }
  }, {
    key: "handleBeforeLeave",
    value: function handleBeforeLeave() {
      this.$emit("beforeleave");
    }
  }, {
    key: "handleAfterLeave",
    value: function handleAfterLeave() {
      this.$emit("afterleave");
      this.status = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var target = this.getSlots("target");
      var content = this.getSlots("content");
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-dropdown"]
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
            class: ["$dropdown-target"]
          }, {
            default: function _default() {
              return [target];
            }
          }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
            class: ["vg-dropdown-popup", _this2.direction, _this2.status ? "z-index" : ""],
            ref: "dropdownPopup"
          }, {
            default: function _default() {
              return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(src_popup, {
                onBeforeenter: _this2.handleBeforeEnter,
                onAfterenter: _this2.handleAfterEnter,
                onBeforeleave: _this2.handleBeforeLeave,
                onAfterleave: _this2.handleAfterLeave,
                style: {
                  position: "absolute"
                },
                modelValue: _this2.show,
                singleton: true,
                position: _this2.position,
                borderRadius: _this2.borderRadius
              }, {
                default: function _default() {
                  return [content];
                }
              })];
            }
          }), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _this2.status]])];
        }
      });
    }
  }]);

  return VgDropdown;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], dropdown_Props));

dropdown_VgDropdown.componentName = "VgDropdown";
dropdown_VgDropdown = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgDropdown",
  emits: ["beforeenter", "afterenter", "beforeleave", "afterleave"],
  computed: {
    position: function position() {
      var map = {
        up: "bottom",
        down: "top",
        left: "right",
        right: "left"
      };
      return map[this.direction] || "bottom";
    }
  }
})], dropdown_VgDropdown);
/* harmony default export */ var dropdown = (dropdown_VgDropdown);
// CONCATENATED MODULE: ./src/dropdown/index.ts
/*
* @Author: Just be free
* @Date:   2021-02-23 15:23:01
* @Last Modified by:   Just be free
* @Last Modified time: 2021-02-23 15:23:25
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_dropdown = (dropdown);
// CONCATENATED MODULE: ./src/index.ts






/*
* @Author: Just be free
* @Date:   2020-09-22 15:24:16
* @Last Modified by:   Just be free
* @Last Modified time: 2021-02-23 16:15:59
* @E-mail: justbefree@126.com
*/
 // TOOLS


var Tools = {
  deepClone: deepClone
};




































var configOptions = {};
var components = [src_dropdown, src_field, src_submit_bar_text, src_submit_bar_value, src_submit_bar_popup_content, src_submit_bar, src_swipe_item, src_swipe, src_animation_list_item, src_animation_list, src_tab_item, src_tabs, src_date_picker, src_picker, src_skeleton, src_pull_refresh, src_counter, src_picky_stepper, src_action_sheet, src_slider, src_citypicker, src_layout, src_calendar, src_sticky, src_button, src_flex, src_flex_item, src_spin, src_popup, src_icon, src_checkbox, src_radiobox, dialog];

var src_install = function install(app, options) {
  components.map(function (component) {
    var merge = component.extendData;

    if (merge && typeof merge === "function") {
      merge(configOptions[component.componentName]);
    }

    if (component.componentName) {
      app.component(component.componentName, component);
    }
  });
  app.config.globalProperties.Toast = src_toast;
  app.config.globalProperties.Dialog = src_dialog;
  app.config.globalProperties.Indicator = src_indicator;

  app.config.isCustomElement = function (tag) {
    return tag.startsWith("vg-");
  };
};

var config = function config(options) {
  Object.keys(options).forEach(function (attr) {
    configOptions[attr] = options[attr];
  });
};

var Vueggy = {
  install: src_install,
  version: package_0["version"],
  config: config,
  Tools: Tools
};

/* harmony default export */ var src_1 = (Vueggy);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_1);



/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "fea9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global.Promise;


/***/ }),

/***/ "fec2":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjA0Mjk5MTQxODYzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUyNjAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNTEyLjQwODUyNSAwYTczLjE2Mzc1NCA3My4xNjM3NTQgMCAwIDEgNzIuNjUxNzYxIDY0LjYxMzQ3NmwwLjUxMTk5MyA4LjU1MDI3OHYzNjUuNzE2MzdoMzY1Ljc2NzU2OWE3My4xMTI1NTQgNzMuMTEyNTU0IDAgMCAxIDguNTUwMjc4IDE0NS43NjQzMTZsLTguNTUwMjc4IDAuNTExOTkyaC0zNjUuODY5OTY4djM2NS43Njc1N2E3My4xNjM3NTQgNzMuMTYzNzU0IDAgMCAxLTE0NS44MTU1MTUgOC41NTAyNzhsLTAuNTExOTkyLTguNTUwMjc4di0zNjUuNzY3NTdINzMuNDc3MjAyYTczLjExMjU1NCA3My4xMTI1NTQgMCAwIDEtOC41NTAyNzgtMTQ1Ljc2NDMxNWw4LjU1MDI3OC0wLjUxMTk5M2gzNjUuNzY3NTY5VjczLjE2Mzc1NEE3My4xNjM3NTQgNzMuMTYzNzU0IDAgMCAxIDUxMi40MDg1MjUgMHoiIGZpbGw9IiM0QTRBNEEiIHAtaWQ9IjUyNjEiPjwvcGF0aD48L3N2Zz4="

/***/ })

/******/ });
});
//# sourceMappingURL=vueggy.umd.js.map
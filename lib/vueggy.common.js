module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "29ce":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjAxMjgxNDA5NDA1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNjA4IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTUxMiAwYzI4Mi43NjA1MzMgMCA1MTIgMjI5LjIzOTQ2NyA1MTIgNTEyIDAgMjgyLjc2MDUzMy0yMjkuMjM5NDY3IDUxMi01MTIgNTEyLTI4Mi43NjA1MzMgMC01MTItMjI5LjIzOTQ2Ny01MTItNTEyQzAgMjI5LjIzOTQ2NyAyMjkuMjM5NDY3IDAgNTEyIDB6IG0wIDM0LjEzMzMzM0MyNDguMDgxMDY3IDM0LjEzMzMzMyAzNC4xMzMzMzMgMjQ4LjA4MTA2NyAzNC4xMzMzMzMgNTEyczIxMy45NDc3MzMgNDc3Ljg2NjY2NyA0NzcuODY2NjY3IDQ3Ny44NjY2NjcgNDc3Ljg2NjY2Ny0yMTMuOTQ3NzMzIDQ3Ny44NjY2NjctNDc3Ljg2NjY2N1M3NzUuOTE4OTMzIDM0LjEzMzMzMyA1MTIgMzQuMTMzMzMzek0zMTguOTA3NzMzIDMxMS44NDIxMzNMNTEyIDUwNC45MzQ0bDE5My4wOTIyNjctMTkzLjA5MjI2N2ExNy4wNjY2NjcgMTcuMDY2NjY3IDAgMCAxIDIxLjc3NzA2Ni0xLjk3OTczM2wyLjM1NTIgMS45Nzk3MzNhMTcuMDY2NjY3IDE3LjA2NjY2NyAwIDAgMSAwIDI0LjEzMjI2N0w1MzYuMTMyMjY3IDUyOS4wNjY2NjdsMTkzLjA5MjI2NiAxOTMuMDkyMjY2YTE3LjA2NjY2NyAxNy4wNjY2NjcgMCAwIDEtMjQuMTMyMjY2IDI0LjEzMjI2N0w1MTIgNTUzLjE5ODkzM2wtMTkzLjA5MjI2NyAxOTMuMDkyMjY3YTE3LjA2NjY2NyAxNy4wNjY2NjcgMCAwIDEtMjEuNzc3MDY2IDEuOTc5NzMzbC0yLjM1NTItMS45Nzk3MzNhMTcuMDY2NjY3IDE3LjA2NjY2NyAwIDAgMSAwLTI0LjEzMjI2N2wxOTMuMDkyMjY2LTE5My4wOTIyNjYtMTkzLjA5MjI2Ni0xOTMuMDkyMjY3YTE3LjA2NjY2NyAxNy4wNjY2NjcgMCAwIDEgMjQuMTMyMjY2LTI0LjEzMjI2N3oiIGZpbGw9IiM0QTRBNEEiIG9wYWNpdHk9Ii42IiBwLWlkPSIxMDYwOSI+PC9wYXRoPjwvc3ZnPg=="

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
exports.push([module.i, "input,textarea{color:#2a2a2a}input::input-placeholder,textarea::input-placeholder{color:#999}.vg-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:4px;border:1px solid #e4e4e4;box-sizing:border-box;color:inherit;display:block;font-size:16px;height:38px;outline:0;overflow:hidden;position:relative;text-align:center;cursor:pointer}.vg-button.loading{opacity:.5}.vg-button[disabled]{cursor:not-allowed;color:rgba(0,0,0,.25);background:#f5f5f5;border-color:#e4e4e4;text-shadow:none;box-shadow:none}.vg-button-default{color:#656b79;background-color:#f6f8fa}.vg-button-default.vg-button-danger{color:#e71d32;border-color:#e71d32}.vg-button-primary{background-color:#007aff;border-color:#007aff;color:#fff}.vg-button-primary.vg-button-danger{color:#fff;border-color:#e71d32;background-color:#e71d32}.vg-button-dashed{color:#656b79;background-color:#f6f8fa;border:1px dashed #e4e4e4}.vg-button-dashed.vg-button-danger{color:#e71d32;border-color:#e71d32}.vg-button-loading img{-webkit-animation:vg-infinite-rotate .8s linear infinite;animation:vg-infinite-rotate .8s linear infinite;border:0 solid transparent;border-radius:50%;margin-right:5px}@-webkit-keyframes vg-infinite-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes vg-infinite-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.vg-flex{display:flex}.vg-flex-fix-bottom-line:after{content:\"\";flex:auto}.vg-flex-direction-row{flex-direction:row}.vg-flex-direction-row-reverse{flex-direction:row-reverse}.vg-flex-direction-column{flex-direction:column}.vg-flex-direction-column-reverse{flex-direction:column-reverse}.vg-flex-wrap-nowrap{flex-wrap:nowrap}.vg-flex-wrap-wrap{flex-wrap:wrap}.vg-flex-wrap-wrap-reverse{flex-wrap:wrap-reverse}.vg-justify-content-flex-start{justify-content:flex-start}.vg-justify-content-flex-end{justify-content:flex-end}.vg-justify-content-center{justify-content:center}.vg-justify-content-space-between{justify-content:space-between}.vg-justify-content-space-around{justify-content:space-around}.vg-align-items-flex-start{align-items:flex-start}.vg-align-items-flex-end{align-items:flex-end}.vg-align-items-center{align-items:center}.vg-align-items-baseline{align-items:baseline}.vg-align-items-stretch{align-items:stretch}.vg-align-content-flex-start{align-content:flex-start}.vg-align-content-flex-end{align-content:flex-end}.vg-align-content-center{align-content:center}.vg-align-content-space-between{align-content:space-between}.vg-align-content-space-around{align-content:space-around}.vg-align-content-stretch{align-content:stretch}@media print,screen{.vg-xs-col-1{flex:0 1 8.33333%;max-width:8.33333%;width:8.33333%}.vg-xs-col-2{flex:0 1 16.66667%;max-width:16.66667%;width:16.66667%}.vg-xs-col-3{flex:0 1 25%;max-width:25%;width:25%}.vg-xs-col-4{flex:0 1 33.33333%;max-width:33.33333%;width:33.33333%}.vg-xs-col-5{flex:0 1 41.66667%;max-width:41.66667%;width:41.66667%}.vg-xs-col-6{flex:0 1 50%;max-width:50%;width:50%}.vg-xs-col-7{flex:0 1 58.33333%;max-width:58.33333%;width:58.33333%}.vg-xs-col-8{flex:0 1 66.66667%;max-width:66.66667%;width:66.66667%}.vg-xs-col-9{flex:0 1 75%;max-width:75%;width:75%}.vg-xs-col-10{flex:0 1 83.33333%;max-width:83.33333%;width:83.33333%}.vg-xs-col-11{flex:0 1 91.66667%;max-width:91.66667%;width:91.66667%}.vg-xs-col-12{flex:0 1 100%;max-width:100%;width:100%}}@media print,screen and (min-width:768px){.vg-sm-col-1{flex:0 1 8.33333%;max-width:8.33333%;width:8.33333%}.vg-sm-col-2{flex:0 1 16.66667%;max-width:16.66667%;width:16.66667%}.vg-sm-col-3{flex:0 1 25%;max-width:25%;width:25%}.vg-sm-col-4{flex:0 1 33.33333%;max-width:33.33333%;width:33.33333%}.vg-sm-col-5{flex:0 1 41.66667%;max-width:41.66667%;width:41.66667%}.vg-sm-col-6{flex:0 1 50%;max-width:50%;width:50%}.vg-sm-col-7{flex:0 1 58.33333%;max-width:58.33333%;width:58.33333%}.vg-sm-col-8{flex:0 1 66.66667%;max-width:66.66667%;width:66.66667%}.vg-sm-col-9{flex:0 1 75%;max-width:75%;width:75%}.vg-sm-col-10{flex:0 1 83.33333%;max-width:83.33333%;width:83.33333%}.vg-sm-col-11{flex:0 1 91.66667%;max-width:91.66667%;width:91.66667%}.vg-sm-col-12{flex:0 1 100%;max-width:100%;width:100%}}@media print,screen and (min-width:992px){.vg-md-col-1{flex:0 1 8.33333%;max-width:8.33333%;width:8.33333%}.vg-md-col-2{flex:0 1 16.66667%;max-width:16.66667%;width:16.66667%}.vg-md-col-3{flex:0 1 25%;max-width:25%;width:25%}.vg-md-col-4{flex:0 1 33.33333%;max-width:33.33333%;width:33.33333%}.vg-md-col-5{flex:0 1 41.66667%;max-width:41.66667%;width:41.66667%}.vg-md-col-6{flex:0 1 50%;max-width:50%;width:50%}.vg-md-col-7{flex:0 1 58.33333%;max-width:58.33333%;width:58.33333%}.vg-md-col-8{flex:0 1 66.66667%;max-width:66.66667%;width:66.66667%}.vg-md-col-9{flex:0 1 75%;max-width:75%;width:75%}.vg-md-col-10{flex:0 1 83.33333%;max-width:83.33333%;width:83.33333%}.vg-md-col-11{flex:0 1 91.66667%;max-width:91.66667%;width:91.66667%}.vg-md-col-12{flex:0 1 100%;max-width:100%;width:100%}}@media print,screen and (min-width:1200px){.vg-lg-col-1{flex:0 1 8.33333%;max-width:8.33333%;width:8.33333%}.vg-lg-col-2{flex:0 1 16.66667%;max-width:16.66667%;width:16.66667%}.vg-lg-col-3{flex:0 1 25%;max-width:25%;width:25%}.vg-lg-col-4{flex:0 1 33.33333%;max-width:33.33333%;width:33.33333%}.vg-lg-col-5{flex:0 1 41.66667%;max-width:41.66667%;width:41.66667%}.vg-lg-col-6{flex:0 1 50%;max-width:50%;width:50%}.vg-lg-col-7{flex:0 1 58.33333%;max-width:58.33333%;width:58.33333%}.vg-lg-col-8{flex:0 1 66.66667%;max-width:66.66667%;width:66.66667%}.vg-lg-col-9{flex:0 1 75%;max-width:75%;width:75%}.vg-lg-col-10{flex:0 1 83.33333%;max-width:83.33333%;width:83.33333%}.vg-lg-col-11{flex:0 1 91.66667%;max-width:91.66667%;width:91.66667%}.vg-lg-col-12{flex:0 1 100%;max-width:100%;width:100%}}.align-self-auto{align-self:auto}.align-self-flex-start{align-self:flex-start}.align-self-flex-end{align-self:flex-end}.align-self-center{align-self:center}.align-self-baseline{align-self:baseline}.align-self-stretch{align-self:stretch}.vg-toast-container{position:fixed;min-width:20px;max-width:80%;box-sizing:border-box;text-align:center;color:#fff;min-height:35px;z-index:10000;background:rgba(0,0,0,.7);transition:opacity .2s linear;border-radius:5px;padding:10px}.vg-toast-container .toast-text{display:block;text-align:center;font-size:14px}.vg-toast-container.located-at-top{top:50px;left:50%;transform:translate(-50%)}.vg-toast-container.located-at-bottom{bottom:50px;left:50%;transform:translate(-50%)}.vg-toast-container.located-at-middle{top:50%;left:50%;transform:translate(-50%,-50%)}.vg-toast-pop-enter-active,.vg-toast-pop-leave-active{transition:opacity .2s ease}.vg-toast-pop-enter-from,.vg-toast-pop-leave-active,.vg-toast-pop-leave-to{transition:opacity .2s ease;opacity:0}.vg-spin-snake{-webkit-animation:vg-spin-rotate .8s linear infinite;animation:vg-spin-rotate .8s linear infinite;border:4px solid transparent;border-radius:50%}@-webkit-keyframes vg-spin-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes vg-spin-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.vg-spin-rotate-svg img{width:100%;height:auto}.vg-spin-triple-bounce .triple-bounce1,.vg-spin-triple-bounce .triple-bounce2,.vg-spin-triple-bounce .triple-bounce3{background:#ccc;border-radius:100%;display:inline-block;-webkit-animation:vg-triple-bounce 1.4s ease-in-out infinite both;animation:vg-triple-bounce 1.4s ease-in-out infinite both}.vg-spin-triple-bounce .triple-bounce1{-webkit-animation-delay:-.32s;animation-delay:-.32s}.vg-spin-triple-bounce .triple-bounce2{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes vg-triple-bounce{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}@keyframes vg-triple-bounce{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}.v-vgpopup-modal{width:100%;height:100%;background:rgba(0,0,0,.7);position:fixed;z-index:1;top:0;left:0;right:0;bottom:0}.vg-popup{width:100%;max-height:100%;position:fixed;background:#fff;overflow:auto;-webkit-overflow-scrolling:touch;top:50%;left:50%;transform:translate3d(-50%,-50%,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:all .2s ease-out}.vg-popup .vg-popup-closeicon{height:44px;text-align:right}.vg-popup .vg-popup-closeicon.fixed{margin:0;top:8px;right:8px;position:fixed}.vg-popup .vg-popup-closeicon img{width:26px;height:26px;cursor:pointer;margin:10px}.vg-popup-top{top:0;right:auto;bottom:auto;left:50%;transform:translate3d(-50%,0,0)}.vg-popup-right{top:50%;right:0;bottom:auto;left:auto;transform:translate3d(0,-50%,0)}.vg-popup-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translate3d(-50%,0,0)}.vg-popup-left{top:50%;right:auto;bottom:auto;left:0;transform:translate3d(0,-50%,0)}.vg-popup-middle{top:50%;right:auto;bottom:auto;left:50%;opacity:1}.vg-popup-slide-top-enter-active,.vg-popup-slide-top-enter-to,.vg-popup-slide-top-leave-active{transform:translate3d(-50%,-100%,0)}.vg-popup-slide-right-enter-active,.vg-popup-slide-right-enter-to,.vg-popup-slide-right-leave-active{transform:translate3d(100%,-50%,0)}.vg-popup-slide-bottom-enter-active,.vg-popup-slide-bottom-enter-to,.vg-popup-slide-bottom-leave-active{transform:translate3d(-50%,100%,0)}.vg-popup-slide-left-enter,.vg-popup-slide-left-leave-active{transform:translate3d(-100%,-50%,0)}.vg-popup-slide-middle-enter-active,.vg-popup-slide-middle-enter-to,.vg-popup-slide-middle-leave-active{opacity:0;transform:translate3d(-50%,0,0)}i.vg-iconfont-wrap{display:inline-block}i.vg-iconfont-wrap.pointer{cursor:pointer}i.vg-iconfont-wrap.default{cursor:default}i.vg-iconfont-wrap.auto{cursor:auto}i.vg-iconfont-wrap.w-resize{cursor:w-resize}i.vg-iconfont-wrap.text{cursor:text}i.vg-iconfont-wrap.wait{cursor:wait}i.vg-iconfont-wrap.help{cursor:help}i.vg-iconfont-wrap.crosshair{cursor:crosshair}i.vg-iconfont-wrap.move{cursor:move}i.vg-iconfont-wrap.e-resize{cursor:e-resize}i.vg-iconfont-wrap.ne-resize{cursor:ne-resize}i.vg-iconfont-wrap.nw-resize{cursor:nw-resize}i.vg-iconfont-wrap.n-resize{cursor:n-resize}i.vg-iconfont-wrap.se-resize{cursor:se-resize}i.vg-iconfont-wrap.sw-resize{cursor:sw-resize}i.vg-iconfont-wrap.s-resize{cursor:s-resize}.vg-iconfont{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden}.vg-iconfont.vg-iconfont-size-0{font-size:0}.vg-iconfont.vg-iconfont-size-1{font-size:1px}.vg-iconfont.vg-iconfont-size-2{font-size:2px}.vg-iconfont.vg-iconfont-size-3{font-size:3px}.vg-iconfont.vg-iconfont-size-4{font-size:4px}.vg-iconfont.vg-iconfont-size-5{font-size:5px}.vg-iconfont.vg-iconfont-size-6{font-size:6px}.vg-iconfont.vg-iconfont-size-7{font-size:7px}.vg-iconfont.vg-iconfont-size-8{font-size:8px}.vg-iconfont.vg-iconfont-size-9{font-size:9px}.vg-iconfont.vg-iconfont-size-10{font-size:10px}.vg-iconfont.vg-iconfont-size-11{font-size:11px}.vg-iconfont.vg-iconfont-size-12{font-size:12px}.vg-iconfont.vg-iconfont-size-13{font-size:13px}.vg-iconfont.vg-iconfont-size-14{font-size:14px}.vg-iconfont.vg-iconfont-size-15{font-size:15px}.vg-iconfont.vg-iconfont-size-16{font-size:16px}.vg-iconfont.vg-iconfont-size-17{font-size:17px}.vg-iconfont.vg-iconfont-size-18{font-size:18px}.vg-iconfont.vg-iconfont-size-19{font-size:19px}.vg-iconfont.vg-iconfont-size-20{font-size:20px}.vg-iconfont.vg-iconfont-size-21{font-size:21px}.vg-iconfont.vg-iconfont-size-22{font-size:22px}.vg-iconfont.vg-iconfont-size-23{font-size:23px}.vg-iconfont.vg-iconfont-size-24{font-size:24px}.vg-iconfont.vg-iconfont-size-25{font-size:25px}.vg-iconfont.vg-iconfont-size-26{font-size:26px}.vg-iconfont.vg-iconfont-size-27{font-size:27px}.vg-iconfont.vg-iconfont-size-28{font-size:28px}.vg-iconfont.vg-iconfont-size-29{font-size:29px}.vg-iconfont.vg-iconfont-size-30{font-size:30px}.vg-iconfont.vg-iconfont-size-31{font-size:31px}.vg-iconfont.vg-iconfont-size-32{font-size:32px}.vg-iconfont.vg-iconfont-size-33{font-size:33px}.vg-iconfont.vg-iconfont-size-34{font-size:34px}.vg-iconfont.vg-iconfont-size-35{font-size:35px}.vg-iconfont.vg-iconfont-size-36{font-size:36px}.vg-iconfont.vg-iconfont-size-37{font-size:37px}.vg-iconfont.vg-iconfont-size-38{font-size:38px}.vg-iconfont.vg-iconfont-size-39{font-size:39px}.vg-iconfont.vg-iconfont-size-40{font-size:40px}.vg-iconfont.vg-iconfont-size-41{font-size:41px}.vg-iconfont.vg-iconfont-size-42{font-size:42px}.vg-iconfont.vg-iconfont-size-43{font-size:43px}.vg-iconfont.vg-iconfont-size-44{font-size:44px}.vg-iconfont.vg-iconfont-size-45{font-size:45px}.vg-iconfont.vg-iconfont-size-46{font-size:46px}.vg-iconfont.vg-iconfont-size-47{font-size:47px}.vg-iconfont.vg-iconfont-size-48{font-size:48px}.vg-iconfont.vg-iconfont-size-49{font-size:49px}.vg-iconfont.vg-iconfont-size-50{font-size:50px}.vg-iconfont.vg-iconfont-size-51{font-size:51px}.vg-iconfont.vg-iconfont-size-52{font-size:52px}.vg-iconfont.vg-iconfont-size-53{font-size:53px}.vg-iconfont.vg-iconfont-size-54{font-size:54px}.vg-iconfont.vg-iconfont-size-55{font-size:55px}.vg-iconfont.vg-iconfont-size-56{font-size:56px}.vg-iconfont.vg-iconfont-size-57{font-size:57px}.vg-iconfont.vg-iconfont-size-58{font-size:58px}.vg-iconfont.vg-iconfont-size-59{font-size:59px}.vg-iconfont.vg-iconfont-size-60{font-size:60px}.vg-iconfont.vg-iconfont-size-61{font-size:61px}.vg-iconfont.vg-iconfont-size-62{font-size:62px}.vg-iconfont.vg-iconfont-size-63{font-size:63px}.vg-iconfont.vg-iconfont-size-64{font-size:64px}.vg-iconfont.vg-iconfont-size-65{font-size:65px}.vg-iconfont.vg-iconfont-size-66{font-size:66px}.vg-iconfont.vg-iconfont-size-67{font-size:67px}.vg-iconfont.vg-iconfont-size-68{font-size:68px}.vg-iconfont.vg-iconfont-size-69{font-size:69px}.vg-iconfont.vg-iconfont-size-70{font-size:70px}.vg-iconfont.vg-iconfont-size-71{font-size:71px}.vg-iconfont.vg-iconfont-size-72{font-size:72px}.vg-iconfont.vg-iconfont-size-73{font-size:73px}.vg-iconfont.vg-iconfont-size-74{font-size:74px}.vg-iconfont.vg-iconfont-size-75{font-size:75px}.vg-iconfont.vg-iconfont-size-76{font-size:76px}.vg-iconfont.vg-iconfont-size-77{font-size:77px}.vg-iconfont.vg-iconfont-size-78{font-size:78px}.vg-iconfont.vg-iconfont-size-79{font-size:79px}.vg-iconfont.vg-iconfont-size-80{font-size:80px}.vg-iconfont.vg-iconfont-size-81{font-size:81px}.vg-iconfont.vg-iconfont-size-82{font-size:82px}.vg-iconfont.vg-iconfont-size-83{font-size:83px}.vg-iconfont.vg-iconfont-size-84{font-size:84px}.vg-iconfont.vg-iconfont-size-85{font-size:85px}.vg-iconfont.vg-iconfont-size-86{font-size:86px}.vg-iconfont.vg-iconfont-size-87{font-size:87px}.vg-iconfont.vg-iconfont-size-88{font-size:88px}.vg-iconfont.vg-iconfont-size-89{font-size:89px}.vg-iconfont.vg-iconfont-size-90{font-size:90px}.vg-iconfont.vg-iconfont-size-91{font-size:91px}.vg-iconfont.vg-iconfont-size-92{font-size:92px}.vg-iconfont.vg-iconfont-size-93{font-size:93px}.vg-iconfont.vg-iconfont-size-94{font-size:94px}.vg-iconfont.vg-iconfont-size-95{font-size:95px}.vg-iconfont.vg-iconfont-size-96{font-size:96px}.vg-iconfont.vg-iconfont-size-97{font-size:97px}.vg-iconfont.vg-iconfont-size-98{font-size:98px}.vg-iconfont.vg-iconfont-size-99{font-size:99px}.vg-iconfont.vg-iconfont-size-100{font-size:100px}.v-vgdialog-modal{width:100%;height:100%;background:rgba(0,0,0,.7);position:fixed;top:0;left:0;right:0;bottom:0}.vg-dialog{position:fixed;top:50%;left:50%;transform:translate3d(-50%,-50%,0);background-color:#fff;width:85%;border-radius:10px;font-size:16px;-webkit-user-select:none;overflow:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:all .2s ease}.vg-dialog .vg-dialog-title{padding-top:20px;font-weight:500;line-height:24px;text-align:center;color:#2a2a2a}.vg-dialog .vg-dialog-content{padding:20px;overflow-y:auto;font-size:14px;line-height:20px;white-space:pre-wrap;text-align:center;word-wrap:break-word;-webkit-overflow-scrolling:touch;color:#2a2a2a}.vg-dialog .vg-dialog-buttons{display:flex;height:45px}.vg-dialog .vg-dialog-buttons .vg-dialog-cancel-button,.vg-dialog .vg-dialog-buttons .vg-dialog-confirm-button{height:45px;line-height:45px;flex:1;background:#fff;border-radius:0;border-bottom:none}.vg-dialog .vg-dialog-buttons .vg-dialog-cancel-button.vertical-line,.vg-dialog .vg-dialog-buttons .vg-dialog-confirm-button.vertical-line{border-left:none}.vg-dialog .vg-dialog-buttons .vg-dialog-cancel-button{color:#2a2a2a;border-left:none}.vg-dialog .vg-dialog-buttons .vg-dialog-confirm-button{color:#007aff;border-right:none}.vg-dialog-bounce-enter-active{opacity:0;transform:translate3d(-50%,-50%,0) scale(.7)}.vg-dialog-bounce-leave-active{opacity:0;transform:translate3d(-50%,-50%,0) scale(.9)}.vg-sticky-fixed{position:fixed}", ""]);
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

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ VueGgy_VueGgy; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ mixins; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ vue_class_component_esm_bundler_props; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Options; });

// UNUSED EXPORTS: Vue, emits, createDecorator, setup

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("d4ec");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("bee2");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("262e");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 4 modules
var createSuper = __webpack_require__("2caf");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/vue-class-component/dist/vue-class-component.esm-bundler.js
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

var vue_class_component_esm_bundler_VueImpl = /*#__PURE__*/function () {
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

          plainData[key] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(data[key]);
          defineProxy(data, key, plainData);
        }); // Invoke composition functions

        dataKeys.forEach(function (key) {
          if (data[key] && data[key].__s) {
            var setupState = data[key].__s();

            plainData[key] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["proxyRefs"])(setupState);
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


vue_class_component_esm_bundler_VueImpl.__vccHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUnmount', 'unmounted', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch'];
var Vue = vue_class_component_esm_bundler_VueImpl;

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
function vue_class_component_esm_bundler_props(propsOptions) {
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



// CONCATENATED MODULE: ./src/component/VueGgy.ts





/*
* @Author: Just be free
* @Date:   2020-09-23 17:32:46
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-12 16:19:15
* @E-mail: justbefree@126.com
*/
var pkg = __webpack_require__("9224");



var VueGgy_VueGgy = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(VueGgy, _Vue);

  var _super = Object(createSuper["a" /* default */])(VueGgy);

  function VueGgy() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VueGgy);

    _this = _super.apply(this, arguments);
    _this.version = pkg.version;
    return _this;
  } // Toast(options: any): void {}
  // Indicator(): void {}
  // Dialog(): void {}


  Object(createClass["a" /* default */])(VueGgy, [{
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
      var slots = this.$slots.default && typeof this.$slots.default === "function" && this.$slots.default();
      return slots;
    }
  }]);

  return VueGgy;
}(Vue);


VueGgy_VueGgy.componentName = "VueGgy";


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
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("3ca3");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__);






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

module.exports = require("vue");

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

module.exports = JSON.parse("{\"name\":\"vueggy\",\"version\":\"0.4.0\",\"private\":false,\"description\":\"Lightweight Mobile UI Components built on Vue3\",\"author\":\"just be free <justbefree@126.com>\",\"scripts\":{\"build:components\":\"vue-cli-service build --mode production --target lib --name vueggy --dest lib src/index.ts\",\"serve\":\"vue-cli-service serve\",\"build\":\"vue-cli-service build\",\"lint\":\"vue-cli-service lint\"},\"dependencies\":{\"core-js\":\"^3.6.5\",\"vue\":\"^3.0.0-0\",\"vue-class-component\":\"^8.0.0-0\",\"vue-router\":\"^4.0.0-beta.11\"},\"devDependencies\":{\"@typescript-eslint/eslint-plugin\":\"^2.33.0\",\"@typescript-eslint/parser\":\"^2.33.0\",\"@vue/cli-plugin-babel\":\"~4.5.0\",\"@vue/cli-plugin-eslint\":\"~4.5.0\",\"@vue/cli-plugin-typescript\":\"^4.5.6\",\"@vue/cli-service\":\"~4.5.0\",\"@vue/compiler-sfc\":\"^3.0.0-0\",\"@vue/eslint-config-typescript\":\"^5.0.2\",\"babel-eslint\":\"^10.1.0\",\"eslint\":\"^6.7.2\",\"eslint-plugin-vue\":\"^7.0.0-0\",\"mini-css-extract-plugin\":\"^0.11.2\",\"sass\":\"^1.26.11\",\"sass-loader\":\"^10.0.2\",\"typescript\":\"~3.9.3\"},\"main\":\"lib/vueggy.umd.min.js\",\"typings\":\"types/index.d.ts\",\"files\":[\"lib\"],\"eslintConfig\":{\"root\":true,\"env\":{\"node\":true},\"extends\":[\"plugin:vue/vue3-essential\",\"eslint:recommended\",\"@vue/typescript\"],\"parserOptions\":{\"parser\":\"@typescript-eslint/parser\"},\"rules\":{}},\"browserslist\":[\"> 1%\",\"last 2 versions\",\"not dead\"],\"homepage\":\"https://github.com/justbefree/vueggy#readme\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/justbefree/vueggy.git\"},\"bugs\":{\"url\":\"https://github.com/justbefree/vueggy/issues\"}}");

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
/* harmony import */ var _Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d4ec");
/* harmony import */ var _Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bee2");
/* harmony import */ var _Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("262e");
/* harmony import */ var _Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2caf");
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
  Object(_Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Rotate, _mixins);

  var _super = Object(_Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Rotate);

  function Rotate() {
    Object(_Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Rotate);

    return _super.apply(this, arguments);
  }

  Object(_Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Rotate, [{
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
	"./checkbox-checked.svg": "af12",
	"./checkbox-unchecked.svg": "d3e3",
	"./close.svg": "34b5",
	"./loading.svg": "5499",
	"./radiobox-checked.svg": "da40",
	"./radiobox-unchecked.svg": "a246"
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
/* harmony import */ var _Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d4ec");
/* harmony import */ var _Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bee2");
/* harmony import */ var _Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("262e");
/* harmony import */ var _Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2caf");
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
  Object(_Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Snake, _mixins);

  var _super = Object(_Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Snake);

  function Snake() {
    Object(_Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Snake);

    return _super.apply(this, arguments);
  }

  Object(_Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Snake, [{
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

/***/ "f189":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Snake; });
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a9e3");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d4ec");
/* harmony import */ var _Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bee2");
/* harmony import */ var _Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("262e");
/* harmony import */ var _Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2caf");
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
  Object(_Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Snake, _mixins);

  var _super = Object(_Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Snake);

  function Snake() {
    Object(_Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Snake);

    return _super.apply(this, arguments);
  }

  Object(_Users_stronglee_workspace_vue3_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Snake, [{
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

// EXTERNAL MODULE: ./src/component/VueGgy.ts + 1 modules
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
* @Last Modified time: 2020-10-14 16:28:24
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

var getStyle = function getStyle(element, attr) {
  var compStyles = getComputedStyle(element);
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

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("a630");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js







function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js








function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
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
* @Last Modified time: 2020-10-15 10:56:42
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
        var color = getStyle(this.$el.parentNode, "color");
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
/* harmony default export */ var icon = (icon_VgIcon);
// CONCATENATED MODULE: ./src/icon/index.ts
/*
* @Author: Just be free
* @Date:   2020-09-30 16:22:09
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-30 18:02:08
* @E-mail: justbefree@126.com
*/

icon.extendData = icon.extend;
/* harmony default export */ var src_icon = (icon);
// CONCATENATED MODULE: ./src/button/button.ts







/*
* @Author: Just be free
* @Date:   2020-10-12 15:56:53
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-14 16:19:21
* @E-mail: justbefree@126.com
*/




var button_Props = Object(VueGgy["d" /* props */])({
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
    key: "render",
    value: function render() {
      var _this = this;

      var slots = this.getSlots();
      var className = [];

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

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js







function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
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
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("53ca");

// CONCATENATED MODULE: ./src/utils/index.ts







/*
* @Author: Just be free
* @Date:   2020-09-22 16:20:15
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-14 11:21:31
* @E-mail: justbefree@126.com
*/
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
var utils_isPromise = function isPromise(obj) {
  return !!obj && (Object(esm_typeof["a" /* default */])(obj) === "object" || typeof obj === "function") && typeof obj.then === "function";
};
// CONCATENATED MODULE: ./src/flex/flex.ts










/*
* @Author: Just be free
* @Date:   2020-09-22 15:24:40
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-30 11:35:31
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
          if (this.isValidFlexAttributeAndValue(attribute, camelize(value))) {
            className.push("".concat(prefix).concat(hyphenate(attribute), "-").concat(hyphenate(value)));
          }
        }
      }

      return className;
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.translateAttrsToClassName();
      var fix = this.fixBottomLine ? "vg-flex-fix-bottom-line" : "";
      var slots = this.$slots.default && typeof this.$slots.default === "function" && this.$slots.default();
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-flex"].concat(_toConsumableArray(className), [fix])
      }, [slots]);
    }
  }]);

  return VgFlex;
}(Object(VueGgy["c" /* mixins */])(VueGgy["b" /* default */], flex_Props));

flex_VgFlex.componentName = "VgFlex";
flex_VgFlex = __decorate([Object(VueGgy["a" /* Options */])({
  name: "VgFlex"
})], flex_VgFlex);
/* harmony default export */ var flex = (flex_VgFlex);
// CONCATENATED MODULE: ./src/flex/index.ts
/*
* @Author: Just be free
* @Date:   2020-09-22 15:24:33
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-22 15:36:41
* @E-mail: justbefree@126.com
*/

/* harmony default export */ var src_flex = (flex);
// CONCATENATED MODULE: ./src/flex-item/flex-item.ts







/*
* @Author: Just be free
* @Date:   2020-09-22 16:00:52
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-30 11:35:16
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
      return VALIDE_ALIGN_SELF_VALUE.indexOf(camelize(this.alignSelf)) > -1;
    }
  }, {
    key: "render",
    value: function render() {
      var slots = this.$slots.default && typeof this.$slots.default === "function" && this.$slots.default();
      var className = this.isValidAlignSelfValue() ? "align-self-".concat(hyphenate(this.alignSelf)) : "align-self-auto";
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-flex-item", className],
        style: {
          flex: this.flex,
          order: this.order
        }
      }, [slots]);
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
  var computedMessage = message || (isString(options) ? options : "");
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
      var capitalizeName = hyphenate(this.type);
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
* @Last Modified time: 2020-10-15 10:04:06
* @E-mail: justbefree@126.com
*/

/**
references
https://v3.vuejs.org/guide/migration/v-model.html
*/



var VALIDATE_POSITION_VALUE = ["left", "right", "top", "bottom", "middle"];


var idSeed = 1;

var closeIcon = __webpack_require__("29ce"); // const Emits = emits(["update:modelValue", "before-enter", "enter", "after-enter", "before-leave", "leave", "after-leave"]);


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
    value: function removeModal() {}
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
      this.$emit("before-enter");
    }
  }, {
    key: "handleEnter",
    value: function handleEnter() {
      this.$emit("enter");
    }
  }, {
    key: "handleAfterEneter",
    value: function handleAfterEneter() {
      this.$emit("after-enter");
    }
  }, {
    key: "handleBeforeLeave",
    value: function handleBeforeLeave() {
      this.$emit("before-leave");
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

      this.$emit("after-leave");
    }
  }, {
    key: "close",
    value: function close() {
      this.$emit("update:modelValue", false);
    }
  }, {
    key: "createCloseIcon",
    value: function createCloseIcon() {
      var _this3 = this;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
        class: ["vg-popup-closeicon", this.fixed ? "fixed" : ""]
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("img", {
            src: closeIcon,
            onClick: _this3.close
          }, {
            default: function _default() {
              return [];
            }
          })];
        }
      });
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

      var slots = this.$slots.default && typeof this.$slots.default === "function" && this.$slots.default();
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
              return [_this4.createCloseIcon(), slots];
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
  emits: ["update:modelValue", "before-enter", "enter", "after-enter", "before-leave", "leave", "after-leave"],
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
* @Last Modified time: 2020-10-15 10:05:04
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
  beforeOpen: null,
  opened: null,
  beforeClose: null,
  closed: null,
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
      this.beforeOpen && typeof this.beforeOpen === "function" && this.beforeOpen();
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
      this.opened && typeof this.opened === "function" && this.opened();
    }
  }, {
    key: "handleBeforeLeave",
    value: function handleBeforeLeave(node) {
      this.$emit("before-leave", node);
      this.beforeClose && typeof this.beforeClose === "function" && this.beforeClose();
    }
  }, {
    key: "handleAfterLeave",
    value: function handleAfterLeave(node) {
      this.$emit("after-leave", node);
      this.close();
      this.closed && typeof this.closed === "function" && this.closed();
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

      if (beforeClose && typeof beforeClose === "function") {
        var promise = beforeClose(e);

        if (utils_isPromise(promise)) {
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
            class: ["vg-dialog"].concat(_toConsumableArray(className)),
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
// CONCATENATED MODULE: ./src/index.ts






/*
* @Author: Just be free
* @Date:   2020-09-22 15:24:16
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-15 11:10:58
* @E-mail: justbefree@126.com
*/













var configOptions = {};
var components = [src_sticky, src_button, src_flex, src_flex_item, src_spin, src_popup, src_icon, src_checkbox, src_radiobox, dialog];

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
  config: config
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


/***/ })

/******/ });
//# sourceMappingURL=vueggy.common.js.map
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAIcCAYAAAD2RY5JAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAShJREFUeNrs2EkKAkEQBEDHBUVcEBFR3JcZ///B8RMp1iHqAXGqpjK76ft+kJwGCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQ+EewSYPDNDhOg5M0OE2DszQ4T4PLNLhOg5s0uE2DuzS4T4PHNHhKg5c0eEuDjzT4TIPv8mCbBrs0+CkPduXBtvwevsq/5XsavKbBc/mbcih/l+PJIZ5t4ulrlQYX5TN2vAXEe0q8SY3Kt9F4X/aJAQQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAg8JfgV4ABANLCVFQtVP42AAAAAElFTkSuQmCC"

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11).Buffer))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "11d000bd7f6102036f50a2b0d6ff217b.eot";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(19);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAAQCAYAAABnaabpAAAABmJLR0QA/wB+AABtSDmpAAAACXBIWXMAABbqAAAW6gHljkMQAAAAB3RJTUUH3AsbBx0zHBOM9AAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAaTSURBVHjarVxtstowDJSY3ih3eu9McCeulO2Pko4xknZlw8wbGsCOrY/VSlbq9/sdZgb79zpf79dneD6fb9fzb4/jmD8f389p/P/Pr38fx5HNf90/Wtt1fY2/vvuYfxiP6C+4v7r/a3w61szsdf957xj2P/7ep+8j+Z3B/dM1vsaf0drM7JzGf8h5WH+m/2z+avy8fyP6T+V7HEe6t9f9bZb5ND6bG8R+5vWfif5PMj5d+4b+M/l9/Ha4f+b/qewF+1fxI/3Na/yHXw/2W9l3uf7H43HeXl/49G7DNaZrH5x1/MwnEEIwl01j1RemtWBanxf3zV6+sA6b7l/NNcsOyW+dzBvJIZN7JbtozmzdRuSJZG3flDs29ICGvYHsNfMBZZ+ZT0WyQ6JjIzbBriNb8UTXq/7AsALCPiobi+ZAY65w/p+fH78lyJkZGApBMfDpgBOE7zxx6FWH8kSJinFlslPXpjjVDuAgcfgdY//mC8EaVdl3wDEKxtVn0W8qP0GwJ4jy9C/qCInOM3CJ7KQT3COdgchekQUWA2OEE6EubsXGvIgiEa10IfqZKPTKKbwwMHyZ2WVRyReMFESpKBihi4DqAqtk+4UIFJmhsbEg7KQDaBVrqQIGRAasOKQ61gSAZXtjGYKJoOMkSGMBdJTsUQFsJACdkRQ0QNQZAKIhBCdjnSywot1OUsUOC1GZIopIrLIgbDixk/TSCdvopidZwGNpEUjQqgLbjlO7ANgg4AchKJsACL4ACF0QVJgYxEALQYcsCO+y+C6bVTM9hZ2GAfbxeOBWKNs3hNHN9VcYFIhRVIaA5tpBjEcB7NW0fAfQFXbYdWYXazYu2JGTGhhLsVRQyOqD2VoZiEBgyhB10ClvdIKFF2zIm4Gg0kU3oIEEuCojQBMnKizwiAGaSPcVVEZBYVntSymaeoOhYSGd6dajKgaysl+FNSAxoMjJQVICiM6ngiZI4LIvGXwntUcjLe9cM6dGAQ5OwNJIuqraVwb8EBlUloaiAF4T5vdEXtV6swMSD/7SwDMegrCanWJIEAqgHUYGkjJ3U5aVNEZxdqaUVbDrrjc7RYyMAQuA4wTw1Q6CThq3Uj9jAaiyMRSpvDdZnBuvSaNI4UECepXGYsG3ujig2iOr2alliVmeq+WZt+s/QZ/R2w2nPqGZZVx9Vp5s+BqfMrZXn04WFeb7fyhh6LO6euje1jn0KYXReOgzCgU+9CmFexj6xDwZb1XUfT6f117PaJ5g/Nv8U5/TRwo39bl9pAjD/j1a33T/ca14yb9qlbHjONzyPsBr/ynwTveP9B/t/5zGewZ2g/5CGQT2N69/1u05rb9MlQf9h8Ax7D9iRpjsN/OfVAaF/c/yDxl9YD9v803yj/ynBK7p/rN8o/2/+fmgv9DObk1GodRnQKLW6gsk9a4OMVyMVOxzkIIxi2CZI6JRzGXyUJijCylWFr3RqHc6qZWq6Z/aIsQYbJXGd5ioupadjgEQBl0dICKwUaWdR23VUg+znMiwe8gJ4yft6LDZm7gJphxbMJAqdVopdKrN0J3DipV0m6UtkUKV/qnVeiVMb11RU2IsfgahHKJ8x+5ZNaGbxQcEagq1crrb7U9VDxhA0mjWcO/iWkDGRbV19eS5Akpf8DlG4FIAXD1JVAvPJjAcpdZWAZFyeNJ5ukEpAnfBw8SirxpI2Cm4B+xtt/aotKR0esrceIHeN21UPclncmatW6uBgTWCV4cWjFTsZl+djgMntpj18jEAzQIZOyvIbN9/f3/f2mDYKSH7jqU7O+yiMm4IzqQ8ZuQC88hSVhUk2KNtIEaGBlh5krZ2ewaVBmQUKfpKO1CnEdgXbKYbGHdsV2VZ3rSdDhH55sMBSpeAki0p/tYF5w6btvv97jcBXFYYgdteK0vniQwXlBzVf7L1ugAGSjc6iHMrzFNh3oqBdPsTXZB91H4AoRbVDQxKhuELDmsbQLEKJqx9DLbW3tVlmF3fUx+KUGxZzcA8YY6VfanZhJkZMga4kqqqvXIQqK8VgFO10IAoOiriohG9VGUxA1+pvUFkAEqLEUiqbKJxu1h+yAxSYTtKPxpj8r7p2Ct1WCWl7vpa5uzq/N21dJhm96CjW/ev/kchhcmndnQjynYhwrrIflgfmAt1F5ZCqukV6+liLDZq+1GfsNh5+qM6yfPiXW207QbCqglW7dFb/Z9llH5UpaSxkpJB1M1OOq2UlNRDINu8LzbAU02f1a6EilF7Yx1uZvYXV8OgnYxK3JEAAAAASUVORK5CYII="

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(428);


/***/ },

/***/ 421:
/***/ function(module, exports) {

	module.exports = __webpack_require__(18);

/***/ },

/***/ 422:
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(421) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "button",
	    name: "Button",
	    category: "web",
	    description: "The Button widget displays styled buttons.",
	    depends: [ "core" ]
	};

	(function ($, undefined) {
	    var kendo = window.kendo,
	        Widget = kendo.ui.Widget,
	        proxy = $.proxy,
	        keys = kendo.keys,
	        CLICK = "click",
	        KBUTTON = "k-button",
	        KBUTTONICON = "k-button-icon",
	        KBUTTONICONTEXT = "k-button-icontext",
	        NS = ".kendoButton",
	        DISABLED = "disabled",
	        DISABLEDSTATE = "k-state-disabled",
	        FOCUSEDSTATE = "k-state-focused",
	        SELECTEDSTATE = "k-state-selected";

	    var Button = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);

	            element = that.wrapper = that.element;
	            options = that.options;

	            element.addClass(KBUTTON).attr("role", "button");

	            options.enable = options.enable && !element.attr(DISABLED);
	            that.enable(options.enable);

	            that._tabindex();

	            that._graphics();

	            element
	                .on(CLICK + NS, proxy(that._click, that))
	                .on("focus" + NS, proxy(that._focus, that))
	                .on("blur" + NS, proxy(that._blur, that))
	                .on("keydown" + NS, proxy(that._keydown, that))
	                .on("keyup" + NS, proxy(that._keyup, that));

	            kendo.notify(that);
	        },

	        destroy: function() {
	            var that = this;

	            that.wrapper.off(NS);

	            Widget.fn.destroy.call(that);
	        },

	        events: [
	            CLICK
	        ],

	        options: {
	            name: "Button",
	            icon: "",
	            spriteCssClass: "",
	            imageUrl: "",
	            enable: true
	        },

	        _isNativeButton: function() {
	            return this.element.prop("tagName").toLowerCase() == "button";
	        },

	        _click: function(e) {
	            if (this.options.enable) {
	                if (this.trigger(CLICK, { event: e })) {
	                    e.preventDefault();
	                }
	            }
	        },

	        _focus: function() {
	            if (this.options.enable) {
	                this.element.addClass(FOCUSEDSTATE);
	            }
	        },

	        _blur: function() {
	            this.element.removeClass(FOCUSEDSTATE);
	        },

	        _keydown: function(e) {
	            var that = this;
	            if (!that._isNativeButton()) {
	                if (e.keyCode == keys.ENTER || e.keyCode == keys.SPACEBAR) {
	                    if (e.keyCode == keys.SPACEBAR) {
	                        e.preventDefault();
	                        if (that.options.enable) {
	                            that.element.addClass(SELECTEDSTATE);
	                        }
	                    }
	                    that._click(e);
	                }
	            }
	        },

	        _keyup: function() {
	            this.element.removeClass(SELECTEDSTATE);
	        },

	        _graphics: function() {
	            var that = this,
	                element = that.element,
	                options = that.options,
	                icon = options.icon,
	                spriteCssClass = options.spriteCssClass,
	                imageUrl = options.imageUrl,
	                span, img, isEmpty;

	            if (spriteCssClass || imageUrl || icon) {
	                isEmpty = true;

	                element.contents().filter(function() {
	                    return (!$(this).hasClass("k-sprite") && !$(this).hasClass("k-icon") && !$(this).hasClass("k-image"));
	                }).each(function(idx, el){
	                    if (el.nodeType == 1 || el.nodeType == 3 && $.trim(el.nodeValue).length > 0) {
	                        isEmpty = false;
	                    }
	                });

	                if (isEmpty) {
	                    element.addClass(KBUTTONICON);
	                } else {
	                    element.addClass(KBUTTONICONTEXT);
	                }
	            }

	            if (icon) {
	                span = element.children("span.k-icon").first();
	                if (!span[0]) {
	                    span = $('<span class="k-icon"></span>').prependTo(element);
	                }
	                span.addClass("k-i-" + icon);
	            } else if (spriteCssClass) {
	                span = element.children("span.k-sprite").first();
	                if (!span[0]) {
	                    span = $('<span class="k-sprite"></span>').prependTo(element);
	                }
	                span.addClass(spriteCssClass);
	            } else if (imageUrl) {
	                img = element.children("img.k-image").first();
	                if (!img[0]) {
	                    img = $('<img alt="icon" class="k-image" />').prependTo(element);
	                }
	                img.attr("src", imageUrl);
	            }
	        },

	        enable: function(enable) {
	            var that = this,
	                element = that.element;

	            if (enable === undefined) {
	                enable = true;
	            }

	            enable = !!enable;
	            that.options.enable = enable;
	            element.toggleClass(DISABLEDSTATE, !enable)
	                   .attr("aria-disabled", !enable)
	                   .attr(DISABLED, !enable);
	            // prevent 'Unspecified error' in IE when inside iframe
	            try {
	                element.blur();
	            } catch (err) {
	            }
	        }
	    });

	    kendo.ui.plugin(Button);

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(422));


/***/ }

/******/ });

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js!./kendo.common.core.css", function() {
			var newContent = require("!!../../../css-loader/index.js!./kendo.common.core.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js!./kendo.default.css", function() {
			var newContent = require("!!../../../css-loader/index.js!./kendo.default.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, $) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        getMe: function () {
            return $.get('/api');
        },
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(10)
var ieee754 = __webpack_require__(16)
var isArray = __webpack_require__(17)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "/*!\n * Copyright 2017 Telerik AD\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Kendo base CSS */\n.fake {\n  color: red;\n}\n.k-common-test-class {\n  opacity: 0;\n}\n.k-reset {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  text-decoration: none;\n  font-size: 100%;\n  list-style: none;\n}\n.k-floatwrap:after,\n.k-slider-items:after,\n.k-grid-toolbar:after {\n  content: \"\";\n  display: block;\n  clear: both;\n  visibility: hidden;\n  height: 0;\n  overflow: hidden;\n}\n.k-floatwrap,\n.k-slider-items,\n.k-grid-toolbar {\n  display: inline-block;\n}\n.k-floatwrap,\n.k-slider-items,\n.k-grid-toolbar {\n  display: block;\n}\n/* main gradient */\n.k-block,\n.k-button,\n.k-header,\n.k-grid-header,\n.k-toolbar,\n.k-grouping-header,\n.k-tooltip,\n.k-pager-wrap,\n.k-tabstrip-items .k-item,\n.k-link.k-state-hover,\n.k-textbox,\n.k-textbox:hover,\n.k-autocomplete,\n.k-dropdown-wrap,\n.k-picker-wrap,\n.k-numeric-wrap,\n.k-autocomplete.k-state-hover,\n.k-dropdown-wrap.k-state-hover,\n.k-picker-wrap.k-state-hover,\n.k-numeric-wrap.k-state-hover,\n.k-draghandle {\n  background-repeat: repeat;\n  background-position: 0 center;\n}\n.k-link:hover {\n  text-decoration: none;\n}\n.k-state-highlight > .k-link {\n  color: inherit;\n}\n/* widget */\n.k-textbox > input,\n.k-input[type=\"text\"],\n.k-input[type=\"number\"],\n.k-textbox,\n.k-picker-wrap .k-input,\n.k-button {\n  font-size: 100%;\n  font-family: inherit;\n  border-style: solid;\n  border-width: 1px;\n  -webkit-appearance: none;\n}\n.k-widget,\n.k-block,\n.k-inline-block,\n.k-draghandle {\n  border-style: solid;\n  border-width: 1px;\n  -webkit-appearance: none;\n}\n.k-block,\n.k-widget {\n  line-height: normal;\n  outline: 0;\n}\n.k-widget .k-input::-ms-clear,\n.k-list-filter ::-ms-clear {\n  width: 0;\n  height: 0;\n}\n/* Block */\n.k-block {\n  padding: 2px;\n}\n/* button */\n.k-button,\n.k-button-bare {\n  display: inline-block;\n  margin: 0;\n  padding: 0.2em 0.7em;\n  font-family: inherit;\n  line-height: 1.72em;\n  text-align: center;\n  cursor: pointer;\n  text-decoration: none;\n}\n.k-button[disabled],\n.k-button.k-state-disabled,\n.k-state-disabled .k-button,\n.k-state-disabled .k-button:hover,\n.k-button.k-state-disabled:hover,\n.k-state-disabled .k-button:active,\n.k-button.k-state-disabled:active,\n.k-button-bare[disabled],\n.k-button-bare.k-state-disabled,\n.k-state-disabled .k-button-bare,\n.k-state-disabled .k-button-bare:hover,\n.k-button-bare.k-state-disabled:hover,\n.k-state-disabled .k-button-bare:active,\n.k-button-bare.k-state-disabled:active {\n  cursor: default;\n}\na.k-button,\na.k-button-bare {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-decoration: none;\n}\n/* Override the important default line-height in Firefox 4+ */\n.k-ff input.k-button {\n  padding-bottom: 0.37em;\n  padding-top: 0.37em;\n}\nbutton.k-button::-moz-focus-inner,\ninput.k-button::-moz-focus-inner,\n.button.k-button-bare::-moz-focus-inner,\ninput.k-button-bare::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\na.k-button-expand {\n  display: block;\n}\nbutton.k-button-expand,\ninput[type=\"submit\"].k-button-expand,\ninput[type=\"button\"].k-button-expand,\ninput[type=\"reset\"].k-button-expand {\n  width: 100%;\n}\nbody .k-button-icon,\nbody .k-split-button-arrow {\n  padding-left: .4em;\n  padding-right: .4em;\n}\n.k-button-icontext {\n  overflow: visible;\n  /*IE9*/\n}\n.k-toolbar .k-button-icontext {\n  padding-right: .8em;\n}\n.k-button-icontext .k-icon,\n.k-button-icontext .k-image,\n.k-button-icontext .k-sprite {\n  margin-right: 3px;\n  margin-right: .3rem;\n  margin-left: -3px;\n  margin-left: -0.3rem;\n}\n.k-button.k-button-icontext .k-icon,\n.k-button.k-button-icontext .k-image {\n  vertical-align: text-top;\n}\nhtml body .k-button-bare {\n  background: none !important;\n  /*spares long selectors*/\n  color: inherit;\n  border-width: 0;\n  opacity: 0.7;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\nhtml body .k-button-bare,\nhtml body .k-button-bare:hover,\nhtml body .k-button-bare.k-state-hover,\nhtml body .k-button-bare:active,\nhtml body .k-button-bare.k-state-active,\nhtml body .k-button-bare.k-state-active:hover {\n  color: inherit;\n}\nhtml body .k-button-bare:focus,\nhtml body .k-button-bare .k-state-focused {\n  background: none;\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n  border-color: transparent;\n  opacity: 0.8;\n}\nhtml body .k-button-bare:hover,\nhtml body .k-button-bare.k-state-hover,\nhtml body .k-button-bare:active,\nhtml body .k-button-bare.k-state-active {\n  opacity: 1;\n}\nhtml body .k-button-bare.k-upload-button:hover {\n  color: inherit;\n}\n/* link */\n.k-link {\n  cursor: pointer;\n  outline: 0;\n  text-decoration: none;\n}\n.k-grid-header span.k-link {\n  cursor: default;\n}\n/* states */\n.k-state-disabled,\n.k-state-disabled .k-link,\n.k-state-disabled .k-icon,\n.k-state-disabled .k-button,\n.k-state-disabled .k-draghandle,\n.k-state-disabled .k-upload-button input {\n  cursor: default !important;\n  outline: 0;\n}\n@media print {\n  .k-state-disabled,\n  .k-state-disabled .k-input {\n    opacity: 1 !important;\n  }\n}\n.k-state-error {\n  border-style: ridge;\n}\n.k-state-empty {\n  font-style: italic;\n}\n/* icons */\n.k-button-bare .k-icon,\n.k-button-bare .k-font-icon {\n  overflow: visible;\n}\n.k-button-bare.k-state-focused .k-font-icon,\n.k-button-bare:focus .k-font-icon {\n  text-shadow: 0 0 3px currentColor;\n}\n.k-icon.k-i-none {\n  background-image: none !important;\n  /* should never be a background on these */\n}\n/* In IE7 vertical align: middle can't be overridden */\n.k-ie8 .k-icon,\n.k-ie8 .k-sprite,\n.k-ie8 .k-tool-icon {\n  vertical-align: middle;\n}\n.k-file > .k-icon {\n  background-position: -115px -91px;\n}\n.k-image {\n  border: 0;\n}\n/* Colors */\nhtml .k-success-colored {\n  color: #507f50;\n  border-color: #d0dfd0;\n  background-color: #f0fff0;\n}\nhtml .k-info-colored {\n  color: #50607f;\n  border-color: #d0d9df;\n  background-color: #f0f9ff;\n}\nhtml .k-error-colored {\n  color: #7f5050;\n  border-color: #dfd0d0;\n  background-color: #fff0f0;\n}\n.k-inline-block {\n  padding: 0 2px;\n}\n/* loading */\n.k-loading,\n.k-loading-image {\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n.k-icon.k-i-loading {\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n.k-icon.k-i-loading::before {\n  content: \"\";\n  display: none;\n}\n.k-loading-mask,\n.k-loading-image,\n.k-loading-text {\n  position: absolute;\n}\n.k-loading-mask {\n  z-index: 100;\n}\n.k-loading-mask .k-loading-progress {\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.k-loading-text {\n  text-indent: -4000px;\n  text-align: center;\n  /*rtl*/\n}\n.k-loading-image,\n.k-loading-color {\n  width: 100%;\n  height: 100%;\n}\n.k-loading-image {\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n.k-loading-color {\n  filter: alpha(opacity=30);\n  opacity: .3;\n}\n.k-content-frame {\n  border: 0;\n  width: 100%;\n  height: 100%;\n}\n.k-pane > .k-splitter-overlay {\n  filter: alpha(opacity=0);\n  opacity: 0;\n  position: absolute;\n}\n/* drag n drop */\n.k-drag-clue {\n  position: absolute;\n  z-index: 10003;\n  border-style: solid;\n  border-width: 1px;\n  font-size: .9em;\n  padding: .2em .4em;\n  white-space: nowrap;\n  cursor: default;\n}\n.k-drag-status {\n  margin-top: -3px;\n  margin-right: 4px;\n  vertical-align: middle;\n}\n.k-reorder-cue {\n  position: absolute;\n  width: 1px;\n  overflow: visible;\n}\n.k-reorder-cue .k-icon {\n  position: absolute;\n  left: -4px;\n  width: 8px;\n  height: 4px;\n}\n.k-reorder-cue .k-i-arrow-60-down {\n  top: -4px;\n  background-position: -4px -166px;\n}\n.k-reorder-cue .k-i-arrow-60-up {\n  bottom: -4px;\n  background-position: -4px -134px;\n}\n/* virtual scrollbar */\n.k-scrollbar {\n  position: absolute;\n  overflow: scroll;\n}\n.k-scrollbar-vertical {\n  top: 0;\n  right: 0;\n  width: 17px;\n  /* scrollbar width */\n  height: 100%;\n  overflow-x: hidden;\n}\n.k-touch-scrollbar {\n  display: none;\n  position: absolute;\n  z-index: 200000;\n  height: 8px;\n  width: 8px;\n  border: 1px solid #8a8a8a;\n  background-color: #858585;\n}\n@media only screen and (-webkit-min-device-pixel-ratio: 2) {\n  body .k-touch-scrollbar {\n    height: 12px;\n    width: 12px;\n    border-radius: 7px;\n  }\n}\n.k-virtual-scrollable-wrap {\n  overflow-x: auto;\n  /*needed by IE8*/\n}\n/* current time indicator */\n.k-current-time {\n  background: #f00;\n  position: absolute;\n}\n.k-current-time-arrow-down {\n  width: 0;\n  height: 0;\n  background: transparent;\n  border-bottom: 4px solid  transparent;\n  border-top: 4px solid #f00;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n}\n.k-current-time-arrow-left {\n  width: 0;\n  height: 0;\n  background: transparent;\n  border-bottom: 4px solid  transparent;\n  border-top: 4px solid transparent;\n  border-left: 4px solid transparent;\n  border-right: 4px solid #f00;\n}\n.k-current-time-arrow-right {\n  width: 0;\n  height: 0;\n  background: transparent;\n  border-bottom: 4px solid  transparent;\n  border-top: 4px solid transparent;\n  border-left: 4px solid #f00;\n  border-right: 4px solid transparent;\n}\n/* override box sizing for grid layout framework integration (Bootstrap 3, Foundation 4) */\n.k-animation-container,\n.k-widget,\n.k-widget *,\n.k-animation-container *,\n.k-widget *:before,\n.k-animation-container *:after,\n.k-block .k-header,\n.k-list-container {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n}\n.k-button,\n.k-button-bare,\n.k-textbox,\n.k-autocomplete,\ndiv.k-window-content,\n.k-tabstrip > .k-content > .km-scroll-container,\n.k-block,\n.k-edit-cell .k-widget,\n.k-grid-edit-row .k-widget,\n.k-grid-edit-row .text-box,\n.km-actionsheet > li,\n.km-shim {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n/* Fix for Bootstrap 3 */\n.input-group .form-control {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.form-control.k-widget {\n  padding: 0;\n}\na.k-button:hover,\na.k-button-bare:hover {\n  text-decoration: none;\n}\n/* override iOS styles in mobile Kendo */\n.km-widget,\n.km-widget * {\n  -webkit-background-clip: border-box;\n  background-clip: border-box;\n}\ninput.k-checkbox,\n.k-radio {\n  display: inline;\n  opacity: 0;\n  width: 0;\n  margin: 0;\n  -webkit-appearance: none;\n  overflow: hidden;\n}\n.k-ff input.k-checkbox,\n.k-ff .k-radio {\n  position: absolute;\n}\n.k-checkbox-label,\n.k-radio-label {\n  display: inline-block;\n  position: relative;\n  padding-left: 18px;\n  vertical-align: text-top;\n  line-height: 16px;\n  cursor: pointer;\n  border-style: solid;\n  border-width: 0;\n}\n.k-checkbox-label:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-width: 1px;\n  border-style: solid;\n  width: 14px;\n  height: 14px;\n  font-size: 14px;\n  line-height: 14px;\n  text-align: center;\n}\n.k-checkbox:indeterminate + .k-checkbox-label:after {\n  content: \"\";\n  position: absolute;\n  left: 8px;\n  top: 8px;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n  border-width: 1px;\n  border-style: solid;\n  width: 8px;\n  height: 8px;\n  font-size: 14px;\n  text-align: center;\n  content: \" \";\n}\n.k-checkbox:checked + .k-checkbox-label:before {\n  content: \"\\2713\";\n}\n.k-checkbox:disabled + .k-checkbox-label {\n  cursor: auto;\n}\n.k-radio-label:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 14px;\n  height: 14px;\n  border-style: solid;\n}\n.k-radio:checked + .k-radio-label:after {\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n}\n.k-radio:disabled + .k-radio-label {\n  cursor: auto;\n}\n.k-ie8 input.k-checkbox,\n.k-ie8 .k-radio {\n  display: inline-block;\n  width: auto;\n}\n.k-ie8 .k-checkbox-label,\n.k-ie8 .k-radio-label {\n  padding-left: 0;\n}\n.k-ie8 .k-checkbox-label:before,\n.k-ie8 .k-radio-label:before,\n.k-ie8 .k-radio-label:after {\n  display: none;\n}\n/* RTL for checkboxes and radio buttons */\n.k-rtl .k-checkbox-label,\n.k-rtl .k-radio-label {\n  padding-right: 1.5em;\n}\n.k-rtl .k-checkbox-label:before,\n.k-rtl .k-radio-label:before {\n  right: 0;\n}\n.k-rtl .k-radio:checked + .k-radio-label:after {\n  right: 3px;\n}\ninput.k-checkbox + label {\n  -webkit-user-select: none;\n}\n/* Off-screen container used during export */\n.k-pdf-export-shadow {\n  position: absolute;\n  overflow: hidden;\n  left: -15000px;\n  width: 14400px;\n}\n.km-native-scroller {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-touch-action: pan-x pan-y;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  -ms-scroll-snap-type: proximity;\n}\n/* Font Icons */\n.k-icon,\n.k-font-icon,\n.k-font-icon.k-icon,\n.k-font-icon.k-tool-icon {\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  vertical-align: middle;\n  background-image: none;\n  font: 16px/1 'WebComponentsIcons';\n  speak: none;\n  font-variant: normal;\n  text-transform: none;\n  text-indent: 0;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  overflow: visible;\n}\n.k-icon:before,\n.k-font-icon:before {\n  width: 1em;\n  height: 1em;\n  display: inline-block;\n}\n.k-icon,\n.k-tool-icon,\n.k-i-drag-and-drop,\n.k-column-menu .k-sprite,\n.k-grid-mobile .k-resize-handle-inner:before,\n.k-grid-mobile .k-resize-handle-inner:after,\n.k-pager-numbers .k-current-page .k-link:after,\n.k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view > .k-link:after,\n.k-gantt-views > .k-current-view > .k-link:after {\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  vertical-align: middle;\n  background-image: none;\n  font: 16px/1 'WebComponentsIcons';\n  speak: none;\n  font-variant: normal;\n  text-transform: none;\n  text-indent: 0;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.k-icon:before {\n  width: initial;\n  height: initial;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  height: 1em;\n  line-height: 1;\n}\n.k-button.k-button-icon .k-icon,\n.k-grid-filter .k-icon,\n.k-header .k-icon {\n  text-indent: -99999px;\n}\n.k-button.k-button-icon .k-icon:before,\n.k-grid-filter .k-icon:before,\n.k-header .k-icon:before {\n  text-indent: 0;\n}\n/* Sprite icons */\n.k-sprite {\n  width: 16px;\n  height: 16px;\n  font-size: 0;\n  line-height: 0;\n  text-align: center;\n  background-repeat: no-repeat;\n  background-color: transparent;\n  display: inline-block;\n  overflow: hidden;\n  -ms-high-contrast-adjust: none;\n}\n/* responsive panel */\n.k-rpanel-left {\n  -webkit-transform: translateX(-100%) translateZ(0);\n  -ms-transform: translateX(-100%) translateZ(0);\n  transform: translateX(-100%) translateZ(0);\n  left: 0;\n}\n.k-rpanel-right {\n  -webkit-transform: translateX(100%) translateZ(0);\n  -ms-transform: translateX(100%) translateZ(0);\n  transform: translateX(100%) translateZ(0);\n  right: 0;\n}\n.k-rpanel-left,\n.k-rpanel-right {\n  position: fixed;\n  display: block;\n  overflow: auto;\n  min-width: 320px;\n  height: 100%;\n  top: 0;\n}\n.k-rpanel-left.k-rpanel-expanded,\n.k-rpanel-right.k-rpanel-expanded {\n  -webkit-transform: translateX(0) translateZ(0);\n  -ms-transform: translateX(0) translateZ(0);\n  transform: translateX(0) translateZ(0);\n}\n.k-rpanel-left + *,\n.k-rpanel-right + * {\n  overflow: auto;\n}\n.k-ie9 .k-rpanel-left {\n  left: -100%;\n}\n.k-ie9 .k-rpanel-left.k-rpanel-expanded {\n  left: 0;\n}\n.k-rpanel-top {\n  position: static;\n  max-height: 0;\n}\n.k-rpanel-top.k-rpanel-expanded {\n  max-height: 568px;\n  overflow: visible !important;\n}\n.k-edit-form {\n  margin: 0;\n  padding: 0;\n}\n.k-window > div.k-popup-edit-form {\n  padding: 1em 0;\n}\n.k-grid-edit-row .k-edit-form td {\n  border-bottom-width: 0;\n}\n.k-edit-form-container {\n  position: relative;\n  width: 400px;\n}\n.k-edit-label,\n.k-edit-form-container .editor-label {\n  float: left;\n  clear: both;\n  width: 30%;\n  padding: .4em 0 1em;\n  margin-left: 2%;\n  text-align: right;\n}\n.k-edit-field,\n.k-edit-form-container .editor-field {\n  float: right;\n  clear: right;\n  width: 60%;\n  margin-right: 2%;\n  padding: 0 0 .6em;\n}\n.k-edit-field > input[type=\"checkbox\"],\n.k-edit-field > input[type=\"radio\"] {\n  margin-top: .4em;\n}\n.k-edit-form-container .k-button {\n  margin: 0 .16em;\n}\n.k-edit-field > input[type=\"checkbox\"]:first-child,\n.k-edit-field > input[type=\"radio\"]:first-child,\n.k-edit-field > label:first-child > input[type=\"checkbox\"],\n.k-edit-field > .k-button:first-child {\n  margin-left: 0;\n}\n.k-edit-form-container .k-edit-buttons {\n  clear: both;\n  text-align: right;\n  border-width: 1px 0 0;\n  border-style: solid;\n  position: relative;\n  bottom: -1em;\n  padding: .6em;\n}\n/* Window */\ndiv.k-window {\n  display: inline-block;\n  position: absolute;\n  z-index: 10001;\n  border-style: solid;\n  border-width: 1px;\n  padding-top: 2em;\n}\n.k-block > .k-header,\n.k-window-titlebar {\n  position: absolute;\n  width: 100%;\n  height: 1.1em;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  margin-top: -2em;\n  padding: .4em 0;\n  font-size: 1.2em;\n  white-space: nowrap;\n  min-height: 16px;\n  /* icon size */\n}\n.k-block > .k-header {\n  position: relative;\n  margin: -2px 0 10px -2px;\n  padding: .3em 2px;\n}\n.k-window-title {\n  position: absolute;\n  left: .44em;\n  right: .44em;\n  overflow: hidden;\n  cursor: default;\n  text-overflow: ellipsis;\n}\n.k-window-title .k-image {\n  margin: 0 5px 0 0;\n  vertical-align: middle;\n}\ndiv.k-window-titleless {\n  padding-top: 0;\n}\ndiv.k-window-content {\n  position: relative;\n  height: 100%;\n  padding: .58em;\n  overflow: auto;\n  outline: 0;\n}\ndiv.k-window-iframecontent {\n  padding: 0;\n  overflow: visible;\n}\n.k-window-content > .km-scroll-container {\n  height: 100%;\n}\n.k-window-titlebar .k-window-actions {\n  position: absolute;\n  top: 0;\n  right: .3em;\n  padding-top: .3em;\n  white-space: nowrap;\n}\n.k-window-titlebar .k-window-action {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  padding: 2px;\n  text-decoration: none;\n  vertical-align: middle;\n  opacity: .7;\n}\n.k-window-titlebar .k-state-hover {\n  border-style: solid;\n  border-width: 1px;\n  padding: 1px;\n  opacity: 1;\n}\n.k-window-action .k-icon {\n  margin: 0;\n  vertical-align: top;\n}\n.k-window > .k-resize-handle {\n  position: absolute;\n  z-index: 1;\n  background-color: #fff;\n  font-size: 0;\n  line-height: 6px;\n  filter: alpha(opacity=0);\n  opacity: 0;\n  zoom: 1;\n}\n.k-resize-n {\n  top: -3px;\n  left: 0;\n  width: 100%;\n  height: 6px;\n  cursor: n-resize;\n}\n.k-resize-e {\n  top: 0;\n  right: -3px;\n  width: 6px;\n  height: 100%;\n  cursor: e-resize;\n}\n.k-resize-s {\n  bottom: -3px;\n  left: 0;\n  width: 100%;\n  height: 6px;\n  cursor: s-resize;\n}\n.k-resize-w {\n  top: 0;\n  left: -3px;\n  width: 6px;\n  height: 100%;\n  cursor: w-resize;\n}\n.k-resize-se {\n  bottom: -3px;\n  right: -3px;\n  width: 6px;\n  height: 6px;\n  cursor: se-resize;\n}\n.k-resize-sw {\n  bottom: -3px;\n  left: -3px;\n  width: 6px;\n  height: 6px;\n  cursor: sw-resize;\n}\n.k-resize-ne {\n  top: -3px;\n  right: -3px;\n  width: 6px;\n  height: 6px;\n  cursor: ne-resize;\n}\n.k-resize-nw {\n  top: -3px;\n  left: -3px;\n  width: 6px;\n  height: 6px;\n  cursor: nw-resize;\n}\n.k-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10001;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.k-window .k-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n.k-action-buttons {\n  clear: both;\n  text-align: right;\n  border-width: 1px 0 0;\n  border-style: solid;\n  position: relative;\n  bottom: -1em;\n  padding: .6em;\n  margin: 0 -1em;\n}\n.k-action-buttons .k-button {\n  display: inline-block;\n  margin: 0 0 0 6px;\n  min-width: 75px;\n}\n/* TabStrip */\n.k-tabstrip {\n  margin: 0;\n  padding: 0;\n  zoom: 1;\n  position: relative;\n}\n.k-tabstrip-items {\n  padding: 0.3em 0.3em 0;\n}\n.k-tabstrip-scrollable .k-tabstrip-items {\n  white-space: nowrap;\n  overflow: hidden;\n}\n.k-tabstrip > .k-button {\n  position: absolute;\n  top: .4em;\n  z-index: 2;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.k-tabstrip-bottom > .k-button {\n  top: auto;\n  bottom: .4em;\n}\n.k-tabstrip-prev {\n  left: .4em;\n}\n.k-tabstrip-next {\n  right: .4em;\n}\n.k-tabstrip-items .k-item,\n.k-panelbar .k-tabstrip-items .k-item {\n  list-style-type: none;\n  display: inline-block;\n  position: relative;\n  border-style: solid;\n  border-width: 1px 1px 0;\n  margin: 0 -1px 0 0;\n  padding: 0;\n  vertical-align: top;\n}\n.k-tabstrip-items .k-tab-on-top,\n.k-tabstrip-items .k-state-active,\n.k-panelbar .k-tabstrip-items .k-state-active {\n  margin-bottom: -1px;\n  padding-bottom: 1px;\n}\n.k-tabstrip-top .k-tabstrip-items .k-state-active,\n.k-panelbar .k-tabstrip-top .k-tabstrip-items .k-state-active {\n  border-bottom-width: 1px;\n  margin-bottom: -2px;\n  padding-bottom: 0px;\n}\n.k-tabstrip-items .k-tab-on-top {\n  z-index: 1;\n}\n.k-tabstrip-items .k-link,\n.k-panelbar .k-tabstrip-items .k-link {\n  display: inline-block;\n  border-bottom-width: 0;\n  padding: .5em .92em;\n}\n.k-tabstrip-items .k-icon,\n.k-panelbar .k-tabstrip-items .k-icon {\n  margin: -1px 4px 0 -3px;\n  vertical-align: top;\n}\n.k-tabstrip-items .k-item .k-image,\n.k-tabstrip-items .k-item .k-sprite,\n.k-panelbar .k-tabstrip-items .k-item .k-image,\n.k-panelbar .k-tabstrip-items .k-item .k-sprite {\n  margin: -3px 3px 0 -6px;\n  vertical-align: middle;\n}\n/* TabStrip Loading Progress */\n.k-tabstrip-items .k-loading {\n  top: 0;\n  left: 0;\n  height: 0;\n  width: 20%;\n  position: absolute;\n  background: transparent;\n  border-top: 1px solid transparent;\n  border-color: inherit;\n  -webkit-transition: width 200ms linear;\n          transition: width 200ms linear;\n  -webkit-transition: \"width 200ms linear\";\n          transition: \"width 200ms linear\";\n  -webkit-animation: k-tab-loader 1s ease-in-out infinite;\n          animation: k-tab-loader 1s ease-in-out infinite;\n}\n.k-tabstrip-items .k-progress {\n  -webkit-animation: none;\n          animation: none;\n}\n.k-tabstrip-items .k-loading.k-complete {\n  width: 100%;\n  -webkit-animation: none;\n          animation: none;\n}\n.k-tabstrip > .k-content,\n.k-panelbar .k-tabstrip > .k-content {\n  position: static;\n  border-style: solid;\n  border-width: 1px;\n  margin: 0 .286em .3em;\n  padding: .92em;\n  zoom: 1;\n}\n.k-tabstrip > .k-content {\n  display: none;\n  overflow: auto;\n}\n.k-tabstrip > .k-content.km-scroll-wrapper {\n  padding: 0;\n}\n.k-tabstrip > .k-content > .km-scroll-container {\n  padding: .3em .92em;\n}\n@-webkit-keyframes k-tab-loader {\n  0% {\n    left: 0;\n  }\n  50% {\n    left: 80%;\n  }\n  100% {\n    left: 0;\n  }\n}\n@keyframes k-tab-loader {\n  0% {\n    left: 0;\n  }\n  50% {\n    left: 80%;\n  }\n  100% {\n    left: 0;\n  }\n}\n/* left and right tabs */\n.k-tabstrip-left > div.k-content,\n.k-tabstrip-right > div.k-content {\n  margin: .286em .3em;\n}\n.k-tabstrip-left > .k-tabstrip-items .k-item,\n.k-tabstrip-right > .k-tabstrip-items .k-item {\n  display: block;\n  margin-bottom: -1px;\n}\n.k-tabstrip-left > .k-tabstrip-items .k-link,\n.k-tabstrip-right > .k-tabstrip-items .k-link {\n  display: block;\n}\n.k-tabstrip-left > .k-tabstrip-items .k-tab-on-top,\n.k-tabstrip-right > .k-tabstrip-items .k-tab-on-top,\n.k-tabstrip-left > .k-tabstrip-items .k-state-active,\n.k-tabstrip-right > .k-tabstrip-items .k-state-active,\n.k-panelbar .k-tabstrip-left > .k-tabstrip-items .k-state-active,\n.k-panelbar .k-tabstrip-right > .k-tabstrip-items .k-state-active {\n  margin-bottom: -1px;\n  padding-bottom: 0;\n}\n/* left tabs */\n.k-tabstrip-left > .k-tabstrip-items {\n  float: left;\n  padding: .25em 0 .3em .3em;\n}\n.k-tabstrip-left > .k-tabstrip-items .k-item {\n  border-width: 1px 0 1px 1px;\n  border-radius: 3px 0 0 3px;\n}\n.k-tabstrip-left > .k-tabstrip-items .k-state-active {\n  border-width: 1px 0 1px 1px;\n}\n.k-tabstrip-left > .k-tabstrip-items .k-tab-on-top,\n.k-tabstrip-left > .k-tabstrip-items .k-state-active,\n.k-panelbar .k-tabstrip-left > .k-tabstrip-items .k-state-active {\n  margin-right: -2px;\n  padding-right: 1px;\n}\n/* right tabs */\n.k-tabstrip-right > .k-tabstrip-items {\n  float: right;\n  padding: .25em .3em .3em 0;\n}\n.k-tabstrip-right > .k-tabstrip-items .k-item {\n  border-width: 1px 1px 1px 0;\n  border-radius: 0 3px 3px 0;\n}\n.k-tabstrip-right > .k-tabstrip-items .k-state-active {\n  border-width: 1px 1px 1px 0;\n}\n.k-tabstrip-right > .k-tabstrip-items .k-tab-on-top,\n.k-tabstrip-right > .k-tabstrip-items .k-state-active,\n.k-panelbar .k-tabstrip-right > .k-tabstrip-items .k-state-active {\n  margin-left: -1px;\n  padding-left: 1px;\n}\n/* bottom tabs */\n.k-tabstrip-bottom > .k-tabstrip-items {\n  margin-top: -1px;\n  padding: 0 .3em .3em;\n}\n.k-tabstrip-bottom > .k-content,\n.k-panelbar .k-tabstrip-bottom > .k-content {\n  margin: .3em .286em 0;\n  z-index: 1;\n  position: relative;\n}\n.k-tabstrip-bottom > .k-tabstrip-items .k-item {\n  border-width: 0 1px 1px;\n  border-radius: 0 0 4px 4px;\n}\n.k-tabstrip-bottom > .k-tabstrip-items .k-state-active {\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.k-tabstrip-bottom > .k-content {\n  min-height: 100px;\n}\n.k-tabstrip-bottom > .k-tabstrip-items .k-loading {\n  top: auto;\n  bottom: 0;\n}\n/* PanelBar */\n.k-panelbar {\n  zoom: 1;\n}\n.k-panelbar > .k-item,\n.k-panel > .k-item {\n  list-style-type: none;\n  display: block;\n  border-width: 0;\n  margin: 0;\n  zoom: 1;\n  border-radius: 0;\n}\n.k-panelbar .k-link > .k-image,\n.k-panelbar .k-link > .k-sprite {\n  float: left;\n  margin-top: 4px;\n  margin-right: 5px;\n  vertical-align: middle;\n}\n.k-panelbar > .k-item > .k-link,\n.k-panel > .k-item > .k-link {\n  display: block;\n  position: relative;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  padding: 0 1em;\n  line-height: 2.34em;\n  text-decoration: none;\n  zoom: 1;\n}\n.k-panelbar-expand.k-icon,\n.k-panelbar-collapse.k-icon {\n  position: absolute;\n  top: 50%;\n  right: 4px;\n  margin-top: -8px;\n}\n.k-panelbar .k-panel,\n.k-panelbar .k-content {\n  position: relative;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  margin: 0;\n  padding: 0;\n  zoom: 1;\n}\n.k-panel > .k-item > .k-link {\n  border-bottom: 0;\n  font-size: .95em;\n  line-height: 2.2;\n}\n.k-panel .k-panel > .k-item > .k-link {\n  padding-left: 2em;\n}\n.k-panelbar .k-i-arrow-end-right .k-link {\n  border-bottom: 0;\n}\n.k-panel .k-panel {\n  border-bottom: 0;\n}\n.k-pager-wrap {\n  clear: both;\n  overflow: hidden;\n  position: relative;\n  border-style: solid;\n  border-width: 1px;\n  line-height: 2.0em;\n  padding: 0.333em 0 0.333em 0.250em;\n}\n.k-pager-numbers .k-link,\n.k-pager-numbers .k-state-selected {\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 1px;\n}\n.k-pager-numbers {\n  margin: 0 2px;\n}\n.k-pager-numbers .k-state-selected {\n  vertical-align: top;\n}\n.k-pager-numbers .k-current-page {\n  display: none;\n}\n.k-pager-numbers li,\n.k-pager-input {\n  float: left;\n}\n.k-pager-info {\n  float: right;\n  padding: 0 1.333em;\n}\n.k-pager-numbers .k-link {\n  text-decoration: none;\n}\n.k-pager-wrap > .k-link,\n.k-pager-numbers .k-link,\n.k-pager-numbers .k-state-selected {\n  min-width: 2em;\n}\n.k-pager-wrap > .k-link {\n  float: left;\n  margin: 0 0.08333em;\n  height: 2em;\n  /*IE7*/\n  line-height: 2em;\n  /*IE7*/\n  border-radius: 1.0833em;\n  cursor: pointer;\n  text-align: center;\n}\n.k-pager-wrap > a.k-state-disabled:hover {\n  background: none;\n  cursor: default;\n}\n.k-pager-numbers .k-link {\n  text-align: center;\n  line-height: 2em;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 1.0833em;\n}\n.k-pager-wrap > .k-link {\n  border-style: solid;\n  border-width: 1px;\n}\n.k-pager-wrap .k-pager-refresh {\n  float: right;\n  margin-right: 0.5em;\n  border-width: 0;\n  border-radius: 0;\n}\n.k-pager-numbers .k-state-selected {\n  border-style: solid;\n  border-width: 1px;\n  text-align: center;\n  border-radius: 1.0833em;\n}\n.k-pager-wrap .k-textbox {\n  width: 3.333em;\n}\n.k-pager-wrap .k-dropdown {\n  width: 4.500em;\n}\n.k-pager-refresh {\n  float: right;\n}\n.k-pager-input,\n.k-pager-sizes {\n  padding: 0 1.4166em;\n}\n.k-pager-sizes {\n  display: inline-block;\n  padding-top: 1px;\n}\n.k-pager-sizes .k-widget.k-dropdown {\n  margin-top: -2px;\n}\n.k-pager-wrap .k-textbox,\n.k-pager-wrap .k-widget {\n  margin: 0 .4em 0;\n}\n@media only screen and (max-width: 1024px) {\n  .k-webkit .k-pager-wrap,\n  .k-ff .k-pager-wrap,\n  .k-ie11 .k-pager-wrap,\n  .k-edge .k-pager-wrap,\n  .k-safari .k-pager-wrap {\n    overflow: visible;\n    min-height: 2.1em;\n  }\n  .k-webkit .k-pager-wrap .k-pager-nav,\n  .k-ff .k-pager-wrap .k-pager-nav,\n  .k-ie11 .k-pager-wrap .k-pager-nav,\n  .k-edge .k-pager-wrap .k-pager-nav,\n  .k-safari .k-pager-wrap .k-pager-nav,\n  .k-webkit .k-pager-input,\n  .k-ff .k-pager-input,\n  .k-ie11 .k-pager-input,\n  .k-edge .k-pager-input,\n  .k-safari .k-pager-input {\n    display: inline-block;\n    vertical-align: top;\n  }\n  .k-webkit .k-pager-numbers,\n  .k-ff .k-pager-numbers,\n  .k-ie11 .k-pager-numbers,\n  .k-edge .k-pager-numbers,\n  .k-safari .k-pager-numbers {\n    position: absolute;\n    left: 4.8em;\n    display: -webkit-inline-box;\n    display: -webkit-inline-flex;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n    -webkit-flex-direction: column-reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n    overflow: visible;\n    height: auto;\n  }\n  .k-webkit .k-pager-numbers:first-child,\n  .k-ff .k-pager-numbers:first-child,\n  .k-ie11 .k-pager-numbers:first-child,\n  .k-edge .k-pager-numbers:first-child,\n  .k-safari .k-pager-numbers:first-child {\n    left: .2em;\n  }\n  .k-webkit .k-pager-numbers.k-state-expanded,\n  .k-ff .k-pager-numbers.k-state-expanded,\n  .k-ie11 .k-pager-numbers.k-state-expanded,\n  .k-edge .k-pager-numbers.k-state-expanded,\n  .k-safari .k-pager-numbers.k-state-expanded {\n    -ms-transform: translatey(-100%);\n        transform: translatey(-100%);\n    -webkit-transform: translatey(-100%);\n  }\n  .k-webkit .km-pane-wrapper .k-pager-numbers,\n  .k-ff .km-pane-wrapper .k-pager-numbers,\n  .k-ie11 .km-pane-wrapper .k-pager-numbers,\n  .k-edge .km-pane-wrapper .k-pager-numbers,\n  .k-safari .km-pane-wrapper .k-pager-numbers {\n    position: relative;\n    left: 50%;\n    -ms-transform: translate(-50%, -100%);\n        transform: translate(-50%, -100%);\n    -webkit-transform: translate(-50%, -100%);\n  }\n  .k-webkit .km-pane-wrapper .k-pager-numbers .k-link,\n  .k-ff .km-pane-wrapper .k-pager-numbers .k-link,\n  .k-ie11 .km-pane-wrapper .k-pager-numbers .k-link,\n  .k-edge .km-pane-wrapper .k-pager-numbers .k-link,\n  .k-safari .km-pane-wrapper .k-pager-numbers .k-link,\n  .k-webkit .km-pane-wrapper .k-pager-numbers .k-state-selected,\n  .k-ff .km-pane-wrapper .k-pager-numbers .k-state-selected,\n  .k-ie11 .km-pane-wrapper .k-pager-numbers .k-state-selected,\n  .k-edge .km-pane-wrapper .k-pager-numbers .k-state-selected,\n  .k-safari .km-pane-wrapper .k-pager-numbers .k-state-selected,\n  .k-webkit .km-pane-wrapper .k-pager-wrap > .k-link,\n  .k-ff .km-pane-wrapper .k-pager-wrap > .k-link,\n  .k-ie11 .km-pane-wrapper .k-pager-wrap > .k-link,\n  .k-edge .km-pane-wrapper .k-pager-wrap > .k-link,\n  .k-safari .km-pane-wrapper .k-pager-wrap > .k-link,\n  .k-webkit .km-pane-wrapper .k-pager-wrap > .k-pager-info,\n  .k-ff .km-pane-wrapper .k-pager-wrap > .k-pager-info,\n  .k-ie11 .km-pane-wrapper .k-pager-wrap > .k-pager-info,\n  .k-edge .km-pane-wrapper .k-pager-wrap > .k-pager-info,\n  .k-safari .km-pane-wrapper .k-pager-wrap > .k-pager-info {\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n  .k-webkit .k-rtl .k-pager-numbers,\n  .k-ff .k-rtl .k-pager-numbers,\n  .k-ie11 .k-rtl .k-pager-numbers,\n  .k-edge .k-rtl .k-pager-numbers,\n  .k-safari .k-rtl .k-pager-numbers {\n    left: auto;\n    right: 4.8em;\n    width: 4.5em;\n  }\n  .k-webkit .k-rtl .k-pager-numbers:first-child,\n  .k-ff .k-rtl .k-pager-numbers:first-child,\n  .k-ie11 .k-rtl .k-pager-numbers:first-child,\n  .k-edge .k-rtl .k-pager-numbers:first-child,\n  .k-safari .k-rtl .k-pager-numbers:first-child {\n    left: auto;\n    right: .2em;\n  }\n  .k-webkit .k-rtl .km-pane-wrapper .k-pager-numbers,\n  .k-ff .k-rtl .km-pane-wrapper .k-pager-numbers,\n  .k-ie11 .k-rtl .km-pane-wrapper .k-pager-numbers,\n  .k-edge .k-rtl .km-pane-wrapper .k-pager-numbers,\n  .k-safari .k-rtl .km-pane-wrapper .k-pager-numbers {\n    right: 5.8em;\n  }\n  .k-webkit .k-pager-numbers .k-current-page,\n  .k-ff .k-pager-numbers .k-current-page,\n  .k-ie11 .k-pager-numbers .k-current-page,\n  .k-edge .k-pager-numbers .k-current-page,\n  .k-safari .k-pager-numbers .k-current-page {\n    display: block;\n    border-left: 0;\n  }\n  .k-webkit .k-pager-numbers.k-state-expanded .k-current-page,\n  .k-ff .k-pager-numbers.k-state-expanded .k-current-page,\n  .k-ie11 .k-pager-numbers.k-state-expanded .k-current-page,\n  .k-edge .k-pager-numbers.k-state-expanded .k-current-page,\n  .k-safari .k-pager-numbers.k-state-expanded .k-current-page {\n    -ms-transform: translatey(100%);\n        transform: translatey(100%);\n    -webkit-transform: translatey(100%);\n  }\n  .k-webkit .k-pager-numbers li:not(.k-current-page),\n  .k-ff .k-pager-numbers li:not(.k-current-page),\n  .k-ie11 .k-pager-numbers li:not(.k-current-page),\n  .k-edge .k-pager-numbers li:not(.k-current-page),\n  .k-safari .k-pager-numbers li:not(.k-current-page) {\n    display: none;\n  }\n  .k-webkit .k-pager-numbers .k-current-page .k-link,\n  .k-ff .k-pager-numbers .k-current-page .k-link,\n  .k-ie11 .k-pager-numbers .k-current-page .k-link,\n  .k-edge .k-pager-numbers .k-current-page .k-link,\n  .k-safari .k-pager-numbers .k-current-page .k-link {\n    width: 3.2em;\n    padding: 0 .429em 0 .714em;\n    border-radius: 1.0833em;\n  }\n  .k-webkit .k-pager-numbers + .k-link,\n  .k-ff .k-pager-numbers + .k-link,\n  .k-ie11 .k-pager-numbers + .k-link,\n  .k-edge .k-pager-numbers + .k-link,\n  .k-safari .k-pager-numbers + .k-link {\n    margin-left: 4.8em;\n  }\n  .k-webkit .k-rtl .k-pager-numbers + .k-link,\n  .k-ff .k-rtl .k-pager-numbers + .k-link,\n  .k-ie11 .k-rtl .k-pager-numbers + .k-link,\n  .k-edge .k-rtl .k-pager-numbers + .k-link,\n  .k-safari .k-rtl .k-pager-numbers + .k-link {\n    margin-right: 5.1em;\n    margin-left: 0;\n  }\n  .k-webkit .k-pager-numbers .k-state-selected,\n  .k-ff .k-pager-numbers .k-state-selected,\n  .k-ie11 .k-pager-numbers .k-state-selected,\n  .k-edge .k-pager-numbers .k-state-selected,\n  .k-safari .k-pager-numbers .k-state-selected,\n  .k-webkit .k-pager-numbers .k-link,\n  .k-ff .k-pager-numbers .k-link,\n  .k-ie11 .k-pager-numbers .k-link,\n  .k-edge .k-pager-numbers .k-link,\n  .k-safari .k-pager-numbers .k-link {\n    display: block;\n    margin-right: 0;\n    padding: 1px 5px 1px 5px;\n    text-align: left;\n  }\n  .k-webkit .k-pager-numbers.k-state-expanded,\n  .k-ff .k-pager-numbers.k-state-expanded,\n  .k-ie11 .k-pager-numbers.k-state-expanded,\n  .k-edge .k-pager-numbers.k-state-expanded,\n  .k-safari .k-pager-numbers.k-state-expanded {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding: 2px 2px 0;\n  }\n  .k-webkit .k-pager-numbers.k-state-expanded .k-current-page,\n  .k-ff .k-pager-numbers.k-state-expanded .k-current-page,\n  .k-ie11 .k-pager-numbers.k-state-expanded .k-current-page,\n  .k-edge .k-pager-numbers.k-state-expanded .k-current-page,\n  .k-safari .k-pager-numbers.k-state-expanded .k-current-page {\n    margin: -2em -3px 0;\n    padding: 0;\n  }\n  .k-webkit .k-pager-numbers.k-state-expanded .k-current-page .k-link,\n  .k-ff .k-pager-numbers.k-state-expanded .k-current-page .k-link,\n  .k-ie11 .k-pager-numbers.k-state-expanded .k-current-page .k-link,\n  .k-edge .k-pager-numbers.k-state-expanded .k-current-page .k-link,\n  .k-safari .k-pager-numbers.k-state-expanded .k-current-page .k-link {\n    border-radius: 0 0 1.0833em 1.0833em;\n  }\n  .k-webkit .k-pager-numbers.k-state-expanded li,\n  .k-ff .k-pager-numbers.k-state-expanded li,\n  .k-ie11 .k-pager-numbers.k-state-expanded li,\n  .k-edge .k-pager-numbers.k-state-expanded li,\n  .k-safari .k-pager-numbers.k-state-expanded li {\n    display: inline-block;\n  }\n}\n@media only screen and (max-width: 640px) {\n  .k-webkit .k-pager-info,\n  .k-ff .k-pager-info,\n  .k-ie11 .k-pager-info,\n  .k-edge .k-pager-info,\n  .k-safari .k-pager-info {\n    display: none;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .k-webkit .k-pager-sizes,\n  .k-ff .k-pager-sizes,\n  .k-ie11 .k-pager-sizes,\n  .k-edge .k-pager-sizes,\n  .k-safari .k-pager-sizes {\n    display: none;\n  }\n}\n.k-rtl .k-pager-wrap .k-i-seek-e,\n.k-rtl .k-pager-wrap .k-i-seek-w,\n.k-rtl .k-pager-wrap .k-i-arrow-e,\n.k-rtl .k-pager-wrap .k-i-arrow-w {\n  -webkit-transform: scaleX(-1);\n      -ms-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n/* Menu */\n.k-menu {\n  cursor: default;\n}\n.k-menu,\n.k-menu .k-menu-group {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  zoom: 1;\n}\n.k-menu:after {\n  content: '';\n  display: block;\n  width: 99%;\n  height: 0;\n  float: inherit;\n  clear: both;\n}\n.k-menu .k-item {\n  -webkit-user-select: none;\n  -moz-user-select: -moz-none;\n  -ms-user-select: none;\n      user-select: none;\n}\n.k-menu .k-item div {\n  -webkit-user-select: default;\n     -moz-user-select: default;\n      -ms-user-select: default;\n          user-select: default;\n}\n.k-menu .k-item .k-item,\nul.k-menu-vertical > .k-item {\n  display: block;\n  float: none;\n  border-width: 0;\n}\n.k-menu .k-item > .k-link > .k-icon,\n.k-menu .k-image,\n.k-menu .k-sprite {\n  margin: -2px 4px 0 -4px;\n  vertical-align: middle;\n}\n.k-menu .k-item > .k-link > .k-icon {\n  margin: -2px 0 0;\n}\n.k-menu .k-item > .k-link {\n  display: block;\n  padding: 0.5em 1.1em 0.4em;\n  line-height: 1.34em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.k-menu .k-menu-group {\n  display: none;\n  border-style: solid;\n  border-width: 1px;\n  overflow: visible;\n  white-space: nowrap;\n}\n.k-menu .k-menu-group > .k-item {\n  display: block;\n  border-width: 0;\n}\n.k-menu .k-item,\n.k-widget.k-menu-horizontal > .k-item {\n  position: relative;\n  float: left;\n  border-style: solid;\n  border-width: 0 1px 0 0;\n  vertical-align: top;\n  zoom: 1;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n}\n.k-context-menu.k-menu-vertical > .k-item > .k-link,\n.k-menu .k-menu-group .k-item > .k-link {\n  padding: .28em 1.8em .38em .9em;\n}\n.k-context-menu.k-menu-horizontal > .k-separator {\n  display: none;\n}\n.k-context-menu.k-menu-horizontal > .k-item {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.k-context-menu.k-menu-horizontal > .k-last {\n  border: 0;\n}\n.k-menu .k-item > .k-link > .k-i-arrow-60-down {\n  margin-right: -8px;\n}\n.k-menu .k-item > .k-link > .k-i-arrow-60-right {\n  position: absolute;\n  top: 50%;\n  margin-top: -8px;\n  right: 2px;\n  right: .2rem;\n}\n.k-menu .k-animation-container {\n  border: 0;\n}\n.k-menu .k-animation-container,\n.k-menu .k-menu-group {\n  position: absolute;\n  left: 0;\n}\n.k-menu .k-animation-container .k-animation-container,\n.k-menu .k-menu-group .k-menu-group,\n.k-menu-vertical .k-animation-container,\n.k-menu-vertical .k-menu-group {\n  top: 0;\n  left: 0;\n}\n.k-menu .k-animation-container .k-menu-group {\n  top: auto;\n  left: auto;\n  margin-left: -1px;\n}\n.k-menu .k-animation-container,\n.k-popup .k-animation-container {\n  margin-top: -1px;\n  padding-left: 1px;\n}\n.k-ie .k-menu .k-animation-container,\n.k-ie .k-popup .k-animation-container {\n  margin-top: -2px;\n}\n.k-popup .k-animation-container .k-popup {\n  margin-left: -1px;\n}\nul.k-menu .k-separator {\n  padding: 0.25em 0;\n  height: 100%;\n  width: 1px;\n  font-size: 0;\n  line-height: 0;\n  border-width: 0 1px 0 0;\n}\nul.k-menu-vertical .k-separator,\n.k-menu .k-menu-group .k-separator {\n  padding: 0;\n  height: 1px;\n  width: 100%;\n  border-width: 1px 0 0;\n}\n/* Context Menu */\n.k-context-menu {\n  border: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n/* Calendar */\n.k-calendar {\n  position: relative;\n  display: inline-block;\n  width: 17em;\n  overflow: hidden;\n}\n.k-week-number {\n  width: 19.42857143em;\n}\n.k-calendar td,\n.k-calendar .k-link {\n  text-decoration: none;\n}\n.k-calendar .k-action-link {\n  text-decoration: underline;\n}\n.k-calendar .k-header,\n.k-calendar .k-footer {\n  position: relative;\n  text-align: center;\n  zoom: 1;\n}\n.k-widget.k-calendar .k-nav-prev,\n.k-widget.k-calendar .k-nav-next {\n  position: absolute;\n  top: 0.16666em;\n  line-height: 1.8333em;\n  height: 1.8333em;\n}\n.k-widget.k-calendar .k-nav-prev {\n  left: 1%;\n}\n.k-widget.k-calendar .k-nav-next {\n  right: 1%;\n}\n.k-calendar .k-content {\n  float: left;\n  border-spacing: 0;\n  width: 100%;\n  height: 14.167em;\n  border-width: 0;\n  margin: 0;\n  table-layout: fixed;\n  outline: 0;\n}\n.k-calendar .k-content,\n.k-calendar .k-content th {\n  text-align: right;\n}\n.k-calendar .k-content .k-alt {\n  border-radius: 0;\n  text-align: center;\n  font-weight: normal;\n  cursor: default;\n  line-height: 1.8333em;\n}\n.k-calendar .k-animation-container .k-content {\n  height: 100%;\n}\n.k-widget.k-calendar .k-nav-fast {\n  display: inline-block;\n  width: 75%;\n  height: 1.8333em;\n  line-height: 1.8333em;\n  margin: 0.16666em -0.08333em 0.3333em 0;\n}\n.k-calendar .k-header .k-icon {\n  vertical-align: middle;\n}\n.k-calendar .k-header .k-link.k-nav-prev,\n.k-calendar .k-header .k-link.k-nav-next {\n  height: 1.8333em;\n  width: 1.8333em;\n}\n.k-calendar th {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  padding: .4em .45em .4em .1em;\n  font-weight: normal;\n  cursor: default;\n}\n.k-calendar td {\n  padding: 0.08333em;\n  cursor: pointer;\n}\n.k-calendar .k-state-focus {\n  border-style: dotted;\n  border-width: 0.08333em;\n  padding: 0;\n}\n.k-calendar .k-content .k-link {\n  display: block;\n  overflow: hidden;\n  min-height: 1.8333em;\n  line-height: 1.8333em;\n  padding: 0 .45em 0 .1em;\n}\n.k-calendar .k-meta-view .k-link {\n  padding: .25em 0 .3em;\n  text-align: center;\n}\n.k-calendar .k-century .k-link {\n  text-align: left;\n  padding: 0 .45em;\n}\n.k-calendar .k-footer {\n  clear: both;\n}\n.k-calendar .k-footer .k-nav-today,\n.k-calendar .k-footer > .k-state-disabled {\n  display: block;\n  height: 100%;\n  padding: .5em 0;\n}\n.k-calendar .k-nav-today:hover {\n  text-decoration: underline;\n}\n/* ComboBox & DropDownList */\nspan.k-datepicker,\nspan.k-timepicker,\nspan.k-datetimepicker,\nspan.k-colorpicker,\nspan.k-numerictextbox,\nspan.k-combobox,\nspan.k-dropdown,\n.k-toolbar .k-split-button {\n  background-image: none;\n}\n.k-autocomplete,\n.k-combobox,\n.k-datepicker,\n.k-timepicker,\n.k-datetimepicker,\n.k-colorpicker,\n.k-numerictextbox,\n.k-dropdown,\n.k-selectbox,\n.k-textbox,\n.k-toolbar .k-split-button {\n  position: relative;\n  display: inline-block;\n  width: 12.4em;\n  overflow: visible;\n  border-width: 0;\n  vertical-align: middle;\n}\n.k-autocomplete > .k-i-close,\n.k-combobox > .k-dropdown-wrap > .k-i-close,\n.k-multiselect > .k-multiselect-wrap > .k-i-close {\n  display: none;\n  position: absolute;\n  right: 0;\n}\n.k-autocomplete > .k-i-close,\n.k-combobox > .k-dropdown-wrap > .k-i-close {\n  bottom: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.k-ie8 .k-autocomplete > .k-i-close,\n.k-ie8 .k-combobox > .k-dropdown-wrap > .k-i-close {\n  margin-top: -8px;\n}\n.k-combobox > .k-dropdown-wrap > .k-i-close {\n  font-size: 100%;\n  right: 2.4em;\n}\n.k-multiselect > .k-multiselect-wrap > .k-i-close {\n  top: 6px;\n}\n.k-autocomplete > .k-i-close,\n.k-multiselect > .k-multiselect-wrap > .k-i-close {\n  margin-right: 6px;\n}\n.k-autocomplete.k-state-hover > .k-i-close,\n.k-combobox > .k-dropdown-wrap.k-state-hover > .k-i-close,\n.k-autocomplete.k-state-focused > .k-i-close,\n.k-combobox > .k-dropdown-wrap.k-state-focused > .k-i-close {\n  display: inline-block;\n  outline: none;\n}\n.k-autocomplete > .k-i-close.k-loading-hidden,\n.k-combobox > .k-dropdown-wrap > .k-i-close.k-loading-hidden {\n  display: none;\n}\n.k-multiselect.k-state-hover > .k-multiselect-wrap > .k-i-close,\n.k-multiselect.k-state-focused > .k-multiselect-wrap > .k-i-close {\n  display: inline-block;\n  outline: none;\n}\n.k-autocomplete.k-state-border-down > .k-i-close,\n.k-combobox > .k-dropdown-wrap.k-state-border-down > .k-i-close {\n  margin-top: -1px;\n}\n.k-filter-menu .k-combobox,\n.k-filter-menu .k-datepicker,\n.k-filter-menu .k-timepicker,\n.k-filter-menu .k-datetimepicker,\n.k-filter-menu .k-numerictextbox,\n.k-filter-menu .k-dropdown,\n.k-filter-menu .k-autocomplete,\n.k-filter-menu .k-textbox {\n  width: 13.2em;\n}\n.k-autocomplete,\n.k-combobox,\n.k-datepicker,\n.k-timepicker,\n.k-datetimepicker,\n.k-colorpicker,\n.k-numerictextbox,\n.k-dropdown,\n.k-selectbox,\n.k-toolbar .k-split-button {\n  white-space: nowrap;\n}\n.k-colorpicker,\n.k-toolbar .k-split-button {\n  width: auto;\n}\n.k-datetimepicker {\n  width: 15em;\n}\n.k-autocomplete,\n.k-picker-wrap,\n.k-numeric-wrap {\n  position: relative;\n  cursor: default;\n}\n.k-dropdown-wrap {\n  position: relative;\n}\n.k-dropdown-wrap,\n.k-picker-wrap,\n.k-numeric-wrap {\n  display: block;\n}\n.k-block,\n.k-widget,\n.k-grid,\n.k-slider,\n.k-splitter,\n.k-treeview,\n.k-panelbar,\n.k-content,\n.k-header-column-menu {\n  outline: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.k-block,\n.k-slider,\n.k-splitbar,\n.k-calendar,\n.k-treeview,\n.k-pager-wrap,\n.k-grid-header .k-i-link-horizontal,\n.k-header-column-menu {\n  -webkit-touch-callout: none;\n}\n.k-list-scroller {\n  position: relative;\n  overflow: auto;\n}\n.k-popup.k-list-container,\n.k-popup.k-calendar-container {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  padding: 2px;\n  border-width: 1px;\n  border-style: solid;\n}\n.k-list-container.k-state-border-down,\n.k-autocomplete.k-state-border-down,\n.k-dropdown-wrap.k-state-border-down,\n.k-picker-wrap.k-state-border-down,\n.k-numeric-wrap.k-state-border-down {\n  border-bottom-width: 0;\n  padding-bottom: 1px;\n}\n.k-list-container .km-scroll-container {\n  padding-bottom: 6px;\n}\n.k-textbox,\n.k-autocomplete,\n.k-dropdown-wrap,\n.k-picker-wrap,\n.k-numeric-wrap {\n  border-width: 1px;\n  border-style: solid;\n  padding: 0 1.9em 0 0;\n}\n.k-numeric-wrap.k-expand-padding {\n  padding-right: 0;\n}\n.k-textbox,\n.k-autocomplete {\n  padding: 0;\n}\n.k-textbox.k-space-left {\n  padding-left: 1.9em;\n}\n.k-textbox.k-space-right {\n  padding-right: 1.9em;\n}\n.k-textbox .k-icon {\n  top: 50%;\n  margin: -8px 0 0;\n  position: absolute;\n}\n.k-space-left .k-icon {\n  left: 3px;\n}\n.k-space-right .k-icon {\n  right: 3px;\n}\n/*prevent missing bottom border at some zoom levels*/\nspan.k-textbox:after {\n  content: \"\\A0\";\n  display: block;\n  height: .4px;\n  overflow: hidden;\n}\n.k-autocomplete,\n.k-dropdown-wrap.k-state-focused,\n.k-dropdown-wrap.k-state-hover,\n.k-picker-wrap.k-state-focused,\n.k-picker-wrap.k-state-hover,\n.k-numeric-wrap.k-state-focused,\n.k-numeric-wrap.k-state-hover {\n  -webkit-transition: -webkit-box-shadow .15s ease-out;\n          transition: box-shadow .15s ease-out;\n  -webkit-transition: \"box-shadow .15s ease-out\";\n          transition: \"box-shadow .15s ease-out\";\n}\n.k-textbox > input,\n.k-picker-wrap .k-input,\n.k-numeric-wrap .k-input,\n.k-combobox .k-input {\n  width: 100%;\n  vertical-align: top;\n}\n.k-picker-wrap .k-input,\n.k-numeric-wrap .k-input,\n.k-dropdown-wrap .k-input,\n.k-selectbox .k-input {\n  font-family: inherit;\n  border-width: 0;\n  outline: 0;\n}\n.k-dropdown .k-input,\n.k-selectbox .k-input {\n  background: transparent;\n}\n.k-picker-wrap .k-select,\n.k-numeric-wrap .k-select,\n.k-dropdown-wrap .k-select {\n  position: absolute;\n  /* icon positioning */\n  top: 0;\n  right: 0;\n  display: inline-block;\n  vertical-align: top;\n  text-decoration: none;\n}\n.k-combobox .k-select,\n.k-picker-wrap .k-select,\n.k-numeric-wrap .k-select {\n  border-style: solid;\n  border-width: 0 0 0 1px;\n  border-color: inherit;\n  /* skin-related, inherit does not work in ie7- */\n}\nspan.k-datetimepicker .k-select,\nspan.k-datetimepicker .k-select + .k-select {\n  right: 0;\n}\n.k-textbox > input,\n.k-autocomplete .k-input {\n  display: block;\n}\n.k-combobox .k-icon {\n  /*margin-top: 1px;*/\n}\n.k-dropdown .k-select,\n.k-selectbox .k-select {\n  overflow: hidden;\n  border: 0;\n  text-decoration: none;\n  font: inherit;\n  color: inherit;\n}\n.k-dropdown .k-input,\n.k-selectbox .k-input {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.k-textbox > input,\n.k-autocomplete .k-input,\n.k-picker-wrap .k-input,\n.k-numeric-wrap .k-input,\n.k-dropdown-wrap .k-input,\n.k-selectbox .k-input {\n  height: 1.65em;\n  line-height: 1.65em;\n  padding: 0.177em 0;\n  text-indent: 0.33em;\n  border: 0;\n  margin: 0;\n}\n.k-combobox .k-dropdown-wrap:before,\n.k-picker-wrap:before,\n.k-numeric-wrap:before {\n  content: \"\\A0\";\n  display: inline-block;\n  width: 0;\n  height: 1.65em;\n  padding-bottom: 0.3em;\n}\n.k-combobox-clearable .k-input {\n  padding-right: 1.9em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 2.004em;\n}\n/* fix missing bottom border on browser zoom in Chrome */\n.k-webkit .k-combobox .k-dropdown-wrap:before,\n.k-webkit .k-picker-wrap:before,\n.k-webkit .k-numeric-wrap:before {\n  padding-bottom: 0.38em;\n}\n/* above style breaks NumericTextBox layout due display:block style applied to the input */\n.km.root .k-combobox .k-dropdown-wrap:before,\n.km.root .k-picker-wrap:before,\n.km.root .k-numeric-wrap:before {\n  content: none;\n}\n.k-combobox .k-input,\n.k-picker-wrap .k-input,\n.k-numeric-wrap .k-input {\n  display: inline;\n}\n.k-picker-wrap .k-select,\n.k-numeric-wrap .k-select,\n.k-dropdown-wrap .k-select {\n  min-height: 1.65em;\n  line-height: 2em;\n  vertical-align: middle;\n  -moz-box-sizing: border-box;\n  text-align: center;\n  width: 1.9em;\n  height: 100%;\n}\n.k-numeric-wrap .k-select {\n  padding: 0;\n}\nbody .k-datetimepicker .k-select {\n  border-radius: 0;\n}\n.k-combobox .k-select,\n.k-dropdown,\n.k-selectbox .k-icon {\n  cursor: pointer;\n}\n.k-popup {\n  border-style: solid;\n  border-width: 1px;\n}\n.k-popup .k-item,\n.k-list-optionlabel {\n  cursor: default;\n}\n.k-popup .k-calendar {\n  border: 0;\n}\n.k-list {\n  height: auto;\n}\n.k-nodata {\n  min-height: 138px;\n  width: 100%;\n  display: table;\n  text-transform: uppercase;\n  font-size: 0.85em;\n  font-weight: lighter;\n}\n.k-nodata > div {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n  padding: 11px;\n}\n.k-popup .k-list .k-item,\n.k-fieldselector .k-list .k-item,\n.k-list-optionlabel,\n.k-popup > .k-group-header,\n.k-popup > .k-virtual-wrap > .k-group-header {\n  padding: 1px 5px 1px 5px;\n  line-height: 1.8em;\n  min-height: 1.8em;\n}\n.k-popup .k-list .k-item {\n  border-width: 1px;\n  border-style: solid;\n  border-color: transparent;\n  padding: 0 4px;\n}\n.k-popup .k-list .k-item > .k-group {\n  top: -1px;\n}\n.k-group-header + div > .k-list > .k-item.k-first:before {\n  content: \" \";\n  display: block;\n  border-top-width: 1px;\n  border-top-style: solid;\n  position: absolute;\n  top: -1px;\n  left: 0;\n  right: 0;\n}\n.k-popup > .k-group-header,\n.k-popup > .k-virtual-wrap > .k-group-header {\n  padding-right: 22px;\n}\n.k-overflow-container .k-item {\n  padding: 1px;\n}\n.k-overflow-container > .k-state-disabled .k-button,\n.k-overflow-container .k-button.k-state-disabled,\n.k-overflow-container .k-button.k-state-disabled:hover {\n  border: 0 ;\n  background: none;\n}\n.k-popup .k-list .k-state-hover,\n.k-popup .k-list .k-state-focused,\n.k-popup .k-list .k-state-selected,\n.k-overflow-container .k-state-hover,\n.k-overflow-container .k-state-focused,\n.k-overflow-container .k-state-selected,\n.k-fieldselector .k-list .k-item,\n.k-list-optionlabel.k-state-focused,\n.k-list-optionlabel.k-state-selected {\n  padding: 0 4px;\n  border-width: 1px;\n  border-style: solid;\n}\n.k-list-filter {\n  position: relative;\n  margin-bottom: 2px;\n}\n.k-list-filter > .k-textbox {\n  padding-right: 20px;\n  width: 100%;\n}\n.k-list-filter > .k-icon {\n  position: absolute;\n  right: 6px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.km-root .k-list-filter > .k-textbox {\n  padding-left: 0;\n  padding-right: 0;\n  border-left-width: 0;\n  border-right-width: 0;\n}\n/* MultiSelect */\n.k-multiselect-wrap {\n  position: relative;\n  border-width: 0px;\n  border-style: solid;\n  border-radius: 4px;\n  border-color: #C5C5C5;\n  background-color: #FFF;\n  min-height: 2.04em;\n  padding-right: 22px;\n}\n.k-multiselect-wrap .k-input {\n  background-color: transparent;\n  height: 1.31em;\n  line-height: 1.31em;\n  padding: 0.18em 0;\n  text-indent: 0.33em;\n  border: 0;\n  margin: 1px 0 0;\n  float: left;\n}\n.k-multiselect-wrap .k-input::-ms-clear {\n  display: none;\n}\n.k-multiselect-wrap li {\n  margin: 1px 0 1px 1px;\n  padding: .1em 1.6em .1em .4em;\n  line-height: 1.5em;\n  float: left;\n  position: relative;\n}\n.k-autocomplete .k-i-loading,\n.k-multiselect .k-i-loading {\n  position: absolute;\n  right: 3px;\n  bottom: 4px;\n}\n.k-multiselect .k-loading-hidden {\n  visibility: hidden;\n}\n.k-multiselect-wrap .k-select {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  padding: .03em .2em;\n}\n/* Date/Time Pickers */\n.k-datetimepicker .k-picker-wrap {\n  padding-right: 3.8em;\n}\n.k-datetimepicker .k-select {\n  width: 3.8em;\n}\n.k-datetimepicker .k-select .k-link-date {\n  margin-left: -0.285em;\n}\n.k-datetimepicker .k-select .k-link-time {\n  margin-right: -0.285em;\n  margin-left: .428em;\n}\n.k-datetimepicker .k-picker-wrap .k-icon {\n  margin: 0 2px;\n}\n.k-picker-wrap .k-icon {\n  cursor: pointer;\n}\n.k-button,\n.k-textbox,\n.k-timepicker,\n.k-datepicker,\n.k-datetimepicker {\n  display: inline-block;\n  vertical-align: middle;\n}\n.k-picker-wrap .k-input {\n  margin: 0;\n}\n.k-time-popup .k-item {\n  padding: 1px 3px;\n}\n/* inputs */\n.k-input {\n  padding: 0.25em 0;\n}\n.k-input,\n.k-textbox > input {\n  outline: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.k-textbox {\n  outline: 0;\n}\ninput.k-textbox,\ntextarea.k-textbox {\n  padding: 2px .3em;\n}\ninput.k-textbox {\n  height: 2.13em;\n  text-indent: 0.33em;\n  line-height: 1.6em;\n}\n.k-ie input.k-textbox {\n  text-indent: 0.165em;\n}\n.k-ff input.k-textbox {\n  height: 2.17em;\n}\ntextarea.k-textbox {\n  height: auto;\n}\n/* NumericTextBox */\nspan.k-numerictextbox {\n  background-color: transparent;\n}\n.k-numerictextbox .k-input {\n  margin: 0;\n}\n.k-numerictextbox .k-link {\n  display: block;\n  height: 1em;\n  line-height: 1em;\n  vertical-align: middle;\n  border-width: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.k-numerictextbox .k-icon {\n  display: block;\n  margin: auto;\n  height: 100%;\n}\n.k-numerictextbox .k-i-arrow-60-up {\n  top: 2px;\n}\n.k-numerictextbox .k-i-arrow-60-down {\n  bottom: 2px;\n}\n.k-numeric-wrap .k-input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n/* ColorPicker */\n.k-colorpicker .k-picker-wrap {\n  line-height: 2em;\n}\n.k-colorpicker .k-selected-color {\n  vertical-align: top;\n  display: inline-block;\n  height: 2em;\n  width: 2em;\n}\n.k-colorpicker .k-selected-color .k-i-line {\n  font-size: 2em;\n  color: #FF525E;\n  display: inline-block;\n  -webkit-transform: scaleX(-1);\n  -ms-transform: scaleX(-1);\n      transform: scaleX(-1);\n  -webkit-filter: FlipH;\n          filter: FlipH;\n  -ms-filter: \"FlipH\";\n}\n.k-colorpicker .k-selected-color .k-i-line:before {\n  content: \"\\E510\";\n}\n.k-colorpicker .k-tool-icon {\n  position: relative;\n  top: -2px;\n  display: inline-block;\n  padding: 3px 3px 2px;\n  margin-right: 3px;\n  margin-left: 2px;\n  margin-bottom: 3px;\n  background-repeat: no-repeat;\n  vertical-align: middle;\n  width: 16px;\n  height: 16px;\n  -ms-high-contrast-adjust: none;\n}\n.k-colorpicker .k-tool-icon .k-selected-color {\n  display: block;\n  height: 3px;\n  width: 16px;\n  position: absolute;\n  left: 3px;\n  bottom: -3px;\n  border-radius: 0 !important;\n}\n.k-colorpicker .k-select {\n  cursor: pointer;\n}\n.k-colorpicker .k-picker-wrap .k-icon {\n  overflow: visible;\n}\n.k-disabled-overlay {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n.k-colorpalette {\n  position: relative;\n  line-height: 0;\n  border-width: 0;\n  display: inline-block;\n}\n.k-colorpalette .k-palette {\n  border-collapse: collapse;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.k-colorpalette .k-item {\n  width: 14px;\n  height: 14px;\n  overflow: hidden;\n  -ms-high-contrast-adjust: none;\n}\n.k-colorpalette .k-item.k-state-selected,\n.k-colorpalette .k-item.k-state-selected:hover {\n  z-index: 100;\n  background: transparent;\n  -webkit-box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.7), inset 0 0 0 1px rgba(255, 255, 255, 0.45);\n          box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.7), inset 0 0 0 1px rgba(255, 255, 255, 0.45);\n  position: relative;\n}\n.k-colorpalette .k-item:hover {\n  z-index: 101;\n  position: relative;\n  -webkit-box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.3);\n          box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.3);\n}\n.k-flatcolorpicker {\n  position: relative;\n  display: inline-block;\n  width: 265px;\n  padding-bottom: 5px;\n}\ndiv.k-flatcolorpicker {\n  background-color: transparent;\n  background-image: none;\n}\n.k-flatcolorpicker .k-selected-color {\n  background-image: url(" + __webpack_require__(31) + ");\n  background-position: 50% 50%;\n  text-align: right;\n}\n.k-flatcolorpicker .k-selected-color input.k-color-value {\n  font-family: Consolas, \"Ubuntu Mono\", \"Lucida Console\", \"Courier New\", monospace;\n  padding: .75em .1em .65em .65em;\n  border: 0;\n  margin: 0;\n  width: 82%;\n}\n.k-flatcolorpicker .k-selected-color .k-color-input {\n  background-color: #fff;\n  display: inline-block;\n  width: 84%;\n  text-align: left;\n}\n.k-flatcolorpicker .k-selected-color .k-clear-color {\n  padding: .4em;\n  line-height: 0;\n}\n.k-flatcolorpicker .k-selected-color .k-clear-color .k-i-reset-color:before {\n  color: #000;\n  opacity: 0.8;\n}\n.k-flatcolorpicker .k-selected-color .k-clear-color .k-i-reset-color:hover,\n.k-flatcolorpicker .k-selected-color .k-clear-color .k-i-reset-color:active {\n  opacity: 1;\n}\n.k-flatcolorpicker .k-clear-color-container .k-clear-color.k-state-focused:active {\n  color: inherit;\n}\n.k-flatcolorpicker .k-clear-color-container .k-clear-color:active {\n  color: #000;\n  opacity: 1;\n}\n.k-flatcolorpicker .k-selected-color .k-clear-color .k-i-reset-color,\n.k-flatcolorpicker .k-clear-color-container .k-clear-color .k-i-reset-color {\n  background-image: none;\n}\n.k-flatcolorpicker .k-clear-color-container {\n  text-align: left;\n}\n.k-flatcolorpicker .k-hsv-rectangle {\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -ms-touch-action: pinch-zoom double-tap-zoom;\n}\n.k-flatcolorpicker .k-hsv-rectangle .k-draghandle {\n  cursor: pointer;\n  position: absolute;\n  z-index: 10;\n  left: 50%;\n  top: 50%;\n  width: 8px;\n  height: 8px;\n  border: 1px solid #eee;\n  margin-left: -5px;\n  margin-top: -5px;\n  border-radius: 6px;\n  -webkit-box-shadow: 0 1px 2px #444;\n          box-shadow: 0 1px 2px #444;\n  background: transparent;\n}\n.k-flatcolorpicker .k-hsv-rectangle .k-draghandle:hover,\n.k-flatcolorpicker .k-hsv-rectangle .k-draghandle:focus {\n  background: transparent;\n  border-color: #fff;\n  -webkit-box-shadow: 0 1px 5px #000;\n          box-shadow: 0 1px 5px #000;\n}\n.k-flatcolorpicker .k-hsv-rectangle.k-dragging,\n.k-flatcolorpicker .k-hsv-rectangle.k-dragging * {\n  cursor: none;\n}\n.k-flatcolorpicker .k-slider-horizontal {\n  height: 20px;\n  width: 90%;\n  margin: 0 5%;\n}\n.k-flatcolorpicker .k-slider-horizontal .k-slider-track {\n  -webkit-box-shadow: 0 1px 0 #fff, 0 -1px 0 #999;\n          box-shadow: 0 1px 0 #fff, 0 -1px 0 #999;\n}\n.k-flatcolorpicker .k-hue-slider,\n.k-flatcolorpicker .k-transparency-slider {\n  display: block;\n}\n.k-flatcolorpicker .k-hue-slider .k-slider-selection,\n.k-flatcolorpicker .k-transparency-slider .k-slider-selection {\n  background: transparent;\n}\n.k-flatcolorpicker .k-hue-slider .k-draghandle,\n.k-flatcolorpicker .k-transparency-slider .k-draghandle {\n  background: transparent;\n  border: 3px solid #eee;\n  margin-top: 1px;\n  height: 8px;\n  width: 8px;\n  -webkit-box-shadow: 0 1px 4px #444;\n          box-shadow: 0 1px 4px #444;\n}\n.k-flatcolorpicker .k-hue-slider .k-draghandle:hover,\n.k-flatcolorpicker .k-transparency-slider .k-draghandle:hover,\n.k-flatcolorpicker .k-hue-slider .k-draghandle:focus,\n.k-flatcolorpicker .k-transparency-slider .k-draghandle:focus {\n  background: transparent;\n  border-color: #fff;\n  -webkit-box-shadow: 0 1px 5px #000;\n          box-shadow: 0 1px 5px #000;\n  border-width: 2px;\n  padding: 1px;\n}\n.k-flatcolorpicker .k-hue-slider .k-slider-track {\n  background: -webkit-gradient(linear, left top, right top, from(#ff0000), color-stop(16%, #ffff00), color-stop(33%, #00ff00), color-stop(50%, #00ffff), color-stop(67%, #0000ff), color-stop(84%, #ff00ff), to(#ff0004));\n  background: -webkit-linear-gradient(left, #ff0000 0%, #ffff00 16%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 84%, #ff0004 100%);\n  background: linear-gradient(to right, #ff0000 0%, #ffff00 16%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 84%, #ff0004 100%);\n}\n.k-flatcolorpicker .k-transparency-slider .k-slider-track {\n  background-image: url(" + __webpack_require__(5) + ");\n  -webkit-background-size: 100% auto;\n          background-size: 100% auto;\n  background-position: 100% 50%;\n  background-repeat: no-repeat;\n}\n.k-flatcolorpicker .k-controls {\n  margin-top: 10px;\n  margin-bottom: 5px;\n  text-align: center;\n  font-size: 90%;\n}\n.k-flatcolorpicker .k-controls .k-button {\n  width: 6em;\n}\n.k-flatcolorpicker .k-hsv-gradient {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(#000000)), -webkit-gradient(linear, left top, right top, from(#ffffff), to(rgba(255, 255, 255, 0)));\n  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, #000000 100%), -webkit-linear-gradient(left, #ffffff 0%, rgba(255, 255, 255, 0) 100%);\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000000 100%), linear-gradient(to right, #ffffff 0%, rgba(255, 255, 255, 0) 100%);\n  height: 180px;\n  margin-bottom: 5px;\n}\n.k-ie9 .k-flatcolorpicker .k-hue-slider .k-slider-track {\n  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmMDAwMCIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjE2JSIgc3RvcC1jb2xvcj0iI2ZmZmYwMCIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjMzJSIgc3RvcC1jb2xvcj0iIzAwZmYwMCIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzAwZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjY3JSIgc3RvcC1jb2xvcj0iIzAwMDBmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9Ijg0JSIgc3RvcC1jb2xvcj0iI2ZmMDBmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZjAwMDQiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);\n}\n.k-ie9 .k-flatcolorpicker .k-hsv-gradient {\n  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+), url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);\n}\n.k-ie8 .k-flatcolorpicker .k-hue-slider .k-slider-track {\n  background: url(" + __webpack_require__(30) + ") repeat 0 50%;\n}\n.k-ie8 .k-flatcolorpicker .k-transparency-slider .k-slider-track {\n  background: url(" + __webpack_require__(5) + ") repeat 0 50%;\n}\n.k-ie8 .k-flatcolorpicker .k-hsv-gradient {\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff',endColorstr='#00ffffff',GradientType=1) progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000',endColorstr='#ff000000',GradientType=0);\n}\n.k-rtl .k-multiselect-wrap {\n  padding-right: 0;\n  padding-left: 22px;\n}\n/* Notification */\n.k-notification-wrap {\n  padding: .6em .5em;\n  cursor: default;\n  position: relative;\n  white-space: nowrap;\n}\n.k-notification-button .k-notification-wrap {\n  padding-right: 20px;\n}\n.k-notification-wrap > .k-i-information,\n.k-notification-wrap > .k-i-information,\n.k-notification-wrap > .k-i-information,\n.k-notification-wrap > .k-i-warning,\n.k-notification-wrap > .k-i-information {\n  vertical-align: text-bottom;\n  margin-right: 4px;\n}\n.k-notification-wrap > .k-i-close {\n  position: absolute;\n  top: 7px;\n  right: 4px;\n  display: none;\n}\n.k-notification-button .k-notification-wrap > .k-i-close {\n  display: block;\n}\n/* Progressbar */\n.k-progressbar {\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n.k-progressbar {\n  border-radius: 4px;\n}\n.k-progressbar-horizontal {\n  width: 27em;\n  height: 1.9em;\n}\n.k-progressbar-vertical {\n  width: 1.9em;\n  height: 27em;\n}\n.k-progressbar > .k-state-selected {\n  position: absolute;\n  border-style: solid;\n  border-width: 1px;\n  overflow: hidden;\n}\n.k-progressbar-horizontal > .k-state-selected,\n.k-rtl .k-progressbar-horizontal.k-progressbar-reverse > .k-state-selected {\n  left: -1px;\n  right: auto;\n  top: -1px;\n  height: 100%;\n  border-radius: 4px 0 0 4px;\n}\n.k-progressbar-horizontal.k-progressbar-reverse > .k-state-selected,\n.k-rtl .k-progressbar-horizontal > .k-state-selected {\n  left: auto;\n  right: -1px;\n  border-radius: 0 4px 4px 0;\n}\n.k-progressbar-vertical > .k-state-selected {\n  left: -1px;\n  bottom: -1px;\n  width: 100%;\n  border-radius: 0 0 4px 4px;\n}\n.k-progressbar-vertical.k-progressbar-reverse > .k-state-selected {\n  bottom: auto;\n  top: -1px;\n  border-radius: 4px 4px 0 0;\n}\n.k-progressbar > .k-state-selected.k-complete,\n.k-rtl .k-progressbar > .k-state-selected.k-complete {\n  border-radius: 4px;\n}\n.k-progressbar > .k-reset {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  white-space: nowrap;\n}\n.k-progressbar-horizontal .k-item {\n  display: inline-block;\n  height: 100%;\n  border-style: solid;\n  margin-left: -1px;\n}\n.k-progressbar-horizontal .k-item.k-first {\n  margin-left: 0;\n}\n.k-progressbar-horizontal .k-item.k-last {\n  border-right-width: 0;\n}\n.k-progressbar-horizontal .k-item,\n.k-rtl .k-progressbar-horizontal.k-progressbar-reverse .k-item {\n  border-width: 1px 0 1px 1px;\n}\n.k-progressbar-horizontal.k-progressbar-reverse .k-item,\n.k-rtl .k-progressbar-horizontal .k-item {\n  border-width: 1px 0 1px 1px;\n}\n.k-progressbar-horizontal .k-first,\n.k-rtl .k-progressbar-horizontal .k-last,\n.k-rtl .k-progressbar-horizontal.k-progressbar-reverse .k-last {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-left-width: 1px;\n}\n.k-progressbar-horizontal .k-last,\n.k-rtl .k-progressbar-horizontal .k-first {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.k-progressbar-horizontal.k-progressbar-reverse .k-last,\n.k-rtl .k-progressbar-horizontal .k-first {\n  border-right-width: 1px;\n}\n.k-progressbar-horizontal .k-last.k-state-selected {\n  border-right-width: 1px;\n}\n.k-progressbar-vertical .k-item {\n  width: 100%;\n  border-style: solid;\n  border-width: 1px 1px 0 1px;\n  margin-top: -1px;\n}\n.k-progressbar-vertical .k-item.k-first {\n  margin-top: 0;\n}\n.k-progressbar-vertical li.k-item.k-last {\n  border-bottom-width: 0;\n}\n.k-progressbar-vertical .k-first {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.k-progressbar-vertical .k-last {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-bottom-width: 1px;\n}\n.k-progressbar-vertical.k-progressbar-reverse .k-item {\n  border-width: 0 1px 1px 1px;\n}\n.k-progressbar-vertical.k-progressbar-reverse .k-first {\n  border-top-width: 1px;\n}\n.k-progress-status-wrap {\n  position: absolute;\n  top: -1px;\n  border: 1px solid transparent;\n  line-height: 2em;\n  width: 100%;\n  height: 100%;\n}\n.k-progress-status-wrap,\n.k-rtl .k-progressbar-horizontal.k-progressbar-reverse .k-progress-status-wrap {\n  left: -1px;\n  right: auto;\n  text-align: right;\n}\n.k-progressbar-horizontal.k-progressbar-reverse .k-progress-status-wrap,\n.k-rtl .k-progressbar-horizontal .k-progress-status-wrap {\n  left: auto;\n  right: -1px;\n  text-align: left;\n}\n.k-progressbar-vertical .k-progress-status-wrap {\n  top: auto;\n  bottom: -1px;\n}\n.k-progressbar-vertical.k-progressbar-reverse .k-progress-status-wrap {\n  bottom: auto;\n  top: -1px;\n}\n.k-progress-status {\n  display: inline-block;\n  padding: 0 .5em;\n  min-width: 10px;\n  white-space: nowrap;\n}\n.k-progressbar-vertical.k-progressbar-reverse .k-progress-status {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.k-progressbar-vertical .k-progress-status {\n  -webkit-transform: rotate(-90deg) translateX(-100%);\n      -ms-transform: rotate(-90deg) translateX(-100%);\n          transform: rotate(-90deg) translateX(-100%);\n  -webkit-transform-origin: 0 0;\n      -ms-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n.k-progressbar-vertical.k-progressbar-reverse .k-progress-status {\n  -webkit-transform: rotate(90deg) translateX(-100%);\n      -ms-transform: rotate(90deg) translateX(-100%);\n          transform: rotate(90deg) translateX(-100%);\n  -webkit-transform-origin: 0 100%;\n      -ms-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n}\n.k-ie8 .k-progressbar-vertical .k-progress-status {\n  -webkit-writing-mode: bt-lr;\n      -ms-writing-mode: bt-lr;\n          writing-mode: bt-lr;\n  padding: .5em 0;\n}\n/* Slider */\ndiv.k-slider {\n  position: relative;\n  border-width: 0;\n  background-color: transparent;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.k-slider-vertical {\n  width: 26px;\n  height: 200px;\n  /* default height */\n}\n.k-slider-horizontal {\n  display: inline-block;\n  width: 200px;\n  /* default width */\n  height: 26px;\n}\n.k-slider-wrap {\n  width: 100%;\n  height: 100%;\n}\n.k-slider .k-button,\n.k-grid .k-slider .k-button {\n  position: absolute;\n  top: 0;\n  width: 24px;\n  min-width: 0;\n  height: 24px;\n  margin: 0;\n  padding: 0;\n  outline: 0;\n}\n.k-slider .k-button .k-icon {\n  margin-top: 3px;\n  vertical-align: top;\n}\n.k-state-disabled .k-slider-wrap {\n  filter: alpha(opacity=60);\n  opacity: .6;\n}\n.k-state-disabled .k-slider-wrap .k-slider-items {\n  color: #333;\n}\n.k-slider .k-button-decrease {\n  left: 0;\n}\n.k-slider-vertical .k-button-decrease,\n.k-grid .k-slider-vertical .k-button-decrease {\n  top: auto;\n  bottom: 0;\n}\n.k-slider .k-button-increase {\n  right: 0;\n}\n.k-slider .k-icon,\n.k-slider-track,\n.k-slider .k-tick {\n  cursor: pointer;\n}\n.k-slider-track,\n.k-slider-selection {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n}\n.k-slider-horizontal .k-slider-track,\n.k-slider-horizontal .k-slider-selection {\n  top: 50%;\n  left: 0;\n  height: 8px;\n  margin-top: -4px;\n  background-repeat: repeat-x;\n}\n.k-slider-horizontal .k-slider-buttons .k-slider-track {\n  left: 34px;\n}\n.k-slider-vertical .k-slider-track,\n.k-slider-vertical .k-slider-selection {\n  left: 50%;\n  bottom: 0;\n  width: 8px;\n  margin-left: -4px;\n  background-repeat: repeat-y;\n}\n.k-slider-vertical .k-slider-buttons .k-slider-track {\n  bottom: 34px;\n}\n.k-draghandle {\n  position: absolute;\n  background-repeat: no-repeat;\n  background-color: transparent;\n  text-indent: -3333px;\n  overflow: hidden;\n  text-decoration: none;\n  text-align: center;\n  outline: 0;\n}\n.k-slider-horizontal .k-draghandle {\n  top: -4px;\n  width: 13px;\n  height: 14px;\n}\n.k-slider-vertical .k-draghandle {\n  left: -4px;\n  width: 14px;\n  height: 13px;\n}\n.k-slider-buttons .k-slider-items {\n  margin-left: 34px;\n}\n.k-slider-horizontal .k-slider-items {\n  height: 100%;\n}\n.k-slider-vertical .k-slider-items {\n  padding-top: 1px;\n}\n.k-slider-vertical .k-slider-buttons .k-slider-items {\n  padding-top: 0;\n}\n.k-slider-vertical .k-slider-buttons .k-slider-items {\n  margin: 0;\n  padding-top: 35px;\n}\n.k-slider .k-tick {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n.k-slider-horizontal .k-tick {\n  float: left;\n  height: 100%;\n  text-align: center;\n}\n.k-slider-horizontal .k-tick {\n  background-position: center -92px;\n}\n.k-slider-horizontal .k-slider-topleft .k-tick {\n  background-position: center -122px;\n}\n.k-slider-horizontal .k-slider-bottomright .k-tick {\n  background-position: center -152px;\n}\n.k-slider-horizontal .k-tick-large {\n  background-position: center -2px;\n}\n.k-slider-horizontal .k-slider-topleft .k-tick-large {\n  background-position: center -32px;\n}\n.k-slider-horizontal .k-slider-bottomright .k-tick-large {\n  background-position: center -62px;\n}\n.k-slider-vertical .k-tick {\n  background-position: -92px center;\n}\n.k-slider-vertical .k-slider-topleft .k-tick {\n  background-position: -122px center;\n}\n.k-slider-vertical .k-slider-bottomright .k-tick {\n  background-position: -152px center;\n}\n.k-slider-vertical .k-tick-large {\n  background-position: -2px center;\n}\n.k-slider-vertical .k-slider-topleft .k-tick-large {\n  background-position: -32px center;\n}\n.k-slider-vertical .k-slider-bottomright .k-tick-large {\n  background-position: -62px center;\n}\n.k-slider-horizontal .k-first {\n  background-position: 0 -92px;\n}\n.k-slider-horizontal .k-tick-large.k-first {\n  background-position: 0 -2px;\n}\n.k-slider-horizontal .k-slider-topleft .k-first {\n  background-position: 0 -122px;\n}\n.k-slider-horizontal .k-slider-topleft .k-tick-large.k-first {\n  background-position: 0 -32px;\n}\n.k-slider-horizontal .k-slider-bottomright .k-first {\n  background-position: 0 -152px;\n}\n.k-slider-horizontal .k-slider-bottomright .k-tick-large.k-first {\n  background-position: 0 -62px;\n}\n.k-slider-horizontal .k-last {\n  background-position: 100% -92px;\n}\n.k-slider-horizontal .k-tick-large.k-last {\n  background-position: 100% -2px;\n}\n.k-slider-horizontal .k-slider-topleft .k-last {\n  background-position: 100% -122px;\n}\n.k-slider-horizontal .k-slider-topleft .k-tick-large.k-last {\n  background-position: 100% -32px;\n}\n.k-slider-horizontal .k-slider-bottomright .k-last {\n  background-position: 100% -152px;\n}\n.k-slider-horizontal .k-slider-bottomright .k-tick-large.k-last {\n  background-position: 100% -62px;\n}\n.k-slider-vertical .k-first {\n  background-position: -92px 100%;\n}\n.k-slider-vertical .k-tick-large.k-first {\n  background-position: -2px 100%;\n}\n.k-slider-vertical .k-slider-topleft .k-first {\n  background-position: -122px 100%;\n}\n.k-slider-vertical .k-slider-topleft .k-tick-large.k-first {\n  background-position: -32px 100%;\n}\n.k-slider-vertical .k-slider-bottomright .k-first {\n  background-position: -152px 100%;\n}\n.k-slider-vertical .k-slider-bottomright .k-tick-large.k-first {\n  background-position: -62px 100%;\n}\n.k-slider-vertical .k-last {\n  background-position: -92px 0;\n}\n.k-slider-vertical .k-tick-large.k-last {\n  background-position: -2px 0;\n}\n.k-slider-vertical .k-slider-topleft .k-last {\n  background-position: -122px 0;\n}\n.k-slider-vertical .k-slider-topleft .k-tick-large.k-last {\n  background-position: -32px 0;\n}\n.k-slider-vertical .k-slider-bottomright .k-last {\n  background-position: -152px 0;\n}\n.k-slider-vertical .k-slider-bottomright .k-tick-large.k-last {\n  background-position: -62px 0;\n}\n.k-slider-vertical .k-tick {\n  text-align: right;\n}\n.k-slider-vertical .k-slider-topleft .k-tick {\n  text-align: left;\n}\n.k-slider .k-label {\n  position: absolute;\n  white-space: nowrap;\n  font-size: .92em;\n}\n.k-slider-horizontal .k-label {\n  left: 0;\n  width: 100%;\n  line-height: 1;\n}\n.k-slider-horizontal .k-first .k-label {\n  left: -50%;\n}\n.k-slider-horizontal .k-last .k-label {\n  left: auto;\n  right: -50%;\n}\n.k-slider-horizontal .k-label {\n  bottom: -1.2em;\n}\n.k-slider-horizontal .k-slider-topleft .k-label {\n  top: -1.2em;\n}\n.k-slider-vertical .k-label {\n  left: 120%;\n  display: block;\n  text-align: left;\n}\n.k-slider-vertical .k-last .k-label {\n  top: -0.5em;\n}\n.k-slider-vertical .k-first .k-label {\n  bottom: -0.5em;\n}\n.k-slider-vertical .k-slider-topleft .k-label {\n  left: auto;\n  right: 120%;\n}\n.k-slider-tooltip {\n  top: -4444px;\n  /*prevent window resize in IE8 when appending*/\n}\n/* Tooltip */\n.k-tooltip {\n  position: absolute;\n  z-index: 12000;\n  border-style: solid;\n  border-width: 0;\n  padding: 5px 5px 5px 6px;\n  background-repeat: repeat-x;\n  min-width: 20px;\n  /*slider tooltip only*/\n  text-align: center;\n  /*slider tooltip only*/\n}\n.k-tooltip-button {\n  text-align: right;\n  height: 0;\n}\n.k-tooltip-content {\n  height: 100%;\n}\n.k-tooltip-closable .k-tooltip-content {\n  padding-right: 20px;\n}\nspan.k-tooltip {\n  position: static;\n  display: inline-block;\n  border-width: 1px;\n  padding: 2px 5px 1px 6px;\n}\n.k-invalid-msg {\n  display: none;\n}\n.k-callout {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 6px;\n  border-color: transparent;\n  pointer-events: none;\n}\n.k-callout-n {\n  top: -12px;\n  left: 50%;\n  pointer-events: none;\n}\n.k-callout-w {\n  top: 50%;\n  left: -12px;\n  pointer-events: none;\n}\n.k-callout-s {\n  left: 50%;\n  bottom: -12px;\n  pointer-events: none;\n}\n.k-callout-e {\n  top: 50%;\n  right: -12px;\n  pointer-events: none;\n}\n.k-slider-tooltip .k-callout-n,\n.k-slider-tooltip .k-callout-s {\n  margin-left: -6px;\n}\n.k-slider-tooltip .k-callout-w,\n.k-slider-tooltip .k-callout-e {\n  margin-top: -6px;\n}\n.k-tooltip-validation .k-i-warning {\n  vertical-align: text-top;\n  margin-right: 3px;\n}\n.k-tooltip-validation {\n  z-index: 9999;\n}\n/* Toolbar */\n.k-toolbar {\n  position: relative;\n  display: block;\n  vertical-align: middle;\n  line-height: 2.9em;\n}\n.k-toolbar .k-button .k-icon,\n.k-toolbar .k-button .k-sprite,\n.k-overflow-container .k-button .k-icon,\n.k-overflow-container .k-button .k-sprite {\n  vertical-align: middle;\n  margin-top: -7px;\n  margin-bottom: -5px;\n}\n.k-toolbar .k-input {\n  line-height: inherit;\n  height: inherit;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.k-toolbar .k-input:before {\n  content: \"\\A0\";\n  display: inline-block;\n  width: 0;\n}\n.k-ie .k-toolbar .k-input {\n  height: 1.65em;\n}\n.k-toolbar .k-combobox .k-dropdown-wrap:before,\n.k-toolbar .k-picker-wrap:before,\n.k-toolbar .k-numeric-wrap:before {\n  display: none;\n}\n.k-overflow-container .k-sprite {\n  margin-left: -4px;\n}\n.k-toolbar-resizable {\n  overflow: hidden;\n  white-space: nowrap;\n}\n.k-toolbar > .k-align-left {\n  float: none;\n}\n.k-toolbar > .k-align-right {\n  float: right;\n}\n.k-toolbar > *,\n.k-toolbar .k-button {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 1.72em;\n}\n.k-toolbar .k-separator {\n  border-width: 0 0 0 1px;\n  border-style: solid;\n  width: 1px;\n  line-height: inherit;\n}\n.k-toolbar .k-button-group {\n  list-style-type: none;\n}\n.k-toolbar .k-button-group > li {\n  display: inline-block;\n}\n.k-toolbar .k-button-group .k-button {\n  margin: 0 0 0 -1px;\n  border-radius: 0;\n}\n.k-toolbar .k-button,\n.k-toolbar .k-split-button,\n.k-toolbar .k-button-group,\n.k-toolbar .k-widget,\n.k-toolbar .k-textbox,\n.k-toolbar label,\n.k-toolbar .k-separator {\n  margin: 0 .2em;\n  line-height: 1.72em;\n  vertical-align: middle;\n}\n.k-toolbar .k-split-button {\n  padding-left: 0;\n}\n.k-toolbar .k-split-button .k-button,\n.k-toolbar .k-button-group .k-group-start {\n  margin: 0;\n}\n.k-toolbar .k-split-button .k-split-button-arrow {\n  margin: 0 0 0 -1px;\n}\n.k-toolbar .k-overflow-anchor {\n  border-width: 0 0 0 1px;\n  border-style: solid;\n  height: 3em;\n  width: 3em;\n  line-height: inherit;\n  padding: 0 .5em;\n  margin: 0;\n  position: relative;\n  float: right;\n  border-radius: 0;\n}\n.k-overflow-container .k-item {\n  float: none;\n  border: 0;\n}\n.k-overflow-container .k-separator {\n  border-width: 0 0 1px;\n  border-style: solid;\n  height: 1px;\n  line-height: 0;\n  font-size: 0;\n  padding: 0;\n}\n.k-overflow-container .k-overflow-button,\n.k-split-container .k-button {\n  text-align: left;\n  display: block;\n  background: none;\n  border-color: transparent;\n  white-space: nowrap;\n}\n.k-split-container {\n  margin-top: -1px;\n}\n.k-overflow-container .k-button-group {\n  padding: 0;\n}\n.k-overflow-container .k-button-group > li {\n  display: block;\n}\n.k-overflow-container .k-overflow-group {\n  border-width: 1px 0;\n  border-style: solid;\n  border-radius: 0;\n  padding: 2px 0;\n  margin: 1px 0;\n}\n.k-overflow-container .k-overflow-hidden {\n  display: none;\n}\n.k-overflow-container .k-toolbar-first-visible,\n.k-overflow-container .k-overflow-group + .k-overflow-group,\n.k-overflow-container .k-separator + .k-overflow-group {\n  border-top: 0;\n  margin-top: 0;\n  padding-top: 1px;\n}\n.k-overflow-container .k-overflow-group + .k-separator {\n  display: none;\n}\n.k-overflow-container .k-toolbar-last-visible {\n  border-bottom: 0;\n  margin-bottom: 0;\n  padding-bottom: 1px;\n}\n/* Splitter */\n.k-splitter {\n  position: relative;\n  height: 300px;\n}\n.k-pane > .k-splitter {\n  border-width: 0;\n  overflow: hidden;\n}\n.k-splitter .k-pane {\n  overflow: hidden;\n}\n.k-splitter .k-scrollable {\n  overflow: auto;\n}\n.k-splitter .k-pane-loading {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -8px 0 0 -8px;\n}\n.k-ghost-splitbar,\n.k-splitbar {\n  position: absolute;\n  border-style: solid;\n  font-size: 0;\n  outline: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.k-splitter .k-ghost-splitbar-horizontal,\n.k-splitter .k-splitbar-horizontal {\n  top: 0;\n  width: 5px;\n  border-width: 0 1px;\n  background-repeat: repeat-y;\n}\n.k-ghost-splitbar-vertical,\n.k-splitbar-vertical {\n  left: 0;\n  height: 5px;\n  border-width: 1px 0;\n  background-repeat: repeat-x;\n}\n.k-splitbar-draggable-horizontal {\n  cursor: w-resize;\n}\n.k-splitbar-draggable-vertical {\n  cursor: n-resize;\n}\n.k-splitbar .k-resize-handle {\n  display: none;\n}\n.k-restricted-size-horizontal,\n.k-restricted-size-vertical {\n  background-color: #f00;\n}\n.k-splitbar-horizontal .k-icon {\n  position: absolute;\n  top: 50%;\n  margin-top: -10px;\n}\n.k-splitbar-horizontal .k-i-arrow-60-right {\n  margin-left: -2px;\n}\n.k-splitbar-horizontal.k-splitbar-draggable-horizontal .k-i-arrow-60-right {\n  margin-top: 13px;\n}\n.k-splitbar-horizontal .k-i-arrow-60-left {\n  margin-left: -3px;\n}\n.k-splitbar-horizontal.k-splitbar-draggable-horizontal .k-i-arrow-60-left {\n  margin-top: -28px;\n}\n.k-splitbar-vertical .k-i-arrow-60-up {\n  margin-top: -2px;\n}\n.k-splitbar-vertical .k-i-arrow-60-down {\n  margin-top: -2px;\n}\n.k-splitbar-vertical.k-splitbar-draggable-vertical .k-i-arrow-60-up {\n  margin-left: -17px;\n}\n.k-splitbar-vertical.k-splitbar-draggable-vertical .k-i-arrow-60-down {\n  margin-left: 23px;\n}\n.k-i-arrow-60-up,\n.k-i-arrow-60-right,\n.k-i-arrow-60-down,\n.k-i-arrow-60-left {\n  cursor: pointer;\n}\n.k-splitbar-horizontal .k-icon {\n  position: absolute;\n  top: 50%;\n  width: 7px;\n  height: 20px;\n  margin-top: -10px;\n}\n.k-splitbar-static-horizontal {\n  width: 1px;\n}\n.k-splitbar-static-vertical {\n  height: 1px;\n}\n.k-splitbar-vertical .k-icon {\n  position: absolute;\n  left: 50%;\n}\n.k-splitbar-draggable-vertical .k-resize-handle,\n.k-splitbar-draggable-horizontal .k-resize-handle {\n  display: inline-block;\n  border-radius: 1px;\n}\n.k-splitbar-draggable-horizontal .k-resize-handle {\n  width: 3px;\n  height: 16px;\n  margin-left: 1px;\n}\n.k-splitbar-draggable-vertical .k-resize-handle {\n  width: 16px;\n  height: 3px;\n  margin-top: 1px;\n}\n.k-splitbar .k-i-arrow-60-up,\n.k-splitbar .k-i-arrow-60-right,\n.k-splitbar .k-i-arrow-60-down,\n.k-splitbar .k-i-arrow-60-left {\n  font-size: 10px;\n}\n.k-splitter-resizing {\n  overflow: hidden;\n}\n.k-rtl .k-splitbar-horizontal .k-resize-handle {\n  margin-right: 1px;\n}\n.k-rtl .k-splitbar-horizontal .k-i-arrow-60-right {\n  margin-top: 13px;\n  margin-right: -3px;\n}\n.k-rtl .k-splitbar-horizontal .k-i-arrow-60-left {\n  margin-top: -28px;\n  margin-right: -2px;\n}\n.k-rtl .k-splitbar-vertical .k-i-arrow-60-up {\n  margin-top: -2px;\n  margin-left: -17px;\n}\n.k-rtl .k-splitbar-vertical .k-i-arrow-60-down {\n  margin-top: -2px;\n  margin-left: 23px;\n}\n/* Virtual List */\n.k-virtual-wrap {\n  position: relative;\n}\n.k-virtual-wrap .k-list.k-virtual-list {\n  height: auto;\n}\n.k-virtual-content {\n  overflow-y: scroll;\n  /* has to be scroll, not auto */\n  -webkit-overflow-scrolling: touch;\n  position: relative;\n}\n.k-virtual-list > .k-virtual-content {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.k-virtual-option-label {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.k-virtual-wrap > .k-virtual-header {\n  text-align: right;\n}\n.k-popup .k-item.k-first {\n  position: relative;\n}\n.k-virtual-content > .k-virtual-list > .k-virtual-item {\n  position: absolute;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.k-popup .k-list .k-item > .k-group,\n.k-popup > .k-group-header,\n.k-popup > .k-virtual-wrap > .k-group-header {\n  text-transform: uppercase;\n  font-size: .857em;\n}\n.k-popup .k-list .k-item > .k-group {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0 .5em;\n  line-height: 1.8;\n}\n.k-popup .k-state-hover > .k-group {\n  right: -1px;\n}\n.k-virtual-item.k-first,\n.k-group-header + .k-list > .k-item.k-first,\n.k-static-header + .k-list > .k-item.k-first {\n  border-top-style: solid;\n  border-top-width: 1px;\n  padding-top: 0;\n}\n.k-popup > .k-group-header,\n.k-popup > .k-virtual-wrap > .k-group-header {\n  text-align: right;\n}\n/* Dialog */\n.k-dialog {\n  min-width: 90px;\n  min-height: 3em;\n  max-width: 100%;\n  max-height: 100%;\n}\n.k-window.k-dialog {\n  position: fixed;\n  padding-top: 0;\n}\n.k-dialog .k-dialog-titlebar {\n  position: static;\n  margin: 0;\n  padding: 0.6em 0.8em 1em 0.8em;\n  width: auto;\n}\n.k-dialog .k-dialog-titlebar .k-dialog-title {\n  margin: 0;\n  padding: 0;\n  width: auto;\n  max-width: 98%;\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 1.2em;\n  line-height: 1.2em;\n}\n.k-dialog .k-content {\n  margin: 0;\n  padding: 1.8em 1em 1.8em 1em;\n}\n.k-dialog.k-dialog-titleless .k-content {\n  padding: 2.4em;\n}\n.k-dialog .k-dialog-buttongroup {\n  margin: 0;\n  padding: 0;\n}\n.k-dialog a.k-dialog-action.k-dialog-close {\n  position: absolute;\n  top: .35em;\n  right: 0;\n  cursor: pointer;\n  z-index: 10000;\n}\n.k-dialog.k-dialog-titleless a.k-dialog-action.k-dialog-close {\n  right: .5em;\n  top: 1em;\n}\n.k-dialog.k-alert .k-dialog-titlebar,\n.k-dialog.k-confirm .k-dialog-titlebar,\n.k-dialog.k-prompt .k-dialog-titlebar {\n  background: none;\n  border-bottom: none;\n}\n.k-dialog.k-alert .k-content,\n.k-dialog.k-confirm .k-content {\n  padding: 2.4em;\n}\n.k-dialog.k-prompt .k-content {\n  padding: 1.2em 1.2em 0.6em 1.2em;\n}\n.k-dialog .k-prompt-container {\n  width: auto;\n  padding: 0.6em 1.2em 1.8em 1.2em;\n}\n.k-dialog .k-prompt-container .k-textbox {\n  width: 100%;\n}\n.k-dialog .k-button {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n@font-face {\n  font-family: 'WebComponentsIcons';\n  src: url(" + __webpack_require__(3) + ");\n  src: url(" + __webpack_require__(3) + "#iefix) format('embedded-opentype'), url(" + __webpack_require__(15) + ") format('truetype'), url(" + __webpack_require__(21) + ") format('woff'), url(" + __webpack_require__(14) + "#WebComponentsIcons) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.k-i-arrow-45-up-right:before {\n  content: \"\\E000\";\n}\n.k-i-collapse-ne:before {\n  content: \"\\E000\";\n}\n.k-i-resize-ne:before {\n  content: \"\\E000\";\n}\n.k-i-arrow-45-down-right:before {\n  content: \"\\E001\";\n}\n.k-i-collapse-se:before {\n  content: \"\\E001\";\n}\n.k-i-collapse:before {\n  content: \"\\E001\";\n}\n.k-i-resize-se:before {\n  content: \"\\E001\";\n}\n.k-i-arrow-45-down-left:before {\n  content: \"\\E002\";\n}\n.k-i-collapse-sw:before {\n  content: \"\\E002\";\n}\n.k-i-resize-sw:before {\n  content: \"\\E002\";\n}\n.k-i-arrow-45-up-left:before {\n  content: \"\\E003\";\n}\n.k-i-collapse-nw:before {\n  content: \"\\E003\";\n}\n.k-i-resize-new:before {\n  content: \"\\E003\";\n}\n.k-i-arrow-60-up:before {\n  content: \"\\E004\";\n}\n.k-i-arrow-n:before {\n  content: \"\\E004\";\n}\n.k-i-arrow-60-right:before {\n  content: \"\\E005\";\n}\n.k-i-arrow-e:before {\n  content: \"\\E005\";\n}\n.k-i-expand:before {\n  content: \"\\E005\";\n}\n.k-i-arrow-60-down:before {\n  content: \"\\E006\";\n}\n.k-i-arrow-s:before {\n  content: \"\\E006\";\n}\n.k-i-arrow-60-left:before {\n  content: \"\\E007\";\n}\n.k-i-arrow-w:before {\n  content: \"\\E007\";\n}\n.k-i-arrow-end-up:before {\n  content: \"\\E008\";\n}\n.k-i-seek-n:before {\n  content: \"\\E008\";\n}\n.k-i-arrow-end-right:before {\n  content: \"\\E009\";\n}\n.k-i-seek-e:before {\n  content: \"\\E009\";\n}\n.k-i-arrow-end-down:before {\n  content: \"\\E00A\";\n}\n.k-i-seek-s:before {\n  content: \"\\E00A\";\n}\n.k-i-arrow-end-left:before {\n  content: \"\\E00B\";\n}\n.k-i-seek-w:before {\n  content: \"\\E00B\";\n}\n.k-i-arrow-double-60-up:before {\n  content: \"\\E00C\";\n}\n.k-i-arrow-seek-up:before {\n  content: \"\\E00C\";\n}\n.k-i-arrow-double-60-right:before {\n  content: \"\\E00D\";\n}\n.k-i-arrow-seek-right:before {\n  content: \"\\E00D\";\n}\n.k-i-arrow-double-60-down:before {\n  content: \"\\E00E\";\n}\n.k-i-arrow-seek-down:before {\n  content: \"\\E00E\";\n}\n.k-i-arrow-double-60-left:before {\n  content: \"\\E00F\";\n}\n.k-i-arrow-seek-left:before {\n  content: \"\\E00F\";\n}\n.k-i-arrows-kpi:before {\n  content: \"\\E010\";\n}\n.k-i-kpi:before {\n  content: \"\\E010\";\n}\n.k-i-arrows-no-change:before {\n  content: \"\\E011\";\n}\n.k-i-arrow-overflow-down:before {\n  content: \"\\E012\";\n}\n.k-i-arrow-chevron-up:before {\n  content: \"\\E013\";\n}\n.k-i-arrow-chevron-right:before {\n  content: \"\\E014\";\n}\n.k-i-arrow-chevron-down:before {\n  content: \"\\E015\";\n}\n.k-i-arrow-chevron-left:before {\n  content: \"\\E016\";\n}\n.k-i-arrow-up:before {\n  content: \"\\E017\";\n}\n.k-i-arrow-right:before {\n  content: \"\\E018\";\n}\n.k-i-arrow-down:before {\n  content: \"\\E019\";\n}\n.k-i-arrow-left:before {\n  content: \"\\E01A\";\n}\n.k-i-arrow-drill:before {\n  content: \"\\E01B\";\n}\n.k-i-arrow-parent:before {\n  content: \"\\E01C\";\n}\n.k-i-arrow-root:before {\n  content: \"\\E01D\";\n}\n.k-i-arrows-resizing:before {\n  content: \"\\E01E\";\n}\n.k-i-arrows-dimensions:before {\n  content: \"\\E01F\";\n}\n.k-i-arrows-swap:before {\n  content: \"\\E020\";\n}\n.k-i-drag-and-drop:before {\n  content: \"\\E021\";\n}\n.k-i-categorize:before {\n  content: \"\\E022\";\n}\n.k-i-grid:before {\n  content: \"\\E023\";\n}\n.k-i-grid-layout:before {\n  content: \"\\E024\";\n}\n.k-i-group:before {\n  content: \"\\E025\";\n}\n.k-i-ungroup:before {\n  content: \"\\E026\";\n}\n.k-i-handler-drag:before {\n  content: \"\\E027\";\n}\n.k-i-layout:before {\n  content: \"\\E028\";\n}\n.k-i-layout-1-by-4:before {\n  content: \"\\E029\";\n}\n.k-i-layout-2-by-2:before {\n  content: \"\\E02A\";\n}\n.k-i-layout-side-by-side:before {\n  content: \"\\E02B\";\n}\n.k-i-layout-stacked:before {\n  content: \"\\E02C\";\n}\n.k-i-columns:before {\n  content: \"\\E02D\";\n}\n.k-i-rows:before {\n  content: \"\\E02E\";\n}\n.k-i-reorder:before {\n  content: \"\\E02F\";\n}\n.k-i-menu:before {\n  content: \"\\E030\";\n}\n.k-i-more-vertical:before {\n  content: \"\\E031\";\n}\n.k-i-more-horizontal:before {\n  content: \"\\E032\";\n}\n.k-i-undo:before {\n  content: \"\\E100\";\n}\n.k-i-redo:before {\n  content: \"\\E101\";\n}\n.k-i-reset:before {\n  content: \"\\E102\";\n}\n.k-i-reload:before {\n  content: \"\\E103\";\n}\n.k-i-refresh:before {\n  content: \"\\E103\";\n}\n.k-i-non-recurrence:before {\n  content: \"\\E104\";\n}\n.k-i-reset-sm:before {\n  content: \"\\E105\";\n}\n.k-i-reload-sm:before {\n  content: \"\\E106\";\n}\n.k-i-refresh-sm:before {\n  content: \"\\E106\";\n}\n.k-i-clock:before {\n  content: \"\\E107\";\n}\n.k-i-calendar:before {\n  content: \"\\E108\";\n}\n.k-i-save:before {\n  content: \"\\E109\";\n}\n.k-i-floppy:before {\n  content: \"\\E109\";\n}\n.k-i-print:before {\n  content: \"\\E10A\";\n}\n.k-i-printer:before {\n  content: \"\\E10A\";\n}\n.k-i-edit:before {\n  content: \"\\E10B\";\n}\n.k-i-pencil:before {\n  content: \"\\E10B\";\n}\n.k-i-delete:before {\n  content: \"\\E10C\";\n}\n.k-i-trash:before {\n  content: \"\\E10C\";\n}\n.k-i-attachment:before {\n  content: \"\\E10D\";\n}\n.k-i-clip:before {\n  content: \"\\E10D\";\n}\n.k-i-attachment-45:before {\n  content: \"\\E10E\";\n}\n.k-i-clip-45:before {\n  content: \"\\E10E\";\n}\n.k-i-link-horizontal:before {\n  content: \"\\E10F\";\n}\n.k-i-hyperlink:before {\n  content: \"\\E10F\";\n}\n.k-i-unlink-horizontal:before {\n  content: \"\\E110\";\n}\n.k-i-hyperlink-remove:before {\n  content: \"\\E110\";\n}\n.k-i-link-vertical:before {\n  content: \"\\E111\";\n}\n.k-i-unlink-vertical:before {\n  content: \"\\E112\";\n}\n.k-i-lock:before {\n  content: \"\\E113\";\n}\n.k-i-unlock:before {\n  content: \"\\E114\";\n}\n.k-i-cancel:before {\n  content: \"\\E115\";\n}\n.k-i-cancel-outline:before {\n  content: \"\\E116\";\n}\n.k-i-cancel-circle:before {\n  content: \"\\E117\";\n}\n.k-i-check:before {\n  content: \"\\E118\";\n}\n.k-i-checkmark:before {\n  content: \"\\E118\";\n}\n.k-i-success:before {\n  content: \"\\E118\";\n}\n.k-i-check-outline:before {\n  content: \"\\E119\";\n}\n.k-i-checkmark-outline:before {\n  content: \"\\E119\";\n}\n.k-i-check-circle:before {\n  content: \"\\E11A\";\n}\n.k-i-checkmark-circle:before {\n  content: \"\\E11A\";\n}\n.k-i-close:before {\n  content: \"\\E11B\";\n}\n.k-i-x:before {\n  content: \"\\E11B\";\n}\n.k-i-close-outline:before {\n  content: \"\\E11C\";\n}\n.k-i-x-outline:before {\n  content: \"\\E11C\";\n}\n.k-i-close-circle:before {\n  content: \"\\E11D\";\n}\n.k-i-x-circle:before {\n  content: \"\\E11D\";\n}\n.k-i-plus:before {\n  content: \"\\E11E\";\n}\n.k-i-add:before {\n  content: \"\\E11E\";\n}\n.k-i-plus-outline:before {\n  content: \"\\E11F\";\n}\n.k-i-plus-circle:before {\n  content: \"\\E120\";\n}\n.k-i-minus:before {\n  content: \"\\E121\";\n}\n.k-i-minus-outline:before {\n  content: \"\\E122\";\n}\n.k-i-minus-circle:before {\n  content: \"\\E123\";\n}\n.k-i-sort-asc:before {\n  content: \"\\E124\";\n}\n.k-i-sort-desc:before {\n  content: \"\\E125\";\n}\n.k-i-unsort:before {\n  content: \"\\E126\";\n}\n.k-i-sort-clear:before {\n  content: \"\\E126\";\n}\n.k-i-sort-asc-sm:before {\n  content: \"\\E127\";\n}\n.k-i-sort-desc-sm:before {\n  content: \"\\E128\";\n}\n.k-i-filter:before {\n  content: \"\\E129\";\n}\n.k-i-filter-clear:before {\n  content: \"\\E12A\";\n}\n.k-i-filter-sm:before {\n  content: \"\\E12B\";\n}\n.k-i-filter-sort-asc-sm:before {\n  content: \"\\E12C\";\n}\n.k-i-filter-sort-desc-sm:before {\n  content: \"\\E12D\";\n}\n.k-i-filter-add-expression:before {\n  content: \"\\E12E\";\n}\n.k-i-filter-add-group:before {\n  content: \"\\E12F\";\n}\n.k-i-login:before {\n  content: \"\\E130\";\n}\n.k-i-logout:before {\n  content: \"\\E131\";\n}\n.k-i-download:before {\n  content: \"\\E132\";\n}\n.k-i-upload:before {\n  content: \"\\E133\";\n}\n.k-i-hyperlink-open:before {\n  content: \"\\E134\";\n}\n.k-i-hyperlink-open-sm:before {\n  content: \"\\E135\";\n}\n.k-i-launch:before {\n  content: \"\\E136\";\n}\n.k-i-window:before {\n  content: \"\\E137\";\n}\n.k-i-window-maximize:before {\n  content: \"\\E137\";\n}\n.k-i-windows:before {\n  content: \"\\E138\";\n}\n.k-i-window-restore:before {\n  content: \"\\E138\";\n}\n.k-i-tiles:before {\n  content: \"\\E138\";\n}\n.k-i-window-minimize:before {\n  content: \"\\E139\";\n}\n.k-i-gear:before {\n  content: \"\\E13A\";\n}\n.k-i-cog:before {\n  content: \"\\E13A\";\n}\n.k-i-custom:before {\n  content: \"\\E13A\";\n}\n.k-i-gears:before {\n  content: \"\\E13B\";\n}\n.k-i-cogs:before {\n  content: \"\\E13B\";\n}\n.k-i-wrench:before {\n  content: \"\\E13C\";\n}\n.k-i-settings:before {\n  content: \"\\E13C\";\n}\n.k-i-preview:before {\n  content: \"\\E13D\";\n}\n.k-i-eye:before {\n  content: \"\\E13D\";\n}\n.k-i-zoom:before {\n  content: \"\\E13E\";\n}\n.k-i-search:before {\n  content: \"\\E13E\";\n}\n.k-i-zoom-in:before {\n  content: \"\\E13F\";\n}\n.k-i-zoom-out:before {\n  content: \"\\E140\";\n}\n.k-i-pan:before {\n  content: \"\\E141\";\n}\n.k-i-move:before {\n  content: \"\\E141\";\n}\n.k-i-calculator:before {\n  content: \"\\E142\";\n}\n.k-i-cart:before {\n  content: \"\\E143\";\n}\n.k-i-shopping-cart:before {\n  content: \"\\E143\";\n}\n.k-i-connector:before {\n  content: \"\\E144\";\n}\n.k-i-plus-sm:before {\n  content: \"\\E145\";\n}\n.k-i-minus-sm:before {\n  content: \"\\E146\";\n}\n.k-i-play:before {\n  content: \"\\E200\";\n}\n.k-i-pause:before {\n  content: \"\\E201\";\n}\n.k-i-stop:before {\n  content: \"\\E202\";\n}\n.k-i-rewind:before {\n  content: \"\\E203\";\n}\n.k-i-forward:before {\n  content: \"\\E204\";\n}\n.k-i-volume-down:before {\n  content: \"\\E205\";\n}\n.k-i-volume-up:before {\n  content: \"\\E206\";\n}\n.k-i-volume-off:before {\n  content: \"\\E207\";\n}\n.k-i-hd:before {\n  content: \"\\E208\";\n}\n.k-i-subtitles:before {\n  content: \"\\E209\";\n}\n.k-i-playlist:before {\n  content: \"\\E20A\";\n}\n.k-i-audio:before {\n  content: \"\\E20B\";\n}\n.k-i-heart-outline:before {\n  content: \"\\E300\";\n}\n.k-i-fav-outline:before {\n  content: \"\\E300\";\n}\n.k-i-favorite-outline:before {\n  content: \"\\E300\";\n}\n.k-i-heart:before {\n  content: \"\\E301\";\n}\n.k-i-fav:before {\n  content: \"\\E301\";\n}\n.k-i-favorite:before {\n  content: \"\\E301\";\n}\n.k-i-star-outline:before {\n  content: \"\\E302\";\n}\n.k-i-bookmark-outline:before {\n  content: \"\\E302\";\n}\n.k-i-star:before {\n  content: \"\\E303\";\n}\n.k-i-bookmark:before {\n  content: \"\\E303\";\n}\n.k-i-checkbox:before {\n  content: \"\\E304\";\n}\n.k-i-shape-rect:before {\n  content: \"\\E304\";\n}\n.k-i-checkbox-checked:before {\n  content: \"\\E305\";\n}\n.k-i-tri-state-indeterminate:before {\n  content: \"\\E306\";\n}\n.k-i-tri-state-null:before {\n  content: \"\\E307\";\n}\n.k-i-circle:before {\n  content: \"\\E308\";\n}\n.k-i-radiobutton:before {\n  content: \"\\E309\";\n}\n.k-i-shape-circle:before {\n  content: \"\\E309\";\n}\n.k-i-radiobutton-checked:before {\n  content: \"\\E30A\";\n}\n.k-i-notification:before {\n  content: \"\\E400\";\n}\n.k-i-bell:before {\n  content: \"\\E400\";\n}\n.k-i-information:before {\n  content: \"\\E401\";\n}\n.k-i-info:before {\n  content: \"\\E401\";\n}\n.k-i-question:before {\n  content: \"\\E402\";\n}\n.k-i-help:before {\n  content: \"\\E402\";\n}\n.k-i-warning:before {\n  content: \"\\E403\";\n}\n.k-i-exception:before {\n  content: \"\\E403\";\n}\n.k-i-error:before {\n  content: \"\\E403\";\n}\n.k-i-photo-camera:before {\n  content: \"\\E500\";\n}\n.k-i-image:before {\n  content: \"\\E501\";\n}\n.k-i-photo:before {\n  content: \"\\E501\";\n}\n.k-i-image-export:before {\n  content: \"\\E502\";\n}\n.k-i-photo-export:before {\n  content: \"\\E502\";\n}\n.k-i-zoom-actual-size:before {\n  content: \"\\E503\";\n}\n.k-i-zoom-best-fit:before {\n  content: \"\\E504\";\n}\n.k-i-image-resize:before {\n  content: \"\\E505\";\n}\n.k-i-crop:before {\n  content: \"\\E506\";\n}\n.k-i-mirror:before {\n  content: \"\\E507\";\n}\n.k-i-flip-horizontal:before {\n  content: \"\\E508\";\n}\n.k-i-flip-vertical:before {\n  content: \"\\E509\";\n}\n.k-i-rotate:before {\n  content: \"\\E50A\";\n}\n.k-i-rotate-right:before {\n  content: \"\\E50B\";\n}\n.k-i-rotate-left:before {\n  content: \"\\E50C\";\n}\n.k-i-brush:before {\n  content: \"\\E50D\";\n}\n.k-i-palette:before {\n  content: \"\\E50E\";\n}\n.k-i-paint:before {\n  content: \"\\E50F\";\n}\n.k-i-droplet:before {\n  content: \"\\E50F\";\n}\n.k-i-background:before {\n  content: \"\\E50F\";\n}\n.k-i-line:before {\n  content: \"\\E510\";\n}\n.k-i-shape-line:before {\n  content: \"\\E510\";\n}\n.k-i-brightness-contrast:before {\n  content: \"\\E511\";\n}\n.k-i-saturation:before {\n  content: \"\\E512\";\n}\n.k-i-invert-colors:before {\n  content: \"\\E513\";\n}\n.k-i-transperancy:before {\n  content: \"\\E514\";\n}\n.k-i-opacity:before {\n  content: \"\\E514\";\n}\n.k-i-greyscale:before {\n  content: \"\\E515\";\n}\n.k-i-blur:before {\n  content: \"\\E516\";\n}\n.k-i-sharpen:before {\n  content: \"\\E517\";\n}\n.k-i-shape:before {\n  content: \"\\E518\";\n}\n.k-i-round-corners:before {\n  content: \"\\E519\";\n}\n.k-i-front-element:before {\n  content: \"\\E51A\";\n}\n.k-i-back-element:before {\n  content: \"\\E51B\";\n}\n.k-i-forward-element:before {\n  content: \"\\E51C\";\n}\n.k-i-backward-element:before {\n  content: \"\\E51D\";\n}\n.k-i-align-left-element:before {\n  content: \"\\E51E\";\n}\n.k-i-align-center-element:before {\n  content: \"\\E51F\";\n}\n.k-i-align-right-element:before {\n  content: \"\\E520\";\n}\n.k-i-align-top-element:before {\n  content: \"\\E521\";\n}\n.k-i-align-middle-element:before {\n  content: \"\\E522\";\n}\n.k-i-align-bottom-element:before {\n  content: \"\\E523\";\n}\n.k-i-thumbnails-up:before {\n  content: \"\\E524\";\n}\n.k-i-thumbnails-right:before {\n  content: \"\\E525\";\n}\n.k-i-thumbnails-down:before {\n  content: \"\\E526\";\n}\n.k-i-thumbnails-left:before {\n  content: \"\\E527\";\n}\n.k-i-full-screen:before {\n  content: \"\\E528\";\n}\n.k-i-fullscreen:before {\n  content: \"\\E528\";\n}\n.k-i-full-screen-exit:before {\n  content: \"\\E529\";\n}\n.k-i-fullscreen-exit:before {\n  content: \"\\E529\";\n}\n.k-i-reset-color:before {\n  content: \"\\E52A\";\n}\n.k-i-paint-remove:before {\n  content: \"\\E52A\";\n}\n.k-i-background-remove:before {\n  content: \"\\E52A\";\n}\n.k-i-page-properties:before {\n  content: \"\\E600\";\n}\n.k-i-bold:before {\n  content: \"\\E601\";\n}\n.k-i-italic:before {\n  content: \"\\E602\";\n}\n.k-i-underline:before {\n  content: \"\\E603\";\n}\n.k-i-font-family:before {\n  content: \"\\E604\";\n}\n.k-i-foreground-color:before {\n  content: \"\\E605\";\n}\n.k-i-convert-lowercase:before {\n  content: \"\\E606\";\n}\n.k-i-convert-uppercase:before {\n  content: \"\\E607\";\n}\n.k-i-strikethrough:before {\n  content: \"\\E608\";\n}\n.k-i-sub-script:before {\n  content: \"\\E609\";\n}\n.k-i-sup-script:before {\n  content: \"\\E60A\";\n}\n.k-i-div:before {\n  content: \"\\E60B\";\n}\n.k-i-all:before {\n  content: \"\\E60C\";\n}\n.k-i-h1:before {\n  content: \"\\E60D\";\n}\n.k-i-h2:before {\n  content: \"\\E60E\";\n}\n.k-i-h3:before {\n  content: \"\\E60F\";\n}\n.k-i-h4:before {\n  content: \"\\E610\";\n}\n.k-i-h5:before {\n  content: \"\\E611\";\n}\n.k-i-h6:before {\n  content: \"\\E612\";\n}\n.k-i-list-ordered:before {\n  content: \"\\E613\";\n}\n.k-i-list-numbered:before {\n  content: \"\\E613\";\n}\n.k-i-list-unordered:before {\n  content: \"\\E614\";\n}\n.k-i-list-bulleted:before {\n  content: \"\\E614\";\n}\n.k-i-indent-increase:before {\n  content: \"\\E615\";\n}\n.k-i-indent:before {\n  content: \"\\E615\";\n}\n.k-i-indent-decrease:before {\n  content: \"\\E616\";\n}\n.k-i-outdent:before {\n  content: \"\\E616\";\n}\n.k-i-insert-up:before {\n  content: \"\\E617\";\n}\n.k-i-insert-top:before {\n  content: \"\\E617\";\n}\n.k-i-insert-middle:before {\n  content: \"\\E618\";\n}\n.k-i-insert-down:before {\n  content: \"\\E619\";\n}\n.k-i-insert-bottom:before {\n  content: \"\\E619\";\n}\n.k-i-align-top:before {\n  content: \"\\E61A\";\n}\n.k-i-align-middle:before {\n  content: \"\\E61B\";\n}\n.k-i-align-bottom:before {\n  content: \"\\E61C\";\n}\n.k-i-align-left:before {\n  content: \"\\E61D\";\n}\n.k-i-align-center:before {\n  content: \"\\E61E\";\n}\n.k-i-align-right:before {\n  content: \"\\E61F\";\n}\n.k-i-align-justify:before {\n  content: \"\\E620\";\n}\n.k-i-align-remove:before {\n  content: \"\\E621\";\n}\n.k-i-text-wrap:before {\n  content: \"\\E622\";\n}\n.k-i-rule-horizontal:before {\n  content: \"\\E623\";\n}\n.k-i-table-align-top-left:before {\n  content: \"\\E624\";\n}\n.k-i-table-align-top-center:before {\n  content: \"\\E625\";\n}\n.k-i-table-align-top-right:before {\n  content: \"\\E626\";\n}\n.k-i-table-align-middle-left:before {\n  content: \"\\E627\";\n}\n.k-i-table-align-middle-center:before {\n  content: \"\\E628\";\n}\n.k-i-table-align-middle-right:before {\n  content: \"\\E629\";\n}\n.k-i-table-align-bottom-left:before {\n  content: \"\\E62A\";\n}\n.k-i-table-align-bottom-center:before {\n  content: \"\\E62B\";\n}\n.k-i-table-align-bottom-right:before {\n  content: \"\\E62C\";\n}\n.k-i-table-align-remove:before {\n  content: \"\\E62D\";\n}\n.k-i-borders-all:before {\n  content: \"\\E62E\";\n}\n.k-i-all-borders:before {\n  content: \"\\E62E\";\n}\n.k-i-borders-outside:before {\n  content: \"\\E62F\";\n}\n.k-i-outside-borders:before {\n  content: \"\\E62F\";\n}\n.k-i-borders-inside:before {\n  content: \"\\E630\";\n}\n.k-i-inside-borders:before {\n  content: \"\\E630\";\n}\n.k-i-borders-inside-horizontal:before {\n  content: \"\\E631\";\n}\n.k-i-inside-horizontal-borders:before {\n  content: \"\\E631\";\n}\n.k-i-borders-inside-vertical:before {\n  content: \"\\E632\";\n}\n.k-i-inside-vertical-borders:before {\n  content: \"\\E632\";\n}\n.k-i-border-top:before {\n  content: \"\\E633\";\n}\n.k-i-top-border:before {\n  content: \"\\E633\";\n}\n.k-i-border-bottom:before {\n  content: \"\\E634\";\n}\n.k-i-bottom-border:before {\n  content: \"\\E634\";\n}\n.k-i-border-left:before {\n  content: \"\\E635\";\n}\n.k-i-left-border:before {\n  content: \"\\E635\";\n}\n.k-i-border-right:before {\n  content: \"\\E636\";\n}\n.k-i-right-border:before {\n  content: \"\\E636\";\n}\n.k-i-border-no:before {\n  content: \"\\E637\";\n}\n.k-i-no-border:before {\n  content: \"\\E637\";\n}\n.k-i-borders-show-hide:before {\n  content: \"\\E638\";\n}\n.k-i-form:before {\n  content: \"\\E639\";\n}\n.k-i-border:before {\n  content: \"\\E639\";\n}\n.k-i-form-element:before {\n  content: \"\\E63A\";\n}\n.k-i-code-snippet:before {\n  content: \"\\E63B\";\n}\n.k-i-select-all:before {\n  content: \"\\E63C\";\n}\n.k-i-button:before {\n  content: \"\\E63D\";\n}\n.k-i-select-box:before {\n  content: \"\\E63E\";\n}\n.k-i-calendar-date:before {\n  content: \"\\E63F\";\n}\n.k-i-group-box:before {\n  content: \"\\E640\";\n}\n.k-i-textarea:before {\n  content: \"\\E641\";\n}\n.k-i-textbox:before {\n  content: \"\\E642\";\n}\n.k-i-textbox-hidden:before {\n  content: \"\\E643\";\n}\n.k-i-password:before {\n  content: \"\\E644\";\n}\n.k-i-paragraph-add:before {\n  content: \"\\E645\";\n}\n.k-i-edit-tools:before {\n  content: \"\\E646\";\n}\n.k-i-template-manager:before {\n  content: \"\\E647\";\n}\n.k-i-change-manually:before {\n  content: \"\\E648\";\n}\n.k-i-track-changes:before {\n  content: \"\\E649\";\n}\n.k-i-track-changes-enable:before {\n  content: \"\\E64A\";\n}\n.k-i-track-changes-accept:before {\n  content: \"\\E64B\";\n}\n.k-i-track-changes-accept-all:before {\n  content: \"\\E64C\";\n}\n.k-i-track-changes-reject:before {\n  content: \"\\E64D\";\n}\n.k-i-track-changes-reject-all:before {\n  content: \"\\E64E\";\n}\n.k-i-document-manager:before {\n  content: \"\\E64F\";\n}\n.k-i-custom-icon:before {\n  content: \"\\E650\";\n}\n.k-i-dictionary-add:before {\n  content: \"\\E651\";\n}\n.k-i-image-light-dialog:before {\n  content: \"\\E652\";\n}\n.k-i-image-insert:before {\n  content: \"\\E652\";\n}\n.k-i-image-edit:before {\n  content: \"\\E653\";\n}\n.k-i-image-map-editor:before {\n  content: \"\\E654\";\n}\n.k-i-comment:before {\n  content: \"\\E655\";\n}\n.k-i-comment-remove:before {\n  content: \"\\E656\";\n}\n.k-i-comments-remove-all:before {\n  content: \"\\E657\";\n}\n.k-i-silverlight:before {\n  content: \"\\E658\";\n}\n.k-i-media-manager:before {\n  content: \"\\E659\";\n}\n.k-i-video-external:before {\n  content: \"\\E65A\";\n}\n.k-i-flash-manager:before {\n  content: \"\\E65B\";\n}\n.k-i-find-and-replace:before {\n  content: \"\\E65C\";\n}\n.k-i-find:before {\n  content: \"\\E65C\";\n}\n.k-i-copy:before {\n  content: \"\\E65D\";\n}\n.k-i-files:before {\n  content: \"\\E65D\";\n}\n.k-i-cut:before {\n  content: \"\\E65E\";\n}\n.k-i-paste:before {\n  content: \"\\E65F\";\n}\n.k-i-paste-as-html:before {\n  content: \"\\E660\";\n}\n.k-i-paste-from-word:before {\n  content: \"\\E661\";\n}\n.k-i-paste-from-word-strip-file:before {\n  content: \"\\E662\";\n}\n.k-i-paste-html:before {\n  content: \"\\E663\";\n}\n.k-i-paste-markdown:before {\n  content: \"\\E664\";\n}\n.k-i-paste-plain-text:before {\n  content: \"\\E665\";\n}\n.k-i-apply-format:before {\n  content: \"\\E666\";\n}\n.k-i-clear-css:before {\n  content: \"\\E667\";\n}\n.k-i-copy-format:before {\n  content: \"\\E668\";\n}\n.k-i-strip-all-formating:before {\n  content: \"\\E669\";\n}\n.k-i-strip-css-format:before {\n  content: \"\\E66A\";\n}\n.k-i-strip-font-elements:before {\n  content: \"\\E66B\";\n}\n.k-i-strip-span-elements:before {\n  content: \"\\E66C\";\n}\n.k-i-strip-word-formatting:before {\n  content: \"\\E66D\";\n}\n.k-i-format-code-block:before {\n  content: \"\\E66E\";\n}\n.k-i-style-builder:before {\n  content: \"\\E66F\";\n}\n.k-i-module-manager:before {\n  content: \"\\E670\";\n}\n.k-i-hyperlink-light-dialog:before {\n  content: \"\\E671\";\n}\n.k-i-hyperlink-insert:before {\n  content: \"\\E671\";\n}\n.k-i-hyperlink-globe:before {\n  content: \"\\E672\";\n}\n.k-i-hyperlink-globe-remove:before {\n  content: \"\\E673\";\n}\n.k-i-hyperlink-email:before {\n  content: \"\\E674\";\n}\n.k-i-anchor:before {\n  content: \"\\E675\";\n}\n.k-i-table-light-dialog:before {\n  content: \"\\E676\";\n}\n.k-i-table-insert:before {\n  content: \"\\E676\";\n}\n.k-i-table:before {\n  content: \"\\E677\";\n}\n.k-i-table-properties:before {\n  content: \"\\E678\";\n}\n.k-i-table-wizard:before {\n  content: \"\\E678\";\n}\n.k-i-table-cell:before {\n  content: \"\\E679\";\n}\n.k-i-table-cell-properties:before {\n  content: \"\\E67A\";\n}\n.k-i-table-column-insert-left:before {\n  content: \"\\E67B\";\n}\n.k-i-table-column-insert-right:before {\n  content: \"\\E67C\";\n}\n.k-i-table-row-insert-above:before {\n  content: \"\\E67D\";\n}\n.k-i-table-row-insert-below:before {\n  content: \"\\E67E\";\n}\n.k-i-table-column-delete:before {\n  content: \"\\E67F\";\n}\n.k-i-table-row-delete:before {\n  content: \"\\E680\";\n}\n.k-i-table-cell-delete:before {\n  content: \"\\E681\";\n}\n.k-i-table-delete:before {\n  content: \"\\E682\";\n}\n.k-i-cells-merge:before {\n  content: \"\\E683\";\n}\n.k-i-cells-merge-horizontally:before {\n  content: \"\\E684\";\n}\n.k-i-cells-merge-vertically:before {\n  content: \"\\E685\";\n}\n.k-i-cell-split-horizontally:before {\n  content: \"\\E686\";\n}\n.k-i-cell-split-vertically:before {\n  content: \"\\E687\";\n}\n.k-i-table-unmerge:before {\n  content: \"\\E688\";\n}\n.k-i-pane-freeze:before {\n  content: \"\\E689\";\n}\n.k-i-row-freeze:before {\n  content: \"\\E68A\";\n}\n.k-i-column-freeze:before {\n  content: \"\\E68B\";\n}\n.k-i-toolbar-float:before {\n  content: \"\\E68C\";\n}\n.k-i-spell-checker:before {\n  content: \"\\E68D\";\n}\n.k-i-validation-xhtml:before {\n  content: \"\\E68E\";\n}\n.k-i-validation-data:before {\n  content: \"\\E68F\";\n}\n.k-i-toggle-full-screen-mode:before {\n  content: \"\\E690\";\n}\n.k-i-formula-fx:before {\n  content: \"\\E691\";\n}\n.k-i-sum:before {\n  content: \"\\E692\";\n}\n.k-i-symbol:before {\n  content: \"\\E693\";\n}\n.k-i-dollar:before {\n  content: \"\\E694\";\n}\n.k-i-currency:before {\n  content: \"\\E694\";\n}\n.k-i-percent:before {\n  content: \"\\E695\";\n}\n.k-i-custom-format:before {\n  content: \"\\E696\";\n}\n.k-i-decimal-increase:before {\n  content: \"\\E697\";\n}\n.k-i-decimal-decrease:before {\n  content: \"\\E698\";\n}\n.k-i-font-size:before {\n  content: \"\\E699\";\n}\n.k-i-image-absolute-position:before {\n  content: \"\\E69A\";\n}\n.k-i-globe-outline:before {\n  content: \"\\E700\";\n}\n.k-i-globe:before {\n  content: \"\\E701\";\n}\n.k-i-marker-pin:before {\n  content: \"\\E702\";\n}\n.k-i-marker-pin-target:before {\n  content: \"\\E703\";\n}\n.k-i-pin:before {\n  content: \"\\E704\";\n}\n.k-i-unpin:before {\n  content: \"\\E705\";\n}\n.k-i-share:before {\n  content: \"\\E800\";\n}\n.k-i-user:before {\n  content: \"\\E801\";\n}\n.k-i-inbox:before {\n  content: \"\\E802\";\n}\n.k-i-blogger:before {\n  content: \"\\E803\";\n}\n.k-i-blogger-box:before {\n  content: \"\\E804\";\n}\n.k-i-delicious:before {\n  content: \"\\E805\";\n}\n.k-i-delicious-box:before {\n  content: \"\\E806\";\n}\n.k-i-digg:before {\n  content: \"\\E807\";\n}\n.k-i-digg-box:before {\n  content: \"\\E808\";\n}\n.k-i-email:before {\n  content: \"\\E809\";\n}\n.k-i-envelop:before {\n  content: \"\\E809\";\n}\n.k-i-letter:before {\n  content: \"\\E809\";\n}\n.k-i-email-box:before {\n  content: \"\\E80A\";\n}\n.k-i-envelop-box:before {\n  content: \"\\E80A\";\n}\n.k-i-letter-box:before {\n  content: \"\\E80A\";\n}\n.k-i-facebook:before {\n  content: \"\\E80B\";\n}\n.k-i-facebook-box:before {\n  content: \"\\E80C\";\n}\n.k-i-google:before {\n  content: \"\\E80D\";\n}\n.k-i-google-box:before {\n  content: \"\\E80E\";\n}\n.k-i-google-plus:before {\n  content: \"\\E80F\";\n}\n.k-i-google-plus-box:before {\n  content: \"\\E810\";\n}\n.k-i-linkedin:before {\n  content: \"\\E811\";\n}\n.k-i-linkedin-box:before {\n  content: \"\\E812\";\n}\n.k-i-myspace:before {\n  content: \"\\E813\";\n}\n.k-i-myspace-box:before {\n  content: \"\\E814\";\n}\n.k-i-pinterest:before {\n  content: \"\\E815\";\n}\n.k-i-pinterest-box:before {\n  content: \"\\E816\";\n}\n.k-i-reddit:before {\n  content: \"\\E817\";\n}\n.k-i-reddit-box:before {\n  content: \"\\E818\";\n}\n.k-i-stumble-upon:before {\n  content: \"\\E819\";\n}\n.k-i-stumble-upon-box:before {\n  content: \"\\E81A\";\n}\n.k-i-tell-a-friend:before {\n  content: \"\\E81B\";\n}\n.k-i-tell-a-friend-box:before {\n  content: \"\\E81C\";\n}\n.k-i-tumblr:before {\n  content: \"\\E81D\";\n}\n.k-i-tumblr-box:before {\n  content: \"\\E81E\";\n}\n.k-i-twitter:before {\n  content: \"\\E81F\";\n}\n.k-i-twitter-box:before {\n  content: \"\\E820\";\n}\n.k-i-yammer:before {\n  content: \"\\E821\";\n}\n.k-i-yammer-box:before {\n  content: \"\\E822\";\n}\n.k-i-behance:before {\n  content: \"\\E823\";\n}\n.k-i-behance-box:before {\n  content: \"\\E824\";\n}\n.k-i-dribbble:before {\n  content: \"\\E825\";\n}\n.k-i-dribbble-box:before {\n  content: \"\\E826\";\n}\n.k-i-rss:before {\n  content: \"\\E827\";\n}\n.k-i-rss-box:before {\n  content: \"\\E828\";\n}\n.k-i-vimeo:before {\n  content: \"\\E829\";\n}\n.k-i-vimeo-box:before {\n  content: \"\\E82A\";\n}\n.k-i-youtube:before {\n  content: \"\\E82B\";\n}\n.k-i-youtube-box:before {\n  content: \"\\E82C\";\n}\n.k-i-folder:before {\n  content: \"\\E900\";\n}\n.k-i-folder-open:before {\n  content: \"\\E901\";\n}\n.k-i-folder-add:before {\n  content: \"\\E902\";\n}\n.k-i-folder-up:before {\n  content: \"\\E903\";\n}\n.k-i-folder-more:before {\n  content: \"\\E904\";\n}\n.k-i-fields-more:before {\n  content: \"\\E904\";\n}\n.k-i-aggregate-fields:before {\n  content: \"\\E905\";\n}\n.k-i-file:before {\n  content: \"\\E906\";\n}\n.k-i-file-vertical:before {\n  content: \"\\E906\";\n}\n.k-i-file-add:before {\n  content: \"\\E907\";\n}\n.k-i-file-txt:before {\n  content: \"\\E908\";\n}\n.k-i-txt:before {\n  content: \"\\E908\";\n}\n.k-i-file-csv:before {\n  content: \"\\E909\";\n}\n.k-i-csv:before {\n  content: \"\\E909\";\n}\n.k-i-file-excel:before {\n  content: \"\\E90A\";\n}\n.k-i-file-xls:before {\n  content: \"\\E90A\";\n}\n.k-i-excel:before {\n  content: \"\\E90A\";\n}\n.k-i-xls:before {\n  content: \"\\E90A\";\n}\n.k-i-file-word:before {\n  content: \"\\E90B\";\n}\n.k-i-file-doc:before {\n  content: \"\\E90B\";\n}\n.k-i-word:before {\n  content: \"\\E90B\";\n}\n.k-i-doc:before {\n  content: \"\\E90B\";\n}\n.k-i-file-mdb:before {\n  content: \"\\E90C\";\n}\n.k-i-mdb:before {\n  content: \"\\E90C\";\n}\n.k-i-file-ppt:before {\n  content: \"\\E90D\";\n}\n.k-i-ppt:before {\n  content: \"\\E90D\";\n}\n.k-i-file-pdf:before {\n  content: \"\\E90E\";\n}\n.k-i-pdf:before {\n  content: \"\\E90E\";\n}\n.k-i-file-psd:before {\n  content: \"\\E90F\";\n}\n.k-i-psd:before {\n  content: \"\\E90F\";\n}\n.k-i-file-flash:before {\n  content: \"\\E910\";\n}\n.k-i-flash:before {\n  content: \"\\E910\";\n}\n.k-i-file-config:before {\n  content: \"\\E911\";\n}\n.k-i-config:before {\n  content: \"\\E911\";\n}\n.k-i-file-ascx:before {\n  content: \"\\E912\";\n}\n.k-i-ascx:before {\n  content: \"\\E912\";\n}\n.k-i-file-bac:before {\n  content: \"\\E913\";\n}\n.k-i-bac:before {\n  content: \"\\E913\";\n}\n.k-i-file-zip:before {\n  content: \"\\E914\";\n}\n.k-i-zip:before {\n  content: \"\\E914\";\n}\n.k-i-film:before {\n  content: \"\\E915\";\n}\n.k-i-css3:before {\n  content: \"\\E916\";\n}\n.k-i-html5:before {\n  content: \"\\E917\";\n}\n.k-i-html:before {\n  content: \"\\E918\";\n}\n.k-i-source-code:before {\n  content: \"\\E918\";\n}\n.k-i-view-source:before {\n  content: \"\\E918\";\n}\n.k-i-css:before {\n  content: \"\\E919\";\n}\n.k-i-js:before {\n  content: \"\\E91A\";\n}\n.k-i-exe:before {\n  content: \"\\E91B\";\n}\n.k-i-csproj:before {\n  content: \"\\E91C\";\n}\n.k-i-vbproj:before {\n  content: \"\\E91D\";\n}\n.k-i-cs:before {\n  content: \"\\E91E\";\n}\n.k-i-vb:before {\n  content: \"\\E91F\";\n}\n.k-i-sln:before {\n  content: \"\\E920\";\n}\n.k-i-cloud:before {\n  content: \"\\E921\";\n}\n.k-i-file-horizontal:before {\n  content: \"\\E922\";\n}\n/* animation classes */\n.k-fx-end .k-fx-next,\n.k-fx-end .k-fx-current {\n  -webkit-transition: all 350ms ease-out;\n          transition: all 350ms ease-out;\n}\n.k-fx {\n  position: relative;\n}\n.k-fx .k-fx-current {\n  z-index: 0;\n}\n.k-fx .k-fx-next {\n  z-index: 1;\n}\n.k-fx-hidden,\n.k-fx-hidden * {\n  visibility: hidden !important;\n}\n.k-fx-reverse .k-fx-current {\n  z-index: 1;\n}\n.k-fx-reverse .k-fx-next {\n  z-index: 0;\n}\n/* Zoom */\n.k-fx-zoom.k-fx-start .k-fx-next {\n  -webkit-transform: scale(0) !important;\n      -ms-transform: scale(0) !important;\n          transform: scale(0) !important;\n}\n.k-fx-zoom.k-fx-end .k-fx-next {\n  -webkit-transform: scale(1) !important;\n      -ms-transform: scale(1) !important;\n          transform: scale(1) !important;\n}\n.k-fx-zoom.k-fx-reverse.k-fx-start .k-fx-next,\n.k-fx-zoom.k-fx-reverse.k-fx-end .k-fx-next {\n  -webkit-transform: scale(1) !important;\n      -ms-transform: scale(1) !important;\n          transform: scale(1) !important;\n}\n.k-fx-zoom.k-fx-reverse.k-fx-start .k-fx-current {\n  -webkit-transform: scale(1) !important;\n      -ms-transform: scale(1) !important;\n          transform: scale(1) !important;\n}\n.k-fx-zoom.k-fx-reverse.k-fx-end .k-fx-current {\n  -webkit-transform: scale(0) !important;\n      -ms-transform: scale(0) !important;\n          transform: scale(0) !important;\n}\n/* Fade */\n.k-fx-fade.k-fx-start .k-fx-next {\n  will-change: opacity;\n  opacity: 0;\n}\n.k-fx-fade.k-fx-end .k-fx-next {\n  opacity: 1;\n}\n.k-fx-fade.k-fx-reverse.k-fx-start .k-fx-current {\n  will-change: opacity;\n  opacity: 1;\n}\n.k-fx-fade.k-fx-reverse.k-fx-end .k-fx-current {\n  opacity: 0;\n}\n/* Slide */\n.k-fx-slide {\n  /* left */\n  /* left reverse */\n  /* right */\n}\n.k-fx-slide.k-fx-end .k-fx-next .km-content,\n.k-fx-slide.k-fx-end .k-fx-next .km-header,\n.k-fx-slide.k-fx-end .k-fx-next .km-footer,\n.k-fx-slide.k-fx-end .k-fx-current .km-content,\n.k-fx-slide.k-fx-end .k-fx-current .km-header,\n.k-fx-slide.k-fx-end .k-fx-current .km-footer {\n  -webkit-transition: all 350ms ease-out;\n          transition: all 350ms ease-out;\n}\n.k-fx-slide.k-fx-start .k-fx-next .km-content {\n  will-change: transform;\n  -webkit-transform: translatex(100%);\n      -ms-transform: translatex(100%);\n          transform: translatex(100%);\n}\n.k-fx-slide.k-fx-start .k-fx-next .km-header,\n.k-fx-slide.k-fx-start .k-fx-next .km-footer {\n  will-change: opacity;\n  opacity: 0;\n}\n.k-fx-slide.k-fx-end .k-fx-current .km-content {\n  -webkit-transform: translatex(-100%);\n      -ms-transform: translatex(-100%);\n          transform: translatex(-100%);\n}\n.k-fx-slide.k-fx-end .k-fx-next .km-header,\n.k-fx-slide.k-fx-end .k-fx-next .km-footer {\n  opacity: 1;\n}\n.k-fx-slide.k-fx-reverse.k-fx-start .k-fx-current .km-content {\n  will-change: transform;\n  -webkit-transform: translatex(0);\n      -ms-transform: translatex(0);\n          transform: translatex(0);\n}\n.k-fx-slide.k-fx-reverse.k-fx-end .k-fx-current .km-content {\n  -webkit-transform: translatex(100%);\n      -ms-transform: translatex(100%);\n          transform: translatex(100%);\n}\n.k-fx-slide.k-fx-reverse.k-fx-start .k-fx-next .km-content {\n  -webkit-transform: translatex(-100%);\n      -ms-transform: translatex(-100%);\n          transform: translatex(-100%);\n}\n.k-fx-slide.k-fx-reverse.k-fx-end .k-fx-next .km-content {\n  -webkit-transform: translatex(0);\n      -ms-transform: translatex(0);\n          transform: translatex(0);\n}\n.k-fx-slide.k-fx-reverse.k-fx-start .k-fx-current .km-header,\n.k-fx-slide.k-fx-reverse.k-fx-start .k-fx-current .km-footer {\n  will-change: opacity;\n  opacity: 1;\n}\n.k-fx-slide.k-fx-reverse.k-fx-start .k-fx-next .km-header,\n.k-fx-slide.k-fx-reverse.k-fx-start .k-fx-next .km-footer {\n  opacity: 1;\n}\n.k-fx-slide.k-fx-reverse.k-fx-end .k-fx-current .km-header,\n.k-fx-slide.k-fx-reverse.k-fx-end .k-fx-current .km-footer {\n  opacity: 0;\n}\n.k-fx-slide.k-fx-reverse.k-fx-end .k-fx-next .km-header,\n.k-fx-slide.k-fx-reverse.k-fx-end .k-fx-next .km-footer {\n  opacity: 1;\n}\n.k-fx-slide.k-fx-right {\n  /* right reverse */\n}\n.k-fx-slide.k-fx-right.k-fx-start .k-fx-next .km-content {\n  -webkit-transform: translatex(-100%);\n      -ms-transform: translatex(-100%);\n          transform: translatex(-100%);\n}\n.k-fx-slide.k-fx-right.k-fx-end .k-fx-current .km-content {\n  -webkit-transform: translatex(100%);\n      -ms-transform: translatex(100%);\n          transform: translatex(100%);\n}\n.k-fx-slide.k-fx-right.k-fx-reverse.k-fx-start .k-fx-current .km-content {\n  -webkit-transform: translatex(0);\n      -ms-transform: translatex(0);\n          transform: translatex(0);\n}\n.k-fx-slide.k-fx-right.k-fx-reverse.k-fx-end .k-fx-current .km-content {\n  -webkit-transform: translatex(-100%);\n      -ms-transform: translatex(-100%);\n          transform: translatex(-100%);\n}\n.k-fx-slide.k-fx-right.k-fx-reverse.k-fx-start .k-fx-next .km-content {\n  -webkit-transform: translatex(100%);\n      -ms-transform: translatex(100%);\n          transform: translatex(100%);\n}\n.k-fx-slide.k-fx-right.k-fx-reverse.k-fx-end .k-fx-next .km-content {\n  -webkit-transform: translatex(0%);\n      -ms-transform: translatex(0%);\n          transform: translatex(0%);\n}\n/* Tile */\n.k-fx-tile {\n  /* left */\n  /* left reverse */\n  /* right */\n}\n.k-fx-tile.k-fx-start .k-fx-next {\n  will-change: transform;\n  -webkit-transform: translatex(100%);\n      -ms-transform: translatex(100%);\n          transform: translatex(100%);\n}\n.k-fx-tile.k-fx-end .k-fx-current {\n  -webkit-transform: translatex(-100%);\n      -ms-transform: translatex(-100%);\n          transform: translatex(-100%);\n}\n.k-fx-tile.k-fx-reverse.k-fx-start .k-fx-current {\n  will-change: transform;\n  -webkit-transform: translatex(0);\n      -ms-transform: translatex(0);\n          transform: translatex(0);\n}\n.k-fx-tile.k-fx-reverse.k-fx-end .k-fx-current {\n  -webkit-transform: translatex(100%);\n      -ms-transform: translatex(100%);\n          transform: translatex(100%);\n}\n.k-fx-tile.k-fx-reverse.k-fx-start .k-fx-next {\n  -webkit-transform: translatex(-100%);\n      -ms-transform: translatex(-100%);\n          transform: translatex(-100%);\n}\n.k-fx-tile.k-fx-reverse.k-fx-end .k-fx-next {\n  -webkit-transform: translatex(0);\n      -ms-transform: translatex(0);\n          transform: translatex(0);\n}\n.k-fx-tile.k-fx-right {\n  /* right reverse */\n}\n.k-fx-tile.k-fx-right.k-fx-start .k-fx-next {\n  -webkit-transform: translatex(-100%);\n      -ms-transform: translatex(-100%);\n          transform: translatex(-100%);\n}\n.k-fx-tile.k-fx-right.k-fx-end .k-fx-current {\n  -webkit-transform: translatex(100%);\n      -ms-transform: translatex(100%);\n          transform: translatex(100%);\n}\n.k-fx-tile.k-fx-right.k-fx-reverse.k-fx-start .k-fx-current {\n  -webkit-transform: translatex(0);\n      -ms-transform: translatex(0);\n          transform: translatex(0);\n}\n.k-fx-tile.k-fx-right.k-fx-reverse.k-fx-end .k-fx-current {\n  -webkit-transform: translatex(-100%);\n      -ms-transform: translatex(-100%);\n          transform: translatex(-100%);\n}\n.k-fx-tile.k-fx-right.k-fx-reverse.k-fx-start .k-fx-next {\n  -webkit-transform: translatex(100%);\n      -ms-transform: translatex(100%);\n          transform: translatex(100%);\n}\n.k-fx-tile.k-fx-right.k-fx-reverse.k-fx-end .k-fx-next {\n  -webkit-transform: translatex(0%);\n      -ms-transform: translatex(0%);\n          transform: translatex(0%);\n}\n/* Tile */\n.k-fx-tile {\n  /* left */\n  /* left reverse */\n  /* right */\n}\n.k-fx-tile.k-fx-start .k-fx-next {\n  will-change: transform;\n  -webkit-transform: translatex(100%);\n      -ms-transform: translatex(100%);\n          transform: translatex(100%);\n}\n.k-fx-tile.k-fx-end .k-fx-current {\n  -webkit-transform: translatex(-100%);\n      -ms-transform: translatex(-100%);\n          transform: translatex(-100%);\n}\n.k-fx-tile.k-fx-reverse.k-fx-start .k-fx-current {\n  will-change: transform;\n  -webkit-transform: translatex(0);\n      -ms-transform: translatex(0);\n          transform: translatex(0);\n}\n.k-fx-tile.k-fx-reverse.k-fx-end .k-fx-current {\n  -webkit-transform: translatex(100%);\n      -ms-transform: translatex(100%);\n          transform: translatex(100%);\n}\n.k-fx-tile.k-fx-reverse.k-fx-start .k-fx-next {\n  -webkit-transform: translatex(-100%);\n      -ms-transform: translatex(-100%);\n          transform: translatex(-100%);\n}\n.k-fx-tile.k-fx-reverse.k-fx-end .k-fx-next {\n  -webkit-transform: translatex(0);\n      -ms-transform: translatex(0);\n          transform: translatex(0);\n}\n.k-fx-tile.k-fx-right {\n  /* right reverse */\n}\n.k-fx-tile.k-fx-right.k-fx-start .k-fx-next {\n  -webkit-transform: translatex(-100%);\n      -ms-transform: translatex(-100%);\n          transform: translatex(-100%);\n}\n.k-fx-tile.k-fx-right.k-fx-end .k-fx-current {\n  -webkit-transform: translatex(100%);\n      -ms-transform: translatex(100%);\n          transform: translatex(100%);\n}\n.k-fx-tile.k-fx-right.k-fx-reverse.k-fx-start .k-fx-current {\n  -webkit-transform: translatex(0);\n      -ms-transform: translatex(0);\n          transform: translatex(0);\n}\n.k-fx-tile.k-fx-right.k-fx-reverse.k-fx-end .k-fx-current {\n  -webkit-transform: translatex(-100%);\n      -ms-transform: translatex(-100%);\n          transform: translatex(-100%);\n}\n.k-fx-tile.k-fx-right.k-fx-reverse.k-fx-start .k-fx-next {\n  -webkit-transform: translatex(100%);\n      -ms-transform: translatex(100%);\n          transform: translatex(100%);\n}\n.k-fx-tile.k-fx-right.k-fx-reverse.k-fx-end .k-fx-next {\n  -webkit-transform: translatex(0%);\n      -ms-transform: translatex(0%);\n          transform: translatex(0%);\n}\n/* Overlay */\n.k-fx.k-fx-overlay.k-fx-start .k-fx-next,\n.k-fx.k-fx-overlay.k-fx-left.k-fx-start .k-fx-next {\n  will-change: transform;\n  -webkit-transform: translatex(100%);\n      -ms-transform: translatex(100%);\n          transform: translatex(100%);\n}\n.k-fx.k-fx-overlay.k-fx-right.k-fx-start .k-fx-next {\n  -webkit-transform: translatex(-100%);\n      -ms-transform: translatex(-100%);\n          transform: translatex(-100%);\n}\n.k-fx.k-fx-overlay.k-fx-up.k-fx-start .k-fx-next {\n  -webkit-transform: translatey(100%);\n      -ms-transform: translatey(100%);\n          transform: translatey(100%);\n}\n.k-fx.k-fx-overlay.k-fx-down.k-fx-start .k-fx-next {\n  -webkit-transform: translatey(-100%);\n      -ms-transform: translatey(-100%);\n          transform: translatey(-100%);\n}\n.k-fx.k-fx-overlay.k-fx-reverse.k-fx-start .k-fx-next {\n  -webkit-transform: none;\n      -ms-transform: none;\n          transform: none;\n}\n.k-fx.k-fx-overlay.k-fx-reverse.k-fx-start .k-fx-current {\n  will-change: transform;\n  -webkit-transform: none;\n      -ms-transform: none;\n          transform: none;\n}\n.k-fx.k-fx-overlay.k-fx-reverse.k-fx-end .k-fx-current,\n.k-fx.k-fx-overlay.k-fx-reverse.k-fx-left.k-fx-end .k-fx-current {\n  -webkit-transform: translatex(100%);\n      -ms-transform: translatex(100%);\n          transform: translatex(100%);\n}\n.k-fx.k-fx-overlay.k-fx-reverse.k-fx-right.k-fx-end .k-fx-current {\n  -webkit-transform: translatex(-100%);\n      -ms-transform: translatex(-100%);\n          transform: translatex(-100%);\n}\n.k-fx.k-fx-overlay.k-fx-reverse.k-fx-up.k-fx-end .k-fx-current {\n  -webkit-transform: translatey(100%);\n      -ms-transform: translatey(100%);\n          transform: translatey(100%);\n}\n.k-fx.k-fx-overlay.k-fx-reverse.k-fx-down.k-fx-end .k-fx-current {\n  -webkit-transform: translatey(-100%);\n      -ms-transform: translatey(-100%);\n          transform: translatey(-100%);\n}\n", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "/*!\n * Copyright 2017 Telerik AD\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Kendo skin */\n.k-theme-test-class,\n.ktb-theme-id-default {\n  opacity: 0;\n}\n.ktb-var-accent {\n  color: #f35800;\n}\n.ktb-var-base {\n  color: #e9e9e9;\n}\n.ktb-var-background {\n  color: #fff;\n}\n.ktb-var-border-radius {\n  border-radius: 4px;\n}\n.ktb-var-normal-background {\n  color: #fff;\n}\n.ktb-var-normal-gradient {\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.6)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.6) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.6) 0%, rgba(255,255,255,.0) 100%);\n}\n.ktb-var-normal-text-color {\n  color: #2e2e2e;\n}\n.ktb-var-hover-background {\n  color: #bcb4b0;\n}\n.ktb-var-hover-gradient {\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.4)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.4) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.4) 0%, rgba(255,255,255,.0) 100%);\n}\n.ktb-var-hover-text-color {\n  color: #2e2e2e;\n}\n.ktb-var-selected-background {\n  color: #f35800;\n}\n.ktb-var-selected-gradient {\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.2)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.2) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.2) 0%, rgba(255,255,255,.0) 100%);\n}\n.ktb-var-selected-text-color {\n  color: #fff;\n}\n.ktb-var-error {\n  color: #db4240;\n}\n.ktb-var-warning {\n  color: #ffc000;\n}\n.ktb-var-success {\n  color: #37b400;\n}\n.ktb-var-info {\n  color: #0066cc;\n}\n.ktb-var-series-a {\n  color: #ff6800;\n}\n.ktb-var-series-b {\n  color: #a0a700;\n}\n.ktb-var-series-c {\n  color: #ff8d00;\n}\n.ktb-var-series-d {\n  color: #678900;\n}\n.ktb-var-series-e {\n  color: #ffb53c;\n}\n.ktb-var-series-f {\n  color: #396000;\n}\n.k-grid-norecords-template {\n  background-color: #fff;\n  border: 1px solid #d5d5d5;\n}\n.k-in,\n.k-item,\n.k-window-action {\n  border-color: transparent;\n}\n/* main colors */\n.k-icon {\n  color: #2e2e2e;\n}\n.k-icon:hover {\n  color: #2e2e2e;\n}\n.k-button .k-icon {\n  color: #2e2e2e;\n}\n.k-button .k-icon:hover {\n  color: #2e2e2e;\n}\n.k-tool-icon.k-icon {\n  color: #2e2e2e;\n}\n.k-tool.k-state-hover,\n.k-tool.k-state-hover .k-icon,\n.k-tool.k-state-selected .k-icon {\n  color: #fff;\n}\n.k-widget.k-notification .k-icon {\n  color: inherit;\n}\n.k-splitbar .k-resize-handle {\n  background-color: #2e2e2e;\n  color: #2e2e2e;\n}\n.k-splitbar .k-resize-handle:hover {\n  color: #2e2e2e;\n}\n.k-splitbar .k-resize-handle {\n  background-color: #2e2e2e;\n}\n.k-block,\n.k-widget {\n  background-color: #fff;\n}\n.k-block,\n.k-widget,\n.k-input,\n.k-textbox,\n.k-group,\n.k-content,\n.k-header,\n.k-filter-row > th,\n.k-editable-area,\n.k-separator,\n.k-textbox > input,\n.k-autocomplete,\n.k-dropdown-wrap,\n.k-toolbar,\n.k-group-footer td,\n.k-grid-footer,\n.k-footer-template td,\n.k-state-default,\n.k-state-default .k-select,\n.k-state-disabled,\n.k-grid-header,\n.k-grid-header-wrap,\n.k-grid-header-locked,\n.k-grid-footer-locked,\n.k-grid-content-locked,\n.k-grid td,\n.k-grid td.k-state-selected,\n.k-grid-footer-wrap,\n.k-pager-wrap,\n.k-pager-wrap .k-link,\n.k-pager-refresh,\n.k-grouping-header,\n.k-grouping-header .k-group-indicator,\n.k-panelbar > .k-item > .k-link,\n.k-panel > .k-item > .k-link,\n.k-panelbar .k-panel,\n.k-panelbar .k-content,\n.k-treemap-tile,\n.k-calendar th,\n.k-slider-track,\n.k-splitbar,\n.k-dropzone-active,\n.k-tiles,\n.k-toolbar,\n.k-tooltip,\n.k-button-group .k-tool,\n.k-upload-files,\n.k-popup.k-align .k-list .k-item:last-child,\n.k-editor-dialog .k-tabstrip-items {\n  border-color: #d5d5d5;\n}\n.k-group,\n.k-toolbar,\n.k-grouping-header,\n.k-pager-wrap,\n.k-group-footer td,\n.k-grid-footer,\n.k-footer-template td,\n.k-widget .k-status,\n.k-calendar th,\n.k-calendar .k-alt,\n.k-dropzone-hovered,\n.k-widget.k-popup {\n  background-color: #f5f5f5;\n}\n.k-grouping-row td,\ntd.k-group-cell,\n.k-resize-handle-inner {\n  background-color: #eae8e8;\n}\n.k-list-container {\n  border-color: #c5c5c5;\n  background-color: #e9e9e9;\n}\n.k-content,\n.k-editable-area,\n.k-panelbar > li.k-item,\n.k-panel > li.k-item,\n.k-tiles {\n  background-color: #fff;\n}\n.k-alt,\n.k-separator,\n.k-resource.k-alt,\n.k-pivot-layout > tbody > tr:first-child > td:first-child {\n  background-color: #f1f1f1;\n}\n.k-pivot-rowheaders .k-alt .k-alt,\n.k-header.k-alt {\n  background-color: #dcdcdc;\n}\n.k-textbox,\n.k-autocomplete.k-header,\n.k-dropdown-wrap.k-state-active,\n.k-picker-wrap.k-state-active,\n.k-numeric-wrap.k-state-active {\n  border-color: #d5d5d5;\n  background-color: #e9e9e9;\n}\n.k-textbox > input,\n.k-autocomplete .k-input,\n.k-dropdown-wrap .k-input,\n.k-autocomplete.k-state-focused .k-input,\n.k-dropdown-wrap.k-state-focused .k-input,\n.k-picker-wrap.k-state-focused .k-input,\n.k-numeric-wrap.k-state-focused .k-input {\n  border-color: #d5d5d5;\n}\ninput.k-textbox,\ntextarea.k-textbox,\ninput.k-textbox:hover,\ntextarea.k-textbox:hover,\n.k-textbox > input {\n  background: none;\n}\n.k-input,\ninput.k-textbox,\ntextarea.k-textbox,\ninput.k-textbox:hover,\ntextarea.k-textbox:hover,\n.k-textbox > input,\n.k-multiselect-wrap {\n  background-color: #fff;\n  color: #2e2e2e;\n}\n.k-input[readonly] {\n  background-color: #fff;\n  color: #2e2e2e;\n}\n.k-block,\n.k-widget,\n.k-popup,\n.k-content,\n.k-toolbar,\n.k-dropdown .k-input {\n  color: #2e2e2e;\n}\n.k-inverse {\n  color: #ffffff;\n}\n.k-block {\n  color: #313131;\n}\n.k-link:link,\n.k-link:visited,\n.k-nav-current.k-state-hover .k-link {\n  color: #2e2e2e;\n}\n.k-tabstrip-items .k-link,\n.k-panelbar > li > .k-link {\n  color: #2e2e2e;\n}\n.k-header,\n.k-treemap-title,\n.k-grid-header .k-header > .k-link {\n  color: #313131;\n}\n.k-header,\n.k-grid-header,\n.k-toolbar,\n.k-dropdown-wrap,\n.k-picker-wrap,\n.k-numeric-wrap,\n.k-grouping-header,\n.k-pager-wrap,\n.k-textbox,\n.k-button,\n.k-progressbar,\n.k-draghandle,\n.k-autocomplete,\n.k-state-highlight,\n.k-tabstrip-items .k-item,\n.k-panelbar .k-tabstrip-items .k-item,\n.km-pane-wrapper > .km-pane > .km-view > .km-content {\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.6)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.6) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.6) 0%, rgba(255,255,255,.0) 100%);\n  background-position: 50% 50%;\n  background-color: #eae8e8;\n}\n.k-block,\n.k-header,\n.k-grid-header,\n.k-toolbar,\n.k-grouping-header,\n.k-pager-wrap,\n.k-button,\n.k-draghandle,\n.k-treemap-tile,\nhtml .km-pane-wrapper .k-header {\n  background-color: #eae8e8;\n}\n.k-mediaplayer-toolbar {\n  background-color: rgba(234, 232, 232, 0.85);\n}\n/* icons */\n.k-icon:hover,\n.k-state-hover .k-icon,\n.k-state-selected .k-icon,\n.k-state-focused .k-icon,\n.k-column-menu .k-state-hover .k-sprite,\n.k-column-menu .k-state-active .k-sprite,\n.k-pager-numbers .k-current-page .k-link:hover:after,\n.k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view.k-state-hover > .k-link:after {\n  opacity: 1;\n}\n.k-state-disabled .k-icon,\n.k-column-menu .k-sprite,\n.k-pager-numbers .k-current-page .k-link:after,\n.k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view > .k-link:after {\n  opacity: 0.9;\n}\n.k-mobile-list .k-check:checked,\n.k-mobile-list .k-edit-field [type=checkbox]:checked,\n.k-mobile-list .k-edit-field [type=radio]:checked {\n  opacity: 0.9;\n}\n.k-tool {\n  border-color: transparent;\n}\n/* IE will ignore the above selectors if these are added too */\n.k-mobile-list .k-check:checked,\n.k-mobile-list .k-edit-field [type=checkbox]:checked,\n.k-mobile-list .k-edit-field [type=radio]:checked {\n  background-image: url(" + __webpack_require__(29) + ");\n  border-color: transparent;\n}\n.k-i-loading {\n  background-image: url(" + __webpack_require__(24) + ");\n}\n.k-loading-image {\n  background-image: url(" + __webpack_require__(23) + ");\n}\n.k-loading-color {\n  background-color: #ffffff;\n}\n.k-button {\n  color: #2e2e2e;\n  border-color: #c5c5c5;\n  background-color: #e9e9e9;\n}\n.k-draghandle {\n  border-color: #c5c5c5;\n  background-color: #ffffff;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.k-draghandle:hover {\n  border-color: #b6b6b6;\n  background-color: #bbb4b1;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n/* Scheduler */\n.k-scheduler {\n  color: #2e2e2e;\n  background-color: #fff;\n}\n.k-scheduler-layout {\n  color: #2e2e2e;\n}\n.k-scheduler-datecolumn,\n.k-scheduler-groupcolumn {\n  background-color: #fff;\n  color: #2e2e2e;\n}\n.k-scheduler-times tr,\n.k-scheduler-times th,\n.k-scheduler-table td,\n.k-scheduler-header th,\n.k-scheduler-header-wrap,\n.k-scheduler-times {\n  border-color: #c5c5c5;\n}\n.k-nonwork-hour {\n  background-color: #f1f1f1;\n}\n.k-gantt .k-nonwork-hour {\n  background-color: rgba(233, 233, 233, 0.2);\n}\n.k-gantt .k-header.k-nonwork-hour {\n  background-color: rgba(233, 233, 233, 0.15);\n}\n.k-scheduler-table .k-today,\n.k-today > .k-scheduler-datecolumn,\n.k-today > .k-scheduler-groupcolumn {\n  background-color: #f8f8f8;\n}\n.k-scheduler-now-arrow {\n  border-left-color: #721715;\n}\n.k-scheduler-now-line {\n  background-color: #721715;\n}\n.k-event,\n.k-task-complete {\n  border-color: #ffc09c;\n  background: #ff8f50 0 -257px url(" + __webpack_require__(0) + ") repeat-x;\n  color: #2e2e2e;\n}\n.k-event-inverse {\n  color: #fff;\n}\n.k-event.k-state-selected {\n  background-position: 0 0;\n  -webkit-box-shadow: 0 0 0 2px #2e2e2e;\n          box-shadow: 0 0 0 2px #2e2e2e;\n}\n.k-event .k-resize-handle:after,\n.k-task-single .k-resize-handle:after {\n  background-color: #787878;\n}\n.k-scheduler-marquee:before,\n.k-scheduler-marquee:after {\n  border-color: #f35800;\n}\n.k-panelbar .k-content,\n.k-panelbar .k-panel,\n.k-panelbar .k-item {\n  background-color: #fff;\n  color: #2e2e2e;\n  border-color: #c5c5c5;\n}\n.k-panelbar > li > .k-link {\n  color: #2e2e2e;\n}\n.k-panelbar > .k-item > .k-link {\n  border-color: #c5c5c5;\n}\n.k-panel > li.k-item {\n  background-color: #fff;\n}\n/* states */\n.k-state-active,\n.k-state-active:hover,\n.k-active-filter,\n.k-tabstrip .k-state-active {\n  background-color: #ffffff;\n  border-color: #9f9f9f;\n  color: #313131;\n}\n.k-fieldselector .k-list-container {\n  background-color: #ffffff;\n}\n.k-button:focus,\n.k-button.k-state-focused {\n  border-color: #c5c5c5;\n}\n.k-button:hover,\n.k-button.k-state-hover {\n  color: #2e2e2e;\n  border-color: #b6b6b6;\n  background-color: #bcb4b0;\n}\n.k-button:active,\n.k-button.k-state-active {\n  color: #fff;\n  background-color: #f35800;\n  border-color: #f85a00;\n}\n.k-button:active:hover,\n.k-button.k-state-active:hover {\n  color: #ffffff;\n  border-color: #8d8079;\n  background-color: #ff5e03;\n}\n.k-button[disabled],\n.k-button.k-state-disabled,\n.k-state-disabled .k-button,\n.k-state-disabled .k-button:hover,\n.k-button.k-state-disabled:hover,\n.k-state-disabled .k-button:active,\n.k-button.k-state-disabled:active {\n  color: #c3c3c3;\n  border-color: #c5c5c5;\n  background-color: #e9e9e9;\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.6)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.6) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.6) 0%, rgba(255,255,255,.0) 100%);\n}\n.k-button:focus:not(.k-state-disabled):not([disabled]) {\n  -webkit-box-shadow: inset 0 0 3px 1px #b6b6b6;\n          box-shadow: inset 0 0 3px 1px #b6b6b6;\n}\n.k-button:focus:active:not(.k-state-disabled):not([disabled]) {\n  -webkit-box-shadow: inset 0 0 3px 1px #c54700;\n          box-shadow: inset 0 0 3px 1px #c54700;\n}\n.k-menu .k-state-hover > .k-state-active {\n  background-color: transparent;\n}\nhtml .k-mediaplayer-toolbar .k-button-bare:active,\nhtml .k-mediaplayer-toolbar .k-button-bare.k-state-active,\nhtml .k-mediaplayer-toolbar .k-button-bare.k-state-active:hover {\n  color: #f35800;\n}\n.k-menu .k-state-selected > .k-link {\n  color: #fff;\n  background-color: #f35800;\n  border-color: #f85a00;\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.2)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.2) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.2) 0%, rgba(255,255,255,.0) 100%);\n}\n.k-menu .k-link.k-state-active {\n  background-color: #ffffff;\n  border-color: #9f9f9f;\n  color: #313131;\n}\n.k-menu .k-state-hover > .k-link {\n  color: #2e2e2e;\n  background-color: #bcb4b0;\n  border-color: #b6b6b6;\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.4)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.4) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.4) 0%, rgba(255,255,255,.0) 100%);\n}\n.k-state-highlight {\n  background: #ffffff;\n  color: #313131;\n}\n.k-state-focused,\n.k-grouping-row .k-state-focused {\n  border-color: #d5d5d5;\n}\n.k-calendar .k-link {\n  color: #2e2e2e;\n}\n.k-calendar .k-footer {\n  padding: 0;\n}\n.k-calendar .k-footer .k-nav-today {\n  color: #2e2e2e;\n  text-decoration: none;\n  background-color: #fff;\n}\n.k-calendar .k-footer .k-nav-today:hover,\n.k-calendar .k-footer .k-nav-today.k-state-hover {\n  background-color: #fff;\n  text-decoration: underline;\n}\n.k-calendar .k-footer .k-nav-today:active {\n  background-color: #fff;\n}\n.k-calendar .k-link.k-nav-fast {\n  color: #2e2e2e;\n}\n.k-calendar .k-nav-fast.k-state-hover {\n  text-decoration: none;\n  background-color: #bcb4b0;\n  color: #2e2e2e;\n}\n.k-calendar .k-link.k-state-hover {\n  border-radius: 4px;\n}\n.k-calendar .k-today {\n  -webkit-box-shadow: inset 0 0 0 1px #f35800;\n          box-shadow: inset 0 0 0 1px #f35800;\n}\n.k-calendar .k-today .k-link {\n  color: #f35800;\n  font-weight: bold;\n}\n.k-calendar td.k-today.k-state-focused,\n.k-calendar td.k-today.k-state-focused.k-state-hover {\n  -webkit-box-shadow: inset 0 0 3px 1px #aeaeae;\n          box-shadow: inset 0 0 3px 1px #aeaeae;\n}\n.k-calendar td.k-today.k-state-hover,\n.k-calendar td.k-today.k-state-selected {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.k-calendar td.k-today.k-state-hover .k-link {\n  color: #2e2e2e;\n}\n.k-calendar .k-footer .k-link {\n  border-radius: 0;\n}\n.k-calendar th {\n  background-color: #f5f5f5;\n}\n.k-calendar td.k-state-selected.k-state-hover {\n  background-color: #f35800;\n  background-image: none;\n}\n.k-calendar td.k-state-selected .k-link,\n.k-calendar td.k-today.k-state-selected.k-state-hover .k-link {\n  color: #fff;\n}\n.k-calendar td.k-state-focused.k-state-selected,\n.k-calendar td.k-state-selected.k-state-active,\n.k-calendar td.k-state-selected:active,\n.k-calendar td.k-state-selected.k-state-hover:active {\n  -webkit-box-shadow: inset 0 0 3px 1px #aeaeae;\n          box-shadow: inset 0 0 3px 1px #aeaeae;\n}\n.k-window-titlebar .k-link {\n  border-radius: 4px;\n}\n.k-calendar-container.k-group {\n  border-color: #c5c5c5;\n}\n.k-state-selected,\n.k-state-selected:link,\n.k-state-selected:visited,\n.k-list > .k-state-selected,\n.k-list > .k-state-highlight,\n.k-panel > .k-state-selected,\n.k-ghost-splitbar-vertical,\n.k-ghost-splitbar-horizontal,\n.k-draghandle.k-state-selected:hover,\n.k-scheduler .k-scheduler-toolbar .k-state-selected,\n.k-scheduler .k-today.k-state-selected,\n.k-marquee-color {\n  color: #fff;\n  background-color: #f35800;\n  border-color: #f85a00;\n}\n.k-virtual-item.k-first,\n.k-group-header + .k-list > .k-item.k-first,\n.k-static-header + .k-list > .k-item.k-first {\n  border-top-color: #b6b6b6;\n}\n.k-group-header + div > .k-list > .k-item.k-first:before {\n  border-top-color: #b9b3b3;\n}\n.k-popup > .k-group-header,\n.k-popup > .k-virtual-wrap > .k-group-header {\n  background: #b6b6b6;\n  color: #fff;\n}\n.k-popup .k-list .k-item > .k-group {\n  background: #b9b3b3;\n  color: #fff;\n  border-bottom-left-radius: 3px;\n}\n.k-popup .k-treeview .k-item > .k-group {\n  background: transparent;\n  color: #2e2e2e;\n}\n.k-marquee-text {\n  color: #fff;\n}\n.k-state-focused,\n.k-list > .k-state-focused,\n.k-listview > .k-state-focused,\n.k-grid-header th.k-state-focused,\ntd.k-state-focused,\n.k-button.k-state-focused {\n  -webkit-box-shadow: inset 0 0 3px 1px #aeaeae;\n          box-shadow: inset 0 0 3px 1px #aeaeae;\n}\n.k-state-focused.k-state-selected,\n.k-list > .k-state-focused.k-state-selected,\n.k-listview > .k-state-focused.k-state-selected,\ntd.k-state-focused.k-state-selected {\n  -webkit-box-shadow: inset 0 0 3px 1px #c54700;\n          box-shadow: inset 0 0 3px 1px #c54700;\n}\n.k-ie8 .k-panelbar span.k-state-focused,\n.k-ie8 .k-menu li.k-state-focused,\n.k-ie8 .k-listview > .k-state-focused,\n.k-ie8 .k-grid-header th.k-state-focused,\n.k-ie8 td.k-state-focused,\n.k-ie8 .k-tool.k-state-hover,\n.k-ie8 .k-button:focus,\n.k-ie8 .k-button.k-state-focused {\n  background-color: #bcb4b0;\n}\n.k-list > .k-state-selected.k-state-focused,\n.k-list-optionlabel.k-state-selected.k-state-focused {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.k-state-selected > .k-link,\n.k-panelbar > li > .k-state-selected,\n.k-panelbar > li.k-state-default > .k-link.k-state-selected {\n  color: #fff;\n}\n.k-state-hover,\n.k-state-hover:hover,\n.k-splitbar-horizontal-hover:hover,\n.k-splitbar-vertical-hover:hover,\n.k-list > .k-state-hover,\n.k-scheduler .k-scheduler-toolbar ul li.k-state-hover,\n.k-pager-wrap .k-link:hover,\n.k-dropdown .k-state-focused,\n.k-filebrowser-dropzone,\n.k-mobile-list .k-item > .k-link:active,\n.k-mobile-list .k-item > .k-label:active,\n.k-mobile-list .k-edit-label.k-check:active,\n.k-mobile-list .k-recur-view .k-check:active {\n  color: #2e2e2e;\n  background-color: #bcb4b0;\n  border-color: #b6b6b6;\n}\n/* this selector should be used separately, otherwise old IEs ignore the whole rule */\n.k-mobile-list .k-scheduler-timezones .k-edit-field:nth-child(2):active {\n  color: #2e2e2e;\n  background-color: #bcb4b0;\n  border-color: #b6b6b6;\n}\n.k-ie8 .k-window-titlebar .k-state-hover {\n  border-color: #b6b6b6;\n}\n.k-state-hover > .k-select,\n.k-state-focused > .k-select {\n  border-color: #b6b6b6;\n}\n.k-button:hover,\n.k-button.k-state-hover,\n.k-button:focus,\n.k-button.k-state-focused,\n.k-textbox:hover,\n.k-state-hover,\n.k-state-hover:hover,\n.k-pager-wrap .k-link:hover,\n.k-other-month.k-state-hover .k-link,\ndiv.k-filebrowser-dropzone em,\n.k-draghandle:hover {\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.4)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.4) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.4) 0%, rgba(255,255,255,.0) 100%);\n}\n.k-pager-wrap {\n  background-color: #eae8e8;\n  color: #313131;\n}\n.k-autocomplete.k-state-active,\n.k-picker-wrap.k-state-active,\n.k-numeric-wrap.k-state-active,\n.k-dropdown-wrap.k-state-active,\n.k-state-active,\n.k-state-active:hover,\n.k-state-active > .k-link,\n.k-button:active,\n.k-panelbar > .k-item > .k-state-focused {\n  background-image: none;\n}\n.k-state-selected,\n.k-button:active,\n.k-button.k-state-active,\n.k-draghandle.k-state-selected:hover {\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.2)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.2) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.2) 0%, rgba(255,255,255,.0) 100%);\n}\n.k-button:active,\n.k-button.k-state-active,\n.k-draghandle.k-state-selected:hover {\n  background-position: 50% 50%;\n}\n.k-state-hover > .k-link,\n.k-other-month.k-state-hover .k-link,\ndiv.k-filebrowser-dropzone em {\n  color: #2e2e2e;\n}\n.k-autocomplete.k-state-hover,\n.k-autocomplete.k-state-focused,\n.k-picker-wrap.k-state-hover,\n.k-picker-wrap.k-state-focused,\n.k-numeric-wrap.k-state-hover,\n.k-numeric-wrap.k-state-focused,\n.k-dropdown-wrap.k-state-hover,\n.k-dropdown-wrap.k-state-focused {\n  background-color: #bdb4af;\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.4)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.4) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.4) 0%, rgba(255,255,255,.0) 100%);\n  background-position: 50% 50%;\n  border-color: #b6b6b6;\n}\n.km-pane-wrapper .k-mobile-list input:not([type=\"checkbox\"]):not([type=\"radio\"]),\n.km-pane-wrapper .km-pane .k-mobile-list select:not([multiple]),\n.km-pane-wrapper .k-mobile-list textarea,\n.k-dropdown .k-state-focused .k-input {\n  color: #2e2e2e;\n}\n.km-pane-wrapper .km-pane .k-mobile-list.k-filter-menu .k-space-right {\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.6)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.6) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.6) 0%, rgba(255,255,255,.0) 100%);\n  background-position: 50% 50%;\n  background: #ececec;\n  border-color: #c5c5c5;\n}\n.km-pane-wrapper .km-pane .k-mobile-list.k-filter-menu .k-space-right > input {\n  background: #fff;\n  border-color: #c5c5c5;\n}\n.km-pane-wrapper .km-pane .k-mobile-list.k-filter-menu .k-space-right > input:focus {\n  -webkit-box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);\n          box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);\n}\n.k-dropdown .k-state-hover .k-input {\n  color: #2e2e2e;\n}\n.k-state-error {\n  border-color: #721715;\n  background-color: #f4f3f2;\n  color: #ffb388;\n}\n.k-state-disabled {\n  opacity: .7;\n}\n.k-ie8 .k-state-disabled {\n  filter: alpha(opacity=70);\n}\n.k-tile-empty.k-state-selected,\n.k-loading-mask.k-state-selected {\n  border-width: 0;\n  background-image: none;\n  background-color: transparent;\n}\n.k-state-disabled,\n.k-state-disabled .k-link,\n.k-state-disabled .k-button,\n.k-other-month,\n.k-other-month .k-link,\n.k-dropzone em,\n.k-tile-empty strong,\n.k-slider .k-draghandle {\n  color: #c3c3c3;\n}\n.k-dropzone .k-upload-status {\n  color: #c3c3c3;\n}\n/* Progressbar */\n.k-progressbar-indeterminate {\n  background: url(" + __webpack_require__(22) + ");\n}\n.k-progressbar-indeterminate .k-progress-status-wrap,\n.k-progressbar-indeterminate .k-state-selected {\n  display: none;\n}\n/* Slider */\n.k-slider-track {\n  background-color: #d5d5d5;\n}\n.k-slider-selection {\n  background-color: #f35800;\n}\n.k-slider-horizontal .k-tick {\n  background-image: url(" + __webpack_require__(27) + ");\n}\n.k-slider-vertical .k-tick {\n  background-image: url(" + __webpack_require__(28) + ");\n}\n/* Tooltip */\n.k-widget.k-tooltip,\n.k-chart-crosshair-tooltip,\n.k-chart-shared-tooltip {\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.6)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.6) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.6) 0%, rgba(255,255,255,.0) 100%);\n  background-position: 50% 50%;\n  background-color: #eae8e8;\n  color: #313131;\n  border-color: transparent;\n  -webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);\n}\n.k-widget.k-tooltip-validation {\n  border-color: #ffc000;\n  background-color: #ffc000;\n  color: #000000;\n}\n/* Bootstrap theme fix */\n.input-prepend .k-tooltip-validation,\n.input-append .k-tooltip-validation {\n  font-size: 12px;\n  position: relative;\n  top: 3px;\n}\n.k-callout-n {\n  border-bottom-color: #eae8e8;\n}\n.k-callout-w {\n  border-right-color: #eae8e8;\n}\n.k-callout-s {\n  border-top-color: #eae8e8;\n}\n.k-callout-e {\n  border-left-color: #eae8e8;\n}\n.k-tooltip-validation .k-callout-n {\n  border-bottom-color: #ffc000;\n}\n.k-tooltip-validation .k-callout-w {\n  border-right-color: #ffc000;\n}\n.k-tooltip-validation .k-callout-s {\n  border-top-color: #ffc000;\n}\n.k-tooltip-validation .k-callout-e {\n  border-left-color: #ffc000;\n}\n/* Splitter */\n.k-splitbar {\n  background-color: #e9e9e9;\n}\n.k-restricted-size-vertical,\n.k-restricted-size-horizontal {\n  background-color: #ffb388;\n}\n/* Upload */\n.k-file {\n  background-color: #ffffff;\n  border-color: #d5d5d5;\n}\n.k-file-progress {\n  color: #313131;\n}\n.k-file-progress .k-progress {\n  background-color: #0066cc;\n}\n.k-file-success .k-file-name,\n.k-file-success .k-upload-pct {\n  color: #37b400;\n}\n.k-file-success .k-progress {\n  background-color: #37b400;\n}\n.k-file-error {\n  color: #db4240;\n}\n.k-file-error .k-progress,\n.k-file-invalid .k-progress {\n  background-color: #db4240;\n}\n.k-file-extension-wrapper,\n.k-multiple-files-extension-wrapper {\n  color: #c3c3c3;\n  border-color: #c3c3c3;\n}\n.k-file-invalid .k-file-name-invalid {\n  color: #db4240;\n}\n.k-file-invalid-extension-wrapper,\n.k-multiple-files-invalid-extension-wrapper {\n  color: #db4240;\n  border-color: #f2bdbc;\n}\n.k-file-extension-wrapper:before,\n.k-multiple-files-extension-wrapper:before {\n  background-color: #fff;\n  border-color: transparent transparent #c3c3c3 #c3c3c3;\n}\n.k-file-invalid-extension-wrapper:before,\n.k-multiple-files-invalid-extension-wrapper:before {\n  background-color: #fff;\n  border-color: transparent transparent #f2bdbc #f2bdbc;\n}\n.k-multiple-files-extension-wrapper:after {\n  border-top-color: #c3c3c3;\n  border-left-color: #c3c3c3;\n}\n.k-multiple-files-invalid-extension-wrapper:after {\n  border-top-color: #f2bdbc;\n  border-left-color: #f2bdbc;\n}\n.k-file-size,\n.k-file-information,\n.k-file-validation-message {\n  color: #c3c3c3;\n}\n.k-upload .k-upload-selected {\n  color: #f35800;\n  border-color: #d5d5d5;\n}\n/* ImageBrowser */\n.k-tile {\n  border-color: #fff;\n}\n.k-textbox:hover,\n.k-tiles li.k-state-hover {\n  border-color: #b6b6b6;\n}\n.k-tiles li.k-state-selected {\n  border-color: #f85a00;\n}\n/* TreeMap */\n.k-leaf,\n.k-leaf.k-state-hover:hover {\n  color: #fff;\n}\n.k-leaf.k-inverse,\n.k-leaf.k-inverse.k-state-hover:hover {\n  color: #000;\n}\n/* Shadows */\n.k-widget,\n.k-button {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.k-slider,\n.k-treeview,\n.k-upload {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.k-state-hover {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.k-textbox:focus,\n.k-autocomplete.k-state-focused,\n.k-dropdown-wrap.k-state-focused,\n.k-picker-wrap.k-state-focused,\n.k-numeric-wrap.k-state-focused {\n  -webkit-box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);\n          box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);\n}\n.k-state-selected {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.k-state-active {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.k-grid tr:hover {\n  background-color: #bdb4af;\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.4)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.4) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.4) 0%, rgba(255,255,255,.0) 100%);\n  background-position: 50% 50%;\n}\n.k-grid .k-filter-row:hover,\n.k-pivot-rowheaders .k-grid tr:hover {\n  background: none;\n}\n.k-grid tr.k-state-selected:hover,\n.k-grid td.k-state-selected:hover {\n  background-color: #f35800;\n  background-image: none;\n}\n.k-popup,\n.k-menu .k-menu-group,\n.k-grid .k-filter-options,\n.k-time-popup,\n.k-datepicker-calendar,\n.k-autocomplete.k-state-border-down,\n.k-autocomplete.k-state-border-up,\n.k-dropdown-wrap.k-state-active,\n.k-picker-wrap.k-state-active,\n.k-multiselect.k-state-focused,\n.k-filebrowser .k-image,\n.k-tooltip {\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);\n}\n.k-treemap-tile.k-state-hover {\n  -webkit-box-shadow: inset 0 0 0 3px #d5d5d5;\n          box-shadow: inset 0 0 0 3px #d5d5d5;\n}\n/* Window */\n.k-window {\n  border-color: rgba(0, 0, 0, 0.3);\n  -webkit-box-shadow: 1px 1px 7px 1px rgba(128, 128, 128, 0.3);\n          box-shadow: 1px 1px 7px 1px rgba(128, 128, 128, 0.3);\n  background-color: #fff;\n}\n.k-window.k-state-focused {\n  border-color: rgba(0, 0, 0, 0.3);\n  -webkit-box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.3);\n          box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.3);\n}\n.k-window.k-window-maximized,\n.k-window-maximized .k-window-titlebar,\n.k-window-maximized .k-window-content {\n  border-radius: 0;\n}\n.k-shadow {\n  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);\n          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);\n}\n.k-inset {\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.3);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.3);\n}\n/* Selection */\n.k-editor-inline ::-moz-selection {\n  background-color: #f85a00;\n  text-shadow: none;\n  color: #fff;\n}\n.k-editor-inline ::selection {\n  background-color: #f85a00;\n  text-shadow: none;\n  color: #fff;\n}\n.k-editor-inline ::-moz-selection {\n  background-color: #f85a00;\n  text-shadow: none;\n  color: #fff;\n}\n/* Notification */\n.k-widget.k-notification.k-notification-info {\n  background-color: #0066cc;\n  color: #fff;\n  border-color: #0066cc;\n}\n.k-widget.k-notification.k-notification-success {\n  background-color: #37b400;\n  color: #fff;\n  border-color: #37b400;\n}\n.k-widget.k-notification.k-notification-warning {\n  background-color: #ffc000;\n  color: #000;\n  border-color: #ffc000;\n}\n.k-widget.k-notification.k-notification-error {\n  background-color: #db4240;\n  color: #fff;\n  border-color: #db4240;\n}\n.k-widget.k-notification {\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.25)), to(rgba(255,255,255,0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.25) 0%, rgba(255,255,255,0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.25) 0%, rgba(255,255,255,0) 100%);\n}\n/* Gantt */\n.k-gantt .k-treelist {\n  background: #f1f1f1;\n}\n.k-gantt .k-treelist .k-alt {\n  background-color: #e4e4e4;\n}\n.k-gantt .k-treelist tr:hover {\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.6)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.6) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.6) 0%, rgba(255,255,255,.0) 100%);\n  background-color: #b9b3b3;\n}\n.k-gantt .k-treelist .k-state-selected,\n.k-gantt .k-treelist .k-state-selected td,\n.k-gantt .k-treelist .k-alt.k-state-selected,\n.k-gantt .k-treelist .k-alt.k-state-selected > td {\n  background-color: #f35800;\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.2)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.2) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.2) 0%, rgba(255,255,255,.0) 100%);\n}\n.k-gantt .k-treelist .k-state-selected:hover,\n.k-gantt .k-treelist .k-state-selected:hover td {\n  background-color: #f35800;\n  background-image: none;\n}\n.k-task-dot:after {\n  background-color: #2e2e2e;\n  border-color: #2e2e2e;\n}\n.k-task-dot:hover:after {\n  background-color: #ffffff;\n}\n.k-task-summary {\n  border-color: #6e6e6e;\n  background: #6e6e6e;\n}\n.k-task-milestone,\n.k-task-summary-complete {\n  border-color: #2e2e2e;\n  background: #2e2e2e;\n}\n.k-state-selected.k-task-summary {\n  border-color: #ffa673;\n  background: #ffa673;\n}\n.k-state-selected.k-task-milestone,\n.k-state-selected .k-task-summary-complete {\n  border-color: #f35800;\n  background: #f35800;\n}\n.k-task-single {\n  background-color: #ffd7c0;\n  border-color: #ffc09c;\n  color: #2e2e2e;\n}\n.k-state-selected.k-task-single {\n  border-color: #f85a00;\n}\n.k-line {\n  background-color: #2e2e2e;\n  color: #2e2e2e;\n}\n.k-state-selected.k-line {\n  background-color: #f35800;\n  color: #f35800;\n}\n.k-resource {\n  background-color: #fff;\n}\n/* Border radius */\n.k-block,\n.k-button,\n.k-textbox,\n.k-drag-clue,\n.k-touch-scrollbar,\n.k-window,\n.k-window-titleless .k-window-content,\n.k-window-action,\n.k-inline-block,\n.k-grid .k-filter-options,\n.k-grouping-header .k-group-indicator,\n.k-autocomplete,\n.k-multiselect,\n.k-combobox,\n.k-dropdown,\n.k-dropdown-wrap,\n.k-datepicker,\n.k-timepicker,\n.k-colorpicker,\n.k-datetimepicker,\n.k-notification,\n.k-numerictextbox,\n.k-picker-wrap,\n.k-numeric-wrap,\n.k-list-container,\n.k-calendar-container,\n.k-calendar td,\n.k-calendar .k-link,\n.k-treeview .k-in,\n.k-editor-inline,\n.k-tooltip,\n.k-tile,\n.k-slider-track,\n.k-slider-selection,\n.k-upload,\n.k-split-button .k-gantt-views,\n.k-gantt-views > .k-current-view {\n  border-radius: 4px;\n}\n.k-tool {\n  text-align: center;\n  vertical-align: middle;\n}\n.k-tool.k-group-start,\n.k-toolbar .k-split-button .k-button,\n.k-toolbar .k-button-group .k-group-start {\n  border-radius: 4px 0 0 4px;\n}\n.k-rtl .k-tool.k-group-start,\n.k-rtl .k-toolbar .k-split-button .k-button,\n.k-rtl .k-toolbar .k-button-group .k-group-start {\n  border-radius: 0 4px 4px 0;\n}\n.k-toolbar .k-button-group > .k-group-end {\n  border-radius: 4px;\n}\n.k-tool.k-group-end,\n.k-toolbar .k-button-group .k-button + .k-group-end,\n.k-toolbar .k-split-button .k-split-button-arrow {\n  border-radius: 0 4px 4px 0;\n}\n.k-rtl .k-tool.k-group-end,\n.k-rtl .k-toolbar .k-button-group .k-group-end,\n.k-rtl .k-toolbar .k-split-button .k-split-button-arrow {\n  border-radius: 4px 0 0 4px;\n}\n.k-group-start.k-group-end.k-tool {\n  border-radius: 4px;\n}\n.k-calendar-container.k-state-border-up,\n.k-list-container.k-state-border-up,\n.k-autocomplete.k-state-border-up,\n.k-multiselect.k-state-border-up,\n.k-dropdown-wrap.k-state-border-up,\n.k-picker-wrap.k-state-border-up,\n.k-numeric-wrap.k-state-border-up,\n.k-window-content,\n.k-filter-menu {\n  border-radius: 0 0 4px 4px;\n}\n.k-autocomplete.k-state-border-up .k-input,\n.k-dropdown-wrap.k-state-border-up .k-input,\n.k-picker-wrap.k-state-border-up .k-input,\n.k-picker-wrap.k-state-border-up .k-selected-color,\n.k-numeric-wrap.k-state-border-up .k-input {\n  border-radius: 0 0 0 4px;\n}\n.k-multiselect.k-state-border-up .k-multiselect-wrap {\n  border-radius: 0 0 4px 4px;\n}\n.k-window-titlebar,\n.k-block > .k-header,\n.k-tabstrip-items .k-item,\n.k-panelbar .k-tabstrip-items .k-item,\n.k-tabstrip-items .k-link,\n.k-calendar-container.k-state-border-down,\n.k-list-container.k-state-border-down,\n.k-autocomplete.k-state-border-down,\n.k-multiselect.k-state-border-down,\n.k-dropdown-wrap.k-state-border-down,\n.k-picker-wrap.k-state-border-down,\n.k-numeric-wrap.k-state-border-down,\n.k-gantt-views.k-state-expanded,\n.k-gantt-views.k-state-expanded > .k-current-view {\n  border-radius: 4px 4px 0 0;\n}\n.k-split-button.k-state-border-down > .k-button {\n  border-radius: 4px 0 0 0;\n}\n.k-split-button.k-state-border-up > .k-button {\n  border-radius: 0 0 0 4px;\n}\n.k-split-button.k-state-border-down > .k-split-button-arrow {\n  border-radius: 0 4px 0 0;\n}\n.k-split-button.k-state-border-up > .k-split-button-arrow {\n  border-radius: 0 0 4px 0;\n}\n.k-dropdown-wrap .k-input,\n.k-picker-wrap .k-input,\n.k-numeric-wrap .k-input {\n  border-radius: 3px 0 0 3px;\n}\n.k-rtl .k-dropdown-wrap .k-input,\n.k-rtl .k-picker-wrap .k-input,\n.k-rtl .k-numeric-wrap .k-input {\n  border-radius: 0 3px 3px 0;\n}\n.k-numeric-wrap .k-link {\n  border-radius: 0 3px 0 0;\n}\n.k-numeric-wrap .k-link + .k-link {\n  border-radius: 0 0 3px 0;\n}\n.k-colorpicker .k-selected-color {\n  border-radius: 3px 0 0 3px;\n}\n.k-rtl .k-colorpicker .k-selected-color {\n  border-radius: 0 3px 3px 0;\n}\n.k-autocomplete.k-state-border-down .k-input {\n  border-radius: 4px 4px 0 0;\n}\n.k-dropdown-wrap.k-state-border-down .k-input,\n.k-picker-wrap.k-state-border-down .k-input,\n.k-picker-wrap.k-state-border-down .k-selected-color,\n.k-numeric-wrap.k-state-border-down .k-input {\n  border-radius: 4px 0 0 0;\n}\n.k-numeric-wrap .k-link.k-state-selected {\n  background-color: #f35800;\n}\n.k-multiselect.k-state-border-down .k-multiselect-wrap {\n  border-radius: 3px 3px 0 0;\n}\n.k-dropdown-wrap .k-select,\n.k-picker-wrap .k-select,\n.k-numeric-wrap .k-select,\n.k-datetimepicker .k-select + .k-select,\n.k-list-container.k-state-border-right {\n  border-radius: 0 4px 4px 0;\n}\n.k-rtl .k-dropdown-wrap .k-select,\n.k-rtl .k-picker-wrap .k-select,\n.k-rtl .k-numeric-wrap .k-select,\n.k-rtl .k-datetimepicker .k-select + .k-select,\n.k-rtl .k-list-container.k-state-border-right {\n  border-radius: 4px 0 0 4px;\n}\n.k-numeric-wrap.k-expand-padding .k-input {\n  border-radius: 4px;\n}\n.k-textbox > input,\n.k-autocomplete .k-input,\n.k-multiselect-wrap {\n  border-radius: 3px;\n}\n.k-list .k-state-hover,\n.k-list .k-state-focused,\n.k-list .k-state-highlight,\n.k-list .k-state-selected,\n.k-fieldselector .k-list .k-item,\n.k-list-optionlabel,\n.k-dropzone {\n  border-radius: 3px;\n}\n.k-slider .k-button,\n.k-grid .k-slider .k-button {\n  border-radius: 13px;\n}\n.k-draghandle {\n  border-radius: 7px;\n}\n.k-scheduler-toolbar > ul li:first-child,\n.k-scheduler-toolbar > ul li:first-child .k-link,\n.k-scheduler-toolbar > ul.k-scheduler-views li:first-child + li,\n.k-scheduler-toolbar > ul.k-scheduler-views li:first-child + li .k-link {\n  border-radius: 4px 0 0 4px;\n}\n.k-rtl .k-scheduler-toolbar > ul li:first-child,\n.k-rtl .k-scheduler-toolbar > ul li:first-child .k-link,\n.k-rtl .k-scheduler-toolbar > ul.k-scheduler-views li:first-child + li,\n.k-rtl .k-scheduler-toolbar > ul.k-scheduler-views li:first-child + li .k-link,\n.km-view.k-popup-edit-form .k-scheduler-toolbar > ul li:last-child,\n.km-view.k-popup-edit-form .k-scheduler-toolbar > ul li:last-child .k-link {\n  border-radius: 0 4px 4px 0;\n}\n.k-scheduler-phone .k-scheduler-toolbar > ul li.k-nav-today,\n.k-scheduler-phone .k-scheduler-toolbar > ul li.k-nav-today .k-link,\n.k-edit-field > .k-scheduler-navigation {\n  border-radius: 4px;\n}\n.k-scheduler-toolbar .k-nav-next,\n.k-scheduler-toolbar ul + ul li:last-child,\n.k-scheduler-toolbar .k-nav-next .k-link,\n.k-scheduler-toolbar ul + ul li:last-child .k-link {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.k-rtl .k-scheduler-toolbar .k-nav-next,\n.k-rtl .k-scheduler-toolbar ul + ul li:last-child,\n.k-rtl .k-scheduler-toolbar .k-nav-next .k-link,\n.k-rtl .k-scheduler-toolbar ul + ul li:last-child .k-link {\n  border-radius: 4px 0 0 4px;\n}\n.k-scheduler div.k-scheduler-footer ul li,\n.k-scheduler div.k-scheduler-footer .k-link {\n  border-radius: 4px;\n}\n.k-more-events,\n.k-event,\n.k-task-single,\n.k-task-complete,\n.k-event .k-link {\n  border-radius: 3px;\n}\n.k-scheduler-mobile .k-event {\n  border-radius: 2px;\n}\n/* Adaptive Grid */\n.k-grid-mobile .k-column-active + th.k-header {\n  border-left-color: #2e2e2e;\n}\nhtml .km-pane-wrapper .km-widget,\n.k-ie .km-pane-wrapper .k-widget,\n.k-ie .km-pane-wrapper .k-group,\n.k-ie .km-pane-wrapper .k-content,\n.k-ie .km-pane-wrapper .k-header,\n.k-ie .km-pane-wrapper .k-popup-edit-form .k-edit-field .k-button,\n.km-pane-wrapper .k-mobile-list .k-item,\n.km-pane-wrapper .k-mobile-list .k-edit-label,\n.km-pane-wrapper .k-mobile-list .k-edit-field {\n  color: #2e2e2e;\n}\n@media screen and (-ms-high-contrast: active) and (-ms-high-contrast: none) {\n  div.km-pane-wrapper a {\n    color: #2e2e2e;\n  }\n}\n.km-pane-wrapper .k-mobile-list .k-item,\n.km-pane-wrapper .k-mobile-list .k-edit-field,\n.km-pane-wrapper .k-mobile-list .k-recur-view > .k-edit-field .k-check {\n  background-color: #fff;\n  border-top: 1px solid #c5c5c5;\n}\n.km-pane-wrapper .k-mobile-list .k-edit-field textarea {\n  outline-width: 0;\n}\n.km-pane-wrapper .k-mobile-list .k-item.k-state-selected {\n  background-color: #f35800;\n  border-top-color: #f85a00;\n}\n.km-pane-wrapper .k-mobile-list .k-recur-view > .k-edit-field .k-check:first-child {\n  border-top-color: transparent;\n}\n.km-pane-wrapper .k-mobile-list .k-item:last-child {\n  -webkit-box-shadow: inset 0 -1px 0 #c5c5c5;\n          box-shadow: inset 0 -1px 0 #c5c5c5;\n}\n.km-pane-wrapper .k-mobile-list > ul > li > .k-link,\n.km-pane-wrapper .k-mobile-list .k-recur-view > .k-edit-label:nth-child(3),\n.km-pane-wrapper #recurrence .km-scroll-container > .k-edit-label:first-child {\n  color: #797979;\n}\n.km-pane-wrapper .k-mobile-list > ul > li > .k-link {\n  border-bottom: 1px solid #c5c5c5;\n}\n.km-pane-wrapper .k-mobile-list .k-edit-field {\n  -webkit-box-shadow: 0 1px 1px #c5c5c5;\n          box-shadow: 0 1px 1px #c5c5c5;\n}\n.km-actionsheet .k-grid-delete,\n.km-actionsheet .k-scheduler-delete,\n.km-pane-wrapper .k-scheduler-delete,\n.km-pane-wrapper .k-filter-menu .k-button[type=reset] {\n  color: #fff;\n  border-color: #721715;\n  background-color: red;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.3)), to(rgba(255, 255, 255, 0.15)));\n  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.15));\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.15));\n}\n.km-actionsheet .k-grid-delete:active,\n.km-actionsheet .k-scheduler-delete:active,\n.km-pane-wrapper .k-scheduler-delete:active,\n.km-pane-wrapper .k-filter-menu .k-button[type=reset]:active {\n  background-color: #990000;\n}\n/* /Column Menu */\n.k-autocomplete.k-state-default,\n.k-picker-wrap.k-state-default,\n.k-numeric-wrap.k-state-default,\n.k-dropdown-wrap.k-state-default {\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.6)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.6) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.6) 0%, rgba(255,255,255,.0) 100%);\n  background-position: 50% 50%;\n  background-color: #ececec;\n  border-color: #c5c5c5;\n}\n.k-autocomplete.k-state-hover,\n.k-picker-wrap.k-state-hover,\n.k-numeric-wrap.k-state-hover,\n.k-dropdown-wrap.k-state-hover {\n  background-color: #bdb4af;\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.4)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.4) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.4) 0%, rgba(255,255,255,.0) 100%);\n  background-position: 50% 50%;\n  border-color: #b6b6b6;\n}\ninput.k-textbox,\ntextarea.k-textbox,\n.k-multiselect.k-header {\n  border-color: #c5c5c5;\n}\n.k-multiselect.k-header.k-state-hover {\n  border-color: #b6b6b6;\n}\n.k-autocomplete.k-state-focused,\n.k-picker-wrap.k-state-focused,\n.k-numeric-wrap.k-state-focused,\n.k-dropdown-wrap.k-state-focused,\n.k-multiselect.k-header.k-state-focused {\n  background-color: #bdb4af;\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.4)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.4) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.4) 0%, rgba(255,255,255,.0) 100%);\n  background-position: 50% 50%;\n  border-color: #bdbdbd;\n  -webkit-box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);\n          box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);\n}\n.k-list-container {\n  color: #2e2e2e;\n}\n.k-nodata {\n  color: #c3c3c3;\n}\n.k-dropdown .k-input,\n.k-dropdown .k-state-focused .k-input,\n.k-multiselect .k-button,\n.k-multiselect .k-button:hover,\n.k-menu .k-popup {\n  color: #2e2e2e;\n}\n.k-state-default > .k-select {\n  border-color: #c5c5c5;\n}\n.k-state-hover > .k-select {\n  border-color: #b6b6b6;\n}\n.k-state-focused > .k-select {\n  border-color: #bdbdbd;\n}\n.k-tabstrip:focus {\n  -webkit-box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);\n          box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);\n}\n.k-tabstrip-items .k-state-default .k-link,\n.k-panelbar > li.k-state-default > .k-link {\n  color: #2e2e2e;\n}\n.k-tabstrip-items .k-state-hover .k-link,\n.k-panelbar > li.k-state-hover > .k-link,\n.k-panelbar > li.k-state-default > .k-link.k-state-hover {\n  color: #2e2e2e;\n}\n.k-panelbar > .k-state-focused.k-state-hover {\n  background: #bcb4b0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.k-tabstrip-items .k-state-default {\n  border-color: #c5c5c5;\n}\n.k-tabstrip-items .k-state-hover {\n  border-color: #b6b6b6;\n}\n.k-tabstrip-items .k-state-active,\n.k-panelbar .k-tabstrip-items .k-state-active {\n  background-color: #ffffff;\n  background-image: none;\n  border-color: #9f9f9f;\n}\n.k-tabstrip-top .k-tabstrip-items .k-state-active,\n.k-panelbar .k-tabstrip-top .k-tabstrip-items .k-state-active {\n  border-bottom-color: #fff;\n}\n.k-tabstrip .k-content.k-state-active {\n  background-color: #ffffff;\n  color: #2e2e2e;\n}\n.k-menu.k-header,\n.k-menu .k-item {\n  border-color: #c5c5c5;\n}\n.k-column-menu,\n.k-column-menu .k-item,\n.k-overflow-container .k-overflow-group {\n  border-color: #c5c5c5;\n}\n.k-overflow-container .k-overflow-group {\n  -webkit-box-shadow: inset 0 1px 0 #ffffff, 0 1px 0 #ffffff;\n          box-shadow: inset 0 1px 0 #ffffff, 0 1px 0 #ffffff;\n}\n.k-toolbar-first-visible.k-overflow-group,\n.k-overflow-container .k-overflow-group + .k-overflow-group {\n  -webkit-box-shadow: 0 1px 0 #ffffff;\n          box-shadow: 0 1px 0 #ffffff;\n}\n.k-toolbar-last-visible.k-overflow-group {\n  -webkit-box-shadow: inset 0 1px 0 #ffffff;\n          box-shadow: inset 0 1px 0 #ffffff;\n}\n.k-column-menu .k-separator {\n  border-color: #c5c5c5;\n  background-color: transparent;\n}\n.k-menu .k-group {\n  border-color: #c5c5c5;\n}\n.k-grid-filter.k-state-active {\n  background-color: #ffffff;\n}\n.k-grouping-row td,\n.k-group-footer td,\n.k-grid-footer td {\n  color: #2e2e2e;\n  border-color: #c5c5c5;\n  font-weight: bold;\n}\n.k-grouping-header {\n  color: #2e2e2e;\n}\n.k-grid td.k-state-focused {\n  -webkit-box-shadow: inset 0 0 3px 1px #aeaeae;\n          box-shadow: inset 0 0 3px 1px #aeaeae;\n}\n.k-header,\n.k-grid-header-wrap,\n.k-grid .k-grouping-header,\n.k-grid-header,\n.k-pager-wrap,\n.k-pager-wrap .k-textbox,\n.k-pager-wrap .k-link,\n.k-grouping-header .k-group-indicator,\n.k-gantt-toolbar .k-state-default {\n  border-color: #c5c5c5;\n}\n.k-primary,\n.k-overflow-container .k-primary {\n  color: #ffffff;\n  border-color: #e45200;\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.2)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.2) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.2) 0%, rgba(255,255,255,.0) 100%);\n  background-position: 50% 50%;\n  background-color: #ff6b18;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.k-primary:focus,\n.k-primary.k-state-focused {\n  color: #ffffff;\n  border-color: #e45200;\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.4)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.4) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.4) 0%, rgba(255,255,255,.0) 100%);\n  -webkit-box-shadow: 0 0 3px 0 #f35800;\n          box-shadow: 0 0 3px 0 #f35800;\n}\n.k-primary:hover {\n  color: #ffffff;\n  border-color: #8d8079;\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.4)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.4) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.4) 0%, rgba(255,255,255,.0) 100%);\n  background-color: #ff5e03;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.k-primary:focus:active:not(.k-state-disabled):not([disabled]),\n.k-primary:focus:not(.k-state-disabled):not([disabled]) {\n  -webkit-box-shadow: 0 0 3px 0 #f35800;\n          box-shadow: 0 0 3px 0 #f35800;\n}\n.k-primary:active {\n  color: #ffffff;\n  border-color: #f85a00;\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.2)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.2) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.2) 0%, rgba(255,255,255,.0) 100%);\n  background-color: #f25801;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.k-primary.k-state-disabled,\n.k-state-disabled .k-primary,\n.k-primary.k-state-disabled:hover,\n.k-state-disabled .k-primary:hover,\n.k-primary.k-state-disabled:hover,\n.k-state-disabled .k-primary:active,\n.k-primary.k-state-disabled:active {\n  color: #e6e6e6;\n  border-color: #e6e6e6;\n  background-color: #ff6f1d;\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.2)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.2) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.2) 0%, rgba(255,255,255,.0) 100%);\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.k-pager-numbers .k-link,\n.k-treeview .k-in {\n  border-color: transparent;\n}\n.k-treeview .k-icon,\n.k-scheduler-table .k-icon,\n.k-grid .k-hierarchy-cell .k-icon {\n  background-color: transparent;\n  border-radius: 4px;\n}\n.k-scheduler-table .k-state-hover .k-icon {\n  background-color: transparent;\n}\n.k-button:focus,\n.k-split-button:focus {\n  outline: none;\n}\n.k-split-button:focus {\n  -webkit-box-shadow: inset 0 0 4px 2px #b6b6b6;\n          box-shadow: inset 0 0 4px 2px #b6b6b6;\n}\n.k-split-button:focus > .k-button {\n  background: transparent;\n  border-color: #c5c5c5;\n}\n.k-editor .k-tool:focus {\n  outline: 0;\n  border-color: #c5c5c5;\n  -webkit-box-shadow: inset 0 0 3px 1px #b6b6b6;\n          box-shadow: inset 0 0 3px 1px #b6b6b6;\n}\n.k-checkbox-label:before {\n  border-color: #c5c5c5;\n  background: #fff;\n  border-radius: 3px;\n}\n.k-checkbox-label:hover:before,\n.k-checkbox:checked + .k-checkbox-label:hover:before {\n  border-color: #acacac;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.k-checkbox:checked + .k-checkbox-label:before {\n  background-color: #ffffff;\n  border-color: #cacaca;\n  color: #f85a00;\n}\n.k-checkbox-label:active:before {\n  -webkit-box-shadow: 0 0 3px 0 #f35800;\n          box-shadow: 0 0 3px 0 #f35800;\n  border-color: #f85a00;\n}\n.k-checkbox:checked + .k-checkbox-label:active:before {\n  -webkit-box-shadow: 0 0 3px 0 #f35800;\n          box-shadow: 0 0 3px 0 #f35800;\n  border-color: #f85a00;\n}\n.k-checkbox:disabled + .k-checkbox-label {\n  color: #c3c3c3;\n}\n.k-checkbox:disabled + .k-checkbox-label:hover:before {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.k-checkbox:disabled + .k-checkbox-label:before,\n.k-checkbox:checked:disabled + .k-checkbox-label:before,\n.k-checkbox:checked:disabled + .k-checkbox-label:active:before,\n.k-checkbox:checked:disabled + .k-checkbox-label:hover:before {\n  color: #c3c3c3;\n  background: #edebea;\n  border-color: #cacaca;\n  border-radius: 3px;\n}\n.k-checkbox:focus + .k-checkbox-label:before {\n  border-color: #f85a00;\n  -webkit-box-shadow: 0 0 3px 0 #f35800;\n          box-shadow: 0 0 3px 0 #f35800;\n}\n.k-checkbox:indeterminate + .k-checkbox-label:after {\n  background-color: #f85a00;\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.2)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.2) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.2) 0%, rgba(255,255,255,.0) 100%);\n  border-color: #f85a00;\n  border-radius: 2px;\n}\n.k-checkbox:indeterminate:hover + .k-checkbox-label:after {\n  border-color: #f85a00;\n  background-color: #f85a00;\n}\n.k-radio-label:before {\n  border-color: #c5c5c5;\n  border-radius: 50%;\n  background-color: #fff;\n  border-width: 1px;\n}\n.k-radio-label:hover:before,\n.k-radio:checked + .k-radio-label:hover:before {\n  border-color: #acacac;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.k-radio:checked + .k-radio-label:after {\n  background-color: #ff5e03;\n  border-radius: 50%;\n}\n.k-radio-label:active:before {\n  border-color: #f85a00;\n  -webkit-box-shadow: 0 0 3px 0 #f35800;\n          box-shadow: 0 0 3px 0 #f35800;\n}\n.k-radio:checked + .k-radio-label:active:before {\n  -webkit-box-shadow: 0 0 3px 0 #f35800;\n          box-shadow: 0 0 3px 0 #f35800;\n  border-color: #f85a00;\n}\n.k-radio:disabled + .k-radio-label {\n  color: #c3c3c3;\n}\n.k-radio:disabled + .k-radio-label:before,\n.k-radio:disabled + .k-radio-label:active:before,\n.k-radio:disabled + .k-radio-label:hover:after,\n.k-radio:disabled + .k-radio-label:hover:before {\n  background: #edebea;\n  border-color: #bfbfbf;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.k-radio:disabled:checked + .k-radio-label:after {\n  background-color: #ff5e03;\n  opacity: .5;\n}\n.k-radio:focus + .k-radio-label:before {\n  border-color: #f85a00;\n  -webkit-box-shadow: 0 0 3px 0 #f35800;\n          box-shadow: 0 0 3px 0 #f35800;\n}\n@media screen and (-ms-high-contrast: active) {\n  .k-editor-toolbar-wrap .k-dropdown-wrap.k-state-focused,\n  .k-editor-toolbar-wrap .k-button-group .k-tool:focus {\n    border-color: #fff;\n  }\n}\n/* Responsive styles */\n@media only screen and (max-width: 1024px) {\n  .k-webkit .k-pager-numbers,\n  .k-ff .k-pager-numbers,\n  .k-ie11 .k-pager-numbers,\n  .k-edge .k-pager-numbers,\n  .k-safari .k-pager-numbers,\n  .k-webkit .k-grid .k-pager-numbers,\n  .k-ff .k-grid .k-pager-numbers,\n  .k-ie11 .k-grid .k-pager-numbers,\n  .k-edge .k-grid .k-pager-numbers,\n  .k-safari .k-grid .k-pager-numbers {\n    -ms-transform: translatey(-100%);\n        transform: translatey(-100%);\n    -webkit-transform: translatey(-100%);\n  }\n  .k-webkit .k-pager-numbers .k-current-page,\n  .k-ff .k-pager-numbers .k-current-page,\n  .k-ie11 .k-pager-numbers .k-current-page,\n  .k-edge .k-pager-numbers .k-current-page,\n  .k-safari .k-pager-numbers .k-current-page,\n  .k-webkit .k-grid .k-pager-numbers .k-current-page,\n  .k-ff .k-grid .k-pager-numbers .k-current-page,\n  .k-ie11 .k-grid .k-pager-numbers .k-current-page,\n  .k-edge .k-grid .k-pager-numbers .k-current-page,\n  .k-safari .k-grid .k-pager-numbers .k-current-page {\n    -ms-transform: translatey(100%);\n        transform: translatey(100%);\n    -webkit-transform: translatey(100%);\n  }\n  .k-webkit .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view,\n  .k-ff .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view,\n  .k-ie11 .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view,\n  .k-edge .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view,\n  .k-safari .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view,\n  .k-webkit .k-pager-numbers .k-current-page .k-link,\n  .k-ff .k-pager-numbers .k-current-page .k-link,\n  .k-ie11 .k-pager-numbers .k-current-page .k-link,\n  .k-edge .k-pager-numbers .k-current-page .k-link,\n  .k-safari .k-pager-numbers .k-current-page .k-link {\n    background-image: url(" + __webpack_require__(0) + ");\n    background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.6)), to(rgba(255,255,255,.0)));\n    background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.6) 0%, rgba(255,255,255,.0) 100%);\n    background-image: none, linear-gradient(to bottom, rgba(255,255,255,.6) 0%, rgba(255,255,255,.0) 100%);\n    background-position: 50% 50%;\n    background-color: #ececec;\n    border-color: #d5d5d5;\n  }\n  .k-webkit .k-pager-numbers .k-current-page .k-link,\n  .k-ff .k-pager-numbers .k-current-page .k-link,\n  .k-ie11 .k-pager-numbers .k-current-page .k-link,\n  .k-edge .k-pager-numbers .k-current-page .k-link,\n  .k-safari .k-pager-numbers .k-current-page .k-link {\n    border-color: #c5c5c5;\n  }\n  .k-webkit .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view,\n  .k-ff .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view,\n  .k-ie11 .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view,\n  .k-edge .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view,\n  .k-safari .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view {\n    border-radius: 4px;\n  }\n  .k-webkit .k-scheduler-toolbar > ul.k-scheduler-views.k-state-expanded > li,\n  .k-ff .k-scheduler-toolbar > ul.k-scheduler-views.k-state-expanded > li,\n  .k-ie11 .k-scheduler-toolbar > ul.k-scheduler-views.k-state-expanded > li,\n  .k-edge .k-scheduler-toolbar > ul.k-scheduler-views.k-state-expanded > li,\n  .k-safari .k-scheduler-toolbar > ul.k-scheduler-views.k-state-expanded > li {\n    border-radius: 0;\n  }\n  .k-webkit .k-scheduler-toolbar > ul.k-scheduler-views.k-state-expanded > li.k-current-view,\n  .k-ff .k-scheduler-toolbar > ul.k-scheduler-views.k-state-expanded > li.k-current-view,\n  .k-ie11 .k-scheduler-toolbar > ul.k-scheduler-views.k-state-expanded > li.k-current-view,\n  .k-edge .k-scheduler-toolbar > ul.k-scheduler-views.k-state-expanded > li.k-current-view,\n  .k-safari .k-scheduler-toolbar > ul.k-scheduler-views.k-state-expanded > li.k-current-view {\n    border-radius: 3px 3px 0 0;\n  }\n  .k-webkit .k-scheduler-toolbar > ul li:first-child,\n  .k-ff .k-scheduler-toolbar > ul li:first-child,\n  .k-ie11 .k-scheduler-toolbar > ul li:first-child,\n  .k-edge .k-scheduler-toolbar > ul li:first-child,\n  .k-safari .k-scheduler-toolbar > ul li:first-child,\n  .k-webkit .k-scheduler-toolbar > ul li:first-child .k-link,\n  .k-ff .k-scheduler-toolbar > ul li:first-child .k-link,\n  .k-ie11 .k-scheduler-toolbar > ul li:first-child .k-link,\n  .k-edge .k-scheduler-toolbar > ul li:first-child .k-link,\n  .k-safari .k-scheduler-toolbar > ul li:first-child .k-link,\n  .k-webkit .k-scheduler-toolbar > ul.k-scheduler-views li,\n  .k-ff .k-scheduler-toolbar > ul.k-scheduler-views li,\n  .k-ie11 .k-scheduler-toolbar > ul.k-scheduler-views li,\n  .k-edge .k-scheduler-toolbar > ul.k-scheduler-views li,\n  .k-safari .k-scheduler-toolbar > ul.k-scheduler-views li,\n  .k-webkit .k-scheduler-toolbar > ul.k-scheduler-views li .k-link,\n  .k-ff .k-scheduler-toolbar > ul.k-scheduler-views li .k-link,\n  .k-ie11 .k-scheduler-toolbar > ul.k-scheduler-views li .k-link,\n  .k-edge .k-scheduler-toolbar > ul.k-scheduler-views li .k-link,\n  .k-safari .k-scheduler-toolbar > ul.k-scheduler-views li .k-link {\n    border-radius: 0;\n  }\n  .k-webkit .k-scheduler-toolbar > ul.k-scheduler-views li:last-child,\n  .k-ff .k-scheduler-toolbar > ul.k-scheduler-views li:last-child,\n  .k-ie11 .k-scheduler-toolbar > ul.k-scheduler-views li:last-child,\n  .k-edge .k-scheduler-toolbar > ul.k-scheduler-views li:last-child,\n  .k-safari .k-scheduler-toolbar > ul.k-scheduler-views li:last-child,\n  .k-webkit .k-scheduler-toolbar > ul.k-scheduler-views li:last-child .k-link,\n  .k-ff .k-scheduler-toolbar > ul.k-scheduler-views li:last-child .k-link,\n  .k-ie11 .k-scheduler-toolbar > ul.k-scheduler-views li:last-child .k-link,\n  .k-edge .k-scheduler-toolbar > ul.k-scheduler-views li:last-child .k-link,\n  .k-safari .k-scheduler-toolbar > ul.k-scheduler-views li:last-child .k-link {\n    border-radius: 0 0 3px 3px;\n  }\n  .k-webkit .k-pager-numbers .k-current-page .k-link:hover,\n  .k-ff .k-pager-numbers .k-current-page .k-link:hover,\n  .k-ie11 .k-pager-numbers .k-current-page .k-link:hover,\n  .k-edge .k-pager-numbers .k-current-page .k-link:hover,\n  .k-safari .k-pager-numbers .k-current-page .k-link:hover,\n  .k-webkit .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view:hover,\n  .k-ff .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view:hover,\n  .k-ie11 .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view:hover,\n  .k-edge .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view:hover,\n  .k-safari .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view:hover {\n    border-color: #b6b6b6;\n    background-image: url(" + __webpack_require__(0) + ");\n    background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.4)), to(rgba(255,255,255,.0)));\n    background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.4) 0%, rgba(255,255,255,.0) 100%);\n    background-image: none, linear-gradient(to bottom, rgba(255,255,255,.4) 0%, rgba(255,255,255,.0) 100%);\n    background-color: #bcb4b0;\n  }\n  .k-webkit .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view > .k-link,\n  .k-ff .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view > .k-link,\n  .k-ie11 .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view > .k-link,\n  .k-edge .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view > .k-link,\n  .k-safari .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view > .k-link {\n    color: #2e2e2e;\n    min-width: 75px;\n  }\n  .k-webkit .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view:hover > .k-link,\n  .k-ff .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view:hover > .k-link,\n  .k-ie11 .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view:hover > .k-link,\n  .k-edge .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view:hover > .k-link,\n  .k-safari .k-scheduler-toolbar > ul.k-scheduler-views > li.k-current-view:hover > .k-link {\n    color: #2e2e2e;\n  }\n  .k-webkit .k-pager-numbers .k-current-page .k-link:after,\n  .k-ff .k-pager-numbers .k-current-page .k-link:after,\n  .k-ie11 .k-pager-numbers .k-current-page .k-link:after,\n  .k-edge .k-pager-numbers .k-current-page .k-link:after,\n  .k-safari .k-pager-numbers .k-current-page .k-link:after,\n  .k-webkit .k-scheduler-views > li.k-state-selected > .k-link:after,\n  .k-ff .k-scheduler-views > li.k-state-selected > .k-link:after,\n  .k-ie11 .k-scheduler-views > li.k-state-selected > .k-link:after,\n  .k-edge .k-scheduler-views > li.k-state-selected > .k-link:after,\n  .k-safari .k-scheduler-views > li.k-state-selected > .k-link:after {\n    display: block;\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5em;\n    right: 0.333em;\n    width: 1.333em;\n    height: 1.333em;\n  }\n  .k-webkit .k-pager-numbers.k-state-expanded,\n  .k-ff .k-pager-numbers.k-state-expanded,\n  .k-ie11 .k-pager-numbers.k-state-expanded,\n  .k-edge .k-pager-numbers.k-state-expanded,\n  .k-safari .k-pager-numbers.k-state-expanded,\n  .k-webkit .k-scheduler-toolbar > ul.k-scheduler-views.k-state-expanded,\n  .k-ff .k-scheduler-toolbar > ul.k-scheduler-views.k-state-expanded,\n  .k-ie11 .k-scheduler-toolbar > ul.k-scheduler-views.k-state-expanded,\n  .k-edge .k-scheduler-toolbar > ul.k-scheduler-views.k-state-expanded,\n  .k-safari .k-scheduler-toolbar > ul.k-scheduler-views.k-state-expanded {\n    border-width: 1px 1px 0 1px;\n    border-style: solid;\n    border-color: #c5c5c5;\n    background-color: #eae8e8;\n    border-radius: 4px 4px 0 0;\n    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);\n            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);\n  }\n  .k-webkit .k-scheduler-toolbar > ul.k-scheduler-views.k-state-expanded,\n  .k-ff .k-scheduler-toolbar > ul.k-scheduler-views.k-state-expanded,\n  .k-ie11 .k-scheduler-toolbar > ul.k-scheduler-views.k-state-expanded,\n  .k-edge .k-scheduler-toolbar > ul.k-scheduler-views.k-state-expanded,\n  .k-safari .k-scheduler-toolbar > ul.k-scheduler-views.k-state-expanded {\n    border-width: 1px;\n    background-image: none;\n    border-radius: 4px;\n  }\n  .k-webkit .k-pager-numbers .k-state-selected,\n  .k-ff .k-pager-numbers .k-state-selected,\n  .k-ie11 .k-pager-numbers .k-state-selected,\n  .k-edge .k-pager-numbers .k-state-selected,\n  .k-safari .k-pager-numbers .k-state-selected,\n  .k-webkit .k-pager-numbers .k-link,\n  .k-ff .k-pager-numbers .k-link,\n  .k-ie11 .k-pager-numbers .k-link,\n  .k-edge .k-pager-numbers .k-link,\n  .k-safari .k-pager-numbers .k-link {\n    border-radius: 3px;\n  }\n  .k-webkit .k-widget.k-grid .k-pager-nav + .k-pager-numbers,\n  .k-ff .k-widget.k-grid .k-pager-nav + .k-pager-numbers,\n  .k-ie11 .k-widget.k-grid .k-pager-nav + .k-pager-numbers,\n  .k-edge .k-widget.k-grid .k-pager-nav + .k-pager-numbers,\n  .k-safari .k-widget.k-grid .k-pager-nav + .k-pager-numbers {\n    position: absolute;\n  }\n}\n.k-chart .k-mask {\n  background-color: #fff;\n  filter: alpha(opacity=68);\n  opacity: 0.68;\n}\n.k-chart .k-selection {\n  border-color: rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: inset 0 1px 8px rgba(0, 0, 0, 0.1);\n          box-shadow: inset 0 1px 8px rgba(0, 0, 0, 0.1);\n  -webkit-transition: -webkit-box-shadow 0.2s linear, border-color 0.2s linear;\n          transition: box-shadow 0.2s linear, border-color 0.2s linear;\n}\n.k-chart .k-selection:hover {\n  border-color: rgba(0, 0, 0, 0.3);\n  -webkit-box-shadow: inset 0 3px 8px rgba(0, 0, 0, 0.2);\n          box-shadow: inset 0 3px 8px rgba(0, 0, 0, 0.2);\n}\n.k-chart .k-handle {\n  background-color: #fcfcfc;\n  -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);\n}\n.k-chart .k-handle:hover {\n  background-color: #ffffff;\n  border-color: #b8b8b8;\n  -webkit-box-shadow: 0 0 0 2px rgba(111, 101, 96, 0.5);\n          box-shadow: 0 0 0 2px rgba(111, 101, 96, 0.5);\n}\n.k-chart .k-navigator-hint .k-tooltip {\n  border: 3px solid #ffffff;\n  -webkit-box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);\n  background: #ffffff;\n  color: #242424;\n}\n.k-chart .k-navigator-hint .k-scroll {\n  background: rgba(243, 88, 0, 0.7);\n  height: 4px;\n}\n/* Map */\n.k-map .k-marker {\n  background-image: url(" + __webpack_require__(25) + ");\n}\n@media only screen and (-webkit-min-device-pixel-ratio: 1.2), only screen and (min-device-pixel-ratio: 1.2) {\n  .k-map .k-marker {\n    background-image: url(" + __webpack_require__(26) + ");\n  }\n}\n.k-map .k-attribution {\n  color: #666666;\n}\n.k-spreadsheet-row-header,\n.k-spreadsheet-column-header {\n  background-color: #fff;\n}\n.k-spreadsheet-top-corner,\n.k-spreadsheet-row-header,\n.k-spreadsheet-column-header {\n  background-color: #e9e9e9;\n  background-image: none;\n  color: #000000;\n  border-color: #b6b6b6;\n}\n.k-spreadsheet-top-corner {\n  border-color: #b6b6b6;\n}\n.k-spreadsheet-top-corner:after {\n  border-color: transparent #b6b6b6 #b6b6b6 transparent;\n}\n.k-spreadsheet-pane {\n  border-color: #b6b6b6;\n}\n.k-spreadsheet-pane .k-spreadsheet-vaxis,\n.k-spreadsheet-pane .k-spreadsheet-haxis {\n  border-color: #d0d0d0;\n}\n.k-spreadsheet-pane .k-spreadsheet-column-header,\n.k-spreadsheet-pane .k-spreadsheet-row-header {\n  border-color: #b6b6b6;\n}\n.k-spreadsheet-pane .k-spreadsheet-merged-cell {\n  background-color: #fff;\n}\n.k-spreadsheet-pane .k-selection-partial,\n.k-spreadsheet-pane .k-selection-full {\n  border-color: rgba(243, 88, 0, 0.2);\n  background-color: rgba(243, 88, 0, 0.2);\n}\n.k-spreadsheet-pane .k-filter-range {\n  border-color: #f35800;\n}\n.k-spreadsheet-pane .k-spreadsheet-column-header .k-selection-partial,\n.k-spreadsheet-pane .k-spreadsheet-column-header .k-selection-full {\n  border-bottom-color: #f35800;\n}\n.k-spreadsheet-pane .k-spreadsheet-row-header .k-selection-partial,\n.k-spreadsheet-pane .k-spreadsheet-row-header .k-selection-full {\n  border-right-color: #f35800;\n}\n.k-auto-fill,\n.k-spreadsheet-selection {\n  border-color: #f35800;\n  -webkit-box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #f35800;\n          box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #f35800;\n}\n.k-spreadsheet-selection {\n  background-color: rgba(243, 88, 0, 0.2);\n}\n.k-spreadsheet-active-cell {\n  border-color: #f35800 !important;\n  background-color: #fff;\n}\n.k-spreadsheet-active-cell.k-single {\n  color: #2e2e2e;\n  background-color: #fff;\n}\n.k-spreadsheet .k-spreadsheet-action-bar {\n  background-color: #fff;\n  border-color: #d5d5d5;\n}\n.k-spreadsheet .k-spreadsheet-action-bar .k-spreadsheet-name-editor {\n  border-color: #b6b6b6;\n}\n.k-spreadsheet .k-spreadsheet-action-bar .k-spreadsheet-formula-bar::before {\n  border-color: #b6b6b6;\n}\n.k-spreadsheet .k-spreadsheet-formula-input {\n  background-color: #fff;\n  color: #2e2e2e;\n}\n.k-spreadsheet .k-resize-handle,\n.k-spreadsheet .k-resize-hint-handle,\n.k-spreadsheet .k-resize-hint-marker {\n  background-color: #f35800;\n}\n.k-spreadsheet .k-resize-hint-vertical .k-resize-hint-handle,\n.k-spreadsheet .k-resize-hint-vertical .k-resize-hint-marker {\n  background-color: #f35800;\n}\n.k-spreadsheet .k-single-selection::after {\n  background-color: #f35800;\n  border-color: #fff;\n}\n.k-spreadsheet .k-auto-fill-punch {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.k-spreadsheet .k-single-selection.k-dim-auto-fill-handle::after {\n  background-color: rgba(243, 88, 0, 0.5);\n}\n.k-spreadsheet-format-cells .k-spreadsheet-preview {\n  border-color: #d5d5d5;\n}\n.k-spreadsheet-filter {\n  border-radius: 4px;\n  background-color: #fff;\n  -webkit-box-shadow: inset 0 0 0 1px #d0d0d0;\n          box-shadow: inset 0 0 0 1px #d0d0d0;\n}\n.k-spreadsheet-filter.k-state-active {\n  color: #fff;\n  background-color: #f35800;\n}\n.k-spreadsheet-filter:hover {\n  color: #2e2e2e;\n  background: #bcb4b0;\n  border-color: #a99f9a;\n}\n.k-action-window .k-action-buttons {\n  border-color: #d5d5d5;\n}\n.k-spreadsheet-sample {\n  color: #7a7a7a;\n}\n.k-state-selected .k-spreadsheet-sample {\n  color: inherit;\n}\n.k-spreadsheet-window .k-list-wrapper,\n.k-spreadsheet-window .k-list {\n  border-color: #d5d5d5;\n  border-radius: 4px;\n}\n.k-spreadsheet-window .export-config,\n.k-spreadsheet-window .k-edit-field > .k-orientation-label {\n  border-color: #d5d5d5;\n}\n.k-spreadsheet-window .k-edit-field > input[type=\"radio\"]:checked + .k-orientation-label {\n  background-image: url(" + __webpack_require__(0) + ");\n  background-image: none, -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.2)), to(rgba(255,255,255,.0)));\n  background-image: none, -webkit-linear-gradient(top, rgba(255,255,255,.2) 0%, rgba(255,255,255,.0) 100%);\n  background-image: none, linear-gradient(to bottom, rgba(255,255,255,.2) 0%, rgba(255,255,255,.0) 100%);\n  background-color: #f35800;\n  color: #ffffff;\n}\n.k-spreadsheet-window .k-page-orientation {\n  border-color: #c5c5c5;\n  -webkit-box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1);\n}\n.k-spreadsheet-window .k-page-orientation:before {\n  background: #fff;\n  border-color: transparent;\n  border-bottom-color: #c5c5c5;\n  border-left-color: #c5c5c5;\n}\n.k-spreadsheet-window .k-margins-horizontal,\n.k-spreadsheet-window .k-margins-vertical {\n  background: transparent;\n  border-color: #d5d5d5;\n}\n.k-spreadsheet-window .hint-wrapper:before {\n  background: #d5d5d5;\n}\n.k-spreadsheet-toolbar.k-toolbar .k-button-group .k-button {\n  border-radius: 4px;\n}\n.k-spreadsheet-toolbar > .k-widget,\n.k-spreadsheet-toolbar > .k-button,\n.k-spreadsheet-toolbar > .k-button-group {\n  border-radius: 4px;\n}\n.k-spreadsheet-toolbar > .k-separator {\n  border-color: #d5d5d5;\n}\n.k-spreadsheet-toolbar .k-overflow-anchor {\n  border-radius: 0;\n}\n.k-spreadsheet-popup {\n  border-radius: 4px;\n}\n.k-spreadsheet-popup .k-separator {\n  background-color: #d5d5d5;\n}\n.k-spreadsheet-popup .k-button {\n  background-color: transparent;\n}\n.k-spreadsheet-popup .k-button:hover {\n  background-color: #bcb4b0;\n}\n.k-spreadsheet-popup .k-state-active {\n  background-color: #f35800;\n  color: #000000;\n}\n.k-spreadsheet-popup .k-state-active:hover {\n  background-color: #c04600;\n}\n.k-spreadsheet-filter-menu .k-details {\n  border-color: #d5d5d5;\n}\n.k-spreadsheet-filter-menu .k-details-content .k-space-right {\n  background-color: #fff;\n}\n.k-spreadsheet-filter-menu .k-spreadsheet-value-treeview-wrapper {\n  background-color: #fff;\n  border-color: #d5d5d5;\n  border-radius: 4px 0 0 4px;\n}\n.k-syntax-ref {\n  color: #ff8822;\n}\n.k-syntax-num {\n  color: #0099ff;\n}\n.k-syntax-func {\n  font-weight: bold;\n}\n.k-syntax-str {\n  color: #38b714;\n}\n.k-syntax-error {\n  color: red;\n}\n.k-syntax-bool {\n  color: #a9169c;\n}\n.k-syntax-startexp {\n  font-weight: bold;\n}\n.k-syntax-paren-match {\n  background-color: #caf200;\n}\n.k-series-a {\n  border-color: #ff6800;\n  background-color: rgba(255, 104, 0, 0.15);\n}\n.k-series-b {\n  border-color: #a0a700;\n  background-color: rgba(160, 167, 0, 0.15);\n}\n.k-series-c {\n  border-color: #ff8d00;\n  background-color: rgba(255, 141, 0, 0.15);\n}\n.k-series-d {\n  border-color: #678900;\n  background-color: rgba(103, 137, 0, 0.15);\n}\n.k-series-e {\n  border-color: #ffb53c;\n  background-color: rgba(255, 181, 60, 0.15);\n}\n.k-series-f {\n  border-color: #396000;\n  background-color: rgba(57, 96, 0, 0.15);\n}\n.k-spreadsheet-sheets-remove:hover .k-icon {\n  color: #cc2222;\n}\n.k-spreadsheet-formula-list .k-state-focused {\n  background-color: #f35800;\n  color: #fff;\n}\n.k-spreadsheet .k-widget[data-property='fontSize'] {\n  width: 60px;\n}\n.k-spreadsheet .k-widget[data-property='format'] {\n  width: 100px;\n}\n.k-spreadsheet .k-widget[data-property='fontFamily'] {\n  width: 130px;\n}\n.k-spreadsheet-toolbar .k-combobox .k-input {\n  color: #2e2e2e;\n}\n.k-spreadsheet-toolbar .k-combobox .k-state-hover .k-input,\n.k-spreadsheet-toolbar .k-combobox .k-state-active .k-input,\n.k-spreadsheet-toolbar .k-combobox .k-state-focused .k-input {\n  color: #2e2e2e;\n}\n/* Dialog */\n.k-dialog .k-content {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.k-dialog.k-dialog-titleless .k-content {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n}\n.k-dialog .k-dialog-buttongroup.k-dialog-button-layout-stretched {\n  width: 100%;\n}\n.k-dialog .k-dialog-buttongroup.k-dialog-button-layout-stretched .k-button {\n  display: inline-block;\n  padding: 0.75em 0 0.75em 0;\n  border-radius: 0;\n  border-width: 1px 0 1px 1px;\n}\n.k-dialog .k-dialog-buttongroup.k-dialog-button-layout-stretched .k-button:first-child {\n  border-bottom-left-radius: 4px;\n  border-left-width: 0;\n}\n.k-dialog .k-dialog-buttongroup.k-dialog-button-layout-stretched .k-button:last-child {\n  border-bottom-right-radius: 4px;\n  border-right-width: 0;\n}\n.k-dialog .k-dialog-buttongroup.k-dialog-button-layout-normal {\n  width: auto;\n  margin: 0;\n  padding: 1em;\n  text-align: right;\n}\n.k-dialog .k-dialog-buttongroup.k-dialog-button-layout-normal .k-button {\n  margin-left: 0.5em;\n}\n.k-dialog .k-dialog-buttongroup.k-dialog-button-layout-normal .k-button:first-child {\n  margin-left: 0;\n}\n.k-rtl .k-dialog a.k-dialog-action.k-dialog-close {\n  left: .5em;\n}\n.k-rtl .k-dialog .k-dialog-buttongroup.k-dialog-button-layout-stretched .k-button:first-child {\n  border-bottom-right-radius: 4px;\n}\n.k-rtl .k-dialog .k-dialog-buttongroup.k-dialog-button-layout-stretched .k-button:last-child {\n  border-bottom-left-radius: 4px;\n}\n.k-rtl .k-dialog .k-dialog-buttongroup.k-dialog-button-layout-normal {\n  text-align: left;\n}\n.k-rtl .k-dialog .k-dialog-buttongroup.k-dialog-button-layout-normal .k-button {\n  margin-left: 0;\n  margin-right: 0.5em;\n}\n.k-rtl .k-dialog .k-dialog-buttongroup.k-dialog-button-layout-normal .k-button:first-child {\n  margin-right: 0;\n}\n", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e56b265d75d2f67f119d4a6defb60425.svg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4e5d161892b5d8d9d1d29277664d30fc.ttf";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(438);


/***/ },

/***/ 420:
/***/ function(module, exports) {

	module.exports = __webpack_require__(1);

/***/ },

/***/ 422:
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(jQuery) {(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(420)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "core",
	    name: "Core",
	    category: "framework",
	    description: "The core of the Kendo framework."
	};

	/*jshint eqnull: true, loopfunc: true, evil: true, boss: true, freeze: false*/
	(function($, window, undefined) {
	    var kendo = window.kendo = window.kendo || { cultures: {} },
	        extend = $.extend,
	        each = $.each,
	        isArray = $.isArray,
	        proxy = $.proxy,
	        noop = $.noop,
	        math = Math,
	        Template,
	        JSON = window.JSON || {},
	        support = {},
	        percentRegExp = /%/,
	        formatRegExp = /\{(\d+)(:[^\}]+)?\}/g,
	        boxShadowRegExp = /(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+)?/i,
	        numberRegExp = /^(\+|-?)\d+(\.?)\d*$/,
	        FUNCTION = "function",
	        STRING = "string",
	        NUMBER = "number",
	        OBJECT = "object",
	        NULL = "null",
	        BOOLEAN = "boolean",
	        UNDEFINED = "undefined",
	        getterCache = {},
	        setterCache = {},
	        slice = [].slice;

	    kendo.version = "$KENDO_VERSION".replace(/^\s+|\s+$/g, '');

	    function Class() {}

	    Class.extend = function(proto) {
	        var base = function() {},
	            member,
	            that = this,
	            subclass = proto && proto.init ? proto.init : function () {
	                that.apply(this, arguments);
	            },
	            fn;

	        base.prototype = that.prototype;
	        fn = subclass.fn = subclass.prototype = new base();

	        for (member in proto) {
	            if (proto[member] != null && proto[member].constructor === Object) {
	                // Merge object members
	                fn[member] = extend(true, {}, base.prototype[member], proto[member]);
	            } else {
	                fn[member] = proto[member];
	            }
	        }

	        fn.constructor = subclass;
	        subclass.extend = that.extend;

	        return subclass;
	    };

	    Class.prototype._initOptions = function(options) {
	        this.options = deepExtend({}, this.options, options);
	    };

	    var isFunction = kendo.isFunction = function(fn) {
	        return typeof fn === "function";
	    };

	    var preventDefault = function() {
	        this._defaultPrevented = true;
	    };

	    var isDefaultPrevented = function() {
	        return this._defaultPrevented === true;
	    };

	    var Observable = Class.extend({
	        init: function() {
	            this._events = {};
	        },

	        bind: function(eventName, handlers, one) {
	            var that = this,
	                idx,
	                eventNames = typeof eventName === STRING ? [eventName] : eventName,
	                length,
	                original,
	                handler,
	                handlersIsFunction = typeof handlers === FUNCTION,
	                events;

	            if (handlers === undefined) {
	                for (idx in eventName) {
	                    that.bind(idx, eventName[idx]);
	                }
	                return that;
	            }

	            for (idx = 0, length = eventNames.length; idx < length; idx++) {
	                eventName = eventNames[idx];

	                handler = handlersIsFunction ? handlers : handlers[eventName];

	                if (handler) {
	                    if (one) {
	                        original = handler;
	                        handler = function() {
	                            that.unbind(eventName, handler);
	                            original.apply(that, arguments);
	                        };
	                        handler.original = original;
	                    }
	                    events = that._events[eventName] = that._events[eventName] || [];
	                    events.push(handler);
	                }
	            }

	            return that;
	        },

	        one: function(eventNames, handlers) {
	            return this.bind(eventNames, handlers, true);
	        },

	        first: function(eventName, handlers) {
	            var that = this,
	                idx,
	                eventNames = typeof eventName === STRING ? [eventName] : eventName,
	                length,
	                handler,
	                handlersIsFunction = typeof handlers === FUNCTION,
	                events;

	            for (idx = 0, length = eventNames.length; idx < length; idx++) {
	                eventName = eventNames[idx];

	                handler = handlersIsFunction ? handlers : handlers[eventName];

	                if (handler) {
	                    events = that._events[eventName] = that._events[eventName] || [];
	                    events.unshift(handler);
	                }
	            }

	            return that;
	        },

	        trigger: function(eventName, e) {
	            var that = this,
	                events = that._events[eventName],
	                idx,
	                length;

	            if (events) {
	                e = e || {};

	                e.sender = that;

	                e._defaultPrevented = false;

	                e.preventDefault = preventDefault;

	                e.isDefaultPrevented = isDefaultPrevented;

	                events = events.slice();

	                for (idx = 0, length = events.length; idx < length; idx++) {
	                    events[idx].call(that, e);
	                }

	                return e._defaultPrevented === true;
	            }

	            return false;
	        },

	        unbind: function(eventName, handler) {
	            var that = this,
	                events = that._events[eventName],
	                idx;

	            if (eventName === undefined) {
	                that._events = {};
	            } else if (events) {
	                if (handler) {
	                    for (idx = events.length - 1; idx >= 0; idx--) {
	                        if (events[idx] === handler || events[idx].original === handler) {
	                            events.splice(idx, 1);
	                        }
	                    }
	                } else {
	                    that._events[eventName] = [];
	                }
	            }

	            return that;
	        }
	    });


	     function compilePart(part, stringPart) {
	         if (stringPart) {
	             return "'" +
	                 part.split("'").join("\\'")
	                     .split('\\"').join('\\\\\\"')
	                     .replace(/\n/g, "\\n")
	                     .replace(/\r/g, "\\r")
	                     .replace(/\t/g, "\\t") + "'";
	         } else {
	             var first = part.charAt(0),
	                 rest = part.substring(1);

	             if (first === "=") {
	                 return "+(" + rest + ")+";
	             } else if (first === ":") {
	                 return "+$kendoHtmlEncode(" + rest + ")+";
	             } else {
	                 return ";" + part + ";$kendoOutput+=";
	             }
	         }
	     }

	    var argumentNameRegExp = /^\w+/,
	        encodeRegExp = /\$\{([^}]*)\}/g,
	        escapedCurlyRegExp = /\\\}/g,
	        curlyRegExp = /__CURLY__/g,
	        escapedSharpRegExp = /\\#/g,
	        sharpRegExp = /__SHARP__/g,
	        zeros = ["", "0", "00", "000", "0000"];

	    Template = {
	        paramName: "data", // name of the parameter of the generated template
	        useWithBlock: true, // whether to wrap the template in a with() block
	        render: function(template, data) {
	            var idx,
	                length,
	                html = "";

	            for (idx = 0, length = data.length; idx < length; idx++) {
	                html += template(data[idx]);
	            }

	            return html;
	        },
	        compile: function(template, options) {
	            var settings = extend({}, this, options),
	                paramName = settings.paramName,
	                argumentName = paramName.match(argumentNameRegExp)[0],
	                useWithBlock = settings.useWithBlock,
	                functionBody = "var $kendoOutput, $kendoHtmlEncode = kendo.htmlEncode;",
	                fn,
	                parts,
	                idx;

	            if (isFunction(template)) {
	                return template;
	            }

	            functionBody += useWithBlock ? "with(" + paramName + "){" : "";

	            functionBody += "$kendoOutput=";

	            parts = template
	                .replace(escapedCurlyRegExp, "__CURLY__")
	                .replace(encodeRegExp, "#=$kendoHtmlEncode($1)#")
	                .replace(curlyRegExp, "}")
	                .replace(escapedSharpRegExp, "__SHARP__")
	                .split("#");

	            for (idx = 0; idx < parts.length; idx ++) {
	                functionBody += compilePart(parts[idx], idx % 2 === 0);
	            }

	            functionBody += useWithBlock ? ";}" : ";";

	            functionBody += "return $kendoOutput;";

	            functionBody = functionBody.replace(sharpRegExp, "#");

	            try {
	                fn = new Function(argumentName, functionBody);
	                fn._slotCount = Math.floor(parts.length / 2);
	                return fn;
	            } catch(e) {
	                throw new Error(kendo.format("Invalid template:'{0}' Generated code:'{1}'", template, functionBody));
	            }
	        }
	    };

	function pad(number, digits, end) {
	    number = number + "";
	    digits = digits || 2;
	    end = digits - number.length;

	    if (end) {
	        return zeros[digits].substring(0, end) + number;
	    }

	    return number;
	}

	    //JSON stringify
	(function() {
	    var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	        gap,
	        indent,
	        meta = {
	            "\b": "\\b",
	            "\t": "\\t",
	            "\n": "\\n",
	            "\f": "\\f",
	            "\r": "\\r",
	            "\"" : '\\"',
	            "\\": "\\\\"
	        },
	        rep,
	        toString = {}.toString;


	    if (typeof Date.prototype.toJSON !== FUNCTION) {

	        Date.prototype.toJSON = function () {
	            var that = this;

	            return isFinite(that.valueOf()) ?
	                pad(that.getUTCFullYear(), 4) + "-" +
	                pad(that.getUTCMonth() + 1)   + "-" +
	                pad(that.getUTCDate())        + "T" +
	                pad(that.getUTCHours())       + ":" +
	                pad(that.getUTCMinutes())     + ":" +
	                pad(that.getUTCSeconds())     + "Z" : null;
	        };

	        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
	            return this.valueOf();
	        };
	    }

	    function quote(string) {
	        escapable.lastIndex = 0;
	        return escapable.test(string) ? "\"" + string.replace(escapable, function (a) {
	            var c = meta[a];
	            return typeof c === STRING ? c :
	                "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
	        }) + "\"" : "\"" + string + "\"";
	    }

	    function str(key, holder) {
	        var i,
	            k,
	            v,
	            length,
	            mind = gap,
	            partial,
	            value = holder[key],
	            type;

	        if (value && typeof value === OBJECT && typeof value.toJSON === FUNCTION) {
	            value = value.toJSON(key);
	        }

	        if (typeof rep === FUNCTION) {
	            value = rep.call(holder, key, value);
	        }

	        type = typeof value;
	        if (type === STRING) {
	            return quote(value);
	        } else if (type === NUMBER) {
	            return isFinite(value) ? String(value) : NULL;
	        } else if (type === BOOLEAN || type === NULL) {
	            return String(value);
	        } else if (type === OBJECT) {
	            if (!value) {
	                return NULL;
	            }
	            gap += indent;
	            partial = [];
	            if (toString.apply(value) === "[object Array]") {
	                length = value.length;
	                for (i = 0; i < length; i++) {
	                    partial[i] = str(i, value) || NULL;
	                }
	                v = partial.length === 0 ? "[]" : gap ?
	                    "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" :
	                    "[" + partial.join(",") + "]";
	                gap = mind;
	                return v;
	            }
	            if (rep && typeof rep === OBJECT) {
	                length = rep.length;
	                for (i = 0; i < length; i++) {
	                    if (typeof rep[i] === STRING) {
	                        k = rep[i];
	                        v = str(k, value);
	                        if (v) {
	                            partial.push(quote(k) + (gap ? ": " : ":") + v);
	                        }
	                    }
	                }
	            } else {
	                for (k in value) {
	                    if (Object.hasOwnProperty.call(value, k)) {
	                        v = str(k, value);
	                        if (v) {
	                            partial.push(quote(k) + (gap ? ": " : ":") + v);
	                        }
	                    }
	                }
	            }

	            v = partial.length === 0 ? "{}" : gap ?
	                "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" :
	                "{" + partial.join(",") + "}";
	            gap = mind;
	            return v;
	        }
	    }

	    if (typeof JSON.stringify !== FUNCTION) {
	        JSON.stringify = function (value, replacer, space) {
	            var i;
	            gap = "";
	            indent = "";

	            if (typeof space === NUMBER) {
	                for (i = 0; i < space; i += 1) {
	                    indent += " ";
	                }

	            } else if (typeof space === STRING) {
	                indent = space;
	            }

	            rep = replacer;
	            if (replacer && typeof replacer !== FUNCTION && (typeof replacer !== OBJECT || typeof replacer.length !== NUMBER)) {
	                throw new Error("JSON.stringify");
	            }

	            return str("", {"": value});
	        };
	    }
	})();

	// Date and Number formatting
	(function() {
	    var dateFormatRegExp = /dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|HH|H|hh|h|mm|m|fff|ff|f|tt|ss|s|zzz|zz|z|"[^"]*"|'[^']*'/g,
	        standardFormatRegExp =  /^(n|c|p|e)(\d*)$/i,
	        literalRegExp = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g,
	        commaRegExp = /\,/g,
	        EMPTY = "",
	        POINT = ".",
	        COMMA = ",",
	        SHARP = "#",
	        ZERO = "0",
	        PLACEHOLDER = "??",
	        EN = "en-US",
	        objectToString = {}.toString;

	    //cultures
	    kendo.cultures["en-US"] = {
	        name: EN,
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": ",",
	            ".": ".",
	            groupSize: [3],
	            percent: {
	                pattern: ["-n %", "n %"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "US Dollar",
	                abbr: "USD",
	                pattern: ["($n)", "$n"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "$"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	                    namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	                    namesShort: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ]
	                },
	                months: {
	                    names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	                    namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	                },
	                AM: [ "AM", "am", "AM" ],
	                PM: [ "PM", "pm", "PM" ],
	                patterns: {
	                    d: "M/d/yyyy",
	                    D: "dddd, MMMM dd, yyyy",
	                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
	                    g: "M/d/yyyy h:mm tt",
	                    G: "M/d/yyyy h:mm:ss tt",
	                    m: "MMMM dd",
	                    M: "MMMM dd",
	                    s: "yyyy'-'MM'-'ddTHH':'mm':'ss",
	                    t: "h:mm tt",
	                    T: "h:mm:ss tt",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM, yyyy",
	                    Y: "MMMM, yyyy"
	                },
	                "/": "/",
	                ":": ":",
	                firstDay: 0,
	                twoDigitYearMax: 2029
	            }
	        }
	    };


	     function findCulture(culture) {
	        if (culture) {
	            if (culture.numberFormat) {
	                return culture;
	            }

	            if (typeof culture === STRING) {
	                var cultures = kendo.cultures;
	                return cultures[culture] || cultures[culture.split("-")[0]] || null;
	            }

	            return null;
	        }

	        return null;
	    }

	    function getCulture(culture) {
	        if (culture) {
	            culture = findCulture(culture);
	        }

	        return culture || kendo.cultures.current;
	    }

	    kendo.culture = function(cultureName) {
	        var cultures = kendo.cultures, culture;

	        if (cultureName !== undefined) {
	            culture = findCulture(cultureName) || cultures[EN];
	            culture.calendar = culture.calendars.standard;
	            cultures.current = culture;
	        } else {
	            return cultures.current;
	        }
	    };

	    kendo.findCulture = findCulture;
	    kendo.getCulture = getCulture;

	    //set current culture to en-US.
	    kendo.culture(EN);

	    function formatDate(date, format, culture) {
	        culture = getCulture(culture);

	        var calendar = culture.calendars.standard,
	            days = calendar.days,
	            months = calendar.months;

	        format = calendar.patterns[format] || format;

	        return format.replace(dateFormatRegExp, function (match) {
	            var minutes;
	            var result;
	            var sign;

	            if (match === "d") {
	                result = date.getDate();
	            } else if (match === "dd") {
	                result = pad(date.getDate());
	            } else if (match === "ddd") {
	                result = days.namesAbbr[date.getDay()];
	            } else if (match === "dddd") {
	                result = days.names[date.getDay()];
	            } else if (match === "M") {
	                result = date.getMonth() + 1;
	            } else if (match === "MM") {
	                result = pad(date.getMonth() + 1);
	            } else if (match === "MMM") {
	                result = months.namesAbbr[date.getMonth()];
	            } else if (match === "MMMM") {
	                result = months.names[date.getMonth()];
	            } else if (match === "yy") {
	                result = pad(date.getFullYear() % 100);
	            } else if (match === "yyyy") {
	                result = pad(date.getFullYear(), 4);
	            } else if (match === "h" ) {
	                result = date.getHours() % 12 || 12;
	            } else if (match === "hh") {
	                result = pad(date.getHours() % 12 || 12);
	            } else if (match === "H") {
	                result = date.getHours();
	            } else if (match === "HH") {
	                result = pad(date.getHours());
	            } else if (match === "m") {
	                result = date.getMinutes();
	            } else if (match === "mm") {
	                result = pad(date.getMinutes());
	            } else if (match === "s") {
	                result = date.getSeconds();
	            } else if (match === "ss") {
	                result = pad(date.getSeconds());
	            } else if (match === "f") {
	                result = math.floor(date.getMilliseconds() / 100);
	            } else if (match === "ff") {
	                result = date.getMilliseconds();
	                if (result > 99) {
	                    result = math.floor(result / 10);
	                }
	                result = pad(result);
	            } else if (match === "fff") {
	                result = pad(date.getMilliseconds(), 3);
	            } else if (match === "tt") {
	                result = date.getHours() < 12 ? calendar.AM[0] : calendar.PM[0];
	            } else if (match === "zzz") {
	                minutes = date.getTimezoneOffset();
	                sign = minutes < 0;

	                result = math.abs(minutes / 60).toString().split(".")[0];
	                minutes = math.abs(minutes) - (result * 60);

	                result = (sign ? "+" : "-") + pad(result);
	                result += ":" + pad(minutes);
	            } else if (match === "zz" || match === "z") {
	                result = date.getTimezoneOffset() / 60;
	                sign = result < 0;

	                result = math.abs(result).toString().split(".")[0];
	                result = (sign ? "+" : "-") + (match === "zz" ? pad(result) : result);
	            }

	            return result !== undefined ? result : match.slice(1, match.length - 1);
	        });
	    }

	    //number formatting
	    function formatNumber(number, format, culture) {
	        culture = getCulture(culture);

	        var numberFormat = culture.numberFormat,
	            decimal = numberFormat[POINT],
	            precision = numberFormat.decimals,
	            pattern = numberFormat.pattern[0],
	            literals = [],
	            symbol,
	            isCurrency, isPercent,
	            customPrecision,
	            formatAndPrecision,
	            negative = number < 0,
	            integer,
	            fraction,
	            integerLength,
	            fractionLength,
	            replacement = EMPTY,
	            value = EMPTY,
	            idx,
	            length,
	            ch,
	            hasGroup,
	            hasNegativeFormat,
	            decimalIndex,
	            sharpIndex,
	            zeroIndex,
	            hasZero, hasSharp,
	            percentIndex,
	            currencyIndex,
	            startZeroIndex,
	            start = -1,
	            end;

	        //return empty string if no number
	        if (number === undefined) {
	            return EMPTY;
	        }

	        if (!isFinite(number)) {
	            return number;
	        }

	        //if no format then return number.toString() or number.toLocaleString() if culture.name is not defined
	        if (!format) {
	            return culture.name.length ? number.toLocaleString() : number.toString();
	        }

	        formatAndPrecision = standardFormatRegExp.exec(format);

	        // standard formatting
	        if (formatAndPrecision) {
	            format = formatAndPrecision[1].toLowerCase();

	            isCurrency = format === "c";
	            isPercent = format === "p";

	            if (isCurrency || isPercent) {
	                //get specific number format information if format is currency or percent
	                numberFormat = isCurrency ? numberFormat.currency : numberFormat.percent;
	                decimal = numberFormat[POINT];
	                precision = numberFormat.decimals;
	                symbol = numberFormat.symbol;
	                pattern = numberFormat.pattern[negative ? 0 : 1];
	            }

	            customPrecision = formatAndPrecision[2];

	            if (customPrecision) {
	                precision = +customPrecision;
	            }

	            //return number in exponential format
	            if (format === "e") {
	                return customPrecision ? number.toExponential(precision) : number.toExponential(); // toExponential() and toExponential(undefined) differ in FF #653438.
	            }

	            // multiply if format is percent
	            if (isPercent) {
	                number *= 100;
	            }

	            number = round(number, precision);
	            negative = number < 0;
	            number = number.split(POINT);

	            integer = number[0];
	            fraction = number[1];

	            //exclude "-" if number is negative.
	            if (negative) {
	                integer = integer.substring(1);
	            }

	            value = groupInteger(integer, 0, integer.length, numberFormat);

	            if (fraction) {
	                value += decimal + fraction;
	            }

	            if (format === "n" && !negative) {
	                return value;
	            }

	            number = EMPTY;

	            for (idx = 0, length = pattern.length; idx < length; idx++) {
	                ch = pattern.charAt(idx);

	                if (ch === "n") {
	                    number += value;
	                } else if (ch === "$" || ch === "%") {
	                    number += symbol;
	                } else {
	                    number += ch;
	                }
	            }

	            return number;
	        }

	        //custom formatting
	        //
	        //separate format by sections.

	        //make number positive
	        if (negative) {
	            number = -number;
	        }

	        if (format.indexOf("'") > -1 || format.indexOf("\"") > -1 || format.indexOf("\\") > -1) {
	            format = format.replace(literalRegExp, function (match) {
	                var quoteChar = match.charAt(0).replace("\\", ""),
	                    literal = match.slice(1).replace(quoteChar, "");

	                literals.push(literal);

	                return PLACEHOLDER;
	            });
	        }

	        format = format.split(";");
	        if (negative && format[1]) {
	            //get negative format
	            format = format[1];
	            hasNegativeFormat = true;
	        } else if (number === 0) {
	            //format for zeros
	            format = format[2] || format[0];
	            if (format.indexOf(SHARP) == -1 && format.indexOf(ZERO) == -1) {
	                //return format if it is string constant.
	                return format;
	            }
	        } else {
	            format = format[0];
	        }

	        percentIndex = format.indexOf("%");
	        currencyIndex = format.indexOf("$");

	        isPercent = percentIndex != -1;
	        isCurrency = currencyIndex != -1;

	        //multiply number if the format has percent
	        if (isPercent) {
	            number *= 100;
	        }

	        if (isCurrency && format[currencyIndex - 1] === "\\") {
	            format = format.split("\\").join("");
	            isCurrency = false;
	        }

	        if (isCurrency || isPercent) {
	            //get specific number format information if format is currency or percent
	            numberFormat = isCurrency ? numberFormat.currency : numberFormat.percent;
	            decimal = numberFormat[POINT];
	            precision = numberFormat.decimals;
	            symbol = numberFormat.symbol;
	        }

	        hasGroup = format.indexOf(COMMA) > -1;
	        if (hasGroup) {
	            format = format.replace(commaRegExp, EMPTY);
	        }

	        decimalIndex = format.indexOf(POINT);
	        length = format.length;

	        if (decimalIndex != -1) {
	            fraction = number.toString().split("e");
	            if (fraction[1]) {
	                fraction = round(number, Math.abs(fraction[1]));
	            } else {
	                fraction = fraction[0];
	            }
	            fraction = fraction.split(POINT)[1] || EMPTY;
	            zeroIndex = format.lastIndexOf(ZERO) - decimalIndex;
	            sharpIndex = format.lastIndexOf(SHARP) - decimalIndex;
	            hasZero = zeroIndex > -1;
	            hasSharp = sharpIndex > -1;
	            idx = fraction.length;

	            if (!hasZero && !hasSharp) {
	                format = format.substring(0, decimalIndex) + format.substring(decimalIndex + 1);
	                length = format.length;
	                decimalIndex = -1;
	                idx = 0;
	            } if (hasZero && zeroIndex > sharpIndex) {
	                idx = zeroIndex;
	            } else if (sharpIndex > zeroIndex) {
	                if (hasSharp && idx > sharpIndex) {
	                    idx = sharpIndex;
	                } else if (hasZero && idx < zeroIndex) {
	                    idx = zeroIndex;
	                }
	            }

	            if (idx > -1) {
	                number = round(number, idx);
	            }
	        } else {
	            number = round(number);
	        }

	        sharpIndex = format.indexOf(SHARP);
	        startZeroIndex = zeroIndex = format.indexOf(ZERO);

	        //define the index of the first digit placeholder
	        if (sharpIndex == -1 && zeroIndex != -1) {
	            start = zeroIndex;
	        } else if (sharpIndex != -1 && zeroIndex == -1) {
	            start = sharpIndex;
	        } else {
	            start = sharpIndex > zeroIndex ? zeroIndex : sharpIndex;
	        }

	        sharpIndex = format.lastIndexOf(SHARP);
	        zeroIndex = format.lastIndexOf(ZERO);

	        //define the index of the last digit placeholder
	        if (sharpIndex == -1 && zeroIndex != -1) {
	            end = zeroIndex;
	        } else if (sharpIndex != -1 && zeroIndex == -1) {
	            end = sharpIndex;
	        } else {
	            end = sharpIndex > zeroIndex ? sharpIndex : zeroIndex;
	        }

	        if (start == length) {
	            end = start;
	        }

	        if (start != -1) {
	            value = number.toString().split(POINT);
	            integer = value[0];
	            fraction = value[1] || EMPTY;

	            integerLength = integer.length;
	            fractionLength = fraction.length;

	            if (negative && (number * -1) >= 0) {
	                negative = false;
	            }

	            number = format.substring(0, start);

	            if (negative && !hasNegativeFormat) {
	                number += "-";
	            }

	            for (idx = start; idx < length; idx++) {
	                ch = format.charAt(idx);

	                if (decimalIndex == -1) {
	                    if (end - idx < integerLength) {
	                        number += integer;
	                        break;
	                    }
	                } else {
	                    if (zeroIndex != -1 && zeroIndex < idx) {
	                        replacement = EMPTY;
	                    }

	                    if ((decimalIndex - idx) <= integerLength && decimalIndex - idx > -1) {
	                        number += integer;
	                        idx = decimalIndex;
	                    }

	                    if (decimalIndex === idx) {
	                        number += (fraction ? decimal : EMPTY) + fraction;
	                        idx += end - decimalIndex + 1;
	                        continue;
	                    }
	                }

	                if (ch === ZERO) {
	                    number += ch;
	                    replacement = ch;
	                } else if (ch === SHARP) {
	                    number += replacement;
	                }
	            }

	            if (hasGroup) {
	                number = groupInteger(number, start + (negative && !hasNegativeFormat ? 1 : 0), Math.max(end, (integerLength + start)), numberFormat);
	            }

	            if (end >= start) {
	                number += format.substring(end + 1);
	            }

	            //replace symbol placeholders
	            if (isCurrency || isPercent) {
	                value = EMPTY;
	                for (idx = 0, length = number.length; idx < length; idx++) {
	                    ch = number.charAt(idx);
	                    value += (ch === "$" || ch === "%") ? symbol : ch;
	                }
	                number = value;
	            }

	            length = literals.length;

	            if (length) {
	                for (idx = 0; idx < length; idx++) {
	                    number = number.replace(PLACEHOLDER, literals[idx]);
	                }
	            }
	        }

	        return number;
	    }

	    var groupInteger = function(number, start, end, numberFormat) {
	        var decimalIndex = number.indexOf(numberFormat[POINT]);
	        var groupSizes = numberFormat.groupSize.slice();
	        var groupSize = groupSizes.shift();
	        var integer, integerLength;
	        var idx, parts, value;
	        var newGroupSize;

	        end = decimalIndex !== -1 ? decimalIndex : end + 1;

	        integer = number.substring(start, end);
	        integerLength = integer.length;

	        if (integerLength >= groupSize) {
	            idx = integerLength;
	            parts = [];

	            while (idx > -1) {
	                value = integer.substring(idx - groupSize, idx);
	                if (value) {
	                    parts.push(value);
	                }
	                idx -= groupSize;
	                newGroupSize = groupSizes.shift();
	                groupSize = newGroupSize !== undefined ? newGroupSize : groupSize;

	                if (groupSize === 0) {
	                    parts.push(integer.substring(0, idx));
	                    break;
	                }
	            }

	            integer = parts.reverse().join(numberFormat[COMMA]);
	            number = number.substring(0, start) + integer + number.substring(end);
	        }

	        return number;
	    };

	    var round = function(value, precision) {
	        precision = precision || 0;

	        value = value.toString().split('e');
	        value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + precision) : precision)));

	        value = value.toString().split('e');
	        value = +(value[0] + 'e' + (value[1] ? (+value[1] - precision) : -precision));

	        return value.toFixed(Math.min(precision, 20));
	    };

	    var toString = function(value, fmt, culture) {
	        if (fmt) {
	            if (objectToString.call(value) === "[object Date]") {
	                return formatDate(value, fmt, culture);
	            } else if (typeof value === NUMBER) {
	                return formatNumber(value, fmt, culture);
	            }
	        }

	        return value !== undefined ? value : "";
	    };

	    kendo.format = function(fmt) {
	        var values = arguments;

	        return fmt.replace(formatRegExp, function(match, index, placeholderFormat) {
	            var value = values[parseInt(index, 10) + 1];

	            return toString(value, placeholderFormat ? placeholderFormat.substring(1) : "");
	        });
	    };

	    kendo._extractFormat = function (format) {
	        if (format.slice(0,3) === "{0:") {
	            format = format.slice(3, format.length - 1);
	        }

	        return format;
	    };

	    kendo._activeElement = function() {
	        try {
	            return document.activeElement;
	        } catch(e) {
	            return document.documentElement.activeElement;
	        }
	    };

	    kendo._round = round;
	    kendo._outerWidth = function (element, includeMargin) { return $(element).outerWidth(includeMargin || false) || 0; };
	    kendo._outerHeight = function (element, includeMargin) { return $(element).outerHeight(includeMargin || false) || 0; };
	    kendo.toString = toString;
	})();


	(function() {
	    var nonBreakingSpaceRegExp = /\u00A0/g,
	        exponentRegExp = /[eE][\-+]?[0-9]+/,
	        shortTimeZoneRegExp = /[+|\-]\d{1,2}/,
	        longTimeZoneRegExp = /[+|\-]\d{1,2}:?\d{2}/,
	        dateRegExp = /^\/Date\((.*?)\)\/$/,
	        offsetRegExp = /[+-]\d*/,
	        FORMATS_SEQUENCE = [ [], [ "G", "g", "F" ], [ "D", "d", "y", "m", "T", "t" ] ],
	        STANDARD_FORMATS = [
	            [
	            "yyyy-MM-ddTHH:mm:ss.fffffffzzz",
	            "yyyy-MM-ddTHH:mm:ss.fffffff",
	            "yyyy-MM-ddTHH:mm:ss.fffzzz",
	            "yyyy-MM-ddTHH:mm:ss.fff",
	            "ddd MMM dd yyyy HH:mm:ss",
	            "yyyy-MM-ddTHH:mm:sszzz",
	            "yyyy-MM-ddTHH:mmzzz",
	            "yyyy-MM-ddTHH:mmzz",
	            "yyyy-MM-ddTHH:mm:ss",
	            "yyyy-MM-dd HH:mm:ss",
	            "yyyy/MM/dd HH:mm:ss"
	            ], [
	            "yyyy-MM-ddTHH:mm",
	            "yyyy-MM-dd HH:mm",
	            "yyyy/MM/dd HH:mm"
	            ], [
	            "yyyy/MM/dd",
	            "yyyy-MM-dd",
	            "HH:mm:ss",
	            "HH:mm"
	            ]
	        ],
	        numberRegExp = {
	            2: /^\d{1,2}/,
	            3: /^\d{1,3}/,
	            4: /^\d{4}/
	        },
	        objectToString = {}.toString;

	    function outOfRange(value, start, end) {
	        return !(value >= start && value <= end);
	    }

	    function designatorPredicate(designator) {
	        return designator.charAt(0);
	    }

	    function mapDesignators(designators) {
	        return $.map(designators, designatorPredicate);
	    }

	    //if date's day is different than the typed one - adjust
	    function adjustDST(date, hours) {
	        if (!hours && date.getHours() === 23) {
	            date.setHours(date.getHours() + 2);
	        }
	    }

	    function lowerArray(data) {
	        var idx = 0,
	            length = data.length,
	            array = [];

	        for (; idx < length; idx++) {
	            array[idx] = (data[idx] + "").toLowerCase();
	        }

	        return array;
	    }

	    function lowerLocalInfo(localInfo) {
	        var newLocalInfo = {}, property;

	        for (property in localInfo) {
	            newLocalInfo[property] = lowerArray(localInfo[property]);
	        }

	        return newLocalInfo;
	    }

	    function parseExact(value, format, culture) {
	        if (!value) {
	            return null;
	        }

	        var lookAhead = function (match) {
	                var i = 0;
	                while (format[idx] === match) {
	                    i++;
	                    idx++;
	                }
	                if (i > 0) {
	                    idx -= 1;
	                }
	                return i;
	            },
	            getNumber = function(size) {
	                var rg = numberRegExp[size] || new RegExp('^\\d{1,' + size + '}'),
	                    match = value.substr(valueIdx, size).match(rg);

	                if (match) {
	                    match = match[0];
	                    valueIdx += match.length;
	                    return parseInt(match, 10);
	                }
	                return null;
	            },
	            getIndexByName = function (names, lower) {
	                var i = 0,
	                    length = names.length,
	                    name, nameLength,
	                    matchLength = 0,
	                    matchIdx = 0,
	                    subValue;

	                for (; i < length; i++) {
	                    name = names[i];
	                    nameLength = name.length;
	                    subValue = value.substr(valueIdx, nameLength);

	                    if (lower) {
	                        subValue = subValue.toLowerCase();
	                    }

	                    if (subValue == name && nameLength > matchLength) {
	                        matchLength = nameLength;
	                        matchIdx = i;
	                    }
	                }

	                if (matchLength) {
	                    valueIdx += matchLength;
	                    return matchIdx + 1;
	                }

	                return null;
	            },
	            checkLiteral = function() {
	                var result = false;
	                if (value.charAt(valueIdx) === format[idx]) {
	                    valueIdx++;
	                    result = true;
	                }
	                return result;
	            },
	            calendar = culture.calendars.standard,
	            year = null,
	            month = null,
	            day = null,
	            hours = null,
	            minutes = null,
	            seconds = null,
	            milliseconds = null,
	            idx = 0,
	            valueIdx = 0,
	            literal = false,
	            date = new Date(),
	            twoDigitYearMax = calendar.twoDigitYearMax || 2029,
	            defaultYear = date.getFullYear(),
	            ch, count, length, pattern,
	            pmHour, UTC, matches,
	            amDesignators, pmDesignators,
	            hoursOffset, minutesOffset,
	            hasTime, match;

	        if (!format) {
	            format = "d"; //shord date format
	        }

	        //if format is part of the patterns get real format
	        pattern = calendar.patterns[format];
	        if (pattern) {
	            format = pattern;
	        }

	        format = format.split("");
	        length = format.length;

	        for (; idx < length; idx++) {
	            ch = format[idx];

	            if (literal) {
	                if (ch === "'") {
	                    literal = false;
	                } else {
	                    checkLiteral();
	                }
	            } else {
	                if (ch === "d") {
	                    count = lookAhead("d");
	                    if (!calendar._lowerDays) {
	                        calendar._lowerDays = lowerLocalInfo(calendar.days);
	                    }

	                    if (day !== null && count > 2) {
	                        continue;
	                    }

	                    day = count < 3 ? getNumber(2) : getIndexByName(calendar._lowerDays[count == 3 ? "namesAbbr" : "names"], true);

	                    if (day === null || outOfRange(day, 1, 31)) {
	                        return null;
	                    }
	                } else if (ch === "M") {
	                    count = lookAhead("M");
	                    if (!calendar._lowerMonths) {
	                        calendar._lowerMonths = lowerLocalInfo(calendar.months);
	                    }
	                    month = count < 3 ? getNumber(2) : getIndexByName(calendar._lowerMonths[count == 3 ? 'namesAbbr' : 'names'], true);

	                    if (month === null || outOfRange(month, 1, 12)) {
	                        return null;
	                    }
	                    month -= 1; //because month is zero based
	                } else if (ch === "y") {
	                    count = lookAhead("y");
	                    year = getNumber(count);

	                    if (year === null) {
	                        return null;
	                    }

	                    if (count == 2) {
	                        if (typeof twoDigitYearMax === "string") {
	                            twoDigitYearMax = defaultYear + parseInt(twoDigitYearMax, 10);
	                        }

	                        year = (defaultYear - defaultYear % 100) + year;
	                        if (year > twoDigitYearMax) {
	                            year -= 100;
	                        }
	                    }
	                } else if (ch === "h" ) {
	                    lookAhead("h");
	                    hours = getNumber(2);
	                    if (hours == 12) {
	                        hours = 0;
	                    }
	                    if (hours === null || outOfRange(hours, 0, 11)) {
	                        return null;
	                    }
	                } else if (ch === "H") {
	                    lookAhead("H");
	                    hours = getNumber(2);
	                    if (hours === null || outOfRange(hours, 0, 23)) {
	                        return null;
	                    }
	                } else if (ch === "m") {
	                    lookAhead("m");
	                    minutes = getNumber(2);
	                    if (minutes === null || outOfRange(minutes, 0, 59)) {
	                        return null;
	                    }
	                } else if (ch === "s") {
	                    lookAhead("s");
	                    seconds = getNumber(2);
	                    if (seconds === null || outOfRange(seconds, 0, 59)) {
	                        return null;
	                    }
	                } else if (ch === "f") {
	                    count = lookAhead("f");

	                    match = value.substr(valueIdx, count).match(numberRegExp[3]);
	                    milliseconds = getNumber(count); //move value index position

	                    if (milliseconds !== null) {
	                        milliseconds = parseFloat("0." + match[0], 10);
	                        milliseconds = kendo._round(milliseconds, 3);
	                        milliseconds *= 1000;
	                    }

	                    if (milliseconds === null || outOfRange(milliseconds, 0, 999)) {
	                        return null;
	                    }

	                } else if (ch === "t") {
	                    count = lookAhead("t");
	                    amDesignators = calendar.AM;
	                    pmDesignators = calendar.PM;

	                    if (count === 1) {
	                        amDesignators = mapDesignators(amDesignators);
	                        pmDesignators = mapDesignators(pmDesignators);
	                    }

	                    pmHour = getIndexByName(pmDesignators);
	                    if (!pmHour && !getIndexByName(amDesignators)) {
	                        return null;
	                    }
	                }
	                else if (ch === "z") {
	                    UTC = true;
	                    count = lookAhead("z");

	                    if (value.substr(valueIdx, 1) === "Z") {
	                        checkLiteral();
	                        continue;
	                    }

	                    matches = value.substr(valueIdx, 6)
	                                   .match(count > 2 ? longTimeZoneRegExp : shortTimeZoneRegExp);

	                    if (!matches) {
	                        return null;
	                    }

	                    matches = matches[0].split(":");

	                    hoursOffset = matches[0];
	                    minutesOffset = matches[1];

	                    if (!minutesOffset && hoursOffset.length > 3) { //(+|-)[hh][mm] format is used
	                        valueIdx = hoursOffset.length - 2;
	                        minutesOffset = hoursOffset.substring(valueIdx);
	                        hoursOffset = hoursOffset.substring(0, valueIdx);
	                    }

	                    hoursOffset = parseInt(hoursOffset, 10);
	                    if (outOfRange(hoursOffset, -12, 13)) {
	                        return null;
	                    }

	                    if (count > 2) {
	                        minutesOffset = parseInt(minutesOffset, 10);
	                        if (isNaN(minutesOffset) || outOfRange(minutesOffset, 0, 59)) {
	                            return null;
	                        }
	                    }
	                } else if (ch === "'") {
	                    literal = true;
	                    checkLiteral();
	                } else if (!checkLiteral()) {
	                    return null;
	                }
	            }
	        }

	        hasTime = hours !== null || minutes !== null || seconds || null;

	        if (year === null && month === null && day === null && hasTime) {
	            year = defaultYear;
	            month = date.getMonth();
	            day = date.getDate();
	        } else {
	            if (year === null) {
	                year = defaultYear;
	            }

	            if (day === null) {
	                day = 1;
	            }
	        }

	        if (pmHour && hours < 12) {
	            hours += 12;
	        }

	        if (UTC) {
	            if (hoursOffset) {
	                hours += -hoursOffset;
	            }

	            if (minutesOffset) {
	                minutes += -minutesOffset;
	            }

	            value = new Date(Date.UTC(year, month, day, hours, minutes, seconds, milliseconds));
	        } else {
	            value = new Date(year, month, day, hours, minutes, seconds, milliseconds);
	            adjustDST(value, hours);
	        }

	        if (year < 100) {
	            value.setFullYear(year);
	        }

	        if (value.getDate() !== day && UTC === undefined) {
	            return null;
	        }

	        return value;
	    }

	    function parseMicrosoftFormatOffset(offset) {
	        var sign = offset.substr(0, 1) === "-" ? -1 : 1;

	        offset = offset.substring(1);
	        offset = (parseInt(offset.substr(0, 2), 10) * 60) + parseInt(offset.substring(2), 10);

	        return sign * offset;
	    }

	    function getDefaultFormats(culture) {
	        var length = math.max(FORMATS_SEQUENCE.length, STANDARD_FORMATS.length);
	        var patterns = culture.calendar.patterns;
	        var cultureFormats, formatIdx, idx;
	        var formats = [];

	        for (idx = 0; idx < length; idx++) {
	            cultureFormats = FORMATS_SEQUENCE[idx];
	            for (formatIdx = 0; formatIdx < cultureFormats.length; formatIdx++) {
	                formats.push(patterns[cultureFormats[formatIdx]]);
	            }
	            formats = formats.concat(STANDARD_FORMATS[idx]);
	        }

	        return formats;
	    }

	    kendo.parseDate = function(value, formats, culture) {
	        if (objectToString.call(value) === "[object Date]") {
	            return value;
	        }

	        var idx = 0;
	        var date = null;
	        var length;
	        var tzoffset;

	        if (value && value.indexOf("/D") === 0) {
	            date = dateRegExp.exec(value);
	            if (date) {
	                date = date[1];
	                tzoffset = offsetRegExp.exec(date.substring(1));

	                date = new Date(parseInt(date, 10));

	                if (tzoffset) {
	                    tzoffset = parseMicrosoftFormatOffset(tzoffset[0]);
	                    date = kendo.timezone.apply(date, 0);
	                    date = kendo.timezone.convert(date, 0, -1 * tzoffset);
	                }

	                return date;
	            }
	        }

	        culture = kendo.getCulture(culture);

	        if (!formats) {
	            formats = getDefaultFormats(culture);
	        }

	        formats = isArray(formats) ? formats: [formats];
	        length = formats.length;

	        for (; idx < length; idx++) {
	            date = parseExact(value, formats[idx], culture);
	            if (date) {
	                return date;
	            }
	        }

	        return date;
	    };

	    kendo.parseInt = function(value, culture) {
	        var result = kendo.parseFloat(value, culture);
	        if (result) {
	            result = result | 0;
	        }
	        return result;
	    };

	    kendo.parseFloat = function(value, culture, format) {
	        if (!value && value !== 0) {
	           return null;
	        }

	        if (typeof value === NUMBER) {
	           return value;
	        }

	        value = value.toString();
	        culture = kendo.getCulture(culture);

	        var number = culture.numberFormat,
	            percent = number.percent,
	            currency = number.currency,
	            symbol = currency.symbol,
	            percentSymbol = percent.symbol,
	            negative = value.indexOf("-"),
	            parts, isPercent;

	        //handle exponential number
	        if (exponentRegExp.test(value)) {
	            value = parseFloat(value.replace(number["."], "."));
	            if (isNaN(value)) {
	                value = null;
	            }
	            return value;
	        }

	        if (negative > 0) {
	            return null;
	        } else {
	            negative = negative > -1;
	        }

	        if (value.indexOf(symbol) > -1 || (format && format.toLowerCase().indexOf("c") > -1)) {
	            number = currency;
	            parts = number.pattern[0].replace("$", symbol).split("n");
	            if (value.indexOf(parts[0]) > -1 && value.indexOf(parts[1]) > -1) {
	                value = value.replace(parts[0], "").replace(parts[1], "");
	                negative = true;
	            }
	        } else if (value.indexOf(percentSymbol) > -1) {
	            isPercent = true;
	            number = percent;
	            symbol = percentSymbol;
	        }

	        value = value.replace("-", "")
	                     .replace(symbol, "")
	                     .replace(nonBreakingSpaceRegExp, " ")
	                     .split(number[","].replace(nonBreakingSpaceRegExp, " ")).join("")
	                     .replace(number["."], ".");

	        value = parseFloat(value);

	        if (isNaN(value)) {
	            value = null;
	        } else if (negative) {
	            value *= -1;
	        }

	        if (value && isPercent) {
	            value /= 100;
	        }

	        return value;
	    };
	})();

	    function getShadows(element) {
	        var shadow = element.css(kendo.support.transitions.css + "box-shadow") || element.css("box-shadow"),
	            radius = shadow ? shadow.match(boxShadowRegExp) || [ 0, 0, 0, 0, 0 ] : [ 0, 0, 0, 0, 0 ],
	            blur = math.max((+radius[3]), +(radius[4] || 0));

	        return {
	            left: (-radius[1]) + blur,
	            right: (+radius[1]) + blur,
	            bottom: (+radius[2]) + blur
	        };
	    }

	    function wrap(element, autosize) {
	        var browser = support.browser,
	            percentage,
	            outerWidth = kendo._outerWidth,
	            outerHeight = kendo._outerHeight;

	        if (!element.parent().hasClass("k-animation-container")) {
	            var width = element[0].style.width,
	                height = element[0].style.height,
	                percentWidth = percentRegExp.test(width),
	                percentHeight = percentRegExp.test(height);

	            percentage = percentWidth || percentHeight;

	            if (!percentWidth && (!autosize || (autosize && width))) { width = outerWidth(element); }
	            if (!percentHeight && (!autosize || (autosize && height))) { height = outerHeight(element); }

	            element.wrap(
	                         $("<div/>")
	                         .addClass("k-animation-container")
	                         .css({
	                             width: width,
	                             height: height
	                         }));

	            if (percentage) {
	                element.css({
	                    width: "100%",
	                    height: "100%",
	                    boxSizing: "border-box",
	                    mozBoxSizing: "border-box",
	                    webkitBoxSizing: "border-box"
	                });
	            }
	        } else {
	            var wrapper = element.parent(".k-animation-container"),
	                wrapperStyle = wrapper[0].style;

	            if (wrapper.is(":hidden")) {
	                wrapper.show();
	            }

	            percentage = percentRegExp.test(wrapperStyle.width) || percentRegExp.test(wrapperStyle.height);

	            if (!percentage) {
	                wrapper.css({
	                    width: outerWidth(element),
	                    height: outerHeight(element),
	                    boxSizing: "content-box",
	                    mozBoxSizing: "content-box",
	                    webkitBoxSizing: "content-box"
	                });
	            }
	        }

	        if (browser.msie && math.floor(browser.version) <= 7) {
	            element.css({ zoom: 1 });
	            element.children(".k-menu").width(element.width());
	        }

	        return element.parent();
	    }

	    function deepExtend(destination) {
	        var i = 1,
	            length = arguments.length;

	        for (i = 1; i < length; i++) {
	            deepExtendOne(destination, arguments[i]);
	        }

	        return destination;
	    }

	    function deepExtendOne(destination, source) {
	        var ObservableArray = kendo.data.ObservableArray,
	            LazyObservableArray = kendo.data.LazyObservableArray,
	            DataSource = kendo.data.DataSource,
	            HierarchicalDataSource = kendo.data.HierarchicalDataSource,
	            property,
	            propValue,
	            propType,
	            propInit,
	            destProp;

	        for (property in source) {
	            propValue = source[property];
	            propType = typeof propValue;

	            if (propType === OBJECT && propValue !== null) {
	                propInit = propValue.constructor;
	            } else {
	                propInit = null;
	            }

	            if (propInit &&
	                propInit !== Array && propInit !== ObservableArray && propInit !== LazyObservableArray &&
	                propInit !== DataSource && propInit !== HierarchicalDataSource && propInit !== RegExp) {

	                if (propValue instanceof Date) {
	                    destination[property] = new Date(propValue.getTime());
	                } else if (isFunction(propValue.clone)) {
	                    destination[property] = propValue.clone();
	                } else {
	                    destProp = destination[property];
	                    if (typeof (destProp) === OBJECT) {
	                        destination[property] = destProp || {};
	                    } else {
	                        destination[property] = {};
	                    }
	                    deepExtendOne(destination[property], propValue);
	                }
	            } else if (propType !== UNDEFINED) {
	                destination[property] = propValue;
	            }
	        }

	        return destination;
	    }

	    function testRx(agent, rxs, dflt) {
	        for (var rx in rxs) {
	            if (rxs.hasOwnProperty(rx) && rxs[rx].test(agent)) {
	                return rx;
	            }
	        }
	        return dflt !== undefined ? dflt : agent;
	    }

	    function toHyphens(str) {
	        return str.replace(/([a-z][A-Z])/g, function (g) {
	            return g.charAt(0) + '-' + g.charAt(1).toLowerCase();
	        });
	    }

	    function toCamelCase(str) {
	        return str.replace(/\-(\w)/g, function (strMatch, g1) {
	            return g1.toUpperCase();
	        });
	    }

	    function getComputedStyles(element, properties) {
	        var styles = {}, computedStyle;

	        if (document.defaultView && document.defaultView.getComputedStyle) {
	            computedStyle = document.defaultView.getComputedStyle(element, "");

	            if (properties) {
	                $.each(properties, function(idx, value) {
	                    styles[value] = computedStyle.getPropertyValue(value);
	                });
	            }
	        } else {
	            computedStyle = element.currentStyle;

	            if (properties) {
	                $.each(properties, function(idx, value) {
	                    styles[value] = computedStyle[toCamelCase(value)];
	                });
	            }
	        }

	        if (!kendo.size(styles)) {
	            styles = computedStyle;
	        }

	        return styles;
	    }

	    function isScrollable(element) {
	        if (element && element.className && typeof(element.className) === "string" && element.className.indexOf("k-auto-scrollable") > -1) {
	            return true;
	        }

	        var overflow = getComputedStyles(element, ["overflow"]).overflow;
	        return overflow == "auto" || overflow == "scroll";
	    }

	    function scrollLeft(element, value) {
	        var webkit = support.browser.webkit;
	        var mozila = support.browser.mozilla;
	        var el = element instanceof $ ? element[0] : element;
	        var isRtl;

	        if (!element) {
	            return;
	        }

	        isRtl = support.isRtl(element);

	        if (value !== undefined) {
	            if (isRtl && webkit) {
	                el.scrollLeft = el.scrollWidth - el.clientWidth - value;
	            } else if (isRtl && mozila) {
	                el.scrollLeft = -value;
	            } else {
	                el.scrollLeft = value;
	            }
	        } else {
	            if (isRtl && webkit) {
	                return el.scrollWidth - el.clientWidth - el.scrollLeft;
	            } else {
	                return Math.abs(el.scrollLeft);
	            }
	        }
	    }

	    (function () {
	        support._scrollbar = undefined;

	        support.scrollbar = function (refresh) {
	            if (!isNaN(support._scrollbar) && !refresh) {
	                return support._scrollbar;
	            } else {
	                var div = document.createElement("div"),
	                    result;

	                div.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block";
	                div.innerHTML = "&nbsp;";
	                document.body.appendChild(div);

	                support._scrollbar = result = div.offsetWidth - div.scrollWidth;

	                document.body.removeChild(div);

	                return result;
	            }
	        };

	        support.isRtl = function(element) {
	            return $(element).closest(".k-rtl").length > 0;
	        };

	        var table = document.createElement("table");

	        // Internet Explorer does not support setting the innerHTML of TBODY and TABLE elements
	        try {
	            table.innerHTML = "<tr><td></td></tr>";

	            support.tbodyInnerHtml = true;
	        } catch (e) {
	            support.tbodyInnerHtml = false;
	        }

	        support.touch = "ontouchstart" in window;

	        var docStyle = document.documentElement.style;
	        var transitions = support.transitions = false,
	            transforms = support.transforms = false,
	            elementProto = "HTMLElement" in window ? HTMLElement.prototype : [];

	        support.hasHW3D = ("WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix()) || "MozPerspective" in docStyle || "msPerspective" in docStyle;
	        support.cssFlexbox = ("flexWrap" in docStyle) || ("WebkitFlexWrap" in docStyle) || ("msFlexWrap" in docStyle);

	        each([ "Moz", "webkit", "O", "ms" ], function () {
	            var prefix = this.toString(),
	                hasTransitions = typeof table.style[prefix + "Transition"] === STRING;

	            if (hasTransitions || typeof table.style[prefix + "Transform"] === STRING) {
	                var lowPrefix = prefix.toLowerCase();

	                transforms = {
	                    css: (lowPrefix != "ms") ? "-" + lowPrefix + "-" : "",
	                    prefix: prefix,
	                    event: (lowPrefix === "o" || lowPrefix === "webkit") ? lowPrefix : ""
	                };

	                if (hasTransitions) {
	                    transitions = transforms;
	                    transitions.event = transitions.event ? transitions.event + "TransitionEnd" : "transitionend";
	                }

	                return false;
	            }
	        });

	        table = null;

	        support.transforms = transforms;
	        support.transitions = transitions;

	        support.devicePixelRatio = window.devicePixelRatio === undefined ? 1 : window.devicePixelRatio;

	        try {
	            support.screenWidth = window.outerWidth || window.screen ? window.screen.availWidth : window.innerWidth;
	            support.screenHeight = window.outerHeight || window.screen ? window.screen.availHeight : window.innerHeight;
	        } catch(e) {
	            //window.outerWidth throws error when in IE showModalDialog.
	            support.screenWidth = window.screen.availWidth;
	            support.screenHeight = window.screen.availHeight;
	        }

	        support.detectOS = function (ua) {
	            var os = false, minorVersion, match = [],
	                notAndroidPhone = !/mobile safari/i.test(ua),
	                agentRxs = {
	                    wp: /(Windows Phone(?: OS)?)\s(\d+)\.(\d+(\.\d+)?)/,
	                    fire: /(Silk)\/(\d+)\.(\d+(\.\d+)?)/,
	                    android: /(Android|Android.*(?:Opera|Firefox).*?\/)\s*(\d+)\.(\d+(\.\d+)?)/,
	                    iphone: /(iPhone|iPod).*OS\s+(\d+)[\._]([\d\._]+)/,
	                    ipad: /(iPad).*OS\s+(\d+)[\._]([\d_]+)/,
	                    meego: /(MeeGo).+NokiaBrowser\/(\d+)\.([\d\._]+)/,
	                    webos: /(webOS)\/(\d+)\.(\d+(\.\d+)?)/,
	                    blackberry: /(BlackBerry|BB10).*?Version\/(\d+)\.(\d+(\.\d+)?)/,
	                    playbook: /(PlayBook).*?Tablet\s*OS\s*(\d+)\.(\d+(\.\d+)?)/,
	                    windows: /(MSIE)\s+(\d+)\.(\d+(\.\d+)?)/,
	                    tizen: /(tizen).*?Version\/(\d+)\.(\d+(\.\d+)?)/i,
	                    sailfish: /(sailfish).*rv:(\d+)\.(\d+(\.\d+)?).*firefox/i,
	                    ffos: /(Mobile).*rv:(\d+)\.(\d+(\.\d+)?).*Firefox/
	                },
	                osRxs = {
	                    ios: /^i(phone|pad|pod)$/i,
	                    android: /^android|fire$/i,
	                    blackberry: /^blackberry|playbook/i,
	                    windows: /windows/,
	                    wp: /wp/,
	                    flat: /sailfish|ffos|tizen/i,
	                    meego: /meego/
	                },
	                formFactorRxs = {
	                    tablet: /playbook|ipad|fire/i
	                },
	                browserRxs = {
	                    omini: /Opera\sMini/i,
	                    omobile: /Opera\sMobi/i,
	                    firefox: /Firefox|Fennec/i,
	                    mobilesafari: /version\/.*safari/i,
	                    ie: /MSIE|Windows\sPhone/i,
	                    chrome: /chrome|crios/i,
	                    webkit: /webkit/i
	                };

	            for (var agent in agentRxs) {
	                if (agentRxs.hasOwnProperty(agent)) {
	                    match = ua.match(agentRxs[agent]);
	                    if (match) {
	                        if (agent == "windows" && "plugins" in navigator) { return false; } // Break if not Metro/Mobile Windows

	                        os = {};
	                        os.device = agent;
	                        os.tablet = testRx(agent, formFactorRxs, false);
	                        os.browser = testRx(ua, browserRxs, "default");
	                        os.name = testRx(agent, osRxs);
	                        os[os.name] = true;
	                        os.majorVersion = match[2];
	                        os.minorVersion = match[3].replace("_", ".");
	                        minorVersion = os.minorVersion.replace(".", "").substr(0, 2);
	                        os.flatVersion = os.majorVersion + minorVersion + (new Array(3 - (minorVersion.length < 3 ? minorVersion.length : 2)).join("0"));
	                        os.cordova = typeof window.PhoneGap !== UNDEFINED || typeof window.cordova !== UNDEFINED; // Use file protocol to detect appModes.
	                        os.appMode = window.navigator.standalone || (/file|local|wmapp/).test(window.location.protocol) || os.cordova; // Use file protocol to detect appModes.

	                        if (os.android && (support.devicePixelRatio < 1.5 && os.flatVersion < 400 || notAndroidPhone) && (support.screenWidth > 800 || support.screenHeight > 800)) {
	                            os.tablet = agent;
	                        }

	                        break;
	                    }
	                }
	            }
	            return os;
	        };

	        var mobileOS = support.mobileOS = support.detectOS(navigator.userAgent);

	        support.wpDevicePixelRatio = mobileOS.wp ? screen.width / 320 : 0;

	        support.hasNativeScrolling = false;

	        if (mobileOS.ios || (mobileOS.android && mobileOS.majorVersion > 2) || mobileOS.wp) {
	            support.hasNativeScrolling = mobileOS;
	        }

	        support.delayedClick = function() {

	            // only the mobile devices with touch events do this.
	            if (support.touch) {
	                // All iOS devices so far (by the time I am writing this, iOS 9.0.2 is the latest),
	                // delay their click events.
	                if (mobileOS.ios) {
	                    return true;
	                }

	                if (mobileOS.android) {

	                    if (!support.browser.chrome) { // older webkits and webviews delay the click
	                        return true;
	                    }

	                    // from here on, we deal with Chrome on Android.
	                    if (support.browser.version < 32) {
	                        return false;
	                    }

	                    // Chrome 32+ does conditional fast clicks if the view port is not user scalable.
	                    return !($("meta[name=viewport]").attr("content") || "").match(/user-scalable=no/i);
	                }
	            }

	            return false;
	        };

	        support.mouseAndTouchPresent = support.touch && !(support.mobileOS.ios || support.mobileOS.android);

	        support.detectBrowser = function(ua) {
	            var browser = false, match = [],
	                browserRxs = {
	                    edge: /(edge)[ \/]([\w.]+)/i,
	                    webkit: /(chrome)[ \/]([\w.]+)/i,
	                    safari: /(webkit)[ \/]([\w.]+)/i,
	                    opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
	                    msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
	                    mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
	                };

	            for (var agent in browserRxs) {
	                if (browserRxs.hasOwnProperty(agent)) {
	                    match = ua.match(browserRxs[agent]);
	                    if (match) {
	                        browser = {};
	                        browser[agent] = true;
	                        browser[match[1].toLowerCase().split(" ")[0].split("/")[0]] = true;
	                        browser.version = parseInt(document.documentMode || match[2], 10);

	                        break;
	                    }
	                }
	            }

	            return browser;
	        };

	        support.browser = support.detectBrowser(navigator.userAgent);

	        support.detectClipboardAccess = function() {
	            var commands = {
	                copy: document.queryCommandSupported ? document.queryCommandSupported("copy") : false,
	                cut: document.queryCommandSupported ? document.queryCommandSupported("cut") : false,
	                paste : document.queryCommandSupported ? document.queryCommandSupported("paste") : false
	            };

	            if (support.browser.chrome) {
	                //not using queryCommandSupported due to chromium issues 476508 and 542948
	                commands.paste = false;
	                if(support.browser.version >= 43) {
	                    commands.copy = true;
	                    commands.cut = true;
	                }
	            }

	            return commands;
	        };

	        support.clipboard = support.detectClipboardAccess();

	        support.zoomLevel = function() {
	            try {
	                var browser = support.browser;
	                var ie11WidthCorrection = 0;
	                var docEl = document.documentElement;

	                if (browser.msie && browser.version == 11 && docEl.scrollHeight > docEl.clientHeight && !support.touch) {
	                    ie11WidthCorrection = support.scrollbar();
	                }

	                return support.touch ? (docEl.clientWidth / window.innerWidth) :
	                       browser.msie && browser.version >= 10 ? (((top || window).document.documentElement.offsetWidth + ie11WidthCorrection) / (top || window).innerWidth) : 1;
	            } catch(e) {
	                return 1;
	            }
	        };

	        support.cssBorderSpacing = typeof docStyle.borderSpacing != "undefined" && !(support.browser.msie && support.browser.version < 8);

	        (function(browser) {
	            // add browser-specific CSS class
	            var cssClass = "",
	                docElement = $(document.documentElement),
	                majorVersion = parseInt(browser.version, 10);

	            if (browser.msie) {
	                cssClass = "ie";
	            } else if (browser.mozilla) {
	                cssClass = "ff";
	            } else if (browser.safari) {
	                cssClass = "safari";
	            } else if (browser.webkit) {
	                cssClass = "webkit";
	            } else if (browser.opera) {
	                cssClass = "opera";
	            } else if (browser.edge) {
	                cssClass = "edge";
	            }

	            if (cssClass) {
	                cssClass = "k-" + cssClass + " k-" + cssClass + majorVersion;
	            }
	            if (support.mobileOS) {
	                cssClass += " k-mobile";
	            }

	            if (!support.cssFlexbox) {
	                cssClass += " k-no-flexbox";
	            }

	            docElement.addClass(cssClass);
	        })(support.browser);

	        support.eventCapture = document.documentElement.addEventListener;

	        var input = document.createElement("input");

	        support.placeholder = "placeholder" in input;
	        support.propertyChangeEvent = "onpropertychange" in input;

	        support.input = (function() {
	            var types = ["number", "date", "time", "month", "week", "datetime", "datetime-local"];
	            var length = types.length;
	            var value = "test";
	            var result = {};
	            var idx = 0;
	            var type;

	            for (;idx < length; idx++) {
	                type = types[idx];
	                input.setAttribute("type", type);
	                input.value = value;

	                result[type.replace("-", "")] = input.type !== "text" && input.value !== value;
	            }

	            return result;
	        })();

	        input.style.cssText = "float:left;";

	        support.cssFloat = !!input.style.cssFloat;

	        input = null;

	        support.stableSort = (function() {
	            // Chrome sort is not stable for more than *10* items
	            // IE9+ sort is not stable for than *512* items
	            var threshold = 513;

	            var sorted = [{
	                index: 0,
	                field: "b"
	            }];

	            for (var i = 1; i < threshold; i++) {
	                sorted.push({
	                    index: i,
	                    field: "a"
	                });
	            }

	            sorted.sort(function(a, b) {
	                return a.field > b.field ? 1 : (a.field < b.field ? -1 : 0);
	            });

	            return sorted[0].index === 1;
	        })();

	        support.matchesSelector = elementProto.webkitMatchesSelector || elementProto.mozMatchesSelector ||
	                                  elementProto.msMatchesSelector || elementProto.oMatchesSelector ||
	                                  elementProto.matchesSelector || elementProto.matches ||
	          function( selector ) {
	              var nodeList = document.querySelectorAll ? ( this.parentNode || document ).querySelectorAll( selector ) || [] : $(selector),
	                  i = nodeList.length;

	              while (i--) {
	                  if (nodeList[i] == this) {
	                      return true;
	                  }
	              }

	              return false;
	          };

	        support.pushState = window.history && window.history.pushState;

	        var documentMode = document.documentMode;

	        support.hashChange = ("onhashchange" in window) && !(support.browser.msie && (!documentMode || documentMode <= 8)); // old IE detection

	        support.customElements = ("registerElement" in window.document);

	        var chrome = support.browser.chrome;
	        support.msPointers = !chrome && window.MSPointerEvent;
	        support.pointers = !chrome && window.PointerEvent;
	        support.kineticScrollNeeded = mobileOS && (support.touch || support.msPointers || support.pointers);
	    })();


	    function size(obj) {
	        var result = 0, key;
	        for (key in obj) {
	            if (obj.hasOwnProperty(key) && key != "toJSON") { // Ignore fake IE7 toJSON.
	                result++;
	            }
	        }

	        return result;
	    }

	    function getOffset(element, type, positioned) {
	        if (!type) {
	            type = "offset";
	        }

	        var offset = element[type]();
	        // clone ClientRect object to JS object (jQuery3)
	        var result = {
	            top: offset.top,
	            right: offset.right,
	            bottom: offset.bottom,
	            left: offset.left
	        };

	        // IE10 touch zoom is living in a separate viewport
	        if (support.browser.msie && (support.pointers || support.msPointers) && !positioned) {
	            var sign = support.isRtl(element) ? 1 : -1;
	            result.top -= (window.pageYOffset + (sign * document.documentElement.scrollTop));
	            result.left -= (window.pageXOffset + (sign * document.documentElement.scrollLeft));
	        }

	        return result;
	    }

	    var directions = {
	        left: { reverse: "right" },
	        right: { reverse: "left" },
	        down: { reverse: "up" },
	        up: { reverse: "down" },
	        top: { reverse: "bottom" },
	        bottom: { reverse: "top" },
	        "in": { reverse: "out" },
	        out: { reverse: "in" }
	    };

	    function parseEffects(input) {
	        var effects = {};

	        each((typeof input === "string" ? input.split(" ") : input), function(idx) {
	            effects[idx] = this;
	        });

	        return effects;
	    }

	    function fx(element) {
	        return new kendo.effects.Element(element);
	    }

	    var effects = {};

	    $.extend(effects, {
	        enabled: true,
	        Element: function(element) {
	            this.element = $(element);
	        },

	        promise: function(element, options) {
	            if (!element.is(":visible")) {
	                element.css({ display: element.data("olddisplay") || "block" }).css("display");
	            }

	            if (options.hide) {
	                element.data("olddisplay", element.css("display")).hide();
	            }

	            if (options.init) {
	                options.init();
	            }

	            if (options.completeCallback) {
	                options.completeCallback(element); // call the external complete callback with the element
	            }

	            element.dequeue();
	        },

	        disable: function() {
	            this.enabled = false;
	            this.promise = this.promiseShim;
	        },

	        enable: function() {
	            this.enabled = true;
	            this.promise = this.animatedPromise;
	        }
	    });

	    effects.promiseShim = effects.promise;

	    function prepareAnimationOptions(options, duration, reverse, complete) {
	        if (typeof options === STRING) {
	            // options is the list of effect names separated by space e.g. animate(element, "fadeIn slideDown")

	            // only callback is provided e.g. animate(element, options, function() {});
	            if (isFunction(duration)) {
	                complete = duration;
	                duration = 400;
	                reverse = false;
	            }

	            if (isFunction(reverse)) {
	                complete = reverse;
	                reverse = false;
	            }

	            if (typeof duration === BOOLEAN){
	                reverse = duration;
	                duration = 400;
	            }

	            options = {
	                effects: options,
	                duration: duration,
	                reverse: reverse,
	                complete: complete
	            };
	        }

	        return extend({
	            //default options
	            effects: {},
	            duration: 400, //jQuery default duration
	            reverse: false,
	            init: noop,
	            teardown: noop,
	            hide: false
	        }, options, { completeCallback: options.complete, complete: noop }); // Move external complete callback, so deferred.resolve can be always executed.

	    }

	    function animate(element, options, duration, reverse, complete) {
	        var idx = 0,
	            length = element.length,
	            instance;

	        for (; idx < length; idx ++) {
	            instance = $(element[idx]);
	            instance.queue(function() {
	                effects.promise(instance, prepareAnimationOptions(options, duration, reverse, complete));
	            });
	        }

	        return element;
	    }

	    function toggleClass(element, classes, options, add) {
	        if (classes) {
	            classes = classes.split(" ");

	            each(classes, function(idx, value) {
	                element.toggleClass(value, add);
	            });
	        }

	        return element;
	    }

	    if (!("kendoAnimate" in $.fn)) {
	        extend($.fn, {
	            kendoStop: function(clearQueue, gotoEnd) {
	                return this.stop(clearQueue, gotoEnd);
	            },

	            kendoAnimate: function(options, duration, reverse, complete) {
	                return animate(this, options, duration, reverse, complete);
	            },

	            kendoAddClass: function(classes, options){
	                return kendo.toggleClass(this, classes, options, true);
	            },

	            kendoRemoveClass: function(classes, options){
	                return kendo.toggleClass(this, classes, options, false);
	            },
	            kendoToggleClass: function(classes, options, toggle){
	                return kendo.toggleClass(this, classes, options, toggle);
	            }
	        });
	    }

	    var ampRegExp = /&/g,
	        ltRegExp = /</g,
	        quoteRegExp = /"/g,
	        aposRegExp = /'/g,
	        gtRegExp = />/g;
	    function htmlEncode(value) {
	        return ("" + value).replace(ampRegExp, "&amp;").replace(ltRegExp, "&lt;").replace(gtRegExp, "&gt;").replace(quoteRegExp, "&quot;").replace(aposRegExp, "&#39;");
	    }

	    var eventTarget = function (e) {
	        return e.target;
	    };

	    if (support.touch) {

	        eventTarget = function(e) {
	            var touches = "originalEvent" in e ? e.originalEvent.changedTouches : "changedTouches" in e ? e.changedTouches : null;

	            return touches ? document.elementFromPoint(touches[0].clientX, touches[0].clientY) : e.target;
	        };

	        each(["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap"], function(m, value) {
	            $.fn[value] = function(callback) {
	                return this.bind(value, callback);
	            };
	        });
	    }

	    if (support.touch) {
	        if (!support.mobileOS) {
	            support.mousedown = "mousedown touchstart";
	            support.mouseup = "mouseup touchend";
	            support.mousemove = "mousemove touchmove";
	            support.mousecancel = "mouseleave touchcancel";
	            support.click = "click";
	            support.resize = "resize";
	        } else {
	            support.mousedown = "touchstart";
	            support.mouseup = "touchend";
	            support.mousemove = "touchmove";
	            support.mousecancel = "touchcancel";
	            support.click = "touchend";
	            support.resize = "orientationchange";
	        }
	    } else if (support.pointers) {
	        support.mousemove = "pointermove";
	        support.mousedown = "pointerdown";
	        support.mouseup = "pointerup";
	        support.mousecancel = "pointercancel";
	        support.click = "pointerup";
	        support.resize = "orientationchange resize";
	    } else if (support.msPointers) {
	        support.mousemove = "MSPointerMove";
	        support.mousedown = "MSPointerDown";
	        support.mouseup = "MSPointerUp";
	        support.mousecancel = "MSPointerCancel";
	        support.click = "MSPointerUp";
	        support.resize = "orientationchange resize";
	    } else {
	        support.mousemove = "mousemove";
	        support.mousedown = "mousedown";
	        support.mouseup = "mouseup";
	        support.mousecancel = "mouseleave";
	        support.click = "click";
	        support.resize = "resize";
	    }

	    var wrapExpression = function(members, paramName) {
	        var result = paramName || "d",
	            index,
	            idx,
	            length,
	            member,
	            count = 1;

	        for (idx = 0, length = members.length; idx < length; idx++) {
	            member = members[idx];
	            if (member !== "") {
	                index = member.indexOf("[");

	                if (index !== 0) {
	                    if (index == -1) {
	                        member = "." + member;
	                    } else {
	                        count++;
	                        member = "." + member.substring(0, index) + " || {})" + member.substring(index);
	                    }
	                }

	                count++;
	                result += member + ((idx < length - 1) ? " || {})" : ")");
	            }
	        }
	        return new Array(count).join("(") + result;
	    },
	    localUrlRe = /^([a-z]+:)?\/\//i;

	    extend(kendo, {
	        widgets: [],
	        _widgetRegisteredCallbacks: [],
	        ui: kendo.ui || {},
	        fx: kendo.fx || fx,
	        effects: kendo.effects || effects,
	        mobile: kendo.mobile || { },
	        data: kendo.data || {},
	        dataviz: kendo.dataviz || {},
	        drawing: kendo.drawing || {},
	        spreadsheet: { messages: {} },
	        keys: {
	            INSERT: 45,
	            DELETE: 46,
	            BACKSPACE: 8,
	            TAB: 9,
	            ENTER: 13,
	            ESC: 27,
	            LEFT: 37,
	            UP: 38,
	            RIGHT: 39,
	            DOWN: 40,
	            END: 35,
	            HOME: 36,
	            SPACEBAR: 32,
	            PAGEUP: 33,
	            PAGEDOWN: 34,
	            F2: 113,
	            F10: 121,
	            F12: 123,
	            NUMPAD_PLUS: 107,
	            NUMPAD_MINUS: 109,
	            NUMPAD_DOT: 110
	        },
	        support: kendo.support || support,
	        animate: kendo.animate || animate,
	        ns: "",
	        attr: function(value) {
	            return "data-" + kendo.ns + value;
	        },
	        getShadows: getShadows,
	        wrap: wrap,
	        deepExtend: deepExtend,
	        getComputedStyles: getComputedStyles,
	        webComponents: kendo.webComponents || [],
	        isScrollable: isScrollable,
	        scrollLeft: scrollLeft,
	        size: size,
	        toCamelCase: toCamelCase,
	        toHyphens: toHyphens,
	        getOffset: kendo.getOffset || getOffset,
	        parseEffects: kendo.parseEffects || parseEffects,
	        toggleClass: kendo.toggleClass || toggleClass,
	        directions: kendo.directions || directions,
	        Observable: Observable,
	        Class: Class,
	        Template: Template,
	        template: proxy(Template.compile, Template),
	        render: proxy(Template.render, Template),
	        stringify: proxy(JSON.stringify, JSON),
	        eventTarget: eventTarget,
	        htmlEncode: htmlEncode,
	        isLocalUrl: function(url) {
	            return url && !localUrlRe.test(url);
	        },

	        expr: function(expression, safe, paramName) {
	            expression = expression || "";

	            if (typeof safe == STRING) {
	                paramName = safe;
	                safe = false;
	            }

	            paramName = paramName || "d";

	            if (expression && expression.charAt(0) !== "[") {
	                expression = "." + expression;
	            }

	            if (safe) {
	                expression = expression.replace(/"([^.]*)\.([^"]*)"/g,'"$1_$DOT$_$2"');
	                expression = expression.replace(/'([^.]*)\.([^']*)'/g,"'$1_$DOT$_$2'");
	                expression = wrapExpression(expression.split("."), paramName);
	                expression = expression.replace(/_\$DOT\$_/g, ".");
	            } else {
	                expression = paramName + expression;
	            }

	            return expression;
	        },

	        getter: function(expression, safe) {
	            var key = expression + safe;
	            return getterCache[key] = getterCache[key] || new Function("d", "return " + kendo.expr(expression, safe));
	        },

	        setter: function(expression) {
	            return setterCache[expression] = setterCache[expression] || new Function("d,value", kendo.expr(expression) + "=value");
	        },

	        accessor: function(expression) {
	            return {
	                get: kendo.getter(expression),
	                set: kendo.setter(expression)
	            };
	        },

	        guid: function() {
	            var id = "", i, random;

	            for (i = 0; i < 32; i++) {
	                random = math.random() * 16 | 0;

	                if (i == 8 || i == 12 || i == 16 || i == 20) {
	                    id += "-";
	                }
	                id += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
	            }

	            return id;
	        },

	        roleSelector: function(role) {
	            return role.replace(/(\S+)/g, "[" + kendo.attr("role") + "=$1],").slice(0, -1);
	        },

	        directiveSelector: function(directives) {
	            var selectors = directives.split(" ");

	            if (selectors) {
	                for (var i = 0; i < selectors.length; i++) {
	                    if (selectors[i] != "view") {
	                        selectors[i] = selectors[i].replace(/(\w*)(view|bar|strip|over)$/, "$1-$2");
	                    }
	                }
	            }

	            return selectors.join(" ").replace(/(\S+)/g, "kendo-mobile-$1,").slice(0, -1);
	        },

	        triggeredByInput: function(e) {
	            return (/^(label|input|textarea|select)$/i).test(e.target.tagName);
	        },

	        onWidgetRegistered: function(callback) {
	            for (var i = 0, len = kendo.widgets.length; i < len; i++) {
	                callback(kendo.widgets[i]);
	            }

	            kendo._widgetRegisteredCallbacks.push(callback);
	        },

	        logToConsole: function(message, type) {
	            var console = window.console;

	            if (!kendo.suppressLog && typeof(console) != "undefined" && console.log) {
	                console[type || "log"](message);
	            }
	        }
	    });

	    var Widget = Observable.extend( {
	        init: function(element, options) {
	            var that = this;

	            that.element = kendo.jQuery(element).handler(that);

	            that.angular("init", options);

	            Observable.fn.init.call(that);

	            var dataSource = options ? options.dataSource : null;

	            if (dataSource) {
	                // avoid deep cloning the data source
	                options = extend({}, options, { dataSource: {} });
	            }

	            options = that.options = extend(true, {}, that.options, options);

	            if (dataSource) {
	                options.dataSource = dataSource;
	            }

	            if (!that.element.attr(kendo.attr("role"))) {
	                that.element.attr(kendo.attr("role"), (options.name || "").toLowerCase());
	            }

	            that.element.data("kendo" + options.prefix + options.name, that);

	            that.bind(that.events, options);
	        },

	        events: [],

	        options: {
	            prefix: ""
	        },

	        _hasBindingTarget: function() {
	            return !!this.element[0].kendoBindingTarget;
	        },

	        _tabindex: function(target) {
	            target = target || this.wrapper;

	            var element = this.element,
	                TABINDEX = "tabindex",
	                tabindex = target.attr(TABINDEX) || element.attr(TABINDEX);

	            element.removeAttr(TABINDEX);

	            target.attr(TABINDEX, !isNaN(tabindex) ? tabindex : 0);
	        },

	        setOptions: function(options) {
	            this._setEvents(options);
	            $.extend(this.options, options);
	        },

	        _setEvents: function(options) {
	            var that = this,
	                idx = 0,
	                length = that.events.length,
	                e;

	            for (; idx < length; idx ++) {
	                e = that.events[idx];
	                if (that.options[e] && options[e]) {
	                    that.unbind(e, that.options[e]);
	                }
	            }

	            that.bind(that.events, options);
	        },

	        resize: function(force) {
	            var size = this.getSize(),
	                currentSize = this._size;

	            if (force || (size.width > 0 || size.height > 0) && (!currentSize || size.width !== currentSize.width || size.height !== currentSize.height)) {
	                this._size = size;
	                this._resize(size, force);
	                this.trigger("resize", size);
	            }
	        },

	        getSize: function() {
	            return kendo.dimensions(this.element);
	        },

	        size: function(size) {
	            if (!size) {
	                return this.getSize();
	            } else {
	                this.setSize(size);
	            }
	        },

	        setSize: $.noop,
	        _resize: $.noop,

	        destroy: function() {
	            var that = this;

	            that.element.removeData("kendo" + that.options.prefix + that.options.name);
	            that.element.removeData("handler");
	            that.unbind();
	        },
	        _destroy: function() {
	            this.destroy();
	        },
	        angular: function(){},

	        _muteAngularRebind: function(callback) {
	            this._muteRebind = true;

	            callback.call(this);

	            this._muteRebind = false;
	        }
	    });

	    var DataBoundWidget = Widget.extend({
	        // Angular consumes these.
	        dataItems: function() {
	            return this.dataSource.flatView();
	        },

	        _angularItems: function(cmd) {
	            var that = this;
	            that.angular(cmd, function(){
	                return {
	                    elements: that.items(),
	                    data: $.map(that.dataItems(), function(dataItem){
	                        return { dataItem: dataItem };
	                    })
	                };
	            });
	        }
	    });

	    kendo.dimensions = function(element, dimensions) {
	        var domElement = element[0];

	        if (dimensions) {
	            element.css(dimensions);
	        }

	        return { width: domElement.offsetWidth, height: domElement.offsetHeight };
	    };

	    kendo.notify = noop;

	    var templateRegExp = /template$/i,
	        jsonRegExp = /^\s*(?:\{(?:.|\r\n|\n)*\}|\[(?:.|\r\n|\n)*\])\s*$/,
	        jsonFormatRegExp = /^\{(\d+)(:[^\}]+)?\}|^\[[A-Za-z_]*\]$/,
	        dashRegExp = /([A-Z])/g;

	    function parseOption(element, option) {
	        var value;

	        if (option.indexOf("data") === 0) {
	            option = option.substring(4);
	            option = option.charAt(0).toLowerCase() + option.substring(1);
	        }

	        option = option.replace(dashRegExp, "-$1");
	        value = element.getAttribute("data-" + kendo.ns + option);

	        if (value === null) {
	            value = undefined;
	        } else if (value === "null") {
	            value = null;
	        } else if (value === "true") {
	            value = true;
	        } else if (value === "false") {
	            value = false;
	        } else if (numberRegExp.test(value)) {
	            value = parseFloat(value);
	        } else if (jsonRegExp.test(value) && !jsonFormatRegExp.test(value)) {
	            value = new Function("return (" + value + ")")();
	        }

	        return value;
	    }

	    function parseOptions(element, options) {
	        var result = {},
	            option,
	            value;

	        for (option in options) {
	            value = parseOption(element, option);

	            if (value !== undefined) {

	                if (templateRegExp.test(option)) {
	                    if(typeof value === "string") {
	                        value = kendo.template($("#" + value).html());
	                    } else {
	                        value = element.getAttribute(option);
	                    }
	                }

	                result[option] = value;
	            }
	        }

	        return result;
	    }

	    kendo.initWidget = function(element, options, roles) {
	        var result,
	            option,
	            widget,
	            idx,
	            length,
	            role,
	            value,
	            dataSource,
	            fullPath,
	            widgetKeyRegExp;

	        // Preserve backwards compatibility with (element, options, namespace) signature, where namespace was kendo.ui
	        if (!roles) {
	            roles = kendo.ui.roles;
	        } else if (roles.roles) {
	            roles = roles.roles;
	        }

	        element = element.nodeType ? element : element[0];

	        role = element.getAttribute("data-" + kendo.ns + "role");

	        if (!role) {
	            return;
	        }

	        fullPath = role.indexOf(".") === -1;

	        // look for any widget that may be already instantiated based on this role.
	        // The prefix used is unknown, hence the regexp
	        //

	        if (fullPath) {
	            widget = roles[role];
	        } else { // full namespace path - like kendo.ui.Widget
	            widget = kendo.getter(role)(window);
	        }

	        var data = $(element).data(),
	            widgetKey = widget ? "kendo" + widget.fn.options.prefix + widget.fn.options.name : "";

	        if (fullPath) {
	            widgetKeyRegExp = new RegExp("^kendo.*" + role + "$", "i");
	        } else { // full namespace path - like kendo.ui.Widget
	            widgetKeyRegExp = new RegExp("^" + widgetKey + "$", "i");
	        }

	        for(var key in data) {
	            if (key.match(widgetKeyRegExp)) {
	                // we have detected a widget of the same kind - save its reference, we will set its options
	                if (key === widgetKey) {
	                    result = data[key];
	                } else {
	                    return data[key];
	                }
	            }
	        }

	        if (!widget) {
	            return;
	        }

	        dataSource = parseOption(element, "dataSource");

	        options = $.extend({}, parseOptions(element, widget.fn.options), options);

	        if (dataSource) {
	            if (typeof dataSource === STRING) {
	                options.dataSource = kendo.getter(dataSource)(window);
	            } else {
	                options.dataSource = dataSource;
	            }
	        }

	        for (idx = 0, length = widget.fn.events.length; idx < length; idx++) {
	            option = widget.fn.events[idx];

	            value = parseOption(element, option);

	            if (value !== undefined) {
	                options[option] = kendo.getter(value)(window);
	            }
	        }

	        if (!result) {
	            result = new widget(element, options);
	        } else if (!$.isEmptyObject(options)) {
	            result.setOptions(options);
	        }

	        return result;
	    };

	    kendo.rolesFromNamespaces = function(namespaces) {
	        var roles = [],
	            idx,
	            length;

	        if (!namespaces[0]) {
	            namespaces = [kendo.ui, kendo.dataviz.ui];
	        }

	        for (idx = 0, length = namespaces.length; idx < length; idx ++) {
	            roles[idx] = namespaces[idx].roles;
	        }

	        return extend.apply(null, [{}].concat(roles.reverse()));
	    };

	    kendo.init = function(element) {
	        var roles = kendo.rolesFromNamespaces(slice.call(arguments, 1));

	        $(element).find("[data-" + kendo.ns + "role]").addBack().each(function(){
	            kendo.initWidget(this, {}, roles);
	        });
	    };

	    kendo.destroy = function(element) {
	        $(element).find("[data-" + kendo.ns + "role]").addBack().each(function(){
	            var data = $(this).data();

	            for (var key in data) {
	                if (key.indexOf("kendo") === 0 && typeof data[key].destroy === FUNCTION) {
	                    data[key].destroy();
	                }
	            }
	        });
	    };

	    function containmentComparer(a, b) {
	        return $.contains(a, b) ? -1 : 1;
	    }

	    function resizableWidget() {
	        var widget = $(this);
	        return ($.inArray(widget.attr("data-" + kendo.ns + "role"), ["slider", "rangeslider"]) > -1) || widget.is(":visible");
	    }

	    kendo.resize = function(element, force) {
	        var widgets = $(element).find("[data-" + kendo.ns + "role]").addBack().filter(resizableWidget);

	        if (!widgets.length) {
	            return;
	        }

	        // sort widgets based on their parent-child relation
	        var widgetsArray = $.makeArray(widgets);
	        widgetsArray.sort(containmentComparer);

	        // resize widgets
	        $.each(widgetsArray, function () {
	            var widget = kendo.widgetInstance($(this));
	            if (widget) {
	                widget.resize(force);
	            }
	        });
	    };

	    kendo.parseOptions = parseOptions;

	    extend(kendo.ui, {
	        Widget: Widget,
	        DataBoundWidget: DataBoundWidget,
	        roles: {},
	        progress: function(container, toggle) {
	            var mask = container.find(".k-loading-mask"),
	                support = kendo.support,
	                browser = support.browser,
	                isRtl, leftRight, webkitCorrection, containerScrollLeft;

	            if (toggle) {
	                if (!mask.length) {
	                    isRtl = support.isRtl(container);
	                    leftRight = isRtl ? "right" : "left";
	                    containerScrollLeft = container.scrollLeft();
	                    webkitCorrection = browser.webkit ? (!isRtl ? 0 : container[0].scrollWidth - container.width() - 2 * containerScrollLeft) : 0;

	                    mask = $("<div class='k-loading-mask'><span class='k-loading-text'>" + kendo.ui.progress.messages.loading + "</span><div class='k-loading-image'/><div class='k-loading-color'/></div>")
	                        .width("100%").height("100%")
	                        .css("top", container.scrollTop())
	                        .css(leftRight, Math.abs(containerScrollLeft) + webkitCorrection)
	                        .prependTo(container);
	                }
	            } else if (mask) {
	                mask.remove();
	            }
	        },
	        plugin: function(widget, register, prefix) {
	            var name = widget.fn.options.name,
	                getter;

	            register = register || kendo.ui;
	            prefix = prefix || "";

	            register[name] = widget;

	            register.roles[name.toLowerCase()] = widget;

	            getter = "getKendo" + prefix + name;
	            name = "kendo" + prefix + name;

	            var widgetEntry = { name: name, widget: widget, prefix: prefix || "" };
	            kendo.widgets.push(widgetEntry);

	            for (var i = 0, len = kendo._widgetRegisteredCallbacks.length; i < len; i++) {
	                kendo._widgetRegisteredCallbacks[i](widgetEntry);
	            }

	            $.fn[name] = function(options) {
	                var value = this,
	                    args;

	                if (typeof options === STRING) {
	                    args = slice.call(arguments, 1);

	                    this.each(function(){
	                        var widget = $.data(this, name),
	                            method,
	                            result;

	                        if (!widget) {
	                            throw new Error(kendo.format("Cannot call method '{0}' of {1} before it is initialized", options, name));
	                        }

	                        method = widget[options];

	                        if (typeof method !== FUNCTION) {
	                            throw new Error(kendo.format("Cannot find method '{0}' of {1}", options, name));
	                        }

	                        result = method.apply(widget, args);

	                        if (result !== undefined) {
	                            value = result;
	                            return false;
	                        }
	                    });
	                } else {
	                    this.each(function() {
	                        return new widget(this, options);
	                    });
	                }

	                return value;
	            };

	            $.fn[name].widget = widget;

	            $.fn[getter] = function() {
	                return this.data(name);
	            };
	        }
	    });

	    kendo.ui.progress.messages = {
	        loading: "Loading..."
	    };

	    var ContainerNullObject = { bind: function () { return this; }, nullObject: true, options: {} };

	    var MobileWidget = Widget.extend({
	        init: function(element, options) {
	            Widget.fn.init.call(this, element, options);
	            this.element.autoApplyNS();
	            this.wrapper = this.element;
	            this.element.addClass("km-widget");
	        },

	        destroy: function() {
	            Widget.fn.destroy.call(this);
	            this.element.kendoDestroy();
	        },

	        options: {
	            prefix: "Mobile"
	        },

	        events: [],

	        view: function() {
	            var viewElement = this.element.closest(kendo.roleSelector("view splitview modalview drawer"));
	            return kendo.widgetInstance(viewElement, kendo.mobile.ui) || ContainerNullObject;
	        },

	        viewHasNativeScrolling: function() {
	            var view = this.view();
	            return view && view.options.useNativeScrolling;
	        },

	        container: function() {
	            var element = this.element.closest(kendo.roleSelector("view layout modalview drawer splitview"));
	            return kendo.widgetInstance(element.eq(0), kendo.mobile.ui) || ContainerNullObject;
	        }
	    });

	    extend(kendo.mobile, {
	        init: function(element) {
	            kendo.init(element, kendo.mobile.ui, kendo.ui, kendo.dataviz.ui);
	        },

	        appLevelNativeScrolling: function() {
	            return kendo.mobile.application && kendo.mobile.application.options && kendo.mobile.application.options.useNativeScrolling;
	        },

	        roles: {},

	        ui: {
	            Widget: MobileWidget,
	            DataBoundWidget: DataBoundWidget.extend(MobileWidget.prototype),
	            roles: {},
	            plugin: function(widget) {
	                kendo.ui.plugin(widget, kendo.mobile.ui, "Mobile");
	            }
	        }
	    });

	    deepExtend(kendo.dataviz, {
	        init: function(element) {
	            kendo.init(element, kendo.dataviz.ui);
	        },
	        ui: {
	            roles: {},
	            themes: {},
	            views: [],
	            plugin: function(widget) {
	                kendo.ui.plugin(widget, kendo.dataviz.ui);
	            }
	        },
	        roles: {}
	    });

	    kendo.touchScroller = function(elements, options) {
	        // return the first touch scroller
	        if (!options){ options = {}; }

	        options.useNative = true;

	        return $(elements).map(function(idx, element) {
	            element = $(element);
	            if (support.kineticScrollNeeded && kendo.mobile.ui.Scroller && !element.data("kendoMobileScroller")) {
	                element.kendoMobileScroller(options);
	                return element.data("kendoMobileScroller");
	            } else {
	                return false;
	            }
	        })[0];
	    };

	    kendo.preventDefault = function(e) {
	        e.preventDefault();
	    };

	    kendo.widgetInstance = function(element, suites) {
	        var role = element.data(kendo.ns + "role"),
	            widgets = [], i, length;

	        if (role) {
	            // HACK!!! mobile view scroller widgets are instantiated on data-role="content" elements. We need to discover them when resizing.
	            if (role === "content") {
	                role = "scroller";
	            }

	            if (suites) {
	                if (suites[0]) {
	                    for (i = 0, length = suites.length; i < length; i ++) {
	                        widgets.push(suites[i].roles[role]);
	                    }
	                } else {
	                    widgets.push(suites.roles[role]);
	                }
	            }
	            else {
	                widgets = [ kendo.ui.roles[role], kendo.dataviz.ui.roles[role],  kendo.mobile.ui.roles[role] ];
	            }

	            if (role.indexOf(".") >= 0) {
	                widgets = [ kendo.getter(role)(window) ];
	            }

	            for (i = 0, length = widgets.length; i < length; i ++) {
	                var widget = widgets[i];
	                if (widget) {
	                    var instance = element.data("kendo" + widget.fn.options.prefix + widget.fn.options.name);
	                    if (instance) {
	                        return instance;
	                    }
	                }
	            }
	        }
	    };

	    kendo.onResize = function(callback) {
	        var handler = callback;
	        if (support.mobileOS.android) {
	            handler = function() { setTimeout(callback, 600); };
	        }

	        $(window).on(support.resize, handler);
	        return handler;
	    };

	    kendo.unbindResize = function(callback) {
	        $(window).off(support.resize, callback);
	    };

	    kendo.attrValue = function(element, key) {
	        return element.data(kendo.ns + key);
	    };

	    kendo.days = {
	        Sunday: 0,
	        Monday: 1,
	        Tuesday: 2,
	        Wednesday: 3,
	        Thursday: 4,
	        Friday: 5,
	        Saturday: 6
	    };

	    function focusable(element, isTabIndexNotNaN) {
	        var nodeName = element.nodeName.toLowerCase();

	        return (/input|select|textarea|button|object/.test(nodeName) ?
	                !element.disabled :
	                "a" === nodeName ?
	                element.href || isTabIndexNotNaN :
	                isTabIndexNotNaN
	               ) &&
	            visible(element);
	    }

	    function visible(element) {
	        return $.expr.filters.visible(element) &&
	            !$(element).parents().addBack().filter(function() {
	                return $.css(this,"visibility") === "hidden";
	            }).length;
	    }

	    $.extend($.expr[ ":" ], {
	        kendoFocusable: function(element) {
	            var idx = $.attr(element, "tabindex");
	            return focusable(element, !isNaN(idx) && idx > -1);
	        }
	    });

	    var MOUSE_EVENTS = ["mousedown", "mousemove", "mouseenter", "mouseleave", "mouseover", "mouseout", "mouseup", "click"];
	    var EXCLUDE_BUST_CLICK_SELECTOR = "label, input, [data-rel=external]";

	    var MouseEventNormalizer = {
	        setupMouseMute: function() {
	            var idx = 0,
	                length = MOUSE_EVENTS.length,
	                element = document.documentElement;

	            if (MouseEventNormalizer.mouseTrap || !support.eventCapture) {
	                return;
	            }

	            MouseEventNormalizer.mouseTrap = true;

	            MouseEventNormalizer.bustClick = false;
	            MouseEventNormalizer.captureMouse = false;

	            var handler = function(e) {
	                if (MouseEventNormalizer.captureMouse) {
	                    if (e.type === "click") {
	                        if (MouseEventNormalizer.bustClick && !$(e.target).is(EXCLUDE_BUST_CLICK_SELECTOR)) {
	                            e.preventDefault();
	                            e.stopPropagation();
	                        }
	                    } else {
	                        e.stopPropagation();
	                    }
	                }
	            };

	            for (; idx < length; idx++) {
	                element.addEventListener(MOUSE_EVENTS[idx], handler, true);
	            }
	        },

	        muteMouse: function(e) {
	            MouseEventNormalizer.captureMouse = true;
	            if (e.data.bustClick) {
	                MouseEventNormalizer.bustClick = true;
	            }
	            clearTimeout(MouseEventNormalizer.mouseTrapTimeoutID);
	        },

	        unMuteMouse: function() {
	            clearTimeout(MouseEventNormalizer.mouseTrapTimeoutID);
	            MouseEventNormalizer.mouseTrapTimeoutID = setTimeout(function() {
	                MouseEventNormalizer.captureMouse = false;
	                MouseEventNormalizer.bustClick = false;
	            }, 400);
	        }
	    };

	    var eventMap = {
	        down: "touchstart mousedown",
	        move: "mousemove touchmove",
	        up: "mouseup touchend touchcancel",
	        cancel: "mouseleave touchcancel"
	    };

	    if (support.touch && (support.mobileOS.ios || support.mobileOS.android)) {
	        eventMap = {
	            down: "touchstart",
	            move: "touchmove",
	            up: "touchend touchcancel",
	            cancel: "touchcancel"
	        };
	    } else if (support.pointers) {
	        eventMap = {
	            down: "pointerdown",
	            move: "pointermove",
	            up: "pointerup",
	            cancel: "pointercancel pointerleave"
	        };
	    } else if (support.msPointers) {
	        eventMap = {
	            down: "MSPointerDown",
	            move: "MSPointerMove",
	            up: "MSPointerUp",
	            cancel: "MSPointerCancel MSPointerLeave"
	        };
	    }

	    if (support.msPointers && !("onmspointerenter" in window)) { // IE10
	        // Create MSPointerEnter/MSPointerLeave events using mouseover/out and event-time checks
	        $.each({
	            MSPointerEnter: "MSPointerOver",
	            MSPointerLeave: "MSPointerOut"
	        }, function( orig, fix ) {
	            $.event.special[ orig ] = {
	                delegateType: fix,
	                bindType: fix,

	                handle: function( event ) {
	                    var ret,
	                        target = this,
	                        related = event.relatedTarget,
	                        handleObj = event.handleObj;

	                    // For mousenter/leave call the handler if related is outside the target.
	                    // NB: No relatedTarget if the mouse left/entered the browser window
	                    if ( !related || (related !== target && !$.contains( target, related )) ) {
	                        event.type = handleObj.origType;
	                        ret = handleObj.handler.apply( this, arguments );
	                        event.type = fix;
	                    }
	                    return ret;
	                }
	            };
	        });
	    }


	    var getEventMap = function(e) { return (eventMap[e] || e); },
	        eventRegEx = /([^ ]+)/g;

	    kendo.applyEventMap = function(events, ns) {
	        events = events.replace(eventRegEx, getEventMap);

	        if (ns) {
	            events = events.replace(eventRegEx, "$1." + ns);
	        }

	        return events;
	    };

	    var on = $.fn.on;

	    function kendoJQuery(selector, context) {
	        return new kendoJQuery.fn.init(selector, context);
	    }

	    extend(true, kendoJQuery, $);

	    kendoJQuery.fn = kendoJQuery.prototype = new $();

	    kendoJQuery.fn.constructor = kendoJQuery;

	    kendoJQuery.fn.init = function(selector, context) {
	        if (context && context instanceof $ && !(context instanceof kendoJQuery)) {
	            context = kendoJQuery(context);
	        }

	        return $.fn.init.call(this, selector, context, rootjQuery);
	    };

	    kendoJQuery.fn.init.prototype = kendoJQuery.fn;

	    var rootjQuery = kendoJQuery(document);

	    extend(kendoJQuery.fn, {
	        handler: function(handler) {
	            this.data("handler", handler);
	            return this;
	        },

	        autoApplyNS: function(ns) {
	            this.data("kendoNS", ns || kendo.guid());
	            return this;
	        },

	        on: function() {
	            var that = this,
	                ns = that.data("kendoNS");

	            // support for event map signature
	            if (arguments.length === 1) {
	                return on.call(that, arguments[0]);
	            }

	            var context = that,
	                args = slice.call(arguments);

	            if (typeof args[args.length -1] === UNDEFINED) {
	                args.pop();
	            }

	            var callback =  args[args.length - 1],
	                events = kendo.applyEventMap(args[0], ns);

	            // setup mouse trap
	            if (support.mouseAndTouchPresent && events.search(/mouse|click/) > -1 && this[0] !== document.documentElement) {
	                MouseEventNormalizer.setupMouseMute();

	                var selector = args.length === 2 ? null : args[1],
	                    bustClick = events.indexOf("click") > -1 && events.indexOf("touchend") > -1;

	                on.call(this,
	                    {
	                        touchstart: MouseEventNormalizer.muteMouse,
	                        touchend: MouseEventNormalizer.unMuteMouse
	                    },
	                    selector,
	                    {
	                        bustClick: bustClick
	                    });
	            }

	            if (typeof callback === STRING) {
	                context = that.data("handler");
	                callback = context[callback];

	                args[args.length - 1] = function(e) {
	                    callback.call(context, e);
	                };
	            }

	            args[0] = events;

	            on.apply(that, args);

	            return that;
	        },

	        kendoDestroy: function(ns) {
	            ns = ns || this.data("kendoNS");

	            if (ns) {
	                this.off("." + ns);
	            }

	            return this;
	        }
	    });

	    kendo.jQuery = kendoJQuery;
	    kendo.eventMap = eventMap;

	    kendo.timezone = (function(){
	        var months =  { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
	        var days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

	        function ruleToDate(year, rule) {
	            var date;
	            var targetDay;
	            var ourDay;
	            var month = rule[3];
	            var on = rule[4];
	            var time = rule[5];
	            var cache = rule[8];

	            if (!cache) {
	                rule[8] = cache = {};
	            }

	            if (cache[year]) {
	                return cache[year];
	            }

	            if (!isNaN(on)) {
	                date = new Date(Date.UTC(year, months[month], on, time[0], time[1], time[2], 0));
	            } else if (on.indexOf("last") === 0) {
	                date = new Date(Date.UTC(year, months[month] + 1, 1, time[0] - 24, time[1], time[2], 0));

	                targetDay = days[on.substr(4, 3)];
	                ourDay = date.getUTCDay();

	                date.setUTCDate(date.getUTCDate() + targetDay - ourDay - (targetDay > ourDay ? 7 : 0));
	            } else if (on.indexOf(">=") >= 0) {
	                date = new Date(Date.UTC(year, months[month], on.substr(5), time[0], time[1], time[2], 0));

	                targetDay = days[on.substr(0, 3)];
	                ourDay = date.getUTCDay();

	                date.setUTCDate(date.getUTCDate() + targetDay - ourDay + (targetDay < ourDay ? 7 : 0));
	            }

	            return cache[year] = date;
	        }

	        function findRule(utcTime, rules, zone) {
	            rules = rules[zone];

	            if (!rules) {
	                var time = zone.split(":");
	                var offset = 0;

	                if (time.length > 1) {
	                    offset = time[0] * 60 + Number(time[1]);
	                }

	                return [-1000000, 'max', '-', 'Jan', 1, [0, 0, 0], offset, '-'];
	            }

	            var year = new Date(utcTime).getUTCFullYear();

	            rules = jQuery.grep(rules, function(rule) {
	                var from = rule[0];
	                var to = rule[1];

	                return from <= year && (to >= year || (from == year && to == "only") || to == "max");
	            });

	            rules.push(utcTime);

	            rules.sort(function(a, b) {
	                if (typeof a != "number") {
	                    a = Number(ruleToDate(year, a));
	                }

	                if (typeof b != "number") {
	                    b = Number(ruleToDate(year, b));
	                }

	                return a - b;
	            });

	            var rule = rules[jQuery.inArray(utcTime, rules) - 1] || rules[rules.length - 1];

	            return isNaN(rule) ? rule : null;
	        }

	        function findZone(utcTime, zones, timezone) {
	            var zoneRules = zones[timezone];

	            if (typeof zoneRules === "string") {
	                zoneRules = zones[zoneRules];
	            }

	            if (!zoneRules) {
	                throw new Error('Timezone "' + timezone + '" is either incorrect, or kendo.timezones.min.js is not included.');
	            }

	            for (var idx = zoneRules.length - 1; idx >= 0; idx--) {
	                var until = zoneRules[idx][3];

	                if (until && utcTime > until) {
	                    break;
	                }
	            }

	            var zone = zoneRules[idx + 1];

	            if (!zone) {
	                throw new Error('Timezone "' + timezone + '" not found on ' + utcTime + ".");
	            }

	            return zone;
	        }

	        function zoneAndRule(utcTime, zones, rules, timezone) {
	            if (typeof utcTime != NUMBER) {
	                utcTime = Date.UTC(utcTime.getFullYear(), utcTime.getMonth(),
	                    utcTime.getDate(), utcTime.getHours(), utcTime.getMinutes(),
	                    utcTime.getSeconds(), utcTime.getMilliseconds());
	            }

	            var zone = findZone(utcTime, zones, timezone);

	            return {
	                zone: zone,
	                rule: findRule(utcTime, rules, zone[1])
	            };
	        }

	        function offset(utcTime, timezone) {
	            if (timezone == "Etc/UTC" || timezone == "Etc/GMT") {
	                return 0;
	            }

	            var info = zoneAndRule(utcTime, this.zones, this.rules, timezone);
	            var zone = info.zone;
	            var rule = info.rule;

	            return kendo.parseFloat(rule? zone[0] - rule[6] : zone[0]);
	        }

	        function abbr(utcTime, timezone) {
	            var info = zoneAndRule(utcTime, this.zones, this.rules, timezone);
	            var zone = info.zone;
	            var rule = info.rule;

	            var base = zone[2];

	            if (base.indexOf("/") >= 0) {
	                return base.split("/")[rule && +rule[6] ? 1 : 0];
	            } else if (base.indexOf("%s") >= 0) {
	                return base.replace("%s", (!rule || rule[7] == "-") ? '' : rule[7]);
	            }

	            return base;
	        }

	        function convert(date, fromOffset, toOffset) {
	            if (typeof fromOffset == STRING) {
	                fromOffset = this.offset(date, fromOffset);
	            }

	            if (typeof toOffset == STRING) {
	                toOffset = this.offset(date, toOffset);
	            }

	            var fromLocalOffset = date.getTimezoneOffset();

	            date = new Date(date.getTime() + (fromOffset - toOffset) * 60000);

	            var toLocalOffset = date.getTimezoneOffset();

	            return new Date(date.getTime() + (toLocalOffset - fromLocalOffset) * 60000);
	        }

	        function apply(date, timezone) {
	           return this.convert(date, date.getTimezoneOffset(), timezone);
	        }

	        function remove(date, timezone) {
	           return this.convert(date, timezone, date.getTimezoneOffset());
	        }

	        function toLocalDate(time) {
	            return this.apply(new Date(time), "Etc/UTC");
	        }

	        return {
	           zones: {},
	           rules: {},
	           offset: offset,
	           convert: convert,
	           apply: apply,
	           remove: remove,
	           abbr: abbr,
	           toLocalDate: toLocalDate
	        };
	    })();

	    kendo.date = (function(){
	        var MS_PER_MINUTE = 60000,
	            MS_PER_DAY = 86400000;

	        function adjustDST(date, hours) {
	            if (hours === 0 && date.getHours() === 23) {
	                date.setHours(date.getHours() + 2);
	                return true;
	            }

	            return false;
	        }

	        function setDayOfWeek(date, day, dir) {
	            var hours = date.getHours();

	            dir = dir || 1;
	            day = ((day - date.getDay()) + (7 * dir)) % 7;

	            date.setDate(date.getDate() + day);
	            adjustDST(date, hours);
	        }

	        function dayOfWeek(date, day, dir) {
	            date = new Date(date);
	            setDayOfWeek(date, day, dir);
	            return date;
	        }

	        function firstDayOfMonth(date) {
	            return new Date(
	                date.getFullYear(),
	                date.getMonth(),
	                1
	            );
	        }

	        function lastDayOfMonth(date) {
	            var last = new Date(date.getFullYear(), date.getMonth() + 1, 0),
	                first = firstDayOfMonth(date),
	                timeOffset = Math.abs(last.getTimezoneOffset() - first.getTimezoneOffset());

	            if (timeOffset) {
	                last.setHours(first.getHours() + (timeOffset / 60));
	            }

	            return last;
	        }

	        function moveDateToWeekStart(date, weekStartDay) {
	            if (weekStartDay !== 1) {
	                return addDays(dayOfWeek(date, weekStartDay, -1), 4);
	            }

	            return addDays(date, (4 - (date.getDay() || 7)));
	        }

	        function calcWeekInYear(date, weekStartDay) {
	            var firstWeekInYear = new Date(date.getFullYear(), 0, 1, -6);

	            var newDate = moveDateToWeekStart(date, weekStartDay);

	            var diffInMS = newDate.getTime() - firstWeekInYear.getTime();

	            var days = Math.floor(diffInMS / MS_PER_DAY);

	            return 1 + Math.floor(days / 7);
	        }

	        function weekInYear(date, weekStartDay){   
	            var prevWeekDate = addDays(date, -7);
	            var nextWeekDate = addDays(date, 7);

	            var weekNumber = calcWeekInYear(date, weekStartDay);

	            if (weekNumber === 0) {
	                return calcWeekInYear(prevWeekDate, weekStartDay) + 1;
	            }

	            if (weekNumber === 53 && calcWeekInYear(nextWeekDate, weekStartDay) > 1) {
	                return 1;
	            }

	            return weekNumber;
	        }

	        function getDate(date) {
	            date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
	            adjustDST(date, 0);
	            return date;
	        }

	        function toUtcTime(date) {
	            return Date.UTC(date.getFullYear(), date.getMonth(),
	                        date.getDate(), date.getHours(), date.getMinutes(),
	                        date.getSeconds(), date.getMilliseconds());
	        }

	        function getMilliseconds(date) {
	            return date.getTime() - getDate(date);
	        }

	        function isInTimeRange(value, min, max) {
	            var msMin = getMilliseconds(min),
	                msMax = getMilliseconds(max),
	                msValue;

	            if (!value || msMin == msMax) {
	                return true;
	            }

	            if (min >= max) {
	                max += MS_PER_DAY;
	            }

	            msValue = getMilliseconds(value);

	            if (msMin > msValue) {
	                msValue += MS_PER_DAY;
	            }

	            if (msMax < msMin) {
	                msMax += MS_PER_DAY;
	            }

	            return msValue >= msMin && msValue <= msMax;
	        }

	        function isInDateRange(value, min, max) {
	            var msMin = min.getTime(),
	                msMax = max.getTime(),
	                msValue;

	            if (msMin >= msMax) {
	                msMax += MS_PER_DAY;
	            }

	            msValue = value.getTime();

	            return msValue >= msMin && msValue <= msMax;
	        }

	        function addDays(date, offset) {
	            var hours = date.getHours();
	                date = new Date(date);

	            setTime(date, offset * MS_PER_DAY);
	            adjustDST(date, hours);
	            return date;
	        }

	        function setTime(date, milliseconds, ignoreDST) {
	            var offset = date.getTimezoneOffset();
	            var difference;

	            date.setTime(date.getTime() + milliseconds);

	            if (!ignoreDST) {
	                difference = date.getTimezoneOffset() - offset;
	                date.setTime(date.getTime() + difference * MS_PER_MINUTE);
	            }
	        }

	        function setHours(date, time) {
	            date = new Date(kendo.date.getDate(date).getTime() + kendo.date.getMilliseconds(time));
	            adjustDST(date, time.getHours());
	            return date;
	        }

	        function today() {
	            return getDate(new Date());
	        }

	        function isToday(date) {
	           return getDate(date).getTime() == today().getTime();
	        }

	        function toInvariantTime(date) {
	            var staticDate = new Date(1980, 1, 1, 0, 0, 0);

	            if (date) {
	                staticDate.setHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
	            }

	            return staticDate;
	        }

	        return {
	            adjustDST: adjustDST,
	            dayOfWeek: dayOfWeek,
	            setDayOfWeek: setDayOfWeek,
	            getDate: getDate,
	            isInDateRange: isInDateRange,
	            isInTimeRange: isInTimeRange,
	            isToday: isToday,
	            nextDay: function(date) {
	                return addDays(date, 1);
	            },
	            previousDay: function(date) {
	                return addDays(date, -1);
	            },
	            toUtcTime: toUtcTime,
	            MS_PER_DAY: MS_PER_DAY,
	            MS_PER_HOUR: 60 * MS_PER_MINUTE,
	            MS_PER_MINUTE: MS_PER_MINUTE,
	            setTime: setTime,
	            setHours: setHours,
	            addDays: addDays,
	            today: today,
	            toInvariantTime: toInvariantTime,
	            firstDayOfMonth: firstDayOfMonth,
	            lastDayOfMonth: lastDayOfMonth,
	            weekInYear: weekInYear,
	            getMilliseconds: getMilliseconds
	        };
	    })();


	    kendo.stripWhitespace = function(element) {
	        if (document.createNodeIterator) {
	            var iterator = document.createNodeIterator(element, NodeFilter.SHOW_TEXT, function(node) {
	                    return node.parentNode == element ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
	                }, false);

	            while (iterator.nextNode()) {
	                if (iterator.referenceNode && !iterator.referenceNode.textContent.trim()) {
	                    iterator.referenceNode.parentNode.removeChild(iterator.referenceNode);
	                }
	            }
	        } else { // IE7/8 support
	            for (var i = 0; i < element.childNodes.length; i++) {
	                var child = element.childNodes[i];

	                if (child.nodeType == 3 && !/\S/.test(child.nodeValue)) {
	                    element.removeChild(child);
	                    i--;
	                }

	                if (child.nodeType == 1) {
	                    kendo.stripWhitespace(child);
	                }
	            }
	        }
	    };

	    var animationFrame  = window.requestAnimationFrame       ||
	                          window.webkitRequestAnimationFrame ||
	                          window.mozRequestAnimationFrame    ||
	                          window.oRequestAnimationFrame      ||
	                          window.msRequestAnimationFrame     ||
	                          function(callback){ setTimeout(callback, 1000 / 60); };

	    kendo.animationFrame = function(callback) {
	        animationFrame.call(window, callback);
	    };

	    var animationQueue = [];

	    kendo.queueAnimation = function(callback) {
	        animationQueue[animationQueue.length] = callback;
	        if (animationQueue.length === 1) {
	            kendo.runNextAnimation();
	        }
	    };

	    kendo.runNextAnimation = function() {
	        kendo.animationFrame(function() {
	            if (animationQueue[0]) {
	                animationQueue.shift()();
	                if (animationQueue[0]) {
	                    kendo.runNextAnimation();
	                }
	            }
	        });
	    };

	    kendo.parseQueryStringParams = function(url) {
	        var queryString = url.split('?')[1] || "",
	            params = {},
	            paramParts = queryString.split(/&|=/),
	            length = paramParts.length,
	            idx = 0;

	        for (; idx < length; idx += 2) {
	            if(paramParts[idx] !== "") {
	                params[decodeURIComponent(paramParts[idx])] = decodeURIComponent(paramParts[idx + 1]);
	            }
	        }

	        return params;
	    };

	    kendo.elementUnderCursor = function(e) {
	        if (typeof e.x.client != "undefined") {
	            return document.elementFromPoint(e.x.client, e.y.client);
	        }
	    };

	    kendo.wheelDeltaY = function(jQueryEvent) {
	        var e = jQueryEvent.originalEvent,
	            deltaY = e.wheelDeltaY,
	            delta;

	            if (e.wheelDelta) { // Webkit and IE
	                if (deltaY === undefined || deltaY) { // IE does not have deltaY, thus always scroll (horizontal scrolling is treated as vertical)
	                    delta = e.wheelDelta;
	                }
	            } else if (e.detail && e.axis === e.VERTICAL_AXIS) { // Firefox and Opera
	                delta = (-e.detail) * 10;
	            }

	        return delta;
	    };

	    kendo.throttle = function(fn, delay) {
	        var timeout;
	        var lastExecTime = 0;

	        if (!delay || delay <= 0) {
	            return fn;
	        }

	        var throttled = function() {
	            var that = this;
	            var elapsed = +new Date() - lastExecTime;
	            var args = arguments;

	            function exec() {
	                fn.apply(that, args);
	                lastExecTime = +new Date();
	            }

	            // first execution
	            if (!lastExecTime) {
	                return exec();
	            }

	            if (timeout) {
	                clearTimeout(timeout);
	            }

	            if (elapsed > delay) {
	                exec();
	            } else {
	                timeout = setTimeout(exec, delay - elapsed);
	            }
	        };

	        throttled.cancel = function() {
	            clearTimeout(timeout);
	        };

	        return throttled;
	    };


	    kendo.caret = function (element, start, end) {
	        var rangeElement;
	        var isPosition = start !== undefined;

	        if (end === undefined) {
	            end = start;
	        }

	        if (element[0]) {
	            element = element[0];
	        }

	        if (isPosition && element.disabled) {
	            return;
	        }

	        try {
	            if (element.selectionStart !== undefined) {
	                if (isPosition) {
	                    element.focus();
	                    element.setSelectionRange(start, end);
	                } else {
	                    start = [element.selectionStart, element.selectionEnd];
	                }
	            } else if (document.selection) {
	                if ($(element).is(":visible")) {
	                    element.focus();
	                }

	                rangeElement = element.createTextRange();

	                if (isPosition) {
	                    rangeElement.collapse(true);
	                    rangeElement.moveStart("character", start);
	                    rangeElement.moveEnd("character", end - start);
	                    rangeElement.select();
	                } else {
	                    var rangeDuplicated = rangeElement.duplicate(),
	                        selectionStart, selectionEnd;

	                        rangeElement.moveToBookmark(document.selection.createRange().getBookmark());
	                        rangeDuplicated.setEndPoint('EndToStart', rangeElement);
	                        selectionStart = rangeDuplicated.text.length;
	                        selectionEnd = selectionStart + rangeElement.text.length;

	                    start = [selectionStart, selectionEnd];
	                }
	            }
	        } catch(e) {
	            /* element is not focused or it is not in the DOM */
	            start = [];
	        }

	        return start;
	    };

	    kendo.compileMobileDirective = function(element, scope) {
	        var angular = window.angular;

	        element.attr("data-" + kendo.ns + "role", element[0].tagName.toLowerCase().replace('kendo-mobile-', '').replace('-', ''));

	        angular.element(element).injector().invoke(["$compile", function($compile) {
	            $compile(element)(scope);

	            if (!/^\$(digest|apply)$/.test(scope.$$phase)) {
	                scope.$digest();
	            }
	        }]);

	        return kendo.widgetInstance(element, kendo.mobile.ui);
	    };

	    kendo.antiForgeryTokens = function() {
	        var tokens = { },
	            csrf_token = $("meta[name=csrf-token],meta[name=_csrf]").attr("content"),
	            csrf_param = $("meta[name=csrf-param],meta[name=_csrf_header]").attr("content");

	        $("input[name^='__RequestVerificationToken']").each(function() {
	            tokens[this.name] = this.value;
	        });

	        if (csrf_param !== undefined && csrf_token !== undefined) {
	          tokens[csrf_param] = csrf_token;
	        }

	        return tokens;
	    };

	    kendo.cycleForm = function(form) {
	        var firstElement = form.find("input, .k-widget").first();
	        var lastElement = form.find("button, .k-button").last();

	        function focus(el) {
	            var widget = kendo.widgetInstance(el);

	            if (widget && widget.focus) {
	              widget.focus();
	            } else {
	              el.focus();
	            }
	        }

	        lastElement.on("keydown", function(e) {
	          if (e.keyCode == kendo.keys.TAB && !e.shiftKey) {
	            e.preventDefault();
	            focus(firstElement);
	          }
	        });

	        firstElement.on("keydown", function(e) {
	          if (e.keyCode == kendo.keys.TAB && e.shiftKey) {
	            e.preventDefault();
	            focus(lastElement);
	          }
	        });
	    };

	    // kendo.saveAs -----------------------------------------------
	    (function() {
	        function postToProxy(dataURI, fileName, proxyURL, proxyTarget) {
	            var form = $("<form>").attr({
	                action: proxyURL,
	                method: "POST",
	                target: proxyTarget
	            });

	            var data = kendo.antiForgeryTokens();
	            data.fileName = fileName;

	            var parts = dataURI.split(";base64,");
	            data.contentType = parts[0].replace("data:", "");
	            data.base64 = parts[1];

	            for (var name in data) {
	                if (data.hasOwnProperty(name)) {
	                    $('<input>').attr({
	                        value: data[name],
	                        name: name,
	                        type: "hidden"
	                    }).appendTo(form);
	                }
	            }

	            form.appendTo("body").submit().remove();
	        }

	        var fileSaver = document.createElement("a");
	        var downloadAttribute = "download" in fileSaver && !kendo.support.browser.edge;

	        function saveAsBlob(dataURI, fileName) {
	            var blob = dataURI; // could be a Blob object

	            if (typeof dataURI == "string") {
	                var parts = dataURI.split(";base64,");
	                var contentType = parts[0];
	                var base64 = atob(parts[1]);
	                var array = new Uint8Array(base64.length);

	                for (var idx = 0; idx < base64.length; idx++) {
	                    array[idx] = base64.charCodeAt(idx);
	                }
	                blob = new Blob([array.buffer], { type: contentType });
	            }

	            navigator.msSaveBlob(blob, fileName);
	        }

	        function saveAsDataURI(dataURI, fileName) {
	            if (window.Blob && dataURI instanceof Blob) {
	                dataURI = URL.createObjectURL(dataURI);
	            }

	            fileSaver.download = fileName;
	            fileSaver.href = dataURI;

	            var e = document.createEvent("MouseEvents");
	            e.initMouseEvent("click", true, false, window,
	                0, 0, 0, 0, 0, false, false, false, false, 0, null);

	            fileSaver.dispatchEvent(e);
	            setTimeout(function(){
	                URL.revokeObjectURL(dataURI);
	            });
	        }

	        kendo.saveAs = function(options) {
	            var save = postToProxy;

	            if (!options.forceProxy) {
	                if (downloadAttribute) {
	                    save = saveAsDataURI;
	                } else if (navigator.msSaveBlob) {
	                    save = saveAsBlob;
	                }
	            }

	            save(options.dataURI, options.fileName, options.proxyURL, options.proxyTarget);
	        };
	    })();

	    // kendo proxySetters
	    kendo.proxyModelSetters = function proxyModelSetters(data) {
	        var observable = {};

	        Object.keys(data || {}).forEach(function(property) {
	          Object.defineProperty(observable, property, {
	            get: function() {
	              return data[property];
	            },
	            set: function(value) {
	              data[property] = value;
	              data.dirty = true;
	            }
	          });
	        });

	        return observable;
	    };

	})(jQuery, window);

	return window.kendo;

	}, __webpack_require__(422));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(420)))

/***/ }

/******/ });

/***/ }),
/* 19 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(9), __webpack_require__(6), __webpack_require__(7), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, $, api_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    $(function () {
        $('button').kendoButton({
            click: function (e) {
                api_1.default.getMe()
                    .done(function (data) {
                    window.alert(kendo.format('My name is `{0}`', data.user));
                });
            },
            icon: 'refresh',
        });
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "70d072552a7c23a43eaa1b15ca236e3f.woff";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhFgAWAJECAPDw8OTk5AAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAACACwAAAAAFgAWAAACL4yPAcsNmZyESDp6bMNGM654DyeOWAmipJiyqweGWuy+Fg23s37zk38BboQf4qIAACH5BAUEAAIALAAAAAAWABYAAAIwBIKpYe231ntRTlfTxZlt03lf+IFdCWUoWbLj2cKvGstXKN6ubk94Tdv8ZkFe0VEAACH5BAUEAAIALAAAAAAWABYAAAIwhBGpG+fH4nuRTVfXhTltnn1G14ikiHToaapt+Far+7E1vZFlbl96LLvhJj8hzFEAACH5BAUEAAIALAAAAAAWABYAAAIwhB+pG+fI2HtRTljTxXmbrHgAqImkOILoaapt91ar67E1vdk5fpHNzaPoJr6Y7FAAACH5BAUEAAIALAAAAAAWABYAAAIvhG+hy4EPmoRINnosw0krHnkOJ45YCaKpB4ZaK8Ls+tKWXJOznp+736OogMGHqgAAIfkEBQQAAgAsAAAAABYAFgAAAi+Ej6HLgQ+ahEkyeuzFUSveeaD3caRjkqOaiqsGhlbMtvN72xO+6w3t8m2EC6CnAAAh+QQFBAACACwAAAAAFgAWAAACMAyOCcHtCp1kME1Z0X15bdp9YCYaodh5X1qy6LnCW6pe9CtPd5xj7vyzBXVDX69RAAAh+QQFBAACACwAAAAAFgAWAAACMIyBqWDtseJ7cU1X1cWZ7dN9YCZCodh5X1qy6LnCmxuTrzyl6qXf9kzjBXNDSjFQAAAh+QQFBAACACwAAAAAFgAWAAACLowNqQvnx+J7kU1X14U5bdQ1XxCOZGeWo/qxm3vBk0yhq93iL83pMw/y1YQYWAEAIfkEBQQAAgAsAAAAABYAFgAAAjCMH6DLgJ9ag0hOaizDWSseeaD3caQziqkGhlZLwqo5Y/H64pLM6hddg5x8P8rQUAAAIfkEBQQAAgAsAAAAABYAFgAAAjCMf6DLgB+ahEg2muzCRm/uKVwUjqEDlqk3klqrrhbMmrU82a8+8zl+8QWBQ8opUAAAOw=="

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhMAAwAPf/ALi0sm9lYNTU1MPAvpiRjpaQjYR8eOfm5uno6JqUkaSem6ahnnJpZdHOzcnGxMK+vaiioKCal7WwroJ6dtXS0bCqqNzb2qKcmYiAfHhvanBnYsfEwpWOiuXk5OLh4MjFxLGsqreysJmSj66opt7d3ODf3puVkpOMieTj48vIx9rZ2J6YlePi4sbDwtjX1mxiXX52cpyWk8rHxqqlon10cIB4dHtybrKtqnlwbJKLiMTAv66pp5+ZlnpxbJWOi8K/vp6YlpGKh8XCwKumpIqCf46Ggs3KycfEw3ZtaMG+vXpybW5kX7Svraqmo8bCweHg4ODf38zJyGthXeLh4aKcmIyEgObl5c7Lyqain8C9vM7My3RqZuTk4767upCIhXxzbrCrqXZuaamkoaOdmmheWaaioKyopr+8unFoY3hva42GgnRsaXduadnX19LPz46Hg4yFgs3KyZSMicnGxX50cN3b25CJhY+IhKynpaijoYmBfbq3tod/fNPR0JKLh7Ktq4uEgMC7uouDgIV9ebe0sbizsXx0b5aPi+vr6/Hx8aWhnu3t7e/v78XFxfLy8oB2c392cXxzb+7u7urq6vDw8Ozs7LOurIZ+er+7uXBmYYd/e+jn55SNiru3tcC8ury4tr66uLOvrdjY2L66ubKurL25t9/e3b65uKagncC8u8C9u7q2tLy4t7axr+np6d/e3r25uIR7d7y3tq+qqObm5by5t3VsZ6WfnL24t7q2tcG9vOvq6tvZ2b67uYd+e2pgW4eAfLu4toZ/e7axsKOem+zr6+vr6r26uLWxr+rq6YR8d4N8d4J5dbezsbm2tKein7+6uYZ9etbU1Lu2tdDNzOjo58K9vL65t3tzboF6dYJ6dbm1s46FgrOwrrOurZ2XlLu2tMG/vsfFxH93c4F5dYF6domCfn11cX51cc7KyaGbmMTBwNva2snHxd3c3IN7d4R7eL+6uL26t3ZtaXt0b7y5tr24toV+e7Ovrp+al7OvrLSwrbayr7WysKOenP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQD/ACwAAAAAMAAwAAAI/wD/NRpIsKDBgwgTKmwkUJSjhxAjSpxIsWJFUQMtatzIMWLGjiBDQvwosuTGgYlSqlzJsqXLlzAToYwJkwUBNmwIsKAJcyZPlha2/HpBFAm7ny19Ik1ZQMqSAAGWLCmwdKXSpQxeBMgUdcmWqiqvsmQRAx2MbyhUblmigavUrymLURuwzk2lmGJVulPCYItfQxZSEsjUtivVRK4eYPqhQ8eHZD0bUZpMmXIMBrZwzrMVYzKvHoWXIFExWQsmIR9SH6FQufXA1pWVIEmTJgMbJDYos0jwxYaIKZR1Dfjg4MORIx9gU36tnJIhNj1wpMH5pXnlH+vmGD/SInlz5sq/4f9QEn36N+uUG6A+3qJFH+vgYdd5Z8NG9BoW0E9GMOfIhhZOfIAAfI0wYuCBCLJwgSaXqMMCghBCuAsFMszRxy4RIjhQhhx26OGHjGwI4ogkRihiguoMcs8YD5YYoSvtsAJLFK6YWCCC7tBHAwwwaFKHiwjS4kwIq3xSjy6bQDiQJEwyeYEh4zAzwZQKNGnllVgyKQ4ynWDiyRmYXHHlkla+U8M7ysQSyzsYZOnmlc0AAAommPQySipjNnLlIBMM4qefRLwpqCRxnmKooYHkeaUC71ziqKMQDPrmEQB8wgoruOASh6JW1qGGJprwgcEd7kjqZgeldKKqLIFYkecisMb/OoUYQeQwAwux5qrrrrluIgOdKWyy60C8FmvsscguQmyyzDY7bCPHTpGHHTnggSuzVngCAinrHHDssry6A4cwgsDxRgEkJDvFEHngMQsIIaBg7ECV1Guvvc/wAccdQfhxAhj3BmxvMKiMAIIloTDRgsD20stwJXAI4kWtJ3CSwMP3lpHHDiD8QYolIWDsMMNvcEMxJz5cXC8LpORzwTZc2JuHGLOAAcINf7QiciMYN/FGDhX7cAgp9ZKQQAEJrBCBGE/UK4sYO9QMAgjr7IxxHQUEfUgMJNQLgg8m8HCBAreUUu8Ts4wQNRjITLEzInDHLfcUIHyzgiVTxE2ACCuoejP2LWLEzYUuljDxQwdyJ47IQIo3rngCCfDgN9mBO2754o1cbjkpYfs9xi2faO4446IrTsIFEXguRgmlK05663KzsE0eeXSCAuyJv4777pfrzvvvuTcyyfDEF2/88cgnr/wkAy3v/PPQDyQA9NRXP7wADC2k/fbc/xMQACH5BAUFAP8ALAYABgAkACQAAAj/AP8JHEiwIIoV48atQFGwocOHA0kY2mLL1hYadSBqhPhtC5sMGdggibGxZMFIbHDgCInEhsmGHYjx4aOgw8BzaXqsFOlSIAsRaXCIYAHR1CAaMMbBEEZC4AocOlmS/Fdni5QXL5awYfdQAQxyEyZoIzdGYJ13Udmg4/qvQNYAmQIEKPBw0AQDBmJNYHZpIAoqBt6tICqQwQu4cpdseajJwKVBgScIK8lgSdwASxQ/RDVI0+PAt0oWWJJ4yQu6Dkm8weB5UJWmG3mxwWwaiQqIKGYECZKHocknIlQSePKyuPHjxnPbCTLEN/KBWgasc7Prn6k3wIgIAnTC1PN/m5Jg/xqgY90cBGL0wLljx4uXEd/jjFr3wYGDDxTuwFm+O8ih75gkccQHBH4ggx1v5KCggqghd8YPR0QY4RxmBMHJhReC8N0VP7TgoYd9mCKCDyQeEsMr3x3QghBOtOjAJv+gYMkKPITi3HMIuEGgGwh85+OPxaEAQgwrSMDFSwcckYs9KVQD0SsicEJAAiYoAEVJKPTDBACdfJKEFQ+B4EMC3/AQgTqrlDTAHwCUggkmqWjxkAgi0HjmGM+UZAkynZQCypsPPERlBHcqkIdfnQyxw5cDhdJKl36OostDoXyjjjoXjHHLJwJBoQgxeSiKDGHrDDMNpKDE8dArt2A6hgIzEFr3zzYXiDECGH9Y0oJPnazSiSysqHLkQyjkIsYMnzh3ywJ4zAIGCJaEMJAV7WDiSRS0PIdFHiM4C620QBLUia3ekiJEuARBUcEO3g4zBboEcfGDBK2sY9NLAQEAIfkEBQUA/wAsBgAGACQAJAAACP8A/wkcSLBghwWAAC3oULChw4cDS+ghN6EiEVMQM0JcUG7QpUuDDKDSSLKgnkHANIE0gKFkQys7fPjYQWugIE16+ICM1VIgiggT3kVAAfEJJzhvkvp4IjAPn5w7R/4j8WheGhwZarh7uENNkBMn/NjZIdCUHT0YLhkQREIgjzA9bNjogYPHQ05BOHHglCOIj4EdhoiFwGXgORxy6eJA9/DQiUOHOMjJcYgkDMSK09B5CMJHgQKRT4AhuQKH4gxsvj188k0EAdAmmGqskw0HVjaP2EG0gkxdBCZWXLLgUXHFFJfIkytPbmUfEB7Dgi8f+ERE3AQe/rEmkMCEiTHZp/P/svViSYBMPVTsE/Etgu8I26b/O/QigIb7Gth/U3eh/wWpy6HxQib4aTBPBBEooKCCz8gnYCYQQmgLABfcYqGFrMjHQX0BdBgAAR6IgcqICwxx3HRtILHEikuw0cY/Voyyww6YSCffKwWYRsAr8vXoI3IdBDMDHmfYqNEmV/wghBuuQOTBM/7kMWQoLJBkxRmjDLCOEyls8tAet8ywAxgg/CEESSmUMsAHc8gggwAP5SHGmGVaEgJJsGSxAZttRvHQkGT+YQkThQxkxTqEdNLlQNA8cMQHfPrpUBd41MmEBBsIxAI+f4SwyidJSBfHDy08yiYFD3kQiqCh7LNNlf/8WgBCM6xg4oku1AjUQQstbPBoCjU91IEQ22zTgo2WINMJLLbqosNAm7ghQwp9eLlcN/ywckqzz/5IkBCFlAKKrapo4S1BLBwjLiZnDEDUuQPREsUPA1wRbEkBAQAh+QQFBQD/ACwGAAYAJAAkAAAI/wD/CRxIsOABECJEgDhQsKHDhwOnFLCTI4cfEU8gaoQIIginQ4c4yAGzsWTBAj4IFAh5ooDJhpuaXRgDYNNAEYdErOTUcqAVMW/uzLACEYU6E9+AfFOAQqAlAjoP8ST5D0oVA5eyFnn1EMA3dWPGXFC3TaAHHiIISBUBRWAeAxj06MGgKc9Ddepu3VIgVsHAA/wirCBFVKAgYXLpahL0UAGxBaj2jrlVElBcur4uEXnYCdUzyHs7lYSgSY+mS9EGLXiIwkweCJBnsChJ4s3pQQaqkIC4SVeFHZhsmkSR586bBU1fKl/OXPkmUHjweBLeXOAUdYMGXZiNosmCGTOG3P9I3rzOuAw9bChZZgHUsxFgQIABo6P6v2/zekSiYchQhCF4gPDHgH/sY18kadjwxRfYYFPDCLNYIqGErdhHTwZKZJhhDQ+AwQQT++wjwQb2mcAGDiji0AMPKDSDDDKttLJNB/apcF4aOJLDyz+bfBDMJx9QVx0UK0wwwQoZ2afkki/Rsg4/2zggpEavENADNgmUUFQ3fyADwCpnFKZRGwxIsUQmGijRxkM6/AEAK6Bg4okWJXHyy5loMMCACA9J0Awuo8ipygAlZSJFABpogAYaGTzUzDaBeqKKLvUJdEAUSQzQQDUDafBCAGgqysZDH+QiZyq6PECNQFyMUksSOjhrkQJD/5zwKaiJ8ukQCll4guoDQhQmwyc/HDGHDCkIIJA0SCwBaiY4uAARLVesIwQ1tP6DSyotfHBsCnEMREIBStggwm7NYVKstzLIEC6TBMUxwAfsykABvARxQS+7cYiJL48URBEFBVNqFBAAIfkEBQUA/wAsBgAGACQAJAAACP8A/wkcSLBgtVWoFnRCULChw4cDO9zioe6COggoIGqE2CnCrQWobimQtbFkQZHPnoVUgMpkQ1dJZlV44Gqgyjwqb41pKfAAqRjfQm2CaGXHDDwjRliyIvDUM5whx3QSyCLBCR+HDsWY8vDBEDCkLP0BsU4gihFiIITMw0IgKU4FRIggUMDSw1lgmDAJReqGXYEIVO0YAWuoQBFx5xY4lOAhiD+tJDARy6QkYsWHfIh4KCRUiMiTnZT8U4BuZk4gHlrJVSjEMGQAmG588m2xD04JoEB0JQNWrTkMTVoJ9S3GjQ4ukytfrrzaBgDb5tRkPhDFDDtB8GS00oxJM+jxDlD//2cKziAMevQEIbFBwipQo+JfGb/AgB5B+AXNILQNk6czZ2Ciy3h6DKIHEQgS8YYzwajioIM/EHhJehQWIcMxSWT4wAPUjHeLAZqEqAkfEFgxwAM/pOiEeNRZAEg0l8Sohjv/INDABhu4Edx4Uyzwxh3PcDXekES6tEkUqYRDzY4bQcHDO4Nc8ARR0NSiyw86zGGYRioYgkQP2EQyCDsPpVDLD0d8MIcMFJSUwBY4YEMDOpBc8BA0SRzhwJoyxFESDl+GOecyD2WRJZ8p+CkQCT6wgYMIpgzUw5c2CPrOQ1oIgWgK0gjkggZkvLBEJkq4IFAC8+DQQ6WRRKCaDLCmWJDCFSyeEGoAGqDBQGP/uDBOGqrasIwKEG1CQTpXSLNlAFIEkEmuDOAwkCkrKGMAD69Qp8ELz0IrbZEEncCtBtBuBu5A0rDRLRo2mHruQCSIEEkkCZCQXEAAIfkEBQUA/wAsBgAGACQAJAAACP8A/wkcSLCgqwcgQAxwVbChw4cDaVUYMmLHDiZWIGqE+MMMCEuW/oBYt7FkQTAg9jEJ+dFkw0nitq1qt2vgnz+t9rH8M7CaLAgQPiGAuGmbhGbbtl3bJLCFpZwhwZD81wFVhDFYxaB46ABZJ1CjTpWKI9DKtlYSQkroIDBXhFsLFqC69emhM3CYPGEaBavLwGRzwAFowVDgrTFx5ypY8LBTLV2p9II6UxLVYsVjUD2MMuqBLlV6r5TspADzhVUPN6374VnVAKYbUYi5pWDMhQUsIE5yc6RFg2QuN5USk2faAZfIkytP7ipKqiRaJi0naIVUjG8Y/x3AVEvVgwctqk3///eEQA4OhwqseBLn2IANR+L3GV8hiA8CIkQQ0BfowZEPAH4gw3gcnFDAgQcmkMQ6czTYYArjcZLDIRRSmEADLcigoYYCjGdGEJyEyAEHIGySwoYpXCHedCQUcMKLJyRgyj+uSHPFFdIUNh4KYCSQABhbjSfkkC6Z4sMa8xTwikseLKCGHTPk9pALGpDxywsvZOBCSRbwQc4gmugRhDsPnUCGFEsEkIkGBJR0wTgGAKMHEYLM8FAAaKqpgQZslPTOl3xgMKcXD2nwQiZraoBGBgOZksA42fAAxUB/DnJJoHq88RAnSySKBgMiCNRGGgzYkgEO76ggkDo1GBCNL4HmZjFlBnuigYYNW/4jAhq2pKFEJDSoI5AK5hhgqSZvsAMRCSIYQkMCJAwUxhZs4KDEFzS8MxAUqBTxxjNPTJfGFmlYi622RBIkQq/WYmNIBOkS5MI4OPSgBDYGiBIvQabwYGwES7oUEAAh+QQFBQD/ACwGAAYAJAAkAAAI/wD/CRxIsOAuB9tWyTBWsKHDhwM3bZPQDMC2a5sgaoQ4B1kuWKdwyYqysWTBhL16hZR1ymRDRHFSWaNWbOCeT54wnWLVqdRAVz9A/NHhCiKCQLVSJbHWoui/KKVy7uxE8h+tCkNG7NjBhNbDdMd+tBgrpI/ATT9S6fyE6YDAB0PA/PkDAsS6h6keHNnbwsmGgcao6XgQZ9LAHbNIkboBQu7DJOs+fOB7pOQsMJbogpkF4qEbJ3McTN5gduOPWZpn7fjx0FUKGXPmfJDhVGMHCSAqqP7TASIiaVfiSGNostq6faF+ZHTJvLlz5k8OrbF1iPhzgQdWLXj2ya0KDWTI/P+SYkvU9X8sLqxQd+GCGBacyEh5sWTJi0Pnm31Tp+CWf1ka/EJffUtscR4PK4yhgAJjjLGABi8EIKGEtpwHxArtZYiKD0tk4qGHBJyHzDcRqGOiOtu0kYGHGmjQg3nXQXEBDzTygMoT/5SQAA00JFDCeQJ10MwtqADQG5BIJrnRKyJgY4gJULjEwg4iJPAHChCJEkYmaGyxxTkqlOROEHAEcQIHMbzyEAGZMGALG2yk8U1JYghyxwk+HFKAJQ/N4yacaeAwTklwlHkCJ3km8FAGW7CRQaA91DBQCeoAQ8QCOApUaBA5HOqDog6JYMujOPRgAw8CqUCODTCQA48aFghulAccdnB6aGcPjQOpEu+E+c8KPYwzwSCXYJCHQBaccEetOYjgDkSm8GCAARGoKdAj55ATC7EYFDHQEyMQIMIsU1xXAwwTbHsJH94qORAPkEygDLGaPOPuQKJgMIEBxL7By70DQYFKEW88k6lJAQEAIfkEBQUA/wAsBgAGACQAJAAACP8A/wkcSLBgMS0PBjSoVLChw4cDXT0Y9eDHjxauIGqEqAXTuiMfjrSgsLFkwSQDPjgI2eKIyYZTCsxjQ4DFwAFC5qwU6VLgLhnBakVBBNECAzJSpLywxU6gmxY6WfYRuClXs1WdOnlC8PDQrxdLwr4oINBVChlzQs7h+m9OM1aY4oKK8xDNiwB4w24ZWElanCgUig10Ng3TGUygYJ15yGBJpkx5927s9MkTYlilej0sEECDBsgByG5M8ekyrk9RHvLqgcZzpjS8Sm7SBaoUK1mYDkD0kAAdjQRPXrq6ostTlIwvkytfrjyBoXMmPDAnuOkHqVBCqv1jh0MDgy0MIsX/nt6hAp4dYEA065AAzRYkbNjMizH9X6omYCwxYRLKCY4tbGQgYAZ01IfHCH9YQgopf0igBBI4RBghJPUNMQIIGGLIRAwZ9OChhzzU1wseYJRYog68aGPDija809R0LICwww6zzBIKCv88oY4vvqgTXH3/0PKDN978QAuQSCZZko6DCEOMdCZxQcgtWHxiBUTskKMEDePUQIQFJZXAgwk8XDDGDFA2xIMS4zATiwGDPFMSKSLwMMYtqCwgz0M1wDDBm4P4AkdJCZigzhgK4CnGQxPUYACcl/BRxEBPzMBJAWDYJFCh6piZaB4PqUPOIINcogkGi/5jgRp6qGHHCSaQbCAQKSZE0CminTykAiClnmoHmP88Aww3QXDiQwGhCETCBTzYekEeUEAExTN2BCHGj/8AIogdORhbgAkDsdDMAs9sgyNzcMARRLfHgqvkQHmosa6xh5Dy7kDs+DCvDya4c+9AHsxiQgx/TJFcQAA7"

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhEAAQAPfiAL+7uouEgHFoY52XlMnGxXx0b6+rqcfEw7y4t21kX3JpZMC8u4iBfXtybqynpXJpZXpybXRsZ3RrZnpxbY+IhL66uX93c5qUkcjFxIqDf2xjXrKurHtzbsG+vHlxbHFpZK+rqKKcmqGbmH93cnJqZXNrZnNqZoeAfG5lYcG+vWphXImCfn52crOurKGbmaOem4iAfXJqZqynpI6IhLu3tZmSj6Gcma2oppqTkLi0spKLiJ+ZlpCJhb25uG5lYLu3tpmTkMK+vXdvanBnYpyWk5OMiYF6drSvrYZ/e46Hg7aysHlxbXhwa4F5dbq2ta6qqLeysbWxr6Cal6umpHFoZGtiXX11caqloo6HhG1kYH94dHZuaYV+esfDwoR9eX94c7OvrrSwr4iAfJyWlMO/vpGKhsC8uraxsLGtqnFpZZCJhr+8u3BnY7Wwrr67usC9vHVsZ8K9vJaQjYuDf5uVkpWPjKSfnKikoq2pp2xkYIR8eIV9eYB5dHRrZ7GsqmxkX7Gtq8jFw42GgrOvrLy3tr+8usG9vIJ6dry4tpSNiqeioKmkoZCKh2lgW4J7d7Ktq5eRjn53c6WfnXZtaa+rqnRtaHtzb5iRjqejoaCamLKuq4R9eq+qqMK/vrm2tLSxrrOwrcC7urSwrqKdmrezsXBoY6qlo5GLiJuVk6ijoHlybaCbmJONiYV+e6ain6mlonlwbJyVk7GtrKmkopSOi3hwbJWQjZ6ZlpCIhYF6daSem66pp7u2tbizsm9mYm1lYI2Gg6OenKCbmcK/vX52cXt0b4iBfp2YlcC9u5aRjpqTkaSenI+Ihbm0s5iSkKejn6ulo3NrZ7OurW5mYZ+Zl4eBfYyFgXVtaYmCf5GKh4uEf3VtaGphXaOfnHZuaqmlo6Kem7WyrwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQDiACwAAAAAEAAQAAAInQDFCRwoLlwKgggJpoJyAEPCgZaMiVtUgcABcc1oIPwVQU8icTQIiCtEaAEAglViQGBA0AwyAD0QDlGQEAACgioSPByoaYM4bhoECNgJ7UaLDSioPHiwE9MTAwbESZCwU+AUGQRLREjoLBPCUhFgFSCIq46IFwQreSgwQlwkLuJ0XBggBWEBFuK0OMrAQ9wlOlUPwQhAoSpBBgEeBgQAIfkEBQUA4gAsAAAAABAAEAAACJwAxQkcKE7DNYIICTb640FMwoFVNIhLIABCBnHdwCDUkOeDAHFDIIjbYaADAYK+xD34OPAVAAIYEMKRkBAmQSoRHg4EYEZciQgTPOjsRSNIByEcChTQCaUCAADiRljQKfAHAoIWDiVchAahFSMnAhAUpmhDG4KOGASgII6ZHHEvHBh4hDBAEnGMWBEJIe7KDapFcAywQZXghQEPAwIAIfkEBQUA4gAsAAAAABAAEAAACJwAxQkcKO4PCoIICaJAQUVAwoHRIogjIeGBQxUaEG7Z4oGJuD4PxCXQEKMBQQhWCkwg6ONDgz0I+YxI2IABQRZNHg4McUVcEyMwTuh0IKrCAiQZAgTQ+QYDAQLiZlDQKfDAAYJqiiRUUgEhMB1ABhCkdKYDGYJFLgwQIW4VJnFHEAAwhHCAFHEhJD05Is5JD6p2ZBhoQZWgAwMPAwIAIfkEBQUA4gAsAAAAABAAEAAACJ0AxQkcKM6bEIIICS6pxWFCwoG5jIhjYaHAEnHT2CDc5IUBEnFfCogrIUCcAoIZBAVgQJCECQUfEJaZkVBByYFJdDwcmMCHuGxFgNTYqUKDAAWQiAwYsHPShAYNxIlwsVMgljkEbdhJaGAWwlu6poAg+GPNAiUEJTkAsUEcJSjiFgQi0AkhiEfiBoWpEERcFwxVoyACkKIqQQQAHgYEACH5BAUFAOIALAAAAAAQABAAAAidAMUJHCiOCxKCCAmuqJaBQcKBp3SIo0AhAAxxljggtFXnwiVxPAKI01LMSgGCqHYMuEDQArECEBC+EJGwwASC1F48HFiChLhRy2RM2YmCjQQJd/AYMLAzS5oHD8RtaLFToAABBDVFSdgoAcInYH4AINgqgoIhBMMgANBBHKE34mowgGACIQBD4gotwEBDXKI9VeMcIFChKkEMBB4GBAAh+QQFBQDiACwAAAAAEAAQAAAImwDFCRwoLhkkgggJXgBC5ELCgeCCictkYwAOcdoCIHSlyMEVcSEGiGNkTZDGgQ78GHBAkEeSACsQttmQMAADgpyOPBxowYI4QKAQ/NipioOFETl6AACwUwiHAgXEdQiyU6CHCQQBxEmYhQRCXqEOECCoIo8EOAQXiF0gLsA2cQkEPEhIYJi4HSs8DBEn4ENVHBkgCKhKUAyEhwEBACH5BAUFAOIALAAAAAAQABAAAAicAMUJHCju2R2CCAma+obHQcKBsqSJQ9PCgAxxscYg/HQGgRNxRwyIC3FsxwCCnhYAQEDQhZQBdBCS6ZBwwAWCThY8HKiGhzgEbg4c2LkiAIUZKQ4QILCTS4YAAcQtqLBT4AkYBEPgSMiEBUJaWE40IEhiywg+BLHpaaBAXJUs4iJMKOCVYAMT4hIkSNNHHBMIVX0IeCChKsHBDwMCACH5BAUFAOIALAAAAAAQABAAAAibAMUJHCguSg6CCAmSytEDQcKBCNyIq5ACACJxDm4gzLHmQBdxQQCIG7TLDwiCLVIQCERwAyAQGgkqWZAQhAOCFGo8HGjDhbhIRuZg2alsjAsRkyY0aLBTDpEBA8QpELBTYA0gBBP4SHiCAkIVCQQoIKjFy4wyWT8okCDugxBxTRgESIJwrLgSlTh8EYdkRdUISwpYqEpwQoGHAQEAOw=="

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAABQCAYAAAAKlxWDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA35JREFUeNrsWF1IVEEUPu7amhKUmqUUkhEYYn9PamgbROKTEERB1HNP0pMvJUVhZQhCEEQPQiAIkiQIQShEZmg99SdLgiRJpbGmGIu/aZ2zzJXrvWf2zty7PgTzwQd3Z86Z796z58wMJ+PruXxQwCHkGeRpZDbyqBh/j1xA9iN7kJ+8FsrwECSRu8hSUMMosgnZLTMIScaLkUPIpxpiIGyfCN9iVcEo8h2yCvyjSqwR9RIkgz5kHgRHnlhrg2im7blEhCPCeW89fBJyKuohsv8IRPaV46uGYfnLhyTn3/bC4seXnFtErFmBHHcmzSCy2umRWVgC+ZfvQ1bZ8ZSfsxQbgl+PrsCfqXFu+jWyxh7Ss5xY1sFKKLzd5ymWtEWbpC36MKgWGuuCzdyXFTR2QGhbrvKfRrbkQ74Mmi3BKJf6FEYdMbso+UpKJkpJU+dKkPIaNoyrM5Mw23Edlj6/WQ957qVbEM4rcoWX1lgcGXQuURfi6o2y0YmVH2Mw2XgC5od6ksJEeqaxlW+joLIGaZFgGVcCTsx13YG1xKxrnMZoTmUN0iLB7c7R8M49LktJnSWxwMxxa5AWu5f+XV6EzQIJznHJwSWSDNlM+Fanv3OmcyQY43YNVyzOX2XLhMZoTvEviJHgsHOU9kYntuwthaLWV5BTWQ/hHbuSpGcaozmVNUiL9lIqfNfr7L7Rq7SlyfbVnzfZsjhFXzggTuoNoI14bf63thj5kK/kNvDCytIm5yzt+vF7F9jak4qhbbz1ouzEaLJv3t3iCNkYGtzCpq7Vrm9lKcNo2TIJJ/Kk23keHhB3kQLPAxhJUDiACXEkJcMYd2uzrhiRNNX5MrJW5Al7pxkQBjNpEJtxislubWRwjKtPDQyLNQZU76UTIu4NPsQahO+EzkXYwgNu60uBmPAB3Zu3HS0agp62KoJdsvAwf0NXOgQptdsU7NqEbWBBQrso4FQl0K56AKsggXzokVyJdAqmWjThlZl+BeOSsD32CLdvQSsxVu1XF2Sr7iVKB5T6nbbfnYol41vQWdwtus6ZPgRp+3pme950QV9fpito+jSmT2P6NKZP479PE9Lp06jC6tMwUO/T6CJwn0YXgfs0uvj/+jS6CNyn0UXgPo0uZH0aEnzueruRwUBfSb5Mr5TQb/o0pk9j+jSmT2P6NKZPY/o0pk9j+jQ+8E+AAQDpbNHEyW7DTAAAAABJRU5ErkJggg=="

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAACgCAYAAABZs68wAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACBhJREFUeNrsXGuIVVUUXt7RedidfGbRyFgwpInKoOVo2ksxsjEjfyQlJkYkiiDkj7LpQaU5EBmRKFlRKk74p3ByakDGnjpmIZIyagnmoEaO+WgmnRmdsbXu7GPH8d5z1z5nP87U/mCh6NmP76x99lpr78vX6+hjg0ADxqNNRBuJNhotF60ULUf8fwfaXrR2tH1oDWj1aLtVT6S3on5o4uVoc9GmofVjPD9O/H2i79/PoW1D24hWI15EJPSK6MGBaM+iPYN2g+KX34S2Dm0V2umwnSRCtitAW452FK1CAzkQfVaIMZaLMY0QnIl2UAyeBP1IirEOirG1EaQ3+C7aFrRiMI9iMfYaGW9yCd6EthNtMdjHQjGXIlUES9B+ENt8XFAqSJZEJVgiOiqG+KGYQzKIIC2BOk07pMqdti5ouWYK9JR5bI3iuURyABSUToG82ydB7i2j8B9yuv6k9OW3/QCdHak/2w7sgAt7t0Nny5konqS5lonMiBXo14iPWRp9x5dDctp8yB9zn1S71p+/hpZtH8H53TVhia5FW8QhWC7eiBRyS8bCgHkrIO+2OyOtubZffoQz6yug/fCeMM1niBQvI8GkCKhF/LWYAwPmvgaFDy1Q+nE1f/EenNn4cmopS+A42gi0lkybTIUMuUTf62HIc1XKyRGoT+q7V/51Ms2KBIe0Hhwo8r4kl9yNr38JfYYO17pNXjx2CP54aTp0nv+L24S8N8xL0P0eXMLOLXFZDl7yvnZyBBqDxqIxJXLXJd2XaK5MGkbfXH7pVGPBjsaiMSWwWHC6QrBcLNGsyBsxQcs3x/kmaWyJOrXcT/AJbsv+j79oLW2RHHuul8nQ4p7CDeISb7FrkzhxGFrqNkBbw46uDIbWDmY0eSMnQXLqk9Dn5hJ2XzQ2zYGZDNxL3GgXHS+qhaygXVMmkDdvXQNnN78Bl9tb05+X5OZD/9kvQOGMRVKJAO2qTJTREp3MOp0aPJRN7vKldji5cnYqUGcil3oO/4+eoWepDcuLOAeaCxOTiSBrr88fO439ls9uehVa99bx81B89uwny/m7Kn8uw9kE84bzvr2LjQ3QXPtBqNSMgrrKuXgEb+UGXFYa8dUm2fyxC9gm1VbhXKiUIoL9eN9gEXu5hQW3LXcuxI1NkJv0XjrZGJpgx+nfQeVcKG1LQIxwubNDeZ8Jf+0UOHjr36wOc/jLJ20oUjkX4pYA5rn/pVPHWT0WREjCuccc3Ll4BI+wOj3xK2/RY/olUdpcVYIl75/DrhGZOEIEWU+3HtjJ28KLR0LhA/Plq4UHn061ZaVrh3Zxuz3EJ7hnGz/rl6wX6dn+c17hhxP+XFIE63nr/lgq0WVt471zYciyzakilRLqjM/h/9Ez9Cy14SbbNBcm6qmaoA/mT048pFJl8NL14cql/d9eXS6Nuke6XCKcemset1yi2+JBVA9S8NmO9mi2FtRx28FdUjUhEZA8bgj0nsTB8DfEzQv0G9mVgkTWrxpUpUigyn9kUcONh+TBMNVCVNCYNDYTxKXaT5CqzdXc1nS0TncJpkBj0ZgSoHuKC36CIAiy0jYqbU69/VRqA9ENGoPGkijBiMM7/lzUQ5OMF+mkmc5GdHqS+pY81fYc1XQlFCm5fJm3IpWJqP7mUssy4uVLuusz+qnGFtkJUeigcEDXaFFA12Z0ECWxofgxC+2zq5KJDBegK9GeDzNC3wkzobB8ofQ9IcW45pq1cH5Xddh3U4m27JpsKQNBym4+hRA/vPHXdgV3PAh9ho3CzGV0hivsfXDx6H648FOtTPqVDtXCex1cgiBSt++g69eCcQb9WvFukZqlreiDcrlZ/h0phmgSczwXdGQRBAp0ZeItxdFzZWKOEJYgiIr/LrTaGJGrFXPKehrBPVWjuDJd7FS2USnmwsq6ZI8NaRt+BLp+gmwaDWLsZVJHPSG35DFoCwxtQE1irDFehSAVrkIOSvFmncjYN2gmuFSmXlXhQT82ozVqJNcoxgBbBKmOXKWR4CpI8wM7kwQJH2r6Fk+LvsE2wRZRQasGvwDXTFDZZLq9tNUqOlJFsEnFcvLhY1XLPqF4Q1BxwUd9vKlqUioJ0pZepaCfKpWhR/UNb2VM+tBGkPLFmgjta1TnuTru6Cvj4j1dBL8XJov6kO2ME4SQu6CWWlMXwWrJb6khTClkk6CsR7SdFOgkyC2lIpdEtghyS6nIJZEtgpxSSnUOa5xgtlJqreIqxDjBoFJKWUlkm2CmZaisJLJNMF0ppbQkigPB7qWU0pIoDgS7B3NjVwC9DRL0l1IN/0WCRj2nm6DTkwGnJ+P0ZLQRdHoymuD0ZMISdHoyluD0ZIICvdOTyQSnJ5MFTk8mGE5PxunJeMvS6ckohNOTSV+n/j/0ZBKgWU9GJTw9GSZSejIJcTbCWp6FD9uvliTmQJzGadGT0erFOOjJaN9VberJGPGiTT0ZE7CqJ2MCVvVkTKDH6snogHI9GROwqidjAlb1ZEzAqp6MCVjXk9EN63oyWr0nqSdDBOna+Bzn6ebPV1snKDEH4rSbCHp6Mlnh6cnY9J7Tk/kXTk8mI5yejMqg7vRkroHTk3F6MkFwejLg9GRk4fRkguD0ZCzB6cnIEvTg9GQ0bSROT0alB/1wejIR4fRkTBB0ejIhX5rTkzFJ0NsQnJ4MA05PxiZBpydj0nu6CDo9GVPe00nQ6cmY8J5ugk5PRlVJZIsgp5RyejJxJxhUSjk9mZ5CMF0p5fRkehrB7sHc6cn0RIJGPefhHwEGAL8My8JXmwt5AAAAAElFTkSuQmCC"

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhAQC0ALMMAN/f34yMjNTU1JGRkcPDw9ra2peXl7q6urGxsaioqJ+fn8zMzAAAAAAAAAAAAAAAACH5BAEAAAwALAAAAAABALQAAAQvEBSxyEFJmcG678FgKAlyEItQSJSFadwnz3RNh2N5pgV9ZbUcwib7KYjIpExIiwAAOw=="

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhtAABALMMAN/f34yMjNTU1JGRkcPDw9ra2peXl7q6urGxsaioqJ+fn8zMzAAAAAAAAAAAAAAAACH5BAEAAAwALAAAAAC0AAEAAAQvEBSxyEFJmcG678FgKAlyEItQSJSFadwnz3RNh2N5pgV9ZbUcwib7KYjIpExIiwAAOw=="

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "48c19f3f710f19c41d286fe7a1c6c44c.png";

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAAQCAYAAABnaabpAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AsbCRQv005G+AAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAYZSURBVHjarZzbUiMxDESlgeT/vxeyaB8WitmJpT5toIoiJHOxdWm12p5kvUTFPSJeI+J2+n1tXl///zr3egw59/zeffjMPO/jiHiP799H8/p943113CMi3sA9V9edzntEAsd0Rvl673Zy1r251h0YfXUcPe9y/CN9xzyE4aiRV8Z+Ox33Z3H8dK/Pz44PZqE78OYNeOkmvH0zvNTd9yVq0wnUiU42rBzWOfhtPP+IjIiKfz9ff88/FRH5+fv1k6e/dXqdzbnRnHs+ZhrD6vrd8d35p4+7aa5uNw3nOqxsrkOvuzJxPY08h6uvZnM28GSc1chS3EdZsAuixXVX/iTDJrGSIv5W5l3FpMqT4a0U/09WzWFq3fSLDxPnSH+1akaVQwZMliAjX+VDDeC1ntHx3zE5WDM2vdWBYA2RcfWCytsAmNACS4/d1QBdd6sS1+rcpnC/cOir7HeBs0MChUwpkKxmrA5RNGmuKMAqYQbnviezpwDC6ym0zKQBULkZGb05qomPyaAFRlUwRhU45VDt+teHHGsN1+6Ixi5Ly+H+Be0JD6FQMk2lLsNyeNbq/0JjpUHl1P2CpWICx4gtb1A6c43F2rsdpv9u4b0crxqmWsRPgekrbtVhuEqzlJxmt7CWGbsT+Kk4zSFLo2GAU76kYGS7RIPOb+qaOlJRcyvgsK+CZDcFA0wDTlTt0GfuIEEKnYE4NAGgDqWCxq6jBNBh02lN8bsIrASFkDaJqqtI2PgpHufVJ8fwneYwAWWB9jIAKGYbZAdidzSfSuSnkgyIlGWIGWV0L2XpcRykFISUuH5K4ytqXEG55fOxBOJTNHqGs1Qhzc3Ll5Bapq5GiWSp9T9ainIo2gXwV5XDVazx1FTUOeEdFZNz7k318H52h9Q2HbBXpSsNuWmaS/Eq3A2TsMJVYLmC9DQFAx4a52TDvojC6bStJdoNAt2lHaXYVjUAlKCiVdPR+LT7+Tq5Zn81eKaglkcVMirrKJCcU7Dg7HZLwVTx1GJJAXB9vsaxJeXQftLN9hI6oGICqVtVdy01DXc50JJmfel5QBnpoQKKVsNVKjkWOp2jJKIC0g8R03aYZpgmMjhEAkXIAcE0oGevFKYoas4i3S5NIFZLADApNMBsAsy18k9LV8HPm/dUIJGaUcHJeccQyVYa/X4CcOpWogq2ISRwqWJa7DrZAFpX+FxdWUkqtOUluVt78iGJKSLr73AYChuaBrvl3xkV0QTpHqW6aIATuBNt+zfKS22cR3VEQ7WoZvoVbJG/q2OkwnsLnKoRJzCcv+Q8l8MUA5kUUsk01WmvUwqKP+22KGHK1GFN3qMF2tlB5LDExFlEN+QQUArgmITnKWZKtsG41e+XAKrtO8WKbxjOJbuRdoOJitFqISYxC1PQTPnCim6VKB2TdO6sqgnZkfi+0weVc9R1ExBgY7O2A0g5YD5dyCvocbZZRbWKip47IlQtqo7bcmt4P0ZAr/CVfjK2hDpiDWgBuLvaPhBmupucpnVdlwj7SxXXWThLNRn9ZksllLkQHz4olvB3GUBF83WHIqWu/7QMuGldgi9MEk0E26nAaLIq2GVA/0qIUj1ZRq/6r3n1sbRQBVdiJ+Cm3iZCmvGUShmMTC10lGhByMpwl3cTzj93WzWIYj/daR5DCnUi3UTBElpRSEoE8FZD21meDyMIAP2iRTNBOsQgi5I4nSQZso6a6MidfXNONSJ9E10z/z7ukKBEt5SvgJouXqidGiW8eekVnJ03VIZ164Fb6bW23+0Sm2r75NSfbYHVFoOfFcBPMixKyRXpiA3zXsZcACfpGj59QIs+OKYW5Tydm8gcNWRUk8DyXBqnWis7bIamWgPF/soaX89kO0mhZlk0YLvQ5YsK4IIN4m44adrt3lUZmLY6ZH/TwvmOdKhi8ad7bR0tYojxHcWo49ZuHO3IKOz55ATZoZKdPtI2tQQOUGTT1ualBU4D2ChDVV954tEf/zFDcNtpgzN9ejYBJJEVZPLIHg9lsiixIyBTJJi+FePyfhlGUN8u5D4epxQERf8NBxWwHt3lQ2uAox5oaKPfc+S2k2Q25GsgcigpfbX7Cx862FOE3a/fAAAAAElFTkSuQmCC"

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAACXBIWXMAABcSAAAXOQER7y87AAAAB3RJTUUH3AsbChsyNZaItwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAABFSURBVEjHY0xLS2PABoyNjbGKnz17liT1TAw0BqMWjFpAOWChVnrHpX40DkYtGAr5gFrpfbQ+GLVgtD4YrQ9GLRjSFgAAbfUXEVeGAdQAAAAASUVORK5CYII="

/***/ }),
/* 32 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
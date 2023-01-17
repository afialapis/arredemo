(function () {
	'use strict';

	function _mergeNamespaces(n, m) {
		m.forEach(function (e) {
			e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
				if (k !== 'default' && !(k in n)) {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			});
		});
		return Object.freeze(n);
	}

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var react = {exports: {}};

	var react_production_min = {};

	/**
	 * @license React
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var l$1=Symbol.for("react.element"),n$1=Symbol.for("react.portal"),p$2=Symbol.for("react.fragment"),q$1=Symbol.for("react.strict_mode"),r$1=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u$1=Symbol.for("react.context"),v$2=Symbol.for("react.forward_ref"),w$1=Symbol.for("react.suspense"),x$1=Symbol.for("react.memo"),y$1=Symbol.for("react.lazy"),z$2=Symbol.iterator;function A$2(a){if(null===a||"object"!==typeof a)return null;a=z$2&&a[z$2]||a["@@iterator"];return "function"===typeof a?a:null}
	var B$2={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$2=Object.assign,D$2={};function E$2(a,b,e){this.props=a;this.context=b;this.refs=D$2;this.updater=e||B$2;}E$2.prototype.isReactComponent={};
	E$2.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E$2.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F$1(){}F$1.prototype=E$2.prototype;function G$2(a,b,e){this.props=a;this.context=b;this.refs=D$2;this.updater=e||B$2;}var H$2=G$2.prototype=new F$1;
	H$2.constructor=G$2;C$2(H$2,E$2.prototype);H$2.isPureReactComponent=!0;var I$2=Array.isArray,J$1=Object.prototype.hasOwnProperty,K$2={current:null},L$2={key:!0,ref:!0,__self:!0,__source:!0};
	function M$2(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J$1.call(b,d)&&!L$2.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l$1,type:a,key:k,ref:h,props:c,_owner:K$2.current}}
	function N$2(a,b){return {$$typeof:l$1,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O$2(a){return "object"===typeof a&&null!==a&&a.$$typeof===l$1}function escape$1(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P$2=/\/+/g;function Q$2(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape$1(""+a.key):b.toString(36)}
	function R$2(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l$1:case n$1:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q$2(h,0):d,I$2(c)?(e="",null!=a&&(e=a.replace(P$2,"$&/")+"/"),R$2(c,b,e,"",function(a){return a})):null!=c&&(O$2(c)&&(c=N$2(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P$2,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I$2(a))for(var g=0;g<a.length;g++){k=
	a[g];var f=d+Q$2(k,g);h+=R$2(k,b,e,f,c);}else if(f=A$2(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q$2(k,g++),h+=R$2(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
	function S$2(a,b,e){if(null==a)return a;var d=[],c=0;R$2(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T$2(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
	var U$2={current:null},V$2={transition:null},W$2={ReactCurrentDispatcher:U$2,ReactCurrentBatchConfig:V$2,ReactCurrentOwner:K$2};react_production_min.Children={map:S$2,forEach:function(a,b,e){S$2(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S$2(a,function(){b++;});return b},toArray:function(a){return S$2(a,function(a){return a})||[]},only:function(a){if(!O$2(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E$2;react_production_min.Fragment=p$2;
	react_production_min.Profiler=r$1;react_production_min.PureComponent=G$2;react_production_min.StrictMode=q$1;react_production_min.Suspense=w$1;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$2;
	react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C$2({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K$2.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J$1.call(b,f)&&!L$2.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
	for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l$1,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u$1,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M$2;react_production_min.createFactory=function(a){var b=M$2.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
	react_production_min.forwardRef=function(a){return {$$typeof:v$2,render:a}};react_production_min.isValidElement=O$2;react_production_min.lazy=function(a){return {$$typeof:y$1,_payload:{_status:-1,_result:a},_init:T$2}};react_production_min.memo=function(a,b){return {$$typeof:x$1,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V$2.transition;V$2.transition={};try{a();}finally{V$2.transition=b;}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
	react_production_min.useCallback=function(a,b){return U$2.current.useCallback(a,b)};react_production_min.useContext=function(a){return U$2.current.useContext(a)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U$2.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U$2.current.useEffect(a,b)};react_production_min.useId=function(){return U$2.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U$2.current.useImperativeHandle(a,b,e)};
	react_production_min.useInsertionEffect=function(a,b){return U$2.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U$2.current.useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return U$2.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U$2.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U$2.current.useRef(a)};react_production_min.useState=function(a){return U$2.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U$2.current.useSyncExternalStore(a,b,e)};
	react_production_min.useTransition=function(){return U$2.current.useTransition()};react_production_min.version="18.2.0";

	(function (module) {

		{
		  module.exports = react_production_min;
		}
	} (react));

	var React = /*@__PURE__*/getDefaultExportFromCjs(react.exports);

	var React$1 = /*#__PURE__*/_mergeNamespaces({
		__proto__: null,
		'default': React
	}, [react.exports]);

	var reactDom = {exports: {}};

	var reactDom_production_min = {};

	var scheduler = {exports: {}};

	var scheduler_production_min = {};

	/**
	 * @license React
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	(function (exports) {
	function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
		function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
		"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t);}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else {var b=h(t);null!==b&&K(H,b.startTime-a);}}
		function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b);}else k(r);v=h(r);}if(null!==v)var w=!0;else {var m=h(t);null!==m&&K(H,m.startTime-b);w=!1;}return w}finally{v=null,y=c,z=!1;}}var N=!1,O=null,L=-1,P=5,Q=-1;
		function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a);}finally{b?S():(N=!1,O=null);}}else N=!1;}var S;if("function"===typeof F)S=function(){F(R);};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null);};}else S=function(){D(R,0);};function I(a){O=a;N||(N=!0,S());}function K(a,b){L=D(function(){a(exports.unstable_now());},b);}
		exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J));};
		exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5;};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y;}var c=y;y=b;try{return a()}finally{y=c;}};exports.unstable_pauseExecution=function(){};
		exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=y;y=a;try{return b()}finally{y=c;}};
		exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
		exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c;}}};
	} (scheduler_production_min));

	(function (module) {

		{
		  module.exports = scheduler_production_min;
		}
	} (scheduler));

	/**
	 * @license React
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var aa=react.exports,ca=scheduler.exports;function p$1(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b);}
	function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a]);}
	var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
	{},ma={};function oa(a){if(ja.call(ma,a))return !0;if(ja.call(la,a))return !1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return !1}function pa(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
	function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function v$1(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var z$1={};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z$1[a]=new v$1(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z$1[b]=new v$1(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z$1[a]=new v$1(a,2,!1,a.toLowerCase(),null,!1,!1);});
	["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z$1[a]=new v$1(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z$1[a]=new v$1(a,3,!1,a.toLowerCase(),null,!1,!1);});
	["checked","multiple","muted","selected"].forEach(function(a){z$1[a]=new v$1(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){z$1[a]=new v$1(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){z$1[a]=new v$1(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){z$1[a]=new v$1(a,5,!1,a.toLowerCase(),null,!1,!1);});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
	sa);z$1[b]=new v$1(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z$1[b]=new v$1(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z$1[b]=new v$1(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){z$1[a]=new v$1(a,1,!1,a.toLowerCase(),null,!1,!1);});
	z$1.xlinkHref=new v$1("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z$1[a]=new v$1(a,1,!1,a.toLowerCase(),null,!0,!0);});
	function ta(a,b,c,d){var e=z$1.hasOwnProperty(b)?z$1[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)));}
	var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");var Ia=Symbol.for("react.offscreen");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return "function"===typeof a?a:null}var A$1=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||"";}return "\n"+La+a}var Na=!1;
	function Oa(a,b){if(!a||Na)return "";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(l){var d=l;}Reflect.construct(a,[],b);}else {try{b.call();}catch(l){d=l;}a.call(b.prototype);}else {try{throw Error();}catch(l){d=l;}a();}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
	f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Ma(a):""}
	function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return ""}}
	function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return "Fragment";case wa:return "Portal";case Aa:return "Profiler";case za:return "StrictMode";case Ea:return "Suspense";case Fa:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return (a.displayName||"Context")+".Consumer";case Ba:return (a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
	b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
	function Ra(a){var b=a.type;switch(a.tag){case 24:return "Cache";case 9:return (b.displayName||"Context")+".Consumer";case 10:return (b._context.displayName||"Context")+".Provider";case 18:return "DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return "Fragment";case 5:return b;case 4:return "Portal";case 3:return "Root";case 6:return "Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return "Offscreen";
	case 12:return "Profiler";case 21:return "Scope";case 13:return "Suspense";case 19:return "SuspenseList";case 25:return "TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return ""}}
	function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
	function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
	null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
	function Ya(a,b){var c=b.checked;return A$1({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1);}
	function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
	function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
	function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}var eb=Array.isArray;
	function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
	function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p$1(91));return A$1({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p$1(92));if(eb(c)){if(1<c.length)throw Error(p$1(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
	function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}function kb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}
	function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
	var mb,nb=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else {mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
	function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
	var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
	zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a];});});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
	function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var tb=A$1({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
	function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p$1(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p$1(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p$1(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p$1(62));}}
	function vb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
	function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p$1(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb();}}
	function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==
	typeof c)throw Error(p$1(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0;}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb);}catch(a){Lb=!1;}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a;}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments);}
	function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null;}else throw Error(p$1(198));Qb||(Qb=!0,Rb=l);}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p$1(188));}
	function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p$1(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling;}throw Error(p$1(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
	c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(p$1(189));}}if(c.alternate!==d)throw Error(p$1(190));}if(3!==c.tag)throw Error(p$1(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling;}return null}
	var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B$1=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128));}catch(b){}}
	var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
	function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
	default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)));}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
	function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return -1;case 134217728:case 268435456:case 536870912:case 1073741824:return -1;default:return -1}}
	function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b);}else k<=b&&(a.expiredLanes|=h);f&=~h;}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
	function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c;}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f;}}
	function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e;}}var C$1=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId);}}
	function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
	function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return !1}
	function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c);});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
	function Xc(a){if(null!==a.blockedOn)return !1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null;}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift();}return !0}function Zc(a,b,c){Xc(a)&&c.delete(b);}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc);}
	function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)));}
	function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift();}var cd=ua.ReactCurrentBatchConfig,dd=!0;
	function ed(a,b,c,d){var e=C$1,f=cd.transition;cd.transition=null;try{C$1=1,fd(a,b,c,d);}finally{C$1=e,cd.transition=f;}}function gd(a,b,c,d){var e=C$1,f=cd.transition;cd.transition=null;try{C$1=4,fd(a,b,c,d);}finally{C$1=e,cd.transition=f;}}
	function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f;}null!==e&&d.stopPropagation();}else hd(a,b,d,null,c);}}var id=null;
	function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null;}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null;}else b!==a&&(a=null);id=a;return null}
	function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
	case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
	function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return !0}function qd(){return !1}
	function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A$1(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
	(a.returnValue=!1),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b}
	var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A$1({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A$1({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
	a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return "movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A$1({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A$1({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A$1({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A$1({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A$1({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
	Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
	119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
	var Qd=A$1({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
	a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A$1({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A$1({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A$1({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A$1({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
	deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
	function ge(a,b){switch(a){case "keyup":return -1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return !0;default:return !1}}function he(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
	function ke(a,b){if(ie)return "compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
	var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe=null,qe=null;function re(a){se(a,0);}function te(a){var b=ue(a);if(Wa(b))return a}
	function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput;}xe=ye;}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode);}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null);}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b);}}
	function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae();}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
	function Ie(a,b){if(He(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return !1}return !0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
	function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Je(c);}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
	function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
	function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
	d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)));}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top;}}
	var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
	function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)));}
	function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
	ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function ff(a,b){df.set(a,b);fa(b,[a]);}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf);}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
	ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
	function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null;}
	function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
	function D$1(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d));}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b);}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a));});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b));}}
	function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd;}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1);}
	function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Jb(function(){var d=f,e=xb(c),g=[];
	a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
	Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td;}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
	w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return;}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
	n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null;}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
	vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x);}t=null;}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0);}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else {na=De;var xa=Ce;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
	xa.controlled&&"number"===h.type&&cb(h,"number",h.value);}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e);}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
	break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0;}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
	0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a);}se(g,b);});}function tf(a,b,c){return {instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return;}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
	function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return ("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p$1(425));}function Bf(){}
	var Cf=null,Df=null;function Ef(a,b){return "textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
	var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;});}
	function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--;}else "$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e;}while(c);bd(b);}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
	function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
	function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[Of]||a[uf];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p$1(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return {current:a}}
	function E$1(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--);}function G$1(a,b){Tf++;Sf[Tf]=a.current;a.current=b;}var Vf={},H$1=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
	function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E$1(Wf);E$1(H$1);}function ag(a,b,c){if(H$1.current!==Vf)throw Error(p$1(168));G$1(H$1,b);G$1(Wf,c);}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p$1(108,Ra(a)||"Unknown",e));return A$1({},c,d)}
	function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H$1.current;G$1(H$1,a);G$1(Wf,Wf.current);return !0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p$1(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E$1(Wf),E$1(H$1),G$1(H$1,a)):E$1(Wf);G$1(Wf,c);}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a);}function ig(a){fg=!0;hg(a);}
	function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C$1;try{var c=eg;for(C$1=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1;}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C$1=b,gg=!1;}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b;}
	function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a;}else rg=1<<f|c<<e|d,sg=a;}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0));}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null;}var xg=null,yg=null,I$1=!1,zg=null;
	function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c);}
	function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
	null,!0):!1;default:return !1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I$1){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p$1(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I$1=!1,xg=a);}}else {if(Dg(a))throw Error(p$1(418));a.flags=a.flags&-4097|2;I$1=!1;xg=a;}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a;}
	function Gg(a){if(a!==xg)return !1;if(!I$1)return Fg(a),I$1=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p$1(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling);}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p$1(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}yg=
	null;}}else yg=xg?Lf(a.stateNode.nextSibling):null;return !0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling);}function Ig(){yg=xg=null;I$1=!1;}function Jg(a){null===zg?zg=[a]:zg.push(a);}var Kg=ua.ReactCurrentBatchConfig;function Lg(a,b){if(a&&a.defaultProps){b=A$1({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var Mg=Uf(null),Ng=null,Og=null,Pg=null;function Qg(){Pg=Og=Ng=null;}function Rg(a){var b=Mg.current;E$1(Mg);a._currentValue=b;}
	function Sg(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return;}}function Tg(a,b){Ng=a;Pg=Og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(Ug=!0),a.firstContext=null);}
	function Vg(a){var b=a._currentValue;if(Pg!==a)if(a={context:a,memoizedValue:b,next:null},null===Og){if(null===Ng)throw Error(p$1(308));Og=a;Ng.dependencies={lanes:0,firstContext:a};}else Og=Og.next=a;return b}var Wg=null;function Xg(a){null===Wg?Wg=[a]:Wg.push(a);}function Yg(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,Xg(b)):(c.next=e.next,e.next=c);b.interleaved=c;return Zg(a,d)}
	function Zg(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var $g=!1;function ah(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null};}
	function bh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function ch(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
	function dh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K$1&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return Zg(a,c)}e=d.interleaved;null===e?(b.next=b,Xg(d)):(b.next=e.next,e.next=b);d.interleaved=b;return Zg(a,c)}function eh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
	function fh(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
	b;c.lastBaseUpdate=b;}
	function gh(a,b,c,d){var e=a.updateQueue;$g=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k));}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
	next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A$1({},q,r);break a;case 2:$g=!0;}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h));}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
	h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null;}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);hh|=g;a.lanes=g;a.memoizedState=q;}}
	function ih(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p$1(191,e));e.call(d);}}}var jh=(new aa.Component).refs;function kh(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A$1({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
	var nh={isMounted:function(a){return (a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=L$1(),e=lh(a),f=ch(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e));},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=L$1(),e=lh(a),f=ch(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e));},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=L$1(),d=
	lh(a),e=ch(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=dh(a,e,d);null!==b&&(mh(b,a,d,c),eh(b,a,d));}};function oh(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
	function ph(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=Vg(f):(e=Zf(b)?Xf:H$1.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=nh;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
	function qh(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&nh.enqueueReplaceState(b,b.state,null);}
	function rh(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jh;ah(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=Vg(f):(f=Zf(b)?Xf:H$1.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(kh(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
	"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&nh.enqueueReplaceState(e,e.state,null),gh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308);}
	function sh(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p$1(309));var d=c.stateNode;}if(!d)throw Error(p$1(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;b===jh&&(b=e.refs={});null===a?delete b[f]:b[f]=a;};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p$1(284));if(!c._owner)throw Error(p$1(290,a));}return a}
	function th(a,b){a=Object.prototype.toString.call(b);throw Error(p$1(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function uh(a){var b=a._init;return b(a._payload)}
	function vh(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c);}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=wh(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
	null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=xh(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&uh(f)===b.type))return d=e(b,c.props),d.ref=sh(a,b,c),d.return=a,d;d=yh(c.type,c.key,c.props,null,a.mode,d);d.ref=sh(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
	b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=zh(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ah(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=xh(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=yh(b.type,b.key,b.props,null,a.mode,c),
	c.ref=sh(a,null,b),c.return=a,c;case wa:return b=zh(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Ah(b,a.mode,c,null),b.return=a,b;th(a,b);}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
	b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);th(a,c);}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);th(b,d);}return null}
	function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x;}if(w===h.length)return c(e,u),I$1&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I$1&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
	x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I$1&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p$1(150));h=l.call(h);if(null==h)throw Error(p$1(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x;}if(n.done)return c(e,
	m),I$1&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I$1&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I$1&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
	f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&uh(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=sh(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling;}f.type===ya?(d=Ah(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=yh(f.type,f.key,f.props,null,a.mode,h),h.ref=sh(a,d,f),h.return=a,a=h);}return g(a);case wa:a:{for(l=f.key;null!==
	d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=zh(f,a.mode,h);d.return=a;a=d;}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);th(a,f);}return "string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
	(c(a,d),d=xh(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Bh=vh(!0),Ch=vh(!1),Dh={},Eh=Uf(Dh),Fh=Uf(Dh),Gh=Uf(Dh);function Hh(a){if(a===Dh)throw Error(p$1(174));return a}function Ih(a,b){G$1(Gh,b);G$1(Fh,a);G$1(Eh,Dh);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a);}E$1(Eh);G$1(Eh,b);}function Jh(){E$1(Eh);E$1(Fh);E$1(Gh);}
	function Kh(a){Hh(Gh.current);var b=Hh(Eh.current);var c=lb(b,a.type);b!==c&&(G$1(Fh,a),G$1(Eh,c));}function Lh(a){Fh.current===a&&(E$1(Eh),E$1(Fh));}var M$1=Uf(0);
	function Mh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var Nh=[];
	function Oh(){for(var a=0;a<Nh.length;a++)Nh[a]._workInProgressVersionPrimary=null;Nh.length=0;}var Ph=ua.ReactCurrentDispatcher,Qh=ua.ReactCurrentBatchConfig,Rh=0,N$1=null,O$1=null,P$1=null,Sh=!1,Th=!1,Uh=0,Vh=0;function Q$1(){throw Error(p$1(321));}function Wh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return !1;return !0}
	function Xh(a,b,c,d,e,f){Rh=f;N$1=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Ph.current=null===a||null===a.memoizedState?Yh:Zh;a=c(d,e);if(Th){f=0;do{Th=!1;Uh=0;if(25<=f)throw Error(p$1(301));f+=1;P$1=O$1=null;b.updateQueue=null;Ph.current=$h;a=c(d,e);}while(Th)}Ph.current=ai;b=null!==O$1&&null!==O$1.next;Rh=0;P$1=O$1=N$1=null;Sh=!1;if(b)throw Error(p$1(300));return a}function bi(){var a=0!==Uh;Uh=0;return a}
	function ci(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P$1?N$1.memoizedState=P$1=a:P$1=P$1.next=a;return P$1}function di(){if(null===O$1){var a=N$1.alternate;a=null!==a?a.memoizedState:null;}else a=O$1.next;var b=null===P$1?N$1.memoizedState:P$1.next;if(null!==b)P$1=b,O$1=a;else {if(null===a)throw Error(p$1(310));O$1=a;a={memoizedState:O$1.memoizedState,baseState:O$1.baseState,baseQueue:O$1.baseQueue,queue:O$1.queue,next:null};null===P$1?N$1.memoizedState=P$1=a:P$1=P$1.next=a;}return P$1}
	function ei(a,b){return "function"===typeof b?b(a):b}
	function fi(a){var b=di(),c=b.queue;if(null===c)throw Error(p$1(311));c.lastRenderedReducer=a;var d=O$1,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Rh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else {var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
	eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;N$1.lanes|=m;hh|=m;}l=l.next;}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(Ug=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d;}a=c.interleaved;if(null!==a){e=a;do f=e.lane,N$1.lanes|=f,hh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return [b.memoizedState,c.dispatch]}
	function gi(a){var b=di(),c=b.queue;if(null===c)throw Error(p$1(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(Ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}function hi(){}
	function ii(a,b){var c=N$1,d=di(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,Ug=!0);d=d.queue;ji(ki.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==P$1&&P$1.memoizedState.tag&1){c.flags|=2048;li(9,mi.bind(null,c,d,e,b),void 0,null);if(null===R$1)throw Error(p$1(349));0!==(Rh&30)||ni(c,b,e);}return e}function ni(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=N$1.updateQueue;null===b?(b={lastEffect:null,stores:null},N$1.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a));}
	function mi(a,b,c,d){b.value=c;b.getSnapshot=d;oi(b)&&pi(a);}function ki(a,b,c){return c(function(){oi(b)&&pi(a);})}function oi(a){var b=a.getSnapshot;a=a.value;try{var c=b();return !He(a,c)}catch(d){return !0}}function pi(a){var b=Zg(a,1);null!==b&&mh(b,a,1,-1);}
	function qi(a){var b=ci();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:a};b.queue=a;a=a.dispatch=ri.bind(null,N$1,a);return [b.memoizedState,a]}
	function li(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N$1.updateQueue;null===b?(b={lastEffect:null,stores:null},N$1.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function si(){return di().memoizedState}function ti(a,b,c,d){var e=ci();N$1.flags|=a;e.memoizedState=li(1|b,c,void 0,void 0===d?null:d);}
	function ui(a,b,c,d){var e=di();d=void 0===d?null:d;var f=void 0;if(null!==O$1){var g=O$1.memoizedState;f=g.destroy;if(null!==d&&Wh(d,g.deps)){e.memoizedState=li(b,c,f,d);return}}N$1.flags|=a;e.memoizedState=li(1|b,c,f,d);}function vi(a,b){return ti(8390656,8,a,b)}function ji(a,b){return ui(2048,8,a,b)}function wi(a,b){return ui(4,2,a,b)}function xi(a,b){return ui(4,4,a,b)}
	function yi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function zi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ui(4,4,yi.bind(null,b,a),c)}function Ai(){}function Bi(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
	function Ci(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Di(a,b,c){if(0===(Rh&21))return a.baseState&&(a.baseState=!1,Ug=!0),a.memoizedState=c;He(c,b)||(c=yc(),N$1.lanes|=c,hh|=c,a.baseState=!0);return b}function Ei(a,b){var c=C$1;C$1=0!==c&&4>c?c:4;a(!0);var d=Qh.transition;Qh.transition={};try{a(!1),b();}finally{C$1=c,Qh.transition=d;}}function Fi(){return di().memoizedState}
	function Gi(a,b,c){var d=lh(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,c);else if(c=Yg(a,b,c,d),null!==c){var e=L$1();mh(c,a,d,e);Ji(c,b,d);}}
	function ri(a,b,c){var d=lh(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,e);else {var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,Xg(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=Yg(a,b,e,d);null!==c&&(e=L$1(),mh(c,a,d,e),Ji(c,b,d));}}
	function Hi(a){var b=a.alternate;return a===N$1||null!==b&&b===N$1}function Ii(a,b){Th=Sh=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}function Ji(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
	var ai={readContext:Vg,useCallback:Q$1,useContext:Q$1,useEffect:Q$1,useImperativeHandle:Q$1,useInsertionEffect:Q$1,useLayoutEffect:Q$1,useMemo:Q$1,useReducer:Q$1,useRef:Q$1,useState:Q$1,useDebugValue:Q$1,useDeferredValue:Q$1,useTransition:Q$1,useMutableSource:Q$1,useSyncExternalStore:Q$1,useId:Q$1,unstable_isNewReconciler:!1},Yh={readContext:Vg,useCallback:function(a,b){ci().memoizedState=[a,void 0===b?null:b];return a},useContext:Vg,useEffect:vi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ti(4194308,
	4,yi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ti(4194308,4,a,b)},useInsertionEffect:function(a,b){return ti(4,2,a,b)},useMemo:function(a,b){var c=ci();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=ci();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=Gi.bind(null,N$1,a);return [d.memoizedState,a]},useRef:function(a){var b=
	ci();a={current:a};return b.memoizedState=a},useState:qi,useDebugValue:Ai,useDeferredValue:function(a){return ci().memoizedState=a},useTransition:function(){var a=qi(!1),b=a[0];a=Ei.bind(null,a[1]);ci().memoizedState=a;return [b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=N$1,e=ci();if(I$1){if(void 0===c)throw Error(p$1(407));c=c();}else {c=b();if(null===R$1)throw Error(p$1(349));0!==(Rh&30)||ni(d,b,c);}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;vi(ki.bind(null,d,
	f,a),[a]);d.flags|=2048;li(9,mi.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=ci(),b=R$1.identifierPrefix;if(I$1){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Uh++;0<c&&(b+="H"+c.toString(32));b+=":";}else c=Vh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Zh={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:fi,useRef:si,useState:function(){return fi(ei)},
	useDebugValue:Ai,useDeferredValue:function(a){var b=di();return Di(b,O$1.memoizedState,a)},useTransition:function(){var a=fi(ei)[0],b=di().memoizedState;return [a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1},$h={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:gi,useRef:si,useState:function(){return gi(ei)},useDebugValue:Ai,useDeferredValue:function(a){var b=di();return null===
	O$1?b.memoizedState=a:Di(b,O$1.memoizedState,a)},useTransition:function(){var a=gi(ei)[0],b=di().memoizedState;return [a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1};function Ki(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e,digest:null}}function Li(a,b,c){return {value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}
	function Mi(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Ni="function"===typeof WeakMap?WeakMap:Map;function Oi(a,b,c){c=ch(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Pi||(Pi=!0,Qi=d);Mi(a,b);};return c}
	function Ri(a,b,c){c=ch(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Mi(a,b);};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Mi(a,b);"function"!==typeof d&&(null===Si?Si=new Set([this]):Si.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}
	function Ti(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Ni;var e=new Set;d.set(b,e);}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ui.bind(null,a,b,c),b.then(a,a));}function Vi(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return;}while(null!==a);return null}
	function Wi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=ch(-1,1),b.tag=2,dh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Xi=ua.ReactCurrentOwner,Ug=!1;function Yi(a,b,c,d){b.child=null===a?Ch(b,null,c,d):Bh(b,a.child,c,d);}
	function Zi(a,b,c,d,e){c=c.render;var f=b.ref;Tg(b,e);d=Xh(a,b,c,d,f,e);c=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I$1&&c&&vg(b);b.flags|=1;Yi(a,b,d,e);return b.child}
	function aj(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!bj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,cj(a,b,f,d,e);a=yh(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return $i(a,b,e)}b.flags|=1;a=wh(f,d);a.ref=b.ref;a.return=b;return b.child=a}
	function cj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(Ug=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(Ug=!0);else return b.lanes=a.lanes,$i(a,b,e)}return dj(a,b,c,d,e)}
	function ej(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G$1(fj,gj),gj|=c;else {if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G$1(fj,gj),gj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G$1(fj,gj);gj|=d;}else null!==
	f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G$1(fj,gj),gj|=d;Yi(a,b,e,c);return b.child}function hj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152;}function dj(a,b,c,d,e){var f=Zf(c)?Xf:H$1.current;f=Yf(b,f);Tg(b,e);c=Xh(a,b,c,d,f,e);d=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I$1&&d&&vg(b);b.flags|=1;Yi(a,b,c,e);return b.child}
	function ij(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b);}else f=!1;Tg(b,e);if(null===b.stateNode)jj(a,b),ph(b,c,d),rh(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=Vg(l):(l=Zf(c)?Xf:H$1.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
	(h!==d||k!==l)&&qh(b,g,d,l);$g=!1;var r=b.memoizedState;g.state=r;gh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||$g?("function"===typeof m&&(kh(b,c,m,d),k=b.memoizedState),(h=$g||oh(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
	("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1);}else {g=b.stateNode;bh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Lg(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=Vg(k):(k=Zf(c)?Xf:H$1.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
	"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&qh(b,g,d,k);$g=!1;r=b.memoizedState;g.state=r;gh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||$g?("function"===typeof y&&(kh(b,c,y,d),n=b.memoizedState),(l=$g||oh(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
	g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
	a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1);}return kj(a,b,c,d,f,e)}
	function kj(a,b,c,d,e,f){hj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),$i(a,b,f);d=b.stateNode;Xi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Bh(b,a.child,null,f),b.child=Bh(b,null,h,f)):Yi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function lj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);Ih(a,b.containerInfo);}
	function mj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Yi(a,b,c,d);return b.child}var nj={dehydrated:null,treeContext:null,retryLane:0};function oj(a){return {baseLanes:a,cachePool:null,transitions:null}}
	function pj(a,b,c){var d=b.pendingProps,e=M$1.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G$1(M$1,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
	g):f=qj(g,d,0,null),a=Ah(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=oj(c),b.memoizedState=nj,a):rj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return sj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=wh(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=wh(h,f):(f=Ah(f,g,c,null),f.flags|=2);f.return=
	b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?oj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=nj;return d}f=a.child;a=f.sibling;d=wh(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
	function rj(a,b){b=qj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function tj(a,b,c,d){null!==d&&Jg(d);Bh(b,a.child,null,c);a=rj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
	function sj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Li(Error(p$1(422))),tj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=qj({mode:"visible",children:d.children},e,0,null);f=Ah(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Bh(b,a.child,null,g);b.child.memoizedState=oj(g);b.memoizedState=nj;return f}if(0===(b.mode&1))return tj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
	if(d)var h=d.dgst;d=h;f=Error(p$1(419));d=Li(f,d,void 0);return tj(a,b,g,d)}h=0!==(g&a.childLanes);if(Ug||h){d=R$1;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0;}e=0!==(e&(d.suspendedLanes|g))?0:e;
	0!==e&&e!==f.retryLane&&(f.retryLane=e,Zg(a,e),mh(d,a,e,-1));}uj();d=Li(Error(p$1(421)));return tj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=vj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I$1=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=rj(b,d.children);b.flags|=4096;return b}function wj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);Sg(a.return,b,c);}
	function xj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e);}
	function yj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Yi(a,b,d.children,c);d=M$1.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else {if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&wj(a,c,b);else if(19===a.tag)wj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}G$1(M$1,d);if(0===(b.mode&1))b.memoizedState=
	null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Mh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);xj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Mh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}xj(b,!0,c,null,f);break;case "together":xj(b,!1,null,null,void 0);break;default:b.memoizedState=null;}return b.child}
	function jj(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);}function $i(a,b,c){null!==a&&(b.dependencies=a.dependencies);hh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p$1(153));if(null!==b.child){a=b.child;c=wh(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=wh(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}
	function zj(a,b,c){switch(b.tag){case 3:lj(b);Ig();break;case 5:Kh(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:Ih(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G$1(Mg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G$1(M$1,M$1.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return pj(a,b,c);G$1(M$1,M$1.current&1);a=$i(a,b,c);return null!==a?a.sibling:null}G$1(M$1,M$1.current&1);break;case 19:d=0!==(c&
	b.childLanes);if(0!==(a.flags&128)){if(d)return yj(a,b,c);b.flags|=128;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G$1(M$1,M$1.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,ej(a,b,c)}return $i(a,b,c)}var Aj,Bj,Cj,Dj;
	Aj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Bj=function(){};
	Cj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;Hh(Eh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A$1({},e,{value:void 0});d=A$1({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf);}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
	(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,
	c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D$1("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Dj=function(a,b,c,d){c!==d&&(b.flags|=4);};
	function Ej(a,b){if(!I$1)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
	function S$1(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
	function Fj(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S$1(b),null;case 1:return Zf(b.type)&&$f(),S$1(b),null;case 3:d=b.stateNode;Jh();E$1(Wf);E$1(H$1);Oh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Gj(zg),zg=null));Bj(a,b);S$1(b);return null;case 5:Lh(b);var e=Hh(Gh.current);
	c=b.type;if(null!==a&&null!=b.stateNode)Cj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else {if(!d){if(null===b.stateNode)throw Error(p$1(166));S$1(b);return null}a=Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D$1("cancel",d);D$1("close",d);break;case "iframe":case "object":case "embed":D$1("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D$1(lf[e],d);break;case "source":D$1("error",d);break;case "img":case "image":case "link":D$1("error",
	d);D$1("load",d);break;case "details":D$1("toggle",d);break;case "input":Za(d,f);D$1("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D$1("invalid",d);break;case "textarea":hb(d,f),D$1("invalid",d);}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
	h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D$1("scroll",d);}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf);}d=e;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
	"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;Aj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D$1("cancel",a);D$1("close",a);e=d;break;case "iframe":case "object":case "embed":D$1("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D$1(lf[e],a);e=d;break;case "source":D$1("error",a);e=d;break;case "img":case "image":case "link":D$1("error",
	a);D$1("load",a);e=d;break;case "details":D$1("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D$1("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A$1({},d,{value:void 0});D$1("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D$1("invalid",a);break;default:e=d;}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
	c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D$1("scroll",a):null!=k&&ta(a,f,k,g));}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
	!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf);}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1;}}d&&(b.flags|=4);}null!==b.ref&&(b.flags|=512,b.flags|=2097152);}S$1(b);return null;case 6:if(a&&null!=b.stateNode)Dj(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(p$1(166));c=Hh(Gh.current);Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
	xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1));}f&&(b.flags|=4);}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d;}S$1(b);return null;case 13:E$1(M$1);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I$1&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
	a){if(!f)throw Error(p$1(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p$1(317));f[Of]=b;}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S$1(b);f=!1;}else null!==zg&&(Gj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(M$1.current&1)?0===T$1&&(T$1=3):uj()));null!==b.updateQueue&&(b.flags|=4);S$1(b);return null;case 4:return Jh(),
	Bj(a,b),null===a&&sf(b.stateNode.containerInfo),S$1(b),null;case 10:return Rg(b.type._context),S$1(b),null;case 17:return Zf(b.type)&&$f(),S$1(b),null;case 19:E$1(M$1);f=b.memoizedState;if(null===f)return S$1(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Ej(f,!1);else {if(0!==T$1||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Mh(a);if(null!==g){b.flags|=128;Ej(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
	g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G$1(M$1,M$1.current&1|2);return b.child}a=
	a.sibling;}null!==f.tail&&B$1()>Hj&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304);}else {if(!d)if(a=Mh(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Ej(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I$1)return S$1(b),null}else 2*B$1()-f.renderingStartTime>Hj&&1073741824!==c&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g);}if(null!==f.tail)return b=f.tail,f.rendering=
	b,f.tail=b.sibling,f.renderingStartTime=B$1(),b.sibling=null,c=M$1.current,G$1(M$1,d?c&1|2:c&1),b;S$1(b);return null;case 22:case 23:return Ij(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(gj&1073741824)&&(S$1(b),b.subtreeFlags&6&&(b.flags|=8192)):S$1(b),null;case 24:return null;case 25:return null}throw Error(p$1(156,b.tag));}
	function Jj(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return Jh(),E$1(Wf),E$1(H$1),Oh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Lh(b),null;case 13:E$1(M$1);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p$1(340));Ig();}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E$1(M$1),null;case 4:return Jh(),null;case 10:return Rg(b.type._context),null;case 22:case 23:return Ij(),
	null;case 24:return null;default:return null}}var Kj=!1,U$1=!1,Lj="function"===typeof WeakSet?WeakSet:Set,V$1=null;function Mj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null);}catch(d){W$1(a,b,d);}else c.current=null;}function Nj(a,b,c){try{c();}catch(d){W$1(a,b,d);}}var Oj=!1;
	function Pj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType;}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
	q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y;}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode;}q=y;}c=-1===h||-1===k?null:{start:h,end:k};}else c=null;}c=c||{start:0,end:0};}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V$1=b;null!==V$1;)if(b=V$1,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V$1=a;else for(;null!==V$1;){b=V$1;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
	case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Lg(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w;}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p$1(163));}}catch(F){W$1(b,b.return,F);}a=b.sibling;if(null!==a){a.return=b.return;V$1=a;break}V$1=b.return;}n=Oj;Oj=!1;return n}
	function Qj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Nj(b,c,f);}e=e.next;}while(e!==d)}}function Rj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d();}c=c.next;}while(c!==b)}}function Sj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c;}"function"===typeof b?b(a):b.current=a;}}
	function Tj(a){var b=a.alternate;null!==b&&(a.alternate=null,Tj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null;}function Uj(a){return 5===a.tag||3===a.tag||4===a.tag}
	function Vj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Uj(a.return))return null;a=a.return;}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child;}if(!(a.flags&2))return a.stateNode}}
	function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling;}
	function Xj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Xj(a,b,c),a=a.sibling;null!==a;)Xj(a,b,c),a=a.sibling;}var X$1=null,Yj=!1;function Zj(a,b,c){for(c=c.child;null!==c;)ak(a,b,c),c=c.sibling;}
	function ak(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c);}catch(h){}switch(c.tag){case 5:U$1||Mj(c,b);case 6:var d=X$1,e=Yj;X$1=null;Zj(a,b,c);X$1=d;Yj=e;null!==X$1&&(Yj?(a=X$1,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X$1.removeChild(c.stateNode));break;case 18:null!==X$1&&(Yj?(a=X$1,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X$1,c.stateNode));break;case 4:d=X$1;e=Yj;X$1=c.stateNode.containerInfo;Yj=!0;
	Zj(a,b,c);X$1=d;Yj=e;break;case 0:case 11:case 14:case 15:if(!U$1&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Nj(c,b,g):0!==(f&4)&&Nj(c,b,g));e=e.next;}while(e!==d)}Zj(a,b,c);break;case 1:if(!U$1&&(Mj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount();}catch(h){W$1(c,b,h);}Zj(a,b,c);break;case 21:Zj(a,b,c);break;case 22:c.mode&1?(U$1=(d=U$1)||null!==
	c.memoizedState,Zj(a,b,c),U$1=d):Zj(a,b,c);break;default:Zj(a,b,c);}}function bk(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Lj);b.forEach(function(b){var d=ck.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
	function dk(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X$1=h.stateNode;Yj=!1;break a;case 3:X$1=h.stateNode.containerInfo;Yj=!0;break a;case 4:X$1=h.stateNode.containerInfo;Yj=!0;break a}h=h.return;}if(null===X$1)throw Error(p$1(160));ak(f,g,e);X$1=null;Yj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null;}catch(l){W$1(e,b,l);}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)ek(b,a),b=b.sibling;}
	function ek(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:dk(b,a);fk(a);if(d&4){try{Qj(3,a,a.return),Rj(3,a);}catch(t){W$1(a,a.return,t);}try{Qj(5,a,a.return);}catch(t){W$1(a,a.return,t);}}break;case 1:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);break;case 5:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"");}catch(t){W$1(a,a.return,t);}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
	a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l);}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
	f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1));}e[Pf]=f;}catch(t){W$1(a,a.return,t);}}break;case 6:dk(b,a);fk(a);if(d&4){if(null===a.stateNode)throw Error(p$1(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f;}catch(t){W$1(a,a.return,t);}}break;case 3:dk(b,a);fk(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo);}catch(t){W$1(a,a.return,t);}break;case 4:dk(b,a);fk(a);break;case 13:dk(b,a);fk(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
	null!==e.alternate&&null!==e.alternate.memoizedState||(gk=B$1()));d&4&&bk(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U$1=(l=U$1)||m,dk(b,a),U$1=l):dk(b,a);fk(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V$1=a,m=a.child;null!==m;){for(q=V$1=m;null!==V$1;){r=V$1;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Qj(4,r,r.return);break;case 1:Mj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
	b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount();}catch(t){W$1(d,c,t);}}break;case 5:Mj(r,r.return);break;case 22:if(null!==r.memoizedState){hk(q);continue}}null!==y?(y.return=r,V$1=y):hk(q);}m=m.sibling;}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
	rb("display",g));}catch(t){W$1(a,a.return,t);}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps;}catch(t){W$1(a,a.return,t);}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return;}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling;}}break;case 19:dk(b,a);fk(a);d&4&&bk(a);break;case 21:break;default:dk(b,
	a),fk(a);}}function fk(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Uj(c)){var d=c;break a}c=c.return;}throw Error(p$1(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Vj(a);Xj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Vj(a);Wj(a,h,g);break;default:throw Error(p$1(161));}}catch(k){W$1(a,a.return,k);}a.flags&=-3;}b&4096&&(a.flags&=-4097);}function ik(a,b,c){V$1=a;jk(a);}
	function jk(a,b,c){for(var d=0!==(a.mode&1);null!==V$1;){var e=V$1,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Kj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U$1;h=Kj;var l=U$1;Kj=g;if((U$1=k)&&!l)for(V$1=e;null!==V$1;)g=V$1,k=g.child,22===g.tag&&null!==g.memoizedState?kk(e):null!==k?(k.return=g,V$1=k):kk(e);for(;null!==f;)V$1=f,jk(f),f=f.sibling;V$1=e;Kj=h;U$1=l;}lk(a);}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V$1=f):lk(a);}}
	function lk(a){for(;null!==V$1;){var b=V$1;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U$1||Rj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U$1)if(null===c)d.componentDidMount();else {var e=b.elementType===b.type?c.memoizedProps:Lg(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate);}var f=b.updateQueue;null!==f&&ih(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
	b.child.stateNode;break;case 1:c=b.child.stateNode;}ih(b,g,c);}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src);}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q);}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
	default:throw Error(p$1(163));}U$1||b.flags&512&&Sj(b);}catch(r){W$1(b,b.return,r);}}if(b===a){V$1=null;break}c=b.sibling;if(null!==c){c.return=b.return;V$1=c;break}V$1=b.return;}}function hk(a){for(;null!==V$1;){var b=V$1;if(b===a){V$1=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V$1=c;break}V$1=b.return;}}
	function kk(a){for(;null!==V$1;){var b=V$1;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Rj(4,b);}catch(k){W$1(b,c,k);}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount();}catch(k){W$1(b,e,k);}}var f=b.return;try{Sj(b);}catch(k){W$1(b,f,k);}break;case 5:var g=b.return;try{Sj(b);}catch(k){W$1(b,g,k);}}}catch(k){W$1(b,b.return,k);}if(b===a){V$1=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V$1=h;break}V$1=b.return;}}
	var mk=Math.ceil,nk=ua.ReactCurrentDispatcher,ok=ua.ReactCurrentOwner,pk=ua.ReactCurrentBatchConfig,K$1=0,R$1=null,Y$1=null,Z$1=0,gj=0,fj=Uf(0),T$1=0,qk=null,hh=0,rk=0,sk=0,tk=null,uk=null,gk=0,Hj=Infinity,vk=null,Pi=!1,Qi=null,Si=null,wk=!1,xk=null,yk=0,zk=0,Ak=null,Bk=-1,Ck=0;function L$1(){return 0!==(K$1&6)?B$1():-1!==Bk?Bk:Bk=B$1()}
	function lh(a){if(0===(a.mode&1))return 1;if(0!==(K$1&2)&&0!==Z$1)return Z$1&-Z$1;if(null!==Kg.transition)return 0===Ck&&(Ck=yc()),Ck;a=C$1;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function mh(a,b,c,d){if(50<zk)throw zk=0,Ak=null,Error(p$1(185));Ac(a,c,d);if(0===(K$1&2)||a!==R$1)a===R$1&&(0===(K$1&2)&&(rk|=c),4===T$1&&Dk(a,Z$1)),Ek(a,d),1===c&&0===K$1&&0===(b.mode&1)&&(Hj=B$1()+500,fg&&jg());}
	function Ek(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===R$1?Z$1:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Fk.bind(null,a)):hg(Fk.bind(null,a)),Jf(function(){0===(K$1&6)&&jg();}),c=null;else {switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc;}c=Gk(c,Hk.bind(null,a));}a.callbackPriority=b;a.callbackNode=c;}}
	function Hk(a,b){Bk=-1;Ck=0;if(0!==(K$1&6))throw Error(p$1(327));var c=a.callbackNode;if(Ik()&&a.callbackNode!==c)return null;var d=uc(a,a===R$1?Z$1:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Jk(a,d);else {b=d;var e=K$1;K$1|=2;var f=Kk();if(R$1!==a||Z$1!==b)vk=null,Hj=B$1()+500,Lk(a,b);do try{Mk();break}catch(h){Nk(a,h);}while(1);Qg();nk.current=f;K$1=e;null!==Y$1?b=0:(R$1=null,Z$1=0,b=T$1);}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Ok(a,e)));if(1===b)throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B$1()),c;if(6===b)Dk(a,d);
	else {e=a.current.alternate;if(0===(d&30)&&!Pk(e)&&(b=Jk(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Ok(a,f))),1===b))throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B$1()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p$1(345));case 2:Qk(a,uk,vk);break;case 3:Dk(a,d);if((d&130023424)===d&&(b=gk+500-B$1(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){L$1();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),b);break}Qk(a,uk,vk);break;case 4:Dk(a,d);if((d&4194240)===
	d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f;}d=e;d=B$1()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*mk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),d);break}Qk(a,uk,vk);break;case 5:Qk(a,uk,vk);break;default:throw Error(p$1(329));}}}Ek(a,B$1());return a.callbackNode===c?Hk.bind(null,a):null}
	function Ok(a,b){var c=tk;a.current.memoizedState.isDehydrated&&(Lk(a,b).flags|=256);a=Jk(a,b);2!==a&&(b=uk,uk=c,null!==b&&Gj(b));return a}function Gj(a){null===uk?uk=a:uk.push.apply(uk,a);}
	function Pk(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return !1}catch(g){return !1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else {if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return !0;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return !0}
	function Dk(a,b){b&=~sk;b&=~rk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d;}}function Fk(a){if(0!==(K$1&6))throw Error(p$1(327));Ik();var b=uc(a,0);if(0===(b&1))return Ek(a,B$1()),null;var c=Jk(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Ok(a,d));}if(1===c)throw c=qk,Lk(a,0),Dk(a,b),Ek(a,B$1()),c;if(6===c)throw Error(p$1(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Qk(a,uk,vk);Ek(a,B$1());return null}
	function Rk(a,b){var c=K$1;K$1|=1;try{return a(b)}finally{K$1=c,0===K$1&&(Hj=B$1()+500,fg&&jg());}}function Sk(a){null!==xk&&0===xk.tag&&0===(K$1&6)&&Ik();var b=K$1;K$1|=1;var c=pk.transition,d=C$1;try{if(pk.transition=null,C$1=1,a)return a()}finally{C$1=d,pk.transition=c,K$1=b,0===(K$1&6)&&jg();}}function Ij(){gj=fj.current;E$1(fj);}
	function Lk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y$1)for(c=Y$1.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:Jh();E$1(Wf);E$1(H$1);Oh();break;case 5:Lh(d);break;case 4:Jh();break;case 13:E$1(M$1);break;case 19:E$1(M$1);break;case 10:Rg(d.type._context);break;case 22:case 23:Ij();}c=c.return;}R$1=a;Y$1=a=wh(a.current,null);Z$1=gj=b;T$1=0;qk=null;sk=rk=hh=0;uk=tk=null;if(null!==Wg){for(b=
	0;b<Wg.length;b++)if(c=Wg[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g;}c.pending=d;}Wg=null;}return a}
	function Nk(a,b){do{var c=Y$1;try{Qg();Ph.current=ai;if(Sh){for(var d=N$1.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}Sh=!1;}Rh=0;P$1=O$1=N$1=null;Th=!1;Uh=0;ok.current=null;if(null===c||null===c.return){T$1=1;qk=b;Y$1=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z$1;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
	m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null);}var y=Vi(g);if(null!==y){y.flags&=-257;Wi(y,g,h,f,b);y.mode&1&&Ti(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t;}else n.add(k);break a}else {if(0===(b&1)){Ti(f,l,b);uj();break a}k=Error(p$1(426));}}else if(I$1&&h.mode&1){var J=Vi(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Wi(J,g,h,f,b);Jg(Ki(k,h));break a}}f=k=Ki(k,h);4!==T$1&&(T$1=2);null===tk?tk=[f]:tk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
	b&=-b;f.lanes|=b;var x=Oi(f,k,b);fh(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Si||!Si.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Ri(f,h,b);fh(f,F);break a}}f=f.return;}while(null!==f)}Tk(c);}catch(na){b=na;Y$1===c&&null!==c&&(Y$1=c=c.return);continue}break}while(1)}function Kk(){var a=nk.current;nk.current=ai;return null===a?ai:a}
	function uj(){if(0===T$1||3===T$1||2===T$1)T$1=4;null===R$1||0===(hh&268435455)&&0===(rk&268435455)||Dk(R$1,Z$1);}function Jk(a,b){var c=K$1;K$1|=2;var d=Kk();if(R$1!==a||Z$1!==b)vk=null,Lk(a,b);do try{Uk();break}catch(e){Nk(a,e);}while(1);Qg();K$1=c;nk.current=d;if(null!==Y$1)throw Error(p$1(261));R$1=null;Z$1=0;return T$1}function Uk(){for(;null!==Y$1;)Vk(Y$1);}function Mk(){for(;null!==Y$1&&!cc();)Vk(Y$1);}function Vk(a){var b=Wk(a.alternate,a,gj);a.memoizedProps=a.pendingProps;null===b?Tk(a):Y$1=b;ok.current=null;}
	function Tk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Fj(c,b,gj),null!==c){Y$1=c;return}}else {c=Jj(c,b);if(null!==c){c.flags&=32767;Y$1=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else {T$1=6;Y$1=null;return}}b=b.sibling;if(null!==b){Y$1=b;return}Y$1=b=a;}while(null!==b);0===T$1&&(T$1=5);}function Qk(a,b,c){var d=C$1,e=pk.transition;try{pk.transition=null,C$1=1,Xk(a,b,c,d);}finally{pk.transition=e,C$1=d;}return null}
	function Xk(a,b,c,d){do Ik();while(null!==xk);if(0!==(K$1&6))throw Error(p$1(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p$1(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===R$1&&(Y$1=R$1=null,Z$1=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||wk||(wk=!0,Gk(hc,function(){Ik();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=pk.transition;pk.transition=null;
	var g=C$1;C$1=1;var h=K$1;K$1|=4;ok.current=null;Pj(a,c);ek(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;ik(c);dc();K$1=h;C$1=g;pk.transition=f;}else a.current=c;wk&&(wk=!1,xk=a,yk=e);f=a.pendingLanes;0===f&&(Si=null);mc(c.stateNode);Ek(a,B$1());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Pi)throw Pi=!1,a=Qi,Qi=null,a;0!==(yk&1)&&0!==a.tag&&Ik();f=a.pendingLanes;0!==(f&1)?a===Ak?zk++:(zk=0,Ak=a):zk=0;jg();return null}
	function Ik(){if(null!==xk){var a=Dc(yk),b=pk.transition,c=C$1;try{pk.transition=null;C$1=16>a?16:a;if(null===xk)var d=!1;else {a=xk;xk=null;yk=0;if(0!==(K$1&6))throw Error(p$1(331));var e=K$1;K$1|=4;for(V$1=a.current;null!==V$1;){var f=V$1,g=f.child;if(0!==(V$1.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V$1=l;null!==V$1;){var m=V$1;switch(m.tag){case 0:case 11:case 15:Qj(8,m,f);}var q=m.child;if(null!==q)q.return=m,V$1=q;else for(;null!==V$1;){m=V$1;var r=m.sibling,y=m.return;Tj(m);if(m===
	l){V$1=null;break}if(null!==r){r.return=y;V$1=r;break}V$1=y;}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J;}while(null!==t)}}V$1=f;}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V$1=g;else b:for(;null!==V$1;){f=V$1;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Qj(9,f,f.return);}var x=f.sibling;if(null!==x){x.return=f.return;V$1=x;break b}V$1=f.return;}}var w=a.current;for(V$1=w;null!==V$1;){g=V$1;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
	u)u.return=g,V$1=u;else b:for(g=w;null!==V$1;){h=V$1;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Rj(9,h);}}catch(na){W$1(h,h.return,na);}if(h===g){V$1=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V$1=F;break b}V$1=h.return;}}K$1=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a);}catch(na){}d=!0;}return d}finally{C$1=c,pk.transition=b;}}return !1}function Yk(a,b,c){b=Ki(c,b);b=Oi(a,b,1);a=dh(a,b,1);b=L$1();null!==a&&(Ac(a,1,b),Ek(a,b));}
	function W$1(a,b,c){if(3===a.tag)Yk(a,a,c);else for(;null!==b;){if(3===b.tag){Yk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Si||!Si.has(d))){a=Ki(c,a);a=Ri(b,a,1);b=dh(b,a,1);a=L$1();null!==b&&(Ac(b,1,a),Ek(b,a));break}}b=b.return;}}
	function Ui(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=L$1();a.pingedLanes|=a.suspendedLanes&c;R$1===a&&(Z$1&c)===c&&(4===T$1||3===T$1&&(Z$1&130023424)===Z$1&&500>B$1()-gk?Lk(a,0):sk|=c);Ek(a,b);}function Zk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=L$1();a=Zg(a,b);null!==a&&(Ac(a,b,c),Ek(a,c));}function vj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Zk(a,c);}
	function ck(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p$1(314));}null!==d&&d.delete(b);Zk(a,c);}var Wk;
	Wk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)Ug=!0;else {if(0===(a.lanes&c)&&0===(b.flags&128))return Ug=!1,zj(a,b,c);Ug=0!==(a.flags&131072)?!0:!1;}else Ug=!1,I$1&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;jj(a,b);a=b.pendingProps;var e=Yf(b,H$1.current);Tg(b,c);e=Xh(null,b,d,a,e,c);var f=bi();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
	null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,ah(b),e.updater=nh,b.stateNode=e,e._reactInternals=b,rh(b,d,a,c),b=kj(null,b,d,!0,f,c)):(b.tag=0,I$1&&f&&vg(b),Yi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{jj(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=$k(d);a=Lg(d,a);switch(e){case 0:b=dj(null,b,d,a,c);break a;case 1:b=ij(null,b,d,a,c);break a;case 11:b=Zi(null,b,d,a,c);break a;case 14:b=aj(null,b,d,Lg(d.type,a),c);break a}throw Error(p$1(306,
	d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),dj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),ij(a,b,d,e,c);case 3:a:{lj(b);if(null===a)throw Error(p$1(387));d=b.pendingProps;f=b.memoizedState;e=f.element;bh(a,b);gh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
	f,b.memoizedState=f,b.flags&256){e=Ki(Error(p$1(423)),b);b=mj(a,b,d,c,e);break a}else if(d!==e){e=Ki(Error(p$1(424)),b);b=mj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I$1=!0,zg=null,c=Ch(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else {Ig();if(d===e){b=$i(a,b,c);break a}Yi(a,b,d,c);}b=b.child;}return b;case 5:return Kh(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
	hj(a,b),Yi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return pj(a,b,c);case 4:return Ih(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Bh(b,null,d,c):Yi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),Zi(a,b,d,e,c);case 7:return Yi(a,b,b.pendingProps,c),b.child;case 8:return Yi(a,b,b.pendingProps.children,c),b.child;case 12:return Yi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
	g=e.value;G$1(Mg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=$i(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=ch(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k;}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);Sg(f.return,
	c,b);h.lanes|=c;break}k=k.next;}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p$1(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);Sg(g,c,b);g=f.sibling;}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return;}f=g;}Yi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,d=b.pendingProps.children,Tg(b,c),e=Vg(e),d=d(e),b.flags|=1,Yi(a,b,d,c),
	b.child;case 14:return d=b.type,e=Lg(d,b.pendingProps),e=Lg(d.type,e),aj(a,b,d,e,c);case 15:return cj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),jj(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,Tg(b,c),ph(b,d,e),rh(b,d,e,c),kj(null,b,d,!0,a,c);case 19:return yj(a,b,c);case 22:return ej(a,b,c)}throw Error(p$1(156,b.tag));};function Gk(a,b){return ac(a,b)}
	function al(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null;}function Bg(a,b,c,d){return new al(a,b,c,d)}function bj(a){a=a.prototype;return !(!a||!a.isReactComponent)}
	function $k(a){if("function"===typeof a)return bj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
	function wh(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
	c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
	function yh(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Ah(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return qj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
	break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p$1(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Ah(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function qj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function xh(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
	function zh(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
	function bl(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
	null;}function cl(a,b,c,d,e,f,g,h,k){a=new bl(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};ah(f);return a}function dl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
	function el(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p$1(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return;}while(null!==b);throw Error(p$1(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
	function fl(a,b,c,d,e,f,g,h,k){a=cl(c,d,!0,a,e,f,g,h,k);a.context=el(null);c=a.current;d=L$1();e=lh(c);f=ch(d,e);f.callback=void 0!==b&&null!==b?b:null;dh(c,f,e);a.current.lanes=e;Ac(a,e,d);Ek(a,d);return a}function gl(a,b,c,d){var e=b.current,f=L$1(),g=lh(e);c=el(c);null===b.context?b.context=c:b.pendingContext=c;b=ch(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=dh(e,b,g);null!==a&&(mh(a,e,g,f),eh(a,e,g));return g}
	function hl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function il(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function jl(a,b){il(a,b);(a=a.alternate)&&il(a,b);}function kl(){return null}var ll="function"===typeof reportError?reportError:function(a){console.error(a);};function ml(a){this._internalRoot=a;}
	nl.prototype.render=ml.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p$1(409));gl(a,b,null,null);};nl.prototype.unmount=ml.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Sk(function(){gl(null,a,null,null);});b[uf]=null;}};function nl(a){this._internalRoot=a;}
	nl.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a);}};function ol(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function pl(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function ql(){}
	function rl(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=hl(g);f.call(a);};}var g=fl(b,d,a,0,null,!1,!1,"",ql);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Sk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=hl(k);h.call(a);};}var k=cl(a,0,!1,null,null,!1,!1,"",ql);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Sk(function(){gl(b,k,c,d);});return k}
	function sl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=hl(g);h.call(a);};}gl(b,g,a,e);}else g=rl(c,b,a,e,d);return hl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Ek(b,B$1()),0===(K$1&6)&&(Hj=B$1()+500,jg()));}break;case 13:Sk(function(){var b=Zg(a,1);if(null!==b){var c=L$1();mh(b,a,1,c);}}),jl(a,1);}};
	Fc=function(a){if(13===a.tag){var b=Zg(a,134217728);if(null!==b){var c=L$1();mh(b,a,134217728,c);}jl(a,134217728);}};Gc=function(a){if(13===a.tag){var b=lh(a),c=Zg(a,b);if(null!==c){var d=L$1();mh(c,a,b,d);}jl(a,b);}};Hc=function(){return C$1};Ic=function(a,b){var c=C$1;try{return C$1=a,b()}finally{C$1=c;}};
	yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p$1(90));Wa(d);bb(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1);}};Gb=Rk;Hb=Sk;
	var tl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Rk]},ul={findFiberByHostInstance:Wc,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"};
	var vl={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance||
	kl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{kc=wl.inject(vl),lc=wl;}catch(a){}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tl;
	reactDom_production_min.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!ol(b))throw Error(p$1(200));return dl(a,b,null,c)};reactDom_production_min.createRoot=function(a,b){if(!ol(a))throw Error(p$1(299));var c=!1,d="",e=ll;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=cl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ml(b)};
	reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p$1(188));a=Object.keys(a).join(",");throw Error(p$1(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};reactDom_production_min.flushSync=function(a){return Sk(a)};reactDom_production_min.hydrate=function(a,b,c){if(!pl(b))throw Error(p$1(200));return sl(null,a,b,!0,c)};
	reactDom_production_min.hydrateRoot=function(a,b,c){if(!ol(a))throw Error(p$1(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=ll;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=fl(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
	e);return new nl(b)};reactDom_production_min.render=function(a,b,c){if(!pl(b))throw Error(p$1(200));return sl(null,a,b,!1,c)};reactDom_production_min.unmountComponentAtNode=function(a){if(!pl(a))throw Error(p$1(40));return a._reactRootContainer?(Sk(function(){sl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null;});}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Rk;
	reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!pl(c))throw Error(p$1(200));if(null==a||void 0===a._reactInternals)throw Error(p$1(38));return sl(a,b,c,!1,d)};reactDom_production_min.version="18.2.0-next-9e3b772b8-20220608";

	(function (module) {

		function checkDCE() {
		  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		  if (
		    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
		    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
		  ) {
		    return;
		  }
		  try {
		    // Verify that the code above has been dead code eliminated (DCE'd).
		    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		  } catch (err) {
		    // DevTools shouldn't crash React, no matter what.
		    // We should still report in case we break this code.
		    console.error(err);
		  }
		}

		{
		  // DCE check should happen before ReactDOM bundle executes so that
		  // DevTools can report bad minification during injection.
		  checkDCE();
		  module.exports = reactDom_production_min;
		}
	} (reactDom));

	var ReactDOM = /*@__PURE__*/getDefaultExportFromCjs(reactDom.exports);

	/**
	 * @remix-run/router v1.2.1
	 *
	 * Copyright (c) Remix Software Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.md file in the root directory of this source tree.
	 *
	 * @license MIT
	 */
	function _extends$2() {
	  _extends$2 = Object.assign ? Object.assign.bind() : function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };
	  return _extends$2.apply(this, arguments);
	}

	////////////////////////////////////////////////////////////////////////////////
	//#region Types and Constants
	////////////////////////////////////////////////////////////////////////////////

	/**
	 * Actions represent the type of change to a location value.
	 */
	var Action;

	(function (Action) {
	  /**
	   * A POP indicates a change to an arbitrary index in the history stack, such
	   * as a back or forward navigation. It does not describe the direction of the
	   * navigation, only that the current index changed.
	   *
	   * Note: This is the default action for newly created history objects.
	   */
	  Action["Pop"] = "POP";
	  /**
	   * A PUSH indicates a new entry being added to the history stack, such as when
	   * a link is clicked and a new page loads. When this happens, all subsequent
	   * entries in the stack are lost.
	   */

	  Action["Push"] = "PUSH";
	  /**
	   * A REPLACE indicates the entry at the current index in the history stack
	   * being replaced by a new one.
	   */

	  Action["Replace"] = "REPLACE";
	})(Action || (Action = {}));

	const PopStateEventType = "popstate";
	/**
	 * Browser history stores the location in regular URLs. This is the standard for
	 * most web apps, but it requires some configuration on the server to ensure you
	 * serve the same app at multiple URLs.
	 *
	 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
	 */

	function createBrowserHistory(options) {
	  if (options === void 0) {
	    options = {};
	  }

	  function createBrowserLocation(window, globalHistory) {
	    let {
	      pathname,
	      search,
	      hash
	    } = window.location;
	    return createLocation("", {
	      pathname,
	      search,
	      hash
	    }, // state defaults to `null` because `window.history.state` does
	    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
	  }

	  function createBrowserHref(window, to) {
	    return typeof to === "string" ? to : createPath(to);
	  }

	  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
	}
	function invariant(value, message) {
	  if (value === false || value === null || typeof value === "undefined") {
	    throw new Error(message);
	  }
	}

	function createKey() {
	  return Math.random().toString(36).substr(2, 8);
	}
	/**
	 * For browser-based histories, we combine the state and key into an object
	 */


	function getHistoryState(location) {
	  return {
	    usr: location.state,
	    key: location.key
	  };
	}
	/**
	 * Creates a Location object with a unique key from the given Path
	 */


	function createLocation(current, to, state, key) {
	  if (state === void 0) {
	    state = null;
	  }

	  let location = _extends$2({
	    pathname: typeof current === "string" ? current : current.pathname,
	    search: "",
	    hash: ""
	  }, typeof to === "string" ? parsePath(to) : to, {
	    state,
	    // TODO: This could be cleaned up.  push/replace should probably just take
	    // full Locations now and avoid the need to run through this flow at all
	    // But that's a pretty big refactor to the current test suite so going to
	    // keep as is for the time being and just let any incoming keys take precedence
	    key: to && to.key || key || createKey()
	  });

	  return location;
	}
	/**
	 * Creates a string URL path from the given pathname, search, and hash components.
	 */

	function createPath(_ref) {
	  let {
	    pathname = "/",
	    search = "",
	    hash = ""
	  } = _ref;
	  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
	  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
	  return pathname;
	}
	/**
	 * Parses a string URL path into its separate pathname, search, and hash components.
	 */

	function parsePath(path) {
	  let parsedPath = {};

	  if (path) {
	    let hashIndex = path.indexOf("#");

	    if (hashIndex >= 0) {
	      parsedPath.hash = path.substr(hashIndex);
	      path = path.substr(0, hashIndex);
	    }

	    let searchIndex = path.indexOf("?");

	    if (searchIndex >= 0) {
	      parsedPath.search = path.substr(searchIndex);
	      path = path.substr(0, searchIndex);
	    }

	    if (path) {
	      parsedPath.pathname = path;
	    }
	  }

	  return parsedPath;
	}
	function createClientSideURL(location) {
	  // window.location.origin is "null" (the literal string value) in Firefox
	  // under certain conditions, notably when serving from a local HTML file
	  // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
	  let base = typeof window !== "undefined" && typeof window.location !== "undefined" && window.location.origin !== "null" ? window.location.origin : window.location.href;
	  let href = typeof location === "string" ? location : createPath(location);
	  invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
	  return new URL(href, base);
	}

	function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
	  if (options === void 0) {
	    options = {};
	  }

	  let {
	    window = document.defaultView,
	    v5Compat = false
	  } = options;
	  let globalHistory = window.history;
	  let action = Action.Pop;
	  let listener = null;

	  function handlePop() {
	    action = Action.Pop;

	    if (listener) {
	      listener({
	        action,
	        location: history.location
	      });
	    }
	  }

	  function push(to, state) {
	    action = Action.Push;
	    let location = createLocation(history.location, to, state);
	    if (validateLocation) validateLocation(location, to);
	    let historyState = getHistoryState(location);
	    let url = history.createHref(location); // try...catch because iOS limits us to 100 pushState calls :/

	    try {
	      globalHistory.pushState(historyState, "", url);
	    } catch (error) {
	      // They are going to lose state here, but there is no real
	      // way to warn them about it since the page will refresh...
	      window.location.assign(url);
	    }

	    if (v5Compat && listener) {
	      listener({
	        action,
	        location: history.location
	      });
	    }
	  }

	  function replace(to, state) {
	    action = Action.Replace;
	    let location = createLocation(history.location, to, state);
	    if (validateLocation) validateLocation(location, to);
	    let historyState = getHistoryState(location);
	    let url = history.createHref(location);
	    globalHistory.replaceState(historyState, "", url);

	    if (v5Compat && listener) {
	      listener({
	        action,
	        location: history.location
	      });
	    }
	  }

	  let history = {
	    get action() {
	      return action;
	    },

	    get location() {
	      return getLocation(window, globalHistory);
	    },

	    listen(fn) {
	      if (listener) {
	        throw new Error("A history only accepts one active listener");
	      }

	      window.addEventListener(PopStateEventType, handlePop);
	      listener = fn;
	      return () => {
	        window.removeEventListener(PopStateEventType, handlePop);
	        listener = null;
	      };
	    },

	    createHref(to) {
	      return createHref(window, to);
	    },

	    encodeLocation(to) {
	      // Encode a Location the same way window.location would
	      let url = createClientSideURL(typeof to === "string" ? to : createPath(to));
	      return {
	        pathname: url.pathname,
	        search: url.search,
	        hash: url.hash
	      };
	    },

	    push,
	    replace,

	    go(n) {
	      return globalHistory.go(n);
	    }

	  };
	  return history;
	} //#endregion

	var ResultType;

	(function (ResultType) {
	  ResultType["data"] = "data";
	  ResultType["deferred"] = "deferred";
	  ResultType["redirect"] = "redirect";
	  ResultType["error"] = "error";
	})(ResultType || (ResultType = {}));

	function isIndexRoute(route) {
	  return route.index === true;
	} // Walk the route tree generating unique IDs where necessary so we are working
	// solely with AgnosticDataRouteObject's within the Router


	function convertRoutesToDataRoutes(routes, parentPath, allIds) {
	  if (parentPath === void 0) {
	    parentPath = [];
	  }

	  if (allIds === void 0) {
	    allIds = new Set();
	  }

	  return routes.map((route, index) => {
	    let treePath = [...parentPath, index];
	    let id = typeof route.id === "string" ? route.id : treePath.join("-");
	    invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
	    invariant(!allIds.has(id), "Found a route id collision on id \"" + id + "\".  Route " + "id's must be globally unique within Data Router usages");
	    allIds.add(id);

	    if (isIndexRoute(route)) {
	      let indexRoute = _extends$2({}, route, {
	        id
	      });

	      return indexRoute;
	    } else {
	      let pathOrLayoutRoute = _extends$2({}, route, {
	        id,
	        children: route.children ? convertRoutesToDataRoutes(route.children, treePath, allIds) : undefined
	      });

	      return pathOrLayoutRoute;
	    }
	  });
	}
	/**
	 * Matches the given routes to a location and returns the match data.
	 *
	 * @see https://reactrouter.com/utils/match-routes
	 */

	function matchRoutes(routes, locationArg, basename) {
	  if (basename === void 0) {
	    basename = "/";
	  }

	  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
	  let pathname = stripBasename(location.pathname || "/", basename);

	  if (pathname == null) {
	    return null;
	  }

	  let branches = flattenRoutes(routes);
	  rankRouteBranches(branches);
	  let matches = null;

	  for (let i = 0; matches == null && i < branches.length; ++i) {
	    matches = matchRouteBranch(branches[i], // Incoming pathnames are generally encoded from either window.location
	    // or from router.navigate, but we want to match against the unencoded
	    // paths in the route definitions.  Memory router locations won't be
	    // encoded here but there also shouldn't be anything to decode so this
	    // should be a safe operation.  This avoids needing matchRoutes to be
	    // history-aware.
	    safelyDecodeURI(pathname));
	  }

	  return matches;
	}

	function flattenRoutes(routes, branches, parentsMeta, parentPath) {
	  if (branches === void 0) {
	    branches = [];
	  }

	  if (parentsMeta === void 0) {
	    parentsMeta = [];
	  }

	  if (parentPath === void 0) {
	    parentPath = "";
	  }

	  let flattenRoute = (route, index, relativePath) => {
	    let meta = {
	      relativePath: relativePath === undefined ? route.path || "" : relativePath,
	      caseSensitive: route.caseSensitive === true,
	      childrenIndex: index,
	      route
	    };

	    if (meta.relativePath.startsWith("/")) {
	      invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
	      meta.relativePath = meta.relativePath.slice(parentPath.length);
	    }

	    let path = joinPaths([parentPath, meta.relativePath]);
	    let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
	    // route tree depth-first and child routes appear before their parents in
	    // the "flattened" version.

	    if (route.children && route.children.length > 0) {
	      invariant( // Our types know better, but runtime JS may not!
	      // @ts-expect-error
	      route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
	      flattenRoutes(route.children, branches, routesMeta, path);
	    } // Routes without a path shouldn't ever match by themselves unless they are
	    // index routes, so don't add them to the list of possible branches.


	    if (route.path == null && !route.index) {
	      return;
	    }

	    branches.push({
	      path,
	      score: computeScore(path, route.index),
	      routesMeta
	    });
	  };

	  routes.forEach((route, index) => {
	    var _route$path;

	    // coarse-grain check for optional params
	    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
	      flattenRoute(route, index);
	    } else {
	      for (let exploded of explodeOptionalSegments(route.path)) {
	        flattenRoute(route, index, exploded);
	      }
	    }
	  });
	  return branches;
	}
	/**
	 * Computes all combinations of optional path segments for a given path,
	 * excluding combinations that are ambiguous and of lower priority.
	 *
	 * For example, `/one/:two?/three/:four?/:five?` explodes to:
	 * - `/one/three`
	 * - `/one/:two/three`
	 * - `/one/three/:four`
	 * - `/one/three/:five`
	 * - `/one/:two/three/:four`
	 * - `/one/:two/three/:five`
	 * - `/one/three/:four/:five`
	 * - `/one/:two/three/:four/:five`
	 */


	function explodeOptionalSegments(path) {
	  let segments = path.split("/");
	  if (segments.length === 0) return [];
	  let [first, ...rest] = segments; // Optional path segments are denoted by a trailing `?`

	  let isOptional = first.endsWith("?"); // Compute the corresponding required segment: `foo?` -> `foo`

	  let required = first.replace(/\?$/, "");

	  if (rest.length === 0) {
	    // Intepret empty string as omitting an optional segment
	    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
	    return isOptional ? [required, ""] : [required];
	  }

	  let restExploded = explodeOptionalSegments(rest.join("/"));
	  let result = []; // All child paths with the prefix.  Do this for all children before the
	  // optional version for all children so we get consistent ordering where the
	  // parent optional aspect is preferred as required.  Otherwise, we can get
	  // child sections interspersed where deeper optional segments are higher than
	  // parent optional segments, where for example, /:two would explodes _earlier_
	  // then /:one.  By always including the parent as required _for all children_
	  // first, we avoid this issue

	  result.push(...restExploded.map(subpath => subpath === "" ? required : [required, subpath].join("/"))); // Then if this is an optional value, add all child versions without

	  if (isOptional) {
	    result.push(...restExploded);
	  } // for absolute paths, ensure `/` instead of empty segment


	  return result.map(exploded => path.startsWith("/") && exploded === "" ? "/" : exploded);
	}

	function rankRouteBranches(branches) {
	  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
	  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
	}

	const paramRe = /^:\w+$/;
	const dynamicSegmentValue = 3;
	const indexRouteValue = 2;
	const emptySegmentValue = 1;
	const staticSegmentValue = 10;
	const splatPenalty = -2;

	const isSplat = s => s === "*";

	function computeScore(path, index) {
	  let segments = path.split("/");
	  let initialScore = segments.length;

	  if (segments.some(isSplat)) {
	    initialScore += splatPenalty;
	  }

	  if (index) {
	    initialScore += indexRouteValue;
	  }

	  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
	}

	function compareIndexes(a, b) {
	  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
	  return siblings ? // If two routes are siblings, we should try to match the earlier sibling
	  // first. This allows people to have fine-grained control over the matching
	  // behavior by simply putting routes with identical paths in the order they
	  // want them tried.
	  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
	  // so they sort equally.
	  0;
	}

	function matchRouteBranch(branch, pathname) {
	  let {
	    routesMeta
	  } = branch;
	  let matchedParams = {};
	  let matchedPathname = "/";
	  let matches = [];

	  for (let i = 0; i < routesMeta.length; ++i) {
	    let meta = routesMeta[i];
	    let end = i === routesMeta.length - 1;
	    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
	    let match = matchPath({
	      path: meta.relativePath,
	      caseSensitive: meta.caseSensitive,
	      end
	    }, remainingPathname);
	    if (!match) return null;
	    Object.assign(matchedParams, match.params);
	    let route = meta.route;
	    matches.push({
	      // TODO: Can this as be avoided?
	      params: matchedParams,
	      pathname: joinPaths([matchedPathname, match.pathname]),
	      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
	      route
	    });

	    if (match.pathnameBase !== "/") {
	      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
	    }
	  }

	  return matches;
	}
	/**
	 * Performs pattern matching on a URL pathname and returns information about
	 * the match.
	 *
	 * @see https://reactrouter.com/utils/match-path
	 */

	function matchPath(pattern, pathname) {
	  if (typeof pattern === "string") {
	    pattern = {
	      path: pattern,
	      caseSensitive: false,
	      end: true
	    };
	  }

	  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
	  let match = pathname.match(matcher);
	  if (!match) return null;
	  let matchedPathname = match[0];
	  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
	  let captureGroups = match.slice(1);
	  let params = paramNames.reduce((memo, paramName, index) => {
	    // We need to compute the pathnameBase here using the raw splat value
	    // instead of using params["*"] later because it will be decoded then
	    if (paramName === "*") {
	      let splatValue = captureGroups[index] || "";
	      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
	    }

	    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
	    return memo;
	  }, {});
	  return {
	    params,
	    pathname: matchedPathname,
	    pathnameBase,
	    pattern
	  };
	}

	function compilePath(path, caseSensitive, end) {
	  if (caseSensitive === void 0) {
	    caseSensitive = false;
	  }

	  if (end === void 0) {
	    end = true;
	  }

	  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
	  let paramNames = [];
	  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
	  .replace(/^\/*/, "/") // Make sure it has a leading /
	  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
	  .replace(/\/:(\w+)/g, (_, paramName) => {
	    paramNames.push(paramName);
	    return "/([^\\/]+)";
	  });

	  if (path.endsWith("*")) {
	    paramNames.push("*");
	    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
	    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
	  } else if (end) {
	    // When matching to the end, ignore trailing slashes
	    regexpSource += "\\/*$";
	  } else if (path !== "" && path !== "/") {
	    // If our path is non-empty and contains anything beyond an initial slash,
	    // then we have _some_ form of path in our regex so we should expect to
	    // match only if we find the end of this path segment.  Look for an optional
	    // non-captured trailing slash (to match a portion of the URL) or the end
	    // of the path (if we've matched to the end).  We used to do this with a
	    // word boundary but that gives false positives on routes like
	    // /user-preferences since `-` counts as a word boundary.
	    regexpSource += "(?:(?=\\/|$))";
	  } else ;

	  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
	  return [matcher, paramNames];
	}

	function safelyDecodeURI(value) {
	  try {
	    return decodeURI(value);
	  } catch (error) {
	    warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
	    return value;
	  }
	}

	function safelyDecodeURIComponent(value, paramName) {
	  try {
	    return decodeURIComponent(value);
	  } catch (error) {
	    warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ")."));
	    return value;
	  }
	}
	/**
	 * @private
	 */


	function stripBasename(pathname, basename) {
	  if (basename === "/") return pathname;

	  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
	    return null;
	  } // We want to leave trailing slash behavior in the user's control, so if they
	  // specify a basename with a trailing slash, we should support it


	  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
	  let nextChar = pathname.charAt(startIndex);

	  if (nextChar && nextChar !== "/") {
	    // pathname does not start with basename/
	    return null;
	  }

	  return pathname.slice(startIndex) || "/";
	}
	/**
	 * @private
	 */

	function warning(cond, message) {
	  if (!cond) {
	    // eslint-disable-next-line no-console
	    if (typeof console !== "undefined") console.warn(message);

	    try {
	      // Welcome to debugging React Router!
	      //
	      // This error is thrown as a convenience so you can more easily
	      // find the source for a warning that appears in the console by
	      // enabling "pause on exceptions" in your JavaScript debugger.
	      throw new Error(message); // eslint-disable-next-line no-empty
	    } catch (e) {}
	  }
	}
	/**
	 * Returns a resolved path object relative to the given pathname.
	 *
	 * @see https://reactrouter.com/utils/resolve-path
	 */

	function resolvePath(to, fromPathname) {
	  if (fromPathname === void 0) {
	    fromPathname = "/";
	  }

	  let {
	    pathname: toPathname,
	    search = "",
	    hash = ""
	  } = typeof to === "string" ? parsePath(to) : to;
	  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
	  return {
	    pathname,
	    search: normalizeSearch(search),
	    hash: normalizeHash(hash)
	  };
	}

	function resolvePathname(relativePath, fromPathname) {
	  let segments = fromPathname.replace(/\/+$/, "").split("/");
	  let relativeSegments = relativePath.split("/");
	  relativeSegments.forEach(segment => {
	    if (segment === "..") {
	      // Keep the root "" segment so the pathname starts at /
	      if (segments.length > 1) segments.pop();
	    } else if (segment !== ".") {
	      segments.push(segment);
	    }
	  });
	  return segments.length > 1 ? segments.join("/") : "/";
	}

	function getInvalidPathError(char, field, dest, path) {
	  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
	}
	/**
	 * @private
	 *
	 * When processing relative navigation we want to ignore ancestor routes that
	 * do not contribute to the path, such that index/pathless layout routes don't
	 * interfere.
	 *
	 * For example, when moving a route element into an index route and/or a
	 * pathless layout route, relative link behavior contained within should stay
	 * the same.  Both of the following examples should link back to the root:
	 *
	 *   <Route path="/">
	 *     <Route path="accounts" element={<Link to=".."}>
	 *   </Route>
	 *
	 *   <Route path="/">
	 *     <Route path="accounts">
	 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
	 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
	 *       </Route
	 *     </Route>
	 *   </Route>
	 */


	function getPathContributingMatches(matches) {
	  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
	}
	/**
	 * @private
	 */

	function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
	  if (isPathRelative === void 0) {
	    isPathRelative = false;
	  }

	  let to;

	  if (typeof toArg === "string") {
	    to = parsePath(toArg);
	  } else {
	    to = _extends$2({}, toArg);
	    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
	    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
	    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
	  }

	  let isEmptyPath = toArg === "" || to.pathname === "";
	  let toPathname = isEmptyPath ? "/" : to.pathname;
	  let from; // Routing is relative to the current pathname if explicitly requested.
	  //
	  // If a pathname is explicitly provided in `to`, it should be relative to the
	  // route context. This is explained in `Note on `<Link to>` values` in our
	  // migration guide from v5 as a means of disambiguation between `to` values
	  // that begin with `/` and those that do not. However, this is problematic for
	  // `to` values that do not provide a pathname. `to` can simply be a search or
	  // hash string, in which case we should assume that the navigation is relative
	  // to the current location's pathname and *not* the route pathname.

	  if (isPathRelative || toPathname == null) {
	    from = locationPathname;
	  } else {
	    let routePathnameIndex = routePathnames.length - 1;

	    if (toPathname.startsWith("..")) {
	      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
	      // URL segment".  This is a key difference from how <a href> works and a
	      // major reason we call this a "to" value instead of a "href".

	      while (toSegments[0] === "..") {
	        toSegments.shift();
	        routePathnameIndex -= 1;
	      }

	      to.pathname = toSegments.join("/");
	    } // If there are more ".." segments than parent routes, resolve relative to
	    // the root / URL.


	    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
	  }

	  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original "to" had one

	  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/"); // Or if this was a link to the current path which has a trailing slash

	  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");

	  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
	    path.pathname += "/";
	  }

	  return path;
	}
	/**
	 * @private
	 */

	const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
	/**
	 * @private
	 */

	const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
	/**
	 * @private
	 */

	const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
	/**
	 * @private
	 */

	const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
	class AbortedDeferredError extends Error {}
	class DeferredData {
	  constructor(data) {
	    this.pendingKeys = new Set();
	    this.subscriber = undefined;
	    invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects"); // Set up an AbortController + Promise we can race against to exit early
	    // cancellation

	    let reject;
	    this.abortPromise = new Promise((_, r) => reject = r);
	    this.controller = new AbortController();

	    let onAbort = () => reject(new AbortedDeferredError("Deferred data aborted"));

	    this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", onAbort);

	    this.controller.signal.addEventListener("abort", onAbort);
	    this.data = Object.entries(data).reduce((acc, _ref) => {
	      let [key, value] = _ref;
	      return Object.assign(acc, {
	        [key]: this.trackPromise(key, value)
	      });
	    }, {});
	  }

	  trackPromise(key, value) {
	    if (!(value instanceof Promise)) {
	      return value;
	    }

	    this.pendingKeys.add(key); // We store a little wrapper promise that will be extended with
	    // _data/_error props upon resolve/reject

	    let promise = Promise.race([value, this.abortPromise]).then(data => this.onSettle(promise, key, null, data), error => this.onSettle(promise, key, error)); // Register rejection listeners to avoid uncaught promise rejections on
	    // errors or aborted deferred values

	    promise.catch(() => {});
	    Object.defineProperty(promise, "_tracked", {
	      get: () => true
	    });
	    return promise;
	  }

	  onSettle(promise, key, error, data) {
	    if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
	      this.unlistenAbortSignal();
	      Object.defineProperty(promise, "_error", {
	        get: () => error
	      });
	      return Promise.reject(error);
	    }

	    this.pendingKeys.delete(key);

	    if (this.done) {
	      // Nothing left to abort!
	      this.unlistenAbortSignal();
	    }

	    const subscriber = this.subscriber;

	    if (error) {
	      Object.defineProperty(promise, "_error", {
	        get: () => error
	      });
	      subscriber && subscriber(false);
	      return Promise.reject(error);
	    }

	    Object.defineProperty(promise, "_data", {
	      get: () => data
	    });
	    subscriber && subscriber(false);
	    return data;
	  }

	  subscribe(fn) {
	    this.subscriber = fn;
	  }

	  cancel() {
	    this.controller.abort();
	    this.pendingKeys.forEach((v, k) => this.pendingKeys.delete(k));
	    let subscriber = this.subscriber;
	    subscriber && subscriber(true);
	  }

	  async resolveData(signal) {
	    let aborted = false;

	    if (!this.done) {
	      let onAbort = () => this.cancel();

	      signal.addEventListener("abort", onAbort);
	      aborted = await new Promise(resolve => {
	        this.subscribe(aborted => {
	          signal.removeEventListener("abort", onAbort);

	          if (aborted || this.done) {
	            resolve(aborted);
	          }
	        });
	      });
	    }

	    return aborted;
	  }

	  get done() {
	    return this.pendingKeys.size === 0;
	  }

	  get unwrappedData() {
	    invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
	    return Object.entries(this.data).reduce((acc, _ref2) => {
	      let [key, value] = _ref2;
	      return Object.assign(acc, {
	        [key]: unwrapTrackedPromise(value)
	      });
	    }, {});
	  }

	}

	function isTrackedPromise(value) {
	  return value instanceof Promise && value._tracked === true;
	}

	function unwrapTrackedPromise(value) {
	  if (!isTrackedPromise(value)) {
	    return value;
	  }

	  if (value._error) {
	    throw value._error;
	  }

	  return value._data;
	}
	/**
	 * @private
	 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
	 */

	class ErrorResponse {
	  constructor(status, statusText, data, internal) {
	    if (internal === void 0) {
	      internal = false;
	    }

	    this.status = status;
	    this.statusText = statusText || "";
	    this.internal = internal;

	    if (data instanceof Error) {
	      this.data = data.toString();
	      this.error = data;
	    } else {
	      this.data = data;
	    }
	  }

	}
	/**
	 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
	 * Response throw from an action/loader
	 */

	function isRouteErrorResponse(e) {
	  return e instanceof ErrorResponse;
	}

	const validMutationMethodsArr = ["post", "put", "patch", "delete"];
	const validMutationMethods = new Set(validMutationMethodsArr);
	const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
	const validRequestMethods = new Set(validRequestMethodsArr);
	const redirectStatusCodes = new Set([301, 302, 303, 307, 308]);
	const redirectPreserveMethodStatusCodes = new Set([307, 308]);
	const IDLE_NAVIGATION = {
	  state: "idle",
	  location: undefined,
	  formMethod: undefined,
	  formAction: undefined,
	  formEncType: undefined,
	  formData: undefined
	};
	const IDLE_FETCHER = {
	  state: "idle",
	  data: undefined,
	  formMethod: undefined,
	  formAction: undefined,
	  formEncType: undefined,
	  formData: undefined
	};
	const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
	const isServer = !isBrowser; //#endregion
	////////////////////////////////////////////////////////////////////////////////
	//#region createRouter
	////////////////////////////////////////////////////////////////////////////////

	/**
	 * Create a router and listen to history POP navigations
	 */

	function createRouter(init) {
	  invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
	  let dataRoutes = convertRoutesToDataRoutes(init.routes); // Cleanup function for history

	  let unlistenHistory = null; // Externally-provided functions to call on all state changes

	  let subscribers = new Set(); // Externally-provided object to hold scroll restoration locations during routing

	  let savedScrollPositions = null; // Externally-provided function to get scroll restoration keys

	  let getScrollRestorationKey = null; // Externally-provided function to get current scroll position

	  let getScrollPosition = null; // One-time flag to control the initial hydration scroll restoration.  Because
	  // we don't get the saved positions from <ScrollRestoration /> until _after_
	  // the initial render, we need to manually trigger a separate updateState to
	  // send along the restoreScrollPosition
	  // Set to true if we have `hydrationData` since we assume we were SSR'd and that
	  // SSR did the initial scroll restoration.

	  let initialScrollRestored = init.hydrationData != null;
	  let initialMatches = matchRoutes(dataRoutes, init.history.location, init.basename);
	  let initialErrors = null;

	  if (initialMatches == null) {
	    // If we do not match a user-provided-route, fall back to the root
	    // to allow the error boundary to take over
	    let error = getInternalRouterError(404, {
	      pathname: init.history.location.pathname
	    });
	    let {
	      matches,
	      route
	    } = getShortCircuitMatches(dataRoutes);
	    initialMatches = matches;
	    initialErrors = {
	      [route.id]: error
	    };
	  }

	  let initialized = !initialMatches.some(m => m.route.loader) || init.hydrationData != null;
	  let router;
	  let state = {
	    historyAction: init.history.action,
	    location: init.history.location,
	    matches: initialMatches,
	    initialized,
	    navigation: IDLE_NAVIGATION,
	    // Don't restore on initial updateState() if we were SSR'd
	    restoreScrollPosition: init.hydrationData != null ? false : null,
	    preventScrollReset: false,
	    revalidation: "idle",
	    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
	    actionData: init.hydrationData && init.hydrationData.actionData || null,
	    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
	    fetchers: new Map()
	  }; // -- Stateful internal variables to manage navigations --
	  // Current navigation in progress (to be committed in completeNavigation)

	  let pendingAction = Action.Pop; // Should the current navigation prevent the scroll reset if scroll cannot
	  // be restored?

	  let pendingPreventScrollReset = false; // AbortController for the active navigation

	  let pendingNavigationController; // We use this to avoid touching history in completeNavigation if a
	  // revalidation is entirely uninterrupted

	  let isUninterruptedRevalidation = false; // Use this internal flag to force revalidation of all loaders:
	  //  - submissions (completed or interrupted)
	  //  - useRevalidate()
	  //  - X-Remix-Revalidate (from redirect)

	  let isRevalidationRequired = false; // Use this internal array to capture routes that require revalidation due
	  // to a cancelled deferred on action submission

	  let cancelledDeferredRoutes = []; // Use this internal array to capture fetcher loads that were cancelled by an
	  // action navigation and require revalidation

	  let cancelledFetcherLoads = []; // AbortControllers for any in-flight fetchers

	  let fetchControllers = new Map(); // Track loads based on the order in which they started

	  let incrementingLoadId = 0; // Track the outstanding pending navigation data load to be compared against
	  // the globally incrementing load when a fetcher load lands after a completed
	  // navigation

	  let pendingNavigationLoadId = -1; // Fetchers that triggered data reloads as a result of their actions

	  let fetchReloadIds = new Map(); // Fetchers that triggered redirect navigations from their actions

	  let fetchRedirectIds = new Set(); // Most recent href/match for fetcher.load calls for fetchers

	  let fetchLoadMatches = new Map(); // Store DeferredData instances for active route matches.  When a
	  // route loader returns defer() we stick one in here.  Then, when a nested
	  // promise resolves we update loaderData.  If a new navigation starts we
	  // cancel active deferreds for eliminated routes.

	  let activeDeferreds = new Map(); // Initialize the router, all side effects should be kicked off from here.
	  // Implemented as a Fluent API for ease of:
	  //   let router = createRouter(init).initialize();

	  function initialize() {
	    // If history informs us of a POP navigation, start the navigation but do not update
	    // state.  We'll update our own state once the navigation completes
	    unlistenHistory = init.history.listen(_ref => {
	      let {
	        action: historyAction,
	        location
	      } = _ref;
	      return startNavigation(historyAction, location);
	    }); // Kick off initial data load if needed.  Use Pop to avoid modifying history

	    if (!state.initialized) {
	      startNavigation(Action.Pop, state.location);
	    }

	    return router;
	  } // Clean up a router and it's side effects


	  function dispose() {
	    if (unlistenHistory) {
	      unlistenHistory();
	    }

	    subscribers.clear();
	    pendingNavigationController && pendingNavigationController.abort();
	    state.fetchers.forEach((_, key) => deleteFetcher(key));
	  } // Subscribe to state updates for the router


	  function subscribe(fn) {
	    subscribers.add(fn);
	    return () => subscribers.delete(fn);
	  } // Update our state and notify the calling context of the change


	  function updateState(newState) {
	    state = _extends$2({}, state, newState);
	    subscribers.forEach(subscriber => subscriber(state));
	  } // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
	  // and setting state.[historyAction/location/matches] to the new route.
	  // - Location is a required param
	  // - Navigation will always be set to IDLE_NAVIGATION
	  // - Can pass any other state in newState


	  function completeNavigation(location, newState) {
	    var _location$state;

	    // Deduce if we're in a loading/actionReload state:
	    // - We have committed actionData in the store
	    // - The current navigation was a mutation submission
	    // - We're past the submitting state and into the loading state
	    // - The location being loaded is not the result of a redirect
	    let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
	    let actionData;

	    if (newState.actionData) {
	      if (Object.keys(newState.actionData).length > 0) {
	        actionData = newState.actionData;
	      } else {
	        // Empty actionData -> clear prior actionData due to an action error
	        actionData = null;
	      }
	    } else if (isActionReload) {
	      // Keep the current data if we're wrapping up the action reload
	      actionData = state.actionData;
	    } else {
	      // Clear actionData on any other completed navigations
	      actionData = null;
	    } // Always preserve any existing loaderData from re-used routes


	    let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
	    updateState(_extends$2({}, newState, {
	      actionData,
	      loaderData,
	      historyAction: pendingAction,
	      location,
	      initialized: true,
	      navigation: IDLE_NAVIGATION,
	      revalidation: "idle",
	      // Don't restore on submission navigations
	      restoreScrollPosition: state.navigation.formData ? false : getSavedScrollPosition(location, newState.matches || state.matches),
	      preventScrollReset: pendingPreventScrollReset
	    }));

	    if (isUninterruptedRevalidation) ; else if (pendingAction === Action.Pop) ; else if (pendingAction === Action.Push) {
	      init.history.push(location, location.state);
	    } else if (pendingAction === Action.Replace) {
	      init.history.replace(location, location.state);
	    } // Reset stateful navigation vars


	    pendingAction = Action.Pop;
	    pendingPreventScrollReset = false;
	    isUninterruptedRevalidation = false;
	    isRevalidationRequired = false;
	    cancelledDeferredRoutes = [];
	    cancelledFetcherLoads = [];
	  } // Trigger a navigation event, which can either be a numerical POP or a PUSH
	  // replace with an optional submission


	  async function navigate(to, opts) {
	    if (typeof to === "number") {
	      init.history.go(to);
	      return;
	    }

	    let {
	      path,
	      submission,
	      error
	    } = normalizeNavigateOptions(to, opts);
	    let location = createLocation(state.location, path, opts && opts.state); // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
	    // URL from window.location, so we need to encode it here so the behavior
	    // remains the same as POP and non-data-router usages.  new URL() does all
	    // the same encoding we'd get from a history.pushState/window.location read
	    // without having to touch history

	    location = _extends$2({}, location, init.history.encodeLocation(location));
	    let userReplace = opts && opts.replace != null ? opts.replace : undefined;
	    let historyAction = Action.Push;

	    if (userReplace === true) {
	      historyAction = Action.Replace;
	    } else if (userReplace === false) ; else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
	      // By default on submissions to the current location we REPLACE so that
	      // users don't have to double-click the back button to get to the prior
	      // location.  If the user redirects to a different location from the
	      // action/loader this will be ignored and the redirect will be a PUSH
	      historyAction = Action.Replace;
	    }

	    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
	    return await startNavigation(historyAction, location, {
	      submission,
	      // Send through the formData serialization error if we have one so we can
	      // render at the right error boundary after we match routes
	      pendingError: error,
	      preventScrollReset,
	      replace: opts && opts.replace
	    });
	  } // Revalidate all current loaders.  If a navigation is in progress or if this
	  // is interrupted by a navigation, allow this to "succeed" by calling all
	  // loaders during the next loader round


	  function revalidate() {
	    interruptActiveLoads();
	    updateState({
	      revalidation: "loading"
	    }); // If we're currently submitting an action, we don't need to start a new
	    // navigation, we'll just let the follow up loader execution call all loaders

	    if (state.navigation.state === "submitting") {
	      return;
	    } // If we're currently in an idle state, start a new navigation for the current
	    // action/location and mark it as uninterrupted, which will skip the history
	    // update in completeNavigation


	    if (state.navigation.state === "idle") {
	      startNavigation(state.historyAction, state.location, {
	        startUninterruptedRevalidation: true
	      });
	      return;
	    } // Otherwise, if we're currently in a loading state, just start a new
	    // navigation to the navigation.location but do not trigger an uninterrupted
	    // revalidation so that history correctly updates once the navigation completes


	    startNavigation(pendingAction || state.historyAction, state.navigation.location, {
	      overrideNavigation: state.navigation
	    });
	  } // Start a navigation to the given action/location.  Can optionally provide a
	  // overrideNavigation which will override the normalLoad in the case of a redirect
	  // navigation


	  async function startNavigation(historyAction, location, opts) {
	    // Abort any in-progress navigations and start a new one. Unset any ongoing
	    // uninterrupted revalidations unless told otherwise, since we want this
	    // new navigation to update history normally
	    pendingNavigationController && pendingNavigationController.abort();
	    pendingNavigationController = null;
	    pendingAction = historyAction;
	    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true; // Save the current scroll position every time we start a new navigation,
	    // and track whether we should reset scroll on completion

	    saveScrollPosition(state.location, state.matches);
	    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
	    let loadingNavigation = opts && opts.overrideNavigation;
	    let matches = matchRoutes(dataRoutes, location, init.basename); // Short circuit with a 404 on the root error boundary if we match nothing

	    if (!matches) {
	      let error = getInternalRouterError(404, {
	        pathname: location.pathname
	      });
	      let {
	        matches: notFoundMatches,
	        route
	      } = getShortCircuitMatches(dataRoutes); // Cancel all pending deferred on 404s since we don't keep any routes

	      cancelActiveDeferreds();
	      completeNavigation(location, {
	        matches: notFoundMatches,
	        loaderData: {},
	        errors: {
	          [route.id]: error
	        }
	      });
	      return;
	    } // Short circuit if it's only a hash change


	    if (isHashChangeOnly(state.location, location)) {
	      completeNavigation(location, {
	        matches
	      });
	      return;
	    } // Create a controller/Request for this navigation


	    pendingNavigationController = new AbortController();
	    let request = createClientSideRequest(location, pendingNavigationController.signal, opts && opts.submission);
	    let pendingActionData;
	    let pendingError;

	    if (opts && opts.pendingError) {
	      // If we have a pendingError, it means the user attempted a GET submission
	      // with binary FormData so assign here and skip to handleLoaders.  That
	      // way we handle calling loaders above the boundary etc.  It's not really
	      // different from an actionError in that sense.
	      pendingError = {
	        [findNearestBoundary(matches).route.id]: opts.pendingError
	      };
	    } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
	      // Call action if we received an action submission
	      let actionOutput = await handleAction(request, location, opts.submission, matches, {
	        replace: opts.replace
	      });

	      if (actionOutput.shortCircuited) {
	        return;
	      }

	      pendingActionData = actionOutput.pendingActionData;
	      pendingError = actionOutput.pendingActionError;

	      let navigation = _extends$2({
	        state: "loading",
	        location
	      }, opts.submission);

	      loadingNavigation = navigation; // Create a GET request for the loaders

	      request = new Request(request.url, {
	        signal: request.signal
	      });
	    } // Call loaders


	    let {
	      shortCircuited,
	      loaderData,
	      errors
	    } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.replace, pendingActionData, pendingError);

	    if (shortCircuited) {
	      return;
	    } // Clean up now that the action/loaders have completed.  Don't clean up if
	    // we short circuited because pendingNavigationController will have already
	    // been assigned to a new controller for the next navigation


	    pendingNavigationController = null;
	    completeNavigation(location, _extends$2({
	      matches
	    }, pendingActionData ? {
	      actionData: pendingActionData
	    } : {}, {
	      loaderData,
	      errors
	    }));
	  } // Call the action matched by the leaf route for this navigation and handle
	  // redirects/errors


	  async function handleAction(request, location, submission, matches, opts) {
	    interruptActiveLoads(); // Put us in a submitting state

	    let navigation = _extends$2({
	      state: "submitting",
	      location
	    }, submission);

	    updateState({
	      navigation
	    }); // Call our action and get the result

	    let result;
	    let actionMatch = getTargetMatch(matches, location);

	    if (!actionMatch.route.action) {
	      result = {
	        type: ResultType.error,
	        error: getInternalRouterError(405, {
	          method: request.method,
	          pathname: location.pathname,
	          routeId: actionMatch.route.id
	        })
	      };
	    } else {
	      result = await callLoaderOrAction("action", request, actionMatch, matches, router.basename);

	      if (request.signal.aborted) {
	        return {
	          shortCircuited: true
	        };
	      }
	    }

	    if (isRedirectResult(result)) {
	      let replace;

	      if (opts && opts.replace != null) {
	        replace = opts.replace;
	      } else {
	        // If the user didn't explicity indicate replace behavior, replace if
	        // we redirected to the exact same location we're currently at to avoid
	        // double back-buttons
	        replace = result.location === state.location.pathname + state.location.search;
	      }

	      await startRedirectNavigation(state, result, {
	        submission,
	        replace
	      });
	      return {
	        shortCircuited: true
	      };
	    }

	    if (isErrorResult(result)) {
	      // Store off the pending error - we use it to determine which loaders
	      // to call and will commit it when we complete the navigation
	      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id); // By default, all submissions are REPLACE navigations, but if the
	      // action threw an error that'll be rendered in an errorElement, we fall
	      // back to PUSH so that the user can use the back button to get back to
	      // the pre-submission form location to try again

	      if ((opts && opts.replace) !== true) {
	        pendingAction = Action.Push;
	      }

	      return {
	        // Send back an empty object we can use to clear out any prior actionData
	        pendingActionData: {},
	        pendingActionError: {
	          [boundaryMatch.route.id]: result.error
	        }
	      };
	    }

	    if (isDeferredResult(result)) {
	      throw new Error("defer() is not supported in actions");
	    }

	    return {
	      pendingActionData: {
	        [actionMatch.route.id]: result.data
	      }
	    };
	  } // Call all applicable loaders for the given matches, handling redirects,
	  // errors, etc.


	  async function handleLoaders(request, location, matches, overrideNavigation, submission, replace, pendingActionData, pendingError) {
	    // Figure out the right navigation we want to use for data loading
	    let loadingNavigation = overrideNavigation;

	    if (!loadingNavigation) {
	      let navigation = _extends$2({
	        state: "loading",
	        location,
	        formMethod: undefined,
	        formAction: undefined,
	        formEncType: undefined,
	        formData: undefined
	      }, submission);

	      loadingNavigation = navigation;
	    } // If this was a redirect from an action we don't have a "submission" but
	    // we have it on the loading navigation so use that if available


	    let activeSubmission = submission ? submission : loadingNavigation.formMethod && loadingNavigation.formAction && loadingNavigation.formData && loadingNavigation.formEncType ? {
	      formMethod: loadingNavigation.formMethod,
	      formAction: loadingNavigation.formAction,
	      formData: loadingNavigation.formData,
	      formEncType: loadingNavigation.formEncType
	    } : undefined;
	    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(state, matches, activeSubmission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, pendingActionData, pendingError, fetchLoadMatches); // Cancel pending deferreds for no-longer-matched routes or routes we're
	    // about to reload.  Note that if this is an action reload we would have
	    // already cancelled all pending deferreds so this would be a no-op

	    cancelActiveDeferreds(routeId => !(matches && matches.some(m => m.route.id === routeId)) || matchesToLoad && matchesToLoad.some(m => m.route.id === routeId)); // Short circuit if we have no loaders to run

	    if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
	      completeNavigation(location, _extends$2({
	        matches,
	        loaderData: {},
	        // Commit pending error if we're short circuiting
	        errors: pendingError || null
	      }, pendingActionData ? {
	        actionData: pendingActionData
	      } : {}));
	      return {
	        shortCircuited: true
	      };
	    } // If this is an uninterrupted revalidation, we remain in our current idle
	    // state.  If not, we need to switch to our loading state and load data,
	    // preserving any new action data or existing action data (in the case of
	    // a revalidation interrupting an actionReload)


	    if (!isUninterruptedRevalidation) {
	      revalidatingFetchers.forEach(_ref2 => {
	        let [key] = _ref2;
	        let fetcher = state.fetchers.get(key);
	        let revalidatingFetcher = {
	          state: "loading",
	          data: fetcher && fetcher.data,
	          formMethod: undefined,
	          formAction: undefined,
	          formEncType: undefined,
	          formData: undefined,
	          " _hasFetcherDoneAnything ": true
	        };
	        state.fetchers.set(key, revalidatingFetcher);
	      });
	      let actionData = pendingActionData || state.actionData;
	      updateState(_extends$2({
	        navigation: loadingNavigation
	      }, actionData ? Object.keys(actionData).length === 0 ? {
	        actionData: null
	      } : {
	        actionData
	      } : {}, revalidatingFetchers.length > 0 ? {
	        fetchers: new Map(state.fetchers)
	      } : {}));
	    }

	    pendingNavigationLoadId = ++incrementingLoadId;
	    revalidatingFetchers.forEach(_ref3 => {
	      let [key] = _ref3;
	      return fetchControllers.set(key, pendingNavigationController);
	    });
	    let {
	      results,
	      loaderResults,
	      fetcherResults
	    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);

	    if (request.signal.aborted) {
	      return {
	        shortCircuited: true
	      };
	    } // Clean up _after_ loaders have completed.  Don't clean up if we short
	    // circuited because fetchControllers would have been aborted and
	    // reassigned to new controllers for the next navigation


	    revalidatingFetchers.forEach(_ref4 => {
	      let [key] = _ref4;
	      return fetchControllers.delete(key);
	    }); // If any loaders returned a redirect Response, start a new REPLACE navigation

	    let redirect = findRedirect(results);

	    if (redirect) {
	      await startRedirectNavigation(state, redirect, {
	        replace
	      });
	      return {
	        shortCircuited: true
	      };
	    } // Process and commit output from loaders


	    let {
	      loaderData,
	      errors
	    } = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds); // Wire up subscribers to update loaderData as promises settle

	    activeDeferreds.forEach((deferredData, routeId) => {
	      deferredData.subscribe(aborted => {
	        // Note: No need to updateState here since the TrackedPromise on
	        // loaderData is stable across resolve/reject
	        // Remove this instance if we were aborted or if promises have settled
	        if (aborted || deferredData.done) {
	          activeDeferreds.delete(routeId);
	        }
	      });
	    });
	    markFetchRedirectsDone();
	    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
	    return _extends$2({
	      loaderData,
	      errors
	    }, didAbortFetchLoads || revalidatingFetchers.length > 0 ? {
	      fetchers: new Map(state.fetchers)
	    } : {});
	  }

	  function getFetcher(key) {
	    return state.fetchers.get(key) || IDLE_FETCHER;
	  } // Trigger a fetcher load/submit for the given fetcher key


	  function fetch(key, routeId, href, opts) {
	    if (isServer) {
	      throw new Error("router.fetch() was called during the server render, but it shouldn't be. " + "You are likely calling a useFetcher() method in the body of your component. " + "Try moving it to a useEffect or a callback.");
	    }

	    if (fetchControllers.has(key)) abortFetcher(key);
	    let matches = matchRoutes(dataRoutes, href, init.basename);

	    if (!matches) {
	      setFetcherError(key, routeId, getInternalRouterError(404, {
	        pathname: href
	      }));
	      return;
	    }

	    let {
	      path,
	      submission
	    } = normalizeNavigateOptions(href, opts, true);
	    let match = getTargetMatch(matches, path);

	    if (submission && isMutationMethod(submission.formMethod)) {
	      handleFetcherAction(key, routeId, path, match, matches, submission);
	      return;
	    } // Store off the match so we can call it's shouldRevalidate on subsequent
	    // revalidations


	    fetchLoadMatches.set(key, [path, match, matches]);
	    handleFetcherLoader(key, routeId, path, match, matches, submission);
	  } // Call the action for the matched fetcher.submit(), and then handle redirects,
	  // errors, and revalidation


	  async function handleFetcherAction(key, routeId, path, match, requestMatches, submission) {
	    interruptActiveLoads();
	    fetchLoadMatches.delete(key);

	    if (!match.route.action) {
	      let error = getInternalRouterError(405, {
	        method: submission.formMethod,
	        pathname: path,
	        routeId: routeId
	      });
	      setFetcherError(key, routeId, error);
	      return;
	    } // Put this fetcher into it's submitting state


	    let existingFetcher = state.fetchers.get(key);

	    let fetcher = _extends$2({
	      state: "submitting"
	    }, submission, {
	      data: existingFetcher && existingFetcher.data,
	      " _hasFetcherDoneAnything ": true
	    });

	    state.fetchers.set(key, fetcher);
	    updateState({
	      fetchers: new Map(state.fetchers)
	    }); // Call the action for the fetcher

	    let abortController = new AbortController();
	    let fetchRequest = createClientSideRequest(path, abortController.signal, submission);
	    fetchControllers.set(key, abortController);
	    let actionResult = await callLoaderOrAction("action", fetchRequest, match, requestMatches, router.basename);

	    if (fetchRequest.signal.aborted) {
	      // We can delete this so long as we weren't aborted by ou our own fetcher
	      // re-submit which would have put _new_ controller is in fetchControllers
	      if (fetchControllers.get(key) === abortController) {
	        fetchControllers.delete(key);
	      }

	      return;
	    }

	    if (isRedirectResult(actionResult)) {
	      fetchControllers.delete(key);
	      fetchRedirectIds.add(key);

	      let loadingFetcher = _extends$2({
	        state: "loading"
	      }, submission, {
	        data: undefined,
	        " _hasFetcherDoneAnything ": true
	      });

	      state.fetchers.set(key, loadingFetcher);
	      updateState({
	        fetchers: new Map(state.fetchers)
	      });
	      return startRedirectNavigation(state, actionResult, {
	        isFetchActionRedirect: true
	      });
	    } // Process any non-redirect errors thrown


	    if (isErrorResult(actionResult)) {
	      setFetcherError(key, routeId, actionResult.error);
	      return;
	    }

	    if (isDeferredResult(actionResult)) {
	      invariant(false, "defer() is not supported in actions");
	    } // Start the data load for current matches, or the next location if we're
	    // in the middle of a navigation


	    let nextLocation = state.navigation.location || state.location;
	    let revalidationRequest = createClientSideRequest(nextLocation, abortController.signal);
	    let matches = state.navigation.state !== "idle" ? matchRoutes(dataRoutes, state.navigation.location, init.basename) : state.matches;
	    invariant(matches, "Didn't find any matches after fetcher action");
	    let loadId = ++incrementingLoadId;
	    fetchReloadIds.set(key, loadId);

	    let loadFetcher = _extends$2({
	      state: "loading",
	      data: actionResult.data
	    }, submission, {
	      " _hasFetcherDoneAnything ": true
	    });

	    state.fetchers.set(key, loadFetcher);
	    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(state, matches, submission, nextLocation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, {
	      [match.route.id]: actionResult.data
	    }, undefined, // No need to send through errors since we short circuit above
	    fetchLoadMatches); // Put all revalidating fetchers into the loading state, except for the
	    // current fetcher which we want to keep in it's current loading state which
	    // contains it's action submission info + action data

	    revalidatingFetchers.filter(_ref5 => {
	      let [staleKey] = _ref5;
	      return staleKey !== key;
	    }).forEach(_ref6 => {
	      let [staleKey] = _ref6;
	      let existingFetcher = state.fetchers.get(staleKey);
	      let revalidatingFetcher = {
	        state: "loading",
	        data: existingFetcher && existingFetcher.data,
	        formMethod: undefined,
	        formAction: undefined,
	        formEncType: undefined,
	        formData: undefined,
	        " _hasFetcherDoneAnything ": true
	      };
	      state.fetchers.set(staleKey, revalidatingFetcher);
	      fetchControllers.set(staleKey, abortController);
	    });
	    updateState({
	      fetchers: new Map(state.fetchers)
	    });
	    let {
	      results,
	      loaderResults,
	      fetcherResults
	    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);

	    if (abortController.signal.aborted) {
	      return;
	    }

	    fetchReloadIds.delete(key);
	    fetchControllers.delete(key);
	    revalidatingFetchers.forEach(_ref7 => {
	      let [staleKey] = _ref7;
	      return fetchControllers.delete(staleKey);
	    });
	    let redirect = findRedirect(results);

	    if (redirect) {
	      return startRedirectNavigation(state, redirect);
	    } // Process and commit output from loaders


	    let {
	      loaderData,
	      errors
	    } = processLoaderData(state, state.matches, matchesToLoad, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
	    let doneFetcher = {
	      state: "idle",
	      data: actionResult.data,
	      formMethod: undefined,
	      formAction: undefined,
	      formEncType: undefined,
	      formData: undefined,
	      " _hasFetcherDoneAnything ": true
	    };
	    state.fetchers.set(key, doneFetcher);
	    let didAbortFetchLoads = abortStaleFetchLoads(loadId); // If we are currently in a navigation loading state and this fetcher is
	    // more recent than the navigation, we want the newer data so abort the
	    // navigation and complete it with the fetcher data

	    if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
	      invariant(pendingAction, "Expected pending action");
	      pendingNavigationController && pendingNavigationController.abort();
	      completeNavigation(state.navigation.location, {
	        matches,
	        loaderData,
	        errors,
	        fetchers: new Map(state.fetchers)
	      });
	    } else {
	      // otherwise just update with the fetcher data, preserving any existing
	      // loaderData for loaders that did not need to reload.  We have to
	      // manually merge here since we aren't going through completeNavigation
	      updateState(_extends$2({
	        errors,
	        loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors)
	      }, didAbortFetchLoads ? {
	        fetchers: new Map(state.fetchers)
	      } : {}));
	      isRevalidationRequired = false;
	    }
	  } // Call the matched loader for fetcher.load(), handling redirects, errors, etc.


	  async function handleFetcherLoader(key, routeId, path, match, matches, submission) {
	    let existingFetcher = state.fetchers.get(key); // Put this fetcher into it's loading state

	    let loadingFetcher = _extends$2({
	      state: "loading",
	      formMethod: undefined,
	      formAction: undefined,
	      formEncType: undefined,
	      formData: undefined
	    }, submission, {
	      data: existingFetcher && existingFetcher.data,
	      " _hasFetcherDoneAnything ": true
	    });

	    state.fetchers.set(key, loadingFetcher);
	    updateState({
	      fetchers: new Map(state.fetchers)
	    }); // Call the loader for this fetcher route match

	    let abortController = new AbortController();
	    let fetchRequest = createClientSideRequest(path, abortController.signal);
	    fetchControllers.set(key, abortController);
	    let result = await callLoaderOrAction("loader", fetchRequest, match, matches, router.basename); // Deferred isn't supported or fetcher loads, await everything and treat it
	    // as a normal load.  resolveDeferredData will return undefined if this
	    // fetcher gets aborted, so we just leave result untouched and short circuit
	    // below if that happens

	    if (isDeferredResult(result)) {
	      result = (await resolveDeferredData(result, fetchRequest.signal, true)) || result;
	    } // We can delete this so long as we weren't aborted by ou our own fetcher
	    // re-load which would have put _new_ controller is in fetchControllers


	    if (fetchControllers.get(key) === abortController) {
	      fetchControllers.delete(key);
	    }

	    if (fetchRequest.signal.aborted) {
	      return;
	    } // If the loader threw a redirect Response, start a new REPLACE navigation


	    if (isRedirectResult(result)) {
	      await startRedirectNavigation(state, result);
	      return;
	    } // Process any non-redirect errors thrown


	    if (isErrorResult(result)) {
	      let boundaryMatch = findNearestBoundary(state.matches, routeId);
	      state.fetchers.delete(key); // TODO: In remix, this would reset to IDLE_NAVIGATION if it was a catch -
	      // do we need to behave any differently with our non-redirect errors?
	      // What if it was a non-redirect Response?

	      updateState({
	        fetchers: new Map(state.fetchers),
	        errors: {
	          [boundaryMatch.route.id]: result.error
	        }
	      });
	      return;
	    }

	    invariant(!isDeferredResult(result), "Unhandled fetcher deferred data"); // Put the fetcher back into an idle state

	    let doneFetcher = {
	      state: "idle",
	      data: result.data,
	      formMethod: undefined,
	      formAction: undefined,
	      formEncType: undefined,
	      formData: undefined,
	      " _hasFetcherDoneAnything ": true
	    };
	    state.fetchers.set(key, doneFetcher);
	    updateState({
	      fetchers: new Map(state.fetchers)
	    });
	  }
	  /**
	   * Utility function to handle redirects returned from an action or loader.
	   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
	   * example:
	   *
	   *  - user is on /a
	   *  - user clicks a link to /b
	   *  - loader for /b redirects to /c
	   *
	   * In a non-JS app the browser would track the in-flight navigation to /b and
	   * then replace it with /c when it encountered the redirect response.  In
	   * the end it would only ever update the URL bar with /c.
	   *
	   * In client-side routing using pushState/replaceState, we aim to emulate
	   * this behavior and we also do not update history until the end of the
	   * navigation (including processed redirects).  This means that we never
	   * actually touch history until we've processed redirects, so we just use
	   * the history action from the original navigation (PUSH or REPLACE).
	   */


	  async function startRedirectNavigation(state, redirect, _temp) {
	    var _window;

	    let {
	      submission,
	      replace,
	      isFetchActionRedirect
	    } = _temp === void 0 ? {} : _temp;

	    if (redirect.revalidate) {
	      isRevalidationRequired = true;
	    }

	    let redirectLocation = createLocation(state.location, redirect.location, // TODO: This can be removed once we get rid of useTransition in Remix v2
	    _extends$2({
	      _isRedirect: true
	    }, isFetchActionRedirect ? {
	      _isFetchActionRedirect: true
	    } : {}));
	    invariant(redirectLocation, "Expected a location on the redirect navigation"); // Check if this an external redirect that goes to a new origin

	    if (typeof ((_window = window) == null ? void 0 : _window.location) !== "undefined") {
	      let newOrigin = createClientSideURL(redirect.location).origin;

	      if (window.location.origin !== newOrigin) {
	        if (replace) {
	          window.location.replace(redirect.location);
	        } else {
	          window.location.assign(redirect.location);
	        }

	        return;
	      }
	    } // There's no need to abort on redirects, since we don't detect the
	    // redirect until the action/loaders have settled


	    pendingNavigationController = null;
	    let redirectHistoryAction = replace === true ? Action.Replace : Action.Push; // Use the incoming submission if provided, fallback on the active one in
	    // state.navigation

	    let {
	      formMethod,
	      formAction,
	      formEncType,
	      formData
	    } = state.navigation;

	    if (!submission && formMethod && formAction && formData && formEncType) {
	      submission = {
	        formMethod,
	        formAction,
	        formEncType,
	        formData
	      };
	    } // If this was a 307/308 submission we want to preserve the HTTP method and
	    // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
	    // redirected location


	    if (redirectPreserveMethodStatusCodes.has(redirect.status) && submission && isMutationMethod(submission.formMethod)) {
	      await startNavigation(redirectHistoryAction, redirectLocation, {
	        submission: _extends$2({}, submission, {
	          formAction: redirect.location
	        })
	      });
	    } else {
	      // Otherwise, we kick off a new loading navigation, preserving the
	      // submission info for the duration of this navigation
	      await startNavigation(redirectHistoryAction, redirectLocation, {
	        overrideNavigation: {
	          state: "loading",
	          location: redirectLocation,
	          formMethod: submission ? submission.formMethod : undefined,
	          formAction: submission ? submission.formAction : undefined,
	          formEncType: submission ? submission.formEncType : undefined,
	          formData: submission ? submission.formData : undefined
	        }
	      });
	    }
	  }

	  async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
	    // Call all navigation loaders and revalidating fetcher loaders in parallel,
	    // then slice off the results into separate arrays so we can handle them
	    // accordingly
	    let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, router.basename)), ...fetchersToLoad.map(_ref8 => {
	      let [, href, match, fetchMatches] = _ref8;
	      return callLoaderOrAction("loader", createClientSideRequest(href, request.signal), match, fetchMatches, router.basename);
	    })]);
	    let loaderResults = results.slice(0, matchesToLoad.length);
	    let fetcherResults = results.slice(matchesToLoad.length);
	    await Promise.all([resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, request.signal, false, state.loaderData), resolveDeferredResults(currentMatches, fetchersToLoad.map(_ref9 => {
	      let [,, match] = _ref9;
	      return match;
	    }), fetcherResults, request.signal, true)]);
	    return {
	      results,
	      loaderResults,
	      fetcherResults
	    };
	  }

	  function interruptActiveLoads() {
	    // Every interruption triggers a revalidation
	    isRevalidationRequired = true; // Cancel pending route-level deferreds and mark cancelled routes for
	    // revalidation

	    cancelledDeferredRoutes.push(...cancelActiveDeferreds()); // Abort in-flight fetcher loads

	    fetchLoadMatches.forEach((_, key) => {
	      if (fetchControllers.has(key)) {
	        cancelledFetcherLoads.push(key);
	        abortFetcher(key);
	      }
	    });
	  }

	  function setFetcherError(key, routeId, error) {
	    let boundaryMatch = findNearestBoundary(state.matches, routeId);
	    deleteFetcher(key);
	    updateState({
	      errors: {
	        [boundaryMatch.route.id]: error
	      },
	      fetchers: new Map(state.fetchers)
	    });
	  }

	  function deleteFetcher(key) {
	    if (fetchControllers.has(key)) abortFetcher(key);
	    fetchLoadMatches.delete(key);
	    fetchReloadIds.delete(key);
	    fetchRedirectIds.delete(key);
	    state.fetchers.delete(key);
	  }

	  function abortFetcher(key) {
	    let controller = fetchControllers.get(key);
	    invariant(controller, "Expected fetch controller: " + key);
	    controller.abort();
	    fetchControllers.delete(key);
	  }

	  function markFetchersDone(keys) {
	    for (let key of keys) {
	      let fetcher = getFetcher(key);
	      let doneFetcher = {
	        state: "idle",
	        data: fetcher.data,
	        formMethod: undefined,
	        formAction: undefined,
	        formEncType: undefined,
	        formData: undefined,
	        " _hasFetcherDoneAnything ": true
	      };
	      state.fetchers.set(key, doneFetcher);
	    }
	  }

	  function markFetchRedirectsDone() {
	    let doneKeys = [];

	    for (let key of fetchRedirectIds) {
	      let fetcher = state.fetchers.get(key);
	      invariant(fetcher, "Expected fetcher: " + key);

	      if (fetcher.state === "loading") {
	        fetchRedirectIds.delete(key);
	        doneKeys.push(key);
	      }
	    }

	    markFetchersDone(doneKeys);
	  }

	  function abortStaleFetchLoads(landedId) {
	    let yeetedKeys = [];

	    for (let [key, id] of fetchReloadIds) {
	      if (id < landedId) {
	        let fetcher = state.fetchers.get(key);
	        invariant(fetcher, "Expected fetcher: " + key);

	        if (fetcher.state === "loading") {
	          abortFetcher(key);
	          fetchReloadIds.delete(key);
	          yeetedKeys.push(key);
	        }
	      }
	    }

	    markFetchersDone(yeetedKeys);
	    return yeetedKeys.length > 0;
	  }

	  function cancelActiveDeferreds(predicate) {
	    let cancelledRouteIds = [];
	    activeDeferreds.forEach((dfd, routeId) => {
	      if (!predicate || predicate(routeId)) {
	        // Cancel the deferred - but do not remove from activeDeferreds here -
	        // we rely on the subscribers to do that so our tests can assert proper
	        // cleanup via _internalActiveDeferreds
	        dfd.cancel();
	        cancelledRouteIds.push(routeId);
	        activeDeferreds.delete(routeId);
	      }
	    });
	    return cancelledRouteIds;
	  } // Opt in to capturing and reporting scroll positions during navigations,
	  // used by the <ScrollRestoration> component


	  function enableScrollRestoration(positions, getPosition, getKey) {
	    savedScrollPositions = positions;
	    getScrollPosition = getPosition;

	    getScrollRestorationKey = getKey || (location => location.key); // Perform initial hydration scroll restoration, since we miss the boat on
	    // the initial updateState() because we've not yet rendered <ScrollRestoration/>
	    // and therefore have no savedScrollPositions available


	    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
	      initialScrollRestored = true;
	      let y = getSavedScrollPosition(state.location, state.matches);

	      if (y != null) {
	        updateState({
	          restoreScrollPosition: y
	        });
	      }
	    }

	    return () => {
	      savedScrollPositions = null;
	      getScrollPosition = null;
	      getScrollRestorationKey = null;
	    };
	  }

	  function saveScrollPosition(location, matches) {
	    if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
	      let userMatches = matches.map(m => createUseMatchesMatch(m, state.loaderData));
	      let key = getScrollRestorationKey(location, userMatches) || location.key;
	      savedScrollPositions[key] = getScrollPosition();
	    }
	  }

	  function getSavedScrollPosition(location, matches) {
	    if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
	      let userMatches = matches.map(m => createUseMatchesMatch(m, state.loaderData));
	      let key = getScrollRestorationKey(location, userMatches) || location.key;
	      let y = savedScrollPositions[key];

	      if (typeof y === "number") {
	        return y;
	      }
	    }

	    return null;
	  }

	  router = {
	    get basename() {
	      return init.basename;
	    },

	    get state() {
	      return state;
	    },

	    get routes() {
	      return dataRoutes;
	    },

	    initialize,
	    subscribe,
	    enableScrollRestoration,
	    navigate,
	    fetch,
	    revalidate,
	    // Passthrough to history-aware createHref used by useHref so we get proper
	    // hash-aware URLs in DOM paths
	    createHref: to => init.history.createHref(to),
	    encodeLocation: to => init.history.encodeLocation(to),
	    getFetcher,
	    deleteFetcher,
	    dispose,
	    _internalFetchControllers: fetchControllers,
	    _internalActiveDeferreds: activeDeferreds
	  };
	  return router;
	} //#endregion

	function isSubmissionNavigation(opts) {
	  return opts != null && "formData" in opts;
	} // Normalize navigation options by converting formMethod=GET formData objects to
	// URLSearchParams so they behave identically to links with query params


	function normalizeNavigateOptions(to, opts, isFetcher) {
	  if (isFetcher === void 0) {
	    isFetcher = false;
	  }

	  let path = typeof to === "string" ? to : createPath(to); // Return location verbatim on non-submission navigations

	  if (!opts || !isSubmissionNavigation(opts)) {
	    return {
	      path
	    };
	  }

	  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
	    return {
	      path,
	      error: getInternalRouterError(405, {
	        method: opts.formMethod
	      })
	    };
	  } // Create a Submission on non-GET navigations


	  let submission;

	  if (opts.formData) {
	    submission = {
	      formMethod: opts.formMethod || "get",
	      formAction: stripHashFromPath(path),
	      formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
	      formData: opts.formData
	    };

	    if (isMutationMethod(submission.formMethod)) {
	      return {
	        path,
	        submission
	      };
	    }
	  } // Flatten submission onto URLSearchParams for GET submissions


	  let parsedPath = parsePath(path);

	  try {
	    let searchParams = convertFormDataToSearchParams(opts.formData); // Since fetcher GET submissions only run a single loader (as opposed to
	    // navigation GET submissions which run all loaders), we need to preserve
	    // any incoming ?index params

	    if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
	      searchParams.append("index", "");
	    }

	    parsedPath.search = "?" + searchParams;
	  } catch (e) {
	    return {
	      path,
	      error: getInternalRouterError(400)
	    };
	  }

	  return {
	    path: createPath(parsedPath),
	    submission
	  };
	} // Filter out all routes below any caught error as they aren't going to
	// render so we don't need to load them


	function getLoaderMatchesUntilBoundary(matches, boundaryId) {
	  let boundaryMatches = matches;

	  if (boundaryId) {
	    let index = matches.findIndex(m => m.route.id === boundaryId);

	    if (index >= 0) {
	      boundaryMatches = matches.slice(0, index);
	    }
	  }

	  return boundaryMatches;
	}

	function getMatchesToLoad(state, matches, submission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, pendingActionData, pendingError, fetchLoadMatches) {
	  let actionResult = pendingError ? Object.values(pendingError)[0] : pendingActionData ? Object.values(pendingActionData)[0] : undefined; // Pick navigation matches that are net-new or qualify for revalidation

	  let boundaryId = pendingError ? Object.keys(pendingError)[0] : undefined;
	  let boundaryMatches = getLoaderMatchesUntilBoundary(matches, boundaryId);
	  let navigationMatches = boundaryMatches.filter((match, index) => match.route.loader != null && (isNewLoader(state.loaderData, state.matches[index], match) || // If this route had a pending deferred cancelled it must be revalidated
	  cancelledDeferredRoutes.some(id => id === match.route.id) || shouldRevalidateLoader(state.location, state.matches[index], submission, location, match, isRevalidationRequired, actionResult))); // Pick fetcher.loads that need to be revalidated

	  let revalidatingFetchers = [];
	  fetchLoadMatches && fetchLoadMatches.forEach((_ref10, key) => {
	    let [href, match, fetchMatches] = _ref10;

	    // This fetcher was cancelled from a prior action submission - force reload
	    if (cancelledFetcherLoads.includes(key)) {
	      revalidatingFetchers.push([key, href, match, fetchMatches]);
	    } else if (isRevalidationRequired) {
	      let shouldRevalidate = shouldRevalidateLoader(href, match, submission, href, match, isRevalidationRequired, actionResult);

	      if (shouldRevalidate) {
	        revalidatingFetchers.push([key, href, match, fetchMatches]);
	      }
	    }
	  });
	  return [navigationMatches, revalidatingFetchers];
	}

	function isNewLoader(currentLoaderData, currentMatch, match) {
	  let isNew = // [a] -> [a, b]
	  !currentMatch || // [a, b] -> [a, c]
	  match.route.id !== currentMatch.route.id; // Handle the case that we don't have data for a re-used route, potentially
	  // from a prior error or from a cancelled pending deferred

	  let isMissingData = currentLoaderData[match.route.id] === undefined; // Always load if this is a net-new route or we don't yet have data

	  return isNew || isMissingData;
	}

	function isNewRouteInstance(currentMatch, match) {
	  let currentPath = currentMatch.route.path;
	  return (// param change for this match, /users/123 -> /users/456
	    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
	    // e.g. /files/images/avatar.jpg -> files/finances.xls
	    currentPath && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
	  );
	}

	function shouldRevalidateLoader(currentLocation, currentMatch, submission, location, match, isRevalidationRequired, actionResult) {
	  let currentUrl = createClientSideURL(currentLocation);
	  let currentParams = currentMatch.params;
	  let nextUrl = createClientSideURL(location);
	  let nextParams = match.params; // This is the default implementation as to when we revalidate.  If the route
	  // provides it's own implementation, then we give them full control but
	  // provide this value so they can leverage it if needed after they check
	  // their own specific use cases
	  // Note that fetchers always provide the same current/next locations so the
	  // URL-based checks here don't apply to fetcher shouldRevalidate calls

	  let defaultShouldRevalidate = isNewRouteInstance(currentMatch, match) || // Clicked the same link, resubmitted a GET form
	  currentUrl.toString() === nextUrl.toString() || // Search params affect all loaders
	  currentUrl.search !== nextUrl.search || // Forced revalidation due to submission, useRevalidate, or X-Remix-Revalidate
	  isRevalidationRequired;

	  if (match.route.shouldRevalidate) {
	    let routeChoice = match.route.shouldRevalidate(_extends$2({
	      currentUrl,
	      currentParams,
	      nextUrl,
	      nextParams
	    }, submission, {
	      actionResult,
	      defaultShouldRevalidate
	    }));

	    if (typeof routeChoice === "boolean") {
	      return routeChoice;
	    }
	  }

	  return defaultShouldRevalidate;
	}

	async function callLoaderOrAction(type, request, match, matches, basename, isStaticRequest, isRouteRequest, requestContext) {
	  if (basename === void 0) {
	    basename = "/";
	  }

	  if (isStaticRequest === void 0) {
	    isStaticRequest = false;
	  }

	  if (isRouteRequest === void 0) {
	    isRouteRequest = false;
	  }

	  let resultType;
	  let result; // Setup a promise we can race against so that abort signals short circuit

	  let reject;
	  let abortPromise = new Promise((_, r) => reject = r);

	  let onReject = () => reject();

	  request.signal.addEventListener("abort", onReject);

	  try {
	    let handler = match.route[type];
	    invariant(handler, "Could not find the " + type + " to run on the \"" + match.route.id + "\" route");
	    result = await Promise.race([handler({
	      request,
	      params: match.params,
	      context: requestContext
	    }), abortPromise]);
	    invariant(result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ("\"" + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
	  } catch (e) {
	    resultType = ResultType.error;
	    result = e;
	  } finally {
	    request.signal.removeEventListener("abort", onReject);
	  }

	  if (isResponse(result)) {
	    let status = result.status; // Process redirects

	    if (redirectStatusCodes.has(status)) {
	      let location = result.headers.get("Location");
	      invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
	      let isAbsolute = /^[a-z+]+:\/\//i.test(location) || location.startsWith("//"); // Support relative routing in internal redirects

	      if (!isAbsolute) {
	        let activeMatches = matches.slice(0, matches.indexOf(match) + 1);
	        let routePathnames = getPathContributingMatches(activeMatches).map(match => match.pathnameBase);
	        let resolvedLocation = resolveTo(location, routePathnames, new URL(request.url).pathname);
	        invariant(createPath(resolvedLocation), "Unable to resolve redirect location: " + location); // Prepend the basename to the redirect location if we have one

	        if (basename) {
	          let path = resolvedLocation.pathname;
	          resolvedLocation.pathname = path === "/" ? basename : joinPaths([basename, path]);
	        }

	        location = createPath(resolvedLocation);
	      } // Don't process redirects in the router during static requests requests.
	      // Instead, throw the Response and let the server handle it with an HTTP
	      // redirect.  We also update the Location header in place in this flow so
	      // basename and relative routing is taken into account


	      if (isStaticRequest) {
	        result.headers.set("Location", location);
	        throw result;
	      }

	      return {
	        type: ResultType.redirect,
	        status,
	        location,
	        revalidate: result.headers.get("X-Remix-Revalidate") !== null
	      };
	    } // For SSR single-route requests, we want to hand Responses back directly
	    // without unwrapping.  We do this with the QueryRouteResponse wrapper
	    // interface so we can know whether it was returned or thrown


	    if (isRouteRequest) {
	      // eslint-disable-next-line no-throw-literal
	      throw {
	        type: resultType || ResultType.data,
	        response: result
	      };
	    }

	    let data;
	    let contentType = result.headers.get("Content-Type"); // Check between word boundaries instead of startsWith() due to the last
	    // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type

	    if (contentType && /\bapplication\/json\b/.test(contentType)) {
	      data = await result.json();
	    } else {
	      data = await result.text();
	    }

	    if (resultType === ResultType.error) {
	      return {
	        type: resultType,
	        error: new ErrorResponse(status, result.statusText, data),
	        headers: result.headers
	      };
	    }

	    return {
	      type: ResultType.data,
	      data,
	      statusCode: result.status,
	      headers: result.headers
	    };
	  }

	  if (resultType === ResultType.error) {
	    return {
	      type: resultType,
	      error: result
	    };
	  }

	  if (result instanceof DeferredData) {
	    return {
	      type: ResultType.deferred,
	      deferredData: result
	    };
	  }

	  return {
	    type: ResultType.data,
	    data: result
	  };
	} // Utility method for creating the Request instances for loaders/actions during
	// client-side navigations and fetches.  During SSR we will always have a
	// Request instance from the static handler (query/queryRoute)


	function createClientSideRequest(location, signal, submission) {
	  let url = createClientSideURL(stripHashFromPath(location)).toString();
	  let init = {
	    signal
	  };

	  if (submission && isMutationMethod(submission.formMethod)) {
	    let {
	      formMethod,
	      formEncType,
	      formData
	    } = submission;
	    init.method = formMethod.toUpperCase();
	    init.body = formEncType === "application/x-www-form-urlencoded" ? convertFormDataToSearchParams(formData) : formData;
	  } // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)


	  return new Request(url, init);
	}

	function convertFormDataToSearchParams(formData) {
	  let searchParams = new URLSearchParams();

	  for (let [key, value] of formData.entries()) {
	    invariant(typeof value === "string", 'File inputs are not supported with encType "application/x-www-form-urlencoded", ' + 'please use "multipart/form-data" instead.');
	    searchParams.append(key, value);
	  }

	  return searchParams;
	}

	function processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
	  // Fill in loaderData/errors from our loaders
	  let loaderData = {};
	  let errors = null;
	  let statusCode;
	  let foundError = false;
	  let loaderHeaders = {}; // Process loader results into state.loaderData/state.errors

	  results.forEach((result, index) => {
	    let id = matchesToLoad[index].route.id;
	    invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");

	    if (isErrorResult(result)) {
	      // Look upwards from the matched route for the closest ancestor
	      // error boundary, defaulting to the root match
	      let boundaryMatch = findNearestBoundary(matches, id);
	      let error = result.error; // If we have a pending action error, we report it at the highest-route
	      // that throws a loader error, and then clear it out to indicate that
	      // it was consumed

	      if (pendingError) {
	        error = Object.values(pendingError)[0];
	        pendingError = undefined;
	      }

	      errors = errors || {}; // Prefer higher error values if lower errors bubble to the same boundary

	      if (errors[boundaryMatch.route.id] == null) {
	        errors[boundaryMatch.route.id] = error;
	      } // Clear our any prior loaderData for the throwing route


	      loaderData[id] = undefined; // Once we find our first (highest) error, we set the status code and
	      // prevent deeper status codes from overriding

	      if (!foundError) {
	        foundError = true;
	        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
	      }

	      if (result.headers) {
	        loaderHeaders[id] = result.headers;
	      }
	    } else if (isDeferredResult(result)) {
	      activeDeferreds && activeDeferreds.set(id, result.deferredData);
	      loaderData[id] = result.deferredData.data; // TODO: Add statusCode/headers once we wire up streaming in Remix
	    } else {
	      loaderData[id] = result.data; // Error status codes always override success status codes, but if all
	      // loaders are successful we take the deepest status code.

	      if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
	        statusCode = result.statusCode;
	      }

	      if (result.headers) {
	        loaderHeaders[id] = result.headers;
	      }
	    }
	  }); // If we didn't consume the pending action error (i.e., all loaders
	  // resolved), then consume it here.  Also clear out any loaderData for the
	  // throwing route

	  if (pendingError) {
	    errors = pendingError;
	    loaderData[Object.keys(pendingError)[0]] = undefined;
	  }

	  return {
	    loaderData,
	    errors,
	    statusCode: statusCode || 200,
	    loaderHeaders
	  };
	}

	function processLoaderData(state, matches, matchesToLoad, results, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds) {
	  let {
	    loaderData,
	    errors
	  } = processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds); // Process results from our revalidating fetchers

	  for (let index = 0; index < revalidatingFetchers.length; index++) {
	    let [key,, match] = revalidatingFetchers[index];
	    invariant(fetcherResults !== undefined && fetcherResults[index] !== undefined, "Did not find corresponding fetcher result");
	    let result = fetcherResults[index]; // Process fetcher non-redirect errors

	    if (isErrorResult(result)) {
	      let boundaryMatch = findNearestBoundary(state.matches, match.route.id);

	      if (!(errors && errors[boundaryMatch.route.id])) {
	        errors = _extends$2({}, errors, {
	          [boundaryMatch.route.id]: result.error
	        });
	      }

	      state.fetchers.delete(key);
	    } else if (isRedirectResult(result)) {
	      // Should never get here, redirects should get processed above, but we
	      // keep this to type narrow to a success result in the else
	      throw new Error("Unhandled fetcher revalidation redirect");
	    } else if (isDeferredResult(result)) {
	      // Should never get here, deferred data should be awaited for fetchers
	      // in resolveDeferredResults
	      throw new Error("Unhandled fetcher deferred data");
	    } else {
	      let doneFetcher = {
	        state: "idle",
	        data: result.data,
	        formMethod: undefined,
	        formAction: undefined,
	        formEncType: undefined,
	        formData: undefined,
	        " _hasFetcherDoneAnything ": true
	      };
	      state.fetchers.set(key, doneFetcher);
	    }
	  }

	  return {
	    loaderData,
	    errors
	  };
	}

	function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
	  let mergedLoaderData = _extends$2({}, newLoaderData);

	  for (let match of matches) {
	    let id = match.route.id;

	    if (newLoaderData.hasOwnProperty(id)) {
	      if (newLoaderData[id] !== undefined) {
	        mergedLoaderData[id] = newLoaderData[id];
	      }
	    } else if (loaderData[id] !== undefined) {
	      mergedLoaderData[id] = loaderData[id];
	    }

	    if (errors && errors.hasOwnProperty(id)) {
	      // Don't keep any loader data below the boundary
	      break;
	    }
	  }

	  return mergedLoaderData;
	} // Find the nearest error boundary, looking upwards from the leaf route (or the
	// route specified by routeId) for the closest ancestor error boundary,
	// defaulting to the root match


	function findNearestBoundary(matches, routeId) {
	  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex(m => m.route.id === routeId) + 1) : [...matches];
	  return eligibleMatches.reverse().find(m => m.route.hasErrorBoundary === true) || matches[0];
	}

	function getShortCircuitMatches(routes) {
	  // Prefer a root layout route if present, otherwise shim in a route object
	  let route = routes.find(r => r.index || !r.path || r.path === "/") || {
	    id: "__shim-error-route__"
	  };
	  return {
	    matches: [{
	      params: {},
	      pathname: "",
	      pathnameBase: "",
	      route
	    }],
	    route
	  };
	}

	function getInternalRouterError(status, _temp4) {
	  let {
	    pathname,
	    routeId,
	    method
	  } = _temp4 === void 0 ? {} : _temp4;
	  let statusText = "Unknown Server Error";
	  let errorMessage = "Unknown @remix-run/router error";

	  if (status === 400) {
	    statusText = "Bad Request";

	    if (method && pathname && routeId) {
	      errorMessage = "You made a " + method + " request to \"" + pathname + "\" but " + ("did not provide a `loader` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
	    } else {
	      errorMessage = "Cannot submit binary form data using GET";
	    }
	  } else if (status === 403) {
	    statusText = "Forbidden";
	    errorMessage = "Route \"" + routeId + "\" does not match URL \"" + pathname + "\"";
	  } else if (status === 404) {
	    statusText = "Not Found";
	    errorMessage = "No route matches URL \"" + pathname + "\"";
	  } else if (status === 405) {
	    statusText = "Method Not Allowed";

	    if (method && pathname && routeId) {
	      errorMessage = "You made a " + method.toUpperCase() + " request to \"" + pathname + "\" but " + ("did not provide an `action` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
	    } else if (method) {
	      errorMessage = "Invalid request method \"" + method.toUpperCase() + "\"";
	    }
	  }

	  return new ErrorResponse(status || 500, statusText, new Error(errorMessage), true);
	} // Find any returned redirect errors, starting from the lowest match


	function findRedirect(results) {
	  for (let i = results.length - 1; i >= 0; i--) {
	    let result = results[i];

	    if (isRedirectResult(result)) {
	      return result;
	    }
	  }
	}

	function stripHashFromPath(path) {
	  let parsedPath = typeof path === "string" ? parsePath(path) : path;
	  return createPath(_extends$2({}, parsedPath, {
	    hash: ""
	  }));
	}

	function isHashChangeOnly(a, b) {
	  return a.pathname === b.pathname && a.search === b.search && a.hash !== b.hash;
	}

	function isDeferredResult(result) {
	  return result.type === ResultType.deferred;
	}

	function isErrorResult(result) {
	  return result.type === ResultType.error;
	}

	function isRedirectResult(result) {
	  return (result && result.type) === ResultType.redirect;
	}

	function isResponse(value) {
	  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
	}

	function isValidMethod(method) {
	  return validRequestMethods.has(method);
	}

	function isMutationMethod(method) {
	  return validMutationMethods.has(method);
	}

	async function resolveDeferredResults(currentMatches, matchesToLoad, results, signal, isFetcher, currentLoaderData) {
	  for (let index = 0; index < results.length; index++) {
	    let result = results[index];
	    let match = matchesToLoad[index];
	    let currentMatch = currentMatches.find(m => m.route.id === match.route.id);
	    let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;

	    if (isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
	      // Note: we do not have to touch activeDeferreds here since we race them
	      // against the signal in resolveDeferredData and they'll get aborted
	      // there if needed
	      await resolveDeferredData(result, signal, isFetcher).then(result => {
	        if (result) {
	          results[index] = result || results[index];
	        }
	      });
	    }
	  }
	}

	async function resolveDeferredData(result, signal, unwrap) {
	  if (unwrap === void 0) {
	    unwrap = false;
	  }

	  let aborted = await result.deferredData.resolveData(signal);

	  if (aborted) {
	    return;
	  }

	  if (unwrap) {
	    try {
	      return {
	        type: ResultType.data,
	        data: result.deferredData.unwrappedData
	      };
	    } catch (e) {
	      // Handle any TrackedPromise._error values encountered while unwrapping
	      return {
	        type: ResultType.error,
	        error: e
	      };
	    }
	  }

	  return {
	    type: ResultType.data,
	    data: result.deferredData.data
	  };
	}

	function hasNakedIndexQuery(search) {
	  return new URLSearchParams(search).getAll("index").some(v => v === "");
	} // Note: This should match the format exported by useMatches, so if you change
	// this please also change that :)  Eventually we'll DRY this up


	function createUseMatchesMatch(match, loaderData) {
	  let {
	    route,
	    pathname,
	    params
	  } = match;
	  return {
	    id: route.id,
	    pathname,
	    params,
	    data: loaderData[route.id],
	    handle: route.handle
	  };
	}

	function getTargetMatch(matches, location) {
	  let search = typeof location === "string" ? parsePath(location).search : location.search;

	  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
	    // Return the leaf index route when index is present
	    return matches[matches.length - 1];
	  } // Otherwise grab the deepest "path contributing" match (ignoring index and
	  // pathless layout routes)


	  let pathMatches = getPathContributingMatches(matches);
	  return pathMatches[pathMatches.length - 1];
	} //#endregion

	/**
	 * React Router v6.6.2
	 *
	 * Copyright (c) Remix Software Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.md file in the root directory of this source tree.
	 *
	 * @license MIT
	 */

	function _extends$1() {
	  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };
	  return _extends$1.apply(this, arguments);
	}

	/**
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */

	function isPolyfill(x, y) {
	  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
	  ;
	}

	const is = typeof Object.is === "function" ? Object.is : isPolyfill; // Intentionally not using named imports because Rollup uses dynamic
	// dispatch for CommonJS interop named imports.

	const {
	  useState,
	  useEffect,
	  useLayoutEffect,
	  useDebugValue
	} = React$1;
	// because of a very particular set of implementation details and assumptions
	// -- change any one of them and it will break. The most important assumption
	// is that updates are always synchronous, because concurrent rendering is
	// only available in versions of React that also have a built-in
	// useSyncExternalStore API. And we only use this shim when the built-in API
	// does not exist.
	//
	// Do not assume that the clever hacks used by this hook also work in general.
	// The point of this shim is to replace the need for hacks by other libraries.

	function useSyncExternalStore$2(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
	// React do not expose a way to check if we're hydrating. So users of the shim
	// will need to track that themselves and return the correct value
	// from `getSnapshot`.
	getServerSnapshot) {
	  // breaks the rules of React, and only works here because of specific
	  // implementation details, most importantly that updates are
	  // always synchronous.


	  const value = getSnapshot();
	  // re-render whenever the subscribed state changes by updating an some
	  // arbitrary useState hook. Then, during render, we call getSnapshot to read
	  // the current value.
	  //
	  // Because we don't actually use the state returned by the useState hook, we
	  // can save a bit of memory by storing other stuff in that slot.
	  //
	  // To implement the early bailout, we need to track some things on a mutable
	  // object. Usually, we would put that in a useRef hook, but we can stash it in
	  // our useState hook instead.
	  //
	  // To force a re-render, we call forceUpdate({inst}). That works because the
	  // new object always fails an equality check.


	  const [{
	    inst
	  }, forceUpdate] = useState({
	    inst: {
	      value,
	      getSnapshot
	    }
	  }); // Track the latest getSnapshot function with a ref. This needs to be updated
	  // in the layout phase so we can access it during the tearing check that
	  // happens on subscribe.

	  useLayoutEffect(() => {
	    inst.value = value;
	    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
	    // commit phase if there was an interleaved mutation. In concurrent mode
	    // this can happen all the time, but even in synchronous mode, an earlier
	    // effect may have mutated the store.

	    if (checkIfSnapshotChanged(inst)) {
	      // Force a re-render.
	      forceUpdate({
	        inst
	      });
	    } // eslint-disable-next-line react-hooks/exhaustive-deps

	  }, [subscribe, value, getSnapshot]);
	  useEffect(() => {
	    // Check for changes right before subscribing. Subsequent changes will be
	    // detected in the subscription handler.
	    if (checkIfSnapshotChanged(inst)) {
	      // Force a re-render.
	      forceUpdate({
	        inst
	      });
	    }

	    const handleStoreChange = () => {
	      // TODO: Because there is no cross-renderer API for batching updates, it's
	      // up to the consumer of this library to wrap their subscription event
	      // with unstable_batchedUpdates. Should we try to detect when this isn't
	      // the case and print a warning in development?
	      // The store changed. Check if the snapshot changed since the last time we
	      // read from the store.
	      if (checkIfSnapshotChanged(inst)) {
	        // Force a re-render.
	        forceUpdate({
	          inst
	        });
	      }
	    }; // Subscribe to the store and return a clean-up function.


	    return subscribe(handleStoreChange); // eslint-disable-next-line react-hooks/exhaustive-deps
	  }, [subscribe]);
	  useDebugValue(value);
	  return value;
	}

	function checkIfSnapshotChanged(inst) {
	  const latestGetSnapshot = inst.getSnapshot;
	  const prevValue = inst.value;

	  try {
	    const nextValue = latestGetSnapshot();
	    return !is(prevValue, nextValue);
	  } catch (error) {
	    return true;
	  }
	}

	/**
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @flow
	 */
	function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
	  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
	  // React do not expose a way to check if we're hydrating. So users of the shim
	  // will need to track that themselves and return the correct value
	  // from `getSnapshot`.
	  return getSnapshot();
	}

	/**
	 * Inlined into the react-router repo since use-sync-external-store does not
	 * provide a UMD-compatible package, so we need this to be able to distribute
	 * UMD react-router bundles
	 */
	const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
	const isServerEnvironment = !canUseDOM;
	const shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
	const useSyncExternalStore = "useSyncExternalStore" in React$1 ? (module => module.useSyncExternalStore)(React$1) : shim;

	const DataRouterContext = /*#__PURE__*/react.exports.createContext(null);

	const DataRouterStateContext = /*#__PURE__*/react.exports.createContext(null);

	const NavigationContext = /*#__PURE__*/react.exports.createContext(null);

	const LocationContext = /*#__PURE__*/react.exports.createContext(null);

	const RouteContext = /*#__PURE__*/react.exports.createContext({
	  outlet: null,
	  matches: []
	});

	const RouteErrorContext = /*#__PURE__*/react.exports.createContext(null);
	/**
	 * Returns true if this component is a descendant of a <Router>.
	 *
	 * @see https://reactrouter.com/hooks/use-in-router-context
	 */

	function useInRouterContext() {
	  return react.exports.useContext(LocationContext) != null;
	}
	/**
	 * Returns the current location object, which represents the current URL in web
	 * browsers.
	 *
	 * Note: If you're using this it may mean you're doing some of your own
	 * "routing" in your app, and we'd like to know what your use case is. We may
	 * be able to provide something higher-level to better suit your needs.
	 *
	 * @see https://reactrouter.com/hooks/use-location
	 */

	function useLocation() {
	  !useInRouterContext() ? invariant(false) : void 0;
	  return react.exports.useContext(LocationContext).location;
	}
	/**
	 * Returns the element of the route that matched the current location, prepared
	 * with the correct context to render the remainder of the route tree. Route
	 * elements in the tree must render an <Outlet> to render their child route's
	 * element.
	 *
	 * @see https://reactrouter.com/hooks/use-routes
	 */

	function useRoutes(routes, locationArg) {
	  !useInRouterContext() ? invariant(false) : void 0;
	  let {
	    navigator
	  } = react.exports.useContext(NavigationContext);
	  let dataRouterStateContext = react.exports.useContext(DataRouterStateContext);
	  let {
	    matches: parentMatches
	  } = react.exports.useContext(RouteContext);
	  let routeMatch = parentMatches[parentMatches.length - 1];
	  let parentParams = routeMatch ? routeMatch.params : {};
	  routeMatch ? routeMatch.pathname : "/";
	  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
	  routeMatch && routeMatch.route;

	  let locationFromContext = useLocation();
	  let location;

	  if (locationArg) {
	    var _parsedLocationArg$pa;

	    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
	    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
	    location = parsedLocationArg;
	  } else {
	    location = locationFromContext;
	  }

	  let pathname = location.pathname || "/";
	  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
	  let matches = matchRoutes(routes, {
	    pathname: remainingPathname
	  });

	  let renderedMatches = _renderMatches(matches && matches.map(match => Object.assign({}, match, {
	    params: Object.assign({}, parentParams, match.params),
	    pathname: joinPaths([parentPathnameBase, // Re-encode pathnames that were decoded inside matchRoutes
	    navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname]),
	    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, // Re-encode pathnames that were decoded inside matchRoutes
	    navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase])
	  })), parentMatches, dataRouterStateContext || undefined); // When a user passes in a `locationArg`, the associated routes need to
	  // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
	  // to use the scoped location instead of the global location.


	  if (locationArg && renderedMatches) {
	    return /*#__PURE__*/react.exports.createElement(LocationContext.Provider, {
	      value: {
	        location: _extends$1({
	          pathname: "/",
	          search: "",
	          hash: "",
	          state: null,
	          key: "default"
	        }, location),
	        navigationType: Action.Pop
	      }
	    }, renderedMatches);
	  }

	  return renderedMatches;
	}

	function DefaultErrorElement() {
	  let error = useRouteError();
	  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
	  let stack = error instanceof Error ? error.stack : null;
	  let lightgrey = "rgba(200,200,200, 0.5)";
	  let preStyles = {
	    padding: "0.5rem",
	    backgroundColor: lightgrey
	  };
	  let codeStyles = {
	    padding: "2px 4px",
	    backgroundColor: lightgrey
	  };
	  return /*#__PURE__*/react.exports.createElement(react.exports.Fragment, null, /*#__PURE__*/react.exports.createElement("h2", null, "Unhandled Thrown Error!"), /*#__PURE__*/react.exports.createElement("h3", {
	    style: {
	      fontStyle: "italic"
	    }
	  }, message), stack ? /*#__PURE__*/react.exports.createElement("pre", {
	    style: preStyles
	  }, stack) : null, /*#__PURE__*/react.exports.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), /*#__PURE__*/react.exports.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own\xA0", /*#__PURE__*/react.exports.createElement("code", {
	    style: codeStyles
	  }, "errorElement"), " props on\xA0", /*#__PURE__*/react.exports.createElement("code", {
	    style: codeStyles
	  }, "<Route>")));
	}

	class RenderErrorBoundary extends react.exports.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      location: props.location,
	      error: props.error
	    };
	  }

	  static getDerivedStateFromError(error) {
	    return {
	      error: error
	    };
	  }

	  static getDerivedStateFromProps(props, state) {
	    // When we get into an error state, the user will likely click "back" to the
	    // previous page that didn't have an error. Because this wraps the entire
	    // application, that will have no effect--the error page continues to display.
	    // This gives us a mechanism to recover from the error when the location changes.
	    //
	    // Whether we're in an error state or not, we update the location in state
	    // so that when we are in an error state, it gets reset when a new location
	    // comes in and the user recovers from the error.
	    if (state.location !== props.location) {
	      return {
	        error: props.error,
	        location: props.location
	      };
	    } // If we're not changing locations, preserve the location but still surface
	    // any new errors that may come through. We retain the existing error, we do
	    // this because the error provided from the app state may be cleared without
	    // the location changing.


	    return {
	      error: props.error || state.error,
	      location: state.location
	    };
	  }

	  componentDidCatch(error, errorInfo) {
	    console.error("React Router caught the following error during render", error, errorInfo);
	  }

	  render() {
	    return this.state.error ? /*#__PURE__*/react.exports.createElement(RouteContext.Provider, {
	      value: this.props.routeContext
	    }, /*#__PURE__*/react.exports.createElement(RouteErrorContext.Provider, {
	      value: this.state.error,
	      children: this.props.component
	    })) : this.props.children;
	  }

	}

	function RenderedRoute(_ref) {
	  let {
	    routeContext,
	    match,
	    children
	  } = _ref;
	  let dataRouterContext = react.exports.useContext(DataRouterContext); // Track how deep we got in our render pass to emulate SSR componentDidCatch
	  // in a DataStaticRouter

	  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && match.route.errorElement) {
	    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
	  }

	  return /*#__PURE__*/react.exports.createElement(RouteContext.Provider, {
	    value: routeContext
	  }, children);
	}

	function _renderMatches(matches, parentMatches, dataRouterState) {
	  if (parentMatches === void 0) {
	    parentMatches = [];
	  }

	  if (matches == null) {
	    if (dataRouterState != null && dataRouterState.errors) {
	      // Don't bail if we have data router errors so we can render them in the
	      // boundary.  Use the pre-matched (or shimmed) matches
	      matches = dataRouterState.matches;
	    } else {
	      return null;
	    }
	  }

	  let renderedMatches = matches; // If we have data errors, trim matches to the highest error boundary

	  let errors = dataRouterState == null ? void 0 : dataRouterState.errors;

	  if (errors != null) {
	    let errorIndex = renderedMatches.findIndex(m => m.route.id && (errors == null ? void 0 : errors[m.route.id]));
	    !(errorIndex >= 0) ? invariant(false) : void 0;
	    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
	  }

	  return renderedMatches.reduceRight((outlet, match, index) => {
	    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null; // Only data routers handle errors

	    let errorElement = dataRouterState ? match.route.errorElement || /*#__PURE__*/react.exports.createElement(DefaultErrorElement, null) : null;
	    let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));

	    let getChildren = () => /*#__PURE__*/react.exports.createElement(RenderedRoute, {
	      match: match,
	      routeContext: {
	        outlet,
	        matches
	      }
	    }, error ? errorElement : match.route.element !== undefined ? match.route.element : outlet); // Only wrap in an error boundary within data router usages when we have an
	    // errorElement on this route.  Otherwise let it bubble up to an ancestor
	    // errorElement


	    return dataRouterState && (match.route.errorElement || index === 0) ? /*#__PURE__*/react.exports.createElement(RenderErrorBoundary, {
	      location: dataRouterState.location,
	      component: errorElement,
	      error: error,
	      children: getChildren(),
	      routeContext: {
	        outlet: null,
	        matches
	      }
	    }) : getChildren();
	  }, null);
	}
	var DataRouterHook$1;

	(function (DataRouterHook) {
	  DataRouterHook["UseRevalidator"] = "useRevalidator";
	})(DataRouterHook$1 || (DataRouterHook$1 = {}));

	var DataRouterStateHook$1;

	(function (DataRouterStateHook) {
	  DataRouterStateHook["UseLoaderData"] = "useLoaderData";
	  DataRouterStateHook["UseActionData"] = "useActionData";
	  DataRouterStateHook["UseRouteError"] = "useRouteError";
	  DataRouterStateHook["UseNavigation"] = "useNavigation";
	  DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
	  DataRouterStateHook["UseMatches"] = "useMatches";
	  DataRouterStateHook["UseRevalidator"] = "useRevalidator";
	})(DataRouterStateHook$1 || (DataRouterStateHook$1 = {}));

	function useDataRouterState(hookName) {
	  let state = react.exports.useContext(DataRouterStateContext);
	  !state ? invariant(false) : void 0;
	  return state;
	}

	function useRouteContext(hookName) {
	  let route = react.exports.useContext(RouteContext);
	  !route ? invariant(false) : void 0;
	  return route;
	}

	function useCurrentRouteId(hookName) {
	  let route = useRouteContext();
	  let thisRoute = route.matches[route.matches.length - 1];
	  !thisRoute.route.id ? invariant(false) : void 0;
	  return thisRoute.route.id;
	}
	/**
	 * Returns the nearest ancestor Route error, which could be a loader/action
	 * error or a render error.  This is intended to be called from your
	 * errorElement to display a proper error message.
	 */

	function useRouteError() {
	  var _state$errors;

	  let error = react.exports.useContext(RouteErrorContext);
	  let state = useDataRouterState(DataRouterStateHook$1.UseRouteError);
	  let routeId = useCurrentRouteId(DataRouterStateHook$1.UseRouteError); // If this was a render error, we put it in a RouteError context inside
	  // of RenderErrorBoundary

	  if (error) {
	    return error;
	  } // Otherwise look for errors from our data router state


	  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
	}

	/**
	 * Given a Remix Router instance, render the appropriate UI
	 */
	function RouterProvider(_ref) {
	  let {
	    fallbackElement,
	    router
	  } = _ref;
	  // Sync router state to our component state to force re-renders
	  let state = useSyncExternalStore(router.subscribe, () => router.state, // We have to provide this so React@18 doesn't complain during hydration,
	  // but we pass our serialized hydration data into the router so state here
	  // is already synced with what the server saw
	  () => router.state);
	  let navigator = react.exports.useMemo(() => {
	    return {
	      createHref: router.createHref,
	      encodeLocation: router.encodeLocation,
	      go: n => router.navigate(n),
	      push: (to, state, opts) => router.navigate(to, {
	        state,
	        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
	      }),
	      replace: (to, state, opts) => router.navigate(to, {
	        replace: true,
	        state,
	        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
	      })
	    };
	  }, [router]);
	  let basename = router.basename || "/"; // The fragment and {null} here are important!  We need them to keep React 18's
	  // useId happy when we are server-rendering since we may have a <script> here
	  // containing the hydrated server-side staticContext (from StaticRouterProvider).
	  // useId relies on the component tree structure to generate deterministic id's
	  // so we need to ensure it remains the same on the client even though
	  // we don't need the <script> tag

	  return /*#__PURE__*/react.exports.createElement(react.exports.Fragment, null, /*#__PURE__*/react.exports.createElement(DataRouterContext.Provider, {
	    value: {
	      router,
	      navigator,
	      static: false,
	      // Do we need this?
	      basename
	    }
	  }, /*#__PURE__*/react.exports.createElement(DataRouterStateContext.Provider, {
	    value: state
	  }, /*#__PURE__*/react.exports.createElement(Router, {
	    basename: router.basename,
	    location: router.state.location,
	    navigationType: router.state.historyAction,
	    navigator: navigator
	  }, router.state.initialized ? /*#__PURE__*/react.exports.createElement(Routes, null) : fallbackElement))), null);
	}

	/**
	 * Declares an element that should be rendered at a certain URL path.
	 *
	 * @see https://reactrouter.com/components/route
	 */
	function Route(_props) {
	  invariant(false) ;
	}

	/**
	 * Provides location context for the rest of the app.
	 *
	 * Note: You usually won't render a <Router> directly. Instead, you'll render a
	 * router that is more specific to your environment such as a <BrowserRouter>
	 * in web browsers or a <StaticRouter> for server rendering.
	 *
	 * @see https://reactrouter.com/router-components/router
	 */
	function Router(_ref4) {
	  let {
	    basename: basenameProp = "/",
	    children = null,
	    location: locationProp,
	    navigationType = Action.Pop,
	    navigator,
	    static: staticProp = false
	  } = _ref4;
	  !!useInRouterContext() ? invariant(false) : void 0; // Preserve trailing slashes on basename, so we can let the user control
	  // the enforcement of trailing slashes throughout the app

	  let basename = basenameProp.replace(/^\/*/, "/");
	  let navigationContext = react.exports.useMemo(() => ({
	    basename,
	    navigator,
	    static: staticProp
	  }), [basename, navigator, staticProp]);

	  if (typeof locationProp === "string") {
	    locationProp = parsePath(locationProp);
	  }

	  let {
	    pathname = "/",
	    search = "",
	    hash = "",
	    state = null,
	    key = "default"
	  } = locationProp;
	  let location = react.exports.useMemo(() => {
	    let trailingPathname = stripBasename(pathname, basename);

	    if (trailingPathname == null) {
	      return null;
	    }

	    return {
	      pathname: trailingPathname,
	      search,
	      hash,
	      state,
	      key
	    };
	  }, [basename, pathname, search, hash, state, key]);

	  if (location == null) {
	    return null;
	  }

	  return /*#__PURE__*/react.exports.createElement(NavigationContext.Provider, {
	    value: navigationContext
	  }, /*#__PURE__*/react.exports.createElement(LocationContext.Provider, {
	    children: children,
	    value: {
	      location,
	      navigationType
	    }
	  }));
	}

	/**
	 * A container for a nested tree of <Route> elements that renders the branch
	 * that best matches the current location.
	 *
	 * @see https://reactrouter.com/components/routes
	 */
	function Routes(_ref5) {
	  let {
	    children,
	    location
	  } = _ref5;
	  let dataRouterContext = react.exports.useContext(DataRouterContext); // When in a DataRouterContext _without_ children, we use the router routes
	  // directly.  If we have children, then we're in a descendant tree and we
	  // need to use child routes.

	  let routes = dataRouterContext && !children ? dataRouterContext.router.routes : createRoutesFromChildren(children);
	  return useRoutes(routes, location);
	}
	var AwaitRenderStatus;

	(function (AwaitRenderStatus) {
	  AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
	  AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
	  AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
	})(AwaitRenderStatus || (AwaitRenderStatus = {}));

	new Promise(() => {});
	// UTILS
	///////////////////////////////////////////////////////////////////////////////

	/**
	 * Creates a route config from a React "children" object, which is usually
	 * either a `<Route>` element or an array of them. Used internally by
	 * `<Routes>` to create a route config from its children.
	 *
	 * @see https://reactrouter.com/utils/create-routes-from-children
	 */


	function createRoutesFromChildren(children, parentPath) {
	  if (parentPath === void 0) {
	    parentPath = [];
	  }

	  let routes = [];
	  react.exports.Children.forEach(children, (element, index) => {
	    if (! /*#__PURE__*/react.exports.isValidElement(element)) {
	      // Ignore non-elements. This allows people to more easily inline
	      // conditionals in their route config.
	      return;
	    }

	    if (element.type === react.exports.Fragment) {
	      // Transparently support React.Fragment and its children.
	      routes.push.apply(routes, createRoutesFromChildren(element.props.children, parentPath));
	      return;
	    }

	    !(element.type === Route) ? invariant(false) : void 0;
	    !(!element.props.index || !element.props.children) ? invariant(false) : void 0;
	    let treePath = [...parentPath, index];
	    let route = {
	      id: element.props.id || treePath.join("-"),
	      caseSensitive: element.props.caseSensitive,
	      element: element.props.element,
	      index: element.props.index,
	      path: element.props.path,
	      loader: element.props.loader,
	      action: element.props.action,
	      errorElement: element.props.errorElement,
	      hasErrorBoundary: element.props.errorElement != null,
	      shouldRevalidate: element.props.shouldRevalidate,
	      handle: element.props.handle
	    };

	    if (element.props.children) {
	      route.children = createRoutesFromChildren(element.props.children, treePath);
	    }

	    routes.push(route);
	  });
	  return routes;
	}
	/**
	 * @private
	 * Walk the route tree and add hasErrorBoundary if it's not provided, so that
	 * users providing manual route arrays can just specify errorElement
	 */

	function enhanceManualRouteObjects(routes) {
	  return routes.map(route => {
	    let routeClone = _extends$1({}, route);

	    if (routeClone.hasErrorBoundary == null) {
	      routeClone.hasErrorBoundary = routeClone.errorElement != null;
	    }

	    if (routeClone.children) {
	      routeClone.children = enhanceManualRouteObjects(routeClone.children);
	    }

	    return routeClone;
	  });
	}

	/**
	 * React Router DOM v6.6.2
	 *
	 * Copyright (c) Remix Software Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.md file in the root directory of this source tree.
	 *
	 * @license MIT
	 */

	function _extends() {
	  _extends = Object.assign ? Object.assign.bind() : function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };
	  return _extends.apply(this, arguments);
	}
	//#region Routers
	////////////////////////////////////////////////////////////////////////////////

	function createBrowserRouter(routes, opts) {
	  return createRouter({
	    basename: opts == null ? void 0 : opts.basename,
	    history: createBrowserHistory({
	      window: opts == null ? void 0 : opts.window
	    }),
	    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
	    routes: enhanceManualRouteObjects(routes)
	  }).initialize();
	}

	function parseHydrationData() {
	  var _window;

	  let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;

	  if (state && state.errors) {
	    state = _extends({}, state, {
	      errors: deserializeErrors(state.errors)
	    });
	  }

	  return state;
	}

	function deserializeErrors(errors) {
	  if (!errors) return null;
	  let entries = Object.entries(errors);
	  let serialized = {};

	  for (let [key, val] of entries) {
	    // Hey you!  If you change this, please change the corresponding logic in
	    // serializeErrors in react-router-dom/server.tsx :)
	    if (val && val.__type === "RouteErrorResponse") {
	      serialized[key] = new ErrorResponse(val.status, val.statusText, val.data, val.internal === true);
	    } else if (val && val.__type === "Error") {
	      let error = new Error(val.message); // Wipe away the client-side stack trace.  Nothing to fill it in with
	      // because we don't serialize SSR stack traces for security reasons

	      error.stack = "";
	      serialized[key] = error;
	    } else {
	      serialized[key] = val;
	    }
	  }

	  return serialized;
	}
	////////////////////////////////////////////////////////////////////////////////
	//#region Hooks
	////////////////////////////////////////////////////////////////////////////////


	var DataRouterHook;

	(function (DataRouterHook) {
	  DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
	  DataRouterHook["UseSubmitImpl"] = "useSubmitImpl";
	  DataRouterHook["UseFetcher"] = "useFetcher";
	})(DataRouterHook || (DataRouterHook = {}));

	var DataRouterStateHook;

	(function (DataRouterStateHook) {
	  DataRouterStateHook["UseFetchers"] = "useFetchers";
	  DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
	})(DataRouterStateHook || (DataRouterStateHook = {}));

	var AppContext = /*#__PURE__*/React.createContext();

	var useAppContext = function useAppContext() {
	  var context = react.exports.useContext(AppContext);
	  return context;
	};

	// const img_src= "assets/images/github.png"
	var _b64_src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg==";
	var RepoLink = function RepoLink() {
	  var context = useAppContext();
	  var repo = context.pkgJson.repository;
	  if (repo) {
	    if (repo.type == 'git') {
	      if (repo.url.indexOf('github') >= 0) {
	        return /*#__PURE__*/React.createElement("a", {
	          className: "link github",
	          href: repo.url,
	          target: "_blank",
	          rel: "noreferrer"
	        }, /*#__PURE__*/React.createElement("img", {
	          src: _b64_src
	        }), /*#__PURE__*/React.createElement("span", null, 'Github'));
	      }
	    }
	  }
	  return null;
	};

	//import Logo from 'app/layout/components/Logo.jsx'

	var Header = function Header(_ref) {
	  var path = _ref.path,
	    responsiveOpen = _ref.responsiveOpen,
	    onResponsiveToggle = _ref.onResponsiveToggle;
	  var context = useAppContext();
	  var has_demo = context.arreConfig.demo_entry != '';
	  var logo = "url(../" + context.arreConfig.logo + ")";
	  return /*#__PURE__*/React.createElement("div", {
	    className: "grid",
	    style: {
	      "backgroundImage": logo
	    }
	  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
	    className: "toolbar"
	  }, has_demo ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
	    className: "link demo " + (path == 'demo' ? 'dark' : 'light'),
	    href: "/demo"
	  }, 'Demo'), /*#__PURE__*/React.createElement("a", {
	    className: "link docs " + (path == 'docs' ? 'dark' : 'light'),
	    href: "/docs"
	  }, 'Docs')) : null, /*#__PURE__*/React.createElement(RepoLink, null)), /*#__PURE__*/React.createElement("div", {
	    className: "toggler",
	    onClick: function onClick() {
	      return onResponsiveToggle(!responsiveOpen);
	    }
	  }, /*#__PURE__*/React.createElement("div", {
	    className: "toggle " + (responsiveOpen ? 'open' : '')
	  }, /*#__PURE__*/React.createElement("span", null))));
	};

	var Menu = function Menu(_ref) {
	  var menu = _ref.menu,
	    onMenuClick = _ref.onMenuClick,
	    activeOption = _ref.activeOption;
	  return /*#__PURE__*/React.createElement("div", {
	    className: "menu"
	  }, /*#__PURE__*/React.createElement("ul", null, menu.map(function (item, idx) {
	    return /*#__PURE__*/React.createElement("li", {
	      key: "menu_" + idx,
	      className: (activeOption == idx ? 'selected' : '') + " level-" + item.level,
	      "data-level": item.level,
	      id: "menu-" + item.id,
	      onClick: function onClick() {
	        return onMenuClick(idx);
	      }
	    }, /*#__PURE__*/React.createElement("span", {
	      className: "link"
	    }, item.title));
	  })));
	};

	var Badges = function Badges() {
	  var context = useAppContext();
	  var pkgName = context.pkgJson.name;
	  return /*#__PURE__*/React.createElement("div", {
	    className: "badges"
	  }, /*#__PURE__*/React.createElement("span", {
	    className: "badge"
	  }, /*#__PURE__*/React.createElement("a", {
	    href: "https://www.npmjs.com/package/" + pkgName
	  }, /*#__PURE__*/React.createElement("img", {
	    alt: "NPM Version",
	    src: "https://badge.fury.io/js/" + pkgName + ".svg"
	  }))), /*#__PURE__*/React.createElement("span", {
	    className: "badge"
	  }, /*#__PURE__*/React.createElement("a", {
	    href: "https://www.npmjs.com/package/" + pkgName
	  }, /*#__PURE__*/React.createElement("img", {
	    alt: "NPM Downloads",
	    src: "https://img.shields.io/npm/dm/" + pkgName + ".svg?style=flat"
	  }))));
	};

	var Company = function Company(_ref) {
	  var company = _ref.company,
	    url = _ref.url;
	  return /*#__PURE__*/React.createElement("a", {
	    href: url,
	    target: "_blank noopener noreferrer"
	  }, company);
	};
	var License = function License(_ref2) {
	  var name = _ref2.name;
	  return /*#__PURE__*/React.createElement("a", {
	    href: "https://opensource.org/licenses/" + name,
	    target: "_blank noopener noreferrer"
	  }, name);
	};
	var Footer = function Footer() {
	  var context = useAppContext();
	  var company = context.arreConfig.company;
	  var url = context.arreConfig.url;
	  var license = context.pkgJson.license;
	  var pkgName = context.pkgJson.name;
	  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement(Badges, null), /*#__PURE__*/React.createElement("div", {
	    className: "license"
	  }, pkgName + " is sharpened by ", /*#__PURE__*/React.createElement(Company, {
	    company: company,
	    url: url
	  }), " under ", /*#__PURE__*/React.createElement(License, {
	    name: license
	  }), " license"));
	};

	var Switcher = function Switcher() {
	  var context = useAppContext();
	  return /*#__PURE__*/React.createElement("div", {
	    className: "switcher select"
	  }, /*#__PURE__*/React.createElement("select", {
	    onChange: function onChange(event) {
	      return context.onSwitchVersion(event.target.value);
	    },
	    value: context.selectedVersion
	  }, context.versions.map(function (v) {
	    return /*#__PURE__*/React.createElement("option", {
	      key: v,
	      value: v
	    }, "Version: " + v);
	  })));
	};

	var PageBodyWeb = function PageBodyWeb(_ref) {
	  var menu = _ref.menu,
	    onMenuClick = _ref.onMenuClick,
	    activeOption = _ref.activeOption,
	    path = _ref.path,
	    children = _ref.children;
	  return /*#__PURE__*/React.createElement("div", {
	    className: "body"
	  }, /*#__PURE__*/React.createElement("div", {
	    className: "left"
	  }, /*#__PURE__*/React.createElement(React.Fragment, null, path == 'docs' ? /*#__PURE__*/React.createElement(Switcher, null) : null, /*#__PURE__*/React.createElement(Menu, {
	    menu: menu,
	    onMenuClick: onMenuClick,
	    activeOption: activeOption
	  }))), /*#__PURE__*/React.createElement("div", {
	    className: "content"
	  }, children, /*#__PURE__*/React.createElement(Footer, null)));
	};

	var PageBodyMobi = function PageBodyMobi(_ref) {
	  var menu = _ref.menu,
	    onMenuClick = _ref.onMenuClick,
	    activeOption = _ref.activeOption,
	    path = _ref.path,
	    children = _ref.children;
	  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
	    className: "body"
	  }, path == 'docs' ? /*#__PURE__*/React.createElement(Switcher, null) : null, /*#__PURE__*/React.createElement(Menu, {
	    path: path,
	    menu: menu,
	    onMenuClick: onMenuClick,
	    activeOption: activeOption
	  })), /*#__PURE__*/React.createElement("div", {
	    className: "content"
	  }, children, /*#__PURE__*/React.createElement(Footer, null)));
	};

	var useScroll = function useScroll(callback, delay) {
	  if (delay === void 0) {
	    delay = 30;
	  }
	  var _useState = react.exports.useState(0),
	    lastUpdate = _useState[0],
	    setLastUpdate = _useState[1];
	  react.exports.useEffect(function () {
	    var onScroll = function onScroll(event) {
	      var wpos = window.pageYOffset;
	      var diff = Math.abs(wpos - lastUpdate);
	      if (diff >= delay) {
	        setLastUpdate(wpos);
	        callback(event);
	      }
	    };
	    window.addEventListener('scroll', onScroll, {
	      passive: true
	    });
	    return function () {
	      window.removeEventListener('scroll', onScroll);
	    };
	  }, [callback, lastUpdate, delay]);
	};

	var MENU_OFFSET$1 = 64;
	var _getMenuItemYCoordinate = function _getMenuItemYCoordinate(item) {
	  var node;
	  try {
	    node = document.querySelector("#" + item.id);
	  } catch (_) {}
	  if (!node) {
	    return 0;
	  }
	  //const rect= item.node.getBoundingClientRect()
	  //const top=  item.node.offsetTop
	  var rect = node.getBoundingClientRect();
	  var top = node.offsetTop;
	  var height = rect.height;
	  var middle = top + height / 2; // half so it does not get inside view just when padding is shown
	  //const bottom= rect.bottom
	  // return {
	  //   //top,
	  //   middle,
	  //   //bottom,
	  //   //height
	  // }
	  return middle;
	};
	var _getMenuCoordinates = function _getMenuCoordinates(menu) {
	  var coords = menu.map(function (e, idx) {
	    var y = _getMenuItemYCoordinate(e);
	    return {
	      index: idx,
	      id: e.id,
	      //e.node.id,
	      y: y
	    };
	  });
	  return coords;
	};
	var _findActiveOption = function _findActiveOption(menu) {
	  var aOption = undefined;
	  if (menu.length > 0) {
	    var screenTop = window.pageYOffset;
	    var screenHeight = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - MENU_OFFSET$1;
	    var screenBottom = screenTop + screenHeight;

	    // console.log(`scr ${screenTop} -> ${screenBottom} (${screenHeight}) `)

	    var coords = _getMenuCoordinates(menu);

	    // console.log(coords.map(c => `${c.id}-${c.top}`).join('\n'))

	    /*
	    const inside= coords.filter((e) => {
	      return (e.bottom>=screenTop && e.top<=screenBottom)
	    })
	    */

	    var inside = coords.filter(function (e) {
	      return e.y >= screenTop && e.y <= screenBottom;
	    });

	    //console.log(inside)

	    if (inside.length > 0) {
	      var opt = inside.slice(0, 1)[0];
	      aOption = opt.index;
	    } else {
	      var previous = coords.filter(function (e) {
	        return e.y < screenTop;
	      });
	      if (previous.length > 0) {
	        var _opt = previous.slice(-1)[0];
	        aOption = _opt.index;
	      }
	    }
	  }
	  if (aOption == undefined) {
	    if (menu.length > 0) {
	      if (window.pageYOffset < MENU_OFFSET$1) {
	        aOption = 0;
	      } else {
	        aOption = menu.length - 1;
	      }
	    }
	  }

	  // console.log('Page: _findActiveOption ' + aOption)

	  return aOption;
	};
	var useActiveOption = function useActiveOption(menu) {
	  var _useState = react.exports.useState(0),
	    activeOption = _useState[0],
	    setActiveOption = _useState[1];
	  var updateActiveOption = react.exports.useCallback(function () {
	    var nActiveOption = _findActiveOption(menu);
	    setActiveOption(nActiveOption);
	  }, [menu]);
	  react.exports.useEffect(function () {
	    updateActiveOption();
	  }, [updateActiveOption]);
	  useScroll(updateActiveOption);
	  return activeOption;
	};

	// slugify function from markdown-to-jsx (not exposed by it)
	// We need it out of the markdown-to-jsx scope, so we are exposing it here
	//
	// based on https://stackoverflow.com/a/18123682/1141611
	// not complete, but probably good enough
	function slugify(str) {
	  var out = str.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, 'a').replace(/[çÇ]/g, 'c').replace(/[ðÐ]/g, 'd').replace(/[ÈÉÊËéèêë]/g, 'e').replace(/[ÏïÎîÍíÌì]/g, 'i').replace(/[Ññ]/g, 'n').replace(/[øØœŒÕõÔôÓóÒò]/g, 'o').replace(/[ÜüÛûÚúÙù]/g, 'u').replace(/[ŸÿÝý]/g, 'y').replace(/[^a-z0-9- ]/gi, '').replace(/ /gi, '-').toLowerCase();
	  if (out.match(/^\d/)) {
	    out = "n_" + out;
	  }
	  return out;
	}

	/**
	 * Should be better tried with regex
	 * 
	 
	 This does not work yet

	 return s
	        .replace(/<[^>]+>/g, '')  // remove html tags
	  if (s.indexOf('<')==0) {
	    s= s.replace('</','')
	    s= s.replace('/>','')
	    s= s.replace('<','')
	    s= s.replace('>','')
	    s= s.replace('&lt;','')
	    s= s.replace('&gt;','')
	  }

	  with this:
	    "<code><DatePicker /></code>"

	 * 
	 */
	function stripHtml(html) {
	  var temporalDivElement = document.createElement("div");
	  temporalDivElement.innerHTML = html;
	  var res = temporalDivElement.textContent || temporalDivElement.innerText || "";
	  return res.trim();
	}

	var getMenuFromMdDOM = function getMenuFromMdDOM() {
	  var elements = Array.from(document.querySelectorAll('h1, h2, h3'));
	  var menu = [];
	  for (var _i = 0, _elements = elements; _i < _elements.length; _i++) {
	    var el = _elements[_i];
	    var oid = el.id;
	    var title = stripHtml(el.innerHTML.trim());
	    var level = parseInt(el.tagName.replace('H', ''));
	    var item = {
	      id: oid,
	      title: title,
	      level: level
	      //node: el
	    };

	    menu.push(item);
	  }
	  return menu;
	};
	var MENU_OFFSET = 64;
	var domScrollTo = function domScrollTo(selector) {
	  var node = document.querySelector(selector);
	  var rect = node.getBoundingClientRect();
	  var to = window.scrollY + (rect.y - MENU_OFFSET);
	  window.scrollTo({
	    top: to,
	    left: 0,
	    behavior: 'smooth'
	  });

	  /*
	  const node= menu[idx].node
	  node.scrollIntoView()
	   const wy= window.scrollY
	  window.scrollTo(0, wy - MENU_OFFSET)
	  */
	};

	var getPath = function getPath(loc) {
	  return loc.pathname.split('/')[1] == 'demo' ? 'demo' : 'docs';
	};
	var Page = function Page(_ref) {
	  var menu = _ref.menu,
	    children = _ref.children;
	  var location = useLocation();
	  var _useState = react.exports.useState(getPath(location)),
	    path = _useState[0],
	    setPath = _useState[1];
	  var _useState2 = react.exports.useState(false),
	    responsiveOpen = _useState2[0],
	    setResponsiveOpen = _useState2[1];
	  var activeOption = useActiveOption(menu);
	  react.exports.useEffect(function () {
	    setPath(getPath(location));
	  }, [location]);
	  var handleOpenMenu = function handleOpenMenu(idx) {
	    setResponsiveOpen(false);
	    var hid = menu[idx].id.replace('menu-', '');
	    domScrollTo(hid);
	  };

	  // console.log('Page : render ' + menu.length)

	  return /*#__PURE__*/React.createElement("div", {
	    className: "main"
	  }, /*#__PURE__*/React.createElement("nav", {
	    className: "header"
	  }, /*#__PURE__*/React.createElement(Header, {
	    path: path,
	    responsiveOpen: responsiveOpen,
	    onResponsiveToggle: function onResponsiveToggle(show) {
	      return setResponsiveOpen(show);
	    }
	  })), !responsiveOpen ? /*#__PURE__*/React.createElement(PageBodyWeb, {
	    menu: menu,
	    onMenuClick: handleOpenMenu,
	    activeOption: activeOption,
	    path: path
	  }, children) : /*#__PURE__*/React.createElement(PageBodyMobi, {
	    menu: menu,
	    onMenuClick: handleOpenMenu,
	    activeOption: activeOption,
	    path: path
	  }, children));
	};

	function e(){return (e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}return t}).apply(this,arguments)}const n=["children","options"],r=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((t,e)=>(t[e.toLowerCase()]=e,t),{for:"htmlFor"}),o={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},c=["style","script"],a=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,u=/mailto:/i,i=/\n{2,}$/,l=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,s=/^ *> ?/gm,_=/^ {2,}\n/,f=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,d=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,p=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,g=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,m=/^(?:\n *)*\n/,y=/\r\n?/g,h=/^\[\^([^\]]+)](:.*)\n/,k=/^\[\^([^\]]+)]/,x=/\f/g,b=/^\s*?\[(x|\s)\]/,v=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,S=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,$=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,w=/&([a-z]+);/g,z=/^<!--[\s\S]*?(?:-->)/,E=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,A=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,R=/^\{.*\}$/,I=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,M=/^<([^ >]+@[^ >]+)>/,O=/^<([^ >]+:\/[^ >]+)>/,B=/ *\n+$/,L=/(?:^|\n)( *)$/,T=/-([a-z])?/gi,j=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,C=/^\[([^\]]*)\]:\s+(\S+)\s*("([^"]*)")?/,D=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,N=/^\[([^\]]*)\] ?\[([^\]]*)\]/,Z=/(\[|\])/g,F=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,P=/\t/g,G=/^ *\| */,H=/(^ *\||\| *$)/g,q=/ *$/,U=/^ *:-+: *$/,V=/^ *:-+ *$/,W=/^ *-+: *$/,Q=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,X=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,J=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,K=/^\\([^0-9A-Za-z\s])/,Y=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,tt=/^\n+/,et=/^([ \t]*)/,nt=/\\([^0-9A-Z\s])/gi,rt=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),ot=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),ct=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),at="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",ut=new RegExp("^\\[("+at+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),it=new RegExp("^!\\[("+at+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),lt=[l,p,d,v,S,z,ot,ct,j],st=[...lt,/^[^\n]+(?:  \n|\n{2,})/,$,A];function _t(t){return t.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ft(t){return W.test(t)?"right":U.test(t)?"center":V.test(t)?"left":null}function dt(t,e,n){const r=n.t;n.t=!0;const o=e(t.trim(),n);n.t=r;let c=[[]];return o.forEach(function(t,e){"tableSeparator"===t.type?0!==e&&e!==o.length-1&&c.push([]):("text"!==t.type||null!=o[e+1]&&"tableSeparator"!==o[e+1].type||(t.content=t.content.replace(q,"")),c[c.length-1].push(t));}),c}function pt(t,e,n){n.o=!0;const r=dt(t[1],e,n),o=t[2].replace(H,"").split("|").map(ft),c=function(t,e,n){return t.trim().split("\n").map(function(t){return dt(t,e,n)})}(t[3],e,n);return n.o=!1,{align:o,cells:c,header:r,type:"table"}}function gt(t,e){return null==t.align[e]?{}:{textAlign:t.align[e]}}function mt(t){return function(e,n){return n.o?t.exec(e):null}}function yt(t){return function(e,n){return n.o||n.u?t.exec(e):null}}function ht(t){return function(e,n){return n.o||n.u?null:t.exec(e)}}function kt(t){return function(e){return t.exec(e)}}function xt(t,e,n){if(e.o||e.u)return null;if(n&&!n.endsWith("\n"))return null;let r="";t.split("\n").every(t=>!lt.some(e=>e.test(t))&&(r+=t+"\n",t.trim()));const o=r.trimEnd();return ""==o?null:[r,o]}function bt(t){try{if(decodeURIComponent(t).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(t){return null}return t}function vt(t){return t.replace(nt,"$1")}function St(t,e,n){const r=n.o||!1,o=n.u||!1;n.o=!0,n.u=!0;const c=t(e,n);return n.o=r,n.u=o,c}function $t(t,e,n){const r=n.o||!1,o=n.u||!1;n.o=!1,n.u=!0;const c=t(e,n);return n.o=r,n.u=o,c}function wt(t,e,n){return n.o=!1,t(e+"\n\n",n)}const zt=(t,e,n)=>({content:St(e,t[1],n)});function Et(){return {}}function At(){return null}function Rt(...t){return t.filter(Boolean).join(" ")}function It(t,e,n){let r=t;const o=e.split(".");for(;o.length&&(r=r[o[0]],void 0!==r);)o.shift();return r||n}var Mt;function Ot(n,H={}){H.overrides=H.overrides||{},H.slugify=H.slugify||_t,H.namedCodesToUnicode=H.namedCodesToUnicode?e({},o,H.namedCodesToUnicode):o;const q=H.createElement||react.exports.createElement;function U(t,n,...r){const o=It(H.overrides,`${t}.props`,{});return q(function(t,e){const n=It(e,t);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:It(e,`${t}.component`,t):t}(t,H.overrides),e({},n,o,{className:Rt(null==n?void 0:n.className,o.className)||void 0}),...r)}function V(e){let n=!1;H.forceInline?n=!0:H.forceBlock||(n=!1===F.test(e));const r=dt(ft(n?e:`${e.trimEnd().replace(tt,"")}\n\n`,{o:n}));for(;"string"==typeof r[r.length-1]&&!r[r.length-1].trim();)r.pop();if(null===H.wrapper)return r;const o=H.wrapper||(n?"span":"div");let c;if(r.length>1||H.forceWrapper)c=r;else {if(1===r.length)return c=r[0],"string"==typeof c?U("span",{key:"outer"},c):c;c=null;}return react.exports.createElement(o,{key:"outer"},c)}function W(e){const n=e.match(a);return n?n.reduce(function(e,n,o){const c=n.indexOf("=");if(-1!==c){const a=function(t){return -1!==t.indexOf("-")&&null===t.match(E)&&(t=t.replace(T,function(t,e){return e.toUpperCase()})),t}(n.slice(0,c)).trim(),u=function(t){const e=t[0];return ('"'===e||"'"===e)&&t.length>=2&&t[t.length-1]===e?t.slice(1,-1):t}(n.slice(c+1).trim()),i=r[a]||a,l=e[i]=function(t,e){return "style"===t?e.split(/;\s?/).reduce(function(t,e){const n=e.slice(0,e.indexOf(":"));return t[n.replace(/(-[a-z])/g,t=>t[1].toUpperCase())]=e.slice(n.length+1).trim(),t},{}):"href"===t?bt(e):(e.match(R)&&(e=e.slice(1,e.length-1)),"true"===e||"false"!==e&&e)}(a,u);"string"==typeof l&&($.test(l)||A.test(l))&&(e[i]=react.exports.cloneElement(V(l.trim()),{key:o}));}else "style"!==n&&(e[r[n]||n]=!0);return e},{}):void 0}const nt=[],at={},lt={blockQuote:{i:ht(l),l:Mt.HIGH,_:(t,e,n)=>({content:e(t[0].replace(s,""),n)}),p:(t,e,n)=>U("blockquote",{key:n.g},e(t.content,n))},breakLine:{i:kt(_),l:Mt.HIGH,_:Et,p:(t,e,n)=>U("br",{key:n.g})},breakThematic:{i:ht(f),l:Mt.HIGH,_:Et,p:(t,e,n)=>U("hr",{key:n.g})},codeBlock:{i:ht(p),l:Mt.MAX,_:t=>({content:t[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}),p:(t,e,n)=>U("pre",{key:n.g},U("code",{className:t.lang?`lang-${t.lang}`:""},t.content))},codeFenced:{i:ht(d),l:Mt.MAX,_:t=>({content:t[3],lang:t[2]||void 0,type:"codeBlock"})},codeInline:{i:yt(g),l:Mt.LOW,_:t=>({content:t[2]}),p:(t,e,n)=>U("code",{key:n.g},t.content)},footnote:{i:ht(h),l:Mt.MAX,_:t=>(nt.push({footnote:t[2],identifier:t[1]}),{}),p:At},footnoteReference:{i:mt(k),l:Mt.HIGH,_:t=>({content:t[1],target:`#${H.slugify(t[1])}`}),p:(t,e,n)=>U("a",{key:n.g,href:bt(t.target)},U("sup",{key:n.g},t.content))},gfmTask:{i:mt(b),l:Mt.HIGH,_:t=>({completed:"x"===t[1].toLowerCase()}),p:(t,e,n)=>U("input",{checked:t.completed,key:n.g,readOnly:!0,type:"checkbox"})},heading:{i:ht(v),l:Mt.HIGH,_:(t,e,n)=>({content:St(e,t[2],n),id:H.slugify(t[2]),level:t[1].length}),p:(t,e,n)=>(t.tag=`h${t.level}`,U(t.tag,{id:t.id,key:n.g},e(t.content,n)))},headingSetext:{i:ht(S),l:Mt.MAX,_:(t,e,n)=>({content:St(e,t[1],n),level:"="===t[2]?1:2,type:"heading"})},htmlComment:{i:kt(z),l:Mt.HIGH,_:()=>({}),p:At},image:{i:yt(it),l:Mt.HIGH,_:t=>({alt:t[1],target:vt(t[2]),title:t[3]}),p:(t,e,n)=>U("img",{key:n.g,alt:t.alt||void 0,title:t.title||void 0,src:bt(t.target)})},link:{i:mt(ut),l:Mt.LOW,_:(t,e,n)=>({content:$t(e,t[1],n),target:vt(t[2]),title:t[3]}),p:(t,e,n)=>U("a",{key:n.g,href:bt(t.target),title:t.title},e(t.content,n))},linkAngleBraceStyleDetector:{i:mt(O),l:Mt.MAX,_:t=>({content:[{content:t[1],type:"text"}],target:t[1],type:"link"})},linkBareUrlDetector:{i:(t,e)=>e.m?null:mt(I)(t,e),l:Mt.MAX,_:t=>({content:[{content:t[1],type:"text"}],target:t[1],title:void 0,type:"link"})},linkMailtoDetector:{i:mt(M),l:Mt.MAX,_(t){let e=t[1],n=t[1];return u.test(n)||(n="mailto:"+n),{content:[{content:e.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{i(t,e,n){const r=L.exec(n);return !r||!e.h&&e.o?null:ct.exec(t=r[1]+t)},l:Mt.HIGH,_(t,e,n){const r=t[2],o=r.length>1,c=o?+r:void 0,a=t[0].replace(i,"\n").match(ot);let u=!1;return {items:a.map(function(t,r){const o=rt.exec(t)[0].length,c=new RegExp("^ {1,"+o+"}","gm"),i=t.replace(c,"").replace(rt,""),l=r===a.length-1,s=-1!==i.indexOf("\n\n")||l&&u;u=s;const _=n.o,f=n.h;let d;n.h=!0,s?(n.o=!1,d=i.replace(B,"\n\n")):(n.o=!0,d=i.replace(B,""));const p=e(d,n);return n.o=_,n.h=f,p}),ordered:o,start:c}},p:(t,e,n)=>U(t.ordered?"ol":"ul",{key:n.g,start:t.start},t.items.map(function(t,r){return U("li",{key:r},e(t,n))}))},newlineCoalescer:{i:ht(m),l:Mt.LOW,_:Et,p:()=>"\n"},paragraph:{i:xt,l:Mt.LOW,_:zt,p:(t,e,n)=>U("p",{key:n.g},e(t.content,n))},ref:{i:mt(C),l:Mt.MAX,_:t=>(at[t[1]]={target:t[2],title:t[4]},{}),p:At},refImage:{i:yt(D),l:Mt.MAX,_:t=>({alt:t[1]||void 0,ref:t[2]}),p:(t,e,n)=>U("img",{key:n.g,alt:t.alt,src:bt(at[t.ref].target),title:at[t.ref].title})},refLink:{i:mt(N),l:Mt.MAX,_:(t,e,n)=>({content:e(t[1],n),fallbackContent:e(t[0].replace(Z,"\\$1"),n),ref:t[2]}),p:(t,e,n)=>at[t.ref]?U("a",{key:n.g,href:bt(at[t.ref].target),title:at[t.ref].title},e(t.content,n)):U("span",{key:n.g},e(t.fallbackContent,n))},table:{i:ht(j),l:Mt.HIGH,_:pt,p:(t,e,n)=>U("table",{key:n.g},U("thead",null,U("tr",null,t.header.map(function(r,o){return U("th",{key:o,style:gt(t,o)},e(r,n))}))),U("tbody",null,t.cells.map(function(r,o){return U("tr",{key:o},r.map(function(r,o){return U("td",{key:o,style:gt(t,o)},e(r,n))}))})))},tableSeparator:{i:function(t,e){return e.t?G.exec(t):null},l:Mt.HIGH,_:function(){return {type:"tableSeparator"}},p:()=>" | "},text:{i:kt(Y),l:Mt.MIN,_:t=>({content:t[0].replace(w,(t,e)=>H.namedCodesToUnicode[e]?H.namedCodesToUnicode[e]:t)}),p:t=>t.content},textBolded:{i:yt(Q),l:Mt.MED,_:(t,e,n)=>({content:e(t[2],n)}),p:(t,e,n)=>U("strong",{key:n.g},e(t.content,n))},textEmphasized:{i:yt(X),l:Mt.LOW,_:(t,e,n)=>({content:e(t[2],n)}),p:(t,e,n)=>U("em",{key:n.g},e(t.content,n))},textEscaped:{i:yt(K),l:Mt.HIGH,_:t=>({content:t[1],type:"text"})},textStrikethroughed:{i:yt(J),l:Mt.LOW,_:zt,p:(t,e,n)=>U("del",{key:n.g},e(t.content,n))}};!0!==H.disableParsingRawHTML&&(lt.htmlBlock={i:kt($),l:Mt.HIGH,_(t,e,n){const[,r]=t[3].match(et),o=new RegExp(`^${r}`,"gm"),a=t[3].replace(o,""),u=(i=a,st.some(t=>t.test(i))?wt:St);var i;const l=t[1].toLowerCase(),s=-1!==c.indexOf(l);n.m=n.m||"a"===l;const _=s?t[3]:u(e,a,n);return n.m=!1,{attrs:W(t[2]),content:_,noInnerParse:s,tag:s?l:t[1]}},p:(t,n,r)=>U(t.tag,e({key:r.g},t.attrs),t.noInnerParse?t.content:n(t.content,r))},lt.htmlSelfClosing={i:kt(A),l:Mt.HIGH,_:t=>({attrs:W(t[2]||""),tag:t[1]}),p:(t,n,r)=>U(t.tag,e({},t.attrs,{key:r.g}))});const ft=function(t){let e=Object.keys(t);function n(r,o){let c=[],a="";for(;r;){let u=0;for(;u<e.length;){const i=e[u],l=t[i],s=l.i(r,o,a);if(s){const t=s[0];r=r.substring(t.length);const e=l._(s,n,o);null==e.type&&(e.type=i),c.push(e),a=t;break}u++;}}return c}return e.sort(function(e,n){let r=t[e].l,o=t[n].l;return r!==o?r-o:e<n?-1:1}),function(t,e){return n(function(t){return t.replace(y,"\n").replace(x,"").replace(P,"    ")}(t),e)}}(lt),dt=(Ot=function(t){return function(e,n,r){return t[e.type].p(e,n,r)}}(lt),function t(e,n={}){if(Array.isArray(e)){const r=n.g,o=[];let c=!1;for(let r=0;r<e.length;r++){n.g=r;const a=t(e[r],n),u="string"==typeof a;u&&c?o[o.length-1]+=a:null!==a&&o.push(a),c=u;}return n.g=r,o}return Ot(e,t,n)});var Ot;const Bt=V(n);return nt.length?U("div",null,Bt,U("footer",{key:"footer"},nt.map(function(t){return U("div",{id:H.slugify(t.identifier),key:t.identifier},t.identifier,dt(ft(t.footnote,{o:!0})))}))):Bt}!function(t){t[t.MAX=0]="MAX",t[t.HIGH=1]="HIGH",t[t.MED=2]="MED",t[t.LOW=3]="LOW",t[t.MIN=4]="MIN";}(Mt||(Mt={}));var Markdown = e=>{let{children:r,options:o}=e,c=function(t,e){if(null==t)return {};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)e.indexOf(n=c[r])>=0||(o[n]=t[n]);return o}(e,n);return react.exports.cloneElement(Ot(r,o),c)};

	var DocsMd = function DocsMd(_ref) {
	  var readme = _ref.readme;
	  var options = {
	    overrides: {
	      section: {
	        props: {
	          className: 'doc-section'
	        }
	      },
	      article: {
	        props: {
	          className: 'doc-article'
	        }
	      },
	      pre: {
	        props: {
	          className: 'prettyprint'
	        }
	      }
	    },
	    slugify: slugify
	  };
	  return /*#__PURE__*/React.createElement(Markdown, {
	    options: options
	  }, readme);
	};

	var Docs = function Docs(_ref) {
	  var readme = _ref.readme;
	  var _useState = react.exports.useState([]),
	    menu = _useState[0],
	    setMenu = _useState[1];
	  react.exports.useEffect(function () {
	    try {
	      PR.prettyPrint();
	    } catch (e) {}
	  }, [readme]);
	  react.exports.useEffect(function () {
	    var nMenu = getMenuFromMdDOM();
	    setMenu(nMenu);
	  }, []);
	  return /*#__PURE__*/React.createElement(Page, {
	    menu: menu
	  }, /*#__PURE__*/React.createElement(DocsMd, {
	    readme: readme
	  }));
	};

	var App = function App(_ref) {
	  var pkgPath = _ref.pkgPath,
	    pkgJson = _ref.pkgJson,
	    arreConfig = _ref.arreConfig,
	    readmes = _ref.readmes;
	  var _useState = react.exports.useState(arreConfig.doc_versions),
	    versions = _useState[0];
	    _useState[1];
	  var _useState2 = react.exports.useState(arreConfig.doc_versions[0]),
	    selectedVersion = _useState2[0],
	    setSelectedVersion = _useState2[1];
	  var _useState3 = react.exports.useState(readmes[arreConfig.doc_versions[0]]),
	    readme = _useState3[0],
	    setReadme = _useState3[1];
	  var onSwicthVersion = react.exports.useCallback(function (nVersion) {
	    setSelectedVersion(nVersion);
	    setReadme(readmes[nVersion]);
	  }, []);
	  var router = createBrowserRouter(createRoutesFromChildren(
	  /*#__PURE__*/
	  /*{arreConfig.has_demo
	   ? <Route path={'/demo'} element={<Demo/>}/>
	   : null
	   }*/
	  React.createElement(Route, {
	    path: '*',
	    element: /*#__PURE__*/React.createElement(Docs, {
	      readme: readme
	    })
	  })));
	  return /*#__PURE__*/React.createElement(AppContext.Provider, {
	    value: {
	      pkgPath: pkgPath,
	      pkgJson: pkgJson,
	      arreConfig: arreConfig,
	      versions: versions,
	      selectedVersion: selectedVersion,
	      readme: readme,
	      onSwicthVersion: onSwicthVersion
	    }
	  }, /*#__PURE__*/React.createElement(RouterProvider, {
	    router: router
	  }));
	};

	function styleInject(css, ref) {
	  if ( ref === void 0 ) ref = {};
	  var insertAt = ref.insertAt;

	  if (!css || typeof document === 'undefined') { return; }

	  var head = document.head || document.getElementsByTagName('head')[0];
	  var style = document.createElement('style');
	  style.type = 'text/css';

	  if (insertAt === 'top') {
	    if (head.firstChild) {
	      head.insertBefore(style, head.firstChild);
	    } else {
	      head.appendChild(style);
	    }
	  } else {
	    head.appendChild(style);
	  }

	  if (style.styleSheet) {
	    style.styleSheet.cssText = css;
	  } else {
	    style.appendChild(document.createTextNode(css));
	  }
	}

	var css_248z = "/* css variables*/\n:root {\n  --font-size: 12pt;\n  --font-size-sm: 9pt;\n  --primary-color: #432E30;\n  --primary-color-light: #8E7474;\n  --accent-color: #DD356E;\n  --accent-color-light: #f0b9cb;\n  /*--accent-color-light: #FFE4E4;\n  --accent-color-dark: #B94B4C;*/\n  --white-color: #FAFBFC;\n  /*--light-gray-color: #C6CBD1;\n  --medium-gray-color: #959DA5;\n  --dark-gray-color: #444D56; */\n  --header-bg-color: #F8F8FA;\n  --header-bg-color-secondary: #e4e4f7;\n  --code-bg-color: #f9f9f9;\n  --header-logo-width: 125px;\n  --header-logo-width-resp: 100px;\n  --header-grid-height: 4em;\n  --header-grid-height-resp: 3em;\n  --header-sub-height: 0;\n  --header-sub-height-resp: 2.5em;\n  --menu-width-web: 20em;\n  --border: 1px solid var(--header-bg-color); }\n\n/*\n@font-face {\n  font-family: \"Inconsolata\";\n  font-weight: normal;\n  src: url(../fonts/Inconsolata/Inconsolata-Regular.ttf) format(\"truetype\");\n}\n\n@font-face {\n  font-family: \"Inconsolata\";\n  font-weight: bold;\n  src: url(../fonts/Inconsolata/Inconsolata-Bold.ttf) format(\"truetype\");\n}\n*/\n/* normalized */\nbody.arredemo {\n  padding: 0;\n  margin: 0;\n  font-family: 'Inconsolata', Arial, sans-serif;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  background-color: white; }\n\n.arredemo h1, h2 {\n  color: var(--primary-color); }\n\n.arredemo h1 {\n  font-size: 2em;\n  padding-bottom: 1em; }\n\n.arredemo h2 {\n  font-size: 1.5em;\n  padding-bottom: 0.75em; }\n\n.arredemo h3 {\n  font-size: 1.25em;\n  padding-bottom: 0.5em; }\n\n.arredemo h1:not(:first-child) {\n  padding-top: 2em; }\n\n.arredemo h2:not(:first-child) {\n  padding-top: 1.25em; }\n\n.arredemo h3:not(:first-child) {\n  padding-top: 1em; }\n\n.arredemo pre {\n  display: block;\n  padding: 1.5em 1em !important;\n  border: 1px solid #bebab0;\n  overflow-x: auto; }\n\n.arredemo code {\n  color: var(--accent-color);\n  word-wrap: break-word;\n  font-family: \"Liberation Mono\",\"Courier New\",monospace;\n  font-size: 0.9em; }\n\n.arredemo pre.prettyprint {\n  background-color: var(--code-bg-color); }\n\n.arredemo p, li {\n  font-weight: 300;\n  color: #4A4A4A; }\n\n.arredemo a, a:hover {\n  /*text-decoration: none;*/\n  color: var(--primary-color-light); }\n\n.arredemo hr {\n  padding: 1rem 0;\n  border: 0;\n  border-bottom: 1px solid var(--bg-color); }\n\n.arredemo * {\n  box-sizing: border-box; }\n\n.arredemo a,\n.arredemo .link {\n  text-decoration: none;\n  transition: all 0.3s ease-out;\n  cursor: pointer; }\n  .arredemo a:hover,\n  .arredemo .link:hover {\n    color: var(--accent-color); }\n  .arredemo a.light,\n  .arredemo .link.light {\n    font-weight: lighter; }\n  .arredemo a.dark,\n  .arredemo .link.dark {\n    font-weight: bolder; }\n  .arredemo a img,\n  .arredemo .link img {\n    position: relative;\n    vertical-align: middle; }\n  .arredemo a img + span,\n  .arredemo .link img + span {\n    margin-left: 0.5em; }\n\n.arredemo .afi-package-name {\n  font-weight: 600;\n  color: var(--accent-color); }\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\n:root {\n  --select-border: #777;\n  --select-focus: blue;\n  --select-arrow: var(--select-border); }\n\nselect {\n  appearance: none;\n  background-color: transparent;\n  border: none;\n  padding: 0 1em 0 0;\n  margin: 0;\n  width: 100%;\n  z-index: 1;\n  outline: none; }\n  select::-ms-expand {\n    display: none; }\n\n.select {\n  display: grid;\n  grid-template-areas: \"select\";\n  align-items: center;\n  position: relative;\n  min-width: 15ch;\n  max-width: 30ch;\n  border: 1px solid var(--select-border);\n  border-radius: 0.25em;\n  padding: 0.25em 0.5em;\n  cursor: pointer;\n  background-color: #fff;\n  background-image: linear-gradient(to top, #f9f9f9, #fff 33%); }\n  .select select, .select::after {\n    grid-area: select; }\n  .select:not(.select--multiple)::after {\n    content: \"\";\n    justify-self: end;\n    width: 0.8em;\n    height: 0.5em;\n    background-color: var(--select-arrow);\n    clip-path: polygon(100% 0%, 0 0%, 50% 100%); }\n\nselect:focus + .focus {\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  right: -1px;\n  bottom: -1px;\n  border: 2px solid var(--select-focus);\n  border-radius: inherit; }\n\nselect[multiple] {\n  padding-right: 0;\n  /*\n   * Safari will not reveal an option\n   * unless the select height has room to \n   * show all of it\n   * Firefox and Chrome allow showing \n   * a partial option\n   */\n  height: 6rem;\n  /* \n   * Experimental - styling of selected options\n   * in the multiselect\n   * Not supported crossbrowser\n   */ }\n  select[multiple] option {\n    white-space: normal;\n    outline-color: var(--select-focus); }\n\n.select--disabled {\n  cursor: not-allowed;\n  background-color: #eee;\n  background-image: linear-gradient(to top, #ddd, #eee 33%); }\n\n/*\nlabel {\n  font-size: 1.125rem;\n  font-weight: 500;\n}\n*/\n.select + label {\n  margin-top: 2rem; }\n\n/* global components */\n/* typography */\n/*\n.section__title {\n  color: var(--primary-color);\n}\n*/\n/* tabs */\n/*\n.tab__container {\n  position: relative;\n}\n\n.tab__container > ul {\n  position: absolute;\n  list-style: none;\n  margin: 0;\n  right: 1rem;\n  top: -2rem;\n  padding-left: 0;\n}\n\n.tab__container .code {\n  white-space: normal;\n  padding: 1rem 1.5rem;\n}\n\n.tab {\n  display: inline-block;\n  padding: 0.3rem 0.5rem;\n  font-weight: 200;\n  cursor: pointer;\n}\n\n.tab.active {\n  border-bottom: 1px solid var(--primary-color);\n  font-weight: 700;\n  display: inline-block;\n}\n\n.tab__pane {\n  display: none;\n}\n\n.tab__pane.active {\n  display: block;\n}\n\n*/\n/* code */\n/*\n.code {\n  border-radius: 3px;\n  font-family: Space Mono, SFMono-Regular, Menlo,Monaco, Consolas, Liberation Mono, Courier New, monospace;\n  background: var(--bg-color);\n  border: 1px solid var(--code-bg-color);\n  color: var(--primary-color-light);\n}\n\n.code--block {\n  white-space: pre-line;\n  padding: 0 1.5rem;\n}\n\n.code--inline {\n  padding: 3px 6px;\n  font-size: 80%;\n}\n*/\n/* buttons */\n.button--primary {\n  padding: 10px 22px;\n  background-color: var(--accent-color);\n  color: white;\n  position: relative;\n  text-decoration: none;\n  border: 0;\n  transition: all .3s ease-out; }\n\n.button--primary:after {\n  position: absolute;\n  content: \"\";\n  width: 1rem;\n  height: 1rem;\n  background-color: var(--accent-color-light);\n  right: -0.4rem;\n  top: -0.4rem;\n  transition: all 0.3s ease-out; }\n\n.button--primary:hover {\n  text-shadow: 0px 1px 1px var(--accent-color-dark);\n  color: white;\n  transform: translate3D(0, -3px, 0); }\n\n.button--primary:hover::after {\n  transform: rotate(90deg); }\n\n.button--secondary {\n  padding: 10px 22px;\n  border: 2px solid var(--primary-color);\n  transition: all 0.5s ease-out; }\n\n.button--secondary:hover {\n  border-color: var(--accent-color);\n  color: var(--accent-color); }\n\n/* links */\n/*\n.link {\n  text-decoration: none;\n  transition: all 0.3s ease-out;\n}\n\n.link:hover {\n  color: var(--accent-color);\n}\n\n.link--dark {\n  color: var(--primary-color);\n}\n\n.link--light {\n  color: var(--accent-color);\n}\n*/\n/* table */\n/*\ntable {\n  border-collapse: collapse;\n  width: 100%;\n  transition: color .3s ease-out;\n  margin-bottom: 2rem;\n}\n\ntable td, table th {\n  border: 1px solid var(--code-bg-color);\n  padding: 0.8rem;\n  font-weight: 300;\n}\n\ntable th {\n  text-align: left;\n  background-color: white;\n  border-color: white;\n  border-bottom-color: var(--code-bg-color);\n}\n\ntable td:first-child {\n  background-color: var(--bg-color);\n  font-weight: 600;\n}\n*/\n/* layout */\n/*\n.wrapper {\n  margin: 0 auto;\n  width: 70%;\n}\n*/\n/*\n.footer {\n  text-align: center;\n  background-color: var(--primary-color);\n  padding: 2rem;\n  color: white;\n}\n*/\n@keyframes fadeUp {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 30px, 0); }\n  100% {\n    transform: translate3d(0, 0, 0); } }\n\nnav.header {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 2;\n  background-color: var(--header-bg-color); }\n  @media screen and (min-width: 600px) {\n    nav.header {\n      padding-left: 4em;\n      padding-right: 4em; } }\n  nav.header .grid {\n    display: grid;\n    grid-template-columns: var(--header-logo-width) auto 0%;\n    padding: 1em 0;\n    height: var(--header-grid-height);\n    background-repeat: no-repeat;\n    background-size: auto 100%; }\n    @media screen and (max-width: 600px) {\n      nav.header .grid {\n        grid-template-columns: var(--header-logo-width-resp) auto 20%;\n        height: var(--header-grid-height-resp); } }\n    nav.header .grid div.logo img {\n      max-height: 100%; }\n      @media screen and (max-width: 600px) {\n        nav.header .grid div.logo img {\n          width: 100px;\n          margin-left: 0.5em; } }\n    @media screen and (max-width: 600px) {\n      nav.header .grid div.toolbar .link.github span {\n        display: none; } }\n    nav.header .grid div.toolbar a:not(:last-child) {\n      padding-right: 1em; }\n      @media screen and (max-width: 600px) {\n        nav.header .grid div.toolbar a:not(:last-child) {\n          padding-right: 0.5em; } }\n    nav.header .grid div.toolbar a img {\n      width: 1em;\n      top: -0.05em; }\n  nav.header .grid div.toolbar {\n    text-align: right; }\n    @media screen and (max-width: 600px) {\n      nav.header .grid div.toolbar {\n        text-align: center; } }\n\ndiv.toggler {\n  text-align: right;\n  padding-top: 1em;\n  padding-right: 1em;\n  cursor: pointer;\n  display: none; }\n  @media screen and (max-width: 600px) {\n    div.toggler {\n      display: block; } }\n  div.toggler .toggle {\n    position: relative; }\n  div.toggler .toggle span,\n  div.toggler .toggle span:before,\n  div.toggler .toggle span:after {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 18px;\n    border-radius: 2px;\n    background: var(--primary-color);\n    display: block;\n    cursor: pointer;\n    transition: all 0.3s ease-in-out;\n    right: 0; }\n  div.toggler .toggle span:before {\n    top: -6px; }\n  div.toggler .toggle span:after {\n    bottom: -6px; }\n  div.toggler .toggle.open span {\n    background-color: transparent; }\n  div.toggler .toggle.open span:before,\n  div.toggler .toggle.open span:after {\n    top: 0; }\n  div.toggler .toggle.open span:before {\n    transform: rotate(45deg); }\n  div.toggler .toggle.open span:after {\n    transform: rotate(-45deg); }\n\n.left {\n  position: fixed;\n  left: 0;\n  width: var(--menu-width-web);\n  padding-left: 1em;\n  top: calc(var(--header-grid-height) + 1em);\n  height: calc(100% - calc(var(--header-grid-height) + 1em));\n  overflow: hidden;\n  /*\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: auto auto;\n    grid-gap: 1em;\n    justify-content: center;\n    \n    flex-grow: 1;\n    display: flex;\n    */\n  /*\n  \n    @media screen and (max-width: 600px) {\n      position: fixed;\n      top: var(--header-grid-height-resp);\n      left: 0;\n      display: block;\n      width: 100%;\n  \n      background-color: var(--header-bg-color);\n      padding: 1rem;\n    }\n    */\n  border-right: var(--border); }\n  @media screen and (max-width: 600px) {\n    .left {\n      display: none !important; } }\n\n.switcher {\n  height: 2em; }\n\n.menu {\n  height: calc(100% - 2.25em);\n  overflow-y: auto; }\n  .menu ul {\n    overflow-y: auto;\n    list-style: none;\n    padding-left: 0.5em;\n    text-align: left; }\n    .menu ul li.level-1 {\n      font-weight: bold; }\n    .menu ul li.level-2 {\n      padding-left: 1.5em; }\n    .menu ul li.level-3 {\n      padding-left: 3em; }\n    .menu ul li a {\n      text-decoration: none;\n      color: var(--primary-color); }\n    .menu ul li a:hover {\n      color: var(--primary-color-light);\n      cursor: pointer;\n      transition: color .3s ease-in-out; }\n    .menu ul .selected {\n      position: relative; }\n    .menu ul .selected a {\n      color: var(--accent-color); }\n    .menu ul .selected:after {\n      position: absolute;\n      content: \"\";\n      width: 0.1rem;\n      height: 75%;\n      background-color: var(--accent-color);\n      left: -0.5rem;\n      top: 0.25rem; }\n\ndiv.body {\n  position: relative;\n  margin-top: calc(var(--header-grid-height) + 1em);\n  width: 100%;\n  padding: 0 2em; }\n  @media screen and (max-width: 600px) {\n    div.body {\n      margin-top: calc(var(--header-grid-height-resp) + 1em);\n      padding: 0 1em; } }\n\ndiv.content {\n  margin-left: var(--menu-width-web); }\n  @media screen and (max-width: 600px) {\n    div.content {\n      margin-left: 0; } }\n\nfooter {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  font-size: var(--font-size-sm);\n  border-top: var(--border);\n  padding: 1.5em;\n  text-align: center;\n  z-index: 2; }\n  footer .badges {\n    text-align: left; }\n    footer .badges span.badge {\n      padding-top: 0.5em;\n      padding-right: 1em; }\n      @media screen and (max-width: 600px) {\n        footer .badges span.badge {\n          display: inline-block;\n          padding-top: 0; } }\n  footer .license {\n    text-align: right; }\n  footer a {\n    color: white;\n    text-decoration: underline; }\n  @media screen and (max-width: 600px) {\n    footer {\n      display: block; }\n      footer .badges {\n        text-align: center; }\n      footer .license {\n        text-align: center;\n        margin-top: 1em; } }\n\n:root {\n  --loading-size: 125px;\n  --clr-bg: #272324;\n  --clr1: var(--primary-color);\n  --clr2: var(--accent-color);\n  --clr3: var(--accent-color-light); }\n\n.center-screen {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  min-height: 100vh; }\n\n.spinner {\n  --animation-duration: 5000ms;\n  position: relative;\n  width: var(--loading-size);\n  height: var(--loading-size);\n  transform: rotate(45deg); }\n  .spinner .spinner-item {\n    --item-size: calc(var(--loading-size) / 2.5);\n    position: absolute;\n    width: var(--item-size);\n    height: var(--item-size);\n    border: 4px solid var(--clr-spinner); }\n  .spinner .spinner-item:nth-child(1) {\n    --clr-spinner: var(--clr1);\n    top: 0;\n    left: 0;\n    animation: spinner3A var(--animation-duration) linear infinite; }\n\n@keyframes spinner3A {\n  0%,\n  8.33%,\n  16.66%,\n  100% {\n    transform: translate(0%, 0%); }\n  24.99%,\n  33.32%,\n  41.65% {\n    transform: translate(100%, 0%); }\n  49.98%,\n  58.31%,\n  66.64% {\n    transform: translate(100%, 100%); }\n  74.97%,\n  83.30%,\n  91.63% {\n    transform: translate(0%, 100%); } }\n  .spinner .spinner-item:nth-child(2) {\n    --clr-spinner: var(--clr2);\n    top: 0;\n    left: var(--item-size);\n    animation: spinner3B var(--animation-duration) linear infinite; }\n\n@keyframes spinner3B {\n  0%,\n  8.33%,\n  91.63%,\n  100% {\n    transform: translate(0%, 0%); }\n  16.66%,\n  24.99%,\n  33.32% {\n    transform: translate(0%, 100%); }\n  41.65%,\n  49.98%,\n  58.31% {\n    transform: translate(-100%, 100%); }\n  66.64%,\n  74.97%,\n  83.30% {\n    transform: translate(-100%, 0%); } }\n  .spinner .spinner-item:nth-child(3) {\n    --clr-spinner: var(--clr3);\n    top: var(--item-size);\n    left: var(--item-size);\n    animation: spinner3C var(--animation-duration) linear infinite; }\n\n@keyframes spinner3C {\n  0%,\n  83.30%,\n  91.63%,\n  100% {\n    transform: translate(0, 0); }\n  8.33%,\n  16.66%,\n  24.99% {\n    transform: translate(-100%, 0); }\n  33.32%,\n  41.65%,\n  49.98% {\n    transform: translate(-100%, -100%); }\n  58.31%,\n  66.64%,\n  74.97% {\n    transform: translate(0, -100%); } }\n";
	styleInject(css_248z);

	var pkgPath = '/home/lapis/repos/gh/arredemo/demo';
	var pkgJson = JSON.parse("\n  {\n  \"name\": \"reactstrap-date-picker\",\n  \"version\": \"1.0.6\",\n  \"type\": \"module\",\n  \"repository\": {\n    \"type\": \"git\",\n    \"url\": \"git+https://github.com/afialapis/arredemo.git\"\n  },\n  \"author\": \"donato@afialapis.com\",\n  \"license\": \"MIT\",\n  \"homepage\": \"https://github.com/afialapis/arredemo#readme\",\n  \"scripts\": {\n    \"reset\": \"rm -fr arredemo\",\n    \"build\": \"npm run reset && node ../bin/arre.mjs build\"\n  }\n}\n");
	var arreConfig = JSON.parse("\n{\n  \"theme\": \"default\",\n  \"favicon\": \"logo/favicon/arredemo.ico\",\n  \"logo\": \"logo/arredemo.png\",\n  \"company\": \"Arre Demo!\",\n  \"url\": \"arredemo.afialapis.com\",\n  \"doc_versions\": [\n    \"1.0.6\"\n  ],\n  \"demo_entry\": null,\n  \"demo_styles\": null\n}\n");
	var md_1_0_6 = decodeURIComponent(escape(window.atob("CgpBIFJlYWN0c3RyYXAgYmFzZWQsIHplcm8gZGVwZW5kZW5jaWVzLCBkYXRlIHBpY2tlci4KCkRlbW8gYW5kIGRvY3MgYXQgW3JlYWN0c3RyYXAtZGF0ZS1waWNrZXJdKGh0dHBzOi8vcmVhY3RzdHJhcC1kYXRlLXBpY2tlci5hZmlhbGFwaXMuY29tLykuCgoKPHNlY3Rpb24+CiMgVGFibGUgb2YgQ29udGVudHMKCjEuIFtJbnN0YWxsYXRpb25dKCNpbnN0YWxsYXRpb24pCjIuIFtVc2FnZV0oI3VzYWdlKQozLiBbQVBJIFJlZmVyZW5jZV0oI2FwaS1yZWZlcmVuY2UpCjQuIFtEZWVwZXIgY3VzdG9taXppbmddKCNkZWVwZXItY3VzdG9taXppbmcpCjUuIFtJbnNwZWN0IHRoaXMgcGFja2FnZV0oI2luc3BlY3QtdGhpcy1wYWNrYWdlKQo2LiBbQ2hhbmdlbG9nXSgjY2hhbmdlbG9nKQoKCjwvc2VjdGlvbj4KPHNlY3Rpb24+CiMgSW5zdGFsbGF0aW9uCgpVc2luZyBgbnBtYDoKCmBgYGJhc2gKbnBtIGluc3RhbGwgcmVhY3RzdHJhcC1kYXRlLXBpY2tlcgpgYGAKCmByZWFjdHN0cmFwLWRhdGUtcGlja2VyYCB3b3JrcyB3aXRoIHRoZXNlIFtwZWVyIGRlcGVuZGVuY2llc10oaHR0cHM6Ly9ub2RlanMub3JnL2VuL2Jsb2cvbnBtL3BlZXItZGVwZW5kZW5jaWVzLyk6CiAgLSBbUmVhY3RdKGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdCkgPj0gMTYuMTMuMQogIC0gW1JlYWN0c3RyYXBdKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdHN0cmFwL3JlYWN0c3RyYXApID49IDguNS4xCiAgICAqIFtCb290c3RyYXBdKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcCkgPj0gNC41LjIKCkNoZWNrIFtDaGFuZ2Vsb2ddKCNjaGFuZ2Vsb2cpIGZvciBtb3JlIGluZm8gb24gb3RoZXIgdmVyc2lvbnMuCgoKPC9zZWN0aW9uPgo8c2VjdGlvbj4KIyBVc2FnZQoKYGBganMKaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QKaW1wb3J0IHtGb3JtR3JvdXAsIExhYmVsLCBGb3JtVGV4dH0gZnJvbSAncmVhY3RzdHJhcCcKaW1wb3J0IHtEYXRlUGlja2VyfSBmcm9tICdyZWFjdHN0cmFwLWRhdGUtcGlja2VyJwoKY29uc3QgQXBwID0gKCkgPT4gewogIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdPSB1c2VTdGF0ZShuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkpCiAgY29uc3QgW2ZtdFZhbHVlLCBzZXRGbXRWYWx1ZV09IHVzZVN0YXRlKHVuZGVmaW5lZCkKCiAgaGFuZGxlQ2hhbmdlKHZhbHVlLCBmb3JtYXR0ZWRWYWx1ZSkgewogICAgc2V0VmFsdWUodmFsdWUpCiAgICBzZXRGbXRWYWx1ZShmb3JtYXR0ZWRWYWx1ZSkKICB9CgogIHVzZUVmZmVjdCgoICk9PiB7CiAgICBjb25zb2xlLmxvZyhgRm9ybWF0dGVkIHZhbHVlIGlzICR7Zm10VmFsdWV9YCkKICB9LCBbZm10VmFsdWVdKQoKICByZXR1cm4gKAogICAgPEZvcm1Hcm91cD4KICAgICAgPExhYmVsPk15IERhdGUgUGlja2VyPC9MYWJlbD4KICAgICAgPERhdGVQaWNrZXIgaWQgICAgICA9ICJleGFtcGxlLWRhdGVwaWNrZXIiIAogICAgICAgICAgICAgICAgICB2YWx1ZSAgID0ge3ZhbHVlfSAKICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9IHsodixmKSA9PiBoYW5kbGVDaGFuZ2UodiwgZil9IC8+CiAgICAgIDxGb3JtVGV4dD5IZWxwPC9Gb3JtVGV4dD4KICAgIDwvRm9ybUdyb3VwPgogICkKfQoKYGBgCgoKPC9zZWN0aW9uPgo8c2VjdGlvbj4KIyBBUEkgUmVmZXJlbmNlCgo8YXJ0aWNsZT4KIyMgYDxEYXRlUGlja2VyIC8+YAoKYHJlYWN0c3RyYXAtZGF0ZS1waWNrZXJgJ3MgcHVibGljIGNvbXBvbmVudC4KCmBgYGpzCmltcG9ydCB7RGF0ZVBpY2tlcn0gZnJvbSAncmVhY3RzdHJhcC1kYXRlLXBpY2tlcicKCmNvbnN0IEV4YW1wbGUgPSAoKSA9PiB7CiAgLi4uCiAgcmV0dXJuICgKICAgIC4uLgogICAgICA8RGF0ZVBpY2tlciB7cHJvcHN9IC8+CiAgICAuLi4KICApCn0KCmBgYAoKCjwvYXJ0aWNsZT4KPGFydGljbGU+CiMjIEdsb2JhbCBwcm9wZXJ0aWVzCgo8ZGV0YWlscz4KPHN1bW1hcnk+Cjxjb2RlPnZhbHVlLCBkZWZhdWx0VmFsdWUsIGlkLCBuYW1lLCBkYXRlRm9ybWF0LCBtaW5EYXRlLCBtYXhEYXRlLCBzaG93Q2xlYXJCdXR0b24sIGNsZWFyQnV0dG9uRWxlbWVudDwvY29kZT4KPC9zdW1tYXJ5Pgo8cD4KCiMjIyBgdmFsdWVgCgpJU08gZGF0ZSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IHZhbHVlLiBDYW5ub3QgYmUgc2V0IGFsb25nc2lkZSBgZGVmYXVsdFZhbHVlYC4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYHN0cmluZ2AuCiAgKiBFeGFtcGxlOiBgIjIwMTYtMDUtMTlUMTI6MDA6MDAuMDAwWiJgCgojIyMgYGRlZmF1bHRWYWx1ZWAKCklTTyBkYXRlIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGRlZmF1bHQgdmFsdWUuIENhbm5vdCBiZSBzZXQgYWxvbmdzaWRlIGB2YWx1ZWAuCgogICogT3B0aW9uYWwKICAqIFR5cGU6IGBzdHJpbmdgCiAgKiBFeGFtcGxlOiBgIjIwMTYtMDUtMTlUMTI6MDA6MDAuMDAwWiJgCgojIyMgYGlkYAoKSFRNTCBpZGVudGlmaWVyIGZvciB0aGUgYHJlYWN0c3RyYXAtZGF0ZS1waWNrZXJgJ3MgaW5wdXQgKHRoZSBoaWRkZW4gb25lKS4gWW91IG1heQp3YW50IHRvIHVzZSBpdCBpbiBjYXNlIHlvdSBuZWVkIHRvIHRyYXZlcnNlIHNvbWVob3cgdGhlIERPTS4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYHN0cmluZ2AuCiAgKiBFeGFtcGxlOiBgImV4YW1wbGUtZGF0ZXBpY2tlciJgCgojIyMgYG5hbWVgCgpIVE1MIGBuYW1lYCBhdHRyaWJ1dGUgZm9yIHRoZSBgcmVhY3RzdHJhcC1kYXRlLXBpY2tlcmAncyBpbnB1dCAodGhlIGhpZGRlbiBvbmUpLiBZb3UgbWF5Cm5lZWQgdG8gdXNlIGl0IGRlcGVuZGluZyBvbiBob3cgeW91ciBoYW5kbGUgeW91ciBGb3Jtcy4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYHN0cmluZ2AuCiAgKiBFeGFtcGxlOiBgImRhdGUtZmllbGQiYAoKIyMjIGBkYXRlRm9ybWF0YAoKRGF0ZSBmb3JtYXQuIEFueSBjb21iaW5hdGlvbiBvZiBERCwgTU0sIFlZWVkgYW5kIHNlcGFyYXRvci4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYHN0cmluZ2AKICAqIEV4YW1wbGVzOiBgIk1NL0REL1lZWVkiYCwgYCJZWVlZL01NL0REImAsIGAiTU0tREQtWVlZWSJgLCBvciBgIkREIE1NIFlZWVkiYAoKIyMjIGBtaW5EYXRlYAoKSVNPIGRhdGUgc3RyaW5nIHRvIHNldCB0aGUgbG93ZXN0IGFsbG93YWJsZSBkYXRlIHZhbHVlLgoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgc3RyaW5nYAogICogRXhhbXBsZTogYCIyMDE2LTA1LTE5VDEyOjAwOjAwLjAwMFoiYAoKIyMjIGBtYXhEYXRlYAoKSVNPIGRhdGUgc3RyaW5nIHRvIHNldCB0aGUgaGlnaGVzdCBhbGxvd2FibGUgZGF0ZSB2YWx1ZS4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYHN0cmluZ2AKICAqIEV4YW1wbGU6IGAiMjAxNi0wNS0xOVQxMjowMDowMC4wMDBaImAKCiMjIyBgc2hvd0NsZWFyQnV0dG9uYAoKVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgY2xlYXJCdXR0b24KCiAgKiBPcHRpb25hbAogICogVHlwZTogYGJvb2xgCiAgKiBEZWZhdWx0OiBgZmFsc2VgCgojIyMgYGNsZWFyQnV0dG9uRWxlbWVudGAKCkNoYXJhY3RlciBvciBjb21wb25lbnQgdG8gdXNlIGZvciB0aGUgY2xlYXIgYnV0dG9uLgoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgc3RyaW5nYCBvciBgUmVhY3RDbGFzc2AKICAqIERlZmF1bHQ6IGAiw5ciYAo8L3A+CjwvZGV0YWlscz4KCgo8L2FydGljbGU+CjxhcnRpY2xlPgojIyBJbnB1dCBwcm9wZXJ0aWVzCjxkZXRhaWxzPgo8c3VtbWFyeT4KPGNvZGU+YXV0b0NvbXBsZXRlLCBhdXRvRm9jdXMsIGRpc2FibGVkLCBub1ZhbGlkYXRlLCBwbGFjZWhvbGRlciwgcmVxdWlyZWQsIGNsYXNzTmFtZSwgc3R5bGUsIGlucHV0UmVmLCBjdXN0b21Db250cm9sLCBjaGlsZHJlbjwvY29kZT4KPC9zdW1tYXJ5Pgo8cD4KCiMjIyBgYXV0b0NvbXBsZXRlYAoKSGludCBmb3IgZm9ybSBhdXRvZmlsbCBmZWF0dXJlLgoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgc3RyaW5nYAogICogRGVmYXVsdDogYG9uYAoKIyMjIGBhdXRvRm9jdXNgCgpXaGV0aGVyIG9yIG5vdCBjb21wb25lbnQgc3RhcnRzIHdpdGggZm9jdXMuCgogICogT3B0aW9uYWwKICAqIFR5cGU6IGBib29sYAogICogRGVmYXVsdDogYGZhbHNlYAoKIyMjIGBkaXNhYmxlZGAKCldoZXRoZXIgb3Igbm90IGNvbXBvbmVudCBpcyBkaXNhYmxlZC4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYGJvb2xgCiAgKiBEZWZhdWx0OiBgZmFsc2VgCgojIyMgYG5vVmFsaWRhdGVgCgpXaGVuIHByZXNlbnQsIGl0IHNwZWNpZmllcyB0aGF0IHRoZSBmb3JtLWRhdGEgKGlucHV0KSBzaG91bGQgbm90IGJlIHZhbGlkYXRlZCB3aGVuIHN1Ym1pdHRlZC4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYGJvb2xgCiAgKiBEZWZhdWx0OiBgZmFsc2VgCgojIyMgYHBsYWNlaG9sZGVyYAoKVGV4dCB0aGF0IGFwcGVhcnMgaW4gdGhlIGZvcm0gY29udHJvbCB3aGVuIGl0IGhhcyBubyB2YWx1ZSBzZXQuCgogICogT3B0aW9uYWwKICAqIFR5cGU6IGB0ZXh0YAogICogRXhhbXBsZTogYEpvaG4gRG9lYAoKIyMjIGByZXF1aXJlZGAKCmBib29sZWFuYC4gQSB2YWx1ZSBpcyByZXF1aXJlZCBvciBtdXN0IGJlIGNoZWNrIGZvciB0aGUgZm9ybSB0byBiZSBzdWJtaXR0YWJsZQoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgYm9vbGVhbmAKICAqIERlZmF1bHQ6IGBmYWxzZWAKCiMjIyBgY2xhc3NOYW1lYAoKQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIEZvcm0gQ29udHJvbCBpbnB1dCBlbGVtZW50LgoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgc3RyaW5nYAogICogRXhhbXBsZTogYGV4YW1wbGUtY2xhc3NgCgojIyMgYHN0eWxlYAoKU3R5bGUgb2JqZWN0IHBhc3NlZCB0byB0aGUgRm9ybSBDb250cm9sIGlucHV0IGVsZW1lbnQuCgogICogT3B0aW9uYWwKICAqIFR5cGU6IGBvYmplY3RgCiAgKiBFeGFtcGxlOiBge3dpZHRoOiAiMTAwJSJ9YAoKIyMjIGBpbnB1dFJlZmAKCkEgUmVhY3QgcmVmIHRvIHRoZSBGb3JtIENvbnRyb2wgaW5wdXQgZWxlbWVudAoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgcmVmYAoKIyMjIGBjdXN0b21Db250cm9sYAoKT3ZlcndyaXRlIHRoZSBkZWZhdWx0IEZvcm0gQ29udHJvbCBjb21wb25lbnQgd2l0aCB5b3VyIG93biBjb21wb25lbnQuCgogICogT3B0aW9uYWwKICAqIFR5cGU6IGBSZWFjdC5Db21wb25lbnRgCiAgKiBFeGFtcGxlOiBgPEN1c3RvbUNvbnRyb2wgLz5gCgojIyMgYGNoaWxkcmVuYAoKYGNoaWxkcmVuYCBlbGVtZW50cyBmcm9tIHRoZSBGb3JtIENvbnRyb2xgCgogICogT3B0aW9uYWwKICAqIFR5cGU6IGBSZWFjdC5Db21wb25lbnRgCjwvcD4KPC9kZXRhaWxzPgoKCjwvYXJ0aWNsZT4KPGFydGljbGU+CiMjIElucHV0IEdyb3VwIHByb3BlcnRpZXMKCjxkZXRhaWxzPgo8c3VtbWFyeT4KPGNvZGU+c2l6ZSwgdmFsaWQsIGludmFsaWQsIGN1c3RvbUlucHV0R3JvdXA8L2NvZGU+Cjwvc3VtbWFyeT4KPHA+CgojIyMgYHNpemVgCgpTaXplIG9mIHRoZSBpbnB1dAoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgc3RyaW5nYAogICogRXhhbXBsZXM6IGBsZ2AsIGBzbWAsIC4uLgoKWW91IGNhbiBhbHNvIG92ZXJyaWRlIGl0IGNvbXBsZXRlbHkgYW5kIHBhc3MgeW91ciBvd24gY29tcG9uZW50OgoKIyMjIGB2YWxpZGAKCkFwcGxpZXMgdGhlIGBpcy12YWxpZGAgY2xhc3Mgd2hlbiBgdHJ1ZWAsIGRvZXMgbm90aGluZyB3aGVuIGBmYWxzZWAKCiAgKiBPcHRpb25hbAogICogVHlwZTogYGJvb2xgCiAgKiBFeGFtcGxlOiBgdHJ1ZWAKCiMjIyBgaW52YWxpZGAKCkFwcGxpZXMgdGhlIGBpcy1pbnZhbGlkYCBjbGFzcyB3aGVuIGB0cnVlYCwgZG9lcyBub3RoaW5nIHdoZW4gYGZhbHNlYAoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgYm9vbGAKICAqIEV4YW1wbGU6IGB0cnVlYCAgCgojIyMgYGN1c3RvbUlucHV0R3JvdXBgCgpPdmVyd3JpdGUgdGhlIGRlZmF1bHQgSW5wdXRHcm91cCBjb21wb25lbnQgd2l0aCB5b3VyIG93biBjb21wb25lbnQuCgogICogT3B0aW9uYWwKICAqIFR5cGU6IGBSZWFjdC5Db21wb25lbnRgCiAgKiBFeGFtcGxlOiBgPEN1c3RvbUlucHV0R3JvdXAgLz5gCjwvcD4KPC9kZXRhaWxzPgoKPC9hcnRpY2xlPgo8YXJ0aWNsZT4KIyMgQ2FsZW5kYXIgcHJvcGVydGllcwoKPGRldGFpbHM+CjxzdW1tYXJ5Pgo8Y29kZT5kYXlMYWJlbHMsIG1vbnRoTGFiZWxzLCB3ZWVrU3RhcnRzT24sIHNob3dXZWVrcywgcGlja01vbnRoRWxlbWVudCwgcHJldmlvdXNCdXR0b25FbGVtZW50LCBuZXh0QnV0dG9uRWxlbWVudCwgc2hvd1RvZGF5QnV0dG9uLCB0b2RheUJ1dHRvbkxhYmVsLCBjZWxsUGFkZGluZywgcm91bmRlZENvcm5lcnMsIGNhbGVuZGFyUGxhY2VtZW50LCBjYWxlbmRhckNvbnRhaW5lcjwvY29kZT4KPC9zdW1tYXJ5Pgo8cD4KCiMjIyBgZGF5TGFiZWxzYAoKQXJyYXkgb2YgZGF5IG5hbWVzIHRvIHVzZSBpbiB0aGUgY2FsZW5kYXIuIFN0YXJ0aW5nIG9uIFN1bmRheS4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYGFycmF5YAogICogRGVmYXVsdDogYFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J11gCgojIyMgYG1vbnRoTGFiZWxzYAoKQXJyYXkgb2YgbW9udGggbmFtZXMgdG8gdXNlIGluIHRoZSBjYWxlbmRhci4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYGFycmF5YAogICogRGVmYXVsdDogYFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddYAoKIyMjIGB3ZWVrU3RhcnRzT25gCgpNYWtlcyB0aGUgY2FsZW5kYXIncyB3ZWVrIHRvIHN0YXJ0IG9uIGEgc3BlY2lmaWVkIGRheS4gMCA9IFN1bmRheSwgMSA9IE1vbmRheSwgZXRjLgoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgbnVtYmVyYAogICogRXhhbXBsZTogYDRgCgojIyMgYHNob3dXZWVrc2AKClNob3dzIHRoZSBudW1iZXIgb2YgdGhlIHdlZWsgaW4gdGhlIGNhbGVuZGFyCgogICogT3B0aW9uYWwKICAqIFR5cGU6IGBib29sYAogICogRGVmYXVsdDogYGZhbHNlYAoKIyMjIGBwaWNrTW9udGhFbGVtZW50YAoKT3B0aW9uYWwgY29tcG9uZW50IHRvIHVzZSBmb3IgdGhlIGNhbGVuZGFyJ3MgeWVhciBhbmQgbW9udGggcGlja2Vycy4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYHN0cmluZ2Agb3IgYFJlYWN0Q2xhc3NgCiAgKiBEZWZhdWx0OiBgdW5kZWZpbmVkYAoKYHBpY2tNb250aEVsZW1lbnQgPSB1bmRlZmluZWRgIGlzIHRoZSBzYW1lIGFzIGBwaWNrTW9udGhFbGVtZW50ID0gIm5vbmUiYC4KCiMjIyMgY3VzdG9tIHBpY2tNb250aEVsZW1lbnQKCllvdSBjYW4gcGFzcyBhIGN1c3RvbSBgUmVhY3RgIGNvbXBvbmVudCwgd2hpY2ggd2lsbCByZWNlaXZlIHRoZXNlIHByb3BlcnRpZXM6Ci0gYGRpc3BsYXlEYXRlYAotIGBtaW5EYXRlYAotIGBtYXhEYXRlYAotIGBvbkNoYW5nZU1vbnRoYDogYSBjYWxsYmFjayByZWNlaXZpbmcgYW4gYGludGAgcGFyYW1ldGVyIChtb250aCBudW1iZXIpCi0gYG9uQ2hhbmdlWWVhcmA6IGEgY2FsbGJhY2sgcmVjZWl2aW5nIGFuIGBpbnRgIHBhcmFtZXRlciAoeWVhciBudW1iZXIpCgpPbiB0aGUgW2RlbW9dKGh0dHBzOi8vZ2l0aHViLmNvbS9hZmlhbGFwaXMvcmVhY3RzdHJhcC1kYXRlLXBpY2tlci9ibG9iL21hc3Rlci9kZW1vL3NyYy9zYW1wbGVzL1JEUEN1c3RvbVBpY2tNb250aC5qcykKeW91IHdpbGwgZmluZCBhIHNpbXBsZSBjdXN0b20gZWxlbWVudC4KCgojIyMjIGBkZWZhdWx0YCBwaWNrTW9udGhFbGVtZW50CgpUaGVyZSBpcyBhIHByZWRlZmluZWQgY29tcG9uZW50LCBjb25zaXN0aW5nIG9mIHR3byBzaW1wbGUgYHNlbGVjdGAgZWxlbWVudHMsCndoaWNoIGNhbiBiZSB1c2VkIGJ5IHBhc3NpbmcgYHBpY2tNb250aEVsZW1lbnQgPSAiZGVmYXVsdCJgLgoKSXQgaGFzIGEgc2ltcGxlIHN0eWxpbmcsIHdoaWNoIG1heSBub3QgZml0IHlvdXIgbmVlZHMuIE1heWJlIHlvdSBjYW4gdHdlYWsgaXQKdGhyb3VnaCB0aGUgYGNzc2AgY2xhc3NlcyB1c2VkIGJ5IGByZWFjdHN0cmFwLWRhdGUtcGlja2VyYDoKCmBgYGh0bWwKICA8ZGl2IGNsYXNzPSJyZHAtaGVhZGVyIj4KICAgIDxkaXYgY2xhc3M9InJkcC1oZWFkZXItcHJldmlvdXMtd3JhcHBlciIvPgogICAgPGRpdiBjbGFzcz0icmRwLWhlYWRlci1waWNrLW1vbnRoLXdyYXBwZXIiPgogICAgICA8ZGl2IGNsYXNzPSJyZHAtaGVhZGVyLXBpY2stbW9udGgtZGVmYXVsdCI+CiAgICAgICAgPGRpdiBjbGFzcz0icmRwLWhlYWRlci1waWNrLW1vbnRoLWRlZmF1bHQtbW9udGgiLz4KICAgICAgICA8ZGl2IGNsYXNzPSJyZHAtaGVhZGVyLXBpY2stbW9udGgtZGVmYXVsdC15ZWFyIi8+CiAgICAgIDwvZGl2PgogICAgPC9kaXY+CiAgICA8ZGl2IGNsYXNzPSJyZHAtaGVhZGVyLW5leHQtd3JhcHBlciIvPgogIDwvZGl2PgpgYGAKCgojIyMgYHByZXZpb3VzQnV0dG9uRWxlbWVudGAKCkNoYXJhY3RlciBvciBjb21wb25lbnQgdG8gdXNlIGZvciB0aGUgY2FsZW5kYXIncyBwcmV2aW91cyBidXR0b24uCgogICogT3B0aW9uYWwKICAqIFR5cGU6IGBzdHJpbmdgIG9yIGBSZWFjdENsYXNzYAogICogRGVmYXVsdDogYCI8ImAKCiMjIyBgbmV4dEJ1dHRvbkVsZW1lbnRgCgpDaGFyYWN0ZXIgb3IgY29tcG9uZW50IHRvIHVzZSBmb3IgdGhlIGNhbGVuZGFyJ3MgbmV4dCBidXR0b24uCgogICogT3B0aW9uYWwKICAqIFR5cGU6IGBzdHJpbmdgIG9yIGBSZWFjdENsYXNzYAogICogRGVmYXVsdDogYCI+ImAKCiMjIyBgc2hvd1RvZGF5QnV0dG9uYAoKVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgdG9kYXktYnV0dG9uLgoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgYm9vbGVhbmAKICAqIERlZmF1bHQ6IGBmYWxzZWAKCiMjIyBgdG9kYXlCdXR0b25MYWJlbGAKCkxhYmVsIGZvciB0aGUgdG9kYXktYnV0dG9uCgogICogT3B0aW9uYWwKICAqIFR5cGU6IGBzdHJpbmdgCiAgKiBEZWZhdWx0OiBgIlRvZGF5ImAKCiMjIyBgY2VsbFBhZGRpbmdgCgpDU1MgcGFkZGluZyB2YWx1ZSBmb3IgY2FsZW5kYXIgZGF0ZSBjZWxscy4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYHN0cmluZ2AKICAqIERlZmF1bHQ6IGAiNXB4ImAKCiMjIyBgcm91bmRlZENvcm5lcnNgCgpDU1MgYm9yZGVyLXJhZGl1cyB2YWx1ZSBmb3IgY2FsZW5kYXIgZGF0ZSBjZWxscy4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYGJvb2xgCiAgKiBEZWZhdWx0OiBgZmFsc2VgCgojIyMgYGNhbGVuZGFyUGxhY2VtZW50YAoKT3ZlcmxheSBwbGFjZW1lbnQgZm9yIHRoZSBwb3BvdmVyIGNhbGVuZGFyLgoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgc3RyaW5nYCBvciBgZnVuY3Rpb25gCiAgKiBEZWZhdWx0OiBgInRvcCJgCgojIyMgYGNhbGVuZGFyQ29udGFpbmVyYAoKT3ZlcmxheSBjb250YWluZXIgZm9yIHRoZSBwb3BvdmVyIGNhbGVuZGFyLiBXaGVuIHBsYWNpbmcgdGhlIGRhdGUtcGlja2VyIGluIGEgc2Nyb2xsaW5nIGNvbnRhaW5lciwgc2V0IHRoaXMgcHJvcCB0byBzb21lIGFuY2VzdG9yIG9mIHRoZSBzY3JvbGxpbmcgY29udGFpbmVyLgoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBBIERPTSBlbGVtZW50IG9yIGEgY29tcG9uZW50CiAgKiBFeGFtcGxlOiBgZG9jdW1lbnQuYm9keWAKPC9wPgo8L2RldGFpbHM+CgoKPC9hcnRpY2xlPgo8YXJ0aWNsZT4KIyMgRXZlbnQgcHJvcGVydGllcwo8ZGV0YWlscz4KPHN1bW1hcnk+Cjxjb2RlPm9uQ2hhbmdlLCBvbkNsZWFyLCBvbkZvY3VzLCBvbkJsdXIsIG9uSW52YWxpZDwvY29kZT4KPC9zdW1tYXJ5Pgo8cD4KCiMjIyBgb25DaGFuZ2VgCgpDaGFuZ2UgY2FsbGJhY2sgZnVuY3Rpb24uCgogICogT3B0aW9uYWwKICAqIFR5cGU6IGBmdW5jdGlvbmAKICAqIENhbGxiYWNrIEFyZ3VtZW50czoKICAgICogYHZhbHVlYCA6IElTTyBkYXRlIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHNlbGVjdGVkIHZhbHVlLgogICAgICAqIFR5cGU6IGBTdHJpbmdgCiAgICAgICogRXhhbXBsZTogYCIyMDE2LTA1LTE5VDEyOjAwOjAwLjAwMFoiYAogICAgKiBgZm9ybWF0dGVkVmFsdWVgIDogU3RyaW5nIHJlcHJlc2VudGluZyB0aGUgZm9ybWF0dGVkIHZhbHVlIGFzIGRlZmluZWQgYnkgdGhlIGBkYXRlRm9ybWF0YCBwcm9wZXJ0eS4KICAgICAgKiBUeXBlOiBgU3RyaW5nYAogICAgICAqIEV4YW1wbGU6IGAiMDUvMTkvMjAxNiJgCgojIyMgYG9uQ2xlYXJgCgpEZWZpbmVzIHdoYXQgaGFwcGVucyB3aGVuIGNsZWFyIGJ1dHRvbiBpcyBjbGlja2VkLgoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgZnVuY3Rpb25gCgojIyMgYG9uRm9jdXNgCgpGb2N1cyBjYWxsYmFjayBmdW5jdGlvbi4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYGZ1bmN0aW9uYAogICogQ2FsbGJhY2sgQXJndW1lbnRzOgogICAgKiBgZXZlbnRgIDogRm9jdXMgZXZlbnQuCiAgICAgICogVHlwZTogYEV2ZW50YAoKIyMjIGBvbkJsdXJgCgpCbHVyIGNhbGxiYWNrIGZ1bmN0aW9uLgoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgZnVuY3Rpb25gCiAgKiBDYWxsYmFjayBBcmd1bWVudHM6CiAgICAqIGBldmVudGAgOiBCbHVyIGV2ZW50LgogICAgICAqIFR5cGU6IGBFdmVudGAKCiMjIyBgb25JbnZhbGlkYAoKRGVmaW5lcyB3aGF0IGhhcHBlbnMgd2hlbiBpbnB1dCBoYXMgbm90IHBhc3NlZCB0aGUgZm9ybSB2YWxpZGF0aW9uLgoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgZnVuY3Rpb25gCjwvcD4KPC9kZXRhaWxzPgoKCjwvYXJ0aWNsZT4KPC9zZWN0aW9uPgo8c2VjdGlvbj4KIyBEZWVwZXIgY3VzdG9taXppbmcKCjxkZXRhaWxzPgo8c3VtbWFyeT4KQ3VzdG9taXplIHN0eWxpbmcgZGlyZWN0bHkgdHJvdWdoIENTUy4KPC9zdW1tYXJ5Pgo8cD4KCllvdSBjYW4gYWxzbyBjdXN0b21pemUgYHJlYWN0c3RyYXAtZGF0ZS1waWNrZXJgIHVzaW5nIGBDU1NgLCB0cm91Z2ggZWxlbWVudCdzIGBpZGAgb3IgYGNsYXNzYCBhdHRyaWJ1dGVzLgoKYHJlYWN0c3RyYXAtZGF0ZS1waWNrZXJgIHJlbmRlcnMgc2V2ZXJhbCBlbGVtZW50cywgYWxsIGNvbnRhaW5lZCB3aXRoaW4gYSBbcmVhY3RzdHJhcCBJbnB1dEdyb3VwXShodHRwczovL3JlYWN0c3RyYXAuZ2l0aHViLmlvLz9wYXRoPS9kb2NzL2NvbXBvbmVudHMtaW5wdXRncm91cC0taW5wdXQtZ3JvdXApLgpTdWNoIGVsZW1lbnRzIHdpbGwgaGF2ZSBpdHMgdW5pcXVlIGBpZGAgYXR0cmlidXRlLCBwbHVzIGByZWFjdHN0cmFwLWRhdGUtcGlja2VyYCBjdXN0b20gYGNsYXNzYCBuYW1lcyAocHJlZml4ZWQgYnkgYHJkcC0qYCkuCgpUaGUgcmVuZGVyZWQgRE9NIHN0cnVjdHVyZSBzZWVtcyBsaWtlIHRoaXM6CgpgYGBodG1sCiAgPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgcmRwLWlucHV0LWdyb3VwIiBpZD0icmRwLWlucHV0LWdyb3VwLVNVRkZJWCI+CiAgICA8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCByZHAtZm9ybS1jb250cm9sIiBpZD0icHJvcHMuZm9ybUNvbnRyb2wuaWQgb3IgcmRwLWZvcm0tY29udHJvbC1TVUZGSVgiIC8+CiAgICA8ZGl2IGNsYXNzPSJyZHAtb3ZlcmxheSI+CiAgICAgIDxkaXY+CiAgICAgICAgPGRpdiBjbGFzcz0icmRwLXBvcG92ZXIiPgogICAgICAgICAgPGRpdiBjbGFzcz0icG9wb3ZlciI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9InBvcG92ZXItaW5uZXIiPgogICAgICAgICAgICAgIDxkaXYgY2xhc3M9InBvcG92ZXItaGVhZGVyIj4KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InJkcC1oZWFkZXIiPgogICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJyZHAtaGVhZGVyLXByZXZpb3VzLXdyYXBwZXIiLz4KICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icmRwLWhlYWRlci1waWNrLW1vbnRoLXdyYXBwZXIiPgogICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InJkcC1oZWFkZXItcGljay1tb250aC1kZWZhdWx0Ij4KICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InJkcC1oZWFkZXItcGljay1tb250aC1kZWZhdWx0LW1vbnRoIi8+CiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJyZHAtaGVhZGVyLXBpY2stbW9udGgtZGVmYXVsdC15ZWFyIi8+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJyZHAtaGVhZGVyLW5leHQtd3JhcHBlciIvPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icG9wb3Zlci1ib2R5Ij4KICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz0icmRwLWNhbGVuZGFyIj4KICAgICAgICAgICAgICAgIDwvdGFibGU+CiAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8c3BhbiBjbGFzcz0iYXJyb3ciPgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2PgogICAgPC9kaXY+CiAgICA8aW5wdXQgY2xhc3M9InJkcC1oaWRkZW4iIGlkPSJwcm9wcy5pZCBvciByZHAtaGlkZGVuLVNVRkZJWCIgLz4KICAgIDxkaXYgY2xhc3M9ImlucHV0LWdyb3VwLXRleHQgcmRwLWFkZG9uIj4KICAgIDwvZGl2PgogIDwvZGl2PgpgYGAKClRoaXMgYFNVRkZJWGAgaXM6CgotIGBwcm9wcy5uYW1lYAoKLSBpZiBgcHJvcHMubmFtZWAgaXMgbm90IHBhc3NlZCwgdGhlbiB1c2UgYHByb3BzLmlkYAoKLSBpZiBgcHJvcHMuaWRgIGlzIG5vdCBwYXNzZWQsIHRoZW4gdGFrZSBhIGdsb2JhbCBjb3VudGVyIG9mIGFjdGl2ZSBgcmVhY3RzdHJhcC1kYXRlLXBpY2tlcmAgaW5zdGFuY2VzCgpTbywgdGhlIGlkZWEgaXMsIGRlcGVuZGluZyBvbiB5b3VyIG5lZWRzOgoKLSBpZiB5b3UgZG9uJ3QgbmVlZCBoYW5kbGUgYGlkYHMgYXQgYWxsLCBgcmVhY3RzdHJhcC1kYXRlLXBpY2tlcmAgd2lsbCByZW5kZXIgdW5pcXVlIGBpZGAgd2l0aCBubyBwcm9ibGVtCgotIGlmIHlvdSBuZWVkIGEgYmFzaWMgYGlkYCB1c2FnZSwgZm9yIGV4YW1wbGUgYWNjZXNzaW5nIHRoZSBgcmVhY3RzdHJhcC1kYXRlLXBpY2tlcmAncyB2YWx1ZSBmcm9tIHRoZSBET00sIHRoZW4gCiAgeW91IGp1c3QgaGF2ZSB0byBwYXNzIGBwcm9wcy5pZGAgYW5kIGdldCB0aGUgdmFsdWUgZnJvbSB0aGUgZWxlbWVudCB3aXRoIHRoYXQgYGlkYAoKLSBpZiB5b3Ugd2lsbCBwZXJmb3JtIG1vcmUgY29tcGxleCBvcGVyYXRpb25zLCB0aGVuIHVzZSBgcHJvcHMubmFtZWAgb3IgYHByb3BzLmlkYCwgYW5kIHBheSBhdHRlbnRpb24gdG8gdGhlCiAgcHJldmlvdXMgRE9NIHN0cnVjdHVyZSBhbmQgdGhlIGBTVUZGSVhgIHByZXNlbmNlcwo8L3A+CjwvZGV0YWlscz4KCgo8L3NlY3Rpb24+CjxzZWN0aW9uPgojIEluc3BlY3QgdGhpcyBwYWNrYWdlCgo8YXJ0aWNsZT4KIyMgRGVtbwoKYGBgYmFzaAoKbnBtIHJ1biBkZW1vCgpgYGAKCkFuZCB2aXNpdCBbaHR0cDovL2xvY2FsaG9zdDozMDEwXShodHRwOi8vbG9jYWxob3N0OjMwMTApIG9uIHlvdXIgYnJvd3NlcgoKCjwvYXJ0aWNsZT4KPGFydGljbGU+CiMjIFJ1bm5pbmcgVGVzdHMKCmBgYGJhc2gKCm5wbSBydW4gdGVzdAoKYGBgCgo8L2FydGljbGU+Cjwvc2VjdGlvbj4KPHNlY3Rpb24+CiMgQ2hhbmdlbG9nCgpPcmlnaW5hbGx5IGJhc2VkIG9uIFtyZWFjdC1ib290c3RyYXAtZGF0ZS1waWNrZXJdKGh0dHBzOi8vZ2l0aHViLmNvbS9wdXNodGVsbC9yZWFjdC1ib290c3RyYXAtZGF0ZS1waWNrZXIvKSwKYHJlYWN0c3RyYXAtZGF0ZS1waWNrZXJgIGhhcyBldm9sdmVkLiBGcm9tIHYxLjAgaXQgaGFzIGJlZW4gcmVmYWN0b3JlZCwgdXNpbmcgUmVhY3QgaG9va3MsIAp3aXRoIGNsZWFuZXIgY29kZSBhbmQgYW4gaW1wcm92ZWQgZmluYWwgcGVyZm9ybWFuY2UuCgo8ZGV0YWlscz4KPHN1bW1hcnk+CkV4cGFuZAo8L3N1bW1hcnk+CjxwPgoKPGFydGljbGU+CiMjIDEuMC42CgotIGNsZWFuZXIgcmVhZG1lCgo8L2FydGljbGU+CjxhcnRpY2xlPgojIyAxLjAuNQoKLSBmaXggdmFsaWQgcHJvcHMgb24gaGlkZGVuIGlucHV0Cgo8L2FydGljbGU+CjxhcnRpY2xlPgojIyAxLjAuNAoKLSBmaXggd2FybmluZyBvbiBgcHJvcC10eXBlc2AKCjwvYXJ0aWNsZT4KPGFydGljbGU+CiMjIDEuMC4zCgotIEFkZGVkIFtwaWNrTW9udGhFbGVtZW50XShodHRwczovL2dpdGh1Yi5jb20vYWZpYWxhcGlzL3JlYWN0c3RyYXAtZGF0ZS1waWNrZXIvaXNzdWVzLzIyKQoKPC9hcnRpY2xlPgo8YXJ0aWNsZT4KIyMgMS4wLjIKCi0gRml4ZWQgW2lzc3VlICMyMDogSW4vdmFsaWQgcHJvcHMgZG9lc24ndCBhcHBseSB0aGUgcmVhY3RzdHJhcCBpbi92YWxpZCBjc3Mgc3R5bGVdKGh0dHBzOi8vZ2l0aHViLmNvbS9hZmlhbGFwaXMvcmVhY3RzdHJhcC1kYXRlLXBpY2tlci9pc3N1ZXMvMjApCgo8L2FydGljbGU+CjxhcnRpY2xlPgojIyAxLjAuMQoKLSBGaXhlZCBbaXNzdWUgIzE5OiBSZWZlcmVuY2VFcnJvcjogRWxlbWVudCBpcyBub3QgZGVmaW5lZF0oaHR0cHM6Ly9naXRodWIuY29tL2FmaWFsYXBpcy9yZWFjdHN0cmFwLWRhdGUtcGlja2VyL2lzc3Vlcy8xOSkKCjwvYXJ0aWNsZT4KPGFydGljbGU+CiMjIDEuMC4wCgotIEludHJvZHVjdGlvbiBvZiBSZWFjdCBIb29rcwoKLSBEZWVwIHJlZmFjdG9yIG9mIHRoZSBzb3VyY2UgY29kZQoKLSBTdXBwb3J0ZWQgdmVyc2lvbnM6CsK3IFJlYWN0ID49IDE2LjEzLjEKwrcgUmVhY3RzdHJhcCA+PSA4LjUuMQrCtyBCb290c3RyYXAgPj0gNC41LjIKCi0gSW1wcm92ZWQgcGVyZm9ybWFuY2UKCi0gU21hbGxlciBidW5kbGUgc2l6ZXMKCgo8L2FydGljbGU+CjxhcnRpY2xlPgojIyAwLjAuMTYKCsK3IFZlcnNpb24gdG8gdXNlIGlmIHlvdSB3YW5uYSBnbyBSZWFjdHN0cmFwIDkKCsK3IFN1cHBvcnRlZCB2ZXJzaW9uczoKLSBSZWFjdCA+PSAxNAotIFJlYWN0c3RyYXAgOS4wLjEKLSBCb290c3RyYXAgNS4xLjMKCjwvYXJ0aWNsZT4KPGFydGljbGU+CiMjIDAuMC4xMgoKwrcgRml4ZWQgW2lzc3VlICMxNTogcGxhY2Vob2xkZXIgd2lsbCBub3QgZmFsbGJhY2sgdG8gZGF0ZUZvcm1hdF0oaHR0cHM6Ly9naXRodWIuY29tL2FmaWFsYXBpcy9yZWFjdHN0cmFwLWRhdGUtcGlja2VyL2lzc3Vlcy8xNSkKCsK3IEZpeGVkIFtpc3N1ZSAjMTYuIGRvIG5vdCBhbGxvdyBrZXlib2FyZCBpbnB1dCBvZiBkYXRlcyBvdXQgb2YgbWluRGF0ZS9tYXhEYXRlXShodHRwczovL2dpdGh1Yi5jb20vYWZpYWxhcGlzL3JlYWN0c3RyYXAtZGF0ZS1waWNrZXIvaXNzdWVzLzE2KQoKwrcgU3VwcG9ydGVkIHZlcnNpb25zOgotIFJlYWN0ID49IDE0Ci0gUmVhY3RzdHJhcCA4LjUuMQotIEJvb3RzdHJhcCA0LjUuMgoKPC9wPgo8L2RldGFpbHM+Cg==")));
	var readmes = {
	  "1.0.6": md_1_0_6
	};
	ReactDOM.createRoot(document.getElementById("arredemo-app")).render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, {
	  pkgPath: pkgPath,
	  pkgJson: pkgJson,
	  arreConfig: arreConfig,
	  readmes: readmes
	})));

})();
//# sourceMappingURL=bundle.js.map

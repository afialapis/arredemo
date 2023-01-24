(function (React, ReactDOM) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

  var AppContext = /*#__PURE__*/React__default["default"].createContext();

  var useAppContext = function useAppContext() {
    var context = React.useContext(AppContext);
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
          return /*#__PURE__*/React__default["default"].createElement("a", {
            className: "link github",
            href: repo.url,
            target: "_blank",
            rel: "noreferrer"
          }, /*#__PURE__*/React__default["default"].createElement("img", {
            src: _b64_src
          }), /*#__PURE__*/React__default["default"].createElement("span", null, 'Github'));
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
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "grid",
      style: {
        "backgroundImage": logo
      }
    }, /*#__PURE__*/React__default["default"].createElement("div", null), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "toolbar"
    }, has_demo ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("a", {
      className: "link demo " + (path == 'demo' ? 'dark' : 'light'),
      href: "demo.html"
    }, 'Demo'), /*#__PURE__*/React__default["default"].createElement("a", {
      className: "link docs " + (path == 'docs' ? 'dark' : 'light'),
      href: "docs.html"
    }, 'Docs')) : null, /*#__PURE__*/React__default["default"].createElement(RepoLink, null)), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "toggler",
      onClick: function onClick() {
        return onResponsiveToggle(!responsiveOpen);
      }
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "toggle " + (responsiveOpen ? 'open' : '')
    }, /*#__PURE__*/React__default["default"].createElement("span", null))));
  };

  var Menu = function Menu(_ref) {
    var menu = _ref.menu,
      onMenuClick = _ref.onMenuClick,
      activeOption = _ref.activeOption;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "menu"
    }, /*#__PURE__*/React__default["default"].createElement("ul", null, menu.map(function (item, idx) {
      return /*#__PURE__*/React__default["default"].createElement("li", {
        key: "menu_" + idx,
        className: (activeOption == idx ? 'selected' : '') + " level-" + item.level,
        "data-level": item.level,
        id: "menu-" + item.id,
        onClick: function onClick() {
          return onMenuClick(idx);
        }
      }, /*#__PURE__*/React__default["default"].createElement("span", {
        className: "link"
      }, item.title));
    })));
  };

  var Badges = function Badges() {
    var context = useAppContext();
    var pkgName = context.pkgJson.name;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "badges"
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      className: "badge"
    }, /*#__PURE__*/React__default["default"].createElement("a", {
      href: "https://www.npmjs.com/package/" + pkgName
    }, /*#__PURE__*/React__default["default"].createElement("img", {
      alt: "NPM Version",
      src: "https://badge.fury.io/js/" + pkgName + ".svg"
    }))), /*#__PURE__*/React__default["default"].createElement("span", {
      className: "badge"
    }, /*#__PURE__*/React__default["default"].createElement("a", {
      href: "https://www.npmjs.com/package/" + pkgName
    }, /*#__PURE__*/React__default["default"].createElement("img", {
      alt: "NPM Downloads",
      src: "https://img.shields.io/npm/dm/" + pkgName + ".svg?style=flat"
    }))));
  };

  var Company = function Company(_ref) {
    var company = _ref.company,
      url = _ref.url;
    return /*#__PURE__*/React__default["default"].createElement("a", {
      href: url,
      target: "_blank noopener noreferrer"
    }, company);
  };
  var License = function License(_ref2) {
    var name = _ref2.name;
    return /*#__PURE__*/React__default["default"].createElement("a", {
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
    return /*#__PURE__*/React__default["default"].createElement("footer", null, /*#__PURE__*/React__default["default"].createElement(Badges, null), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "license"
    }, pkgName + " is sharpened by ", /*#__PURE__*/React__default["default"].createElement(Company, {
      company: company,
      url: url
    }), " under ", /*#__PURE__*/React__default["default"].createElement(License, {
      name: license
    }), " license"));
  };

  var VersionSwitcher = function VersionSwitcher() {
    var context = useAppContext();
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "switcher select"
    }, /*#__PURE__*/React__default["default"].createElement("select", {
      onChange: function onChange(event) {
        return context.onSwitchVersion(event.target.value);
      },
      value: context.selectedVersion
    }, context.versions.map(function (v) {
      return /*#__PURE__*/React__default["default"].createElement("option", {
        key: v,
        value: v
      }, "Version: " + v);
    })));
  };

  var useScroll = function useScroll(callback, delay) {
    if (delay === void 0) {
      delay = 30;
    }
    var _useState = React.useState(0),
      lastUpdate = _useState[0],
      setLastUpdate = _useState[1];
    React.useEffect(function () {
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
    var _useState = React.useState(0),
      activeOption = _useState[0],
      setActiveOption = _useState[1];
    var updateActiveOption = React.useCallback(function () {
      var nActiveOption = _findActiveOption(menu);
      setActiveOption(nActiveOption);
    }, [menu]);
    React.useEffect(function () {
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

  var MENU_OFFSET = 64;
  var domScrollTo = function domScrollTo(selector) {
    var node = document.querySelector(selector);
    if (!node) {
      return;
    }
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

  var Page = function Page(_ref) {
    var path = _ref.path,
      menu = _ref.menu,
      children = _ref.children;
    var _useState = React.useState(false),
      responsiveOpen = _useState[0],
      setResponsiveOpen = _useState[1];
    var activeOption = useActiveOption(menu);
    var handleOpenMenu = function handleOpenMenu(idx) {
      setResponsiveOpen(false);
      var hid = menu[idx].id.replace('menu-', '');
      domScrollTo("#" + hid);
    };
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "main"
    }, /*#__PURE__*/React__default["default"].createElement("nav", {
      className: "header"
    }, /*#__PURE__*/React__default["default"].createElement(Header, {
      path: path,
      responsiveOpen: responsiveOpen,
      onResponsiveToggle: function onResponsiveToggle(show) {
        return setResponsiveOpen(show);
      }
    })), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "body " + (menu.length > 0 ? 'with-menu' : 'without-menu')
    }, menu.length == 0 ? null : /*#__PURE__*/React__default["default"].createElement("div", {
      className: "menu-container " + (responsiveOpen ? 'responsive-open' : '')
    }, /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, path == 'docs' ? /*#__PURE__*/React__default["default"].createElement(VersionSwitcher, null) : null, /*#__PURE__*/React__default["default"].createElement(Menu, {
      path: path,
      menu: menu,
      onMenuClick: handleOpenMenu,
      activeOption: activeOption
    }))), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "content"
    }, children, /*#__PURE__*/React__default["default"].createElement(Footer, null))));
  };

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
  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var getEventTarget = function getEventTarget(event) {
    if ((event == null ? void 0 : event.target) == undefined) {
      return undefined;
    }
    if (event.target.tagName.toLowerCase() == 'option') {
      return event.target.closest('select');
    }
    return event.target;
  };

  // try {
  //   if ("production" !== "production") {
  //     LOG_ENABLED= true
  //   }
  // } catch(_){}

  var log = function log(w, s) {
    {
      return;
    }
  };
  var log_input = function log_input(inputNode, s) {
    inputNode.name + " (t: " + inputNode.type + ", #" + ((inputNode == null ? void 0 : inputNode.id) || '') + ", v: " + inputNode.value.toString() + ") => " + s;
  };

  var attachFormValidationListener = function attachFormValidationListener(formNode, handler) {
    var formValidityListener = function formValidityListener(event) {
      var _event$detail, _event$detail2, _event$detail3, _event$detail3$value;
      log('form', "formiga-form-change on " + (event == null ? void 0 : (_event$detail = event.detail) == null ? void 0 : _event$detail.name) + " (t: " + (event == null ? void 0 : (_event$detail2 = event.detail) == null ? void 0 : _event$detail2.type) + ", v: " + (event == null ? void 0 : (_event$detail3 = event.detail) == null ? void 0 : (_event$detail3$value = _event$detail3.value) == null ? void 0 : _event$detail3$value.toString()) + ")");
      handler(getEventTarget(event));
    };
    formNode.addEventListener('formiga-form-change', formValidityListener);

    // clean listeners function
    var removeAllChangeListeners = function removeAllChangeListeners() {
      if (formNode != undefined) {
        formNode.removeEventListener('formiga-form-change', formValidityListener);
      }
    };
    return removeAllChangeListeners;
  };

  var _getFormElements = function _getFormElements(node) {
    var formElements = node == null ? void 0 : node.elements;
    if (!formElements) {
      return [];
    }
    var elements = [];
    for (var idx = 0; idx < formElements.length; idx++) {
      var el = formElements.item(idx);
      var name = el.name;
      var type = el.type || el.getAttribute('type');
      var feedback = el.getAttribute('data-formiga-validity') || '';
      var value = el.getAttribute('data-formiga-value') || '';
      var valid = feedback == '';
      elements.push({
        name: name,
        type: type,
        valid: valid,
        feedback: feedback,
        value: value
      });
    }
    elements.sort(function (a, b) {
      return a.name - b.name;
    });
    return elements;
  };
  var _areAllValid = function _areAllValid(elements) {
    for (var _iterator = _createForOfIteratorHelperLoose(elements), _step; !(_step = _iterator()).done;) {
      var e = _step.value;
      if (!e.valid) {
        return false;
      }
    }
    return true;
  };
  var useForm = function useForm() {
    var _useState = React.useState(undefined),
      formNode = _useState[0],
      setFormNode = _useState[1];
    var _useState2 = React.useState([]),
      elements = _useState2[0],
      setElements = _useState2[1];
    var _useState3 = React.useState(true),
      valid = _useState3[0],
      setValid = _useState3[1];
    var updateForm = React.useCallback(function (node) {
      var _node$elements;
      log('form', "updateForm callback (" + (node == null ? void 0 : (_node$elements = node.elements) == null ? void 0 : _node$elements.length) + " inputs)");
      var nElements = _getFormElements(node);
      setElements(nElements);
      setValid(_areAllValid(nElements));
    }, []);
    var formRef = React.useCallback(function (node) {
      if (node != null) {
        try {
          node.noValidate = true;
        } catch (e) {
          console.error(e);
        }
        try {
          node.setAttribute('data-formiga-loaded', '1');
        } catch (e) {
          console.error(e);
        }
        updateForm(node);
        setFormNode(node);
      }
    }, [updateForm]);
    React.useEffect(function () {
      if (formNode == undefined) {
        return;
      }
      var removeAllChangeListeners = attachFormValidationListener(formNode, updateForm);
      return removeAllChangeListeners;
    }, [formNode, updateForm]);
    return {
      ref: formRef,
      node: formNode,
      valid: valid,
      elements: elements
    };
  };

  var useCheckProps = function useCheckProps(inputNode, _ref) {
    var doRepeat = _ref.doRepeat,
      doNotRepeat = _ref.doNotRepeat,
      inputFilter = _ref.inputFilter;
    React.useEffect(function () {
    }, [inputNode, doRepeat, doNotRepeat, inputFilter]);
  };

  /*
   * Predefined input filter by Formiga
   */
  var FORMIGA_INPUT_FILTERS = {
    'int': /^-?\d+$/,
    'uint': /^\d+$/,
    'float': /^-?\d*[.,]?\d*$/,
    //'float'       : /[+-]?([0-9]*[.])?[0-9]+/,
    'dollar': /^-?\d*[.,]?\d{0,2}$/,
    //'euro'        : /^-?\d*[.,]?\d{0,2}$/,
    'latin': /^[a-z ]*$/i,
    'hexadecimal': /^[0-9a-f]*$/i
  };
  var _fltBase = function _fltBase(regex) {
    return function (v) {
      if (v === undefined || v === '') {
        return true;
      }
      return regex.test(v);
    };
  };
  var makeInputFilter = function makeInputFilter(inputFilter, inputName) {
    if (inputFilter == undefined || inputFilter === '') {
      return undefined;
    }
    if (typeof inputFilter === 'string') {
      var regex = FORMIGA_INPUT_FILTERS[inputFilter];
      if (regex === undefined) {
        console.error("Formiga: error on Input Element (" + inputName + "). (" + inputFilter + ") is not a valid inputFilter");
        return undefined;
      }
      return _fltBase(regex);
    }
    if (inputFilter instanceof RegExp) {
      return _fltBase(inputFilter);
    }
    if (typeof inputFilter === "function") {
      return inputFilter;
    }
    console.error("Formiga: error on Input Element (" + inputName + "). (" + inputFilter + ") of type (" + typeof inputFilter + ") is not a valid inputFilter");
    return undefined;
  };

  // This event list would cover every need:
  // ['input', 'keydown', 'keyup', 'mousedown', 'mouseup', 'select', 'contextmenu', 'drop'],
  // But lets start simple and easy. 
  var INPUT_FILTER_EVENT_TYPES = ['input', 'keydown', 'mousedown'];
  var useInputFilter = function useInputFilter(inputRef, inputFilter) {
    React.useEffect(function () {
      if (inputFilter == undefined) {
        return;
      }
      if (inputRef == undefined) {
        return;
      }
      var innerRef = (inputRef == null ? void 0 : inputRef.current) || inputRef;
      if (innerRef == undefined) {
        return;
      }
      if (innerRef.type.toLowerCase() != 'text') {
        return;
      }
      var allListeners = {};

      // Input Filter listeners
      // Credits to:
      // https://stackoverflow.com/a/469362
      // https://jsfiddle.net/emkey08/zgvtjc51

      var theInputFilter = makeInputFilter(inputFilter, innerRef.name);

      // init auxiliar properties
      innerRef.oldValue = innerRef.value;
      var filterEventListener = function filterEventListener(event) {
        if (theInputFilter(event.target.value)) {
          event.target.oldValue = event.target.value;
        } else if (Object.hasOwnProperty.call(event.target, "oldValue")) {
          var selectionStart = event.target.selectionStart;
          var selectionEnd = event.target.selectionEnd;
          event.target.value = event.target.oldValue;
          try {
            event.target.setSelectionRange(selectionStart - 1, selectionEnd - 1);
          } catch (e) {}
        } else {
          event.target.value = "";
        }
      };
      INPUT_FILTER_EVENT_TYPES.forEach(function (eventType) {
        innerRef.addEventListener(eventType, filterEventListener);
        allListeners[eventType] = filterEventListener;
      });

      // clean listeners function
      var removeAllChangeListeners = function removeAllChangeListeners() {
        if (innerRef != undefined) {
          Object.keys(allListeners).map(function (eventType) {
            innerRef.removeEventListener(eventType, allListeners[eventType]);
          });
        }
      };

      // return clean function
      return removeAllChangeListeners;
    }, [inputRef, inputFilter]);
  };

  var useCheckboxEnsure = function useCheckboxEnsure(inputNode) {
    React.useEffect(function () {
      if (inputNode == undefined) {
        return;
      }
      var inputType = inputNode.type.toLowerCase();

      // Ensure checkbox checked prop
      if (inputType === 'checkbox') {
        log_input(inputNode, "useCheckboxEnsure() ensuring value");
        if (inputNode.value === 'true' || inputNode.value === true) {
          inputNode.setAttribute('checked', true);
        }
      }
    }, [inputNode]);
  };

  var parseForCompare = function parseForCompare(inputType, value) {
    if (value === undefined) {
      return undefined;
    }
    inputType = inputType.toLowerCase();
    if (inputType === 'text' || inputType === 'select') {
      return value.toString();
    }
    if (inputType === 'number') {
      if (value === '' || isNaN(value)) {
        return undefined;
      }
      return parseFloat(value);
    }
    if (inputType === 'checkbox') {
      if (value === true || value === 'true' || value === 1 || value === '1') {
        return true;
      }
      return false;
    }

    /*
    if (inputType==='color') {
      if (value===undefined || value==='') {
        return undefined
      }
      return colorToHex(value)    
    }
     if (inputType==='date') {
      if (value==='' || value === undefined) {
        return undefined
      }
      let vdate= undefined
      if (value instanceof Date) {
        vdate= value
      }
      if (typeof value === 'string') {
        vdate= new Date(value)
      }
      if (typeof value === 'number') {
        vdate= new Date(value * 1000)
      }    
      try {
        vdate= new Date(value)
      } catch(e) {
        console.error(`Formiga: input of type date cannot convert value ${value} to Date`)
        return undefined
      }
      const tdate= `${vdate.getFullYear()}/${vdate.getMonth()+1}/${vdate.getDate()}`
      return tdate    
    }
    */

    if (inputType === 'select-multiple') {
      try {
        return value.sort().join(',');
      } catch (e) {}
      return '';
    }
    return value.toString();
  };

  var DEFAULT_MESSAGES = {
    badInput: 'Value is wrong',
    customError: 'Value does not match custom validity',
    patternMismatch: 'Value does not match expected pattern',
    rangeOverflow: 'Value is greater than expected',
    rangeUnderflow: 'Value is lesser than expected',
    stepMismatch: 'Value has an incorrect number of decimals',
    tooShort: 'Value is shorter than expected',
    tooLong: 'Value is longer than expected',
    typeMismatch: 'Value type is wrong',
    valueMissing: 'Value is required',
    valid: 'Value is not valid',
    // custom validations
    customAllowList: 'Value is not allowed',
    customDisallowList: 'Value is disallowed',
    customDoRepeat: 'Value must be repeated',
    customDoNotRepeat: 'Value cannot be repeated'
  };
  var getDefaultMessage = function getDefaultMessage(n) {
    return DEFAULT_MESSAGES[n];
  };

  //import {log} from '../helpers/log'

  var getInputValue = function getInputValue(input) {
    if (!input) {
      return undefined;
    }
    var inputType = input.type.toLowerCase();
    if (inputType == 'checkbox') {
      return input.checked;
    }
    if (inputType == 'select-multiple') {
      var options = Array.prototype.slice.call(input.options);
      var value = options.filter(function (opt) {
        return opt.selected;
      }).map(function (opt) {
        return opt.value;
      });
      return value;
    }
    if (inputType == 'file') {
      try {
        return input.files[0];
      } catch (e) {
        console.error("Formiga: error on input " + input.name + " of type file: " + e.feedback);
        console.error(e);
        return undefined;
      }
    }

    /*
     // TO CHECK: When do we need this?
    if (input.value==undefined) {
      return ''
    }
    */

    return input.value;
  };

  //import {log} from '../helpers/log'
  var countDecimals = function countDecimals(f) {
    try {
      var s = parseFloat(f).toString();
      if (s.indexOf('e-') > 0) {
        return parseInt(s.split('-')[1]);
      }
      return f.toString().split('.')[1].length;
    } catch (e) {
      return 0;
    }
  };
  var _checkValidity = function _checkValidity(input, transformValue, checkValue, allowedValues, disallowedValues, doRepeat, doNotRepeat, decimals) {
    if (input == undefined) {
      return '';
    }

    // NOTE Manage 'disable' prop? sure?
    if (input.disabled === true) {
      return '';
    }
    input.name;
    var inputType = input.type.toLowerCase();

    // Get input value
    var value = getInputValue(input);
    if (transformValue != undefined) {
      value = transformValue(value);
    }
    var isEmptyValue = value == undefined ? true : typeof value == 'string' ? value == '' : Array.isArray(value) ? value.length == 0 : false;

    //log('input', `${input.name} (${input.type}) #${input.id} checkValidity() checking...`)

    var vs = input.validity;
    if (vs != undefined) {
      if (vs.badInput) {
        return 'badInput';
      }
      if (vs.patternMismatch) {
        return 'patternMismatch';
      }
      if (vs.rangeOverflow) {
        return 'rangeOverflow';
      }
      if (vs.rangeUnderflow) {
        return 'rangeUnderflow';
      }
      if (vs.tooLong) {
        return 'tooLong';
      }
      if (vs.tooShort) {
        return 'tooShort';
      }
      if (vs.typeMismatch) {
        return 'typeMismatch';
      }
      if (vs.valueMissing) {
        return 'valueMissing';
      }
      if (decimals != undefined && !isNaN(decimals)) {
        //
        // For custom steppable inputs
        //
        if (decimals < countDecimals(value)) {
          return 'stepMismatch';
        }
      } /*else if (input.step != undefined) {
        //
        // for non steppable inputs
        //
        if (vs.valid===false  ) { return 'valid' }
        }*/else {
        if (vs.stepMismatch) {
          return 'stepMismatch';
        }
      }
    }

    //log('input', `${input.name} (${input.type}) #${input.id} checkValidity() native validity is ok, doing custom checks...`)

    // When loading document, minlength/maxlength/step constraints are not checked
    // Check this pen: https://codepen.io/afialapis/pen/NWKJoPJ?editors=1111
    // and /issues/validity_on_load

    if (input.maxLength && input.maxLength > 0 && value.length > input.maxLength) {
      return 'tooLong';
    }
    if (input.minLength && input.minLength > 0 && value.length < input.minLength) {
      return 'tooShort';
    }

    /*if (input.step!=undefined && input.step!=='' && input.step!=='any') {
      if (decimals==undefined || isNaN(decimals)) {
        if (countDecimals(input.step)!=countDecimals(value)) {
          return 'stepMismatch'
        }
      }
    }*/

    // Some inputs like hidden and select, wont perform 
    // the standard required validation
    if (input.required && isEmptyValue) {
      return 'valueMissing';
    }

    // Custom validate function
    if (checkValue != undefined) {
      var result = checkValue(value);
      if (result == Promise.resolve(result)) {
        result.then(function (r) {
          if (!r) {
            return 'customError';
          }
        });
      } else {
        if (!result) {
          return 'customError';
        }
      }
    }

    // Allowed values list
    if (allowedValues != undefined && !isEmptyValue) {
      var parsedAlloValues = disallowedValues.map(function (v) {
        return parseForCompare(inputType, v);
      });
      var parsedValue = parseForCompare(inputType, value);
      var exists = parsedAlloValues.indexOf(parsedValue) >= 0;
      if (!exists) {
        return 'customAllowList';
      }
    }

    // Disallowed values list
    if (disallowedValues != undefined) {
      var parsedDisaValues = disallowedValues.map(function (v) {
        return parseForCompare(inputType, v);
      });
      var _parsedValue = parseForCompare(inputType, value);
      var _exists = parsedDisaValues.indexOf(_parsedValue) >= 0;
      if (_exists) {
        return 'customDisallowList';
      }
    }

    // Must repeat other's input value
    if (doRepeat != undefined && !isEmptyValue) {
      var otherInput = input.form.elements[doRepeat];
      if (otherInput != undefined) {
        if (otherInput.value != value) {
          return 'customDoRepeat';
        }
      }
    }

    // Do not repeat other's input value
    if (doNotRepeat != undefined && !isEmptyValue) {
      var _otherInput = input.form.elements[doNotRepeat];
      if (_otherInput != undefined) {
        if (_otherInput.value == value) {
          return 'customDoNotRepeat';
        }
      }
    }
    return '';
  };
  var checkValidity = function checkValidity(input, _ref) {
    var transformValue = _ref.transformValue,
      checkValue = _ref.checkValue,
      allowedValues = _ref.allowedValues,
      disallowedValues = _ref.disallowedValues,
      doRepeat = _ref.doRepeat,
      doNotRepeat = _ref.doNotRepeat,
      decimals = _ref.decimals,
      feedback = _ref.feedback;
    var chkValidity = _checkValidity(input, transformValue, checkValue, allowedValues, disallowedValues, doRepeat, doNotRepeat, decimals);
    var nValidity = chkValidity == '' ? '' : feedback != undefined ? feedback : getDefaultMessage(chkValidity);
    return nValidity;
  };

  var setCustomValidity = function setCustomValidity(node, validity, transformValue) {
    //if (node.form.getAttribute('data-formiga-loaded')!='1') {
    //  log_input(node, `setCustomValidity( ${validity || 'ok'} )... skipping, form not ready yet`)
    //  return
    //}
    // log_input(node, `setCustomValidity( ${validity || 'ok'} )`)

    var prevValidity = node.getAttribute('data-formiga-validity');
    var prevValue = node.getAttribute('data-formiga-value');

    // Get input value
    var value = getInputValue(node);
    if (transformValue != undefined) {
      value = transformValue(value);
    }
    var valueStr = value != undefined ? value.toString() : '';
    node.setCustomValidity(validity);
    node.setAttribute('data-formiga-validity', validity);
    node.setAttribute('data-formiga-value', valueStr);

    // Update form     
    if (prevValue != valueStr || prevValidity != validity) {
      if (node.form != undefined) {
        if (node.form.getAttribute('data-formiga-loaded') == '1') {
          log_input(node, "setCustomValidity( " + (validity || 'ok') + " ) ... dispatching formiga-form-change");
          var event = new CustomEvent("formiga-form-change", {
            detail: {
              name: node.name,
              type: node.type,
              validity: validity,
              valid: validity == '',
              value: value
            }
          });
          node.form.dispatchEvent(event);
        }
      }
    }
  };

  var EVENT_TYPES = {
    'checkbox': ['change'],
    // {change: 'click' , premature: []},
    'color': ['change', 'click'],
    // {change: 'change', premature: ['click']},
    'date': ['change', 'keyup', 'paste'],
    // {change: 'change', premature: ['keyup', 'paste']},
    'datetime-local': ['change', 'keyup', 'paste'],
    // {change: 'change', premature: ['keyup', 'paste']},
    'email': ['change', 'keyup', 'paste'],
    // {change: 'change', premature: ['keyup', 'paste']},
    'file': ['change'],
    // {change: 'change', premature: []},
    'hidden': ['change'],
    // {change: 'change', premature: []},
    'image': ['change'],
    // {change: 'change', premature: []},
    'month': ['change', 'keyup', 'paste'],
    // {change: 'change', premature: ['keyup', 'paste']},
    'number': ['change', 'keyup', 'paste'],
    // {change: 'change', premature: ['keyup', 'paste']},
    'password': ['change', 'keyup', 'paste'],
    // {change: 'change', premature: ['keyup', 'paste']},
    'radio': ['change', 'click'],
    // {change: 'change', premature: ['click']},
    'range': ['change', 'click'],
    // {change: 'change', premature: ['click']},
    'search': ['change', 'keyup', 'paste'],
    // {change: 'change', premature: ['keyup', 'paste']},
    'select-multiple': ['click'],
    // {change: 'click' , premature: []},
    'select-one': ['click'],
    // {change: 'click' , premature: []},
    'tel': ['change', 'keyup', 'paste'],
    // {change: 'change', premature: ['keyup', 'paste']},
    'text': ['change', 'keyup', 'paste'],
    // {change: 'change', premature: ['keyup', 'paste']},
    'textarea': ['change', 'keyup', 'paste'],
    // {change: 'change', premature: ['keyup', 'paste']},
    'time': ['change', 'keyup', 'paste'],
    // {change: 'change', premature: ['keyup', 'paste']},
    'url': ['change', 'keyup', 'paste'],
    // {change: 'change', premature: ['keyup', 'paste']},
    'week': ['change', 'keyup', 'paste'],
    // {change: 'change', premature: ['keyup', 'paste']},
    // Obsolete
    'datetime': ['change', 'keyup', 'paste'],
    // {change: 'change', premature: ['keyup', 'paste']},
    // No handler for these
    'button': [],
    // {change: '', premature: []},
    'reset': [],
    // {change: '', premature: []},
    'submit': [] // {change: '', premature: []} 
  };

  var getValidationEvents = function getValidationEvents(inputType) {
    inputType = inputType.toLowerCase();
    return EVENT_TYPES[inputType];
  };

  var attachInputValidationListener = function attachInputValidationListener(node, validateInput) {
    var validationHandler = function validationHandler(event) {
      var theNode = getEventTarget(event);
      validateInput(theNode);
    };
    var validationEvents = getValidationEvents(node.type) || [];
    validationEvents.map(function (eventType) {
      node.addEventListener(eventType, validationHandler);
    });
    log_input(node, "attachInputValidationListener() attached: " + validationEvents.join(', '));

    // clean listeners function
    var removeAllChangeListeners = function removeAllChangeListeners() {
      if (node != undefined) {
        log_input(node, "attachInputValidationListener() dettaching events");
        validationEvents.map(function (eventType) {
          node.removeEventListener(eventType, validationHandler);
        });
      } else {
        log_input(node, "attachInputValidationListener() WARNING! Could not dettach events");
      }
    };

    // return clean function
    return removeAllChangeListeners;
  };

  var useInput = function useInput(props) {
    var _useState = React.useState(undefined),
      inputNode = _useState[0],
      setInputNode = _useState[1];
    var _useState2 = React.useState(''),
      validity = _useState2[0],
      setValidity = _useState2[1];

    //
    // validate input callback
    //
    var validateInput = React.useCallback(function (node) {
      var nValidity = checkValidity(node, props);
      log_input(node, "input validated to [" + nValidity + "]");
      setValidity(nValidity);
      setCustomValidity(node, nValidity, props.transformValue);
      return nValidity;
    }, [props]);

    //
    // input Ref as callback
    //  
    var inputRef = React.useCallback(function (node) {
      if (node != null) {
        log_input(node, 'inputRef callback');
        validateInput(node);
        setInputNode(node);
      }
    }, [validateInput]);

    //
    // attach listeners on node mount
    //  
    React.useEffect(function () {
      if (inputNode != undefined) {
        var listeners = attachInputValidationListener(inputNode, validateInput);
        return listeners;
      }
    }, [inputNode, validateInput]);

    //
    // Specific effect to check props consistency. Just DEV time
    //
    useCheckProps(inputNode, props /*doRepeat, doNotRepeat, inputFilter*/);

    //
    // Attaches input filters when needed
    //
    useInputFilter(inputNode, props.inputFilter);

    //
    // Ensures checkboxes value
    //
    useCheckboxEnsure(inputNode);

    //
    // several callbacks to return 
    //    
    var validate = React.useCallback(function () {
      if (inputNode != undefined) {
        return validateInput(inputNode);
      }
      return undefined;
    }, [inputNode, validateInput]);
    var setValue = React.useCallback(function (v) {
      if (inputNode != undefined) {
        inputNode.value = v;
      }
    }, [inputNode]);
    var forceSetValidity = React.useCallback(function (nValidity) {
      if (inputNode != undefined) {
        setValidity(nValidity);
        setCustomValidity(inputNode, nValidity, props.transformValue);
      }
    }, [inputNode, props.transformValue]);
    var dispatchEvent = React.useCallback(function (type, props) {
      if (inputNode == undefined) {
        return;
      }
      var inputEvent = new Event(type, {
        bubbles: (props == null ? void 0 : props.bubbles) || true,
        cancelable: (props == null ? void 0 : props.cancelable) || true,
        view: (props == null ? void 0 : props.view) || window,
        detail: (props == null ? void 0 : props.detail) || (props == null ? void 0 : props.data) || {}
      });
      inputNode.dispatchEvent(inputEvent);
    }, [inputNode]);
    if (inputNode != undefined) {
      log_input(inputNode, 'render');
    }
    return {
      ref: inputRef,
      node: inputNode,
      valid: validity === '',
      feedback: validity,
      validate: validate,
      setValue: setValue,
      setValidity: forceSetValidity,
      dispatchEvent: dispatchEvent
    };
  };

  var DemoInputsSection = function DemoInputsSection(_ref) {
    var name = _ref.name,
      children = _ref.children;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: "section_" + name,
      className: "formiga-form-input-type-section",
      id: name
    }, /*#__PURE__*/React__default["default"].createElement("h2", null, name), children);
  };

  var DemoInputGroup = function DemoInputGroup(_ref) {
    var children = _ref.children,
      label = _ref.label,
      feedback = _ref.feedback,
      description = _ref.description;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "formiga-input-group"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "formiga-input-header"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "formiga-input-label"
    }, /*#__PURE__*/React__default["default"].createElement("label", null, label)), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "formiga-input-description"
    }, description)), children, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "formiga-input-feedback"
    }, feedback));
  };

  var useResetHandler = function useResetHandler(callback) {
    React.useEffect(function () {
      var handler = function handler(event) {
        callback();
      };
      document.body.addEventListener('formiga-reset', handler);
      return function () {
        document.body.removeEventListener('formiga-reset', handler);
      };
    }, [callback]);
  };
  var useResetableValue = function useResetableValue(val, rval) {
    if (rval === void 0) {
      rval = '';
    }
    var _useState = React.useState(val),
      value = _useState[0],
      setValue = _useState[1];
    useResetHandler(function () {
      //console.log(`resetting to value ${typeof rval} ${rval}`)
      setValue(rval);
    });
    return [value, setValue];
  };
  var useResetableDefValue = function useResetableDefValue(val, input, rval) {
    if (rval === void 0) {
      rval = '';
    }
    var _useState2 = React.useState(val),
      value = _useState2[0],
      setValue = _useState2[1];
    useResetHandler(function () {
      setValue(rval);
      input.setValue(rval);
    });
    return value;
  };
  var triggerReset = function triggerReset() {
    var event = new Event('formiga-reset');
    document.body.dispatchEvent(event);
  };

  var DemoInputCheckBoxSimple = function DemoInputCheckBoxSimple() {
    var _useResetableValue = useResetableValue(false, false),
      like = _useResetableValue[0],
      setLike = _useResetableValue[1];
    var input = useInput({
      type: 'checkbox',
      disallowedValues: [0, false],
      checkValue: function checkValue(v) {
        return v === true;
      }
    });
    return /*#__PURE__*/React__default["default"].createElement(DemoInputGroup, {
      label: "Do you like Formiga?",
      description: "You can be honest ;)",
      feedback: input.feedback
    }, /*#__PURE__*/React__default["default"].createElement("input", {
      ref: input.ref,
      type: "checkbox",
      name: 'like',
      className: input.valid ? 'valid' : 'invalid',
      checked: like,
      onChange: function onChange(ev) {
        return setLike(ev.target.checked);
      }
    }));
  };

  var DemoInputCheckBox = function DemoInputCheckBox() {
    return /*#__PURE__*/React__default["default"].createElement(DemoInputsSection, {
      name: "checkbox"
    }, /*#__PURE__*/React__default["default"].createElement(DemoInputCheckBoxSimple, null));
  };

  var DemoInputColorSimple = function DemoInputColorSimple() {
    var input = useInput({
      type: 'color',
      disallowedValues: ['#000000', '#FFFFFF', '#ffffff'],
      feedback: 'Neither black nor white'
    });
    var _useResetableValue = useResetableValue('#FF00FF', '#000000'),
      color = _useResetableValue[0],
      setColor = _useResetableValue[1];
    var handleColorChange = function handleColorChange(nColor) {
      setColor(nColor);
    };
    return /*#__PURE__*/React__default["default"].createElement(DemoInputGroup, {
      label: "What color reminds you Formiga to?",
      description: "Neither black nor white!",
      feedback: input.feedback
    }, /*#__PURE__*/React__default["default"].createElement("input", {
      ref: input.ref,
      type: "color",
      name: 'color',
      className: input.valid ? 'valid' : 'invalid',
      value: color,
      onChange: function onChange(ev) {
        return handleColorChange(ev.target.value);
      }
    }));
  };

  var DemoInputColor = function DemoInputColor() {
    return /*#__PURE__*/React__default["default"].createElement(DemoInputsSection, {
      name: "color"
    }, /*#__PURE__*/React__default["default"].createElement(DemoInputColorSimple, null));
  };

  var pad = function pad(n) {
    return n.toString().padStart(2, '0');
  };
  var getToday = function getToday(add) {
    if (add === void 0) {
      add = 0;
    }
    var n = new Date();
    return n.getFullYear() + "-" + pad(n.getMonth() + 1) + "-" + pad(n.getDate() + add);
  };
  var DemoInputDateSimple = function DemoInputDateSimple() {
    var input = useInput({
      type: 'text',
      disallowedValues: [getToday(-1)]
    });
    var _useResetableValue = useResetableValue(getToday(-1), undefined),
      when = _useResetableValue[0],
      setWhen = _useResetableValue[1];
    var handleWhenChange = function handleWhenChange(nWhen) {
      setWhen(nWhen);
    };
    return /*#__PURE__*/React__default["default"].createElement(DemoInputGroup, {
      label: "When did you last see Formiga?",
      description: "Required. Just yesterday is disallowed.",
      feedback: input.feedback
    }, /*#__PURE__*/React__default["default"].createElement("input", {
      ref: input.ref,
      type: "date",
      name: 'when',
      className: input.valid ? 'valid' : 'invalid',
      required: true,
      value: when,
      onChange: function onChange(ev) {
        return handleWhenChange(ev.target.value);
      }
    }));
  };

  var DemoInputDate = function DemoInputDate() {
    return /*#__PURE__*/React__default["default"].createElement(DemoInputsSection, {
      name: "date"
    }, /*#__PURE__*/React__default["default"].createElement(DemoInputDateSimple, null));
  };

  var DemoInputFileSimple = function DemoInputFileSimple() {
    var input = useInput({
      type: 'file'
    });
    return /*#__PURE__*/React__default["default"].createElement(DemoInputGroup, {
      label: "Put some file here; Formiga's strength will upload it",
      description: "",
      feedback: input.feedback
    }, /*#__PURE__*/React__default["default"].createElement("input", {
      ref: input.ref,
      type: "file",
      name: 'id_card',
      className: input.valid ? 'valid' : 'invalid',
      required: true
    }));
  };

  var DemoInputFile = function DemoInputFile() {
    return /*#__PURE__*/React__default["default"].createElement(DemoInputsSection, {
      name: "file"
    }, /*#__PURE__*/React__default["default"].createElement(DemoInputFileSimple, null));
  };

  var DemoInputNumberInt = function DemoInputNumberInt() {
    var _useResetableValue = useResetableValue(2, undefined),
      paws = _useResetableValue[0],
      setPaws = _useResetableValue[1];
    var input = useInput({
      decimals: 1,
      checkValue: function checkValue(v) {
        return v == 6 || isNaN(v);
      },
      feedback: 'Hey folk, look closer to our precious icon!'
    });
    var handlePawsChange = function handlePawsChange(nPaws) {
      setPaws(nPaws);
    };
    return /*#__PURE__*/React__default["default"].createElement(DemoInputGroup, {
      label: "How many paws does Formiga have?",
      description: "Optional. An =6 integer. Decimals allowed but invalid (decimals=1).",
      feedback: input.feedback
    }, /*#__PURE__*/React__default["default"].createElement("input", {
      ref: input.ref,
      type: "number",
      name: 'paws',
      className: input.valid ? 'valid' : 'invalid',
      value: paws,
      required: false,
      onChange: function onChange(ev) {
        return handlePawsChange(ev.target.value);
      }
    }));
  };

  var DemoInputNumberFloat = function DemoInputNumberFloat() {
    var _useResetableValue = useResetableValue(1.876, ''),
      weight = _useResetableValue[0],
      setWeight = _useResetableValue[1];
    var input = useInput({
      //decimals: 3
    });
    var handleWeightChange = function handleWeightChange(nWeight) {
      setWeight(nWeight);
    };
    return /*#__PURE__*/React__default["default"].createElement(DemoInputGroup, {
      label: "How much Formiga weights (in milligrams)?",
      description: "Required. Some float (max 3 decimals, decimals = 3).",
      feedback: input.feedback
    }, /*#__PURE__*/React__default["default"].createElement("input", {
      ref: input.ref,
      type: "number",
      name: 'weight',
      className: input.valid ? 'valid' : 'invalid',
      value: weight,
      required: true,
      onChange: function onChange(ev) {
        return handleWeightChange(ev.target.value);
      }
    }));
  };

  var DemoInputNumberFloatStep = function DemoInputNumberFloatStep() {
    var _useResetableValue = useResetableValue(46.44, ''),
      size = _useResetableValue[0],
      setSize = _useResetableValue[1];
    var input = useInput({});
    return /*#__PURE__*/React__default["default"].createElement(DemoInputGroup, {
      label: "And how much weight does Farmiga can carry (in grams)?",
      description: "Required. Some float (max 2 decimals, native step = 0.01).",
      feedback: input.feedback
    }, /*#__PURE__*/React__default["default"].createElement("input", {
      ref: input.ref,
      type: "number",
      name: 'size',
      className: input.valid ? 'valid' : 'invalid',
      value: size,
      step: 0.01,
      required: true,
      onChange: function onChange(ev) {
        return setSize(ev.target.value);
      }
    }));
  };

  var DemoInputNumber = function DemoInputNumber() {
    return /*#__PURE__*/React__default["default"].createElement(DemoInputsSection, {
      name: "number"
    }, /*#__PURE__*/React__default["default"].createElement(DemoInputNumberInt, null), /*#__PURE__*/React__default["default"].createElement(DemoInputNumberFloat, null), /*#__PURE__*/React__default["default"].createElement(DemoInputNumberFloatStep, null));
  };

  var LIST_OPTIONS = [['', '---'], [1, "It's fascinating"], [2, "It's cool"], [3, "Well... beh!"], [4, "Take it away from me"]];
  var DemoInputSelectSimple = function DemoInputSelectSimple() {
    var _useResetableValue = useResetableValue(3, ''),
      experience = _useResetableValue[0],
      setExperience = _useResetableValue[1];
    var input = useInput({
      type: 'select',
      disallowedValues: [3, 4]
    });
    return /*#__PURE__*/React__default["default"].createElement(DemoInputGroup, {
      label: "What do you think about Formiga?",
      description: "",
      feedback: input.feedback
    }, /*#__PURE__*/React__default["default"].createElement("select", {
      ref: input.ref,
      name: 'experience',
      className: input.valid ? 'valid' : 'invalid',
      required: true,
      value: experience,
      onChange: function onChange(ev) {
        return setExperience(ev.target.value);
      }
    }, LIST_OPTIONS.map(function (_ref) {
      var k = _ref[0],
        v = _ref[1];
      return /*#__PURE__*/React__default["default"].createElement("option", {
        key: "single-select-option-" + k,
        value: k
      }, v);
    })));
  };

  var LISTM_OPTIONS = {
    '1': "08:00",
    '2': "09:00",
    '3': "10:00",
    '4': "11:00",
    '5': "12:00",
    '6': "13:00",
    '7': "14:00",
    '8': "15:00"
  };
  var DemoInputSelectMultiple = function DemoInputSelectMultiple() {
    var _useResetableValue = useResetableValue(['3', '5', '7'], []),
      times = _useResetableValue[0],
      setTimes = _useResetableValue[1];
    var input = useInput({
      disallowedValues: [['1', '3', '5', '7'], []]
      //checkValue: (v) => {console.log(`checking value ${typeof v}${v}`); return true}
    });

    var handleTimesChange = function handleTimesChange(ev) {
      var nTimes = Array.prototype.slice.call(ev.target.options).filter(function (opt) {
        return opt.selected;
      }).map(function (opt) {
        return opt.value;
      });
      setTimes(nTimes);
    };

    //console.log('---------------------' + Array.isArray(times) + '->' + times + '------------')

    return /*#__PURE__*/React__default["default"].createElement(DemoInputGroup, {
      label: "What times you prefer to code with Formiga?",
      description: "All even hours required",
      feedback: input.feedback
    }, /*#__PURE__*/React__default["default"].createElement("select", {
      ref: input.ref,
      name: 'times',
      className: input.valid ? 'valid' : 'invalid',
      multiple: true,
      value: times,
      onChange: function onChange(ev) {
        return handleTimesChange(ev);
      }
    }, Object.keys(LISTM_OPTIONS).map(function (o) {
      return /*#__PURE__*/React__default["default"].createElement("option", {
        key: "multiple-select-option-" + o,
        value: o
      }, LISTM_OPTIONS[o]);
    })));
  };

  var DemoInputSelect = function DemoInputSelect() {
    return /*#__PURE__*/React__default["default"].createElement(DemoInputsSection, {
      name: "select"
    }, /*#__PURE__*/React__default["default"].createElement(DemoInputSelectSimple, null), /*#__PURE__*/React__default["default"].createElement(DemoInputSelectMultiple, null));
  };

  var DemoInputTextAge = function DemoInputTextAge() {
    var input = useInput({
      type: 'text',
      checkValue: function checkValue(v) {
        return !isNaN(v) && parseInt(v) >= 18;
      },
      inputFilter: 'int'
    });
    var age = useResetableDefValue('33', input);
    return /*#__PURE__*/React__default["default"].createElement(DemoInputGroup, {
      label: "Your age here",
      description: "Required. Uncontrolled. Some >18 integer (through inputFilter)",
      feedback: input.feedback
    }, /*#__PURE__*/React__default["default"].createElement("input", {
      ref: input.ref,
      name: 'age',
      className: input.valid ? 'valid' : 'invalid',
      required: true,
      defaultValue: age
    }));
  };

  var DemoInputTextName = function DemoInputTextName() {
    var _useResetableValue = useResetableValue('John Not Doe', undefined),
      name = _useResetableValue[0],
      setName = _useResetableValue[1];
    var input = useInput({
      type: 'text',
      disallowedValues: ["John Doe"],
      inputFilter: 'latin'
    });
    return /*#__PURE__*/React__default["default"].createElement(DemoInputGroup, {
      label: "Your name here",
      description: "Required. 'John Doe' is disallowed. Latin chars.",
      feedback: input.feedback
    }, /*#__PURE__*/React__default["default"].createElement("input", {
      ref: input.ref,
      name: 'name',
      className: input.valid ? 'valid' : 'invalid',
      required: true,
      value: name,
      onChange: function onChange(ev) {
        return setName(event.target.value);
      }
    }));
  };

  var DemoInputTextWords = function DemoInputTextWords() {
    var input = useInput({
      type: 'text'
      //checkValue: (v) => (v!=undefined) && (v.length<=20),
    });

    var _useResetableValue = useResetableValue("That's indeed ANT real thing!"),
      words = _useResetableValue[0],
      setWords = _useResetableValue[1];
    //const words= useResetableDefValue("That's indeed ANT real thing!", input)

    return /*#__PURE__*/React__default["default"].createElement(DemoInputGroup, {
      label: "Your experience with Formiga in two words",
      description: "Optional. Max length 20 (currently " + (words ? words.length : 0) + ")",
      feedback: input.feedback
    }, /*#__PURE__*/React__default["default"].createElement("input", {
      ref: input.ref,
      name: 'words',
      className: input.valid ? 'valid' : 'invalid',
      maxLength: 20,
      value: words,
      onChange: function onChange(ev) {
        return setWords(ev.target.value);
      }
      /*defaultValue = {words}*/
    }));
  };

  var DemoInputText = function DemoInputText() {
    return /*#__PURE__*/React__default["default"].createElement(DemoInputsSection, {
      name: "text"
    }, /*#__PURE__*/React__default["default"].createElement(DemoInputTextName, null), /*#__PURE__*/React__default["default"].createElement(DemoInputTextAge, null), /*#__PURE__*/React__default["default"].createElement(DemoInputTextWords, null));
  };

  var DemoInputTextAreaSimple = function DemoInputTextAreaSimple() {
    var _useResetableValue = useResetableValue('It started a warm Friday\'s night. I was bored...'),
      story = _useResetableValue[0],
      setStory = _useResetableValue[1];
    var input = useInput({
      type: 'textarea'
    });
    var handleStoryChange = function handleStoryChange(nStory) {
      setStory(nStory);
    };
    return /*#__PURE__*/React__default["default"].createElement(DemoInputGroup, {
      label: "Tell us more about your love story with Formiga",
      description: "Optional. Min length 50 (currently " + story.length + ").",
      feedback: input.feedback
    }, /*#__PURE__*/React__default["default"].createElement("textarea", {
      ref: input.ref,
      name: 'story',
      className: input.valid ? 'valid' : 'invalid',
      value: story,
      minLength: 50,
      onChange: function onChange(ev) {
        return handleStoryChange(ev.target.value);
      }
    }));
  };

  var DemoInputTextArea = function DemoInputTextArea() {
    return /*#__PURE__*/React__default["default"].createElement(DemoInputsSection, {
      name: "textarea"
    }, /*#__PURE__*/React__default["default"].createElement(DemoInputTextAreaSimple, null));
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

  var css_248z$1 = "body {\n  font-family: \"Inconsolata\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 12pt; }\n\na {\n  color: #DD356E;\n  -moz-transition: all 0.5s ease;\n  -o-transition: all 0.5s ease;\n  -webkit-transition: all 0.5s ease;\n  -ms-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n  a:hover, a:active, a:focus {\n    color: #DD356E;\n    outline: none;\n    text-decoration: none; }\n\np {\n  margin-bottom: 30px; }\n\nh1, h2, h3, h4, h5, h6, figure {\n  color: #000;\n  font-family: \"Inconsolata\", Arial, sans-serif;\n  font-weight: 400; }\n\nh1 {\n  font-size: 18pt; }\n\nh2 {\n  font-size: 16pt;\n  margin-bottom: 0.5em; }\n\nh3 {\n  font-size: 14pt;\n  margin-bottom: 0.25em; }\n\n::-webkit-selection {\n  color: #fff;\n  background: #DD356E; }\n\n::-moz-selection {\n  color: #fff;\n  background: #DD356E; }\n\n::selection {\n  color: #fff;\n  background: #DD356E; }\n\n.uppercase {\n  font-size: 14px;\n  color: #000;\n  margin-bottom: 10px;\n  font-weight: 700;\n  text-transform: uppercase; }\n\n.btn {\n  margin-right: 4px;\n  margin-bottom: 4px;\n  -webkit-border-radius: 30px;\n  -moz-border-radius: 30px;\n  -ms-border-radius: 30px;\n  border-radius: 30px;\n  -moz-transition: all 0.5s ease;\n  -o-transition: all 0.5s ease;\n  -webkit-transition: all 0.5s ease;\n  -ms-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n  padding: 8px 20px; }\n  .btn.btn-md {\n    padding: 8px 20px !important; }\n  .btn.btn-lg {\n    padding: 18px 36px !important; }\n  .btn:hover, .btn:active, .btn:focus {\n    box-shadow: none !important;\n    outline: none !important; }\n  .btn:hover {\n    cursor: pointer; }\n\n.btn-primary {\n  background: #DD356E;\n  color: #fff;\n  border: 2px solid #DD356E; }\n  .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n    background: #e14b7e !important;\n    border-color: #e14b7e !important;\n    color: #fff; }\n  .btn-primary.btn-outline {\n    background: transparent;\n    color: #DD356E;\n    border: 2px solid #DD356E; }\n    .btn-primary.btn-outline:hover, .btn-primary.btn-outline:focus, .btn-primary.btn-outline:active {\n      background: #DD356E;\n      color: #fff; }\n  .btn-primary.disabled {\n    pointer-events: none;\n    cursor: none;\n    background: #e8769d !important;\n    border-color: #e8769d !important; }\n\n.btn-outline {\n  background: none;\n  border: 2px solid gray;\n  -moz-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  -webkit-transition: all 0.3s ease;\n  -ms-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n  .btn-outline:hover, .btn-outline:focus, .btn-outline:active {\n    box-shadow: none; }\n\n.btn.with-arrow {\n  position: relative;\n  -moz-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  -webkit-transition: all 0.3s ease;\n  -ms-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n  .btn.with-arrow i {\n    visibility: hidden;\n    opacity: 0;\n    position: absolute;\n    right: 0px;\n    top: 50%;\n    margin-top: -8px;\n    -moz-transition: all 0.2s ease;\n    -o-transition: all 0.2s ease;\n    -webkit-transition: all 0.2s ease;\n    -ms-transition: all 0.2s ease;\n    transition: all 0.2s ease; }\n  .btn.with-arrow:hover {\n    padding-right: 50px; }\n    .btn.with-arrow:hover i {\n      color: #fff;\n      right: 18px;\n      visibility: visible;\n      opacity: 1; }\n\n.row-pb-md {\n  padding-bottom: 4em !important; }\n\n.row-pb-sm {\n  padding-bottom: 2em !important; }\n\n.nopadding {\n  padding: 0 !important;\n  margin: 0 !important; }\n\n/*\n.animate-box {\n\t.js & {\n\t\topacity: 0;\n\t}\n}\n*/\n/**\n * main styling\n */\nbody .formiga-title {\n  text-align: center;\n  color: #000;\n  font-family: \"Inconsolata\", Arial, sans-serif;\n  font-weight: 200;\n  background-image: url(\"assets/img/formiga.png\");\n  background-repeat: no-repeat;\n  background-size: 15px; }\n\nbody .formiga-container {\n  display: flex; }\n  body .formiga-container .formiga-form {\n    flex: 75%; }\n    body .formiga-container .formiga-form .formiga-form-inputs {\n      display: flex; }\n      body .formiga-container .formiga-form .formiga-form-inputs .formiga-form-inputs-left,\n      body .formiga-container .formiga-form .formiga-form-inputs .formiga-form-inputs-middle,\n      body .formiga-container .formiga-form .formiga-form-inputs .formiga-form-inputs-rigth {\n        flex: 33%;\n        padding: 0 2em; }\n      body .formiga-container .formiga-form .formiga-form-inputs .formiga-form-input-type-section h2 {\n        border-bottom: 1px solid gray; }\n      body .formiga-container .formiga-form .formiga-form-inputs .formiga-form-input-type-section:not(:first-child) {\n        margin-top: 2em; }\n    body .formiga-container .formiga-form .formiga-form-buttons {\n      text-align: center;\n      margin-top: 2em; }\n  body .formiga-container .formiga-resume {\n    flex: 25%;\n    padding-left: 2em; }\n    body .formiga-container .formiga-resume .log {\n      color: gray;\n      font-size: 9pt; }\n\n/*\n.centered {\n  text-align: center;\n}\n\n.mgbottom {\n  margin-bottom: 2em;\n}\n\n.mgleft {\n  margin-left: 2em;\n}\n\n\n.row {\n  display: flex;\n}\n\n.column {\n  flex: 50%;\n  margin: 0 2em;\n  background-color: #ece8e8;\n  padding: 1em;\n}\n*/\n.formiga-input-group {\n  margin-top: 1em;\n  padding: 0.5em;\n  border: 0.25px solid #e8e8e8;\n  border-right: 0.25px solid #e8e8e8; }\n  .formiga-input-group .formiga-input-header .formiga-input-label label {\n    color: #555050; }\n  .formiga-input-group .formiga-input-header .formiga-input-description {\n    color: #6e6161;\n    font-size: 12px;\n    font-style: italic;\n    text-align: right; }\n  .formiga-input-group input,\n  .formiga-input-group textarea,\n  .formiga-input-group select {\n    width: 100%;\n    padding: 6px 10px;\n    margin: 4px 0;\n    display: inline-block;\n    box-sizing: border-box; }\n  .formiga-input-group input,\n  .formiga-input-group textarea {\n    border: 1px solid #ccc;\n    border-radius: 4px; }\n  .formiga-input-group input:focus,\n  .formiga-input-group textarea:focus {\n    border-color: #6572e9; }\n  .formiga-input-group input.invalid,\n  .formiga-input-group textarea.invalid,\n  .formiga-input-group select.invalid {\n    border-color: red; }\n  .formiga-input-group .formiga-input-feedback {\n    color: red;\n    font-style: italic;\n    font-size: 0.8em; }\n  .formiga-input-group input.valid > .formiga-input-feedback,\n  .formiga-input-group textarea.valid > .formiga-input-feedback,\n  .formiga-input-group select.valid > .formiga-input-feedback {\n    display: none; }\n";
  styleInject(css_248z$1);

  var _getResumeFromFormElements = function _getResumeFromFormElements(elements) {
    var resume = [];
    elements.map(function (el) {
      resume.push({
        msg: el.name,
        style: {
          marginTop: '1em',
          fontWeight: 'bold'
        }
      });
      resume.push({
        msg: el.value,
        style: {
          fontStyle: 'italic'
        }
      });
      resume.push({
        msg: "is " + (el.valid ? 'valid!' : "invalid (" + el.feedback + ")"),
        style: {
          color: el.valid ? 'green' : 'red'
        }
      });
    });
    return resume;
  };
  var Demo$1 = function Demo() {
    var _useState = React.useState([]),
      resume = _useState[0],
      setResume = _useState[1];
    var form = useForm();
    var updateResume = React.useCallback(function () {
      setResume(_getResumeFromFormElements(form.elements));
    }, [form.elements]);
    React.useEffect(function () {
      updateResume();
    }, [updateResume]);
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "formiga-title"
    }, "Formiga demo"), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "formiga-container"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "formiga-form"
    }, /*#__PURE__*/React__default["default"].createElement("h1", null, "Type your info here"), /*#__PURE__*/React__default["default"].createElement("form", {
      ref: form.ref
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "formiga-form-inputs"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "formiga-form-inputs-left"
    }, /*#__PURE__*/React__default["default"].createElement(DemoInputText, null), /*#__PURE__*/React__default["default"].createElement(DemoInputTextArea, null)), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "formiga-form-inputs-middle"
    }, /*#__PURE__*/React__default["default"].createElement(DemoInputNumber, null), /*#__PURE__*/React__default["default"].createElement(DemoInputDate, null), /*#__PURE__*/React__default["default"].createElement(DemoInputCheckBox, null)), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "formiga-form-inputs-right"
    }, /*#__PURE__*/React__default["default"].createElement(DemoInputSelect, null), /*#__PURE__*/React__default["default"].createElement(DemoInputColor, null), /*#__PURE__*/React__default["default"].createElement(DemoInputFile, null))), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "formiga-form-buttons"
    }, /*#__PURE__*/React__default["default"].createElement("a", {
      className: "btn btn-primary " + (form.valid ? '' : 'disabled'),
      onClick: function onClick(_ev) {
        return updateResume();
      }
    }, form.valid ? 'Submit' : 'Check wrong values before sumitting'), /*#__PURE__*/React__default["default"].createElement("a", {
      className: "btn btn-secondary",
      onClick: function onClick(_ev) {
        return triggerReset();
      }
    }, 'Reset fields')))), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "formiga-resume"
    }, /*#__PURE__*/React__default["default"].createElement("h1", null, "Resume"), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "log"
    }, resume.length > 0 ? resume.map(function (s, i) {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        key: "log_line_" + i,
        className: "log_line",
        style: _extends({}, s.style || {})
      }, s.msg);
    }) : null))));
  };

  var parseMenu = function parseMenu(contentNode) {
    var headings = contentNode.querySelectorAll('h1, h2, h3');
    var parseHead = function parseHead(h) {
      var level = parseInt(h.tagName.replace('H', ''));
      var title = stripHtml(h.innerHTML.trim());
      var slug = slugify(title);
      return {
        title: title,
        id: slug,
        level: level
        //node: h
      };
    };

    var menu = Array.prototype.map.call(headings, function (h) {
      return parseHead(h);
    }).filter(function (m) {
      return m != undefined;
    });
    return menu;
  };

  var Demo = function Demo() {
    var _useState = React.useState([]),
      menu = _useState[0],
      setMenu = _useState[1];
    var demoRef = React.useCallback(function (node) {
      var nMenu = parseMenu(node);
      setMenu(nMenu);
    }, []);
    return /*#__PURE__*/React__default["default"].createElement(Page, {
      menu: menu,
      path: "demo"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      ref: demoRef
    }, /*#__PURE__*/React__default["default"].createElement(Demo$1, null)));
  };

  var App = function App(_ref) {
    var pkgPath = _ref.pkgPath,
      pkgJson = _ref.pkgJson,
      arreConfig = _ref.arreConfig;
    return /*#__PURE__*/React__default["default"].createElement(AppContext.Provider, {
      value: {
        pkgPath: pkgPath,
        pkgJson: pkgJson,
        arreConfig: arreConfig /*, versions, selectedVersion, readme, onSwicthVersion*/
      }
    }, /*#__PURE__*/React__default["default"].createElement(Demo, null));
  };

  var css_248z = "/* css variables*/\n:root {\n  --font-size: 12pt;\n  --font-size-sm: 9pt;\n  --primary-color: #432E30;\n  --primary-color-light: #8E7474;\n  --accent-color: #DD356E;\n  --accent-color-light: #f0b9cb;\n  /*--accent-color-light: #FFE4E4;\n  --accent-color-dark: #B94B4C;*/\n  --white-color: #FAFBFC;\n  /*--light-gray-color: #C6CBD1;\n  --medium-gray-color: #959DA5;\n  --dark-gray-color: #444D56; */\n  --header-bg-color: #F8F8FA;\n  --header-bg-color-secondary: #e4e4f7;\n  --code-bg-color: #f9f9f9;\n  --header-logo-width: 125px;\n  --header-logo-width-resp: 100px;\n  --header-grid-height: 4em;\n  --header-grid-height-resp: 3em;\n  --header-sub-height: 0;\n  --header-sub-height-resp: 2.5em;\n  --menu-width-web: 20em;\n  --menu-responsive-color: rgba(0, 0, 0, 1);\n  --border: 1px solid var(--header-bg-color); }\n\n/*\n@font-face {\n  font-family: \"Inconsolata\";\n  font-weight: normal;\n  src: url(../fonts/Inconsolata/Inconsolata-Regular.ttf) format(\"truetype\");\n}\n\n@font-face {\n  font-family: \"Inconsolata\";\n  font-weight: bold;\n  src: url(../fonts/Inconsolata/Inconsolata-Bold.ttf) format(\"truetype\");\n}\n*/\n/* normalized */\nbody.arredemo {\n  padding: 0;\n  margin: 0;\n  font-family: 'Inconsolata', Arial, sans-serif;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  background-color: white; }\n\n.arredemo h1, h2 {\n  color: var(--primary-color); }\n\n.arredemo h1 {\n  font-size: 2em;\n  padding-bottom: 1em; }\n\n.arredemo h2 {\n  font-size: 1.5em;\n  padding-bottom: 0.75em; }\n\n.arredemo h3 {\n  font-size: 1.25em;\n  padding-bottom: 0.5em; }\n\n.arredemo h1:not(:first-child) {\n  padding-top: 2em; }\n\n.arredemo h2:not(:first-child) {\n  padding-top: 1.25em; }\n\n.arredemo h3:not(:first-child) {\n  padding-top: 1em; }\n\n.arredemo pre {\n  display: block;\n  padding: 1.5em 1em !important;\n  border: 1px solid #bebab0;\n  overflow-x: auto; }\n\n.arredemo code {\n  color: var(--accent-color);\n  word-wrap: break-word;\n  font-family: \"Liberation Mono\",\"Courier New\",monospace;\n  font-size: 0.9em; }\n\n.arredemo pre.prettyprint {\n  background-color: var(--code-bg-color); }\n\n.arredemo p, li {\n  font-weight: 300;\n  color: #4A4A4A; }\n\n.arredemo a, a:hover {\n  /*text-decoration: none;*/\n  color: var(--primary-color-light); }\n\n.arredemo hr {\n  padding: 1rem 0;\n  border: 0;\n  border-bottom: 1px solid var(--bg-color); }\n\n.arredemo * {\n  box-sizing: border-box; }\n\n.arredemo a,\n.arredemo .link {\n  text-decoration: none;\n  transition: all 0.3s ease-out;\n  cursor: pointer; }\n  .arredemo a:hover,\n  .arredemo .link:hover {\n    color: var(--accent-color); }\n  .arredemo a.light,\n  .arredemo .link.light {\n    font-weight: lighter; }\n  .arredemo a.dark,\n  .arredemo .link.dark {\n    font-weight: bolder; }\n  .arredemo a img,\n  .arredemo .link img {\n    position: relative;\n    vertical-align: middle; }\n  .arredemo a img + span,\n  .arredemo .link img + span {\n    margin-left: 0.5em; }\n\n.arredemo .afi-package-name {\n  font-weight: 600;\n  color: var(--accent-color); }\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\n:root {\n  --select-border: #777;\n  --select-focus: blue;\n  --select-arrow: var(--select-border); }\n\nselect {\n  appearance: none;\n  background-color: transparent;\n  border: none;\n  padding: 0 1em 0 0;\n  margin: 0;\n  width: 100%;\n  z-index: 1;\n  outline: none; }\n  select::-ms-expand {\n    display: none; }\n\n.select {\n  display: grid;\n  grid-template-areas: \"select\";\n  align-items: center;\n  position: relative;\n  min-width: 15ch;\n  max-width: 30ch;\n  border: 1px solid var(--select-border);\n  border-radius: 0.25em;\n  padding: 0.25em 0.5em;\n  cursor: pointer;\n  background-color: #fff;\n  background-image: linear-gradient(to top, #f9f9f9, #fff 33%); }\n  .select select, .select::after {\n    grid-area: select; }\n  .select:not(.select--multiple)::after {\n    content: \"\";\n    justify-self: end;\n    width: 0.8em;\n    height: 0.5em;\n    background-color: var(--select-arrow);\n    clip-path: polygon(100% 0%, 0 0%, 50% 100%); }\n\nselect:focus + .focus {\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  right: -1px;\n  bottom: -1px;\n  border: 2px solid var(--select-focus);\n  border-radius: inherit; }\n\nselect[multiple] {\n  padding-right: 0;\n  /*\n   * Safari will not reveal an option\n   * unless the select height has room to \n   * show all of it\n   * Firefox and Chrome allow showing \n   * a partial option\n   */\n  height: 6rem;\n  /* \n   * Experimental - styling of selected options\n   * in the multiselect\n   * Not supported crossbrowser\n   */ }\n  select[multiple] option {\n    white-space: normal;\n    outline-color: var(--select-focus); }\n\n.select--disabled {\n  cursor: not-allowed;\n  background-color: #eee;\n  background-image: linear-gradient(to top, #ddd, #eee 33%); }\n\n/*\nlabel {\n  font-size: 1.125rem;\n  font-weight: 500;\n}\n*/\n.select + label {\n  margin-top: 2rem; }\n\n/* global components */\n/* typography */\n/*\n.section__title {\n  color: var(--primary-color);\n}\n*/\n/* tabs */\n/*\n.tab__container {\n  position: relative;\n}\n\n.tab__container > ul {\n  position: absolute;\n  list-style: none;\n  margin: 0;\n  right: 1rem;\n  top: -2rem;\n  padding-left: 0;\n}\n\n.tab__container .code {\n  white-space: normal;\n  padding: 1rem 1.5rem;\n}\n\n.tab {\n  display: inline-block;\n  padding: 0.3rem 0.5rem;\n  font-weight: 200;\n  cursor: pointer;\n}\n\n.tab.active {\n  border-bottom: 1px solid var(--primary-color);\n  font-weight: 700;\n  display: inline-block;\n}\n\n.tab__pane {\n  display: none;\n}\n\n.tab__pane.active {\n  display: block;\n}\n\n*/\n/* code */\n/*\n.code {\n  border-radius: 3px;\n  font-family: Space Mono, SFMono-Regular, Menlo,Monaco, Consolas, Liberation Mono, Courier New, monospace;\n  background: var(--bg-color);\n  border: 1px solid var(--code-bg-color);\n  color: var(--primary-color-light);\n}\n\n.code--block {\n  white-space: pre-line;\n  padding: 0 1.5rem;\n}\n\n.code--inline {\n  padding: 3px 6px;\n  font-size: 80%;\n}\n*/\n/* buttons */\n.button--primary {\n  padding: 10px 22px;\n  background-color: var(--accent-color);\n  color: white;\n  position: relative;\n  text-decoration: none;\n  border: 0;\n  transition: all .3s ease-out; }\n\n.button--primary:after {\n  position: absolute;\n  content: \"\";\n  width: 1rem;\n  height: 1rem;\n  background-color: var(--accent-color-light);\n  right: -0.4rem;\n  top: -0.4rem;\n  transition: all 0.3s ease-out; }\n\n.button--primary:hover {\n  text-shadow: 0px 1px 1px var(--accent-color-dark);\n  color: white;\n  transform: translate3D(0, -3px, 0); }\n\n.button--primary:hover::after {\n  transform: rotate(90deg); }\n\n.button--secondary {\n  padding: 10px 22px;\n  border: 2px solid var(--primary-color);\n  transition: all 0.5s ease-out; }\n\n.button--secondary:hover {\n  border-color: var(--accent-color);\n  color: var(--accent-color); }\n\n/* links */\n/*\n.link {\n  text-decoration: none;\n  transition: all 0.3s ease-out;\n}\n\n.link:hover {\n  color: var(--accent-color);\n}\n\n.link--dark {\n  color: var(--primary-color);\n}\n\n.link--light {\n  color: var(--accent-color);\n}\n*/\n/* table */\n/*\ntable {\n  border-collapse: collapse;\n  width: 100%;\n  transition: color .3s ease-out;\n  margin-bottom: 2rem;\n}\n\ntable td, table th {\n  border: 1px solid var(--code-bg-color);\n  padding: 0.8rem;\n  font-weight: 300;\n}\n\ntable th {\n  text-align: left;\n  background-color: white;\n  border-color: white;\n  border-bottom-color: var(--code-bg-color);\n}\n\ntable td:first-child {\n  background-color: var(--bg-color);\n  font-weight: 600;\n}\n*/\n/* layout */\n/*\n.wrapper {\n  margin: 0 auto;\n  width: 70%;\n}\n*/\n/*\n.footer {\n  text-align: center;\n  background-color: var(--primary-color);\n  padding: 2rem;\n  color: white;\n}\n*/\n@keyframes fadeUp {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 30px, 0); }\n  100% {\n    transform: translate3d(0, 0, 0); } }\n\nnav.header {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 2;\n  background-color: var(--header-bg-color); }\n  @media screen and (min-width: 600px) {\n    nav.header {\n      padding-left: 4em;\n      padding-right: 4em; } }\n  nav.header .grid {\n    display: grid;\n    grid-template-columns: var(--header-logo-width) auto 0%;\n    padding: 1em 0;\n    height: var(--header-grid-height);\n    background-repeat: no-repeat;\n    background-size: auto 100%; }\n    @media screen and (max-width: 600px) {\n      nav.header .grid {\n        grid-template-columns: var(--header-logo-width-resp) auto 20%;\n        height: var(--header-grid-height-resp); } }\n    nav.header .grid div.logo img {\n      max-height: 100%; }\n      @media screen and (max-width: 600px) {\n        nav.header .grid div.logo img {\n          width: 100px;\n          margin-left: 0.5em; } }\n    @media screen and (max-width: 600px) {\n      nav.header .grid div.toolbar .link.github span {\n        display: none; } }\n    nav.header .grid div.toolbar a:not(:last-child) {\n      padding-right: 1em; }\n      @media screen and (max-width: 600px) {\n        nav.header .grid div.toolbar a:not(:last-child) {\n          padding-right: 0.5em; } }\n    nav.header .grid div.toolbar a img {\n      width: 1em;\n      top: -0.05em; }\n  nav.header .grid div.toolbar {\n    text-align: right; }\n    @media screen and (max-width: 600px) {\n      nav.header .grid div.toolbar {\n        text-align: center; } }\n\ndiv.toggler {\n  text-align: right;\n  padding-top: 0.5em;\n  padding-right: 1em;\n  cursor: pointer;\n  display: none; }\n  @media screen and (max-width: 600px) {\n    div.toggler {\n      display: block; } }\n  div.toggler .toggle {\n    position: relative; }\n  div.toggler .toggle span,\n  div.toggler .toggle span:before,\n  div.toggler .toggle span:after {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 18px;\n    border-radius: 2px;\n    background: var(--primary-color);\n    display: block;\n    cursor: pointer;\n    transition: all 0.3s ease-in-out;\n    right: 0; }\n  div.toggler .toggle span:before {\n    top: -6px; }\n  div.toggler .toggle span:after {\n    bottom: -6px; }\n  div.toggler .toggle.open span {\n    background-color: transparent; }\n  div.toggler .toggle.open span:before,\n  div.toggler .toggle.open span:after {\n    top: 0; }\n  div.toggler .toggle.open span:before {\n    transform: rotate(45deg); }\n  div.toggler .toggle.open span:after {\n    transform: rotate(-45deg); }\n\n.menu-container {\n  position: fixed;\n  left: 0;\n  width: var(--menu-width-web);\n  padding-left: 1em;\n  top: calc(var(--header-grid-height) + 1em);\n  height: calc(100% - calc(var(--header-grid-height) + 1em));\n  overflow: hidden;\n  /*\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto auto;\n  grid-gap: 1em;\n  justify-content: center;\n  \n  flex-grow: 1;\n  display: flex;\n  */\n  /*\n\n  @media screen and (max-width: 600px) {\n    position: fixed;\n    top: var(--header-grid-height-resp);\n    left: 0;\n    display: block;\n    width: 100%;\n\n    background-color: var(--header-bg-color);\n    padding: 1rem;\n  }\n  */\n  border-right: var(--border); }\n  @media screen and (max-width: 600px) {\n    .menu-container {\n      display: none; }\n      .menu-container.responsive-open {\n        display: block;\n        width: 100%;\n        padding: 1em;\n        overflow: auto;\n        background-color: var(--menu-responsive-color);\n        float: left;\n        top: 0;\n        z-index: 2; } }\n  .menu-container .switcher {\n    height: 2em; }\n  .menu-container .menu {\n    height: calc(100% - 2.25em);\n    overflow-y: auto; }\n    .menu-container .menu ul {\n      overflow-y: auto;\n      list-style: none;\n      padding-left: 0.5em;\n      text-align: left; }\n      .menu-container .menu ul li.level-1 {\n        font-weight: bold; }\n      .menu-container .menu ul li.level-2 {\n        padding-left: 1.5em; }\n      .menu-container .menu ul li.level-3 {\n        padding-left: 3em; }\n      .menu-container .menu ul li a {\n        text-decoration: none;\n        color: var(--primary-color); }\n      .menu-container .menu ul li a:hover {\n        color: var(--primary-color-light);\n        cursor: pointer;\n        transition: color .3s ease-in-out; }\n      .menu-container .menu ul .selected {\n        position: relative; }\n      .menu-container .menu ul .selected a {\n        color: var(--accent-color); }\n      .menu-container .menu ul .selected:after {\n        position: absolute;\n        content: \"\";\n        width: 0.1rem;\n        height: 75%;\n        background-color: var(--accent-color);\n        left: -0.5rem;\n        top: 0.25rem; }\n\ndiv.body {\n  position: relative;\n  margin-top: calc(var(--header-grid-height) + 1em);\n  width: 100%;\n  padding: 0 2em; }\n  @media screen and (max-width: 600px) {\n    div.body {\n      margin-top: calc(var(--header-grid-height-resp) + 1em);\n      padding: 0 1em; } }\n  div.body.with-menu div.content {\n    margin-left: var(--menu-width-web); }\n    @media screen and (max-width: 600px) {\n      div.body.with-menu div.content {\n        margin-left: 0; } }\n\nfooter {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  font-size: var(--font-size-sm);\n  border-top: var(--border);\n  padding: 1.5em;\n  text-align: center;\n  z-index: 2; }\n  footer .badges {\n    text-align: left; }\n    footer .badges span.badge {\n      padding-top: 0.5em;\n      padding-right: 1em; }\n      @media screen and (max-width: 600px) {\n        footer .badges span.badge {\n          display: inline-block;\n          padding-top: 0; } }\n  footer .license {\n    text-align: right; }\n  footer a {\n    color: white;\n    text-decoration: underline; }\n  @media screen and (max-width: 600px) {\n    footer {\n      display: block; }\n      footer .badges {\n        text-align: center; }\n      footer .license {\n        text-align: center;\n        margin-top: 1em; } }\n\n:root {\n  --loading-size: 125px;\n  --clr-bg: #272324;\n  --clr1: var(--primary-color);\n  --clr2: var(--accent-color);\n  --clr3: var(--accent-color-light); }\n\n.center-screen {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  min-height: 100vh; }\n\n.spinner {\n  --animation-duration: 5000ms;\n  position: relative;\n  width: var(--loading-size);\n  height: var(--loading-size);\n  transform: rotate(45deg); }\n  .spinner .spinner-item {\n    --item-size: calc(var(--loading-size) / 2.5);\n    position: absolute;\n    width: var(--item-size);\n    height: var(--item-size);\n    border: 4px solid var(--clr-spinner); }\n  .spinner .spinner-item:nth-child(1) {\n    --clr-spinner: var(--clr1);\n    top: 0;\n    left: 0;\n    animation: spinner3A var(--animation-duration) linear infinite; }\n\n@keyframes spinner3A {\n  0%,\n  8.33%,\n  16.66%,\n  100% {\n    transform: translate(0%, 0%); }\n  24.99%,\n  33.32%,\n  41.65% {\n    transform: translate(100%, 0%); }\n  49.98%,\n  58.31%,\n  66.64% {\n    transform: translate(100%, 100%); }\n  74.97%,\n  83.30%,\n  91.63% {\n    transform: translate(0%, 100%); } }\n  .spinner .spinner-item:nth-child(2) {\n    --clr-spinner: var(--clr2);\n    top: 0;\n    left: var(--item-size);\n    animation: spinner3B var(--animation-duration) linear infinite; }\n\n@keyframes spinner3B {\n  0%,\n  8.33%,\n  91.63%,\n  100% {\n    transform: translate(0%, 0%); }\n  16.66%,\n  24.99%,\n  33.32% {\n    transform: translate(0%, 100%); }\n  41.65%,\n  49.98%,\n  58.31% {\n    transform: translate(-100%, 100%); }\n  66.64%,\n  74.97%,\n  83.30% {\n    transform: translate(-100%, 0%); } }\n  .spinner .spinner-item:nth-child(3) {\n    --clr-spinner: var(--clr3);\n    top: var(--item-size);\n    left: var(--item-size);\n    animation: spinner3C var(--animation-duration) linear infinite; }\n\n@keyframes spinner3C {\n  0%,\n  83.30%,\n  91.63%,\n  100% {\n    transform: translate(0, 0); }\n  8.33%,\n  16.66%,\n  24.99% {\n    transform: translate(-100%, 0); }\n  33.32%,\n  41.65%,\n  49.98% {\n    transform: translate(-100%, -100%); }\n  58.31%,\n  66.64%,\n  74.97% {\n    transform: translate(0, -100%); } }\n";
  styleInject(css_248z);

  var pkgPath = '/home/lapis/repos/gh/arredemo/test/formiga';
  var pkgJson = JSON.parse("\n  {\n  \"name\": \"formiga\",\n  \"version\": \"0.1.2\",\n  \"description\": \"The simplest -yet effective- form validator for React\",\n  \"keywords\": [\n    \"js\",\n    \"react\",\n    \"form\",\n    \"validation\"\n  ],\n  \"author\": \"Donato Lorenzo <donato@afialapis.com>\",\n  \"contributors\": [\n    \"Donato Lorenzo <donato@afialapis.com>\"\n  ],\n  \"license\": \"MIT\",\n  \"repository\": {\n    \"type\": \"git\",\n    \"url\": \"https://github.com/afialapis/formiga.git\"\n  },\n  \"bugs\": {\n    \"url\": \"https://github.com/afialapis/formiga/issues\"\n  },\n  \"homepage\": \"https://formiga.afialapis.com/\",\n  \"files\": [\n    \"lib\",\n    \"dist\",\n    \"logo\",\n    \"docaine.json\",\n    \"formiga.png\"\n  ],\n  \"type\": \"module\",\n  \"main\": \"./lib/index.cjs\",\n  \"cjs\": \"./dist/formiga.cjs\",\n  \"browser\": \"./dist/formiga.umd.js\",\n  \"module\": \"./dist/formiga.mjs\",\n  \"exports\": {\n    \"import\": \"./dist/formiga.mjs\",\n    \"default\": \"./lib/index.cjs\",\n    \"require\": \"./dist/formiga.cjs\"\n  },\n  \"scripts\": {\n    \"clean-demo\": \"rm -rf demo/dist\",\n    \"clean-lib\": \"rm -rf lib && mkdir lib\",\n    \"clean-dist\": \"rm -rf dist && mkdir dist\",\n    \"lint\": \"npx xeira lint\",\n    \"test\": \"npx xeira test ./test/before.mjs ./test/units/*.cjs\",\n    \"lib\": \"npm run --silent clean-lib && npx xeira transpile\",\n    \"dist\": \"npm run --silent clean-dist && npx xeira bundle\",\n    \"prepare\": \"npm run --silent clean-demo && npm run --silent lint && npm run --silent test && npm run --silent lib && npm run --silent dist\",\n    \"demo\": \"npm run --silent clean-demo && npx xeira demo\",\n    \"reset\": \"npm run --silent arredemo-clean && npm run --silent clean-demo && npm run --silent clean-lib && npm run --silent clean-dist && rm -fr node_modules package-lock.json && npm i\",\n    \"arredemo-clean\": \"rm -fr arredemo\",\n    \"arredemo-build\": \"npm run arredemo-clean && npx arredemo build\"\n  },\n  \"devDependencies\": {\n    \"arredemo\": \"file:../../\",\n    \"xeira\": \"^0.0.26\"\n  },\n  \"dependencies\": {\n    \"react\": \">=16.13.1\"\n  },\n  \"peerDependencies\": {\n    \"react\": \">=16.13.1\"\n  },\n  \"babel\": {\n    \"extends\": \"./node_modules/xeira/configs/babel.react.cjs\"\n  },\n  \"eslintConfig\": {\n    \"extends\": [\n      \"./node_modules/xeira/configs/eslint.react.cjs\"\n    ]\n  }\n}\n");
  var arreConfig = JSON.parse("\n{\n  \"theme\": \"default\",\n  \"favicon\": \"logo/favicon/formiga.ico\",\n  \"logo\": \"logo/formiga.png\",\n  \"company\": \"Afialapis\",\n  \"url\": \"formiga.afialapis.com\",\n  \"doc_versions\": [\n    \"0.1.2\"\n  ],\n  \"md\": {\n    \"keep_summary_content\": false\n  },\n  \"demo_entry\": \"demo/src/Demo.js\",\n  \"demo_styles\": null\n}\n");

  /*
  ReactDOM.render(
    <App 
      pkgPath = {pkgPath}
      pkgJson = {pkgJson}
      arreConfig = {arreConfig}
      readmes = {readmes}
    />, 
    document.getElementById('arredemo-app'))
  */

  ReactDOM__default["default"].createRoot(document.getElementById("arredemo-app")).render( /*#__PURE__*/React__default["default"].createElement(React__default["default"].StrictMode, null, /*#__PURE__*/React__default["default"].createElement(App, {
    pkgPath: pkgPath,
    pkgJson: pkgJson,
    arreConfig: arreConfig
  })));

})(React, ReactDOM);
//# sourceMappingURL=arredemo_demo.js.map

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
    var _useAppContext = useAppContext(),
      arreConfig = _useAppContext.arreConfig;
    var has_demo = arreConfig.demo_entry != null;
    var logo = "url(../" + arreConfig.logo + ")";
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
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      className: "package-name"
    }, pkgName), " is sharpened by ", /*#__PURE__*/React__default["default"].createElement(Company, {
      company: company,
      url: url
    }), " under ", /*#__PURE__*/React__default["default"].createElement(License, {
      name: license
    }), " license. This site was built using ", /*#__PURE__*/React__default["default"].createElement("a", {
      href: "https://arredemo.afialapis.com",
      target: "_blank noopener noreferrer"
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      className: "package-name"
    }, "arredemo")), "."));
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

  _DEMO_IMPORT_;
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
    }, /*#__PURE__*/React__default["default"].createElement(TheTestDemo, null)));
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

  var css_248z = "/* css variables*/\n:root {\n  --font-size: 12pt;\n  --font-size-sm: 9pt;\n  --heading-color-l1: #432E30;\n  --heading-color-l2: #756060;\n  --heading-color-l3: #8E7474;\n  --accent-color: #DD356E;\n  --accent-color-light: #df608a;\n  --action-color: #DD356E;\n  --action-color-light: #df608a;\n  --link-color: #DD356E;\n  --link-color-light: #df608a;\n  --inline-code-color: #5e5656;\n  --white-color: #FAFBFC;\n  --header-bg-color: #F8F8FA;\n  --header-bg-color-secondary: #e4e4f7;\n  --code-bg-color: #f9f9f9;\n  --header-logo-width: 125px;\n  --header-logo-width-resp: 100px;\n  --header-grid-height: 4em;\n  --header-grid-height-resp: 3em;\n  --header-sub-height: 0;\n  --header-sub-height-resp: 2.5em;\n  --menu-width-web: 20em;\n  --menu-responsive-color: rgba(0, 0, 0, 1);\n  --border: 1px solid var(--header-bg-color); }\n\n/*\n@font-face {\n  font-family: \"Inconsolata\";\n  font-weight: normal;\n  src: url(../fonts/Inconsolata/Inconsolata-Regular.ttf) format(\"truetype\");\n}\n\n@font-face {\n  font-family: \"Inconsolata\";\n  font-weight: bold;\n  src: url(../fonts/Inconsolata/Inconsolata-Bold.ttf) format(\"truetype\");\n}\n*/\nbody.arredemo * {\n  box-sizing: border-box; }\n\n/* normalized */\nbody.arredemo {\n  padding: 0;\n  margin: 0;\n  font-family: 'Inconsolata', Arial, sans-serif;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 1.5em;\n  background-color: white; }\n  body.arredemo h1 {\n    font-size: 2em;\n    color: var(--heading-color-l1); }\n  body.arredemo h2 {\n    font-size: 1.5em;\n    color: var(--heading-color-l2); }\n  body.arredemo h3 {\n    font-size: 1.25em;\n    color: var(--heading-color-l3); }\n  body.arredemo hr {\n    padding: 1rem 0;\n    border: 0;\n    border-bottom: 1px solid var(--bg-color); }\n  body.arredemo a,\n  body.arredemo .link {\n    color: var(--link-color);\n    text-decoration: underline;\n    text-decoration-color: var(--link-color);\n    -webkit-transition: opacity 0.5s ease-in-out;\n    -moz-transition: opacity 0.5s ease-in-out;\n    -ms-transition: opacity 0.5s ease-in-out;\n    -o-transition: opacity 0.5s ease-in-out;\n    transition: opacity 0.5s ease-in-out;\n    opacity: 1;\n    cursor: pointer; }\n    body.arredemo a:hover,\n    body.arredemo .link:hover {\n      opacity: 0.5; }\n    body.arredemo a img,\n    body.arredemo .link img {\n      position: relative;\n      vertical-align: middle; }\n    body.arredemo a img + span,\n    body.arredemo .link img + span {\n      margin-left: 0.5em; }\n  body.arredemo .package-name {\n    font-weight: 600;\n    color: var(--accent-color); }\n\nbody.arredemo {\n  /* inline code sections */ }\n  body.arredemo pre {\n    display: block;\n    padding: 1.5em 1em !important;\n    border: 1px solid #bebab0;\n    overflow-x: auto; }\n  body.arredemo code {\n    color: var(--inline-code-color);\n    text-decoration-color: var(--inline-code-color);\n    word-wrap: break-word;\n    font-family: \"Liberation Mono\",\"Courier New\",monospace; }\n  body.arredemo pre.prettyprint {\n    background-color: var(--code-bg-color); }\n    body.arredemo pre.prettyprint code {\n      line-height: 1em;\n      font-size: 10pt; }\n  body.arredemo a :has(code),\n  body.arredemo .link:has(code) {\n    color: var(--inline-code-color);\n    text-decoration-color: var(--inline-code-color); }\n\nbody.arredemo *,\nbody.arredemo *::before,\nbody.arredemo *::after {\n  box-sizing: border-box; }\n\n:root {\n  --select-border: #777;\n  --select-focus: blue;\n  --select-arrow: var(--select-border); }\n\nbody.arredemo {\n  /*\n  label {\n    font-size: 1.125rem;\n    font-weight: 500;\n  }\n  */ }\n  body.arredemo select {\n    appearance: none;\n    background-color: transparent;\n    border: none;\n    padding: 0 1em 0 0;\n    margin: 0;\n    width: 100%;\n    z-index: 1;\n    outline: none; }\n    body.arredemo select::-ms-expand {\n      display: none; }\n  body.arredemo .select {\n    display: grid;\n    grid-template-areas: \"select\";\n    align-items: center;\n    position: relative;\n    min-width: 15ch;\n    max-width: 30ch;\n    border: 1px solid var(--select-border);\n    border-radius: 0.25em;\n    padding: 0.25em 0.5em;\n    cursor: pointer;\n    background-color: #fff;\n    background-image: linear-gradient(to top, #f9f9f9, #fff 33%); }\n    body.arredemo .select select, body.arredemo .select::after {\n      grid-area: select; }\n    body.arredemo .select:not(.select--multiple)::after {\n      content: \"\";\n      justify-self: end;\n      width: 0.8em;\n      height: 0.5em;\n      background-color: var(--select-arrow);\n      clip-path: polygon(100% 0%, 0 0%, 50% 100%); }\n  body.arredemo select:focus + .focus {\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    right: -1px;\n    bottom: -1px;\n    border: 2px solid var(--select-focus);\n    border-radius: inherit; }\n  body.arredemo select[multiple] {\n    padding-right: 0;\n    /*\n    * Safari will not reveal an option\n    * unless the select height has room to \n    * show all of it\n    * Firefox and Chrome allow showing \n    * a partial option\n    */\n    height: 6rem;\n    /* \n    * Experimental - styling of selected options\n    * in the multiselect\n    * Not supported crossbrowser\n    */ }\n    body.arredemo select[multiple] option {\n      white-space: normal;\n      outline-color: var(--select-focus); }\n  body.arredemo .select--disabled {\n    cursor: not-allowed;\n    background-color: #eee;\n    background-image: linear-gradient(to top, #ddd, #eee 33%); }\n  body.arredemo .select + label {\n    margin-top: 2rem; }\n\n/* buttons */\nbody.arredemo .button--primary {\n  padding: 10px 22px;\n  background-color: var(--action-color);\n  color: white;\n  position: relative;\n  text-decoration: none;\n  border: 0;\n  transition: all .3s ease-out; }\n\nbody.arredemo .button--primary:after {\n  position: absolute;\n  content: \"\";\n  width: 1rem;\n  height: 1rem;\n  background-color: var(--action-color-light);\n  right: -0.4rem;\n  top: -0.4rem;\n  transition: all 0.3s ease-out; }\n\nbody.arredemo .button--primary:hover {\n  text-shadow: 0px 1px 1px var(--action-color-light);\n  color: white;\n  transform: translate3D(0, -3px, 0); }\n\nbody.arredemo .button--primary:hover::after {\n  transform: rotate(90deg); }\n\nbody.arredemo .button--secondary {\n  padding: 10px 22px;\n  border: 2px solid var(--action-color);\n  transition: all 0.5s ease-out; }\n\nbody.arredemo .button--secondary:hover {\n  border-color: var(--action-color);\n  color: var(--action-color); }\n\ndiv.toggler {\n  text-align: right;\n  padding-top: 0.5em;\n  padding-right: 1em;\n  cursor: pointer;\n  display: none; }\n  @media screen and (max-width: 600px) {\n    div.toggler {\n      display: block; } }\n  div.toggler .toggle {\n    position: relative; }\n  div.toggler .toggle span,\n  div.toggler .toggle span:before,\n  div.toggler .toggle span:after {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 18px;\n    border-radius: 2px;\n    background: var(--action-color);\n    display: block;\n    cursor: pointer;\n    transition: all 0.3s ease-in-out;\n    right: 0; }\n  div.toggler .toggle span:before {\n    top: -6px; }\n  div.toggler .toggle span:after {\n    bottom: -6px; }\n  div.toggler .toggle.open span {\n    background-color: transparent; }\n  div.toggler .toggle.open span:before,\n  div.toggler .toggle.open span:after {\n    top: 0; }\n  div.toggler .toggle.open span:before {\n    transform: rotate(45deg); }\n  div.toggler .toggle.open span:after {\n    transform: rotate(-45deg); }\n\ndiv.body {\n  position: relative;\n  margin-top: calc(var(--header-grid-height) + 1em);\n  width: 100%;\n  padding: 0 2em; }\n  @media screen and (max-width: 600px) {\n    div.body {\n      margin-top: calc(var(--header-grid-height-resp) + 1em);\n      padding: 0 1em; } }\n  div.body.with-menu div.content {\n    margin-left: var(--menu-width-web); }\n    @media screen and (max-width: 600px) {\n      div.body.with-menu div.content {\n        margin-left: 0; } }\n\nnav.header {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 2;\n  background-color: var(--header-bg-color); }\n  @media screen and (min-width: 600px) {\n    nav.header {\n      padding-left: 4em;\n      padding-right: 4em; } }\n  nav.header .grid {\n    display: grid;\n    grid-template-columns: var(--header-logo-width) auto 0%;\n    padding: 1em 0;\n    height: var(--header-grid-height);\n    background-repeat: no-repeat;\n    background-size: auto 100%; }\n    @media screen and (max-width: 600px) {\n      nav.header .grid {\n        grid-template-columns: var(--header-logo-width-resp) auto 20%;\n        height: var(--header-grid-height-resp); } }\n    nav.header .grid div.logo img {\n      max-height: 100%; }\n      @media screen and (max-width: 600px) {\n        nav.header .grid div.logo img {\n          width: 100px;\n          margin-left: 0.5em; } }\n    @media screen and (max-width: 600px) {\n      nav.header .grid div.toolbar .link.github span {\n        display: none; } }\n    nav.header .grid div.toolbar a {\n      text-decoration: none; }\n      nav.header .grid div.toolbar a.light {\n        color: var(--action-color-light);\n        text-decoration-color: var(--action-color-light);\n        font-weight: lighter; }\n      nav.header .grid div.toolbar a.dark {\n        color: var(--action-color);\n        text-decoration-color: var(--action-color);\n        font-weight: bolder; }\n      nav.header .grid div.toolbar a:not(:last-child) {\n        padding-right: 1em; }\n        @media screen and (max-width: 600px) {\n          nav.header .grid div.toolbar a:not(:last-child) {\n            padding-right: 0.5em; } }\n      nav.header .grid div.toolbar a img {\n        width: 1em;\n        top: -0.05em; }\n  nav.header .grid div.toolbar {\n    text-align: right; }\n    @media screen and (max-width: 600px) {\n      nav.header .grid div.toolbar {\n        text-align: center; } }\n\n.menu-container {\n  position: fixed;\n  left: 0;\n  width: var(--menu-width-web);\n  padding-left: 1em;\n  top: calc(var(--header-grid-height) + 1em);\n  height: calc(100% - calc(var(--header-grid-height) + 1em));\n  overflow: hidden;\n  /*\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto auto;\n  grid-gap: 1em;\n  justify-content: center;\n  \n  flex-grow: 1;\n  display: flex;\n  */\n  /*\n\n  @media screen and (max-width: 600px) {\n    position: fixed;\n    top: var(--header-grid-height-resp);\n    left: 0;\n    display: block;\n    width: 100%;\n\n    background-color: var(--header-bg-color);\n    padding: 1rem;\n  }\n  */\n  border-right: var(--border); }\n  @media screen and (max-width: 600px) {\n    .menu-container {\n      display: none; }\n      .menu-container.responsive-open {\n        display: block;\n        width: 100%;\n        padding: 1em;\n        overflow: auto;\n        background-color: var(--menu-responsive-color);\n        float: left;\n        top: 0;\n        z-index: 2; } }\n  .menu-container .switcher {\n    height: 2em; }\n  .menu-container .menu {\n    height: calc(100% - 2.25em);\n    overflow-y: auto; }\n    .menu-container .menu ul {\n      overflow-y: auto;\n      list-style: none;\n      padding-left: 0.5em;\n      text-align: left; }\n      .menu-container .menu ul li {\n        padding: 0.5em 0 0 0;\n        font-weight: 300; }\n      .menu-container .menu ul li.level-1 {\n        font-weight: bold; }\n        .menu-container .menu ul li.level-1 a, .menu-container .menu ul li.level-1 .link {\n          color: var(--heading-color-l1); }\n      .menu-container .menu ul li.level-2 {\n        padding-left: 1.5em; }\n        .menu-container .menu ul li.level-2 a, .menu-container .menu ul li.level-2 .link {\n          color: var(--heading-color-l2); }\n      .menu-container .menu ul li.level-3 {\n        padding-left: 3em; }\n        .menu-container .menu ul li.level-3 a, .menu-container .menu ul li.level-3 .link {\n          color: var(--heading-color-l3); }\n      .menu-container .menu ul li a,\n      .menu-container .menu ul li .link {\n        text-decoration: none; }\n      .menu-container .menu ul .selected {\n        position: relative; }\n      .menu-container .menu ul .selected a {\n        color: var(--accent-color); }\n      .menu-container .menu ul .selected:after {\n        position: absolute;\n        content: \"\";\n        width: 0.1rem;\n        height: 75%;\n        background-color: var(--accent-color);\n        left: -0.5rem;\n        top: 0.25rem; }\n\nfooter {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  font-size: var(--font-size-sm);\n  border-top: var(--border);\n  padding: 1.5em;\n  text-align: center;\n  z-index: 2; }\n  footer .badges {\n    text-align: left; }\n    footer .badges span.badge {\n      padding-top: 0.5em;\n      padding-right: 1em; }\n      @media screen and (max-width: 600px) {\n        footer .badges span.badge {\n          display: inline-block;\n          padding-top: 0; } }\n  footer .license {\n    text-align: right; }\n  footer a {\n    color: white;\n    text-decoration: underline; }\n  @media screen and (max-width: 600px) {\n    footer {\n      display: block; }\n      footer .badges {\n        text-align: center; }\n      footer .license {\n        text-align: center;\n        margin-top: 1em; } }\n";
  styleInject(css_248z);

  var pkgPath = '/home/lapis/repos/gh/arredemo/docs';
  var pkgJson = JSON.parse("\n  {\n  \"name\": \"arredemo\",\n  \"version\": \"0.0.0\",\n  \"type\": \"module\",\n  \"repository\": {\n    \"type\": \"git\",\n    \"url\": \"git+https://github.com/afialapis/arredemo.git\"\n  },\n  \"author\": \"donato@afialapis.com\",\n  \"license\": \"MIT\",\n  \"homepage\": \"https://github.com/afialapis/arredemo#readme\",\n  \"devDependencies\": {\n    \"arredemo\": \"file:../\"\n  },\n  \"scripts\": {\n    \"reset\": \"npm cache clean --force && rm -fr node_modules && npm run arredemo-clean && npm i\",\n    \"arredemo-clean\": \"rm -fr arredemo\",\n    \"arredemo-build\": \"npm run arredemo-clean && npx arredemo build\"\n  }\n}\n");
  var arreConfig = JSON.parse("\n{\n  \"theme\": \"default\",\n  \"favicon\": \"../logo/favicon/arredemo.ico\",\n  \"logo\": \"../logo/arredemo.png\",\n  \"company\": \"Afialapis\",\n  \"url\": \"arredemo.afialapis.com\",\n  \"doc_versions\": [\n    \"0.0.1\"\n  ],\n  \"md\": {\n    \"keep_summary_content\": false\n  },\n  \"demo_entry\": null\n}\n");

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

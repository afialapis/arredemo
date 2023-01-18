(function (React, ReactDOM, reactRouterDom, Markdown) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
  var Markdown__default = /*#__PURE__*/_interopDefaultLegacy(Markdown);

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
      href: "/demo"
    }, 'Demo'), /*#__PURE__*/React__default["default"].createElement("a", {
      className: "link docs " + (path == 'docs' ? 'dark' : 'light'),
      href: "/docs"
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

  var getPath = function getPath(loc) {
    return loc.pathname.split('/')[1] == 'demo' ? 'demo' : 'docs';
  };
  var Page = function Page(_ref) {
    var menu = _ref.menu,
      children = _ref.children;
    var location = reactRouterDom.useLocation();
    var _useState = React.useState(getPath(location)),
      path = _useState[0],
      setPath = _useState[1];
    var _useState2 = React.useState(false),
      responsiveOpen = _useState2[0],
      setResponsiveOpen = _useState2[1];
    var activeOption = useActiveOption(menu);
    React.useEffect(function () {
      setPath(getPath(location));
    }, [location]);
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
      className: "body"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
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
    return /*#__PURE__*/React__default["default"].createElement(Markdown__default["default"], {
      options: options
    }, readme);
  };

  var Docs = function Docs(_ref) {
    var readme = _ref.readme;
    var _useState = React.useState([]),
      menu = _useState[0],
      setMenu = _useState[1];
    React.useEffect(function () {
      try {
        PR.prettyPrint();
      } catch (e) {}
    }, [readme]);
    React.useEffect(function () {
      var nMenu = getMenuFromMdDOM();
      setMenu(nMenu);
    }, []);
    console.log('NOW DOCS');
    return /*#__PURE__*/React__default["default"].createElement(Page, {
      menu: menu
    }, /*#__PURE__*/React__default["default"].createElement(DocsMd, {
      readme: readme
    }));
  };

  var App = function App(_ref) {
    var pkgPath = _ref.pkgPath,
      pkgJson = _ref.pkgJson,
      arreConfig = _ref.arreConfig,
      readmes = _ref.readmes;
    var _useState = React.useState(arreConfig.doc_versions),
      versions = _useState[0];
      _useState[1];
    var _useState2 = React.useState(arreConfig.doc_versions[0]),
      selectedVersion = _useState2[0],
      setSelectedVersion = _useState2[1];
    var _useState3 = React.useState(readmes[arreConfig.doc_versions[0]]),
      readme = _useState3[0],
      setReadme = _useState3[1];
    var onSwicthVersion = React.useCallback(function (nVersion) {
      setSelectedVersion(nVersion);
      setReadme(readmes[nVersion]);
    }, []);
    var router = reactRouterDom.createBrowserRouter(reactRouterDom.createRoutesFromElements(
    /*#__PURE__*/
    /*{arreConfig.has_demo
     ? <Route path={'/demo'} element={<Demo/>}/>
     : null
     }*/
    React__default["default"].createElement(reactRouterDom.Route, {
      path: '/',
      element: /*#__PURE__*/React__default["default"].createElement(Docs, {
        readme: readme
      })
    })));
    console.log('Rendering app, router is');
    console.log(router);
    return /*#__PURE__*/React__default["default"].createElement(AppContext.Provider, {
      value: {
        pkgPath: pkgPath,
        pkgJson: pkgJson,
        arreConfig: arreConfig,
        versions: versions,
        selectedVersion: selectedVersion,
        readme: readme,
        onSwicthVersion: onSwicthVersion
      }
    }, /*#__PURE__*/React__default["default"].createElement(reactRouterDom.RouterProvider, {
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

  var css_248z = "/* css variables*/\n:root {\n  --font-size: 12pt;\n  --font-size-sm: 9pt;\n  --primary-color: #432E30;\n  --primary-color-light: #8E7474;\n  --accent-color: #DD356E;\n  --accent-color-light: #f0b9cb;\n  /*--accent-color-light: #FFE4E4;\n  --accent-color-dark: #B94B4C;*/\n  --white-color: #FAFBFC;\n  /*--light-gray-color: #C6CBD1;\n  --medium-gray-color: #959DA5;\n  --dark-gray-color: #444D56; */\n  --header-bg-color: #F8F8FA;\n  --header-bg-color-secondary: #e4e4f7;\n  --code-bg-color: #f9f9f9;\n  --header-logo-width: 125px;\n  --header-logo-width-resp: 100px;\n  --header-grid-height: 4em;\n  --header-grid-height-resp: 3em;\n  --header-sub-height: 0;\n  --header-sub-height-resp: 2.5em;\n  --menu-width-web: 20em;\n  --menu-responsive-color: rgba(0, 0, 0, 1);\n  --border: 1px solid var(--header-bg-color); }\n\n/*\n@font-face {\n  font-family: \"Inconsolata\";\n  font-weight: normal;\n  src: url(../fonts/Inconsolata/Inconsolata-Regular.ttf) format(\"truetype\");\n}\n\n@font-face {\n  font-family: \"Inconsolata\";\n  font-weight: bold;\n  src: url(../fonts/Inconsolata/Inconsolata-Bold.ttf) format(\"truetype\");\n}\n*/\n/* normalized */\nbody.arredemo {\n  padding: 0;\n  margin: 0;\n  font-family: 'Inconsolata', Arial, sans-serif;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  background-color: white; }\n\n.arredemo h1, h2 {\n  color: var(--primary-color); }\n\n.arredemo h1 {\n  font-size: 2em;\n  padding-bottom: 1em; }\n\n.arredemo h2 {\n  font-size: 1.5em;\n  padding-bottom: 0.75em; }\n\n.arredemo h3 {\n  font-size: 1.25em;\n  padding-bottom: 0.5em; }\n\n.arredemo h1:not(:first-child) {\n  padding-top: 2em; }\n\n.arredemo h2:not(:first-child) {\n  padding-top: 1.25em; }\n\n.arredemo h3:not(:first-child) {\n  padding-top: 1em; }\n\n.arredemo pre {\n  display: block;\n  padding: 1.5em 1em !important;\n  border: 1px solid #bebab0;\n  overflow-x: auto; }\n\n.arredemo code {\n  color: var(--accent-color);\n  word-wrap: break-word;\n  font-family: \"Liberation Mono\",\"Courier New\",monospace;\n  font-size: 0.9em; }\n\n.arredemo pre.prettyprint {\n  background-color: var(--code-bg-color); }\n\n.arredemo p, li {\n  font-weight: 300;\n  color: #4A4A4A; }\n\n.arredemo a, a:hover {\n  /*text-decoration: none;*/\n  color: var(--primary-color-light); }\n\n.arredemo hr {\n  padding: 1rem 0;\n  border: 0;\n  border-bottom: 1px solid var(--bg-color); }\n\n.arredemo * {\n  box-sizing: border-box; }\n\n.arredemo a,\n.arredemo .link {\n  text-decoration: none;\n  transition: all 0.3s ease-out;\n  cursor: pointer; }\n  .arredemo a:hover,\n  .arredemo .link:hover {\n    color: var(--accent-color); }\n  .arredemo a.light,\n  .arredemo .link.light {\n    font-weight: lighter; }\n  .arredemo a.dark,\n  .arredemo .link.dark {\n    font-weight: bolder; }\n  .arredemo a img,\n  .arredemo .link img {\n    position: relative;\n    vertical-align: middle; }\n  .arredemo a img + span,\n  .arredemo .link img + span {\n    margin-left: 0.5em; }\n\n.arredemo .afi-package-name {\n  font-weight: 600;\n  color: var(--accent-color); }\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\n:root {\n  --select-border: #777;\n  --select-focus: blue;\n  --select-arrow: var(--select-border); }\n\nselect {\n  appearance: none;\n  background-color: transparent;\n  border: none;\n  padding: 0 1em 0 0;\n  margin: 0;\n  width: 100%;\n  z-index: 1;\n  outline: none; }\n  select::-ms-expand {\n    display: none; }\n\n.select {\n  display: grid;\n  grid-template-areas: \"select\";\n  align-items: center;\n  position: relative;\n  min-width: 15ch;\n  max-width: 30ch;\n  border: 1px solid var(--select-border);\n  border-radius: 0.25em;\n  padding: 0.25em 0.5em;\n  cursor: pointer;\n  background-color: #fff;\n  background-image: linear-gradient(to top, #f9f9f9, #fff 33%); }\n  .select select, .select::after {\n    grid-area: select; }\n  .select:not(.select--multiple)::after {\n    content: \"\";\n    justify-self: end;\n    width: 0.8em;\n    height: 0.5em;\n    background-color: var(--select-arrow);\n    clip-path: polygon(100% 0%, 0 0%, 50% 100%); }\n\nselect:focus + .focus {\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  right: -1px;\n  bottom: -1px;\n  border: 2px solid var(--select-focus);\n  border-radius: inherit; }\n\nselect[multiple] {\n  padding-right: 0;\n  /*\n   * Safari will not reveal an option\n   * unless the select height has room to \n   * show all of it\n   * Firefox and Chrome allow showing \n   * a partial option\n   */\n  height: 6rem;\n  /* \n   * Experimental - styling of selected options\n   * in the multiselect\n   * Not supported crossbrowser\n   */ }\n  select[multiple] option {\n    white-space: normal;\n    outline-color: var(--select-focus); }\n\n.select--disabled {\n  cursor: not-allowed;\n  background-color: #eee;\n  background-image: linear-gradient(to top, #ddd, #eee 33%); }\n\n/*\nlabel {\n  font-size: 1.125rem;\n  font-weight: 500;\n}\n*/\n.select + label {\n  margin-top: 2rem; }\n\n/* global components */\n/* typography */\n/*\n.section__title {\n  color: var(--primary-color);\n}\n*/\n/* tabs */\n/*\n.tab__container {\n  position: relative;\n}\n\n.tab__container > ul {\n  position: absolute;\n  list-style: none;\n  margin: 0;\n  right: 1rem;\n  top: -2rem;\n  padding-left: 0;\n}\n\n.tab__container .code {\n  white-space: normal;\n  padding: 1rem 1.5rem;\n}\n\n.tab {\n  display: inline-block;\n  padding: 0.3rem 0.5rem;\n  font-weight: 200;\n  cursor: pointer;\n}\n\n.tab.active {\n  border-bottom: 1px solid var(--primary-color);\n  font-weight: 700;\n  display: inline-block;\n}\n\n.tab__pane {\n  display: none;\n}\n\n.tab__pane.active {\n  display: block;\n}\n\n*/\n/* code */\n/*\n.code {\n  border-radius: 3px;\n  font-family: Space Mono, SFMono-Regular, Menlo,Monaco, Consolas, Liberation Mono, Courier New, monospace;\n  background: var(--bg-color);\n  border: 1px solid var(--code-bg-color);\n  color: var(--primary-color-light);\n}\n\n.code--block {\n  white-space: pre-line;\n  padding: 0 1.5rem;\n}\n\n.code--inline {\n  padding: 3px 6px;\n  font-size: 80%;\n}\n*/\n/* buttons */\n.button--primary {\n  padding: 10px 22px;\n  background-color: var(--accent-color);\n  color: white;\n  position: relative;\n  text-decoration: none;\n  border: 0;\n  transition: all .3s ease-out; }\n\n.button--primary:after {\n  position: absolute;\n  content: \"\";\n  width: 1rem;\n  height: 1rem;\n  background-color: var(--accent-color-light);\n  right: -0.4rem;\n  top: -0.4rem;\n  transition: all 0.3s ease-out; }\n\n.button--primary:hover {\n  text-shadow: 0px 1px 1px var(--accent-color-dark);\n  color: white;\n  transform: translate3D(0, -3px, 0); }\n\n.button--primary:hover::after {\n  transform: rotate(90deg); }\n\n.button--secondary {\n  padding: 10px 22px;\n  border: 2px solid var(--primary-color);\n  transition: all 0.5s ease-out; }\n\n.button--secondary:hover {\n  border-color: var(--accent-color);\n  color: var(--accent-color); }\n\n/* links */\n/*\n.link {\n  text-decoration: none;\n  transition: all 0.3s ease-out;\n}\n\n.link:hover {\n  color: var(--accent-color);\n}\n\n.link--dark {\n  color: var(--primary-color);\n}\n\n.link--light {\n  color: var(--accent-color);\n}\n*/\n/* table */\n/*\ntable {\n  border-collapse: collapse;\n  width: 100%;\n  transition: color .3s ease-out;\n  margin-bottom: 2rem;\n}\n\ntable td, table th {\n  border: 1px solid var(--code-bg-color);\n  padding: 0.8rem;\n  font-weight: 300;\n}\n\ntable th {\n  text-align: left;\n  background-color: white;\n  border-color: white;\n  border-bottom-color: var(--code-bg-color);\n}\n\ntable td:first-child {\n  background-color: var(--bg-color);\n  font-weight: 600;\n}\n*/\n/* layout */\n/*\n.wrapper {\n  margin: 0 auto;\n  width: 70%;\n}\n*/\n/*\n.footer {\n  text-align: center;\n  background-color: var(--primary-color);\n  padding: 2rem;\n  color: white;\n}\n*/\n@keyframes fadeUp {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 30px, 0); }\n  100% {\n    transform: translate3d(0, 0, 0); } }\n\nnav.header {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 2;\n  background-color: var(--header-bg-color); }\n  @media screen and (min-width: 600px) {\n    nav.header {\n      padding-left: 4em;\n      padding-right: 4em; } }\n  nav.header .grid {\n    display: grid;\n    grid-template-columns: var(--header-logo-width) auto 0%;\n    padding: 1em 0;\n    height: var(--header-grid-height);\n    background-repeat: no-repeat;\n    background-size: auto 100%; }\n    @media screen and (max-width: 600px) {\n      nav.header .grid {\n        grid-template-columns: var(--header-logo-width-resp) auto 20%;\n        height: var(--header-grid-height-resp); } }\n    nav.header .grid div.logo img {\n      max-height: 100%; }\n      @media screen and (max-width: 600px) {\n        nav.header .grid div.logo img {\n          width: 100px;\n          margin-left: 0.5em; } }\n    @media screen and (max-width: 600px) {\n      nav.header .grid div.toolbar .link.github span {\n        display: none; } }\n    nav.header .grid div.toolbar a:not(:last-child) {\n      padding-right: 1em; }\n      @media screen and (max-width: 600px) {\n        nav.header .grid div.toolbar a:not(:last-child) {\n          padding-right: 0.5em; } }\n    nav.header .grid div.toolbar a img {\n      width: 1em;\n      top: -0.05em; }\n  nav.header .grid div.toolbar {\n    text-align: right; }\n    @media screen and (max-width: 600px) {\n      nav.header .grid div.toolbar {\n        text-align: center; } }\n\ndiv.toggler {\n  text-align: right;\n  padding-top: 0.5em;\n  padding-right: 1em;\n  cursor: pointer;\n  display: none; }\n  @media screen and (max-width: 600px) {\n    div.toggler {\n      display: block; } }\n  div.toggler .toggle {\n    position: relative; }\n  div.toggler .toggle span,\n  div.toggler .toggle span:before,\n  div.toggler .toggle span:after {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 18px;\n    border-radius: 2px;\n    background: var(--primary-color);\n    display: block;\n    cursor: pointer;\n    transition: all 0.3s ease-in-out;\n    right: 0; }\n  div.toggler .toggle span:before {\n    top: -6px; }\n  div.toggler .toggle span:after {\n    bottom: -6px; }\n  div.toggler .toggle.open span {\n    background-color: transparent; }\n  div.toggler .toggle.open span:before,\n  div.toggler .toggle.open span:after {\n    top: 0; }\n  div.toggler .toggle.open span:before {\n    transform: rotate(45deg); }\n  div.toggler .toggle.open span:after {\n    transform: rotate(-45deg); }\n\n.menu-container {\n  position: fixed;\n  left: 0;\n  width: var(--menu-width-web);\n  padding-left: 1em;\n  top: calc(var(--header-grid-height) + 1em);\n  height: calc(100% - calc(var(--header-grid-height) + 1em));\n  overflow: hidden;\n  /*\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto auto;\n  grid-gap: 1em;\n  justify-content: center;\n  \n  flex-grow: 1;\n  display: flex;\n  */\n  /*\n\n  @media screen and (max-width: 600px) {\n    position: fixed;\n    top: var(--header-grid-height-resp);\n    left: 0;\n    display: block;\n    width: 100%;\n\n    background-color: var(--header-bg-color);\n    padding: 1rem;\n  }\n  */\n  border-right: var(--border); }\n  @media screen and (max-width: 600px) {\n    .menu-container {\n      display: none; }\n      .menu-container.responsive-open {\n        display: block;\n        width: 100%;\n        padding: 1em;\n        overflow: auto;\n        background-color: var(--menu-responsive-color);\n        float: left;\n        top: 0;\n        z-index: 2; } }\n  .menu-container .switcher {\n    height: 2em; }\n  .menu-container .menu {\n    height: calc(100% - 2.25em);\n    overflow-y: auto; }\n    .menu-container .menu ul {\n      overflow-y: auto;\n      list-style: none;\n      padding-left: 0.5em;\n      text-align: left; }\n      .menu-container .menu ul li.level-1 {\n        font-weight: bold; }\n      .menu-container .menu ul li.level-2 {\n        padding-left: 1.5em; }\n      .menu-container .menu ul li.level-3 {\n        padding-left: 3em; }\n      .menu-container .menu ul li a {\n        text-decoration: none;\n        color: var(--primary-color); }\n      .menu-container .menu ul li a:hover {\n        color: var(--primary-color-light);\n        cursor: pointer;\n        transition: color .3s ease-in-out; }\n      .menu-container .menu ul .selected {\n        position: relative; }\n      .menu-container .menu ul .selected a {\n        color: var(--accent-color); }\n      .menu-container .menu ul .selected:after {\n        position: absolute;\n        content: \"\";\n        width: 0.1rem;\n        height: 75%;\n        background-color: var(--accent-color);\n        left: -0.5rem;\n        top: 0.25rem; }\n\ndiv.body {\n  position: relative;\n  margin-top: calc(var(--header-grid-height) + 1em);\n  width: 100%;\n  padding: 0 2em; }\n  @media screen and (max-width: 600px) {\n    div.body {\n      margin-top: calc(var(--header-grid-height-resp) + 1em);\n      padding: 0 1em; } }\n\ndiv.content {\n  margin-left: var(--menu-width-web); }\n  @media screen and (max-width: 600px) {\n    div.content {\n      margin-left: 0; } }\n\nfooter {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  font-size: var(--font-size-sm);\n  border-top: var(--border);\n  padding: 1.5em;\n  text-align: center;\n  z-index: 2; }\n  footer .badges {\n    text-align: left; }\n    footer .badges span.badge {\n      padding-top: 0.5em;\n      padding-right: 1em; }\n      @media screen and (max-width: 600px) {\n        footer .badges span.badge {\n          display: inline-block;\n          padding-top: 0; } }\n  footer .license {\n    text-align: right; }\n  footer a {\n    color: white;\n    text-decoration: underline; }\n  @media screen and (max-width: 600px) {\n    footer {\n      display: block; }\n      footer .badges {\n        text-align: center; }\n      footer .license {\n        text-align: center;\n        margin-top: 1em; } }\n\n:root {\n  --loading-size: 125px;\n  --clr-bg: #272324;\n  --clr1: var(--primary-color);\n  --clr2: var(--accent-color);\n  --clr3: var(--accent-color-light); }\n\n.center-screen {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  min-height: 100vh; }\n\n.spinner {\n  --animation-duration: 5000ms;\n  position: relative;\n  width: var(--loading-size);\n  height: var(--loading-size);\n  transform: rotate(45deg); }\n  .spinner .spinner-item {\n    --item-size: calc(var(--loading-size) / 2.5);\n    position: absolute;\n    width: var(--item-size);\n    height: var(--item-size);\n    border: 4px solid var(--clr-spinner); }\n  .spinner .spinner-item:nth-child(1) {\n    --clr-spinner: var(--clr1);\n    top: 0;\n    left: 0;\n    animation: spinner3A var(--animation-duration) linear infinite; }\n\n@keyframes spinner3A {\n  0%,\n  8.33%,\n  16.66%,\n  100% {\n    transform: translate(0%, 0%); }\n  24.99%,\n  33.32%,\n  41.65% {\n    transform: translate(100%, 0%); }\n  49.98%,\n  58.31%,\n  66.64% {\n    transform: translate(100%, 100%); }\n  74.97%,\n  83.30%,\n  91.63% {\n    transform: translate(0%, 100%); } }\n  .spinner .spinner-item:nth-child(2) {\n    --clr-spinner: var(--clr2);\n    top: 0;\n    left: var(--item-size);\n    animation: spinner3B var(--animation-duration) linear infinite; }\n\n@keyframes spinner3B {\n  0%,\n  8.33%,\n  91.63%,\n  100% {\n    transform: translate(0%, 0%); }\n  16.66%,\n  24.99%,\n  33.32% {\n    transform: translate(0%, 100%); }\n  41.65%,\n  49.98%,\n  58.31% {\n    transform: translate(-100%, 100%); }\n  66.64%,\n  74.97%,\n  83.30% {\n    transform: translate(-100%, 0%); } }\n  .spinner .spinner-item:nth-child(3) {\n    --clr-spinner: var(--clr3);\n    top: var(--item-size);\n    left: var(--item-size);\n    animation: spinner3C var(--animation-duration) linear infinite; }\n\n@keyframes spinner3C {\n  0%,\n  83.30%,\n  91.63%,\n  100% {\n    transform: translate(0, 0); }\n  8.33%,\n  16.66%,\n  24.99% {\n    transform: translate(-100%, 0); }\n  33.32%,\n  41.65%,\n  49.98% {\n    transform: translate(-100%, -100%); }\n  58.31%,\n  66.64%,\n  74.97% {\n    transform: translate(0, -100%); } }\n";
  styleInject(css_248z);

  var pkgPath = '/home/lapis/repos/gh/arredemo/demo';
  var pkgJson = JSON.parse("\n  {\n  \"name\": \"reactstrap-date-picker\",\n  \"version\": \"1.0.6\",\n  \"type\": \"module\",\n  \"repository\": {\n    \"type\": \"git\",\n    \"url\": \"git+https://github.com/afialapis/arredemo.git\"\n  },\n  \"author\": \"donato@afialapis.com\",\n  \"license\": \"MIT\",\n  \"homepage\": \"https://github.com/afialapis/arredemo#readme\",\n  \"devDependencies\": {\n    \"arredemo\": \"file:../\"\n  },\n  \"scripts\": {\n    \"reset\": \"npm cache clean --force && rm -fr node_modules && npm run clean && npm i\",\n    \"clean\": \"rm -fr arredemo\",\n    \"build\": \"npm run clean && npx arredemo build\"\n  },\n  \"dependencies\": {\n    \"react-touch-drag-slider\": \"^2.2.5\"\n  }\n}\n");
  var arreConfig = JSON.parse("\n{\n  \"theme\": \"default\",\n  \"favicon\": \"logo/favicon/arredemo.ico\",\n  \"logo\": \"logo/arredemo.png\",\n  \"company\": \"Arre Demo!\",\n  \"url\": \"arredemo.afialapis.com\",\n  \"doc_versions\": [\n    \"1.0.6\"\n  ],\n  \"md\": {\n    \"keep_summary_content\": false\n  },\n  \"demo_entry\": null,\n  \"demo_styles\": null\n}\n");
  var md_1_0_6 = decodeURIComponent(escape(window.atob("CgpBIFJlYWN0c3RyYXAgYmFzZWQsIHplcm8gZGVwZW5kZW5jaWVzLCBkYXRlIHBpY2tlci4KCkRlbW8gYW5kIGRvY3MgYXQgW3JlYWN0c3RyYXAtZGF0ZS1waWNrZXJdKGh0dHBzOi8vcmVhY3RzdHJhcC1kYXRlLXBpY2tlci5hZmlhbGFwaXMuY29tLykuIAoKPHNlY3Rpb24+CiMgVGFibGUgb2YgQ29udGVudHMKCjEuIFtJbnN0YWxsYXRpb25dKCNpbnN0YWxsYXRpb24pCjIuIFtVc2FnZV0oI3VzYWdlKQozLiBbQVBJIFJlZmVyZW5jZV0oI2FwaS1yZWZlcmVuY2UpCjQuIFtEZWVwZXIgY3VzdG9taXppbmddKCNkZWVwZXItY3VzdG9taXppbmcpCjUuIFtJbnNwZWN0IHRoaXMgcGFja2FnZV0oI2luc3BlY3QtdGhpcy1wYWNrYWdlKQo2LiBbQ2hhbmdlbG9nXSgjY2hhbmdlbG9nKSAKCjwvc2VjdGlvbj4KPHNlY3Rpb24+CiMgSW5zdGFsbGF0aW9uCgpVc2luZyBgbnBtYDoKCmBgYGJhc2gKbnBtIGluc3RhbGwgcmVhY3RzdHJhcC1kYXRlLXBpY2tlcgpgYGAKCmByZWFjdHN0cmFwLWRhdGUtcGlja2VyYCB3b3JrcyB3aXRoIHRoZXNlIFtwZWVyIGRlcGVuZGVuY2llc10oaHR0cHM6Ly9ub2RlanMub3JnL2VuL2Jsb2cvbnBtL3BlZXItZGVwZW5kZW5jaWVzLyk6CiAgLSBbUmVhY3RdKGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdCkgPj0gMTYuMTMuMQogIC0gW1JlYWN0c3RyYXBdKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdHN0cmFwL3JlYWN0c3RyYXApID49IDguNS4xCiAgICAqIFtCb290c3RyYXBdKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcCkgPj0gNC41LjIKCkNoZWNrIFtDaGFuZ2Vsb2ddKCNjaGFuZ2Vsb2cpIGZvciBtb3JlIGluZm8gb24gb3RoZXIgdmVyc2lvbnMuIAoKPC9zZWN0aW9uPgo8c2VjdGlvbj4KIyBVc2FnZQoKYGBganMKaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QKaW1wb3J0IHtGb3JtR3JvdXAsIExhYmVsLCBGb3JtVGV4dH0gZnJvbSAncmVhY3RzdHJhcCcKaW1wb3J0IHtEYXRlUGlja2VyfSBmcm9tICdyZWFjdHN0cmFwLWRhdGUtcGlja2VyJwoKY29uc3QgQXBwID0gKCkgPT4gewogIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdPSB1c2VTdGF0ZShuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkpCiAgY29uc3QgW2ZtdFZhbHVlLCBzZXRGbXRWYWx1ZV09IHVzZVN0YXRlKHVuZGVmaW5lZCkKCiAgaGFuZGxlQ2hhbmdlKHZhbHVlLCBmb3JtYXR0ZWRWYWx1ZSkgewogICAgc2V0VmFsdWUodmFsdWUpCiAgICBzZXRGbXRWYWx1ZShmb3JtYXR0ZWRWYWx1ZSkKICB9CgogIHVzZUVmZmVjdCgoICk9PiB7CiAgICBjb25zb2xlLmxvZyhgRm9ybWF0dGVkIHZhbHVlIGlzICR7Zm10VmFsdWV9YCkKICB9LCBbZm10VmFsdWVdKQoKICByZXR1cm4gKAogICAgPEZvcm1Hcm91cD4KICAgICAgPExhYmVsPk15IERhdGUgUGlja2VyPC9MYWJlbD4KICAgICAgPERhdGVQaWNrZXIgaWQgICAgICA9ICJleGFtcGxlLWRhdGVwaWNrZXIiIAogICAgICAgICAgICAgICAgICB2YWx1ZSAgID0ge3ZhbHVlfSAKICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9IHsodixmKSA9PiBoYW5kbGVDaGFuZ2UodiwgZil9IC8+CiAgICAgIDxGb3JtVGV4dD5IZWxwPC9Gb3JtVGV4dD4KICAgIDwvRm9ybUdyb3VwPgogICkKfQoKYGBgIAoKPC9zZWN0aW9uPgo8c2VjdGlvbj4KIyBBUEkgUmVmZXJlbmNlCgo8YXJ0aWNsZT4KIyMgYDxEYXRlUGlja2VyIC8+YAoKYHJlYWN0c3RyYXAtZGF0ZS1waWNrZXJgJ3MgcHVibGljIGNvbXBvbmVudC4KCmBgYGpzCmltcG9ydCB7RGF0ZVBpY2tlcn0gZnJvbSAncmVhY3RzdHJhcC1kYXRlLXBpY2tlcicKCmNvbnN0IEV4YW1wbGUgPSAoKSA9PiB7CiAgLi4uCiAgcmV0dXJuICgKICAgIC4uLgogICAgICA8RGF0ZVBpY2tlciB7cHJvcHN9IC8+CiAgICAuLi4KICApCn0KCmBgYCAKCjwvYXJ0aWNsZT4KPGFydGljbGU+CiMjIEdsb2JhbCBwcm9wZXJ0aWVzCgo8cD4KCiMjIyBgdmFsdWVgCgpJU08gZGF0ZSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IHZhbHVlLiBDYW5ub3QgYmUgc2V0IGFsb25nc2lkZSBgZGVmYXVsdFZhbHVlYC4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYHN0cmluZ2AuCiAgKiBFeGFtcGxlOiBgIjIwMTYtMDUtMTlUMTI6MDA6MDAuMDAwWiJgCgojIyMgYGRlZmF1bHRWYWx1ZWAKCklTTyBkYXRlIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGRlZmF1bHQgdmFsdWUuIENhbm5vdCBiZSBzZXQgYWxvbmdzaWRlIGB2YWx1ZWAuCgogICogT3B0aW9uYWwKICAqIFR5cGU6IGBzdHJpbmdgCiAgKiBFeGFtcGxlOiBgIjIwMTYtMDUtMTlUMTI6MDA6MDAuMDAwWiJgCgojIyMgYGlkYAoKSFRNTCBpZGVudGlmaWVyIGZvciB0aGUgYHJlYWN0c3RyYXAtZGF0ZS1waWNrZXJgJ3MgaW5wdXQgKHRoZSBoaWRkZW4gb25lKS4gWW91IG1heQp3YW50IHRvIHVzZSBpdCBpbiBjYXNlIHlvdSBuZWVkIHRvIHRyYXZlcnNlIHNvbWVob3cgdGhlIERPTS4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYHN0cmluZ2AuCiAgKiBFeGFtcGxlOiBgImV4YW1wbGUtZGF0ZXBpY2tlciJgCgojIyMgYG5hbWVgCgpIVE1MIGBuYW1lYCBhdHRyaWJ1dGUgZm9yIHRoZSBgcmVhY3RzdHJhcC1kYXRlLXBpY2tlcmAncyBpbnB1dCAodGhlIGhpZGRlbiBvbmUpLiBZb3UgbWF5Cm5lZWQgdG8gdXNlIGl0IGRlcGVuZGluZyBvbiBob3cgeW91ciBoYW5kbGUgeW91ciBGb3Jtcy4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYHN0cmluZ2AuCiAgKiBFeGFtcGxlOiBgImRhdGUtZmllbGQiYAoKIyMjIGBkYXRlRm9ybWF0YAoKRGF0ZSBmb3JtYXQuIEFueSBjb21iaW5hdGlvbiBvZiBERCwgTU0sIFlZWVkgYW5kIHNlcGFyYXRvci4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYHN0cmluZ2AKICAqIEV4YW1wbGVzOiBgIk1NL0REL1lZWVkiYCwgYCJZWVlZL01NL0REImAsIGAiTU0tREQtWVlZWSJgLCBvciBgIkREIE1NIFlZWVkiYAoKIyMjIGBtaW5EYXRlYAoKSVNPIGRhdGUgc3RyaW5nIHRvIHNldCB0aGUgbG93ZXN0IGFsbG93YWJsZSBkYXRlIHZhbHVlLgoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgc3RyaW5nYAogICogRXhhbXBsZTogYCIyMDE2LTA1LTE5VDEyOjAwOjAwLjAwMFoiYAoKIyMjIGBtYXhEYXRlYAoKSVNPIGRhdGUgc3RyaW5nIHRvIHNldCB0aGUgaGlnaGVzdCBhbGxvd2FibGUgZGF0ZSB2YWx1ZS4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYHN0cmluZ2AKICAqIEV4YW1wbGU6IGAiMjAxNi0wNS0xOVQxMjowMDowMC4wMDBaImAKCiMjIyBgc2hvd0NsZWFyQnV0dG9uYAoKVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgY2xlYXJCdXR0b24KCiAgKiBPcHRpb25hbAogICogVHlwZTogYGJvb2xgCiAgKiBEZWZhdWx0OiBgZmFsc2VgCgojIyMgYGNsZWFyQnV0dG9uRWxlbWVudGAKCkNoYXJhY3RlciBvciBjb21wb25lbnQgdG8gdXNlIGZvciB0aGUgY2xlYXIgYnV0dG9uLgoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgc3RyaW5nYCBvciBgUmVhY3RDbGFzc2AKICAqIERlZmF1bHQ6IGAiw5ciYAo8L3A+Cgo8L2FydGljbGU+CjxhcnRpY2xlPgojIyBJbnB1dCBwcm9wZXJ0aWVzCjxwPgoKIyMjIGBhdXRvQ29tcGxldGVgCgpIaW50IGZvciBmb3JtIGF1dG9maWxsIGZlYXR1cmUuCgogICogT3B0aW9uYWwKICAqIFR5cGU6IGBzdHJpbmdgCiAgKiBEZWZhdWx0OiBgb25gCgojIyMgYGF1dG9Gb2N1c2AKCldoZXRoZXIgb3Igbm90IGNvbXBvbmVudCBzdGFydHMgd2l0aCBmb2N1cy4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYGJvb2xgCiAgKiBEZWZhdWx0OiBgZmFsc2VgCgojIyMgYGRpc2FibGVkYAoKV2hldGhlciBvciBub3QgY29tcG9uZW50IGlzIGRpc2FibGVkLgoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgYm9vbGAKICAqIERlZmF1bHQ6IGBmYWxzZWAKCiMjIyBgbm9WYWxpZGF0ZWAKCldoZW4gcHJlc2VudCwgaXQgc3BlY2lmaWVzIHRoYXQgdGhlIGZvcm0tZGF0YSAoaW5wdXQpIHNob3VsZCBub3QgYmUgdmFsaWRhdGVkIHdoZW4gc3VibWl0dGVkLgoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgYm9vbGAKICAqIERlZmF1bHQ6IGBmYWxzZWAKCiMjIyBgcGxhY2Vob2xkZXJgCgpUZXh0IHRoYXQgYXBwZWFycyBpbiB0aGUgZm9ybSBjb250cm9sIHdoZW4gaXQgaGFzIG5vIHZhbHVlIHNldC4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYHRleHRgCiAgKiBFeGFtcGxlOiBgSm9obiBEb2VgCgojIyMgYHJlcXVpcmVkYAoKYGJvb2xlYW5gLiBBIHZhbHVlIGlzIHJlcXVpcmVkIG9yIG11c3QgYmUgY2hlY2sgZm9yIHRoZSBmb3JtIHRvIGJlIHN1Ym1pdHRhYmxlCgogICogT3B0aW9uYWwKICAqIFR5cGU6IGBib29sZWFuYAogICogRGVmYXVsdDogYGZhbHNlYAoKIyMjIGBjbGFzc05hbWVgCgpDbGFzcyBuYW1lIHBhc3NlZCB0byB0aGUgRm9ybSBDb250cm9sIGlucHV0IGVsZW1lbnQuCgogICogT3B0aW9uYWwKICAqIFR5cGU6IGBzdHJpbmdgCiAgKiBFeGFtcGxlOiBgZXhhbXBsZS1jbGFzc2AKCiMjIyBgc3R5bGVgCgpTdHlsZSBvYmplY3QgcGFzc2VkIHRvIHRoZSBGb3JtIENvbnRyb2wgaW5wdXQgZWxlbWVudC4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYG9iamVjdGAKICAqIEV4YW1wbGU6IGB7d2lkdGg6ICIxMDAlIn1gCgojIyMgYGlucHV0UmVmYAoKQSBSZWFjdCByZWYgdG8gdGhlIEZvcm0gQ29udHJvbCBpbnB1dCBlbGVtZW50CgogICogT3B0aW9uYWwKICAqIFR5cGU6IGByZWZgCgojIyMgYGN1c3RvbUNvbnRyb2xgCgpPdmVyd3JpdGUgdGhlIGRlZmF1bHQgRm9ybSBDb250cm9sIGNvbXBvbmVudCB3aXRoIHlvdXIgb3duIGNvbXBvbmVudC4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYFJlYWN0LkNvbXBvbmVudGAKICAqIEV4YW1wbGU6IGA8Q3VzdG9tQ29udHJvbCAvPmAKCiMjIyBgY2hpbGRyZW5gCgpgY2hpbGRyZW5gIGVsZW1lbnRzIGZyb20gdGhlIEZvcm0gQ29udHJvbGAKCiAgKiBPcHRpb25hbAogICogVHlwZTogYFJlYWN0LkNvbXBvbmVudGAKPC9wPgoKPC9hcnRpY2xlPgo8YXJ0aWNsZT4KIyMgSW5wdXQgR3JvdXAgcHJvcGVydGllcwoKPHA+CgojIyMgYHNpemVgCgpTaXplIG9mIHRoZSBpbnB1dAoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgc3RyaW5nYAogICogRXhhbXBsZXM6IGBsZ2AsIGBzbWAsIC4uLgoKWW91IGNhbiBhbHNvIG92ZXJyaWRlIGl0IGNvbXBsZXRlbHkgYW5kIHBhc3MgeW91ciBvd24gY29tcG9uZW50OgoKIyMjIGB2YWxpZGAKCkFwcGxpZXMgdGhlIGBpcy12YWxpZGAgY2xhc3Mgd2hlbiBgdHJ1ZWAsIGRvZXMgbm90aGluZyB3aGVuIGBmYWxzZWAKCiAgKiBPcHRpb25hbAogICogVHlwZTogYGJvb2xgCiAgKiBFeGFtcGxlOiBgdHJ1ZWAKCiMjIyBgaW52YWxpZGAKCkFwcGxpZXMgdGhlIGBpcy1pbnZhbGlkYCBjbGFzcyB3aGVuIGB0cnVlYCwgZG9lcyBub3RoaW5nIHdoZW4gYGZhbHNlYAoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgYm9vbGAKICAqIEV4YW1wbGU6IGB0cnVlYCAgCgojIyMgYGN1c3RvbUlucHV0R3JvdXBgCgpPdmVyd3JpdGUgdGhlIGRlZmF1bHQgSW5wdXRHcm91cCBjb21wb25lbnQgd2l0aCB5b3VyIG93biBjb21wb25lbnQuCgogICogT3B0aW9uYWwKICAqIFR5cGU6IGBSZWFjdC5Db21wb25lbnRgCiAgKiBFeGFtcGxlOiBgPEN1c3RvbUlucHV0R3JvdXAgLz5gCjwvcD4KCjwvYXJ0aWNsZT4KPGFydGljbGU+CiMjIENhbGVuZGFyIHByb3BlcnRpZXMKCjxwPgoKIyMjIGBkYXlMYWJlbHNgCgpBcnJheSBvZiBkYXkgbmFtZXMgdG8gdXNlIGluIHRoZSBjYWxlbmRhci4gU3RhcnRpbmcgb24gU3VuZGF5LgoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgYXJyYXlgCiAgKiBEZWZhdWx0OiBgWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXWAKCiMjIyBgbW9udGhMYWJlbHNgCgpBcnJheSBvZiBtb250aCBuYW1lcyB0byB1c2UgaW4gdGhlIGNhbGVuZGFyLgoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgYXJyYXlgCiAgKiBEZWZhdWx0OiBgWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11gCgojIyMgYHdlZWtTdGFydHNPbmAKCk1ha2VzIHRoZSBjYWxlbmRhcidzIHdlZWsgdG8gc3RhcnQgb24gYSBzcGVjaWZpZWQgZGF5LiAwID0gU3VuZGF5LCAxID0gTW9uZGF5LCBldGMuCgogICogT3B0aW9uYWwKICAqIFR5cGU6IGBudW1iZXJgCiAgKiBFeGFtcGxlOiBgNGAKCiMjIyBgc2hvd1dlZWtzYAoKU2hvd3MgdGhlIG51bWJlciBvZiB0aGUgd2VlayBpbiB0aGUgY2FsZW5kYXIKCiAgKiBPcHRpb25hbAogICogVHlwZTogYGJvb2xgCiAgKiBEZWZhdWx0OiBgZmFsc2VgCgojIyMgYHBpY2tNb250aEVsZW1lbnRgCgpPcHRpb25hbCBjb21wb25lbnQgdG8gdXNlIGZvciB0aGUgY2FsZW5kYXIncyB5ZWFyIGFuZCBtb250aCBwaWNrZXJzLgoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgc3RyaW5nYCBvciBgUmVhY3RDbGFzc2AKICAqIERlZmF1bHQ6IGB1bmRlZmluZWRgCgpgcGlja01vbnRoRWxlbWVudCA9IHVuZGVmaW5lZGAgaXMgdGhlIHNhbWUgYXMgYHBpY2tNb250aEVsZW1lbnQgPSAibm9uZSJgLgoKIyMjIyBjdXN0b20gcGlja01vbnRoRWxlbWVudAoKWW91IGNhbiBwYXNzIGEgY3VzdG9tIGBSZWFjdGAgY29tcG9uZW50LCB3aGljaCB3aWxsIHJlY2VpdmUgdGhlc2UgcHJvcGVydGllczoKLSBgZGlzcGxheURhdGVgCi0gYG1pbkRhdGVgCi0gYG1heERhdGVgCi0gYG9uQ2hhbmdlTW9udGhgOiBhIGNhbGxiYWNrIHJlY2VpdmluZyBhbiBgaW50YCBwYXJhbWV0ZXIgKG1vbnRoIG51bWJlcikKLSBgb25DaGFuZ2VZZWFyYDogYSBjYWxsYmFjayByZWNlaXZpbmcgYW4gYGludGAgcGFyYW1ldGVyICh5ZWFyIG51bWJlcikKCk9uIHRoZSBbZGVtb10oaHR0cHM6Ly9naXRodWIuY29tL2FmaWFsYXBpcy9yZWFjdHN0cmFwLWRhdGUtcGlja2VyL2Jsb2IvbWFzdGVyL2RlbW8vc3JjL3NhbXBsZXMvUkRQQ3VzdG9tUGlja01vbnRoLmpzKQp5b3Ugd2lsbCBmaW5kIGEgc2ltcGxlIGN1c3RvbSBlbGVtZW50LiAKCiMjIyMgYGRlZmF1bHRgIHBpY2tNb250aEVsZW1lbnQKClRoZXJlIGlzIGEgcHJlZGVmaW5lZCBjb21wb25lbnQsIGNvbnNpc3Rpbmcgb2YgdHdvIHNpbXBsZSBgc2VsZWN0YCBlbGVtZW50cywKd2hpY2ggY2FuIGJlIHVzZWQgYnkgcGFzc2luZyBgcGlja01vbnRoRWxlbWVudCA9ICJkZWZhdWx0ImAuCgpJdCBoYXMgYSBzaW1wbGUgc3R5bGluZywgd2hpY2ggbWF5IG5vdCBmaXQgeW91ciBuZWVkcy4gTWF5YmUgeW91IGNhbiB0d2VhayBpdAp0aHJvdWdoIHRoZSBgY3NzYCBjbGFzc2VzIHVzZWQgYnkgYHJlYWN0c3RyYXAtZGF0ZS1waWNrZXJgOgoKYGBgaHRtbAogIDxkaXYgY2xhc3M9InJkcC1oZWFkZXIiPgogICAgPGRpdiBjbGFzcz0icmRwLWhlYWRlci1wcmV2aW91cy13cmFwcGVyIi8+CiAgICA8ZGl2IGNsYXNzPSJyZHAtaGVhZGVyLXBpY2stbW9udGgtd3JhcHBlciI+CiAgICAgIDwhLS0gaWYgcGlja01vbnRoRWxlbWVudCA9ICdkZWZhdWx0JyAtLT4KICAgICAgPGRpdiBjbGFzcz0icmRwLWhlYWRlci1waWNrLW1vbnRoLWRlZmF1bHQiPgogICAgICAgIDxkaXYgY2xhc3M9InJkcC1oZWFkZXItcGljay1tb250aC1kZWZhdWx0LW1vbnRoIi8+CiAgICAgICAgPGRpdiBjbGFzcz0icmRwLWhlYWRlci1waWNrLW1vbnRoLWRlZmF1bHQteWVhciIvPgogICAgICA8L2Rpdj4KICAgIDwvZGl2PgogICAgPGRpdiBjbGFzcz0icmRwLWhlYWRlci1uZXh0LXdyYXBwZXIiLz4KICA8L2Rpdj4KYGBgIAoKIyMjIGBwcmV2aW91c0J1dHRvbkVsZW1lbnRgCgpDaGFyYWN0ZXIgb3IgY29tcG9uZW50IHRvIHVzZSBmb3IgdGhlIGNhbGVuZGFyJ3MgcHJldmlvdXMgYnV0dG9uLgoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgc3RyaW5nYCBvciBgUmVhY3RDbGFzc2AKICAqIERlZmF1bHQ6IGAiPCJgCgojIyMgYG5leHRCdXR0b25FbGVtZW50YAoKQ2hhcmFjdGVyIG9yIGNvbXBvbmVudCB0byB1c2UgZm9yIHRoZSBjYWxlbmRhcidzIG5leHQgYnV0dG9uLgoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgc3RyaW5nYCBvciBgUmVhY3RDbGFzc2AKICAqIERlZmF1bHQ6IGAiPiJgCgojIyMgYHNob3dUb2RheUJ1dHRvbmAKClRvZ2dsZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHRvZGF5LWJ1dHRvbi4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYGJvb2xlYW5gCiAgKiBEZWZhdWx0OiBgZmFsc2VgCgojIyMgYHRvZGF5QnV0dG9uTGFiZWxgCgpMYWJlbCBmb3IgdGhlIHRvZGF5LWJ1dHRvbgoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgc3RyaW5nYAogICogRGVmYXVsdDogYCJUb2RheSJgCgojIyMgYGNlbGxQYWRkaW5nYAoKQ1NTIHBhZGRpbmcgdmFsdWUgZm9yIGNhbGVuZGFyIGRhdGUgY2VsbHMuCgogICogT3B0aW9uYWwKICAqIFR5cGU6IGBzdHJpbmdgCiAgKiBEZWZhdWx0OiBgIjVweCJgCgojIyMgYHJvdW5kZWRDb3JuZXJzYAoKQ1NTIGJvcmRlci1yYWRpdXMgdmFsdWUgZm9yIGNhbGVuZGFyIGRhdGUgY2VsbHMuCgogICogT3B0aW9uYWwKICAqIFR5cGU6IGBib29sYAogICogRGVmYXVsdDogYGZhbHNlYAoKIyMjIGBjYWxlbmRhclBsYWNlbWVudGAKCk92ZXJsYXkgcGxhY2VtZW50IGZvciB0aGUgcG9wb3ZlciBjYWxlbmRhci4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYHN0cmluZ2Agb3IgYGZ1bmN0aW9uYAogICogRGVmYXVsdDogYCJ0b3AiYAoKIyMjIGBjYWxlbmRhckNvbnRhaW5lcmAKCk92ZXJsYXkgY29udGFpbmVyIGZvciB0aGUgcG9wb3ZlciBjYWxlbmRhci4gV2hlbiBwbGFjaW5nIHRoZSBkYXRlLXBpY2tlciBpbiBhIHNjcm9sbGluZyBjb250YWluZXIsIHNldCB0aGlzIHByb3AgdG8gc29tZSBhbmNlc3RvciBvZiB0aGUgc2Nyb2xsaW5nIGNvbnRhaW5lci4KCiAgKiBPcHRpb25hbAogICogVHlwZTogQSBET00gZWxlbWVudCBvciBhIGNvbXBvbmVudAogICogRXhhbXBsZTogYGRvY3VtZW50LmJvZHlgCjwvcD4KCjwvYXJ0aWNsZT4KPGFydGljbGU+CiMjIEV2ZW50IHByb3BlcnRpZXMKPHA+CgojIyMgYG9uQ2hhbmdlYAoKQ2hhbmdlIGNhbGxiYWNrIGZ1bmN0aW9uLgoKICAqIE9wdGlvbmFsCiAgKiBUeXBlOiBgZnVuY3Rpb25gCiAgKiBDYWxsYmFjayBBcmd1bWVudHM6CiAgICAqIGB2YWx1ZWAgOiBJU08gZGF0ZSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBzZWxlY3RlZCB2YWx1ZS4KICAgICAgKiBUeXBlOiBgU3RyaW5nYAogICAgICAqIEV4YW1wbGU6IGAiMjAxNi0wNS0xOVQxMjowMDowMC4wMDBaImAKICAgICogYGZvcm1hdHRlZFZhbHVlYCA6IFN0cmluZyByZXByZXNlbnRpbmcgdGhlIGZvcm1hdHRlZCB2YWx1ZSBhcyBkZWZpbmVkIGJ5IHRoZSBgZGF0ZUZvcm1hdGAgcHJvcGVydHkuCiAgICAgICogVHlwZTogYFN0cmluZ2AKICAgICAgKiBFeGFtcGxlOiBgIjA1LzE5LzIwMTYiYAoKIyMjIGBvbkNsZWFyYAoKRGVmaW5lcyB3aGF0IGhhcHBlbnMgd2hlbiBjbGVhciBidXR0b24gaXMgY2xpY2tlZC4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYGZ1bmN0aW9uYAoKIyMjIGBvbkZvY3VzYAoKRm9jdXMgY2FsbGJhY2sgZnVuY3Rpb24uCgogICogT3B0aW9uYWwKICAqIFR5cGU6IGBmdW5jdGlvbmAKICAqIENhbGxiYWNrIEFyZ3VtZW50czoKICAgICogYGV2ZW50YCA6IEZvY3VzIGV2ZW50LgogICAgICAqIFR5cGU6IGBFdmVudGAKCiMjIyBgb25CbHVyYAoKQmx1ciBjYWxsYmFjayBmdW5jdGlvbi4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYGZ1bmN0aW9uYAogICogQ2FsbGJhY2sgQXJndW1lbnRzOgogICAgKiBgZXZlbnRgIDogQmx1ciBldmVudC4KICAgICAgKiBUeXBlOiBgRXZlbnRgCgojIyMgYG9uSW52YWxpZGAKCkRlZmluZXMgd2hhdCBoYXBwZW5zIHdoZW4gaW5wdXQgaGFzIG5vdCBwYXNzZWQgdGhlIGZvcm0gdmFsaWRhdGlvbi4KCiAgKiBPcHRpb25hbAogICogVHlwZTogYGZ1bmN0aW9uYAo8L3A+Cgo8L2FydGljbGU+Cjwvc2VjdGlvbj4KPHNlY3Rpb24+CiMgRGVlcGVyIGN1c3RvbWl6aW5nCgo8cD4KCllvdSBjYW4gYWxzbyBjdXN0b21pemUgYHJlYWN0c3RyYXAtZGF0ZS1waWNrZXJgIHVzaW5nIGBDU1NgLCB0cm91Z2ggZWxlbWVudCdzIGBpZGAgb3IgYGNsYXNzYCBhdHRyaWJ1dGVzLgoKYHJlYWN0c3RyYXAtZGF0ZS1waWNrZXJgIHJlbmRlcnMgc2V2ZXJhbCBlbGVtZW50cywgYWxsIGNvbnRhaW5lZCB3aXRoaW4gYSBbcmVhY3RzdHJhcCBJbnB1dEdyb3VwXShodHRwczovL3JlYWN0c3RyYXAuZ2l0aHViLmlvLz9wYXRoPS9kb2NzL2NvbXBvbmVudHMtaW5wdXRncm91cC0taW5wdXQtZ3JvdXApLgpTdWNoIGVsZW1lbnRzIHdpbGwgaGF2ZSBpdHMgdW5pcXVlIGBpZGAgYXR0cmlidXRlLCBwbHVzIGByZWFjdHN0cmFwLWRhdGUtcGlja2VyYCBjdXN0b20gYGNsYXNzYCBuYW1lcyAocHJlZml4ZWQgYnkgYHJkcC0qYCkuCgpUaGUgcmVuZGVyZWQgRE9NIHN0cnVjdHVyZSBzZWVtcyBsaWtlIHRoaXM6CgpgYGBodG1sCiAgPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgcmRwLWlucHV0LWdyb3VwIiBpZD0icmRwLWlucHV0LWdyb3VwLVNVRkZJWCI+CiAgICA8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCByZHAtZm9ybS1jb250cm9sIiBpZD0icHJvcHMuZm9ybUNvbnRyb2wuaWQgb3IgcmRwLWZvcm0tY29udHJvbC1TVUZGSVgiIC8+CiAgICA8ZGl2IGNsYXNzPSJyZHAtb3ZlcmxheSI+CiAgICAgIDxkaXY+CiAgICAgICAgPGRpdiBjbGFzcz0icmRwLXBvcG92ZXIiPgogICAgICAgICAgPGRpdiBjbGFzcz0icG9wb3ZlciI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9InBvcG92ZXItaW5uZXIiPgogICAgICAgICAgICAgIDxkaXYgY2xhc3M9InBvcG92ZXItaGVhZGVyIj4KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InJkcC1oZWFkZXIiPgogICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJyZHAtaGVhZGVyLXByZXZpb3VzLXdyYXBwZXIiLz4KICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icmRwLWhlYWRlci1waWNrLW1vbnRoLXdyYXBwZXIiPgogICAgICAgICAgICAgICAgICAgIDwhLS0gaWYgcGlja01vbnRoRWxlbWVudCA9ICdkZWZhdWx0JyAtLT4KICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJyZHAtaGVhZGVyLXBpY2stbW9udGgtZGVmYXVsdCI+CiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJyZHAtaGVhZGVyLXBpY2stbW9udGgtZGVmYXVsdC1tb250aCIvPgogICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icmRwLWhlYWRlci1waWNrLW1vbnRoLWRlZmF1bHQteWVhciIvPgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icmRwLWhlYWRlci1uZXh0LXdyYXBwZXIiLz4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgIDxkaXYgY2xhc3M9InBvcG92ZXItYm9keSI+CiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9InJkcC1jYWxlbmRhciI+CiAgICAgICAgICAgICAgICA8L3RhYmxlPgogICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPHNwYW4gY2xhc3M9ImFycm93Ij4KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KICAgIDwvZGl2PgogICAgPGlucHV0IGNsYXNzPSJyZHAtaGlkZGVuIiBpZD0icHJvcHMuaWQgb3IgcmRwLWhpZGRlbi1TVUZGSVgiIC8+CiAgICA8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IHJkcC1hZGRvbiI+CiAgICA8L2Rpdj4KICA8L2Rpdj4KYGBgCgpUaGlzIGBTVUZGSVhgIGlzOgoKLSBgcHJvcHMubmFtZWAKCi0gaWYgYHByb3BzLm5hbWVgIGlzIG5vdCBwYXNzZWQsIHRoZW4gdXNlIGBwcm9wcy5pZGAKCi0gaWYgYHByb3BzLmlkYCBpcyBub3QgcGFzc2VkLCB0aGVuIHRha2UgYSBnbG9iYWwgY291bnRlciBvZiBhY3RpdmUgYHJlYWN0c3RyYXAtZGF0ZS1waWNrZXJgIGluc3RhbmNlcwoKU28sIHRoZSBpZGVhIGlzLCBkZXBlbmRpbmcgb24geW91ciBuZWVkczoKCi0gaWYgeW91IGRvbid0IG5lZWQgaGFuZGxlIGBpZGBzIGF0IGFsbCwgYHJlYWN0c3RyYXAtZGF0ZS1waWNrZXJgIHdpbGwgcmVuZGVyIHVuaXF1ZSBgaWRgIHdpdGggbm8gcHJvYmxlbQoKLSBpZiB5b3UgbmVlZCBhIGJhc2ljIGBpZGAgdXNhZ2UsIGZvciBleGFtcGxlIGFjY2Vzc2luZyB0aGUgYHJlYWN0c3RyYXAtZGF0ZS1waWNrZXJgJ3MgdmFsdWUgZnJvbSB0aGUgRE9NLCB0aGVuIAogIHlvdSBqdXN0IGhhdmUgdG8gcGFzcyBgcHJvcHMuaWRgIGFuZCBnZXQgdGhlIHZhbHVlIGZyb20gdGhlIGVsZW1lbnQgd2l0aCB0aGF0IGBpZGAKCi0gaWYgeW91IHdpbGwgcGVyZm9ybSBtb3JlIGNvbXBsZXggb3BlcmF0aW9ucywgdGhlbiB1c2UgYHByb3BzLm5hbWVgIG9yIGBwcm9wcy5pZGAsIGFuZCBwYXkgYXR0ZW50aW9uIHRvIHRoZQogIHByZXZpb3VzIERPTSBzdHJ1Y3R1cmUgYW5kIHRoZSBgU1VGRklYYCBwcmVzZW5jZXMKPC9wPgoKPC9zZWN0aW9uPgo8c2VjdGlvbj4KIyBJbnNwZWN0IHRoaXMgcGFja2FnZQoKPGFydGljbGU+CiMjIERlbW8KCmBgYGJhc2gKCm5wbSBydW4gZGVtbwoKYGBgCgpBbmQgdmlzaXQgW2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMF0oaHR0cDovL2xvY2FsaG9zdDozMDEwKSBvbiB5b3VyIGJyb3dzZXIgCgo8L2FydGljbGU+CjxhcnRpY2xlPgojIyBSdW5uaW5nIFRlc3RzCgpgYGBiYXNoCgpucG0gcnVuIHRlc3QKCmBgYAoKPC9hcnRpY2xlPgo8L3NlY3Rpb24+CjxzZWN0aW9uPgojIENoYW5nZWxvZwoKT3JpZ2luYWxseSBiYXNlZCBvbiBbcmVhY3QtYm9vdHN0cmFwLWRhdGUtcGlja2VyXShodHRwczovL2dpdGh1Yi5jb20vcHVzaHRlbGwvcmVhY3QtYm9vdHN0cmFwLWRhdGUtcGlja2VyLyksCmByZWFjdHN0cmFwLWRhdGUtcGlja2VyYCBoYXMgZXZvbHZlZC4gRnJvbSB2MS4wIGl0IGhhcyBiZWVuIHJlZmFjdG9yZWQsIHVzaW5nIFJlYWN0IGhvb2tzLCAKd2l0aCBjbGVhbmVyIGNvZGUgYW5kIGFuIGltcHJvdmVkIGZpbmFsIHBlcmZvcm1hbmNlLgoKPHA+Cgo8YXJ0aWNsZT4KIyMgMS4wLjYKCi0gY2xlYW5lciByZWFkbWUKCjwvYXJ0aWNsZT4KPGFydGljbGU+CiMjIDEuMC41CgotIGZpeCB2YWxpZCBwcm9wcyBvbiBoaWRkZW4gaW5wdXQKCjwvYXJ0aWNsZT4KPGFydGljbGU+CiMjIDEuMC40CgotIGZpeCB3YXJuaW5nIG9uIGBwcm9wLXR5cGVzYAoKPC9hcnRpY2xlPgo8YXJ0aWNsZT4KIyMgMS4wLjMKCi0gQWRkZWQgW3BpY2tNb250aEVsZW1lbnRdKGh0dHBzOi8vZ2l0aHViLmNvbS9hZmlhbGFwaXMvcmVhY3RzdHJhcC1kYXRlLXBpY2tlci9pc3N1ZXMvMjIpCgo8L2FydGljbGU+CjxhcnRpY2xlPgojIyAxLjAuMgoKLSBGaXhlZCBbaXNzdWUgIzIwOiBJbi92YWxpZCBwcm9wcyBkb2Vzbid0IGFwcGx5IHRoZSByZWFjdHN0cmFwIGluL3ZhbGlkIGNzcyBzdHlsZV0oaHR0cHM6Ly9naXRodWIuY29tL2FmaWFsYXBpcy9yZWFjdHN0cmFwLWRhdGUtcGlja2VyL2lzc3Vlcy8yMCkKCjwvYXJ0aWNsZT4KPGFydGljbGU+CiMjIDEuMC4xCgotIEZpeGVkIFtpc3N1ZSAjMTk6IFJlZmVyZW5jZUVycm9yOiBFbGVtZW50IGlzIG5vdCBkZWZpbmVkXShodHRwczovL2dpdGh1Yi5jb20vYWZpYWxhcGlzL3JlYWN0c3RyYXAtZGF0ZS1waWNrZXIvaXNzdWVzLzE5KQoKPC9hcnRpY2xlPgo8YXJ0aWNsZT4KIyMgMS4wLjAKCi0gSW50cm9kdWN0aW9uIG9mIFJlYWN0IEhvb2tzCgotIERlZXAgcmVmYWN0b3Igb2YgdGhlIHNvdXJjZSBjb2RlCgotIFN1cHBvcnRlZCB2ZXJzaW9uczoKwrcgUmVhY3QgPj0gMTYuMTMuMQrCtyBSZWFjdHN0cmFwID49IDguNS4xCsK3IEJvb3RzdHJhcCA+PSA0LjUuMgoKLSBJbXByb3ZlZCBwZXJmb3JtYW5jZQoKLSBTbWFsbGVyIGJ1bmRsZSBzaXplcyAKCjwvYXJ0aWNsZT4KPGFydGljbGU+CiMjIDAuMC4xNgoKwrcgVmVyc2lvbiB0byB1c2UgaWYgeW91IHdhbm5hIGdvIFJlYWN0c3RyYXAgOQoKwrcgU3VwcG9ydGVkIHZlcnNpb25zOgotIFJlYWN0ID49IDE0Ci0gUmVhY3RzdHJhcCA5LjAuMQotIEJvb3RzdHJhcCA1LjEuMwoKPC9hcnRpY2xlPgo8YXJ0aWNsZT4KIyMgMC4wLjEyCgrCtyBGaXhlZCBbaXNzdWUgIzE1OiBwbGFjZWhvbGRlciB3aWxsIG5vdCBmYWxsYmFjayB0byBkYXRlRm9ybWF0XShodHRwczovL2dpdGh1Yi5jb20vYWZpYWxhcGlzL3JlYWN0c3RyYXAtZGF0ZS1waWNrZXIvaXNzdWVzLzE1KQoKwrcgRml4ZWQgW2lzc3VlICMxNi4gZG8gbm90IGFsbG93IGtleWJvYXJkIGlucHV0IG9mIGRhdGVzIG91dCBvZiBtaW5EYXRlL21heERhdGVdKGh0dHBzOi8vZ2l0aHViLmNvbS9hZmlhbGFwaXMvcmVhY3RzdHJhcC1kYXRlLXBpY2tlci9pc3N1ZXMvMTYpCgrCtyBTdXBwb3J0ZWQgdmVyc2lvbnM6Ci0gUmVhY3QgPj0gMTQKLSBSZWFjdHN0cmFwIDguNS4xCi0gQm9vdHN0cmFwIDQuNS4yCgo8L3A+Cg==")));
  var readmes = {
    "1.0.6": md_1_0_6
  };

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
    arreConfig: arreConfig,
    readmes: readmes
  })));

})(React, ReactDOM, ReactRouterDOM, MarkdownToJSX);
//# sourceMappingURL=bundle.js.map

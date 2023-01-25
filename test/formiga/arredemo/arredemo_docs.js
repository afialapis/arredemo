(function (React, ReactDOM, Markdown) {
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

  var WrapperP = function WrapperP(props) {
    return /*#__PURE__*/React__default["default"].createElement("div", props);
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
        },
        p: {
          component: WrapperP
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
    return /*#__PURE__*/React__default["default"].createElement(Page, {
      menu: menu,
      path: "docs"
    }, /*#__PURE__*/React__default["default"].createElement(DocsMd, {
      readme: readme
    }));
  };

  var AppDocs = function AppDocs(_ref) {
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
    }, /*#__PURE__*/React__default["default"].createElement(Docs, {
      readme: readme
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

  var css_248z = "/* css variables*/\n:root {\n  --font-size: 12pt;\n  --font-size-sm: 9pt;\n  --heading-color-l1: #432E30;\n  --heading-color-l2: #756060;\n  --heading-color-l3: #8E7474;\n  --accent-color: #DD356E;\n  --accent-color-light: #df608a;\n  --action-color: #DD356E;\n  --action-color-light: #df608a;\n  --link-color: #DD356E;\n  --link-color-light: #df608a;\n  --inline-code-color: #5e5656;\n  --white-color: #FAFBFC;\n  --header-bg-color: #F8F8FA;\n  --header-bg-color-secondary: #e4e4f7;\n  --code-bg-color: #f9f9f9;\n  --header-logo-width: 125px;\n  --header-logo-width-resp: 100px;\n  --header-grid-height: 4em;\n  --header-grid-height-resp: 3em;\n  --header-sub-height: 0;\n  --header-sub-height-resp: 2.5em;\n  --menu-width-web: 20em;\n  --menu-responsive-color: rgba(0, 0, 0, 1);\n  --border: 1px solid var(--header-bg-color); }\n\n/*\n@font-face {\n  font-family: \"Inconsolata\";\n  font-weight: normal;\n  src: url(../fonts/Inconsolata/Inconsolata-Regular.ttf) format(\"truetype\");\n}\n\n@font-face {\n  font-family: \"Inconsolata\";\n  font-weight: bold;\n  src: url(../fonts/Inconsolata/Inconsolata-Bold.ttf) format(\"truetype\");\n}\n*/\nbody.arredemo * {\n  box-sizing: border-box; }\n\n/* normalized */\nbody.arredemo {\n  padding: 0;\n  margin: 0;\n  font-family: 'Inconsolata', Arial, sans-serif;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 1.5em;\n  background-color: white; }\n  body.arredemo h1 {\n    font-size: 2em;\n    color: var(--heading-color-l1); }\n  body.arredemo h2 {\n    font-size: 1.5em;\n    color: var(--heading-color-l2); }\n  body.arredemo h3 {\n    font-size: 1.25em;\n    color: var(--heading-color-l3); }\n  body.arredemo hr {\n    padding: 1rem 0;\n    border: 0;\n    border-bottom: 1px solid var(--bg-color); }\n  body.arredemo a,\n  body.arredemo .link {\n    color: var(--link-color);\n    text-decoration: underline;\n    text-decoration-color: var(--link-color);\n    -webkit-transition: opacity 0.5s ease-in-out;\n    -moz-transition: opacity 0.5s ease-in-out;\n    -ms-transition: opacity 0.5s ease-in-out;\n    -o-transition: opacity 0.5s ease-in-out;\n    transition: opacity 0.5s ease-in-out;\n    opacity: 1;\n    cursor: pointer; }\n    body.arredemo a:hover,\n    body.arredemo .link:hover {\n      opacity: 0.5; }\n    body.arredemo a img,\n    body.arredemo .link img {\n      position: relative;\n      vertical-align: middle; }\n    body.arredemo a img + span,\n    body.arredemo .link img + span {\n      margin-left: 0.5em; }\n  body.arredemo .package-name {\n    font-weight: 600;\n    color: var(--accent-color); }\n\nbody.arredemo {\n  /* inline code sections */ }\n  body.arredemo pre {\n    display: block;\n    padding: 1.5em 1em !important;\n    border: 1px solid #bebab0;\n    overflow-x: auto; }\n  body.arredemo code {\n    color: var(--inline-code-color);\n    text-decoration-color: var(--inline-code-color);\n    word-wrap: break-word;\n    font-family: \"Liberation Mono\",\"Courier New\",monospace; }\n  body.arredemo pre.prettyprint {\n    background-color: var(--code-bg-color); }\n    body.arredemo pre.prettyprint code {\n      line-height: 1em;\n      font-size: 10pt; }\n  body.arredemo a :has(code),\n  body.arredemo .link:has(code) {\n    color: var(--inline-code-color);\n    text-decoration-color: var(--inline-code-color); }\n\nbody.arredemo *,\nbody.arredemo *::before,\nbody.arredemo *::after {\n  box-sizing: border-box; }\n\n:root {\n  --select-border: #777;\n  --select-focus: blue;\n  --select-arrow: var(--select-border); }\n\nbody.arredemo {\n  /*\n  label {\n    font-size: 1.125rem;\n    font-weight: 500;\n  }\n  */ }\n  body.arredemo select {\n    appearance: none;\n    background-color: transparent;\n    border: none;\n    padding: 0 1em 0 0;\n    margin: 0;\n    width: 100%;\n    z-index: 1;\n    outline: none; }\n    body.arredemo select::-ms-expand {\n      display: none; }\n  body.arredemo .select {\n    display: grid;\n    grid-template-areas: \"select\";\n    align-items: center;\n    position: relative;\n    min-width: 15ch;\n    max-width: 30ch;\n    border: 1px solid var(--select-border);\n    border-radius: 0.25em;\n    padding: 0.25em 0.5em;\n    cursor: pointer;\n    background-color: #fff;\n    background-image: linear-gradient(to top, #f9f9f9, #fff 33%); }\n    body.arredemo .select select, body.arredemo .select::after {\n      grid-area: select; }\n    body.arredemo .select:not(.select--multiple)::after {\n      content: \"\";\n      justify-self: end;\n      width: 0.8em;\n      height: 0.5em;\n      background-color: var(--select-arrow);\n      clip-path: polygon(100% 0%, 0 0%, 50% 100%); }\n  body.arredemo select:focus + .focus {\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    right: -1px;\n    bottom: -1px;\n    border: 2px solid var(--select-focus);\n    border-radius: inherit; }\n  body.arredemo select[multiple] {\n    padding-right: 0;\n    /*\n    * Safari will not reveal an option\n    * unless the select height has room to \n    * show all of it\n    * Firefox and Chrome allow showing \n    * a partial option\n    */\n    height: 6rem;\n    /* \n    * Experimental - styling of selected options\n    * in the multiselect\n    * Not supported crossbrowser\n    */ }\n    body.arredemo select[multiple] option {\n      white-space: normal;\n      outline-color: var(--select-focus); }\n  body.arredemo .select--disabled {\n    cursor: not-allowed;\n    background-color: #eee;\n    background-image: linear-gradient(to top, #ddd, #eee 33%); }\n  body.arredemo .select + label {\n    margin-top: 2rem; }\n\n/* buttons */\nbody.arredemo .button--primary {\n  padding: 10px 22px;\n  background-color: var(--action-color);\n  color: white;\n  position: relative;\n  text-decoration: none;\n  border: 0;\n  transition: all .3s ease-out; }\n\nbody.arredemo .button--primary:after {\n  position: absolute;\n  content: \"\";\n  width: 1rem;\n  height: 1rem;\n  background-color: var(--action-color-light);\n  right: -0.4rem;\n  top: -0.4rem;\n  transition: all 0.3s ease-out; }\n\nbody.arredemo .button--primary:hover {\n  text-shadow: 0px 1px 1px var(--action-color-light);\n  color: white;\n  transform: translate3D(0, -3px, 0); }\n\nbody.arredemo .button--primary:hover::after {\n  transform: rotate(90deg); }\n\nbody.arredemo .button--secondary {\n  padding: 10px 22px;\n  border: 2px solid var(--action-color);\n  transition: all 0.5s ease-out; }\n\nbody.arredemo .button--secondary:hover {\n  border-color: var(--action-color);\n  color: var(--action-color); }\n\ndiv.toggler {\n  text-align: right;\n  padding-top: 0.5em;\n  padding-right: 1em;\n  cursor: pointer;\n  display: none; }\n  @media screen and (max-width: 600px) {\n    div.toggler {\n      display: block; } }\n  div.toggler .toggle {\n    position: relative; }\n  div.toggler .toggle span,\n  div.toggler .toggle span:before,\n  div.toggler .toggle span:after {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 18px;\n    border-radius: 2px;\n    background: var(--action-color);\n    display: block;\n    cursor: pointer;\n    transition: all 0.3s ease-in-out;\n    right: 0; }\n  div.toggler .toggle span:before {\n    top: -6px; }\n  div.toggler .toggle span:after {\n    bottom: -6px; }\n  div.toggler .toggle.open span {\n    background-color: transparent; }\n  div.toggler .toggle.open span:before,\n  div.toggler .toggle.open span:after {\n    top: 0; }\n  div.toggler .toggle.open span:before {\n    transform: rotate(45deg); }\n  div.toggler .toggle.open span:after {\n    transform: rotate(-45deg); }\n\ndiv.body {\n  position: relative;\n  margin-top: calc(var(--header-grid-height) + 1em);\n  width: 100%;\n  padding: 0 2em; }\n  @media screen and (max-width: 600px) {\n    div.body {\n      margin-top: calc(var(--header-grid-height-resp) + 1em);\n      padding: 0 1em; } }\n  div.body.with-menu div.content {\n    margin-left: var(--menu-width-web); }\n    @media screen and (max-width: 600px) {\n      div.body.with-menu div.content {\n        margin-left: 0; } }\n\nnav.header {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 2;\n  background-color: var(--header-bg-color); }\n  @media screen and (min-width: 600px) {\n    nav.header {\n      padding-left: 4em;\n      padding-right: 4em; } }\n  nav.header .grid {\n    display: grid;\n    grid-template-columns: var(--header-logo-width) auto 0%;\n    padding: 1em 0;\n    height: var(--header-grid-height);\n    background-repeat: no-repeat;\n    background-size: auto 100%; }\n    @media screen and (max-width: 600px) {\n      nav.header .grid {\n        grid-template-columns: var(--header-logo-width-resp) auto 20%;\n        height: var(--header-grid-height-resp); } }\n    nav.header .grid div.logo img {\n      max-height: 100%; }\n      @media screen and (max-width: 600px) {\n        nav.header .grid div.logo img {\n          width: 100px;\n          margin-left: 0.5em; } }\n    @media screen and (max-width: 600px) {\n      nav.header .grid div.toolbar .link.github span {\n        display: none; } }\n    nav.header .grid div.toolbar a {\n      text-decoration: none; }\n      nav.header .grid div.toolbar a.light {\n        color: var(--action-color-light);\n        text-decoration-color: var(--action-color-light);\n        font-weight: lighter; }\n      nav.header .grid div.toolbar a.dark {\n        color: var(--action-color);\n        text-decoration-color: var(--action-color);\n        font-weight: bolder; }\n      nav.header .grid div.toolbar a:not(:last-child) {\n        padding-right: 1em; }\n        @media screen and (max-width: 600px) {\n          nav.header .grid div.toolbar a:not(:last-child) {\n            padding-right: 0.5em; } }\n      nav.header .grid div.toolbar a img {\n        width: 1em;\n        top: -0.05em; }\n  nav.header .grid div.toolbar {\n    text-align: right; }\n    @media screen and (max-width: 600px) {\n      nav.header .grid div.toolbar {\n        text-align: center; } }\n\n.menu-container {\n  position: fixed;\n  left: 0;\n  width: var(--menu-width-web);\n  padding-left: 1em;\n  top: calc(var(--header-grid-height) + 1em);\n  height: calc(100% - calc(var(--header-grid-height) + 1em));\n  overflow: hidden;\n  /*\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto auto;\n  grid-gap: 1em;\n  justify-content: center;\n  \n  flex-grow: 1;\n  display: flex;\n  */\n  /*\n\n  @media screen and (max-width: 600px) {\n    position: fixed;\n    top: var(--header-grid-height-resp);\n    left: 0;\n    display: block;\n    width: 100%;\n\n    background-color: var(--header-bg-color);\n    padding: 1rem;\n  }\n  */\n  border-right: var(--border); }\n  @media screen and (max-width: 600px) {\n    .menu-container {\n      display: none; }\n      .menu-container.responsive-open {\n        display: block;\n        width: 100%;\n        padding: 1em;\n        overflow: auto;\n        background-color: var(--menu-responsive-color);\n        float: left;\n        top: 0;\n        z-index: 2; } }\n  .menu-container .switcher {\n    height: 2em; }\n  .menu-container .menu {\n    height: calc(100% - 2.25em);\n    overflow-y: auto; }\n    .menu-container .menu ul {\n      overflow-y: auto;\n      list-style: none;\n      padding-left: 0.5em;\n      text-align: left; }\n      .menu-container .menu ul li {\n        padding: 0.5em 0 0 0;\n        font-weight: 300; }\n      .menu-container .menu ul li.level-1 {\n        font-weight: bold; }\n        .menu-container .menu ul li.level-1 a, .menu-container .menu ul li.level-1 .link {\n          color: var(--heading-color-l1); }\n      .menu-container .menu ul li.level-2 {\n        padding-left: 1.5em; }\n        .menu-container .menu ul li.level-2 a, .menu-container .menu ul li.level-2 .link {\n          color: var(--heading-color-l2); }\n      .menu-container .menu ul li.level-3 {\n        padding-left: 3em; }\n        .menu-container .menu ul li.level-3 a, .menu-container .menu ul li.level-3 .link {\n          color: var(--heading-color-l3); }\n      .menu-container .menu ul li a,\n      .menu-container .menu ul li .link {\n        text-decoration: none; }\n      .menu-container .menu ul .selected {\n        position: relative; }\n      .menu-container .menu ul .selected a {\n        color: var(--accent-color); }\n      .menu-container .menu ul .selected:after {\n        position: absolute;\n        content: \"\";\n        width: 0.1rem;\n        height: 75%;\n        background-color: var(--accent-color);\n        left: -0.5rem;\n        top: 0.25rem; }\n\nfooter {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  font-size: var(--font-size-sm);\n  border-top: var(--border);\n  padding: 1.5em;\n  text-align: center;\n  z-index: 2; }\n  footer .badges {\n    text-align: left; }\n    footer .badges span.badge {\n      padding-top: 0.5em;\n      padding-right: 1em; }\n      @media screen and (max-width: 600px) {\n        footer .badges span.badge {\n          display: inline-block;\n          padding-top: 0; } }\n  footer .license {\n    text-align: right; }\n  footer a {\n    color: white;\n    text-decoration: underline; }\n  @media screen and (max-width: 600px) {\n    footer {\n      display: block; }\n      footer .badges {\n        text-align: center; }\n      footer .license {\n        text-align: center;\n        margin-top: 1em; } }\n";
  styleInject(css_248z);

  var pkgPath = '/home/lapis/repos/gh/arredemo/test/formiga';
  var pkgJson = JSON.parse("\n  {\n  \"name\": \"formiga\",\n  \"version\": \"0.1.2\",\n  \"description\": \"The simplest -yet effective- form validator for React\",\n  \"keywords\": [\n    \"js\",\n    \"react\",\n    \"form\",\n    \"validation\"\n  ],\n  \"author\": \"Donato Lorenzo <donato@afialapis.com>\",\n  \"contributors\": [\n    \"Donato Lorenzo <donato@afialapis.com>\"\n  ],\n  \"license\": \"MIT\",\n  \"repository\": {\n    \"type\": \"git\",\n    \"url\": \"https://github.com/afialapis/formiga.git\"\n  },\n  \"bugs\": {\n    \"url\": \"https://github.com/afialapis/formiga/issues\"\n  },\n  \"homepage\": \"https://formiga.afialapis.com/\",\n  \"files\": [\n    \"lib\",\n    \"dist\",\n    \"logo\",\n    \"docaine.json\",\n    \"formiga.png\"\n  ],\n  \"type\": \"module\",\n  \"main\": \"./lib/index.cjs\",\n  \"cjs\": \"./dist/formiga.cjs\",\n  \"browser\": \"./dist/formiga.umd.js\",\n  \"module\": \"./dist/formiga.mjs\",\n  \"exports\": {\n    \"import\": \"./dist/formiga.mjs\",\n    \"default\": \"./lib/index.cjs\",\n    \"require\": \"./dist/formiga.cjs\"\n  },\n  \"scripts\": {\n    \"clean-demo\": \"rm -rf demo/dist\",\n    \"clean-lib\": \"rm -rf lib && mkdir lib\",\n    \"clean-dist\": \"rm -rf dist && mkdir dist\",\n    \"lint\": \"npx xeira lint\",\n    \"test\": \"npx xeira test ./test/before.mjs ./test/units/*.cjs\",\n    \"lib\": \"npm run --silent clean-lib && npx xeira transpile\",\n    \"dist\": \"npm run --silent clean-dist && npx xeira bundle\",\n    \"prepare\": \"npm run --silent clean-demo && npm run --silent lint && npm run --silent test && npm run --silent lib && npm run --silent dist\",\n    \"demo\": \"npm run --silent clean-demo && npx xeira demo\",\n    \"reset\": \"npm run --silent arredemo-clean && npm run --silent clean-demo && npm run --silent clean-lib && npm run --silent clean-dist && rm -fr node_modules package-lock.json && npm i\",\n    \"arredemo-clean\": \"rm -fr arredemo\",\n    \"arredemo-build\": \"npm run arredemo-clean && npx arredemo build\"\n  },\n  \"devDependencies\": {\n    \"arredemo\": \"file:../../\",\n    \"xeira\": \"^0.0.26\"\n  },\n  \"dependencies\": {\n    \"react\": \">=16.13.1\"\n  },\n  \"peerDependencies\": {\n    \"react\": \">=16.13.1\"\n  },\n  \"babel\": {\n    \"extends\": \"./node_modules/xeira/configs/babel.react.cjs\"\n  },\n  \"eslintConfig\": {\n    \"extends\": [\n      \"./node_modules/xeira/configs/eslint.react.cjs\"\n    ]\n  }\n}\n");
  var arreConfig = JSON.parse("\n{\n  \"theme\": \"default\",\n  \"favicon\": \"logo/favicon/formiga.ico\",\n  \"logo\": \"logo/formiga.png\",\n  \"company\": \"Afialapis\",\n  \"url\": \"formiga.afialapis.com\",\n  \"doc_versions\": [\n    \"0.1.2\"\n  ],\n  \"md\": {\n    \"keep_summary_content\": false\n  },\n  \"demo_entry\": \"demo/src/Demo.js\"\n}\n");
  var md_0_1_2 = decodeURIComponent(escape(window.atob("PHNlY3Rpb24+CiMgZm9ybWlnYQoKClRoZSBzaW1wbGVzdCAteWV0IGVmZmVjdGl2ZS0gZm9ybSB2YWxpZGF0b3IgZm9yIFJlYWN0OiBzdGljayB0byAtYW5kIGVtcG93ZXItIHdlYiBzdGFuZGFyZHMgKFtIVE1MNSBDb25zdHJhaW50IFZhbGlkYXRpb24gQVBJXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ29uc3RyYWludF92YWxpZGF0aW9uKSkgaW5zdGVhZCBvZiBpZ25vcmUgdGhlbS4gCgo8L3NlY3Rpb24+CjxzZWN0aW9uPgojIFRhYmxlIG9mIENvbnRlbnRzCgoxLiBbSW50cm9dKCNpbnRybykKMi4gW1ByZW1hdHVyZSBWYWxpZGF0aW9uXSgjcHJlbWF0dXJlLXZhbGlkYXRpb24pCjMuIFtVSSBpbnRlZ3JhdGlvbnNdKCN1aS1pbnRlZ3JhdGlvbnMpCjQuIFtEZW1vXSgjZGVtbykKNS4gW0luc3RhbGxdKCNpbnN0YWxsKQo2LiBbR2V0dGluZyBzdGFydGVkXSgjZ2V0dGluZy1zdGFydGVkKQo3LiBbRG9jc10oI2RvY3MpCgo8L3NlY3Rpb24+CjxzZWN0aW9uPgojIEludHJvCgpgZm9ybWlnYWAgYWltcyB0byBwcm92aWRlIGZ1bGwgYDxmb3JtPmAgc3RhdGUgYW5kIHZhbGlkYXRpb24gZnVuY3Rpb25hbGl0aWVzIHdpdGg6CgotIG5vIGRlcGVuZGVuY2llcwotIG5vIGJvaWxlcnBsYXRlOiAKICAtIG5vIHdyYXBwaW5nIGNvbXBvbmVudHMsIGp1c3QgdXNlIHN0YW5kYXJkIGA8Zm9ybT5gLCBgPGlucHV0PmAsIGA8dGV4dGFyZWE+YCBhbmQgYDxzZWxlY3Q+YCBgSFRNTGAgZWxlbWVudHMKICAtIG5vIEFQSSB0byBsZWFybjoganVzdCBhIGNvdXBsZSBvZiBob29rcyBgdXNlRm9ybWAgYW5kIGB1c2VJbnB1dGAKLSBIVE1MIHZhbGlkYXRpb24gYXQgb3VyIHNlcnZpY2UKICAtIG5vIG92ZXItY29kZWQgdmFsaWRhdGlvbiBsb2dpY3MKICAtIGp1c3Qgc3RpY2sgdG8gc3RhbmRhcmQgW19IVE1MNSBDb25zdHJhaW50IFZhbGlkYXRpb24gQVBJX10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NvbnN0cmFpbnRfdmFsaWRhdGlvbikKICAtIHZhbGlkYXRlIHlvdXIgaW5wdXQgdGhyb3VnaCBzdGFuZGFyZCBhdHRyaWJ1dGVzIFsoYHJlcXVpcmVkYCwgYG1pbkxlbmd0aGAsIGBtYXhMZW5ndGhgLCBgcGF0dGVybmAsIC4uLildKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0d1aWRlL0hUTUwvSFRNTDUvQ29uc3RyYWludF92YWxpZGF0aW9uKQogIC0gZXh0ZW5kIGl0IHdpdGggYSBmZXcgYmFzaWMgdmFsaWRhdGlvbnMgdGhhdCBIVE1MIGRvZXMgbm90IHByb3ZpZGUgKGBhbGxvd2VkVmFsdWVzYCwgYGRpc2FsbG93ZWRWYWx1ZXNgLCBgZG9SZXBlYXRgLCBgZG9Ob3RSZXBlYXRgICxgY2hlY2tWYWx1ZWApLCB3aGlsZSBrZWVwaW5nIGluIHN5bmMgdGhlIGVsZW1lbnQncyBbVmFsaWRpdHlTdGF0ZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1ZhbGlkaXR5U3RhdGUpCiAgLSBlbXBvd2VyIGl0IHdpdGggW2BwcmVtYXR1cmVWYWxpZGF0aW9uYF0oI3ByZW1hdHVyZS12YWxpZGF0aW9uKQoKPC9zZWN0aW9uPgo8c2VjdGlvbj4KIyBQcmVtYXR1cmUgVmFsaWRhdGlvbgoKW19IVE1MNSBDb25zdHJhaW50IFZhbGlkYXRpb24gQVBJX10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NvbnN0cmFpbnRfdmFsaWRhdGlvbikgY2hlY2tzIGZvciB2YWxpZGl0eSBjaGFuZ2VzIHdoZW4gdGhlIGlucHV0IGNoYW5nZXMuIERlcGVuZGluZyBvbiB0aGUgYnJvd3NlciwgaXQgbWF5IG1lYW46IHdoZW4gdGhlIGlucHV0J3MgdmFsdWUgY2hhbmdlcyBvciBqdXN0IHdoZW4gdGhlIGlucHV0IGxvc2VzIHRoZSBmb2N1cy4KCkZvcm1pZ2EgaXMgaGVyZSB0byBtYWtlIHlvdXIgRm9ybXMgbXVjaCBuaWNlcjogd2l0aCBbYHByZW1hdHVyZVZhbGlkYXRpb25gXSgjcHJlbWF0dXJlLXZhbGlkYXRpb24pLCB0aGUgW1ZhbGlkaXR5U3RhdGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9WYWxpZGl0eVN0YXRlKSBpcyB1cGRhdGVkICphbHdheXMqIHdoaWxlIHR5cGluZyEKCjwvc2VjdGlvbj4KPHNlY3Rpb24+CiMgVUkgaW50ZWdyYXRpb25zCgpgZm9ybWlnYWAgY2FyZXMganVzdCBhYm91dCBzdGF0ZSBhbmQgdmFsaWRhdGlvbiBvZiB5b3VyIGZvcm1zLiBVSSBhbmQgc3R5bGluZyBpcyBvdXQgb2Ygc2NvcGUuIFRoYXQncyB3aHkgeW91IHdpbGwgcHJvYmFibHkgbm90IHVzZSBgZm9ybWlnYWAgZGlyZWN0bHksIGJ1dCBzb21lIG9mIHRoZSBpbnRlZ3JhdGlvbnMgd2l0aCBzb21lIFVJIGxpYnJhcnkuIExpc3QgaXMgdGlueSB5ZXQ6CgrCtyBbZm9ybWlnYS1yZWFjdHN0cmFwXShodHRwczovL2dpdGh1Yi5jb20vYWZpYWxhcGlzL2Zvcm1pZ2EtcmVhY3RzdHJhcCkKCkdpdmVuIGBmb3JtaWdhYCB3b3JrcyB3aXRoIG5hdGl2ZSBIVE1MIGVsZW1lbnRzIChgPGZvcm0+YCwgYDxpbnB1dD5gLCBgPHRleHRhcmVhPmAsIGA8c2VsZWN0PmApLCB5b3Ugd2lsbCBmaW5kIHByZXR0eSBlYXN5IHRvIGNvdXBsZSBpdCB3aXRoIGFueSBVSSBsaWJyYXJ5LiBPciBldmVuIGp1c3Qgd2l0aCBzb21lIGN1c3RvbSBgQ1NTYCBpZiB5b3UgZ28gbWluaW1hbGlzdCwgYXMgaW4gb3VyIFtEZW1vXSgjZGVtbykuIAoKPC9zZWN0aW9uPgo8c2VjdGlvbj4KIyBEZW1vCgpDaGVjayBhIGxpdmUgZGVtbyBhdCBbZm9ybWlnYS5hZmlhbGFwaXMuY29tXShodHRwczovL2Zvcm1pZ2EuYWZpYWxhcGlzLmNvbSkuCgpPciBydW4gaXQgbG9jYWxseSB3aXRoOgoKYGBgCiAgbnBtIHJ1biBkZW1vCmBgYCAKCjwvc2VjdGlvbj4KPHNlY3Rpb24+CiMgSW5zdGFsbAoKYGBgCiAgbnBtIGkgZm9ybWlnYQpgYGAKCjwvc2VjdGlvbj4KPHNlY3Rpb24+CiMgR2V0dGluZyBzdGFydGVkIAoKRm9ybWlnYSBwcm92aWRlcyBqdXN0IHR3byBob29rczogYHVzZUZvcm1gIGFuZCBgdXNlSW5wdXRgLgoKYFZGb3JtYCB3aWxsIGJlIHRoZSBwYXJlbnQgZWxlbWVudC4gSXQganVzdCByZW5kZXJzIGEgYGZvcm1gIGVsZW1lbnQsIGFuZCBwcm92aWRlIGEgY291cGxlIG9mIHJlbmRlciBwcm9wcyAoYHJlbmRlcklucHV0c2AgYW5kIGByZW5kZXJCdXR0b25zYCkgc28geW91IGNhbiByZW5kZXIgdGhlIHJlc3QuCgpUaGVuLCBhbnkgaW5wdXQgaW5zaWRlIHRoZSBGb3JtIHRoYXQgeW91IHdhbnQgdG8gYmUgdmFsaWRhdGVkLCBtdXN0IGJlIHdyYXBwZWQgd2l0aGluIGEgYFZJbnB1dGAgZWxlbWVudC4KCjxhcnRpY2xlPgojIyBCYXNpYyBleGFtcGxlCgpMZXQncyBjaGVjayBhIGJhc2ljIGV4YW1wbGUgKFt0cnkgaXQgYXQgQ29kZVBlbl0oaHR0cHM6Ly9jb2RlcGVuLmlvL2FmaWFsYXBpcy9wZW4vS0t3Z05XSykpOiAKCmBgYGphdmFzY3JpcHQKaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JwoKY29uc3QgRm9ybWlnYUZvcm0gPSAoKSA9PiB7CgogIGNvbnN0IFtmb3JtUmVmLCB2YWxpZCwgZm9ybUVsZW1lbnRzXSA9IHVzZUZvcm0oKQogIGNvbnN0IFtuYW1lLCBzZXROYW1lXT0gdXNlU3RhdGUoJ0pvaG4gRG9lJykKICBjb25zdCBbYWdlLCBfc2V0QWdlXT0gdXNlU3RhdGUoJzMzJykgCgogIGNvbnN0IFtuYW1lUmVmLCBuYW1lVmFsaWRpdHldID0gdXNlSW5wdXQoewogICAgdHlwZTogJ3RleHQnLAogICAgZGlzYWxsb3dlZFZhbHVlczogWyJKb2huIE5vdCBEb2UiXSwKICAgIGlucHV0RmlsdGVyOiAnbGF0aW4nCiAgfSkKICBjb25zdCBbYWdlUmVmLCBhZ2VWYWxpZGl0eV0gPSB1c2VJbnB1dCh7CiAgICB0eXBlOiAndGV4dCcsCiAgICBjaGVja1ZhbHVlOiAodikgPT4gIWlzTmFOKHYpICYmIHBhcnNlSW50KHYpPj0xOCwKICAgIGlucHV0RmlsdGVyOiAnaW50JwogIH0pIAoKICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7CiAgICBsZXQgcmVzdW1lPSAnJwoKICAgIE9iamVjdC5rZXlzKGZvcm1FbGVtZW50cykKICAgICAgLm1hcCgobmFtZSkgPT4gewogICAgICAgIGNvbnN0IGVsPSBmb3JtRWxlbWVudHNbbmFtZV0KICAgICAgICByZXN1bWUrPSBgSW5wdXQgJHtlbC5uYW1lfSAke2VsLnZhbGlkID8gJ2lzJyA6ICdpcyBub3QnfSB2YWxpZFxuYAogICAgICB9KQoKICAgIGNvbnNvbGUubG9nKHJlc3VtZSkKICAgIC8vCiAgICAvLyBJbnB1dCBuYW1lIGlzIHZhbGlkCiAgICAvLyBJbnB1dCBhZ2UgaXMgdmFsaWQKICB9IAoKICByZXR1cm4gKCAgCgogICAgPGZvcm0gcmVmID0ge2Zvcm1SZWZ9PgogICAgICAgIAogICAgICB7LyogQSBjb250cm9sbGVkIGlucHV0ICovfQogICAgICA8aW5wdXQgcmVmICAgICAgID0ge25hbWVSZWZ9CiAgICAgICAgICAgICBuYW1lICAgICAgPSB7J25hbWUnfQogICAgICAgICAgICAgY2xhc3NOYW1lID0ge25hbWVWYWxpZGl0eS52YWxpZCA/ICd2YWxpZCcgOiAnaW52YWxpZCd9CiAgICAgICAgICAgICByZXF1aXJlZCAgPSB7dHJ1ZX0KICAgICAgICAgICAgIHZhbHVlICAgICA9IHtuYW1lfQogICAgICAgICAgICAgb25DaGFuZ2UgID0geyhldmVudCkgPT4gc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpfS8+CgogICAgICB7LyogQW4gdW5jb250cm9sbGVkIGlucHV0ICovfQogICAgICA8aW5wdXQgcmVmICAgICAgID0ge2FnZVJlZn0KICAgICAgICAgICAgIG5hbWUgICAgICA9IHsnYWdlJ30KICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHthZ2VWYWxpZGl0eS52YWxpZCA/ICd2YWxpZCcgOiAnaW52YWxpZCd9CiAgICAgICAgICAgICByZXF1aXJlZCAgPSB7dHJ1ZX0KICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IHthZ2V9Lz4gCgogICAgICA8YnV0dG9uCiAgICAgICAgICAgICBvbkNsaWNrICA9eyhfZXYpID0+IGhhbmRsZVN1Ym1pdCgpfQogICAgICAgICAgICAgZGlzYWJsZWQgPSB7ISB2YWxpZH0+CiAgICAgICAgU2F2ZQogICAgICA8L2J1dHRvbj4KCiAgICA8L2Zvcm0+CgogICkKfSAgICAgICAgICAKCmBgYAoKPC9hcnRpY2xlPgo8L3NlY3Rpb24+CjxzZWN0aW9uPgojIERvY3MKCkZvciBjb21wbGV0ZSBkb2NzLCBjaGVjayBbZm9ybWlnYS5hZmlhbGFwaXMuY29tXShodHRwczovL2Zvcm1pZ2EuYWZpYWxhcGlzLmNvbSkKCg==")));
  var readmes = {
    "0.1.2": md_0_1_2
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

  ReactDOM__default["default"].createRoot(document.getElementById("arredemo-app")).render( /*#__PURE__*/React__default["default"].createElement(React__default["default"].StrictMode, null, /*#__PURE__*/React__default["default"].createElement(AppDocs, {
    pkgPath: pkgPath,
    pkgJson: pkgJson,
    arreConfig: arreConfig,
    readmes: readmes
  })));

})(React, ReactDOM, MarkdownToJSX);
//# sourceMappingURL=arredemo_docs.js.map

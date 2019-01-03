(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./src/other/page/components/twitter.js":
/*!**********************************************!*\
  !*** ./src/other/page/components/twitter.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TwitterApi; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ \"./node_modules/@material-ui/styles/index.es.js\");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ \"./node_modules/@material-ui/core/List/index.js\");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"./node_modules/@material-ui/core/ListItem/index.js\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"./node_modules/@material-ui/core/ListItemText/index.js\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ \"./node_modules/@material-ui/core/ListItemAvatar/index.js\");\n/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"./node_modules/@material-ui/core/Avatar/index.js\");\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! javascript-time-ago */ \"./node_modules/javascript-time-ago/index.js\");\n/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Chip */ \"./node_modules/@material-ui/core/Chip/index.js\");\n/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Face */ \"./node_modules/@material-ui/icons/Face.js\");\n/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ \"./node_modules/@material-ui/core/ListSubheader/index.js\");\n/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var javascript_time_ago_locale_tr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! javascript-time-ago/locale/tr */ \"./node_modules/javascript-time-ago/locale/tr/index.js\");\n/* harmony import */ var javascript_time_ago_locale_tr__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(javascript_time_ago_locale_tr__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n // Load locale-specific relative date/time formatting rules.\n\n\n // Add locale-specific relative date/time formatting rules.\n\njavascript_time_ago__WEBPACK_IMPORTED_MODULE_9__[\"default\"].addLocale(javascript_time_ago_locale_tr__WEBPACK_IMPORTED_MODULE_13___default.a);\nvar timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_9__[\"default\"](\"tr-TR\");\n\nvar TwitterApi =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(TwitterApi, _Component);\n\n  function TwitterApi() {\n    var _this;\n\n    _classCallCheck(this, TwitterApi);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TwitterApi).call(this));\n    _this.state = {\n      data: []\n    };\n    return _this;\n  }\n\n  _createClass(TwitterApi, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(\"http://localhost:8000/twitter\", {\n        id: \"lorem ipsm\"\n      }).then(function (res) {\n        console.log(res.data);\n\n        _this2.setState({\n          data: res.data\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TwitterList, {\n        data: this.state.data\n      });\n    }\n  }]);\n\n  return TwitterApi;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\nvar useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      width: \"100%\",\n      maxHeight: 400,\n      backgroundColor: \"#fff\",\n      overflowX: \"hidden\",\n      overflowY: \"scroll\"\n    },\n    inline: {\n      display: \"inline\"\n    },\n    chip: {\n      margin: 6\n    }\n  };\n});\n\nfunction TwitterList(_ref) {\n  var data = _ref.data;\n  var classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    className: classes.root,\n    subheader: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_12___default.a, {\n      component: \"div\"\n    }, \"Twitter Posts\")\n  }, data != [] && data.map(function (_ref2, k) {\n    var user = _ref2.user,\n        text = _ref2.text,\n        created_at = _ref2.created_at,\n        entities = _ref2.entities;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n      key: k\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      alignItems: \"flex-start\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      alt: user.name,\n      src: user.profile_image_url\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      primary: \"Brunch this weekend?\",\n      secondary: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        component: \"span\",\n        className: classes.inline,\n        color: \"textPrimary\"\n      }, timeAgo.format(new Date(created_at))), \" — \" + text, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, entities.user_mentions.map(function (_ref3, k) {\n        var screen_name = _ref3.screen_name,\n            name = _ref3.name;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_10___default.a, {\n          avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_11___default.a, null)),\n          variant: \"outlined\",\n          label: name,\n          key: k,\n          className: classes.chip\n        });\n      })))\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__[\"Divider\"], null));\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb3RoZXIvcGFnZS9jb21wb25lbnRzL3R3aXR0ZXIuanM/MTMwZCJdLCJuYW1lcyI6WyJUaW1lQWdvIiwiYWRkTG9jYWxlIiwidHIiLCJ0aW1lQWdvIiwiVHdpdHRlckFwaSIsInN0YXRlIiwiZGF0YSIsIkF4aW9zIiwicG9zdCIsImlkIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsIm1heEhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsImlubGluZSIsImRpc3BsYXkiLCJjaGlwIiwibWFyZ2luIiwiVHdpdHRlckxpc3QiLCJjbGFzc2VzIiwibWFwIiwiayIsInVzZXIiLCJ0ZXh0IiwiY3JlYXRlZF9hdCIsImVudGl0aWVzIiwibmFtZSIsInByb2ZpbGVfaW1hZ2VfdXJsIiwiZm9ybWF0IiwiRGF0ZSIsInVzZXJfbWVudGlvbnMiLCJzY3JlZW5fbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtDQUdBOztBQUNBQSwyREFBTyxDQUFDQyxTQUFSLENBQWtCQyxxRUFBbEI7QUFDQSxJQUFNQyxPQUFPLEdBQUcsSUFBSUgsMkRBQUosQ0FBWSxPQUFaLENBQWhCOztJQUVxQkksVTs7Ozs7QUFDbkIsd0JBQWM7QUFBQTs7QUFBQTs7QUFDWjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUFiO0FBRlk7QUFHYjs7Ozt3Q0FFbUI7QUFBQTs7QUFDbEJDLGtEQUFLLENBQUNDLElBQU4sQ0FBVywrQkFBWCxFQUE0QztBQUFFQyxVQUFF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bGUiOiIuL3NyYy9vdGhlci9wYWdlL2NvbXBvbmVudHMvdHdpdHRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiO1xuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUF2YXRhclwiO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IFRpbWVBZ28gZnJvbSBcImphdmFzY3JpcHQtdGltZS1hZ29cIjtcbmltcG9ydCBDaGlwIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGlwXCI7XG5pbXBvcnQgRmFjZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9GYWNlXCI7XG5pbXBvcnQgTGlzdFN1YmhlYWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFN1YmhlYWRlclwiO1xuXG4vLyBMb2FkIGxvY2FsZS1zcGVjaWZpYyByZWxhdGl2ZSBkYXRlL3RpbWUgZm9ybWF0dGluZyBydWxlcy5cbmltcG9ydCB0ciBmcm9tIFwiamF2YXNjcmlwdC10aW1lLWFnby9sb2NhbGUvdHJcIjtcbmltcG9ydCB7IERpdmlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcblxuLy8gQWRkIGxvY2FsZS1zcGVjaWZpYyByZWxhdGl2ZSBkYXRlL3RpbWUgZm9ybWF0dGluZyBydWxlcy5cblRpbWVBZ28uYWRkTG9jYWxlKHRyKTtcbmNvbnN0IHRpbWVBZ28gPSBuZXcgVGltZUFnbyhcInRyLVRSXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2l0dGVyQXBpIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0geyBkYXRhOiBbXSB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgQXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC90d2l0dGVyXCIsIHsgaWQ6IFwibG9yZW0gaXBzbVwiIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiByZXMuZGF0YSB9KTtcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxUd2l0dGVyTGlzdCBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IC8+O1xuICB9XG59XG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgbWF4SGVpZ2h0OiA0MDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICBvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXG4gICAgb3ZlcmZsb3dZOiBcInNjcm9sbFwiXG4gIH0sXG4gIGlubGluZToge1xuICAgIGRpc3BsYXk6IFwiaW5saW5lXCJcbiAgfSxcbiAgY2hpcDoge1xuICAgIG1hcmdpbjogNlxuICB9XG59KSk7XG5cbmZ1bmN0aW9uIFR3aXR0ZXJMaXN0KHsgZGF0YSB9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gc3ViaGVhZGVyPXs8TGlzdFN1YmhlYWRlciBjb21wb25lbnQ9J2Rpdic+VHdpdHRlciBQb3N0czwvTGlzdFN1YmhlYWRlcj59PlxuICAgICAge2RhdGEgIT0gW10gJiZcbiAgICAgICAgZGF0YS5tYXAoKHsgdXNlciwgdGV4dCwgY3JlYXRlZF9hdCwgZW50aXRpZXMgfSwgaykgPT4gKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2t9PlxuICAgICAgICAgICAgPExpc3RJdGVtIGFsaWduSXRlbXM9J2ZsZXgtc3RhcnQnPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9e3VzZXIubmFtZX0gc3JjPXt1c2VyLnByb2ZpbGVfaW1hZ2VfdXJsfSAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgcHJpbWFyeT0nQnJ1bmNoIHRoaXMgd2Vla2VuZD8nXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXtcbiAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PSdzcGFuJyBjbGFzc05hbWU9e2NsYXNzZXMuaW5saW5lfSBjb2xvcj0ndGV4dFByaW1hcnknPlxuICAgICAgICAgICAgICAgICAgICAgIHt0aW1lQWdvLmZvcm1hdChuZXcgRGF0ZShjcmVhdGVkX2F0KSl9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAge1wiIOKAlCBcIiArIHRleHR9XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHtlbnRpdGllcy51c2VyX21lbnRpb25zLm1hcCgoeyBzY3JlZW5fbmFtZSwgbmFtZSB9LCBrKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFjZUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoaXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKSl9XG4gICAgPC9MaXN0PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/other/page/components/twitter.js\n");

/***/ }),

/***/ "./src/other/page/home.js":
/*!********************************!*\
  !*** ./src/other/page/home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/todo */ \"./src/other/page/components/todo.js\");\n/* harmony import */ var _components_twitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/twitter */ \"./src/other/page/components/twitter.js\");\n\n\n\n\n\n\nvar uniqid = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n\nvar Home = function Home() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    container: true,\n    spacing: 16\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    item: true,\n    xs: 12,\n    md: 6\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    item: true,\n    xs: 12,\n    md: 6\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_twitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb3RoZXIvcGFnZS9ob21lLmpzP2IxOWEiXSwibmFtZXMiOlsidW5pcWlkIiwicmVxdWlyZSIsIkhvbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDhDQUFELENBQXRCOztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakIsU0FDRSwyREFBQyw2REFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUU7QUFBekIsS0FDRSwyREFBQyw2REFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRTtBQUF2QixLQUNFLDJEQUFDLHdEQUFELE9BREYsQ0FERixFQUlFLDJEQUFDLDZEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFO0FBQXZCLEtBQ0UsMkRBQUMsMkRBQUQsT0FERixDQUpGLENBREY7QUFVRCxDQVhEOztBQVllQSxtRUFBZiIsImZpbGUiOiIuL3NyYy9vdGhlci9wYWdlL2hvbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgVE9ET0xJU1QgZnJvbSBcIi4vY29tcG9uZW50cy90b2RvXCI7XG5pbXBvcnQgVHdpdHRlckFwaSBmcm9tIFwiLi9jb21wb25lbnRzL3R3aXR0ZXJcIjtcbmNvbnN0IHVuaXFpZCA9IHJlcXVpcmUoXCJ1bmlxaWRcIik7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezE2fT5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XG4gICAgICAgIDxUT0RPTElTVCAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cbiAgICAgICAgPFR3aXR0ZXJBcGkgLz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/other/page/home.js\n");

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./src/other/gridList.js":
/*!*******************************!*\
  !*** ./src/other/gridList.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/styles/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/GridList */ \"./node_modules/@material-ui/core/GridList/index.js\");\n/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/GridListTile */ \"./node_modules/@material-ui/core/GridListTile/index.js\");\n/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar tileData = [{\n  img: \"/static/images/grid-list/breakfast.jpg\",\n  title: \"Breakfast\",\n  author: \"jill111\",\n  cols: 2,\n  featured: true\n}, {\n  img: \"/static/images/grid-list/burgers.jpg\",\n  title: \"Tasty burger\",\n  author: \"director90\"\n}, {\n  img: \"/static/images/grid-list/camera.jpg\",\n  title: \"Camera\",\n  author: \"Danson67\"\n}, {\n  img: \"/static/images/grid-list/morning.jpg\",\n  title: \"Morning\",\n  author: \"fancycrave1\",\n  featured: true\n}, {\n  img: \"/static/images/grid-list/hats.jpg\",\n  title: \"Hats\",\n  author: \"Hans\"\n}, {\n  img: \"/static/images/grid-list/honey.jpg\",\n  title: \"Honey\",\n  author: \"fancycravel\"\n}, {\n  img: \"/static/images/grid-list/vegetables.jpg\",\n  title: \"Vegetables\",\n  author: \"jill111\",\n  cols: 2\n}, {\n  img: \"/static/images/grid-list/plant.jpg\",\n  title: \"Water plant\",\n  author: \"BkrmadtyaKarki\"\n}, {\n  img: \"/static/images/grid-list/mushroom.jpg\",\n  title: \"Mushrooms\",\n  author: \"PublicDomainPictures\"\n}, {\n  img: \"/static/images/grid-list/olive.jpg\",\n  title: \"Olive oil\",\n  author: \"congerdesign\"\n}, {\n  img: \"/static/images/grid-list/star.jpg\",\n  title: \"Sea star\",\n  cols: 2,\n  author: \"821292\"\n}, {\n  img: \"/static/images/grid-list/bike.jpg\",\n  title: \"Bike\",\n  author: \"danfador\"\n}];\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      display: \"flex\",\n      flexWrap: \"wrap\",\n      justifyContent: \"space-around\",\n      overflow: \"hidden\",\n      backgroundColor: theme.palette.background.paper\n    },\n    gridList: {\n      width: 500,\n      height: 450\n    }\n  };\n};\n/**\n * The example data is structured as follows:\n *\n * import image from 'path/to/image.jpg';\n * [etc...]\n *\n * const tileData = [\n *   {\n *     img: image,\n *     title: 'Image',\n *     author: 'author',\n *     cols: 2,\n *   },\n *   {\n *     [etc...]\n *   },\n * ];\n */\n\n\nfunction ImageGridList(props) {\n  var classes = props.classes;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.root\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    cellHeight: 160,\n    className: classes.gridList,\n    cols: 3\n  }, tileData.map(function (tile) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      key: tile.img,\n      cols: tile.cols || 1\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: \"https://material-ui.com/\" + tile.img,\n      alt: tile.title\n    }));\n  })));\n}\n\nImageGridList.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(styles)(ImageGridList));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb3RoZXIvZ3JpZExpc3QuanM/MjEwNiJdLCJuYW1lcyI6WyJ0aWxlRGF0YSIsImltZyIsInRpdGxlIiwiYXV0aG9yIiwiY29scyIsImZlYXR1cmVkIiwic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJvdmVyZmxvdyIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJncmlkTGlzdCIsIndpZHRoIiwiaGVpZ2h0IiwiSW1hZ2VHcmlkTGlzdCIsInByb3BzIiwiY2xhc3NlcyIsIm1hcCIsInRpbGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxLQUFHLEVBQUUsd0NBRFA7QUFFRUMsT0FBSyxFQUFFLFdBRlQ7QUFHRUMsUUFBTSxFQUFFLFNBSFY7QUFJRUMsTUFBSSxFQUFFLENBSlI7QUFLRUMsVUFBUSxFQUFFO0FBTFosQ0FEZSxFQVFmO0FBQ0VKLEtBQUcsRUFBRSxzQ0FEUDtBQUVFQyxPQUFLLEVBQUUsY0FGVDtBQUdFQyxRQUFNLEVBQUU7QUFIVixDQVJlLEVBYWY7QUFDRUYsS0FBRyxFQUFFLHFDQURQO0FBRUVDLE9BQUssRUFBRSxRQUZUO0FBR0VDLFFBQU0sRUFBRTtBQUhWLENBYmUsRUFrQmY7QUFDRUYsS0FBRyxFQUFFLHNDQURQO0FBRUVDLE9BQUssRUFBRSxTQUZUO0FBR0VDLFFBQU0sRUFBRSxhQUhWO0FBSUVFLFVBQVEsRUFBRTtBQUpaLENBbEJlLEVBd0JmO0FBQ0VKLEtBQUcsRUFBRSxtQ0FEUDtBQUVFQyxPQUFLLEVBQUUsTUFGVDtBQUdFQyxRQUFNLEVBQUU7QUFIVixDQXhCZSxFQTZCZjtBQUNFRixLQUFHLEVBQUUsb0NBRFA7QUFFRUMsT0FBSyxFQUFFLE9BRlQ7QUFHRUMsUUFBTSxFQUFFO0FBSFYsQ0E3QmUsRUFrQ2Y7QUFDRUYsS0FBRyxFQUFFLHlDQURQO0FBRUVDLE9BQUssRUFBRSxZQUZUO0FBR0VDLFFBQU0sRUFBRSxTQUhWO0FBSUVDLE1BQUksRUFBRTtBQUpSLENBbENlLEVBd0NmO0FBQ0VILEtBQUcsRUFBRSxvQ0FEUDtBQUVFQyxPQUFLLEVBQUUsYUFGVDtBQUdFQyxRQUFNLEVBQUU7QUFIVixDQXhDZSxFQTZDZjtBQUNFRixLQUFHLEVBQUUsdUNBRFA7QUFFRUMsT0FBSyxFQUFFLFdBRlQ7QUFHRUMsUUFBTSxFQUFFO0FBSFYsQ0E3Q2UsRUFrRGY7QUFDRUYsS0FBRyxFQUFFLG9DQURQO0FBRUVDLE9BQUssRUFBRSxXQUZUO0FBR0VDLFFBQU0sRUFBRTtBQUhWLENBbERlLEVBdURmO0FBQ0VGLEtBQUcsRUFBRSxtQ0FEUDtBQUVFQyxPQUFLLEVBQUUsVUFGVDtBQUdFRSxNQUFJLEVBQUUsQ0FIUjtBQUlFRCxRQUFNLEVBQUU7QUFKVixDQXZEZSxFQTZEZjtBQUNFRixLQUFHLEVBQUUsbUNBRFA7QUFFRUMsT0FBSyxFQUFFLE1BRlQ7QUFHRUMsUUFBTSxFQUFFO0FBSFYsQ0E3RGUsQ0FBakI7O0FBb0VBLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3ZCQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFLE1BREw7QUFFSkMsY0FBUSxFQUFFLE1BRk47QUFHSkMsb0JBQWMsRUFBRSxjQUhaO0FBSUpDLGNBQVEsRUFBRSxRQUpOO0FBS0pDLHFCQUFlLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFjQyxVQUFkLENBQXlCQztBQUx0QyxLQURpQjtBQVF2QkMsWUFBUSxFQUFFO0FBQ1JDLFdBQUssRUFBRSxHQURDO0FBRVJDLFlBQU0sRUFBRTtBQUZBO0FBUmEsR0FBTDtBQUFBLENBQXBCO0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBLFNBQVNDLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQUEsTUFDcEJDLE9BRG9CLEdBQ1JELEtBRFEsQ0FDcEJDLE9BRG9CO0FBRzVCLFNBQ0U7QUFBSyxhQUFTLEVBQUVBLE9BQU8sQ0FBQ2Q7QUFBeEIsS0FDRSwyREFBQyxpRUFBRDtBQUFVLGNBQVUsRUFBRSxHQUF0QjtBQUEyQixhQUFTLEVBQUVjLE9BQU8sQ0FBQ0wsUUFBOUM7QUFBd0QsUUFBSSxFQUFFO0FBQTlELEtBQ0dqQixRQUFRLENBQUN1QixHQUFULENBQWEsVUFBQUMsSUFBSTtBQUFBLFdBQ2hCLDJEQUFDLHFFQUFEO0FBQWMsU0FBRyxFQUFFQSxJQUFJLENBQUN2QixHQUF4QjtBQUE2QixVQUFJLEVBQUV1QixJQUFJLENBQUNwQixJQUFMLElBQWE7QUFBaEQsT0FDRTtBQUFLLFNBQUcsRUFBRSw2QkFBNkJvQixJQUFJLENBQUN2QixHQUE1QztBQUFpRCxTQUFHLEVBQUV1QixJQUFJLENBQUN0QjtBQUEzRCxNQURGLENBRGdCO0FBQUEsR0FBakIsQ0FESCxDQURGLENBREY7QUFXRDs7QUFFRGtCLGFBQWEsQ0FBQ0ssU0FBZCxHQUEwQjtBQUN4QkgsU0FBTyxFQUFFSSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURGLENBQTFCO0FBSWVDLDBJQUFVLENBQUN2QixNQUFELENBQVYsQ0FBbUJjLGFBQW5CLENBQWYiLCJmaWxlIjoiLi9zcmMvb3RoZXIvZ3JpZExpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEdyaWRMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFwiO1xuaW1wb3J0IEdyaWRMaXN0VGlsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlXCI7XG5jb25zdCB0aWxlRGF0YSA9IFtcbiAge1xuICAgIGltZzogXCIvc3RhdGljL2ltYWdlcy9ncmlkLWxpc3QvYnJlYWtmYXN0LmpwZ1wiLFxuICAgIHRpdGxlOiBcIkJyZWFrZmFzdFwiLFxuICAgIGF1dGhvcjogXCJqaWxsMTExXCIsXG4gICAgY29sczogMixcbiAgICBmZWF0dXJlZDogdHJ1ZVxuICB9LFxuICB7XG4gICAgaW1nOiBcIi9zdGF0aWMvaW1hZ2VzL2dyaWQtbGlzdC9idXJnZXJzLmpwZ1wiLFxuICAgIHRpdGxlOiBcIlRhc3R5IGJ1cmdlclwiLFxuICAgIGF1dGhvcjogXCJkaXJlY3RvcjkwXCJcbiAgfSxcbiAge1xuICAgIGltZzogXCIvc3RhdGljL2ltYWdlcy9ncmlkLWxpc3QvY2FtZXJhLmpwZ1wiLFxuICAgIHRpdGxlOiBcIkNhbWVyYVwiLFxuICAgIGF1dGhvcjogXCJEYW5zb242N1wiXG4gIH0sXG4gIHtcbiAgICBpbWc6IFwiL3N0YXRpYy9pbWFnZXMvZ3JpZC1saXN0L21vcm5pbmcuanBnXCIsXG4gICAgdGl0bGU6IFwiTW9ybmluZ1wiLFxuICAgIGF1dGhvcjogXCJmYW5jeWNyYXZlMVwiLFxuICAgIGZlYXR1cmVkOiB0cnVlXG4gIH0sXG4gIHtcbiAgICBpbWc6IFwiL3N0YXRpYy9pbWFnZXMvZ3JpZC1saXN0L2hhdHMuanBnXCIsXG4gICAgdGl0bGU6IFwiSGF0c1wiLFxuICAgIGF1dGhvcjogXCJIYW5zXCJcbiAgfSxcbiAge1xuICAgIGltZzogXCIvc3RhdGljL2ltYWdlcy9ncmlkLWxpc3QvaG9uZXkuanBnXCIsXG4gICAgdGl0bGU6IFwiSG9uZXlcIixcbiAgICBhdXRob3I6IFwiZmFuY3ljcmF2ZWxcIlxuICB9LFxuICB7XG4gICAgaW1nOiBcIi9zdGF0aWMvaW1hZ2VzL2dyaWQtbGlzdC92ZWdldGFibGVzLmpwZ1wiLFxuICAgIHRpdGxlOiBcIlZlZ2V0YWJsZXNcIixcbiAgICBhdXRob3I6IFwiamlsbDExMVwiLFxuICAgIGNvbHM6IDJcbiAgfSxcbiAge1xuICAgIGltZzogXCIvc3RhdGljL2ltYWdlcy9ncmlkLWxpc3QvcGxhbnQuanBnXCIsXG4gICAgdGl0bGU6IFwiV2F0ZXIgcGxhbnRcIixcbiAgICBhdXRob3I6IFwiQmtybWFkdHlhS2Fya2lcIlxuICB9LFxuICB7XG4gICAgaW1nOiBcIi9zdGF0aWMvaW1hZ2VzL2dyaWQtbGlzdC9tdXNocm9vbS5qcGdcIixcbiAgICB0aXRsZTogXCJNdXNocm9vbXNcIixcbiAgICBhdXRob3I6IFwiUHVibGljRG9tYWluUGljdHVyZXNcIlxuICB9LFxuICB7XG4gICAgaW1nOiBcIi9zdGF0aWMvaW1hZ2VzL2dyaWQtbGlzdC9vbGl2ZS5qcGdcIixcbiAgICB0aXRsZTogXCJPbGl2ZSBvaWxcIixcbiAgICBhdXRob3I6IFwiY29uZ2VyZGVzaWduXCJcbiAgfSxcbiAge1xuICAgIGltZzogXCIvc3RhdGljL2ltYWdlcy9ncmlkLWxpc3Qvc3Rhci5qcGdcIixcbiAgICB0aXRsZTogXCJTZWEgc3RhclwiLFxuICAgIGNvbHM6IDIsXG4gICAgYXV0aG9yOiBcIjgyMTI5MlwiXG4gIH0sXG4gIHtcbiAgICBpbWc6IFwiL3N0YXRpYy9pbWFnZXMvZ3JpZC1saXN0L2Jpa2UuanBnXCIsXG4gICAgdGl0bGU6IFwiQmlrZVwiLFxuICAgIGF1dGhvcjogXCJkYW5mYWRvclwiXG4gIH1cbl07XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXJcbiAgfSxcbiAgZ3JpZExpc3Q6IHtcbiAgICB3aWR0aDogNTAwLFxuICAgIGhlaWdodDogNDUwXG4gIH1cbn0pO1xuXG4vKipcbiAqIFRoZSBleGFtcGxlIGRhdGEgaXMgc3RydWN0dXJlZCBhcyBmb2xsb3dzOlxuICpcbiAqIGltcG9ydCBpbWFnZSBmcm9tICdwYXRoL3RvL2ltYWdlLmpwZyc7XG4gKiBbZXRjLi4uXVxuICpcbiAqIGNvbnN0IHRpbGVEYXRhID0gW1xuICogICB7XG4gKiAgICAgaW1nOiBpbWFnZSxcbiAqICAgICB0aXRsZTogJ0ltYWdlJyxcbiAqICAgICBhdXRob3I6ICdhdXRob3InLFxuICogICAgIGNvbHM6IDIsXG4gKiAgIH0sXG4gKiAgIHtcbiAqICAgICBbZXRjLi4uXVxuICogICB9LFxuICogXTtcbiAqL1xuXG5mdW5jdGlvbiBJbWFnZUdyaWRMaXN0KHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxHcmlkTGlzdCBjZWxsSGVpZ2h0PXsxNjB9IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkTGlzdH0gY29scz17M30+XG4gICAgICAgIHt0aWxlRGF0YS5tYXAodGlsZSA9PiAoXG4gICAgICAgICAgPEdyaWRMaXN0VGlsZSBrZXk9e3RpbGUuaW1nfSBjb2xzPXt0aWxlLmNvbHMgfHwgMX0+XG4gICAgICAgICAgICA8aW1nIHNyYz17XCJodHRwczovL21hdGVyaWFsLXVpLmNvbS9cIiArIHRpbGUuaW1nfSBhbHQ9e3RpbGUudGl0bGV9IC8+XG4gICAgICAgICAgPC9HcmlkTGlzdFRpbGU+XG4gICAgICAgICkpfVxuICAgICAgPC9HcmlkTGlzdD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuSW1hZ2VHcmlkTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEltYWdlR3JpZExpc3QpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/other/gridList.js\n");

/***/ })

}]);
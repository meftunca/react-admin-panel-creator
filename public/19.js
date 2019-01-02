(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./src/other/gridList.js":
/*!*******************************!*\
  !*** ./src/other/gridList.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/GridList */ "./node_modules/@material-ui/core/GridList/index.js");
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/GridListTile */ "./node_modules/@material-ui/core/GridListTile/index.js");
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_4__);





var tileData = [{
  img: "/static/images/grid-list/breakfast.jpg",
  title: "Breakfast",
  author: "jill111",
  cols: 2,
  featured: true
}, {
  img: "/static/images/grid-list/burgers.jpg",
  title: "Tasty burger",
  author: "director90"
}, {
  img: "/static/images/grid-list/camera.jpg",
  title: "Camera",
  author: "Danson67"
}, {
  img: "/static/images/grid-list/morning.jpg",
  title: "Morning",
  author: "fancycrave1",
  featured: true
}, {
  img: "/static/images/grid-list/hats.jpg",
  title: "Hats",
  author: "Hans"
}, {
  img: "/static/images/grid-list/honey.jpg",
  title: "Honey",
  author: "fancycravel"
}, {
  img: "/static/images/grid-list/vegetables.jpg",
  title: "Vegetables",
  author: "jill111",
  cols: 2
}, {
  img: "/static/images/grid-list/plant.jpg",
  title: "Water plant",
  author: "BkrmadtyaKarki"
}, {
  img: "/static/images/grid-list/mushroom.jpg",
  title: "Mushrooms",
  author: "PublicDomainPictures"
}, {
  img: "/static/images/grid-list/olive.jpg",
  title: "Olive oil",
  author: "congerdesign"
}, {
  img: "/static/images/grid-list/star.jpg",
  title: "Sea star",
  cols: 2,
  author: "821292"
}, {
  img: "/static/images/grid-list/bike.jpg",
  title: "Bike",
  author: "danfador"
}];

var styles = function styles(theme) {
  return {
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      width: 500,
      height: 450
    }
  };
};
/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */


function ImageGridList(props) {
  var classes = props.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_3___default.a, {
    cellHeight: 160,
    className: classes.gridList,
    cols: 3
  }, tileData.map(function (tile) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: tile.img,
      cols: tile.cols || 1
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "https://material-ui.com/" + tile.img,
      alt: tile.title
    }));
  })));
}

ImageGridList.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(ImageGridList));

/***/ })

}]);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function PastEvents() {
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "past-events"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      flex: 0
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "",
    target: "_blank"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "past-events-banners",
    src: "",
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    className: "pm-rank-centered",
    src: "",
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("h1", {
    className: "past-events-title"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "",
    target: "_blank"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "past-article-text"
  }, "Date : "), /*#__PURE__*/_react.default.createElement("p", {
    className: "past-article-text"
  }, "Location : "), /*#__PURE__*/_react.default.createElement("p", {
    className: "past-article-text"
  }, "Entrants : "), /*#__PURE__*/_react.default.createElement("p", {
    className: "top3"
  }, "\uD83E\uDD47: "), /*#__PURE__*/_react.default.createElement("p", {
    className: "top3"
  }, " \uD83E\uDD48: "), /*#__PURE__*/_react.default.createElement("p", {
    className: "top3"
  }, " \uD83E\uDD49: "), /*#__PURE__*/_react.default.createElement("a", {
    className: "vods-past",
    href: "",
    target: "_blank"
  }, "Vods"), /*#__PURE__*/_react.default.createElement("a", {
    className: "start-gg",
    href: "",
    target: "_blank"
  }, "start.gg")));
}
const rootElement = document.getElementById("react-container");
_reactDom.default.render( /*#__PURE__*/_react.default.createElement(PastEvents, null), rootElement);
var _default = exports.default = PastEvents;

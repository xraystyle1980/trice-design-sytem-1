"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Box = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'start'
    }
  }, /*#__PURE__*/_react.default.createElement("label", null, props.boxlabel), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "box",
    placeholder: props.boxcontent,
    style: {
      background: '#fafafa',
      color: 'black',
      display: 'inline-flex',
      width: '100%',
      minHeight: '3rem',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem 4rem',
      borderRadius: '1rem',
      border: '4px solid black',
      fontSize: '2rem',
      cursor: 'pointer'
    }
  }));
};
var _default = Box;
exports.default = _default;
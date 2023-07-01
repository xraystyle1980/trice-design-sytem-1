"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "dribbble-button",
    style: {
      backgroundColor: 'black',
      color: 'white',
      fontFamily: 'monospace',
      fontSize: '2.4rem',
      border: '2px solid white',
      padding: '1.65rem 3.85rem',
      borderRadius: '0px',
      boxShadow: '6px 6px 0px 0px rgba(0, 0, 0, 1),8px 8px 0px 0px rgba(255, 255, 255, 1)'
    }
  }, props.label);
};
var _default = Button;
exports.default = _default;
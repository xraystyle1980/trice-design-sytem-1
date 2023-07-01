"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Box = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "box",
    style: {
      background: 'hsl(0, 0%, 100%)',
      color: 'hsl(230, 13%, 9%)'
    }
  }, props.boxlabel);
};
var _default = Box;
exports.default = _default;
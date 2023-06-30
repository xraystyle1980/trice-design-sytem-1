"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const Buttonbase = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nbackground-color: #11e6bf;\ncolor: white;\nfont-family: Courier;\nfont-size: 32px;\nborder: none;\npadding: 16px 32px;\nborder-radius: 8px;\n"])));
const Button = props => {
  return /*#__PURE__*/_react.default.createElement(Buttonbase, null, props.label);
};
var _default = Button;
exports.default = _default;
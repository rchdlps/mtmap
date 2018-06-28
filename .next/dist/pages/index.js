"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = require("next-redux-wrapper");

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _reactSimpleMaps = require("react-simple-maps");

var _reduxTooltip = require("redux-tooltip");

var _store = require("../store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/richard/Dev/maps/with-redux-tooltip/pages/index.js?entry";

var wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
  fontFamily: "Roboto, sans-serif"
};

var show = _reduxTooltip.actions.show,
    hide = _reduxTooltip.actions.hide;

var WithReduxExample = function (_Component) {
  (0, _inherits3.default)(WithReduxExample, _Component);

  function WithReduxExample() {
    (0, _classCallCheck3.default)(this, WithReduxExample);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WithReduxExample.__proto__ || (0, _getPrototypeOf2.default)(WithReduxExample)).call(this));

    _this.handleMove = _this.handleMove.bind(_this);
    _this.handleLeave = _this.handleLeave.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(WithReduxExample, [{
    key: "handleMove",
    value: function handleMove(geography, evt) {
      var x = evt.clientX;
      var y = evt.clientY + window.pageYOffset;
      this.props.dispatch(show({
        origin: { x: x, y: y },
        content: geography.properties.name
      }));
    }
  }, {
    key: "handleLeave",
    value: function handleLeave() {
      this.props.dispatch(hide());
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement("div", { style: wrapperStyles, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_reactSimpleMaps.ComposableMap, {
        projection: "mercator",
        projectionConfig: { scale: 2700 },
        width: 1000,
        height: 550,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_reactSimpleMaps.ZoomableGroup, { center: [-56, -13], disablePanning: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_reactSimpleMaps.Geographies, { geography: "/static/world-50m.json", __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, function (geographies, projection) {
        return geographies.map(function (geography, i) {
          return _react2.default.createElement(_reactSimpleMaps.Geography, {
            key: i,
            geography: geography,
            projection: projection,
            onMouseMove: _this2.handleMove,
            onMouseLeave: _this2.handleLeave,
            style: {
              default: {
                fill: "#ECEFF1",
                stroke: "#607D8B",
                strokeWidth: 0.75,
                outline: "none"
              },
              hover: {
                fill: "#607D8B",
                stroke: "#607D8B",
                strokeWidth: 0.75,
                outline: "none"
              },
              pressed: {
                fill: "#FF5722",
                stroke: "#607D8B",
                strokeWidth: 0.75,
                outline: "none"
              }
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          });
        });
      }))), _react2.default.createElement(_reduxTooltip.Tooltip, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }));
    }
  }]);

  return WithReduxExample;
}(_react.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(WithReduxExample);
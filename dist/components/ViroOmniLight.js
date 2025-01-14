/**
 * Copyright (c) 2015-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ViroOmniLight
 * @flow
 */
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViroOmniLight = void 0;
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
/**
 * Used to render a ViroOmniLight
 */
class ViroOmniLight extends React.Component {
    _component = null;
    setNativeProps = (nativeProps) => {
        this._component?.setNativeProps(nativeProps);
    };
    render() {
        // Uncomment this line to check for misnamed props
        //checkMisnamedProps("ViroOmniLight", this.props);
        let nativeProps = Object.assign({}, this.props);
        nativeProps.style = [this.props.style];
        nativeProps.color = this.props.color;
        nativeProps.ref = (component) => {
            this._component = component;
        };
        return <VRTOmniLight {...nativeProps}/>;
    }
}
exports.ViroOmniLight = ViroOmniLight;
var VRTOmniLight = (0, react_native_1.requireNativeComponent)("VRTOmniLight", 
// @ts-ignore
ViroOmniLight);

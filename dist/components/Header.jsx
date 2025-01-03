"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const image_1 = __importDefault(require("next/image"));
const Header = () => {
    return (<header className="flex justify-center items-center mt-6">
      <link_1.default href="/">
        <image_1.default src="/virtual-aviator-hub-logo.png" alt="Virtual Aviator Hub Logo" width={150} // Set width based on the logo size
     height={50} // Set height based on the logo size
     className="cursor-pointer" priority // Load the logo eagerly for better performance
    />
      </link_1.default>
    </header>);
};
exports.default = Header;

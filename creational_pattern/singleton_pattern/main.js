"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationState_1 = __importDefault(require("./ApplicationState/ApplicationState"));
const appState1 = ApplicationState_1.default;
const appState2 = ApplicationState_1.default;
console.log("appState1: ", appState1);
console.log("appState2: ", appState2);
console.log("appState1 === appState2: ", appState1 === appState2);

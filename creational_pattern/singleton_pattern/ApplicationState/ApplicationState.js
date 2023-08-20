"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApplicationState {
    constructor() {
    }
    static getInstance() {
        if (!ApplicationState.INSTANCE) {
            ApplicationState.INSTANCE = new ApplicationState();
        }
        return ApplicationState.INSTANCE;
    }
}
ApplicationState.INSTANCE = null;
const applicationState = ApplicationState.getInstance();
Object.freeze(applicationState);
exports.default = applicationState;

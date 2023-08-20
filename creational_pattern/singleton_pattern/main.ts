import applicationState from "./ApplicationState/ApplicationState";

const appState1 = applicationState;
const appState2 = applicationState;

console.log("appState1: ", appState1);
console.log("appState2: ", appState2);

console.log("appState1 === appState2: ", appState1 === appState2)

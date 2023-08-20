# Singleton Pattern

### What do we use it for?

We use the singleton pattern to ensure a single instance of a class that provides
a global access point throughout the application's lifetime.

### The idea behind the pattern

The idea behind the singleton pattern is to instantiate a single instance of a
class in order to provide a global access point, this can allow us to manage the
instance of a resource that needs to be shared across different parts of our
application.

## Implementation
The `ApplicationState` class is defined as follows
```
class ApplicationState {
    private static INSTANCE: ApplicationState | null = null;

    private constructor() {
    }

    public static getInstance(): ApplicationState {
        if (!ApplicationState.INSTANCE) {
            ApplicationState.INSTANCE = new ApplicationState()
        }
        return ApplicationState.INSTANCE
    }

}
```
We create a private contructor in order to avoid external instantiation.
Then we create two variables `appState1` and `appState2` in our `main.ts`
file, compare both variables to check if it is the same instance of `ApplicationState`.
```
import applicationState from "./ApplicationState/ApplicationState";

const appState1 = applicationState;
const appState2 = applicationState;

console.log("appState1: ", appState1);
console.log("appState2: ", appState2);
console.log("appState1 === appState2: ", appState1 === appState2)

OUTPUT: 
appState1:  ApplicationState {}
appState2:  ApplicationState {}
appState1 === appState2:  true
```
With this implementation we have successfully applied the singleton pattern.

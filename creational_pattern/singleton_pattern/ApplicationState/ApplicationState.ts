class ApplicationState {
    private static INSTANCE: ApplicationState | null = null;

    private constructor() {}

    public static getInstance(): ApplicationState {
        if (!ApplicationState.INSTANCE) {
            ApplicationState.INSTANCE = new ApplicationState();
        }
        return ApplicationState.INSTANCE;
    }
}

const applicationState = ApplicationState.getInstance;
Object.freeze(applicationState);
export default applicationState;

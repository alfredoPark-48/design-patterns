import { Company } from "../Company";

export class MsiManufacturer extends Company {
    public createGpu(): string {
        return 'Created MSI GPU'
    }

    public createMonitor(): string {
        return 'Created MSI Monitor'
    }
}

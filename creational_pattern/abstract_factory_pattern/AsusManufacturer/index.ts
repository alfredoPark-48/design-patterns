import { Company } from "../Company";

export class AsusManufacturer extends Company {
    public createGpu(): string {
       return 'Created ASUS GPU' 
    }
    public createMonitor(): string {
       return 'Created ASUS Monitor' 
    }
}

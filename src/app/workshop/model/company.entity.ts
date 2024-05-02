import {InventoryItem} from "../../invoices/model/company.entity";

export class CompanyEntity {
    name: string;
    address: string;
    phone: string;
    email: string;
    logo_url: string;
    business_hours: string;
    inventory: InventoryItem[];

    constructor(name: string, address: string, phone: string, email: string, logo_url: string, business_hours: string, inventory: InventoryItem[]) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.logo_url = logo_url;
        this.business_hours = business_hours;
        this.inventory = inventory;
    }
}
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

export class InventoryItem {
    product_id: string;
    name: string;
    quantity: number;
    price: number;
    image_url: string;

    constructor(product_id: string, name: string, quantity: number, price: number, image_url: string) {
        this.product_id = product_id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.image_url = image_url;
    }
}


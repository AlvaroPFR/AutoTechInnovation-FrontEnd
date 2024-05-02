export class Client {
    number: string;
    issue_date: string;
    total: number;
    details: Detail[];

    constructor(number: string, issue_date: string, total: number, details: Detail[]) {
        this.number = number;
        this.issue_date = issue_date;
        this.total = total;
        this.details = details;
    }
}

class Detail {
    description: string;
    amount: number;

    constructor(description: string, amount: number) {
        this.description = description;
        this.amount = amount;
    }
}

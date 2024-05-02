import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class InvoiceService {
    baseUrl = 'http://localhost:3000';
    resourceEndpoint = '/clients';

    constructor(private http: HttpClient) { }

    getAllInvoices(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}${this.resourceEndpoint}`).pipe(
            map(clients => clients.flatMap(client => client.invoices))
        );
    }

    getAllClients(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}${this.resourceEndpoint}`);
    }

    getVehiclesByClientId (clientId: number): Observable<any>   {
        return this.http.get(`${this.baseUrl}${this.resourceEndpoint}/${clientId}/vehicles`);
    }

    getInvoiceByNumber(invoiceNumber: string): Observable<any> {
        return this.http.get<any[]>(`${this.baseUrl}${this.resourceEndpoint}`).pipe(
            map(clients => {
                for (let client of clients) {
                    let invoice = client.invoices.find((invoice: any) => invoice.number === invoiceNumber);
                    if (invoice) {
                        return invoice;
                    }
                }
                return null;
            })
        );
    }

    getInvoiceDetailsByNumber(invoiceNumber: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}${this.resourceEndpoint}`).pipe(
            map(clients => {
                let allDetails = [];
                for (let client of clients) {
                    let matchingInvoices = client.invoices.filter((invoice: any) => invoice.number === invoiceNumber);
                    for (let invoice of matchingInvoices) {
                        allDetails.push(...invoice.details);
                    }
                }
                return allDetails;
            })
        );
    }

}

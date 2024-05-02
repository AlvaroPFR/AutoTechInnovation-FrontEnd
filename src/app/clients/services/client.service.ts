import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    baseUrl = 'http://localhost:3000';
    resourceEndpoint = '/clients';

    constructor(private http: HttpClient) {
    }

    getClients() {
        return this.http.get(`${this.baseUrl}${this.resourceEndpoint}`);
    }

    getClientById(id: string): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}${this.resourceEndpoint}/${id}`);
    }
}
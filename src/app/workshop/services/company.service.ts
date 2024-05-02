import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  baseUrl = 'http://localhost:3000';
  resourceEndpoint = '/clients';

  constructor(private http: HttpClient) { }

  getCompanyByClientId(clientId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${this.resourceEndpoint}/${clientId}`).pipe(
        map(client => client.company)
    );
  }
}

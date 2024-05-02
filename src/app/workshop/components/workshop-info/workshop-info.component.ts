import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from "@angular/common";
import {ClientService} from "../../../clients/services/client.service";
import {CompanyService} from "../../services/company.service";
import {InvoiceService} from "../../../invoices/services/invoice.service";

@Component({
  selector: 'app-workshop-info',
  templateUrl: './workshop-info.component.html',
  styleUrl: './workshop-info.component.css'
})
export class WorkshopInfoComponent implements OnInit{
  clients: any;
  company: any;

  constructor(private route: ActivatedRoute, private clientService: ClientService,
              private invoiceService: InvoiceService, private location: Location,
              private companyService: CompanyService) { } // Inyecta el servicio de la compañía


  onCancel(): void {
    this.location.back();
  }


  ngOnInit(): void {
    const clientId = this.route.snapshot.paramMap.get('clientId');
    if (clientId) {
      this.clientService.getClientById(clientId).subscribe((client: any) => {
        this.clients = client;
        console.log(client.name);
      });
      this.companyService.getCompanyByClientId(clientId).subscribe((company: any) => {
        this.company = company;
        console.log(company);
      }, error => {
        console.error('Error al cargar la compañía:', error);
      });
    } else {
      const defaultClientId = '1';
      this.clientService.getClientById(defaultClientId).subscribe((client: any) => {
        this.clients = client;
        console.log(client.name);
      });
      this.companyService.getCompanyByClientId(defaultClientId).subscribe((company: any) => {
        this.company = company;
        console.log(company);
      }, error => {
        console.error('Error al cargar la compañía:', error);
      });
    }
  }
}
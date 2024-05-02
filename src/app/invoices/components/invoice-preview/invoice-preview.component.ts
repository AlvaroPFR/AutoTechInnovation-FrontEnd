import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../../services/invoice.service';
import {Location} from "@angular/common";
import {ClientService} from "../../services/client.service";
import {CompanyService} from "../../services/company.service";

@Component({
  selector: 'app-invoice-preview',
  templateUrl: './invoice-preview.component.html',
  styleUrls: ['./invoice-preview.component.css']
})
export class InvoicePreviewComponent implements OnInit{
  clients: any;
  invoices: any;
  invoice: any;
  company: any;

  constructor(private route: ActivatedRoute, private clientService: ClientService,
              private invoiceService: InvoiceService, private location: Location,
              private companyService: CompanyService) { } // Inyecta el servicio de la compañía


  onCancel(): void {
    this.location.back();
  }

  getTotalAmount(): number {
    return this.invoice.details.reduce((total: number, detail: { amount: number }) => total + detail.amount, 0);
  }


  ngOnInit(): void {
    const clientId = this.route.snapshot.paramMap.get('clientId');
    const invoiceNumber = this.route.snapshot.paramMap.get('invoiceId');
    if (clientId && invoiceNumber) {
      this.clientService.getClientById(clientId).subscribe((client: any) => {
        this.clients = client;
        console.log(client.name);
        this.invoiceService.getInvoiceByNumber(invoiceNumber).subscribe((invoice: any) => {
          this.invoice = invoice;
          // Obtener los detalles de la factura
          this.invoiceService.getInvoiceDetailsByNumber(invoiceNumber).subscribe(details => {
            this.invoice.details = details;

          });
        });
      });
      this.companyService.getCompanyByClientId(clientId).subscribe((company: any) => {
        this.company = company;
        console.log(company);
      }, error => {
        console.error('Error al cargar la compañía:', error);
      });
    } else {

    }
  }
}

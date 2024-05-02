// src/app/invoices/components/invoice-card/invoice-card.component.ts
import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-invoice-card',
  templateUrl: './invoice-card.component.html',
  styleUrls: ['./invoice-card.component.css']
})
export class InvoiceCardComponent implements OnInit {
  invoices: any[] = [];
  clients: any[] = [];
  loading: boolean = true;

  constructor(private invoiceService: InvoiceService ,private router: Router) { }

  ngOnInit(): void {
    this.invoiceService.getAllInvoices().subscribe({
      next: (invoices: any[]) => {
        console.log(invoices);
        this.invoices = invoices;
      },
      error: error => {
        console.error(error);
      }
    });

    this.invoiceService.getAllClients().subscribe({
      next: (clients: any[]) => {
        console.log(clients);
        this.clients = clients;
        this.loading = false;
      },
      error: error => {
        console.error(error);
      }
    });
  }

  preview(clientId: string,numberId:string): void {
    this.router.navigate(['invoice-preview', clientId,numberId ]);
  }

}
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent {
  options = [
    {path: '/add-invoice', title: 'add-invoice'}
  ]

  constructor(private router: Router) { }
  addInvoice(): void {
    this.router.navigate(['/add-invoice']); // Navega a la ruta deseada
  }
}

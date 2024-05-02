import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import {Location} from "@angular/common";


@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})

export class AddInvoiceComponent implements OnInit {
  clients: any[] = [];
  today: Date = new Date();
  randomWord: string;
  selectedClient: any;
  selectedVehicles: any;
  services: any[] = [];

  constructor(private invoiceService: InvoiceService,private location: Location) {
    this.randomWord = this.generateRandomWord(8);
  }

  ngOnInit(): void {
    this.invoiceService.getAllClients().subscribe((data: any) => {
      this.clients = data;
      data.forEach((client: any) => {
        this.invoiceService.getVehiclesByClientId(client.id).subscribe((vehicles: any) => {
          client.vehicles = vehicles;
        });
      });
    });
  }

  onClientChange(): void {
    if (this.selectedClient) {
      this.invoiceService.getVehiclesByClientId(this.selectedClient.id).subscribe((vehicles: any) => {
        this.selectedVehicles = vehicles;
      });
    }
  }


  generateRandomWord(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  addService() {
    this.services.push({ name: '', description: '', price: 0 });
  }

  removeService(index: number) {
    this.services.splice(index, 1);
  }

  onCancel(): void {
    this.location.back();
  }

}

import {Component} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-vehicle-card',
  templateUrl: './client-vehicle-card.component.html',
  styleUrl: './client-vehicle-card.component.css'
})
export class ClientVehicleCardComponent {
  clients: any[] = [];

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe((data: any) => {
      this.clients = data;
      data.forEach((client: any) => {
      });
    });
  }
}

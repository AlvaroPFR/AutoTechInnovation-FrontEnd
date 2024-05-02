import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-client-vehicle-list',
  templateUrl: './client-vehicle-list.component.html',
  styleUrl: './client-vehicle-list.component.css'
})
export class ClientVehicleListComponent {
  clients: any;

  constructor(private route: ActivatedRoute,private clientService: ClientService) { }

  ngOnInit(): void {
    const clientId = this.route.snapshot.paramMap.get('id');
    if (clientId) {
      this.clientService.getClientById(clientId).subscribe((client: any) => {
        this.clients = client;
      });
    } else {
    }
  }

}

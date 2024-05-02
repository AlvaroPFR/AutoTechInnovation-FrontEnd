import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent implements OnInit {
  clients: any[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe((data: any) => {
      this.clients = data;
      data.forEach((client: any) => {
      });
    });

  }
}

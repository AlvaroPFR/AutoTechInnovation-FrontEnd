import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-client-delete-confirmation',
  templateUrl: './client-delete-confirmation.component.html',
  styleUrl: './client-delete-confirmation.component.css'
})
export class ClientDeleteConfirmationComponent implements OnInit {
  clients: any;

  constructor(private route: ActivatedRoute, private clientService: ClientService, private location: Location) {
  }

  ngOnInit(): void {
    const clientId = this.route.snapshot.paramMap.get('id');
    if (clientId) {
      this.clientService.getClientById(clientId).subscribe((client: any) => {
        this.clients = client;
      });
    } else {
    }
  }

  onCancel(): void {
    this.location.back();
  }
}

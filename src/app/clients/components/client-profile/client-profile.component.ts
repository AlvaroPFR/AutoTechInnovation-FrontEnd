import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ClientService } from "../../services/client.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {
  clients: any;

  constructor(private route: ActivatedRoute, private clientService: ClientService, private location: Location) { }

  onCancel(): void {
    this.location.back();
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
}

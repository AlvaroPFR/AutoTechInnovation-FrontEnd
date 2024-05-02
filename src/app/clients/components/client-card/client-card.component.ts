import { Component } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {ClientProfileComponent} from "../client-profile/client-profile.component";
import {ClientDeleteConfirmationComponent} from "../client-delete-confirmation/client-delete-confirmation.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrl: './client-card.component.css'
})
export class ClientCardComponent {
  clients: any[] = [];

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe((data: any) => {
      this.clients = data;
      data.forEach((client: any) => {
      });
    });
  }
  options = [
    { path: 'profile', component: ClientProfileComponent },
    { path: 'delete', component: ClientDeleteConfirmationComponent }
  ]
  edit(clientId: string): void {
    this.router.navigate(['/profile', clientId]);
  }
  delete(clientId: string): void {
    this.router.navigate(['/delete',clientId]);
  }
}

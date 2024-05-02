import { Component } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrl: './client-add.component.css'
})
export class ClientAddComponent {
  constructor(private location: Location) {
  }
  onCancel(): void {
    this.location.back();
  }
}

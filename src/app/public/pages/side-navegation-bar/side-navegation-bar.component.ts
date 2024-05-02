import { Component } from '@angular/core';

@Component({
  selector: 'app-side-navegation-bar',
  templateUrl: './side-navegation-bar.component.html',
  styleUrl: './side-navegation-bar.component.css'
})
export class SideNavegationBarComponent {
  options = [
    {path: 'home', title: 'Home', icon: 'home'},
    {path: 'client', title: 'Clients', icon: 'people'},
    {path: 'invoice', title: 'Invoice', icon: 'folder'},
    {path: 'chat', title: 'Chats', icon: 'chat'},
    {path: 'workshop', title: 'Configuration', icon: 'workshop'},
    {path: 'workshop/support', title: 'Support', icon: 'help'},
    {path: 'plans', title: 'Plans', icon: 'payment'}

  ]
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvoiceListComponent} from "./invoices/pages/components/invoice-list/invoice-list.component";
import {InvoicePreviewComponent} from "./invoices/components/invoice-preview/invoice-preview.component";
import {AddInvoiceComponent} from "./invoices/components/add-invoice/add-invoice.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {ClientListComponent} from "./clients/pages/client-list/client-list.component";
import {ClientProfileComponent} from "./clients/components/client-profile/client-profile.component";
import {ClientDeleteConfirmationComponent} from "./clients/components/client-delete-confirmation/client-delete-confirmation.component";
import {ClientAddComponent} from "./clients/components/client-add/client-add.component";

import {WorkshopInfoComponent} from "./workshop/components/workshop-info/workshop-info.component";
import {SupportComponent} from "./workshop/components/support/support.component";
import {PlansListComponent} from "./plans/components/plans-list/plans-list.component";
import {PlansPaymentsComponent} from "./plans/components/plans-payments/plans-payments.component";
import {ChatShowComponent} from "./chat/components/chat-show/chat-show.component";

import {ClientVehicleListComponent} from "./clients/components/client-vehicle-list/client-vehicle-list.component";
import {VehicleAddComponent} from "./vehicles/components/vehicle-add/vehicle-add.component";



const routes: Routes = [
  {path:'invoice', component: InvoiceListComponent},
  {path:'client', component: ClientListComponent},
  { path: 'workshop', component: WorkshopInfoComponent},
  {path: 'workshop/support', component: SupportComponent},
  {path: 'plans-payments', component: PlansPaymentsComponent},
  {path: 'chat', component: ChatShowComponent},
  {path: 'plans', component: PlansListComponent},
  { path: 'workshop-info/:clientId', component: WorkshopInfoComponent},
  {path: 'profile/:id', component: ClientProfileComponent },
  {path:'delete/:id', component: ClientDeleteConfirmationComponent},
  {path:'add', component: ClientAddComponent},
  {path: 'invoice-preview/:clientId/:invoiceId', component: InvoicePreviewComponent },
  {path: 'add-invoice', component: AddInvoiceComponent},
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profile/:id/vehicle-list', component: ClientVehicleListComponent},
  {path: 'profile/:id/add-vehicle', component: VehicleAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

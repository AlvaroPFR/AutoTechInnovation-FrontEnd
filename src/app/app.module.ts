import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDialog, MatDialogModule, MatDialogTitle} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import { SideNavegationBarComponent } from './public/pages/side-navegation-bar/side-navegation-bar.component';
import { AddInvoiceComponent } from './invoices/components/add-invoice/add-invoice.component';
import { InvoiceCardComponent } from './invoices/components/invoice-card/invoice-card.component';
import { InvoicePreviewComponent } from './invoices/components/invoice-preview/invoice-preview.component';
import { InvoiceListComponent } from './invoices/pages/components/invoice-list/invoice-list.component';
import { HomeComponent } from './public/pages/home/home.component';
import { ClientCardComponent } from './clients/components/client-card/client-card.component';
import { ClientProfileComponent } from './clients/components/client-profile/client-profile.component';
import { ClientDeleteConfirmationComponent } from './clients/components/client-delete-confirmation/client-delete-confirmation.component';
import { ClientAddComponent } from './clients/components/client-add/client-add.component';
import { ClientListComponent } from './clients/pages/client-list/client-list.component';

import { WorkshopInfoComponent } from './workshop/components/workshop-info/workshop-info.component';
import { SupportComponent } from './workshop/components/support/support.component';
import { PlansListComponent } from './plans/components/plans-list/plans-list.component';
import { PlansPaymentsComponent } from './plans/components/plans-payments/plans-payments.component';
import { ChatShowComponent } from './chat/components/chat-show/chat-show.component';

import { ClientVehicleCardComponent } from './clients/components/client-vehicle-card/client-vehicle-card.component';
import { ClientVehicleListComponent } from './clients/components/client-vehicle-list/client-vehicle-list.component';
import { VehicleAddComponent } from './vehicles/components/vehicle-add/vehicle-add.component';



@NgModule({
  declarations: [
    AppComponent,
    SideNavegationBarComponent,
    AddInvoiceComponent,
    InvoiceCardComponent,
    InvoicePreviewComponent,
    InvoiceListComponent,
    HomeComponent,
    ClientCardComponent,
    ClientProfileComponent,
    ClientDeleteConfirmationComponent,
    ClientAddComponent,
    ClientListComponent,
    WorkshopInfoComponent,
    SupportComponent,
    PlansListComponent,
    PlansPaymentsComponent,
    ChatShowComponent,
    ClientVehicleCardComponent,
    ClientVehicleListComponent,
    VehicleAddComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatDialogTitle,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

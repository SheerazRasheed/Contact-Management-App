import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactDetailsComponent} from './components/contact-details/contact-details.component';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {ContactMainComponent} from './components/contact-main/contact-main.component';
import {MatIcon} from "@angular/material/icon";
import {ContactRoutingModule} from "./customer-routing-module";
import { ContactTabComponent } from './components/contact-tab/contact-tab.component';


@NgModule({
  declarations: [
    ContactDetailsComponent,
    ContactListComponent,
    ContactMainComponent,
    ContactTabComponent
  ],
  imports: [
    CommonModule,
    MatIcon,
    ContactRoutingModule
  ]
})
export class ContactModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactMainComponent } from './components/contact-main/contact-main.component';



@NgModule({
  declarations: [
    ContactDetailsComponent,
    ContactListComponent,
    ContactMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }

import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ContactMainComponent} from "./components/contact-main/contact-main.component";

const routes: Routes = [
  {path: '', component: ContactMainComponent},
  {path: 'contact', component: ContactMainComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { StringsAddComponent } from './components/strings-add/strings-add.component';
import { StringsEditComponent } from './components/strings-edit/strings-edit.component';
import { StringsDetailComponent } from './components/strings-detail/strings-detail.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"add", component:StringsAddComponent},
  {path:"edit/:id", component:StringsEditComponent},
  {path:"detail/:id", component:StringsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

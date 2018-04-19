import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StringAdminService } from './services/string-admin.service';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { StringsAddComponent } from './components/strings-add/strings-add.component';
import { StringsEditComponent } from './components/strings-edit/strings-edit.component';
import { StringsDetailComponent } from './components/strings-detail/strings-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StringsAddComponent,
    StringsEditComponent,
    StringsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ StringAdminService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

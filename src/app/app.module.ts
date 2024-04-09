import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDropdownComponent } from './components/user-dropdown/user-dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  RegistrationComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    ContactUsComponent,
    UserDropdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

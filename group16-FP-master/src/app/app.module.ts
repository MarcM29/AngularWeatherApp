import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase Integration
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from '../components/weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from '../components/about/about.component';
import { HeaderComponent } from '../components/header/header.component';
import { OurCustomersComponent } from '../components/our-customers/our-customers.component';
import { OurServicesComponent } from '../components/our-services/our-services.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    AboutComponent,
    HeaderComponent,
    OurCustomersComponent,
    OurServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // Firebase Integration
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

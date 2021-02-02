import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from '../components/weather/weather.component';
import { AboutComponent } from '../components/about/about.component';
import { OurServicesComponent } from '../components/our-services/our-services.component';
import { OurCustomersComponent } from '../components/our-customers/our-customers.component';


const routes: Routes = [
  {path: '', component: WeatherComponent},
  {path: 'about', component: AboutComponent},
  {path: 'ourServices', component: OurServicesComponent},
  {path: 'ourCustomers', component: OurCustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = '3fc48d5bde2e6c07b3febe6425997511';
  constructor(private http: HttpClient) { }

getWeatherByName(city){
  const params = new HttpParams()
  .set('q', city)
  .set('units', 'metric')
  .set('appid', this.apiKey);

  return this.http.get(this.url, {params});
}
}

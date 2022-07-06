import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getLocalWeather(lat: number, lon: number): Observable<any> {

    const path = "https://weather-proxy.freecodecamp.rocks/api/current?lat=" + lat + "&lon=" + lon

    return this.http.get(path)
  }

}

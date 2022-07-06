import { Component, OnInit } from '@angular/core';
import { LocalWeather } from '../models/localWeather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  localWeather: LocalWeather | null
  showAlertMessage: boolean

  constructor(private weatherService: WeatherService) {
    this.localWeather = null
    this.showAlertMessage = false
  }

  ngOnInit(): void {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {

        this.weatherService.getLocalWeather(position.coords.latitude, position.coords.longitude).subscribe(data => {
          this.localWeather = data;
        })

      }, error => {
          this.showAlertMessage = true  
      });

    } else {
      this.showAlertMessage = true
    }

  }

}

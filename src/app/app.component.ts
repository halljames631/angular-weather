import { Component } from '@angular/core';
import { WeatherService } from './weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: Object;

  constructor(private weather: WeatherService){}

  ngOnInit() {
    this.weather.getWeather().subscribe(data => {
      console.log(data)
      this.data = data
    })
  }
}

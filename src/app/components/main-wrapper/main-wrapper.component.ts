import {Component, OnInit} from '@angular/core';
import {MainService} from '../../services/main.service';
import {Subscription} from 'rxjs';
import {WeatherData} from '../../interfaces/weather-data';
@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.css']
})
export class MainWrapperComponent implements OnInit {
  subscription: Subscription;
  weatherDataSubscription: Subscription;
   visableStateSpinner: boolean;
  weatherData: WeatherData;
  constructor(private mainService: MainService) {
    this.visableStateSpinner = false;
  }
  ngOnInit(): void {
    setTimeout(() => {this.visableStateSpinner = true; }, 10)
    this.setDataByGeographicCoordinates();
    this.setDataByCityName();
    this.getWeatherData();
  }

  getWeatherData() {
    this.weatherDataSubscription = this.mainService.getWeatherData().subscribe(res => {
      this.weatherData = res;
      console.log(res);
    });
  }

  setDataByGeographicCoordinates() {

    this.mainService.getPosition().then(pos => {
      // @ts-ignore
      this.mainService.getByGeographicCoordinates(pos.lat, pos.lon).subscribe(res => {
          this.setDataWeather(res);
          this.visableStateSpinner = false;
        },
        err => console.log('HTTP Error', err));
    });
  }


  setDataByCityName() {
    this.subscription = this.mainService.getCityName().subscribe(name => {
      this.visableStateSpinner = true;
      this.mainService.getByName(name.name).subscribe(res => {
          this.setDataWeather(res);
          this.visableStateSpinner = false;
        },
        err => console.log('HTTP Error', err));
    });
  }

  setDataWeather(res) {
    const weatherArray = [];
    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    weatherArray.push({temp: res.list[0].main.temp, icon: res.list[0].weather[0].icon, name:  res.list[0].weather[0].main, description:  res.list[0].weather[0].description, date: res.list[0].dt_txt});
    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    weatherArray.push({temp: res.list[1].main.temp, icon: res.list[1].weather[0].icon, name:  res.list[1].weather[0].main, description:  res.list[1].weather[0].description, date: res.list[1].dt_txt});
    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    weatherArray.push({temp: res.list[2].main.temp, icon: res.list[2].weather[0].icon, name:  res.list[2].weather[0].main, description:  res.list[2].weather[0].description, date: res.list[2].dt_txt});
    // @ts-ignore
    const weatherDataObject: WeatherData = {
      cityName : res.city.name,
      countryName : res.city.country,
      weather : weatherArray
    };
   // console.log(weatherDataObject);
    this.mainService.setWeatherData(weatherDataObject);
  }


}

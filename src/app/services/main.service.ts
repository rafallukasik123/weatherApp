import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {WeatherData} from '../interfaces/weather-data';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  private key: string;
  private endpointAddreas: string;
  private subject = new Subject<any>();
  private dataSubject = new Subject<any>();
  constructor(private http: HttpClient) {
  this.endpointAddreas = 'http://api.openweathermap.org';
  this.key = '10d35fcce7c02936d78262262d8ebda4';
  }

  sendCityName(cityName: string) {
    this.subject.next({ name: cityName });
  }

  getCityName(): Observable<any> {
    return this.subject.asObservable();
  }

  setWeatherData(weatherData: WeatherData) {
    this.dataSubject.next(weatherData);
  }
  getWeatherData(): Observable<any> {
    return this.dataSubject.asObservable();
  }

  getPosition() {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lon: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }
  getByGeographicCoordinates(lat: number, lon: number) {
    // tslint:disable-next-line:radix
    return this.http.get(`${this.endpointAddreas}/data/2.5/forecast?lat=${parseInt(String(lat))}&lon=${parseInt(String(lon))}&APPID=${this.key}`);
  }
  getByName(name: string) {
    // tslint:disable-next-line:radix
    return this.http.get(`${this.endpointAddreas}/data/2.5/forecast?q=${name}&APPID=${this.key}`);
  }

}


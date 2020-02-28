import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  private key: string;
  private endpointAddreas: string;

  constructor(private http: HttpClient) {
  this.endpointAddreas = 'http://api.openweathermap.org';
  this.key = '10d35fcce7c02936d78262262d8ebda4';
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
    return this.http.get(`${this.endpointAddreas}/data/2.5/forecast?lat=${parseInt(lat)}&lon=${parseInt(lon)}&APPID=${this.key}`);
  }
}


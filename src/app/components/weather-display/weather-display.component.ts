import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MainService} from '../../services/main.service';
import {WeatherData} from '../../interfaces/weather-data';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit {
  @Input() weatherData: WeatherData;

  constructor(private mainService: MainService) {

  }
  ngOnInit(): void {

  }


}

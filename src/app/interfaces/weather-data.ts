import {WeatherDataDetailArrayElement} from './weather-data-detail-array-element';



export interface WeatherData {
  cityName: string;
  countryName: string;
  weather: WeatherDataDetailArrayElement[];

}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = ''
  constructor(
    private http: HttpClient,
  ) { }

  getWeatherDatas(cityName: string):Observable<any> {
      return this.http.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&node=json&appid=${this.apiKey}`,
        {})
  }

}

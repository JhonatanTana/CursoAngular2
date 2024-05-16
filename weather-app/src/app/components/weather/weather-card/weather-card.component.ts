import {Component, Input, OnInit} from '@angular/core';
import { Weather } from "../../interfaces/Weather";
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css'
})
export class WeatherCardComponent {
  @Input() weatherDatas !: Weather //Dados da previsao recebidos pelo componente pai

  minTemperatureIcon = faTemperatureLow
  maxTemperatureIcon = faTemperatureHigh
  humidityIcon = faDroplet
  windIcon = faWind
}

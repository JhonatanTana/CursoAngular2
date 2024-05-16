import {Component, OnDestroy, OnInit} from '@angular/core';
import { WeatherService } from "../../services/weather.service";
import { Weather } from "../../../interfaces/Weather";
import { Subject, takeUntil } from "rxjs";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrl: './weather-home.component.css'
})
export class WeatherHomeComponent implements  OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject() // Para de ler o observable apos sair da pagina
  initialCityName = "Sao Paulo";
  weatherDatas !: Weather; // Weather é a interface
  searchIcon = faMagnifyingGlass

  constructor(
    private weatherServices:WeatherService,
  ) {}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName:string) {
    this.weatherServices.getWeatherDatas(cityName)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
      next: (response) => {
        response && (this.weatherDatas = response)
        console.log(this.weatherDatas)
      }
    });
  }

  onSubmit() {

    this.getWeatherDatas(this.initialCityName)
    this.initialCityName = ''

  }

  ngOnDestroy(): void {

    this.destroy$.next()
    this.destroy$.complete()

  }

  protected readonly WeatherService = WeatherService;
}

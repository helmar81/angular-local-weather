import { Observable, of } from 'rxjs'

import { IWeatherService } from './weather.service'
import { ICurrentWeather } from '../interfaces'

export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Bogor',
    country: 'ID',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'light intensity drizzle'
  }

  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(this.fakeWeather)
  }
}

import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { MaterialModule } from './material.module'
import { FlexLayoutModule } from '@angular/flex-layout'

import { AppComponent } from './app.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { WeatherService } from './weather/weather.service'

@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent],
  imports: [
    BrowserModule, HttpClientModule,
    MaterialModule, FlexLayoutModule,
    FormsModule, ReactiveFormsModule],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}

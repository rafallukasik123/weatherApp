import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { TemperatureConverterPipe } from './pipes/temperature-converter.pipe';
import { ErrorMessageComponent } from './components/error-message/error-message.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MainWrapperComponent,
    ProgressSpinnerComponent,
    WeatherDisplayComponent,
    TemperatureConverterPipe,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

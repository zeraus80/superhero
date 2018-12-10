import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SuperheroService } from './superhero.service';
import { superheroReducer } from './store/superhero.reducers';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot({superhero: superheroReducer})
    ],
    declarations: [AppComponent],
    providers: [SuperheroService]
})
export class AppModule {
}
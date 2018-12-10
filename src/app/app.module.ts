import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SuperheroService } from './services/superhero.service';
import { superheroReducer } from './store/superhero.reducers';
import { SuperheroesListComponent } from './components/superheroes-list/superheroes-list.component';

const appRoutes: Routes = [
    { path: 'superheroes'}
];

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot({superhero: superheroReducer})
    ],
    declarations: [AppComponent, SuperheroesListComponent],
    providers: [SuperheroService]
})
export class AppModule {
}
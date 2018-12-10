import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SuperheroService } from './services/superhero.service';
import { superheroReducer } from './store/superhero.reducers';
import { SuperheroesListComponent } from './components/superheroes-list/superheroes-list.component';
import { SuperheroDetailComponent } from './components/superhero-detail/superhero-detail.component';

const appRoutes: Routes = [
    { path: '', component: SuperheroesListComponent },
    { path: 'superheroes', component: SuperheroesListComponent },
    { path: 'superheroes/:id', component: SuperheroDetailComponent }
];

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot({superhero: superheroReducer}),
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent, 
        SuperheroesListComponent, 
        SuperheroDetailComponent
    ],
    providers: [SuperheroService]
})
export class AppModule {
}
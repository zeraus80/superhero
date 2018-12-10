import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
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
        ReactiveFormsModule,
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
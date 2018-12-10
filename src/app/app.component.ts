import { Component, OnInit } from '@angular/core';
import '../main.scss';
import { SuperheroService } from './superhero.service';
import { Store } from '@ngrx/store';
import { Superhero } from './model/superhero.model';
import * as SuperheroActions from './store/superhero.actions';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    superheroes: any[] = [];

    constructor(private superheroService: SuperheroService, 
                private store: Store<{superhero: {superheroes: Superhero[]}}>) {
        console.log('I am Angular!');
    }

    ngOnInit() {
        this.superheroService.getSuperheroes().subscribe((data: any) => {
            this.superheroes = data;
            this.store.dispatch(new SuperheroActions.AddSuperheroes(data));
        });
    }

    convertToMeters(value) {
        return ((value * 30.48) / 100).toFixed(2);
    }
}
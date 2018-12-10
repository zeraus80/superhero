import { Component, OnInit } from '@angular/core';
import '../main.scss';
import { SuperheroService } from './superhero.service';
import { Store } from '@ngrx/store';
import { Superhero } from './model/superhero.model';
import * as SuperheroActions from './store/superhero.actions';
import { Observable } from 'rxjs';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    superheroesState: Observable<{superheroes: Superhero[]}>;

    constructor(private superheroService: SuperheroService,
                private store: Store<{superhero: {superheroes: Superhero[]}}>) {
    }

    ngOnInit() {
        this.superheroesState = this.store.select('superhero');
        this.superheroService.getSuperheroes().subscribe((data: any) => {
            this.store.dispatch(new SuperheroActions.AddSuperheroes(data));
        });
    }

    convertToMeters(value) {
        return ((value * 30.48) / 100).toFixed(2);
    }
}
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { SuperheroService } from '../../services/superhero.service';
import { Superhero } from '../../model/superhero.model';
import * as SuperheroActions from '../../store/superhero.actions';

@Component({
    selector: 'superheroes-list',
    templateUrl: './superheroes-list.component.html',
    styleUrls: ['./superheroes-list.component.scss']
})
export class SuperheroesListComponent implements OnInit {

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
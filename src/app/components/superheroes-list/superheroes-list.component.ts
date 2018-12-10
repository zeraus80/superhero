import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { SuperheroService } from '../../services/superhero.service';
import { Superhero } from '../../model/superhero.model';
import * as SuperheroActions from '../../store/superhero.actions';
import { Router } from '@angular/router';

@Component({
    selector: 'superheroes-list',
    templateUrl: './superheroes-list.component.html',
    styleUrls: ['./superheroes-list.component.scss']
})
export class SuperheroesListComponent implements OnInit {

    superheroesState: Observable<{superheroes: Superhero[]}>;

    constructor(private superheroService: SuperheroService,
                private store: Store<{superhero: {superheroes: Superhero[]}}>,
                private router: Router) {
    }

    ngOnInit() {
        this.superheroesState = this.store.select('superhero');
        this.superheroesState.subscribe((data: {superheroes: Superhero[]}) => {
            if (!data.superheroes.length) {
                this.superheroService.getSuperheroes().subscribe((data: any) => {
                    this.store.dispatch(new SuperheroActions.AddSuperheroes(this.adaptData(data)));
                });
            }
        });
    }

    convertToMeters(value) {
        return ((value * 30.48) / 100).toFixed(2);
    }

    viewSuperhero(superhero: Superhero) {
        this.router.navigate(["../superheroes", superhero.id]);
    }

    private adaptData(superheroes: Superhero[]) {
        return superheroes.map((hero: Superhero, index) => {
            return {
                ...hero,
                id: index,
                _height: this.convertToMeters(hero._height)
            };
        });
    }
}
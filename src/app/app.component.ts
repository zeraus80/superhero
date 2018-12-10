import '../main.scss';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { SuperheroService } from './services/superhero.service';
import { Superhero } from './model/superhero.model';
import * as SuperheroActions from './store/superhero.actions';

@Component({
    selector: 'superheroes-app',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
}
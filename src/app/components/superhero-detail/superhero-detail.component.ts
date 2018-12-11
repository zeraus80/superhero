import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Superhero } from "../../model/superhero.model";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import * as SuperheroActions from '../../store/superhero.actions';

@Component({
    selector: 'superhero-detail',
    templateUrl: './superhero-detail.component.html',
    styleUrls: ['./superhero-detail.component.scss']
})
export class SuperheroDetailComponent implements OnInit {

    superhero: Superhero;
    form: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private store: Store<{superhero: {superheroes: Superhero[]}}>,
        private router: Router) {}

    ngOnInit() {
        this.form = new FormGroup({
            'superhero': new FormGroup({
                '_nickname': new FormControl("", Validators.required),
                '_name': new FormControl("", Validators.required),
                '_height': new FormControl("", Validators.required)
            })
        });

        const superheroId = parseInt(this.route.snapshot.paramMap.get('id'));
        this.store.select('superhero').subscribe((data: {superheroes: Superhero[]}) => {
            this.superhero = data.superheroes[superheroId];
            const { _nickname, _name, _height } = this.superhero;
            this.form.controls[ "superhero" ].setValue({_nickname, _name, _height});
        });
    }

    updateSuperhero() {
        this.store.dispatch(new SuperheroActions.UpdateSuperhero({
            index: this.superhero.id,
            superhero: this.form.getRawValue().superhero
        }));
        this.router.navigate(["../superheroes"]);
    }

}
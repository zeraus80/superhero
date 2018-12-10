import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Superhero } from "../../model/superhero.model";
import { Observable } from "rxjs";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

@Component({
    selector: 'superhero-detail',
    templateUrl: './superhero-detail.component.html',
    styleUrls: ['./superhero-detail.component.scss']
})
export class SuperheroDetailComponent implements OnInit {

    superhero: Superhero;
    form: FormGroup;
    nickname = new FormControl("", Validators.required);

    constructor(
        private route: ActivatedRoute,
        private store: Store<{superhero: {superheroes: Superhero[]}}>,
        private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            nickname: this.nickname,
        });
        const superheroId = parseInt(this.route.snapshot.paramMap.get('id'));
        this.store.select('superhero').subscribe((data: {superheroes: Superhero[]}) => {
            this.superhero = data.superheroes[superheroId];
        });
    }

}
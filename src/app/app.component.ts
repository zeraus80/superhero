import { Component, OnInit } from '@angular/core';
import '../main.scss';
import { SuperheroService } from './superhero.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    superheroes: any[] = [];

    constructor(private superheroService: SuperheroService) {
        console.log('I am Angular!');
    }

    ngOnInit() {
        this.superheroService.getSuperheroes().subscribe((data: any) => {
            this.superheroes = data;
        });
    }

    convertToMeters(value) {
        return ((value * 30.48) / 100).toFixed(2);
    }
}
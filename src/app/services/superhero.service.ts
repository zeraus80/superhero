import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SuperheroService {

    private heroesUrl = 'https://udem.herokuapp.com/heroes';

    constructor(private http: HttpClient) {}

    getSuperheroes() {
        return this.http.get(this.heroesUrl);
    }
}
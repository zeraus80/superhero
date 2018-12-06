import { Component } from '@angular/core';
import '../main.scss';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor() {
        console.log('I am Angular!');
    }
}
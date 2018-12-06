import { Component } from '@angular/core';
import '../main.scss';

@Component({
    selector: 'my-app',
    template: '<h1>Hello World!</h1>'
})
export class AppComponent {
    
    constructor() {
        console.log('I am Angular!');
    }
}
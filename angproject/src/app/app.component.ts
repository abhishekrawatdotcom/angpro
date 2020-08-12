import { Component } from '@angular/core';
import { person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
p1= new person();
}

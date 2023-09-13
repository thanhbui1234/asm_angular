import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sum22';
  myName: string = 'Le Trong Dat';
  myInfo: { name: string, age: number } = {
    name: "Dat",
    age: 20
  }
}
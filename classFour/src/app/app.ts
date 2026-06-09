import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Employee {
  name: string;
  age: number;
  id?:number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('classFour');

  isLoggedin = true;
  name = "Ayesha Moazzam";

  employee:Employee[] = [
      {name: "Ayesha", age: 18, id: 1},
      {name: "Eman", age: 17, id:2},
      {name: "Aiman", age: 19, id:3}
  ]
}
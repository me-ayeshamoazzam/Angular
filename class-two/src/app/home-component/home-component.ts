import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home-component',
  imports: [FormsModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  message: string = "ayesha";


  onchange(value: string){
    this.message = value;
  }

  updateMessage():void{
    this.message = "Updated message"
  }
}

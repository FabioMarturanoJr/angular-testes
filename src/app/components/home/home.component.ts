import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name = "Fulano";
  showList = false;

  carList = [
    { id: 1, year: 1990, name: "Escort" }, 
    { id: 2, year: 2000, name: "Civic Si" }, 
    { id: 3, year: 2010, name: "Malibu" }, 
    { id: 4, year: 2020, name: "Nivus" },]

  updateShowList(value: boolean) {
    this.showList = value;
  }
}

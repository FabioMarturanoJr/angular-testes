import { Component, inject } from '@angular/core';
import { HelpersService } from '../../services/helpers.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private helperService = inject(HelpersService)

  name = "Fulano";
  showList = false;

  carList = [
    { id: 1, year: 1990, name: "Escort" }, 
    { id: 2, year: 2000, name: "Civic Si" }, 
    { id: 3, year: 2010, name: "Malibu" }, 
    { id: 4, year: 2020, name: "Nivus" },]

  updateShowList(value: boolean) {
    this.helperService.registerList(this.carList);
    this.showList = value;
  }
}

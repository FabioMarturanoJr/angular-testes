import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})


export class MainComponent {
  name = "";
  query = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = <string>this.route.snapshot.paramMap.get('name');
    this.query = <string>this.route.snapshot.queryParamMap.get('param')
  }
}

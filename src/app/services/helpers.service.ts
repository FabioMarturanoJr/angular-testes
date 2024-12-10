import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }

  registerList(list: Array<object>){
    console.log(list)
  }
}

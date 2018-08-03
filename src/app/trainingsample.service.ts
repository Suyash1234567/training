import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainingsampleService {
data;
  constructor() { }
  check(str:string){
    console.log("in service", str)
    this.data = str
  }
  getData(){
    return this.data
  }
}

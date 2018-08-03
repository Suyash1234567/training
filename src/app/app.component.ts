import { Component } from '@angular/core';
import { TrainingsampleService } from './trainingsample.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training';
  color;
constructor(private serviceTraining : TrainingsampleService,private router:Router){}
onButtonClick(){
  this.serviceTraining.check("1234")
}

}



import { Component, OnInit } from '@angular/core';
import { TrainingsampleService } from '../trainingsample.service'




@Component({
  selector: 'app-kartik',
  templateUrl: './kartik.component.html',
  styleUrls: ['./kartik.component.css']
})
export class KartikComponent implements OnInit {
  username: string;
  password: string;

  constructor(private serviceTraining: TrainingsampleService) { }

  ngOnInit() {
    // this.data = this.serviceTraining.getData();
    // console.log(this.data, "in second componenet");
  }
  onSubmit() {
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);

  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrainingDirective } from './training.directive';
import { FormsModule } from "@angular/forms"
import { TrainingsampleService } from "./trainingsample.service";
import { KartikComponent } from './kartik/kartik.component'
import {RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './login/login.component'
import { AuthService } from './auth.service';

const routes:Routes=[{
  path:'kartik',
  component: KartikComponent,
  
},
  {
    path : '',
    component : AppComponent
  },
  {
    path : 'login',
    component : LoginComponent,
    canActivate : [AuthService]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    TrainingDirective,
    KartikComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    TrainingsampleService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

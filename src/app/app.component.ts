import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks = [{
    text :"first task",
    description:"des 1",
    completed: false,
  },{
    text :"second task",
    description:"des 2",
    completed: false,
  },{
    text :"third task",
    description:"des 3",
    completed: false,
  }];
  myEventDelete(event:any){
    this.tasks = [...event];
    
  }
  updateTask(event:any){
   this.tasks = [...event];
  }
}

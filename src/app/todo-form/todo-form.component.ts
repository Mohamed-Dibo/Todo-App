import { Component, OnInit ,Input ,Output ,EventEmitter} from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Input() tasks:any
  @Output() myEvent = new EventEmitter<any>();
  Title: string = "";
  description: string = "";
  constructor() { }

  ngOnInit(): void {
    
  }
  addToList(){
    if(this.Title !==""){
      this.tasks.push({
        text : this.Title,
        description : this.description,
        completed: false
      });
      this.Title = "";
      this.description = "";
      this.myEvent.emit(this.tasks);
    }else{
      Swal.fire({
        title: 'validation!',
        text: 'title required *',
        icon: 'error',
        confirmButtonText: 'ok'
      })
    }
   
    
  }
}

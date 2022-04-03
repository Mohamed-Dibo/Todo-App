import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() tasks: any;
  @Output() myEventDelete = new EventEmitter<any>();
  completedTask: any = 0;
  constructor() {}

  ngOnInit(): void {}
  filterComlatedTask() {
    this.completedTask = this.tasks.filter((task: any) => task.completed);
  }
  deleteTask(i: number) {
    this.tasks = this.tasks.filter((task: any, index: number) => i != index);
    this.myEventDelete.emit(this.tasks);
    this.filterComlatedTask();
  }
  editTask(i: number) {
    let targetTask = this.tasks.filter(
      (task: any, index: number) => i === index
    );
    let newTitle = prompt('title', targetTask[0].text);
    let newDescription = prompt('description', targetTask[0].description);
    if (newTitle && newDescription !== null) {
      this.tasks.map((task: any, index: number) => {
        if (index === i) {
          task.text = newTitle;
          task.description = newDescription;
        }
      });
    }
  }
  completedToggle(index: number) {
    this.tasks.map((task: any, idx: number) => {
      if (index == idx) {
        task.completed = !task.completed;
      }
    });
    this.filterComlatedTask();
  }
  showComplated() {
    if (this.completedTask == 0) {
      Swal.fire({
        title: 'task complated!',
        text: 'no task complated',
        icon: 'error',
        confirmButtonText: 'ok',
      });
    } else {
      this.filterComlatedTask();
      this.completedTask.forEach((element: any) => {
        Swal.fire({
          title: `title : ${element.text}`,
          text: `description : ${element.description}`,
          icon: 'success',
          confirmButtonText: 'ok',
        });
      });
    }
  }
}

import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(public taskService : TaskService) { }

  ngOnInit() {
  }

  addTask(newTitle: HTMLInputElement, newDescription: HTMLInputElement){
    this.taskService.addTask({
      title: newTitle.value,
      description: newDescription.value,
      hide: true
    });

    newTitle.value = '';
    newDescription.value = '';
    newTitle.focus;
    
    return false;
  }

}

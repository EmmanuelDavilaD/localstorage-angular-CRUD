import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

    tasks: Task[];
  constructor(public taskService: TaskService) {
  
   }

  ngOnInit() {
    this.tasks= this.taskService.getTask();
  }

}

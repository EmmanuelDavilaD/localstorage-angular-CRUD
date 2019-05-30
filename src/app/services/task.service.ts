import { Task } from './../models/task';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
tasks : Task[];

  constructor() { 
    this.tasks = [
  //    {title: 'write', description: 'I have to write', hide: true} ,
  //    {title: 'create website', description: 'I have to create a website', hide: true}
    ];
  }

  getTask(){
    if(localStorage.getItem('tasks') === null){
      return this.tasks;
    }else{
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
      return this.tasks;
    }
  
  }

  addTask(task: Task){
    this.tasks.push(task);
    let tasks: Task[] = [];
    if(localStorage.getItem('tasks') === null){ // si no existe
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks)); //convierte un arreglo en una string
    } else { //si existe
      tasks = JSON.parse(localStorage.getItem('tasks')); //parse convierte un string en un arreglo
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  deleteTask(task: Task){
    for(let i = 0; i < this.tasks.length; i++) {
      if (task == this.tasks[i]) {
        this.tasks.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
  }
}

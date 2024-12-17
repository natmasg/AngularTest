import { Component } from '@angular/core';
import { Task, TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  title = '';
  description = '';

  constructor(private taskService: TaskService) { }

  addTask(): void {
    if (this.title.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: this.title,
        description: this.description,
        completed: false
      };
      this.taskService.addTask(newTask);
      this.title = '';
      this.description = '';
    }
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class TaskListComponent {
  tasks: Task[] = [
    { id: 1, title: 'Tarea 1', description: 'Descripción 1', completed: false },
    { id: 2, title: 'Tarea 2', description: 'Descripción 2', completed: true }
  ];

  toggleCompletion(task: Task) {
    task.completed = !task.completed;
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
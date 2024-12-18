import { Component } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  title: string = '';
  description: string = ''; // Asegúrate de que esta propiedad esté definida

  constructor() {}

  addTask() {
    console.log('Agregando tarea:', { title: this.title, description: this.description });
    this.title = '';
    this.description = '';
  }
}


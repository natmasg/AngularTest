import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'; // Importar como standalone
import { TaskListComponent } from './components/task-list/task-list.component'; // Importar como standalone
import { TaskFormComponent } from './components/task-form/task-form.component'; // Importar como standalone
import { TaskService } from './services/task.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent, // Importar el standalone
    TaskListComponent, // Importar el standalone
    TaskFormComponent // Importar el standalone
  ],
  providers: [TaskService],
  bootstrap: [AppComponent] // Componente de inicio
})
export class AppModule { }

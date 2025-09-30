import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Task, TaskPayload } from './models/task.model';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TaskForm, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private nextId = 2;

  protected readonly tasks = signal<Task[]>([
    {
      id: 1,
      title: 'Explorar componentes',
      description: 'Crear componentes y practicar @Input/@Output.',
      createdAt: new Date(),
      completed: false
    },
    {
      id: 2,
      title: 'Probar directivas',
      description: 'Aplicar *ngFor y *ngIf en la lista de tareas.',
      createdAt: new Date(),
      completed: true
    }
  ]);

  protected readonly completedTasks = computed(() =>
    this.tasks().filter(task => task.completed).length
  );

  protected readonly pendingTasks = computed(
    () => this.tasks().length - this.completedTasks()
  );

  protected readonly selectedTask = signal<Task | null>(null);

  protected handleSave(payload: TaskPayload): void {
    const current = this.selectedTask();

    if (current) {
      this.tasks.update(tasks =>
        tasks.map(task =>
          task.id === current.id
            ? { ...task, title: payload.title, description: payload.description }
            : task
        )
      );
    } else {
      const newTask: Task = {
        id: this.generateId(),
        title: payload.title,
        description: payload.description,
        createdAt: new Date(),
        completed: false
      };

      this.tasks.update(tasks => [newTask, ...tasks]);
    }

    this.selectedTask.set(null);
  }

  protected toggleComplete(id: number): void {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  protected startEdit(task: Task): void {
    this.selectedTask.set({ ...task });
  }

  protected removeTask(id: number): void {
    this.tasks.update(tasks => tasks.filter(task => task.id !== id));

    if (this.selectedTask()?.id === id) {
      this.selectedTask.set(null);
    }
  }

  protected clearSelection(): void {
    this.selectedTask.set(null);
  }

  private generateId(): number {
    this.nextId += 1;
    return this.nextId;
  }
}

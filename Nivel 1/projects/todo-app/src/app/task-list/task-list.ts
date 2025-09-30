import { DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe, UpperCasePipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  @Input() tasks: Task[] = [];
  @Output() toggleComplete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<number>();

  protected trackById = (_: number, task: Task) => task.id;

  protected toggle(task: Task): void {
    this.toggleComplete.emit(task.id);
  }

  protected editTask(task: Task): void {
    this.edit.emit(task);
  }

  protected deleteTask(id: number): void {
    this.delete.emit(id);
  }
}
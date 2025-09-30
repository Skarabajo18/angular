import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task, TaskPayload } from '../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})
export class TaskForm implements OnChanges {
  @Input() task: Task | null = null;
  @Output() save = new EventEmitter<TaskPayload>();
  @Output() cancel = new EventEmitter<void>();

  protected model: TaskPayload = { title: '', description: '' };
  protected isEditing = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['task']) {
      this.isEditing = !!this.task;
      this.model = this.task
        ? { title: this.task.title, description: this.task.description }
        : { title: '', description: '' };
    }
  }

  protected submit(): void {
    const trimmedTitle = this.model.title.trim();
    if (!trimmedTitle) {
      return;
    }

    this.save.emit({
      title: trimmedTitle,
      description: this.model.description.trim()
    });

    this.reset();
  }

  protected handleCancel(): void {
    this.reset();
    this.cancel.emit();
  }

  private reset(): void {
    this.isEditing = false;
    this.model = { title: '', description: '' };
  }
}
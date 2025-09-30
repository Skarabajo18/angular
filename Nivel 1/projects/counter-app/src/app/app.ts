import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count = 0;
  step = 1;
  min = -10;
  max = 10;

  get isAtMin(): boolean {
    return this.count <= this.min;
  }

  get isAtMax(): boolean {
    return this.count >= this.max;
  }

  increment(): void {
    this.normalizeStep();
    this.count = Math.min(this.count + this.step, this.max);
  }

  decrement(): void {
    this.normalizeStep();
    this.count = Math.max(this.count - this.step, this.min);
  }

  clampCount(): void {
    if (!Number.isFinite(this.count)) {
      this.count = 0;
    }

    if (this.count > this.max) {
      this.count = this.max;
    }

    if (this.count < this.min) {
      this.count = this.min;
    }
  }

  normalizeStep(): void {
    if (!Number.isFinite(this.step) || this.step < 1) {
      this.step = 1;
      return;
    }

    this.step = Math.round(this.step);
  }

  updateMin(): void {
    if (!Number.isFinite(this.min)) {
      this.min = -10;
    }

    if (this.min > this.max) {
      this.max = this.min;
    }

    this.clampCount();
  }

  updateMax(): void {
    if (!Number.isFinite(this.max)) {
      this.max = this.min;
    }

    if (this.max < this.min) {
      this.min = this.max;
    }

    this.clampCount();
  }

  reset(): void {
    this.count = 0;
    this.step = 1;
    this.min = -10;
    this.max = 10;
  }
}

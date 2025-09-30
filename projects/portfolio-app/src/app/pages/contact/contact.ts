import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { portfolio } from '../../data/portfolio';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  protected readonly contact = portfolio.contact;
  protected formModel = {
    name: '',
    email: '',
    message: ''
  };
  protected submitted = false;

  protected sendMessage(): void {
    if (!this.formModel.name.trim() || !this.formModel.email.trim() || !this.formModel.message.trim()) {
      return;
    }

    this.submitted = true;
    this.formModel = { name: '', email: '', message: '' };
  }
}

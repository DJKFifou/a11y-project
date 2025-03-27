import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'a11y-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  private router = inject(Router);
  email = '';

  signIn() {
    alert('Thank you for selling your soul to the devil!');
  }

  goToLegal() {
    this.router.navigateByUrl('/legal-notices');
  }

  goToConfidentiality() {
    this.router.navigateByUrl('/confidentiality');
  }
}

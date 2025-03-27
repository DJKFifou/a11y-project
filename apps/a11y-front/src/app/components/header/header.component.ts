import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'a11y-header',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private router = inject(Router);
  authService = inject(AuthService);
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.classList.toggle('menu-open', this.isMenuOpen);
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';

    const menuElement = document.querySelector('.header__menu');
    const burgerButton = document.querySelector('.header__burger-btn');

    if (menuElement) {
      menuElement.setAttribute('aria-hidden', (!this.isMenuOpen).toString());
    }

    if (burgerButton) {
      burgerButton.setAttribute('aria-expanded', this.isMenuOpen.toString());
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      this.isMenuOpen &&
      !target.closest('.header__menu') &&
      !target.closest('.header__burger-btn')
    ) {
      this.toggleMenu();
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (this.isMenuOpen && window.innerWidth > 768) {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    }
  }

  private navigateTo(path: string) {
    this.router.navigateByUrl(path).then(() => {
      if (this.isMenuOpen) {
        this.toggleMenu();
      }
    });
  }

  goToContact() {
    this.navigateTo('/contact');
  }

  goToAbout() {
    this.navigateTo('/about');
  }

  goToRegister() {
    this.navigateTo('/register');
  }

  goToLogin() {
    this.navigateTo('/login');
  }

  goToNews() {
    this.navigateTo('/news');
  }

  logout() {
    this.authService.logout();
    if (this.isMenuOpen) {
      this.toggleMenu();
    }
  }

  constructor(public translate: TranslateService) {}

  changeLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target) {
      this.translate.use(target.value);
    }
  }

  get currentLanguage(): string {
    return this.translate.currentLang || 'fr';
  }
}

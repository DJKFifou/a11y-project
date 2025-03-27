import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { en } from './translations/en';
import { fr } from './translations/fr';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    CookieBannerComponent,
  ],
  selector: 'a11y-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'a11y-front';

  constructor(private readonly translate: TranslateService) {
    this.manageTranslations();
    this.getGeolocation();
    this.setNotifications();
  }

  private availableLanguages = ['fr', 'en'];

  private manageTranslations() {
    this.translate.setTranslation('fr', fr);
    this.translate.setTranslation('en', en);
    this.translate.setDefaultLang('fr');

    const browserLanguages = window.navigator?.languages || [];
    for (const language of browserLanguages) {
      const languageCode = language.split('-')[0]?.toLowerCase();
      if (this.availableLanguages.includes(languageCode)) {
        this.translate.use(languageCode);
        return;
      }
    }
  }

  changeLanguage(lang: string) {
    if (this.availableLanguages.includes(lang)) {
      this.translate.use(lang);
    }
  }

  private getGeolocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        // We will send this over later
        // doSomething(position.coords.latitude, position.coords.longitude);
      });
    }
  }

  private setNotifications() {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        // To use later
      }
    });
  }
}

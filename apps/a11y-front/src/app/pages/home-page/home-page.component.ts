import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'a11y-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, TranslateModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {}

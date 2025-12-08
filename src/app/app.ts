import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatePipe, TitleCasePipe } from '@angular/common';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


import { HoverHighlightDirective } from './shared/hover-highlight';
import { TitlePrefixPipe } from './shared/title-prefix-pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    DatePipe,
    TitleCasePipe,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HoverHighlightDirective,
    TitlePrefixPipe,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  appTitle = 'Harmandeep Singh';
  today = new Date();
  currentYear = this.today.getFullYear();
}

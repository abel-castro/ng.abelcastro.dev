import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng.abelcastro.dev';

  currentYear: number;

  constructor() {
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
  }
}

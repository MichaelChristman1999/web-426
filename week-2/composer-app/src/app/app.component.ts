/**
 * Title: app.component.ts
 * Author: Jennifer Hoitenga
 * Date: August 16, 2023
 * Description: This code defines the component for the composer app project.
 * Sources Used:
 * Angular Tutorial for Beginners video by Professor Krasso
 * Angular Tutorial - Data Binding & *ng Directives by Professor Krasso
 * Bootstrap: https://getbootstrap.com/
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'composer-app';
  /* Adding Assignment Title */
  assignment: string = 'Composer App';
}

/**
 * Title: app.component.ts
 * Author: Jennifer Hoitenga
 * Date: August 30, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: - Services video by Professor Krasso (https://youtu.be/vpcJciyUrFg)
 * Angular Tutorial for Beginners: Understanding Dependency Injection by Professor Krasso (https://youtu.be/0LazaSSO2LI)
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'composer-app';
  // Adding Assignment Title.
  assignment: string = 'Exercise 4.3 - Handling Events with Observables';
}

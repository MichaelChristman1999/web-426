/**
 * Title: app.component.ts
 * Author: Jennifer Hoitenga
 * Date: August 8, 2023
 * Description: This file contains the code to render and initialize the app component of the profile-app.
 * Sources Used:
 * Angular Tutorial for Beginners video by Professor Krasso (https://youtu.be/XRm0SnUJROU)
 * Typescript Tutorial for Beginners video by Professor Krasso (https://youtu.be/psk_H7q82Nw)
 * Bootstrap List-Group: https://getbootstrap.com/docs/4.0/components/list-group/
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // This property holds the title of the assignment to be displayed in the template.
  assignment: string = 'Assignment 1.5 - Components';
}

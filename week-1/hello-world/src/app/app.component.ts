/**
 * Title: app.component.ts
 * Author: Jennifer Hoitenga
 * Date: August 7, 2023
 * Description: This code supports functionality for the hello-world project
 * Sources Used:
 * Angular Tutorial for Beginners video by Professor Krasso (https://youtu.be/XRm0SnUJROU)
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // This is the property that holds the message to be displayed in the template.
  myWorld = "You are now in Jennifer Hoitenga's world!";
}

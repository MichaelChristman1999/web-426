/**
 * Title: my-details.component.ts
 * Author: Jennifer Hoitenga
 * Date: August 8, 2023
 * Description: This file contains the code to render and initialize the my-details component of the profile-app.
 * Sources Used:
 * Angular Tutorial for Beginners video by Professor Krasso (https://youtu.be/XRm0SnUJROU)
 * Typescript Tutorial for Beginners video by Professor Krasso (https://youtu.be/psk_H7q82Nw)
 * Bootstrap List-Group: https://getbootstrap.com/docs/4.0/components/list-group/
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css'],
})
export class MyDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

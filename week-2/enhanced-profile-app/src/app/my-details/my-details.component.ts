/**
 * Title: app.component.html
 * Author: Jennifer Hoitenga
 * Date: August 16, 2023
 * Description: This is the main component for the profile-app.
 * Sources Used:
 * Angular Tutorial for Beginners video by Professor Krasso
 * Angular Tutorial - Data Binding & *ng Directives by Professor Krasso
 * Bootstrap Grid: https://getbootstrap.com/docs/4.0/layout/grid/
 */

import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;

  keywords = ['#TypeScript, #2020, #CodingWithAngular, #ngOmaha'];

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  toString() {
    console.log(
      `\n Full name: ${this.fullName}\n Favorite food: ${this.favoriteFood}\n Favorite color: ${this.favoriteColor}`
    );
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css'],
})
export class MyDetailsComponent implements OnInit {
  myProfile: Person;
  constructor() {
    this.myProfile = new Person('Jennifer Hoitenga', 'Mushrooms', 'Green');
    this.myProfile.toString();
  }

  ngOnInit(): void {}
}

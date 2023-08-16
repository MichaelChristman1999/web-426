/**
 * Title: composer-list.component.ts
 * Author: Jennifer Hoitenga
 * Date: August 16, 2023
 * Description: This code defines the composer class for the composer app project.
 * Sources Used:
 * Angular Tutorial for Beginners video by Professor Krasso
 * Angular Tutorial - Data Binding & *ng Directives by Professor Krasso
 * Bootstrap: https://getbootstrap.com/
 */

import { Component, OnInit } from '@angular/core';

// Define a class to represent a music composer
export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  constructor() {
    // Initialize composer instances and populate the array.
    this.composers = [
      new Composer('Danny Elfman', 'Contemporary Classical'),
      new Composer('Hans Zimmer', 'Orchestral'),
      new Composer('John Williams', 'Classical'),
      new Composer('Ludovico Einaudi', 'Contemporary Classical'),
      new Composer('Hildur Guðnadóttir', 'Contemporary Classical'),
    ];
  }

  ngOnInit(): void {}
}

/**
 * Title: app.module.ts
 * Author: Jennifer Hoitenga
 * Date: August 7, 2023
 * Description: This code supports functionality for the hello-world project
 * Sources Used:
 * Angular Tutorial for Beginners video by Professor Krasso (https://youtu.be/XRm0SnUJROU)
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/**
 * Title: app.module.ts
 * Author: Jennifer Hoitenga
 * Date: August 8, 2023
 * Description: This file contains the code to configure and set up the profile-app.
 * Sources Used:
 * Angular Tutorial for Beginners video by Professor Krasso (https://youtu.be/XRm0SnUJROU)
 * Typescript Tutorial for Beginners video by Professor Krasso (https://youtu.be/psk_H7q82Nw)
 * Bootstrap List-Group: https://getbootstrap.com/docs/4.0/components/list-group/
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';

@NgModule({
  declarations: [AppComponent, MyImageComponent, MyDetailsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

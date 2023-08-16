/**
 * Title: app-routing.module.ts
 * Author: Jennifer Hoitenga
 * Date: August 16, 2023
 * Description: This code is for the routing portion of the my-app project.
 * Sources Used:
 * Angular Tutorial for Beginners video by Professor Krasso
 * Angular Tutorial for Beginners - RouterModule and Navigation video by Professor Krasso
 * Bootstrap: https://getbootstrap.com/
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importing the components that will be used as route components.
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    // Root route configuration, maps to the HomeComponent.
    path: '',
    component: HomeComponent,
  },
  {
    // Route configuration for the '/home' path, also maps to the HomeComponent.
    path: 'home',
    component: HomeComponent,
  },
  {
    // Route configuration for the '/about' path, maps to the AboutComponent.
    path: 'about',
    component: AboutComponent,
  },
  {
    // Route configuration for the '/contact' path, maps to the ContactComponent.
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

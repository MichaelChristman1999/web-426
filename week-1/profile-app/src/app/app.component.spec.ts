/**
 * Title: app.component.spec.ts
 * Author: Jennifer Hoitenga
 * Date: August 8, 2023
 * Description: This file contains the code to validate the app component of the profile-app.
 * Sources Used:
 * Angular Tutorial for Beginners video by Professor Krasso (https://youtu.be/XRm0SnUJROU)
 * Typescript Tutorial for Beginners video by Professor Krasso (https://youtu.be/psk_H7q82Nw)
 * Bootstrap List-Group: https://getbootstrap.com/docs/4.0/components/list-group/
 */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'profile-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('profile-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'profile-app app is running!'
    );
  });
});

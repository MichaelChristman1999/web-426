/**
 * Title: person.class.ts
 * Author: Jennifer Hoitenga
 * Date: August 7, 2023
 * Description: This file contains the code to to create an instance with the name Jennifer Hoitenga and logs the name to the console.
 * Sources Used:
 * Angular Tutorial for Beginners video by Professor Krasso (https://youtu.be/XRm0SnUJROU)
 * Typescript Tutorial for Beginners video by Professor Krasso (https://youtu.be/psk_H7q82Nw)
 * Bootstrap List-Group: https://getbootstrap.com/docs/4.0/components/list-group/
 */

import { IPerson } from './person.interface';

// Define a class called 'Person' that implements the 'IPerson' interface.
class Person implements IPerson {
  // Define properties for the first name and last name.
  firstName: string;
  lastName: string;

  // Create a constructor to initialize the 'firstName' and 'lastName' properties.
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// Create an instance of the 'Person' class with the first name 'Jennifer' and last name 'Hoitenga'.
let myName = new Person('Jennifer', 'Hoitenga');

// Log a message to the console using template literals to display the person's full name.
console.log(`My name is ${myName.firstName} ${myName.lastName}`);

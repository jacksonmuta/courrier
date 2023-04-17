import { CUSTOM_ELEMENTS_SCHEMA, Component, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Import IonicModule

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor() {}
}

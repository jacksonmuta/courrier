import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [TestComponent],
  imports: [IonicModule, CommonModule],
  exports: [TestComponent],
})
export class SharedcomponentModule  {}

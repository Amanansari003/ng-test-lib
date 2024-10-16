import { NgModule } from '@angular/core';
import { TestLibComponent } from './test-lib.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    TestLibComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    TestLibComponent
  ]
})
export class TestLibModule { }

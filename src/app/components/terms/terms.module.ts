import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule
    ],
    declarations: [],
    exports: []
  })
  export class UserModule { }

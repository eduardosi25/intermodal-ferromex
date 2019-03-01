import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule
    ],
    declarations: [UserProfileComponent],
    exports: [UserProfileComponent]
  })
  export class UserModule { }

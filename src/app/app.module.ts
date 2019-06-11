import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { MyInputTextComponent } from './my-input-text/my-input-text.component';
import { MySelectListComponent } from './my-select-list/my-select-list.component';
import { MyInputNumberComponent } from './my-input-number/my-input-number.component';
import { Routes, RouterModule } from '@angular/router';
import { EngineerHomePageComponent } from './engineer-home-page/engineer-home-page.component';
import { ProgrammerHomePageComponent } from './programmer-home-page/programmer-home-page.component';
import { StudentHomePageComponent } from './student-home-page/student-home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    MyInputTextComponent,
    MySelectListComponent,
    MyInputNumberComponent,
    EngineerHomePageComponent,
    ProgrammerHomePageComponent,
    StudentHomePageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

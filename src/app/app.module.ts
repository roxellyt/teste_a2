import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'homecomponent', component: HomeComponent },
      { path: 'taskcomponent', component: TaskComponent },
    ]),
  ],
  declarations: [AppComponent, HelloComponent, HomeComponent, TaskComponent],
  bootstrap: [AppComponent],
  providers: [TasksService],
})
export class AppModule {}

const firebaseConfig = {
  apiKey: 'AIzaSyDYeyAq8TM66zyw7yQWikq2J0Ax6HU607Y',
  authDomain: 'prja2-35089.firebaseapp.com',
  databaseURL: 'https://prja2-35089-default-rtdb.firebaseio.com',
  projectId: 'prja2-35089',
  storageBucket: 'prja2-35089.appspot.com',
  messagingSenderId: '801804196078',
  appId: '1:801804196078:web:f10af245b8ff2df04c3bff',
  measurementId: 'G-X4DESZPTVB',
};

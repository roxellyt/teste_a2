import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';

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

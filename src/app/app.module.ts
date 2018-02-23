import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
=======
import { SidebarComponent } from './sidebar/sidebar.component';
>>>>>>> 9acb329cd0f1a33912905d77b38d7f1d35dd61fc


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent
=======
    SidebarComponent
>>>>>>> 9acb329cd0f1a33912905d77b38d7f1d35dd61fc
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

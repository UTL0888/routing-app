import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingCompnent } from './app-routing.module';
import { AppComponent } from './app.component';

//delete all component here  and replace app.routing.module.ts



@NgModule({
  declarations: [
    AppComponent,
    routingCompnent, 
    //routingCompnent  variable contain all component in  app.routing.module.ts
    //and delete all component imported here 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

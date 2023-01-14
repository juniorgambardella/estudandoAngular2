import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfComponentComponent } from './components/if-component/if-component.component';
import { EventsComponent } from './components/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    DirectivesComponent,
    IfComponentComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

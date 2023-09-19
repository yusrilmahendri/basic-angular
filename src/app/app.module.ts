import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnComponentComponent } from './learn-component/learn-component.component';
import { FormsModule } from '@angular/forms';
import { KelasComponent } from './kelas/kelas.component';

@NgModule({
  declarations: [
    AppComponent,
    LearnComponentComponent,
    KelasComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

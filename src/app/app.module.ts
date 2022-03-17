import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessagesEcritsComponent } from './composants/messages-ecrits/messages-ecrits.component';
import { NouveauMessageComponent } from './composants/nouveau-message/nouveau-message.component';
import { MessagerieComponent } from './composants/messagerie/messagerie.component';
import { PersonnesActivesComponent } from './composants/personnes-actives/personnes-actives.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    MessagesEcritsComponent,
    NouveauMessageComponent,
    MessagerieComponent,
    PersonnesActivesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

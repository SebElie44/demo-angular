import { Injectable } from '@angular/core';
import {Message} from "../models/Message";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  public tab : Message[];

  constructor() {
    this.tab = [];
     let message1 = new Message('Paul', "il s'est pendu depuis un trottoir avec un lacet");
     let message2 = new Message('Jean',  "il est mort écrasé par un individu tomber du premier étage");
     let message3 = new Message('Jacques', "il s'est foulé la cheville en glissant sur un liquide rouge près d'un trottoir ")
     let tab = [];
      this.tab.push(message1);
      this.tab.push(message2);
      this.tab.push(message3);
  }
public ajouterUnMessage(nouveauMessage:Message):void{
    this.tab.push(nouveauMessage);
}

}

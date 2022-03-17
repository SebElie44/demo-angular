import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../../services/messages.service";
import {Message} from "../../models/Message";

@Component({
  selector: 'app-nouveau-message',
  templateUrl: './nouveau-message.component.html',
  styleUrls: ['./nouveau-message.component.css']
})
export class NouveauMessageComponent implements OnInit {

  constructor(private svc:MessagesService) { }

  ngOnInit(): void {
  }

  public submitForm(valueDuForm : any):void {
    //console.log(valueDuForm);
    let nouveauMessage = new Message(valueDuForm.nom,
                                 valueDuForm.message );
    this.svc.ajouterUnMessage(nouveauMessage)
  }
}

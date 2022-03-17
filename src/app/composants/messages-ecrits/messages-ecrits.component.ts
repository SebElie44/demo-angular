import { Component, OnInit } from '@angular/core';
import {Message} from "../../models/Message";
import {MessagesService} from "../../services/messages.service";

@Component({
  selector: 'app-messages-ecrits',
  templateUrl: './messages-ecrits.component.html',
  styleUrls: ['./messages-ecrits.component.css']
})
export class MessagesEcritsComponent implements OnInit {

  public leTabDuService : Message[];

  constructor(private svc: MessagesService) {
 this.leTabDuService = this.svc.tab;
  }

  ngOnInit(): void {
  }

}

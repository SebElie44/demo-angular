import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnes-actives',
  templateUrl: './personnes-actives.component.html',
  styleUrls: ['./personnes-actives.component.css']
})
export class PersonnesActivesComponent implements OnInit {
 public personnes = ['paul','Jean'];
  constructor() {

  }

  ngOnInit(): void {
  }

}

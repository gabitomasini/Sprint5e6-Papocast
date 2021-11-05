import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batepaporest',
  templateUrl: './batepaporest.component.html',
  styleUrls: ['./batepaporest.component.css']
})
export class BatepaporestComponent implements OnInit {
  tituloPod = "Um bate papo sobre REST e RESTful";
  apresentadoPod = "Papocast";
  dataPod = "6 Abr 21";
  duracaoPod = "135:18";

  constructor() { }

  ngOnInit() {
  }

}

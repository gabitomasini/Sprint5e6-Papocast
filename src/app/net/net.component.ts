import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-net',
  templateUrl: './net.component.html',
  styleUrls: ['./net.component.css']
})
export class NetComponent implements OnInit {
  tituloPod = "Um bate papo sobre .NET";
  apresentadoPod = "Papocast";
  dataPod = "20 Fev 21";
  duracaoPod = "35:40";

  constructor() { }

  ngOnInit() {
  }

}

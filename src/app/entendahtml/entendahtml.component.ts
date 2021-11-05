import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entendahtml',
  templateUrl: './entendahtml.component.html',
  styleUrls: ['./entendahtml.component.css']
})
export class EntendahtmlComponent implements OnInit {
  tituloPod = " Entenda o que é HTML";
  apresentadoPod = "Papocast";
  dataPod = "25 Mar 21";
  duracaoPod = "1:35:18";
  constructor() { }

  ngOnInit() {
  }

}

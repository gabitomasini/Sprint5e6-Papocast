import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ultimoslancamentos',
  templateUrl: './ultimoslancamentos.component.html',
  styleUrls: ['./ultimoslancamentos.component.css']
})
export class UltimoslancamentosComponent implements OnInit {

  tituloPod = "";
  apresentadoPod = "";
  dataPod = "";
  duracaoPod = "";

  tituloPod1 = "Ramo de Telecomunicação no Brasil";
  apresentadoPod1 = "Papocast";
  dataPod1 = "6 Abr 21";
  duracaoPod1 = "1:35:18";

  tituloPod2 = "Desafios no ramo da Programação";
  apresentadoPod2 = "Papocast";
  dataPod2 = "8 Ago 21";
  duracaoPod2 = "35:40";

  constructor() { }

  ngOnInit() {
  }

}

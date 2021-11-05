import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valecss',
  templateUrl: './valecss.component.html',
  styleUrls: ['./valecss.component.css']
})
export class ValecssComponent implements OnInit {
  tituloPod = " Vale apena aprender CSS?";
  apresentadoPod = "Papocast";
  dataPod = "8 Mar 21";
  duracaoPod = "1:27:11";
  constructor() { }

  ngOnInit() {
  }

}

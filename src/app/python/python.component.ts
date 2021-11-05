import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent implements OnInit {
  tituloPod = "Python : Por onde começar?";
  apresentadoPod = "Papocast";
  dataPod = "25 Fev 21";
  duracaoPod = "4:27";
  constructor() { }

  ngOnInit() {
  }

}

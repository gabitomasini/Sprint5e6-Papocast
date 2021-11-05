import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datacenter',
  templateUrl: './datacenter.component.html',
  styleUrls: ['./datacenter.component.css']
})
export class DatacenterComponent implements OnInit {
  tituloPod = "O remo do Data Center no Brasil";
  apresentadoPod = "Papocast";
  dataPod = "16 Jan 21";
  duracaoPod = "24:26";



  constructor() { }

  ngOnInit() {
  }

}

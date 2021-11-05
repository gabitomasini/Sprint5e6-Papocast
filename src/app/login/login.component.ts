import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let dados = `
    E-mail: ${form.value.email}
    Senha: ${form.value.senha}`;

    console.log(dados);


  }


}

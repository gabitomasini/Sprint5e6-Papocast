import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    let dados = `
    E-mail: ${form.value.email}
    Senha: ${form.value.senha}`;

    console.log(dados);
  }

}

// verSenha(){
//   if(this.pass == 'visibility'){

//     this.pass = 'visibility_off';
//     this.typePass = 'text'
//   }else{
//     this.pass='visibility';
//     this.typePass = 'password'
//   }
// }

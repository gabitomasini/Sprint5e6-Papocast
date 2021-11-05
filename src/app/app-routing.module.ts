import { PaginacadastrarComponent } from './paginacadastrar/paginacadastrar.component';
import { PaginalogincadastroComponent } from './paginalogincadastro/paginalogincadastro.component';
import { PaginapocastsComponent } from './paginapocasts/paginapocasts.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PaginalogincadastroComponent },
  { path: 'cadastro', component: PaginacadastrarComponent },
  { path: 'podcasts', component: PaginapocastsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

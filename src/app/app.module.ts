import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { PaginapocastsComponent } from './paginapocasts/paginapocasts.component';
import { PaginalogincadastroComponent } from './paginalogincadastro/paginalogincadastro.component';
import { PaginacadastrarComponent } from './paginacadastrar/paginacadastrar.component';
import { HeaderComponent } from './header/header.component';
import { EpisodiosComponent } from './episodios/episodios.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DatacenterComponent } from './datacenter/datacenter.component';
import { NetComponent } from './net/net.component';
import { PythonComponent } from './python/python.component';
import { ValecssComponent } from './valecss/valecss.component';
import { EntendahtmlComponent } from './entendahtml/entendahtml.component';
import { BatepaporestComponent } from './batepaporest/batepaporest.component';
import { UltimoslancamentosComponent } from './ultimoslancamentos/ultimoslancamentos.component';


@NgModule({
  declarations: [	
    AppComponent,
    FooterComponent,
      LoginComponent,
      CadastroComponent,
      PaginapocastsComponent,
      PaginalogincadastroComponent,
      PaginacadastrarComponent,
      HeaderComponent,
      EpisodiosComponent,
      DatacenterComponent,
      NetComponent,
      PythonComponent,
      ValecssComponent,
      EntendahtmlComponent,
      BatepaporestComponent,
      UltimoslancamentosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatInputModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

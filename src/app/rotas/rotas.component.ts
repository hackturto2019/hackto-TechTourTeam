import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotas',
  templateUrl: './rotas.component.html',
  styleUrls: ['./rotas.component.css']
})
export class RotasComponent implements OnInit {

  @input()
  rotas = Array(
      {'titulo':'Nova Rota 1',
        'texto':'Conheça os restaurantes vegetarianos',
        'imagem-destaque':'../../assets/img/cachoeira.jpg'},
      {'titulo':'Nova Rota 2',
        'texto':'Conheça os restaurantes vegetarianos', 'imagem-destaque':'../../assets/img/cachoeira.jpg'},
      {'titulo':'Nova Rota 3',
        'texto':'Conheça os restaurantes vegetarianos',
        'imagem-destaque':'../../assets/img/cachoeira.jpg'}
      );
  constructor() { }

  ngOnInit() {
  }

}

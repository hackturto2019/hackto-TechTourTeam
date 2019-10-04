import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minhas-rotas',
  templateUrl: './minhas-rotas.component.html',
  styleUrls: ['./minhas-rotas.component.css']
})
export class MinhasRotasComponent implements OnInit {

  rotas = Array(
      {'titulo': 'Rota das Cachoeiras',
        'texto':'Conheça as cachoeiras e vistas da região',
        'imagem-destaque':'../../assets/img/cachoeira.jpg'},
      {'titulo':'Restaurantes Vegetariano/Vegano',
        'texto':'Os melhores restaurantes com opções vegetarianas', 'imagem-destaque':'../../assets/img/cachoeira.jpg'},
      {'titulo':'Praias e Natureza',
        'texto':'Lazer e descanço',
        'imagem-destaque': '../../assets/img/cachoeira.jpg'}
  );

  constructor() { }

  ngOnInit() {
  }

}

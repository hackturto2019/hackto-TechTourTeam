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
        'imagem':'../../assets/img/cachoeira.jpg', 'percentual':'85'},
      {
          'titulo':'Restaurantes Vegetariano/Vegano',
          'texto':'Os melhores restaurantes com opções vegetarianas',
          'imagem':'../../assets/img/restaurante.jpg',
          'percentual':'30'
      }
  );

  constructor() { }

  ngOnInit() {
  }

}

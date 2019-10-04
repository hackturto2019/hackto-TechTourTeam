import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotas',
  templateUrl: './rotas.component.html',
  styleUrls: ['./rotas.component.css']
})
export class RotasComponent implements OnInit {

  rotas = Array(
      {
          'titulo': 'Rota das Cachoeiras',
          'texto':'Conheça as cachoeiras e vistas da região',
          'imagem-destaque':'../../assets/img/cachoeira.jpg',
          'valor':'80',
          'distancia': '20',
          'tempo': '2 horas',
          'pontos': '100'
      },
      {
          'titulo':'Restaurantes Vegetariano/Vegano',
          'texto':'Os melhores restaurantes com opções vegetarianas',
          'imagem-destaque':'../../assets/img/restaurante.jpg',
          'valor':'160',
          'distancia': '90',
          'tempo': '3 Dias',
          'pontos': '80'
      },
      {
          'titulo':'Praias e Natureza',
          'texto':'Lazer e descanço',
          'imagem-destaque': '../../assets/img/cachoeira.jpg',
          'valor':'300',
          'distancia': '20',
          'tempo': '5h',
          'pontos': '150'
      });
  constructor() {}

  ngOnInit() {
  }

}

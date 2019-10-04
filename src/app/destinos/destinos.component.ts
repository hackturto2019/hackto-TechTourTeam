import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.css']
})
export class DestinosComponent implements OnInit {

  destinos = Array(
      {'titulo': 'Cachoeira da Romcadeira',
        'texto':'Melhor opção para toda a família.',
        'imagem':'../../assets/img/cachoeira.jpg'},
      {'titulo':'Praia da Graciosa',
        'texto':'O melhor por do sol da região',
        'imagem': '../../assets/img/praia.jpg'},
      {'titulo':'Restaurante Serrano',
        'texto':'Comidas Típicas', 'imagem':'../../assets/img/restaurante.jpg'},
  );

  constructor() { }

  ngOnInit() {
  }

}

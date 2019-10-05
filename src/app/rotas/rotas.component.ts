import { Component, OnInit } from '@angular/core';
import {RotasServiceService} from '../shared/rotas-service.service';

@Component({
  selector: 'app-rotas',
  templateUrl: './rotas.component.html',
  styleUrls: ['./rotas.component.css'],
  providers: [RotasServiceService]
})
export class RotasComponent implements OnInit {
  tags = [
    'Restaurante',
    'Aventura'
  ];
  rotas;
  filtro;
  constructor(private rotasService: RotasServiceService) {
    this.getTodasRotas();
  }

  getTodasRotas = () => {
    this.rotasService.getRotas().subscribe(
      data => {
        this.rotas = data;
      }, error => {
        console.log(error);
    }
    )
};

  buscarRota() {
    this.rotasService.filtrarRotas(this.filtro).subscribe(
      data => {
        this.rotas = data;
      }, error => {
        console.log(error);
      }
    )
  }



  ngOnInit() {
  }

}

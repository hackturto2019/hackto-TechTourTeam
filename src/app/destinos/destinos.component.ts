import { Component, OnInit } from '@angular/core';
import {DestinosService} from '../shared/destinos.service';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.css'],
  providers: [DestinosService]
})
export class DestinosComponent implements OnInit {

  destinos;
  filtro;
  constructor(private DestinoService: DestinosService) {
    this.getTodosDestinos();
  }

  getTodosDestinos = () => {
      this.DestinoService.getDestinos().subscribe(
        data => {
          this.destinos = data;
        }, error => {
          console.log(error);
        }
      )
  };

  buscarDestino = () => {
    this.DestinoService.buscarTodosDestinos(this.filtro).subscribe(
      data => {
        this.destinos = data;
      }, error => {
        console.log(error);
      }
    )};

  ngOnInit() {
  }

}

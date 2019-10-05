import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-rota',
  templateUrl: './rota.component.html',
  styleUrls: ['./rota.component.css']
})
export class RotaComponent implements OnInit {
  titulo = 'Rota das Cachoeiras';
  rota = false;
  lat1 = -10.195428;
  lng1 = -48.328960;
  lat2 = -10.215870;
  lng2 = -48.327759;
  lat3 = -10.276183;
  lng3 = -48.334333;
  zoom = 10;

  constructor() { }

  minhaRota() {
    this.rota = true;
  }

  ngOnInit() {
  }

}

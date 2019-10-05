import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-gestao',
  templateUrl: './gestao.component.html',
  styleUrls: ['./gestao.component.css']
})
export class GestaoComponent {

  title = '';
  type = 'Line';
  data = [
    ['Familias', 45.0],
    ['Casais', 26.8],
    ['Jovens', 12.8],
    ['Escurções', 8.5],
    ['Idosos', 6.2]
  ];
  columnNames = ['Tipo', 'Qtd.'];
  options = {
  };
  width = 250;
  height = 250;

  title2 = 'Faixa Etária';
  type2 = 'BarChart';
  data2 = [
    ['18-25', 32.5],
    ['26-40', 35.0],
    ['41-50', 24.0],
    ['> 50', 8.5],
  ];
  options2 = {
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
  };
  width2 = 290;
  height2 = 250;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {

  }

}

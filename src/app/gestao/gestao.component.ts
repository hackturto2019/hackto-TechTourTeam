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
  height = 200;

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
        return [
          { title: 'Perfil Visitantes', cols: 2, rows: 1 },
          { title: 'Atributos Avaliados', cols: 2, rows: 1 },
          { title: 'Quantidade', cols: 2, rows: 1 },
        ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {

  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RotasComponent } from './rotas/rotas.component';
import {MatCardModule} from '@angular/material/card';
import { RotaComponent } from './rota/rota.component';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { DestinoComponent } from './destino/destino.component';
import { MinhasRotasComponent } from './minhas-rotas/minhas-rotas.component';
import { DestinosComponent } from './destinos/destinos.component';
import { HttpClientModule } from '@angular/common/http';
import { GestaoComponent } from './gestao/gestao.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { GoogleChartsModule } from 'angular-google-charts';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: RotasComponent},
  { path: 'rota', component: RotaComponent},
  { path: 'destino', component: DestinoComponent},
  { path: 'minhas-rotas', component: MinhasRotasComponent},
  { path: 'destinos', component: DestinosComponent},
  { path: 'conhecer', component: GestaoComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RotasComponent,
    RotaComponent,
    DestinoComponent,
    MinhasRotasComponent,
    DestinosComponent,
    GestaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    GoogleChartsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'API-GOOGLE-AQUI'
    }),
    MatGridListModule,
    MatMenuModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

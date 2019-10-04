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

const appRoutes: Routes = [
  { path: 'rotas', component: RotasComponent},
  { path: 'rota', component: RotaComponent},
  { path: 'destino', component: DestinoComponent},
  { path: 'minhas-rotas', component: MinhasRotasComponent},
  { path: 'destinos', component: DestinosComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RotasComponent,
    RotaComponent,
    DestinoComponent,
    MinhasRotasComponent,
    DestinosComponent
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
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDT-sjxpLE7JUhX8k0kPCS6CzinIiGBE88'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

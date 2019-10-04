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

const appRoutes: Routes = [
  { path: 'rotas', component: RotasComponent},
  { path: 'detinos', component: RotaComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RotasComponent,
    RotaComponent
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
      apiKey: 'MINHA-API-AQUI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

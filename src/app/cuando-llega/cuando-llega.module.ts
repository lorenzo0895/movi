import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuandoLlegaPageRoutingModule } from './cuando-llega-routing.module';

import { CuandoLlegaPage } from './cuando-llega.page';
import { CallePage } from './calle/calle.page';
import { HomePage } from './home/home.page';
import { InterseccionPage } from './interseccion/interseccion.page';
import { HorarioPage } from './horario/horario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuandoLlegaPageRoutingModule,
  ],
  declarations: [
    CuandoLlegaPage,
    HomePage,
    CallePage,
    InterseccionPage,
    HorarioPage,
  ],
})
export class CuandoLlegaPageModule {}

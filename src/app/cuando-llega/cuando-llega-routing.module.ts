import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallePage } from './calle/calle.page';
import { CuandoLlegaPage } from './cuando-llega.page';

import { HomePage } from './home/home.page';
import { HorarioPage } from './horario/horario.page';
import { InterseccionPage } from './interseccion/interseccion.page';

const routes: Routes = [
  {
    path: '',
    component: CuandoLlegaPage,
    children: [
      {
        path: '',
        component: HomePage
      },
      {
        path: ':id-linea',
        component: CallePage
      },
      {
        path: ':id-linea/:id-calle',
        component: InterseccionPage
      },
      {
        path: ':id-linea/:id-calle/:id-interseccion',
        component: HorarioPage
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuandoLlegaPageRoutingModule {}

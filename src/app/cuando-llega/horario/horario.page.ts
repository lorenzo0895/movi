import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuandoLlegaService } from 'src/app/services/cuando-llega.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {
  horario: any;

  constructor(
    private cuandoLlegaService: CuandoLlegaService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    let idLinea = this.activatedRoute.snapshot.params['id-linea'];
    let idCalle = this.activatedRoute.snapshot.params['id-calle'];
    let idInterseccion = this.activatedRoute.snapshot.params['id-interseccion'];
    this.cuandoLlegaService
      .getHorario(idLinea, idCalle, idInterseccion)
      .subscribe((el) => {
        this.horario = el;
      });
  }
}

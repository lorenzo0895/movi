import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuandoLlegaService } from 'src/app/services/cuando-llega.service';

@Component({
  selector: 'app-interseccion',
  templateUrl: './interseccion.page.html',
  styleUrls: ['./interseccion.page.scss'],
})
export class InterseccionPage implements OnInit {

  intersecciones: any[];

  constructor(
    private cuandoLlegaService: CuandoLlegaService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let idLinea = this.activatedRoute.snapshot.params['id-linea'];
    let idCalle = this.activatedRoute.snapshot.params['id-calle'];
    this.cuandoLlegaService.getIntersecciones(idLinea, idCalle).subscribe((el:any) => {
      this.intersecciones = el;
    })
  }

}

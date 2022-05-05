import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuandoLlegaService } from 'src/app/services/cuando-llega.service';

@Component({
  selector: 'app-bandera',
  templateUrl: './calle.page.html',
  styleUrls: ['./calle.page.scss'],
})
export class CallePage implements OnInit {

  calles: any[];

  constructor(
    private cuandoLlegaService: CuandoLlegaService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    let idLinea = this.activatedRoute.snapshot.params['id-linea'];
    this.cuandoLlegaService.getCalles(idLinea).subscribe((el:any) => {
      this.calles = el;
    })
  }

}

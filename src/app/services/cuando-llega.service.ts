import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CuandoLlegaService {

  private options = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
  };
  private uri: string = '/api/getInfoParadas.php';
  private uriHorario: string = '/api/getSmsResponseEfisat.php';

  constructor(private http: HttpClient) { }

  getCalles(idLinea: string) {
    const body = new HttpParams()
    .set('accion', 'getCalle')
    .set('idLinea', idLinea);
    return this.http.post(this.uri, body.toString(), this.options)
  }

  getIntersecciones(idLinea: string, idCalle: string) {
    const body = new HttpParams()
    .set('accion', 'getInterseccion')
    .set('idLinea', idLinea)
    .set('idCalle', idCalle);
    return this.http.post(this.uri, body.toString(), this.options)
  }

  getParada(idLinea: string, idCalle: string, idInterseccion: string) {
    const body = new HttpParams()
    .set('accion', 'getParadasXCalles')
    .set('idLinea', idLinea)
    .set('idCalle', idCalle)
    .set('idInt', idInterseccion)
    .set('txtLinea', idLinea);
    return this.http.post(this.uri, body.toString(), this.options).pipe(
      catchError(error => of(error).pipe(
        map(res => {
          let regExp = /\>.{4}\<\/a\>/;
          let string = regExp.exec(res.error.text)[0].substring(1,5);
          return string;
        })
      ))
    )
  }

  getHorario(idLinea: string, idCalle: string, idInterseccion: string) {
    return this.getParada(idLinea, idCalle, idInterseccion).pipe(
      mergeMap((parada: string) => {
        const body = new HttpParams()
        .set('parada', parada)
        .set('linea', idLinea)
        .set('accion', 'getSmsEfisat');
        return this.http.post(this.uriHorario, body.toString(), this.options).pipe(
          catchError(error => of(error).pipe(
            map((el:any) => {
              let string = el.error.text;
              let domParser = new DOMParser;
              let html = domParser.parseFromString(string, "text/html");
              let td = html.getElementsByTagName('td');
              let obj = {
                row1: {
                  desc: td[0].innerText,
                  tiempo: td[1].innerText
                },
                row2: {
                  desc: td[3].innerText,
                  tiempo: td[4].innerText
                }
              }

              return obj;
            })
          ))
        );
      })
    )
  }

}

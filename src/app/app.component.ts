import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/home', icon: 'home' },
    { title: 'Cuándo Llega', url: '/cuando-llega', icon: 'alarm' },
    { title: 'Cómo Llego', url: '/folder/como-llego', icon: 'navigate' },
    { title: 'Recorridos', url: '/folder/recorridos', icon: 'map' },
    { title: 'Cuánto Tengo', url: '/folder/cuanto-tengo', icon: 'wallet' },
  ];
  constructor() {}
}

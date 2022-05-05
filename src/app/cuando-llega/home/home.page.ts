import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  lineas:any[] = [
    {id: '37', name: '101'},
    {id: '2', name: '102 Rojo'},
    {id: '661', name: '102 144'},
    {id: '39', name: '103'},
    {id: '4', name: '106'},
    {id: '41', name: '107'},
    {id: '42', name: '110'},
    {id: '27', name: '112'},
    {id: '11', name: '113'},
    {id: '729', name: '115'},
    {id: '669', name: '116 129'},
    {id: '13', name: '120'},
  ];
  
  constructor() { }

  ngOnInit() {
  }

}

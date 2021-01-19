import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: []
})
export class NgSwitchComponent implements OnInit {
alerta:string = "info";
  constructor() { }
  i:number=0;
  colores:string[]=[
    'success',
    'danger',
    'warning',
    'default'
  ];
  ngOnInit(): void {
  }

  cambiarAlerta(){
    this.alerta=this.colores[this.i % 4];
    this.i = this.i+1;
  }
}

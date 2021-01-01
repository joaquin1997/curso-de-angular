import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe:any={};
  @Input() index?:number;

  constructor(private route:Router) {
    
  }

  ngOnInit(): void {
  }

  verHeroe(index:number){
  this.route.navigate(['/heroe',index]);
  }
}

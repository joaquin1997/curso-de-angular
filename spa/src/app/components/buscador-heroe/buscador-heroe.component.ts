import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from 'src/app/services/heroes.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-buscador-heroe',
  templateUrl: './buscador-heroe.component.html'
})
export class BuscadorHeroeComponent implements OnInit {
  heroes:Heroe[]=[];
  constructor(private activatedRoute: ActivatedRoute,_heroesService:HeroesService){
    this.activatedRoute.params.subscribe( params => {
      this.heroes=_heroesService.buscarHeroes(params['heroes']);
       });
  }

  ngOnInit(): void {

  }

  
}

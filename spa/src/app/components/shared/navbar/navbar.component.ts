import { Component, OnInit } from '@angular/core';
import { HeroesComponent } from '../../heroes/heroes.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router) {
   }
  ngOnInit(): void {
  }
  
  buscarHeroe(texto:string){

   this.router.navigate(['/buscador-heroe',texto]);
  }
}
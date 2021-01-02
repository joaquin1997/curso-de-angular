import { Injectable } from '@angular/core';
import { Lista } from '../models/Lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[]=[];
  
  constructor() { 
    this.cargarStorage();
  }

  public getLista(): Lista[]{
    return this.listas;
  }

  public crearLista(titulo: string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);

    this.guardarStorage();
  }

  guardarStorage(){
    
    localStorage.setItem('listaData', JSON.stringify(this.listas));

  }

  cargarStorage(){
    if(localStorage.getItem('listaData'))
    this.listas=JSON.parse(localStorage.getItem('listaData'));
  }
}

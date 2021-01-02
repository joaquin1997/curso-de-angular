import { Injectable } from "@angular/core";
import { Lista } from "../models/Lista.model";

@Injectable({
  providedIn: "root",
})
export class DeseosService {
  listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
  }

  public getLista(): Lista[] {
    return this.listas;
  }

  public getListas(completada: boolean): Lista[] {
    console.log(completada);
    return this.listas.filter((lista) => lista.terminada===completada
    );
  }

  public crearLista(titulo: string): number {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }

  public cargarLista(id: string | number): Lista {
    id = Number(id);
    return this.listas.find((listas) => listas.id === id);
  }

  guardarStorage() {
    localStorage.setItem("listaData", JSON.stringify(this.listas));
  }

  cargarStorage() {
    if (localStorage.getItem("listaData"))
      this.listas = JSON.parse(localStorage.getItem("listaData"));
  }
}

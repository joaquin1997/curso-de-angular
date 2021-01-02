import { Component, Input, OnInit } from '@angular/core';
import { Lista } from 'src/app/models/Lista.model';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  items: Lista[];
  @Input() completada: boolean;
  constructor(
    public deseosService: DeseosService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.items = this.deseosService.getListas(this.completada);}

  listaSeleccionada(id: number | string) {
    id = Number(id);
    console.log(id);
    this.router.navigateByUrl(`/tabs/tab1/agregar/${id}`);
  }
}

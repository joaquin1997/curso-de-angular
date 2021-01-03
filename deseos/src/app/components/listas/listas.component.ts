import { Component, Input, OnChanges, OnInit, ViewChild } from "@angular/core";
import { Lista } from "src/app/models/Lista.model";
import { DeseosService } from "src/app/services/deseos.service";
import { Router } from "@angular/router";
import { AlertController, IonList } from "@ionic/angular";

@Component({
  selector: "app-listas",
  templateUrl: "./listas.component.html",
  styleUrls: ["./listas.component.scss"],
})
export class ListasComponent implements OnInit {
  items: Lista[];
  @ViewChild(IonList) listaIon:IonList;
  @Input() completada: boolean = true;
  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private alertController: AlertController
  ) {
    this.items = this.deseosService.listas;
  }

  ngOnInit() {}

  async editarTitulo(lista:Lista) {
    const alert = await this.alertController.create({
      header: 'Editar título',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.listaIon.closeSlidingItems();
          },
        },
        {
          text: 'Aceptar',
          role: 'acept',
          handler: (data) => {
            if (data.length != 0)
              this.deseosService.editarTitulo(lista.id, data.titulo);
              this.listaIon.closeSlidingItems();
          },
        },
      ],
      inputs:[
        {
        name: 'titulo',
        value: lista.titulo,
        type: 'text'
      }
    ],
  
      });
    alert.present();
  }

  listaSeleccionada(id: number | string) {
    id = Number(id);
    console.log(id);
    if (!this.completada) this.router.navigateByUrl(`/tabs/tab1/agregar/${id}`);
    else this.router.navigateByUrl(`/tabs/tab2/agregar/${id}`);
  }

  borrarLista(lista: Lista) {
    this.deseosService.borrarLista(lista);
    this.items = this.deseosService.getLista();
  }
}


import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    nuevasCanciones: any[] = [];
    loading: boolean;
    error: boolean;
    mensajeError: string;
  constructor(private spotify: SpotifyService ) {
    this.loading = true;
    this.error = false;
    this.mensajeError='';
    this.spotify.getNewReleases().subscribe(
     (data: any)  => {
        this.nuevasCanciones = data;
     }, (errorServicio) => {
      this.error=true;
      this.loading = false;
      this.mensajeError=errorServicio.error.error.status + ' ' + errorServicio.error.error.message;
     }
   );
    this.loading = false;
  }

  ngOnInit(): void {

  }

}

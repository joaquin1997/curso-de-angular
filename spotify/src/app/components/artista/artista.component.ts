import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {
  artista: any={};
  loading: boolean;
  topTracks: any[] = [];
  constructor(private router:ActivatedRoute,private spotiService:SpotifyService) { 
    this.loading=true;
    this.router.params.subscribe(params=>{
      this.getArtista( params['id'] );
    });
    
  }

  ngOnInit(): void {
  }
  
  getArtista( id: string ){
   this.spotiService.getArtista(id).subscribe((data)=>{
     this.artista=data;
    
     this.getTopTracks( id );
    });
  }

  getTopTracks( id: string ){
    this.spotiService.getTopTracks(id).subscribe((topTracks)=>{
  this.topTracks = topTracks;
  console.log(this.topTracks);
  this.loading=false;
    });
  }
}

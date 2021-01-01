import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) { }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQC5QwNnW_dBP4chnJwBH6tKpcUSvet0SMzfNPvuwBl0iwTq6Oyhub9xTDxB1Cy6mbw0lqcE4epHnrvAivg'
    });
    console.log(url);
    return this.http.get(url, { headers });
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map( (data: any) => data['albums'].items));
  }

  getArtistas(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe( map((data: any) => data['artists'].items));
    }

  getArtista(id: string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string){
    return this.getQuery(`artists/${ id }/top-tracks?country=US`)
                .pipe( map( (data:any) => data['tracks']));
  }
}

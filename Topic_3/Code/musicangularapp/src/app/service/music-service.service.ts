import { Injectable } from '@angular/core';
import * as exampledata from '../../data/sample-music-data.json';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';

@Injectable({ providedIn: 'root' })
export class MusicServiceService {
  albums: Album[] = (exampledata as any).default || exampledata;

  public getArtists(): Artist[] {
    const artists: Artist[] = [];

    this.albums.forEach((album) => {
      if (!artists.find((a) => a.artist === album.artist)) {
        artists.push({ artist: album.artist });
      }
    });

    return artists;
  }

  getAlbums() {
    return this.albums;
  }

  public getAlbumsOfArtist(artistName: String): Album[] {
    let albums: Album[] = [];

    this.albums.forEach((album) => {
      if (album.artist == artistName) {
        albums.push(album);
      }
    });
    return albums;
  }

  public createAlbum(album: Album): number {
   
    this.albums.push(album);
    return 1;
  }

  public updateAlbum(album: Album): number {
   
    for (let i = 0; i < this.albums.length; ++i) {
      if (this.albums[i].albumId == album.albumId) {
        this.albums.splice(i, 1, album);
        return 0;
      }
    }
    return -1;
  }

  public deleteAlbum(id: number): number {
    
    for (let i = 0; i < this.albums.length; ++i) {
      if (this.albums[i].albumId == id) {
        this.albums.splice(i, 1);
        return 0;
      }
    }
    return -1;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicServiceService } from '../service/music-service.service';
import { ListAlbums } from '../list-albums/list-albums';
import { Album } from '../models/albums.model';

@Component({
  selector: 'app-list-artists',
  standalone: true,
  imports: [CommonModule, ListAlbums],
  templateUrl: './list-artists.html',
})
export class ListArtists {
  albums: Album[] = [];
  artists: string[] = [];
  selectedArtist: string | null = null;

  constructor(private service: MusicServiceService) {}

  ngOnInit() {
    this.albums = this.service.getAlbums();
    this.artists = [...new Set(this.albums.map((a) => a.artist))];
  }

  onSelectArtist(artist: string) {
    this.selectedArtist = artist;
  }
}

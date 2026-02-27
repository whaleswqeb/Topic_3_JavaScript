import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicServiceService } from '../service/music-service.service';
import { Album } from '../models/albums.model';
import { RouterModule } from '@angular/router';
import { DisplayAlbum } from '../display-album/display-album';
@Component({
  selector: 'app-list-albums',
  standalone: true,
  imports: [CommonModule, RouterModule,DisplayAlbum],
  templateUrl: './list-albums.html',
})
export class ListAlbums implements OnChanges {
  @Input() artistName!: string;

  albums: Album[] = [];
  selectedAlbum: Album | null = null;

  constructor(private service: MusicServiceService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['artistName'] && this.artistName) {
      this.loadAlbums();
      this.selectedAlbum = null;
    }
  }

  loadAlbums() {
    this.albums = this.service.getAlbums().filter((album) => album.artist === this.artistName);
  }

  onSelectAlbum(album: Album) {
    this.selectedAlbum = album;
  }

  deleteAlbum(id: number) {
    this.service.deleteAlbum(id);
    this.loadAlbums();
    this.selectedAlbum = null;
  }
}

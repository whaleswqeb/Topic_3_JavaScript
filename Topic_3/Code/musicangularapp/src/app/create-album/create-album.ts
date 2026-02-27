import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';
import { Album } from '../models/albums.model';

@Component({
  selector: 'app-create-album',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-album.html',
})
export class CreateAlbum {
  album: Album = {
    albumId: 0,
    title: '',
    artist: '',
    description: '',
    year: '',
    image: '',
    tracks: [],
  };

  constructor(
    private service: MusicServiceService,
    private router: Router,
  ) {}

  save() {
    if (!this.album.title || !this.album.artist) {
      alert('Title and Artist are required');
      return;
    }

    this.album.albumId = Math.floor(Math.random() * 100000);

    this.service.createAlbum(this.album);

    alert('Album Created Successfully');

    this.router.navigate(['/list-artists']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MusicServiceService } from '../service/music-service.service';
import { Album } from '../models/albums.model';

@Component({
  selector: 'app-edit-album',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-album.html',
})
export class EditAlbum implements OnInit {
  album!: Album;

  constructor(
    private route: ActivatedRoute,
    private service: MusicServiceService,
    private router: Router,
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.album = this.service.getAlbums().find((a) => a.albumId === id)!;
  }

  update() {
    this.service.updateAlbum(this.album);
    this.router.navigate(['/list-artists']);
  }
}

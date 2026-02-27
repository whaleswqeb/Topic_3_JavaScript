import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-delete-album',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-album.html',
})
export class DeleteAlbum implements OnInit {
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private service: MusicServiceService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  confirmDelete() {
    this.service.deleteAlbum(this.id);
    this.router.navigate(['/list-artists']);
  }
}

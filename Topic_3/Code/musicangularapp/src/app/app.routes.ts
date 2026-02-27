import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'create',
    loadComponent: () => import('./create-album/create-album').then((m) => m.CreateAlbum),
  },
  {
    path: 'list-artists',
    loadComponent: () => import('./list-artists/list-artists').then((m) => m.ListArtists),
  },
  {
    path: 'list-albums',
    loadComponent: () => import('./list-albums/list-albums').then((m) => m.ListAlbums),
  },
  {
    path: 'display/:id',
    loadComponent: () => import('./display-album/display-album').then((m) => m.DisplayAlbum),
  },
  {
    path: 'edit/:artist/:id',
    loadComponent: () => import('./edit-album/edit-album').then((m) => m.EditAlbum),
  },
  {
    path: 'delete/:artist/:id',
    loadComponent: () => import('./delete-album/delete-album').then((m) => m.DeleteAlbum),
  },
  { path: '', redirectTo: 'list-artists', pathMatch: 'full' },
];

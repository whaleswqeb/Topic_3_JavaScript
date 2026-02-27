import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.html',
})
export class App {
  title = 'My Music Collection';
  version = '1.0';

  constructor(private router: Router) {}

  displayVersion() {
    alert('Version: ' + this.version);
  }

  displayArtistList() {
    console.log('Display list here');
    this.router.navigate(['list-artists'], {
      queryParams: { data: new Date() },
    });
  }
}

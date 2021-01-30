import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Placeholder';

  constructor(){}

  tryagainClick(): void {
    window.location.href = 'http://physics-escape-room.live';
  }
}

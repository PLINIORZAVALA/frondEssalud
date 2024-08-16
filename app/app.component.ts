import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { userComponent } from './components/user/user.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,userComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frondEssalud';
}

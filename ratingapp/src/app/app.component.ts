import { Component } from '@angular/core';
import { BLoginComponent } from './business/b-login/b-login.component';
import { BHomeComponent } from './business/b-home/b-home.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ratingapp';


}

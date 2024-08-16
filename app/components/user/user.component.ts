import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { userSerrvice } from '../../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class userComponent implements OnInit {

  public data: any;

  // Inyección de servicio en el constructor
  constructor(private API: userSerrvice) {}

  ngOnInit(): void {
    // Llamada al servicio para obtener productos
    this.API.getUser().subscribe(
      response => {
        this.data = response;
        console.log(this.data);
      },
      error => {
        console.log(error);
      }
    );
  }
}

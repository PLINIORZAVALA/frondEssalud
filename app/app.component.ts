import { Component, OnInit } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { userComponent } from './components/user/user.component';
import { userSerrvice } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    userComponent,
    RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public data: any;

  //Inyectamos los serviccios en el constructor
  constructor(private API: userSerrvice){}

  ngOnInit(): void {
    //Llamanos al servicio para obtener los datos del usurario
    this.API.getUser().subscribe(
      response => {
        this.data = response;
        console.log(this.data);
      },
      error => {
        console.log(error)
      }
    )
  }
}

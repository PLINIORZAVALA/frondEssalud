import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../interfaces/createUser.interface";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class userSerrvice {
 //Llamamos mediante la dirección URL
 private apiUrl = 'http://localhost:3000/user';

 //Contructor que permite obtener los datos de la URL
 constructor(private http: HttpClient) {}
 
 //Realizamos peticiones al backend
 getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
 }
 
}
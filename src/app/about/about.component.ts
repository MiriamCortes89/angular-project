import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  
  title = 'angular-project';
  public users = ['pepe', 'ana', 'sara'];
  public name: string = 'miriam';
  public age: number;
  public address: {
    street: string;
    city: string;
  };
  public hobbies: string[];
  posts = [];

  constructor(private dataService: DataService) {
    this.age = 29;
    this.address = {
      street: 'provincias',
      city: 'rivas'
    };
    this.hobbies = ['nadar', 'leer', 'pescar'];

  // "subscribe()" trae los datos (data) recogidos en DataService. Lo recorremos
    this.dataService.getData().subscribe(data =>{
      this.posts = data;

    });
  }
 

  addUser(newuser) {
    this.users.push(newuser.value); // agregamos el nuevo user al array users
    newuser.value = ''; // vaciamos el input
    newuser.focus(); // Se coloca el cursos en el input
    return false; // Para q no refresque la pag al hacer submit
  }

  delete(user) {
    for (let i = 0; i < this.users.length; i++) {
      if (user == this.users[i]) {
        this.users.splice(i, 1);
      }
    }
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';
import { Post } from './post';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httClient: HttpClient) { }

  
public getData(){
  // Hacemos una peticion a http para q obtenga los datos <array> desde esa url
  return this.httClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts'); 
}

}


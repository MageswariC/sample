import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  configUrl = 'https://jsonplaceholder.typicode.com/todos';
  deletedWords: any;
  jsonData:any;
  jsonLoaded:boolean;
  constructor(private http: HttpClient) { 
    this.jsonLoaded = false;
    this.deletedWords = [];
  }

  getConfig() {
    return this.http.get(this.configUrl)
  }

  getDeletedWords(){
    return this.deletedWords;
  }

  setDeletedWords(data){
    
      this.deletedWords = data;
    
    
  }
}

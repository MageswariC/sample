import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'crud';
  myInput = '';
  deletedData = [];
  jsonData:any;
  constructor ( public myService:ServiceService){}

  delete(event,index,currentData){

    if(event.target.checked){
      
      this.deletedData.push(currentData);
      this.jsonData[index].strike = true;
    }else{
      let temp = [];
      console.log(this.deletedData)
       this.deletedData.forEach(data => {  if( data.id != currentData.id) { temp.push(data);}  })
       this.deletedData = temp;
      this.jsonData[index].strike = false;
    }
   // console.log(this.deletedData);
    this.myService.setDeletedWords(this.deletedData);
   // this.jsonData.splice(index,1);
  }
  edit(el, data){
    if(data.isEdit){
     el.innerHTML = 'Edit'
      return data.isEdit = false;
    }
    data.isEdit = true;
    el.innerHTML = 'Close'
  }
  update(data, index){
    this.jsonData[index].title = data;
  }
  sortAscending(){
    this.jsonData.sort(function(a, b){
      var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
      if (nameA < nameB) //sort string ascending
          return 1 
      if (nameA > nameB)
          return -1
      return 0 //default return value (no sorting)
  });
}

  sortDescending(){
    this.jsonData.sort(function(a, b){
      var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
      if (nameA < nameB) //sort string ascending
          return -1 
      if (nameA > nameB)
          return 1
      return 0 //default return value (no sorting)
  });

  }

  addTodo(){
    if(this.myInput){
      this.jsonData.unshift({title:this.myInput, id: uuid()});
      this.myInput = '';
    }
  }
  ngOnInit(){
    if(this.myService.jsonLoaded){
      this.jsonData = this.myService.jsonData;
      this.deletedData =  this.myService.deletedWords;
    }
    else{
      this.jsonData = this.myService.getConfig().subscribe(data => { this.jsonData = data; },err=>{},()=>{ 
        this.myService.jsonLoaded = true;
         this.jsonData.forEach(data=>{ data.strike = false})
         this.myService.jsonData = this.jsonData;
         
        });
         
    }
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  
  deletedJson : any;
  constructor(public myService:ServiceService ) { }

  ngOnInit() {
      this.deletedJson = this.myService.getDeletedWords();
  }

}

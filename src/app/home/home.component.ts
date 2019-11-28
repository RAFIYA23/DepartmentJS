import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 depts:any;
  constructor(private service:DataService) {
  

   }

  ngOnInit() 
  {
    depts:[{"deptno":"","dname":"","loc":""}]
     let obsselect=this.service.Select();
     obsselect.subscribe((select)=>{
       this.depts=select;
     })
  }

}

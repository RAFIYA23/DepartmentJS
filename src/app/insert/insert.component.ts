import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  dept={"deptno":"","dname":"","loc":""};

  constructor(private service:DataService,private router:Router) { }

  ngOnInit() {
  }
  AddData()
  {
    let obsinsert=this.service.Insert(this.dept);
    obsinsert.subscribe((result)=>{
      this.router.navigate(['home']);
    })

  }
}

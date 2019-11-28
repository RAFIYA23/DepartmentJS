import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  dept={"deptno":"","dname":"","loc":""};

  constructor(private service:DataService,private router:ActivatedRoute,private move:Router) { }

  ngOnInit() 
  {
      this.router.paramMap.subscribe((res)=>{
        let No=res.get("deptno");
        let obsSelectNo=this.service.SelectByNo(No);
        obsSelectNo.subscribe((data)=>{
          this.dept=data[0];
        })
      })
  }
  UpdateData()
  {
    let obsUpdata=this.service.Update(this.dept);
    obsUpdata.subscribe((update)=>{
      this.move.navigate(['home']);
    })
  }

}

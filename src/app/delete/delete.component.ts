import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit 
{

  dept={"deptno":"","dname":"","loc":""};

  constructor(private service:DataService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() 
  {
      this.route.paramMap.subscribe((result)=>
      {
        let deptno=result.get("deptno");
        console.log(deptno);
       let obsdelete=this.service.Delete(deptno);
      obsdelete.subscribe((res)=>{
        this.router.navigate(['home']);
      })
   })
}
}

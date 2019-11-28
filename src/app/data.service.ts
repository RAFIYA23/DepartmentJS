import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private helper:HttpClient) { 

  }
  Select()
  {
   // return this.helper.get("http://localhost:9899/dept");
   return this.helper.get("http://3.134.85.225:9999/dept");
  
  }
  Insert(deptObj)
  {
    //return this.helper.post("http://localhost:9899/dept",deptObj);
    return this.helper.post("http://3.134.85.225:9999/dept",deptObj);
  }
  SelectByNo(deptno)
  {
   // return this.helper.get("http://localhost:9899/dept/"+deptno);
   return this.helper.get("http://3.134.85.225:9999/dept/"+deptno);
  }
  Update(deptObj)
  {
    //return this.helper.put("http://localhost:9899/dept/"+deptObj.deptno,deptObj);
    return this.helper.put("http://3.134.85.225:9999/dept/"+deptObj.deptno,deptObj);
  }
  Delete(deptno)
  {
    //return this.helper.delete("http://localhost:9899/dept/"+deptno);
    return this.helper.delete("http://3.134.85.225:9999/dept/"+deptno);
  }
}

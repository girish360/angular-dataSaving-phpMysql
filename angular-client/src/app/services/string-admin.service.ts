import {Injectable}   from '@angular/core';
import {Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {String} from '../classes/string';

@Injectable()
export class StringAdminService {

  constructor(private _http:Http) { }

  apiUrl = "http://localhost:8443/strings-api/";
  checkMe:any;
  
  getStrings(){
    return this._http.get(this.apiUrl + "select.php")
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
       
      });
  }

  addString(string: String) {                
    let body = JSON.stringify(string);            
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.apiUrl + "insert.php", body, options)
        .map(()=>"");
  }
  
  getString(id){
    return this._http.post(this.apiUrl + "selectone.php",{'id':id})
    .map(res=>{
      this.checkMe = res;
      if(this.checkMe._body !== "0"){
         return res.json()
      }
     
    });
  }

  deleteString(id){
    return this._http.post(this.apiUrl + "delete.php",{'id':id})
      .map(()=>this.getStrings());
  }

  updateString(string: String) {                
    let body = JSON.stringify(string);            
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.apiUrl + "update.php", body, options)
        .map(()=>"");
  }

}

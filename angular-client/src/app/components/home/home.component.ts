import { Component, OnInit } from '@angular/core';
import { StringAdminService } from '../../services/string-admin.service';
import { String } from '../../classes/string';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _stringAdminService:StringAdminService,
    private router: Router
   ) { }

  strings:any;
  ngOnInit() {
    this.getStrings();
  }
  
  getStrings(){
     this._stringAdminService
        .getStrings()
        .subscribe(strings => {
          this.strings = strings;
      } )
  }
  deleteString(id){
    this._stringAdminService
      .deleteString(id)
      .subscribe(() => {
      this.getStrings();
    } )
}

}

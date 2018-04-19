import { Component, OnInit } from '@angular/core';
import { StringAdminService } from '../../services/string-admin.service';
import { String } from '../../classes/string';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-strings-edit',
  templateUrl: './strings-edit.component.html',
  styleUrls: ['./strings-edit.component.scss']
})
export class StringsEditComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private stringAdminService: StringAdminService
  ) { }

  ngOnInit() {
    this.getSingleSring();
  }

  model = new String();
  id = this.route.snapshot.params['id'];
  getSingleSring(){
    
    this.stringAdminService
      .getString(this.id)
      .subscribe(string =>{
          this.model = string[0];
          })
  };
  
  updateString(){
      this.stringAdminService
        .updateString(this.model)
        .subscribe(()=> this.goBack());
  }
 
   goBack(){
    this.router.navigate(['/home']);
  }

}

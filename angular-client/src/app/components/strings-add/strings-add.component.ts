import { Component, OnInit } from '@angular/core';
import { StringAdminService } from '../../services/string-admin.service';
import { String } from '../../classes/string';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-strings-add',
  templateUrl: './strings-add.component.html',
  styleUrls: ['./strings-add.component.scss']
})
export class StringsAddComponent implements OnInit {

  constructor(
    private stringAdminService: StringAdminService,
    private router: Router) { }

  ngOnInit() {
  }

model = new String();
  addString(){
      this.stringAdminService
        .addString(this.model)
        .subscribe(()=> this.goBack());
  }
   goBack(){
    this.router.navigate(['/home']);
  }

}

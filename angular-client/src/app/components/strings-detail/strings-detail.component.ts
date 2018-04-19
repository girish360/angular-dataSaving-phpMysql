import { Component, OnInit } from '@angular/core';
import { StringAdminService } from '../../services/string-admin.service';
import { String } from '../../classes/string';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-strings-detail',
  templateUrl: './strings-detail.component.html',
  styleUrls: ['./strings-detail.component.scss']
})
export class StringsDetailComponent implements OnInit {

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

  goBack(){
    this.router.navigate(['/home']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private api: ApiserviceService,private _route:Router, private router: ActivatedRoute) { }
  errmsg: any;
  successmsg: any;
  getparamid: any;
  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid) {
      this.api.getSingleData(this.getparamid).subscribe((res) => {
        console.log(res, 'select update Data');
        this.userform.patchValue({
          fullname: res.data[0].fullname,
          email: res.data[0].email,
          mobile: res.data[0].mobile
        })
      })
    }
  }

  userform = new FormGroup({
    'fullname': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'mobile': new FormControl('', Validators.required)
  })

  usersubmit() {
    if (this.userform.valid) {
      this.api.createData(this.userform.value).subscribe((res) => {
        this.userform.reset();
        this.successmsg = res.massage;
        this._route.navigate(['/read']);

      })
    }
    else {
      this.errmsg = 'All fileds are required';
    }
  }


  //Update user
  updateUser() {
    if (this.userform.valid) {
      this.api.updateData(this.userform.value, this.getparamid).subscribe((res) => {
        console.log(res, "Data update successful");
        this.successmsg = res.massage;
        this._route.navigate(['/read']);
      })
    } else {
      this.errmsg = 'All fileds are require';

    }

  }

}

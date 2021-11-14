import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private api: ApiserviceService) { }
  errmsg: any;
  successmsg: any;
  ngOnInit(): void {}
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
      })
    }
    else {
      this.errmsg = 'All fileds are required';
    }
  }
}

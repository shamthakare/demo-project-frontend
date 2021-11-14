import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  // userform=  new FormGroup({})

  constructor(private api: ApiserviceService) { }
  errmsg:any;
  successmsg:any;

  ngOnInit(): void {

  }
  userform = new FormGroup({
    'fullname': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'mobile': new FormControl('', Validators.required)
  })

  usersubmit() {
    // console.log(this.userform.value);
    if(this.userform.valid){
      console.log(this.userform.value);
      this.api.createData(this.userform.value).subscribe((res)=>{
        console.log(res,'Data added successful');
        this.userform.reset();
        this.successmsg= res.massage;
      })
    }
    else{
      this.errmsg='All fileds are required';

    }


  }

}

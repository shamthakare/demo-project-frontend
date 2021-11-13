import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  constructor(private api:ApiserviceService) { }
  readUser:any;

  ngOnInit(): void {
    this.api.getAllUser().subscribe((res)=>{
      console.log('get All Data',res);
      this.readUser=res.Data;
    })
  }

}

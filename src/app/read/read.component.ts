import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  constructor(private api: ApiserviceService) { }
  readUser: any;
  successmsg: any;
  ngOnInit(): void {
    this.getalldata();
  }

  getalldata() {
    this.api.getUserList().subscribe((res) => {
      this.readUser = res.data;
    });
  }

  //delete Id
  deleteId(id: any) {
    this.api.deleteData(id).subscribe((res) => {
      this.successmsg = res.massage;
      this.getalldata();
    });
  }
  // edit by Id
  editId(data: any, id: any) {
    this.api.updateData(data, id).subscribe((res) => {
      this.successmsg = res.massage;
      this.getalldata();
    });
  }
}

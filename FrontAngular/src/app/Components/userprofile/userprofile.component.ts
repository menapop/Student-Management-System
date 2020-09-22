import { Component, OnInit } from "@angular/core";
import { Profiledata } from "src/app/Shared/profiledata";
import { StudentService } from "src/app/Services/student.service";

@Component({
  selector: "app-userprofile",
  templateUrl: "./userprofile.component.html",
  styleUrls: ["./userprofile.component.scss"]
})
export class UserprofileComponent implements OnInit {
  studentdata: Profiledata;
  userid: string;
  constructor(private studentservice: StudentService) {
    this.studentdata = new Profiledata();
  }

  ngOnInit() {
    this.userid = localStorage.getItem("ID");
    this.studentservice.GetUserPofile(this.userid).subscribe(
      data => {
        this.studentdata = data;
        console.log(this.studentdata.ListCourseDegree);
      },
      error => {
        console.log(error);
      }
    );
  }
}

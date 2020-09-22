import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AdminService } from "src/app/Services/admin.service";
import { ActivatedRoute } from "@angular/router";
import { Student } from "src/app/Shared/student";
import { StudentdetailschildComponent } from "./studentdetailschild/studentdetailschild.component";
import { Course } from "src/app/Shared/course";

@Component({
  selector: "app-studentdetailsmasster",
  templateUrl: "./studentdetailsmasster.component.html",
  styleUrls: ["./studentdetailsmasster.component.scss"]
})
export class StudentdetailsmassterComponent implements OnInit {
  userid: string;
  std: Student;
  courselist: Course[];
  constructor(
    private adminservice: AdminService,
    private route: ActivatedRoute
  ) {
    this.userid = this.route.snapshot.paramMap.get("id");
    this.adminservice.Getstudentbyid(this.userid).subscribe(
      data => {
        this.std = data;
      },
      error => {
        console.log(error);
      }
    );
    this.adminservice.GetsCursesByUserID(this.userid).subscribe(
      data => {
        this.courselist = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {}
}

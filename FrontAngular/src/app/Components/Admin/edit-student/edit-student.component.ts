import { Component, OnInit } from "@angular/core";
import { Student } from "src/app/Shared/student";
import { Department } from "src/app/Shared/department";
import { AdminService } from "src/app/Services/admin.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Route } from "@angular/compiler/src/core";

@Component({
  selector: "app-edit-student",
  templateUrl: "./edit-student.component.html",
  styleUrls: ["./edit-student.component.scss"]
})
export class EditStudentComponent implements OnInit {
  std: Student;
  Depts: Department[];
  userid: string;
  constructor(
    private Adminservice: AdminService,
    private router: Router,
    private rout: ActivatedRoute
  ) {
    this.std = new Student();
    //this.selecteddepartment = 1;
    this.userid = this.rout.snapshot.paramMap.get("id");
    console.log(this.userid);
    this.Adminservice.getAllDepartments().subscribe(
      data => {
        this.Depts = data;
      },
      error => {
        console.log(error);
      }
    );
    this.Adminservice.Getstudentbyid(this.userid).subscribe(
      data => {
        this.std = data;
        console.log(this.std);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {}

  frmSubmit() {
    this.Adminservice.UpdateStudent(this.std).subscribe(
      res => {
        console.log(res);
        this.router.navigate(["/Sudents"]);
      },
      err => {
        console.log(err);
      }
    );
  }
}

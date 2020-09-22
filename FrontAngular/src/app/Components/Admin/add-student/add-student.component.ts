import { Component, OnInit } from "@angular/core";
import { Student } from "src/app/Shared/student";
import { Department } from "src/app/Shared/department";
import { AdminService } from "src/app/Services/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-student",
  templateUrl: "./add-student.component.html",
  styleUrls: ["./add-student.component.scss"]
})
export class AddStudentComponent implements OnInit {
  std: Student;
  Depts: Department[];
  selecteddepartment: number;
  constructor(private Adminservice: AdminService, private router: Router) {
    this.std = new Student();
    this.selecteddepartment = 1;
    this.Adminservice.getAllDepartments().subscribe(
      data => {
        this.Depts = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {}
  frmSubmit() {
    this.std.Department_ID = this.selecteddepartment;
    this.Adminservice.addStudent(this.std).subscribe(
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

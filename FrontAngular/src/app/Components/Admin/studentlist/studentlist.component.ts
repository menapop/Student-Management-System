import { Component, OnInit } from "@angular/core";
import { Student } from "src/app/Shared/student";
import { AdminService } from "src/app/Services/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-studentlist",
  templateUrl: "./studentlist.component.html",
  styleUrls: ["./studentlist.component.scss"]
})
export class StudentlistComponent implements OnInit {
  students: Student[];
  constructor(private adminservice: AdminService, private http: Router) {
    this.adminservice.getAllStudents().subscribe(
      data => {
        this.students = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {}
  updatestudent(stdid: string) {
    this.http.navigate(["/students/edit/", stdid]);
  }
  showstudentDetalis(stdid: string) {
    this.http.navigate(["/students/details/", stdid]);
  }
  DeleteUser(stdid: string, name: string) {
    if (confirm("Are you sure to delete " + name)) {
      this.adminservice.DeleteUserbyid(stdid).subscribe(
        suc => {
          window.location.reload();
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}

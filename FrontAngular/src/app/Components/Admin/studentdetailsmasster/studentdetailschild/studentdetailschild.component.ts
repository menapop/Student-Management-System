import {
  Component,
  OnInit,
  Input,
  OnChanges,
  TemplateRef
} from "@angular/core";
import { Student } from "src/app/Shared/student";
import { Location } from "@angular/common";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { AdminService } from "src/app/Services/admin.service";
import { Course } from "src/app/Shared/course";
@Component({
  selector: "app-studentdetailschild",
  templateUrl: "./studentdetailschild.component.html",
  styleUrls: ["./studentdetailschild.component.scss"]
})
export class StudentdetailschildComponent implements OnInit, OnChanges {
  @Input() stduser: Student;
  modalRef: BsModalRef;
  crs: Course;
  selectedcourseid: number;
  @Input() Courses: Course[];
  constructor(
    private location: Location,
    private modalService: BsModalService,
    private adminservice: AdminService
  ) {
    this.crs = new Course();
  }

  ngOnInit() {}
  ngOnChanges() {}
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  back() {
    this.location.back();
  }
  frmSubmit() {
    this.crs.StudentID = this.stduser.Id;
    this.adminservice.adddegree(this.crs).subscribe(
      success => {
        alert("Degree Added Successfully !");
      },
      error => {
        console.log(error);
      }
    );
  }
}

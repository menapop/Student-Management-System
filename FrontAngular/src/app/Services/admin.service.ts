import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Student } from "../Shared/student";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AddStudentComponent } from "../Components/Admin/add-student/add-student.component";
import { Department } from "../Shared/department";
import { Course } from "../Shared/course";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Accept: " */*",
      Authorization: "Bearer " + localStorage.getItem("AccessToken")
    })
  };
  constructor(private _http: HttpClient) {}
  getAllStudents(): Observable<Student[]> {
    const URL = `${environment.Api_URL}Admin/GetStudents`;
    return this._http.get<Student[]>(URL, this.httpOptions);
  }
  addStudent(newstuden: Student) {
    const URL = `${environment.Api_URL}Admin/AddUser`;
    return this._http.post<string>(URL, newstuden, this.httpOptions);
  }
  getAllDepartments(): Observable<Department[]> {
    const URL = `${environment.Api_URL}Department/GetAllDepartments`;
    return this._http.get<Department[]>(URL, this.httpOptions);
  }

  UpdateStudent(std: Student) {
    const URL = `${environment.Api_URL}Admin/UpdateStudent`;
    return this._http.post<string>(URL, std, this.httpOptions);
  }
  Getstudentbyid(stdid: string): Observable<Student> {
    const URL = `${environment.Api_URL}Admin/GetUserByID/${stdid}`;
    return this._http.get<Student>(URL, this.httpOptions);
  }

  DeleteUserbyid(stdid: string): Observable<string> {
    const URL = `${environment.Api_URL}Admin/DeleteUserByID/${stdid}`;
    return this._http.get<string>(URL, this.httpOptions);
  }
  GetsCursesByUserID(stdid: string): Observable<Course[]> {
    const URL = `${environment.Api_URL}Admin/GetCoursesByUserId/${stdid}`;
    return this._http.get<Course[]>(URL, this.httpOptions);
  }
  adddegree(coursedegree: Course) {
    const URL = `${environment.Api_URL}Admin/AssignDegree`;
    return this._http.post<string>(URL, coursedegree, this.httpOptions);
  }
}

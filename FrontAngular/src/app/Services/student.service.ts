import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Profiledata } from "../Shared/profiledata";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class StudentService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Accept: " */*",
      Authorization: "Bearer " + localStorage.getItem("AccessToken")
    })
  };
  constructor(private _http: HttpClient) {}
  GetUserPofile(userid: string): Observable<Profiledata> {
    const URL = `${environment.Api_URL}Student/GetUserPrfile/${userid}`;
    return this._http.get<Profiledata>(URL, this.httpOptions);
  }
}

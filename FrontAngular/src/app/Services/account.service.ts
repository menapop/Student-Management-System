import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LogInModel } from "../Shared/log-in-model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AccessToken } from "../Shared/access-token";
@Injectable({
  providedIn: "root"
})
export class AccountService {
  constructor(private http: HttpClient) {}
  LogIn(LogInUser: LogInModel): Observable<string> {
    const APIURL = `${environment.Api_URL}Account/Login`;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: " */*",
        Authorization: "my-auth-token"
      })
    };
    return this.http.post<string>(APIURL, LogInUser, httpOptions);
  }

  gettoken(UserName: string, Password: string): Observable<AccessToken> {
    const AccessUrl = environment.AccessTokenUrl;
    const UserData =
      "UserName=" + UserName + "&Password=" + Password + "&grant_type=password";
    const RequestHeader = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    return this.http.post<AccessToken>(AccessUrl, UserData, {
      headers: RequestHeader
    });
  }

  GetUserID(LogInUser: LogInModel): Observable<string> {
    const APIURL = `${environment.Api_URL}Account/GetUSerID`;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: " */*",
        Authorization: "my-auth-token"
      })
    };
    return this.http.post<string>(APIURL, LogInUser, httpOptions);
  }
}

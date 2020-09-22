import { Component, OnInit } from "@angular/core";
import { LogInModel } from "src/app/Shared/log-in-model";
import { AccessToken } from "src/app/Shared/access-token";
import { AccountService } from "src/app/Services/account.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  private LogInUser: LogInModel;

  private MyToken: AccessToken;

  constructor(private AccountService: AccountService, private router: Router) {
    this.LogInUser = new LogInModel();
    this.MyToken = new AccessToken();
  }

  ngOnInit() {}
  frmSubmit() {
    this.AccountService.LogIn(this.LogInUser).subscribe(
      success => {
        localStorage.setItem("RoleName", success);
        this.AccountService.GetUserID(this.LogInUser).subscribe(
          data => {
            //alert(data);
            localStorage.setItem("ID", data);
          },
          error => {
            console.log(error);
          }
        );
        this.AccountService.gettoken(
          this.LogInUser.UserName,
          this.LogInUser.Password
        ).subscribe(
          token => {
            this.MyToken = token;
            alert(this.MyToken.access_token);
            localStorage.setItem("AccessToken", this.MyToken.access_token);

            if (localStorage.getItem("RoleName") == "Admin")
              this.router.navigate(["/Sudents"]);
            else this.router.navigate(["/profile"]);
          },
          err => {
            console.log("Error 2 " + err);
          }
        );
      },
      err => {
        console.log("Error 1 " + err);
      }
    );
  }
}

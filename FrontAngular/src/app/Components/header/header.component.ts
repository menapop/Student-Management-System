import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  RoleName: string;
  RoleId = -1;
  constructor(private _router: Router) {
    this.RoleName = localStorage.getItem("RoleName");
    if (this.RoleName == null || this.RoleName == undefined) this.RoleId = -1;
    else this.RoleId = 1;
  }

  ngOnInit() {}
  LogOut() {
    localStorage.removeItem("AccessToken");
    localStorage.removeItem("RoleName");
    localStorage.removeItem("ID");
    this.RoleName = null;
    this.RoleId = -1;
    this._router.navigate(["/login"]);
  }
}

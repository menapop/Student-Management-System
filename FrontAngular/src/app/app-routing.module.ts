import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./Components/login/login.component";
import { StudentlistComponent } from "./Components/Admin/studentlist/studentlist.component";
import { AddStudentComponent } from "./Components/Admin/add-student/add-student.component";
import { EditStudentComponent } from "./Components/Admin/edit-student/edit-student.component";
import { StudentdetailsmassterComponent } from "./Components/Admin/studentdetailsmasster/studentdetailsmasster.component";
import { AuthGuardService } from "./Services/auth-guard.service";
import { UserprofileComponent } from "./Components/userprofile/userprofile.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "Sudents",
    component: StudentlistComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "students/details/:id",
    component: StudentdetailsmassterComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "students/Add",
    component: AddStudentComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "students/edit/:id",
    component: EditStudentComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: "profile",
    component: UserprofileComponent
  },

  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
    data: {
      title: "login"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

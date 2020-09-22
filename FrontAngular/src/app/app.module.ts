import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./Components/header/header.component";
import { LoginComponent } from "./Components/login/login.component";
import { StudentlistComponent } from "./Components/Admin/studentlist/studentlist.component";
import { AddStudentComponent } from "./Components/Admin/add-student/add-student.component";
import { EditStudentComponent } from "./Components/Admin/edit-student/edit-student.component";
import { StudentdetailsmassterComponent } from "./Components/Admin/studentdetailsmasster/studentdetailsmasster.component";
import { StudentdetailschildComponent } from "./Components/Admin/studentdetailsmasster/studentdetailschild/studentdetailschild.component";
import { ModalModule } from "ngx-bootstrap/modal";
import { UserprofileComponent } from "./Components/userprofile/userprofile.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CacheInterceptor } from "./Shared/cache.interceptor";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    StudentlistComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentdetailsmassterComponent,
    StudentdetailschildComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

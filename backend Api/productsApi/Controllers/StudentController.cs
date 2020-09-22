using ApiProject.Models;
using productsApi.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace productsApi.Controllers
{
    [Authorize(Roles="User")]
    public class StudentController : ApiController
    {
        ApplicationDbContext db = new ApplicationDbContext();
        public IHttpActionResult GetUserPrfile(string id)
        {
            
            StudentProfile appuser = (from user in db.Users
                                       from dep in db.departments
                                       where
                                       user.Department_ID == dep.ID
                                       && user.Id == id
                                       select new StudentProfile
                                       {
                                           Id = user.Id,
                                           Name = user.Name,
                                           UserName = user.UserName,
                                           Address = user.Address,
                                           DepartmentName = dep.Name,
                                           
                                       }
                                      ).FirstOrDefault();

            appuser.ListCourseDegree = (from user in db.Users
                                        from department in db.departments
                                        from course in db.Courses
                                        from stddegree in db.StudenDegrees
                                        where user.Department_ID == department.ID
                                        && course.Department_ID == department.ID &&
                                         stddegree.CourseID == course.ID &&
                                         stddegree.StudentID ==user.Id &&
                                           user.Id ==id
                                        select new CourseDegree
                                        {
                                            CourseID = course.ID,
                                            Name=course.Name,
                                            Degree= stddegree.Degree
                                        }
                                        ).ToList();



            return Ok(appuser);
        }
    }
}

using ApiProject.Models;
using ApiProject.ViewModel;
using Microsoft.AspNet.Identity;
using productsApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace productsApi.Controllers
{
    [Authorize(Roles ="Admin")]
    public class AdminController : ApiController
    {
        ApplicationDbContext context = new ApplicationDbContext();

        [HttpPost]
        public IHttpActionResult AddUser(UserMdel newuser)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            AuthBL AuthBusLayer = new AuthBL();
            ApplicationUser OldUser = AuthBusLayer.FindUser(newuser.UserName, newuser.Password);
            if (OldUser != null)
                return BadRequest("Exist Befor");

            IdentityResult res = AuthBusLayer.CreateUser(newuser);
            if (res.Succeeded)
            {
                return Ok("User");
            }
            string Errors = "";
            foreach (var item in res.Errors)
            {
                Errors += item + " ";
            }
            return BadRequest(Errors);
        }
        [HttpGet]
        public IHttpActionResult GetStudents()

        {
            var users = (from user in context.Users  where user.IsDeleted==false
                         select new UserMdel
                         {
                             Id = user.Id,
                             Name = user.Name,
                             Address = user.Address,
                             Department_ID = user.Department_ID,
                             UserName = user.UserName
                         }).ToList();
            return Ok(users);

            }
        [HttpGet]
        public IHttpActionResult GetUserByID(string id)
        {
            var users = (from user in context.Users
                         where user.Id == id
                         select new UserMdel
                         {
                             Id = user.Id,
                             Name = user.Name,
                             Address = user.Address,
                             Department_ID = user.Department_ID,
                             UserName = user.UserName
                         }).FirstOrDefault();
            return Ok(users);
        }
        [HttpPost]
        public IHttpActionResult UpdateStudent(UserMdel user)
        {
            AuthBL rep = new AuthBL();

            ApplicationUser res = context.Users.Where(u => u.Id == user.Id).FirstOrDefault();
            if (res != null)
            {
                res.Name = user.Name;
                res.Address = user.Address;
                res.UserName = user.UserName;
                res.Department_ID = user.Department_ID;
                res.IsDeleted = false;
                context.SaveChanges();

                return Ok();
            }
            return NotFound();
        }
        [HttpGet]
        public IHttpActionResult DeleteUserByID(string id)
        {
            ApplicationUser res = context.Users.Where(u => u.Id ==id && u.IsDeleted==false).FirstOrDefault();
            if(res!=null)
            {
                res.IsDeleted = true;
                context.SaveChanges();
            }
            return Ok(res.Id);
        }

        public IHttpActionResult GetCoursesByUserId(string id)
        {
            int studentDepID = (from user in context.Users where user.Id == id select user.Department_ID).FirstOrDefault();
            var courses = context.Courses.Where(c => c.Department_ID == studentDepID).ToList();
            return Ok(courses);
        }
        [HttpPost]
        public IHttpActionResult AssignDegree(StudenDegrees userCrsdegree)
        {
            StudenDegrees stdegree = (from stdeg in context.StudenDegrees
                                      where stdeg.CourseID == userCrsdegree.CourseID
         && stdeg.StudentID == userCrsdegree.StudentID
                                      select stdeg).FirstOrDefault();
            if(stdegree!=null)
            {
                context.StudenDegrees.Remove(stdegree);
                context.SaveChanges();
            }
            context.StudenDegrees.Add(userCrsdegree);
            context.SaveChanges();
            return Ok("ok");
        }
    } 
    }


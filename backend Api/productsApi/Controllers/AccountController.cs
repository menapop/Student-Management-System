using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ApiProject.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using ApiProject.ViewModel;

namespace ApiProject.Controllers
{
    public class AccountController : ApiController
    {
        ApplicationDbContext db = new ApplicationDbContext();

        [HttpPost]
        public IHttpActionResult Login(LoginModel user)
        {
            AuthBL rep = new AuthBL();

            ApplicationUser res = rep.FindUser(user.UserName, user.Password);
            if (res != null)
            {
               if(res.IsDeleted==false)
                     return Ok(rep.FinduserRole(user.UserName, user.Password));
            }
            return NotFound();
        }
        [HttpPost]
        public IHttpActionResult GetUSerID(LoginModel user)
        {
            AuthBL rep = new AuthBL();

            ApplicationUser res = rep.FindUser(user.UserName, user.Password);
            if (res != null)
            {
                if (res.IsDeleted == false)
                        return Ok(res.Id);
            }
            return NotFound();
        }

    }
}

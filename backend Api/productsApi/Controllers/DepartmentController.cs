using ApiProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace productsApi.Controllers
{
    [Authorize(Roles ="Admin")]
    public class DepartmentController : ApiController
    {
        ApplicationDbContext context = new ApplicationDbContext();

        [HttpGet]
        public IHttpActionResult GetAllDepartments()

        {
            return Ok(context.departments.ToList());
        }
    }
}

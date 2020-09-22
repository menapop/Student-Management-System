using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace productsApi.ViewModel
{
    public class StudentProfile
    {
        public string Id { set; get; }
        public string Name { set; get;}
        public string DepartmentName { set; get; }
        public  string UserName { set; get; }
        public string Address { set; get; }
        public List <CourseDegree> ListCourseDegree { set; get; }
       public StudentProfile()
        {
            ListCourseDegree = new List<CourseDegree>();
        }

    }
}
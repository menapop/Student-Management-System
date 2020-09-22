using ApiProject.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace productsApi.Models
{
    public class StudenDegrees
    {
        public int ID { get; set; }
        [ForeignKey("student")]
        public string StudentID { get; set; }

        [ForeignKey("course")]
        public int CourseID { get; set; }

        public double Degree { set; get; }

        public bool IsDeleted { set; get; }

        public virtual Course course { set; get; }
        public virtual ApplicationUser student { set; get; }
    }
}
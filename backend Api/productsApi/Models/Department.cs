using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ApiProject.Models
{
    public class Department
    {
        public Department()
        {
            this.Courses = new List<Course>();
            this.Users = new List<ApplicationUser>();
        }
        public int ID { get; set; }
        [Required]
        [MinLength(2)]
        public string Name { get; set; }

        [JsonIgnore]
        public virtual ICollection<Course> Courses { get; set; }

        [JsonIgnore]
        public virtual ICollection<ApplicationUser> Users { get; set; }

    }
}
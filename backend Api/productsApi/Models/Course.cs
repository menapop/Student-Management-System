using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ApiProject.Models
{
    public class Course
    {
        public int ID { get; set; }

        [Required][MinLength(2)]
        public string Name { get; set; }

        [ForeignKey("department")]
        public int Department_ID { get; set; }
        [JsonIgnore]
        public virtual Department department { get; set; }
    }
}
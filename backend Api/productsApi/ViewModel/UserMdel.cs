using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ApiProject.ViewModel
{
    public class UserMdel
    {
        public string Id { get; set; }
        [Required]
        public string Name { set; get; }
        [Required]
        public string Address { set; get; }

        [Required]
        public int Department_ID { set; get; }
        [Required]
        [MinLength(4)]
        public string UserName { get; set; }

        [Required]
        [MinLength(6)] 
        [DataType(DataType.Password)]
        public string Password { get; set; }

       
    }
}
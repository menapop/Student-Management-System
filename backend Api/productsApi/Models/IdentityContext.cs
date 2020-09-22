using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Newtonsoft.Json;
using productsApi.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;

namespace ApiProject.Models
{

    public class ApplicationUser : IdentityUser
    {
        [Required]
        public string Name { get; set; }
        
        [Required]
        public string Address { get; set; }
        
       
        public bool IsDeleted { set; get; }

        [ForeignKey("department")]
        public int Department_ID { get; set; }
        [JsonIgnore]
        public virtual Department department { get; set; }

        
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            // Add custom user claims here
            return userIdentity;
        }
    }
    class ApplicationUserStore : UserStore<ApplicationUser>
    {
        public ApplicationUserStore(ApplicationDbContext context) : base(context)
        {

        }
    }
    class ApplicationManager : UserManager<ApplicationUser>
    {
        public ApplicationManager(ApplicationUserStore store) : base(store)
        {

        }
    }
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext() : base("Data Source = .; Initial Catalog = student; Integrated Security = True")
        {

        }

        public virtual DbSet<Course> Courses { get; set; }
        public virtual DbSet<Department> departments { get; set; }
       
        public virtual DbSet<StudenDegrees> StudenDegrees { set; get; }



    }
}
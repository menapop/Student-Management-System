using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using ApiProject.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace ApiProject.Models
{
    public class AuthBL
    {
        UserManager<ApplicationUser> _manager;
        ApplicationDbContext _context;
        public AuthBL()
        {
            _context = new ApplicationDbContext();
            _manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(_context));

        }

        public ApplicationUser FindUser(string username, string pass)
        {
            return _manager.FindAsync(username, pass).Result;
        }

        public string FinduserRole(string username, string pass)
        {
            ApplicationUser User = FindUser(username, pass);
            if (User != null)
                return _manager.GetRoles(User.Id).FirstOrDefault();

            return null;
        }

        private IdentityResult CreateAccount(UserMdel UserModel, ApplicationUser appuser)
        {
            appuser.UserName = UserModel.UserName;
            IdentityResult IdentityResult = _manager.CreateAsync(appuser, UserModel.Password).Result;
            return IdentityResult;
        }


        public IdentityResult CreateUser(UserMdel UserModel)
        {
            ApplicationUser Appuser = new ApplicationUser();
            Appuser.UserName = UserModel.UserName;
            Appuser.Name = UserModel.Name;
            Appuser.Address = UserModel.Address;
            Appuser.Department_ID = UserModel.Department_ID;
            Appuser.IsDeleted = false;
            IdentityResult IdentityResult = CreateAccount(UserModel, Appuser);
            if (IdentityResult.Succeeded)
            {
                 _manager.AddToRolesAsync(Appuser.Id, "User");
            }
            return IdentityResult;
        }
    }
}

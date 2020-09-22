using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using ApiProject.Models;
using System.Security.Claims;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Web.Http.Cors;

[assembly: OwinStartup(typeof(ApiProject.Startup1))]

namespace ApiProject
{
    
    public class Startup1
    {
        [EnableCors("*","*","*")]
        public void Configuration(IAppBuilder app)

        {

            OAuthAuthorizationServerOptions oAuthOption =
               new OAuthAuthorizationServerOptions()
               {
                   Provider = new MyOAuthProvider(),
                   AccessTokenExpireTimeSpan = TimeSpan.FromDays(1),
                   TokenEndpointPath = new PathString("/mytoken"),
                   AllowInsecureHttp = true,
                    

               };

            app.UseOAuthAuthorizationServer(oAuthOption);
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());


            HttpConfiguration confg = new HttpConfiguration();
            WebApiConfig.Register(confg);
            app.UseWebApi(confg);
            
        }
        internal class MyOAuthProvider : OAuthAuthorizationServerProvider
        {
            [EnableCors("*", "*", "*")]
            public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
            {
                context.Validated();
            }

            [EnableCors("*", "*", "*")]
            public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
            {

                context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });

                //Check User
                AuthBL rep = new AuthBL();
                IdentityUser user = rep.FindUser(context.UserName, context.Password);

                //create toke
                if (user == null)
                    context.SetError("User Not Found");
                else
                {
                    ClaimsIdentity identity = new ClaimsIdentity(context.Options.AuthenticationType);
                    identity.AddClaim(new Claim("UserName", context.UserName));
                    if (rep.FinduserRole(context.UserName, context.Password) == "Admin")
                        identity.AddClaim(new Claim(identity.RoleClaimType, "Admin"));

                   else if (rep.FinduserRole(context.UserName, context.Password) == "User")
                        identity.AddClaim(new Claim(identity.RoleClaimType, "User"));

                    context.Validated(identity);
                }
            }
        }
    }
}

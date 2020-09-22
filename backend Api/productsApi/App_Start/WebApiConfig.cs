using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ApiProject
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {

            EnableCorsAttribute cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);



            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
              name: "DefaultRPC",
              routeTemplate: "api/{controller}/{Action}/{id}",
              defaults: new { id = RouteParameter.Optional }
          );

          
        }
    }
}

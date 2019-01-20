using LawFirm.BL;
using LawFirm.DAL.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace LawFirm.Webapi.Controllers
{
    public class ExpertController : ApiController
    {
        private IExpertBl iExpertBL;
        public ExpertController(IExpertBl iEB)
        {
            this.iExpertBL = iEB;
        }

        [HttpGet]
        [Route("Expert/GetAllExperts/")]
        public IHttpActionResult GetAllExperts()
        {
            try
            {
                return Ok(this.iExpertBL.GetAllExperts());
            }
            catch (Exception exp)
            {
                return null;
            }
        }

        [HttpPost]
        [Route("Expert/AddExpert/")]
        public IHttpActionResult AddExpert(Expert item)
        {
            try
            {
                return Ok(this.iExpertBL.AddExpert(item));
            }
            catch (Exception exp)
            {
                return null;
            }
        }

        [HttpPost]
        [Route("Expert/EditExpert/")]
        public IHttpActionResult EditExpert(Expert item)
        {
            try
            {
                return Ok(this.iExpertBL.EditExpert(item));
            }
            catch (Exception exp)
            {
                return null;
            }
        }


        [HttpPost]
        [Route("Expert/RemoveExpert/")]
        public IHttpActionResult RemoveExpert(Expert item)
        {
            try
            {
                if (item.image != "null")
                {
                    var url = new Uri(item.image);
                    item.image = '~' + url.LocalPath;
                    item.image = HttpContext.Current.Server.MapPath(item.image);
                    if (File.Exists(item.image))
                        File.Delete(item.image);
                }

                return Ok(this.iExpertBL.RemoveExpert(item));
            }
            catch (Exception exp)
            {
                return null;
            }
        }

    }
}

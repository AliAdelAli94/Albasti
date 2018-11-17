using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LawFirm.BL;
using LawFirm.DAL.Models;
using System.Threading.Tasks;
using System.IO;
using System.Net.Http.Formatting;
using System.Web;
using Newtonsoft.Json;

namespace LawFirm.Webapi.Controllers
{
    public class FaqController : ApiController
    {
        private IFaqlBL iFaqBL;
        public FaqController(IFaqlBL iFB)
        {
            this.iFaqBL = iFB;
        }

        [HttpGet]
        [Route("Faq/GetAllFaq/")]
        public IHttpActionResult GetAllFaq()
        {
            try
            {
                return Ok(this.iFaqBL.GetAllFaq());
            }
            catch (Exception exp)
            {
                return null;
            }
        }

        
        [HttpPost]
        [Route("Faq/AddFaqDashboard/")]
        public IHttpActionResult AddFaqDashboard(FAQ item)
        {
            try
            {
                item = this.iFaqBL.AddFaq(item);
                return Ok(item);
            }
            catch (Exception exp)
            {
                return null;
            }
        }

        [HttpPost]
        [Route("Faq/DeleteFaqDashboard/{id}")]
        public IHttpActionResult DeleteFaqDashboard(int id)
        {
            try
            {
                if (!this.iFaqBL.DeleteFaq(id))
                {
                    return null;
                }
                return Ok(true);
            }
            catch (Exception exp)
            {
                return null;
            }
        }

        [HttpPost]
        [Route("Faq/UpdateFaqDashboard/")]
        public IHttpActionResult UpdateFaqDashboard(FAQ item)
        {
            try
            {
                if (!this.iFaqBL.UpdateFaq(item))
                {
                    return null;
                }
                return Ok(true);
            }
            catch (Exception exp)
            {
                return null;
            }
        }

    }
}

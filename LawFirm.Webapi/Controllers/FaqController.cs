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
        [Route("Faq/GetAllFaqDashboard/")]
        public IHttpActionResult GetAllFaqDashboard(int jtStartIndex, int jtPageSize)
        {
            try
            {
                var data = this.iFaqBL.GetAllFaq();
                return Ok(new FAQDto()
                {
                    Result = "OK",
                    TotalRecordCount = data.Count,
                    Records = data
                });
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
                return Ok(new FaqAddDto()
                {
                    Result = "OK",
                    Record = item
                });
            }
            catch (Exception exp)
            {
                return null;
            }
        }

        [HttpPost]
        [Route("Faq/DeleteFaqDashboard/")]
        public IHttpActionResult DeleteFaqDashboard(FAQ item)
        {
            try
            {
                if (!this.iFaqBL.DeleteFaq(item))
                {
                    return null;
                }
                return Ok(new
                {
                    Result = "OK"
                });
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
                return Ok(new
                {
                    Result = "OK"
                });
            }
            catch (Exception exp)
            {
                return null;
            }
        }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LawFirm.BL;
using LawFirm.DAL.Models;

namespace LawFirm.Webapi.Controllers
{
    public class TestemonialController : ApiController
    {
        private ITestemonialsBl iTestemonialBL;
        public TestemonialController(ITestemonialsBl iTB)
        {
            this.iTestemonialBL = iTB;
        }

        [HttpGet]
        [Route("Testemonial/GetAllTestemonials/")]
        public IHttpActionResult GetAllTestemonials()
        {
            try
            {
                return Ok(this.iTestemonialBL.GetAllTestimonial());
            }
            catch (Exception exp)
            {
                return null;
            }
        }

        
        [HttpPost]
        [Route("Testemonial/AddTestemonial/")]
        public IHttpActionResult AddTestemonial(Testimonial item)
        {
            try
            {
                item = this.iTestemonialBL.Add(item);
                return Ok(item);
            }
            catch (Exception exp)
            {
                return null;
            }
        }

        [HttpPost]
        [Route("Testemonial/DeleteTestemonialDashboard/{id}")]
        public IHttpActionResult DeleteTestemonialDashboard(int id)
        {
            try
            {
                if (!this.iTestemonialBL.DeleteTestimonial(id))
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
        [Route("Testemonial/UpdateTestemonial/")]
        public IHttpActionResult UpdateTestemonial(Testimonial item)
        {
            try
            {
                if (!this.iTestemonialBL.UpdateTestemonial(item))
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

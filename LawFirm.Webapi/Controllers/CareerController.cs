using LawFirm.BL;
using LawFirm.DAL.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LawFirm.Webapi.Controllers
{
    public class CareerController : ApiController
    {
          private ICareerBl iCareerBL;
        public CareerController(ICareerBl iCB)
        {
            this.iCareerBL = iCB;
        }

        [HttpGet]
        [Route("Career/GetAllCareers/")]
        public IHttpActionResult GetAllCareers()
        {
            try
            {

                List<Career> data = this.iCareerBL.GetAllCareers();
                foreach (var item in data)
                {
                    DateTime currentDate = DateTime.ParseExact(item.postDate,"dd/MM/yyyy HH:mm:ss",CultureInfo.InvariantCulture);
                }
                return Ok(this.iCareerBL.GetAllCareers());
            }
            catch (Exception exp)
            {
                return null;
            }
        }

        [HttpPost]
        [Route("Career/AddCareerDashboard/")]
        public IHttpActionResult AddCareerDashboard(Career item)
        {
            try
            {
                item = this.iCareerBL.AddCareer(item);
                return Ok(item);
            }
            catch (Exception exp)
            {
                return null;
            }
        }

        [HttpPost]
        [Route("Career/DeleteCareerDashboard/{id}")]
        public IHttpActionResult DeleteCareerDashboard(int id)
        {
            try
            {
                if (!this.iCareerBL.DeleteCareer(id))
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
        [Route("Career/UpdateCareerDashboard/")]
        public IHttpActionResult UpdateCareerDashboard(Career item)
        {
            try
            {
                if (!this.iCareerBL.UpdateCareer(item))
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

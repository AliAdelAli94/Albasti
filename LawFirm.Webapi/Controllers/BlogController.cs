using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LawFirm.BL;
using LawFirm.DAL.Models;
using System.Web;
using System.IO;

namespace LawFirm.Webapi.Controllers
{
    public class BlogController : ApiController
    {
        private IBlogBL iBlogBL;
        public BlogController(IBlogBL iBB)
        {
            this.iBlogBL = iBB;
        }

        [HttpGet]
        [Route("Blog/GetAllBlogs/")]
        public IHttpActionResult GetAllBlogs()
        {
            try
            {
                return Ok(this.iBlogBL.GetAllBlogs());
            }
            catch (Exception exp)
            {
                return null;
            }
        }


        [HttpPost]
        [Route("Blog/AddBlog/")]
        public IHttpActionResult AddBlog(Blog item)
        {
            try
            {
                return Ok(this.iBlogBL.AddBlog(item));
            }
            catch (Exception exp)
            {
                return null;
            }
        }

        [HttpPost]
        [Route("Blog/EditBlog/")]
        public IHttpActionResult EditBlog(Blog item)
        {
            try
            {
                return Ok(this.iBlogBL.EditBlog(item));
            }
            catch (Exception exp)
            {
                return null;
            }
        }


        [HttpPost]
        [Route("Blog/RemoveBlog/")]
        public IHttpActionResult RemoveExpert(Blog item)
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

                return Ok(this.iBlogBL.RemoveBlog(item));
            }
            catch (Exception exp)
            {
                return null;
            }
        }

        [HttpPost]
        [Route("Blog/AddComment/")]
        public IHttpActionResult AddComment(Comment item)
        {
            try
            {
                return Ok(this.iBlogBL.AddComment(item));
            }
            catch (Exception exp)
            {
                return null;
            }
        }


    }
}

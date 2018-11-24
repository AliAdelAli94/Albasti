using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LawFirm.BL;
using LawFirm.Webapi.DTO;

namespace LawFirm.Webapi.Controllers
{
    public class UserController : ApiController
    {
       private IUserBl iUserBL;
        public UserController(IUserBl iUB)
        {
            this.iUserBL = iUB;
        }

        [HttpPost]
        [Route("User/RegisterUser/")]
        public IHttpActionResult RegisterUser([FromBody] RegisterDto registerDto)
        {
            try
            {
                return Ok(this.iUserBL.RegisterUser(registerDto.UserName,registerDto.Email,registerDto.Password));
            }
            catch (Exception exp)
            {
                return null;
            }
        }


        [HttpGet]
        [Route("User/CheckUserExist/")]
        public IHttpActionResult CheckUserExist(string email)
        {
            try
            {
                return Ok(this.iUserBL.CheckUserExist(email));
            }
            catch (Exception exp)
            {
                return null;
            }
        }


        [HttpPost]
        [Route("User/Login/")]
        public IHttpActionResult Login(LoginDto loginDto)
        {
            try
            {
                return Ok(this.iUserBL.Login(loginDto.Email, loginDto.Password));
            }
            catch (Exception exp)
            {
                return null;
            }
        }

        [HttpPost]
        [Route("User/MakeAdminOnline/")]
        public IHttpActionResult MakeAdminOnline(string email)
        {
            try
            {
                return Ok(this.iUserBL.MakeAdminOnline(email));
            }
            catch (Exception exp)
            {
                return null;
            }
        }

        [HttpGet]
        [Route("User/GetNumberOfOnlineUsers/")]
        public IHttpActionResult GetNumberOfOnlineUsers()
        {
            try
            {
                return Ok(this.iUserBL.GetNumberOfOnlineUsers());
            }
            catch (Exception exp)
            {
                return null;
            }
        }

        

    }
}
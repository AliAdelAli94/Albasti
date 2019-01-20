using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LawFirm.Webapi.DTO
{
    public class RegisterDto
    {
        public string UserName { get; set; }

        public string Email { get; set; }

        public String Password { get; set; }
    }
}
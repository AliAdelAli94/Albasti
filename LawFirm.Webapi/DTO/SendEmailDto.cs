using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LawFirm.Webapi.DTO
{
    public class SendEmailDto
    {
        public string UserName { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        public string Message { get; set; }

        public string ToEmail { get; set; }

        public string ExtraData { get; set; }

        public string Subject { get; set; }
    }
}
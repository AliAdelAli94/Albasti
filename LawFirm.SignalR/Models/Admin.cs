using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LawFirm.SignalR.Models
{
    public class Admin
    {

        public string ConnectionID { get; set; }
        public string email { get; set; }
        public int Status { get; set; }
        public int ServeNumber { get; set; }

    }
}
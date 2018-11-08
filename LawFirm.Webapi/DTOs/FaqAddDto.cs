using LawFirm.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LawFirm.Webapi
{
    public class FaqAddDto
    {
        public string Result { get; set; }
        public FAQ Record { get; set; }
    }
}
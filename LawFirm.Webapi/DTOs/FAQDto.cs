using LawFirm.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LawFirm.Webapi
{
    public class FAQDto
    {
        public string Result { get; set; }
        public int TotalRecordCount { get; set; }
        public List<FAQ> Records { get; set; }
    }
}
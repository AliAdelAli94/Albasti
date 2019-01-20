using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LawFirm.Webapi.DTO
{
    public class UploadImageDTO
    {
        public HttpPostedFile file { get; set; }
        public string FolderName { get; set; }
        public string OldProp { get; set; }
    }
}
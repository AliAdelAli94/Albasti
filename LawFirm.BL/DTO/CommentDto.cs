using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LawFirm.BL
{
    public class CommentDto
    {
        public int id { get; set; }

        public string commentBody { get; set; }

        public string commenterName { get; set; }

        public string commenterEmail { get; set; }

        public int blogId { get; set; }
    }
}

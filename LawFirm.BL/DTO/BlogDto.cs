using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LawFirm.BL
{
    public class BlogDto
    {
        public int id { get; set; }

        public string title { get; set; }

        public System.DateTime blogDate { get; set; }

        public string postedby { get; set; }

        public string category { get; set; }

        public string image { get; set; }

        public List<ParagraphDto> Paragraphs { get; set; }

        public List<CommentDto> Comments { get; set; }


    }
}

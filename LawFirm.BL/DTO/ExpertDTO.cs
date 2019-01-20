using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LawFirm.BL
{
    public class ExpertDTO
    {
        public int id { get; set; }

        public string name { get; set; }

        public string email { get; set; }

        public string title { get; set; }

        public string phone { get; set; }

        public string content1 { get; set; }

        public string quote { get; set; }

        public string content2 { get; set; }

        public string image { get; set; }

        public List<ExperienceDTO> Experiences { get; set; }
    }
}

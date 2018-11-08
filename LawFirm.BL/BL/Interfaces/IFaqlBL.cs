using LawFirm.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LawFirm.BL
{
    public interface IFaqlBL
    {
        List<FAQ> GetAllFaq();
        FAQ AddFaq(FAQ item);
        bool DeleteFaq(FAQ item);
        bool UpdateFaq(FAQ item);



    }
}

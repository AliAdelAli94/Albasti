using LawFirm.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LawFirm.BL
{
    public interface IExpertBl
    {
        List<ExpertDTO> GetAllExperts();
        bool AddExpert(Expert item);
        bool EditExpert(Expert item);
        bool RemoveExpert(Expert item);

    }
}

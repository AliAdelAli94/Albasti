using LawFirm.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LawFirm.BL
{
    public interface ICareerBl
    {
        List<Career> GetAllCareers();

        Career AddCareer(Career item);

        bool UpdateCareer(Career item);

        bool DeleteCareer(int id);
    }
}

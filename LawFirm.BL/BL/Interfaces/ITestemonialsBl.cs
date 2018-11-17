using LawFirm.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LawFirm.BL
{
    public interface ITestemonialsBl
    {
        List<Testimonial> GetAllTestimonial();

        Testimonial Add(Testimonial item);

        bool UpdateTestemonial(Testimonial item);

        bool DeleteTestimonial(int id);
    }
}

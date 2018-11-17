using LawFirm.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LawFirm.DAL.Models;

namespace LawFirm.BL
{
    public class TestemonialsBl : ITestemonialsBl
    {
        private IUnitOfWork iUnitOfWork;
        public TestemonialsBl(IUnitOfWork iUOF)
        {
            this.iUnitOfWork = iUOF;
        }

        public List<Testimonial> GetAllTestimonial()
        {
            try
            {
                return this.iUnitOfWork.TestimonialRepository.Get().ToList();
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public Testimonial Add(Testimonial item)
        {
            try
            {
                this.iUnitOfWork.TestimonialRepository.Insert(item);
                this.iUnitOfWork.Save();
                if (item.id == null || item.id == 0)
                {
                    return null;
                }
                return item;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public bool UpdateTestemonial(Testimonial item)
        {
            try
            {
                this.iUnitOfWork.TestimonialRepository.Update(item);
                this.iUnitOfWork.Save();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool DeleteTestimonial(int id)
        {
            try
            {
                this.iUnitOfWork.TestimonialRepository.Delete(id);
                this.iUnitOfWork.Save();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}

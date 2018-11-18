using LawFirm.DAL;
using LawFirm.DAL.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LawFirm.BL
{
    public class CareerBl : ICareerBl
    {
        private IUnitOfWork iUnitOfWork;
        public CareerBl(IUnitOfWork iUOF)
        {
            this.iUnitOfWork = iUOF;
        }

        public List<Career> GetAllCareers()
        {
            try
            {
                List<Career> data = this.iUnitOfWork.CareerRepository.Get().ToList();
                foreach (var item in data)
                {
                    string currentDate = DateTime.ParseExact(item.postDate, "dd/MM/yyyy HH:mm:ss", CultureInfo.InvariantCulture).ToString();
                    item.postDate = currentDate.Split(' ')[0];
                }
                return data;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public Career AddCareer(Career item)
        {
            try
            {
                this.iUnitOfWork.CareerRepository.Insert(item);
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

        public bool UpdateCareer(Career item)
        {
            try
            {
                this.iUnitOfWork.CareerRepository.Update(item);
                this.iUnitOfWork.Save();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool DeleteCareer(int id)
        {
            try
            {
                this.iUnitOfWork.CareerRepository.Delete(id);
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

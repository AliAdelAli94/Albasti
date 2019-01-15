using LawFirm.DAL;
using System.Collections.Generic;
using System.Linq;
using LawFirm.DAL.Models;
using System;
using LawFirm.CommonUtilitis.Logging;

namespace LawFirm.BL
{
    public class FaqBL : IFaqlBL
    {
        private IUnitOfWork iUnitOfWork;
        public FaqBL(IUnitOfWork iUOF)
        {
            this.iUnitOfWork = iUOF;
        }


        public List<FAQ> GetAllFaq()
        {
            try
            {
                return this.iUnitOfWork.FaqRepository.Get().ToList();
            }
            catch (Exception ex)
            {
                ErrorLogger.LogError(ex.Message, ex, false);
                return null;
            }
        }

        public FAQ AddFaq(FAQ item)
        {
            try
            {
                this.iUnitOfWork.FaqRepository.Insert(item);
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

        public bool UpdateFaq(FAQ item)
        {
            try
            {
                this.iUnitOfWork.FaqRepository.Update(item);
                this.iUnitOfWork.Save();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool DeleteFaq(int id)
        {
            try
            {
                this.iUnitOfWork.FaqRepository.Delete(id);
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

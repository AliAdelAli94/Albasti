using LawFirm.DAL;
using LawFirm.DAL.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LawFirm.BL
{
    public class ExpertBl : IExpertBl
    {
        private IUnitOfWork iUnitOfWork;
        public ExpertBl(IUnitOfWork iUOF)
        {
            this.iUnitOfWork = iUOF;
        }

        public List<ExpertDTO> GetAllExperts()
        {
            try
            {
                var x = this.iUnitOfWork.ExpertRepository.Get().ToList();
                List<ExpertDTO> data = new List<ExpertDTO>();
                data = x.Select(ex => new ExpertDTO()
                {
                    id = ex.id,
                    name = ex.name,
                    phone = ex.phone,
                    email = ex.email,
                    image = "http://devv.gearhostpreview.com/" + ex.image,
                    // image = "http://localhost:20833" + ex.image,
                    quote = ex.quote,
                    title = ex.title,
                    content1 = ex.content1,
                    content2 = ex.content2,
                    Experiences = ex.Experiences.Select(pe => new ExperienceDTO() { 
                        id = pe.id,
                        name = pe.name,
                        val = pe.val,
                        expertId = pe.expertId
                    }).ToList()

                }).ToList();

                return data;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public bool AddExpert(Expert item)
        {
            try
            {
                this.iUnitOfWork.ExpertRepository.Insert(item);
                this.iUnitOfWork.Save();
                return true;
            }
            catch(Exception ex)
            {
                return false;
            }
        }

        public bool EditExpert(Expert item)
        {
            try
            {
                List<Experience> oldExperiences = this.iUnitOfWork.ExperienceRepository.Get(e => e.expertId == item.id).ToList();

                foreach(var oldExperience in oldExperiences)
                {
                    this.iUnitOfWork.ExperienceRepository.DetachEntity(oldExperience);
                    if(item.Experiences.Where(o => o.id == oldExperience.id).FirstOrDefault() == null)
                    {
                        this.iUnitOfWork.ExperienceRepository.Delete(oldExperience);
                    }
                }

                List<Experience> tempList = new List<Experience>(item.Experiences.ToList());
                foreach (var currentExperience in tempList)
                {
                    var temp = oldExperiences.Where(o => o.id == currentExperience.id).FirstOrDefault();
                    if (temp == null)
                    {
                        currentExperience.expertId = item.id;
                        this.iUnitOfWork.ExperienceRepository.Insert(currentExperience);
                        item.Experiences.Remove(currentExperience);
                    }
                }

                this.iUnitOfWork.ExpertRepository.Update(item);
                this.iUnitOfWork.Save();
                return true;
            }
            catch(Exception ex)
            {
                return false;
            }
        }

        public bool RemoveExpert(Expert item)
        {
            try
            {

                this.iUnitOfWork.ExpertRepository.Delete(item);
                this.iUnitOfWork.Save();
                return true;
            }
            catch(Exception ex)
            {
                return false;
            }
        }
        
    }
}

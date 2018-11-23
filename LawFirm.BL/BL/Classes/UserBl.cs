using LawFirm.DAL;
using LawFirm.DAL.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace LawFirm.BL
{
    public class UserBl : IUserBl
    {
        private IUnitOfWork iUnitOfWork;
        private PasswordEncruption passwordEncruption;

        public UserBl(IUnitOfWork iUOF)
        {
            this.iUnitOfWork = iUOF;
            this.passwordEncruption = new PasswordEncruption();
        }

        public bool RegisterUser(string useName , string email , string password)
        {
            try
            {
                user item = new user();
                password = passwordEncruption.Encrypt(password);

                item.id = Guid.NewGuid();
                item.username = useName;
                item.email = email;
                item.password = password;

                this.iUnitOfWork.UserRepository.Insert(item);
                this.iUnitOfWork.Save();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool CheckUserExist(string email)
        {
            try
            {
                user item = this.iUnitOfWork.UserRepository.Get(u => u.email == email).FirstOrDefault();
                if(item == null)
                {
                    return false;
                }
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public string Login(string email , string password)
        {
            try
            {
                password = passwordEncruption.Encrypt(password);
                user item = this.iUnitOfWork.UserRepository.Get(u => u.email == email && u.password == password).FirstOrDefault();
                if(item == null)
                {
                    return null;
                }
                if(item.isactive == false)
                {
                    return "00";
                }
                return item.id.ToString();
            }
            catch(Exception ex)
            {
                return null;
            }
        }
    }
}

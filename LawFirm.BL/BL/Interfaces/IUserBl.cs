using LawFirm.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LawFirm.BL
{
    public interface IUserBl
    {
        bool RegisterUser(string useName, string email, string password);

        bool CheckUserExist(string email);

        string Login(string email, string password);

        bool MakeAdminOnline(string email);

        int GetNumberOfOnlineUsers();

    }
}

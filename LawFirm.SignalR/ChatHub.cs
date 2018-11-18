using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using System.Threading.Tasks;
using LawFirm.SignalR.Models;

namespace LawFirm.SignalR
{
    public class ChatHub : Hub
    {
        static List<string> AllUsers = new List<string>();
        static List<Admin> Admins = new List<Admin>
            {
                new Admin { email = "emam@yahoo.com", ServeNumber = 0, Status = 0 },
                new Admin { email = "ali@yahoo.com", ServeNumber = 0, Status = 0 },
                new Admin { email = "sayed@yahoo.com", ServeNumber = 0, Status = 0 },
            };
        public void startChat(string name, string email)
        {
            var onlineAdmins = Admins.Where(a => a.Status == 1);
            if (onlineAdmins.Count() == 0)
            {

            }
            else
            {
                var temp = onlineAdmins.OrderBy(a => a.ServeNumber).FirstOrDefault();
                temp.ServeNumber = temp.ServeNumber + 1;

                Clients.Client(temp.ConnectionID).userAssigned(name, Context.ConnectionId, email);
                Clients.Client(Context.ConnectionId).getAdminData(temp.ConnectionID);
            }

        }

        public void adminLogin(string email)
        {
            var x = email;
            var temp = Admins.Where(a => a.email == email).FirstOrDefault();
            temp.Status = 1;
            temp.ConnectionID = Context.ConnectionId;

        }


        public void sendMessage(string message, string toCID)
        {
            Clients.Client(toCID).recieveMessage(message, Context.ConnectionId);
        }


        public override Task OnConnected()
        {
            AllUsers.Add(Context.ConnectionId);
            return base.OnConnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            AllUsers.Remove(Context.ConnectionId);
            var temb = Admins.Where(x => x.ConnectionID == Context.ConnectionId).FirstOrDefault();
            temb.Status = 0;
            temb.ServeNumber = 0;
            temb.ConnectionID = null;
            return base.OnDisconnected(stopCalled);
        }

        public override Task OnReconnected()
        {
            return base.OnReconnected();
        }

    }
}
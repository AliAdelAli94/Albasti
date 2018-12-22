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

        private Client client;
        public ChatHub()
        {
            this.client = new Client();
        }
        public void startChat(string name, string email)
        {

            try
            {
                Clients.Group("Admins").userAssigned(name, Context.ConnectionId, email);
            }
            catch (Exception ex)
            {

            }
        }

        public void clientEndChat()
        {
            try
            {
                Clients.Group("Admins").removeThisUser(Context.ConnectionId);
            }
            catch (Exception ex)
            {

            }
        }

        public void takeThisUser(string cid)
        {
            try
            {
                Clients.OthersInGroup("Admins").userTaken(cid);
                Clients.Client(cid).getAdminData(Context.ConnectionId);
            }
            catch (Exception ex)
            {

            }

        }

        public void removeUser(string cid)
        {
            try
            {
                Clients.Client(cid).chatEnded(Context.ConnectionId);
            }
            catch (Exception ex)
            {

            }

        }

        public void adminLogin(string email)
        {
            try
            {
                string result = this.client.MakeAdminOnline(email).ToString();
                if (result == "true")
                {
                    Groups.Add(Context.ConnectionId, "Admins");
                }
            }
            catch (Exception ex)
            {

            }

        }


        public void sendMessage(string message, string toCID)
        {
            Clients.Client(toCID).recieveMessage(message, Context.ConnectionId);
        }


        public void sendMessageBroadCast(string message)
        {
            Clients.Group("Admins").recieveMessage(message, Context.ConnectionId);
        }



        public override Task OnConnected()
        {
            return base.OnConnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            return base.OnDisconnected(stopCalled);
        }

        public override Task OnReconnected()
        {
            return base.OnReconnected();
        }

    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net.Http;

namespace LawFirm.SignalR
{
    public class Client
    {
        private HttpClient client;

        public Client()
        {
            this.client = new HttpClient();
            // this.client.BaseAddress = new Uri("http://chatappp.somee.com/");
            this.client.BaseAddress = new Uri("http://localhost:20833/");
        }

        public object MakeAdminOnline(string email)
        {
            object result = null;
            HttpResponseMessage response = this.client.PostAsync("User/MakeAdminOnline?email=" + email,null).Result;
            if (response.IsSuccessStatusCode)
            {
                result = response.Content.ReadAsStringAsync().Result;
            }

            return result.ToString();
        }

    }
}
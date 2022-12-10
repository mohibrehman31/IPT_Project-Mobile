using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectBackend.Models
{
    public class GetParamAttendance
    {
        public string sections { get; set; }
        public string courses { get; set; }  
        public DateTime date { get; set; }

    }
}
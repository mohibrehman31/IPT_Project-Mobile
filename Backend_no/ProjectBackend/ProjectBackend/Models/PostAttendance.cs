using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectBackend.Models
{
    public class PostAttendance
    {
        public DateTime Date { get; set; }
        public int CrHr { get; set; }
        public string Att {get; set; }
        public int SrNo { get; set; }
        public string Studies_Student_Rollno { get; set; }  
        public string Studies_Course_Code { get; set; }

    }
}
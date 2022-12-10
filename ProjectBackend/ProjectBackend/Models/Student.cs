using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectBackend.Models
{
     public class Student
     {
          public string id { get; set; }
          public string name { get; set; }

          public string attendance { get; set; }

          public string date { get; set; }

          public string teacher_id { get; set; }

          public string course_id { get; set; }

          public int cr_hr { get; set; }
     }
}
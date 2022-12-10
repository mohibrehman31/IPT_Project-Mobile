using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ProjectBackend.Models;
using System.Web.UI.WebControls;
using System.Runtime.Remoting.Messaging;
using System.Xml.Linq;


namespace WebApplication1.Controllers
{
     [RoutePrefix("api")]
     public class AppController : ApiController
    {
          SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString);
          SqlCommand cmd = new SqlCommand();
          SqlDataAdapter da = new SqlDataAdapter();
          SqlDataReader dataReader;

          [HttpPost]
          [Route("GetUpdatedAttendances")]
          public ArrayList GetUpdatedAttendances()
          {

               StudentAttendanceViewModel obj = new StudentAttendanceViewModel();
               ArrayList content = new ArrayList();
               try
               {
                    string commandText = "select Student.Rollno,Student.Name,Student_Attendance.Attendance from Studies Inner Join Student on Student.Rollno=Studies.Student_Rollno inner join Student_Attendance on Student_Attendance.Roll_no=Student.Rollno  where Studies.Course_Code='CS3002' and Studies.section ='7G' and Student_Attendance.Date='02-08-2012'";
                    da = new SqlDataAdapter(commandText, conn);

                    DataTable dt = new DataTable();
                    da.Fill(dt);
                    if (dt.Rows.Count <= 0)
                    {
                         string commandText1 = "select Student.Rollno,Student.Name from Studies Inner Join Student on Student.Rollno=Studies.Student_Rollno  where Studies.Course_Code='CS3002' and Studies.section ='7G'";
                         SqlDataAdapter da1 = new SqlDataAdapter(commandText1, conn);

                         DataTable dt1 = new DataTable();
                         da1.Fill(dt1);

                         foreach (DataRow row in dt1.Rows)
                         {

                              string Rollno = row["Rollno"].ToString();
                              string Name = row["Name"].ToString();

                              obj.attendance = String.Empty;
                              obj.id = Rollno;
                              obj.name = Name;
                              content.Add(JObject.Parse(JsonConvert.SerializeObject(obj)));
                         }

                    }
                    else
                    {


                         foreach (DataRow row in dt.Rows)
                         {

                              string Rollno = row["Rollno"].ToString();
                              string Name = row["Name"].ToString();
                              string atten = row["Att"].ToString();

                              obj.attendance = atten;
                              obj.id = Rollno;
                              obj.name = Name;
                              content.Add(JObject.Parse(JsonConvert.SerializeObject(obj)));
                         }
                    }
               }

               catch (Exception e)
               {
                    Console.WriteLine(e);
               }

               return content;
          }


          [HttpPost]
          [Route("GetSections")]
          public ArrayList GetSections([FromBody] GetSectionsViewModel i)
          {
               ArrayList regis = new ArrayList();
               ArrayList rw;
               SectionViewModel obj = new SectionViewModel();
               try
               {

                    string commandText = "select section from Teaches where Teacher_Teacherid=" + "'" + i.teacher_id + "'" + "and Course_Code=" + "'" + i.courses + "'";
                    da = new SqlDataAdapter(commandText, conn);

                    DataTable dt = new DataTable();
                    da.Fill(dt);

                    foreach (DataRow row in dt.Rows)
                    {

                         rw = new ArrayList();
                         string sections = row["section"].ToString();

                         obj.sections = sections;
                         regis.Add(JObject.Parse(JsonConvert.SerializeObject(obj)));
                    }
               }

               catch (Exception e)
               {
                    Console.WriteLine(e);
               }



               return regis;
          }


          [HttpPost]
          [Route("GetTeaches")]
          public ArrayList GetTeaches([FromBody] GetTeachesViewModel teach)
          {
               ArrayList rw;
               ArrayList temp = new ArrayList();
               PostTeachesViewModel obj = new PostTeachesViewModel();


               try
               {

                    string commandText = "select Course_Code from Teaches where Teacher_Teacherid=@id;";
                    da = new SqlDataAdapter(commandText, conn);
                    da.SelectCommand.Parameters.Add("@id", teach.id);


                    DataTable dt = new DataTable();
                    da.Fill(dt);

                    foreach (DataRow row in dt.Rows)
                    {
                         rw = new ArrayList();
                         string course = row["Course_Code"].ToString();

                         obj.courses = course;
                         temp.Add(JObject.Parse(JsonConvert.SerializeObject(obj)));
                    }
               }
               catch (Exception e)
               {
                    Console.WriteLine(e);
               }
               return temp;
          }

     }
}

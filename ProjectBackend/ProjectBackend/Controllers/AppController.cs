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
          [Route("PostUpdatedAttendances")]

          public string PostUpdatedAttendances(Attendance atteendance)
          {
               string response = String.Empty;
               try
               {

                    //string commandText = "insert into StudentAttendance values(@date, @CrHr, @Att, @SrNo, @Studies_Student_Rollno, @Studies_Course_Code);";
                    //cmd = new SqlCommand(commandText, conn);
                    //_ = cmd.Parameters.Add("@date", atteendance.Date);
                    //_ = cmd.Parameters.Add("@CrHr", atteendance.CrHr);
                    //_ = cmd.Parameters.Add("@Att", atteendance.Att);
                    //_ = cmd.Parameters.Add("@SrNo", atteendance.SrNo);
                    //_ = cmd.Parameters.Add("@Studies_Student_Rollno", atteendance.Studies_Student_Rollno);
                    //_ = cmd.Parameters.Add("@Studies_Course_Code", atteendance.Studies_Course_Code);


                    //conn.Open();
                    //int r = cmd.ExecuteNonQuery();
                    //conn.Close();

                    //if (r > 0)
                    //{
                    //    response = "Success";
                    //}
                    //else
                    //{
                    //    response = "Faield";
                    //}
               }

               catch (Exception e)
               {
                    //response = "Failed";
               }

               return "ok";
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

using System;
using System.Web.Http;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using ProjectBackend.Models;
using System.Collections;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Web.Http.Cors;
using System.Web.WebPages;

namespace ProjectBackend.Controllers
{
    [RoutePrefix("api")]

    [EnableCors(origins: "https://192.168.100.18", headers: "*", methods: "*")]
    public class AppController : ApiController
    {
        SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString);
        SqlCommand cmd = new SqlCommand();
        SqlDataAdapter da = new SqlDataAdapter();
        SqlDataReader dataReader;

        [HttpPost]
        [Route("RegisterStudent")]
        
        public string RegisterStudent([FromBody] PostAttendance atteendance)
        {
            string response = String.Empty;
            try
            {

                string commandText = "insert into StudentAttendance values(@date, @CrHr, @Att, @Studies_Student_Rollno, @Studies_Course_Code);";


                conn.Open();
                int r = cmd.ExecuteNonQuery();
                conn.Close();

                if (r > 0)
                {
                    response = "Success";
                }
                else
                {
                    response = "Faield";
                }
            }

            catch (Exception e)
            {
                response = "Failed";
            }

            return response;
        }


        [HttpPost]
        [Route("GetTeaches")]
        public ArrayList GetTeaches([FromBody] TeachesViewModel i)
        {
            /*cParameters.Add("@code", code);*/
            ArrayList rw;
            ArrayList temp = new ArrayList();
            TeachesViewModel  obj = new TeachesViewModel();
            

            try
            {

                string commandText = "select Course_Code from Teaches where Teacher_Teacherid="+"'"+i.courses + "'";
                
                da = new SqlDataAdapter(commandText, conn);

                //Int32 rowsAffected = command.ExecuteNonQuery();
                //Console.WriteLine("RowsAffected: {0}", rowsAffected);

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
        
        
        [HttpPost]
        [Route("GetTeachesSections")]
        public ArrayList GetTeachesSections()
        {
            ArrayList rw = new ArrayList();
            ArrayList Course_Array = new ArrayList();
            ArrayList Section_Array = new ArrayList();
            TeachesViewModel obj = new TeachesViewModel();
            SectionViewModel obj2 = new SectionViewModel();
            CourseSectionModel obj3 = new CourseSectionModel();


            try
            {
                string commandText = "select Course_Code from Teaches where Teacher_Teacherid='CS1313'";
                da = new SqlDataAdapter(commandText, conn);
                DataTable dt = new DataTable();
                da.Fill(dt);

                foreach (DataRow row in dt.Rows)
                {
                    rw = new ArrayList();
                    string course = row["Course_Code"].ToString();

                    obj3.courses = course;
                    string commandText2 = "select section from Teaches where Teacher_Teacherid='CS1313' and Course_Code='CS3002'";
                    da = new SqlDataAdapter(commandText2, conn);

                    DataTable dt2 = new DataTable();
                    da.Fill(dt);

                    foreach (DataRow row2 in dt.Rows)
                    {
                        string sections = row2["section"].ToString();

                        if (!sections.IsEmpty())
                        {
                            Section_Array.Add(sections);
                        }
                        
                    }
                    obj3.sections = Section_Array;
                    rw.Add(JObject.Parse(JsonConvert.SerializeObject(obj3)));
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return rw;
        }

        [HttpPost]
        [Route("GetSections")]
        public ArrayList GetSections([FromBody] GetParamSections i)
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
        [Route("GetAttendances")]
        public ArrayList GetAttendances()
        {
            ArrayList rw;
            StudentAttendanceViewModel obj = new StudentAttendanceViewModel();
            ArrayList content = new ArrayList();
            try
            {
                string commandText = "select Student.Rollno,Student.Name from Studies Inner Join Student on Student.Rollno=Studies.Student_Rollno  where Studies.Course_Code='CS3002' and Studies.section ='7G' ";
                da = new SqlDataAdapter(commandText, conn);

                DataTable dt = new DataTable();
                da.Fill(dt);
                
                foreach (DataRow row in dt.Rows)
                {
                    rw = new ArrayList();
                    string Rollno = row["Rollno"].ToString();
                    string Name = row["Name"].ToString();
                    string att = row["att"].ToString();

                    obj.attendance = att;
                    obj.id = Rollno;
                    obj.name = Name;
                    content.Add(JObject.Parse(JsonConvert.SerializeObject(obj)));
                }
               
            }

            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return content; 
        }

        [HttpPost]
        [Route("GetUpdatedAttendances")]
        public ArrayList GetUpdatedAttendances([FromBody] GetParamAttendance i )
        {
            
            StudentAttendanceViewModel obj = new StudentAttendanceViewModel();
            ArrayList content = new ArrayList();
            try
            {
                string commandText = "select Student.Rollno,Student.Name,StudentAttendance.Att from Studies Inner Join Student on Student.Rollno=Studies.Student_Rollno inner join StudentAttendance on StudentAttendance.Studies_Student_Rollno=Student.Rollno  where Studies.Course_Code=" + "'" + i.courses + "'" + " and Studies.section =" + "'" + i.sections + "'" + " and StudentAttendance.Date=" + "'" + i.date + "'";
                da = new SqlDataAdapter(commandText, conn);

                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count <= 0)
                {
                    string commandText1 = "select Student.Rollno,Student.Name from Studies Inner Join Student on Student.Rollno=Studies.Student_Rollno  where Studies.Course_Code=" + "'" + i.courses + "'" + " and Studies.section =" + "'" + i.sections;
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
        [Route("GetTeaches1")]
        public String GetTeaches1([FromBody] GetParamSections i)
        {
            string commandText = "select section from Teaches where Teacher_Teacherid=" + "'" + i.teacher_id + "'" + "and Course_Code=" + "'" + i.courses + "'";

            return commandText;
        }

    }

}

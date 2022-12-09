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
        
        public string RegisterStudent(Attendance atteendance)
        {
            string response = String.Empty;
            try
            {

                string commandText = "insert into StudentAttendance values(@date, @CrHr, @Att, @SrNo, @Studies_Student_Rollno, @Studies_Course_Code);";
                cmd = new SqlCommand(commandText, conn);
                _ = cmd.Parameters.Add("@date", atteendance.Date);
                _ = cmd.Parameters.Add("@CrHr", atteendance.CrHr);
                _ = cmd.Parameters.Add("@Att", atteendance.Att);
                _ = cmd.Parameters.Add("@SrNo", atteendance.SrNo);
                _ = cmd.Parameters.Add("@Studies_Student_Rollno", atteendance.Studies_Student_Rollno);
                _ = cmd.Parameters.Add("@Studies_Course_Code", atteendance.Studies_Course_Code);


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

        [HttpGet]
        [Route("GetTeaches")]
        public ArrayList GetTeaches()
        {
            ArrayList rw;
            ArrayList temp = new ArrayList();
            TeachesViewModel  obj = new TeachesViewModel();


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


        [HttpGet]
        [Route("GetSections")]
        public ArrayList GetSections()
        {
            ArrayList regis = new ArrayList();
            ArrayList rw;
            SectionViewModel obj = new SectionViewModel();
            try
            {

                string commandText = "select section from Teaches where Teacher_Teacherid='CS1313' and Course_Code='CS3002'";
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
  
        [HttpGet]
        [Route("GetAttendances")]
        public ArrayList GetAttendances()
        {
            ArrayList regis = new ArrayList();
            ArrayList rw;
            StudentAttendanceViewModel obj = new StudentAttendanceViewModel();
            ArrayList content = new ArrayList();
            try
            {
                string commandText = "select Student.Rollno,Student.Name,StudentAttendance.Att from Studies Inner Join Student on Student.Rollno=Studies.Student_Rollno inner join StudentAttendance on StudentAttendance.Studies_Student_Rollno=Student.Rollno where Studies.Course_Code='CS3002' and Studies.section ='7G' and StudentAttendance.Date='2022-02-08'";
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

        //[HttpPost]
        //[Route("UpdateAttendance")]
        //public string UpdateAttendance(admins adminData)
        //{

        //    string resp = String.Empty;
        //    string commandText = String.Empty;
        //    int r = 0;

        //    try
        //    {
        //        commandText = "select firstName from teachers where email = @email;";
        //        da = new SqlDataAdapter(commandText, conn);
        //        da.SelectCommand.Parameters.Add("@email", adminData.email);

        //        DataTable dt = new DataTable();
        //        da.Fill(dt);

        //        commandText = "select firstName from admins where email = @email;";
        //        da = new SqlDataAdapter(commandText, conn);
        //        da.SelectCommand.Parameters.Add("@email", adminData.email);

        //        DataTable dt2 = new DataTable();
        //        da.Fill(dt2);

        //        if (dt.Rows.Count != 0 || dt2.Rows.Count != 0)
        //        {
        //            return "Taken";

        //        }
        //    }

        //    catch (Exception e)
        //    {
        //        return "Failed";
        //    }




        //    try
        //    {

        //        if (role == "admin")
        //        {
        //            commandText = "UPDATE admins SET email = @email, password = @password WHERE id = @id;";
        //            cmd = new SqlCommand(commandText, conn);
        //            cmd.Parameters.Add("@id", AData.id);

        //        }

        //        else if (role == "teacher")
        //        {
        //            commandText = "UPDATE teachers SET email = @email, password = @password WHERE id = @id;";
        //            cmd = new SqlCommand(commandText, conn);
        //            cmd.Parameters.Add("@id", TData.id);

        //        }
        //        else
        //        {
        //            return "Failed";
        //        }

        //        cmd.Parameters.Add("@email", adminData.email);
        //        cmd.Parameters.Add("@password", adminData.password);


        //        conn.Open();
        //        r = cmd.ExecuteNonQuery();
        //        conn.Close();

        //        if (r > 0)
        //        {

        //            if (role == "admin")
        //            {
        //                AData.email = adminData.email;
        //                AData.password = adminData.password;

        //            }

        //            else
        //            {
        //                TData.email = adminData.email;
        //                TData.password = adminData.password;

        //            }

        //            resp = "Success";
        //        }

        //        else
        //        {
        //            resp = "Failed";
        //        }

        //    }

        //    catch (Exception e)
        //    {
        //        resp = "Failed";

        //    }


        //    return resp;
    //}
}
}

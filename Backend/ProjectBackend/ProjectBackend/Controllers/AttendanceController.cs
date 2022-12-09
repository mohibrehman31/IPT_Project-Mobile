using ProjectBackend.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectBackend.Controllers
{
    [RoutePrefix("api")]
    public class AttendanceController : Controller
    {

        SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString);
        SqlCommand cmd = new SqlCommand();
        SqlDataAdapter da = new SqlDataAdapter();
        SqlDataReader dataReader;

        // GET: Attendance
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [Route("RegisterStudent")]
        public ActionResult RegisterStudent(Attendance atteendance)
        {
            string response = String.Empty;
            string subjects = String.Empty;


            try
            {
                //insert into StudentAttendance values(@date, @CrHr, @Att, @SrNo, @Studies_Student_Rollno, @Studies_Course_Code);
                
                string commandText = "insert into StudentAttendance values('02/08/2022',2,'P',1,'19K1364','CS3002');";
                cmd = new SqlCommand(commandText, conn);
                //cmd.Parameters.Add("@date", atteendance.Date);
                //cmd.Parameters.Add("@CrHr", atteendance.CrHr);
                //cmd.Parameters.Add("@Att", atteendance.Att);
                //cmd.Parameters.Add("@SrNo", atteendance.SrNo);
                //cmd.Parameters.Add("@Studies_Student_Rollno", atteendance.Studies_Student_Rollno);
                //cmd.Parameters.Add("@Studies_Course_Code", atteendance.Studies_Course_Code);
     

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

            return Json(response);
        }
    }
}
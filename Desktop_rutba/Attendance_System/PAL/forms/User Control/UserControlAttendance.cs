using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Attendance_System.PAL.forms.User_Control
{
    public partial class UserControlAttendance : UserControl
    {

        private string sql = @"Data Source=0.tcp.in.ngrok.io,12752;Initial Catalog=ssss;User id=sa;Password=yourStrong(!)Password;";
        public UserControlAttendance()
        {
            InitializeComponent();
        }

        private void UserControlAttendance_Load(object sender, EventArgs e)
        {

        }

        private void comboBoxCourse_Click(object sender, EventArgs e)
        {
            comboBoxCourse.Items.Clear();
            Attendance.Attendance.FillComboBox("select Course_Code from Teaches where Teacher_Teacherid='CS1313';", comboBoxCourse, sql);
        }
    }
}

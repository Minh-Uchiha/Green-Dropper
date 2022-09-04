using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserManagement.Data.DTOs.User.Password
{
    public class ChangeUserPasswordResponseDto
    {
        public bool Succeeded { get; set; } = true;
        public string Message { get; set; } = "Password updated successfully!";
    }
}

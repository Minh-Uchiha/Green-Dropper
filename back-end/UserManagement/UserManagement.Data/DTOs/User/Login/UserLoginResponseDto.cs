using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserManagement.Data.DTOs.User.Login
{
    public class UserLoginResponseDto
    {
        public string Id { get; set; }
        public bool Succeeded { get; set; } = true;
        public string Message { get; set; } = "Success";
    }
}

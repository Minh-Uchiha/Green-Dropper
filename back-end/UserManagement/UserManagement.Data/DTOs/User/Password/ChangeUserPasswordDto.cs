using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserManagement.Data.DTOs.User.Password
{
    public class ChangeUserPasswordDto
    {
        public string Password { get; set; }
        public string OldPassword { get; set; }
        public string Id { get; set; }
    }
}

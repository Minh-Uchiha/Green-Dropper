using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserManagement.Data.DTOs.User.Title
{
    public class ChangeUserTitleResponseDto
    {
        public bool Succeeded { get; set; } = true;
        public string Message { get; set; } = "Title Changed Successfully!";
        public string? NewTitle { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserManagement.Data.DTOs.User.GetInfo
{
    public class UserBasicInfoDto
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public int TreeCount { get; set; }
        public string Title { get; set; }
    }
}

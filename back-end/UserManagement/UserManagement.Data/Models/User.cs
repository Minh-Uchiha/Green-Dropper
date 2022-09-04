using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace UserManagement.Data.Models
{
    public class User
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        public DateTime CreatedBy { get; set; } = DateTime.UtcNow;
        public string Name { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string EntepriseId { get; set; } = "43ab446e";
        public int TreeCount { get; set; } = 0;
        public string Title { get; set; } = "Noob green dropper";
    }
}

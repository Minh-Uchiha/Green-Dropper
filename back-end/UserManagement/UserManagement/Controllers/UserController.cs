using AutoMapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UserManagement.Data.DTOs.User;
using UserManagement.Data.DTOs.User.GetInfo;
using UserManagement.Data.DTOs.User.Login;
using UserManagement.Data.DTOs.User.Password;
using UserManagement.Data.DTOs.User.SignUp;
using UserManagement.Data.DTOs.User.Title;
using UserManagement.Data.Models;
using UserManagement.Repository.IRepository;

namespace UserManagement.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _db;
        public UserController(IUserRepository db)
        {
            _db = db;
        }

        // Get basic info of a user
        [HttpPost("[action]")]
        public async Task<IActionResult> GetUserInfo([FromBody] UserInfoRequestDto userInfoRequestDto)
        {
            return Ok(await _db.GetInfo(userInfoRequestDto));
        }

        // Create a new user
        [HttpPost("[action]")]
        public async Task<IActionResult> SignUp([FromBody] UserSignUpDto userSignUpDto)
        {
            return Ok(await _db.SignUp(userSignUpDto));
        }

        // Log a user in the website
        [HttpPost("[action]")]
        public async Task<IActionResult> Login([FromBody] UserLoginDto userLoginDto)
        {
            return Ok(await _db.Login(userLoginDto));
        }

        // Update password
        [HttpPut("[action]")]
        public async Task<IActionResult> UpdatePassword([FromBody] ChangeUserPasswordDto changeUserPasswordDto)
        {
            return Ok(await _db.ChangePassword(changeUserPasswordDto));
        }

        // Update title
        [HttpPut("[action]")]
        public async Task<IActionResult> UpdateTitle([FromBody] ChangeUserTitleDto changeUserTitleDto)
        {
            return Ok(await _db.ChangeTitle(changeUserTitleDto));
        }
    }
}

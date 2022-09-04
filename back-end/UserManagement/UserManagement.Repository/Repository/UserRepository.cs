using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using UserManagement.Data.DTOs.User.GetInfo;
using UserManagement.Data.DTOs.User.Login;
using UserManagement.Data.DTOs.User.Password;
using UserManagement.Data.DTOs.User.SignUp;
using UserManagement.Data.DTOs.User.Title;
using UserManagement.Data.Models;
using UserManagement.Database;
using UserManagement.Repository.IRepository;

namespace UserManagement.Repository.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly UserDbContext _db;
        private readonly IMapper _mapper;
        public UserRepository(UserDbContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }

        // Login 
        public async Task<UserLoginResponseDto> Login(UserLoginDto userLoginDto)
        {
            var user = _db.Users.SingleOrDefault<User>(u => u.Email == userLoginDto.Email);
            if (user == null || user.Password != userLoginDto.Password) return new UserLoginResponseDto { Succeeded = false, Message = "Wrong Email or Password" };
            return new UserLoginResponseDto { Id = user.Id.ToString() };
        }

        // Sign up
        public async Task<UserSignUpResponseDto> SignUp(UserSignUpDto userSignUpDto)
        {
            var user = _db.Users.SingleOrDefault<User>(u => u.Email == userSignUpDto.Email);
            if (user != null) return new UserSignUpResponseDto { Succeeded = false, Message = "User with this email has existed" };
            var hasNumber = new Regex(@"[0-9]+");
            var hasUpperChar = new Regex(@"[A-Z]+");
            var hasMinimum8Chars = new Regex(@".{8,}");
            var isValidated = hasNumber.IsMatch(userSignUpDto.Password) && hasUpperChar.IsMatch(userSignUpDto.Password) && hasMinimum8Chars.IsMatch(userSignUpDto.Password);
            if (!isValidated) return new UserSignUpResponseDto { Succeeded = false, Message = "Invalid Password" };
            user = _mapper.Map<User>(userSignUpDto);
            await _db.Users.AddAsync(user);
            await _db.SaveChangesAsync();
            return new UserSignUpResponseDto { Id = user.Id.ToString() };

        }

        // Get basic info
        public async Task<UserBasicInfoDto> GetInfo(UserInfoRequestDto userInfoRequestDto)
        {
            Guid Id = new Guid(userInfoRequestDto.UserId);
            var user = _db.Users.SingleOrDefault<User>(u => u.Id == Id);
            return _mapper.Map<UserBasicInfoDto>(user);
        }

        // Update password
        public async Task<ChangeUserPasswordResponseDto> ChangePassword(ChangeUserPasswordDto changeUserPasswordDto)
        {
            Guid Id = new Guid(changeUserPasswordDto.Id);
            var user = _db.Users.SingleOrDefault<User>(u => u.Id == Id);
            if (user == null) return new ChangeUserPasswordResponseDto { Succeeded = false, Message = "System failed" };
            if (user.Password != changeUserPasswordDto.OldPassword) return new ChangeUserPasswordResponseDto { Succeeded = false, Message = "Wrong old password" };
            user.Password = changeUserPasswordDto.Password;
            _db.Users.Update(user);
            await _db.SaveChangesAsync();
            return new ChangeUserPasswordResponseDto();
        }

        // Update title 
        public async Task<ChangeUserTitleResponseDto> ChangeTitle(ChangeUserTitleDto changeUserTitleDto)
        {
            Guid Id = new Guid(changeUserTitleDto.UserId);
            var user = _db.Users.SingleOrDefault<User>(u => u.Id == Id);
            if (user == null) return new ChangeUserTitleResponseDto { Succeeded = false, Message = "System failed" };
            user.Title = changeUserTitleDto.Title;
            _db.Users.Update(user);
            await _db.SaveChangesAsync();
            return new ChangeUserTitleResponseDto { NewTitle = user.Title };

        }
    }
}

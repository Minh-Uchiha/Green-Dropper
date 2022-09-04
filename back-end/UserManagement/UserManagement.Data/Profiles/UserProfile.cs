using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserManagement.Data.DTOs.User.GetInfo;
using UserManagement.Data.DTOs.User.Login;
using UserManagement.Data.DTOs.User.SignUp;
using UserManagement.Data.Models;

namespace UserManagement.Data.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, UserLoginResponseDto>();
            CreateMap<User, UserSignUpDto >();
            CreateMap<User, UserBasicInfoDto>();

            CreateMap<UserBasicInfoDto, User>();
            CreateMap<UserSignUpDto, User>();
            CreateMap<UserLoginResponseDto, User>();
        }
    }
}

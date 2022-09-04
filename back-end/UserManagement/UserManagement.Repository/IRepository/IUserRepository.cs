using UserManagement.Data.DTOs.User.GetInfo;
using UserManagement.Data.DTOs.User.Login;
using UserManagement.Data.DTOs.User.Password;
using UserManagement.Data.DTOs.User.SignUp;
using UserManagement.Data.DTOs.User.Title;
using UserManagement.Data.Models;

namespace UserManagement.Repository.IRepository
{
    public interface IUserRepository : IRepository<User>
    {
        Task<ChangeUserPasswordResponseDto> ChangePassword(ChangeUserPasswordDto changeUserPasswordDto);
        Task<ChangeUserTitleResponseDto> ChangeTitle(ChangeUserTitleDto changeUserTitleDto);
        Task<UserBasicInfoDto> GetInfo(UserInfoRequestDto userInfoRequestDto);
        Task<UserLoginResponseDto> Login(UserLoginDto userLoginDto);
        Task<UserSignUpResponseDto> SignUp(UserSignUpDto userSignUpDto);
    }
}
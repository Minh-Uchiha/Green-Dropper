using AutoMapper;
using Microsoft.EntityFrameworkCore;
using UserManagement.Data.Models;
using UserManagement.Data.Profiles;
using UserManagement.Database;
using UserManagement.Repository.IRepository;
using UserManagement.Repository.Repository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAutoMapper(typeof(Program));
var mapperConfig = new MapperConfiguration(mc =>
{
    mc.AddProfile(new UserProfile());
});
builder.Services.AddSingleton(mapperConfig.CreateMapper());

builder.Services.AddControllersWithViews();
builder.Services.AddScoped<IUserRepository, UserRepository>();

builder.Services.AddDbContext<UserDbContext>(options => options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")
    ));

builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(builder =>
{
    builder.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader();
});

app.UseAuthorization();

app.MapControllers();

app.Run();

using Microsoft.EntityFrameworkCore;
using usersApi.Models;

namespace usersApi.Context;
public class UsersContext : DbContext
{
    public UsersContext(DbContextOptions<UsersContext> options) : base(options) { }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql("Server=localhost;Port=5433;Database=UsersDB;User Id=postgres;Password=1234;");
    }

    public DbSet<User> Users { get; set; }
}
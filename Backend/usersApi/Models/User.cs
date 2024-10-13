namespace usersApi.Models;

public class User
{
    public Guid Id { get; set; }
    public string? Name { get; set; }
    public string? Surname { get; set; }
    public string? Role { get; set; }
    public string? DateOfBirth { get; set; }

    public User(string? name, string surname, string role, string dateOfBirth)
    {
        Name = name;
        Surname = surname;
        Role = role;
        DateOfBirth = dateOfBirth;
    }
}
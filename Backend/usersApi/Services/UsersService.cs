using Microsoft.EntityFrameworkCore;
using usersApi.Context;
using usersApi.DTOs.UserDTO;
using usersApi.Models;
using usersApi.Services.IUsersService;

public class UsersService : IUsersService
{
    public UsersContext _context;

    public UsersService(UsersContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<User>> GetProductsServiceAsync()
    {
        var entities = await _context.Users.ToListAsync();

        return entities;
    }

    public async Task<User> GetProductByIdServiceAsync(Guid id)
    {
        var entity = await _context.Users.FindAsync(id);

        return entity!;
    }

    public async Task<User> PostProductServiceAsync(UserDTO product)
    {
        var entity = new User(
            product.Name,
            product.Surname,
            product.Role,
            product.DateOfBirth
        );

        await _context.Users.AddAsync(entity);
        await _context.SaveChangesAsync();

        return entity;
    }

    public async Task<User> PutProductServiceAsync(Guid id, UserDTO product)
    {
        var entity = await _context.Users.FindAsync(id);

        entity!.Name = product.Name;
        entity.Surname = product.Surname;
        entity.Role = product.Role;
        entity.DateOfBirth = product.DateOfBirth;

        await _context.SaveChangesAsync();

        return entity!;
    }

    public async Task<User> DeleteProductServiceAsync(Guid id)
    {
        var entity = await _context.Users.FindAsync(id);

        _context.Users.Remove(entity!);
        await _context.SaveChangesAsync();

        return entity!;
    }
}

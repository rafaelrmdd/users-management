using usersApi.DTOs.UserDTO;
using usersApi.Models;


namespace usersApi.Services.IUsersService;

public interface IUsersService
{
    public Task<IEnumerable<User>> GetProductsServiceAsync();
    public Task<User> GetProductByIdServiceAsync(Guid id);
    public Task<User> PostProductServiceAsync(UserDTO product);
    public Task<User> PutProductServiceAsync(Guid id, UserDTO product);
    public Task<User> DeleteProductServiceAsync(Guid id);
}
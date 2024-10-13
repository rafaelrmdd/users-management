using Microsoft.AspNetCore.Mvc;
using usersApi.DTOs.UserDTO;
using usersApi.Models;
using usersApi.Services.IUsersService;

namespace Products.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class ProductsManagerController : ControllerBase
    {
        private IUsersService _service;

        public ProductsManagerController(IUsersService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IEnumerable<User>> GetProductsAsync()
        {
            var entities = await _service.GetProductsServiceAsync();

            return entities;
        }

        [HttpGet("{id}", Name = "GetProductById")]
        public async Task<ActionResult<User>> GetProductByIdAsync(Guid id)
        {
            var entity = await _service.GetProductByIdServiceAsync(id);

            if (entity == null)
            {
                return NotFound();
            }

            return entity;
        }

        [HttpPost]
        public async Task<ActionResult<User>> PostProductAsync(UserDTO product)
        {
            var entity = await _service.PostProductServiceAsync(product);

            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            return CreatedAtRoute("GetProductById", new { id = entity.Id }, entity);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<User>> PutProductAsync(Guid id, UserDTO product)
        {
            var entity = await _service.PutProductServiceAsync(id, product);

            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> DeleteProductAsync(Guid id)
        {
            var entity = await _service.DeleteProductServiceAsync(id);

            if (entity == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
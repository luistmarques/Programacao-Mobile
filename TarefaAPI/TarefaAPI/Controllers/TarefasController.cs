using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TarefaAPI.Data;
using TarefaAPI.Data.Contexto;
using TarefaAPI.DTO;
using TarefaAPI.Models;
using TarefaAPI.Service;

namespace TarefaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TarefasController : ControllerBase
    {
        private readonly ITarefaService _service;

        public TarefasController(ITarefaService service) => _service = service;

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var tarefas = await _service.Listar();

            return Ok(tarefas);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var response = await _service.BuscarPorId(id);

            if (response is null)
                return NotFound();

            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] TarefaCreateDTO dto)
        {
            var response = await _service.Cadastrar(dto);

            return CreatedAtAction(
                    nameof(GetById),
                    new { id = response.Id },
                    response
                );

        }
    }
}
using Microsoft.EntityFrameworkCore;
using TarefaAPI.Data.Contexto;
using TarefaAPI.DTO;
using TarefaAPI.Models;

namespace TarefaAPI.Service
{
    public class TarefaService : ITarefaService
    {

        private readonly AppDbContext _context;

        public TarefaService(AppDbContext context) => _context = context;

        public async Task<List<TarefaResponseDTO>> Listar()
        {
            return await _context.Tarefas
                .AsNoTracking()
                .Select(t => new TarefaResponseDTO
                {
                    Id = t.Id,
                    Titulo = t.Titulo,
                    Descricao = t.Descricao,
                    Status = t.Status.ToString()
                })
                .ToListAsync();
        }

        public async Task<TarefaResponseDTO?> BuscarPorId(int id)
        {
            return await _context.Tarefas
                .Where(t => t.Id == id)
                .AsNoTracking()
                .Select(t => new TarefaResponseDTO
                {
                    Id = t.Id,
                    Titulo = t.Titulo,
                    Descricao = t.Descricao,
                    Status = t.Status.ToString()
                })
                .FirstOrDefaultAsync();
        }

        public async Task<TarefaResponseDTO> Cadastrar(TarefaCreateDTO dto)
        {
            var tarefa = new Tarefa
            {
                Titulo = dto.Titulo,
                Descricao = dto.Descricao,
                Status = StatusTarefa.Pendente
            };

            _context.Tarefas.Add(tarefa);

            await _context.SaveChangesAsync();

            return new TarefaResponseDTO
            {
                Id = tarefa.Id,
                Titulo = tarefa.Titulo,
                Descricao = tarefa.Descricao,
                Status = tarefa.Status.ToString()
            };
        }

    }
}

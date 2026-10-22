using Microsoft.EntityFrameworkCore;
using TarefaAPI.Models;

namespace TarefaAPI.Data.Contexto
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }    
        
        public DbSet<Tarefa> Tarefas { get; set; }

    }
}

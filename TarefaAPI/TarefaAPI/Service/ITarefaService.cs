using TarefaAPI.DTO;

namespace TarefaAPI.Service
{
    public interface ITarefaService
    {

        Task<List<TarefaResponseDTO>> Listar();
        Task<TarefaResponseDTO?> BuscarPorId(int id);
        Task<TarefaResponseDTO> Cadastrar(TarefaCreateDTO dto);
    }
}

using Microsoft.EntityFrameworkCore;
using TarefaAPI.Data.Contexto;
using TarefaAPI.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// CONTEXTO DO BANCO DE DADOS
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


// INJ DE DEP
builder.Services.AddScoped<ITarefaService, TarefaService>();

//POLÍTICA DE CORS PARA LIBERAR O ACESSO A API PARA QUALQUER ORIGEM, MÉTODO E CABEÇALHO
builder.Services.AddCors(options =>
{
    options.AddPolicy("LiberarTudo", policy =>
    {
        policy
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

var app = builder.Build();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//Habilitar a política de CORS
app.UseCors("LiberarTudo");


app.UseAuthorization();

app.MapControllers();

app.Run();

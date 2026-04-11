// data/agenda.ts

export const agendaDaSemana = [
  {
    dia: "Sexta-feira",
    hora: "20:00h",
    artista: "João & Maria",
    estilo: "Sertanejo Universitário & Modão",
    destaque: false, // Deixe true se for a atração principal
    fotoUrl: "/artistas/joao-maria.jpg" // Você vai colocar a foto na pasta public/artistas/
  },
  {
    dia: "Sábado",
    hora: "21:00h",
    artista: "Banda Texas Night",
    estilo: "Country Rock & Clássicos",
    destaque: true, 
    fotoUrl: "/artistas/texas-night.jpg"
  },
  {
    dia: "Domingo",
    hora: "16:00h",
    artista: "Roda de Viola",
    estilo: "Churrasco Fogo de Chão e Acústico",
    destaque: false,
    fotoUrl: "/artistas/roda-viola.jpg"
  }
];
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Pasta onde estão as originais pesadas
const pastaEntrada = './fotos_brutas'; 
// Pasta onde elas vão cair levinhas e prontas pro site
const pastaSaida = './public/cardapio/porcaoesalada'; 

if (!fs.existsSync(pastaSaida)){
    fs.mkdirSync(pastaSaida, { recursive: true });
}

fs.readdirSync(pastaEntrada).forEach(arquivo => {
  if (arquivo.match(/\.(jpg|jpeg|png)$/i)) {
    const nomeSemExtensao = path.parse(arquivo).name;
    
    sharp(`${pastaEntrada}/${arquivo}`)
      .resize({ width: 800 }) // Reduz a largura pra 800px
      .webp({ quality: 80 })  // Converte pra WebP com 80% de qualidade
      .toFile(`${pastaSaida}/${nomeSemExtensao}.webp`)
      .then(() => console.log(`✅ Sucesso: ${nomeSemExtensao}.webp`))
      .catch(err => console.error(`❌ Erro em ${arquivo}:`, err));
  }
});
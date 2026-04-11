import { FaBeer, FaCocktail, FaCoffee, FaIceCream, FaLeaf, FaUtensils, FaWineGlass } from "react-icons/fa";

export const menuCategories = [
  {
    id: "cervejas",
    title: "Cervejas & Chopp Gelado",
    icon: FaBeer,
    items: [
      { name: "Amstel 600ml", price: "R$ 14,99", desc: "", photo: "/cardapio/cervejasechop/amstel-600ml.webp" },
      { name: "Amstel Long Neck", price: "R$ 8,99", desc: "", photo: "/cardapio/cervejasechop/amstel-long-neck.webp" },
      { name: "Amstel Ultra Long Neck", price: "R$ 11,99", desc: "", photo: "/cardapio/cervejasechop/amstel-ultra-long-neck.webp" },
      { name: "Antarctica Boa 600ml", price: "R$ 14,99", desc: "", photo: "/cardapio/cervejasechop/antarctica-boa-600ml.webp" },
      
      // CERVEJAS SUSPENSAS (Aguardando confirmação do bar)
      // { name: "Baden Baden Pilsen 600ml", price: "R$ 21,90", desc: "", photo: "/cardapio/cervejasechop/baden-baden-pilsen-600ml.webp" },
      // { name: "Baden Baden IPA 600ml", price: "R$ 25,00", desc: "", photo: "" },
      // { name: "Estrella Galicia Lager 600ml", price: "R$ 14,99", desc: "", photo: "/cardapio/cervejasechop/estrella-galicia-lager-600ml.webp" },
      // { name: "Estrella Galicia Long Neck", price: "R$ 9,99", desc: "", photo: "/cardapio/cervejasechop/estrella-galicia-long-neck.webp" },
      // { name: "Estrella Galicia Zero Long Neck", price: "R$ 9,99", desc: "", photo: "/cardapio/cervejasechop/estrella-galicia-zero-long-neck.webp" },
      // { name: "Estrella Galicia Lager Lata 350ml", price: "R$ 9,99", desc: "", photo: "/cardapio/cervejasechop/estrella-galicia-lager-lata-350ml.webp" },
      // { name: "Estrella Galicia Zero Lata 330ml", price: "R$ 9,99", desc: "", photo: "/cardapio/cervejasechop/estrella-galicia-zero-lata-330ml.webp" },

      { name: "Chopp Kaiser 355ml", price: "R$ 12,99", desc: "", photo: "/cardapio/cervejasechop/chop-kaiser-355ml.webp" },
      { name: "Corona 600ml", price: "R$ 19,90", desc: "", photo: "/cardapio/cervejasechop/corona-600ml.webp" },
      { name: "Corona Extra Long Neck", price: "R$ 11,99", desc: "", photo: "/cardapio/cervejasechop/corona-extra-long-neck.webp" },
      { name: "Eisenbahn 600ml", price: "R$ 14,99", desc: "", photo: "/cardapio/cervejasechop/eisenbahn-600ml.webp" },
      { name: "Eisenbahn Pilsen Long Neck", price: "R$ 9,99", desc: "", photo: "/cardapio/cervejasechop/eisenbahn-pilsen-long-neck.webp" },
      { name: "Eisenbahn IPA Long Neck", price: "R$ 9,99", desc: "", photo: "/cardapio/cervejasechop/eisenbahn-ipa-long-neck.webp" },
      { name: "Heineken 600ml", price: "R$ 18,99", desc: "", photo: "/cardapio/cervejasechop/heineken-600ml.webp" },
      { name: "Heineken Long Neck", price: "R$ 11,99", desc: "", photo: "/cardapio/cervejasechop/heineken-long-neck.webp" },
      { name: "Heineken Long Neck Zero", price: "R$ 11,99", desc: "", photo: "/cardapio/cervejasechop/heineken-long-neck-zero.webp" },
      { name: "Original 600ml", price: "R$ 17,99", desc: "", photo: "/cardapio/cervejasechop/original-600ml.webp" },
      { name: "Praya Long Neck", price: "R$ 11,99", desc: "", photo: "/cardapio/cervejasechop/praya-long-neck.webp" },
      { name: "Sol Long Neck", price: "R$ 11,99", desc: "", photo: "/cardapio/cervejasechop/sol-long-neck.webp" },
      { name: "Stella Artois Pure Gold Long Neck", price: "R$ 11,99", desc: "", photo: "/cardapio/cervejasechop/stella-artois-pure-gold-long-neck.webp" },
    ]
  },
  {
    id: "porcoes-saladas",
    title: "Porções & Saladas",
    icon: FaUtensils,
    items: [
      { name: "Batata Costela e Cheddar", price: "R$ 46,90", desc: "Batata palito e deliciosa costela desfiada coberta com molho cheddar", photo: "/cardapio/porcaoesalada/batata-costela-e-cheddar.webp" },
      { name: "Caesar Salad", price: "R$ 32,00", desc: "Alface romana com cubos de frango, croutons, lascas de parmesão e molho caesar", photo: "/cardapio/porcaoesalada/caesar-salad.webp" },
      { name: "Fígado Acebolado com Jiló", price: "R$ 44,90", desc: "Acompanha farofa de ovo", photo: "/cardapio/porcaoesalada/figado-acebolado-com-jilo.webp" },
      { name: "Filé de Tilapia Grelhado", price: "R$ 72,00", desc: "Filé de tilápia grelhado com purê e legumes", photo: "/cardapio/porcaoesalada/filedetilapia.webp" },
      { name: "Frios do Arizona", price: "R$ 69,90", desc: "Tábua de frios (azeitona, palmito, salaminho, queijo artesanal e golda, pepperoni, geleia especial, amendoim, torradinhas e frutas da estação)", photo: "/cardapio/porcaoesalada/frios-do-arizona.webp" },
      { name: "Grudite", price: "R$ 22,00", desc: "Cenoura e pepino no palito com tempero exclusivo da casa", photo: "/cardapio/porcaoesalada/grudite.webp" },
      { name: "John Wesley Pistoleiro", price: "R$ 44,90", desc: "Calabresa acebolada acompanhada de batatas rusticas e molho do chef", photo: "/cardapio/porcaoesalada/john-wesley-pistoleiro.webp" },
      { name: "Mexidão do Chef", price: "R$ 32,00", desc: "Deliciosa mistura de arroz, feijão, ovo mole, couve, carne assada e banana frita", photo: "/cardapio/porcaoesalada/mexidao-do-chef.webp" },
      { name: "Montaria Frie", price: "R$ 52,00", desc: "Batata palito bacon e cheddar", photo: "/cardapio/porcaoesalada/montaria-frie.webp" },
      { name: "Parmegiana de Frango", price: "R$ 45,90", desc: "Parmegiana de frango com muito queijo", photo: "/cardapio/porcaoesalada/parmegianafrango.webp" },
      { name: "Queijo Artesanal Temperadinho", price: "R$ 24,90", desc: "Cubos de queijo com tempero da roça", photo: "/cardapio/porcaoesalada/queijo-artesanal-temperadinho.webp" },
      { name: "Salada de Jiló", price: "R$ 22,90", desc: "Rodelas de jiló com tempero especial da casa", photo: "/cardapio/porcaoesalada/salada-de-jilo.webp" },
      { name: "White Ceviche", price: "R$ 48,00", desc: "Cubos de tilápia, cebola roxa, pimenta dedo de moça, limão e coentro", photo: "/cardapio/porcaoesalada/white-ceviche.webp" },
      
    ]
  },
  {
    id: "extras",
    title: "Guarnições & Extras",
    icon: FaUtensils,
    items: [
      { name: "Arroz Branco", price: "R$ 12,90", desc: "", photo: "/cardapio/extras/arrozbranco.webp" },
      { name: "Arroz com Alho", price: "R$ 15,90", desc: "", photo: "/cardapio/extras/arrozcomalho.webp" },
      { name: "Feijão Tropeiro", price: "R$ 16,50", desc: "", photo: "/cardapio/extras/feijaotropeiro.webp" },
      { name: "Mandioca", price: "R$ 12,90", desc: "", photo: "/cardapio/extras/mandioca.webp" },
      { name: "Vinagrete", price: "R$ 10,00", desc: "", photo: "/cardapio/extras/vinagrete.webp" },
    ]
  },
  {
    id: "bebidas-nao-alcoolicas",
    title: "Águas, Refris & Energéticos",
    icon: FaCoffee,
    items: [
      { name: "Água com Gás", price: "R$ 5,50", desc: "", photo: "/cardapio/bebidasemais/aguacomgas.webp" },
      { name: "Água sem Gás", price: "R$ 5,00", desc: "", photo: "/cardapio/bebidasemais/aguasemgas.webp" },
      { name: "Água de Coco", price: "R$ 7,00", desc: "", photo: "/cardapio/bebidasemais/aguadecoco.webp" },
      { name: "Coca Cola 310ml", price: "R$ 7,00", desc: "Sabores: original e zero", photo: "/cardapio/bebidasemais/cocacola310ml.webp" },
      { name: "Fanta 310ml", price: "R$ 7,00", desc: "Sabores: guaraná, guaraná zero, laranja e uva", photo: "/cardapio/bebidasemais/fanta310ml.webp" },
      { name: "FYS 350ml e FYS Água Tônica 350 ml", price: "R$ 5,00", desc: "Sabores: guaraná da amazônia e limão siciliano", photo: "/cardapio/bebidasemais/fys350ml.webp" },
      { name: "Sprite 310ml", price: "R$ 6,00", desc: "Sabores: limão tradicional e zero", photo: "/cardapio/bebidasemais/sprite310ml.webp" },
      { name: "Sprite Lemon 510ml", price: "R$ 7,00", desc: "", photo: "/cardapio/bebidasemais/spritelemon510ml.webp" },
      { name: "Schweppes Água Tônica 310ml", price: "R$ 7,00", desc: "", photo: "/cardapio/bebidasemais/schweppesaguatonica310ml.webp" },
      { name: "Del Valle", price: "R$ 7,00", desc: "Sabores: goiaba, manga, maracujá, pêssego e uva", photo: "/cardapio/bebidasemais/delvalle.webp" },
      { name: "Schweppes Citrus 310ml", price: "R$ 6,00", desc: "", photo: "/cardapio/bebidasemais/schweppescitrus310ml.webp" },
      { name: "Monster Energy", price: "R$ 15,00", desc: "Consulte os sabores com o garçom", photo: "/cardapio/bebidasemais/monsterenergy.webp" },
      { name: "Red Bull", price: "R$ 16,00", desc: "Consulte os sabores com o garçom", photo: "/cardapio/bebidasemais/redbull.webp" },
    ]
  },
  {
    id: "bebidas-naturais",
    title: "Bebidas Naturais & Sucos",
    icon: FaLeaf,
    items: [
      { name: "2 Sabores", price: "R$ 15,90", desc: "Consulte os sabores disponíveis com o garçom", photo: "/cardapio/bebidanatural/doissabores.webp" },
      { name: "Ao Leite", price: "R$ 17,90", desc: "Sabor da foto: Morango. Consulte a disponibilidade de outros sabores com seu garçom.", photo: "/cardapio/bebidanatural/aoleite.webp" },
      { name: "Da Fruta", price: "R$ 12,90", desc: "Sabores: abacaxi, abacaxi com hortelã, acerola, laranja, limão, limonada suíça, maracujá, morango e tamarindo", photo: "/cardapio/bebidanatural/dafruta.webp" },
      { name: "Frutas Vermelhas", price: "R$ 20,90", desc: "", photo: "/cardapio/bebidanatural/frutasvermelhas.webp" },
    ]
  },
  {
    id: "caipirinhas",
    title: "Caipirinhas & Caipivodkas",
    icon: FaCocktail,
    items: [
      // Agrupamento Ultra Clean
      { 
        name: "Caipirinhas (Tradicional, Sagatiba ou Velho Oeste)", 
        price: "A partir de R$ 25,90", 
        desc: "Sabores disponíveis: Limão e Tamarindo (consulte outras frutas). Bases: Tradicional (R$ 25,90), Velho Oeste (R$ 26,90) ou Sagatiba (R$ 27,90).", 
        photo: "/cardapio/caipvodkacaipirinha/caipirinhalimao.webp" 
      },
      { 
        name: "Caipivodkas (Nacional, Importada ou Velho Oeste)", 
        price: "A partir de R$ 25,90", 
        desc: "Sabores disponíveis: Limão e Tamarindo (consulte outras frutas). Bases: Nacional (R$ 25,90), Importada (R$ 26,90), Velho Oeste (R$ 26,90) ou Velho Oeste Importada (R$ 27,90).", 
        photo: "/cardapio/caipvodkacaipirinha/caipivodkamaracujaimportado.webp" 
      },
      { 
        name: "Caipirinha 2 Sabores", 
        price: "R$ 27,90", 
        desc: "Faça a combinação do seu gosto! (Consulte as frutas da estação).", 
        photo: "/cardapio/caipvodkacaipirinha/doissaborescaipirinha.webp" 
      },
    ]
  },
  {
    id: "drinks-cowboy",
    title: "Drinks do Cowboy",
    icon: FaCocktail,
    items: [
      { name: "8 Segundos", price: "R$ 29,90", desc: "Johnnie Walker Red, gelo e suco de limão", photo: "/cardapio/drinkscowboy/8segundos.webp" },
      { name: "Boate Azul", price: "R$ 34,90", desc: "Gin, xarope de violeta e suco de limão. Drink inspirado na música \"Boate Azul\" de Bruno e Marrone, se tornou um clássico por traduzir, de forma direta, a experiência de quem tenta esquecer uma dor profunda em ambientes noturnos", photo: "/cardapio/drinkscowboy/boateazul.webp" },
      { name: "Bourbon Honey", price: "R$ 39,90", desc: "Whisky bourbon, limão siciliano, xarope de gengibre, cointreau, angostura com espuma cítrica e mel", photo: "/cardapio/drinkscowboy/bourbonhoney.webp" },
      { name: "Bull Village", price: "R$ 42,90", desc: "Ballena, leche loko, morango e licor de café", photo: "/cardapio/drinkscowboy/bullvillage.webp" },
      { name: "Canarinho", price: "R$ 22,00", desc: "Kiwi, água tônica e montila", photo: "/cardapio/drinkscowboy/canarinho.webp" },
      { name: "Chapéu do Cowboy", price: "R$ 35,90", desc: "Cozumel exclusivo do Cowboy Beer com limão, gelo, borda de sal e cerveja 600ml", photo: "/cardapio/cervejasechop/chapeu-do-cowboy.webp" },
      { name: "Drink da Patroa", price: "R$ 28,90", desc: "Pinga, suco de limão, gengibre e especiarias", photo: "/cardapio/drinkscowboy/drinkdapatroa.webp" },
      { name: "Drink do Cowboy", price: "R$ 28,90", desc: "Pinga, suco de limão, xarope de kiwi e especiarias", photo: "/cardapio/drinkscowboy/drinkdocowboy.webp" },
      { name: "Drink Paraíso Tropical", price: "R$ 39,90", desc: "Vodka, maracujá, abacaxi e laranja", photo: "/cardapio/drinkscowboy/drinkparaisotropical.webp" },
      { name: "Drink Sola da Bota", price: "R$ 39,90", desc: "Licor 43, amarula e licor de café", photo: "/cardapio/drinkscowboy/drinksoladabota.webp" },
      { name: "Faroeste", price: "R$ 39,90", desc: "Geleia de frutas vermelhas, limão siciliano, mix de vodka e gin com espuma cítrica", photo: "/cardapio/drinkscowboy/faroeste.webp" },
      { name: "Fivela de Prata", price: "R$ 34,90", desc: "Baileys, café, vodka e gelo", photo: "/cardapio/drinkscowboy/fiveladeprata.webp" },
      { name: "Made in Roça", price: "R$ 34,90", desc: "Whisky boubon, maracujá, limão, mel e raspas de rapadura", photo: "/cardapio/drinkscowboy/madeinroca.webp" },
      { name: "Maracountry Drink", price: "R$ 39,90", desc: "Pinga 51, maracujá, limão e leite condensado", photo: "/cardapio/drinkscowboy/maracountrydrink.webp" },
      { name: "Mississipi", price: "R$ 39,90", desc: "Vinho tinto infusionado na cereja, whisky bourbon, xarope de limão siciliano e angostura", photo: "/cardapio/drinkscowboy/mississipi.webp" },
      { name: "Novo Mundo", price: "R$ 36,90", desc: "Abacaxi, hortelã, cachaça branca, suco de caju, suco de limão e xarope de gengibre", photo: "/cardapio/drinkscowboy/novomundo.webp" },
      { name: "Passion Country", price: "R$ 36,90", desc: "Cachaça, morango, licor 43, maracujá, xarope açúcar e angostura", photo: "/cardapio/drinkscowboy/passioncountry.webp" },
      { name: "Rodeio", price: "R$ 42,90", desc: "Whisky, malibu, limão, amaretto, limoncello e chopp", photo: "/cardapio/drinkscowboy/rodeio.webp" },
      { name: "Sal e Toranja Nashville", price: "R$ 28,90", desc: "Abacaxi, hortelã, cachaça branca, suco de caju, suco de limão e xarope de gengibre", photo: "/cardapio/drinkscowboy/saletoranjanashville.webp" },
      { name: "Talismã", price: "R$ 22,00", desc: "Rum, água tônica e tangerina", photo: "/cardapio/drinkscowboy/talisma.webp" },
      { name: "Tentação Selvagem Drink", price: "R$ 28,90", desc: "Licor de chocolate, maracujá e energético", photo: "/cardapio/drinkscowboy/talisma.webp" },
    ]
  },
  {
    id: "drinks-classicos",
    title: "Drinks Clássicos",
    icon: FaCocktail,
    items: [
      { name: "Aperol", price: "R$ 33,90", desc: "Aperol, água com gás e próseco", photo: "/cardapio/drinkclassico/aperol.webp" },
      { name: "Boulevardier", price: "R$ 48,90", desc: "Campari whisky bouron e limão desidratado", photo: "/cardapio/drinkclassico/boulevardie.webp" },
      { name: "Cosmopolitan", price: "R$ 31,90", desc: "Vodka, cranberry, triple sec e suco de limão", photo: "/cardapio/drinkclassico/cosmopolitan.webp" },
      { name: "Fitzgerald", price: "R$ 29,90", desc: "Gin, suco de limão siciliano, xarope de açúcar e angostura", photo: "/cardapio/drinkclassico/fitzgerald.webp" },
      { name: "Margarita", price: "R$ 32,90", desc: "Cointreau, limão, tequila e açúcar", photo: "/cardapio/drinkclassico/margarita.webp" },
      { name: "Mojito", price: "R$ 28,90", desc: "Rum, limão, hortelã e água com gás", photo: "/cardapio/drinkclassico/mojito.webp" },
      { name: "Moscow Mule", price: "R$ 29,90", desc: "Vodka, mix de gengibre e limão com espuma de gengibre", photo: "/cardapio/drinkclassico/moscowmule.webp" },
      { name: "Negroni", price: "R$ 48,00", desc: "Gin, campari, vermouth e casca de laranja", photo: "/cardapio/drinkclassico/negroni.webp" },
      { name: "Pina Colada", price: "R$ 34,90", desc: "Abacaxi, leite condensado, rum, creme de coco e cereja", photo: "/cardapio/drinkclassico/pinadcolada.webp" },
    ]
  },
  {
    id: "sem-alcool",
    title: "Drinks Sem Álcool",
    icon: FaCocktail,
    items: [
      // Agrupamento do Shake do Cowboy
      { 
        name: "Shake do Cowboy", 
        price: "R$ 18,90", 
        desc: "Sabores disponíveis: Frutas Vermelhas, Maracujá ou Morango. Acompanha leite condensado, milk e calda (chocolate ou morango).", 
        photo: "/cardapio/semalcool/shakedocowboymorango.webp" 
      },
      { name: "Soda Italiana", price: "R$ 14,90", desc: "Consulte os sabores disponíveis com o garçom: gengibre, limão siciliano, kiwi, maçã verde, maracujá, morango ou toranja.", photo: "/cardapio/semalcool/sodaitaliana.webp" },
      { name: "Sonho de Boiadeira", price: "R$ 28,90", desc: "Purê de morango, maracujá, leite condensado e energético", photo: "/cardapio/semalcool/sonhodeboiadeira.webp" },
    ]
  },
  {
    id: "spritz",
    title: "Spritz & Refrescantes",
    icon: FaCocktail,
    items: [
      { name: "Aperol Spritz", price: "R$ 33,90", desc: "Aperol, água com gás e espumante", photo: "/cardapio/spritz/aperolspritz.webp" },
      { name: "Campari Spritz", price: "R$ 33,90", desc: "Campari, água com gás e espumante", photo: "/cardapio/spritz/camparispritz.webp" },
      { name: "Limon Spritz", price: "R$ 36,90", desc: "Gin, soda, próseco e limoncello", photo: "/cardapio/spritz/limonspritz.webp" },
    ]
  },
  {
    id: "campari-licor43",
    title: "Campari & Licor 43",
    icon: FaWineGlass,
    items: [
      { name: "43 Tropical", price: "R$ 39,90", desc: "Licor 43, energético tropical e polpa de maracujá", photo: "/cardapio/camparilicor43/43tropical.webp" },
      { name: "Camparinha", price: "R$ 27,90", desc: "Campari, cachaça, limão e açúcar", photo: "/cardapio/camparilicor43/camparinha.webp" },
      { name: "Campari Tonic", price: "R$ 29,90", desc: "Campari, água tônica e rodela de laranja baía", photo: "/cardapio/camparilicor43/camparitonic.webp" },
      { name: "Evidências Drink", price: "R$ 39,90", desc: "Licor 43, amarula, licor de chocolate. O drink foi inspirado na música \"Evidências\", de Chitãozinho & Xororó, aborda o conflito entre orgulho e vulnerabilidade ao falar sobre a dificuldade de admitir sentimentos verdadeiros", photo: "/cardapio/camparilicor43/evidencias.webp" },
      { name: "Luxor 43", price: "R$ 39,90", desc: "Campari, licor 43 e espumante", photo: "/cardapio/camparilicor43/luxor43.webp" },
    ]
  },
  {
    id: "batatas-recheadas",
    title: "Batatas Recheadas",
    icon: FaUtensils,
    items: [
      { name: "Batata Recheada", price: "A partir de R$ 25,00", desc: "Opções: Frango (R$ 25,00), Queijo e Bacon (R$ 25,00) ou Strogonoff de Frango (R$ 32,00). Todas são recheadas com o molho secreto de queijo do chef.", photo: "/cardapio/batatarecheada/batatarecheada.webp" },
    ]
  },
  {
    id: "caldos",
    title: "Caldos (300ml)",
    icon: FaUtensils,
    items: [
      { name: "Caldos", price: "A partir de R$ 24,90", desc: "Sabores: Frango (R$ 28,90) e Vaca Atolada (R$ 24,90).", photo: "/cardapio/caldo300/caldodefrango.webp" },
    ]
  },
  {
    id: "massas",
    title: "Massas do Saloon",
    icon: FaUtensils,
    items: [
      { name: "Espaguete Mac and Cheese", price: "R$ 25,90", desc: "Espaguete com queijo", photo: "/cardapio/massas/espaguetemacandcheese.webp" },
      { name: "Espaguete Meat Ball", price: "R$ 32,00", desc: "Espaguente com almôndegas ao molho vermelho da casa", photo: "/cardapio/massas/spaguetemeatball.webp" },
      { name: "Talharim Garlic and Oil", price: "R$ 38,00", desc: "Talharim ao alho e óleo", photo: "/cardapio/massas/talharimgarlicandoil.webp" },
    ]
  },
  {
    id: "sanduiches-cowboy",
    title: "Sanduíches do Cowboy",
    icon: FaUtensils,
    items: [
      { name: "Burguer Chef", price: "R$ 36,50", desc: "Pão de hamburguer, filé de frango empanado, cebola, alface, mussarela maçaricada, zuqchini de abobrinha italiana", photo: "/cardapio/sanduichecowboy/burguerchef.webp" },
      { name: "Combo Cowboy", price: "R$ 42,90", desc: "Dallas egg com escolha de acompanhamento: porção de batatas fritas ou refrigerante.", photo: "/cardapio/sanduichecowboy/combocowboy.webp" },
      { name: "Dallas Egg", price: "R$ 28,00", desc: "Pão de hamburguer, ovos, bacon, mussarela e molho rosé", photo: "/cardapio/sanduichecowboy/dallasegg.webp" },
      { name: "Especial Burguer", price: "R$ 39,90", desc: "Pão briochhe com manteiga, alface, dois hamburgueres, tomate, picles, cheddar, molho especial com bacon", photo: "/cardapio/sanduichecowboy/especialburguer.webp" },
      { name: "Regis Burguer", price: "R$ 36,00", desc: "Pão brioche, hamburguer 100% angus, cheddar, bacon, picles e maionese de páprica defumada", photo: "/cardapio/sanduichecowboy/regisburguer.webp" },
    ]
  },
  {
    id: "sobremesas",
    title: "Sobremesas",
    icon: FaIceCream,
    items: [
      { name: "Churros com Doce de Leite", price: "R$ 39,90", desc: "15 unidades", photo: "/cardapio/sobremesa/churros.webp" },
      { name: "Mousse de Maracujá", price: "R$ 12,90", desc: "", photo: "/cardapio/sobremesa/mousedemaracuja.webp" },
      { name: "Petit Gateau com Sorvete", price: "R$ 24,00", desc: "", photo: "/cardapio/sobremesa/petitgateau.webp" },
    ]
  }
];
"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaGoogle, FaStar } from "react-icons/fa";

// Dados reais fornecidos por você
const REVIEWS = [
  {
    name: "Aline Almeida",
    meta: "Local Guide · 30 avaliações",
    time: "2 meses atrás",
    text: "Lugar simplesmente incrível! O Cowboy Beer está de parabéns em tudo: comida deliciosa, porções bem servidas, preço justo, atendimento excelente e um espaço kids maravilhoso que faz toda a diferença pra quem vai com a família. Sem contar os shows ao vivo, que são sempre top e deixam o ambiente ainda mais animado. Dá pra ver o cuidado e o carinho em cada detalhe. Desejo todo o sucesso do mundo, porque vocês merecem! 👏🍻🎶✨",
  },
  {
    name: "Raissa",
    meta: "Local Guide · 249 avaliações",
    time: "5 meses atrás",
    text: "O Cowboy Beer, em Uberlândia, é uma excelente opção tanto para almoço quanto para jantar. O buffet por quilo oferece ampla variedade de pratos, com carnes muito bem preparadas e saborosas. O atendimento é ágil e cordial, o ambiente é espaçoso e agradável, e o chopp, bem gelado e de ótima qualidade, complementa perfeitamente a experiência. Vale a visita! Experiência positiva, amei conhecer o local!",
  },
  {
    name: "Gustavo Pucci",
    meta: "Local Guide · 189 avaliações",
    time: "2 meses atrás",
    text: "Ambiente familiar, atendimento diferenciado e cardápio saboroso. Melhor marmita de churrasco!",
  },
  {
    name: "Patrizia Santarém",
    meta: "Local Guide · 21 avaliações",
    time: "2 meses atrás",
    text: "Lugar organizado, energia boa. Completo. Comida gostosa, lazer para crianças. Atendimento humanizado. Ambiente familiar. Excelente custo benefício",
  },
  {
    name: "Thalmo duarte",
    meta: "10 avaliações",
    time: "3 semanas atrás",
    text: "Lugar muito bom, ótima comida, música boa e principalmente o atendimento que tivemos com garçom o Matheus ele merece cinco estrelas sempre. Recomendo O Cowboy beer!!!!",
  },
];

export default function ReviewsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full mt-14 selection:bg-cowboy-accent selection:text-white">
      {/* Botões de navegação escuros para contraste */}
      <button
        onClick={scrollLeft}
        className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-cowboy-dark-surface p-4 text-white shadow-xl backdrop-blur-md transition-all hover:bg-cowboy-accent hover:scale-110 md:flex xl:-left-12"
        aria-label="Anterior"
      >
        <FaChevronLeft />
      </button>

      {/* Container Rolável - Arrasta no Mobile */}
      <div
        ref={carouselRef}
        className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-8 pt-4 md:gap-8 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {REVIEWS.map((review, idx) => (
          <div
            key={idx}
            className="flex w-[85vw] shrink-0 snap-center flex-col justify-between rounded-[32px] border border-stone-100 bg-white p-7 shadow-sm sm:w-[420px] md:p-8"
          >
            <div>
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-1 text-cowboy-accent">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} className="text-sm" />
                  ))}
                </div>
                <FaGoogle className="text-stone-400 opacity-60 text-xl" />
              </div>
              
              <p className="line-clamp-6 text-[15px] leading-relaxed text-stone-900 md:text-base">
                "{review.text}"
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 border-t border-stone-100 pt-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cowboy-accent/20 text-xl font-bold text-cowboy-accent">
                {review.name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-stone-950">{review.name}</div>
                <div className="text-[11px] font-medium tracking-wide text-stone-700">
                  {review.meta} • {review.time}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-cowboy-dark-surface p-4 text-white shadow-xl backdrop-blur-md transition-all hover:bg-cowboy-accent hover:scale-110 md:flex xl:-right-12"
        aria-label="Próximo"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
"use client";

import Navbar from "@/components/Navbar";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaExpandAlt,
  FaGoogle,
  FaInstagram,
  FaMapMarkerAlt,
  FaStar,
  FaTimes,
  FaWaze,
} from "react-icons/fa";

type MenuCategory = {
  eyebrow: string;
  title: string;
  items: string[];
  image: string;
  alt: string;
};

type Drink = { name: string; profile: string; description: string };
type GalleryImage = { src: string; alt: string; title: string };
type Review = { name: string; time: string; text: string };

const MENU_CATEGORIES: MenuCategory[] = [
  {
    eyebrow: "Cortes da Casa",
    title: "Carnes que chamam atenção no primeiro olhar",
    items: [
      "Picanha premium fatiada na brasa",
      "Ancho com manteiga de ervas",
      "Costela fogo lento com glaze da casa",
      "Chorizo com legumes tostados",
    ],
    image: "/estabelecimento/cortes.jpg",
    alt: "Corte de carne servido na tábua",
  },
  {
    eyebrow: "Entradas & Clássicos",
    title: "Petiscos e pratos com cara de casa forte",
    items: [
      "Torresmo crocante com limão",
      "Batata rústica trufada",
      "Burger artesanal na parrilla",
      "Linguiça especial com chimichurri",
    ],
    image: "/estabelecimento/interior.jpg",
    alt: "Mesa posta em restaurante premium",
  },
];

const DRINKS: Drink[] = [
  {
    name: "Old West Negroni",
    profile: "Intenso e elegante",
    description: "Visual sofisticado e presença marcante na mesa.",
  },
  {
    name: "Smoked Bourbon",
    profile: "Defumado e envolvente",
    description: "Drink de impacto, ideal para reforçar o clima da casa.",
  },
  {
    name: "Gin Citrus Reserve",
    profile: "Refrescante e sofisticado",
    description: "Leveza e brilho para equilibrar comida e atmosfera.",
  },
  {
    name: "Cowboy Mule",
    profile: "Gelado e vibrante",
    description: "Taça bonita, presença visual e cara de noite especial.",
  },
];

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/estabelecimento/interior.jpg",
    alt: "Ambiente interno do Cowboy Beer",
    title: "Ambiente marcante",
  },
  {
    src: "/estabelecimento/cortes.jpg",
    alt: "Cortes especiais servidos",
    title: "Carnes com presença",
  },
  {
    src: "/estabelecimento/drinks.jpg",
    alt: "Drinks autorais do Cowboy Beer",
    title: "Bar de respeito",
  },
  {
    src: "/estabelecimento/fachada.jpg",
    alt: "Fachada do restaurante",
    title: "Identidade forte",
  },
];

const REVIEWS: Review[] = [
  {
    name: "Raissa M.",
    time: "há 2 semanas",
    text: "Lugar muito bonito, comida bem servida e ambiente que chama atenção logo na entrada.",
  },
  {
    name: "Juslei Ribeiro",
    time: "há 1 mês",
    text: "Visual forte, carne boa e drinks que combinam muito com a proposta da casa.",
  },
  {
    name: "Patrizia Santarém",
    time: "há 3 semanas",
    text: "Gostei muito do clima do lugar. Tudo passa sensação de presença e qualidade.",
  },
];

// --- LISTA DE PARCERIAS ---
const PARTNERS = [
  { name: "Laut Premium Beer", src: "/parcerias/laut.png" },
  { name: "Cowboy House", src: "/parcerias/cowboy-house.png" },
  { name: "Nome da Parceria 4", src: "/parcerias/parceiro-04.png" },
  // Repetição para manter o loop perfeito na animação em monitores grandes
  { name: "Laut Premium Beer", src: "/parcerias/laut.png" },
  { name: "Cowboy House", src: "/parcerias/cowboy-house.png" },
  { name: "Nome da Parceria 4", src: "/parcerias/parceiro-04.png" },
];

function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
  theme = "dark",
}: {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
  theme?: "dark" | "light";
}) {
  const isLight = theme === "light";

  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.35em] text-[#E89E34] md:text-xs">
        {eyebrow}
      </span>
      <h2
        className={`font-serif text-4xl leading-[1.05] md:text-5xl lg:text-6xl ${
          isLight ? "text-stone-900" : "text-white"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 text-[15px] leading-relaxed md:text-lg ${
          isLight ? "text-stone-700" : "text-stone-300"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-[#E89E34] px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#d18d2f] md:px-8"
    >
      {children}
    </Link>
  );
}

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm uppercase tracking-[0.2em] text-white transition hover:border-[#E89E34]/60 hover:bg-white/10 md:px-8"
    >
      {children}
    </Link>
  );
}

function ReviewCard({ name, time, text }: Review) {
  return (
    <div className="h-full rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm md:p-8">
      <div className="mb-6 flex items-center gap-3 text-[#E89E34]">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar key={index} className="text-sm" />
        ))}
      </div>
      <p className="text-[15px] leading-relaxed text-stone-200 md:text-base">
        {text}
      </p>
      <div className="mt-6 border-t border-white/10 pt-5">
        <div className="font-semibold text-white">{name}</div>
        <div className="text-sm text-stone-400">{time}</div>
      </div>
    </div>
  );
}

function LiveStatusBadge({
  inicio,
  fim,
  diaDaSemana,
}: {
  inicio: string;
  fim: string;
  diaDaSemana: number;
}) {
  const now = new Date();
  const brTime = new Date(
    now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })
  );

  const currentDay = brTime.getDay();
  const currentHour = brTime.getHours();
  const currentMinute = brTime.getMinutes();

  const [startHour, startMin] = inicio.split(":").map(Number);
  const [endHour, endMin] = fim.split(":").map(Number);

  const currentTimeInMins = currentHour * 60 + currentMinute;
  const startTimeInMins = startHour * 60 + startMin;
  const endTimeInMins = endHour * 60 + endMin;

  let status = null;
  let text = "";
  let colorClass = "";

  if (currentDay === diaDaSemana) {
    if (
      currentTimeInMins >= startTimeInMins - 30 &&
      currentTimeInMins < startTimeInMins
    ) {
      status = "EM_BREVE";
      text = "Começa em breve";
      colorClass = "bg-[#E89E34]/10 text-[#E89E34] border-[#E89E34]/30";
    } else if (
      currentTimeInMins >= startTimeInMins &&
      currentTimeInMins <= endTimeInMins - 30
    ) {
      status = "AO_VIVO";
      text = "Ao vivo";
      colorClass = "bg-red-500/10 text-red-400 border-red-500/30 animate-pulse";
    } else if (
      currentTimeInMins > endTimeInMins - 30 &&
      currentTimeInMins <= endTimeInMins
    ) {
      status = "FECHA_BREVE";
      text = "Fecha em breve";
      colorClass = "bg-[#E89E34]/10 text-[#E89E34] border-[#E89E34]/30";
    } else if (currentTimeInMins > endTimeInMins) {
      status = "ENCERRADO";
      text = "Encerrado";
      colorClass = "bg-stone-500/10 text-stone-400 border-stone-500/30";
    }
  }

  if (!status) return null;

  return (
    <div
      className={`mb-6 inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] md:text-xs ${colorClass}`}
    >
      {status === "AO_VIVO" && <span className="h-2 w-2 rounded-full bg-red-500" />}
      {text}
    </div>
  );
}

export default function CowboyBeerPage() {
  const [activeGallery, setActiveGallery] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const EXPERIENCIA_GALLERIES: Record<string, { src: string; alt: string }[]> =
    {
      ambiente: [
        { src: "/estabelecimento/interior.webp", alt: "Fachada do Cowboy Beer" },
        { src: "/estabelecimento/bebidas.webp", alt: "Ambiente interno da cowboy beer" },
        { src: "/home/ambiente.webp", alt: "Ambiente aconchegante" },
        { src: "/estabelecimento/ambiente_4.webp", alt: "Área reservada para eventos" },
        { src: "/estabelecimento/ambiente_5.webp", alt: "comida self-service" },
        { src: "/estabelecimento/ambiente_6.webp", alt: "Espaço kids" },
        { src: "/estabelecimento/ambiente_7.webp", alt: "Iluminação aconchegante à noite" },
      ],
      sabores: [
        { src: "/home/cortes8.webp", alt: "Cortes especiais" },
        { src: "/estabelecimento/corte.webp", alt: "Detalhe das carnes" },
        { src: "/estabelecimento/corte_3.webp", alt: "Feitas com todo cuidado" },
        { src: "/estabelecimento/corte_4.webp", alt: "Perfeito para você" },
        { src: "/estabelecimento/corte_5.webp", alt: "Corte especial" },
      ],
      drinks: [
        { src: "/estabelecimento/drinks.webp", alt: "Drinks autorais" },
        { src: "/home/drink.webp", alt: "Preparação no bar" },
        { src: "/estabelecimento/drink_3.webp", alt: "Gin tônica com especiarias" },
        { src: "/estabelecimento/drink_4.webp", alt: "Whisky sour Cowboy" },
        { src: "/estabelecimento/drink_5.webp", alt: "Feitas para você" },
      ],
    };

  const openGallery = (galleryKey: string) => {
    setActiveGallery(galleryKey);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setActiveGallery(null);
  };

  const nextImage = () => {
    if (activeGallery) {
      setCurrentImageIndex((prev) =>
        prev === EXPERIENCIA_GALLERIES[activeGallery].length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (activeGallery) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? EXPERIENCIA_GALLERIES[activeGallery].length - 1 : prev - 1
      );
    }
  };

  return (
    <main className="relative w-full max-w-[100vw] overflow-x-hidden bg-cowboy-dark text-white selection:bg-[#E89E34] selection:text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        body, html {
          overflow-x: hidden;
          overscroll-behavior-x: none;
        }

        /* ANIMAÇÕES PARA A FAIXA DE PARCERIAS */
        @keyframes scroll-left-to-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-lr {
          animation: scroll-left-to-right 25s linear infinite;
        }
        /* Efeito de fade nas laterais para ficar elegante */
        .mask-horizontal-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `,
        }}
      />

      <Navbar />

      <header
        id="inicio"
        className="relative flex min-h-[110vh] w-full flex-col items-center justify-center overflow-hidden text-center selection:bg-[#E89E34] selection:text-white md:min-h-screen"
      >
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-center md:hidden"
          >
            <source src="/estabelecimento/hero-video.mp4" type="video/mp4" />
          </video>

          <Image
            src="/estabelecimento/hero-desktop.jpg"
            alt="Cowboy Beer desktop hero image"
            fill
            priority
            className="hidden object-cover object-center md:block"
          />

          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-cowboy-dark via-black/20 to-black/40" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-10 md:px-6 md:pb-0">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center overflow-hidden md:mb-8 md:h-36 md:w-36">
            <Image
              src="/logo.png"
              alt="Cowboy Beer Logo"
              width={120}
              height={120}
              className="object-contain"
              priority
            />
          </div>

          <h1 className="mx-auto font-serif text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            A verdadeira <br />
            <span className="text-[#E89E34]">experiência Cowboy.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-stone-200 md:mt-8 md:text-xl">
            Restaurante e bar premium em Uberlândia. Cortes especiais, drinks autorais e
            uma atmosfera feita para noites marcantes.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-10">
            <Link
              href="/cardapio"
              className="inline-flex w-full items-center justify-center rounded-md bg-[#E89E34] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#d18d2f] sm:w-auto md:text-xs"
            >
              Ver cardápio completo
            </Link>

            <a
              href="#experiencia"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("experiencia")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex w-full items-center justify-center rounded-md border border-white/30 bg-white/5 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/10 sm:w-auto md:text-xs"
            >
              Conheça a experiência
            </a>
          </div>
        </div>
      </header>

      {/* --- NOVA SEÇÃO: PARCERIAS (LOGO TICKER LIMPO) --- */}
      <section className="border-b border-white/10 bg-[#0f0c0a] py-6 md:py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 md:flex-row md:gap-12 md:px-6">
          
          {/* Texto Fixo na Esquerda */}
          <div className="shrink-0 text-center md:text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E89E34]">
              Nossas Parcerias
            </span>
          </div>

          {/* Carrossel Infinito das Logos (Esquerda p/ Direita) */}
          <div className="relative flex w-full overflow-hidden mask-horizontal-fade">
            <div className="flex w-max animate-marquee-lr items-center gap-12 md:gap-16">
              
              {/* Duplicamos a renderização das logos para o loop ficar perfeito */}
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-12 md:gap-16">
                  {PARTNERS.map((partner, index) => (
                    <div
                      key={index}
                      // Removido o bg, border e rounded. Ajustado o tamanho pra foto respirar solta.
                      className="relative h-16 w-28 shrink-0 md:h-20 md:w-36"
                    >
                      <Image
                        src={partner.src}
                        alt={partner.name}
                        fill
                        className="object-contain grayscale transition-all duration-300 hover:grayscale-0"
                      />
                    </div>
                  ))}
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      <section id="atracao" className="bg-cowboy-light px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Música ao vivo"
            title="Atração da Semana"
            description="Acompanhe nossa programação musical e sinta a energia do Cowboy Beer de perto."
            theme="light"
            center={true}
          />

          <div className="relative mt-14 overflow-hidden rounded-[32px] shadow-2xl shadow-stone-900/10 transition-all duration-500 hover:shadow-stone-900/20">
            <div className="relative h-[480px] w-full sm:h-[550px] md:h-[600px]">
              <Image
                src="/home/banda.webp"
                alt="Foto da atração ao vivo"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover object-top transition-transform duration-1000 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute left-6 top-6 z-10 md:left-8 md:top-8">
                <LiveStatusBadge inicio="20:00" fim="23:30" diaDaSemana={5} />
              </div>

              <div className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-6 p-6 md:flex-row md:items-end md:p-8">
                <div className="flex flex-col items-start gap-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#E89E34]/30 bg-black/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#E89E34] backdrop-blur-md">
                    Palco Principal
                  </div>
                  <p className="max-w-xs text-sm leading-relaxed text-stone-300 md:text-base">
                    Reúna os amigos e venha curtir o melhor da música ao vivo para
                    acompanhar seus cortes e drinks.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-6 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md sm:flex-nowrap md:gap-8 md:p-6">
                  <div className="flex items-start gap-3 text-white">
                    <FaCalendarAlt className="mt-0.5 text-xl text-[#E89E34]" />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-stone-300">
                        Data
                      </div>
                      <div className="mt-1 whitespace-nowrap text-base font-medium md:text-lg">
                        Nesta Sexta
                      </div>
                    </div>
                  </div>

                  <div className="hidden h-10 w-px bg-white/20 sm:block" />

                  <div className="flex items-start gap-3 text-white">
                    <FaClock className="mt-0.5 text-xl text-[#E89E34]" />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-stone-300">
                        Horário
                      </div>
                      <div className="mt-1 whitespace-nowrap text-base font-medium md:text-lg">
                        20:00 às 23:30
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="bg-cowboy-light px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.35em] text-[#E89E34] md:text-xs">
              Conheça a experiência
            </span>
            <h2 className="font-serif text-4xl leading-[1.05] text-stone-900 md:text-5xl lg:text-6xl">
              Mais do que jantar fora,
              <span className="mt-1 block text-[#E89E34]">é viver o clima da casa.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-stone-600 md:text-lg">
              Um ambiente pensado para transformar a sua visita em uma experiência
              visual e gastronômica completa.{" "}
              <span className="font-semibold text-[#E89E34]">
                Clique nas fotos para explorar.
              </span>
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:gap-5 md:mt-16 lg:grid-cols-12 lg:grid-rows-[500px]">
            <div
              onClick={() => openGallery("ambiente")}
              className="group relative col-span-12 min-h-[300px] cursor-pointer overflow-hidden rounded-[24px] shadow-sm sm:min-h-[400px] lg:col-span-8 lg:min-h-full"
            >
              <Image
                src={EXPERIENCIA_GALLERIES.ambiente[0].src}
                alt="Ambiente interno do Cowboy Beer"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-colors group-hover:from-black/90" />

              <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 md:right-8 md:top-8">
                <FaExpandAlt />
              </div>

              <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8">
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E89E34]">
                  Ambiente
                </div>
                <div className="mt-1 font-serif text-2xl text-white md:text-3xl">
                  Identidade Forte
                </div>
                <div className="mt-2 text-sm text-stone-300 md:text-base">
                  Ambiente visualmente memorável para você curtir a noite. Ver
                  galeria.
                </div>
              </div>
            </div>

            <div className="col-span-12 grid grid-cols-2 gap-3 sm:gap-5 lg:col-span-4 lg:grid-cols-1 lg:grid-rows-2">
              <div
                onClick={() => openGallery("sabores")}
                className="group relative min-h-[220px] cursor-pointer overflow-hidden rounded-[24px] shadow-sm lg:min-h-full"
              >
                <Image
                  src={EXPERIENCIA_GALLERIES.sabores[0].src}
                  alt="Prato e cortes do Cowboy Beer"
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-colors group-hover:from-black/90" />

                <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                  <FaExpandAlt className="text-sm" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#E89E34]">
                    Sabores
                  </div>
                  <div className="mt-1 font-serif text-lg text-white md:text-xl">
                    Cortes de respeito
                  </div>
                </div>
              </div>

              <div
                onClick={() => openGallery("drinks")}
                className="group relative min-h-[220px] cursor-pointer overflow-hidden rounded-[24px] shadow-sm lg:min-h-full"
              >
                <Image
                  src={EXPERIENCIA_GALLERIES.drinks[0].src}
                  alt="Drinks autorais do Cowboy Beer"
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-colors group-hover:from-black/90" />

                <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                  <FaExpandAlt className="text-sm" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#E89E34]">
                    Bar
                  </div>
                  <div className="mt-1 font-serif text-lg text-white md:text-xl">
                    Drinks autorais
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center md:mt-14">
            <Link
              href="/cardapio"
              className="inline-flex items-center justify-center rounded-md border border-stone-200 bg-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-900 shadow-sm transition-all hover:border-[#E89E34] hover:bg-stone-50"
            >
              Ver cardápio completo
            </Link>
          </div>
        </div>

        {activeGallery && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md">
            <button
              onClick={closeGallery}
              className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-10 md:top-10"
            >
              <FaTimes className="text-xl" />
            </button>

            <div className="absolute left-6 top-6 z-50 flex h-12 items-center justify-center rounded-full bg-white/10 px-6 text-sm font-semibold tracking-widest text-white backdrop-blur-sm md:left-10 md:top-10">
              {currentImageIndex + 1} / {EXPERIENCIA_GALLERIES[activeGallery].length}
            </div>

            <div className="relative h-4/5 w-11/12 max-w-6xl">
              <Image
                src={EXPERIENCIA_GALLERIES[activeGallery][currentImageIndex].src}
                alt={EXPERIENCIA_GALLERIES[activeGallery][currentImageIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#E89E34] text-white transition-colors hover:bg-[#d18d2f] md:left-10"
            >
              <FaArrowLeft className="text-xl" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#E89E34] text-white transition-colors hover:bg-[#d18d2f] md:right-10"
            >
              <FaArrowRight className="text-xl" />
            </button>

            <div className="absolute bottom-10 left-0 w-full text-center">
              <span className="rounded-full bg-black/60 px-6 py-3 font-serif text-lg text-white backdrop-blur-sm md:text-xl">
                {EXPERIENCIA_GALLERIES[activeGallery][currentImageIndex].alt}
              </span>
            </div>
          </div>
        )}
      </section>

      <section
        id="avaliacoes"
        className="bg-cowboy-light px-5 py-20 md:px-6 md:py-28 selection:bg-[#E89E34] selection:text-white"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-stone-100 bg-cowboy-dark-surface p-2 shadow-lg md:h-28 md:w-28">
              <Image
                src="/logo.png"
                alt="Cowboy Beer Logo"
                fill
                sizes="112px"
                className="object-contain p-3"
              />
            </div>

            <h2 className="mt-6 max-w-2xl font-serif text-3xl leading-[1.15] text-stone-950 md:text-5xl">
              Veja a experiência de quem visita a{" "}
              <span className="text-[#E89E34]">Cowboy Beer</span>
            </h2>

            <div className="mt-5 flex flex-col items-center justify-center gap-1">
              <div className="flex items-center justify-center gap-3 text-[#E89E34]">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} className="text-lg" />
                  ))}
                </div>
                <span className="font-semibold text-stone-700">4.8 no Google</span>
              </div>

              <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400 md:hidden">
                Arraste para o lado
              </span>
            </div>
          </div>

          <div className="mt-8 w-full overflow-hidden">
            <ReviewsCarousel />
          </div>
        </div>
      </section>

      <section
        id="localizacao"
        className="bg-cowboy-light px-5 py-20 text-stone-900 md:px-6 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="order-2 lg:order-1">
            <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.35em] text-[#E89E34] md:text-xs">
              Localização
            </span>
            <h2 className="font-serif text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
              Vem pro Cowboy,
              <span className="block text-[#E89E34]">a gente te guia.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-stone-700 md:text-lg">
              Escolha seu app de navegação favorito ou explore nosso ambiente pelo
              mapa interativo.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-[24px] border border-stone-200 bg-white p-5 shadow-sm md:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-stone-100 text-[#52270F]">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-[0.2em] text-stone-500">
                      Endereço
                    </div>
                    <div className="mt-2 text-lg font-medium text-stone-900">
                      Av. Segismundo Pereira, 4948 — Novo Mundo, Uberlândia - MG
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Av.+Segismundo+Pereira,+4948+-+Novo+Mundo,+Uberlândia+-+MG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-[24px] border border-stone-200 bg-white p-4 shadow-sm transition-all hover:border-[#E89E34] hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-stone-100 text-xl text-[#52270F] transition-colors group-hover:bg-[#52270F] group-hover:text-white">
                    <FaGoogle />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500">
                      Navegar com
                    </div>
                    <div className="mt-1 font-serif text-xl font-medium text-stone-900">
                      Google Maps
                    </div>
                  </div>
                </a>

                <a
                  href="https://waze.com/ul?q=Av.+Segismundo+Pereira,+4948+Novo+Mundo+Uberlândia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-[24px] border border-stone-200 bg-white p-4 shadow-sm transition-all hover:border-[#E89E34] hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-stone-100 text-xl text-[#52270F] transition-colors group-hover:bg-[#52270F] group-hover:text-white">
                    <FaWaze />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500">
                      Navegar com
                    </div>
                    <div className="mt-1 font-serif text-xl font-medium text-stone-900">
                      Waze
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 relative min-h-[360px] w-full overflow-hidden rounded-[34px] border border-stone-200 shadow-[0_25px_90px_rgba(0,0,0,0.12)] md:min-h-[540px] lg:order-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1774550550426!6m8!1m7!1sAO6lC1HbsrmKO7wLp5DGXA!2m2!1d-18.92402216090127!2d-48.21376589980343!3f193.40550426608672!4f-6.231912468866611!5f0.7820865974627469"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-cowboy-dark-deep px-5 py-10 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="font-serif text-2xl text-white">Cowboy Beer</div>
            <p className="mt-3 max-w-xl leading-relaxed text-stone-400">
             Bar e Restaurante com ambiente marcante, comida forte e drinks especiais.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="https://www.instagram.com/cowboybeerudi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/5 text-stone-200 transition-colors hover:text-[#E89E34]"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.google.com/maps/place/Cowboy+Beer/@-18.9241264,-48.2138198,17z/data=!3m1!4b1!4m6!3m5!1s0x94a44f8541e23e25:0xd0e9895bc9d47d5d!8m2!3d-18.9241264!4d-48.2138198!16s%2Fg%2F11jsjhyts0?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/5 text-stone-200 transition-colors hover:text-[#E89E34]"
              aria-label="Google"
            >
              <FaGoogle />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
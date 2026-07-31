"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaSearch, FaTimes } from "react-icons/fa";
import { menuCategories } from "./menuData";

type MenuItem =
  (typeof menuCategories)[number]["items"][number];

const normalizeText = (text: string) => {
  if (!text) return "";
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

export default function Cardapio() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] =
    useState<MenuItem | null>(null);

  useEffect(() => {
    if (searchTerm !== "") return;

    let timeoutId: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (timeoutId) return;

      timeoutId = setTimeout(() => {
        let current = menuCategories[0].id;

        for (const category of menuCategories) {
          const element = document.getElementById(category.id);

          if (element) {
            const rect = element.getBoundingClientRect();

            if (rect.top <= 250) {
              current = category.id;
            }
          }
        }

        setActiveCategory(current);
        timeoutId = null;
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  useEffect(() => {
    const navContainer = document.getElementById("nav-container");
    const activeBtn = document.getElementById(`nav-${activeCategory}`);

    if (navContainer && activeBtn) {
      const scrollPos =
        activeBtn.offsetLeft -
        navContainer.offsetWidth / 2 +
        activeBtn.offsetWidth / 2;

      navContainer.scrollTo({
        left: scrollPos,
        behavior: "smooth",
      });
    }
  }, [activeCategory]);

  const scrollToCategory = (id: string) => {
    setSearchTerm("");
    setActiveCategory(id);

    setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        const targetY =
          element.getBoundingClientRect().top +
          window.scrollY -
          180;

        window.scrollTo({
          top: targetY,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const slider = e.currentTarget;

    slider.dataset.isDown = "true";
    slider.dataset.startX = (
      e.pageX - slider.offsetLeft
    ).toString();

    slider.dataset.scrollLeft =
      slider.scrollLeft.toString();

    slider.dataset.dragged = "false";

    slider.classList.add(
      "cursor-grabbing",
      "is-dragging"
    );
  };

  const handleMouseLeaveOrUp = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const slider = e.currentTarget;

    slider.dataset.isDown = "false";

    slider.classList.remove(
      "cursor-grabbing",
      "is-dragging"
    );
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const slider = e.currentTarget;

    if (slider.dataset.isDown !== "true") return;

    e.preventDefault();

    const startX = parseFloat(
      slider.dataset.startX || "0"
    );

    const scrollLeft = parseFloat(
      slider.dataset.scrollLeft || "0"
    );

    const x = e.pageX - slider.offsetLeft;

    const walk = (x - startX) * 1.25;

    if (Math.abs(walk) > 5) {
      slider.dataset.dragged = "true";
    }

    slider.scrollLeft = scrollLeft - walk;
  };

  const filteredCategories = useMemo(() => {
    if (!searchTerm) return menuCategories;

    const normalizedSearchTerm =
      normalizeText(searchTerm);

    return menuCategories
      .map((category) => ({
        ...category,
        items: category.items.filter((item) => {
          const normalizedName =
            normalizeText(item.name);

          const normalizedDesc =
            normalizeText(item.desc || "");

          return (
            normalizedName.includes(
              normalizedSearchTerm
            ) ||
            normalizedDesc.includes(
              normalizedSearchTerm
            )
          );
        }),
      }))
      .filter((category) => category.items.length > 0);
  }, [searchTerm]);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedItem]);

  return (
    <div className="relative min-h-screen w-full bg-white font-sans text-stone-800 selection:bg-[#E89E34] selection:text-white">
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-20 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e6e6e6' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .font-western {
            font-family: var(--font-rye), Georgia, serif;
            font-weight: 400;
          }

          body {
            background-color: #ffffff;
          }

          .custom-scrollbar::-webkit-scrollbar {
            height: 6px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: rgba(82, 39, 15, 0.18);
            border-radius: 10px;
          }

          .custom-scrollbar:hover::-webkit-scrollbar-thumb {
            background-color: rgba(82, 39, 15, 0.45);
          }

          .horizontal-slider {
            -webkit-overflow-scrolling: touch;
            overscroll-behavior-inline: contain;
            scroll-behavior: smooth;
            touch-action: pan-x pan-y;
          }

          .horizontal-slider.is-dragging {
            scroll-behavior: auto;
            scroll-snap-type: none;
            user-select: none;
          }

          .menu-section {
            content-visibility: auto;
            contain-intrinsic-size: auto 560px;
          }

          @media (hover: none) and (pointer: coarse) {
            .custom-scrollbar::-webkit-scrollbar {
              display: none;
            }

            .custom-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          }

          @media (max-width: 767px) {
            .product-strip {
              scroll-padding-inline: 1rem;
              scroll-snap-type: x proximity;
            }
          }
        `,
        }}
      />

      <header className="fixed left-0 top-0 z-40 w-full border-b border-stone-200 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <Link
            href="/"
            className="group z-10 flex w-16 items-center gap-2 text-stone-500 transition-colors hover:text-[#52270F] md:w-28"
          >
            <FaArrowLeft className="text-xs transition-transform group-hover:-translate-x-1" />

            <span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] sm:inline md:text-xs">
              Voltar ao Saloon
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] sm:hidden">
              Voltar
            </span>
          </Link>

          <div className="relative h-16 w-32 flex-shrink-0 sm:h-20 sm:w-44 md:h-24 md:w-56">
            <Image
              src="/logo.png"
              alt="Cowboy Beer"
              fill
              priority
              quality={85}
              sizes="(max-width: 768px) 128px, 224px"
              className="object-contain"
            />
          </div>

          <div className="w-16 md:w-28"></div>
        </div>

        <div className="w-full border-t border-stone-200 bg-white">
          <div
            id="nav-container"
            className="draggable-slider horizontal-slider custom-scrollbar mx-auto flex max-w-7xl cursor-grab overflow-x-auto px-3 md:px-4"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
          >
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                id={`nav-${cat.id}`}
                onClick={(e) => {
                  const slider =
                    e.currentTarget.closest(
                      ".draggable-slider"
                    ) as HTMLElement;

                  if (
                    slider &&
                    slider.dataset.dragged === "true"
                  )
                    return;

                    scrollToCategory(cat.id);
                }}
                className={`flex items-center gap-2 whitespace-nowrap border-b-2 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] transition-all duration-300 md:gap-3 md:px-6 md:py-4 md:text-sm md:tracking-[0.2em] ${
                  activeCategory === cat.id &&
                  searchTerm === ""
                    ? "border-[#52270F] bg-stone-50/50 text-[#52270F]"
                    : "border-transparent text-stone-500 hover:text-stone-800"
                }`}
              >
                <cat.icon className="pointer-events-none text-sm md:text-base" />

                <span className="pointer-events-none">
                  {cat.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="relative z-10 w-full overflow-x-hidden px-0 pb-20 pt-40 md:pb-24 md:pt-56">
        <div className="mx-auto mb-8 max-w-2xl px-4 text-center md:mb-16">
          <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.4em] text-[#52270F] md:mb-4 md:text-xs">
            O que vai ser hoje?
          </span>

          <h1 className="mb-6 font-western text-4xl leading-tight text-[#1C1917] drop-shadow-sm md:mb-8 md:text-7xl">
            Menu
            <br />
            <span className="text-[#E89E34]">
              Completo
            </span>
          </h1>

          <div className="group relative mx-auto w-full max-w-md">
            <FaSearch className="absolute left-5 top-1/2 z-10 -translate-y-1/2 text-stone-400 transition-colors group-focus-within:text-[#52270F]" />

            <input
              type="text"
              placeholder="Buscar por cerveja, drink, bacon..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="w-full rounded-full border-2 border-stone-200 bg-white py-3 pl-14 pr-6 text-base font-medium text-stone-700 shadow-sm transition-all placeholder:text-stone-400 focus:border-[#52270F] focus:outline-none focus:ring-4 focus:ring-[#52270F]/10 md:py-4"
            />

            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 p-2 text-stone-400 hover:text-stone-700"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>

        <div className="w-full max-w-[100vw] space-y-12 md:space-y-24">
          {filteredCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="menu-section w-full scroll-mt-44 md:scroll-mt-48"
            >
              <div className="mx-auto mb-4 flex max-w-7xl items-center gap-3 px-4 md:mb-10 md:gap-4 md:px-8">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-100 md:h-14 md:w-14">
                  <category.icon className="text-lg text-[#52270F] md:text-2xl" />
                </div>

                <h2 className="font-serif text-2xl font-bold uppercase leading-tight tracking-wider text-[#1C1917] md:text-4xl">
                  {category.title}
                </h2>
              </div>

              <div className="relative w-full">
                <div className="draggable-slider horizontal-slider product-strip custom-scrollbar flex snap-x snap-proximity cursor-grab gap-3 overflow-x-auto px-4 pb-6 pt-1 md:gap-6 md:px-8 md:pb-8 md:pt-2">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      onClick={(e) => {
                        const slider =
                          e.currentTarget.closest(
                            ".draggable-slider"
                          ) as HTMLElement;

                        if (
                          slider?.dataset.dragged ===
                          "true"
                        )
                          return;

                        setSelectedItem(item);
                      }}
                      className="group flex w-[210px] shrink-0 snap-start cursor-pointer flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg min-[430px]:w-[220px] md:w-[300px] md:rounded-2xl md:hover:-translate-y-2 md:hover:shadow-xl"
                    >
                      <div className="relative flex aspect-square w-full overflow-hidden border-b border-stone-100 bg-stone-100/50 md:aspect-[4/5]">
                        <Image
                          src={
                            item.photo ||
                            "/cardapio/item-sem-foto.jpg"
                          }
                          alt={item.name}
                          fill
                          quality={48}
                          loading="lazy"
                          decoding="async"
                          draggable={false}
                          sizes="(max-width: 429px) 210px, (max-width: 767px) 220px, 300px"
                          className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03] md:p-3"
                        />
                      </div>

                      <div className="flex flex-grow flex-col p-4 md:p-6">
                        <div className="flex-grow">
                          <h3 className="mb-1.5 text-xs font-bold uppercase leading-snug tracking-wide text-stone-900 transition-colors group-hover:text-[#52270F] md:mb-2 md:text-base md:tracking-wider">
                            {item.name}
                          </h3>

                          {item.desc && (
                            <p className="line-clamp-2 text-[11px] font-light leading-relaxed text-stone-500 md:text-sm">
                              {item.desc}
                            </p>
                          )}
                        </div>

                        <div className="mt-3 flex items-center justify-between border-t border-stone-100/50 pt-3 md:mt-5 md:pt-4">
                          <span className="font-sans text-lg font-bold tracking-tight text-[#E89E34] md:text-xl">
                            {item.price}
                          </span>

                          <FaArrowRight className="text-xs text-stone-300 transition-colors duration-300 group-hover:text-[#E89E34] md:text-base" />
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="w-4 shrink-0 md:w-8"></div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-[#52270F]"
            >
              <FaTimes className="text-lg" />
            </button>

            <div className="relative flex aspect-square w-full bg-stone-100 md:aspect-[4/3]">
              <Image
                src={
                  selectedItem.photo ||
                  "/cardapio/item-sem-foto.jpg"
                }
                alt={selectedItem.name}
                fill
                quality={70}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 512px"
                className="object-contain p-4"
              />
            </div>

            <div className="bg-white p-6 md:p-8">
              <h3 className="mb-3 font-serif text-2xl font-bold uppercase leading-tight tracking-wide text-stone-900 md:text-3xl">
                {selectedItem.name}
              </h3>

              {selectedItem.desc && (
                <p className="mb-8 text-sm leading-relaxed text-stone-600 md:text-base">
                  {selectedItem.desc}
                </p>
              )}

              <div className="flex items-center justify-between border-t border-stone-200 pt-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">
                  Valor
                </span>

                <span className="font-sans text-4xl font-bold text-[#E89E34]">
                  {selectedItem.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

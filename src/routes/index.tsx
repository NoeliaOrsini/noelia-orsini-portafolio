import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Linkedin, ArrowUpRight, Menu, X } from "lucide-react";
import iaBalanza from "@/assets/ia-balanza.png";
import { SplashScreen } from "@/components/SplashScreen";
import { cn } from "@/lib/utils";
import {
  proyectos,
  hardSkills,
  softSkills,
  certificaciones,
  LINKEDIN_URL,
  GITHUB_URL,
} from "@/components/portfolio-data";

const TITULO = "Noelia Orsini | Desarrolladora Back-End y Abogada";
const DESC =
  "Portafolio de Noelia Orsini: desarrolladora Back-End, abogada con más de 20 años de experiencia y consultora psicológica. Agentes de IA, automatización y Human-in-the-Loop.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESC },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const secciones = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "habilidades", label: "Habilidades" },
  { id: "certificaciones", label: "Certificaciones" },
  { id: "contacto", label: "Contacto" },
];

function Nav() {
  const [abierto, setAbierto] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:flex md:justify-between">
        <a href="#inicio" className="min-w-0 truncate font-display text-lg font-bold tracking-widest">
          <span className="text-gradient"></span>
          <span className="ml-2 text-sm font-normal tracking-normal text-muted-foreground">
            Noelia Orsini
          </span>
        </a>
        <ul className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {secciones.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="transition-colors hover:text-teal">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setAbierto((v) => !v)}
          className="shrink-0 rounded-md border border-border p-2 text-foreground md:hidden"
        >
          {abierto ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      {abierto && (
        <ul className="border-t border-border bg-background px-5 py-3 text-sm md:hidden">
          {secciones.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setAbierto(false)}
                className="block py-2 text-muted-foreground transition-colors hover:text-teal"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function Titulo({
  children,
  kicker,
  centered = false,
}: {
  children: string;
  kicker: string;
  centered?: boolean;
}) {
  return (
    <div className={cn("mb-12", centered && "text-center")}>
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">{kicker}</p>
      <h2 className="font-display text-3xl font-bold sm:text-4xl">{children}</h2>
      <div
        className={cn(
          "mt-4 h-px w-24 bg-linear-to-r from-gold to-teal",
          centered && "mx-auto"
        )}
      />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SplashScreen />
      <Nav />

      <main>
        <section
          id="inicio"
          className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 pb-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-32 size-[34rem] rounded-full opacity-20 blur-3xl"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div className="mx-auto max-w-6xl animate-rise text-center">
            <img
              src={iaBalanza}
              alt="Ilustración de una mano robótica de IA sosteniendo una balanza de la justicia con detalles de circuitos"
              width={1024}
              height={1024}
              className="mx-auto mb-6 h-44 w-auto opacity-90 sm:h-56"
            />
            <h1 className="font-script text-5xl font-bold italic leading-[1.05] text-gold-gradient sm:text-7xl lg:text-8xl">
              Noelia Orsini
            </h1>
            <p className="mt-6 font-display text-lg text-teal sm:text-2xl">
              Desarrolladora Back-End | Abogada | Consultora Psicológica
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Human-in-the-Loop · IA responsable
            </p>
            <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Uniendo la seguridad jurídica, la arquitectura de software y la comprensión de los
              procesos humanos para impulsar la transformación digital.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href="#proyectos" className="btn-gold">
                Ver proyectos
              </a>
              <a href="#certificaciones" className="btn-gold">
                Certificaciones
              </a>
              <a href="#contacto" className="btn-gold">
                Conectemos
              </a>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="border-t border-border/60 px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <Titulo kicker="Perfil híbrido">Sobre mí</Titulo>
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div className="mx-auto max-w-3xl space-y-5 px-2 text-center text-base leading-relaxed text-muted-foreground sm:px-4 lg:px-8">
                <p>
                  Soy desarrolladora Back-End con formación en <strong className="text-foreground">JavaScript, Python, Java y C#</strong>,
                  con experiencia en aplicaciones educativas, análisis de datos y automatizaciones
                  con <strong className="text-foreground">n8n</strong> y Python. Diseño APIs REST,
                  lógica de negocio y modelos de datos sobre MySQL, y trabajo con arquitecturas RAG y
                  orquestación de agentes con LangChain y LangGraph.
                </p>
                <p>
                  Durante más de 20 años construí una sólida{" "}
                  <strong className="text-foreground">trayectoria como abogada</strong>{" "}
                  (UBA, especialización en Derecho Empresarial), asesorando a empresas y particulares
                  en análisis jurídico, gestión de riesgos, privacidad y protección de datos. Mi
                  formación como <strong className="text-foreground">Consultora Psicológica (Counselor)</strong>{" "}
                  suma escucha activa, comunicación asertiva y comprensión real de los procesos
                  humanos que atraviesa toda transformación digital.
                </p>
                <p>
                  Esa combinación define mi forma de construir software: sistemas donde la IA acelera
                  el trabajo pero la decisión final queda bajo{" "}
                  <strong className="text-teal">supervisión profesional (Human-in-the-Loop)</strong>.
                  Automatizo lo repetitivo, documento las fuentes, mitigo sesgos y dejo siempre un
                  punto de validación humana antes de que una salida se convierta en una decisión.
                </p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {[
                    { k: "+20", v: "años de ejercicio profesional como abogada" },
                    { k: "4", v: "lenguajes: Java, Python, C# y JavaScript" },
                    { k: "80%", v: "de reducción del análisis legal preliminar con IA supervisada" },
                    { k: "26+", v: "proyectos publicados en GitHub" },
                  ].map((i) => (
                  <li key={i.k} className="card-elegant p-6">
                    <p className="font-display text-3xl font-bold text-gradient">{i.k}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{i.v}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="proyectos" className="border-t border-border/60 px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <Titulo kicker="Portafolio">Proyectos destacados</Titulo>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {proyectos.map((p) => (
                <article key={p.titulo} className="card-elegant flex flex-col p-6">
                  <h3 className="font-display text-lg font-semibold leading-snug">{p.titulo}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.techs.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-teal/40 bg-teal/10 px-3 py-1 text-xs text-teal"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gold">
                        El problema
                      </p>
                      <p>{p.problema}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gold">
                        La solución
                      </p>
                      <p>{p.solucion}</p>
                    </div>
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-teal hover:text-teal"
                  >
                    Ver repositorios <ArrowUpRight className="size-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="habilidades" className="border-t border-border/60 px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <Titulo kicker="Capacidades">Habilidades</Titulo>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="mb-5 font-display text-xl font-semibold text-gold">Hard Skills</h3>
                <ul className="flex flex-wrap gap-2.5">
                  {hardSkills.map((s) => (
                    <li
                      key={s}
                      className="rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-gold hover:text-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-5 font-display text-xl font-semibold text-teal">Soft Skills</h3>
                <ul className="flex flex-wrap gap-2.5">
                  {softSkills.map((s) => (
                    <li
                      key={s}
                      className="rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-teal hover:text-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 card-elegant p-6 text-sm leading-relaxed text-muted-foreground">
                  Idiomas: <span className="text-foreground">Inglés intermedio</span>,{" "}
                  <span className="text-foreground">Italiano intermedio (B1)</span> y{" "}
                  <span className="text-foreground">Portugués básico</span>.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="certificaciones" className="border-t border-border/60 px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <Titulo kicker="Formación continua">Certificaciones</Titulo>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {certificaciones.map((c) => (
                <article key={c.titulo} className="card-elegant p-6">
                  <p className="text-xs uppercase tracking-widest text-teal">{c.entidad}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold">{c.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.detalle}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="border-t border-border/60 px-5 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Conectemos <span className="text-gradient">profesionalmente</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Si buscás un perfil que combine desarrollo back-end, criterio jurídico y una mirada
              humana sobre la tecnología, me encantará conversar sobre nuevos desafíos y
              colaboraciones.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Linkedin className="size-4" /> LinkedIn
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Github className="size-4" /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Noelia Orsini — Portafolio profesional</p>
          <p>Desarrolladora Back-End | Abogada | Consultora Psicológica</p>
        </div>
      </footer>
    </div>
  );
}

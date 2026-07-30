export const proyectos = [
  {
    titulo: "ConRed — Agente de Triage Inteligente",
    techs: ["Python", "LangChain", "LangGraph", "RAG", "Tavily", "Gradio", "Render"],
    problema:
      "Las víctimas de ciberdelitos y ataques informáticos no saben qué pasos urgentes seguir ni cómo priorizar la respuesta ante un incidente.",
    solucion:
      "Agente autónomo que orquesta flujos complejos con LangChain y LangGraph, integra búsqueda en tiempo real con Tavily y ofrece una interfaz interactiva en Gradio, desplegada en Render y Railway para asegurar disponibilidad y escalabilidad.",
    link: "https://github.com/NoeliaOrsini/conred-agente-triage",
  },
  {
    titulo: "Agente de Compliance Legal — Auditoría de TyC (Letra Chica)",
    techs: ["n8n", "Gemini", "SerpApi", "Gmail", "GDPR"],
    problema:
      "Del lado del usuario, casi nadie lee los Términos y Condiciones: se hace clic en \"Aceptar\" sin dimensionar qué datos se ceden. Del lado de la empresa, revisar esos textos manualmente frente a la Ley de Protección de Datos Personales y el GDPR es lento y la expone a sanciones y riesgos legales.",
    solucion:
      "Flujo orquestado en n8n con IA que detecta cláusulas abusivas y envía informes automáticos por email para validación humana. Un esquema Human-in-the-Loop que reduce un 80% el tiempo de análisis preliminar sin perder la supervisión profesional.",
    link: "https://github.com/NoeliaOrsini/ai-terms-privacy-analyzer-n8n",
  },
  {
    titulo: 'Asistente "Nova" — Arquitectura RAG para Recursos Humanos',
    techs: ["Python", "RAG", "Human-in-the-Loop", "PDF", "SerApi"],
    problema:
      "La elaboración de informes de RR.HH. cruzando datos internos (sueldos, desempeño, licencias) con normativas legales es un proceso manual y lento, lo que dificulta la trazabilidad y el control seguro de la información.",
    solucion:
      "Asistente RAG que analiza datos internos anonimizados con ID (evalúa sueldos y sus variaciones, resume desempeño por sector, identifica perfiles destacados y calcula vacaciones pendientes) y utiliza búsquedas web (SerApi) para legislación y jurisprudencia. Determina automáticamente la fuente, redacta el informe para revisión humana (Human-in-the-Loop) y, tras su aprobación, exporta el PDF con total trazabilidad, reduciendo el tiempo de elaboración de estos informes en un 80%.",

    link: "https://github.com/NoeliaOrsini/nova-agente-rag-human-in-the-loop",
  },
  {
    titulo: "JurisMind — Investigador jurídico de IA",
    techs: ["Python", "LangGraph", "Tavily", "arXiv", "Gradio", "Multiagente"],
    problema:
      "La investigación jurídica y ética asistida por IA requiere trazabilidad de fuentes y control de sesgos que un chatbot genérico no ofrece.",
    solucion:
      "Arquitectura multiagente basada en grafos que orquesta flujos legales complejos, gestiona estados persistentes y mitiga sesgos, combinando fuentes jurídicas (Tavily) y científicas (arXiv) en una interfaz Gradio. El sistema genera un informe consolidado con formato profesional que identifica las fuentes consultadas y la herramienta responsable de cada hallazgo, facilitando la transparencia y la explicabilidad de las auditorías éticas y regulatorias.",

    link: "https://github.com/NoeliaOrsini/jurisMind_AI_MultiAgente",
  },
  {
    titulo: "Edutech Buddy — Bot de seguimiento escolar",
    techs: ["n8n", "MySQL", "Telegram", "Automatización"],
    problema:
      "Las familias pierden tiempo persiguiendo información dispersa sobre ausencias, notas, informes pedagógicos y reglamentos escolares.",
    solucion:
      "Bot de Telegram disponible 24/7 conectado a MySQL mediante n8n, que centraliza el seguimiento escolar y optimiza el tiempo dedicado a la gestión diaria.",
    link: "https://github.com/NoeliaOrsini/eduTech-agente-ia",
  },
  {
    titulo: "Proyecto SynthData — Análisis de datos",
    techs: [
      "Python",
      "Pandas",
      "NumPy",
      "Plotly",
      "Matplotlib",
      "Seaborn",
      "Google Colab / Jupyter Notebook",
    ],
    problema:
      "Los datos crudos de e-commerce llegan incompletos e inconsistentes, impidiendo decisiones de negocio confiables.",
    solucion:
      "Enfoque analítico sustentado en Python que limpia, prepara e integra los datos para: evaluar la consistencia de las operaciones, identificar patrones estacionales, auditar la correlación estadística entre variables y facilitar decisiones ejecutivas mediante visualización interactiva.",
    link: "https://github.com/NoeliaOrsini/synthdata-data-analytics",
  },
  {
    titulo: "Sistema de Control de Stock",
    techs: ["Python", "Lógica de negocio", "Gestión de datos"],
    problema:
      "La gestión manual de inventarios en comercios pequeños provoca faltantes, sobrestock y pérdida de trazabilidad.",
    solucion:
      "Aplicación en Python para el alta, baja, actualización y consulta de productos, con lógica de negocio que mantiene el inventario consistente.",
    link: "https://github.com/NoeliaOrsini/proyecto--inventario-de-tienda",
  },
  {
    titulo: "Aplicaciones Interactivas (JavaScript / HTML / CSS)",
    techs: ["JavaScript", "HTML", "CSS", "Web Speech", "PDF"],
    problema:
      "Los recursos educativos tradicionales resultan poco atractivos y difíciles de personalizar para cada estudiante.",
    solucion:
      'Conjunto de aplicaciones web interactivas: generador de cuentos "Tu cuento, tu final" con selección de personajes, síntesis de voz y exportación a PDF, quiz de inglés y app de tablas de multiplicar.',
    link: "https://github.com/NoeliaOrsini",
  },
  {
    titulo: "Foro Hub — API REST para gestión de tópicos",
    techs: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "Postman"],
    problema:
      "Un foro necesita exponer sus tópicos mediante una API confiable, evitando accesos no autorizados a la información.",
    solucion:
      "API REST con operaciones CRUD completas sobre MySQL, seguridad y autenticación mediante Spring Security y JWT, validada con Postman.",
    link: "https://github.com/NoeliaOrsini/foro-hub",
  },
];

export const hardSkills = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "APIs REST",
  "Lógica de negocio",
  "Manejo de datos",
  "MySQL",
  "SQL",
  "Google Sheets",
  "Looker Studio",
  "Google Colab",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Postman",
  "n8n",
  "IA aplicada y uso responsable",
  "Gestión de fuentes y privacidad",
  "Oracle Cloud Infrastructure (fundamentos)",
];

export const softSkills = [
  "Comunicación efectiva",
  "Escucha activa",
  "Resolución de conflictos",
  "Negociación",
  "Trabajo colaborativo remoto",
  "Pensamiento crítico",
  "Toma de decisiones",
  "Aprendizaje continuo",
  "Creatividad en la resolución de problemas",
];

export const certificaciones = [
  {
    entidad: "Oracle University",
    titulo: "OCI Foundations Associate",
    detalle: "Certificación en fundamentos de Oracle Cloud Infrastructure (julio 2025).",
  },
  {
    entidad: "Oracle University",
    titulo: "OCI AI Foundations Associate",
    detalle: "Certificación en fundamentos de Inteligencia Artificial en OCI (agosto 2025).",
  },
  {
    entidad: "Oracle University",
    titulo: "Fusion AI Agent Studio",
    detalle: "Diseño y despliegue de agentes de IA en el ecosistema Oracle (septiembre 2025).",
  },
  {
    entidad: "Google Skills",
    titulo: "Generative AI Leader",
    detalle:
      "Badge de Google Cloud | Capacita+ en liderazgo de IA generativa (diciembre 2025), junto a otros badges del perfil Google Skills.",
  },
  {
    entidad: "Oracle Next Education (ONE) — Alura Latam",
    titulo: "Back-End Developer Jr — Graduada G7",
    detalle: "Programa ONE Generación 7, especialización Back-End (jun 2024 - ago 2025).",
  },
  {
    entidad: "Formación complementaria",
    titulo: "BI, Python y Data",
    detalle:
      "Santander Open Academy (Power BI, Python), Talento Tech (Business Intelligence, Unity 2D, Analista de datos) y Desafío Latam (English for Developers).",
  },
];

export const LINKEDIN_URL = "https://www.linkedin.com/in/noelia-orsini/";
export const GITHUB_URL = "https://github.com/NoeliaOrsini";
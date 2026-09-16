export const SITE = {
  name: "Galeano & Camusso",
  tagline: "Estudio Contable",
  url: "https://www.galeanocamusso.com.ar",
  locale: "es-AR",
  country: "AR",
  address: "Atención online para todo el país · Cita presencial a coordinar",
  description:
    "Estudio Contable Galeano & Camusso, Contadoras Públicas en Argentina. Asesoramiento contable e impositivo, liquidación de impuestos y sueldos, contabilidad, auditoría y outsourcing para PyMEs, empresas y profesionales de todo el país.",
  keywords: [
    "estudio contable",
    "contadoras públicas",
    "auditoría",
    "asesoramiento impositivo",
    "liquidación de sueldos",
    "liquidación de impuestos",
    "outsourcing contable",
    "PyMEs",
    "Argentina",
  ],
};



export const CONTACT = {
  whatsappNumber: "5491155917052",
  whatsappDisplay: "+54 9 11 5591-7052",
  whatsappDefaultMessage:
    "Hola 👋 vengo del sitio de Galeano & Camusso. Quería consultar por un presupuesto.",
  contactEmail: "info@gcestudio.com.ar",
  schedule: "Lunes a viernes · 9 a 18 hs",
  instagram: "https://instagram.com/galeanoCamusso",
  linkedin: "https://www.linkedin.com/company/galeano-Camusso",
};

export const FORM = {
  endpoint: "https://script.google.com/macros/s/AKfycbzUFluEfymkxzT_4ZdIatdO1P-YjmfbERIBSFzegzPgKpldeNVpCAfa_Pk-ekGdrWyy/exec",
  subject: "Nuevo mensaje desde el sitio web",
};

export function whatsappLink(message: string = CONTACT.whatsappDefaultMessage): string {
  let n = CONTACT.whatsappNumber.replace(/[^\d]/g, "");
  if (n.startsWith("54") && !/^549\d/.test(n)) {
    n = "54" + "9" + n.slice(2);
  }
  return `https://wa.me/${n}?text=${encodeURIComponent(message)}`;
}

export const TEAM = [
  {
    name: "Dra. Jennifer Galeano",
    role: "Contadora Pública",
    initials: "JG",
    credential: "CPCECABA · Tº 401, Fº 122",
    bio: "Más de 12 años de experiencia en asesoramiento contable, impositivo y de gestión para PyMEs y emprendedores. Especialista en auditorías, cierres de ejercicio y planificación fiscal.",
    focus: ["Auditorías", "Impuestos", "Certificación de ingresos"],
    linkedin: "https://ar.linkedin.com/in/jennifer-daiana-galeano-b6a79b136",
  },
  {
    name: "Dra. Carla Camusso",
    role: "Contadora Pública",
    initials: "CC",
    credential: "CPCECABA · Tº 402, Fº 87",
    bio: "Especialista en liquidación de sueldos, asesoramiento impositivo y outsourcing contable. Gestión ordenada, documentación al día y reportes claros para facilitar la toma de decisiones.",
    focus: ["Liquidación de sueldos", "Impuestos", "Certificación de ingresos"],
    linkedin: "http://ar.linkedin.com/in/carla-camusso-b610572a9",
  },
];

export const SERVICES = [
  {
    n: "01",
    title: "Asesoramiento Contable",
    desc: "Acompañamiento contable integral: registración al día, cierres de ejercicio y balances claros para decidir con información real.",
    items: ["Contabilidad general", "Cierre y balance anual", "Asesoramiento continuo"],
  },
  {
    n: "02",
    title: "Auditoría",
    desc: "Evaluamos el estado real de tu empresa: auditorías operativas, control de recursos y análisis de balances trimestrales.",
    items: ["Auditoría operativa y contable", "Análisis de balances", "Optimización financiera"],
  },
  {
    n: "03",
    title: "Asesoramiento Impositivo",
    desc: "Liquidación de impuestos nacionales y provinciales con planificación fiscal para PyMEs, monotributistas y responsables inscriptos.",
    items: ["Impuestos nacionales", "Impuestos provinciales", "Planificación fiscal"],
  },
  {
    n: "04",
    title: "Liquidación de Sueldos",
    desc: "Servicio completo de nómina: liquidaciones, cargas sociales, certificados y cumplimiento de la normativa laboral vigente.",
    items: ["Recibos y libro de sueldos", "Cargas sociales y ART", "Proyecciones y certificados"],
  },
  {
    n: "05",
    title: "Outsourcing",
    desc: "Tercerización contable y administrativa. Documentación al día, registros impecables y tu equipo enfocado en el negocio.",
    items: ["Procesos administrativos", "Registros contables", "Reportes de gestión"],
  },
];

export const PROCESS = [
  {
    n: "1",
    title: "Consulta inicial",
    desc: "Contanos tu caso por WhatsApp o formulario. Primera reunión sin cargo para entender tu situación contable e impositiva.",
  },
  {
    n: "2",
    title: "Diagnóstico integral",
    desc: "Revisamos documentación, riesgos y oportunidades. Te presentamos plan de acción y presupuesto cerrado.",
  },
  {
    n: "3",
    title: "Ejecución",
    desc: "Implementamos soluciones: trámites, presentaciones, auditorías o liquidaciones con seguimiento semanal.",
  },
  {
    n: "4",
    title: "Acompañamiento",
    desc: "Soporte continuo, alertas de vencimientos y reuniones periódicas. Un equipo que te avisa antes de que venza.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Necesitábamos ordenar la liquidación de sueldos de 18 empleados y la auditoría anual. Galeano & Camusso lo resolvió en un mes, con todo presentado y sin intimaciones.",
    name: "Pablo A.",
    role: "Gerente · Pyme logística, CABA",
  },
  {
    quote:
      "La liquidación de impuestos y sueldos siempre a tiempo, con informes claros para decidir. Se nota el acompañamiento profesional en cada etapa.",
    name: "Dra. Florencia V.",
    role: "Monotributista · Servicios profesionales, La Plata",
  },
  {
    quote:
      "Tercerizamos la contabilidad completa. Hoy tenemos balances trimestrales, impuestos al día y tiempo real para dedicarle a nuestros clientes.",
    name: "Mariano R.",
    role: "Socio · Consultora IT, Córdoba",
  },
];

export const FAQS = [
  {
    q: "¿Qué servicios brinda Galeano & Camusso?",
    a: "Asesoramiento integral: liquidación de impuestos nacionales y provinciales, liquidación de sueldos, contabilidad, auditoría y outsourcing para PyMEs, monotributistas y responsables inscriptos.",
  },
  {
    q: "¿Cómo son las reuniones?",
    a: "Atención 100% online para todo el país. Cita presencial a coordinar según necesidad. Coordinamos por videollamada con el socio que corresponda en menos de 24 h.",
  },
  {
    q: "¿Trabajan con empresas de todo el país?",
    a: "Sí. Atención online para todo el país con presentaciones digitales, poderes y seguimiento por WhatsApp. Cita presencial a coordinar.",
  },
  {
    q: "¿Cómo afronto una inspección de AFIP / ARCA o AGIP?",
    a: "Hacemos control preventivo de saldos, domicilios y obligaciones. Si ya hay inspección en curso, organizamos documentación, fijamos estrategia y te representamos ante el fisco.",
  },
  {
    q: "¿Qué incluye la liquidación de sueldos?",
    a: "Recibos, libro de sueldos, SAC, cargas sociales, ART, certificados y proyecciones. Cumplimiento laboral y confidencialidad garantizada. Especialistas actualizados en cada convenio.",
  },
  {
    q: "¿Cuánto cuesta contratar el estudio?",
    a: "Depende del alcance. La primera consulta es sin cargo: analizamos tu caso y te enviamos presupuesto cerrado sin letra chica ni costos ocultos.",
  },
];

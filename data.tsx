import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Crop,
  Pencil,
  Computer,
  Mail,
  Github,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "http://www.linkedin.com/in/rodriguez-montero-mateo-david-09051427b",
  },
  {
    id: 2,
    logo: <Mail size={30} strokeWidth={1} />,
    src: "mailto:mdavidmontero6@gmail.com?subject=Consulta&body=Hola,%20estoy%20interesado%20en%20tus%20servicios.",
  },

  {
    id: 3,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/mdavidmontero",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  // {
  //   id: 5,
  //   title: "Home",
  //   icon: <Speech size={25} color="#fff" strokeWidth={1} />,
  //   link: "/testimonials",
  // },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Ingeniera de Sistemas",
    subtitle: "Universidad Popular del Cesar.",
    description: "Enfoque en el desarrollo de software y tecnología.",
    date: "2020 - 2025",
  },
  {
    id: 2,
    title: "Construcción de Bases de Datos con MySQL",
    subtitle: "Servicio Nacional de Aprendizaje Sena",
    description: "Modelado, implementación, buenas practicas",
    date: "Sept 2023",
  },
  {
    id: 3,
    title: "Manejo de Bases de Datos no relacionales",
    subtitle: "Servicio Nacional de Aprendizaje Sena",
    description:
      "Manejo de bases de datos no relaciones, modelado, implementación y desarrollo de aplicaciones",
    date: "Sept 2023",
  },
  {
    id: 4,
    title: "Despliegue de Aplicaciones con Docker",
    subtitle: "Servicio Nacional de Aprendizaje Sena",
    description: "Desarrollo e implementación de aplicaciones con Docker",
    date: "2023",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 1,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  // {
  //   id: 1,
  //   endCounter: 10,
  //   text: "Clientes satisfechos",
  //   lineRight: true,
  //   lineRightMobile: false,
  // },
  {
    id: 2,
    endCounter: 20,
    text: "Proyectos finalizados",
    lineRight: true,
    lineRightMobile: true,
  },
  // {
  //   id: 3,
  //   endCounter: 30,
  //   text: "Premios ganadores",
  //   lineRight: false,
  //   lineRightMobile: false,
  // },
];

export const serviceData = [
  {
    icon: <Crop />,
    title: "Branding",
    description:
      "Desarrollo de software de acuerdo a los requerimientos de tu negocio",
  },
  {
    icon: <Pencil />,
    title: "Diseño web",
    description:
      "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo web",
    description:
      "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Web Pro",
    image: "/image-1.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 2,
    title: "Desarrollo Web Ágil",
    image: "/image-2.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 3,
    title: "Estrategias Web",
    image: "/image-3.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 4,
    title: "Ideas Creativas",
    image: "/image-4.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 5,
    title: "Webs Impactantes",
    image: "/image-5.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 6,
    title: "Web Dinámica",
    image: "/image-6.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 7,
    title: "Dark Web ",
    image: "/image-7.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 8,
    title: "E-commerce web",
    image: "/image-8.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/profile1.png",
  },
  {
    id: 2,
    name: "Juan Pérez",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/profile2.png",
  },
  {
    id: 3,
    name: "María García",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/profile3.png",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/profile4.png",
  },
  {
    id: 5,
    name: "Carlos Sánchez",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/profile5.png",
  },
  {
    id: 6,
    name: "Antonio Martínez",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/profile6.png",
  },
];

export interface PortfolioConfig {
  // Personal Information
  personal: {
    name: string;
    title: string;
    subtitle: string;
    greeting: string;
    profilePhoto: string;
    cvUrl?: string;
  };

  // Contact Information
  contact: {
    email: string;
    phone: string;
    location: string;
    social: {
      github: string;
      linkedin: string;
      twitter?: string;
      instagram?: string;
    };
  };

  // About Section
  about: {
    description: string;
    experience: string;
    highlights: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };

  // Projects
  projects: Array<{
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    demo: string;
  }>;

  // Skills
  skills: {
    categories: Array<{
      title: string;
      skills: Array<{
        name: string;
        level: number;
      }>;
    }>;
    technologies: string[];
  };

  // Footer
  footer: {
    copyright: string;
    builtWith: string;
  };

  // Meta Information
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// Language-specific content
const content = {
  en: {
    personal: {
      name: "Julian Gacha",
      title: "Senior, Deal Advisory",
      subtitle: "Accounting and corporate finance professional with 8+ years of experience, including 5+ years in M&A—supporting buyers and sellers as a senior expert in due diligence, valuation, restructuring, consulting, and project evaluation.",
      greeting: "Hello, I'm",
      profilePhoto: "/profile-photo.png",
      cvUrl: "/path-to-cv.pdf"
    },
    about: {
      description: "I am a Senior professional in Deal Advisory with more than eight years of experience in accounting and financial matters, and five years focused on M&A and corporate finance. I work with both buyers and sellers, bringing a structured, analytical approach to complex transactions and strategic decisions.",
      experience: "My practice spans financial due diligence, valuation, restructuring, advisory mandates, and project appraisal—helping stakeholders understand risks, quality of earnings, and value drivers so they can negotiate and execute with confidence.",
      highlights: [
        {
          icon: "Briefcase",
          title: "8+ Years",
          description: "Professional experience in accounting and financial advisory"
        },
        {
          icon: "Handshake",
          title: "5+ Years M&A",
          description: "Corporate finance and M&A for buyers and sellers"
        },
        {
          icon: "FileSearch",
          title: "Due diligence & valuation",
          description: "Deep dives on financial, tax, and operational matters linked to deals"
        },
        {
          icon: "Scale",
          title: "Restructuring & projects",
          description: "Restructuring, consulting, and evaluation of investment projects"
        }
      ]
    },
    projects: [
      {
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform built with React, TypeScript, and Stripe integration. Features include product catalog, shopping cart, payment processing, and admin dashboard.",
        image: "/project-ecommerce.jpg",
        technologies: ["React", "TypeScript", "Node.js", "Stripe", "MongoDB"],
        github: "https://github.com/joanesmith/ecommerce",
        demo: "https://ecommerce-demo.vercel.app"
      },
      {
        title: "Project Management Dashboard",
        description: "A comprehensive project management tool with task tracking, team collaboration, and real-time updates. Built with modern React patterns and state management.",
        image: "/project-dashboard.jpg",
        technologies: ["React", "Redux", "Chart.js", "Socket.io", "Express"],
        github: "https://github.com/joanesmith/pm-dashboard",
        demo: "https://pm-dashboard.vercel.app"
      },
      {
        title: "Mobile Banking App",
        description: "A secure mobile banking application with biometric authentication, transaction history, and financial insights. Optimized for performance and security.",
        image: "/project-mobile.jpg",
        technologies: ["React Native", "TypeScript", "Firebase", "Biometrics", "Chart.js"],
        github: "https://github.com/joanesmith/mobile-banking",
        demo: "https://banking-app-demo.vercel.app"
      }
    ],
    skills: {
      categories: [
        {
          title: "Financial & transaction advisory",
          skills: [
            { name: "M&A and corporate finance", level: 92 },
            { name: "Financial due diligence", level: 93 },
            { name: "Valuation (DCF, multiples, scenarios)", level: 90 },
            { name: "Financial modeling & forecasting", level: 91 },
            { name: "Restructuring & project evaluation", level: 88 }
          ]
        },
        {
          title: "Python, ML & deep learning",
          skills: [
            { name: "Python", level: 88 },
            { name: "Machine learning", level: 82 },
            { name: "Deep learning", level: 78 }
          ]
        },
        {
          title: "Data & productivity",
          skills: [
            { name: "SQL", level: 86 },
            { name: "Advanced Excel", level: 94 }
          ]
        }
      ],
      technologies: [
        "Python", "Machine learning", "Deep learning", "SQL", "Advanced Excel",
        "M&A", "Due diligence", "Valuation", "Financial modeling", "IFRS / GAAP"
      ]
    },
    meta: {
      title: "Julian Gacha - Senior Deal Advisory",
      description: "Senior Deal Advisory with 8+ years in accounting and finance and 5+ years in M&A and corporate finance—due diligence, valuation, restructuring, consulting, and project evaluation for buyers and sellers.",
      keywords: ["deal advisory", "M&A", "due diligence", "valuation", "corporate finance", "restructuring", "financial consulting", "portfolio"]
    }
  },
  es: {
    personal: {
      name: "Julian Gacha",
      title: "Senior, Deal Advisory",
      subtitle: "Profesional en contabilidad y finanzas corporativas con más de 8 años de experiencia, incluyendo 5 años en M&A—acompañando a compradores y vendedores como consultor senior en due diligence, valoración, reestructuración, consultoría y evaluación de proyectos.",
      greeting: "Hola, soy",
      profilePhoto: "/profile-photo.png",
      cvUrl: "/path-to-cv.pdf"
    },
    about: {
      description: "Soy Senior en Deal Advisory con más de ocho años de experiencia profesional en temas contables y financieros, y cinco años enfocados en M&A y finanzas corporativas. Apoyo tanto a compradores como a vendedores, actuando como consultor senior experto en procesos de transacción y análisis financiero.",
      experience: "Mi trabajo cubre due diligence, valoración, reestructuración, consultoría y evaluación de proyectos—ayudando a las partes a entender riesgos, calidad de resultados y drivers de valor para decidir y ejecutar con mayor certeza.",
      highlights: [
        {
          icon: "Briefcase",
          title: "8+ Años",
          description: "Experiencia profesional en contabilidad y asesoría financiera"
        },
        {
          icon: "Handshake",
          title: "5+ Años M&A",
          description: "Finanzas corporativas y M&A para compradores y vendedores"
        },
        {
          icon: "FileSearch",
          title: "Due diligence y valoración",
          description: "Análisis profundo de aspectos financieros, fiscales y operativos ligados a operaciones"
        },
        {
          icon: "Scale",
          title: "Reestructuración y proyectos",
          description: "Reestructuración, consultoría y evaluación de proyectos de inversión"
        }
      ]
    },
    projects: [
      {
        title: "Plataforma de E-Commerce",
        description: "Una plataforma de e-commerce completa construida con React, TypeScript e integración de Stripe. Incluye catálogo de productos, carrito de compras, procesamiento de pagos y panel de administración.",
        image: "/project-ecommerce.jpg",
        technologies: ["React", "TypeScript", "Node.js", "Stripe", "MongoDB"],
        github: "https://github.com/joanesmith/ecommerce",
        demo: "https://ecommerce-demo.vercel.app"
      },
      {
        title: "Dashboard de Gestión de Proyectos",
        description: "Una herramienta completa de gestión de proyectos con seguimiento de tareas, colaboración en equipo y actualizaciones en tiempo real. Construida con patrones modernos de React y gestión de estado.",
        image: "/project-dashboard.jpg",
        technologies: ["React", "Redux", "Chart.js", "Socket.io", "Express"],
        github: "https://github.com/joanesmith/pm-dashboard",
        demo: "https://pm-dashboard.vercel.app"
      },
      {
        title: "Aplicación de Banca Móvil",
        description: "Una aplicación de banca móvil segura con autenticación biométrica, historial de transacciones e insights financieros. Optimizada para rendimiento y seguridad.",
        image: "/project-mobile.jpg",
        technologies: ["React Native", "TypeScript", "Firebase", "Biometrics", "Chart.js"],
        github: "https://github.com/joanesmith/mobile-banking",
        demo: "https://banking-app-demo.vercel.app"
      }
    ],
    skills: {
      categories: [
        {
          title: "Asesoría financiera y transacciones",
          skills: [
            { name: "M&A y finanzas corporativas", level: 92 },
            { name: "Due diligence financiero", level: 93 },
            { name: "Valoración (DCF, múltiplos, escenarios)", level: 90 },
            { name: "Modelamiento financiero y proyecciones", level: 91 },
            { name: "Reestructuración y evaluación de proyectos", level: 88 }
          ]
        },
        {
          title: "Python, ML y deep learning",
          skills: [
            { name: "Python", level: 88 },
            { name: "Machine learning", level: 82 },
            { name: "Deep learning", level: 78 }
          ]
        },
        {
          title: "Datos y productividad",
          skills: [
            { name: "SQL", level: 86 },
            { name: "Excel avanzado", level: 94 }
          ]
        }
      ],
      technologies: [
        "Python", "Machine learning", "Deep learning", "SQL", "Excel avanzado",
        "M&A", "Due diligence", "Valoración", "Modelamiento financiero", "IFRS / GAAP"
      ]
    },
    meta: {
      title: "Julian Gacha - Senior Deal Advisory",
      description: "Senior Deal Advisory con más de 8 años en contabilidad y finanzas y 5 años en M&A y finanzas corporativas—due diligence, valoración, reestructuración, consultoría y evaluación de proyectos para compradores y vendedores.",
      keywords: ["deal advisory", "M&A", "due diligence", "valoración", "finanzas corporativas", "reestructuración", "consultoría financiera", "portfolio"]
    }
  }
};

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Julian Gacha",
    title: "Senior, Deal Advisory",
    subtitle: "Accounting and corporate finance professional with 8+ years of experience, including 5+ years in M&A—supporting buyers and sellers as a senior expert in due diligence, valuation, restructuring, consulting, and project evaluation.",
    greeting: "Hello, I'm",
    profilePhoto: "/profile-photo.png",
    cvUrl: "/path-to-cv.pdf"
  },

  contact: {
    email: "julian.gacha2000@gmail.com",
    phone: "+57 (314 380 4780)",
    location: "Bogotá, Colombia",
    social: {
      github: "https://github.com/Julian-Gacha07",
      linkedin: "https://www.linkedin.com/in/julian-gacha-505507177/",
    }
  },

  about: {
    description: "I am a Senior professional in Deal Advisory with more than eight years of experience in accounting and financial matters, and five years focused on M&A and corporate finance. I work with both buyers and sellers, bringing a structured, analytical approach to complex transactions and strategic decisions.",
    experience: "My practice spans financial due diligence, valuation, restructuring, advisory mandates, and project appraisal—helping stakeholders understand risks, quality of earnings, and value drivers so they can negotiate and execute with confidence.",
    highlights: [
      {
        icon: "Briefcase",
        title: "8+ Years",
        description: "Professional experience in accounting and financial advisory"
      },
      {
        icon: "Handshake",
        title: "5+ Years M&A",
        description: "Corporate finance and M&A for buyers and sellers"
      },
      {
        icon: "FileSearch",
        title: "Due diligence & valuation",
        description: "Deep dives on financial, tax, and operational matters linked to deals"
      },
      {
        icon: "Scale",
        title: "Restructuring & projects",
        description: "Restructuring, consulting, and evaluation of investment projects"
      }
    ]
  },

  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React, TypeScript, and Stripe integration. Features include product catalog, shopping cart, payment processing, and admin dashboard.",
      image: "/project-ecommerce.jpg",
      technologies: ["React", "TypeScript", "Node.js", "Stripe", "MongoDB"],
      github: "https://github.com/joanesmith/ecommerce",
      demo: "https://ecommerce-demo.vercel.app"
    },
    {
      title: "Project Management Dashboard",
      description: "A comprehensive project management tool with task tracking, team collaboration, and real-time updates. Built with modern React patterns and state management.",
      image: "/project-dashboard.jpg",
      technologies: ["React", "Redux", "Chart.js", "Socket.io", "Express"],
      github: "https://github.com/joanesmith/pm-dashboard",
      demo: "https://pm-dashboard.vercel.app"
    },
    {
      title: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication, transaction history, and financial insights. Optimized for performance and security.",
      image: "/project-mobile.jpg",
      technologies: ["React Native", "TypeScript", "Firebase", "Biometrics", "Chart.js"],
      github: "https://github.com/joanesmith/mobile-banking",
      demo: "https://banking-app-demo.vercel.app"
    }
  ],

  skills: {
    categories: [
      {
        title: "Financial & transaction advisory",
        skills: [
          { name: "M&A and corporate finance", level: 92 },
          { name: "Financial due diligence", level: 93 },
          { name: "Valuation (DCF, multiples, scenarios)", level: 90 },
          { name: "Financial modeling & forecasting", level: 91 },
          { name: "Restructuring & project evaluation", level: 88 }
        ]
      },
      {
        title: "Python, ML & deep learning",
        skills: [
          { name: "Python", level: 88 },
          { name: "Machine learning", level: 82 },
          { name: "Deep learning", level: 78 }
        ]
      },
      {
        title: "Data & productivity",
        skills: [
          { name: "SQL", level: 86 },
          { name: "Advanced Excel", level: 94 }
        ]
      }
    ],
    technologies: [
      "Python", "Machine learning", "Deep learning", "SQL", "Advanced Excel",
      "M&A", "Due diligence", "Valuation", "Financial modeling", "IFRS / GAAP"
    ]
  },

  footer: {
    copyright: "All rights reserved.",
    builtWith: "Built with ❤️ using React & TypeScript"
  },

  meta: {
    title: "Julian Gacha - Senior Deal Advisory",
    description: "Senior Deal Advisory with 8+ years in accounting and finance and 5+ years in M&A and corporate finance—due diligence, valuation, restructuring, consulting, and project evaluation for buyers and sellers.",
    keywords: ["deal advisory", "M&A", "due diligence", "valuation", "corporate finance", "restructuring", "financial consulting", "portfolio"]
  }
};

// Export the content for use in components
export { content }; 
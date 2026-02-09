export interface Project {
  title: string;
  description: string;
  tech: string;
  github: string;
  demo?: string;
  date: string;
  img?: string;
}

export const projects: Project[] = [
   {
    title: "Whack That Troll !",
    description: "Deux joueurs rencontrent un troll en forêt et doivent le combattre, mais attention, le troll rendra les coups",
    tech: "HTML, CSS, JS",
    github: "https://github.com/aucherm/mon_portfolio",
    demo: "hhttps://aucherm.github.io/mon_portfolio/",
    date: "Octobre 2025",
    img: "/troll.png",
  },
  {
    title: "Portfolio v1",
    description: "Première version de mon portfolio professionnel, réalisé après un mois de formation",
    tech: "HTML, CSS",
    github: "https://github.com/aucherm/mon_portfolio",
    demo: "https://aucherm.github.io/mon_portfolio/",
    date: "Octobre 2025",
    img: "/portfolio_v1.png",
  },
    {
    title: "Quotation App",
    description: "Création d'un gestionnaire de citations",
    tech: "HTML, CSS, JS ",
    github: "https://github.com/aucherm/quotations-app",
    date: "Novembre 2025",
    img: "/quotation.png",
  },
   {
    title: "Quizdom",
    description: "Réalisation d'un quiz virtuel de 10 questions de culture générale",
    tech: "HTML, CSS, JS",
    github: "https://github.com/aucherm/quizdom",
    demo: "https://aucherm.github.io/quizdom/",
    date: "Novembre 2025",
    img: "/quizdom.png",
  },
       {
    title: "Station météo",
    description: "Réalisation d'une mini-station météo donnant la température actuelle dans une ville donnée",
    tech: "HTML, CSS, JS ",
    github: "https://github.com/aucherm/kata-mini-station-meteo",
    demo: "https://aucherm.github.io/kata-mini-station-meteo/",
    date: "Décembre 2025",
    img: "/station-meteo.png",
  },
   {
    title: "Dataviz",
    description: "Exploitation de données analytiques avec visualisation interactive des lieux de tournage sur Paris",
    tech: "React + vite, Tailwindcss, Typescript, Recharts ",
    github: "https://github.com/aucherm/projet-dataviz",
    demo: "https://projet-dataviz-nine.vercel.app/",
    date: "Décembre 2025",
    img: "/dataviz.png",
  },
 
    {
    title: "ASCII Art Pen",
    description: "Création d'une fonction retournant l'état d'un crayon en ASCII Art en fonction du temps passé en cours",
    tech: "React + vite, Tailwindcss, Typescript, Recharts ",
    github: "https://github.com/aucherm/Exercices/tree/main/kata%233",
    date: "Janvier 2026",
    img: "/ascii.png",
  },
     {
    title: "Adaopte",
    description: "Création d'une application web dédiée à l'adoption d'animaux abandonnés en se basant sur une maquette",
    tech: "React + vite, Tailwindcss, Typescript, SQL ",
    github: "https://github.com/aucherm/adaopte",
    demo: "https://adaopte-blue.vercel.app/",
    date: "Janvier 2026",
    img: "/adaopte.png",
  },

];
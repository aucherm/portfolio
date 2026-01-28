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
    title: "Bonjour Javascript !",
    description: "Affichage d'un message selon le nom entré",
    tech: "HTML, JS",
    github:
      "https://github.com/aucherm/Exercices/tree/main/exercices_individuels/bonjour_javascript",
    date: "Octobre 2025",
    img: "/bonjour_javascript.png",
  },
  {
    title: "Paw Models",
    description: "Production d'un affichage en flexbox",
    tech: "HTML, CSS",
    github: "https://github.com/aucherm/Exercices/tree/main/HTML_CSS/1",
    date: "Octobre 2025",
    img: "/paw_models.png",
  },
];
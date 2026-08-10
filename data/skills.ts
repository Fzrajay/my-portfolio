import {
  FaReact,
  FaLaravel,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiTypescript,
  SiJavascript,
  SiPhp,
} from "react-icons/si";

export const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
    ],
  },

  {
    category: "Backend",
    items: [
      {
        name: "PHP",
        icon: SiPhp,
      },
      {
        name: "Laravel",
        icon: FaLaravel,
      },
    ],
  },

  {
    category: "Database",
    items: [
      {
        name: "MySQL",
        icon: SiMysql,
      },
    ],
  },

  {
    category: "Tools",
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
      },
    ],
  },
];
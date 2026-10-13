export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  learned: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "webportfolio",
    title: "Webportfolio",
    summary: "My personal portfolio website built with Next.js and Tailwind CSS.",
    description: "You're currently viewing it! This project is my first attempt at building a visually appealing and responsive website. It showcases my skills, projects, and provides a way for visitors to contact me.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    learned: "All the tools I used to build this website, including Next.js, Tailwind CSS, and TypeScript were new to me so I learned a lot about them while building this project. I also learned about responsive design as well as dynamic and static routing.",
    github: "https://github.com/kirsnif/Webportfolio",
  },
  {
    slug: "attendance-tracker",
    title: "Attendance Tracker",
    summary: "A project built for my extensive learning report.",
    description: "The main purpose of this project was to learn how to build an application that takes user input, processes it, stores it in a local database and displays it using an Excel spreadsheet.",
    tech: ["Python", "SQLite", "Excel"],
    learned: "I learnt how to create a simple GUI using Python and Tkinter, how to store data in a local SQLite database, how to generate statistics from that data using Pandas and how to display that data in an Excel spreadsheet using OpenPyXL.",
    github: "https://github.com/kirsnif/AttendanceTracker",
  },
  {
    slug: "todo-app",
    title: "To-Do App",
    summary: ".NET project for tracking tasks.",
    description: "A single page application built using Blazor and C# for tracking tasks. It allows users to add, edit, delete and mark tasks as complete or in progress. I designed the UI using CSS and implemented the functionality using C# and Blazor. The application uses Dapper to interact with a MariaDB database that exists in a Docker container.",
    tech: ["Blazor", "C#", "Dapper", "MariaDB", "Docker"],
    learned: "I learnt how to build a single page application that uses Blazor and C#, how to interact with a database using Dapper and how to use Docker to run a database in a container.",
    github: "https://github.com/kirsnif/TodoApp",
  },
];
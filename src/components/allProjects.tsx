import type { Localized } from "@/i18n/localized";

export type Project = {
  slug: string;
  title: string;
  image?: string;
  summary: Localized;
  description: Localized;
  tech: string[];
  learned: Localized;
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "webportfolio",
    title: "Webportfolio",
    image: "/images/youHere.jpg",
    summary: { 
      en: "My personal portfolio website built with Next.js and Tailwind CSS.",
      de: "Meine persönliche Portfolio-Website, erstellt mit Next.js und Tailwind CSS." 
    },
    description: {
      en: "You're currently viewing it! This project is my first attempt at building a visually appealing and responsive website. It showcases my skills, projects, and provides a way for visitors to contact me.",
      de: "Du siehst es gerade! Dieses Projekt ist mein erster Versuch, eine anschauliche und responsive Website zu erstellen. Es präsentiert meine Fähigkeiten und Projekte und bietet Besuchern die Möglichkeit, mit mir in Kontakt zu treten."
    },
    tech: ["Next.js", "Tailwind", "TypeScript"],
    learned: {
      en: "All the tools I used to build this website, including Next.js, Tailwind CSS, and TypeScript were new to me so I learned a lot about them while building this project. I also learned about responsive design as well as static routing.",
      de: "Alle Tools, die ich zum Erstellen dieser Website verwendet habe, darunter Next.js, Tailwind CSS und TypeScript, waren für mich neu, sodass ich während der Arbeit an diesem Projekt viel darüber gelernt habe. Ausserdem habe ich mich mit responsivem Design sowie statischem Routing beschäftigt."
    },
    github: "https://github.com/kirsnif/Webportfolio",
  },
  {
    slug: "attendance-tracker",
    title: "Attendance Tracker",
    image: "/images/codeAT.png",
    summary: {
      en: "A project built for my extensive learning report.",
      de: "Ein Projekt, das ich für meinen grossen Lernbericht erstellt habe."
    },
    description: {
      en:"The main purpose of this project was to learn how to build an application that takes user input, processes it, stores it in a local database and displays it using an Excel spreadsheet. The code snippet I've used here shows how it handles days between user inputs. Unfortunatly, given the nature of the task, the documentation was the main focus and the app itself, though functional, isn't the most polished.",
      de: "Das Hauptziel dieses Projekts bestand darin, zu lernen, wie man eine Anwendung erstellt, die Benutzereingaben entgegennimmt, diese verarbeitet, in einer lokalen Datenbank speichert und mithilfe einer Excel-Tabelle anzeigt. Der hier verwendete Codeausschnitt zeigt, wie die Tage zwischen den Benutzereingaben verarbeitet werden. Leider stand aufgrund der Art der Aufgabe die Dokumentation im Vordergrund, und die App selbst ist, obwohl sie funktionsfähig ist, nicht besonders ausgefeilt."
    },
    tech: ["Python", "SQLite", "Excel"],
    learned: {
      en: "I learnt how to create a simple GUI using Python and Tkinter, how to store data in a local SQLite database, how to generate statistics from that data using Pandas and how to display that data in an Excel spreadsheet using OpenPyXL.",
      de: "Ich habe gelernt, wie man mit Python und Tkinter eine einfache grafische Benutzeroberfläche erstellt, wie man Daten in einer lokalen SQLite-Datenbank speichert, wie man mit Pandas Statistiken aus diesen Daten erstellt und wie man diese Daten mit OpenPyXL in einer Excel-Tabelle anzeigt."
    },
    github: "https://github.com/kirsnif/AttendanceTracker",
  },
  {
    slug: "todo-app",
    title: "To-Do App",
    image: "/images/TodoApp.png",
    summary: {
      en: ".NET project for tracking tasks.",
      de: ".NET-Projekt zur Auftragserfassung."
    },
    description: {
      en: "A single page application built using Blazor and C# for tracking tasks. It allows users to add, edit, delete and mark tasks as complete or in progress. I designed the UI using CSS and implemented the functionality using C# and Blazor. The application uses Dapper to interact with a MariaDB database that exists in a Docker container.",
      de: "Eine mit Blazor und C# erstellte Single-Page-Anwendung zur Verfolgung von Aufgaben. Sie ermöglicht es Benutzern, Aufgaben hinzuzufügen, zu bearbeiten, zu löschen und als erledigt oder in Bearbeitung zu markieren. Ich habe die Benutzeroberfläche mit CSS gestaltet und die Funktionalität mit C# und Blazor implementiert. Die Anwendung nutzt Dapper für die Kommunikation mit einer MariaDB-Datenbank, die sich in einem Docker-Container befindet."
    },
    tech: ["Blazor", "C#", "Dapper", "MariaDB", "Docker"],
    learned: {
      en: "I learnt how to build a single page application that uses Blazor and C#, how to interact with a database using Dapper and how to use Docker to run a database in a container.",
      de: "Ich habe gelernt, wie man eine Single-Page-Anwendung mit Blazor und C# erstellt, wie man mithilfe von Dapper mit einer Datenbank interagiert und wie man Docker einsetzt, um eine Datenbank in einem Container auszuführen"
    },
    github: "https://github.com/kirsnif/TodoApp",
  },
];
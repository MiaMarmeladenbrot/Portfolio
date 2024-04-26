// # IDs final vergeben und checken

const projects = [
  // Movie DB Fullstack
  {
    id: 0,
    title: "Fullstack Movie Database",
    skills: [
      {
        img: "/img/Logos/express.png",
        alt: "Expressjs",
      },
      {
        img: "/img/Logos/mongodb.png",
        alt: "mongodb",
      },
      {
        img: "/img/Logos/react.png",
        alt: "React",
      },
      {
        img: "/img/Logos/html5.png",
        alt: "HTML5",
      },
      {
        img: "/img/Logos/css3.png",
        alt: "CSS3",
      },
    ],
    image: "/img/Projects/moviedb/moviedb.jpg",
    //# site: "https://e-shop-hmaz.onrender.com/",
    //# repo: "https://github.com/MiaMarmeladenbrot/E-Shop",
    collaborators: [],
    purposes: [
      "Create database for movie and favorite movies data",
      "Show all movies from the database",
      "Save new movies in the database",
      "Edit a movie",
      "Search for movie titles",
      "Save a movie to favorite movies",
      "Show all favorite movies",
      "View the details of each movie",
      "Show animated loadingscreen",
    ],

    detailImages: ["/img/Projects/moviedb/moviedb-home.png"],
  },
  // E-Shop
  {
    id: 1,
    title: "Mobile E-Shop App",
    skills: [
      {
        img: "/img/Logos/react.png",
        alt: "React",
      },
      {
        img: "/img/Logos/html5.png",
        alt: "HTML5",
      },
      {
        img: "/img/Logos/css3.png",
        alt: "CSS3",
      },
    ],
    image: "/img/Projects/e-shop/e-shop.jpg",
    site: "https://e-shop-hmaz.onrender.com/",
    repo: "https://github.com/MiaMarmeladenbrot/E-Shop",
    collaborators: [
      {
        name: "Thomas Erdmenger",
        link: "https://github.com/thomaserdmenger",
      },
      {
        name: "Even Salomon",
        link: "https://github.com/EvenSalomon1",
      },
      {
        name: "Zied",
        link: "https://github.com/Zied1981",
      },
    ],
    purposes: [
      "Search the store for products, categories or brands",
      "Filter by category, price and/or brand",
      "Save your favorites for later use",
      "View the details of each individual item",
      "Show animated loadingscreen",
    ],

    detailImages: ["/img/Projects/e-shop/e-shop-screenshot.png"],
  },
  // PokeDex
  {
    id: 2,
    title: "PokeDex",
    skills: [
      {
        img: "/img/Logos/react.png",
        alt: "React",
      },
      {
        img: "/img/Logos/html5.png",

        alt: "HTML5",
      },
      {
        img: "/img/Logos/css3.png",

        alt: "CSS3",
      },
    ],
    features: ["React Router DOM", "Splash Screen", "Fetch API"],
    image: "/img/Projects/pokedex/pokedex.jpg",
    site: "https://poke-dex-eta-eight.vercel.app/",
    repo: "https://github.com/MiaMarmeladenbrot/PokeDex",
    collaborators: [
      {
        name: "Izel Acar",
        link: "https://github.com/xoFrey",
      },
      {
        name: "Hakan Devit",
        link: "https://github.com/Hkndevit",
      },
    ],
    purposes: [
      "Responsive Design",
      "Search the store for products, categories or brands",
      "Filter by category, price and/or brand",
      "Save your favorites for later use",
      "View the details of each individual item",
      "Show animated loadingscreen",
    ],

    detailImages: ["/img/Projects/pokedex/pokedex-home.png"],
  },
  // Tasty
  {
    id: 3,
    title: "Tasty App",
    skills: [
      {
        img: "/img/Logos/react.png",
        alt: "React",
      },
      {
        img: "/img/Logos/html5.png",
        alt: "HTML5",
      },
      {
        img: "/img/Logos/css3.png",
        alt: "CSS3",
      },
    ],
    features: [],
    image: "/img/Projects/tasty/tasty.png",
    site: "https://tasty-app-nine.vercel.app/",
    repo: "https://github.com/MiaMarmeladenbrot/Tasty-App?tab=readme-ov-file",
    collaborators: [
      {
        name: "Hakan Devit",
        link: "https://github.com/Hkndevit",
      },
      {
        name: "Resul",
        link: "https://github.com/Reazy96",
      },
      {
        name: "Thomas Erdmenger",
        link: "https://github.com/thomaserdmenger",
      },
    ],
    purposes: [
      "Create a recipe app",
      "Search recipes by country and category",
      "Search for recipes by name",
      "Show detailed page of the recipe with ingredients, quantities and instructions",
      "Show random recipe suggestions",
      "Show animated loadingscreen",
    ],

    detailImages: ["/img/Projects//img/Projects/e-shop/e-shop.png"],
  },
  // Wanderwetter
  {
    id: 4,
    title: "Wanderwetter",
    skills: [
      {
        img: "/img/Logos/js.png",
        alt: "Javascript",
      },
      {
        img: "/img/Logos/html5.png",

        alt: "HTML5",
      },
      {
        img: "/img/Logos/css3.png",

        alt: "CSS3",
      },
    ],
    features: [],
    image: "/img/Projects/wanderwetter/wanderwetter.jpg",
    site: "https://wanderwetter.vercel.app/",
    repo: "https://github.com/MiaMarmeladenbrot/Wanderwetter",
    collaborators: [],
    purposes: [
      "Responsive Design",
      "Search for weather data at specified location",
      "Get an advice depending on the weather data",
      "Show different image depending on advice",
    ],

    detailImages: ["/img/Projects/wanderwetter/wanderwetter-search.png"],
  },
  // Kunterbunt
  {
    id: 5,
    title: "Kunterbunt",
    skills: [
      {
        img: "/img/Logos/js.png",
        alt: "Javascript",
      },
      {
        img: "/img/Logos/html5.png",

        alt: "HTML5",
      },
      {
        img: "/img/Logos/css3.png",

        alt: "CSS3",
      },
    ],
    features: [],
    image: "/img/Projects/kunterbunt/kunterbunt.jpg",
    site: "https://www.kunterbunt-friesoythe.com/",
    repo: "https://github.com/MiaMarmeladenbrot/kunterbunt",
    collaborators: [],
    purposes: [
      "Responsive Design",
      "Website for child's daycare",
      "Show information about the facility, the concept and the educator",
      "Show contact information",
    ],

    detailImages: [
      "/img/Projects/kunterbunt/kunterbunt-home.png",
      "/img/Projects/kunterbunt/kunterbunt-einrichtung.png",
      "/img/Projects/kunterbunt/kunterbunt-konzept.png",
      "/img/Projects/kunterbunt/kunterbunt-about.png",
      "/img/Projects/kunterbunt/kunterbunt-contact.png",
    ],
  },

  // Architect Portfolio
  // Tailwind Project
  // Art Junkies
  // Schere, Stein, Papier
];
export default projects;

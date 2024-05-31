// # IDs final vergeben und checken
// # final befüllen - welche Felder werden wirklich benötigt?
// # noch ein oder zwei responsive designs ergänzen
// Vorlage:
// {
// id: 11,
// title: "Portfolio",
// workInProgress: true,
// skills: [
//   {
//     img: "/img/Logos/react.png",
//     alt: "React",
//   },
// ],
// image: "/img/Projects/portfolio/portfolio.png",
// site: "https://portfolio-three-lime-47.vercel.app/",
// repo: "https://github.com/MiaMarmeladenbrot/Portfolio",
// collaborators: [],
// purposes: [],
// detailImages: [],
// },

const projects = [
  // 15 Chirpify
  {
    id: 15,
    title: "Chirpify Social Network",
    workInProgress: true,
    skills: [
      {
        img: "/img/Logos/nodejs.png",
        alt: "Nodejs",
      },
      {
        img: "/img/Logos/express.png",
        alt: "Expressjs",
      },
      {
        // mongoose?
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
    image: "/img/Projects/chirpify/chirpify.jpg",
    // site: "https://bookstore-frontend-ixz6.onrender.com/",
    repo: "https://github.com/MiaMarmeladenbrot/Chirpify",
    collaborators: [
      {
        name: "Thomas Erdmenger",
        link: "https://github.com/thomaserdmenger",
      },
    ],
    purposes: [
      "create a social network with a secure login process",
      "stay logged in for 2 weeks with a refresh token",
      "register as a user and verify your email via six digit code",
      "write tweets of 160 characters",
      "retweet other user's tweets with your own message",
      "edit and delete your tweets",
      "comment on tweets",
      "edit and delete your comments",
      "follow other users and get their content in your personalized feed",
      "like or dislike tweets",
      "present your profile to other users",
    ],
    detailImages: [
      "/img/Projects/chirpify/chirpify-m-landing-register.jpg",
      "/img/Projects/chirpify/chirpify-m-login-loading.jpg",
    ],
  },
  // 14 The Bookstore
  {
    id: 14,
    title: "The Bookstore",
    workInProgress: true,
    skills: [
      {
        img: "/img/Logos/nodejs.png",
        alt: "Nodejs",
      },
      {
        img: "/img/Logos/express.png",
        alt: "Expressjs",
      },
      {
        // mongoose?
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
    image: "/img/Projects/bookstore/bookstore.jpg",
    site: "https://bookstore-frontend-ixz6.onrender.com/",
    repo: "https://github.com/MiaMarmeladenbrot/bookstore",
    collaborators: [],
    purposes: [
      "create an online-shop with a secure login process",
      "stay logged in for 2 weeks with a refresh token",
      "register as a user and verify your email via six digit code",
      "edit and delete your profile (only while logged in)",
      "search for books",
      "show detail page for every book with information regarding content and author",
      "save books as bookmarks/favorites (only while logged in)",
      "put books in a cart (only while logged in)",
    ],
    detailImages: [
      "/img/Projects/bookstore/bookstore-d-home.png",
      "/img/Projects/bookstore/bookstore-d-register.png",
      "/img/Projects/bookstore/bookstore-d-login.png",
    ],
  },
  // 13 Quiz App
  // 12 Bootsverleih
  // 11 Portfolio
  {
    id: 11,
    title: "Portfolio",
    workInProgress: true,
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
      {
        img: "/img/Logos/tailwind.png",
        alt: "Tailwind",
      },
    ],
    image: "/img/Projects/portfolio/portfolio.png",
    site: "https://portfolio-three-lime-47.vercel.app/",
    repo: "https://github.com/MiaMarmeladenbrot/Portfolio",
    collaborators: [],
    purposes: [
      "Design a portfolio website with project selection, about- and contact-information",
      "Responsive design",
      "Sliding cards with react swiper",
    ],

    detailImages: [
      "/img/Projects/portfolio/portfolio-d-home.png",
      "/img/Projects/portfolio/portfolio-d-projects.png",
      "/img/Projects/portfolio/portfolio-d-details.png",
      "/img/Projects/portfolio/portfolio-d-books.png",
      "/img/Projects/portfolio/portfolio-d-about.png",
    ],
  },
  // 10 Movie DB Fullstack
  {
    id: 10,
    title: "Fullstack Movie Database",
    workInProgress: true,
    skills: [
      {
        img: "/img/Logos/nodejs.png",
        alt: "Nodejs",
      },
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
    // site: "https://e-shop-hmaz.onrender.com/",
    repo: "https://github.com/MiaMarmeladenbrot/MovieDbMERN",
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
  // 9 E-Shop
  {
    id: 9,
    title: "Mobile E-Shop App",
    workInProgress: false,
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

    detailImages: ["/img/Projects/e-shop/e-shop-loading-landing.jpg"],
  },
  // 8 PokeDex
  {
    id: 8,
    title: "PokeDex",
    workInProgress: false,
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
      "responsive design",
      "show animated loadingscreen",
      "choose between light- and darkmode",
      "show a selection of pokemon on the landingpage",
      "load more pokemon with button",
      "search for pokemon by name",
      "filter pokemon by type",
      "view details of each pokemon",
    ],

    detailImages: [
      "/img/Projects/pokedex/pokedex-loading-home.jpg",
      "/img/Projects/pokedex/pokedex-loadmore.jpg",
      "/img/Projects/pokedex/pokedex-search.jpg",
      "/img/Projects/pokedex/pokedex-filter.jpg",
      "/img/Projects/pokedex/pokedex-details.jpg",
    ],
  },
  // 7 Tasty
  {
    id: 7,
    title: "Tasty App",
    workInProgress: false,
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

    detailImages: [
      "/img/Projects/tasty/tasty-start.jpg",
      "/img/Projects/tasty/tasty-areas.jpg",
      "/img/Projects/tasty/tasty-categories.jpg",
      "/img/Projects/tasty/tasty-search.jpg",
      "/img/Projects/tasty/tasty-details.jpg",
    ],
  },
  // 6 Wanderwetter
  {
    id: 6,
    title: "Wanderwetter",
    workInProgress: false,
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

    detailImages: [
      "/img/Projects/wanderwetter/wanderwetter-search.png",
      "/img/Projects/wanderwetter/wanderwetter-m-t-1.jpg",
      "/img/Projects/wanderwetter/wanderwetter-m-t-2.jpg",
    ],
  },
  // 5 Kunterbunt
  {
    id: 5,
    title: "Kunterbunt",
    workInProgress: false,
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
      "/img/Projects/kunterbunt/kunterbunt-t-m-home.jpg",
    ],
  },
  // 4 Tailwind Project Furniture
  {
    id: 4,
    title: "Furniture",
    workInProgress: false,
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
      {
        img: "/img/Logos/tailwind.png",
        alt: "Tailwind",
      },
    ],
    features: [],
    image: "/img/Projects/furniture-tailwind/furniture-tailwind.jpg",
    site: "https://tailwind-layout-theta.vercel.app/",
    repo: "https://github.com/MiaMarmeladenbrot/Tailwind-Layout",
    collaborators: [],
    purposes: [
      "first tailwind project",
      "Website for furniture store",
      "Sign-in/Login Pop-ups",
    ],

    detailImages: ["/img/Projects/furniture-tailwind/furniture-tailwind.png"],
  },
  // 3 Architect Portfolio
  {
    id: 3,
    title: "Architect Portfolio",
    workInProgress: false,
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
    image: "/img/Projects/architect-portfolio/architect-portfolio.jpg",
    site: "https://architect-portfolio-sage.vercel.app/",
    repo: "https://github.com/MiaMarmeladenbrot/Architect-Portfolio",
    collaborators: [],
    purposes: ["Show animated loadingscreen", "Dark-Light-Mode"],

    detailImages: [
      "/img/Projects/architect-portfolio/architect-portfolio-light.png",
      "/img/Projects/architect-portfolio/architect-portfolio-dark.png",
    ],
  },
  // 2 Art Junkies
  {
    id: 2,
    title: "Art Junkies",
    workInProgress: false,
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
    image: "/img/Projects/artjunkies/artjunkies.jpg",
    site: "https://miamarmeladenbrot.github.io/ArtJunkies/index.html",
    repo: "https://github.com/MiaMarmeladenbrot/ArtJunkies",
    collaborators: [],
    purposes: [
      "Responsive Design",
      "Search for weather data at specified location",
      "Get an advice depending on the weather data",
      "Show different image depending on advice",
    ],

    detailImages: ["/img/Projects/artjunkies/artjunkies-home.png"],
  },
  // 1 Schere, Stein, Papier
  {
    id: 1,
    title: "Rock Paper Scissors",
    workInProgress: false,
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
    image: "/img/Projects/rps/rps.jpg",
    site: "https://miamarmeladenbrot.github.io/Rock-Paper-Scissors/",
    repo: "https://github.com/MiaMarmeladenbrot/Rock-Paper-Scissors",
    collaborators: [],
    purposes: [
      "Responsive Design",
      "Play Rock Paper Scissors",
      "Show winner/loser",
      "Show best out of five as final winner",
    ],

    detailImages: [
      "/img/Projects/rps/rps-t-m.jpg",

      "/img/Projects/rps/rps-d-lost.png",
    ],
  },
  // 0 Managing Project
  {
    id: 0,
    title: "Managing Business",
    workInProgress: false,
    skills: [
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
    image: "/img/Projects/managing/managing-1.png",
    site: "https://miamarmeladenbrot.github.io/supercode-project-managing-business/",
    repo: "https://github.com/MiaMarmeladenbrot/supercode-project-managing-business?tab=readme-ov-file",
    collaborators: [],
    purposes: [
      "Responsive Design",
      "Recreate the figma-design as exact as possible",
    ],

    detailImages: [
      "/img/Projects/managing/managing-d.png",
      "/img/Projects/managing/managing-t-m.jpg",
    ],
  },
  // Headphone Project
  // Newspaper
  // The Design Project
  // Design Critique
];
export default projects;

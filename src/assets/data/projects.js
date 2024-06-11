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
  // 16 plant shop?
  // 15 Chirpify
  {
    id: 15,
    title: "Chirpify Social Network",
    workInProgress: true,
    hoverColor: "#1C9BF1",
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
      "social network with secure login process",
      "stay logged in for 2 weeks with a refresh token",
      "register as a user and verify your email via six digit code",
      "write tweets of 160 characters",
      "retweet other user's tweets with your own message",
      "edit and delete your tweets",
      "comment on tweets",
      "edit and delete your comments",
      "follow other users and get their content in your personalized feed",
      "like or dislike tweets",
      "present your profile and tweets to others on your user page",
    ],
    detailImages: [
      "/img/Projects/chirpify/chirpify-m-landing-register.jpg",
      "/img/Projects/chirpify/chirpify-m-login-loading.jpg",
      "/img/Projects/chirpify/chirpify-feed-userpage.jpg",
      "/img/Projects/chirpify/chirpify-edit-user.jpg",
      "/img/Projects/chirpify/chirpify-add-tweet.jpg",
      "/img/Projects/chirpify/chirpify-comment.jpg",
    ],
  },
  // 14 The Bookstore
  {
    id: 14,
    title: "The Bookstore",
    workInProgress: true,
    hoverColor: "#F26C6D",
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
      "online-shop with secure login process",
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
    hoverColor: "#FDC434",
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
    image: "/img/Projects/portfolio/portfolio.jpg",
    site: "https://mias-portfolio.vercel.app/",
    repo: "https://github.com/MiaMarmeladenbrot/Portfolio",
    collaborators: [],
    purposes: [
      "responsive design",
      "design a portfolio website",
      "show project selection, about- and contact-information",
      "build sliding cards and image galleries with react swiper",
    ],

    detailImages: [
      "/img/Projects/portfolio/portfolio-d-home1.png",
      "/img/Projects/portfolio/portfolio-d-home2.png",
      "/img/Projects/portfolio/portfolio-t-m-home.jpg",
      "/img/Projects/portfolio/portfolio-d-projects.png",
      "/img/Projects/portfolio/portfolio-t-m-projects.jpg",
      "/img/Projects/portfolio/portfolio-d-details.png",
      "/img/Projects/portfolio/portfolio-t-m-details.jpg",
      "/img/Projects/portfolio/portfolio-d-books.png",
      "/img/Projects/portfolio/portfolio-t-m-books.jpg",
      "/img/Projects/portfolio/portfolio-d-about.png",
      "/img/Projects/portfolio/portfolio-t-m-about.jpg",
    ],
  },
  // 10 Movie DB Fullstack
  // {
  //   id: 10,
  //   title: "Fullstack Movie Database",
  //   workInProgress: true,
  //   skills: [
  //     {
  //       img: "/img/Logos/nodejs.png",
  //       alt: "Nodejs",
  //     },
  //     {
  //       img: "/img/Logos/express.png",
  //       alt: "Expressjs",
  //     },
  //     {
  //       img: "/img/Logos/mongodb.png",
  //       alt: "mongodb",
  //     },
  //     {
  //       img: "/img/Logos/react.png",
  //       alt: "React",
  //     },
  //     {
  //       img: "/img/Logos/html5.png",
  //       alt: "HTML5",
  //     },
  //     {
  //       img: "/img/Logos/css3.png",
  //       alt: "CSS3",
  //     },
  //   ],
  //   image: "/img/Projects/moviedb/moviedb.jpg",
  //   // site: "https://e-shop-hmaz.onrender.com/",
  //   repo: "https://github.com/MiaMarmeladenbrot/MovieDbMERN",
  //   collaborators: [],
  //   purposes: [
  //     "show animated loadingscreen",
  //     "show all movies from the database",
  //     "search for movie titles",
  //     "save new movies in the database",
  //     "edit a movie",
  //     "save a movie to favorite movies",
  //     "show all favorite movies",
  //     "view the details of each movie on a separate page",
  //   ],

  //   detailImages: ["/img/Projects/moviedb/moviedb-home.png"],
  // },
  // 9 E-Shop
  {
    id: 9,
    title: "Mobile E-Shop App",
    workInProgress: false,
    hoverColor: "#394FD4",
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
      "mobile online store",
      "search the store for products, categories or brands",
      "filter by category, price and/or brand",
      "save your favorites for later use",
      "view the details of each individual item on a separate page",
      "show animated loadingscreen",
    ],

    detailImages: [
      "/img/Projects/e-shop/e-shop-loading-landing.png",
      "/img/Projects/e-shop/e-shop-home.png",
      "/img/Projects/e-shop/e-shop-search.png",
      "/img/Projects/e-shop/e-shop-sort.png",
      "/img/Projects/e-shop/e-shop-loadmore.png",
      "/img/Projects/e-shop/e-shop-filter-light.png",
      "/img/Projects/e-shop/e-shop-filter-dark.png",
      "/img/Projects/e-shop/e-shop-favorites.png",
      "/img/Projects/e-shop/e-shop-details-light.png",
      "/img/Projects/e-shop/e-shop-details-dark.png",
    ],
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
      "switch between dark- and light-mode",
      "show a selection of pokemon on the landingpage",
      "load more pokemon with button",
      "search for pokemon by name",
      "filter pokemon by type",
      "view details for each pokemon on separate page",
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
      "mobile recipe app",
      "search recipes by country and category",
      "search for recipes by name",
      "show detailed page for each recipe with ingredients, quantities and instructions",
      "show random recipe suggestions",
      "show animated loadingscreen",
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
      "responsive Design",
      "search for weather data at specified location",
      "get an advice depending on the weather data",
      "show different images depending on the advice",
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
      "responsive design",
      "website for child's daycare",
      "show information about the facility, the concept and the educator",
      "show contact information",
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
      "recreate the design with tailwind",
      "show information about the company",
      "use popup-window for sign up and login",
    ],

    detailImages: [
      "/img/Projects/furniture-tailwind/furniture-tailwind.png",
      "/img/Projects/furniture-tailwind/furniture-tailwind1.png",
      "/img/Projects/furniture-tailwind/furniture-tailwind2.png",
      "/img/Projects/furniture-tailwind/furniture-tailwind3.png",
      "/img/Projects/furniture-tailwind/furniture-tailwind4.png",
      "/img/Projects/furniture-tailwind/furniture-tailwind5.png",
    ],
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
    purposes: [
      "show animated loadingscreen",
      "switch between dark- and light-mode",
      "show information of company",
      "show photo gallery on different page",
    ],

    detailImages: [
      "/img/Projects/architect-portfolio/architect-portfolio-light.png",
      "/img/Projects/architect-portfolio/architect-portfolio-dark.png",
      "/img/Projects/architect-portfolio/architect-portfolio-light1.png",
      "/img/Projects/architect-portfolio/architect-portfolio-dark1.png",
      "/img/Projects/architect-portfolio/architect-portfolio-light2.png",
      "/img/Projects/architect-portfolio/architect-portfolio-dark2.png",
      "/img/Projects/architect-portfolio/architect-portfolio-light3.png",
      "/img/Projects/architect-portfolio/architect-portfolio-dark3.png",
      "/img/Projects/architect-portfolio/architect-portfolio-light4.png",
      "/img/Projects/architect-portfolio/architect-portfolio-dark4.png",
      "/img/Projects/architect-portfolio/architect-portfolio-light5.png",
      "/img/Projects/architect-portfolio/architect-portfolio-light6.png",
      "/img/Projects/architect-portfolio/architect-portfolio-dark6.png",
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
      "responsive Design",
      "search for artists and art works from the MET Museum",
      "show detail cards of found objects",
      "forward to the MET Museum's page for each found object",
    ],

    detailImages: [
      "/img/Projects/artjunkies/artjunkies-d-home.png",
      "/img/Projects/artjunkies/artjunkies-d-search.png",
      "/img/Projects/artjunkies/artjunkies-t.jpg",
      "/img/Projects/artjunkies/artjunkies-m.jpg",
    ],
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
      "responsive Design",
      "play Rock Paper Scissors",
      "show winner/loser",
      "show best out of five as final winner",
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
    purposes: ["responsive design", "show information about the company"],

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

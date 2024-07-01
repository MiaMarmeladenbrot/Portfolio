import projects from "../assets/data/projects.js";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Projectcards = () => {
  return (
    <section className="hidden lg:flex justify-center flex-col items-center mb-24">
      <h2 className="text-2xl border-brightColor border-b-2 inline-block pb-2 mb-5">
        Projects
      </h2>
      <Link to="/projects" className="mb-10 text-brightColor border-b">
        See all
      </Link>

      {/* <article className="flex items-center justify-center gap-11"> */}
      <Swiper
        className={" h-[20rem] w-[900px]"}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {projects.slice(0, 5).map((singleProject, index) => (
          <SwiperSlide
            key={index}
            className="flex gap-10 items-center rounded-lg overflow-hidden shadow-[0rem_0rem_1.875rem_-0.625rem_rgba(0,0,0,0.3)] bg-whiteColor"
          >
            {singleProject.workInProgress ? (
              <p className="py-1 px-2 bg-brightColor text-center absolute top-10 rotate-[-30deg] rounded">
                Work in progress
              </p>
            ) : (
              ""
            )}
            <img
              className="w-1/2"
              src={singleProject.image}
              alt={singleProject.title}
            />
            <section className="pr-3 min-w-96">
              <h2 className="mb-5 text-xl">{singleProject.title}</h2>
              <p className="mb-3"></p>
              <div className="flex flex-wrap gap-2 mb-10">
                {singleProject.skills.slice(0,9).map((item, index) => (
                  <img
                    key={index}
                    className="h-7 object-contain	"
                    src={item.img}
                    alt={item.alt}
                  />
                ))}
              </div>

              <div className="mb-8">
                {singleProject.site ? (
                  <Link
                    className="border border-brightColor text-brightColor hover:text-brightColor hover:bg-darkColor p-2 rounded-lg mr-3"
                    to={singleProject.site}
                    target="_blank"
                  >
                    Live Site
                  </Link>
                ) : (
                  ""
                )}

                <Link
                  // className="bg-brightColor hover:border hover:border-black p-2 rounded-lg"
                  className="border border-brightColor text-brightColor hover:text-brightColor hover:bg-darkColor p-2 rounded-lg mr-3"
                  to={singleProject.repo}
                  target="_blank"
                >
                  Repository on GitHub
                </Link>
              </div>
              <Link
                className="bg-brightColor text-[#000000] hover:text-brightColor hover:bg-darkColor p-2 rounded-lg mr-3"
                to={`/projects/${singleProject.id}`}
              >
                More Info
              </Link>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projectcards;

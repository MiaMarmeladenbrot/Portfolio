import { Link } from "react-router-dom";
import projects from "../assets/data/projects.js";

const Projects = () => {
  return (
    <main className="mt-32 mb-20 flex flex-col gap-4 items-center justify-center">
      <h2 className=" border-brightColor border-b-2 inline-block pb-2 mb-5">
        Projects
      </h2>
      {/* <article className="grid grid-cols-3 gap-5"> */}
      <article className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-11">
        {/* flex flex-wrap items-center justify-center gap-11 */}
        {projects.map((singleProject, index) => (
          <Link
            key={index}
            to={`/projects/${singleProject.id}`}
            className="text-[#000000] hover:text-[#000000]"
          >
            <div
              className={`flex flex-col gap-4 justify-center rounded-lg overflow-hidden max-w-80
              shadow-[0px_0px_30px_-10px_rgba(0,0,0,0.3)]
              hover:shadow-[0px_0px_30px_-10px_rgba(0,0,0,1)]
              `}
              // className={`flex flex-col gap-4 justify-center rounded-lg overflow-hidden max-w-80
              // shadow-[0px_0px_30px_-10px_rgba(0,0,0,0.3)]
              // hover:shadow-[0px_0px_30px_-10px_${
              //   singleProject?.hoverColor || "rgba(0,0,0,1)"
              // }]`}
            >
              <div>
                {singleProject.workInProgress ? (
                  <p className="py-1 px-2 bg-brightColor text-center absolute rotate-[-30deg] ml-[-25px] mt-4 rounded">
                    Work in progress
                  </p>
                ) : (
                  ""
                )}
                <img
                  className="object-cover	"
                  src={singleProject.image}
                  alt={singleProject.title}
                />
              </div>
              <section className="p-4">
                <h3 className="mb-5">{singleProject.title}</h3>
                <p className="mb-3">
                  {/* {singleProject.skills.map((item) => item)} */}
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {singleProject.skills.map((item, index) => (
                    <img
                      key={index}
                      className="h-6 object-contain	"
                      src={item.img}
                      alt={item.alt}
                    />
                  ))}
                </div>
              </section>
            </div>
          </Link>
        ))}
      </article>
    </main>
  );
};

export default Projects;

import projects from "../assets/data/projects.js";

const Projectcards = () => {
  return (
    // # slide funktion
    <section className="flex justify-center flex-col items-center mb-24">
      <h2 className="text-2xl border-brightColor border-b-2 inline-block pb-2 mb-5">
        Projects
      </h2>
      <a href="/projects" className="mb-10 text-brightColor border-b">
        See all
      </a>

      <article className="flex items-center justify-center gap-11">
        {projects.slice(0, 3).map((singleProject, index) => (
          <div
            key={index}
            className="flex gap-4 items-center justify-center rounded-lg overflow-hidden shadow-[0px_0px_30px_-10px_rgba(0,0,0,0.3)]"
            // # alle Karten gleich breit
          >
            <img
              className="w-96 object-contain	"
              src={singleProject.image}
              alt={singleProject.title}
            />
            <section className="pr-3 min-w-96">
              <h2 className="mb-5 text-xl">{singleProject.title}</h2>
              <p className="mb-3">
                created with
                {/* {singleProject.skills.map((item) => item)} */}
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {singleProject.skills.map((item, index) => (
                  <img
                    key={index}
                    className="h-7 object-contain	"
                    src={item.img}
                    alt={item.alt}
                  />
                ))}
              </div>

              <div className="mb-8">
                <a
                  className="border border-brightColor text-brightColor hover:bg-darkColor p-2 rounded-lg mr-3"
                  href={singleProject.site}
                >
                  Live Site
                </a>
                <a
                  // className="bg-brightColor hover:border hover:border-black p-2 rounded-lg"
                  className="border border-brightColor text-brightColor hover:text-brightColor hover:bg-darkColor p-2 rounded-lg mr-3"
                  href={singleProject.repo}
                >
                  Repository on GitHub
                </a>
              </div>
              <a
                className="bg-brightColor text-[#000000] hover:text-brightColor hover:bg-darkColor p-2 rounded-lg mr-3"
                href={`/projects/${singleProject.id}`}
              >
                More Info
              </a>
            </section>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Projectcards;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../assets/data/projects.js";
import BackButton from "../components/BackButton.jsx";

const ProjectDetails = () => {
  // State for Details of found project
  const [projectDetails, setProjectDetails] = useState();

  // get Id
  const { id } = useParams();

  // compare id and save data
  useEffect(() => {
    const find = projects.find((item) => Number(item.id) === Number(id));
    setProjectDetails(find);
  }, [projects]);

  return (
    <main className="mt-32 mb-20 flex flex-col gap-4 items-center justify-center">
      <BackButton />

      <article className="flex gap-20">
        <div>
          <img
            className="max-w-xl"
            src={projectDetails?.detailImages[0]}
            alt={projectDetails?.title}
          />
        </div>
        {/* //# Gallerie mit einem Haupt- und mehreren Detailimages */}

        <div>
          <h2 className=" border-brightColor border-b-2 inline-block pb-2 mb-8">
            {projectDetails?.title}
          </h2>

          <div className="mb-5">
            <a
              className="border border-brightColor text-brightColor hover:bg-darkColor p-2 rounded-lg mr-3"
              href={projectDetails?.site}
            >
              Live Site
            </a>
            <a
              // className="bg-brightColor hover:border hover:border-black p-2 rounded-lg"
              className="border border-brightColor text-brightColor hover:text-brightColor hover:bg-darkColor p-2 rounded-lg mr-3"
              href={projectDetails?.repo}
            >
              Repository on GitHub
            </a>
          </div>

          <h3 className="mb-2">Skills</h3>
          <div className="flex gap-4 mb-6">
            {projectDetails?.skills.map((singleSkill, index) => (
              <img
                className="w-20"
                key={index}
                src={singleSkill.img}
                alt={singleSkill.alt}
              />
            ))}
          </div>
          <h3 className="mb-2">Purposes</h3>
          {projectDetails?.purposes.map((singlePurpose, index) => (
            <li className="mb-2" key={index}>
              {singlePurpose}
            </li>
          ))}

          <h3 className="mb-2">
            {projectDetails?.collaborators.length > 0 ? "Collaborateurs:" : ""}
          </h3>
          {projectDetails?.collaborators.map((collaborator, index) => (
            <p className="mb-2" key={index}>
              <a href={collaborator.link}>{collaborator.name}</a>
            </p>
          ))}
        </div>
      </article>
    </main>
  );
};

export default ProjectDetails;

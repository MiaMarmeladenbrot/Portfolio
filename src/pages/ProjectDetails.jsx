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
  console.log(projectDetails);
  //# console.log(projectDetails.skills[0].img);

  return (
    <main className="mt-32 mb-20 flex flex-col gap-4 items-center justify-center">
      <BackButton />

      <article className="flex gap-20">
        <div>
          <img
            className="max-w-xl"
            src={projectDetails?.image}
            alt={projectDetails?.title}
          />
        </div>
        {/* //# Gallerie mit einem Haupt- und mehreren Detailimages */}

        <div>
          <h2 className=" border-brightColor border-b-2 inline-block pb-2 mb-5">
            {projectDetails?.title}
          </h2>
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
          <h3 className="mb-2 mt-2">Build with</h3>
          {projectDetails?.builtwith.map((singleItem, index) => (
            <li className="mb-2" key={index}>
              {singleItem}
            </li>
          ))}
          <h3 className="mb-2">Collaborators:</h3>
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

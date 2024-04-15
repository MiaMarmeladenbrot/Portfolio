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
    <main className="mt-20 mb-20 flex flex-col gap-4 items-center justify-center">
      <BackButton />

      <h2 className="text-2xl border-brightColor border-b-2 inline-block pb-2 mb-5">
        {projectDetails?.title}
      </h2>

      <article>
        <div>
          <img src={projectDetails?.image} alt={projectDetails?.title} />
        </div>
        {/* //# Gallerie mit einem Haupt- und mehreren Detailimages */}

        <div>
          <h3>Skills</h3>
          {projectDetails?.skills.map((singleSkill, index) => (
            <img
              className="w-20"
              key={index}
              src={singleSkill.img}
              alt={singleSkill.alt}
            />
          ))}
          <h3>Purposes</h3>
          {projectDetails?.purposes.map((singlePurpose, index) => (
            <li key={index}>{singlePurpose}</li>
          ))}
          <h3>Build with</h3>
          <h3>Collaborators</h3>
        </div>
      </article>
    </main>
  );
};

export default ProjectDetails;

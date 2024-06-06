import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="mt-32 mb-20 flex gap-20 items-center justify-center p-4">
      {/* Bild-Teil */}
      <section className="flex flex-col items-center">
        <img
          src="/img/about.png"
          alt="profile image of mia"
          className="mb-6 max-w-64"
        />
        <p className="mb-2 ">book lover</p>
        <p className="mb-2 ">yoga teacher</p>
        <p className="mb-2 ">dive master</p>
        <p className="mb-2 ">science nerd</p>
      </section>

      {/* Text-Teil */}
      <section className="max-w-xl">
        <h2 className=" border-brightColor border-b-2 inline-block pb-2 mb-5">
          About me
        </h2>
        <p className="mb-5 ">
          After pursuing my passion for storytelling as a non-fiction editor, I
          decided to embark on a new path. Through enrollment in a Full-Stack
          Bootcamp at{" "}
          <Link to="https://www.super-code.de/" target="_blank">
            SuperCode
          </Link>{" "}
          and engaging in extensive self-study, I transformed my love for
          creative thinking and problem-solving into a career as a developer.
        </p>
        <p className=" mb-5 ">
          While this journey sometimes felt like a rollercoaster ride, I am
          incredibly grateful that I started it. Driven by a natural curiosity
          and eagerness to learn, I have found the steep learning curve of the
          past year to be an amazing experience. I love that I am constantly
          progressing and expanding my skill set.
        </p>
      </section>
    </main>
  );
};

export default About;

const About = () => {
  return (
    <main className="mt-32 mb-20 flex gap-20 items-center justify-center p-4">
      {/* Bild-Teil */}
      <section className="flex flex-col items-center">
        <img
          src="/img/about.png"
          alt="profile image of mia"
          className="mb-10 max-w-64"
        />
        <p className="mb-2 ">passionate developer</p>
        <p className="mb-2 ">book lover</p>
        <p className="mb-2 ">yogi</p>
        <p className="mb-2 ">dive master</p>
      </section>

      {/* Text-Teil */}
      <section className="max-w-xl">
        <h2 className=" border-brightColor border-b-2 inline-block pb-2 mb-5">
          About me
        </h2>
        <p className="mb-5 ">
          After pursuing my passion for storytelling as a non-fiction editor, I
          decided to embark on a new path. Through enrollment in a Full-Stack
          Bootcamp by{" "}
          <a href="https://www.super-code.de/" target="_blank">
            SuperCode
          </a>{" "}
          and extensive autodidactic learning I turned my love for creative
          thinking and problem-solving into a career as a developer.
        </p>
        <p className=" mb-5 ">
          While this journey sometimes felt like a rollercoaster ride, I am
          incredibly grateful that I started it. As someone inherently curious
          and eager to learn, experiencing the impressive learning curve has
          been amazing. I love that I am constantly progressing and expanding my
          skill set.
        </p>
      </section>
    </main>
  );
};

export default About;

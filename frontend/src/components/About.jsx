import React from "react";
const About = () => {
  const info = [{ text: "Completed Projects", count: "24" }];
  return (
    <section
      id="about"
      className="lg:py-10 py-20 text-white min-h-screen w-full flex flex-col items-center justify-center bg-transparent sm:px-10 px-3"
    >
      <h3 className="text-4xl font-semibold">
        About <span className="text-cyan-600">Me</span>
      </h3>
      <p className="text-gray-400 my-3 text-lg">My introduction</p>
      <div className="flex lg:flex-row flex-col sm:px-4 px-2 md:px-0 items-center md:gap-6 gap-12 max-w-6xl mx-auto">
        <div className="py-2">
          <div className="text-gray-300 my-3 flex items-start justify-start flex-col gap-6">
            <p className=" sm:w-11/12 w-full p-1 text-left sm:p-0 !mx-0 box-border relative pl-4 sm:text-base text-sm ">
              <span className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b to-cyan-400 from-cyan-700 rounded-lg"></span>
              I am a dedicated and passionate Full Stack Developer pursuing my
              Master's in Computer Applications (MCA) with a strong foundation
              in Computer Applications (BCA). With an in-depth understanding of
              the MERN (MongoDB, Express.js, React.js, Node.js) stack, I
              specialize in crafting dynamic and scalable web applications. I'm
              also certified in MERN stack 1year program from PWSkills.
            </p>
            <div className="flex gap-2">
              <a href="https://drive.google.com/file/d/1b7k6i-3tJWfHo983kNDMFxgP0xIbkP9f/view?usp=drive_link" target="_blank">
                <button className="btn-primary">Resume</button>
              </a>
              <a href="https://drive.google.com/file/d/1tjdQRSuBgbwUpZ4pEEcwUih2C_NN2H_S/view?usp=drive_link" target="_blank">
                <button className="btn-primary">Certificate</button>
              </a>
            </div>
            <div className="flex items-center gap-7">
              {info.map((content) => (
                <div key={content.text}>
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    {content.count}
                    <span className="text-cyan-600">+</span>{" "}
                  </h3>
                  <span className="md:text-base text-xs">{content.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center flex-col gap-7 bg-gray-500 opacity-95 rounded-lg sm:rotate-6 hover:scale-105 duration-300 hover:bg-gray-600 ">
          <section className="flex items-center justify-center gap-5 flex-col bg-transparent opacity-90 md:px-10 sm:px-4 px-2 md:py-16 py-10 rounded-lg shadow-2xl ">
            <h1>Education : </h1>
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg p-2 md:rotate-12">
              <section className="flex justify-between items-center">
                <div>MCA</div>
                <div>2023-2025</div>
              </section>
              <section className="text-xs">
                I am currently pursuing my MCA at Galgoriya University, where I
                am honing my skills in computer applications and software
                development.
              </section>
            </div>
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg p-2 md:rotate-12">
              <section className="flex justify-between items-center">
                <div>BCA</div>
                <div>2019-2023</div>
              </section>
              <section className="text-xs">
                I have successfully completed my BCA from LN College, gaining a
                solid foundation in computer applications and software
                development.
              </section>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;

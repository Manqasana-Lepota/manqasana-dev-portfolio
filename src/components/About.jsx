
function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 bg-gray-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="about-heading"
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          About Me
        </h2>

        <div className="max-w-3xl">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I am a Software Developer with a National Diploma
            in Information Technology, specialising in Software
            Development. I enjoy building practical applications
            that solve real-world problems and make everyday
            tasks easier.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            My technical skills include Java, Python, JavaScript,
            React, SQL and web development. I also have experience
            supporting enterprise banking applications, investigating
            production issues, performing User Acceptance Testing (UAT),
            and working with Microsoft Azure technologies.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            I continue to strengthen my skills through hands-on
            projects, including web application development and
            my personal developer portfolio. I am seeking
            opportunities to contribute to a development team,
            solve technical problems and grow as a Software Developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

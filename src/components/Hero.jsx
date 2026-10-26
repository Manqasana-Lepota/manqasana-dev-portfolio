
function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-950 text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-blue-400 text-lg mb-4">
          Hello, I'm
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
          Manqasana Lepota
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
          Software Developer
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-8">
          I develop reliable and user-friendly software
          applications using Java, Python, JavaScript, React
          and SQL. I also have experience in enterprise
          application support and Microsoft Azure technologies.
          I enjoy solving problems, building practical
          applications and continuously improving my technical skills.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-600 hover:border-blue-400 hover:text-blue-400 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Me
          </a>
          <a
            href={`${import.meta.env.BASE_URL}Manqasana-Lepota-CV.pdf`}
            download
            className="bg-white hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
            Download CV
            </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

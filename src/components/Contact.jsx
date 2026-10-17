
function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-gray-950 text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get In Touch
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          I am open to junior software development opportunities,
          learning opportunities and collaborations. If you have
          an opportunity or would like to discuss my projects,
          please feel free to contact me.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="mailto:nqhasy@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Manqasana-Lepota"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 hover:border-blue-400 hover:text-blue-400 px-6 py-3 rounded-lg font-semibold transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/manqasana-lepota-98349483"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 hover:border-blue-400 hover:text-blue-400 px-6 py-3 rounded-lg font-semibold transition"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact

const projects = [
  {
    title: "Clinic Booking System",
    description:
      "A web application for managing clinic appointments, users and consultation records. Includes separate Admin, Doctor and Patient modules.",
    technologies: ["Python", "Flask", "MySQL", "Bootstrap"],
    github: "https://github.com/Manqasana-Lepota/clinic-booking-system",
  },
  {
    title: "My Portfolio",
    description:
      "A responsive personal portfolio showcasing my technical skills, software projects and professional background.",
    technologies: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Manqasana-Lepota/manqasana-dev-portfolio",
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          My Projects
        </h2>

        <p className="text-gray-400 text-lg mb-12 max-w-2xl">
          A selection of projects that demonstrate my software
          development skills and practical learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-gray-950 border border-gray-800 rounded-xl p-7 hover:border-blue-500 transition"
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="bg-gray-800 text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-400 hover:text-blue-300 font-semibold"
              >
                View on GitHub →
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
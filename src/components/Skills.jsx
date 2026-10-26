
const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "C#", "JavaScript", "SQL"],
  },
  {
    title: "Frontend Development",
    skills: ["React", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend Development",
    skills: ["Spring Boot", "Flask", "REST APIs", "JDBC"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQL Server (Basic)"],
  },
  {
    title: "Tools & Cloud",
    skills: [
      "Git",
      "GitHub",
      "Maven",
      "Linux",
      "JUnit",
      "Microsoft Azure",
      "Azure Administration",
      "Docker (Basic)",
      "Kubernetes (Basic)",
    ],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 bg-gray-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="skills-heading"
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Technical Skills
        </h2>

        <p className="text-gray-400 text-lg mb-12 max-w-2xl">
          Technologies and tools I have used in software development,
          application support, database management and cloud environments.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-colors"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-5">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800 text-gray-200 px-3 py-2 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

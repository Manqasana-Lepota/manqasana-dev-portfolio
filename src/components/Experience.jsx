
const experiences = [
  {
    role: "Cloud Security Intern",
    company: "LGIT Smart Solutions",
    period: "Mar 2024 – Jul 2024",
    description:
      "Gained practical exposure to Microsoft Azure, cloud administration, system monitoring and maintenance, and Azure AD and Microsoft 365 security troubleshooting.",
  },
  {
    role: "Application Support",
    company: "Standard Bank",
    period: "Apr 2021 – Apr 2022",
    description:
      "Supported enterprise banking applications in a high-availability environment. Assisted with production incidents, user account creation, UAT and issue tracking using BMC Remedy and IntelliMatch.",
  },
  {
    role: "IT / Systems Development Learner",
    company: "Umuzi Academy",
    period: "Jan 2020 – Mar 2021",
    description:
      "Completed systems development training focused on programming, technical problem-solving and software development fundamentals.",
  },
  {
    role: "Software Development Intern / Learner",
    company: "JumpCo",
    period: "Jan 2018 – Dec 2019",
    description:
      "Supported software development tasks involving Java, object-oriented programming, SQL, application testing, debugging and maintenance.",
  },
]

function Experience() {
  return (
    <section
      id="experience"
      className="bg-gray-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Experience
        </h2>

        <p className="text-gray-400 text-lg mb-12 max-w-2xl">
          My experience across software development, enterprise
          application support and cloud technologies.
        </p>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="border-l-2 border-blue-500 pl-6 py-2"
            >
              <p className="text-blue-400 text-sm font-medium mb-2">
                {experience.period}
              </p>

              <h3 className="text-xl md:text-2xl font-bold mb-1">
                {experience.role}
              </h3>

              <p className="text-gray-300 mb-3">
                {experience.company}
              </p>

              <p className="text-gray-400 leading-relaxed max-w-3xl">
                {experience.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience
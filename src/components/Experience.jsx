

const experiences = [
  {
    role: "Cloud Security Intern",
    company: "LGIT Smart Solutions",
    period: "Mar 2024 – Jul 2024",
    description:
      "Gained practical exposure to Microsoft Azure fundamentals and administration. Assisted with Azure-based system deployment, monitoring and maintenance, and troubleshooting involving Azure Active Directory (Microsoft Entra ID) and Microsoft 365. Developed an understanding of cloud security, access management and system administration.",
  },
  {
    role: "IT / Enterprise Application Support",
    company: "Standard Bank",
    period: "Apr 2021 – Apr 2022",
    description:
      "Supported enterprise banking applications in a high-availability production environment. Assisted with production incident investigation and resolution, user account creation, and application troubleshooting. Used BMC Remedy for incident management and worked with IntelliMatch. Participated in User Acceptance Testing (UAT) and collaborated with technical and business teams in an Agile/Scrum environment.",
  },
  {
    role: "Systems Development Learner",
    company: "Umuzi Academy",
    period: "Jan 2020 – Mar 2021",
    description:
      "Completed systems development training focused on programming, software development fundamentals and technical problem-solving.",
  },
  {
    role: "Junior Java Developer",
    company: "JumpCo",
    period: "Jan 2018 – Dec 2019",
    description:
      "Supported software development, maintenance and troubleshooting activities using Java and object-oriented programming. Gained practical exposure to Java 8/11, Spring Boot, Hibernate, REST services, JSP, JavaScript and jQuery. Worked with MySQL and JDBC for database-related development, JUnit for testing, and Git for source-code management. Assisted with debugging and resolving software issues.",
  },
];


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
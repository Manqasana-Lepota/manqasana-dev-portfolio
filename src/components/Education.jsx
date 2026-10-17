
const education = [
  {
    qualification: "National Diploma in Information Technology",
    institution: "Central University of Technology, Free State",
    detail: "Software Development",
  },
]

const certifications = [
  {
    name: "Microsoft Azure Fundamentals (AZ-900)",
    provider: "Microsoft",
  },
  {
    name: "Microsoft Azure Administrator Associate (AZ-104)",
    provider: "Microsoft",
  },
  {
    name: "Kubernetes and Cloud Native Associate (KCNA)",
    provider: "Cloud Native Computing Foundation",
  },
]

function Education() {
  return (
    <section
      id="education"
      className="bg-gray-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">
              Education
            </h3>

            {education.map((item) => (
              <article
                key={item.qualification}
                className="bg-gray-950 border border-gray-800 rounded-xl p-6"
              >
                <h4 className="text-xl font-bold mb-3">
                  {item.qualification}
                </h4>

                <p className="text-gray-300 mb-2">
                  {item.institution}
                </p>

                <p className="text-gray-400">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((certification) => (
                <article
                  key={certification.name}
                  className="bg-gray-950 border border-gray-800 rounded-xl p-5"
                >
                  <h4 className="text-lg font-semibold mb-2">
                    {certification.name}
                  </h4>

                  <p className="text-gray-400 text-sm">
                    {certification.provider}
                  </p>
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Education
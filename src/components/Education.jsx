const education = [
  {
    qualification: "National Diploma in Information Technology",
    institution: "Central University of Technology, Free State",
    detail: "Software Development",
    year: "2012",
  },
  {
    qualification: "Python Online Bootcamp",
    institution: "GirlCode",
    detail: "Python programming training",
    period: "August 2023 – November 2023",
  },
];


const certifications = [
  {
    name: "Microsoft Azure Fundamentals (AZ-900)",
    provider: "Microsoft",
    year: "2024",
    status: "Active",
  },
 {
  name: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
  provider: "Microsoft",
  year: "2024",
  renewed: "2026",
  status: "Active",
},
  {
    name: "Kubernetes and Cloud Native Associate (KCNA)",
    provider: "Cloud Native Computing Foundation",
    year: "2025",
    status: "Active",
  },
];

function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-24 bg-gray-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="education-heading"
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Education & Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">
              Education & Training
            </h3>
            <div className="space-y-4">
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
                  {item.detail && (
                    <p className="text-gray-400 text-sm">
                      {item.detail}
                      </p>
                  )}
                  {item.year && (
                    <p className="text-gray-400 text-sm mt-2">
                      Graduated: {item.year}
                    </p>
                  )}
                  {item.period && (
                    <p className="text-gray-400 text-sm mt-2">
                      Completed: {item.period}
                      </p>
                  )}
                </article>
              ))}
            </div>
          </div>

          
          {/* Certifications */}
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
                  <p className="text-gray-400 text-sm mt-2">
                    Earned: {certification.year}
                  </p>
                  {certification.renewed && (
                    <p className="text-gray-400 text-sm">
                      Renewed: {certification.renewed}
                    </p>
                  )}
                  <p
                  className={`text-sm mt-1 ${
                    certification.status === "Active"
                    ? "text-green-400"
                    : "text-yellow-400"
                  }`}
                  >
                    Status: {certification.status}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

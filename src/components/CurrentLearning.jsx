
const currentActivities = [
  {
    title: "Frontend Development",
    description:
      "Currently improving my React, JavaScript and Tailwind CSS skills by building responsive layouts, reusable components and interactive user interfaces.",
    status: "In progress",
  },
  {
    title: "Software Project Improvements",
    description:
      "Reviewing and improving my existing applications, focusing on code quality, database integration, usability and maintainability.",
    status: "Ongoing",
  },
  {
    title: "Cybersecurity Learning",
    description:
      "Continuing my cybersecurity studies through Coursera to strengthen my understanding of security principles and secure systems.",
    status: "Learning",
  },
];

function CurrentLearning() {
  return (
    <section
      id="current-learning"
      aria-labelledby="current-learning-heading"
      className="scroll-mt-24 bg-gray-950 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="current-learning-heading"
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Current Learning & Development
        </h2>

        <p className="text-gray-300 text-center mb-12">
          I am continuously developing my technical skills
          through practical projects, self-study and ongoing learning.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentActivities.map((activity) => (
            <article
              key={activity.title}
              className="bg-gray-950 rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-xl font-bold mb-3">
                {activity.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {activity.description}
              </p>

              <span className="text-sm text-green-400">
                {activity.status}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurrentLearning;

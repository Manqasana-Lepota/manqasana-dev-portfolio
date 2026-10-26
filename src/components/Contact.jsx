
function Contact() {
  const email = "nqhasy@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert("Email address copied!");
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 bg-gray-900 text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          id="contact-heading"
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Let's Connect
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          I am available for junior software development opportunities,
          learnerships, and collaborations. If you are looking for a
          motivated developer or would like to discuss my projects,
          I would love to hear from you.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(
              "Software Development Opportunity"
            )}`}
            className="bg-blue-600 hover:bg-blue-700 focus-visible:outline
              focus-visible:outline-2 focus-visible:outline-offset-4
              focus-visible:outline-blue-400 px-6 py-3 rounded-lg
              font-semibold transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Manqasana-Lepota"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 hover:border-blue-400
              hover:text-blue-400 px-6 py-3 rounded-lg
              font-semibold transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/manqasana-lepota-98349483"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 hover:border-blue-400
              hover:text-blue-400 px-6 py-3 rounded-lg
              font-semibold transition"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-8 text-gray-400">
          <p className="text-sm mb-2">You can also reach me directly at:</p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${email}`}
              className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
            >
              {email}
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="border border-gray-700 hover:border-blue-400
                px-3 py-1 rounded-md text-sm transition"
            >
              Copy email
            </button>
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-10">
          Thank you for visiting my portfolio.
        </p>
      </div>
    </section>
  );
}

export default Contact;

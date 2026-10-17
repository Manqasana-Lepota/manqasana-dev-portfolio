function Hero() {
    return(
        <section id="home" className="min-h-screen flex items-center bg-gray-950 text-white px-6">
            <div className="max-w-6xl mx-auto w-full">
                <p className="text-blue-400 text-lg mb-4">
                    Hello, I'm
                </p>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Manqasana Lepota
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
                    Software Developer
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-8">
                    I build a reliable and user-friendly software applications using 
                    Java, Python, JavaScript, React, SQL and cloud technologies.
                    I am passionate about software development, problem solving
                    and continuously growing my technical skills.

                </p>
                <div className="flex flex-wrap gap-4">
                    <a
                    href="#projects"
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
                    >
                        View My Projects
                    </a>
                    <a
                    href="#contact"
                    className="border border-gray-600 hover:border-blue-400 hover:text-blue-400 px-6 py-3 rounded-lg font-semibold transition"
                    >
                        Contact Me
                    </a>
                    <a
                    href="/Manqasana-Lepota-CV.pdf"
                    download
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                    >
                        Download CV
                    </a>
                </div>


            </div>

        </section>
    )
}

export default Hero
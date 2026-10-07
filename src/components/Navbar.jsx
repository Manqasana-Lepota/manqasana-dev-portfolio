function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-950/90 backdrop-blur-md border-b border-gray-800 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                <h1 className="text-xl font-bold">
                    Manqasana
                </h1>

                <div className="hidden md:flex gap-6">
                    <a href="#home" className="hover:text-blue-400">
                        Home
                    </a>

                    <a href="#about" className="hover:text-blue-400">
                        About
                    </a>

                    <a href="#skills" className="hover:text-blue-400">
                        Skills
                    </a>

                    <a href="#projects" className="hover:text-blue-400">
                        Projects
                    </a>

                    <a href="#contact" className="hover:text-blue-400">
                        Contact
                    </a>
                </div>

            </div>

        </nav>

    )
}

export default Navbar
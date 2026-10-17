
import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950/95 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <a
          href="#home"
          className="text-xl font-bold text-white"
          onClick={() => setMenuOpen(false)}
        >
          Manqasana
        </a>

        <button
          type="button"
          className="md:hidden text-white text-2xl"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className="hidden md:flex gap-5 text-sm text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-400 transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-950 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-blue-400 transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
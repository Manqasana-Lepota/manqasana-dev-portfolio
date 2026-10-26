
import { useEffect, useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Current Learning", href: "#current-learning" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          )

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const getLinkClass = (href) => {
    const isActive = activeSection === href.slice(1)

    return `transition-colors duration-200 ${
      isActive
        ? "text-blue-400 font-semibold"
        : "text-gray-300 hover:text-blue-400"
    }`
  }

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-800 bg-gray-950/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-white"
          onClick={() => {
            setActiveSection("home");
            setMenuOpen(false);
          }}
        >
          Manqasana<span className="text-blue-400">.</span>
        </a>


        <button
          type="button"
          className="text-2xl text-white md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className="hidden gap-3 text-sm lg:gap-5 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={getLinkClass(link.href)}
              aria-current={
                activeSection === link.href.slice(1)
                  ? "location"
                  : undefined
              }
              onClick={() => setActiveSection(link.href.slice(1))}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="flex flex-col gap-4 border-t border-gray-800 bg-gray-950 px-6 py-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={getLinkClass(link.href)}
              aria-current={
                activeSection === link.href.slice(1)
                  ? "location"
                  : undefined
              }
              onClick={() => {
                setActiveSection(link.href.slice(1))
                setMenuOpen(false)
              }}
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

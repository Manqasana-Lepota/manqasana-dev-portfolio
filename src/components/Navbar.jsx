import { useEffect, useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)
        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      { rootMargin: "-35% 0px -55% 0px" }
    )

    navLinks.forEach((link) => {
      const sectionId = link.href.slice(1)
      const section = document.getElementById(sectionId)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const getLinkClass = (href) => {
    const isActive = activeSection === href.slice(1)

    return `transition ${
      isActive
        ? "text-blue-400"
        : "text-gray-300 hover:text-blue-400"
    }`
  }

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-800 bg-gray-950/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-xl font-bold text-white"
          onClick={() => {
            setActiveSection("home")
            setMenuOpen(false)
          }}
        >
          Manqasana
        </a>

        <button
          type="button"
          className="text-2xl text-white md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className="hidden gap-5 text-sm md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={getLinkClass(link.href)}
              aria-current={
                activeSection === link.href.slice(1) ? "location" : undefined
              }
              onClick={() => setActiveSection(link.href.slice(1))}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-4 border-t border-gray-800 bg-gray-950 px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={getLinkClass(link.href)}
              aria-current={
                activeSection === link.href.slice(1) ? "location" : undefined
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

function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400 py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">

        <p>
          © {new Date().getFullYear()} Manqasana Lepota
        </p>

        <p className="text-sm">
          Built with React, Vite and Tailwind CSS
        </p>

      </div>
    </footer>
  )
}

export default Footer
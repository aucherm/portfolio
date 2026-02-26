import { useState } from "react"
import { projects } from "../data/projects"

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="portfolio" className="bg-white py-12">
      <h2 className="text-3xl font-audiowide text-primary text-center mb-8">
        Mes réalisations
      </h2>

      <div className="container mx-auto grid gap-6 px-6 md:grid-cols-3 sm:grid-cols-2">
        {projects.map((p, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="relative w-full pt-[56.25%] rounded-lg overflow-hidden shadow-lg group cursor-pointer"
          >
            {p.img && (
              <img
                src={p.img}
                alt={p.title}
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}

            {/* Overlay */}
            <div
              className={`absolute top-0 left-0 w-full h-full 
              bg-green flex flex-col justify-center items-center text-center
              transition-opacity duration-300 p-4 rounded-lg
              ${activeIndex === index ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}`}
            >
              <h3 className="text-xl font-audiowide mb-2 text-black">
                {p.title}
              </h3>
              <p className="mb-1 text-sm text-black">{p.description}</p>
              <p className="mb-2 text-sm font-semibold text-black">
                Technologies: {p.tech}
              </p>

              <div className="flex gap-4 mb-2">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-black hover:text-mint transition-colors"
                >
                  GitHub
                </a>

                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-black hover:text-mint transition-colors"
                  >
                    Demo
                  </a>
                )}
              </div>

              <p className="text-xs text-white">{p.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
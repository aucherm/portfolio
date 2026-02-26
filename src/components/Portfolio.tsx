import { useState, type JSX } from "react"
import { projects } from "../data/projects"

type Project = {
  title: string
  description: string
  tech: string
  img?: string
  github: string
  demo?: string
  date: string
}

export default function Portfolio(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index))
  }

  return (
    <section id="portfolio" className="bg-white py-12">
      <h2 className="text-3xl font-audiowide text-primary text-center mb-8">
        Mes réalisations
      </h2>

      <div className="container mx-auto grid gap-6 px-6 md:grid-cols-3 sm:grid-cols-2">
        {projects.map((p: Project, index: number) => {
          const isActive = activeIndex === index

          return (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className="relative w-full pt-[56.25%] rounded-lg overflow-hidden shadow-lg group cursor-pointer"
            >
              {p.img && (
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 md:group-hover:scale-105"
                />
              )}

              <div
                className={`
                  absolute top-0 left-0 w-full h-full
                  bg-green flex flex-col justify-center items-center text-center
                  p-4 rounded-lg transition-opacity duration-300

                  ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0"
                  }

                  md:opacity-0 md:group-hover:opacity-100
                `}
              >
                <h3 className="text-xl font-audiowide mb-2 text-black">
                  {p.title}
                </h3>

                <p className="mb-1 text-sm text-black">
                  {p.description}
                </p>

                <p className="mb-2 text-sm font-semibold text-black">
                  Technologies: {p.tech}
                </p>

                <div className="flex gap-4 mb-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-black hover:text-mint transition-colors"
                    onClick={(e) => e.stopPropagation()} // empêche fermeture au clic
                  >
                    GitHub
                  </a>

                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-black hover:text-mint transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Demo
                    </a>
                  )}
                </div>

                <p className="text-xs text-white">{p.date}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
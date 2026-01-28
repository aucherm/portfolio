import { projects } from "../data/projects"

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-12">
      <h2 className="text-3xl font-audiowide text-primary text-center mb-8">
        Mes réalisations
      </h2>

      <div className="container mx-auto grid gap-6 px-6 md:grid-cols-4 sm:grid-cols-2">
        {projects.map((p, index) => (
          <div
            key={index}
            className="relative w-full pt-[130%] rounded-lg overflow-hidden shadow-lg group"
          >
            {p.img && (
              <img
                src={p.img}
                alt={p.title}
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}

            {/* Infos avec fond bleu semi-transparent */}
            <div className="absolute top-0 left-0 w-full h-full 
                            bg-grey flex flex-col justify-center items-center text-center
                            opacity-0 transition-opacity duration-300 group-hover:opacity-100
                            p-4 rounded-lg">
              <h3 className="text-xl font-audiowide mb-2 text-white">{p.title}</h3>
              <p className="mb-1 text-sm text-white">{p.description}</p>
              <p className="mb-2 text-sm font-semibold text-white">Technologies: {p.tech}</p>
              <div className="flex gap-4 mb-2">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-white hover:text-mint transition-colors"
                >
                  GitHub
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-white hover:text-mint transition-colors"
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


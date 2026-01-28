import { useScrollAnimation } from "../hooks/useScrollAnimation"
import experience from "../data/experience"

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="experience" className="relative py-32 px-6 bg-ocean/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={ref} className={`mb-16 space-y-4 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-aqua to-calm rounded-full" />
          <p className="text-lg text-mist/80 max-w-2xl">
            Hands-on experience in software development, web technologies, and collaborative teamwork across innovative companies.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experience.map((job, idx) => (
            <div
              key={job.id}
              className={`relative ${isVisible ? `stagger-item-${idx}` : "opacity-0"}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 w-4 h-4 bg-aqua rounded-full border-4 border-deep hidden md:block -translate-x-8" />

              {/* Timeline line */}
              {idx < experience.length - 1 && (
                <div className="absolute left-0 top-12 w-0.5 h-24 bg-gradient-to-b from-aqua to-calm/20 hidden md:block -translate-x-3" />
              )}

              {/* Job Card */}
              <div className="p-8 rounded-2xl bg-deep border border-white/5 hover:border-aqua/50 transition-all duration-300 md:ml-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-aqua mb-2">{job.title}</h3>
                    <p className="text-lg text-calm font-semibold">{job.company}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-mist/80 text-sm">
                      {job.startDate} – {job.endDate}
                    </p>
                    {job.current && (
                      <span className="inline-block mt-2 px-3 py-1 rounded-full bg-aqua/20 text-aqua text-xs font-semibold uppercase">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                {/* Location */}
                <p className="text-mist/70 text-sm mb-6">📍 {job.location}</p>

                {/* Description */}
                <p className="text-mist/90 leading-relaxed mb-6">{job.description}</p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-calm text-sm uppercase tracking-widest font-semibold mb-3">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex gap-3 text-mist/80">
                        <span className="text-aqua mt-1">▸</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-aqua text-sm uppercase tracking-widest font-semibold mb-3">
                    Skills Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-ocean border border-white/10 text-xs text-mist hover:border-aqua hover:text-aqua transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`mt-16 p-8 rounded-2xl bg-gradient-to-r from-aqua/5 to-calm/5 border border-white/10 text-center ${isVisible ? "animate-slide-in-up" : "opacity-0"}`} style={{animationDelay: "0.4s"}}>
          <p className="text-mist/90 mb-6">
            I'm actively seeking a <span className="text-aqua font-semibold">challenging graduate position</span> where I can leverage my experience and continue growing as a developer.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-aqua to-calm text-deep font-semibold hover:shadow-lg hover:shadow-aqua/50 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

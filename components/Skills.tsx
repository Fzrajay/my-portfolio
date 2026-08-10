const skills = [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend',
    items: ['PHP', 'Laravel', 'Java', 'Python', 'Node.js', 'REST API'],
  },
  {
    category: 'Database',
    items: ['MySQL', 'PostgreSQL', 'SQLite', 'MariaDB', 'Firebase'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'DBeaver', 'Postman'],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        py-16
        sm:py-20
        lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =========================
            HEADER
        ========================= */}

        <div className="mb-10 text-center sm:mb-14 lg:mb-16">
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-cyan-400

              sm:text-sm
            "
          >
            Skills
          </p>

          <h2
            className="
              mt-2
              text-3xl
              font-bold
              tracking-tight
              text-white

              sm:mt-3
              sm:text-4xl

              lg:text-5xl
            "
          >
            My Tech Stack
          </h2>

          <div
            className="
              mx-auto
              mt-4
              h-1
              w-16
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-indigo-500

              sm:mt-5
              sm:w-24
            "
          />
        </div>

        {/* =========================
            SKILLS GRID
        ========================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5

            sm:gap-6

            md:grid-cols-2
            md:gap-7

            lg:grid-cols-4
            lg:gap-8
          "
        >
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="
                group
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/70
                p-5
                backdrop-blur-sm
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-cyan-400/40
                hover:shadow-lg
                hover:shadow-cyan-500/5

                sm:p-6

                lg:p-7
                lg:hover:-translate-y-2
              "
            >
              {/* Category */}

              <h3
                className="
                  text-xl
                  font-semibold
                  text-cyan-400

                  sm:text-2xl
                "
              >
                {skill.category}
              </h3>

              {/* Small line */}

              <div
                className="
                  mt-3
                  h-px
                  w-10
                  bg-cyan-400/40
                  transition-all
                  duration-300
                  group-hover:w-16
                  group-hover:bg-cyan-400
                "
              />

              {/* Skills */}

              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  gap-2

                  sm:gap-3
                "
              >
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-slate-700
                      bg-slate-800/80
                      px-3
                      py-1.5
                      text-xs
                      text-slate-300
                      transition-all
                      duration-200

                      hover:border-cyan-400/40
                      hover:bg-cyan-400/10
                      hover:text-cyan-300

                      sm:px-4
                      sm:py-2
                      sm:text-sm
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

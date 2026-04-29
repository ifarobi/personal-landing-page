import { PROFILE, type ProjectGlyph } from './profile'

function ProjectGlyphSvg({ kind }: { kind: ProjectGlyph }) {
  if (kind === 'tui') {
    return (
      <svg viewBox="0 0 16 16" width="44" height="44" shapeRendering="crispEdges">
        <path
          fill="currentColor"
          d="M1 2h14v1H1zM1 3h1v9H1zM14 3h1v9h-1zM2 12h13v1H2zM3 5h1v1H3zM4 5h1v1H4zM6 5h1v1H6zM7 5h1v1H7zM3 7h1v1H3zM4 7h1v1H4zM5 7h1v1H5zM3 9h2v1H3zM6 9h1v1H6z"
        />
      </svg>
    )
  }
  if (kind === 'color') {
    return (
      <svg viewBox="0 0 16 16" width="44" height="44" shapeRendering="crispEdges">
        <path fill="currentColor" d="M3 2h10v1H3zM2 3h1v10H2zM13 3h1v10h-1zM3 13h10v1H3z" />
        <path
          fill="currentColor"
          d="M4 4h3v3H4zM9 4h3v3H9zM4 9h3v3H4zM9 9h3v3H9z"
          opacity=".55"
        />
      </svg>
    )
  }
  if (kind === 'portrait') {
    return (
      <svg viewBox="0 0 16 16" width="44" height="44" shapeRendering="crispEdges">
        <path
          fill="currentColor"
          d="M6 3h4v1H6zM5 4h1v3H5zM10 4h1v3h-1zM6 7h4v1H6zM4 9h8v1H4zM3 10h10v4H3z"
        />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 16 16" width="44" height="44" shapeRendering="crispEdges">
      <path
        fill="currentColor"
        d="M7 2h2v1H7zM5 3h6v1H5zM3 4h10v1H3zM2 5h12v1H2zM3 6h2v6H3zM11 6h2v6h-2zM5 7h6v5H5zM7 8h2v1H7zM7 10h2v2H7z"
      />
    </svg>
  )
}

function App() {
  const P = PROFILE

  return (
    <div className="px-root">
      <main className="px-shell">
        <header>
          <div className="px-meta">STAFF FULLSTACK ENGINEER · 10+ YR · GMT+7</div>
          <h1 className="px-name">
            ILHAM
            <br />
            <span className="accent">FAROBI</span>
          </h1>
          <p className="px-lede">
            Fullstack engineer in Indonesia. Ten-plus years building things on the web — mostly the
            front, often the back. IC by track, open to lead and staff roles. Currently at
            KangarooHealth, remote, and happy that way.
          </p>
        </header>

        <section className="px-section">
          <h2 className="px-section-h" data-num="01">
            <span>FACTS</span>
          </h2>
          <dl className="px-dl">
            <div className="px-row">
              <dt>ROLE</dt>
              <dd>Staff Fullstack Engineer · IC-track</dd>
            </div>
            <div className="px-row">
              <dt>BASED</dt>
              <dd>Indonesia · Remote · GMT+7</dd>
            </div>
            <div className="px-row">
              <dt>EMAIL</dt>
              <dd>
                <a className="px-link" href={`mailto:${P.contact.email}`}>
                  {P.contact.email}
                </a>
              </dd>
            </div>
            <div className="px-row">
              <dt>LINKEDIN</dt>
              <dd>
                <a
                  className="px-link"
                  href={P.contact.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {P.contact.linkedin}
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <section className="px-section">
          <h2 className="px-section-h" data-num="02">
            <span>ABOUT</span>
          </h2>
          {P.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </section>

        <section className="px-section">
          <h2 className="px-section-h" data-num="03">
            <span>PROJECTS</span>
          </h2>
          <p className="px-section-lede">
            Things I've built on my own time. Two are live, two are sunsetted but worth a footnote.
          </p>

          {P.personal.map((pr, i) => {
            const glyphClass = `px-pj-glyph${pr.status === 'archived' ? ' is-archived' : ''}`
            const inner = (
              <>
                <span className={glyphClass} aria-hidden="true">
                  <ProjectGlyphSvg kind={pr.glyph} />
                </span>
                <span>
                  <span className="px-w-title">{pr.title.toUpperCase()}</span>
                  {pr.status === 'archived' && (
                    <span className="px-pj-archived">[ ARCHIVED ]</span>
                  )}
                  <span className="px-w-kind">— {pr.kind}</span>
                  <div className="px-w-blurb">{pr.desc}</div>
                  <div className="px-w-tags">
                    [ {pr.tags.map((t) => t.toUpperCase()).join(' · ')} ]
                    {pr.year ? ` · ${pr.year}` : ''}
                  </div>
                </span>
                {pr.status === 'live' ? (
                  <span className="px-w-arrow">↗</span>
                ) : (
                  <span className="px-w-arrow" style={{ visibility: 'hidden' }}>
                    ↗
                  </span>
                )}
              </>
            )

            return pr.status === 'live' && pr.url ? (
              <a
                key={i}
                href={pr.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-work px-pj"
              >
                {inner}
              </a>
            ) : (
              <div key={i} className="px-work px-pj is-archived">
                {inner}
              </div>
            )
          })}
        </section>

        <section className="px-section">
          <h2 className="px-section-h" data-num="04">
            <span>SELECTED WORK</span>
          </h2>
          {P.work.map((w, i) => (
            <a
              key={i}
              href={w.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-work"
            >
              <span className="px-w-y">{w.year}</span>
              <span>
                <span className="px-w-title">{w.title.toUpperCase()}</span>
                <span className="px-w-kind">— {w.kind}</span>
                <div className="px-w-blurb">{w.desc}</div>
                <div className="px-w-tags">
                  [ {w.tags.map((t) => t.toUpperCase()).join(' · ')} ]
                </div>
              </span>
              <span className="px-w-arrow">↗</span>
            </a>
          ))}
        </section>

        <section className="px-section">
          <h2 className="px-section-h" data-num="05">
            <span>EXPERIENCE</span>
          </h2>
          {P.experience.map((e, i) => (
            <article key={i} className="px-job">
              <div className="px-job-h">
                <span className="px-job-y">{e.period}</span>
                <span>
                  <span className="px-job-r">{e.role.toUpperCase()}</span>
                  <span className="px-job-c">@ {e.company}</span>
                  <div className="px-job-where">{e.where.toUpperCase()}</div>
                </span>
              </div>
              <p className="px-job-blurb">{e.blurb}</p>
              <div className="px-job-meta">
                [ {e.stack.map((s) => s.toUpperCase()).join(' · ')} ]
              </div>
            </article>
          ))}
        </section>

        <section className="px-section">
          <h2 className="px-section-h" data-num="06">
            <span>GET IN TOUCH</span>
          </h2>

          <p className="px-touch">
            Email is best —{' '}
            <a className="px-link" href={`mailto:${P.contact.email}`}>
              {P.contact.email}
            </a>
            .
          </p>

          <div className="px-icons">
            <a
              className="px-icon"
              href={P.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="currentColor"
                shapeRendering="crispEdges"
              >
                <path d="m22,2v-1H2v1h-1v20h1v1h20v-1h1V2h-1Zm-9,10v8h-3v-11h3v1h1v-1h4v1h1v10h-3v-8h-3Zm-9-4v-3h3v3h-3Zm3,1v11h-3v-11h3Z" />
              </svg>
            </a>
            <a
              className="px-icon"
              href={P.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="currentColor"
                shapeRendering="crispEdges"
              >
                <polygon points="23 9 23 15 22 15 22 17 21 17 21 19 20 19 20 20 19 20 19 21 18 21 18 22 16 22 16 23 15 23 15 18 14 18 14 17 15 17 15 16 17 16 17 15 18 15 18 14 19 14 19 9 18 9 18 6 16 6 16 7 15 7 15 8 14 8 14 7 10 7 10 8 9 8 9 7 8 7 8 6 6 6 6 9 5 9 5 14 6 14 6 15 7 15 7 16 9 16 9 18 7 18 7 17 6 17 6 16 4 16 4 17 5 17 5 19 6 19 6 20 9 20 9 23 8 23 8 22 6 22 6 21 5 21 5 20 4 20 4 19 3 19 3 17 2 17 2 15 1 15 1 9 2 9 2 7 3 7 3 5 4 5 4 4 5 4 5 3 7 3 7 2 9 2 9 1 15 1 15 2 17 2 17 3 19 3 19 4 20 4 20 5 21 5 21 7 22 7 22 9 23 9" />
              </svg>
            </a>
            <a
              className="px-icon"
              href={P.contact.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="currentColor"
                shapeRendering="crispEdges"
              >
                <path d="m15.5,10v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h-3v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1h-1v-2h-1v-1h-1v-1H1.5v1h1v1h1v1h1v2h1v1h1v2h1v1h1v2h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h3v-1h1v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v2h1v1h1v1h7v-1h-1v-1h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h1Zm0,4v1h1v2h1v1h1v2h-3v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-2h3v1h1v2h1v1h1v2h1v1h1v1h1v2h1Z" />
              </svg>
            </a>
          </div>
        </section>

        <footer className="px-foot">
          <span>© {new Date().getFullYear()} ILHAM FAROBI</span>
          <span>SET IN PRESS START 2P</span>
        </footer>
      </main>
    </div>
  )
}

export default App

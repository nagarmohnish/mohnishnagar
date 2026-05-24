/* Design 1 — Swiss Editorial
 * Serif-driven, single accent, generous whitespace. Quiet & confident.
 * Bg: warm off-white. Text: near-black. Accent: deep terracotta.
 */

const editorialTokens = {
  bg: '#F6F3EC',
  bgDeep: '#EFEAE0',
  ink: '#1A1815',
  inkSoft: '#5A554D',
  inkFaint: '#8D877C',
  rule: '#D6CFC0',
  accent: '#A8412B',
  paper: '#FBF8F1',
  serif: '"Newsreader", "Source Serif Pro", "Iowan Old Style", Georgia, serif',
  sans: '"Inter", system-ui, -apple-system, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

function EditorialDesign() {
  const D = window.PORTFOLIO_DATA;
  const t = editorialTokens;

  // shared atoms ------------------------------------------------------------
  const SectionLabel = ({ num, label }) => (
    <div style={{
      display: 'flex', alignItems: 'baseline', gap: 16,
      fontFamily: t.sans, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase',
      color: t.inkFaint, marginBottom: 32,
    }}>
      <span style={{ color: t.accent, fontWeight: 600 }}>{num}</span>
      <span style={{ flex: '0 0 32px', height: 1, background: t.rule }} />
      <span>{label}</span>
    </div>
  );

  const SectionH2 = ({ children }) => (
    <h2 style={{
      fontFamily: t.serif, fontWeight: 400, fontSize: 56, lineHeight: 1.08,
      letterSpacing: -1.2, color: t.ink, margin: '0 0 56px', maxWidth: 720,
    }}>{children}</h2>
  );

  const Rule = ({ style }) => (
    <div style={{ height: 1, background: t.rule, ...style }} />
  );

  // page --------------------------------------------------------------------
  return (
    <div style={{
      width: 1440, background: t.bg, color: t.ink, fontFamily: t.sans,
      paddingBottom: 0, position: 'relative',
    }}>
      {/* Top nav ----------------------------------------------------------- */}
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '32px 96px', borderBottom: `1px solid ${t.rule}`,
      }}>
        <div style={{ fontFamily: t.serif, fontSize: 22, fontWeight: 500, letterSpacing: -0.3 }}>
          Mohnish Nagar
        </div>
        <nav style={{ display: 'flex', gap: 40, fontSize: 14, color: t.inkSoft }}>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>Work</a>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>Writing</a>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
        </nav>
        <a style={{
          fontSize: 13, color: t.accent, textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 3, background: t.accent }} />
          {D.email}
        </a>
      </header>

      {/* Hero --------------------------------------------------------------- */}
      <section style={{ padding: '120px 96px 140px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 96, alignItems: 'end' }}>
          <div>
            <div style={{
              fontFamily: t.sans, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase',
              color: t.accent, marginBottom: 32, display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ width: 8, height: 8, borderRadius: 4, background: t.accent }} />
              {D.available}
            </div>
            <div style={{
              fontFamily: t.serif, fontSize: 28, fontStyle: 'italic',
              color: t.inkSoft, marginBottom: 16, letterSpacing: -0.3,
            }}>
              Hi, I'm
            </div>
            <h1 style={{
              fontFamily: t.serif, fontWeight: 400, fontSize: 144, lineHeight: 0.94,
              letterSpacing: -4.5, color: t.ink, margin: 0,
            }}>
              Mohnish<br />Nagar<span style={{ color: t.accent }}>.</span>
            </h1>
            <div style={{
              fontFamily: t.serif, fontSize: 36, fontStyle: 'italic', fontWeight: 400,
              color: t.inkSoft, marginTop: 40, letterSpacing: -0.6, lineHeight: 1.25,
            }}>
              Growth &amp; monetization, <span style={{ color: t.ink, fontStyle: 'normal' }}>shipped 0 → 1.</span>
            </div>
          </div>

          <div style={{ paddingBottom: 16 }}>
            <p style={{
              fontFamily: t.serif, fontSize: 19, lineHeight: 1.55, color: t.inkSoft, margin: 0,
            }}>
              {D.intro}
            </p>
            <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between',
                background: t.ink, color: t.paper, fontSize: 14, fontWeight: 500,
                padding: '16px 22px', textDecoration: 'none', letterSpacing: 0.2,
              }}>
                <span>Download résumé</span>
                <span>↓</span>
              </a>
              <a style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between',
                border: `1px solid ${t.ink}`, color: t.ink, fontSize: 14, fontWeight: 500,
                padding: '15px 22px', textDecoration: 'none', letterSpacing: 0.2,
              }}>
                <span>Get in touch</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div style={{
          marginTop: 120, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: `1px solid ${t.rule}`, borderBottom: `1px solid ${t.rule}`,
        }}>
          {D.headlineStats.map((s, i) => (
            <div key={i} style={{
              padding: '36px 32px',
              borderRight: i < 3 ? `1px solid ${t.rule}` : 'none',
            }}>
              <div style={{
                fontFamily: t.serif, fontSize: 56, fontWeight: 400, lineHeight: 1,
                letterSpacing: -1.5, color: t.ink, marginBottom: 12,
              }}>{s.value}</div>
              <div style={{ fontSize: 13, color: t.inkSoft, letterSpacing: 0.2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About ------------------------------------------------------------- */}
      <section style={{ padding: '0 96px 140px' }}>
        <SectionLabel num="01" label="About" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96 }}>
          <SectionH2>Know me<br />better.</SectionH2>
          <div>
            <p style={{
              fontFamily: t.serif, fontSize: 22, lineHeight: 1.55, color: t.ink,
              margin: '0 0 24px', letterSpacing: -0.2,
            }}>
              Hands-on across subscription systems, payments, GA4 instrumentation, newsletter growth, and funnel optimization.
            </p>
            <p style={{
              fontFamily: t.serif, fontSize: 17, lineHeight: 1.7, color: t.inkSoft, margin: 0,
            }}>
              {D.bioLong}
            </p>
            <div style={{ display: 'flex', gap: 48, marginTop: 48 }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: t.inkFaint, marginBottom: 8 }}>Education</div>
                <div style={{ fontFamily: t.serif, fontSize: 17, color: t.ink }}>{D.education.school}</div>
                <div style={{ fontSize: 13, color: t.inkSoft, marginTop: 2 }}>{D.education.degree}</div>
              </div>
              <div>
                <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: t.inkFaint, marginBottom: 8 }}>Based in</div>
                <div style={{ fontFamily: t.serif, fontSize: 17, color: t.ink }}>Bangalore, India</div>
                <div style={{ fontSize: 13, color: t.inkSoft, marginTop: 2 }}>UTC +5:30</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div style={{ marginTop: 96 }}>
          <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: t.inkFaint, marginBottom: 32 }}>What I work on</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 80px' }}>
            {D.skills.map((s, i) => (
              <div key={i} style={{
                padding: '28px 0',
                borderTop: `1px solid ${t.rule}`,
                borderBottom: i >= D.skills.length - 2 ? `1px solid ${t.rule}` : 'none',
                display: 'grid', gridTemplateColumns: '180px 1fr', gap: 32,
              }}>
                <div>
                  <div style={{ fontFamily: t.serif, fontSize: 18, color: t.ink, marginBottom: 4 }}>{s.group}</div>
                  <div style={{ fontSize: 12, color: t.inkFaint, fontStyle: 'italic' }}>{s.caption}</div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 8px' }}>
                  {s.primary.map((p) => (
                    <span key={p} style={{
                      fontSize: 13, color: t.ink, padding: '4px 10px',
                      background: t.paper, border: `1px solid ${t.rule}`,
                    }}>{p}</span>
                  ))}
                  {s.more.map((p) => (
                    <span key={p} style={{ fontSize: 13, color: t.inkSoft, padding: '4px 10px' }}>{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience -------------------------------------------------------- */}
      <section style={{ background: t.paper, padding: '120px 96px', borderTop: `1px solid ${t.rule}`, borderBottom: `1px solid ${t.rule}` }}>
        <SectionLabel num="02" label="Experience" />
        <SectionH2>Where I've<br />made impact.</SectionH2>

        <div>
          {D.experience.map((e, i) => (
            <article key={i} style={{
              padding: '48px 0',
              borderTop: `1px solid ${t.rule}`,
              borderBottom: i === D.experience.length - 1 ? `1px solid ${t.rule}` : 'none',
              display: 'grid', gridTemplateColumns: '200px 1fr 280px', gap: 56,
            }}>
              <div>
                <div style={{ fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase', color: t.inkFaint, marginBottom: 6 }}>
                  {e.period}
                </div>
                {e.current && (
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontSize: 11, color: t.accent, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase',
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: 3, background: t.accent }} />
                    Current
                  </div>
                )}
              </div>
              <div>
                <h3 style={{
                  fontFamily: t.serif, fontSize: 30, fontWeight: 400,
                  letterSpacing: -0.5, color: t.ink, margin: '0 0 8px', lineHeight: 1.15,
                }}>
                  {e.role}
                </h3>
                <div style={{ fontSize: 14, color: t.inkSoft, marginBottom: 24, display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ color: t.accent, fontWeight: 500 }}>{e.company}</span>
                  <span style={{ color: t.rule }}>·</span>
                  <span>{e.location}</span>
                </div>
                <p style={{ fontFamily: t.serif, fontSize: 17, lineHeight: 1.65, color: t.inkSoft, margin: '0 0 20px' }}>
                  {e.body}
                </p>
                {e.highlight && (
                  <div style={{
                    borderLeft: `2px solid ${t.accent}`, padding: '6px 0 6px 18px',
                    marginTop: 24,
                  }}>
                    <div style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: t.accent, marginBottom: 8, fontWeight: 600 }}>
                      {e.highlight.label}
                    </div>
                    <p style={{ fontFamily: t.serif, fontSize: 16, lineHeight: 1.6, color: t.ink, margin: 0 }}>
                      {e.highlight.body}
                    </p>
                  </div>
                )}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 24 }}>
                  {e.stack.map((s) => (
                    <span key={s} style={{
                      fontFamily: t.mono, fontSize: 11, padding: '4px 8px',
                      color: t.inkSoft, background: t.bg, border: `1px solid ${t.rule}`,
                    }}>{s}</span>
                  ))}
                </div>
              </div>
              <div>
                {e.metrics && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: `1px solid ${t.rule}` }}>
                    {e.metrics.map((m, j) => (
                      <div key={j} style={{
                        padding: '20px 16px',
                        borderRight: j % 2 === 0 ? `1px solid ${t.rule}` : 'none',
                        borderBottom: j < 2 ? `1px solid ${t.rule}` : 'none',
                      }}>
                        <div style={{ fontFamily: t.serif, fontSize: 28, color: t.ink, letterSpacing: -0.5 }}>{m.value}</div>
                        <div style={{ fontSize: 11, color: t.inkFaint, marginTop: 4, letterSpacing: 0.5 }}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Projects ---------------------------------------------------------- */}
      <section style={{ padding: '120px 96px' }}>
        <SectionLabel num="03" label="Projects" />
        <SectionH2>Things<br />I've built.</SectionH2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 64px' }}>
          {D.featuredProjects.map((p, i) => (
            <article key={p.num} style={{
              padding: '36px 0',
              borderTop: `1px solid ${t.rule}`,
              borderBottom: i >= D.featuredProjects.length - 2 ? `1px solid ${t.rule}` : 'none',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
                <span style={{ fontFamily: t.mono, fontSize: 12, color: t.accent }}>{p.num} / {p.tag}</span>
                <span style={{ fontSize: 12, color: t.inkFaint }}>{p.stack} ↗</span>
              </div>
              <h3 style={{
                fontFamily: t.serif, fontSize: 28, fontWeight: 400, color: t.ink,
                margin: '0 0 12px', letterSpacing: -0.4, lineHeight: 1.2,
              }}>
                {p.title}
              </h3>
              <p style={{ fontFamily: t.serif, fontSize: 16, lineHeight: 1.6, color: t.inkSoft, margin: 0 }}>
                {p.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Categories */}
        <div style={{ marginTop: 80 }}>
          <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: t.inkFaint, marginBottom: 32 }}>
            More projects, by stack
          </div>
          {D.projectCategories.map((c, i) => (
            <div key={i} style={{
              padding: '24px 0',
              borderTop: `1px solid ${t.rule}`,
              borderBottom: i === D.projectCategories.length - 1 ? `1px solid ${t.rule}` : 'none',
              display: 'grid', gridTemplateColumns: '320px 1fr', gap: 48, alignItems: 'baseline',
            }}>
              <div>
                <div style={{ fontFamily: t.serif, fontSize: 22, color: t.ink, letterSpacing: -0.3 }}>{c.cat}</div>
                <div style={{ fontSize: 12, color: t.inkFaint, marginTop: 4 }}>{c.count} {c.count === 1 ? 'repository' : 'repositories'}</div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 14px' }}>
                {c.items.map((it) => (
                  <span key={it.title} style={{
                    fontSize: 13, color: t.ink, padding: '4px 12px',
                    background: t.paper, border: `1px solid ${t.rule}`,
                  }}>
                    {it.title} <span style={{ color: t.inkFaint, marginLeft: 6 }}>{it.stack}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact ----------------------------------------------------------- */}
      <section style={{ background: t.ink, color: t.paper, padding: '120px 96px' }}>
        <div style={{ fontFamily: t.sans, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: '#A8412B', marginBottom: 32, display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontWeight: 600 }}>04</span>
          <span style={{ width: 32, height: 1, background: '#A8412B' }} />
          <span style={{ color: '#9E9286' }}>Contact</span>
        </div>
        <h2 style={{
          fontFamily: t.serif, fontWeight: 400, fontSize: 96, lineHeight: 1,
          letterSpacing: -2.4, color: t.paper, margin: '0 0 48px', maxWidth: 1100,
        }}>
          Let's build<br />something<span style={{ color: t.accent }}>.</span>
        </h2>
        <p style={{
          fontFamily: t.serif, fontSize: 22, lineHeight: 1.55, color: '#C5B9A8',
          maxWidth: 720, margin: '0 0 64px',
        }}>
          I'm always interested in hearing about new opportunities, challenging problems, and ambitious projects.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid rgba(255,255,255,0.12)' }}>
          {[
            { label: 'Email',   value: D.email,    sub: 'Best for everything' },
            { label: 'Phone',   value: D.phone,    sub: 'IST business hours' },
            { label: 'LinkedIn', value: 'mohnish-nagar', sub: 'Professional network' },
            { label: 'GitHub',  value: 'nagarmohnish', sub: 'Code & projects' },
          ].map((c, i) => (
            <div key={c.label} style={{
              padding: '32px',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.12)' : 'none',
            }}>
              <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: '#9E9286', marginBottom: 16 }}>{c.label}</div>
              <div style={{ fontFamily: t.serif, fontSize: 18, color: t.paper, marginBottom: 6, letterSpacing: -0.2 }}>{c.value}</div>
              <div style={{ fontSize: 12, color: '#7E7468' }}>{c.sub}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: 13, color: '#7E7468' }}>
          <div>© 2026 Mohnish Nagar — Bangalore, India</div>
          <div style={{ fontFamily: t.mono }}>v.2026.01 · designed with intent</div>
        </div>
      </section>
    </div>
  );
}

window.EditorialDesign = EditorialDesign;

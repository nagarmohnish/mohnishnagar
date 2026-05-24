/* Design 5 — Document Dossier
 * Two-column: sidebar (identity + nav + contact) + main column (long-form).
 * Pure white paper, ochre accent, dense but airy. Reads like a polished CV/dossier.
 */

const dossierTokens = {
  bg: '#FBFBF8',
  paper: '#FFFFFF',
  ink: '#18181B',
  inkSoft: '#52525B',
  inkFaint: '#A1A1AA',
  rule: '#E4E4E7',
  ruleSoft: '#F0F0EE',
  accent: '#B8843D',      // soft ochre
  accent2: '#1F5C44',     // deep green
  sidebarBg: '#1A1A1A',
  sidebarInk: '#F5F5F2',
  sidebarSoft: '#A09C92',
  sans: '"Inter", system-ui, -apple-system, sans-serif',
  serif: '"Newsreader", "Source Serif Pro", Georgia, serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

function DossierDesign() {
  const D = window.PORTFOLIO_DATA;
  const t = dossierTokens;

  const SectionTitle = ({ num, label, title }) => (
    <div style={{ marginBottom: 36 }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 12,
        fontSize: 11, letterSpacing: 1.8, textTransform: 'uppercase',
        color: t.accent, fontWeight: 600, marginBottom: 16,
      }}>
        <span style={{
          width: 24, height: 24, borderRadius: 12, background: t.accent, color: t.paper,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, fontWeight: 700, letterSpacing: 0,
        }}>{num}</span>
        <span>{label}</span>
        <span style={{ flex: 1, height: 1, background: t.rule, marginLeft: 8 }} />
      </div>
      <h2 style={{
        fontFamily: t.serif, fontSize: 40, fontWeight: 500, letterSpacing: -0.8,
        lineHeight: 1.1, color: t.ink, margin: 0,
      }}>{title}</h2>
    </div>
  );

  return (
    <div style={{
      width: 1440, background: t.bg, color: t.ink, fontFamily: t.sans,
      display: 'grid', gridTemplateColumns: '360px 1fr', position: 'relative',
    }}>
      {/* SIDEBAR ----------------------------------------------------------- */}
      <aside style={{
        background: t.sidebarBg, color: t.sidebarInk,
        padding: '56px 40px', position: 'relative',
      }}>
        {/* identity */}
        <div>
          <div style={{
            width: 80, height: 80, borderRadius: 16, marginBottom: 24,
            background: `linear-gradient(135deg, ${t.accent} 0%, ${t.accent2} 100%)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: t.serif, fontSize: 36, fontWeight: 500, color: t.paper, letterSpacing: -1,
          }}>MN</div>
          <h1 style={{
            fontFamily: t.serif, fontSize: 36, fontWeight: 500, letterSpacing: -1,
            lineHeight: 1.05, color: t.sidebarInk, margin: '0 0 8px',
          }}>
            Mohnish<br />Nagar
          </h1>
          <div style={{ fontSize: 13, color: t.sidebarSoft, lineHeight: 1.5 }}>
            Growth &amp; Monetization Operator<br />
            Founder's Office, LH2 Holdings
          </div>
        </div>

        <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', margin: '36px 0' }} />

        {/* availability */}
        <div style={{
          padding: '14px 16px', borderRadius: 10,
          background: 'rgba(184,132,61,0.12)', border: '1px solid rgba(184,132,61,0.3)',
          display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28,
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: 4, background: t.accent,
            boxShadow: `0 0 12px ${t.accent}`,
          }} />
          <div>
            <div style={{ fontSize: 13, color: t.accent, fontWeight: 600 }}>Available</div>
            <div style={{ fontSize: 11, color: t.sidebarSoft }}>for new opportunities</div>
          </div>
        </div>

        {/* contact */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 10, letterSpacing: 1.8, textTransform: 'uppercase', color: t.sidebarSoft, marginBottom: 12 }}>Contact</div>
          {[
            { label: 'Email',    value: D.email },
            { label: 'Phone',    value: D.phone },
            { label: 'LinkedIn', value: 'in/mohnish-nagar' },
            { label: 'GitHub',   value: 'nagarmohnish' },
            { label: 'Location', value: 'Bangalore, IN · UTC+5:30' },
          ].map((c) => (
            <div key={c.label} style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 11, color: t.sidebarSoft, marginBottom: 2 }}>{c.label}</div>
              <div style={{ fontSize: 13, color: t.sidebarInk, letterSpacing: -0.1 }}>{c.value}</div>
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', margin: '0 0 28px' }} />

        {/* table of contents */}
        <div>
          <div style={{ fontSize: 10, letterSpacing: 1.8, textTransform: 'uppercase', color: t.sidebarSoft, marginBottom: 16 }}>Contents</div>
          {[
            { num: '01', label: 'Profile',     sub: 'About & focus' },
            { num: '02', label: 'Experience',  sub: '4 roles · 2023–now' },
            { num: '03', label: 'Skills',      sub: '5 disciplines' },
            { num: '04', label: 'Projects',    sub: '19 selected works' },
            { num: '05', label: 'Education',   sub: 'IIT Kanpur' },
          ].map((c, i) => (
            <a key={c.num} style={{
              display: 'flex', gap: 12, padding: '10px 12px', marginBottom: 2, borderRadius: 8,
              background: i === 1 ? 'rgba(255,255,255,0.06)' : 'transparent',
              color: 'inherit', textDecoration: 'none', cursor: 'pointer',
            }}>
              <span style={{ fontFamily: t.mono, fontSize: 11, color: i === 1 ? t.accent : t.sidebarSoft, paddingTop: 2 }}>{c.num}</span>
              <div>
                <div style={{ fontSize: 13, color: t.sidebarInk, fontWeight: 500 }}>{c.label}</div>
                <div style={{ fontSize: 11, color: t.sidebarSoft }}>{c.sub}</div>
              </div>
            </a>
          ))}
        </div>

        {/* download */}
        <div style={{ marginTop: 36 }}>
          <a style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 16px', borderRadius: 10, background: t.paper, color: t.ink,
            textDecoration: 'none', fontSize: 13, fontWeight: 500,
          }}>
            <span>Download résumé.pdf</span>
            <span>↓</span>
          </a>
          <div style={{ fontSize: 11, color: t.sidebarSoft, marginTop: 8, textAlign: 'center' }}>
            Updated May 2026 · 2 pages
          </div>
        </div>

        {/* sidebar footer */}
        <div style={{
          position: 'absolute', bottom: 36, left: 40, right: 40,
          fontSize: 10, color: t.sidebarSoft, letterSpacing: 0.5,
          paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.08)',
        }}>
          DOSSIER · MN-2026 · 1/1
        </div>
      </aside>

      {/* MAIN -------------------------------------------------------------- */}
      <main style={{ padding: '64px 80px' }}>

        {/* Header — masthead */}
        <header style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          paddingBottom: 24, borderBottom: `1px solid ${t.rule}`, marginBottom: 64,
          fontSize: 12, color: t.inkFaint, letterSpacing: 0.5,
        }}>
          <span style={{ fontFamily: t.mono }}>FILE / mn.dossier.2026</span>
          <span style={{ fontFamily: t.serif, fontStyle: 'italic' }}>Curriculum Vitae & Portfolio</span>
          <span style={{ fontFamily: t.mono }}>REV. 04 · 26.05.26</span>
        </header>

        {/* Profile / hero ----------------------------------------------- */}
        <section style={{ marginBottom: 96 }}>
          <div style={{ fontSize: 12, letterSpacing: 1.8, textTransform: 'uppercase', color: t.inkFaint, fontWeight: 600, marginBottom: 16 }}>
            Profile
          </div>
          <h2 style={{
            fontFamily: t.serif, fontSize: 64, fontWeight: 500, letterSpacing: -1.8,
            lineHeight: 1.04, color: t.ink, margin: '0 0 24px', maxWidth: 820,
          }}>
            Growth &amp; monetization,<br />
            <span style={{ color: t.accent, fontStyle: 'italic' }}>shipped 0 → 1.</span>
          </h2>

          <p style={{
            fontFamily: t.serif, fontSize: 20, lineHeight: 1.6, color: t.inkSoft,
            margin: '0 0 32px', maxWidth: 760, letterSpacing: -0.1,
          }}>
            {D.intro}
          </p>

          {/* headline stat strip */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            background: t.paper, border: `1px solid ${t.rule}`, borderRadius: 12,
            overflow: 'hidden',
          }}>
            {D.headlineStats.map((s, i) => (
              <div key={i} style={{
                padding: '24px 24px',
                borderRight: i < 3 ? `1px solid ${t.rule}` : 'none',
              }}>
                <div style={{ fontSize: 11, color: t.inkFaint, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 10 }}>
                  {s.label}
                </div>
                <div style={{
                  fontFamily: t.serif, fontSize: 38, fontWeight: 500, letterSpacing: -1.2,
                  color: i === 0 ? t.accent : t.ink,
                }}>{s.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About narrative ------------------------------------------------- */}
        <section style={{ marginBottom: 96 }}>
          <SectionTitle num="01" label="Profile" title="Know me better." />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 64 }}>
            <div>
              <p style={{
                fontFamily: t.serif, fontSize: 18, lineHeight: 1.65, color: t.ink,
                margin: '0 0 20px', letterSpacing: -0.1,
              }}>
                <span style={{
                  fontFamily: t.serif, fontSize: 64, fontWeight: 500, color: t.accent,
                  float: 'left', lineHeight: 0.85, paddingRight: 12, paddingTop: 6, letterSpacing: -2,
                }}>H</span>
                ands-on across subscription systems, payments, GA4 instrumentation, newsletter growth, and funnel optimization. Launched the "Go Ad-Free" subscription on Shark Tank Blog, instrumented end-to-end conversion funnels across 4 assets, and scaled a newsletter to 20K subs in 3 months.
              </p>
              <p style={{
                fontFamily: t.serif, fontSize: 17, lineHeight: 1.65, color: t.inkSoft,
                margin: 0, letterSpacing: -0.1,
              }}>
                Previously the first employee at Opinium.ai (~40L pre-seed) where I built an NLP/LLM social intelligence product from 0→1, and assessed 500+ startups at PedalStart across product, market, and business potential.
              </p>
            </div>
            <aside style={{
              padding: '24px 24px', background: t.paper, border: `1px solid ${t.rule}`, borderRadius: 12,
              alignSelf: 'start',
            }}>
              <div style={{ fontSize: 11, color: t.accent, letterSpacing: 1.5, fontWeight: 600, textTransform: 'uppercase', marginBottom: 12 }}>
                Quick facts
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  ['Role',     "Founder's Office, LH2 Holdings"],
                  ['Focus',    'Growth · Monetization · 0→1'],
                  ['Education', `${D.education.school}`],
                  ['Degree',   D.education.degree],
                  ['Location', 'Bangalore, India'],
                  ['Languages', 'English · Hindi'],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div style={{ fontSize: 11, color: t.inkFaint, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 2 }}>{k}</div>
                    <div style={{ fontSize: 13, color: t.ink, lineHeight: 1.4 }}>{v}</div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {/* Experience ------------------------------------------------------ */}
        <section style={{ marginBottom: 96 }}>
          <SectionTitle num="02" label="Experience" title="Where I've made impact." />

          <div style={{ position: 'relative' }}>
            {/* vertical line */}
            <div style={{
              position: 'absolute', left: 120, top: 8, bottom: 8, width: 1, background: t.rule,
            }} />
            {D.experience.map((e, i) => (
              <article key={i} style={{
                display: 'grid', gridTemplateColumns: '108px 24px 1fr', gap: 24,
                marginBottom: 48, position: 'relative',
              }}>
                {/* date */}
                <div style={{ paddingTop: 4, textAlign: 'right' }}>
                  <div style={{ fontFamily: t.mono, fontSize: 11, color: t.inkFaint, letterSpacing: 0.5 }}>
                    {e.period.split(' — ')[0]}
                  </div>
                  <div style={{ fontFamily: t.mono, fontSize: 11, color: t.inkFaint, letterSpacing: 0.5, marginTop: 2 }}>
                    {e.period.split(' — ')[1]}
                  </div>
                </div>
                {/* node */}
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 6 }}>
                  <div style={{
                    width: 13, height: 13, borderRadius: 7, background: t.paper,
                    border: `2px solid ${e.current ? t.accent : t.inkFaint}`,
                    zIndex: 1,
                    boxShadow: e.current ? `0 0 0 4px ${t.accent}22` : 'none',
                  }} />
                </div>
                {/* body */}
                <div style={{
                  background: t.paper, border: `1px solid ${t.rule}`, borderRadius: 12,
                  padding: '24px 28px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                    <h3 style={{
                      fontFamily: t.serif, fontSize: 22, fontWeight: 500, color: t.ink,
                      letterSpacing: -0.5, margin: 0, lineHeight: 1.25,
                    }}>
                      {e.role}
                    </h3>
                    {e.current && (
                      <span style={{
                        fontSize: 10, padding: '3px 8px', borderRadius: 999,
                        background: `${t.accent}15`, color: t.accent, fontWeight: 600, letterSpacing: 0.5,
                      }}>● CURRENT</span>
                    )}
                  </div>
                  <div style={{ fontSize: 14, color: t.inkSoft, marginBottom: 14 }}>
                    <span style={{ color: t.accent2, fontWeight: 500 }}>{e.company}</span>
                    <span style={{ color: t.inkFaint }}> · {e.location}</span>
                  </div>
                  <p style={{ fontFamily: t.serif, fontSize: 15, lineHeight: 1.65, color: t.inkSoft, margin: '0 0 16px' }}>
                    {e.body}
                  </p>
                  {e.highlight && (
                    <div style={{
                      padding: '16px 20px', background: '#FBF7EE', borderRadius: 8,
                      borderLeft: `3px solid ${t.accent}`, marginTop: 16,
                    }}>
                      <div style={{ fontSize: 11, color: t.accent, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>
                        ✦ {e.highlight.label}
                      </div>
                      <p style={{ fontFamily: t.serif, fontSize: 14, lineHeight: 1.6, color: t.ink, margin: 0 }}>
                        {e.highlight.body}
                      </p>
                    </div>
                  )}
                  {e.metrics && (
                    <div style={{
                      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
                      marginTop: 20, border: `1px solid ${t.rule}`, borderRadius: 8, overflow: 'hidden',
                    }}>
                      {e.metrics.map((m, j) => (
                        <div key={j} style={{
                          padding: '12px 14px',
                          borderRight: j < 3 ? `1px solid ${t.rule}` : 'none',
                          background: t.bg,
                        }}>
                          <div style={{ fontFamily: t.serif, fontSize: 22, fontWeight: 500, color: t.ink, letterSpacing: -0.5 }}>
                            {m.value}
                          </div>
                          <div style={{ fontSize: 10, color: t.inkFaint, letterSpacing: 0.5, marginTop: 2, textTransform: 'uppercase' }}>
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16 }}>
                    {e.stack.map((s) => (
                      <span key={s} style={{
                        fontFamily: t.mono, fontSize: 10.5, padding: '3px 8px', borderRadius: 4,
                        background: t.bg, color: t.inkSoft, border: `1px solid ${t.rule}`,
                      }}>{s}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills ---------------------------------------------------------- */}
        <section style={{ marginBottom: 96 }}>
          <SectionTitle num="03" label="Skills" title="The toolkit." />
          <div style={{
            background: t.paper, border: `1px solid ${t.rule}`, borderRadius: 12, overflow: 'hidden',
          }}>
            {D.skills.map((s, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '200px 1fr',
                padding: '20px 28px',
                borderBottom: i < D.skills.length - 1 ? `1px solid ${t.rule}` : 'none',
                gap: 32, alignItems: 'baseline',
              }}>
                <div>
                  <div style={{ fontFamily: t.serif, fontSize: 17, color: t.ink, fontWeight: 500, letterSpacing: -0.3, marginBottom: 4 }}>
                    {s.group}
                  </div>
                  <div style={{ fontSize: 11, color: t.inkFaint, fontStyle: 'italic' }}>{s.caption}</div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 8px' }}>
                  {s.primary.map((p) => (
                    <span key={p} style={{
                      fontSize: 12, padding: '4px 10px', borderRadius: 6,
                      background: t.bg, color: t.ink, border: `1px solid ${t.rule}`,
                    }}>{p}</span>
                  ))}
                  {s.more.map((p) => (
                    <span key={p} style={{
                      fontSize: 12, padding: '4px 10px',
                      color: t.inkFaint,
                    }}>{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects -------------------------------------------------------- */}
        <section style={{ marginBottom: 96 }}>
          <SectionTitle num="04" label="Selected works" title="Things I've built." />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
            {D.featuredProjects.map((p, i) => (
              <article key={p.num} style={{
                padding: '24px 28px',
                background: t.paper, border: `1px solid ${t.rule}`, borderRadius: 12,
                display: 'grid', gridTemplateColumns: '64px 1fr 200px', gap: 32, alignItems: 'baseline',
              }}>
                <div>
                  <div style={{
                    fontFamily: t.serif, fontSize: 36, color: t.accent, lineHeight: 1, letterSpacing: -1,
                  }}>{p.num}</div>
                  <div style={{ fontSize: 10, color: t.inkFaint, marginTop: 6, letterSpacing: 1, textTransform: 'uppercase' }}>{p.tag}</div>
                </div>
                <div>
                  <h3 style={{
                    fontFamily: t.serif, fontSize: 22, fontWeight: 500, color: t.ink,
                    letterSpacing: -0.4, margin: '0 0 6px', lineHeight: 1.2,
                  }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: t.inkSoft, margin: 0 }}>
                    {p.desc}
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: t.mono, fontSize: 11, color: t.inkFaint, marginBottom: 8, letterSpacing: 0.5 }}>{p.stack}</div>
                  <a style={{
                    display: 'inline-flex', gap: 6, alignItems: 'center',
                    fontSize: 12, color: t.accent2, textDecoration: 'none', fontWeight: 500,
                  }}>
                    View on GitHub <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* More projects, by category */}
          <div style={{ marginTop: 36 }}>
            <div style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: t.inkFaint, fontWeight: 600, marginBottom: 16 }}>
              Additional repositories
            </div>
            {D.projectCategories.map((c) => (
              <div key={c.cat} style={{
                padding: '20px 24px',
                background: t.paper, border: `1px solid ${t.rule}`, borderRadius: 10,
                marginBottom: 8,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
                  <div style={{ fontFamily: t.serif, fontSize: 16, color: t.ink, fontWeight: 500, letterSpacing: -0.2 }}>
                    {c.cat}
                  </div>
                  <span style={{ fontSize: 11, color: t.inkFaint }}>{c.count} repositories</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 8px' }}>
                  {c.items.map((it) => (
                    <span key={it.title} style={{
                      fontSize: 12, padding: '4px 10px', borderRadius: 6,
                      background: t.bg, color: t.ink, border: `1px solid ${t.rule}`,
                    }}>
                      {it.title}
                      <span style={{ color: t.inkFaint, marginLeft: 6, fontFamily: t.mono, fontSize: 10 }}>{it.stack}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education ------------------------------------------------------- */}
        <section style={{ marginBottom: 96 }}>
          <SectionTitle num="05" label="Education" title="Foundations." />
          <div style={{
            padding: '28px 32px',
            background: t.paper, border: `1px solid ${t.rule}`, borderRadius: 12,
            display: 'grid', gridTemplateColumns: '1fr 160px', gap: 32, alignItems: 'center',
          }}>
            <div>
              <h3 style={{
                fontFamily: t.serif, fontSize: 26, fontWeight: 500, color: t.ink,
                letterSpacing: -0.5, margin: '0 0 6px',
              }}>
                Indian Institute of Technology, Kanpur
              </h3>
              <div style={{ fontSize: 15, color: t.inkSoft, marginBottom: 12 }}>
                B.Sc. Earth Sciences <span style={{ color: t.inkFaint }}>·</span> MBA Minor
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: t.inkSoft, margin: 0 }}>
                Coursework spanned Earth Sciences with a business minor — built fluency in structured problem-solving, data interpretation, and business strategy.
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: t.serif, fontSize: 30, color: t.accent, letterSpacing: -0.8 }}>2019—23</div>
              <div style={{ fontSize: 12, color: t.inkFaint, marginTop: 4 }}>Kanpur, India</div>
            </div>
          </div>
        </section>

        {/* Closing contact ------------------------------------------------- */}
        <section>
          <div style={{
            padding: '48px 48px',
            background: t.ink, color: t.paper, borderRadius: 16,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: -80, right: -80, width: 280, height: 280,
              borderRadius: 140, background: `radial-gradient(circle, ${t.accent}40, transparent 70%)`,
            }} />
            <div style={{ fontSize: 11, color: t.accent, letterSpacing: 1.5, fontWeight: 600, textTransform: 'uppercase', marginBottom: 16 }}>
              Get in touch
            </div>
            <h2 style={{
              fontFamily: t.serif, fontSize: 56, fontWeight: 500, letterSpacing: -1.8,
              lineHeight: 1.05, color: t.paper, margin: '0 0 20px', maxWidth: 720,
            }}>
              Let's build<br />
              <span style={{ color: t.accent, fontStyle: 'italic' }}>something good.</span>
            </h2>
            <p style={{
              fontFamily: t.serif, fontSize: 18, lineHeight: 1.55, color: '#C7C3B8',
              margin: '0 0 32px', maxWidth: 580,
            }}>
              Open to growth & monetization roles, founding-team work, and ambitious 0→1 product opportunities. Best reached by email.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <a style={{
                padding: '14px 24px', borderRadius: 10, fontSize: 14, fontWeight: 500,
                background: t.accent, color: t.ink, textDecoration: 'none',
              }}>
                {D.email} →
              </a>
              <a style={{
                padding: '14px 24px', borderRadius: 10, fontSize: 14, fontWeight: 500,
                background: 'rgba(255,255,255,0.08)', color: t.paper, textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.16)',
              }}>
                Schedule a call ↗
              </a>
            </div>
          </div>

          {/* doc footer */}
          <div style={{
            marginTop: 24, paddingTop: 16, borderTop: `1px solid ${t.rule}`,
            display: 'flex', justifyContent: 'space-between',
            fontFamily: t.mono, fontSize: 11, color: t.inkFaint, letterSpacing: 0.5,
          }}>
            <span>MN-DOSSIER-2026 / REV. 04</span>
            <span>© 2026 Mohnish Nagar · Bangalore</span>
            <span>END OF DOCUMENT</span>
          </div>
        </section>

      </main>
    </div>
  );
}

window.DossierDesign = DossierDesign;

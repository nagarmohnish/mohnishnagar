/* Design 4 — Modern SaaS (Linear / Vercel style)
 * Dark, refined sans-serif, card-based, subtle gradients. Polished & familiar.
 */

const saasTokens = {
  bg: '#0A0A0F',
  bgLift: '#101016',
  card: '#13141C',
  cardHi: '#1A1B25',
  border: 'rgba(255,255,255,0.07)',
  borderHi: 'rgba(255,255,255,0.12)',
  ink: '#F5F5F7',
  inkSoft: '#A1A1AA',
  inkFaint: '#52525B',
  accent: '#8B7BFF',     // soft violet
  accent2: '#5EE6B0',    // mint
  warm: '#FF9466',
  sans: '"Inter", "Geist", system-ui, sans-serif',
  display: '"Inter", "Geist", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

function SaasDesign() {
  const D = window.PORTFOLIO_DATA;
  const t = saasTokens;

  const Pill = ({ children, color, icon }) => (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontSize: 12, padding: '4px 10px', borderRadius: 999,
      background: 'rgba(255,255,255,0.04)', border: `1px solid ${t.border}`,
      color: color || t.inkSoft, fontWeight: 500,
    }}>
      {icon && <span style={{ width: 6, height: 6, borderRadius: 3, background: color || t.inkSoft }} />}
      {children}
    </span>
  );

  const Eyebrow = ({ children, color }) => (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      fontFamily: t.sans, fontSize: 12, color: color || t.accent, fontWeight: 500,
      padding: '4px 12px', borderRadius: 999,
      border: `1px solid ${(color || t.accent)}40`,
      background: `${(color || t.accent)}0F`,
      letterSpacing: 0.2,
    }}>{children}</div>
  );

  // Gradient background helpers
  const heroGlow = `
    radial-gradient(ellipse 800px 500px at 20% 0%, rgba(139,123,255,0.18), transparent 60%),
    radial-gradient(ellipse 700px 400px at 90% 30%, rgba(94,230,176,0.10), transparent 60%)
  `;

  return (
    <div style={{ width: 1440, background: t.bg, color: t.ink, fontFamily: t.sans, position: 'relative', overflow: 'hidden' }}>
      {/* subtle grain via dotted overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.4,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '4px 4px',
      }} />

      {/* Top nav ----------------------------------------------------------- */}
      <header style={{
        position: 'relative', zIndex: 2,
        padding: '24px 64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: `1px solid ${t.border}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: `linear-gradient(135deg, ${t.accent}, ${t.accent2})`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: t.sans, fontSize: 14, fontWeight: 700, color: '#0A0A0F',
          }}>M</div>
          <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: -0.2 }}>Mohnish Nagar</span>
        </div>
        <nav style={{ display: 'flex', gap: 32, fontSize: 14, color: t.inkSoft }}>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>Work</a>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>Writing</a>
        </nav>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Pill color={t.accent2} icon>Available</Pill>
          <a style={{
            fontSize: 14, padding: '8px 14px', borderRadius: 8,
            background: t.ink, color: '#0A0A0F', textDecoration: 'none', fontWeight: 500,
          }}>Get in touch</a>
        </div>
      </header>

      {/* Hero --------------------------------------------------------------- */}
      <section style={{ position: 'relative', padding: '96px 64px 80px', backgroundImage: heroGlow }}>
        <div style={{ maxWidth: 920 }}>
          <Eyebrow color={t.accent2}>● Founder's Office · LH2 Holdings</Eyebrow>
          <h1 style={{
            fontFamily: t.display, fontSize: 88, fontWeight: 600, lineHeight: 1.02,
            letterSpacing: -3.5, margin: '28px 0 0',
          }}>
            Growth & monetization,<br />
            <span style={{
              background: `linear-gradient(135deg, ${t.accent} 0%, ${t.accent2} 60%, ${t.warm} 100%)`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>shipped 0 → 1.</span>
          </h1>
          <p style={{
            fontSize: 20, lineHeight: 1.55, color: t.inkSoft, marginTop: 32, maxWidth: 720,
          }}>
            I build the systems that turn audiences into revenue — subscriptions, payment funnels, GA4 instrumentation, and the experimentation loops that compound them. Currently shipping monetization across 35+ U.S. content properties at LH2.
          </p>
          <div style={{ marginTop: 40, display: 'flex', gap: 12 }}>
            <a style={{
              padding: '14px 22px', borderRadius: 10, fontSize: 15, fontWeight: 500,
              background: t.ink, color: '#0A0A0F', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              View my work <span>→</span>
            </a>
            <a style={{
              padding: '14px 22px', borderRadius: 10, fontSize: 15, fontWeight: 500,
              background: t.card, color: t.ink, textDecoration: 'none',
              border: `1px solid ${t.borderHi}`,
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              Download résumé <span style={{ color: t.inkSoft }}>↓</span>
            </a>
          </div>
        </div>

        {/* Headline metrics row */}
        <div style={{
          marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12,
        }}>
          {D.headlineStats.map((s, i) => (
            <div key={i} style={{
              padding: '24px 24px',
              borderRadius: 14,
              background: t.card,
              border: `1px solid ${t.border}`,
              backgroundImage: i === 0 ? `linear-gradient(135deg, ${t.accent}1A, transparent 60%)` : i === 1 ? `linear-gradient(135deg, ${t.accent2}1A, transparent 60%)` : undefined,
            }}>
              <div style={{ fontSize: 13, color: t.inkSoft, marginBottom: 12 }}>{s.label}</div>
              <div style={{
                fontFamily: t.display, fontSize: 44, fontWeight: 600,
                letterSpacing: -1.5, color: i === 0 ? t.accent : i === 1 ? t.accent2 : t.ink,
              }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Snapshot card */}
        <div style={{
          marginTop: 24, padding: 32, borderRadius: 18,
          background: `linear-gradient(135deg, ${t.cardHi}, ${t.card})`,
          border: `1px solid ${t.borderHi}`,
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40,
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <span style={{ width: 8, height: 8, borderRadius: 4, background: t.accent2, boxShadow: `0 0 12px ${t.accent2}` }} />
              <span style={{ fontSize: 12, color: t.accent2, fontWeight: 500, letterSpacing: 0.5 }}>NOW · SNAPSHOT 2026</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.5, marginBottom: 6 }}>{D.snapshot.role}</div>
            <div style={{ fontSize: 14, color: t.inkSoft }}>0→1 monetization across a 35+ property publishing portfolio.</div>
          </div>
          <div>
            <div style={{ fontSize: 12, color: t.inkFaint, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>Building</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {D.snapshot.building.map((b, i) => (
                <div key={i} style={{ fontSize: 14, color: t.ink, display: 'flex', gap: 10, alignItems: 'baseline' }}>
                  <span style={{ color: t.accent }}>→</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, color: t.inkFaint, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>Stack</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {D.snapshot.stack.map((s) => <Pill key={s}>{s}</Pill>)}
            </div>
            <div style={{ marginTop: 20, fontSize: 12, color: t.inkFaint, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Recent launch</div>
            <div style={{ fontSize: 13, color: t.inkSoft, lineHeight: 1.5 }}>
              "Go Ad-Free" subscription on Shark Tank Blog — Stripe checkout, SSO, ad-suppression.
            </div>
          </div>
        </div>
      </section>

      {/* About ------------------------------------------------------------- */}
      <section style={{ padding: '96px 64px', borderTop: `1px solid ${t.border}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 80 }}>
          <div>
            <Eyebrow>01 · About</Eyebrow>
            <h2 style={{
              fontFamily: t.display, fontSize: 56, fontWeight: 600, letterSpacing: -2,
              lineHeight: 1.05, margin: '24px 0 24px',
            }}>
              Know me<br />better.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: t.inkSoft, margin: 0 }}>
              {D.intro}
            </p>
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <div style={{ fontSize: 12, color: t.inkFaint, marginBottom: 4, textTransform: 'uppercase', letterSpacing: 1 }}>Education</div>
                <div style={{ fontSize: 15, color: t.ink, fontWeight: 500 }}>{D.education.school}</div>
                <div style={{ fontSize: 13, color: t.inkSoft }}>{D.education.degree}</div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: t.inkFaint, marginBottom: 4, textTransform: 'uppercase', letterSpacing: 1 }}>Based in</div>
                <div style={{ fontSize: 15, color: t.ink, fontWeight: 500 }}>Bangalore, India</div>
                <div style={{ fontSize: 13, color: t.inkSoft }}>UTC+5:30 · Open to remote</div>
              </div>
            </div>
          </div>

          <div>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: t.ink, margin: '0 0 24px' }}>
              {D.bioLong}
            </p>

            <div style={{ marginTop: 48 }}>
              <div style={{ fontSize: 12, color: t.inkFaint, marginBottom: 20, textTransform: 'uppercase', letterSpacing: 1 }}>What I work on</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
                {D.skills.map((s, i) => (
                  <div key={i} style={{
                    padding: '20px 22px', borderRadius: 14,
                    background: t.card, border: `1px solid ${t.border}`,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                      <div style={{ fontSize: 15, fontWeight: 600, color: t.ink, letterSpacing: -0.2 }}>{s.group}</div>
                      <div style={{ fontSize: 11, color: t.inkFaint }}>{String(i + 1).padStart(2, '0')}</div>
                    </div>
                    <div style={{ fontSize: 12, color: t.inkSoft, marginBottom: 14 }}>{s.caption}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {s.primary.slice(0, 5).map((p) => <Pill key={p}>{p}</Pill>)}
                      {s.primary.length > 5 && <Pill color={t.accent}>+{s.primary.length - 5}</Pill>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience -------------------------------------------------------- */}
      <section style={{
        padding: '96px 64px',
        borderTop: `1px solid ${t.border}`,
        background: `linear-gradient(180deg, ${t.bg} 0%, ${t.bgLift} 50%, ${t.bg} 100%)`,
      }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <Eyebrow color={t.warm}>02 · Experience</Eyebrow>
          <h2 style={{
            fontFamily: t.display, fontSize: 64, fontWeight: 600, letterSpacing: -2.5,
            lineHeight: 1.05, margin: '20px auto 16px',
          }}>
            Where I've made impact.
          </h2>
          <p style={{ fontSize: 17, color: t.inkSoft, margin: 0, maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>
            Four years across digital publishing, AI/ML, and the early-stage ecosystem.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {D.experience.map((e, i) => (
            <article key={i} style={{
              padding: 36, borderRadius: 18,
              background: i === 0 ? `linear-gradient(135deg, ${t.cardHi} 0%, ${t.card} 100%)` : t.card,
              border: i === 0 ? `1px solid ${t.accent2}40` : `1px solid ${t.border}`,
              position: 'relative',
            }}>
              {e.current && (
                <div style={{
                  position: 'absolute', top: 24, right: 32,
                  fontSize: 11, padding: '4px 10px', borderRadius: 999,
                  background: `${t.accent2}15`, color: t.accent2, border: `1px solid ${t.accent2}40`,
                  display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 500, letterSpacing: 0.3,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: 3, background: t.accent2, boxShadow: `0 0 8px ${t.accent2}` }} />
                  CURRENT
                </div>
              )}
              <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 48 }}>
                <div>
                  <div style={{ fontSize: 12, color: t.inkFaint, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>{e.period}</div>
                  <div style={{ fontSize: 13, color: t.inkSoft }}>{e.location}</div>
                </div>
                <div>
                  <h3 style={{ fontFamily: t.display, fontSize: 26, fontWeight: 600, color: t.ink, margin: '0 0 8px', letterSpacing: -0.6, lineHeight: 1.2 }}>
                    {e.role}
                  </h3>
                  <div style={{ fontSize: 16, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ color: t.accent, fontWeight: 500 }}>{e.company}</span>
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.65, color: t.inkSoft, margin: '0 0 20px' }}>
                    {e.body}
                  </p>
                  {e.highlight && (
                    <div style={{
                      padding: '20px 24px', borderRadius: 12,
                      background: `${t.warm}0D`, border: `1px solid ${t.warm}33`,
                      marginTop: 20,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                        <span style={{
                          width: 18, height: 18, borderRadius: 4, background: t.warm,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 11, color: '#0A0A0F', fontWeight: 700,
                        }}>✦</span>
                        <div style={{ fontSize: 12, color: t.warm, fontWeight: 600, letterSpacing: 0.3 }}>HEADLINE LAUNCH</div>
                      </div>
                      <div style={{ fontSize: 15, color: t.ink, fontWeight: 500, marginBottom: 6 }}>
                        {e.highlight.label.replace('Headline launch: ', '')}
                      </div>
                      <p style={{ fontSize: 14, lineHeight: 1.6, color: t.inkSoft, margin: 0 }}>{e.highlight.body}</p>
                    </div>
                  )}
                  {e.metrics && (
                    <div style={{
                      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8,
                      marginTop: 20,
                    }}>
                      {e.metrics.map((m, j) => (
                        <div key={j} style={{
                          padding: '14px 16px', borderRadius: 10,
                          background: 'rgba(255,255,255,0.025)', border: `1px solid ${t.border}`,
                        }}>
                          <div style={{ fontFamily: t.display, fontSize: 22, fontWeight: 600, letterSpacing: -0.5, color: j === 0 ? t.accent : j === 3 ? t.accent2 : t.ink }}>
                            {m.value}
                          </div>
                          <div style={{ fontSize: 11, color: t.inkFaint, marginTop: 4, letterSpacing: 0.3 }}>{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 20 }}>
                    {e.stack.map((s) => <Pill key={s}>{s}</Pill>)}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Projects ---------------------------------------------------------- */}
      <section style={{ padding: '96px 64px', borderTop: `1px solid ${t.border}` }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <Eyebrow color={t.accent}>03 · Projects</Eyebrow>
          <h2 style={{
            fontFamily: t.display, fontSize: 64, fontWeight: 600, letterSpacing: -2.5,
            lineHeight: 1.05, margin: '20px 0 16px',
          }}>
            Things I've built.
          </h2>
          <p style={{ fontSize: 17, color: t.inkSoft, margin: 0 }}>
            A selection of recent work — dashboards, pipelines, and product experiments.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {D.featuredProjects.map((p, i) => {
            const stripe = [t.accent, t.accent2, t.warm, '#7AB8FF'][i % 4];
            return (
              <article key={p.num} style={{
                padding: 32, borderRadius: 18,
                background: t.card, border: `1px solid ${t.border}`,
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(90deg, ${stripe}, transparent)`,
                }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                  <Pill color={stripe} icon>{p.tag}</Pill>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: t.inkSoft }}>
                    <span>{p.stack}</span>
                    <span style={{ color: stripe }}>↗</span>
                  </div>
                </div>
                <h3 style={{ fontFamily: t.display, fontSize: 26, fontWeight: 600, letterSpacing: -0.7, margin: '0 0 12px' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: t.inkSoft, margin: 0 }}>
                  {p.desc}
                </p>
              </article>
            );
          })}
        </div>

        <div style={{ marginTop: 48 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
            <h3 style={{ fontFamily: t.display, fontSize: 22, fontWeight: 600, letterSpacing: -0.5, margin: 0 }}>More projects, by stack</h3>
            <a style={{ fontSize: 13, color: t.accent, textDecoration: 'none' }}>View all on GitHub →</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {D.projectCategories.map((c, i) => (
              <div key={i} style={{
                padding: 24, borderRadius: 14,
                background: t.card, border: `1px solid ${t.border}`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: t.ink, letterSpacing: -0.2 }}>{c.cat}</div>
                  <Pill color={t.accent}>{c.count} {c.count === 1 ? 'repo' : 'repos'}</Pill>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {c.items.map((it) => (
                    <div key={it.title} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '8px 12px', borderRadius: 8, background: 'rgba(255,255,255,0.025)',
                    }}>
                      <span style={{ fontSize: 13, color: t.ink }}>{it.title}</span>
                      <span style={{ fontFamily: t.mono, fontSize: 11, color: t.inkFaint }}>{it.stack}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact ----------------------------------------------------------- */}
      <section style={{
        padding: '96px 64px', borderTop: `1px solid ${t.border}`,
        backgroundImage: `
          radial-gradient(ellipse 900px 500px at 50% 0%, rgba(139,123,255,0.18), transparent 60%),
          radial-gradient(ellipse 600px 400px at 100% 100%, rgba(94,230,176,0.10), transparent 60%)
        `,
      }}>
        <div style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
          <Eyebrow color={t.accent2}>04 · Contact</Eyebrow>
          <h2 style={{
            fontFamily: t.display, fontSize: 80, fontWeight: 600, letterSpacing: -3.5,
            lineHeight: 1.02, margin: '20px 0 24px',
          }}>
            Let's build<br />
            <span style={{
              background: `linear-gradient(135deg, ${t.accent}, ${t.accent2})`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>something together.</span>
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: t.inkSoft, margin: '0 auto' }}>
            Open to growth & monetization roles, founding-team work, and 0→1 product opportunities.
          </p>

          <div style={{ marginTop: 48, display: 'flex', gap: 12, justifyContent: 'center' }}>
            <a style={{
              padding: '16px 28px', borderRadius: 12, fontSize: 15, fontWeight: 500,
              background: t.ink, color: '#0A0A0F', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              Send me an email <span>→</span>
            </a>
            <a style={{
              padding: '16px 28px', borderRadius: 12, fontSize: 15, fontWeight: 500,
              background: t.card, color: t.ink, textDecoration: 'none', border: `1px solid ${t.borderHi}`,
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              Schedule a call <span style={{ color: t.inkSoft }}>↗</span>
            </a>
          </div>
        </div>

        <div style={{
          marginTop: 80, padding: 8, borderRadius: 18,
          background: t.card, border: `1px solid ${t.border}`,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4,
        }}>
          {[
            { k: 'Email',    v: D.email,         sub: 'mohnish238@gmail.com', icon: '✉' },
            { k: 'Phone',    v: D.phone,         sub: 'IST business hours',  icon: '☎' },
            { k: 'LinkedIn', v: 'mohnish-nagar', sub: 'Connect with me',     icon: 'in' },
            { k: 'GitHub',   v: 'nagarmohnish',  sub: 'View my code',        icon: '⌘' },
          ].map((c, i) => (
            <div key={c.k} style={{
              padding: '24px 22px', borderRadius: 12,
              background: 'rgba(255,255,255,0.02)',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10, marginBottom: 14,
                background: `linear-gradient(135deg, ${[t.accent, t.warm, t.accent2, '#7AB8FF'][i]}33, transparent)`,
                border: `1px solid ${t.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: [t.accent, t.warm, t.accent2, '#7AB8FF'][i],
                fontSize: 14, fontWeight: 600,
              }}>{c.icon}</div>
              <div style={{ fontSize: 12, color: t.inkFaint, marginBottom: 4, letterSpacing: 0.5, textTransform: 'uppercase' }}>{c.k}</div>
              <div style={{ fontSize: 14, color: t.ink, fontWeight: 500, letterSpacing: -0.2 }}>{c.v}</div>
              <div style={{ fontSize: 12, color: t.inkSoft, marginTop: 4 }}>{c.sub}</div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 56, paddingTop: 24, borderTop: `1px solid ${t.border}`,
          display: 'flex', justifyContent: 'space-between', fontSize: 13, color: t.inkFaint,
        }}>
          <span>© 2026 Mohnish Nagar · Bangalore, India</span>
          <span>Built with care · v2026.1</span>
        </div>
      </section>
    </div>
  );
}

window.SaasDesign = SaasDesign;

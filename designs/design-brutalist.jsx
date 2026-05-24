/* Design 3 — Brutalist Magazine
 * Massive display type, asymmetric grid, high contrast. Bold & memorable.
 * Cream paper + near-black + one shock color (electric).
 */

const brutalistTokens = {
  bg: '#EFEAE0',
  bgAlt: '#E5DECF',
  ink: '#0A0908',
  inkSoft: '#3A3631',
  inkFaint: '#7A7269',
  shock: '#FF3D2E',
  rule: '#0A0908',
  display: '"Archivo Black", "Anton", "Helvetica Neue", Helvetica, Arial, sans-serif',
  serif: '"Newsreader", "Source Serif Pro", Georgia, serif',
  sans: '"Inter", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

function BrutalistDesign() {
  const D = window.PORTFOLIO_DATA;
  const t = brutalistTokens;

  const Label = ({ children, color }) => (
    <span style={{
      fontFamily: t.mono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase',
      color: color || t.inkFaint,
    }}>{children}</span>
  );

  return (
    <div style={{ width: 1440, background: t.bg, color: t.ink, fontFamily: t.sans }}>

      {/* Masthead ----------------------------------------------------------- */}
      <header style={{
        borderBottom: `2px solid ${t.ink}`, padding: '20px 56px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ fontFamily: t.display, fontSize: 28, letterSpacing: -1, lineHeight: 1 }}>
          MN<span style={{ color: t.shock }}>.</span>
        </div>
        <nav style={{ display: 'flex', gap: 40, fontFamily: t.mono, fontSize: 12, letterSpacing: 1, textTransform: 'uppercase' }}>
          <a style={{ color: t.ink, textDecoration: 'none' }}>About</a>
          <a style={{ color: t.ink, textDecoration: 'none' }}>Work</a>
          <a style={{ color: t.ink, textDecoration: 'none' }}>Projects</a>
          <a style={{ color: t.ink, textDecoration: 'none' }}>Contact</a>
        </nav>
        <div style={{ fontFamily: t.mono, fontSize: 11, color: t.inkSoft, letterSpacing: 1 }}>
          ISSUE Nº 04 · MMXXVI
        </div>
      </header>

      {/* Hero --------------------------------------------------------------- */}
      <section style={{ padding: '48px 56px 64px', borderBottom: `2px solid ${t.ink}`, position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
          <Label>Vol. 01 — Portfolio</Label>
          <Label>26.05.2026 / Bangalore</Label>
          <Label color={t.shock}>● {D.available}</Label>
        </div>

        {/* Big-type name */}
        <h1 style={{
          fontFamily: t.display, fontWeight: 900, fontSize: 320, lineHeight: 0.82,
          letterSpacing: -14, color: t.ink, margin: '24px 0 0',
          textTransform: 'uppercase',
        }}>
          MOHNISH<br />NAGAR<span style={{ color: t.shock }}>.</span>
        </h1>

        {/* Sub strip */}
        <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 48, borderTop: `2px solid ${t.ink}`, paddingTop: 32 }}>
          <div>
            <Label>Discipline</Label>
            <div style={{
              fontFamily: t.display, fontSize: 36, lineHeight: 0.95,
              letterSpacing: -1, marginTop: 12, textTransform: 'uppercase',
            }}>
              Growth &<br />Monetization<br />Operator
            </div>
          </div>
          <div>
            <Label>Currently</Label>
            <div style={{ fontFamily: t.serif, fontSize: 22, fontStyle: 'italic', lineHeight: 1.35, marginTop: 12, letterSpacing: -0.3 }}>
              "Shipping 0→1 monetization across 35+ U.S. content properties at LH2 Holdings — subscriptions, payments, GA4 instrumentation, and funnel work."
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <Label>The pitch</Label>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: t.inkSoft, margin: '12px 0 0' }}>
                Growth and monetization operator across digital publishing, AI/ML data products, and the early-stage startup ecosystem.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
              <a style={{ fontFamily: t.mono, fontSize: 12, padding: '12px 18px', background: t.ink, color: t.bg, textDecoration: 'none', letterSpacing: 1, textTransform: 'uppercase' }}>
                Résumé →
              </a>
              <a style={{ fontFamily: t.mono, fontSize: 12, padding: '12px 18px', background: t.shock, color: t.bg, textDecoration: 'none', letterSpacing: 1, textTransform: 'uppercase' }}>
                Contact ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Headline stats — billboard ---------------------------------------- */}
      <section style={{ borderBottom: `2px solid ${t.ink}`, padding: '0', background: t.ink, color: t.bg }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {D.headlineStats.map((s, i) => (
            <div key={i} style={{
              padding: '56px 40px',
              borderRight: i < 3 ? `2px solid ${t.bg}` : 'none',
              position: 'relative',
            }}>
              <Label color={i === 0 ? t.shock : '#888'}>Nº 0{i + 1}</Label>
              <div style={{
                fontFamily: t.display, fontSize: 96, lineHeight: 0.9, letterSpacing: -4,
                color: i === 0 ? t.shock : t.bg, marginTop: 16,
              }}>
                {s.value}
              </div>
              <div style={{ fontFamily: t.serif, fontSize: 17, lineHeight: 1.3, marginTop: 16, fontStyle: 'italic', color: '#C9C2B5' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About — split column ---------------------------------------------- */}
      <section style={{ padding: '80px 56px', borderBottom: `2px solid ${t.ink}` }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 48 }}>
          <Label>§ 01 / Dossier</Label>
          <div style={{ flex: 1, height: 1, background: t.ink, margin: '0 24px' }} />
          <Label>P. 02</Label>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80 }}>
          <h2 style={{
            fontFamily: t.display, fontSize: 144, fontWeight: 900, lineHeight: 0.86,
            letterSpacing: -6, margin: 0, textTransform: 'uppercase',
          }}>
            Know me<br />
            <span style={{ color: t.shock }}>better.</span>
          </h2>
          <div style={{ paddingTop: 24 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span style={{
                fontFamily: t.display, fontSize: 96, lineHeight: 0.8,
                color: t.shock, marginRight: 16, marginTop: -6,
              }}>"</span>
              <p style={{ fontFamily: t.serif, fontSize: 22, lineHeight: 1.45, margin: 0, letterSpacing: -0.3 }}>
                {D.bioLong}
              </p>
            </div>

            <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              <div style={{ padding: '20px 0', borderTop: `2px solid ${t.ink}` }}>
                <Label>Education</Label>
                <div style={{ fontFamily: t.display, fontSize: 22, marginTop: 8, textTransform: 'uppercase', letterSpacing: -0.5 }}>{D.education.school}</div>
                <div style={{ fontSize: 13, color: t.inkSoft, marginTop: 4 }}>{D.education.degree}</div>
              </div>
              <div style={{ padding: '20px 0', borderTop: `2px solid ${t.ink}` }}>
                <Label>Based</Label>
                <div style={{ fontFamily: t.display, fontSize: 22, marginTop: 8, textTransform: 'uppercase', letterSpacing: -0.5 }}>BANGALORE</div>
                <div style={{ fontSize: 13, color: t.inkSoft, marginTop: 4 }}>India · UTC+5:30</div>
              </div>
            </div>
          </div>
        </div>

        {/* skills strip */}
        <div style={{ marginTop: 80 }}>
          <Label>What I work on</Label>
          <div style={{ marginTop: 24, borderTop: `2px solid ${t.ink}` }}>
            {D.skills.map((s, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '320px 1fr 80px',
                padding: '28px 0', borderBottom: `1px solid ${t.ink}`,
                alignItems: 'baseline',
              }}>
                <div>
                  <div style={{ fontFamily: t.display, fontSize: 28, letterSpacing: -0.5, textTransform: 'uppercase', lineHeight: 1 }}>
                    {s.group}
                  </div>
                  <div style={{ fontFamily: t.serif, fontSize: 14, fontStyle: 'italic', color: t.inkSoft, marginTop: 6 }}>
                    {s.caption}
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 14px' }}>
                  {s.primary.map((p) => (
                    <span key={p} style={{
                      fontFamily: t.mono, fontSize: 12, color: t.ink, letterSpacing: 0.5, textTransform: 'uppercase',
                      padding: '4px 10px', border: `1.5px solid ${t.ink}`,
                    }}>{p}</span>
                  ))}
                  {s.more.map((p) => (
                    <span key={p} style={{
                      fontFamily: t.mono, fontSize: 12, color: t.inkFaint, letterSpacing: 0.5, textTransform: 'uppercase',
                      padding: '4px 0',
                    }}>{p}</span>
                  ))}
                </div>
                <div style={{
                  fontFamily: t.display, fontSize: 32, color: t.shock, textAlign: 'right',
                  letterSpacing: -1,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience -------------------------------------------------------- */}
      <section style={{ padding: '80px 56px', borderBottom: `2px solid ${t.ink}`, background: t.bgAlt }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 48 }}>
          <Label>§ 02 / Career file</Label>
          <div style={{ flex: 1, height: 1, background: t.ink, margin: '0 24px' }} />
          <Label>P. 03</Label>
        </div>

        <h2 style={{
          fontFamily: t.display, fontSize: 144, fontWeight: 900, lineHeight: 0.86,
          letterSpacing: -6, margin: '0 0 64px', textTransform: 'uppercase',
        }}>
          Where I've<br />
          made <span style={{ color: t.shock }}>impact.</span>
        </h2>

        <div>
          {D.experience.map((e, i) => (
            <article key={i} style={{
              padding: '56px 0',
              borderTop: `2px solid ${t.ink}`,
              borderBottom: i === D.experience.length - 1 ? `2px solid ${t.ink}` : 'none',
              display: 'grid', gridTemplateColumns: '120px 1fr',
              gap: 40,
            }}>
              {/* Issue number */}
              <div style={{
                fontFamily: t.display, fontSize: 96, color: i === 0 ? t.shock : t.ink,
                lineHeight: 0.9, letterSpacing: -3,
              }}>
                {String(D.experience.length - i).padStart(2, '0')}
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
                  <Label>{e.period}</Label>
                  {e.current && <Label color={t.shock}>● ON THE DESK</Label>}
                </div>

                <h3 style={{
                  fontFamily: t.display, fontSize: 56, fontWeight: 900, letterSpacing: -2,
                  lineHeight: 0.95, margin: 0, textTransform: 'uppercase',
                }}>
                  {e.role}
                </h3>
                <div style={{ marginTop: 16, display: 'flex', gap: 16, alignItems: 'center', fontFamily: t.serif, fontSize: 22, fontStyle: 'italic', letterSpacing: -0.3 }}>
                  <span style={{ color: t.shock }}>{e.company}</span>
                  <span style={{ color: t.inkFaint }}>—</span>
                  <span style={{ color: t.inkSoft }}>{e.location}</span>
                </div>

                <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: e.metrics ? '1.4fr 1fr' : '1fr', gap: 48 }}>
                  <p style={{ fontFamily: t.serif, fontSize: 17, lineHeight: 1.6, color: t.inkSoft, margin: 0 }}>
                    {e.body}
                  </p>
                  {e.metrics && (
                    <div style={{ borderLeft: `2px solid ${t.ink}`, paddingLeft: 32 }}>
                      <Label>By the numbers</Label>
                      <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 24px' }}>
                        {e.metrics.map((m, j) => (
                          <div key={j}>
                            <div style={{ fontFamily: t.display, fontSize: 36, lineHeight: 1, letterSpacing: -1, color: j % 2 ? t.ink : t.shock }}>
                              {m.value}
                            </div>
                            <div style={{ fontFamily: t.mono, fontSize: 10, letterSpacing: 1.5, color: t.inkSoft, marginTop: 6, textTransform: 'uppercase' }}>
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {e.highlight && (
                  <div style={{
                    marginTop: 32, padding: '24px 28px',
                    background: t.ink, color: t.bg,
                  }}>
                    <Label color={t.shock}>◆ {e.highlight.label}</Label>
                    <p style={{ fontFamily: t.serif, fontSize: 17, lineHeight: 1.55, color: '#E5DECF', margin: '12px 0 0' }}>
                      {e.highlight.body}
                    </p>
                  </div>
                )}

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 28 }}>
                  {e.stack.map((s) => (
                    <span key={s} style={{
                      fontFamily: t.mono, fontSize: 11, letterSpacing: 1, textTransform: 'uppercase',
                      padding: '4px 10px', border: `1.5px solid ${t.ink}`,
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Projects ---------------------------------------------------------- */}
      <section style={{ padding: '80px 56px', borderBottom: `2px solid ${t.ink}` }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 48 }}>
          <Label>§ 03 / Workshop</Label>
          <div style={{ flex: 1, height: 1, background: t.ink, margin: '0 24px' }} />
          <Label>P. 04</Label>
        </div>

        <h2 style={{
          fontFamily: t.display, fontSize: 144, fontWeight: 900, lineHeight: 0.86,
          letterSpacing: -6, margin: '0 0 56px', textTransform: 'uppercase',
        }}>
          Things I've<br />
          <span style={{ color: t.shock }}>built.</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0 }}>
          {D.featuredProjects.map((p, i) => (
            <article key={p.num} style={{
              padding: '40px 32px',
              borderTop: `2px solid ${t.ink}`,
              borderLeft: i % 2 === 1 ? `2px solid ${t.ink}` : 'none',
              borderBottom: i >= 2 ? `2px solid ${t.ink}` : 'none',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: 24, right: 24,
                fontFamily: t.display, fontSize: 96, lineHeight: 0.85, color: t.shock,
                opacity: 0.15, letterSpacing: -3,
              }}>{p.num}</div>
              <Label>{p.tag} / {p.stack}</Label>
              <h3 style={{
                fontFamily: t.display, fontSize: 40, lineHeight: 0.95,
                letterSpacing: -1.5, margin: '16px 0 16px', textTransform: 'uppercase',
                maxWidth: 480,
              }}>
                {p.title}
              </h3>
              <p style={{ fontFamily: t.serif, fontSize: 16, lineHeight: 1.55, color: t.inkSoft, margin: '0 0 24px', maxWidth: 480 }}>
                {p.desc}
              </p>
              <div style={{
                fontFamily: t.mono, fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase',
                color: t.ink, paddingTop: 16, borderTop: `1px solid ${t.ink}`,
                display: 'flex', justifyContent: 'space-between',
              }}>
                <span>github.com/nagarmohnish</span>
                <span style={{ color: t.shock }}>↗ Read more</span>
              </div>
            </article>
          ))}
        </div>

        {/* Categories — ticker */}
        <div style={{ marginTop: 80 }}>
          <Label>Inventory · by stack</Label>
          <div style={{ marginTop: 24 }}>
            {D.projectCategories.map((c, i) => (
              <div key={i} style={{
                borderTop: `1.5px solid ${t.ink}`,
                borderBottom: i === D.projectCategories.length - 1 ? `1.5px solid ${t.ink}` : 'none',
                padding: '24px 0',
                display: 'grid', gridTemplateColumns: '80px 1fr 80px', gap: 24, alignItems: 'baseline',
              }}>
                <div style={{ fontFamily: t.display, fontSize: 40, lineHeight: 1, color: t.shock, letterSpacing: -1 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <div style={{ fontFamily: t.display, fontSize: 22, letterSpacing: -0.3, textTransform: 'uppercase', marginBottom: 10 }}>
                    {c.cat}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 10px' }}>
                    {c.items.map((it, j) => (
                      <span key={it.title} style={{ fontFamily: t.mono, fontSize: 12, color: t.inkSoft }}>
                        {it.title}<span style={{ color: t.inkFaint }}> ({it.stack})</span>
                        {j < c.items.length - 1 && <span style={{ color: t.shock, marginLeft: 10 }}>·</span>}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ fontFamily: t.display, fontSize: 22, textAlign: 'right', letterSpacing: -0.5 }}>
                  {String(c.count).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact ----------------------------------------------------------- */}
      <section style={{ padding: '80px 56px', background: t.shock, color: t.bg, borderBottom: `2px solid ${t.ink}` }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 32 }}>
          <Label color={t.ink}>§ 04 / Wire</Label>
          <div style={{ flex: 1, height: 1, background: t.ink, margin: '0 24px' }} />
          <Label color={t.ink}>P. 05 — Back cover</Label>
        </div>

        <h2 style={{
          fontFamily: t.display, fontSize: 240, fontWeight: 900, lineHeight: 0.84,
          letterSpacing: -10, margin: '24px 0 56px', textTransform: 'uppercase',
        }}>
          Let's<br />build<br />
          <span style={{ color: t.ink }}>something.</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: `2px solid ${t.ink}` }}>
          {[
            ['Email',    D.email],
            ['Phone',    D.phone],
            ['LinkedIn', 'mohnish-nagar'],
            ['GitHub',   'nagarmohnish'],
          ].map(([k, v], i) => (
            <div key={k} style={{
              padding: '24px 28px',
              borderRight: i < 3 ? `2px solid ${t.ink}` : 'none',
            }}>
              <Label color={t.ink}>{k}</Label>
              <div style={{ fontFamily: t.display, fontSize: 22, marginTop: 12, letterSpacing: -0.5, textTransform: 'lowercase' }}>
                {v}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{
        padding: '24px 56px', display: 'flex', justifyContent: 'space-between',
        fontFamily: t.mono, fontSize: 11, color: t.inkSoft, letterSpacing: 1, textTransform: 'uppercase',
      }}>
        <span>© MMXXVI Mohnish Nagar</span>
        <span>Printed in Bangalore · For circulation</span>
        <span>End of issue ◆</span>
      </footer>
    </div>
  );
}

window.BrutalistDesign = BrutalistDesign;

/* Design 6 — Bento Grid (Apple-style)
 * Modular asymmetric tiles on a soft warm canvas. Premium, considered.
 * Light mode. Each tile owns its content; sizes vary intentionally.
 */

const bentoTokens = {
  bg: '#F2EFE8',
  tile: '#FBFAF6',
  tileDark: '#1A1A1F',
  tileAccent: '#E8DEC8',
  ink: '#161614',
  inkSoft: '#5E5A53',
  inkFaint: '#9B968C',
  border: 'rgba(0,0,0,0.06)',
  accent: '#D2683F',     // warm orange
  accent2: '#3B5D3A',    // forest
  accent3: '#5C7CB5',    // dusty blue
  sans: '"Inter", system-ui, sans-serif',
  display: '"Inter", system-ui, sans-serif',
  serif: '"Newsreader", Georgia, serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

function BentoDesign() {
  const D = window.PORTFOLIO_DATA;
  const t = bentoTokens;

  const Tile = ({ children, span = 1, rows = 1, bg, color, pad = 28, style }) => (
    <div style={{
      gridColumn: `span ${span}`, gridRow: `span ${rows}`,
      background: bg || t.tile, color: color || t.ink,
      borderRadius: 24, padding: pad, position: 'relative', overflow: 'hidden',
      border: `1px solid ${t.border}`,
      ...style,
    }}>{children}</div>
  );

  const Label = ({ children, color }) => (
    <div style={{
      fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600,
      color: color || t.inkFaint, marginBottom: 16,
    }}>{children}</div>
  );

  const headlineMetricColors = [t.accent, t.accent2, t.accent3, t.ink];

  return (
    <div style={{ width: 1440, background: t.bg, color: t.ink, fontFamily: t.sans, padding: '32px' }}>
      {/* Top bar -------------------------------------------------------- */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 24px', marginBottom: 24,
        background: t.tile, borderRadius: 16, border: `1px solid ${t.border}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 10, background: t.tileDark, color: t.tile,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 600, letterSpacing: -0.3,
          }}>MN</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: -0.2 }}>Mohnish Nagar</div>
            <div style={{ fontSize: 11, color: t.inkFaint }}>Growth & Monetization · Bangalore</div>
          </div>
        </div>
        <nav style={{ display: 'flex', gap: 24, fontSize: 13, color: t.inkSoft }}>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>Work</a>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
        </nav>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 12, color: t.accent2, padding: '4px 10px', borderRadius: 999,
            background: 'rgba(59,93,58,0.08)',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 3, background: t.accent2 }} />
            Available
          </span>
          <a style={{
            padding: '8px 14px', borderRadius: 10, fontSize: 13, fontWeight: 500,
            background: t.tileDark, color: t.tile, textDecoration: 'none',
          }}>Get in touch →</a>
        </div>
      </div>

      {/* HERO BENTO — 6 columns ----------------------------------------- */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, gridAutoRows: 180 }}>

        {/* Hero — big name (4 wide × 2 rows) */}
        <Tile span={4} rows={2} bg={t.tileDark} color={t.tile} pad={48}>
          <div style={{
            position: 'absolute', top: -100, right: -100, width: 360, height: 360,
            borderRadius: 200,
            background: `radial-gradient(circle, ${t.accent}40, transparent 70%)`,
          }} />
          <div style={{ position: 'relative' }}>
            <Label color="rgba(255,255,255,0.6)">● Founder's Office · LH2 Holdings</Label>
            <h1 style={{
              fontFamily: t.display, fontSize: 88, fontWeight: 600, lineHeight: 0.96,
              letterSpacing: -3.5, margin: '24px 0 0',
            }}>
              Hi, I'm Mohnish.<br />
              <span style={{ color: t.accent }}>Growth &amp; monetization,</span><br />
              <span style={{ opacity: 0.7 }}>shipped 0 → 1.</span>
            </h1>
            <p style={{
              fontSize: 16, lineHeight: 1.55, color: 'rgba(255,255,255,0.7)',
              marginTop: 32, maxWidth: 560,
            }}>
              Building monetization across 35+ U.S. content properties — subscriptions, payments, GA4 instrumentation, newsletter growth, and funnel optimization.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 10 }}>
              <a style={{
                padding: '12px 20px', borderRadius: 10, background: t.accent, color: t.tileDark,
                fontSize: 14, fontWeight: 600, textDecoration: 'none',
              }}>View résumé ↓</a>
              <a style={{
                padding: '12px 20px', borderRadius: 10,
                background: 'rgba(255,255,255,0.08)', color: t.tile, fontSize: 14, fontWeight: 500,
                textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)',
              }}>Contact ↗</a>
            </div>
          </div>
        </Tile>

        {/* Headline stat 1 */}
        <Tile span={2} rows={1} bg={t.tileAccent}>
          <Label color={t.accent}>Properties shipped</Label>
          <div style={{ fontFamily: t.display, fontSize: 72, lineHeight: 0.9, letterSpacing: -3, fontWeight: 600, color: t.accent }}>35+</div>
          <div style={{ fontSize: 13, color: t.inkSoft, marginTop: 6 }}>U.S. content properties</div>
        </Tile>

        {/* Headline stat 2 — newsletter */}
        <Tile span={2} rows={1}>
          <Label>Newsletter run</Label>
          <div style={{ fontFamily: t.display, fontSize: 72, lineHeight: 0.9, letterSpacing: -3, fontWeight: 600 }}>20K<span style={{ color: t.accent3, fontSize: 40 }}>+</span></div>
          <div style={{ fontSize: 13, color: t.inkSoft, marginTop: 6 }}>subscribers in 3 months</div>
        </Tile>

        {/* Now-building */}
        <Tile span={2} rows={2} bg={t.tile}>
          <Label color={t.accent2}>● Now building</Label>
          <h3 style={{ fontFamily: t.display, fontSize: 22, fontWeight: 600, letterSpacing: -0.4, margin: '0 0 20px', lineHeight: 1.2 }}>
            Currently shipping<br />three things →
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {D.snapshot.building.map((b, i) => (
              <div key={i} style={{
                display: 'flex', gap: 12, alignItems: 'baseline',
                padding: '12px 14px', background: t.bg, borderRadius: 10,
              }}>
                <span style={{ fontFamily: t.mono, fontSize: 11, color: t.accent }}>0{i + 1}</span>
                <span style={{ fontSize: 13, color: t.ink, lineHeight: 1.4 }}>{b}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {D.snapshot.stack.map((s) => (
              <span key={s} style={{
                fontFamily: t.mono, fontSize: 11, padding: '3px 8px', borderRadius: 6,
                background: t.bg, color: t.inkSoft,
              }}>{s}</span>
            ))}
          </div>
        </Tile>

        {/* Headline stat 3 */}
        <Tile span={2} rows={1} bg={t.tileDark} color={t.tile}>
          <Label color="rgba(255,255,255,0.5)">Revenue uplift</Label>
          <div style={{ fontFamily: t.display, fontSize: 72, lineHeight: 0.9, letterSpacing: -3, fontWeight: 600, color: t.accent }}>10<span style={{ fontSize: 48 }}>%+</span></div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 6 }}>via Ad-Free sub launch</div>
        </Tile>

        {/* Sessions tile */}
        <Tile span={2} rows={1} bg={t.tile}>
          <Label>Audience reach</Label>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <div style={{ fontFamily: t.display, fontSize: 72, lineHeight: 0.9, letterSpacing: -3, fontWeight: 600 }}>~50M</div>
          </div>
          <div style={{ fontSize: 13, color: t.inkSoft, marginTop: 6 }}>monthly sessions managed</div>
        </Tile>
      </div>

      {/* ABOUT BENTO ----------------------------------------------------- */}
      <div style={{ marginTop: 12 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '32px 12px 16px' }}>
          <h2 style={{ fontFamily: t.display, fontSize: 36, fontWeight: 600, letterSpacing: -1.2, margin: 0 }}>About me.</h2>
          <span style={{ fontSize: 13, color: t.inkFaint }}>01 / 04</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, gridAutoRows: 180 }}>
          {/* Bio big tile */}
          <Tile span={4} rows={2} pad={40}>
            <Label color={t.accent}>The narrative</Label>
            <p style={{
              fontFamily: t.serif, fontSize: 22, lineHeight: 1.5, color: t.ink, margin: '0 0 20px', letterSpacing: -0.2,
            }}>
              Growth and monetization operator across digital publishing, AI/ML data products, and the early-stage startup ecosystem.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: t.inkSoft, margin: 0 }}>
              Currently driving 0→1 monetization across 35+ U.S. content properties at LH2 Holdings. Previously the first employee at Opinium.ai (~40L pre-seed) where I built an NLP/LLM social intelligence product from 0→1, and assessed 500+ startups at PedalStart.
            </p>
          </Tile>

          {/* Education tile */}
          <Tile span={2} rows={1}>
            <Label>Education</Label>
            <div style={{ fontFamily: t.display, fontSize: 22, fontWeight: 600, letterSpacing: -0.4 }}>IIT Kanpur</div>
            <div style={{ fontSize: 13, color: t.inkSoft, marginTop: 6, lineHeight: 1.4 }}>
              B.Sc. Earth Sciences<br />MBA Minor · 2019–23
            </div>
          </Tile>

          {/* Location tile */}
          <Tile span={2} rows={1} bg={t.accent} color={t.tile}>
            <Label color="rgba(255,255,255,0.7)">Based in</Label>
            <div style={{ fontFamily: t.display, fontSize: 32, fontWeight: 600, letterSpacing: -1, lineHeight: 1 }}>Bangalore<br /><span style={{ fontSize: 16, fontWeight: 400, opacity: 0.8 }}>India · UTC+5:30</span></div>
          </Tile>
        </div>
      </div>

      {/* SKILLS — single big bento -------------------------------------- */}
      <div style={{ marginTop: 12 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '32px 12px 16px' }}>
          <h2 style={{ fontFamily: t.display, fontSize: 36, fontWeight: 600, letterSpacing: -1.2, margin: 0 }}>The toolkit.</h2>
          <span style={{ fontSize: 13, color: t.inkFaint }}>5 disciplines · {D.skills.reduce((a, s) => a + s.primary.length + s.more.length, 0)} skills</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
          {D.skills.map((s, i) => {
            const col = headlineMetricColors[i % 4];
            const isWide = i === 0 || i === 4;
            return (
              <div key={i} style={{
                gridColumn: `span ${isWide ? 6 : 3}`,
                background: i === 0 ? t.tileDark : t.tile,
                color: i === 0 ? t.tile : t.ink,
                borderRadius: 24, padding: 32,
                border: `1px solid ${t.border}`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
                  <div>
                    <Label color={i === 0 ? 'rgba(255,255,255,0.6)' : col}>{s.caption}</Label>
                    <h3 style={{ fontFamily: t.display, fontSize: 26, fontWeight: 600, letterSpacing: -0.6, margin: '4px 0 0' }}>
                      {s.group}
                    </h3>
                  </div>
                  <div style={{
                    fontFamily: t.mono, fontSize: 11,
                    color: i === 0 ? 'rgba(255,255,255,0.5)' : t.inkFaint,
                  }}>0{i + 1} / 05</div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16 }}>
                  {s.primary.map((p) => (
                    <span key={p} style={{
                      fontSize: 12.5, padding: '5px 11px', borderRadius: 999,
                      background: i === 0 ? 'rgba(255,255,255,0.08)' : t.bg,
                      color: i === 0 ? t.tile : t.ink,
                      border: i === 0 ? '1px solid rgba(255,255,255,0.12)' : `1px solid ${t.border}`,
                    }}>{p}</span>
                  ))}
                  {s.more.map((p) => (
                    <span key={p} style={{
                      fontSize: 12.5, padding: '5px 11px',
                      color: i === 0 ? 'rgba(255,255,255,0.5)' : t.inkFaint,
                    }}>{p}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* EXPERIENCE ----------------------------------------------------- */}
      <div style={{ marginTop: 12 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '32px 12px 16px' }}>
          <h2 style={{ fontFamily: t.display, fontSize: 36, fontWeight: 600, letterSpacing: -1.2, margin: 0 }}>Experience.</h2>
          <span style={{ fontSize: 13, color: t.inkFaint }}>02 / 04 · 4 roles · 2023–now</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
          {/* Current role — big bento */}
          <div style={{
            gridColumn: 'span 6', background: t.tileDark, color: t.tile, borderRadius: 24, padding: 40,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: -150, right: -150, width: 480, height: 480,
              borderRadius: 240,
              background: `radial-gradient(circle, ${t.accent}30, transparent 65%)`,
            }} />
            <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontSize: 11, padding: '4px 10px', borderRadius: 999,
                    background: `${t.accent2}30`, color: t.accent, fontWeight: 600, letterSpacing: 0.5,
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: 3, background: t.accent, boxShadow: `0 0 8px ${t.accent}` }} />
                    CURRENT
                  </span>
                  <span style={{ fontFamily: t.mono, fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{D.experience[0].period}</span>
                </div>
                <h3 style={{ fontFamily: t.display, fontSize: 36, fontWeight: 600, letterSpacing: -1.2, margin: '0 0 12px', lineHeight: 1.1 }}>
                  {D.experience[0].role}
                </h3>
                <div style={{ fontSize: 16, marginBottom: 24 }}>
                  <span style={{ color: t.accent, fontWeight: 500 }}>{D.experience[0].company}</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}> · {D.experience[0].location}</span>
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,0.75)', margin: '0 0 24px' }}>
                  {D.experience[0].body}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {D.experience[0].stack.map((s) => (
                    <span key={s} style={{
                      fontFamily: t.mono, fontSize: 11, padding: '3px 8px', borderRadius: 6,
                      background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}>{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <div style={{
                  padding: '24px 28px', borderRadius: 16,
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <Label color={t.accent}>✦ Headline launch</Label>
                  <div style={{ fontFamily: t.display, fontSize: 20, fontWeight: 600, letterSpacing: -0.4, margin: '0 0 12px' }}>
                    "Go Ad-Free" Subscription
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', margin: 0 }}>
                    {D.experience[0].highlight.body}
                  </p>
                </div>
                <div style={{
                  marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8,
                }}>
                  {D.experience[0].metrics.map((m, j) => (
                    <div key={j} style={{
                      padding: '16px 14px', borderRadius: 12,
                      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                    }}>
                      <div style={{ fontFamily: t.display, fontSize: 24, fontWeight: 600, letterSpacing: -0.6, color: j === 0 ? t.accent : t.tile }}>
                        {m.value}
                      </div>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 4, letterSpacing: 0.3 }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Past roles — 3 wide tiles */}
          {D.experience.slice(1).map((e, i) => (
            <div key={i} style={{
              gridColumn: 'span 2', background: t.tile, borderRadius: 24, padding: 28,
              border: `1px solid ${t.border}`,
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ fontFamily: t.mono, fontSize: 11, color: t.inkFaint, marginBottom: 12, letterSpacing: 0.5 }}>
                {e.period}
              </div>
              <h3 style={{ fontFamily: t.display, fontSize: 19, fontWeight: 600, letterSpacing: -0.4, margin: '0 0 8px', lineHeight: 1.25 }}>
                {e.role}
              </h3>
              <div style={{ fontSize: 13, marginBottom: 16 }}>
                <span style={{ color: t.accent, fontWeight: 500 }}>{e.company}</span>
                <span style={{ color: t.inkFaint }}> · {e.location}</span>
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: t.inkSoft, margin: '0 0 16px', flex: 1 }}>
                {e.summary}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {e.stack.slice(0, 5).map((s) => (
                  <span key={s} style={{
                    fontFamily: t.mono, fontSize: 10.5, padding: '3px 7px', borderRadius: 6,
                    background: t.bg, color: t.inkSoft,
                  }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS ------------------------------------------------------- */}
      <div style={{ marginTop: 12 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '32px 12px 16px' }}>
          <h2 style={{ fontFamily: t.display, fontSize: 36, fontWeight: 600, letterSpacing: -1.2, margin: 0 }}>Selected projects.</h2>
          <span style={{ fontSize: 13, color: t.inkFaint }}>03 / 04 · 19 repositories</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
          {D.featuredProjects.map((p, i) => {
            const colors = [
              { bg: t.tile, accent: t.accent },
              { bg: t.tileAccent, accent: t.accent2 },
              { bg: t.tile, accent: t.accent3 },
              { bg: t.tileDark, accent: t.accent, ink: t.tile },
            ];
            const c = colors[i];
            const isLeft = i === 0;
            return (
              <div key={p.num} style={{
                gridColumn: isLeft ? 'span 4' : 'span 2',
                gridRow: i === 1 ? 'span 1' : i === 3 ? 'span 1' : 'span 1',
                background: c.bg, color: c.ink || t.ink,
                borderRadius: 24, padding: 28, border: `1px solid ${t.border}`,
                minHeight: 220, position: 'relative',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11,
                    padding: '4px 10px', borderRadius: 999,
                    background: c.ink ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
                    color: c.accent, fontWeight: 600, letterSpacing: 0.5,
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: 3, background: c.accent }} />
                    {p.tag.toUpperCase()}
                  </span>
                  <span style={{ fontFamily: t.mono, fontSize: 11, color: c.ink ? 'rgba(255,255,255,0.5)' : t.inkFaint }}>
                    {p.num} · {p.stack}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: t.display, fontSize: isLeft ? 36 : 24, fontWeight: 600,
                  letterSpacing: -1, margin: '20px 0 12px', lineHeight: 1.1,
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontSize: 14, lineHeight: 1.6,
                  color: c.ink ? 'rgba(255,255,255,0.7)' : t.inkSoft, margin: 0,
                  maxWidth: isLeft ? 560 : '100%',
                }}>
                  {p.desc}
                </p>
                <div style={{
                  position: 'absolute', bottom: 24, right: 28,
                  fontSize: 13, color: c.accent, fontWeight: 500,
                }}>View on GitHub ↗</div>
              </div>
            );
          })}

          {/* Repos by stack — full-width strip */}
          <div style={{
            gridColumn: 'span 6', background: t.tile, borderRadius: 24, padding: 32,
            border: `1px solid ${t.border}`,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
              <h3 style={{ fontFamily: t.display, fontSize: 20, fontWeight: 600, letterSpacing: -0.4, margin: 0 }}>
                More projects, by stack
              </h3>
              <a style={{ fontSize: 13, color: t.accent, textDecoration: 'none' }}>View all on GitHub →</a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
              {D.projectCategories.map((c, i) => (
                <div key={i} style={{
                  padding: 20, background: t.bg, borderRadius: 16,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: t.ink, letterSpacing: -0.2 }}>{c.cat}</div>
                    <span style={{ fontFamily: t.mono, fontSize: 11, color: t.accent }}>{c.count} {c.count === 1 ? 'repo' : 'repos'}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {c.items.slice(0, 8).map((it) => (
                      <span key={it.title} style={{
                        fontSize: 11.5, padding: '3px 8px', borderRadius: 6,
                        background: t.tile, color: t.ink, border: `1px solid ${t.border}`,
                      }}>{it.title}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT BENTO -------------------------------------------------- */}
      <div style={{ marginTop: 12 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '32px 12px 16px' }}>
          <h2 style={{ fontFamily: t.display, fontSize: 36, fontWeight: 600, letterSpacing: -1.2, margin: 0 }}>Let's talk.</h2>
          <span style={{ fontSize: 13, color: t.inkFaint }}>04 / 04</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
          {/* CTA big */}
          <div style={{
            gridColumn: 'span 4', background: t.tileDark, color: t.tile, borderRadius: 24, padding: 48,
            position: 'relative', overflow: 'hidden', minHeight: 280,
          }}>
            <div style={{
              position: 'absolute', bottom: -120, left: -120, width: 380, height: 380,
              borderRadius: 190, background: `radial-gradient(circle, ${t.accent}35, transparent 70%)`,
            }} />
            <div style={{ position: 'relative' }}>
              <Label color={t.accent}>Get in touch</Label>
              <h2 style={{
                fontFamily: t.display, fontSize: 64, fontWeight: 600, letterSpacing: -2.5,
                lineHeight: 1.02, margin: '20px 0 16px',
              }}>
                Let's build<br />something good.
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', margin: '0 0 28px', maxWidth: 520 }}>
                Open to growth & monetization roles, founding-team work, and ambitious 0→1 product opportunities.
              </p>
              <a style={{
                display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 22px',
                borderRadius: 12, background: t.accent, color: t.tileDark,
                fontSize: 15, fontWeight: 600, textDecoration: 'none',
              }}>
                {D.email} →
              </a>
            </div>
          </div>

          {/* Contact tiles */}
          {[
            { k: 'Phone',    v: D.phone,         sub: 'IST business hours', bg: t.tile,       col: t.ink },
            { k: 'LinkedIn', v: 'mohnish-nagar', sub: 'Connect with me',    bg: t.tileAccent, col: t.accent },
            { k: 'GitHub',   v: 'nagarmohnish',  sub: 'View my code',       bg: t.tile,       col: t.ink },
            { k: 'Resume',   v: 'PDF · 2 pages', sub: 'Updated May 2026',   bg: t.accent,     col: t.tile },
          ].map((c, i) => (
            <div key={c.k} style={{
              gridColumn: 'span 2', background: c.bg, color: c.col,
              borderRadius: 24, padding: 28, border: `1px solid ${t.border}`, minHeight: 130,
            }}>
              <Label color={c.bg === t.accent ? 'rgba(255,255,255,0.7)' : c.col === t.accent ? t.accent : t.inkFaint}>{c.k}</Label>
              <div style={{ fontFamily: t.display, fontSize: 20, fontWeight: 600, letterSpacing: -0.4 }}>{c.v}</div>
              <div style={{ fontSize: 12, color: c.bg === t.accent ? 'rgba(255,255,255,0.7)' : t.inkFaint, marginTop: 6 }}>{c.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        marginTop: 24, padding: '20px 24px',
        display: 'flex', justifyContent: 'space-between',
        fontSize: 12, color: t.inkFaint,
      }}>
        <span>© 2026 Mohnish Nagar · Bangalore, India</span>
        <span>Designed with intent · v2026.06</span>
      </div>
    </div>
  );
}

window.BentoDesign = BentoDesign;

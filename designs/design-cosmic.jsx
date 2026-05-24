/* Design 11 — Cosmic / Nebula
 * Deep space aesthetic. Star fields, nebula gradients, orbital motifs.
 * Restrained — the design is "set in space," not "made of clipart space."
 */

const cosmicTokens = {
  bg: '#05060E',
  bgLift: '#0B0E1C',
  panel: '#11142A',
  panelHi: '#1A1F3D',
  border: 'rgba(255,255,255,0.07)',
  borderHi: 'rgba(255,255,255,0.14)',
  ink: '#F5EFE3',
  inkSoft: '#A8A2B8',
  inkFaint: '#6B6680',
  star: '#FFE9B5',
  amber: '#FFA94D',
  pink: '#FF6FB3',
  cyan: '#67D3F5',
  violet: '#9F7AFF',
  display: '"Newsreader", "Source Serif Pro", Georgia, serif',
  sans: '"Inter", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

// Procedurally-generated star field as SVG data URL (cached)
function makeStarField(seed = 1, count = 180) {
  let s = seed;
  const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  let stars = '';
  for (let i = 0; i < count; i++) {
    const x = rnd() * 100;
    const y = rnd() * 100;
    const r = rnd() < 0.85 ? 0.4 + rnd() * 0.6 : 1 + rnd() * 1.2;
    const op = 0.3 + rnd() * 0.7;
    stars += `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${r.toFixed(2)}" fill="white" opacity="${op.toFixed(2)}"/>`;
  }
  return `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'>${stars}</svg>`)}")`;
}
const STAR_FIELD = makeStarField(7, 220);
const STAR_FIELD_SPARSE = makeStarField(13, 60);

function CosmicDesign() {
  const D = window.PORTFOLIO_DATA;
  const t = cosmicTokens;

  // Nebula = soft layered radial gradients
  const nebula = (cx, cy, c1, c2) => `
    radial-gradient(ellipse 900px 500px at ${cx}% ${cy}%, ${c1}55, transparent 55%),
    radial-gradient(ellipse 600px 400px at ${100 - cx}% ${cy - 20}%, ${c2}40, transparent 60%)
  `;

  const Eyebrow = ({ children, color }) => (
    <div style={{
      fontFamily: t.sans, fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase',
      color: color || t.amber, fontWeight: 600,
      display: 'inline-flex', alignItems: 'center', gap: 10,
    }}>
      <span style={{ display: 'inline-block', width: 24, height: 1, background: color || t.amber }} />
      {children}
    </div>
  );

  const Tag = ({ children, color }) => (
    <span style={{
      fontFamily: t.mono, fontSize: 11, padding: '3px 9px', borderRadius: 999,
      background: 'rgba(255,255,255,0.04)', color: color || t.inkSoft,
      border: `1px solid ${t.border}`, letterSpacing: 0.3,
    }}>{children}</span>
  );

  // Orbit ring SVG
  const Orbit = ({ size = 480, color = t.violet, planet = t.amber, dotted, style }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ position: 'absolute', ...style }}>
      <circle cx="50" cy="50" r="48" fill="none"
        stroke={color} strokeOpacity="0.4" strokeWidth="0.3"
        strokeDasharray={dotted ? '0.6 1.2' : ''} />
      <circle cx="98" cy="50" r="1.5" fill={planet} />
      <circle cx="50" cy="2" r="0.9" fill={t.cyan} />
    </svg>
  );

  return (
    <div style={{
      width: 1440, background: t.bg, color: t.ink, fontFamily: t.sans,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Base star field — covers entire artboard */}
      <div style={{
        position: 'absolute', inset: 0, backgroundImage: STAR_FIELD,
        backgroundSize: '1440px 1440px', opacity: 0.45, pointerEvents: 'none',
      }} />

      {/* TOP NAV ------------------------------------------------------- */}
      <header style={{
        position: 'relative', zIndex: 5,
        padding: '20px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: `1px solid ${t.border}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 16, position: 'relative',
            background: `radial-gradient(circle at 30% 30%, ${t.amber}, ${t.pink} 50%, ${t.violet} 100%)`,
            boxShadow: `0 0 16px ${t.amber}50, 0 0 32px ${t.pink}30`,
          }} />
          <div>
            <div style={{ fontFamily: t.display, fontSize: 18, letterSpacing: -0.4 }}>Mohnish Nagar</div>
            <div style={{ fontFamily: t.mono, fontSize: 10, color: t.inkFaint, letterSpacing: 1, textTransform: 'uppercase' }}>
              Operator · System BLR-01
            </div>
          </div>
        </div>
        <nav style={{ display: 'flex', gap: 32, fontFamily: t.mono, fontSize: 11, color: t.inkSoft, letterSpacing: 1.5, textTransform: 'uppercase' }}>
          {['Mission', 'Trajectory', 'Library', 'Toolkit', 'Transmission'].map((s) => (
            <a key={s} style={{ color: 'inherit', textDecoration: 'none' }}>{s}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: t.mono, fontSize: 11, padding: '4px 12px', borderRadius: 999,
            background: `${t.cyan}15`, color: t.cyan, border: `1px solid ${t.cyan}40`, letterSpacing: 1, textTransform: 'uppercase',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 3, background: t.cyan, boxShadow: `0 0 8px ${t.cyan}` }} />
            Signal · Online
          </span>
        </div>
      </header>

      {/* HERO — looking out a portal --------------------------------- */}
      <section style={{
        position: 'relative', padding: '80px 56px 100px',
        background: `${nebula(20, 30, t.violet, t.pink)}`,
      }}>
        {/* Distant orbit overlay */}
        <div style={{ position: 'absolute', top: -200, right: -200, opacity: 0.6 }}>
          <Orbit size={800} color={t.violet} planet={t.amber} />
          <Orbit size={620} color={t.cyan} planet={t.pink} dotted style={{ top: 90, left: 90 }} />
          <Orbit size={420} color={t.amber} planet={t.cyan} style={{ top: 190, left: 190 }} />
        </div>

        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'end' }}>
          <div>
            <Eyebrow>● Established 2023 · Operating from Earth, Bangalore</Eyebrow>
            <h1 style={{
              fontFamily: t.display, fontSize: 132, fontWeight: 400, lineHeight: 0.94,
              letterSpacing: -4.5, margin: '32px 0 0',
            }}>
              Growth &amp;<br />
              monetization,<br />
              <span style={{
                background: `linear-gradient(120deg, ${t.amber} 0%, ${t.pink} 50%, ${t.violet} 100%)`,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                fontStyle: 'italic',
              }}>shipped 0 → 1.</span>
            </h1>
            <p style={{
              fontFamily: t.display, fontSize: 22, fontStyle: 'italic', lineHeight: 1.5, color: t.inkSoft,
              maxWidth: 680, margin: '32px 0 0', letterSpacing: -0.3,
            }}>
              An operator's portfolio across digital publishing, AI/ML data products, and the early-stage startup ecosystem. Currently in the Founder's Office at LH2 Holdings — shipping monetization across 35+ U.S. content properties.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
              <a style={{
                padding: '14px 24px', borderRadius: 999, background: t.ink, color: t.bg,
                fontSize: 14, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', gap: 8,
              }}>Begin transmission →</a>
              <a style={{
                padding: '14px 24px', borderRadius: 999,
                background: 'rgba(255,255,255,0.04)', color: t.ink,
                border: `1px solid ${t.borderHi}`, fontSize: 14, fontWeight: 500, textDecoration: 'none',
              }}>Download mission log ↓</a>
            </div>
          </div>

          {/* Sun panel — a star with stats orbiting */}
          <div style={{
            position: 'relative', height: 460,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {/* Star core */}
            <div style={{
              position: 'absolute',
              width: 220, height: 220, borderRadius: 120,
              background: `radial-gradient(circle at 35% 35%, ${t.star}, ${t.amber} 35%, ${t.pink}60 70%, transparent 90%)`,
              boxShadow: `0 0 60px ${t.amber}80, 0 0 120px ${t.pink}40, 0 0 200px ${t.violet}30`,
            }} />
            {/* Orbit rings */}
            <Orbit size={460} color={t.violet} planet={t.amber} style={{ top: 0, left: 0 }} />
            <Orbit size={360} color={t.pink} planet={t.cyan} dotted style={{ top: 50, left: 50 }} />
            {/* Stat planets — pseudo-positioned */}
            {[
              { v: '35+',  l: 'properties',   x: '88%', y: '10%', col: t.amber },
              { v: '20K+', l: 'subs / 3mo',   x: '8%',  y: '35%', col: t.cyan },
              { v: '10%+', l: 'rev uplift',   x: '92%', y: '78%', col: t.pink },
              { v: '~50M', l: 'sessions',     x: '6%',  y: '78%', col: t.violet },
            ].map((s, i) => (
              <div key={i} style={{
                position: 'absolute', top: s.y, left: s.x, transform: 'translate(-50%, -50%)',
                padding: '8px 14px', borderRadius: 12,
                background: t.panel, border: `1px solid ${s.col}40`,
                boxShadow: `0 4px 16px rgba(0,0,0,0.4), 0 0 24px ${s.col}30`,
              }}>
                <div style={{ fontFamily: t.display, fontSize: 24, lineHeight: 1, letterSpacing: -0.6, color: s.col }}>{s.v}</div>
                <div style={{ fontFamily: t.mono, fontSize: 9, color: t.inkSoft, letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Horizon rule + coords */}
        <div style={{
          marginTop: 80, paddingTop: 16,
          borderTop: `1px solid ${t.borderHi}`,
          display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16,
          fontFamily: t.mono, fontSize: 10, color: t.inkFaint, letterSpacing: 1.5, textTransform: 'uppercase',
        }}>
          <span>Coord · 12.9716° N, 77.5946° E</span>
          <span>Stardate · 2026.05.26</span>
          <span>Heading · 0 → 1</span>
          <span>Velocity · Compounding</span>
          <span style={{ textAlign: 'right', color: t.cyan }}>● Telemetry nominal</span>
        </div>
      </section>

      {/* MISSION — ABOUT ---------------------------------------------- */}
      <section style={{ position: 'relative', padding: '80px 56px', borderTop: `1px solid ${t.border}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 64 }}>
          <div>
            <Eyebrow color={t.cyan}>01 · The mission</Eyebrow>
            <h2 style={{
              fontFamily: t.display, fontSize: 64, fontWeight: 400, lineHeight: 0.98,
              letterSpacing: -2, margin: '24px 0 24px',
            }}>
              Mission<br /><span style={{ fontStyle: 'italic', color: t.amber }}>control.</span>
            </h2>
            <p style={{ fontFamily: t.display, fontSize: 17, lineHeight: 1.65, color: t.inkSoft, margin: 0 }}>
              Growth and monetization operator across digital publishing, AI/ML data products, and the early-stage startup ecosystem.
            </p>

            <div style={{ marginTop: 32, padding: '20px 22px', borderRadius: 14, background: t.panel, border: `1px solid ${t.border}` }}>
              <Eyebrow color={t.amber}>Current orbit</Eyebrow>
              <div style={{ fontFamily: t.display, fontSize: 19, marginTop: 12, letterSpacing: -0.3, lineHeight: 1.3 }}>
                Founder's Office<br />
                <span style={{ color: t.amber }}>LH2 Holdings</span>
              </div>
              <div style={{ marginTop: 16, fontFamily: t.mono, fontSize: 11, color: t.inkFaint, letterSpacing: 0.5 }}>
                EST. · Jul 2025 · ONGOING
              </div>
            </div>
          </div>

          <div>
            <p style={{
              fontFamily: t.display, fontSize: 22, lineHeight: 1.55, color: t.ink,
              margin: '0 0 24px', letterSpacing: -0.3,
            }}>
              <span style={{
                fontFamily: t.display, fontSize: 88, fontWeight: 400, color: t.amber,
                float: 'left', lineHeight: 0.85, paddingRight: 14, paddingTop: 8, letterSpacing: -3,
              }}>H</span>
              ands-on across subscription systems, payments, GA4 instrumentation, newsletter growth, and funnel optimization. Launched the "Go Ad-Free" subscription on Shark Tank Blog, instrumented end-to-end conversion funnels across 4 assets, and scaled a newsletter to 20K subs in three months.
            </p>
            <p style={{ fontFamily: t.display, fontSize: 17, lineHeight: 1.7, color: t.inkSoft, margin: 0 }}>
              Previously the first employee at Opinium.ai (~40L pre-seed) where I built an NLP/LLM social intelligence product from 0→1, and assessed 500+ startups at PedalStart.
            </p>

            {/* Disciplines as constellations */}
            <div style={{ marginTop: 48 }}>
              <Eyebrow color={t.pink}>Five disciplines · The toolkit</Eyebrow>
              <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
                {D.skills.map((s, i) => {
                  const cols = [t.amber, t.cyan, t.pink, t.violet, t.star];
                  return (
                    <div key={i} style={{
                      padding: 16, borderRadius: 12,
                      background: t.panel, border: `1px solid ${cols[i]}30`,
                      minHeight: 160,
                    }}>
                      <div style={{
                        width: 10, height: 10, borderRadius: 5, background: cols[i],
                        boxShadow: `0 0 12px ${cols[i]}`, marginBottom: 12,
                      }} />
                      <div style={{ fontFamily: t.display, fontSize: 15, fontWeight: 500, letterSpacing: -0.3, lineHeight: 1.2, marginBottom: 8 }}>
                        {s.group}
                      </div>
                      <div style={{ fontFamily: t.mono, fontSize: 9, color: t.inkFaint, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 }}>
                        ◇ {s.caption}
                      </div>
                      <div style={{ fontFamily: t.mono, fontSize: 11, color: t.inkSoft, lineHeight: 1.55 }}>
                        {s.primary.slice(0, 3).join(' · ')}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAJECTORY — EXPERIENCE ------------------------------------- */}
      <section style={{
        position: 'relative', padding: '80px 56px', borderTop: `1px solid ${t.border}`,
        background: nebula(85, 60, t.violet, t.cyan),
      }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <Eyebrow color={t.violet}>02 · The trajectory</Eyebrow>
          <h2 style={{
            fontFamily: t.display, fontSize: 80, fontWeight: 400, lineHeight: 0.96,
            letterSpacing: -2.8, margin: '20px 0 16px',
          }}>
            A four-year <span style={{ fontStyle: 'italic', color: t.amber }}>trajectory.</span>
          </h2>
          <p style={{ fontFamily: t.display, fontSize: 18, color: t.inkSoft, margin: '0 auto', maxWidth: 640, fontStyle: 'italic', lineHeight: 1.5 }}>
            Plotted from investor relations in 2023 to growth & monetization at LH2 Holdings today.
          </p>
        </div>

        {/* Trajectory timeline strip */}
        <div style={{ marginBottom: 32, padding: '0 24px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 28, left: 24, right: 24, height: 1, background: t.borderHi }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
            {D.experience.slice().reverse().map((e, i) => {
              const cols = [t.inkFaint, t.cyan, t.pink, t.amber];
              return (
                <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
                  <div style={{
                    width: 16, height: 16, borderRadius: 8, margin: '20px auto 12px',
                    background: cols[i], boxShadow: `0 0 16px ${cols[i]}`,
                    border: `2px solid ${t.bg}`, position: 'relative', zIndex: 1,
                  }} />
                  <div style={{ fontFamily: t.mono, fontSize: 10, color: t.inkSoft, letterSpacing: 0.5 }}>{e.period}</div>
                  <div style={{ fontFamily: t.display, fontSize: 16, color: cols[i], marginTop: 4, letterSpacing: -0.3 }}>
                    {e.company}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        {D.experience.map((e, i) => (
          <article key={i} style={{
            padding: 36, borderRadius: 18, marginBottom: 12,
            background: i === 0 ? `linear-gradient(135deg, ${t.panelHi} 0%, ${t.panel} 100%)` : t.panel,
            border: i === 0 ? `1px solid ${t.amber}50` : `1px solid ${t.border}`,
            position: 'relative', overflow: 'hidden',
          }}>
            {i === 0 && (
              <div style={{
                position: 'absolute', top: -200, right: -200, width: 500, height: 500, borderRadius: 250,
                background: `radial-gradient(circle, ${t.amber}25, transparent 60%)`,
              }} />
            )}
            <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48 }}>
              <div>
                <div style={{ fontFamily: t.mono, fontSize: 11, color: t.inkFaint, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>
                  {e.period}
                </div>
                {e.current ? (
                  <Tag color={t.amber}>● Active orbit</Tag>
                ) : (
                  <Tag color={t.inkFaint}>○ Past trajectory</Tag>
                )}
              </div>
              <div>
                <h3 style={{ fontFamily: t.display, fontSize: 28, fontWeight: 400, letterSpacing: -0.7, lineHeight: 1.15, margin: '0 0 8px' }}>
                  {e.role}
                </h3>
                <div style={{ fontFamily: t.display, fontSize: 17, fontStyle: 'italic', marginBottom: 20, letterSpacing: -0.2 }}>
                  <span style={{ color: t.amber }}>{e.company}</span> <span style={{ color: t.inkFaint }}>· {e.location}</span>
                </div>
                <p style={{ fontFamily: t.display, fontSize: 15, lineHeight: 1.7, color: t.inkSoft, margin: '0 0 16px' }}>
                  {e.body}
                </p>
                {e.highlight && (
                  <div style={{
                    padding: '20px 24px', borderRadius: 12, marginTop: 16,
                    background: `${t.amber}0E`, border: `1px solid ${t.amber}40`,
                  }}>
                    <Eyebrow color={t.amber}>★ Headline launch</Eyebrow>
                    <p style={{ fontFamily: t.display, fontSize: 15, fontStyle: 'italic', lineHeight: 1.6, color: t.ink, margin: '12px 0 0', letterSpacing: -0.2 }}>
                      {e.highlight.body}
                    </p>
                  </div>
                )}
                {e.metrics && (
                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8,
                    marginTop: 20,
                  }}>
                    {e.metrics.map((m, j) => {
                      const cols = [t.amber, t.cyan, t.pink, t.violet];
                      return (
                        <div key={j} style={{
                          padding: '14px 16px', borderRadius: 10,
                          background: 'rgba(255,255,255,0.025)', border: `1px solid ${t.border}`,
                        }}>
                          <div style={{ fontFamily: t.display, fontSize: 26, lineHeight: 1, letterSpacing: -0.6, color: cols[j] }}>
                            {m.value}
                          </div>
                          <div style={{ fontFamily: t.mono, fontSize: 10, color: t.inkFaint, marginTop: 8, letterSpacing: 0.8, textTransform: 'uppercase' }}>
                            {m.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 20 }}>
                  {e.stack.map((s) => <Tag key={s}>{s}</Tag>)}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ORBITAL LIBRARY — PROJECTS ---------------------------------- */}
      <section style={{
        position: 'relative', padding: '80px 56px', borderTop: `1px solid ${t.border}`,
      }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <Eyebrow color={t.pink}>03 · The library</Eyebrow>
          <h2 style={{
            fontFamily: t.display, fontSize: 80, fontWeight: 400, lineHeight: 0.96,
            letterSpacing: -2.8, margin: '20px 0 16px',
          }}>
            The <span style={{ fontStyle: 'italic', color: t.pink }}>orbital</span> library.
          </h2>
          <p style={{ fontFamily: t.display, fontSize: 18, color: t.inkSoft, margin: '0 auto', maxWidth: 640, fontStyle: 'italic', lineHeight: 1.5 }}>
            Nineteen objects, four highlighted — newsletter analytics, subscription pipelines, AI tooling, and content infrastructure.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          {D.featuredProjects.map((p, i) => {
            const palette = [
              { glow: t.amber, edge: `${t.amber}40` },
              { glow: t.pink,  edge: `${t.pink}40` },
              { glow: t.cyan,  edge: `${t.cyan}40` },
              { glow: t.violet, edge: `${t.violet}40` },
            ][i];
            return (
              <article key={p.num} style={{
                padding: 32, borderRadius: 18,
                background: t.panel, border: `1px solid ${t.border}`,
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: -120, right: -120, width: 280, height: 280, borderRadius: 140,
                  background: `radial-gradient(circle, ${palette.glow}30, transparent 70%)`,
                }} />
                <div style={{ position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 18,
                      background: `radial-gradient(circle at 35% 35%, ${palette.glow}, ${palette.glow}80 60%, transparent 80%)`,
                      boxShadow: `0 0 16px ${palette.glow}80`,
                    }} />
                    <Tag color={palette.glow}>{p.num} · {p.tag.toUpperCase()}</Tag>
                  </div>
                  <h3 style={{ fontFamily: t.display, fontSize: 28, fontWeight: 400, letterSpacing: -0.8, lineHeight: 1.1, margin: '12px 0' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: t.display, fontSize: 15, lineHeight: 1.6, color: t.inkSoft, margin: 0 }}>
                    {p.desc}
                  </p>
                  <div style={{
                    marginTop: 24, paddingTop: 16, borderTop: `1px solid ${t.border}`,
                    display: 'flex', justifyContent: 'space-between',
                    fontFamily: t.mono, fontSize: 11, letterSpacing: 1, textTransform: 'uppercase',
                  }}>
                    <span style={{ color: t.inkFaint }}>{p.stack}</span>
                    <span style={{ color: palette.glow }}>Open repo ↗</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Catalog */}
        <div style={{ marginTop: 48 }}>
          <Eyebrow color={t.cyan}>The catalog · {D.projectCategories.reduce((a, c) => a + c.count, 0)} additional objects</Eyebrow>
          <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {D.projectCategories.map((c, i) => {
              const cols = [t.amber, t.cyan, t.pink, t.violet];
              return (
                <div key={c.cat} style={{
                  padding: 24, borderRadius: 14,
                  background: t.panel, border: `1px solid ${t.border}`,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
                    <div style={{ fontFamily: t.display, fontSize: 17, fontWeight: 500, letterSpacing: -0.3 }}>
                      <span style={{ color: cols[i] }}>◇</span> {c.cat}
                    </div>
                    <Tag color={cols[i]}>{c.count} objects</Tag>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {c.items.map((it) => (
                      <span key={it.title} style={{
                        fontFamily: t.mono, fontSize: 11, padding: '3px 8px', borderRadius: 6,
                        background: 'rgba(255,255,255,0.025)', color: t.inkSoft,
                        border: `1px solid ${t.border}`,
                      }}>
                        {it.title}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRANSMISSION — CONTACT -------------------------------------- */}
      <section style={{
        position: 'relative', padding: '100px 56px',
        borderTop: `1px solid ${t.border}`,
        background: nebula(50, 30, t.pink, t.violet),
      }}>
        {/* big radial */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%', width: 800, height: 800,
          borderRadius: 400, transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle, ${t.pink}10 0%, ${t.violet}08 30%, transparent 70%)`,
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
          <Eyebrow color={t.pink}>04 · Open channel</Eyebrow>
          <h2 style={{
            fontFamily: t.display, fontSize: 104, fontWeight: 400, lineHeight: 0.94,
            letterSpacing: -3.5, margin: '24px 0 24px',
          }}>
            Send a<br />
            <span style={{
              background: `linear-gradient(120deg, ${t.amber} 0%, ${t.pink} 50%, ${t.violet} 100%)`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              fontStyle: 'italic',
            }}>transmission.</span>
          </h2>
          <p style={{
            fontFamily: t.display, fontSize: 20, fontStyle: 'italic', lineHeight: 1.5, color: t.inkSoft,
            margin: '0 auto 48px', maxWidth: 640, letterSpacing: -0.3,
          }}>
            Open to growth & monetization roles, founding-team work, and ambitious 0→1 product opportunities. Channels listed below.
          </p>
        </div>

        <div style={{
          position: 'relative', marginTop: 32, padding: 8, borderRadius: 20,
          background: t.panel, border: `1px solid ${t.border}`,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4,
        }}>
          {[
            { k: 'Primary channel', v: D.email,         sub: 'mohnish238@gmail.com', col: t.amber,  icon: '✦' },
            { k: 'Voice line',      v: D.phone,         sub: 'IST business hours',  col: t.cyan,   icon: '◐' },
            { k: 'Network',         v: 'mohnish-nagar', sub: 'Connect on LinkedIn',  col: t.pink,   icon: '◇' },
            { k: 'Code archive',    v: 'nagarmohnish',  sub: 'Visit GitHub',         col: t.violet, icon: '◈' },
          ].map((c) => (
            <div key={c.k} style={{
              padding: '28px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)',
              position: 'relative',
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: 16, marginBottom: 16,
                background: `radial-gradient(circle at 30% 30%, ${c.col}, ${c.col}80 60%, transparent)`,
                boxShadow: `0 0 16px ${c.col}80`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: t.bg, fontSize: 14, fontWeight: 700,
              }}>{c.icon}</div>
              <div style={{ fontFamily: t.mono, fontSize: 10, color: c.col, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 6 }}>
                {c.k}
              </div>
              <div style={{ fontFamily: t.display, fontSize: 16, color: t.ink, letterSpacing: -0.2 }}>{c.v}</div>
              <div style={{ fontFamily: t.mono, fontSize: 11, color: t.inkFaint, marginTop: 6, letterSpacing: 0.3 }}>{c.sub}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: 64, paddingTop: 24, borderTop: `1px solid ${t.border}`,
          display: 'flex', justifyContent: 'space-between',
          fontFamily: t.mono, fontSize: 10, color: t.inkFaint, letterSpacing: 1.5, textTransform: 'uppercase',
        }}>
          <span>© MMXXVI Mohnish Nagar · Earth · Bangalore</span>
          <span>● Telemetry · OK</span>
          <span>End of transmission</span>
        </div>
      </section>
    </div>
  );
}

window.CosmicDesign = CosmicDesign;
